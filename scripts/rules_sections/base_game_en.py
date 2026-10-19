# -*- coding: utf-8 -*-
"""
Official rules of BANG! Base Game in English.
"""

BASE_GAME_SECTIONS_EN = [
    {
        "id": "base-cile-a-role",
        "category": "base",
        "categoryTitle": "🎯 BANG! Base Game",
        "title": "1. Introduction, Game Goals & Roles (4–7 Players)",
        "icon": "target",
        "content": """
<div class="rule-section-header">
  <span class="section-tag">BANG! Base Game</span>
  <h2>1. Introduction, Game Goals &amp; Roles (4–7 Players)</h2>
  <p class="section-lead">BANG! is a western shootout card game between the Sheriff and a band of Outlaws trying to gun him down. The Deputies defend the Sheriff in secret, but there is also a lone Renegade pursuing his own selfish agenda!</p>
</div>

<div class="roles-grid">
  <div class="role-card role-sheriff">
    <div class="role-badge">Public Role (Face Up)</div>
    <h3>⭐️ Sheriff</h3>
    <div class="role-life">+1 life point above character card</div>
    <p><strong>Goal:</strong> Preserve law and order. Must eliminate all Outlaws and the Renegade.</p>
    <div class="role-rules">
      <ul>
        <li>Whoever receives the Sheriff role card <strong>immediately reveals it face-up</strong>. All other players keep their roles secret.</li>
        <li>Always takes the <strong>first turn of the game</strong>, and play continues clockwise.</li>
        <li>Plays with <strong>one additional life point</strong> (e.g. 4 bullets on character card = 5 life points).</li>
        <li><strong>Important Setup Rule:</strong> Even though the Sheriff has +1 life, at the start of the game they receive cards in hand equal only to the bullets printed on their character card (e.g. 4 cards, not 5!).</li>
        <li><strong>Immunity:</strong> The Sheriff cannot be put in <em>Jail</em>!</li>
        <li><strong>Sheriff Penalty:</strong> If the Sheriff personally eliminates a Deputy, the Sheriff must discard <strong>all cards from hand and in play</strong> as a penalty!</li>
      </ul>
    </div>
  </div>

  <div class="role-card role-deputy">
    <div class="role-badge">Secret Role</div>
    <h3>🛡️ Deputy</h3>
    <div class="role-life">Life points equal to character card</div>
    <p><strong>Goal:</strong> Protect the Sheriff at all costs and eliminate all Outlaws and the Renegade.</p>
    <div class="role-rules">
      <ul>
        <li>Plays undercover and must never reveal their secret role card.</li>
        <li>Shares victory with the Sheriff: if the Sheriff wins, all Deputies win too, <strong>even if already eliminated during the game</strong>!</li>
      </ul>
    </div>
  </div>

  <div class="role-card role-outlaw">
    <div class="role-badge">Secret Role</div>
    <h3>💀 Outlaw</h3>
    <div class="role-life">Life points equal to character card</div>
    <p><strong>Goal:</strong> Eliminate the Sheriff. Outlaws may even shoot each other to claim the bounty.</p>
    <div class="role-rules">
      <ul>
        <li><strong>Immediate Victory:</strong> The Outlaws win immediately the moment the Sheriff is eliminated (unless the sole survivor is the Renegade).</li>
        <li>All Outlaws win together as a team, including those who died earlier in the shootout!</li>
        <li><strong>Bounty on Outlaws:</strong> Any player who eliminates an Outlaw (even another Outlaw) immediately draws a reward of <strong>3 cards from the draw deck</strong>!</li>
      </ul>
    </div>
  </div>

  <div class="role-card role-renegade">
    <div class="role-badge">Secret Role</div>
    <h3>🗡️ Renegade</h3>
    <div class="role-life">Life points equal to character card</div>
    <p><strong>Goal:</strong> Become the new Sheriff by being the last surviving player alive.</p>
    <div class="role-rules">
      <ul>
        <li>Plays completely for himself.</li>
        <li><strong>Critical Rule:</strong> Must kill the Sheriff <strong>last in a final 1-on-1 duel</strong>.</li>
        <li>If the Sheriff dies while any Deputies or Outlaws are still alive, <strong>the Outlaws win immediately and the Renegade loses</strong>!</li>
      </ul>
    </div>
  </div>
</div>

<div class="callout callout-info">
  <h4>📋 Role Breakdown by Player Count</h4>
  <table class="rules-table">
    <thead>
      <tr>
        <th>Player Count</th>
        <th>Sheriff ⭐️</th>
        <th>Deputy 🛡️</th>
        <th>Outlaws 💀</th>
        <th>Renegade 🗡️</th>
      </tr>
    </thead>
    <tbody>
      <tr><td><strong>4 Players</strong></td><td>1</td><td>0</td><td>2</td><td>1</td></tr>
      <tr><td><strong>5 Players</strong></td><td>1</td><td>1</td><td>2</td><td>1</td></tr>
      <tr><td><strong>6 Players</strong></td><td>1</td><td>1</td><td>3</td><td>1</td></tr>
      <tr><td><strong>7 Players</strong></td><td>1</td><td>2</td><td>3</td><td>1</td></tr>
      <tr><td><strong>8 Players</strong> <em>(Dodge City)</em></td><td>1</td><td>2</td><td>3</td><td>2</td></tr>
    </tbody>
  </table>
</div>

<div class="callout callout-warning">
  <h4>🏆 End of Game &amp; Victory Conditions</h4>
  <p>The game ends immediately when either condition is met:</p>
  <ol>
    <li><strong>The Sheriff is eliminated:</strong> If the only player surviving is the <strong>Renegade</strong>, the Renegade wins. Otherwise, the <strong>Outlaws win</strong> as a team (even eliminated Outlaws).</li>
    <li><strong>All Outlaws and the Renegade are eliminated:</strong> The <strong>Sheriff and all Deputies win</strong> (even dead Deputies).</li>
  </ol>
  <p><strong>Example:</strong> All Outlaws are dead and the Sheriff just lost his last life point. There is still 1 Deputy and the Renegade alive. Nevertheless, the <strong>Outlaws win</strong> because the Sheriff died before the Renegade was alone with him!</p>
</div>
"""
    },
    {
        "id": "base-priprava-hry",
        "category": "base",
        "categoryTitle": "🎯 BANG! Base Game",
        "title": "2. Game Setup, Characters & Life Points",
        "icon": "layers",
        "content": """
<div class="rule-section-header">
  <span class="section-tag">BANG! Base Game</span>
  <h2>2. Game Setup, Characters &amp; Life Points</h2>
  <p class="section-lead">Each player embodies a unique western character with a distinct special ability and starting health.</p>
</div>

<div class="steps-container">
  <div class="step-box">
    <div class="step-num">1</div>
    <div class="step-content">
      <h4>Dealing Role Cards</h4>
      <p>Shuffle the required role cards according to the number of players. Deal 1 face-down to each player. The Sheriff reveals his card face-up immediately; all other roles remain secret.</p>
    </div>
  </div>

  <div class="step-box">
    <div class="step-num">2</div>
    <div class="step-content">
      <h4>Dealing Characters &amp; Bullets Tracker</h4>
      <p>Shuffle the character cards. Each player receives 1 character card face-up, reads their name and announces their special ability. Each player takes a second character card face-down and slips it underneath to track life points (or uses player boards and wooden bullet tokens).</p>
      <p><em>Experienced Players Variant:</em> Deal 2 character cards to each player; they choose one to play and use the other to track lives.</p>
    </div>
  </div>

  <div class="step-box">
    <div class="step-num">3</div>
    <div class="step-content">
      <h4>Sheriff Bonus &amp; Starting Hand</h4>
      <p>The Sheriff plays with <strong>+1 extra life point</strong> (e.g., 4 bullets printed = 5 life points). Shuffle the playing cards and deal each player starting cards equal to the bullets printed on their character card.</p>
      <p><strong>Important Exception:</strong> Even though the Sheriff has 1 extra life point, at the start of the game they receive cards in hand equal only to the printed bullets (e.g. 4 cards, not 5!).</p>
    </div>
  </div>

  <div class="step-box">
    <div class="step-num">4</div>
    <div class="step-content">
      <h4>Draw Deck &amp; Discard Pile</h4>
      <p>Place the remaining playing cards face-down in the center of the table as the draw deck. Leave space next to it for the face-up discard pile.</p>
    </div>
  </div>
</div>

<div class="concept-card">
  <h3>❤️ What Bullets (Life Points) Mean</h3>
  <ul>
    <li>They represent <strong>current life points</strong>: how many times the character can be hit before being eliminated.</li>
    <li>They determine the <strong>maximum hand size limit at the end of your turn</strong> (in Phase 3). Fewer lives means fewer cards you can hold!</li>
    <li>Characters can heal (e.g., with Beer or Saloon), but <strong>can never exceed their starting maximum life points</strong>!</li>
  </ul>
</div>
"""
    },
    {
        "id": "base-proubeh-tahu",
        "category": "base",
        "categoryTitle": "🎯 BANG! Base Game",
        "title": "3. Turn Structure & 3 Phases (Draw, Play, Discard)",
        "icon": "clock",
        "content": """
<div class="rule-section-header">
  <span class="section-tag">BANG! Base Game</span>
  <h2>3. Turn Structure &amp; 3 Phases</h2>
  <p class="section-lead">The game proceeds in clockwise turns starting with the Sheriff. Each player's turn consists of 3 distinct phases.</p>
</div>

<div class="phase-card phase-1">
  <div class="phase-header">
    <span class="phase-tag">Phase 1</span>
    <h3>Phase 1: Draw Two Cards</h3>
  </div>
  <div class="phase-body">
    <p>Draw the top <strong>two cards from the draw deck</strong> into your hand.</p>
    <p>If the draw deck ever runs out of cards, shuffle the discard pile to create a fresh draw deck.</p>
    <div class="callout callout-info">
      <strong>Characters modifying Phase 1:</strong>
      <ul>
        <li><strong>Jesse Jones:</strong> May draw his 1st card randomly from any player's hand (2nd card from draw deck).</li>
        <li><strong>Pedro Ramirez:</strong> May draw his 1st card from the top of the discard pile.</li>
        <li><strong>Kit Carlson:</strong> Looks at top 3 cards of draw deck, chooses 2 for hand, returns 1 face-down to top of deck.</li>
        <li><strong>Black Jack:</strong> Shows the 2nd card drawn: if Hearts (♥) or Diamonds (♦), draws a 3rd bonus card (kept secret).</li>
        <li><strong>Pixie Pete:</strong> Draws 3 cards by default instead of 2.</li>
      </ul>
    </div>
  </div>
</div>

<div class="phase-card phase-2">
  <div class="phase-header">
    <span class="phase-tag">Phase 2</span>
    <h3>Phase 2: Play Any Number of Cards</h3>
  </div>
  <div class="phase-body">
    <p>You may play cards to help yourself, attack opponents, or aid teammates. You are not required to play any cards. You may play as many cards as you like, subject to <strong>3 core restrictions</strong>:</p>
    
    <div class="concept-grid">
      <div class="concept-item" style="border-left: 4px solid #c0392b;">
        <span class="concept-badge">Limit 1</span>
        <h4>Only 1 BANG! Card per Turn</h4>
        <p>You may play only <strong>one BANG! card per turn</strong>. (This does not apply if you have a <em>Volcanic</em> in play or play as <em>Willy the Kid</em>. Nor does it apply to cards with a BANG! effect, such as Gatling or Pepperbox).</p>
      </div>
      <div class="concept-item" style="border-left: 4px solid #2980b9;">
        <span class="concept-badge">Limit 2</span>
        <h4>Max 1 Copy of Same Card in Play</h4>
        <p>You cannot have <strong>two identical cards with the same name</strong> in play in front of you (e.g. you cannot have 2 Barrels or 2 Mustangs in play).</p>
      </div>
      <div class="concept-item" style="border-left: 4px solid #d35400;">
        <span class="concept-badge">Limit 3</span>
        <h4>Max 1 Weapon in Play</h4>
        <p>You may only have <strong>one weapon in play</strong>. Playing a new weapon replaces and discards your previously equipped weapon. You cannot play an identical weapon just to discard it from hand!</p>
      </div>
    </div>

    <div style="margin-top: 1rem;">
      <h4>Brown Border vs. Blue Border Cards:</h4>
      <ul>
        <li><strong>Brown Border (Immediate):</strong> Discarded face-up to the discard pile immediately upon resolving their effect (e.g. <em>BANG!, Missed!, Beer, Panic!, Cat Balou, Indians!, Duel</em>).</li>
        <li><strong>Blue Border (Equipment / Permanent):</strong> Placed face-up in front of you (exception: <em>Jail</em>, placed in front of another player). They stay in play providing continuous effects until removed by Cat Balou, Panic!, etc.</li>
      </ul>
    </div>
  </div>
</div>

<div class="phase-card phase-3">
  <div class="phase-header">
    <span class="phase-tag">Phase 3</span>
    <h3>Phase 3: Discard Excess Cards</h3>
  </div>
  <div class="phase-body">
    <p>Once Phase 2 is finished (you cannot or choose not to play more cards), check your hand size:</p>
    <ul>
      <li>Your <strong>hand size limit equals your current number of life points</strong> (visible bullets).</li>
      <li>Discard any excess cards face-up to the discard pile.</li>
      <li><strong>No voluntary discards:</strong> If you have cards equal to or fewer than your current life points, <strong>you cannot discard any cards voluntarily</strong>!</li>
    </ul>
    <p>Your turn ends and the player to your left takes their turn.</p>
  </div>
</div>
"""
    },
    {
        "id": "base-vzdalenost-a-dostrel",
        "category": "base",
        "categoryTitle": "🎯 BANG! Base Game",
        "title": "4. Distance, Weapon Range & Colt .45",
        "icon": "crosshair",
        "content": """
<div class="rule-section-header">
  <span class="section-tag">BANG! Base Game</span>
  <h2>4. Distance, Weapon Range &amp; Colt .45</h2>
  <p class="section-lead">Distinguishing between actual physical distance and weapon shot range is the most fundamental rule of BANG!.</p>
</div>

<div class="concept-card">
  <h3>The Player Circle and Base Distance 1</h3>
  <p>Distance between two players is the <strong>minimum number of seats between them</strong>, counting clockwise or counterclockwise:</p>
  <ul>
    <li>Players sitting directly to your immediate left and right are at <strong>distance 1</strong>.</li>
    <li>Players sitting one seat further away are at <strong>distance 2</strong>, and so on.</li>
    <li><strong>Eliminated Players:</strong> When a player is eliminated, they are removed from the circle and remaining players become closer to each other!</li>
  </ul>
</div>

<div class="callout callout-warning">
  <h4>⚠️ GOLDEN RULE: Weapons do NOT modify player distance!</h4>
  <p>Weapons modify only your <strong>maximum reach (shot range)</strong> for playing a BANG! card. <strong>Weapons NEVER reduce the actual distance</strong> for cards like <em>Panic!</em>.</p>
  <p><strong>Example:</strong> A player is at distance 2. You have a Winchester (range 5) in play. You can easily shoot them with a BANG! card. However, you <strong>CANNOT play Panic!</strong> (which requires distance 1) on them unless you also have a Scope in play!</p>
</div>

<div class="roles-grid">
  <div class="role-card">
    <div class="role-badge">Default Weapon</div>
    <h3>Colt .45 Revolver</h3>
    <p>Every player starts with a <strong>virtual Colt .45 with range 1</strong>. This weapon is not represented by a card. Until you play another weapon, you can only hit neighbors at distance 1.</p>
  </div>

  <div class="role-card">
    <div class="role-badge">Weapon Cards</div>
    <h3>Equipped Weapons</h3>
    <p>Identified by a blue border without bullet holes and a range number inside a sight icon (1 to 5). They replace the Colt .45 until replaced or removed.</p>
    <ul>
      <li><strong>Volcanic:</strong> Range 1, allows playing <em>any number of BANG! cards per turn</em>.</li>
      <li><strong>Schofield:</strong> Range 2</li>
      <li><strong>Remington:</strong> Range 3</li>
      <li><strong>Rev. Carabine:</strong> Range 4</li>
      <li><strong>Winchester:</strong> Range 5</li>
    </ul>
  </div>
</div>

<div class="concept-card" style="margin-top: 1.5rem;">
  <h3>🐎 Distance Modifier Cards &amp; Stacking</h3>
  <div class="concept-grid">
    <div class="concept-item">
      <span class="concept-badge">Defensive Cards</span>
      <h4>Mustang &amp; Hideout</h4>
      <p><strong>Increase the distance at which other players see you.</strong></p>
      <ul>
        <li><em>Mustang:</em> Others see you 1 further away.</li>
        <li><em>Hideout:</em> Others see you 1 further away.</li>
        <li><strong>Stacking:</strong> If you have both Mustang and Hideout in play, others see you <strong>2 further away in total</strong>! A direct neighbor (base distance 1) needs a weapon with range at least 3 to hit you.</li>
      </ul>
    </div>
    <div class="concept-item">
      <span class="concept-badge concept-badge-eff">Offensive Cards</span>
      <h4>Scope (Appaloosa) &amp; Binoculars</h4>
      <p><strong>Decrease the distance at which you see all other players.</strong></p>
      <ul>
        <li><em>Scope / Appaloosa:</em> You see others 1 closer.</li>
        <li><em>Binoculars:</em> You see others 1 closer.</li>
        <li><strong>Stacking:</strong> If you have both Scope and Binoculars in play, you see all players <strong>2 closer</strong>! A player at real distance 3 is seen at distance 1, within reach of your Colt .45 and Panic!.</li>
      </ul>
    </div>
  </div>
  <p style="margin-top: 0.75rem;"><em>Rules Note:</em> Distance lower than 1 is always treated as 1. Cards targeting distance 1 can be targeted at yourself (e.g., playing Panic! on your own card).</p>
</div>
"""
    },
    {
        "id": "base-karty-zraneni-a-pivo",
        "category": "base",
        "categoryTitle": "🎯 BANG! Base Game",
        "title": "5. Damage, Elimination & Beer Rules",
        "icon": "shield",
        "content": """
<div class="rule-section-header">
  <span class="section-tag">BANG! Base Game</span>
  <h2>5. Damage, Elimination &amp; Beer Rules</h2>
  <p class="section-lead">How to avoid hits, how healing works, and the exact official rules governing Beer.</p>
</div>

<div class="concept-card">
  <h3>💥 BANG! and Missed!</h3>
  <ul>
    <li>When targeted by a <strong>BANG!</strong> card, you may immediately play a <strong>Missed!</strong> card from your hand (out of turn) to cancel the shot.</li>
    <li>If you do not play Missed! (or Barrel fails), <strong>you lose 1 life point</strong> — slide your character card to cover one bullet.</li>
    <li>BANG! cards are always discarded after resolving, whether canceled or not.</li>
  </ul>
</div>

<div class="concept-card" style="border-left: 4px solid var(--accent-gold);">
  <h3>🍺 Beer Rules (Official Clarification)</h3>
  <p>A Beer card restores 1 life point (slide character card to reveal one more bullet). You can never exceed your starting life maximum. Beer can be played in <strong>only two specific ways</strong>:</p>
  
  <div class="concept-grid">
    <div class="concept-item">
      <span class="concept-badge">Way 1: During Your Turn</span>
      <h4>Normal Play in Phase 2</h4>
      <p>During Phase 2 of your own turn, you may play Beer from hand to heal 1 life point. You can play multiple Beers if you are missing multiple lives.</p>
    </div>
    <div class="concept-item">
      <span class="concept-badge concept-badge-sup">Way 2: Out of Turn</span>
      <h4>ONLY on Lethal Damage!</h4>
      <p>Out of turn, Beer can be played <strong>ONLY when suffering fatal damage</strong> (damage that would eliminate your last life point). You cannot play Beer out of turn if you take damage but still have 1 or more lives remaining!</p>
    </div>
  </div>

  <div class="callout callout-warning" style="margin-top: 1rem;">
    <h4>⚠️ Saving from Multi-Damage Lethal Hits</h4>
    <p>If you take more damage than your remaining lives (e.g. you have 2 lives and Dynamite explodes for 3 damage), you may play <strong>multiple Beer cards simultaneously</strong> as long as it brings you to at least 1 life point (2 - 3 + 2 Beers = 1 life). If you only had 1 Beer, you cannot play it and die (2 - 3 + 1 = 0)!</p>
  </div>

  <div class="callout callout-info" style="margin-top: 1rem;">
    <h4>👥 Two Players Rule: Beer has NO Healing Effect!</h4>
    <p>As soon as only <strong>2 players remain alive</strong> in the game, Beer cards have no healing effect. Playing Beer does not restore any life points (in Gold Rush, it can still be exchanged for 1 gold nugget).</p>
  </div>

  <div class="callout callout-purple" style="margin-top: 1rem;">
    <h4>🍷 Saloon is NOT Beer!</h4>
    <p>The <em>Saloon</em> card heals 1 life point for all players. <strong>Saloon is NOT a Beer</strong> — it cannot be played out of turn to save your character from lethal damage!</p>
  </div>
</div>

<div class="concept-card">
  <h3>☠️ Player Elimination</h3>
  <p>When a player loses their last life point and cannot save themselves with Beer:</p>
  <ol>
    <li>They are eliminated and <strong>immediately reveal their secret role card</strong>.</li>
    <li>They discard all cards from hand and in play to the discard pile.</li>
    <li><strong>Sheriff Penalty:</strong> If the Sheriff personally eliminated a Deputy, the Sheriff must discard all cards from hand and in play!</li>
    <li><strong>Outlaw Bounty:</strong> The killer who dealt the fatal blow to an Outlaw draws 3 cards from the deck immediately.</li>
  </ol>
</div>
"""
    },
    {
        "id": "base-barel-vezeni-dynamit-duel",
        "category": "base",
        "categoryTitle": "🎯 BANG! Base Game",
        "title": "6. Checking, Barrel, Jail, Dynamite & Duel",
        "icon": "book-open",
        "content": """
<div class="rule-section-header">
  <span class="section-tag">BANG! Base Game</span>
  <h2>6. Checking, Barrel, Jail, Dynamite &amp; Duel</h2>
  <p class="section-lead">Rules for key equipment, timed blue cards, and the "Draw!" (checking) mechanic.</p>
</div>

<div class="concept-card">
  <h3>🎴 The "Draw!" (Checking / Sejmutí) Mechanic</h3>
  <p>Every playing card features a suit (♥ Hearts, ♦ Diamonds, ♣ Clubs, ♠ Spades) and a rank (2 through Ace) in the bottom-left corner. When required to <strong>"draw!" (check)</strong>:</p>
  <ul>
    <li>Flip the top card of the draw deck face-up directly onto the discard pile.</li>
    <li>Check if its suit and/or rank matches the required condition.</li>
    <li>Card ranks ascend: <code>2, 3, 4, 5, 6, 7, 8, 9, 10, J, Q, K, A</code>.</li>
  </ul>
</div>

<div class="roles-grid">
  <div class="role-card">
    <div class="role-badge">Blue Card</div>
    <h3>🛢️ Barrel</h3>
    <p>When targeted by a BANG! card (or a BANG! effect like Gatling), you may <strong>"draw!"</strong>:</p>
    <ul>
      <li>If you reveal a <strong>Heart (♥)</strong>, the BANG! is canceled (as if you played Missed!).</li>
      <li>If any other suit is revealed, the Barrel failed — <strong>you may still play a Missed! card from your hand!</strong></li>
      <li>Barrel cannot be used against <em>Duel</em> or <em>Indians!</em>.</li>
    </ul>
  </div>

  <div class="role-card">
    <div class="role-badge">Blue Card</div>
    <h3>🔒 Jail</h3>
    <p>Played in front of any player <strong>except the Sheriff</strong> (the Sheriff can never be jailed!).</p>
    <ul>
      <li>At the start of the jailed player's turn (before Phase 1), they must <strong>"draw!"</strong>:</li>
      <li><strong>Heart (♥) revealed:</strong> Escape! Discard Jail and take the turn normally.</li>
      <li><strong>Any other suit:</strong> Discard Jail and <strong>skip your entire turn</strong> (Phases 1, 2, and 3).</li>
      <li>Jailed players can still be targeted and can play Missed! and Beer out of turn.</li>
    </ul>
  </div>

  <div class="role-card">
    <div class="role-badge">Blue Card</div>
    <h3>🧨 Dynamite</h3>
    <p>Play it in front of yourself. It stays there for an entire round until your next turn.</p>
    <ul>
      <li>At the start of your next turn (before Phase 1), you must <strong>"draw!"</strong>:</li>
      <li><strong>Spades between 2 and 9 (♠ 2–9):</strong> The Dynamite <strong>explodes</strong>! Discard it and immediately <strong>lose 3 life points</strong>! No bounty is awarded if killed by Dynamite.</li>
      <li><strong>Any other card:</strong> Pass the Dynamite to the player on your <strong>left</strong>, who will check on their turn.</li>
      <li><strong>Timing with Jail:</strong> If you have both Dynamite and Jail in front of you, <strong>Dynamite is ALWAYS resolved first</strong>!</li>
    </ul>
  </div>

  <div class="role-card">
    <div class="role-badge">Brown Card</div>
    <h3>⚔️ Duel</h3>
    <p>Challenge any player at any distance to a shootout.</p>
    <ul>
      <li>The challenged player must discard a BANG! card. Then the challenger must discard a BANG! card, and so on.</li>
      <li>The first player who <strong>fails to discard a BANG! card loses 1 life point</strong> and the Duel ends.</li>
      <li><strong>Missed! and Barrel CANNOT be used</strong> during a Duel.</li>
      <li>BANG! cards discarded during a Duel <strong>do not count toward the 1 BANG! limit per turn</strong>.</li>
    </ul>
  </div>
</div>
"""
    },
    {
        "id": "base-casova-posloupnost",
        "category": "base",
        "categoryTitle": "🎯 BANG! Base Game",
        "title": "7. Timing Sequence & Undoing Mistakes",
        "icon": "shuffle",
        "content": """
<div class="rule-section-header">
  <span class="section-tag">BANG! Base Game</span>
  <h2>7. Timing Sequence &amp; Undoing Mistakes</h2>
  <p class="section-lead">Official rules for handling inadvertent mistakes, timing orders, and resolving global cards.</p>
</div>

<div class="callout callout-gold">
  <h4>⏱️ The "Take-Back" Rule (Rulebook Page 9)</h4>
  <p>When you play a card from hand or use a character ability, <strong>you may take this action back as long as you have not yet played another card or used another ability</strong>. This is specifically designed for accidental rule oversights:</p>
  <ul>
    <li><strong>Shot out of range:</strong> If you play a BANG! on someone out of weapon range, take the BANG! back into your hand (and the defender takes back their Missed!).</li>
    <li><strong>Slab the Killer:</strong> If Slab shoots someone and they play 1 Missed! assuming it suffices, but don't have a second Missed!, they may take the Missed! card back and lose the life point instead.</li>
    <li><strong>Forgetting Barrel:</strong> If targeted by BANG! and you quickly play Missed! before remembering your Barrel, you may take the Missed! back and check the Barrel first (provided the attacker played no further card).</li>
  </ul>
</div>

<div class="concept-card">
  <h3>🔄 Resolving Multi-Target Cards</h3>
  <p>For cards targeting all other players (e.g. <em>Gatling, Indians!, General Store</em>):</p>
  <ul>
    <li>Effects resolve <strong>clockwise starting with the player to the left</strong> of the player who played the card.</li>
    <li>During Gatling, players with Barrels check their Barrel one by one in clockwise order.</li>
    <li>During General Store, the player who played the card picks first, then players choose in clockwise order. This selection cannot be interrupted by playing Panic!.</li>
  </ul>
</div>

<div class="concept-card">
  <h3>⚡ Suzy Lafayette vs. El Gringo (Timing Example)</h3>
  <p>Suzy Lafayette has a BANG! as her last card. She plays it and hits El Gringo:</p>
  <ol>
    <li>First, Suzy immediately draws 1 card from the deck because her hand is now empty (her ability triggers immediately).</li>
    <li>Then El Gringo takes this newly drawn card from Suzy's hand as his ability triggers from taking damage.</li>
    <li>Because Suzy's hand is empty again, <strong>she immediately draws another card from the deck</strong>!</li>
  </ol>
</div>
"""
    },
    {
        "id": "base-prehled-postav",
        "category": "base",
        "categoryTitle": "🎯 BANG! Base Game",
        "title": "8. All 16 Base Characters & Bonus Characters",
        "icon": "users",
        "content": """
<div class="rule-section-header">
  <span class="section-tag">BANG! Base Game</span>
  <h2>8. All 16 Base Characters &amp; Bonus Characters</h2>
  <p class="section-lead">Official descriptions of all 16 character abilities from the base game and 3 bonus characters.</p>
</div>

<div class="characters-rules-grid">
  <div class="char-rule-box">
    <h4>Bart Cassidy (4 lives)</h4>
    <p>Each time he loses a life point, he immediately draws a card from the draw deck. Does not trigger on lethal damage.</p>
  </div>

  <div class="char-rule-box">
    <h4>Black Jack (4 lives)</h4>
    <p>In Phase 1, he shows the second card drawn: if Hearts (♥) or Diamonds (♦), he draws 1 additional card (kept secret).</p>
  </div>

  <div class="char-rule-box">
    <h4>Calamity Janet (4 lives)</h4>
    <p>Can use BANG! cards as Missed! cards and vice versa. Playing Missed! as BANG! counts toward her 1 BANG! per turn limit.</p>
  </div>

  <div class="char-rule-box">
    <h4>El Gringo (3 lives)</h4>
    <p>Each time he loses a life point due to a player, he draws 1 random card from that player's hand. Does not trigger on lethal damage or Dynamite.</p>
  </div>

  <div class="char-rule-box">
    <h4>Jesse Jones (4 lives)</h4>
    <p>In Phase 1, he may draw his first card from any player's hand instead of the deck. His second card is drawn from the deck.</p>
  </div>

  <div class="char-rule-box">
    <h4>Jourdonnais (4 lives)</h4>
    <p>Has a built-in virtual Barrel: when targeted by BANG!, he may "draw!" on Hearts (♥) to cancel it. Can also have a real Barrel in play and check twice!</p>
  </div>

  <div class="char-rule-box">
    <h4>Kit Carlson (4 lives)</h4>
    <p>In Phase 1, looks at the top 3 cards of the deck; chooses 2 for his hand and places 1 back on top face-down.</p>
  </div>

  <div class="char-rule-box">
    <h4>Lucky Duke (4 lives)</h4>
    <p>Whenever required to "draw!" (check), flips the top 2 cards from the deck and chooses whichever result he prefers. Both cards are then discarded.</p>
  </div>

  <div class="char-rule-box">
    <h4>Paul Regret (3 lives)</h4>
    <p>Has a built-in virtual Mustang: all other players see him at a distance increased by 1. Can also have a real Mustang and be at +2 distance!</p>
  </div>

  <div class="char-rule-box">
    <h4>Pedro Ramirez (4 lives)</h4>
    <p>In Phase 1, he may draw his first card from the top of the discard pile instead of the draw deck.</p>
  </div>

  <div class="char-rule-box">
    <h4>Rose Doolan (4 lives)</h4>
    <p>Has a built-in virtual Scope: she sees all other players at a distance reduced by 1. Can also equip a Scope to see everyone 2 closer!</p>
  </div>

  <div class="char-rule-box">
    <h4>Sid Ketchum (4 lives)</h4>
    <p>May discard 2 cards from hand at any time to regain 1 life point. Can do this multiple times and can use it to survive lethal damage.</p>
  </div>

  <div class="char-rule-box">
    <h4>Slab the Killer (4 lives)</h4>
    <p>To cancel his BANG! card, a player must play 2 Missed! effects. A successful Barrel check only counts as 1 of the 2 Missed! effects.</p>
  </div>

  <div class="char-rule-box">
    <h4>Suzy Lafayette (4 lives)</h4>
    <p>As soon as she has no cards in hand, she immediately draws 1 card from the draw deck. (Does not function during an ongoing Duel).</p>
  </div>

  <div class="char-rule-box">
    <h4>Vulture Sam (4 lives)</h4>
    <p>Whenever a character is eliminated, he takes all cards from that player's hand and in play into his own hand.</p>
  </div>

  <div class="char-rule-box">
    <h4>Willy the Kid (4 lives)</h4>
    <p>May play any number of BANG! cards during his turn (has a built-in permanent Volcanic effect).</p>
  </div>
</div>

<div class="callout callout-purple" style="margin-top: 1.5rem;">
  <h4>🎁 Bonus Characters</h4>
  <div class="characters-rules-grid">
    <div class="char-rule-box">
      <h4>Claus "The Saint" (3 lives)</h4>
      <p>In Phase 1, draws cards equal to the number of players + 1. Keeps 2 cards for himself and gives 1 card to each other player.</p>
    </div>
    <div class="char-rule-box">
      <h4>Johnny Kisch (4 lives)</h4>
      <p>Whenever he puts a card into play, all cards with the same name already in play anywhere on the table are discarded.</p>
    </div>
    <div class="char-rule-box">
      <h4>Uncle Will (4 lives)</h4>
      <p>Once per turn, he may play any card from his hand as a General Store card.</p>
    </div>
  </div>
</div>
"""
    }
]
