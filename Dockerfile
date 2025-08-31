FROM node:20-bookworm-slim AS base
WORKDIR /app
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
ENV NEXT_OUTPUT_MODE=standalone

# Install required system packages once and reuse across stages
RUN apt-get update && apt-get install -y --no-install-recommends \
  openssl ca-certificates dumb-init \
  && rm -rf /var/lib/apt/lists/*

FROM base AS deps
COPY package.json package-lock.json ./
# Install all deps including devDeps for building (tolerate peer conflicts)
RUN npm ci --include=dev --no-audit --fund=false --legacy-peer-deps

FROM deps AS builder
COPY . .
# Generate Prisma Client before building Next
RUN npx prisma generate
# Build Next.js (standalone output controlled via ENV)
RUN npm run build

FROM base AS runner
ENV PORT=8080
ENV HOSTNAME=0.0.0.0
WORKDIR /app/.next/standalone

# Copy necessary artifacts from builder
COPY --from=builder /app/public ./public
COPY --from=builder /app/prisma ./prisma
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
# Ensure Prisma engines (generated) are available at runtime
COPY --from=builder /app/node_modules/.prisma ./node_modules/.prisma

EXPOSE 8080
ENTRYPOINT ["/usr/bin/dumb-init", "--"]
CMD ["node", "app/server.js"]


