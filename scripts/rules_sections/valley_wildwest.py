# -*- coding: utf-8 -*-
"""
Pravidla rozšíření Údolí stínů a Divoký západ (Wild West Show).
"""

VALLEY_WILDWEST_SECTIONS = [
    {
        "id": "vw-valley-shadows",
        "category": "valley-wildwest",
        "categoryTitle": "💀 Údolí stínů & Divoký západ",
        "title": "1. Údolí stínů (Hadi, duchové a Poslední volání)",
        "icon": "skull",
        "content": """
<div class="rule-section-header">
  <span class="section-tag">Údolí stínů</span>
  <h2>1. Údolí stínů (Hadi, duchové a Poslední volání)</h2>
  <p class="section-lead">Původně české fanouškovské rozšíření, které se stalo oficiální součástí rodiny BANG!.</p>
</div>

<div class="concept-card">
  <h3>🐍 Zvláštní mechaniky karet Údolí stínů</h3>
  <ul>
    <li><strong>Chřestýš:</strong> Vyloží se před kteréhokoli hráče. Na začátku svého tahu (po vyhodnocení Vězení) hráč „sejme“: otočí-li <strong>pikovou kartu (♠)</strong>, uštkne ho chřestýš a <strong>ztrácí 1 život</strong>! Karta zůstává ve hře a posouvá se dál. <em>Pozor:</em> Pokud hráč neuspěje ve Vězení, na Chřestýše se nesnímá.</li>
    <li><strong>Duch:</strong> Lze vyložit před již vyřazeného hráče! Tento hráč se vrací do hry jako Duch: nemá žádné životy, nemůže být zabit ani zraněn, ve svém tahu normálně dobere 2 karty a hraje. Na konci svého tahu ale nepřežívá, pokud je karta odstraněna.</li>
    <li><strong>Poslední volání:</strong> Karta Piva z Údolí stínů. <strong>Léčí 1 život i tehdy, pokud ve hře zbývají pouze 2 hráči</strong> (výjimka ze základního pravidla!).</li>
    <li><strong>Banda:</strong> Můžete vybrat 1 hráče, který musí buď odhodit kartu BANG!, nebo ztratit 1 život a vy si doberete 1 kartu.</li>
    <li><strong>Útěk:</strong> Zruší jakoukoli hnědou kartu zahranou na vás (např. Cat Balou, Panika!).</li>
  </ul>
</div>
"""
    },
    {
        "id": "vw-wild-west-show",
        "category": "valley-wildwest",
        "categoryTitle": "💀 Údolí stínů & Divoký západ",
        "title": "2. Divoký západ (Wild West Show) — Kompletní pravidla & Seznam karet",
        "icon": "flag",
        "content": """
<div class="rule-section-header">
  <span class="section-tag">Divoký západ (Wild West Show)</span>
  <h2>2. Divoký západ (Wild West Show) — Kompletní pravidla &amp; Seznam karet</h2>
  <p class="section-lead">Oficiální rozšíření s celkem 18 kartami (10 globálních událostí a 8 unikátních postav s extrémními schopnostmi).</p>
</div>

<div class="concept-card">
  <h3>🎪 Pravidla balíčku událostí Divokého západu</h3>
  <ul>
    <li><strong>Složení balíčku (10 karet událostí):</strong> Balíček obsahuje 10 speciálních karet událostí s šedým/oranžovým okrajem. 9 běžných událostí se zamíchá a na spodek balíčku lícem dolů se umístí finální karta <strong>Divoký západ (Wild West Show)</strong>. Tento balíček leží samostatně uprostřed stolu.</li>
    <li><strong>Kdy se otáčí nová událost:</strong> Karta události se <strong>NEOTÁČÍ automaticky na začátku kola</strong>! Nová událost se otočí <strong>VŽDY, KDYŽ KTERÝKOLI HRÁČ ZAHRÁJE KARTU DOSTAVNÍK NEBO WELLS FARGO</strong>!</li>
    <li><strong>Trvání a platnost efektu:</strong> Efekt právě otočené události platí okamžitě pro všechny hráče u stolu až do chvíle, kdy někdo zahraje další <em>Dostavník</em> nebo <em>Wells Fargo</em> a otočí tím novou událost.</li>
    <li><strong>Souběh s High Noon / Fistful:</strong> Událost Divokého západu může být aktivní současně s událostí z balíčku Pravé poledne / Pěst plná karet (na stole tedy mohou platit dvě různé události najednou).</li>
  </ul>
</div>

<div class="concept-card">
  <h3>📜 Kompletní přehled 10 událostí Divokého západu</h3>
  <ul class="rule-sublist">
    <li><strong>Hřbitov (Bone Orchard):</strong> Když přijde řada na mrtvého (vyřazeného) hráče, vrací se dočasně do hry s 1 životem a líže 2 karty do ruky. Hraje se svou původní odhalenou rolí. Může se léčit Pivem. Pokud má při změně události alespoň 1 život, zůstává trvale ve hře!</li>
    <li><strong>Darling Valentine:</strong> Na začátku svého tahu každý hráč odhodí všechny karty ze své ruky a dobere si z dobíracího balíčku stejný počet nových karet.</li>
    <li><strong>Dorothy Rage:</strong> Během svého tahu může aktivní hráč přinutit libovolného jiného hráče zahrát jednu kartu z ruky dle své volby (např. vynutit zahrání BANG! nebo Paniky).</li>
    <li><strong>Roubík (Gag):</strong> Hráči nesmí vůbec mluvit (smí pouze gestikulovat a hekat). Kdo promluví (i mimo svůj tah), okamžitě ztrácí 1 život!</li>
    <li><strong>Helena Zontero:</strong> Jakmile Helena Zontero vstoupí do hry, aktivní hráč „sejme!“: otočí-li Srdce ♥ nebo Káry ♦, seberou se všechny karty rolí kromě Šerifa, zamíchají se a znovu náhodně rozdají mezi hráče!</li>
    <li><strong>Lady Rose of Texas:</strong> Během svého tahu si aktivní hráč může vyměnit místo u stolu s hráčem po své pravici. Hráč, se kterým si místo vyměnil, přeskočí svůj příští tah. (Mění se vzdálenosti pro všechny!).</li>
    <li><strong>Slečna Zuzana (Miss Susanna):</strong> Během svého tahu musí každý hráč zahrát alespoň 3 karty. Kdo to neudělá, ztrácí na konci svého tahu 1 život. (Neplatí pro hráče ve Vězení).</li>
    <li><strong>Sacagaway:</strong> Všichni hráči hrají s otevřenými kartami na ruce (všichni vidí karty všech ostatních). Karty rolí zůstávají skryté.</li>
    <li><strong>Zúčtování (Showdown):</strong> Každá karta z ruky může být zahrána jako karta BANG!. Každá karta BANG! může být zahrána jako karta Vedle!.</li>
    <li><strong>Divoký západ / Wild West Show (Finální klimaxová karta):</strong> Cílem všech hráčů se stává: „Zůstaň poslední naživu ve hře!“. Každý hraje sám za sebe jako Odpadlík! Role jsou zrušeny; pokud padne Šerif, hra nekončí a pokračuje dál. Trvá trvale až do konce partie.</li>
  </ul>
</div>

<div class="concept-card">
  <h3>🤠 Kompletní přehled 8 postav Divokého západu</h3>
  <ul class="rule-sublist">
    <li><strong>Big Spencer (9 životů):</strong> Začíná hru s 9 životy a 5 kartami v ruce! Nesmí však vůbec zahrát kartu Vedle! (ani využít Barel pro vyhnutí se zásahu).</li>
    <li><strong>Flint Westwood (4 životy):</strong> Během svého tahu může vyměnit 1 kartu ze své ruky (dle svého výběru) za 2 karty náhodně vytažené z ruky jiného vybraného hráče.</li>
    <li><strong>Gary Looter (5 životů):</strong> Na konci tahu každého jiného hráče si vezme do ruky všechny karty, které tento hráč musel ve 3. fázi odhodit kvůli limitu životů.</li>
    <li><strong>Greygory Deck (4 životy):</strong> Na začátku svého tahu si může vytáhnout 2 náhodné postavy ze všech nepoužitých postav a používat po celé své kolo obě jejich schopnosti.</li>
    <li><strong>John Pain (4 životy):</strong> Kdykoli kterýkoli hráč u stolu „snímá!“ (otočí kartu z balíčku kvůli efektu): pokud má John Pain méně než 6 karet v ruce a otočená karta není Srdce ♥, vezme si ji John Pain do ruky!</li>
    <li><strong>Lee Van Kliff (4 životy):</strong> Během svého tahu může odhodit kartu BANG! a zopakovat tím efekt právě zahrané hnědé karty (např. druhý Dostavník, druhá Panika, druhé Pivo).</li>
    <li><strong>Teren Kill (3 životy):</strong> Kdykoli má být Teren Kill vyřazen ze hry (má ztratit poslední život), „sejme si!“: pokud neotočí Piky ♠, přežívá s 1 životem a dobere si 1 kartu z balíčku.</li>
    <li><strong>Youl Grinner (4 životy):</strong> Na začátku svého tahu (před lízáním v 1. fázi): každý hráč, který má v ruce více karet než Youl Grinner, mu musí dát 1 kartu ze své ruky dle vlastního výběru.</li>
  </ul>
</div>
"""
    }
]
