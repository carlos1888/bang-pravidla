# -*- coding: utf-8 -*-
"""
Official rules for the complete game with all expansions (Dynamite Box + Legends) in English.
"""

DYNAMITE_BOX_SECTIONS_EN = [
    {
        "id": "db-kompletni-tah",
        "category": "dynamite-box",
        "categoryTitle": "🧨 Complete Game",
        "title": "1. Complete Turn Structure with All Expansions (Phases 0–4)",
        "icon": "clock",
        "content": """
<div class="rule-section-header">
  <span class="section-tag">Complete Rules</span>
  <h2>1. Complete Turn Structure with All Expansions (Phases 0–4)</h2>
  <p class="section-lead">When combining all expansions from Dynamite Box and Legends, every player turn follows this strict sequence of phases.</p>
</div>

<div class="phase-card phase-0">
  <div class="phase-header">
    <span class="phase-tag">Phase 0</span>
    <h3>Phase 0: Pre-Turn Events and Timed Cards</h3>
  </div>
  <div class="phase-body">
    <ol class="phase-steps-list">
      <li>
        <strong>Event &amp; Train Advance (Sheriff Only):</strong>
        <p>From Round 2 onwards, the Sheriff reveals a new event (High Noon / Fistful) and advances the locomotive 1 station to the right.</p>
      </li>
      <li>
        <strong>Start of Turn Events:</strong>
        <p>Apply events triggered "at the start of your turn" (e.g. <em>High Noon</em> = lose 1 life point).</p>
      </li>
      <li>
        <strong>STRICT TIMED RESOLUTION ORDER OF CARDS IN PLAY:</strong>
        <div class="timing-subgrid">
          <div class="timing-item">
            <strong>1. DYNAMITE</strong>
            <p>Check: ♠ 2–9 = explodes for 3 lives; else passes left.</p>
          </div>
          <div class="timing-item">
            <strong>2. JAIL</strong>
            <p>Choice A: Check on ♥ = escape; else lose turn. Choice B (Legends): Discard 1 ♥ card from hand to escape risk-free!</p>
          </div>
          <div class="timing-item">
            <strong>3. BOMB</strong>
            <p>Check: ♥/♦ passes left; ♣/♠ removes 2 load tokens. Explodes for 2 lives at 0 tokens!</p>
          </div>
          <div class="timing-item">
            <strong>4. RATTLESNAKE</strong>
            <p>Check on ♠ = lose 1 life point. (Skipped if Jail check failed!).</p>
          </div>
        </div>
      </li>
      <li>
        <strong>Map Card:</strong>
        <p>Look at top 2 cards of the draw deck, choose 1 to discard.</p>
      </li>
    </ol>
  </div>
</div>

<div class="phase-card phase-1">
  <div class="phase-header">
    <span class="phase-tag">Phase 1</span>
    <h3>Phase 1: Draw Cards</h3>
  </div>
  <div class="phase-body">
    <p>Draw <strong>2 cards from the draw deck</strong> into your hand.</p>
    <p>Character abilities apply: <em>Jesse Jones, Pedro Ramirez, Kit Carlson, Pixie Pete, Bill Noface, Black Jack, Dutch Will</em>.</p>
  </div>
</div>

<div class="phase-card phase-2">
  <div class="phase-header">
    <span class="phase-tag">Phase 2</span>
    <h3>Phase 2: Play Cards &amp; Expansion Actions</h3>
  </div>
  <div class="phase-body">
    <p>Perform any number of actions in any order:</p>
    <ul class="phase-actions-list">
      <li><strong>Standard Cards:</strong> Brown cards (immediate effect), Blue cards (deploy in front). <em>Limits:</em> max. 1 BANG! per turn, max. 1 weapon, unique cards in play.</li>
      <li><strong>Green Cards (Dodge City):</strong> Discard previously deployed green cards to trigger their effects.</li>
      <li><strong>Gold Rush:</strong> Buy equipment with nuggets; force-discard opponent equipment for cost + 1 nugget; exchange Beer for 1 nugget.</li>
      <li><strong>The Great Train Robbery:</strong> Advance train 1 station for free (mandatory purchase of railcar!); buy railcars by paying station costs.</li>
      <li><strong>Armed &amp; Dangerous:</strong> Deploy orange cards with 3 load tokens; recharge cards by playing blue cards (+1 token); boost brown cards with tokens.</li>
      <li><strong>Legends:</strong> Fulfill active feats (place 2 Fame tokens). If you are a Legend: <strong>Claim a Feat</strong> (deal 1 unblockable damage to another legend).</li>
    </ul>
  </div>
</div>

<div class="phase-card phase-3">
  <div class="phase-header">
    <span class="phase-tag">Phase 3</span>
    <h3>Phase 3: Discard Excess Cards &amp; Recharging</h3>
  </div>
  <div class="phase-body">
    <p>Hand size limit = <strong>your current life points</strong>.</p>
    <ul>
      <li><em>Exceptions:</em> Sean Mallory (up to 10 cards), Gun Belt (8 cards).</li>
      <li><strong>Legends 1-Life Rule:</strong> If reduced to 1 life point, you may keep <strong>2 cards</strong>!</li>
      <li><strong>RECHARGING IN THIS PHASE:</strong> For each card you must discard due to hand limit, add <strong>1 load token</strong> to any of your Dangerous cards or character!</li>
    </ul>
  </div>
</div>

<div class="phase-card phase-4">
  <div class="phase-header">
    <span class="phase-tag">Phase 4</span>
    <h3>Phase 4: End of Turn &amp; Boasting (Legends)</h3>
  </div>
  <div class="phase-body">
    <div class="callout callout-gold">
      <h4>🏆 Boasting (Legends – When no feat was performed)</h4>
      <p>If you <strong>did not accomplish any feat</strong> during your turn (even if jailed!):</p>
      <ol>
        <li><strong>Draw and reveal 1 new feat card from the deck:</strong> This is how the feat pool expands from 1 up to 4 cards!</li>
        <li>If there are now more than 4 feats on the table, discard the one with the most Fame tokens on it.</li>
        <li>Place <strong>1 Fame token</strong> on any face-up feat where you do not have one yet.</li>
      </ol>
    </div>
    <div class="callout callout-success">
      <h4>⭐️ BECOMING A LEGEND (Flipping to Side B)</h4>
      <p>Upon placing your <strong>5th Fame token</strong>, flip to Side B and <strong>reset your life points to 3</strong>!</p>
    </div>
    <p>End of turn: Jimmy Texas draws 1 card; Don Bell checks for an extra turn.</p>
  </div>
</div>
"""
    },
    {
        "id": "db-scitani-vzdalenosti",
        "category": "dynamite-box",
        "categoryTitle": "🧨 Complete Game",
        "title": "2. Distance Modifier Stacking & Practical Examples",
        "icon": "compass",
        "content": """
<div class="rule-section-header">
  <span class="section-tag">Complete Rules</span>
  <h2>2. Distance Modifier Stacking &amp; Practical Examples</h2>
  <p class="section-lead">Official guide on how distance modification cards from all expansions combine in practice.</p>
</div>

<div class="concept-card" style="border-left: 4px solid var(--accent-gold);">
  <h3>🐎 Distance Modifier Cards Stacking</h3>
  <p><strong>Yes, all of these cards stack together.</strong> Under official BANG! rules, you cannot have two identical blue cards (with the same name) in play in front of you. Because each of these cards has a different name, you can have them all in play simultaneously and their effects combine.</p>
  <p style="margin-top: 0.5rem;"><strong>In practice, distances are calculated as follows:</strong></p>
  
  <div style="margin-top: 0.75rem;">
    <h5 style="color: var(--color-brown, #5c3a21); font-size: 1rem; margin: 0 0 0.25rem;">🤠 Defensive Cards (when someone attacks you)</h5>
    <p style="margin-bottom: 0.25rem;">These cards increase the distance at which other players see you:</p>
    <ul style="margin: 0.25rem 0 0.5rem 1.25rem;">
      <li><strong>Mustang:</strong> Others see you 1 further away.</li>
      <li><strong>Hideout</strong> (or Barrel in the base game*): Others see you 1 further away.</li>
    </ul>
    <p><strong>Result:</strong> If you have both Mustang and Hideout in play, other players see you <strong>2 further away in total</strong>. A player sitting right next to you (base distance 1) needs a weapon with a range of at least 3 to target you.</p>
    <p style="font-size: 0.85rem; color: var(--color-brown, #5c3a21); opacity: 0.85; margin-top: 0.35rem;"><em>*Rules Note: Barrel in the base game provides a chance to draw for a Missed! effect, whereas Mustang and Hideout directly increase physical distance.</em></p>
  </div>

  <div style="margin-top: 1rem;">
    <h5 style="color: var(--color-brown, #5c3a21); font-size: 1rem; margin: 0 0 0.25rem;">🎯 Offensive Cards (when you attack)</h5>
    <p style="margin-bottom: 0.25rem;">These cards decrease the distance at which you see other players:</p>
    <ul style="margin: 0.25rem 0 0.5rem 1.25rem;">
      <li><strong>Scope</strong> (or Appaloosa in the original game): You see others 1 closer.</li>
      <li><strong>Binoculars:</strong> You see others 1 closer.</li>
    </ul>
    <p><strong>Result:</strong> If you have both Scope and Binoculars in play, you see all players <strong>2 closer</strong>. A player at actual distance 3 is seen at distance 1, so the default Colt .45 is sufficient to attack them (e.g. with BANG! or Panic!).</p>
  </div>
</div>
"""
    }
]
