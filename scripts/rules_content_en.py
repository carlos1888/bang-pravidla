# -*- coding: utf-8 -*-

RULES_SECTIONS_EN = [
    {
        "id": "uvod-a-cile",
        "title": "1. Introduction & Win Conditions of All Roles",
        "icon": "target",
        "content": """
<div class="rule-section-header">
  <span class="section-tag">Core Concept</span>
  <h2>1. Introduction &amp; Win Conditions of All Roles</h2>
  <p class="section-lead">BANG! is a tactical western shootout game. When playing <strong>Dynamite Box together with Legends</strong>, you play with the complete set of all official expansions simultaneously. Here is an overview of all roles and their victory conditions.</p>
</div>

<div class="roles-grid">
  <div class="role-card role-sheriff">
    <div class="role-badge">Public Role</div>
    <h3>⭐️ Sheriff</h3>
    <div class="role-life">+1 bullet (life point) above character card</div>
    <p><strong>Goal:</strong> Preserve law and order. Must eliminate all Outlaws and the Renegade.</p>
    <div class="role-rules">
      <ul>
        <li>Plays with face-up role card at all times.</li>
        <li>Always starts the game as the first player.</li>
        <li><strong>Immunity:</strong> Cannot be targeted by <em>Jail</em> or <em>Ghost Car</em>.</li>
        <li><strong>Penalty:</strong> If the Sheriff personally eliminates a Deputy, the Sheriff must discard all cards from hand and in play!</li>
      </ul>
    </div>
  </div>

  <div class="role-card role-deputy">
    <div class="role-badge">Secret Role</div>
    <h3>🛡️ Deputy</h3>
    <div class="role-life">Life points based on character</div>
    <p><strong>Goal:</strong> Protect the Sheriff at all costs and eliminate all Outlaws and the Renegade.</p>
    <div class="role-rules">
      <ul>
        <li>Plays in secret and must not reveal their role.</li>
        <li>Shares victory condition with the Sheriff.</li>
        <li><strong>Collective Victory:</strong> If the Sheriff wins, the Deputy wins too, even if eliminated during the match!</li>
      </ul>
    </div>
  </div>

  <div class="role-card role-outlaw">
    <div class="role-badge">Secret Role</div>
    <h3>💀 Outlaw</h3>
    <div class="role-life">Life points based on character</div>
    <p><strong>Goal:</strong> Kill the Sheriff by any means necessary.</p>
    <div class="role-rules">
      <ul>
        <li>Wins immediately as soon as the Sheriff dies (unless the sole survivor is the Renegade).</li>
        <li>All Outlaws win together as a team, including those already eliminated.</li>
        <li><strong>Bounty:</strong> Whoever eliminates an Outlaw (even another Outlaw) immediately draws <strong>3 cards from the deck</strong>!</li>
      </ul>
    </div>
  </div>

  <div class="role-card role-renegade">
    <div class="role-badge">Secret Role</div>
    <h3>🗡️ Renegade</h3>
    <div class="role-life">Life points based on character</div>
    <p><strong>Goal:</strong> Become the new Sheriff. Be the last surviving player in the game!</p>
    <div class="role-rules">
      <ul>
        <li>Plays entirely for themselves.</li>
        <li><strong>Critical Rule:</strong> Must kill the Sheriff last in a final 1-on-1 duel.</li>
        <li>If the Sheriff dies before all Deputies and Outlaws are dead, <strong>Outlaws win and the Renegade loses</strong>!</li>
      </ul>
    </div>
  </div>
</div>

<div class="callout callout-info">
  <h4>👥 Special Rules for 8 Players (Dodge City)</h4>
  <p>With 8 players, use 8 roles: <strong>1 Sheriff, 2 Deputies, 3 Outlaws, and 2 Renegades</strong>.</p>
  <p>Both Renegades play independently. If the Sheriff ends up facing both Renegades and the Sheriff dies, <strong>Outlaws win</strong> (even if they are all already dead)!</p>
</div>

<div class="callout callout-warning">
  <h4>🤠 Special Rules for 3 Players</h4>
  <p>Deal 3 face-up roles: <strong>Deputy, Outlaw, Renegade</strong>. All players know each other's roles:</p>
  <ul>
    <li><strong>Deputy</strong> must kill the Renegade.</li>
    <li><strong>Renegade</strong> must kill the Outlaw.</li>
    <li><strong>Outlaw</strong> must kill the Deputy.</li>
  </ul>
  <p>A player wins immediately if they personally deliver the final fatal shot to their target. If someone else kills your target, both survivors' goal becomes being the last one standing. 3 cards reward for each kill. Jail can be played on anyone.</p>
</div>

<div class="callout callout-purple">
  <h4>👻 Shadow Renegade &amp; Shadow Gunslingers Variant (Gold Rush)</h4>
  <p>In this variant, dead players do not stay eliminated! On their turns, they return as ghost gunners with 0 lives: draw 2 cards, can shoot and buy equipment, and discard all cards at turn end (keeping Gold Nuggets).</p>
  <p><strong>Shadow Renegade:</strong> At the start of each of their turns, looks at revealed roles on the table (Sheriff and dead players) and joins the team with more revealed roles. Ties join the Outlaws!</p>
</div>
"""
    },
    {
        "id": "priprava-hry",
        "title": "2. Game Components and Table Setup (All Expansions)",
        "icon": "box",
        "content": """
<div class="rule-section-header">
  <span class="section-tag">Preparation</span>
  <h2>2. Game Components and Table Setup (All Expansions)</h2>
  <p class="section-lead">When combining all expansions from Dynamite Box and Legends, prepare the table components in this exact order.</p>
</div>

<div class="steps-container">
  <div class="step-box">
    <div class="step-num">1</div>
    <div class="step-text">
      <h4>Roles, Characters &amp; Bullets (Life Points)</h4>
      <p>Deal 1 secret Role card to each player (Sheriff reveals immediately; +1 extra bullet). Deal 1 Character card (Legends Side A). Place bullet tokens equal to character lives onto player boards.</p>
    </div>
  </div>

  <div class="step-box">
    <div class="step-num">2</div>
    <div class="step-text">
      <h4>Main Playing Deck &amp; Starting Hand</h4>
      <p>Shuffle all brown, blue, green, and orange cards into one shared draw deck. Deal starting cards to each player equal to their bullet count.</p>
    </div>
  </div>

  <div class="step-box">
    <div class="step-num">3</div>
    <div class="step-text">
      <h4>Fame Tokens &amp; Feat Deck (Legends)</h4>
      <p>Give each player 5 wooden Fame tokens of their color. Shuffle the Feat deck and lay out <strong>4 Feat cards face-up</strong> in the center of the table.</p>
    </div>
  </div>

  <div class="step-box">
    <div class="step-num">4</div>
    <div class="step-text">
      <h4>Gold Rush Equipment &amp; Gold Nuggets</h4>
      <p>Place Gold Nuggets in a common bank. Shuffle the equipment deck and reveal <strong>3 equipment cards face-up</strong> next to the draw deck.</p>
    </div>
  </div>

  <div class="step-box">
    <div class="step-num">5</div>
    <div class="step-text">
      <h4>The Train, Locomotive &amp; Stations (The Great Train Robbery)</h4>
      <p>Lay out stations in a row equal to player count. Place the locomotive at the first station (check: ♣/♠ = Ironhorse, ♥/♦ = Leland). Place 3 random railcars behind it.</p>
    </div>
  </div>

  <div class="step-box">
    <div class="step-num">6</div>
    <div class="step-text">
      <h4>Event Decks (High Noon / Fistful / Wild West Show)</h4>
      <p>Place the chosen event deck face-down next to the Sheriff. The Sheriff reveals a new event starting in Round 2.</p>
    </div>
  </div>
</div>
"""
    },
    {
        "id": "klicove-pojmy",
        "title": "3. Core Mechanics & Key Concepts",
        "icon": "book-open",
        "content": """
<div class="rule-section-header">
  <span class="section-tag">Game Mechanics</span>
  <h2>3. Core Mechanics &amp; Key Concepts</h2>
  <p class="section-lead">Detailed definitions of essential rules and mechanics that govern card interactions.</p>
</div>

<div class="concept-grid">
  <div class="concept-item">
    <span class="concept-badge">Playing a Card</span>
    <p>Playing a card directly from your hand (brown card for immediate effect, or putting a blue/green/orange card into play). <em>Subject to playing restrictions.</em></p>
  </div>
  <div class="concept-item">
    <span class="concept-badge concept-badge-sup">Using a Card — Master Term</span>
    <p>Triggering the effect of any card (from hand, in play, or character ability). Includes discarding green cards, paying equipment, and activating railcars.</p>
  </div>
  <div class="concept-item">
    <span class="concept-badge">Distance</span>
    <p>Actual physical distance between players around the table, modified by Mustang, Scope, Hideout, and character abilities. Determines who can target whom.</p>
  </div>
  <div class="concept-item">
    <span class="concept-badge concept-badge-gun">Weapon Range</span>
    <p>The maximum distance at which your BANG! cards can reach. <strong>Weapons do NOT change your distance</strong> to other players; they only modify your shot range.</p>
  </div>
</div>

<div class="callout callout-warning">
  <h4>🔄 Drawing from the Deck ("Checking"):</h4>
  <p>Flipping the top card of the draw deck to check its suit and value (e.g. for Barrel, Jail, Dynamite). The card is immediately placed onto the discard pile.</p>
  <ul>
    <li><strong>Lucky Duke:</strong> Flips 2 cards on every check and chooses the result he prefers.</li>
    <li><strong>Tumbleweed:</strong> Can be played immediately after any check to cancel it and force a redraw.</li>
  </ul>
</div>

<div class="callout callout-info">
  <h4>☠️ Elimination Checklist:</h4>
  <p>When a player loses their last life point and has no Beer, they are eliminated:</p>
  <ol>
    <li>Reveal secret Role card.</li>
    <li>Outlaw bounty: Killer draws 3 cards from the deck.</li>
    <li>Wanted card: Killer gets +2 cards and +1 Gold Nugget.</li>
    <li>Sheriff kills Deputy: Sheriff must discard ALL cards from hand and in play!</li>
    <li>Vulture Sam takes all remaining cards from the dead player.</li>
  </ol>
</div>
"""
    },
    {
        "id": "prubeh-kola",
        "title": "4. Detailed Turn Sequence and Player Turn (Step-by-Step)",
        "icon": "clock",
        "content": """
<div class="rule-section-header">
  <span class="section-tag">Game Flow</span>
  <h2>4. Detailed Turn Sequence and Player Turn (Step-by-Step)</h2>
  <p class="section-lead">The game proceeds clockwise, starting with the Sheriff. Each turn follows 5 strict phases in exact order.</p>
</div>

<div class="phase-card phase-0">
  <div class="phase-header">
    <span class="phase-tag">Phase 0</span>
    <h3>Start of Turn: Events, Train &amp; Timed Cards in Play</h3>
  </div>
  <div class="phase-body">
    <ul class="phase-steps-list">
      <li><strong>Sheriff only:</strong> From Round 2 onwards, reveals a new Event card and advances the Locomotive 1 station to the right.</li>
      <li><strong>Start of Turn events:</strong> Resolve effects like <em>High Noon</em> (1 life point lost).</li>
      <li><strong>STRICT TIMING ORDER OF CARDS IN PLAY:</strong>
        <div class="timing-subgrid">
          <div class="timing-item"><strong>1. Dynamite</strong> Check ♠ 2–9. Explodes for 3 lives; else passes to the left.</div>
          <div class="timing-item"><strong>2. Jail</strong> Check ♥ to escape. Fail = skip Phases 1, 2, and 3!</div>
          <div class="timing-item"><strong>3. Bomb</strong> Check ♥/♦ to pass left; ♣/♠ removes 2 tokens (explodes at 0).</div>
          <div class="timing-item"><strong>4. Rattlesnake</strong> Check ♠ = lose 1 life point. (Skipped if Jail failed!).</div>
        </div>
      </li>
    </ul>
  </div>
</div>

<div class="phase-card phase-1">
  <div class="phase-header">
    <span class="phase-tag">Phase 1</span>
    <h3>Draw Cards (2 Cards by Default)</h3>
  </div>
  <div class="phase-body">
    <p>Draw 2 cards from the draw deck into your hand. Character abilities apply (Jesse Jones, Pedro Ramirez, Kit Carlson, Pixie Pete, Bill Noface, Black Jack, Dutch Will).</p>
  </div>
</div>

<div class="phase-card phase-2">
  <div class="phase-header">
    <span class="phase-tag">Phase 2</span>
    <h3>Action Phase: Play Cards &amp; Purchases</h3>
  </div>
  <div class="phase-body">
    <p>Play any number of cards in any order, subject to core limits:</p>
    <ul class="phase-actions-list">
      <li><strong>Core Cards:</strong> Brown cards (immediate), Blue cards (into play). Limits: Max 1 BANG! per turn, max 1 weapon, max 1 card of same name in play.</li>
      <li><strong>Green Cards:</strong> Activate previously played green cards by discarding them.</li>
      <li><strong>Gold Rush:</strong> Buy equipment with Gold Nuggets, discard enemy equipment for cost + 1 nugget, exchange Beer for 1 nugget.</li>
      <li><strong>Train Heist:</strong> Advance train 1 station for free (must buy the railcar!), buy railcars by paying station costs.</li>
      <li><strong>Armed &amp; Dangerous:</strong> Deploy orange cards with 3 load tokens, charge cards by playing blue cards (+1 token), boost brown cards with tokens.</li>
      <li><strong>Legends:</strong> Fulfill active feats (place 2 Fame tokens). If you are a Legend (Side B), claim feats to deal 1 unblockable damage to another legend!</li>
    </ul>
  </div>
</div>

<div class="phase-card phase-3">
  <div class="phase-header">
    <span class="phase-tag">Phase 3</span>
    <h3>Discard Excess Cards &amp; Charging</h3>
  </div>
  <div class="phase-body">
    <p>Your hand size limit equals your <strong>current life points</strong>. Discard excess cards to the discard pile.</p>
    <div class="callout callout-warning">
      <h4>⚡ Charging Rule in Phase 3:</h4>
      <p>For <strong>EACH CARD</strong> discarded due to hand limit, immediately add <strong>1 load token</strong> to any orange card or your character card!</p>
    </div>
  </div>
</div>

<div class="phase-card phase-4">
  <div class="phase-header">
    <span class="phase-tag">Phase 4</span>
    <h3>Turn End &amp; Boasting of Feats (Legends)</h3>
  </div>
  <div class="phase-body">
    <p><strong>Boasting:</strong> If you did NOT accomplish any feat this turn (even if jailed!), flip a new feat card and place 1 Fame token on any active feat.</p>
    <p><strong>BIRTH OF A LEGEND:</strong> Placing your 5th Fame token instantly transforms your character into a <strong>LEGEND</strong>! Flip to Side B and heal up to 3 life points!</p>
  </div>
</div>
"""
    },
    {
        "id": "specialni-rozsireni",
        "title": "5. Complete Rules for All Dynamite Box Expansions & Legends",
        "icon": "layers",
        "content": """
<div class="rule-section-header">
  <span class="section-tag">Expansions Guide</span>
  <h2>5. Complete Rules for All Dynamite Box Expansions &amp; Legends</h2>
  <p class="section-lead">A comprehensive summary of all 8 expansions and promo packs included in the Dynamite Box and Legends.</p>
</div>

<div class="expansion-detail-card">
  <h3>🟢 Dodge City</h3>
  <p>Introduces green cards with delayed activation, rules for 8 players (2 Renegades), and characters with discard-two-cards costs.</p>
</div>

<div class="expansion-detail-card">
  <h3>🪙 Gold Rush</h3>
  <p>Introduces Gold Nuggets currency, black permanent equipment cards, brown instant equipment cards, and the Ghost Gunners variant.</p>
</div>

<div class="expansion-detail-card">
  <h3>🟠 Armed &amp; Dangerous</h3>
  <p>Introduces orange dangerous cards, load tokens, weapon upgrades, and card boosts.</p>
</div>

<div class="expansion-detail-card">
  <h3>🚂 The Great Train Robbery</h3>
  <p>Introduces the train, locomotive, stations, railcars, and moving train mechanics.</p>
</div>

<div class="expansion-detail-card">
  <h3>🌟 Legends</h3>
  <p>Introduces heroic feat cards, wooden Fame tokens, and transforming characters into powerful Legends on Side B.</p>
</div>

<div class="expansion-detail-card">
  <h3>⚡ Event Expansions (High Noon, Fistful of Cards, Wild West Show)</h3>
  <p>Global events revealed each round that alter the rules of the entire table.</p>
</div>
"""
    }
]
