# -*- coding: utf-8 -*-
"""
Oficiální pravidla rozšíření Legendy (Legends).
"""

LEGENDS_SECTIONS = [
    {
        "id": "leg-zrod-a-postavy",
        "category": "legends",
        "categoryTitle": "🌟 Legendy (Legends)",
        "title": "1. Žetony slávy, zrod Legend a strana B",
        "icon": "star",
        "content": """
<div class="rule-section-header">
  <span class="section-tag">Legendy (Legends)</span>
  <h2>1. Žetony slávy, zrod Legend a strana B</h2>
  <p class="section-lead">Rozšíření Legendy představuje 16 legendárních postav na oboustranných kartách a mechaniku hrdinských činů, díky nimž se stanete nesmrtelnou legendou.</p>
</div>

<div class="concept-card">
  <h3>🌟 Příprava Legend a 5 žetonů slávy</h3>
  <ul>
    <li>Každý hráč si vezme sadu <strong>5 dřevěných žetonů slávy stejné barvy</strong> (z celkových 35 žetonů v 7 barvách).</li>
    <li>Postavy se rozdávají <strong>lícem nahoru běžnou stranou A</strong> (karty berte zespodu balíčku, aby nikdo neviděl legendární stranu B).</li>
    <li>Karty činů se zamíchají a doprostřed stolu se vyloží <strong>pouze 1 karta činu lícem nahoru</strong>. V průběhu hry smí být vyloženy <strong>maximálně 4 činy současně</strong>.</li>
  </ul>
</div>

<div class="callout callout-info" style="margin: 1.25rem 0;">
  <h4>❓ Kdy a jak se na stůl vykládají nové karty činů (Od 1 k maximálně 4)?</h4>
  <p>Na začátku hry leží na stole <strong>pouze 1 karta činu</strong>. Nabídka činů na stole se postupně rozšiřuje a obnovuje dvěma způsoby:</p>
  <ol style="margin-top: 0.5rem; padding-left: 1.25rem;">
    <li>
      <strong>Hlavní způsob – Chlubení se činem (na konci tahu každého hráče):</strong><br>
      Kdykoli hráč ve svém tahu <strong>nevykoná žádný čin</strong> (což se v prvních kolech stává téměř všem, a platí to i pro hráče ve Vězení!), ve 4. fázi svého tahu <strong>otočí z balíčku činů 1 novou kartu a přidá ji na stůl</strong>. Následně položí 1 svůj žeton slávy na libovolný čin, kde ještě svůj žeton nemá.<br>
      <em>Během prvních několika tahů se tak nabídka na stole přirozeně a rychle rozroste z 1 činu na 2, 3 a až na 4 činy!</em>
    </li>
    <li style="margin-top: 0.5rem;">
      <strong>Limit 4 činů na stole:</strong><br>
      Na stole smí ležet maximálně 4 činy. Pokud má při chlubení na konci tahu přibýt pátý čin, hráč nejprve vyloží novou kartu a ihned <strong>odhodí ten čin, na kterém leží nejvíce žetonů slávy</strong> (při shodě si vybere). Tím se nabídka neustále obměňuje.
    </li>
    <li style="margin-top: 0.5rem;">
      <strong>Druhý způsob – Přivlastnění činu Legendou (strana B):</strong><br>
      Jakmile se hráč stane Legendou a provede Přivlastnění činu (způsobí jiné legendě 1 zranění), tato karta činu se ihned odhodí a na její místo se <strong>z balíčku okamžitě otočí 1 nová karta činu</strong>.
    </li>
  </ol>
</div>

<div class="callout callout-gold">
  <h4>⭐️ ZROD LEGENDY (Proměna na stranu B)</h4>
  <p>Jakmile hráč umístí svůj <strong>poslední (5.) žeton slávy</strong> na karty činů:</p>
  <ul>
    <li>Okamžitě se stává <strong>LEGENDOU</strong>!</li>
    <li>Otočí kartu své postavy na <strong>rubovou legendární stranu B</strong>.</li>
    <li><strong>OBNOVENÍ ŽIVOTŮ:</strong> Okamžitě si <strong>doplní své životy na 3</strong> (pokud měl méně než 3 životy; pokud měl 3 a více, počet životů se nemění)!</li>
    <li>Od této chvíle disponuje obrovskou legendární silou a schopností <strong>přivlastňovat si činy</strong>!</li>
  </ul>
</div>
"""
    },
    {
        "id": "leg-ciny-a-chlubeni",
        "category": "legends",
        "categoryTitle": "🌟 Legendy (Legends)",
        "title": "2. Vykonání činu, Chlubení se a Přivlastnění",
        "icon": "award",
        "content": """
<div class="rule-section-header">
  <span class="section-tag">Legendy (Legends)</span>
  <h2>2. Vykonání činu, Chlubení se a Přivlastnění</h2>
  <p class="section-lead">Jak získávat žetony slávy v průběhu kola a jak legendy trestají své protivníky.</p>
</div>

<div class="concept-grid">
  <div class="concept-item">
    <span class="concept-badge">Fáze 2</span>
    <h4>1. Vykonání činu</h4>
    <p>Splníte-li během svého tahu podmínku uvedenou na některé z vyložených karet činů, <strong>položte na tuto kartu činu 2 své žetony slávy</strong>!</p>
    <p><em>Symbol vývěsního štítu (L):</em> Umožňuje provést požadavek činu i proti běžným pravidlům (např. dobrovolně odhodit Pivo u <em>Hrdla lahve</em> nebo si ubrat život u <em>Bezejmenného muže</em>).</p>
  </div>

  <div class="concept-item">
    <span class="concept-badge concept-badge-eff">Fáze 4</span>
    <h4>2. Chlubení se činem (Když nebyl čin splněn)</h4>
    <p>Jestliže jste během celého svého tahu <strong>nevykonali žádný čin</strong> (dokonce i když jste seděli ve Vězení!):</p>
    <ol>
      <li><strong>Otočte 1 novou kartu činu z balíčku a položte ji na stůl:</strong> Právě tímto krokem se nabídka činů v prvních tazích postupně rozrůstá z počáteční 1 karty až na 4 činy!</li>
      <li><strong>Kontrola limitu 4 karet:</strong> Je-li po vyložení na stole více než 4 činy, <strong>ihned odhoďte ten čin, na kterém leží nejvíce žetonů slávy</strong> (při rovnosti si vyberte).</li>
      <li><strong>Položte 1 svůj žeton slávy</strong> na libovolný z vyložených činů, kde ještě žádný váš žeton neleží.</li>
    </ol>
  </div>
</div>

<div class="concept-card" style="border-left: 4px solid #c0392b; margin-top: 1.5rem;">
  <h3>🗡️ Přivlastnění činu (Pouze Legenda na straně B)</h3>
  <p>Pokud jste se již stali Legendou (strana B), můžete ve svém tahu provést <strong>Přivlastnění činu</strong>:</p>
  <ul>
    <li>Místo pokládání žetonů slávy provedete požadavek činu a <strong>způsobíte jiné legendě ztrátu 1 života bez možnosti obrany</strong>! (Cílová legenda se nemůže bránit Vedle! ani Barelem).</li>
    <li>Nesmí jít o její poslední život (ledaže jde o Slab the Killera).</li>
    <li>Daná karta činu se po přivlastnění odhodí a nahradí novou.</li>
  </ul>
</div>
"""
    },
    {
        "id": "leg-zmeny-pravidel",
        "category": "legends",
        "categoryTitle": "🌟 Legendy (Legends)",
        "title": "3. Závazné změny pravidel (4 karty, Vězení, 1 život)",
        "icon": "book",
        "content": """
<div class="rule-section-header">
  <span class="section-tag">Změny pravidel</span>
  <h2>3. Závazné změny pravidel z Legend</h2>
  <p class="section-lead">Když hrajete s Legendami, oficiální pravidla upravují několik základních mechanik hry BANG!.</p>
</div>

<div class="callout callout-warning">
  <h4>🎴 ZÁVAZNÉ PRAVIDLO POČÁTEČNÍ RUKY (Pravidla str. 3)</h4>
  <p>Při hře s Legendami začínají všichni hráči hru s <strong>přesně 4 kartami v ruce bez ohledu na počet životů</strong> (platí i pro Šerifa!).</p>
  <p>Hráči na <strong>6., 7. a 8. místě</strong> v pořadí tahu začínají s <strong>5 kartami v ruce</strong> jako kompenzace za pozdní příchod na řadu.</p>
</div>

<div class="concept-grid" style="margin-top: 1rem;">
  <div class="concept-item">
    <span class="concept-badge">Pravidlo 1 života</span>
    <h4>Úleva pro hráče na prahu smrti</h4>
    <p>Pokud vám zbývá <strong>pouze 1 život</strong>, smíte si ve 3. fázi svého tahu ponechat v ruce <strong>2 karty</strong> (místo pouze 1 karty)!</p>
  </div>

  <div class="concept-item">
    <span class="concept-badge concept-badge-sup">Nová možnost ve Vězení</span>
    <h4>Jistý útěk odhozením srdce</h4>
    <p>Pokud začínáte tah ve Vězení, máte dvě možnosti:</p>
    <ul>
      <li><strong>Možnost A (klasická):</strong> „Sejmete“ z balíčku na ♥.</li>
      <li><strong>Možnost B (nová z Legend):</strong> Dobrovolně <strong>odhodíte 1 srdcovou kartu (♥) ze své ruky</strong> na odhazovací balíček a unikáte z Vězení automaticky bez rizika!</li>
    </ul>
  </div>
</div>
"""
    }
]
