# -*- coding: utf-8 -*-
"""
Oficiální pravidla rozšíření Zlatá horečka (Gold Rush).
"""

GOLD_RUSH_SECTIONS = [
    {
        "id": "gr-zlato-a-nakup",
        "category": "gold-rush",
        "categoryTitle": "🪙 Zlatá horečka (Gold Rush)",
        "title": "1. Valouny zlata a nákup vybavení z obchodu",
        "icon": "dollar-sign",
        "content": """
<div class="rule-section-header">
  <span class="section-tag">Zlatá horečka (Gold Rush)</span>
  <h2>1. Valouny zlata a nákup vybavení z obchodu</h2>
  <p class="section-lead">Přestřelka na Divokém západě dostává nový rozměr: zlato se stává měnou a za zranění soupeřů získáváte valouny na nákup mocného vybavení.</p>
</div>

<div class="concept-card">
  <h3>🪙 Získávání valounů zlata</h3>
  <p>Na začátku hry má každý hráč 0 valounů zlata. Valouny zlata se berou ze společné zásoby doprostřed stolu:</p>
  <ul>
    <li><strong>1 valoun zlata za každé způsobené zranění:</strong> Vždy, když způsobíte jinému hráči ztrátu života jakýmkoli způsobem (zahráním karty BANG!, Kulomet, Indiáni, zbraň), vezměte si <strong>1 valoun zlata za každý ubratý život</strong> z banku.</li>
    <li><em>Příklad:</em> Zahrajete Kulomet a zraníte 3 hráče = vezmete si ze zásoby 3 valouny zlata.</li>
    <li><strong>Sebepoškození nepřináší zlato:</strong> Pokud způsobíte zranění sami sobě (např. výbuch vašeho Dynamitu nebo nákup Tombrocku), žádný valoun nedostanete.</li>
  </ul>
</div>

<div class="concept-card" style="border-left: 4px solid var(--accent-gold);">
  <h3>🛒 Nabídka obchodu a akce ve 2. fázi tahu</h3>
  <p>Před začátkem hry zamíchejte balíček 24 karet vybavení a vyložte <strong>3 karty lícem nahoru do veřejné nabídky (obchodu)</strong>. Ve 2. fázi svého tahu můžete provést tyto nové akce:</p>
  
  <div class="concept-grid">
    <div class="concept-item">
      <span class="concept-badge">Akce 1</span>
      <h4>Nákup vybavení z nabídky</h4>
      <p>Zaplaťte uvedený počet zlatých valounů do banku. Můžete koupit i více karet v jednom tahu. Nabídka se <strong>ihned doplní</strong> novou kartou z balíčku vybavení.</p>
      <ul>
        <li><strong>Hnědé vybavení:</strong> Uplatní se ihned a poté se odloží lícem nahoru na spodek balíčku vybavení (např. <em>Panák, Zlatá horečka, Komplic</em>).</li>
        <li><strong>Černé vybavení:</strong> Vyloží se před vás na stůl a působí trvale jako modrá karta (např. <em>Podkova, Boty, Ruksak</em>). Nesmíte mít před sebou 2 karty stejného jména.</li>
      </ul>
    </div>

    <div class="concept-item">
      <span class="concept-badge concept-badge-gun">Akce 2</span>
      <h4>Donucení soupeře k odhození vybavení</h4>
      <p>Můžete donutit jiného hráče, aby odhodil své vyložené černé vybavení: musíte zaplatit <strong>jeho běžnou cenu ve valounech + 1 valoun navíc</strong>! Odhozená karta putuje na spodek balíčku vybavení.</p>
    </div>

    <div class="concept-item">
      <span class="concept-badge concept-badge-eff">Akce 3</span>
      <h4>Získání zlata za kartu Pivo</h4>
      <p>Zahrajte kartu <strong>Pivo z ruky</strong> a získejte <strong>1 zlatý valoun</strong> ze zásoby místo léčení. Tuto směnu lze provést i ve 2 hráčích!</p>
    </div>
  </div>
</div>
"""
    },
    {
        "id": "gr-stinovi-pistolnici",
        "category": "gold-rush",
        "categoryTitle": "🪙 Zlatá horečka (Gold Rush)",
        "title": "2. Varianta Stínoví pistolníci & Stínový odpadlík",
        "icon": "ghost",
        "content": """
<div class="rule-section-header">
  <span class="section-tag">Zlatá horečka</span>
  <h2>2. Varianta Stínoví pistolníci &amp; Stínový odpadlík</h2>
  <p class="section-lead">Revoluční varianta, díky níž vyřazení hráči nevypadávají definitivně, ale vracejí se v každém svém tahu jako nebezpeční stínoví střelci.</p>
</div>

<div class="concept-card">
  <h3>👻 Pravidla pro Stínové pistolníky</h3>
  <ul>
    <li><strong>Okamžik vyřazení:</strong> Když ztratíte svůj poslední život, odhodíte všechny své karty z ruky i ze stolu a odhalíte svou roli. <strong>Své nastřádané valouny zlata si však PONECHÁVÁTE!</strong></li>
    <li><strong>Návrat v dalším tahu:</strong> Ve všech svých následujících tazích vstupujete do hry jako <strong>stínový pistolník s 0 životy</strong>.</li>
    <li><strong>Průběh tahu stínového pistolníka:</strong>
      <ol>
        <li>Doberete si <strong>2 karty z balíčku</strong> do ruky.</li>
        <li>Odehrajete normálně 2. fázi tahu: můžete hrát karty BANG!, útočit, léčit spoluhráče kartou Saloon, nakupovat vybavení za své valouny nebo získávat nové valouny za zranění soupeřů!</li>
        <li><strong>Konec tahu:</strong> Na konci svého tahu musíte <strong>VŠECHNY KARTY Z RUKY I ZE STOLU ODHODIT</strong>! Vaše valouny zlata vám zůstávají.</li>
      </ol>
    </li>
    <li><strong>Imunita:</strong> Stínový pistolník nemůže získat ani ztratit žádné životy, nemůže na něj být zahráno Vězení ani Dynamit. Pro určení vzdálenosti se do kruhu hráčů nepočítá.</li>
  </ul>
</div>

<div class="concept-card" style="border-left: 4px solid #8e44ad;">
  <h3>🗡️ Pravidla pro Stínového odpadlíka</h3>
  <p>Pokud byl vyřazen <strong>Odpadlík</strong>, vrací se jako Stínový odpadlík a stává se jazýčkem na vahách celého duelu:</p>
  <ul>
    <li>Na začátku každého svého tahu se Stínový odpadlík podívá na <strong>aktuálně odhalené role na stole</strong> (Šerif a všichni již vyřazení hráči).</li>
    <li>Přidá se k té straně (týmu), která má <strong>více odhalených karet rolí</strong>:
      <ul>
        <li>Je-li na stole více odhalených Pomocníků a Šerif než Banditů, <strong>pomáhá Šerifovi</strong>.</li>
        <li>Je-li odhaleno více Banditů než Pomocníků se Šerifem, <strong>pomáhá Banditům</strong>.</li>
        <li><strong>Při shodě (remíze):</strong> Vždy pomáhá <strong>BANDITŮM</strong>!</li>
      </ul>
    </li>
    <li>Role se přepočítává <strong>na začátku každého jeho tahu</strong> – tým Stínového odpadlíka se tak může v průběhu hry měnit podle toho, kdo zrovna umírá!</li>
  </ul>
</div>
"""
    },
    {
        "id": "gr-karty-a-postavy",
        "category": "gold-rush",
        "categoryTitle": "🪙 Zlatá horečka (Gold Rush)",
        "title": "3. Přehled vybavení a 8 nových postav Zlaté horečky",
        "icon": "shield",
        "content": """
<div class="rule-section-header">
  <span class="section-tag">Zlatá horečka</span>
  <h2>3. Přehled vybavení a 8 nových postav Zlaté horečky</h2>
  <p class="section-lead">Popis černého vybavení z obchodu a 8 unikátních postav specializovaných na valouny zlata.</p>
</div>

<div class="concept-card">
  <h3>🛡️ Klíčové karty černého vybavení</h3>
  <ul>
    <li><strong>Podkova:</strong> Kdykoli máte „sejmout“, otočíte <strong>o 1 kartu navíc</strong> a vyberete si výsledek (Lucky Duke s Podkovou otáčí 3 karty!).</li>
    <li><strong>Boty:</strong> Neúčinkuje proti vám poslední ztracený život (chrání před smrtelným zásahem).</li>
    <li><strong>Kalumet:</strong> Zbraně soupeřů nemají vliv na vzdálenost při střelbě na vás.</li>
    <li><strong>Wanted (Hledá se):</strong> Vyloží se před kteréhokoli hráče. Kdokoli tohoto hráče zabije, získá navíc <strong>+2 karty a +1 valoun zlata</strong>!</li>
    <li><strong>Ruksak:</strong> Smí se použít i mimo tah, jakmile hráč ztrácí svůj poslední život.</li>
  </ul>
</div>

<div class="characters-rules-grid" style="margin-top: 1.5rem;">
  <div class="char-rule-box">
    <h4>Don Bell (4 životy)</h4>
    <p>Na konci svého tahu snímá: otočí-li červenou kartu (♥/♦), odehraje okamžitě další celý tah!</p>
  </div>

  <div class="char-rule-box">
    <h4>Dutch Will (4 životy)</h4>
    <p>Ve fázi 1 si dobere 2 karty, jednu z nich si vybere a druhou odhodí do odhozu výměnou za 1 valoun zlata.</p>
  </div>

  <div class="char-rule-box">
    <h4>Jack Murieta (4 životy)</h4>
    <p>Může vystřelit extra kartu BANG! víckrát za tah, pokud za každý další výstřel zaplatí 2 valouny zlata.</p>
  </div>

  <div class="char-rule-box">
    <h4>Josh McCloud (4 životy)</h4>
    <p>Může si ve svém tahu koupit vrchní kartu z balíčku vybavení naslepo za 2 valouny zlata.</p>
  </div>

  <div class="char-rule-box">
    <h4>Madam Yto (4 životy)</h4>
    <p>Kdykoli někdo zahraje kartu Pivo (pro léčení či zlato), Madam Yto si ihned dobere 1 kartu z balíčku.</p>
  </div>

  <div class="char-rule-box">
    <h4>Pretty Luzena (4 životy)</h4>
    <p>Jednou za tah si může koupit 1 kartu vybavení z nabídky se slevou 1 valounu (kartu s cenou 1 má zcela zdarma!).</p>
  </div>

  <div class="char-rule-box">
    <h4>Raddie Snake (4 životy)</h4>
    <p>Může si líznout až 2 karty z balíčku za každý zaplacený valoun zlata (max. 2x za tah).</p>
  </div>

  <div class="char-rule-box">
    <h4>Simeon Picos (4 životy)</h4>
    <p>Vždy, když ztratí život, vezme si 1 valoun zlata z banku.</p>
  </div>
</div>
"""
    }
]
