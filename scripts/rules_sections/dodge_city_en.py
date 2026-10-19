# -*- coding: utf-8 -*-
"""
Official rules of BANG! Dodge City expansion in English (including FAQ D1-D16).
"""

DODGE_CITY_SECTIONS_EN = [
    {
        "id": "dc-zelene-karty",
        "category": "dodge-city",
        "categoryTitle": "🟢 Dodge City",
        "title": "1. Green Cards with Delayed Effect",
        "icon": "clock",
        "content": """
<div class="rule-section-header">
  <span class="section-tag">Dodge City</span>
  <h2>1. Green Cards with Delayed Effect</h2>
  <p class="section-lead">Dodge City introduces green-bordered cards that must be placed in play before they can be triggered in a subsequent round.</p>
</div>

<div class="concept-card">
  <h3>🟢 Rules for Playing and Activating Green Cards</h3>
  <ul>
    <li><strong>Play Face-Up in Front of You:</strong> You play a green card during Phase 2 of your turn, placing it face-up on the table just like a blue card.</li>
    <li><strong>CANNOT BE USED ON THE TURN PLAYED:</strong> You <strong>cannot use a green card on the turn it is deployed</strong>! It must remain on the table until at least your next turn.</li>
    <li><strong>Activation on Subsequent Turns:</strong> In any of your future turns, you may discard the green card to trigger its effect. Each card features an equal sign <code>=</code> separating the discard symbol from the resulting effect.</li>
    <li><strong>Defensive Green Cards (Sombrero, Bible, Iron Plate, Hideout):</strong> Green cards with a <em>Missed!</em> symbol may be discarded <strong>out of turn</strong> whenever you are targeted by a BANG! effect.</li>
  </ul>
</div>

<div class="callout callout-warning">
  <h4>⚠️ What happens if someone steals your green card (Panic!, Cat Balou)?</h4>
  <p>Green cards can be targeted and removed by cards like <em>Panic!</em> or <em>Cat Balou</em>:</p>
  <ul>
    <li>If an opponent plays <em>Panic!</em> on your green card, <strong>they take it into their hand</strong>.</li>
    <li>They <strong>CANNOT play it directly from hand for its effect</strong>! They must deploy it onto the table on their turn and wait a full round before activating it.</li>
  </ul>
</div>

<div class="callout callout-info">
  <h4>📌 General Green Card Rules</h4>
  <ul>
    <li>Any green card with a <em>Missed!</em> symbol can cancel any card with a <em>BANG!</em> symbol.</li>
    <li>You cannot have <strong>two green cards with the same name</strong> in play in front of you.</li>
  </ul>
</div>
"""
    },
    {
        "id": "dc-odhozeni-karty",
        "category": "dodge-city",
        "categoryTitle": "🟢 Dodge City",
        "title": "2. Cards with \"Discard Another Card\" Symbol",
        "icon": "layers",
        "content": """
<div class="rule-section-header">
  <span class="section-tag">Dodge City</span>
  <h2>2. Cards with \"Discard Another Card\" Symbol</h2>
  <p class="section-lead">Certain brown and green cards in Dodge City require paying an extra card from your hand upon activation.</p>
</div>

<div class="concept-card">
  <h3>Discard Icon (Brawl, Tequila, Rag Time, Spring)</h3>
  <p>These cards show a card discard icon next to an effect symbol separated by an equals sign <code>=</code>. This means:</p>
  <ul>
    <li>When playing or activating the card, you must <strong>discard 1 additional card from your hand</strong>.</li>
    <li><strong>Brawl (Rvačka):</strong> All other players must discard 1 card from hand or in play (requires discarding 1 extra card from hand).</li>
    <li><strong>Tequila:</strong> Heals 1 life point (requires discarding 1 card from hand). <em>Note:</em> Tequila is NOT Beer and cannot be played out of turn!</li>
    <li><strong>Rag Time:</strong> Green card — discard it and 1 card from hand to take 1 card from any player at any distance (Panic! effect).</li>
    <li><strong>Spring (Pružina):</strong> Green card — discard it and 1 card from hand to discard 1 card from any player at any distance (Cat Balou effect).</li>
  </ul>
</div>
"""
    },
    {
        "id": "dc-8-a-3-hraci",
        "category": "dodge-city",
        "categoryTitle": "🟢 Dodge City",
        "title": "3. Rules for 8 Players and 3 Players",
        "icon": "users",
        "content": """
<div class="rule-section-header">
  <span class="section-tag">Dodge City</span>
  <h2>3. Rules for 8 Players and 3 Players</h2>
  <p class="section-lead">Official variants expanding BANG! to 8 players or providing a fast-paced 3-player shootout.</p>
</div>

<div class="concept-card" style="border-left: 4px solid var(--accent-gold);">
  <h3>👥 Rules for 8 Players (2 Renegades)</h3>
  <p>In an 8-player game, deal 8 roles: <strong>1 Sheriff, 2 Deputies, 3 Outlaws, and 2 Renegades</strong>.</p>
  <ul>
    <li>Both Renegades <strong>play strictly independently for themselves</strong> (they do not form a team!).</li>
    <li><strong>Renegade Victory:</strong> To win, a Renegade must be the <strong>very last surviving player alive</strong> (they must eliminate the other Renegade as well, keeping the Sheriff for the final 1-on-1).</li>
    <li><strong>Critical Rule:</strong> If the Sheriff dies while both Renegades (or a Renegade and a Deputy) are alive, <strong>THE OUTLAWS WIN IMMEDIATELY</strong>, even if all Outlaws are already dead!</li>
  </ul>
</div>

<div class="concept-card" style="border-left: 4px solid #8e44ad; margin-top: 1.5rem;">
  <h3>🤠 Special Rules for 3 Players (Target Circle)</h3>
  <p>With 3 players, deal 3 face-up roles: <strong>Deputy, Outlaw, Renegade</strong>. Everyone knows each other's role:</p>
  <div class="concept-grid">
    <div class="concept-item">
      <span class="concept-badge">🛡️ Deputy</span>
      <p>Must eliminate the <strong>Renegade</strong>.</p>
    </div>
    <div class="concept-item">
      <span class="concept-badge">🗡️ Renegade</span>
      <p>Must eliminate the <strong>Outlaw</strong>.</p>
    </div>
    <div class="concept-item">
      <span class="concept-badge">💀 Outlaw</span>
      <p>Must eliminate the <strong>Deputy</strong>.</p>
    </div>
  </div>
  <ul style="margin-top: 1rem;">
    <li><strong>Instant Win:</strong> A player wins immediately if they personally deliver the fatal hit to their assigned target!</li>
    <li><strong>Eliminated by Someone Else:</strong> If your target is killed by the other player, the goal for both surviving players becomes <strong>being the last one standing</strong>.</li>
    <li>Bounty: Eliminating any player awards <strong>3 cards from the deck</strong>.</li>
    <li>Since there is no Sheriff, <strong>Jail can be played on anyone</strong>.</li>
    <li>Beer cards have no effect when only 2 players remain.</li>
  </ul>
</div>
"""
    },
    {
        "id": "dc-postavy",
        "category": "dodge-city",
        "categoryTitle": "🟢 Dodge City",
        "title": "4. 15 Dodge City Characters",
        "icon": "award",
        "content": """
<div class="rule-section-header">
  <span class="section-tag">Dodge City</span>
  <h2>4. 15 Dodge City Characters</h2>
  <p class="section-lead">Complete breakdown of all 15 western character abilities introduced in Dodge City.</p>
</div>

<div class="characters-rules-grid">
  <div class="char-rule-box">
    <h4>Apache Kid (3 lives)</h4>
    <p>Cards of Diamond suit (♦) played by other players have no effect on him (BANG!, Cat Balou, Panic!, Duel...). Diamond weapons equipped by opponents still shoot at him normally!</p>
  </div>

  <div class="char-rule-box">
    <h4>Belle Star (4 lives)</h4>
    <p>During her turn, cards in play in front of other players (Barrel, Mustang, Hideout, green cards, weapons) have no effect.</p>
  </div>

  <div class="char-rule-box">
    <h4>Bill Noface (4 lives)</h4>
    <p>In Phase 1, draws 1 card plus 1 card for each life point currently missing (e.g. at 1 life out of 4, draws 1 + 3 = 4 cards!).</p>
  </div>

  <div class="char-rule-box">
    <h4>Chuck Wengam (4 lives)</h4>
    <p>During his turn, he may lose 1 life point to draw 2 cards from the deck. Can do this multiple times, but cannot drop to 0 lives.</p>
  </div>

  <div class="char-rule-box">
    <h4>Doc Holyday (4 lives)</h4>
    <p>Up to twice per turn, may discard 2 cards from hand to shoot a free BANG! effect. Does not count toward the 1 BANG! per turn limit.</p>
  </div>

  <div class="char-rule-box">
    <h4>Elena Fuente (3 lives)</h4>
    <p>May use any card from her hand as a Missed! card.</p>
  </div>

  <div class="char-rule-box">
    <h4>Greg Digger (4 lives)</h4>
    <p>Whenever another character is eliminated, Greg Digger immediately regains 2 life points (up to his starting maximum).</p>
  </div>

  <div class="char-rule-box">
    <h4>Herb Hunter (4 lives)</h4>
    <p>Whenever another character is eliminated, Herb Hunter immediately draws 2 cards from the draw deck.</p>
  </div>

  <div class="char-rule-box">
    <h4>José Delgado (4 lives)</h4>
    <p>Up to twice per turn, may discard a blue-bordered card from hand to draw 2 cards from the deck.</p>
  </div>

  <div class="char-rule-box">
    <h4>Molly Stark (4 lives)</h4>
    <p>Whenever she plays or discards a card out of turn (Missed!, Beer, BANG! in a Duel or on Indians), she immediately draws 1 card from the deck.</p>
  </div>

  <div class="char-rule-box">
    <h4>Pat Brennan (4 lives)</h4>
    <p>In Phase 1, instead of drawing 2 cards, may take 1 card in play in front of any player (including weapons or green cards).</p>
  </div>

  <div class="char-rule-box">
    <h4>Pixie Pete (3 lives)</h4>
    <p>In Phase 1, draws 3 cards from the deck instead of 2.</p>
  </div>

  <div class="char-rule-box">
    <h4>Sean Mallory (3 lives)</h4>
    <p>In Phase 3, may hold up to 10 cards in hand regardless of his current life points.</p>
  </div>

  <div class="char-rule-box">
    <h4>Tequila Joe (4 lives)</h4>
    <p>Whenever he plays a Beer card, he regains 2 life points instead of 1. (Does not apply to Saloon or Tequila cards).</p>
  </div>

  <div class="char-rule-box">
    <h4>Vera Custer (3 lives)</h4>
    <p>At the start of her turn, chooses the special ability of any other living character. She keeps that ability until the start of her next turn.</p>
  </div>
</div>
"""
    },
    {
        "id": "dc-faq",
        "category": "dodge-city",
        "categoryTitle": "🟢 Dodge City",
        "title": "5. Official Dodge City FAQ (D1–D16)",
        "icon": "help-circle",
        "content": """
<div class="rule-section-header">
  <span class="section-tag">Dodge City FAQ</span>
  <h2>5. Official Dodge City FAQ (Questions D1–D16)</h2>
  <p class="section-lead">Authentic answers from the official rulebook clarifying common conflict situations.</p>
</div>

<div class="faq-rules-list">
  <div class="faq-rule-item">
    <h4>D1. Can I play Whisky, Tequila, or Canteen out of turn when losing my last life point?</h4>
    <p><strong>NO.</strong> Only the card Beer has the specific rule allowing it to be played out of turn on lethal damage.</p>
  </div>

  <div class="faq-rule-item">
    <h4>D2. Can I use a Barrel when targeted by Punch, Knife, Springfield, Buffalo Rifle, Howitzer, Pepperbox, or Derringer?</h4>
    <p><strong>YES.</strong> As a general rule, Barrel functions against all cards displaying a BANG! symbol.</p>
  </div>

  <div class="faq-rule-item">
    <h4>D3. If Vera Custer copies Vulture Sam and another player dies, who gets the dead player's cards?</h4>
    <p>They alternate taking cards! The one sitting closest to the dead player clockwise draws the first card, then the other, until all cards are taken.</p>
  </div>

  <div class="faq-rule-item">
    <h4>D4. If Slab the Killer plays Punch, Knife, Springfield, Buffalo Rifle, or Derringer, how many Missed! cards are needed?</h4>
    <p><strong>Only 1 Missed! card.</strong> Slab the Killer's ability applies strictly to the card BANG!, not to other cards with a BANG! effect.</p>
  </div>

  <div class="faq-rule-item">
    <h4>D5. Can I have Scope and Binoculars, or Mustang and Hideout in play at the same time?</h4>
    <p><strong>YES.</strong> All these cards have different names, so you can have them in play simultaneously and their effects stack.</p>
  </div>

  <div class="faq-rule-item">
    <h4>D6. What happens if there are two Dynamites in play and only 2 players remain?</h4>
    <p>If Dynamite does not explode, it must pass to the next player without Dynamite. If the other player already has one, it stays with the current player.</p>
  </div>

  <div class="faq-rule-item">
    <h4>D7. Can I have two Iron Plate cards in play?</h4>
    <p><strong>NO.</strong> You can never have two cards with the exact same name in play in front of you.</p>
  </div>

  <div class="faq-rule-item">
    <h4>D8. Can I play Tequila, Whisky, or Canteen when only 2 players remain?</h4>
    <p><strong>YES.</strong> They are not Beer cards. However, you still cannot play them out of turn on lethal damage.</p>
  </div>

  <div class="faq-rule-item">
    <h4>D9. If Tequila Joe is about to die and plays Beer, how many lives does he get?</h4>
    <p>He gets 2 lives per Beer. If hit by Dynamite from 1 life down to -2, playing two Beers brings him back to 2 lives (-2 + 4 = 2).</p>
  </div>

  <div class="faq-rule-item">
    <h4>D10. Does Apache Kid prevent other players from playing Diamond Missed! cards against his BANG!?</h4>
    <p><strong>NO.</strong> Apache Kid's ability only protects him from cards played against him by players during their turn.</p>
  </div>

  <div class="faq-rule-item">
    <h4>D11. How many cards does Vulture Sam get if Sean Mallory dies?</h4>
    <p>Vulture Sam takes all cards Sean Mallory had, both in hand and in play.</p>
  </div>

  <div class="faq-rule-item">
    <h4>D12. How many cards can Sean Mallory hold in hand?</h4>
    <p>Under official Dodge City rules, up to 10 cards.</p>
  </div>

  <div class="faq-rule-item">
    <h4>D13. If Vera Custer is in Jail, can she copy Lucky Duke before checking Jail?</h4>
    <p><strong>NO.</strong> Vera Custer copies a character during Phase 1. If in Jail, Phase 1 is skipped if she fails the check.</p>
  </div>

  <div class="faq-rule-item">
    <h4>D14. How do Conestoga and Rag Time work?</h4>
    <p>They allow you to draw 1 card from any player (hand or in play) regardless of distance.</p>
  </div>

  <div class="faq-rule-item">
    <h4>D15. At what distance can Doc Holyday shoot when using his ability?</h4>
    <p>At any distance within his equipped weapon range.</p>
  </div>

  <div class="faq-rule-item">
    <h4>D16. Can I discard Pepperbox or Knife against Indians! or during a Duel?</h4>
    <p><strong>NO.</strong> In those situations, you must discard an actual BANG! card.</p>
  </div>
</div>
"""
    }
]
