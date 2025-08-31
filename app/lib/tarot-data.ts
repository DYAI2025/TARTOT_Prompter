
export interface Archetype {
  id: string;
  name: string;
  description: string;
  attributes: string[];
  symbols: string[];
  dominantColor: string;
}

export interface ColorPalette {
  name: string;
  hex: string;
  category: 'warm-earth' | 'cool-blue-grey' | 'brown-green' | 'golden' | 'warm-brown' | 'special';
}

export interface Decoration {
  id: string;
  name: string;
  category: 'animals' | 'objects' | 'background' | 'architectural';
  description: string;
}

export const ARCHETYPS: Archetype[] = [
  {
    id: 'innocent',
    name: 'The Innocent',
    description: 'Pure, hopeful, trusting soul seeking happiness and fulfillment',
    attributes: ['white robes', 'youthful appearance', 'gentle smile', 'open posture'],
    symbols: ['white flowers', 'clear sky', 'dove', 'sunrise'],
    dominantColor: '#deceb1'
  },
  {
    id: 'magician',
    name: 'The Magician',
    description: 'Master of manifestation, wielding will and skill',
    attributes: ['pointing wand upward', 'pointing downward', 'infinity symbol', 'confident stance'],
    symbols: ['wand', 'cup', 'sword', 'pentacle', 'infinity symbol', 'red roses', 'white lilies'],
    dominantColor: '#c1a96f'
  },
  {
    id: 'ruler',
    name: 'The Ruler',
    description: 'Natural leader with authority, responsibility and control',
    attributes: ['golden crown', 'royal robes', 'scepter', 'throne', 'commanding presence'],
    symbols: ['crown', 'scepter', 'orb', 'throne', 'royal symbols'],
    dominantColor: '#c5af83'
  },
  {
    id: 'empress',
    name: 'The Empress',
    description: 'Divine feminine, motherhood, nature, and abundance',
    attributes: ['flowing gown', 'crown of stars', 'pregnant figure', 'natural setting'],
    symbols: ['wheat', 'pomegranates', 'venus symbol', 'crown of stars', 'flowing river'],
    dominantColor: '#d0c9b6'
  },
  {
    id: 'rebel',
    name: 'The Rebel',
    description: 'Revolutionary spirit, breaking conventions, catalyst for change',
    attributes: ['dynamic pose', 'defiant expression', 'unconventional attire', 'fiery aura'],
    symbols: ['lightning bolt', 'broken chains', 'phoenix', 'flames'],
    dominantColor: '#af6c4d'
  },
  {
    id: 'sage',
    name: 'The Sage',
    description: 'Wise teacher, seeker of truth and understanding',
    attributes: ['long beard', 'robes of wisdom', 'scroll or book', 'contemplative pose'],
    symbols: ['scroll', 'lantern', 'owl', 'books', 'staff of wisdom'],
    dominantColor: '#6e756b'
  },
  {
    id: 'hierophant',
    name: 'The Hierophant',
    description: 'Spiritual authority, traditional wisdom, religious guidance',
    attributes: ['religious robes', 'papal crown', 'blessing gesture', 'sacred symbols'],
    symbols: ['crossed keys', 'papal crown', 'religious symbols', 'pillars'],
    dominantColor: '#384141'
  },
  {
    id: 'lovers',
    name: 'The Lovers',
    description: 'Union, choice, harmony between opposites',
    attributes: ['two figures', 'angel above', 'garden setting', 'tree of knowledge'],
    symbols: ['angel', 'tree of life', 'tree of knowledge', 'sun', 'mountain'],
    dominantColor: '#c4b6a2'
  },
  {
    id: 'warrior',
    name: 'The Warrior',
    description: 'Courage, determination, willpower in battle',
    attributes: ['armor', 'sword', 'shield', 'battle-ready stance'],
    symbols: ['sword', 'shield', 'armor', 'warhorse', 'banner'],
    dominantColor: '#5f6457'
  },
  {
    id: 'healer',
    name: 'The Healer',
    description: 'Compassion, healing powers, spiritual guidance',
    attributes: ['healing hands', 'gentle expression', 'flowing robes', 'healing aura'],
    symbols: ['healing herbs', 'crystal', 'dove', 'water', 'light'],
    dominantColor: '#3f535d'
  }
];

