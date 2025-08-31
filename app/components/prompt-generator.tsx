
"use client"

import React, { useState } from 'react';
import { 
  ARCHETYPS, 
  COLOR_PALETTE, 
  DECORATIONS, 
  ROMAN_NUMERALS, 
  MASTER_TEMPLATE,
  type Archetype 
} from '@/lib/tarot-data';
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { 
  Copy, 
  RefreshCw, 
  Sparkles, 
  Crown, 
  Palette, 
  Star,
  Scroll 
} from 'lucide-react';

interface PromptGeneratorProps {}

export default function PromptGenerator({}: PromptGeneratorProps) {
  const [selectedArchetype, setSelectedArchetype] = useState<string>('');
  const [selectedColors, setSelectedColors] = useState<string[]>([]);
  const [selectedDecorations, setSelectedDecorations] = useState<string[]>([]);
  const [cardTitle, setCardTitle] = useState<string>('');
  const [romanNumeral, setRomanNumeral] = useState<string>('');
  const [generatedPrompt, setGeneratedPrompt] = useState<string>('');

  const generatePrompt = () => {
    if (!selectedArchetype || !cardTitle || !romanNumeral) return;

    const archetype = ARCHETYPS?.find(a => a?.id === selectedArchetype);
    if (!archetype) return;

    const selectedColorObjects = selectedColors?.map(colorHex => 
      COLOR_PALETTE?.find(c => c?.hex === colorHex)
    )?.filter(Boolean) ?? [];

    const selectedDecorationObjects = selectedDecorations?.map(decId => 
      DECORATIONS?.find(d => d?.id === decId)
    )?.filter(Boolean) ?? [];

    const colorList = selectedColorObjects?.map(c => `${c?.name || ''} (${c?.hex || ''})`);
    const decorationList = selectedDecorationObjects?.map(d => `${d?.name || ''} - ${d?.description || ''}`);

    let prompt = MASTER_TEMPLATE;
    
    // Replace template variables
    prompt = prompt.replace('{DOMINANT_COLOR}', archetype?.dominantColor || '');
    prompt = prompt.replace('{CHARACTER_ARCHETYPE}', archetype?.name || '');
    prompt = prompt.replace('{CHARACTER_DESCRIPTION}', archetype?.description || '');
    prompt = prompt.replace('{SYMBOLIC_ATTRIBUTES}', archetype?.attributes?.join?.(', ') || '');
    prompt = prompt.replace('{CARD_TITLE}', cardTitle?.toUpperCase() || '');
    prompt = prompt.replace('{ROMAN_NUMERAL}', romanNumeral || '');
    prompt = prompt.replace('{SPECIFIC_SYMBOLS}', archetype?.symbols?.join?.(', ') || '');
    prompt = prompt.replace('{BACKGROUND_ELEMENTS}', 'Gothic-classical architecture with ' + (decorationList?.join?.(', ') || 'ornamental details'));
    prompt = prompt.replace('{DECORATIVE_ELEMENTS}', decorationList?.join?.(', ') || 'classical ornaments');

    if (colorList?.length > 0) {
      prompt += `\n\n**ADDITIONAL COLOR EMPHASIS:**\n- Featured colors: ${colorList?.join?.(', ') || ''}`;
    }

    setGeneratedPrompt(prompt);
  };

  const copyToClipboard = async () => {
    try {
      await navigator?.clipboard?.writeText(generatedPrompt || '');
      // You could add a toast notification here
    } catch (err) {
      // Fallback for older browsers
      const textArea = document?.createElement?.('textarea') || null;
      if (textArea) {
        textArea.value = generatedPrompt || '';
        document?.body?.appendChild?.(textArea);
        textArea?.focus?.();
        textArea?.select?.();
        try {
          document?.execCommand?.('copy');
        } catch (err) {
          console?.error?.('Failed to copy: ', err);
        }
        document?.body?.removeChild?.(textArea);
      }
    }
  };

  const resetForm = () => {
    setSelectedArchetype('');
    setSelectedColors([]);
    setSelectedDecorations([]);
    setCardTitle('');
    setRomanNumeral('');
    setGeneratedPrompt('');
  };

  const toggleColor = (colorHex: string) => {
    setSelectedColors(prev => 
      prev?.includes?.(colorHex) 
        ? prev?.filter?.(c => c !== colorHex) ?? []
        : [...(prev ?? []), colorHex]
    );
  };

  const toggleDecoration = (decorationId: string) => {
    setSelectedDecorations(prev => 
      prev?.includes?.(decorationId) 
        ? prev?.filter?.(d => d !== decorationId) ?? []
        : [...(prev ?? []), decorationId]
    );
  };

  const groupedDecorations = DECORATIONS?.reduce?.((acc, decoration) => {
    const category = decoration?.category || 'other';
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category]?.push?.(decoration);
    return acc;
  }, {} as Record<string, typeof DECORATIONS>) || {};

  const groupedColors = COLOR_PALETTE?.reduce?.((acc, color) => {
    const category = color?.category || 'other';
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category]?.push?.(color);
    return acc;
  }, {} as Record<string, typeof COLOR_PALETTE>) || {};

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-100 p-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 p-8 bg-gradient-to-r from-amber-900 to-orange-800 text-white rounded-2xl shadow-lg">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Crown className="w-8 h-8 text-yellow-300" />
            <h1 className="text-4xl font-bold">Tarotkarten Prompt Generator</h1>
            <Star className="w-8 h-8 text-yellow-300" />
          </div>
          <p className="text-xl opacity-90">Erstelle detaillierte Prompts für Tarotkarten basierend auf extrahierter Designsprache</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column - Input Controls */}
          <div className="space-y-6">
            {/* Archetype Selection */}
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="flex items-center gap-2 mb-4">
                <Sparkles className="w-5 h-5 text-amber-600" />
                <Label className="text-lg font-semibold text-gray-800">Archetyp auswählen</Label>
              </div>
              <Select value={selectedArchetype || ''} onValueChange={setSelectedArchetype}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Wähle einen Archetyp..." />
                </SelectTrigger>
                <SelectContent>
                  {ARCHETYPS?.map?.((archetype) => (
                    <SelectItem key={archetype?.id || 'fallback'} value={archetype?.id || 'fallback'}>
                      <div>
                        <div className="font-medium">{archetype?.name}</div>
                        <div className="text-sm text-muted-foreground">{archetype?.description}</div>
                      </div>
                    </SelectItem>
                  )) ?? []}
                </SelectContent>
              </Select>
            </div>

            {/* Card Details */}
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="flex items-center gap-2 mb-4">
                <Scroll className="w-5 h-5 text-amber-600" />
                <Label className="text-lg font-semibold text-gray-800">Karten Details</Label>
              </div>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="cardTitle" className="text-sm font-medium text-gray-700">Kartentitel</Label>
                  <Input
                    id="cardTitle"
                    value={cardTitle}
                    onChange={(e) => setCardTitle(e?.target?.value || '')}
                    placeholder="z.B. THE MAGICIAN"
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label className="text-sm font-medium text-gray-700">Römische Ziffer</Label>
                  <Select value={romanNumeral} onValueChange={setRomanNumeral}>
                    <SelectTrigger className="w-full mt-1">
                      <SelectValue placeholder="Wähle eine Ziffer..." />
                    </SelectTrigger>
                    <SelectContent>
                      {ROMAN_NUMERALS?.map?.((numeral) => (
                        <SelectItem key={numeral} value={numeral}>
                          {numeral}
                        </SelectItem>
                      )) ?? []}
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>

            {/* Color Palette */}
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="flex items-center gap-2 mb-4">
                <Palette className="w-5 h-5 text-amber-600" />
                <Label className="text-lg font-semibold text-gray-800">Farbauswahl</Label>
              </div>
              <div className="space-y-4">
                {Object?.entries?.(groupedColors)?.map?.(([category, colors]) => (
                  <div key={category}>
                    <Label className="text-sm font-medium text-gray-600 capitalize mb-2 block">
                      {category?.replace?.('-', ' ') ?? ''}
                    </Label>
                    <div className="grid grid-cols-6 gap-2">
                      {colors?.map?.((color) => (
                        <button
                          key={color?.hex || 'fallback'}
                          onClick={() => toggleColor(color?.hex || '')}
                          className={`w-10 h-10 rounded-lg border-2 transition-all hover:scale-105 ${
                            selectedColors?.includes?.(color?.hex || '') 
                              ? 'border-amber-500 ring-2 ring-amber-200' 
                              : 'border-gray-300'
                          }`}
                          style={{ backgroundColor: color?.hex || '#000' }}
                          title={`${color?.name || ''} (${color?.hex || ''})`}
                        />
                      )) ?? []}
                    </div>
                  </div>
                )) ?? []}
              </div>
            </div>

            {/* Decorations */}
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="flex items-center gap-2 mb-4">
                <Star className="w-5 h-5 text-amber-600" />
                <Label className="text-lg font-semibold text-gray-800">Dekorationen</Label>
              </div>
              <div className="space-y-4">
                {Object?.entries?.(groupedDecorations)?.map?.(([category, decorations]) => (
                  <div key={category}>
                    <Label className="text-sm font-medium text-gray-600 capitalize mb-2 block">
                      {category?.replace?.('-', ' ') ?? ''}
                    </Label>
                    <div className="grid grid-cols-2 gap-2">
                      {decorations?.map?.((decoration) => (
                        <button
                          key={decoration?.id || 'fallback'}
                          onClick={() => toggleDecoration(decoration?.id || '')}
                          className={`p-3 rounded-lg text-left transition-all ${
                            selectedDecorations?.includes?.(decoration?.id || '')
                              ? 'bg-amber-100 border-amber-400 border-2'
                              : 'bg-gray-50 border border-gray-200 hover:bg-gray-100'
                          }`}
                        >
                          <div className="font-medium text-sm">{decoration?.name}</div>
                          <div className="text-xs text-gray-500">{decoration?.description}</div>
                        </button>
                      )) ?? []}
                    </div>
                  </div>
                )) ?? []}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4">
              <Button 
                onClick={generatePrompt} 
                className="flex-1 bg-amber-600 hover:bg-amber-700 text-white"
                disabled={!selectedArchetype || !cardTitle || !romanNumeral}
              >
                <Sparkles className="w-4 h-4 mr-2" />
                Prompt Generieren
              </Button>
              <Button onClick={resetForm} variant="outline" className="px-6">
                <RefreshCw className="w-4 h-4 mr-2" />
                Reset
              </Button>
            </div>
          </div>

          {/* Right Column - Generated Prompt */}
          <div className="bg-white rounded-xl p-6 shadow-lg">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <Scroll className="w-5 h-5 text-amber-600" />
                <Label className="text-lg font-semibold text-gray-800">Generierter Prompt</Label>
              </div>
              {generatedPrompt && (
                <Button 
                  onClick={copyToClipboard} 
                  variant="outline" 
                  size="sm"
                  className="flex items-center gap-2"
                >
                  <Copy className="w-4 h-4" />
                  Kopieren
                </Button>
              )}
            </div>
            
            <Textarea
              value={generatedPrompt}
              placeholder="Der generierte Prompt erscheint hier..."
              className="min-h-[600px] font-mono text-sm"
              readOnly
            />
            
            {!generatedPrompt && (
              <div className="flex flex-col items-center justify-center py-16 text-gray-400">
                <Sparkles className="w-16 h-16 mb-4 opacity-50" />
                <p className="text-lg">Wähle Optionen und klicke "Prompt Generieren"</p>
                <p className="text-sm">um deinen personalisierten Tarotkarten-Prompt zu erstellen</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
