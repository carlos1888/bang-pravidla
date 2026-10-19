# -*- coding: utf-8 -*-
"""
Official rules of BANG! The Great Train Robbery expansion in English.
"""

TRAIN_ROBBERY_SECTIONS_EN = [
    {
        "id": "tr-vlak-a-stanice",
        "category": "train-robbery",
        "categoryTitle": "🚂 The Great Train Robbery",
        "title": "1. Locomotives, Station Track & Train Movement",
        "icon": "navigation",
        "content": """
<div class="rule-section-header">
  <span class="section-tag">The Great Train Robbery</span>
  <h2>1. Locomotives, Station Track &amp; Train Movement</h2>
  <p class="section-lead">A steam train arrives! The track is formed by station tiles along which the locomotive advances pulling railcars.</p>
</div>

<div class="concept-card">
  <h3>🚂 Track and Train Setup</h3>
  <ul>
    <li>Lay out station tiles in a row equal to the <strong>number of players in the game</strong>.</li>
    <li>Place the locomotive card under the first station (far left) randomly (check: ♣/♠ = <strong>Ironhorse</strong>, ♥/♦ = <strong>Leland</strong>).</li>
    <li>Place <strong>3 random railcar cards</strong> behind the locomotive.</li>
  </ul>
</div>

<div class="concept-card">
  <h3>🛤️ Two Ways the Train Moves</h3>
  <div class="concept-grid">
    <div class="concept-item">
      <span class="concept-badge">1. Sheriff Movement</span>
      <h4>Start of Turn</h4>
      <p>Starting with Round 2, the Sheriff <strong>advances the locomotive 1 station to the right</strong> at the start of each of their turns.</p>
    </div>

    <div class="concept-item">
      <span class="concept-badge concept-badge-gun">2. Player Movement in Phase 2</span>
      <h4>Voluntary Move with Mandatory Purchase</h4>
      <p>Any player may <strong>advance the train 1 station for free</strong> during Phase 2. However, doing so makes it <strong>MANDATORY to buy the railcar</strong> attached to the destination station by paying its cost!</p>
    </div>
  </div>
</div>

<div class="callout callout-warning">
  <h4>🏁 END OF THE LINE &amp; LOCOMOTIVE RESOLUTION</h4>
  <p>When the locomotive advances beyond the final station, it reaches the end of the line and <strong>its effect triggers immediately</strong>:</p>
  <ul>
    <li><strong>Ironhorse:</strong> All players are targeted by a BANG! effect. If all remaining players including the Sheriff die, <strong>the Outlaws win</strong>!</li>
    <li><strong>Leland:</strong> Triggers a General Store effect for all players.</li>
  </ul>
  <p>After resolving, shuffle the stations and remaining railcars, lay out a new track, and <strong>flip the locomotive to its opposite side</strong>.</p>
</div>

<div class="concept-card" style="margin-top: 1.5rem;">
  <h3>🏛️ All 13 Official Stations &amp; Purchase Costs</h3>
  <table class="rules-table">
    <thead>
      <tr>
        <th>Station Tile</th>
        <th>Cost to Buy Attached Railcar</th>
      </tr>
    </thead>
    <tbody>
      <tr><td><strong>Boom Town</strong></td><td>Discard 1 card</td></tr>
      <tr><td><strong>Dodgeville</strong></td><td>Discard 2 cards</td></tr>
      <tr><td><strong>Crown's Hole</strong></td><td>Discard 1 Beer card</td></tr>
      <tr><td><strong>Catico</strong></td><td>Discard Panic! or Cat Balou</td></tr>
      <tr><td><strong>Deathwood</strong></td><td>Discard 1 blue card</td></tr>
      <tr><td><strong>Tombrock</strong></td><td>Lose 1 life point (cannot lose your last life)</td></tr>
      <tr><td><strong>Virginia Town</strong></td><td>Discard 2 cards</td></tr>
      <tr><td><strong>Yooma</strong></td><td>Discard a card valued 2 to 9</td></tr>
      <tr><td><strong>Fort Wroth</strong></td><td>Discard a card valued 10, J, Q, K, or A</td></tr>
      <tr><td><strong>San Tafe</strong></td><td>Discard 1 Heart (♥) card</td></tr>
      <tr><td><strong>Miner's Oath</strong></td><td>Discard 1 Diamond (♦) card</td></tr>
      <tr><td><strong>Frisco</strong></td><td>Discard 1 Club (♣) card</td></tr>
      <tr><td><strong>Creepy Creek</strong></td><td>Discard 1 Spade (♠) card</td></tr>
    </tbody>
  </table>
</div>
"""
    },
    {
        "id": "tr-vagony-a-mechaniky",
        "category": "train-robbery",
        "categoryTitle": "🚂 The Great Train Robbery",
        "title": "2. Railcar Rules & Ghost Car",
        "icon": "shield",
        "content": """
<div class="rule-section-header">
  <span class="section-tag">The Great Train Robbery</span>
  <h2>2. Railcar Rules &amp; Ghost Car</h2>
  <p class="section-lead">Purchased railcars grant powerful benefits, but follow one strict restriction.</p>
</div>

<div class="callout callout-gold">
  <h4>🚫 RAILCARS ARE NEVER TAKEN INTO HAND!</h4>
  <p>Railcars are placed directly in front of players like blue cards. <strong>RAILCARS CAN NEVER BE TAKEN INTO A PLAYER'S HAND!</strong></p>
  <p>If an opponent plays <em>Panic!</em> on your railcar, <strong>they take it and immediately place it into play in front of themselves</strong>!</p>
</div>

<div class="concept-card" style="border-left: 4px solid #8e44ad;">
  <h3>👻 Ghost Car</h3>
  <ul>
    <li>If a player would lose their last life point while holding the <strong>Ghost Car</strong>, <strong>they do not die</strong>!</li>
    <li>They stay in the game with <strong>0 life points</strong> and play turns normally.</li>
    <li>However, if they ever lose the Ghost Car (via Cat Balou, Panic!, etc.), <strong>they are eliminated immediately</strong> with no bounty awarded!</li>
    <li><strong>Sheriff Immunity:</strong> The Sheriff <strong>CANNOT own the Ghost Car</strong> (if acquired, it is immediately discarded).</li>
  </ul>
</div>
"""
    }
]