export const COLOR_PALETTE: ColorPalette[] = [
  // Warm Earth Tones
  { name: 'Warm Beige', hex: '#c4b6a2', category: 'warm-earth' },
  { name: 'Soft Cream', hex: '#d0c9b6', category: 'warm-earth' },
  { name: 'Light Beige', hex: '#deceb1', category: 'warm-earth' },
  { name: 'Golden Beige', hex: '#dac29f', category: 'warm-earth' },
  { name: 'Neutral Beige', hex: '#c9c0b0', category: 'warm-earth' },
  
  // Cool Blue-Grey Tones
  { name: 'Dark Slate', hex: '#384141', category: 'cool-blue-grey' },
  { name: 'Steel Blue', hex: '#354343', category: 'cool-blue-grey' },
  { name: 'Blue Grey', hex: '#3f535d', category: 'cool-blue-grey' },
  { name: 'Deep Navy', hex: '#1f303e', category: 'cool-blue-grey' },
  { name: 'Midnight Blue', hex: '#23384a', category: 'cool-blue-grey' },
  
  // Mid-tone Brown-Green
  { name: 'Sage Green', hex: '#5f6457', category: 'brown-green' },
  { name: 'Forest Green', hex: '#606a63', category: 'brown-green' },
  { name: 'Olive Grey', hex: '#6e756b', category: 'brown-green' },
  { name: 'Pine Green', hex: '#4a5956', category: 'brown-green' },
  { name: 'Sea Green', hex: '#546265', category: 'brown-green' },
  
  // Golden Accents
  { name: 'Antique Gold', hex: '#c1a96f', category: 'golden' },
  { name: 'Brass Gold', hex: '#c5af83', category: 'golden' },
  { name: 'Pale Gold', hex: '#b7ae96', category: 'golden' },
  { name: 'Deep Gold', hex: '#ad9563', category: 'golden' },
  { name: 'Muted Gold', hex: '#c3af80', category: 'golden' },
  
  // Warm Browns
  { name: 'Taupe Brown', hex: '#918761', category: 'warm-brown' },
  { name: 'Light Brown', hex: '#958460', category: 'warm-brown' },
  { name: 'Mushroom', hex: '#91866d', category: 'warm-brown' },
  { name: 'Sage Brown', hex: '#8c907d', category: 'warm-brown' },
  { name: 'Golden Brown', hex: '#ae935f', category: 'warm-brown' },
  
  // Special Colors
  { name: 'Rebel Red', hex: '#af6c4d', category: 'special' },
  { name: 'Warm Red', hex: '#ad6e4f', category: 'special' },
  { name: 'Deep Red', hex: '#96543f', category: 'special' },
  { name: 'Mystic Purple', hex: '#75637b', category: 'special' },
  { name: 'Lavender Grey', hex: '#a99ba2', category: 'special' },
  { name: 'Deep Violet', hex: '#514461', category: 'special' }
];

export const DECORATIONS: Decoration[] = [
  // Animals
  { id: 'lion', name: 'Löwe', category: 'animals', description: 'Symbol für Mut und Stärke' },
  { id: 'dove', name: 'Taube', category: 'animals', description: 'Symbol für Frieden und Spiritualität' },
  { id: 'owl', name: 'Eule', category: 'animals', description: 'Symbol für Weisheit und Erkenntnis' },
  { id: 'phoenix', name: 'Phönix', category: 'animals', description: 'Symbol für Wiedergeburt und Transformation' },
  { id: 'serpent', name: 'Schlange', category: 'animals', description: 'Symbol für Weisheit und Heilung' },
  
  // Objects
  { id: 'crown', name: 'Krone', category: 'objects', description: 'Symbol für Macht und Autorität' },
  { id: 'scepter', name: 'Zepter', category: 'objects', description: 'Symbol für Herrschaft und Kontrolle' },
  { id: 'scroll', name: 'Schriftrolle', category: 'objects', description: 'Symbol für Wissen und Weisheit' },
  { id: 'chalice', name: 'Kelch', category: 'objects', description: 'Symbol für Spiritualität und Emotion' },
  { id: 'sword', name: 'Schwert', category: 'objects', description: 'Symbol für Kraft und Gerechtigkeit' },
  { id: 'scales', name: 'Waage', category: 'objects', description: 'Symbol für Gerechtigkeit und Balance' },
  { id: 'lantern', name: 'Laterne', category: 'objects', description: 'Symbol für Führung und Erleuchtung' },
  { id: 'key', name: 'Schlüssel', category: 'objects', description: 'Symbol für Geheimnisse und Zugang' },
  
  // Background Elements
  { id: 'stars', name: 'Sterne', category: 'background', description: 'Symbol für göttliche Führung' },
  { id: 'mountains', name: 'Berge', category: 'background', description: 'Symbol für Stabilität und Herausforderung' },
  { id: 'water', name: 'Wasser', category: 'background', description: 'Symbol für Emotion und Unterbewusstsein' },
  { id: 'clouds', name: 'Wolken', category: 'background', description: 'Symbol für Spiritualität und Träume' },
  { id: 'roses', name: 'Rosen', category: 'background', description: 'Symbol für Liebe und Leidenschaft' },
  { id: 'lilies', name: 'Lilien', category: 'background', description: 'Symbol für Reinheit und Wiedergeburt' },
  
  // Architectural
  { id: 'columns', name: 'Säulen', category: 'architectural', description: 'Symbol für Stabilität und Ordnung' },
  { id: 'arches', name: 'Bögen', category: 'architectural', description: 'Symbol für Durchgang und Transformation' },
  { id: 'throne', name: 'Thron', category: 'architectural', description: 'Symbol für Macht und Autorität' },
  { id: 'altar', name: 'Altar', category: 'architectural', description: 'Symbol für Opfer und Spiritualität' },
  { id: 'temple', name: 'Tempel', category: 'architectural', description: 'Symbol für Heiligkeit und Weisheit' }
];

