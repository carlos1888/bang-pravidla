# -*- coding: utf-8 -*-
"""
Pravidla pro kompletní hru se všemi rozšířeními dohromady (Dynamite Box + Legendy).
"""

DYNAMITE_BOX_SECTIONS = [
    {
        "id": "db-kompletni-tah",
        "category": "dynamite-box",
        "categoryTitle": "🧨 Kompletní hra dohromady",
        "title": "1. Kompletní průběh tahu hráče (Fáze 0–4)",
        "icon": "clock",
        "content": """
<div class="rule-section-header">
  <span class="section-tag">Kompletní pravidla</span>
  <h2>1. Kompletní průběh tahu hráče (Fáze 0–4)</h2>
  <p class="section-lead">Když hrajete se všemi rozšířeními z Dynamite Boxu a s Legendami současně, každý tah probíhá v této přesné, závazné posloupnosti fází.</p>
</div>

<div class="phase-card phase-0">
  <div class="phase-header">
    <span class="phase-tag">Fáze 0</span>
    <h3>Fáze 0: Události a časované karty před tahem</h3>
  </div>
  <div class="phase-body">
    <ol class="phase-steps-list">
      <li>
        <strong>Otočení globální události &amp; Posun vlaku (Pouze Šerif):</strong>
        <p>Šerif na začátku každého svého tahu od 2. kola otočí novou kartu události (High Noon / Fistful) a posune lokomotivu o 1 stanici doprava (vlak táhne vagony).</p>
      </li>
      <li>
        <strong>Okamžité efekty začátku tahu:</strong>
        <p>Aplikují se události platící „na začátku tahu“ (např. <em>Pravé poledne</em> = ztráta 1 života).</p>
      </li>
      <li>
        <strong>PŘÍSNÉ ČASOVÉ POŘADÍ KARET NA STOLE:</strong>
        <div class="timing-subgrid">
          <div class="timing-item">
            <strong>1. DYNAMIT</strong>
            <p>Sejme: ♠ 2–9 = výbuch za 3 životy; jinak se posune doleva.</p>
          </div>
          <div class="timing-item">
            <strong>2. VĚZENÍ</strong>
            <p>Volba A: Sejme na ♥ = útěk; jinak ztráta tahu. Volba B (Legendy): Odhodí 1 ♥ kartu z ruky a hraje bez rizika!</p>
          </div>
          <div class="timing-item">
            <strong>3. BOMBA</strong>
            <p>Sejme: ♥/♦ předá dál; ♣/♠ odebere 2 žetony nabití. Při 0 exploduje za 2 životy!</p>
          </div>
          <div class="timing-item">
            <strong>4. CHŘESTÝŠ</strong>
            <p>Sejme na ♠ = ztráta 1 života. (Při neúspěchu ve Vězení se na Chřestýše nesnímá!).</p>
          </div>
        </div>
      </li>
      <li>
        <strong>Karta Mapa:</strong>
        <p>Prohlédne 2 vrchní karty balíčku a 1 může odhodit.</p>
      </li>
    </ol>
  </div>
</div>

<div class="phase-card phase-1">
  <div class="phase-header">
    <span class="phase-tag">Fáze 1</span>
    <h3>Fáze 1: Dobrání karet do ruky</h3>
  </div>
  <div class="phase-body">
    <p>Standardně si hráč dobere <strong>2 vrchní karty</strong> z dobíracího balíčku.</p>
    <p>Schopnosti modifikující tuto fázi: <em>Jesse Jones</em> (první z ruky soupeře), <em>Pedro Ramirez</em> (první z odhozu), <em>Kit Carlson</em> (vybírá ze 3 karet), <em>Pixie Pete</em> (bere 3 karty), <em>Bill Noface</em> (1 + zranění), <em>Black Jack</em> (ukáže 2. kartu), <em>Dutch Will</em> (2 dobere, 1 odhodí za 1 valoun zlata).</p>
  </div>
</div>

<div class="phase-card phase-2">
  <div class="phase-header">
    <span class="phase-tag">Fáze 2</span>
    <h3>Fáze 2: Hraní karet a akce ze všech rozšíření</h3>
  </div>
  <div class="phase-body">
    <p>Můžete provést libovolný počet akcí v libovolném pořadí:</p>
    <ul class="phase-actions-list">
      <li><strong>Běžné karty:</strong> Hnědé (okamžitý efekt), Modré (vyložení před sebe). <em>Omezení:</em> max. 1 BANG! za tah, max. 1 zbraň, unikátní karty ve hře.</li>
      <li><strong>Zelené karty (Dodge City):</strong> Můžete odhodit kteroukoli svou zelenou kartu vyloženou v předchozích kolech.</li>
      <li><strong>Zlatá horečka:</strong> Nákup vybavení za valouny zlata; nucené odhození soupeřova vybavení za cenu + 1 valoun; směna Piva za 1 valoun.</li>
      <li><strong>Velká vlaková loupež:</strong> Posun vlaku zdarma o 1 stanici (pak je nákup vagonu povinný!); nákup přiřazeného vagonu za cenu na stanici.</li>
      <li><strong>Ozbrojení a nebezpeční:</strong> Vykládání oranžových karet se 3 žetony nabití; nabíjení karet zahráním modrých karet (+1 žeton); vylepšování karet žetony nabití.</li>
      <li><strong>Legendy:</strong> Vykonání činu (položení 2 žetonů slávy). Pokud jste Legenda: <strong>přivlastnění činu</strong> (způsobení 1 nezvratného zranění jiné legendě).</li>
    </ul>
  </div>
</div>

<div class="phase-card phase-3">
  <div class="phase-header">
    <span class="phase-tag">Fáze 3</span>
    <h3>Fáze 3: Odhození nadbytečných karet &amp; Nabíjení</h3>
  </div>
  <div class="phase-body">
    <p>Limit karet v ruce = <strong>aktuální počet vašich životů</strong>.</p>
    <ul>
      <li><em>Výjimky:</em> Sean Mallory (až 10 karet), Zbraňový pás (8 karet).</li>
      <li><strong>Pravidlo Legend pro 1 život:</strong> Pokud vám zbývá pouze 1 život, smíte si v ruce ponechat <strong>2 karty</strong>!</li>
      <li><strong>NABÍJENÍ V TÉTO FÁZI:</strong> Za každou kartu, kterou musíte kvůli limitu odhodit, přidejte <strong>1 žeton nabití</strong> na libovolnou svou Nebezpečnou kartu nebo na postavu!</li>
    </ul>
  </div>
</div>

<div class="phase-card phase-4">
  <div class="phase-header">
    <span class="phase-tag">Fáze 4</span>
    <h3>Fáze 4: Konec tahu &amp; Chlubení se činem (Legendy)</h3>
  </div>
  <div class="phase-body">
    <div class="callout callout-gold">
      <h4>🏆 Chlubení se činem (Legendy)</h4>
      <p>Jestliže jste během celého svého tahu <strong>nevykonali žádný čin</strong> (dokonce i když jste byli ve Vězení!):</p>
      <ol>
        <li>Vyložte novou kartu činu z balíčku.</li>
        <li>Pokud je vyloženo více než 4 činy, odhoďte ten s nejvyšším počtem žetonů slávy.</li>
        <li>Položte <strong>1 svůj žeton slávy</strong> na vyložený čin, kde ještě žádný váš žeton neleží.</li>
      </ol>
    </div>
    <div class="callout callout-success">
      <h4>⭐️ ZROD LEGENDY (Proměna na stranu B)</h4>
      <p>Jakmile hráč umístí svůj <strong>poslední (5.) žeton slávy</strong>, okamžitě se stává <strong>LEGENDOU</strong>! Otočí postavu na stranu B a <strong>doplní si životy na 3</strong> (pokud má méně)!</p>
    </div>
    <p>Na konci tahu: Jimmy Texas dobere 1 kartu; Don Bell snímá na možnost odehrát další celý tah.</p>
  </div>
</div>
"""
    },
    {
        "id": "db-scitani-vzdalenosti",
        "category": "dynamite-box",
        "categoryTitle": "🧨 Kompletní hra dohromady",
        "title": "2. Sčítání a kombinování karet vzdálenosti v praxi",
        "icon": "compass",
        "content": """
<div class="rule-section-header">
  <span class="section-tag">Kompletní pravidla</span>
  <h2>2. Sčítání a kombinování karet vzdálenosti v praxi</h2>
  <p class="section-lead">Oficiální vysvětlení, jak se kombinují karty vzdálenosti z různých rozšíření.</p>
</div>

<div class="concept-card" style="border-left: 4px solid var(--accent-gold);">
  <h3>🐎 Sčítání a kombinování karet vzdálenosti</h3>
  <p><strong>Ano, všechny tyto karty se sčítají.</strong> Podle oficiálních pravidel karetní hry nesmíte mít před sebou vyložené dvě úplně stejné modré karty (se stejným názvem). Protože má každá z těchto čtyř karet jiný název, můžete je mít vyložené na stole všechny najednou a jejich efekty se kombinují.</p>
  <p style="margin-top: 0.5rem;"><strong>Vzdálenosti se v praxi počítají následovně:</strong></p>
  
  <div style="margin-top: 0.75rem;">
    <h5 style="color: var(--color-brown, #5c3a21); font-size: 1rem; margin: 0 0 0.25rem;">🤠 Obranné karty (když na vás někdo útočí)</h5>
    <p style="margin-bottom: 0.25rem;">Tyto karty zvyšují vzdálenost, na kterou vás vidí ostatní hráči:</p>
    <ul style="margin: 0.25rem 0 0.5rem 1.25rem;">
      <li><strong>Mustang:</strong> Ostatní vás vidí o 1 dál.</li>
      <li><strong>Skrýš</strong> (případně Barel v základní hře*): Ostatní vás vidí o 1 dál.</li>
    </ul>
    <p><strong>Výsledek:</strong> Pokud máte vyloženého Mustanga i Skrýš, ostatní hráči vás vidí celkově o 2 dál. Hráč, který sedí hned vedle vás (základní vzdálenost 1), na vás potřebuje zbraň s dostřelem minimálně 3.</p>
    <p style="font-size: 0.85rem; color: var(--color-brown, #5c3a21); opacity: 0.85; margin-top: 0.35rem;"><em>*Pravidlová poznámka: Barel v základní hře poskytuje šanci na sejmutí Vedle!, vzdálenost k vám přímo zvyšují Mustang a Skrýš (či schopnost postavy Paul Regret).</em></p>
  </div>

  <div style="margin-top: 1rem;">
    <h5 style="color: var(--color-brown, #5c3a21); font-size: 1rem; margin: 0 0 0.25rem;">🎯 Útočné karty (když útočíte vy)</h5>
    <p style="margin-bottom: 0.25rem;">Tyto karty zkracují vzdálenost, na kterou vidíte vy ostatní hráče:</p>
    <ul style="margin: 0.25rem 0 0.5rem 1.25rem;">
      <li><strong>Hledí</strong> (případně Appaloosa v základní hře): Vy vidíte ostatní o 1 blíž.</li>
      <li><strong>Dalekohled:</strong> Vy vidíte ostatní o 1 blíž.</li>
    </ul>
    <p><strong>Výsledek:</strong> Pokud máte vyložené Hledí i Dalekohled, vidíte všechny hráče o 2 blíž. Hráče na reálnou vzdálenost 3 tak vidíte na vzdálenost 1 a stačí vám k útoku (např. kartou Bang! nebo Panika) základní zbraň Colt .45.</p>
  </div>
</div>
"""
    }
]
