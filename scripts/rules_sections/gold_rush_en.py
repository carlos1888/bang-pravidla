# -*- coding: utf-8 -*-
"""
Official rules of BANG! Gold Rush expansion in English.
"""

GOLD_RUSH_SECTIONS_EN = [
    {
        "id": "gr-zlato-a-nakup",
        "category": "gold-rush",
        "categoryTitle": "🪙 Gold Rush",
        "title": "1. Gold Nuggets & Shop Equipment Purchases",
        "icon": "dollar-sign",
        "content": """
<div class="rule-section-header">
  <span class="section-tag">Gold Rush</span>
  <h2>1. Gold Nuggets &amp; Shop Equipment Purchases</h2>
  <p class="section-lead">Gunfights enter a new era: gold becomes currency and dealing damage earns you nuggets to purchase powerful equipment.</p>
</div>

<div class="concept-card">
  <h3>🪙 Gaining Gold Nuggets</h3>
  <p>Players start with 0 nuggets. Nuggets are drawn from a shared central bank:</p>
  <ul>
    <li><strong>1 Gold Nugget per point of damage dealt:</strong> Each time you inflict damage on another player by any means (BANG!, Gatling, Indians, weapons), take <strong>1 gold nugget per life point lost</strong> from the bank.</li>
    <li><em>Example:</em> You play Gatling and hit 3 players = you take 3 gold nuggets from the bank.</li>
    <li><strong>Self-inflicted damage awards no gold:</strong> If you hurt yourself (Dynamite explosion, paying lives), you do not gain nuggets.</li>
  </ul>
</div>

<div class="concept-card" style="border-left: 4px solid var(--accent-gold);">
  <h3>🛒 The Shop Display and Phase 2 Actions</h3>
  <p>Shuffle the 24 equipment cards and reveal <strong>3 cards face-up as the Shop display</strong>. During Phase 2, you have 3 new actions available:</p>
  
  <div class="concept-grid">
    <div class="concept-item">
      <span class="concept-badge">Action 1</span>
      <h4>Buy Equipment from Shop</h4>
      <p>Pay the printed nugget cost into the bank. The shop card is <strong>immediately replaced</strong> from the equipment deck.</p>
      <ul>
        <li><strong>Brown Equipment:</strong> Resolves immediately, then placed face-up on the bottom of the equipment deck (e.g. <em>Shot, Gold Rush, Accomplice</em>).</li>
        <li><strong>Black Equipment:</strong> Placed in front of you as a permanent card like blue cards (e.g. <em>Horseshoe, Boots, Rucksack</em>).</li>
      </ul>
    </div>

    <div class="concept-item">
      <span class="concept-badge concept-badge-gun">Action 2</span>
      <h4>Force Discard Opponent's Equipment</h4>
      <p>You can force another player to discard their black equipment: pay <strong>its printed cost in nuggets + 1 extra nugget</strong>! The card is placed on the bottom of the equipment deck.</p>
    </div>

    <div class="concept-item">
      <span class="concept-badge concept-badge-eff">Action 3</span>
      <h4>Exchange Beer for Gold</h4>
      <p>Play a <strong>Beer card from hand</strong> to gain <strong>1 gold nugget</strong> from the bank instead of healing. This exchange is permitted even when only 2 players remain!</p>
    </div>
  </div>
</div>
"""
    },
    {
        "id": "gr-stinovi-pistolnici",
        "category": "gold-rush",
        "categoryTitle": "🪙 Gold Rush",
        "title": "2. Shadow Gunslingers & Shadow Renegade Variant",
        "icon": "ghost",
        "content": """
<div class="rule-section-header">
  <span class="section-tag">Gold Rush</span>
  <h2>2. Shadow Gunslingers &amp; Shadow Renegade Variant</h2>
  <p class="section-lead">A revolutionary variant allowing eliminated players to stay involved as dangerous ghost gunners.</p>
</div>

<div class="concept-card">
  <h3>👻 Rules for Shadow Gunslingers</h3>
  <ul>
    <li><strong>Upon Elimination:</strong> When you lose your last life point, discard all cards in hand and in play and reveal your role. <strong>YOU KEEP YOUR GOLD NUGGETS!</strong></li>
    <li><strong>Returning on Future Turns:</strong> On each of your subsequent turns, you re-enter play as a <strong>shadow gunslinger with 0 lives</strong>.</li>
    <li><strong>Turn Structure of a Shadow Gunslinger:</strong>
      <ol>
        <li>Draw <strong>2 cards from the deck</strong> into your hand.</li>
        <li>Play Phase 2 normally: you can shoot BANG!, attack, heal teammates with Saloon, buy equipment with nuggets, or earn new nuggets!</li>
        <li><strong>End of Turn:</strong> At the end of your turn, you must <strong>DISCARD ALL CARDS FROM HAND AND IN PLAY</strong>! Your gold nuggets remain yours.</li>
      </ol>
    </li>
    <li><strong>Immunity:</strong> Shadow gunslingers cannot gain or lose lives, and cannot be targeted by Jail or Dynamite. They do not count in player distance circles.</li>
  </ul>
</div>

<div class="concept-card" style="border-left: 4px solid #8e44ad;">
  <h3>🗡️ Rules for the Shadow Renegade</h3>
  <p>If the eliminated player was the <strong>Renegade</strong>, they return as the Shadow Renegade and act as the game's kingmaker:</p>
  <ul>
    <li>At the start of each of their turns, the Shadow Renegade counts the <strong>revealed roles on the table</strong> (the Sheriff and all dead players).</li>
    <li>They join whichever team has <strong>more revealed role cards</strong>:
      <ul>
        <li>If there are more revealed Deputies + Sheriff than Outlaws, they <strong>aid the Sheriff</strong>.</li>
        <li>If there are more revealed Outlaws than Deputies + Sheriff, they <strong>aid the Outlaws</strong>.</li>
        <li><strong>On a Tie:</strong> They ALWAYS side with the <strong>OUTLAWS</strong>!</li>
      </ul>
    </li>
    <li>Their allegiance is recalculated <strong>at the start of each of their turns</strong>!</li>
  </ul>
</div>
"""
    },
    {
        "id": "gr-karty-a-postavy",
        "category": "gold-rush",
        "categoryTitle": "🪙 Gold Rush",
        "title": "3. Equipment Cards & 8 New Characters",
        "icon": "shield",
        "content": """
<div class="rule-section-header">
  <span class="section-tag">Gold Rush</span>
  <h2>3. Equipment Cards &amp; 8 New Characters</h2>
  <p class="section-lead">Overview of black equipment and 8 unique characters specialized in gold nuggets.</p>
</div>

<div class="concept-card">
  <h3>🛡️ Key Black Equipment Cards</h3>
  <ul>
    <li><strong>Horseshoe:</strong> Whenever you "draw!" (check), reveal <strong>1 additional card</strong> and choose your preferred result (Lucky Duke flips 3 cards!).</li>
    <li><strong>Boots:</strong> Cancels the final fatal damage point (protects against elimination).</li>
    <li><strong>Calumet:</strong> Opponents' weapon ranges have no effect when shooting at you.</li>
    <li><strong>Wanted:</strong> Played in front of any player. Whoever eliminates them gains <strong>+2 cards and +1 gold nugget</strong>!</li>
    <li><strong>Rucksack:</strong> Can be used out of turn when losing your last life point.</li>
  </ul>
</div>

<div class="characters-rules-grid" style="margin-top: 1.5rem;">
  <div class="char-rule-box">
    <h4>Don Bell (4 lives)</h4>
    <p>At the end of his turn, checks: if red (♥/♦), immediately takes another full turn!</p>
  </div>

  <div class="char-rule-box">
    <h4>Dutch Will (4 lives)</h4>
    <p>In Phase 1, draws 2 cards, keeps 1, and discards the other to gain 1 gold nugget.</p>
  </div>

  <div class="char-rule-box">
    <h4>Jack Murieta (4 lives)</h4>
    <p>May shoot extra BANG! cards by paying 2 gold nuggets per extra shot.</p>
  </div>

  <div class="char-rule-box">
    <h4>Josh McCloud (4 lives)</h4>
    <p>May buy the top card of the equipment deck blindly for 2 gold nuggets.</p>
  </div>

  <div class="char-rule-box">
    <h4>Madam Yto (4 lives)</h4>
    <p>Whenever anyone plays a Beer card, Madam Yto immediately draws 1 card from the deck.</p>
  </div>

  <div class="char-rule-box">
    <h4>Pretty Luzena (4 lives)</h4>
    <p>Once per turn, buys 1 shop equipment card at a discount of 1 nugget (items costing 1 are free!).</p>
  </div>

  <div class="char-rule-box">
    <h4>Raddie Snake (4 lives)</h4>
    <p>May pay 1 gold nugget to draw 1 card from the deck (up to twice per turn).</p>
  </div>

  <div class="char-rule-box">
    <h4>Simeon Picos (4 lives)</h4>
    <p>Whenever he loses a life point, he takes 1 gold nugget from the bank.</p>
  </div>
</div>
"""
    }
]