export const ROMAN_NUMERALS = [
  'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X', 
  'XI', 'XII', 'XIII', 'XIV', 'XV', 'XVI', 'XVII', 'XVIII', 'XIX', 'XX', 'XXI'
];

export const MASTER_TEMPLATE = `Create a tarot card in the exact style of classical illuminated manuscripts with modern digital illustration techniques.

**COMPOSITION & FORMAT:**
- Vertical format, aspect ratio 2:3
- Thick ornate golden frame with rounded corners and subtle decorative elements
- Central figure positioned in architectural niche or throne setting
- Title in elegant serif capitals at top, Roman numeral at bottom

**COLOR PALETTE (EXACT SPECIFICATIONS):**
- Primary warm earth tones: #c4b6a2, #d0c9b6, #deceb1, #dac29f
- Cool blue-grey shadows: #384141, #354343, #3f535d, #1f303e  
- Mid-tone brown-greens: #5f6457, #606a63, #6e756b, #4a5956
- Golden accents: #c1a96f, #c5af83, #b7ae96, #ad9563
- Warm browns: #918761, #958460, #91866d, #8c907d
- Dominant Color: {DOMINANT_COLOR}

**ILLUSTRATION STYLE:**
- Clean, defined contours without sketchy lines
- Medium to thick consistent line weights
- Soft gradients and shading, no harsh shadows
- Subtle fabric textures and metallic gleams
- Stylized-realistic approach, not photorealistic
- High detail level without visual clutter

**FIGURE SPECIFICATIONS:**
- {CHARACTER_ARCHETYPE}: {CHARACTER_DESCRIPTION}
- Frontal or slightly turned pose, dignified and static
- Classical idealized proportions
- Calm, noble facial expression with timeless quality
- Rich historical garments with detailed textures
- Golden circular halo/nimbus around head
- Symbolic Attributes: {SYMBOLIC_ATTRIBUTES}

**ARCHITECTURAL BACKGROUND:**
- Gothic-classical architecture style
- Elements: arches, columns, niches, throne settings
- Muted stone and metal tones
- Central perspective framing the figure
- Background Elements: {BACKGROUND_ELEMENTS}

**LIGHTING & ATMOSPHERE:**
- Soft, diffused lighting from front-upper angle
- Gentle natural shadows with soft edges
- Warm, inviting but dignified atmosphere
- Balanced contrast between light and dark areas
- Light focuses attention on central figure

**TYPOGRAPHY:**
- Title: "{CARD_TITLE}" in elegant serif capitals, golden color
- Roman numeral: "{ROMAN_NUMERAL}" centered at bottom, smaller golden text
- Font style: classical, highly legible, ornate but not decorative

**SYMBOLIC ELEMENTS:**
- Golden halo mandatory for all figures
- Specific Symbols: {SPECIFIC_SYMBOLS}
- Decorative Elements: {DECORATIVE_ELEMENTS}
- Ornamental details in clothing and background
- Color symbolism: gold for divinity, earth tones for grounding

**TECHNICAL SPECIFICATIONS:**
- Digital illustration with traditional manuscript feel
- Smooth color transitions and professional finish
- Consistent style matching classical tarot iconography
- High contrast between figure and background for clarity`;
