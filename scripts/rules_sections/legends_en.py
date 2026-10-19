# -*- coding: utf-8 -*-
"""
Official rules of BANG! Legends expansion in English.
"""

LEGENDS_SECTIONS_EN = [
    {
        "id": "leg-zrod-a-postavy",
        "category": "legends",
        "categoryTitle": "🌟 Legends",
        "title": "1. Fame Tokens, Becoming a Legend & Side B",
        "icon": "star",
        "content": """
<div class="rule-section-header">
  <span class="section-tag">Legends</span>
  <h2>1. Fame Tokens, Becoming a Legend &amp; Side B</h2>
  <p class="section-lead">BANG! Legends introduces 16 legendary characters on double-sided cards and a heroic feats mechanic allowing you to forge your legend.</p>
</div>

<div class="concept-card">
  <h3>🌟 Legends Setup &amp; 5 Fame Tokens</h3>
  <ul>
    <li>Each player takes <strong>5 wooden Fame tokens of their color</strong> (from the 35 tokens in 7 colors).</li>
    <li>Characters are dealt <strong>face-up on Side A</strong> (draw from the bottom of the deck so Side B remains hidden).</li>
    <li>Shuffle the feat cards and place <strong>only 1 feat card face-up</strong> in the center. During the game, there can be <strong>at most 4 feats face-up simultaneously</strong>.</li>
  </ul>
</div>

<div class="callout callout-info" style="margin: 1.25rem 0;">
  <h4>❓ When and How Do New Feat Cards Enter the Table (from 1 up to 4)?</h4>
  <p>At the start of the game, <strong>only 1 feat card is face-up</strong>. The feats on the table expand and refresh in two ways:</p>
  <ol style="margin-top: 0.5rem; padding-left: 1.25rem;">
    <li>
      <strong>Primary Method — Boasting (Phase 4 of each player's turn):</strong><br>
      Whenever a player <strong>does not accomplish any feat</strong> during their turn (which happens to nearly all players in the opening rounds, including jailed players!), in Phase 4 they <strong>draw and reveal 1 new feat card from the deck onto the table</strong>. Then they place 1 of their Fame tokens on any active feat where they don't have one yet.<br>
      <em>Over the first few player turns, the table naturally expands from 1 feat to 2, 3, and up to the maximum of 4 feats!</em>
    </li>
    <li style="margin-top: 0.5rem;">
      <strong>Maximum Limit of 4 Feats:</strong><br>
      There can be at most 4 feats face-up on the table. If a 5th feat is revealed during Boasting, the player immediately <strong>discards the feat with the most Fame tokens on it</strong> (ties chosen by the active player).
    </li>
    <li style="margin-top: 0.5rem;">
      <strong>Second Method — Claiming a Feat (Side B Legend):</strong><br>
      When a Legend (Side B) claims a feat to deal unblockable damage to another legend, that feat card is immediately discarded and <strong>replaced with a fresh feat card drawn from the deck</strong>.
    </li>
  </ol>
</div>

<div class="callout callout-gold">
  <h4>⭐️ BECOMING A LEGEND (Flipping to Side B)</h4>
  <p>As soon as a player places their <strong>last (5th) Fame token</strong> onto feat cards:</p>
  <ul>
    <li>They immediately become a <strong>LEGEND</strong>!</li>
    <li>Flip the character card over to <strong>Side B</strong>.</li>
    <li><strong>RESTORE LIFE POINTS:</strong> Immediately <strong>reset your life points to 3</strong> (if you had fewer than 3 lives; if you had 3 or more, life points remain unchanged)!</li>
    <li>From this point on, you wield legendary powers and can <strong>Claim Feats</strong>!</li>
  </ul>
</div>
"""
    },
    {
        "id": "leg-ciny-a-chlubeni",
        "category": "legends",
        "categoryTitle": "🌟 Legends",
        "title": "2. Performing Feats, Boasting & Claiming",
        "icon": "award",
        "content": """
<div class="rule-section-header">
  <span class="section-tag">Legends</span>
  <h2>2. Performing Feats, Boasting &amp; Claiming</h2>
  <p class="section-lead">How to place Fame tokens during your turn and how Legends strike their foes.</p>
</div>

<div class="concept-grid">
  <div class="concept-item">
    <span class="concept-badge">Phase 2</span>
    <h4>1. Performing a Feat</h4>
    <p>Fulfill the condition on any face-up feat card during Phase 2 to <strong>place 2 Fame tokens on that feat card</strong>!</p>
    <p><em>Wooden Signboard Icon (L):</em> Allows fulfilling the feat even if it contradicts normal rules (e.g. voluntarily discarding Beer or taking damage).</p>
  </div>

  <div class="concept-item">
    <span class="concept-badge concept-badge-eff">Phase 4</span>
    <h4>2. Boasting (When no feat was achieved)</h4>
    <p>If you <strong>did not accomplish any feat</strong> during your turn (even if jailed):</p>
    <ol>
      <li><strong>Draw 1 new feat card from the deck and place it face-up on the table:</strong> This is how the feat pool expands from 1 to 4 cards!</li>
      <li><strong>Check the 4-card limit:</strong> If there are now more than 4 feats on the table, <strong>discard the feat with the most Fame tokens</strong>.</li>
      <li><strong>Place 1 Fame token</strong> on any face-up feat where you do not already have a token.</li>
    </ol>
  </div>
</div>

<div class="concept-card" style="border-left: 4px solid #c0392b; margin-top: 1.5rem;">
  <h3>🗡️ Claiming a Feat (Side B Legend Only)</h3>
  <p>Once you are a Legend (Side B), you can perform a feat to <strong>Claim it</strong>:</p>
  <ul>
    <li>Fulfill the feat condition and <strong>deal 1 unblockable damage to another legend</strong>! (Cannot be prevented by Missed! or Barrel).</li>
    <li>Cannot reduce the target to 0 lives (unless it is Slab the Killer).</li>
    <li>The claimed feat is discarded and replaced with a new one from the deck.</li>
  </ul>
</div>
"""
    },
    {
        "id": "leg-zmeny-pravidel",
        "category": "legends",
        "categoryTitle": "🌟 Legends",
        "title": "3. Mandatory Rule Changes (4 Cards, Jail, 1 Life)",
        "icon": "book",
        "content": """
<div class="rule-section-header">
  <span class="section-tag">Rule Changes</span>
  <h2>3. Mandatory Rule Changes from Legends</h2>
  <p class="section-lead">When playing with Legends, the official rules modify several core game mechanics.</p>
</div>

<div class="callout callout-warning">
  <h4>🎴 MANDATORY STARTING HAND RULE (Rulebook Page 3)</h4>
  <p>When playing with Legends, all players start the game with <strong>exactly 4 cards in hand regardless of life points</strong> (applies to the Sheriff too!).</p>
  <p>Players sitting in <strong>6th, 7th, and 8th turn positions</strong> start with <strong>5 cards in hand</strong> as compensation for acting late in the round.</p>
</div>

<div class="concept-grid" style="margin-top: 1rem;">
  <div class="concept-item">
    <span class="concept-badge">1 Life Point Rule</span>
    <h4>Survival Rule</h4>
    <p>If reduced to <strong>only 1 life point</strong>, you are allowed to keep <strong>2 cards in hand</strong> during Phase 3 (instead of just 1 card)!</p>
  </div>

  <div class="concept-item">
    <span class="concept-badge concept-badge-sup">New Jail Escape Option</span>
    <h4>Guaranteed Escape with Hearts</h4>
    <p>When starting your turn in Jail, you have two choices:</p>
    <ul>
      <li><strong>Option A (Classic):</strong> "Draw!" (check) for a Heart (♥).</li>
      <li><strong>Option B (Legends):</strong> Voluntarily <strong>discard 1 Heart (♥) card from hand</strong> to escape Jail automatically with zero risk!</li>
    </ul>
  </div>
</div>
"""
    }
]
