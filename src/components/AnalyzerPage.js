/**
 * AnalyzerPage Component V2
 * Tampilan utama Analyzer yang menggabungkan seluruh komponen alur kerja.
 */

import { renderPromptInput } from './PromptInput.js';
import { renderConflictBanner } from './ConflictBanner.js';
import { renderPromptOptimal } from './PromptOptimal.js';
import { renderSemanticIntent } from './SemanticIntent.js';
import { renderEditAreas } from './EditAreas.js';
import { renderLockedAreas } from './LockedAreas.js';
import { renderVisualTransformation } from './VisualTransformation.js';
import { renderShorthandRecommendations } from './ShorthandRecommendations.js';
import { renderExcludedShorthands } from './ExcludedShorthands.js';

export function renderAnalyzerPage({
  analysisResult,
  currentPrompt,
  catalog,
  isAnalyzing,
  onAnalyze,
  onReset,
  onClear,
  onSelectPreset,
  onCopyPrompt,
  onAddShorthand,
  onRemoveShorthand,
  onToggleRecommendation,
  onResolveConflict
}) {
  const {
    optimalPrompt = '',
    installedShorthands = [],
    conflicts = [],
    intent = {},
    editAreas = [],
    lockedAreas = [],
    unchangedAreas = [],
    visualTransformation = {},
    recommendations = [],
    exclusions = []
  } = analysisResult || {};

  // Sub-components
  const promptInputComp = renderPromptInput({
    currentValue: currentPrompt,
    onAnalyze,
    onReset,
    onClear,
    onSelectPreset,
    isAnalyzing
  });

  const conflictBannerComp = renderConflictBanner(conflicts, onResolveConflict);

  const promptOptimalComp = renderPromptOptimal({
    optimalPrompt,
    installedShorthands,
    catalog,
    onCopyPrompt,
    onRemoveShorthand,
    onAddShorthand
  });

  const semanticIntentComp = renderSemanticIntent(intent);
  const editAreasComp = renderEditAreas(editAreas);
  const lockedAreasComp = renderLockedAreas(lockedAreas, unchangedAreas);
  const visualTransformComp = renderVisualTransformation(visualTransformation);

  const recommendationsComp = renderShorthandRecommendations({
    recommendations,
    installedShorthands,
    onToggleShorthand: onToggleRecommendation
  });

  const exclusionsComp = renderExcludedShorthands(exclusions);

  const html = `
    <div class="analyzer-stream-container">
      <!-- 1. Input & Presets Card -->
      ${promptInputComp.html}

      <!-- 2. Conflict Banner (Visible only if conflict detected) -->
      ${conflictBannerComp.html}

      <!-- 3. Prompt Optimal & Installed Shorthands (Prominent Highlight) -->
      ${promptOptimalComp.html}

      <!-- 4. Card A: Maksud Prompt -->
      ${semanticIntentComp.html}

      <!-- 5. Cards B & C: Area yang Diubah vs Area yang Dikunci (Side-by-side grid on desktop) -->
      <div class="grid-2">
        ${editAreasComp.html}
        ${lockedAreasComp.html}
      </div>

      <!-- 6. Card D: Transformasi Visual FROM -> TO -->
      ${visualTransformComp.html}

      <!-- 7. Card E: Rekomendasi Shorthand Semantik -->
      ${recommendationsComp.html}

      <!-- 8. Card F: H. Shorthand Tidak Diperlukan (Dikecualikan) -->
      ${exclusionsComp.html}
    </div>
  `;

  return {
    html,
    bindEvents(container) {
      promptInputComp.bindEvents(container);
      conflictBannerComp.bindEvents(container);
      promptOptimalComp.bindEvents(container);
      recommendationsComp.bindEvents(container);
    }
  };
}
