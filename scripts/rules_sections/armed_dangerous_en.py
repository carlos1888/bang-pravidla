# -*- coding: utf-8 -*-
"""
Official rules of BANG! Armed & Dangerous expansion in English.
"""

ARMED_DANGEROUS_SECTIONS_EN = [
    {
        "id": "ad-zetony-a-oranzove-karty",
        "category": "armed-dangerous",
        "categoryTitle": "🟠 Armed & Dangerous",
        "title": "1. Load Tokens & Orange Dangerous Cards",
        "icon": "zap",
        "content": """
<div class="rule-section-header">
  <span class="section-tag">Armed &amp; Dangerous</span>
  <h2>1. Load Tokens &amp; Orange Dangerous Cards</h2>
  <p class="section-lead">Introducing 32 load tokens and brand-new orange-bordered Dangerous cards that function as rechargeable gear.</p>
</div>

<div class="concept-card">
  <h3>⚡ Load Tokens Rules</h3>
  <ul>
    <li>Place all load tokens in the center of the table as a shared bank (32 tokens).</li>
    <li>Take tokens from the bank when gaining them, and return them to the bank when spent.</li>
    <li>Tokens are placed on Dangerous cards and/or your character card.</li>
    <li><strong>STRICT 4-TOKEN LIMIT:</strong> No Dangerous card and no character card can ever hold <strong>more than 4 load tokens</strong>! Ignore any instructions to add more beyond 4.</li>
  </ul>
</div>

<div class="concept-card" style="border-left: 4px solid #e67e22;">
  <h3>🟠 Orange Dangerous Cards</h3>
  <p>Dangerous cards have an orange border and behave like blue cards with these additions:</p>
  <ul>
    <li><strong>Deploy with 3 Tokens:</strong> When played, deploy the card in front of you and <strong>place 3 load tokens on it from the bank</strong>. <em>Exception:</em> The Bomb can be deployed in front of any player.</li>
    <li><strong>Insufficient Bank Tokens:</strong> If the bank does not have enough tokens (usually 3), <strong>you cannot play the Dangerous card</strong>!</li>
    <li><strong>Activating Effects:</strong> Pay the required number of tokens from that card into the bank to use its ability.</li>
    <li><strong>DEPLETION &amp; DISCARD:</strong> As soon as the last token is removed from a Dangerous card, <strong>the card is immediately discarded</strong>!</li>
    <li><strong>Cat Balou and Panic!:</strong> The card is taken without tokens (tokens return to bank). When replayed later, it receives 3 fresh tokens.</li>
  </ul>
</div>
"""
    },
    {
        "id": "ad-dobijeni-a-vylepsovani",
        "category": "armed-dangerous",
        "categoryTitle": "🟠 Armed & Dangerous",
        "title": "2. Recharging, Dangerous Weapons & Upgrading",
        "icon": "battery-charging",
        "content": """
<div class="rule-section-header">
  <span class="section-tag">Armed &amp; Dangerous</span>
  <h2>2. Recharging, Dangerous Weapons &amp; Upgrading</h2>
  <p class="section-lead">Two official ways to recharge tokens, rules for dangerous orange weapons and boosted brown cards.</p>
</div>

<div class="concept-card">
  <h3>🔋 Two Official Recharging Methods</h3>
  <p>There are exactly 2 rulebook methods to add load tokens to your Dangerous cards or character (up to limit 4):</p>
  <div class="concept-grid">
    <div class="concept-item">
      <span class="concept-badge">Method 1</span>
      <h4>Play a Blue Card</h4>
      <p>Whenever you play a blue-bordered card, <strong>add 1 load token</strong> to any of your Dangerous cards in play or to your character.</p>
      <p><em>Includes Jail:</em> You gain a token even when playing Jail on an opponent! (You do not gain a token when receiving a card like Dynamite).</p>
    </div>

    <div class="concept-item">
      <span class="concept-badge concept-badge-eff">Method 2</span>
      <h4>Discard Excess Cards in Phase 3</h4>
      <p>Whenever you must discard cards in Phase 3 due to hand size limits, <strong>add 1 load token per card discarded</strong> to your Dangerous cards or character!</p>
      <p><em>Note:</em> You cannot discard voluntarily. These tokens cannot be used immediately as your turn ends.</p>
    </div>
  </div>
</div>

<div class="concept-card" style="margin-top: 1.5rem;">
  <h3>🔫 Dangerous Weapons (Orange Weapons)</h3>
  <ul>
    <li>Orange border, sight range icon. They replace your equipped weapon.</li>
    <li>They possess a <strong>special ability</strong> activated by paying load tokens <strong>when playing a BANG! card and before the target reacts</strong>.</li>
    <li><strong>IMPORTANT:</strong> These abilities can ONLY be triggered when playing an <strong>actual BANG! card</strong>, not cards with similar effects like Gatling or Flintlock!</li>
  </ul>
</div>

<div class="concept-card" style="border-left: 4px solid var(--accent-gold); margin-top: 1.5rem;">
  <h3>⭐ Upgradeable Brown Cards</h3>
  <p>Certain brown cards can be boosted by paying load tokens from your cards or character:</p>
  <ul>
    <li>Tokens can be taken from any combination of your Dangerous cards or character.</li>
    <li>Upgrades can be purchased <strong>multiple times</strong> if you can afford the tokens!</li>
    <li><em>Example:</em> <strong>A Little Nip (Malý doušek)</strong> heals 1 life point plus 1 extra life per 3 tokens paid. Paying 6 tokens heals 3 life points in total!</li>
  </ul>
</div>
"""
    },
    {
        "id": "ad-bomba-a-karty",
        "category": "armed-dangerous",
        "categoryTitle": "🟠 Armed & Dangerous",
        "title": "3. The Bomb, Key Cards & Interactions",
        "icon": "alert-triangle",
        "content": """
<div class="rule-section-header">
  <span class="section-tag">Armed &amp; Dangerous</span>
  <h2>3. The Bomb, Key Cards &amp; Interactions</h2>
  <p class="section-lead">Resolution of the Bomb and unique card interactions in Armed &amp; Dangerous.</p>
</div>

<div class="concept-card" style="border-left: 4px solid #c0392b;">
  <h3>💣 The Bomb (Detailed Resolution)</h3>
  <p>Play in front of <strong>any player</strong> with 3 load tokens from the bank:</p>
  <ul>
    <li>At the start of your turn, if the Bomb is in front of you, <strong>"draw!" (check)</strong>:
      <ul>
        <li>Reveal <strong>♥ or ♦ (Red):</strong> Pass the Bomb to the player on your left.</li>
        <li>Reveal <strong>♣ or ♠ (Black):</strong> Remove <strong>2 load tokens</strong> from the Bomb.</li>
      </ul>
    </li>
    <li><strong>EXPLOSION:</strong> When the Bomb runs out of tokens, <strong>it explodes!</strong> Discard it and <strong>lose 2 life points</strong>!</li>
    <li><strong>Instant Rust Explosion:</strong> If the card <em>Rust</em> drains the last tokens from a Bomb, <strong>the Bomb explodes immediately</strong>!</li>
    <li><strong>Timing Order:</strong> If you have Dynamite, Jail, and a Bomb in front of you, resolve in order: <strong>1. Dynamite, 2. Jail, 3. Bomb</strong>!</li>
  </ul>
</div>

<div class="concept-card">
  <h3>📜 Card Specifics</h3>
  <ul>
    <li><strong>Rust:</strong> All other players remove 1 token from each Dangerous card and character. Place removed tokens on your character (up to 4); excess returns to bank.</li>
    <li><strong>Tumbleweed:</strong> Cancels any "draw!" check just made and forces a redraw. Can be played out of turn.</li>
    <li><strong>Double Barrel:</strong> A Diamond (♦) BANG! card cannot be canceled with Barrel!</li>
    <li><strong>Jourdonnais vs. Buntline Special:</strong> If Jourdonnais avoids a Buntline BANG! via Barrel, he takes no damage but must discard 1 card from hand.</li>
    <li><strong>Lucky Duke &amp; Tumbleweed:</strong> When Lucky Duke uses Tumbleweed, he repeats the entire check (flips 2 new cards and chooses 1).</li>
  </ul>
</div>
"""
    },
    {
        "id": "ad-postavy",
        "category": "armed-dangerous",
        "categoryTitle": "🟠 Armed & Dangerous",
        "title": "4. 8 New Armed & Dangerous Characters",
        "icon": "users",
        "content": """
<div class="rule-section-header">
  <span class="section-tag">Armed &amp; Dangerous</span>
  <h2>4. 8 New Armed &amp; Dangerous Characters</h2>
  <p class="section-lead">Abilities of 8 characters specialized in utilizing load tokens.</p>
</div>

<div class="characters-rules-grid">
  <div class="char-rule-box">
    <h4>Al Preacher (4 lives)</h4>
    <p>Can activate out of turn. Pays 2 tokens from his character to draw 1 card whenever a blue or orange card is played. Must activate before another card is played.</p>
  </div>

  <div class="char-rule-box">
    <h4>Bass Greeves (4 lives)</h4>
    <p>May discard 1 card from hand to add 2 load tokens to any 1 Dangerous card or his character.</p>
  </div>

  <div class="char-rule-box">
    <h4>Bloody Mary (4 lives)</h4>
    <p>Whenever her BANG! card is canceled by Missed!, she immediately draws 1 card from the deck.</p>
  </div>

  <div class="char-rule-box">
    <h4>Frankie Canton (4 lives)</h4>
    <p>Once per turn, takes 1 load token from any Dangerous card in play (own or opponent's) or character onto his own character.</p>
  </div>

  <div class="char-rule-box">
    <h4>Julie Cutter (4 lives)</h4>
    <p>Whenever a player causes her to lose life, checks: if red (♥/♦), the attacker is targeted by a free BANG! effect regardless of distance.</p>
  </div>

  <div class="char-rule-box">
    <h4>Mexicali Kid (4 lives)</h4>
    <p>During his turn, pays 2 load tokens to shoot an extra BANG! effect without playing a card.</p>
  </div>

  <div class="char-rule-box">
    <h4>Ms. Abigail (4 lives)</h4>
    <p>Immune to cards with ranks J, Q, K, and A played against her by other players (if she is the sole target).</p>
  </div>

  <div class="char-rule-box">
    <h4>Red Ringo (4 lives)</h4>
    <p>Starts the game with 4 load tokens on his character. Can move up to 2 tokens onto his Dangerous cards on his turn.</p>
  </div>
</div>
"""
    }
]
