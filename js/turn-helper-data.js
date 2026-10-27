// BANG! Turn Guide & Quick Helper Bilingual Content (CS & EN)
(function() {
  'use strict';

  window.BANG_TURN_HTML_CS = `
    <div class="turn-stepper">
      <!-- FÁZE 0 -->
      <div class="turn-step-card step-phase-0">
        <div class="turn-step-header">
          <div class="turn-step-title">
            <span class="step-badge">Fáze 0 (Před tahem)</span>
            <h3>1. Události, Posun vlaku &amp; Časované karty na stole</h3>
          </div>
        </div>
        <p>Než si doberete jakoukoli kartu do ruky, musí se nejprve vyhodnotit globální efekty a karty vyložené před vámi na stole:</p>
        <div class="callout callout-info" style="margin: 0.85rem 0;">
          <h4>Speciální úkony Šerifa (pouze na začátku jeho tahu):</h4>
          <ul>
            <li><strong>Od 2. kola hry:</strong> Šerif otočí novou kartu z balíčku událostí (<em>Pravé poledne</em> nebo <em>Pěst plná karet</em>). Tato událost platí pro všechny až do dalšího tahu Šerifa.</li>
            <li><strong>Posun lokomotivy:</strong> Šerif posune lokomotivu o 1 stanici doprava (vlak za sebou táhne vagony).</li>
          </ul>
        </div>
        <h4 style="color: var(--color-brown); margin: 1.15rem 0 0.5rem; font-size: 1.1rem;">
          ⏳ Přísné oficiální pořadí vyhodnocení časovaných karet před vámi:
        </h4>
        <div class="timing-flow-grid">
          <div class="timing-flow-card">
            <div class="timing-order">Krok 1</div>
            <h4><img src="assets/symbols/symbol_dynamite.png" class="rules-symbol-inline" alt=""> 1. Dynamit</h4>
            <div class="timing-flow-condition">
              Snímá se z balíčku:<br>
              <strong>♠ 2–9 = Výbuch!</strong> Hráč ztrácí 3 životy a Dynamit jde do odhozu.<br>
              <em>Jinak:</em> Karta se bezpečně posouvá hráči po levici.
            </div>
          </div>
          <div class="timing-flow-card">
            <div class="timing-order">Krok 2</div>
            <h4>⛓️ 2. Vězení</h4>
            <div class="timing-flow-condition">
              Snímá se z balíčku:<br>
              <strong>♥ (Srdce) = Útěk!</strong> Hráč kartu odhodí a normálně pokračuje v tahu.<br>
              <strong>Jinak = Ztráta tahu:</strong> Přeskakuje Fáze 1, 2 i 3! Jde rovnou na Fázi 4.<br>
              <em>Volba Legend:</em> Lze odhodit ♥ kartu z ruky a utéct bez rizika.
            </div>
          </div>
          <div class="timing-flow-card">
            <div class="timing-order">Krok 3</div>
            <h4>3. Bomba</h4>
            <div class="timing-flow-condition">
              Snímá se z balíčku:<br>
              <strong>♥ / ♦ = Předání:</strong> Posouvá se dál hráči po levici.<br>
              <strong>♣ / ♠ = Úbytek žetonů:</strong> Odeberte 2 žetony. Při 0 žetonech vybouchne za 2 životy!
            </div>
          </div>
          <div class="timing-flow-card">
            <div class="timing-order">Krok 4</div>
            <h4>4. Chřestýš</h4>
            <div class="timing-flow-condition">
              Snímá se z balíčku:<br>
              <strong>♠ (Piky) = Zásah!</strong> Hráč okamžitě ztrácí 1 život.<br>
              <strong>KRITICKÉ PRAVIDLO:</strong> Pokud hráč neuspěl ve Vězení a přišel o tah, <em>na Chřestýše se v tomto kole nesnímá!</em>
            </div>
          </div>
        </div>
        <p style="margin-top: 0.5rem; font-size: 0.94rem; color: var(--text-muted);">
          <strong>Karta Mapa:</strong> Hráč s Mapou se může před dobráním podívat na 2 vrchní karty balíčku a 1 z nich dobrovolně odhodit.
        </p>
      </div>

      <!-- FÁZE 1 -->
      <div class="turn-step-card step-phase-1">
        <div class="turn-step-header">
          <div class="turn-step-title">
            <span class="step-badge">Fáze 1</span>
            <h3>2. Dobrání karet do ruky (Lízání)</h3>
          </div>
        </div>
        <p>Standardně si doberte <strong>2 vrchní karty</strong> z dobíracího balíčku do ruky.</p>
        <h4 style="color: var(--color-brown); margin: 1rem 0 0.5rem; font-size: 1.05rem;">
          Postavy se speciálním způsobem lízání:
        </h4>
        <div class="draw-characters-grid">
          <div class="draw-char-card">
            <strong>Jesse Jones</strong>
            První kartu si smí vzít z ruky kteréhokoli soupeře, druhou normálně z balíčku.
          </div>
          <div class="draw-char-card">
            <strong>Pedro Ramirez</strong>
            První kartu si smí vzít z vrchu odhazovacího balíčku, druhou z dobíracího.
          </div>
          <div class="draw-char-card">
            <strong>Kit Carlson</strong>
            Prohlédne si 3 vrchní karty balíčku: 2 si vybere do ruky a 1 vrátí na vrch balíčku.
          </div>
          <div class="draw-char-card">
            <strong>Pixie Pete</strong>
            Standardně líže rovnou <strong>3 karty</strong> místo 2.
          </div>
          <div class="draw-char-card">
            <strong>Bill Noface</strong>
            Líže 1 kartu + 1 kartu za každé své chybějící zranění (při 1 životě bere 4 karty!).
          </div>
          <div class="draw-char-card">
            <strong>Black Jack</strong>
            Ukáže všem 2. líznutou kartu. Je-li červená (♥ nebo ♦), okamžitě líže 3. kartu.
          </div>
          <div class="draw-char-card">
            <strong>Dutch Will</strong>
            Bere 2 karty, 1 si nechá a druhou odhodí $\rightarrow$ získá 1 valoun zlata ze zásoby.
          </div>
          <div class="draw-char-card">
            <strong>Tuco Ramirez</strong>
            Pokud nemá ve hře žádnou modrou kartu, dobere si 3 karty místo 2.
          </div>
        </div>
      </div>

      <!-- FÁZE 2 -->
      <div class="turn-step-card step-phase-2">
        <div class="turn-step-header">
          <div class="turn-step-title">
            <span class="step-badge">Fáze 2</span>
            <h3>3. Akční fáze — Hraní karet a nákupy</h3>
          </div>
        </div>
        <p>V této fázi můžete provést libovolné množství akcí v libovolném pořadí, dokud máte karty a prostředky:</p>
        <div class="action-categories-grid">
          <div class="action-cat-card" style="border-left: 4px solid var(--color-brown);">
            <h4>Běžné hnědé a modré karty</h4>
            <ul>
              <li><strong>Hnědé karty:</strong> Zahrajte pro okamžitý efekt a odhoďte.</li>
              <li><strong>Modré karty:</strong> Vyložte před sebe na stůl pro trvalý efekt.</li>
              <li><strong>Omezení:</strong> Max 1 karta BANG! za tah (pokud nemáte zbraň Volcanic nebo postavu Willy the Kid); max 1 zbraň na stole; zákaz vyložení dvou karet se shodným jménem.</li>
            </ul>
          </div>
          <div class="action-cat-card" style="border-left: 4px solid var(--color-green);">
            <h4>Zelené karty (Město duchů)</h4>
            <ul>
              <li>Vykládají se před hráče, ale <em>nelze je použít v tahu, kdy byly vyloženy</em>.</li>
              <li>V tomto tahu můžete odhodit kteroukoli zelenou kartu vyloženou v dřívějších kolech a ihned aktivovat její efekt.</li>
            </ul>
          </div>
          <div class="action-cat-card" style="border-left: 4px solid var(--color-gold);">
            <h4>Zlatá horečka (Zlato &amp; Vybavení)</h4>
            <ul>
              <li>Kupujte vybavení (černé i hnědé) z nabídky 3 karet za nasbírané valouny zlata.</li>
              <li>Odhazujte vybavení soupeřů za zaplacení jeho nákupní ceny + 1 valoun navíc.</li>
              <li>Směna Piva: Zahrajte kartu Pivo a vezměte si 1 valoun zlata ze zásoby!</li>
            </ul>
          </div>
          <div class="action-cat-card" style="border-left: 4px solid var(--color-train);">
            <h4>Velká vlaková loupež (Vlak &amp; Vagony)</h4>
            <ul>
              <li><strong>Posun vlaku:</strong> Můžete posunout vlak o 1 stanici doprava zdarma, ale pak <em>MUSÍTE</em> koupit přiřazený vagon!</li>
              <li><strong>Nákup vagonu:</strong> Zaplaťte cenu stanice odhozením vyžadovaných karet a vagon vyložte před sebe.</li>
            </ul>
          </div>
          <div class="action-cat-card" style="border-left: 4px solid var(--color-orange);">
            <h4>Ozbrojení a nebezpeční (Oranžové karty)</h4>
            <ul>
              <li>Vyložte oranžovou kartu se 3 žetony nabití.</li>
              <li>Zahráním modré karty přidejte 1 žeton nabití na kteroukoli svou oranžovou kartu.</li>
              <li>Při zahrání hnědých karet můžete zaplatit žetony nabití a dramaticky vylepšit jejich efekt.</li>
            </ul>
          </div>
          <div class="action-cat-card" style="border-left: 4px solid var(--color-legend);">
            <h4>Legendy (Činy &amp; Přivlastnění)</h4>
            <ul>
              <li><strong>Vykonání činu:</strong> Splňte podmínku karty činu a položte na ni 2 své žetony slávy.</li>
              <li><strong>Přivlastnění (strana B):</strong> Pokud jste již Legendou, můžete si čin se svými žetony přivlastnit a ubrat jiné legendě 1 život bez obrany!</li>
            </ul>
          </div>
        </div>
      </div>

      <!-- FÁZE 3 -->
      <div class="turn-step-card step-phase-3">
        <div class="turn-step-header">
          <div class="turn-step-title">
            <span class="step-badge">Fáze 3</span>
            <h3>4. Odhození nadbytečných karet &amp; Nabíjení</h3>
          </div>
        </div>
        <p>Váš limit karet v ruce se rovná <strong>aktuálnímu počtu vašich životů</strong>:</p>
        <ul style="padding-left: 1.25rem; margin-bottom: 1rem;">
          <li>Pokud máte v ruce více karet než aktuálních životů, musíte přebytečné karty odhodit do odhazovacího balíčku.</li>
          <li><em>Výjimky z limitu:</em> Sean Mallory (smí držet až 10 karet), Zbraňový pás (limit 8 karet), <strong>Pravidlo Legend pro 1 život (hráč s 1 životem smí držet 2 karty v ruce)</strong>.</li>
        </ul>
        <div class="callout callout-warning">
          <h4>⚡ ZÁSADNÍ PRAVIDLO NABÍJENÍ V TÉTO FÁZI:</h4>
          <p>
            Za <strong>KAŽDOU KARTU</strong>, kterou musíte v této fázi kvůli limitu životů odhodit, okamžitě získáte <strong>1 žeton nabití</strong> na libovolnou svou Nebezpečnou kartu nebo na svou kartu postavy! Odhazování karet je tak strategickým zdrojem munice pro další tahy.
          </p>
        </div>
      </div>

      <!-- FÁZE 4 -->
      <div class="turn-step-card step-phase-4">
        <div class="turn-step-header">
          <div class="turn-step-title">
            <span class="step-badge">Fáze 4 (Konec tahu)</span>
            <h3>5. Konec tahu &amp; Chlubení se činem (Legendy)</h3>
          </div>
        </div>
        <div class="callout callout-purple" style="margin-bottom: 1.25rem;">
          <h4>Chlubení se činem (Pokud jste v tahu nevykonali žádný čin):</h4>
          <p>Platí i pro hráče, kteří byli uvězněni a nehráli Fázi 1, 2 ani 3!</p>
          <ol style="padding-left: 1.25rem; margin-top: 0.4rem;">
            <li>Vyložte novou kartu činu z dobíracího balíčku činů.</li>
            <li>Pokud je na stole vyloženo více než 4 činy, odhoďte ten s nejvyšším počtem žetonů.</li>
            <li>Položte 1 svůj žeton slávy na vyložený čin, kde ještě žádný váš žeton neleží.</li>
          </ol>
        </div>
        <div class="callout callout-info">
          <h4>Zrod Legendy (Okamžitá proměna):</h4>
          <p>
            Umístěním svého <strong>posledního (5.) žetonu slávy</strong> se okamžitě stáváte <strong>LEGENDOU</strong>!
            Otočte svou kartu postavy na <strong>stranu B</strong> s novou brutální schopností a <strong>ihned si doplňte životy na 3</strong> (pokud máte méně než 3 životy)!
          </p>
        </div>
        <p style="margin-top: 1rem; font-size: 0.94rem;">
          ⏳ <strong>Konec tahu u postav:</strong> Jimmy Texas si dobere 1 kartu navíc; Don Bell snímá z balíčku na možnost odehrát další celý tah. Poté tah přechází na hráče po vaší levici.
        </p>
      </div>
    </div>
  `;

  window.BANG_TURN_HTML_EN = `
    <div class="turn-stepper">
      <!-- PHASE 0 -->
      <div class="turn-step-card step-phase-0">
        <div class="turn-step-header">
          <div class="turn-step-title">
            <span class="step-badge">Phase 0 (Start of Turn)</span>
            <h3>1. Events, Train Advance &amp; Timed Cards in Play</h3>
          </div>
        </div>
        <p>Before drawing cards into your hand, global effects and timed cards in front of you must be resolved:</p>
        <div class="callout callout-info" style="margin: 0.85rem 0;">
          <h4>Special Sheriff Actions (Only at the start of Sheriff's turn):</h4>
          <ul>
            <li><strong>From Round 2 onwards:</strong> The Sheriff flips a new Event card from the active event deck (<em>High Noon</em> or <em>A Fistful of Cards</em>). This event affects all players until the Sheriff's next turn.</li>
            <li><strong>Advance Locomotive:</strong> The Sheriff moves the locomotive 1 station to the right (the train pulls its railcars behind it).</li>
          </ul>
        </div>
        <h4 style="color: var(--color-brown); margin: 1.15rem 0 0.5rem; font-size: 1.1rem;">
          ⏳ Strict Official Order of Resolving Timed Cards in Front of You:
        </h4>
        <div class="timing-flow-grid">
          <div class="timing-flow-card">
            <div class="timing-order">Step 1</div>
            <h4><img src="assets/symbols/symbol_dynamite.png" class="rules-symbol-inline" alt=""> 1. Dynamite</h4>
            <div class="timing-flow-condition">
              Draw from the deck (check):<br>
              <strong>♠ 2–9 = Explosion!</strong> Lose 3 life points and discard Dynamite.<br>
              <em>Otherwise:</em> The card safely passes to the player on your left.
            </div>
          </div>
          <div class="timing-flow-card">
            <div class="timing-order">Step 2</div>
            <h4>⛓️ 2. Jail</h4>
            <div class="timing-flow-condition">
              Draw from the deck (check):<br>
              <strong>♥ (Hearts) = Escape!</strong> Discard Jail and proceed with your turn.<br>
              <strong>Otherwise = Turn Skipped:</strong> Skip Phases 1, 2, and 3! Jump directly to Phase 4.<br>
              <em>Legends option:</em> You may discard a Heart card from hand to escape without checking.
            </div>
          </div>
          <div class="timing-flow-card">
            <div class="timing-order">Step 3</div>
            <h4>3. Bomb</h4>
            <div class="timing-flow-condition">
              Draw from the deck (check):<br>
              <strong>♥ / ♦ = Pass:</strong> Passes to the player on your left.<br>
              <strong>♣ / ♠ = Lose 2 Tokens:</strong> Remove 2 load tokens. At 0 tokens, explodes for 2 damage!
            </div>
          </div>
          <div class="timing-flow-card">
            <div class="timing-order">Step 4</div>
            <h4>4. Rattlesnake</h4>
            <div class="timing-flow-condition">
              Draw from the deck (check):<br>
              <strong>♠ (Spades) = Hit!</strong> Lose 1 life point immediately.<br>
              <strong>CRITICAL RULE:</strong> If you failed Jail and skipped your turn, <em>do NOT check for Rattlesnake this round!</em>
            </div>
          </div>
        </div>
        <p style="margin-top: 0.5rem; font-size: 0.94rem; color: var(--text-muted);">
          <strong>Map Card:</strong> A player with a Map may inspect the top 2 cards of the draw deck before drawing and discard 1.
        </p>
      </div>

      <!-- PHASE 1 -->
      <div class="turn-step-card step-phase-1">
        <div class="turn-step-header">
          <div class="turn-step-title">
            <span class="step-badge">Phase 1</span>
            <h3>2. Draw Cards (2 Cards by Default)</h3>
          </div>
        </div>
        <p>By default, draw <strong>2 top cards</strong> from the draw deck into your hand.</p>
        <h4 style="color: var(--color-brown); margin: 1rem 0 0.5rem; font-size: 1.05rem;">
          Characters with Special Drawing Abilities
        </h4>
        <div class="draw-characters-grid">
          <div class="draw-char-card">
            <strong>Jesse Jones</strong>
            May draw his 1st card from any opponent's hand instead of the deck.
          </div>
          <div class="draw-char-card">
            <strong>Pedro Ramirez</strong>
            May take his 1st card from the top of the discard pile.
          </div>
          <div class="draw-char-card">
            <strong>Kit Carlson</strong>
            Looks at the top 3 cards of the deck, keeps 2, and returns 1 to the top.
          </div>
          <div class="draw-char-card">
            <strong>Pixie Pete</strong>
            Draws <strong>3 cards</strong> by default instead of 2.
          </div>
          <div class="draw-char-card">
            <strong>Bill Noface</strong>
            Draws 1 card + 1 card for each wound he currently has (at 1 life, draws 4 cards!).
          </div>
          <div class="draw-char-card">
            <strong>Black Jack</strong>
            Reveals the 2nd card drawn: if red (♥ or ♦), immediately draws a 3rd card.
          </div>
          <div class="draw-char-card">
            <strong>Dutch Will</strong>
            Draws 2 cards, keeps 1, and discards the other $\rightarrow$ takes 1 Gold Nugget.
          </div>
          <div class="draw-char-card">
            <strong>Tuco Ramirez</strong>
            If he has no blue cards in play, draws 3 cards instead of 2.
          </div>
        </div>
      </div>

      <!-- PHASE 2 -->
      <div class="turn-step-card step-phase-2">
        <div class="turn-step-header">
          <div class="turn-step-title">
            <span class="step-badge">Phase 2</span>
            <h3>3. Action Phase: Play Cards &amp; Purchases</h3>
          </div>
        </div>
        <p>In this phase, you may perform any number of actions in any order, as long as you have cards and resources:</p>
        <div class="action-categories-grid">
          <div class="action-cat-card" style="border-left: 4px solid var(--color-brown);">
            <h4>Standard Brown &amp; Blue Cards</h4>
            <ul>
              <li><strong>Brown Cards:</strong> Play for immediate effect and discard.</li>
              <li><strong>Blue Cards:</strong> Place in front of you on the table for ongoing effects.</li>
              <li><strong>Limits:</strong> Max 1 BANG! card per turn (unless you have a Volcanic weapon or Willy the Kid); max 1 weapon; max 1 card of the same name in play.</li>
            </ul>
          </div>
          <div class="action-cat-card" style="border-left: 4px solid var(--color-green);">
            <h4>Green Cards (Dodge City)</h4>
            <ul>
              <li>Placed in play, but <em>cannot be used on the turn they were played</em>.</li>
              <li>On this turn, you may discard any green card played in previous rounds to trigger its effect immediately.</li>
            </ul>
          </div>
          <div class="action-cat-card" style="border-left: 4px solid var(--color-gold);">
            <h4>Gold Rush (Gold &amp; Equipment)</h4>
            <ul>
              <li>Buy equipment (black permanent or brown immediate) from the 3 displayed cards using your Gold Nuggets.</li>
              <li>Discard opponent equipment by paying its purchase cost + 1 Gold Nugget.</li>
              <li>Beer Exchange: Play a Beer card to take 1 Gold Nugget from the bank!</li>
            </ul>
          </div>
          <div class="action-cat-card" style="border-left: 4px solid var(--color-train);">
            <h4>The Great Train Robbery (Train &amp; Railcars)</h4>
            <ul>
              <li><strong>Advance Train:</strong> You may advance the train 1 station to the right for free, but then you <em>MUST</em> buy the attached railcar!</li>
              <li><strong>Buy Railcar:</strong> Pay the station cost by discarding the required cards and place the railcar in front of you.</li>
            </ul>
          </div>
          <div class="action-cat-card" style="border-left: 4px solid var(--color-orange);">
            <h4>Armed &amp; Dangerous (Orange Cards)</h4>
            <ul>
              <li>Deploy an orange card loaded with 3 tokens.</li>
              <li>Playing any blue card adds 1 load token to any of your orange cards.</li>
              <li>Pay load tokens when playing brown cards to dramatically enhance their effect.</li>
            </ul>
          </div>
          <div class="action-cat-card" style="border-left: 4px solid var(--color-legend);">
            <h4>Legends (Feats &amp; Claiming)</h4>
            <ul>
              <li><strong>Accomplish Feat:</strong> Fulfill the condition on an active feat card and place 2 of your Fame tokens on it.</li>
              <li><strong>Claim Feat (Side B):</strong> If you are already a Legend, you may claim a feat with your tokens to deal 1 direct unblockable damage to another legend!</li>
            </ul>
          </div>
        </div>
      </div>

      <!-- PHASE 3 -->
      <div class="turn-step-card step-phase-3">
        <div class="turn-step-header">
          <div class="turn-step-title">
            <span class="step-badge">Phase 3</span>
            <h3>4. Discard Excess Cards &amp; Charging</h3>
          </div>
        </div>
        <p>Your hand size limit equals your <strong>current life points</strong>:</p>
        <ul style="padding-left: 1.25rem; margin-bottom: 1rem;">
          <li>If you hold more cards than your current life points, you must discard the excess cards into the discard pile.</li>
          <li><em>Exceptions:</em> Sean Mallory (can hold up to 10 cards), Gun Belt (limit 8 cards), <strong>Legends 1-life rule (a player with 1 life may hold 2 cards)</strong>.</li>
        </ul>
        <div class="callout callout-warning">
          <h4>⚡ CRITICAL CHARGING RULE IN THIS PHASE:</h4>
          <p>
            For <strong>EACH CARD</strong> you are forced to discard due to hand limit in this phase, immediately add <strong>1 load token</strong> to any of your Dangerous cards or onto your character card! Discarding cards is a vital strategic source of ammunition.
          </p>
        </div>
      </div>

      <!-- PHASE 4 -->
      <div class="turn-step-card step-phase-4">
        <div class="turn-step-header">
          <div class="turn-step-title">
            <span class="step-badge">Phase 4 (Turn End)</span>
            <h3>5. Turn End &amp; Boasting of Feats (Legends)</h3>
          </div>
        </div>
        <div class="callout callout-purple" style="margin-bottom: 1.25rem;">
          <h4>Boasting of a Feat (If you did not accomplish any feat this turn):</h4>
          <p>Applies even to jailed players who skipped Phases 1, 2, and 3!</p>
          <ol style="padding-left: 1.25rem; margin-top: 0.4rem;">
            <li>Reveal a new feat card from the feat draw deck.</li>
            <li>If more than 4 feats are on the table, discard the one with the most Fame tokens.</li>
            <li>Place 1 of your Fame tokens onto any active feat where you do not yet have a token.</li>
          </ol>
        </div>
        <div class="callout callout-info">
          <h4>Birth of a Legend (Instant Transformation):</h4>
          <p>
            Placing your <strong>last (5th) Fame token</strong> instantly transforms your character into a <strong>LEGEND</strong>!
            Flip your character card to <strong>Side B</strong> with its devastating new ability and <strong>immediately restore your life points to 3</strong> (if you have fewer than 3 lives)!
          </p>
        </div>
        <p style="margin-top: 1rem; font-size: 0.94rem;">
          ⏳ <strong>Turn-End Abilities:</strong> Jimmy Texas draws 1 extra card; Don Bell checks for the chance to take another complete turn. Play then passes clockwise.
        </p>
      </div>
    </div>
  `;

  window.BANG_HELPER_HTML_CS = `
    <h3 style="color: var(--color-brown); font-size: 1.3rem; margin: 1.5rem 0 0.5rem;">
      1. Checklist vyřazení hráče (Co se stane při smrti)
    </h3>
    <div class="table-responsive">
      <table class="bang-table">
        <thead>
          <tr>
            <th>Prvek / Karta / Schopnost</th>
            <th>Co se stane při smrti hráče u stolu</th>
            <th>Status / Výsledek</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Karta role</strong></td>
            <td>Hráč ji ihned otočí lícem nahoru a ukáže všem u stolu.</td>
            <td><span class="status-pill status-warn">Odhalení</span></td>
          </tr>
          <tr>
            <td><strong>Byl to Bandita</strong></td>
            <td>Kdokoli ho zabil (i jiný Bandita), ihned líže <strong>3 karty z balíčku</strong>.</td>
            <td><span class="status-pill status-yes">+3 karty</span></td>
          </tr>
          <tr>
            <td><strong>Měl kartu Wanted</strong></td>
            <td>Vrah dostane <strong>+2 karty a +1 valoun zlata</strong> (navíc k odměně za Banditu!).</td>
            <td><span class="status-pill status-yes">+2 karty &amp; +1 zlato</span></td>
          </tr>
          <tr>
            <td><strong>Šerif zabil Pomocníka (Vice)</strong></td>
            <td>Šerif musí <strong>odhodit všechny své karty z ruky i ze hry</strong> (včetně zbraní). Valouny zlata si ponechává!</td>
            <td><span class="status-pill status-no">Ztráta všech karet</span></td>
          </tr>
          <tr>
            <td><strong>Vulture Sam u stolu</strong></td>
            <td>Vezme si do ruky <strong>všechny karty zabitého</strong> (z ruky i ze stolu; vagony vyloží před sebe; černé vybavení jde dospod balíčku).</td>
            <td><span class="status-pill status-yes">Zisk všech karet</span></td>
          </tr>
          <tr>
            <td><strong>Herb Hunter u stolu</strong></td>
            <td>Kdykoli kdokoli zemře, okamžitě si dobere <strong>2 karty z balíčku</strong>.</td>
            <td><span class="status-pill status-yes">+2 karty</span></td>
          </tr>
          <tr>
            <td><strong>Gregg Digger u stolu</strong></td>
            <td>Kdykoli kdokoli zemře, okamžitě si vyléčí <strong>2 životy</strong> (do maxima).</td>
            <td><span class="status-pill status-yes">+2 životy</span></td>
          </tr>
          <tr>
            <td><strong>Varianta Stínoví pistolníci</strong></td>
            <td>Hráč neumírá definitivně – vrací se v každém svém tahu jako stínový duch s 0 životy.</td>
            <td><span class="status-pill status-warn">Stínový duch</span></td>
          </tr>
        </tbody>
      </table>
    </div>

    <h3 style="color: var(--color-brown); font-size: 1.3rem; margin: 2rem 0 0.5rem;">
      2. Výpočet vzdáleností a dostřelu zbraní
    </h3>
    <div class="table-responsive">
      <table class="bang-table">
        <thead>
          <tr>
            <th>Karta / Schopnost</th>
            <th>Efekt na vzdálenost</th>
            <th>Typ úpravy</th>
            <th>Důležitá poznámka</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Colt .45 (základní)</strong></td>
            <td>Dostřel 1</td>
            <td>Výchozí stav</td>
            <td>Základní zbraň vyobrazená na hráčské desce.</td>
          </tr>
          <tr>
            <td><strong>Mustang / Skrýš</strong></td>
            <td>+1 ke vzdálenosti K VÁM</td>
            <td>Obrana</td>
            <td>Ostatní vás vidí o 1 dále. Vy vidíte ostatní normálně.</td>
          </tr>
          <tr>
            <td><strong>Paul Regret</strong></td>
            <td>+1 ke vzdálenosti K NĚMU</td>
            <td>Obrana</td>
            <td>S vyloženým Mustangem je vzdálenost k němu dokonce +2.</td>
          </tr>
          <tr>
            <td><strong>Hledí / Dalekohled</strong></td>
            <td>-1 ke vzdálenosti OD VÁS</td>
            <td>Útok</td>
            <td>Vidíte všechny ostatní o 1 blíže (minimální vzdálenost je 1).</td>
          </tr>
          <tr>
            <td><strong>Rose Doolan</strong></td>
            <td>-1 ke vzdálenosti OD NÍ</td>
            <td>Útok</td>
            <td>S vyloženým Hledím vidí všechny o 2 blíže. V Legendách vidí všechny na 1!</td>
          </tr>
          <tr>
            <td><strong>Zbraně (Schofield až Winchester)</strong></td>
            <td>Dostřel 2 až 5</td>
            <td>Dostřel BANG!</td>
            <td><strong>POZOR:</strong> Zbraně nemění skutečnou vzdálenost, pouze dosah karty BANG!.</td>
          </tr>
          <tr>
            <td><strong>Zvonice</strong></td>
            <td>Vzdálenost 1 na všechny</td>
            <td>Útok</td>
            <td>Za 1 žeton nabití vidíte pro příští zahranou kartu všechny hráče na vzdálenost 1!</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="callout callout-info" style="margin-top: 1.25rem;">
      <h4 style="margin: 0 0 0.5rem; color: var(--color-brown, #5c3a21); font-size: 1.15rem;"><img src="assets/symbols/symbol_mustang.png" class="rules-symbol-inline" alt=""> Sčítání a kombinování karet vzdálenosti</h4>
      <p><strong>Ano, všechny tyto karty se sčítají.</strong> Podle oficiálních pravidel karetní hry nesmíte mít před sebou vyložené dvě úplně stejné modré karty (se stejným názvem). Protože má každá z těchto čtyř karet jiný název, můžete je mít vyložené na stole všechny najednou a jejich efekty se kombinují.</p>
      
      <p style="margin-top: 0.75rem; font-weight: 600;">Vzdálenosti se v praxi počítají následovně:</p>

      <div style="margin-top: 0.75rem; padding: 0.75rem 1rem; background: rgba(0,0,0,0.03); border-radius: 6px; border-left: 3px solid var(--accent-gold, #c89b3c);">
        <h5 style="color: var(--color-brown, #5c3a21); margin: 0 0 0.35rem; font-size: 1.05rem;">Obranné karty (když na vás někdo útočí)</h5>
        <p style="margin-bottom: 0.35rem;">Tyto karty zvyšují vzdálenost, na kterou vás vidí ostatní hráči.</p>
        <ul style="margin: 0.25rem 0 0.5rem 1.25rem;">
          <li><strong>Mustang:</strong> Ostatní vás vidí o 1 dál.</li>
          <li><strong>Skrýš</strong> (případně Barel v základní hře*): Ostatní vás vidí o 1 dál.</li>
        </ul>
        <p><strong>Výsledek:</strong> Pokud máte vyloženého Mustanga i Skrýš, ostatní hráči vás vidí celkově o 2 dál. Hráč, který sedí hned vedle vás (základní vzdálenost 1), na vás potřebuje zbraň s dostřelem minimálně 3.</p>
        <p style="font-size: 0.85rem; color: var(--color-brown, #5c3a21); opacity: 0.85; margin: 0.35rem 0 0;"><em>*Pravidlová poznámka: Barel v základní hře poskytuje šanci na sejmutí Vedle!, vzdálenost k vám přímo zvyšují Mustang a Skrýš (či schopnost postavy Paul Regret).</em></p>
      </div>

      <div style="margin-top: 0.75rem; padding: 0.75rem 1rem; background: rgba(0,0,0,0.03); border-radius: 6px; border-left: 3px solid var(--color-brown, #5c3a21);">
        <h5 style="color: var(--color-brown, #5c3a21); margin: 0 0 0.35rem; font-size: 1.05rem;">Útočné karty (když útočíte vy)</h5>
        <p style="margin-bottom: 0.35rem;">Tyto karty zkracují vzdálenost, na kterou vidíte vy ostatní hráče.</p>
        <ul style="margin: 0.25rem 0 0.5rem 1.25rem;">
          <li><strong>Hledí</strong> (případně Appaloosa v základní hře): Vy vidíte ostatní o 1 blíž.</li>
          <li><strong>Dalekohled:</strong> Vy vidíte ostatní o 1 blíž.</li>
        </ul>
        <p><strong>Výsledek:</strong> Pokud máte vyložené Hledí i Dalekohled, vidíte všechny hráče o 2 blíž. Hráče na reálnou vzdálenost 3 tak vidíte na vzdálenost 1 a stačí vám k útoku (např. kartou Bang! nebo Panika) základní zbraň Colt .45.</p>
      </div>
    </div>

    <h3 style="color: var(--color-brown); font-size: 1.3rem; margin: 2rem 0 0.5rem;">
      3. Pravidla pro Pivo v různých herních situacích
    </h3>
    <div class="table-responsive">
      <table class="bang-table">
        <thead>
          <tr>
            <th>Herní situace</th>
            <th>Lze zahrát Pivo?</th>
            <th>Přesný výsledek a pravidlo</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Ve svém tahu (Fáze 2)</td>
            <td><span class="status-pill status-yes">✓ ANO</span></td>
            <td>Vyléčí 1 ztracený život (až do počátečního maxima).</td>
          </tr>
          <tr>
            <td>Mimo svůj tah při ztrátě posledního života (0 životů)</td>
            <td><span class="status-pill status-yes">✓ ANO</span></td>
            <td>Zabrání vyřazení ze hry (vyléčí na 1 život a zachrání hráče).</td>
          </tr>
          <tr>
            <td>Mimo svůj tah při běžném zranění (zbývá $\ge 1$ život)</td>
            <td><span class="status-pill status-no">✕ ZÁKAZ</span></td>
            <td>Pivo nelze hrát mimo svůj tah, pokud nejste na pokraji smrti!</td>
          </tr>
          <tr>
            <td>Ve hře zbývají pouze 2 hráči (Duel)</td>
            <td><span class="status-pill status-warn">⚠️ ANO (NELÉČÍ)</span></td>
            <td>Karta ztrácí léčivý účinek. Ve Zlaté horečce dává 1 valoun zlata!</td>
          </tr>
          <tr>
            <td>Karta Poslední volání</td>
            <td><span class="status-pill status-yes">✓ ANO</span></td>
            <td>Léčí 1 život i v souboji posledních dvou hráčů!</td>
          </tr>
          <tr>
            <td>Karta Saloon</td>
            <td><span class="status-pill status-warn">⚠️ Pouze v tahu</span></td>
            <td>Saloon NENÍ Pivo – nelze ho hrát mimo tah k záchraně před smrtí.</td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- 4. ASISTENT PRO VYŘAZENÉ HRÁČE -->
    <div id="afterlife-assistant-mount"></div>

    <h3 style="color: var(--color-brown); font-size: 1.3rem; margin: 2rem 0 0.5rem;">
      5. Oficiální symboly a ikony na kartách (Dized / Pravidla BANG!)
    </h3>
    <p style="font-size: 0.95rem; color: var(--text-muted); margin-bottom: 1.25rem;">
      Oficiální grafické symboly používané na kartách BANG! pro jednoznačné určení efektů, cílení a vzdáleností bez závislosti na jazyce.
    </p>

    <div class="symbols-grid">
      <!-- 1. BANG! -->
      <div class="symbol-card">
        <span class="symbol-type-tag">Útok / Ztráta života</span>
        <div class="symbol-img-wrap">
          <img src="assets/symbols/symbol_bang.png" alt="BANG! symbol" class="symbol-real-img" loading="lazy">
        </div>
        <h4>BANG! (Výstřel)</h4>
        <p>Způsobí ztrátu 1 života zvolenému hráči v dostřelu zbraně. Cíl se může bránit kartou Vedle! nebo schopností Barelu. Standardně 1× za tah.</p>
      </div>

      <!-- 2. Vedle! -->
      <div class="symbol-card">
        <span class="symbol-type-tag">Obrana / Zrušení zásahu</span>
        <div class="symbol-img-wrap">
          <img src="assets/symbols/symbol_missed.png" alt="Vedle! symbol" class="symbol-real-img" loading="lazy">
        </div>
        <h4>Vedle! (Missed!)</h4>
        <p>Okamžitě zruší efekt zahraného výstřelu BANG!, Gatling nebo jiného přímého útoku mířeného na vás. Hraje se v reakci mimo svůj tah.</p>
      </div>

      <!-- 3. Pivo -->
      <div class="symbol-card">
        <span class="symbol-type-tag">Léčení / Záchrana</span>
        <div class="symbol-img-wrap">
          <img src="assets/symbols/symbol_regain_life.png" alt="Pivo symbol" class="symbol-real-img" loading="lazy">
        </div>
        <h4>Obnovení 1 života (Pivo)</h4>
        <p>Okamžitě obnoví 1 život (až do maxima postavy). Lze zahrát i mimo tah jako záchranu při poklesu na 0 životů. V duelu 2 hráčů nemá efekt!</p>
      </div>

      <!-- 4. Líznutí karty -->
      <div class="symbol-card">
        <span class="symbol-type-tag">Dobírání karet</span>
        <div class="symbol-img-wrap">
          <img src="assets/symbols/symbol_draw_card.png" alt="Líznutí karty symbol" class="symbol-real-img" loading="lazy">
        </div>
        <h4>Líznutí karty</h4>
        <p>Doberte si kartu do ruky. Je-li určen hráč (např. Panika!), vezměte náhodnou kartu z jeho ruky nebo vyloženou kartu ze stolu. Jinak lízejte z balíčku.</p>
      </div>

      <!-- 5. Odhození karty -->
      <div class="symbol-card">
        <span class="symbol-type-tag">Ztráta / Likvidace</span>
        <div class="symbol-img-wrap">
          <img src="assets/symbols/symbol_discard_card.png" alt="Odhození karty symbol" class="symbol-real-img" loading="lazy">
        </div>
        <h4>Odhození karty</h4>
        <p>Donutí hráče odhodit kartu (např. Cat Balou). Můžete zvolit náhodnou kartu z ruky soupeře nebo vybranou vyloženou kartu z jeho herní plochy.</p>
      </div>

      <!-- 6. Hráč na dostřel zbraně -->
      <div class="symbol-card">
        <span class="symbol-type-tag">Cílení / Dosah zbraně</span>
        <div class="symbol-img-wrap">
          <img src="assets/symbols/symbol_reachable_distance.png" alt="Hráč na dostřel symbol" class="symbol-real-img" loading="lazy">
        </div>
        <h4>Hráč v dosahu zbraně</h4>
        <p>Cílem může být jakýkoliv hráč v aktuálním dosahu vaší zbraně (základní Colt .45 má dostřel 1; zbraně, Hledí a Mustang dostřel upravují).</p>
      </div>

      <!-- 7. Hráč ve vzdálenosti 1 / X -->
      <div class="symbol-card">
        <span class="symbol-type-tag">Fixní vzdálenost</span>
        <div class="symbol-img-wrap">
          <img src="assets/symbols/symbol_distance_x.png" alt="Vzdálenost 1 symbol" class="symbol-real-img" loading="lazy">
        </div>
        <h4>Hráč ve vzdálenosti 1 (X)</h4>
        <p>Platí na hráče do dané vzdálenosti (např. Panika!). POZOR: Mustang a Hledí tuto vzdálenost upravují, ale vyložené ZBRANĚ NIKOLIV!</p>
      </div>

      <!-- 8. Jakýkoliv jeden hráč -->
      <div class="symbol-card">
        <span class="symbol-type-tag">Neomezený cíl</span>
        <div class="symbol-img-wrap">
          <img src="assets/symbols/symbol_any_one_player.png" alt="Jakýkoliv hráč symbol" class="symbol-real-img" loading="lazy">
        </div>
        <h4>Jakýkoliv jeden hráč</h4>
        <p>Efekt lze zacílit na kteréhokoliv hráče u stolu bez ohledu na vzdálenost, zbraně, Mustang či Hledí (např. Vězení, Cat Balou, Duel).</p>
      </div>

      <!-- 9. Všichni ostatní hráči -->
      <div class="symbol-card">
        <span class="symbol-type-tag">Plošný zásah (AoE)</span>
        <div class="symbol-img-wrap">
          <img src="assets/symbols/symbol_all_other_players.png" alt="Všichni ostatní hráči symbol" class="symbol-real-img" loading="lazy">
        </div>
        <h4>Všichni ostatní hráči</h4>
        <p>Zasáhne všechny ostatní živé hráče u stolu (nikoliv hráče, který kartu zahrál), a to bez ohledu na vzájemnou vzdálenost (Gatling, Indiáni!, Saloon).</p>
      </div>

      <!-- 10. Sejmutí („Líznutí si“) -->
      <div class="symbol-card">
        <span class="symbol-type-tag">Mechanika stolu</span>
        <div class="symbol-img-wrap">
          <img src="assets/symbols/symbol_draw_check.png" alt="Sejmutí karty symbol" class="symbol-real-img" loading="lazy">
        </div>
        <h4>Sejmutí („Líznutí si“)</h4>
        <p>Otočení vrchní karty z balíčku za účelem vyhodnocení barvy a hodnoty v rohu karty. Používá se pro Barel (♥), Vězení (♥) a Dynamit (♠ 2–9).</p>
      </div>

      <!-- 11. Barel -->
      <div class="symbol-card">
        <span class="symbol-type-tag">Modré vybavení</span>
        <div class="symbol-img-wrap">
          <img src="assets/symbols/symbol_barrel.png" alt="Barel symbol" class="symbol-real-img" loading="lazy">
        </div>
        <h4>Barel (Záchranný úkryt)</h4>
        <p>Modrá karta na stole. Při útoku BANG!em můžete sejmout: padne-li Srdcová barva (♥), útok je zrušen stejně, jako byste zahráli kartu Vedle!.</p>
      </div>

      <!-- 12. Dynamit -->
      <div class="symbol-card">
        <span class="symbol-type-tag">Časovaná bomba</span>
        <div class="symbol-img-wrap">
          <img src="assets/symbols/symbol_dynamite.png" alt="Dynamit symbol" class="symbol-real-img" loading="lazy">
        </div>
        <h4>Dynamit (Hazard)</h4>
        <p>Obíhá po směru hodin. Na začátku tahu hráč sejme: je-li Pika (♠) 2–9, Dynamit exploduje za 3 životy! Jinak se předá hráči po levici.</p>
      </div>

      <!-- 13. Vězení -->
      <div class="symbol-card">
        <span class="symbol-type-tag">Zadržení soupeře</span>
        <div class="symbol-img-wrap">
          <img src="assets/symbols/symbol_jail.png" alt="Vězení symbol" class="symbol-real-img" loading="lazy">
        </div>
        <h4>Vězení (Jail)</h4>
        <p>Lze nasadit na kohokoliv kromě Šerifa. Na začátku tahu uvězněný sejme: je-li Srdce (♥), uniká a hraje. Jinak odhodí Vězení a celý tah propadá.</p>
      </div>

      <!-- 14. Mustang -->
      <div class="symbol-card">
        <span class="symbol-type-tag">Obranná vzdálenost</span>
        <div class="symbol-img-wrap">
          <img src="assets/symbols/symbol_mustang.png" alt="Mustang symbol" class="symbol-real-img" loading="lazy">
        </div>
        <h4>Mustang (Vzdálenost +1)</h4>
        <p>Kůň vyložený před hráčem. Všichni ostatní hráči vás vidí na vzdálenost o 1 větší než normálně (např. soused vás vidí na vzdálenost 2 místo 1).</p>
      </div>

      <!-- 15. Hledí / Scope -->
      <div class="symbol-card">
        <span class="symbol-type-tag">Útočná vzdálenost</span>
        <div class="symbol-img-wrap">
          <img src="assets/symbols/symbol_scope.png" alt="Hledí symbol" class="symbol-real-img" loading="lazy">
        </div>
        <h4>Hledí / Scope (Vzdálenost -1)</h4>
        <p>Optický zaměřovač. Vidíte všechny ostatní hráče u stolu na vzdálenost o 1 kratší (např. souseda na vzdálenost 1 vidíte na vzdálenost 0).</p>
      </div>

      <!-- 16. Náboje / Životy -->
      <div class="symbol-card">
        <span class="symbol-type-tag">Zdraví &amp; Limit ruky</span>
        <div class="symbol-img-wrap">
          <img src="assets/symbols/symbol_life_points.png" alt="Životy a náboje symbol" class="symbol-real-img" loading="lazy">
        </div>
        <h4>Náboje / Životy</h4>
        <p>Ukazatel počtu životů postavy (Šerif má +1 život). Aktuální počet životů zároveň udává maximální povolený počet karet v ruce na konci tahu.</p>
      </div>
    </div>

    <!-- Speciální žetony -->
    <h4 style="color: var(--color-brown); font-size: 1.15rem; margin: 1.5rem 0 0.5rem; font-family: var(--font-western);">
      Speciální žetony z rozšíření
    </h4>
    <div class="symbols-grid">
      <div class="symbol-card">
        <span class="symbol-type-tag">Zlatá horečka</span>
        <div class="symbol-img-wrap" style="font-size: 2.5rem;">🪙</div>
        <h4>Valoun zlata</h4>
        <p>Měna z rozšíření Zlatá horečka sloužící k nákupu černého a hnědého vybavení z obchodu.</p>
      </div>
      <div class="symbol-card">
        <span class="symbol-type-tag">Ozbrojení a nebezpeční</span>
        <div class="symbol-img-wrap" style="font-size: 2.5rem;">⚡</div>
        <h4>Žeton nabití (Kostka)</h4>
        <p>Zdroje z Ozbrojení a nebezpeční pro aktivaci a násobení efektů nebezpečných oranžových karet.</p>
      </div>
      <div class="symbol-card">
        <span class="symbol-type-tag">Legendy</span>
        <div class="symbol-img-wrap" style="font-size: 2.5rem;">⭐</div>
        <h4>Žeton slávy</h4>
        <p>Žetony z rozšíření Legendy pro plnění hrdinských činů, chlubení se a zrod mocné Legendy (strana B).</p>
      </div>
    </div>

    <h3 style="color: var(--color-brown); font-size: 1.3rem; margin: 2rem 0 0.5rem;">
      6. Výjimky z pravidla „1 BANG! za tah“
    </h3>
    <div class="callout callout-info">
      <ul>
        <li><strong>Zbraň Volcanic:</strong> Umožňuje zahrát libovolný počet karet BANG! za tah (s dostřelem 1).</li>
        <li><strong>Postava Willy the Kid:</strong> Může zahrát libovolný počet karet BANG! za tah bez ohledu na zbraň.</li>
        <li><strong>Karty Gatling a Indiáni!:</strong> Jsou to útočné karty, ale NEJSOU kartou BANG! – nepočítají se do limitu 1 BANG! za tah!</li>
        <li><strong>Postava Doc Holyday:</strong> Může 1× za tah odhodit 2 libovolné karty z ruky jako BANG! navíc.</li>
        <li><strong>Dvouhlavňová brokovnice:</strong> Umožňuje útok BANG!em vyžadující 2 karty Vedle! nebo odhození žetonů nabití.</li>
      </ul>
    </div>
  `;

  window.BANG_HELPER_HTML_EN = `
    <h3 style="color: var(--color-brown); font-size: 1.3rem; margin: 1.5rem 0 0.5rem;">
      1. Player Elimination Checklist (What happens upon death)
    </h3>
    <div class="table-responsive">
      <table class="bang-table">
        <thead>
          <tr>
            <th>Element / Card / Ability</th>
            <th>What happens when a player dies</th>
            <th>Status / Outcome</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Role Card</strong></td>
            <td>The player immediately reveals their secret Role card face-up to everyone.</td>
            <td><span class="status-pill status-warn">Revealed</span></td>
          </tr>
          <tr>
            <td><strong>Was an Outlaw</strong></td>
            <td>Whoever delivered the final shot (even another Outlaw) immediately draws <strong>3 cards from the deck</strong>.</td>
            <td><span class="status-pill status-yes">+3 cards</span></td>
          </tr>
          <tr>
            <td><strong>Had Wanted Card</strong></td>
            <td>The killer gets <strong>+2 cards and +1 Gold Nugget</strong> (in addition to the Outlaw bounty!).</td>
            <td><span class="status-pill status-yes">+2 cards &amp; +1 Gold</span></td>
          </tr>
          <tr>
            <td><strong>Sheriff killed Deputy</strong></td>
            <td>The Sheriff must <strong>discard all cards from hand and in play</strong> (including weapons). Gold Nuggets are kept!</td>
            <td><span class="status-pill status-no">Discards all cards</span></td>
          </tr>
          <tr>
            <td><strong>Vulture Sam in play</strong></td>
            <td>Takes <strong>all cards of the dead player</strong> into hand (hand and in play; puts railcars in play; black equipment to bottom of deck).</td>
            <td><span class="status-pill status-yes">Takes all cards</span></td>
          </tr>
          <tr>
            <td><strong>Herb Hunter in play</strong></td>
            <td>Whenever any player dies, immediately draws <strong>2 cards from the deck</strong>.</td>
            <td><span class="status-pill status-yes">+2 cards</span></td>
          </tr>
          <tr>
            <td><strong>Gregg Digger in play</strong></td>
            <td>Whenever any player dies, immediately heals <strong>2 life points</strong> (up to max).</td>
            <td><span class="status-pill status-yes">+2 lives</span></td>
          </tr>
          <tr>
            <td><strong>Shadow Gunners Variant</strong></td>
            <td>Dead players do not stay eliminated – they return on their turns as ghost gunners with 0 lives.</td>
            <td><span class="status-pill status-warn">Ghost Gunner</span></td>
          </tr>
        </tbody>
      </table>
    </div>

    <h3 style="color: var(--color-brown); font-size: 1.3rem; margin: 2rem 0 0.5rem;">
      2. Distance and Weapon Range Calculations
    </h3>
    <div class="table-responsive">
      <table class="bang-table">
        <thead>
          <tr>
            <th>Card / Ability</th>
            <th>Effect on Distance</th>
            <th>Modifier Type</th>
            <th>Key Note</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Colt .45 (Default)</strong></td>
            <td>Range 1</td>
            <td>Default Weapon</td>
            <td>Basic firearm pictured on player board.</td>
          </tr>
          <tr>
            <td><strong>Mustang / Hideout</strong></td>
            <td>+1 to distance TO YOU</td>
            <td>Defense</td>
            <td>Other players see you 1 further away. You see others normally.</td>
          </tr>
          <tr>
            <td><strong>Paul Regret</strong></td>
            <td>+1 to distance TO HIM</td>
            <td>Defense</td>
            <td>With Mustang in play, distance to him is +2.</td>
          </tr>
          <tr>
            <td><strong>Scope / Binoculars</strong></td>
            <td>-1 to distance FROM YOU</td>
            <td>Attack</td>
            <td>You see all other players 1 closer (minimum distance is 1).</td>
          </tr>
          <tr>
            <td><strong>Rose Doolan</strong></td>
            <td>-1 to distance FROM HER</td>
            <td>Attack</td>
            <td>With Scope in play, sees all 2 closer. In Legends Side B, sees all at distance 1!</td>
          </tr>
          <tr>
            <td><strong>Weapons (Schofield to Winchester)</strong></td>
            <td>Range 2 to 5</td>
            <td>BANG! Range</td>
            <td><strong>ATTENTION:</strong> Weapons do NOT change actual distance, only BANG! reach.</td>
          </tr>
          <tr>
            <td><strong>Bell Tower</strong></td>
            <td>Distance 1 to all</td>
            <td>Attack</td>
            <td>Pay 1 load token: you see all players at distance 1 for your next card!</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="callout callout-info" style="margin-top: 1.25rem;">
      <h4 style="margin: 0 0 0.5rem; color: var(--color-brown, #5c3a21); font-size: 1.15rem; display: flex; align-items: center; gap: 0.4rem;"><img src="assets/symbols/symbol_mustang.png" class="rules-symbol-inline" alt=""> Stacking &amp; Combining Distance Modifier Cards</h4>
      <p><strong>Yes, all of these cards stack.</strong> According to official BANG! rules, you cannot have two identical blue cards (with the same name) in play in front of you. Because each of these cards has a different name, you can have them in play simultaneously and their effects combine.</p>
      
      <p style="margin-top: 0.75rem; font-weight: 600;">In practice, distances are calculated as follows:</p>

      <div style="margin-top: 0.75rem; padding: 0.75rem 1rem; background: rgba(0,0,0,0.03); border-radius: 6px; border-left: 3px solid var(--accent-gold, #c89b3c);">
        <h5 style="color: var(--color-brown, #5c3a21); margin: 0 0 0.35rem; font-size: 1.05rem; display: flex; align-items: center; gap: 0.4rem;"><img src="assets/symbols/symbol_missed.png" class="rules-symbol-inline" alt=""> Defensive Cards (when someone attacks you)</h5>
        <p style="margin-bottom: 0.35rem;">These cards increase the distance at which other players see you.</p>
        <ul style="margin: 0.25rem 0 0.5rem 1.25rem;">
          <li><strong>Mustang:</strong> Others see you 1 further away.</li>
          <li><strong>Hideout:</strong> Others see you 1 further away.</li>
        </ul>
        <p><strong>Result:</strong> If you have both Mustang and Hideout in play, other players see you 2 further away in total. A player sitting right next to you (base distance 1) needs a weapon with a range of at least 3 to target you.</p>
        <p style="font-size: 0.85rem; color: var(--color-brown, #5c3a21); opacity: 0.85; margin: 0.35rem 0 0;"><em>*Rules Note: Barrel in the base game provides a chance to draw for a Missed! effect, whereas Mustang and Hideout (or Paul Regret) modify physical distance.</em></p>
      </div>

      <div style="margin-top: 0.75rem; padding: 0.75rem 1rem; background: rgba(0,0,0,0.03); border-radius: 6px; border-left: 3px solid var(--color-brown, #5c3a21);">
        <h5 style="color: var(--color-brown, #5c3a21); margin: 0 0 0.35rem; font-size: 1.05rem;">Offensive Cards (when you attack)</h5>
        <p style="margin-bottom: 0.35rem;">These cards decrease the distance at which you see other players.</p>
        <ul style="margin: 0.25rem 0 0.5rem 1.25rem;">
          <li><strong>Scope</strong> (or Appaloosa in the base game): You see others 1 closer.</li>
          <li><strong>Binoculars:</strong> You see others 1 closer.</li>
        </ul>
        <p><strong>Result:</strong> If you have both Scope and Binoculars in play, you see all players 2 closer. A player at actual distance 3 is seen at distance 1, so the default Colt .45 is sufficient to attack them (e.g. with BANG! or Panic!).</p>
      </div>
    </div>

    <h3 style="color: var(--color-brown); font-size: 1.3rem; margin: 2rem 0 0.5rem;">
      3. Beer Rules in All Situations
    </h3>
    <div class="table-responsive">
      <table class="bang-table">
        <thead>
          <tr>
            <th>Game Situation</th>
            <th>Can Beer be Played?</th>
            <th>Exact Rule and Outcome</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>On your own turn (Phase 2)</td>
            <td><span class="status-pill status-yes">✓ YES</span></td>
            <td>Regains 1 lost life point (up to your starting maximum).</td>
          </tr>
          <tr>
            <td>Out of turn upon losing your last life point (0 lives)</td>
            <td><span class="status-pill status-yes">✓ YES</span></td>
            <td>Prevents elimination (restores to 1 life point and saves the player).</td>
          </tr>
          <tr>
            <td>Out of turn upon normal damage (remaining $\ge 1$ life)</td>
            <td><span class="status-pill status-no">✕ FORBIDDEN</span></td>
            <td>Beer cannot be played out of turn unless you are on the brink of death!</td>
          </tr>
          <tr>
            <td>Only 2 players left in the game (1v1 Duel)</td>
            <td><span class="status-pill status-warn">⚠️ YES (NO HEAL)</span></td>
            <td>Card loses healing effect. In Gold Rush, grants 1 Gold Nugget!</td>
          </tr>
          <tr>
            <td>Last Call Card</td>
            <td><span class="status-pill status-yes">✓ YES</span></td>
            <td>Heals 1 life point even in a 2-player final duel!</td>
          </tr>
          <tr>
            <td>Saloon Card</td>
            <td><span class="status-pill status-warn">⚠️ In turn only</span></td>
            <td>Saloon is NOT Beer – cannot be played out of turn to prevent death.</td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- 4. ELIMINATED PLAYERS ASSISTANT -->
    <div id="afterlife-assistant-mount"></div>

    <h3 style="color: var(--color-brown); font-size: 1.3rem; margin: 2rem 0 0.5rem;">
      5. Official Card Symbols and Icons Guide (Dized / BANG! Rules)
    </h3>
    <p style="font-size: 0.95rem; color: var(--text-muted); margin-bottom: 1.25rem;">
      Official graphic symbols used on BANG! cards to unambiguously indicate effects, targeting criteria, and distance rules across all languages.
    </p>

    <div class="symbols-grid">
      <!-- 1. BANG! -->
      <div class="symbol-card">
        <span class="symbol-type-tag">Attack / Life Loss</span>
        <div class="symbol-img-wrap">
          <img src="assets/symbols/symbol_bang.png" alt="BANG! symbol" class="symbol-real-img" loading="lazy">
        </div>
        <h4>BANG! (Shot)</h4>
        <p>Inflicts 1 wound on chosen target in weapon range. The target may cancel with Missed! or Barrel check. Normally limited to 1 BANG! per turn.</p>
      </div>

      <!-- 2. Missed! -->
      <div class="symbol-card">
        <span class="symbol-type-tag">Defense / Dodge</span>
        <div class="symbol-img-wrap">
          <img src="assets/symbols/symbol_missed.png" alt="Missed! symbol" class="symbol-real-img" loading="lazy">
        </div>
        <h4>Missed! (Dodge)</h4>
        <p>Immediately cancels a BANG!, Gatling, or direct shot attack targeted at you. Played defensively out of turn (unless you are Calamity Janet).</p>
      </div>

      <!-- 3. Beer -->
      <div class="symbol-card">
        <span class="symbol-type-tag">Healing / Survival</span>
        <div class="symbol-img-wrap">
          <img src="assets/symbols/symbol_regain_life.png" alt="Beer symbol" class="symbol-real-img" loading="lazy">
        </div>
        <h4>Regain 1 Life (Beer)</h4>
        <p>Instantly restores 1 lost life point (up to your character max). Can be played out of turn to prevent lethal elimination at 0 HP. In a 2-player duel, Beer has no effect!</p>
      </div>

      <!-- 4. Draw a card -->
      <div class="symbol-card">
        <span class="symbol-type-tag">Draw Mechanic</span>
        <div class="symbol-img-wrap">
          <img src="assets/symbols/symbol_draw_card.png" alt="Draw card symbol" class="symbol-real-img" loading="lazy">
        </div>
        <h4>Draw a Card</h4>
        <p>Draw a card into your hand. If a target player is specified (e.g. Panic!), choose a random card from hand or a card in play. Otherwise, draw from the deck.</p>
      </div>

      <!-- 5. Discard a card -->
      <div class="symbol-card">
        <span class="symbol-type-tag">Card Removal</span>
        <div class="symbol-img-wrap">
          <img src="assets/symbols/symbol_discard_card.png" alt="Discard card symbol" class="symbol-real-img" loading="lazy">
        </div>
        <h4>Discard a Card</h4>
        <p>Forces target player to discard a card (e.g. Cat Balou). You may choose a random card from their hand or an active card in play before them.</p>
      </div>

      <!-- 6. Player at reachable distance -->
      <div class="symbol-card">
        <span class="symbol-type-tag">Targeting / Weapon Reach</span>
        <div class="symbol-img-wrap">
          <img src="assets/symbols/symbol_reachable_distance.png" alt="Reachable distance symbol" class="symbol-real-img" loading="lazy">
        </div>
        <h4>Player at Reachable Distance</h4>
        <p>Applies to any one player within current firearm reach (default Colt .45 reach is 1; modified by weapons, Scope, and Mustang).</p>
      </div>

      <!-- 7. Player at distance 1 / X -->
      <div class="symbol-card">
        <span class="symbol-type-tag">Fixed Distance</span>
        <div class="symbol-img-wrap">
          <img src="assets/symbols/symbol_distance_x.png" alt="Distance 1 symbol" class="symbol-real-img" loading="lazy">
        </div>
        <h4>Player at Distance 1 (X)</h4>
        <p>Applies to a player at distance X or less (e.g. Panic!). NOTE: Mustang and Scope modify this distance, but equipped WEAPONS DO NOT!</p>
      </div>

      <!-- 8. Any one player -->
      <div class="symbol-card">
        <span class="symbol-type-tag">Unlimited Target</span>
        <div class="symbol-img-wrap">
          <img src="assets/symbols/symbol_any_one_player.png" alt="Any player symbol" class="symbol-real-img" loading="lazy">
        </div>
        <h4>Any One Player</h4>
        <p>Can target any chosen player at the table regardless of distance, weapons, Mustang, or Scope (e.g. Jail, Cat Balou, Duel).</p>
      </div>

      <!-- 9. All other players -->
      <div class="symbol-card">
        <span class="symbol-type-tag">Global Area Effect</span>
        <div class="symbol-img-wrap">
          <img src="assets/symbols/symbol_all_other_players.png" alt="All other players symbol" class="symbol-real-img" loading="lazy">
        </div>
        <h4>All Other Players</h4>
        <p>Applies to all other living players at the table (not the player who played the card), regardless of distance (Gatling, Indians!, Saloon).</p>
      </div>

      <!-- 10. Check ("Draw!") -->
      <div class="symbol-card">
        <span class="symbol-type-tag">Deck Mechanic</span>
        <div class="symbol-img-wrap">
          <img src="assets/symbols/symbol_draw_check.png" alt="Check draw symbol" class="symbol-real-img" loading="lazy">
        </div>
        <h4>Check ("Draw!")</h4>
        <p>Flip the top card of the draw deck into discard to check suit and value in the corner. Used for Barrel (♥), Jail (♥), and Dynamite (♠ 2–9).</p>
      </div>

      <!-- 11. Barrel -->
      <div class="symbol-card">
        <span class="symbol-type-tag">Blue Equipment</span>
        <div class="symbol-img-wrap">
          <img src="assets/symbols/symbol_barrel.png" alt="Barrel symbol" class="symbol-real-img" loading="lazy">
        </div>
        <h4>Barrel (Protective Cover)</h4>
        <p>Blue card in play. Whenever targeted by BANG!, you may "draw!": if the flipped card is Hearts (♥), the attack is cancelled just like a Missed!.</p>
      </div>

      <!-- 12. Dynamite -->
      <div class="symbol-card">
        <span class="symbol-type-tag">Ticking Hazard</span>
        <div class="symbol-img-wrap">
          <img src="assets/symbols/symbol_dynamite.png" alt="Dynamite symbol" class="symbol-real-img" loading="lazy">
        </div>
        <h4>Dynamite (Hazard)</h4>
        <p>Passes clockwise. At turn start, flip a card: if Spades (♠) 2 through 9, Dynamite explodes for 3 wounds! Otherwise it passes to your left.</p>
      </div>

      <!-- 13. Jail -->
      <div class="symbol-card">
        <span class="symbol-type-tag">Turn Lockout</span>
        <div class="symbol-img-wrap">
          <img src="assets/symbols/symbol_jail.png" alt="Jail symbol" class="symbol-real-img" loading="lazy">
        </div>
        <h4>Jail (Arrest)</h4>
        <p>Placed on any player except Sheriff. At turn start, flip a card: if Hearts (♥), break free and play. Otherwise discard Jail and entire turn is skipped.</p>
      </div>

      <!-- 14. Mustang -->
      <div class="symbol-card">
        <span class="symbol-type-tag">Defensive Distance</span>
        <div class="symbol-img-wrap">
          <img src="assets/symbols/symbol_mustang.png" alt="Mustang symbol" class="symbol-real-img" loading="lazy">
        </div>
        <h4>Mustang (Distance +1)</h4>
        <p>Blue mount in play. All other players see you at a distance +1 further than normal (e.g. a neighbor sees you at distance 2 instead of 1).</p>
      </div>

      <!-- 15. Scope -->
      <div class="symbol-card">
        <span class="symbol-type-tag">Offensive Distance</span>
        <div class="symbol-img-wrap">
          <img src="assets/symbols/symbol_scope.png" alt="Scope symbol" class="symbol-real-img" loading="lazy">
        </div>
        <h4>Scope (Distance -1)</h4>
        <p>Blue optical sight. You see all other players at a distance 1 closer than normal (e.g. neighbor at distance 1 is seen at distance 0).</p>
      </div>

      <!-- 16. Life Points -->
      <div class="symbol-card">
        <span class="symbol-type-tag">Health &amp; Hand Limit</span>
        <div class="symbol-img-wrap">
          <img src="assets/symbols/symbol_life_points.png" alt="Life points symbol" class="symbol-real-img" loading="lazy">
        </div>
        <h4>Life Points / Bullets</h4>
        <p>Tracks your character's current and maximum health (Sheriff gets +1 HP). Current HP also dictates maximum hand size at the end of your turn.</p>
      </div>
    </div>

    <!-- Expansion Tokens -->
    <h4 style="color: var(--color-brown); font-size: 1.15rem; margin: 1.5rem 0 0.5rem; font-family: var(--font-western);">
      Special Expansion Tokens
    </h4>
    <div class="symbols-grid">
      <div class="symbol-card">
        <span class="symbol-type-tag">Gold Rush</span>
        <div class="symbol-img-wrap" style="font-size: 2.5rem;">🪙</div>
        <h4>Gold Nugget</h4>
        <p>Gold Rush currency used to buy black and brown equipment cards from the general store.</p>
      </div>
      <div class="symbol-card">
        <span class="symbol-type-tag">Armed &amp; Dangerous</span>
        <div class="symbol-img-wrap" style="font-size: 2.5rem;">⚡</div>
        <h4>Load Token (Cube)</h4>
        <p>Armed &amp; Dangerous resource used to activate and upgrade dangerous orange cards.</p>
      </div>
      <div class="symbol-card">
        <span class="symbol-type-tag">Legends</span>
        <div class="symbol-img-wrap" style="font-size: 2.5rem;">⭐</div>
        <h4>Fame Token</h4>
        <p>Legends tokens used to accomplish feats, boast, and forge a legendary character status (Side B).</p>
      </div>
    </div>

    <h3 style="color: var(--color-brown); font-size: 1.3rem; margin: 2rem 0 0.5rem;">
      6. Exceptions to "1 BANG! per Turn" Limit
    </h3>
    <div class="callout callout-info">
      <ul>
        <li><strong>Volcanic Weapon:</strong> Allows you to play any number of BANG! cards on your turn (Range 1).</li>
        <li><strong>Willy the Kid:</strong> May play any number of BANG! cards on his turn regardless of weapon.</li>
        <li><strong>Gatling and Indians!:</strong> Are attack cards, but NOT BANG! cards – they do not count toward the 1 BANG! limit!</li>
        <li><strong>Doc Holyday:</strong> May discard 2 cards from hand once per turn to count as an extra BANG!.</li>
        <li><strong>Double Barrel:</strong> Allows a BANG! attack requiring 2 Missed! cards or spending tokens.</li>
      </ul>
    </div>
  `;
})();
