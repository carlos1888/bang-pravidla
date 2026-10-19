# -*- coding: utf-8 -*-
"""
Oficiální pravidla základní hry BANG! (včetně všech detailů z českého pravidlového sešitu).
"""

BASE_GAME_SECTIONS = [
    {
        "id": "base-cile-a-role",
        "category": "base",
        "categoryTitle": "🎯 Základní hra BANG!",
        "title": "1. Úvod, herní cíle a role (4–7 hráčů)",
        "icon": "target",
        "content": """
<div class="rule-section-header">
  <span class="section-tag">Základní hra BANG!</span>
  <h2>1. Úvod, herní cíle a role (4–7 hráčů)</h2>
  <p class="section-lead">BANG! je taktická westernová přestřelka mezi šerifem a skupinou banditů, kteří se ho snaží poslat na onen svět. Pomocníci šerifa bojují na jeho straně inkognito, ale je zde i odpadlík, jenž sleduje svůj vlastní sobecký cíl!</p>
</div>

<div class="roles-grid">
  <div class="role-card role-sheriff">
    <div class="role-badge">Veřejná role (lícem nahoru)</div>
    <h3>⭐️ Šerif</h3>
    <div class="role-life">+1 život navíc oproti kartě postavy</div>
    <p><strong>Cíl:</strong> Aby ochránil zákon a pořádek, musí zabít všechny Bandity a Odpadlíka.</p>
    <div class="role-rules">
      <ul>
        <li>Kdo dostane kartu Šerifa, <strong>ihned ji otočí lícem nahoru</strong>. Ostatní hráči své role tají.</li>
        <li>Hraje vždy jako <strong>první hráč</strong> a hra pokračuje po směru hodinových ručiček.</li>
        <li>Hraje s <strong>jedním životem navíc</strong> (pokud má postava 4 životy, Šerif jich má 5).</li>
        <li><strong>Pozor na začátek hry:</strong> I když Šerif hraje s +1 životem, na začátku hry dostane do ruky pouze tolik karet, kolik je původních nábojů na jeho kartě postavy!</li>
        <li><strong>Imunita:</strong> Na Šerifa nelze zahrát kartu <em>Vězení</em>!</li>
        <li><strong>Trest pro Šerifa:</strong> Pokud Šerif osobně zabije svého Pomocníka (Zástupce), musí za trest odhodit <strong>všechny karty, které má v ruce a ve hře před sebou</strong>!</li>
      </ul>
    </div>
  </div>

  <div class="role-card role-deputy">
    <div class="role-badge">Tajná role</div>
    <h3>🛡️ Pomocník šerifa</h3>
    <div class="role-life">Počet životů dle karty postavy</div>
    <p><strong>Cíl:</strong> Pomáhat Šerifovi a chránit ho za každou cenu před Bandity a Odpadlíkem.</p>
    <div class="role-rules">
      <ul>
        <li>Hraje v utajení a svou kartu role ostatním neukazuje.</li>
        <li>Sdílí vítězství se Šerifem: pokud zvítězí Šerif, Pomocníci vítězí také, <strong>i když byli během hry zabiti</strong>!</li>
      </ul>
    </div>
  </div>

  <div class="role-card role-outlaw">
    <div class="role-badge">Tajná role</div>
    <h3>💀 Bandita</h3>
    <div class="role-life">Počet životů dle karty postavy</div>
    <p><strong>Cíl:</strong> Zlikvidovat Šerifa. Zcela bez skrupulí se mohou zabíjet i navzájem, aby získali odměnu.</p>
    <div class="role-rules">
      <ul>
        <li><strong>Okamžité vítězství:</strong> Bandité vítězí v okamžiku, kdy je Šerif zabit (pokud v tu chvíli není jediným přeživším Odpadlík).</li>
        <li>Všichni Bandité vítězí jako tým – vyhrávají i ti Bandité, kteří v průběhu hry položili život!</li>
        <li><strong>Odměna za Banditu:</strong> Hráč, který zabije Banditu (dokonce i když je sám Bandita), získá za odměnu <strong>3 karty z dobíracího balíčku</strong>!</li>
      </ul>
    </div>
  </div>

  <div class="role-card role-renegade">
    <div class="role-badge">Tajná role</div>
    <h3>🗡️ Odpadlík</h3>
    <div class="role-life">Počet životů dle karty postavy</div>
    <p><strong>Cíl:</strong> Stát se novým šerifem; jeho úkolem je zůstat jako poslední živý ve hře.</p>
    <div class="role-rules">
      <ul>
        <li>Hraje výhradně sám za sebe.</li>
        <li><strong>Klíčové pravidlo:</strong> Šerifa musí zabít až jako <strong>úplně posledního v duelu 1 na 1</strong>.</li>
        <li>Pokud Šerif zemře dříve, než jsou eliminováni všichni Pomocníci a Bandité, <strong>okamžitě vítězí Bandité a Odpadlík prohrává</strong>!</li>
      </ul>
    </div>
  </div>
</div>

<div class="callout callout-info">
  <h4>📋 Rozdělení rolí podle počtu hráčů</h4>
  <table class="rules-table">
    <thead>
      <tr>
        <th>Počet hráčů</th>
        <th>Šerif ⭐️</th>
        <th>Pomocník 🛡️</th>
        <th>Bandité 💀</th>
        <th>Odpadlík 🗡️</th>
      </tr>
    </thead>
    <tbody>
      <tr><td><strong>4 hráči</strong></td><td>1</td><td>0</td><td>2</td><td>1</td></tr>
      <tr><td><strong>5 hráčů</strong></td><td>1</td><td>1</td><td>2</td><td>1</td></tr>
      <tr><td><strong>6 hráčů</strong></td><td>1</td><td>1</td><td>3</td><td>1</td></tr>
      <tr><td><strong>7 hráčů</strong></td><td>1</td><td>2</td><td>3</td><td>1</td></tr>
      <tr><td><strong>8 hráčů</strong> <em>(Dodge City)</em></td><td>1</td><td>2</td><td>3</td><td>2</td></tr>
    </tbody>
  </table>
</div>

<div class="callout callout-warning">
  <h4>🏆 Podmínky konce hry a vítězství</h4>
  <p>Hra končí, je-li splněna jedna z těchto podmínek:</p>
  <ol>
    <li><strong>Šerif je zabit:</strong> Pokud už je naživu <strong>pouze Odpadlík</strong>, vítězí Odpadlík. V opačném případě <strong>vítězí Bandité</strong> (i mrtví Bandité).</li>
    <li><strong>Všichni Bandité a Odpadlík jsou zabiti:</strong> Vítězí <strong>Šerif a jeho Pomocníci</strong> (i pokud již Pomocníci nežijí).</li>
  </ol>
  <p><strong>Příklad:</strong> Jsou zabiti všichni Bandité a Šerif právě přišel o poslední život. Ve hře sice zůstává Odpadlík a jeden Pomocník, přesto však <strong>vítězí Bandité</strong>, protože Šerif padl dříve, než zůstal Odpadlík sám!</p>
</div>
"""
    },
    {
        "id": "base-priprava-hry",
        "category": "base",
        "categoryTitle": "🎯 Základní hra BANG!",
        "title": "2. Příprava hry, postavy a životy",
        "icon": "layers",
        "content": """
<div class="rule-section-header">
  <span class="section-tag">Základní hra BANG!</span>
  <h2>2. Příprava hry, postavy a životy</h2>
  <p class="section-lead">Každý hráč představuje unikátní westernovou postavu s jedinečnou schopností a počátečním počtem životů.</p>
</div>

<div class="steps-container">
  <div class="step-box">
    <div class="step-num">1</div>
    <div class="step-content">
      <h4>Rozdání rolí</h4>
      <p>Zamíchejte tolik karet rolí, kolik je hráčů. Každý dostane 1 kartu lícem dolů. Šerif ji ihned odhalí lícem nahoru, ostatní hráči své role tají.</p>
    </div>
  </div>

  <div class="step-box">
    <div class="step-num">2</div>
    <div class="step-content">
      <h4>Výběr postav a počítadlo životů</h4>
      <p>Zamíchejte karty postav. Každý hráč dostane jednu postavu lícem nahoru a oznámí její jméno a schopnost ostatním. Každý si dále vezme druhou kartu postavy lícem dolů a částečně ji zasune pod svou postavu tak, aby bylo vidět přesně tolik nábojů, kolik je nakresleno vedle portrétu (nebo použije desku hráče a žetony nábojů).</p>
      <p><em>Varianta pro zkušené hráče:</em> Každý dostane 2 karty postav, z nichž si jednu vybere a druhou použije na počítání životů.</p>
    </div>
  </div>

  <div class="step-box">
    <div class="step-num">3</div>
    <div class="step-content">
      <h4>Šerifův bonus a rozdání počátečních karet</h4>
      <p>Šerif hraje s <strong>+1 životem navíc</strong> (např. 4 náboje na kartě = 5 životů). Zamíchejte hrací karty a rozdejte každému hráči tolik karet, kolik má nábojů na kartě postavy.</p>
      <p><strong>Důležitá výjimka:</strong> I když Šerif hraje s jedním nábojem navíc, na začátku hry dostane do ruky pouze tolik karet, kolik nábojů je vytištěno na jeho postavě (např. 4 karty, nikoli 5!).</p>
    </div>
  </div>

  <div class="step-box">
    <div class="step-num">4</div>
    <div class="step-content">
      <h4>Herní balíček a odhazovací hromádka</h4>
      <p>Zbývající hrací karty položte doprostřed stolu jako dobírací balíček lícem dolů. Vedle nechte prostor pro odhazovací hromádku, kam se karty pokládají lícem nahoru.</p>
    </div>
  </div>
</div>

<div class="concept-card">
  <h3>❤️ Co znamenají náboje (životy)</h3>
  <ul>
    <li>Představují <strong>aktuální počet životů</strong>, tj. kolikrát může být postava ještě zasažena, než zemře.</li>
    <li>Udávají <strong>maximální limit karet v ruce na konci tahu</strong> (ve 3. fázi). Pokud máte méně životů, musíte na konci tahu držet méně karet!</li>
    <li>Postava se může léčit (např. kartou Pivo či Saloon), ale <strong>nikdy nemůže mít více životů</strong>, než činil její počáteční stav!</li>
  </ul>
</div>
"""
    },
    {
        "id": "base-proubeh-tahu",
        "category": "base",
        "categoryTitle": "🎯 Základní hra BANG!",
        "title": "3. Průběh tahu a 3 fáze hráče",
        "icon": "clock",
        "content": """
<div class="rule-section-header">
  <span class="section-tag">Základní hra BANG!</span>
  <h2>3. Průběh tahu a 3 fáze hráče</h2>
  <p class="section-lead">Hra probíhá v tazích po směru hodinových ručiček. Začíná Šerif. Tah každého hráče se dělí na 3 pevně stanovené fáze.</p>
</div>

<div class="phase-card phase-1">
  <div class="phase-header">
    <span class="phase-tag">1. fáze</span>
    <h3>1. Fáze: Dobrání dvou karet</h3>
  </div>
  <div class="phase-body">
    <p>Vezměte si do ruky vrchní <strong>dvě karty z dobíracího balíčku</strong>.</p>
    <p>Jakmile karty v dobíracím balíčku dojdou, zamíchejte hromádku odhozených karet a vytvořte nový dobírací balíček.</p>
    <div class="callout callout-info">
      <strong>Postavy modifikující 1. fázi:</strong>
      <ul>
        <li><strong>Jesse Jones:</strong> Může si první kartu vzít náhodně z ruky jiného hráče (druhou dobírá z balíčku).</li>
        <li><strong>Pedro Ramirez:</strong> Může si první kartu vzít z vršku odhazovacího balíčku.</li>
        <li><strong>Kit Carlson:</strong> Prohlédne si vrchní 3 karty balíčku, 2 si vezme a 1 vrátí lícem dolů na balíček.</li>
        <li><strong>Black Jack:</strong> Ukáže druhou dobíranou kartu: je-li srdcová (♥) nebo kárová (♦), dobere si 3. kartu.</li>
        <li><strong>Pixie Pete:</strong> Dobírá rovnou 3 karty z balíčku.</li>
      </ul>
    </div>
  </div>
</div>

<div class="phase-card phase-2">
  <div class="phase-header">
    <span class="phase-tag">2. fáze</span>
    <h3>2. Fáze: Zahrání libovolného množství karet</h3>
  </div>
  <div class="phase-body">
    <p>Můžete hrát karty ve svůj prospěch nebo ve snaze uškodit či pomoci ostatním. V této fázi však nemusíte zahrát vůbec žádnou kartu. Můžete zahrát libovolné množství karet s těmito <strong>3 klíčovými omezeními</strong>:</p>
    
    <div class="concept-grid">
      <div class="concept-item" style="border-left: 4px solid #c0392b;">
        <span class="concept-badge">Omezení 1</span>
        <h4>Pouze 1 karta BANG! za tah</h4>
        <p>Smíte zahrát pouze <strong>jednu kartu BANG! za tah</strong>. (Toto neplatí, pokud máte vyložený <em>Volcanic</em> nebo hrajete za <em>Willy the Kida</em>. Rovněž se nevztahuje na karty s efektem BANG!, jako je Kulomet či Křesadlovka).</p>
      </div>
      <div class="concept-item" style="border-left: 4px solid #2980b9;">
        <span class="concept-badge">Omezení 2</span>
        <h4>Max. 1 kopie od každé karty ve hře</h4>
        <p>Před každým hráčem může být vyložena <strong>pouze jedna kopie od každé karty</strong>. Karty se stejným názvem nelze vyložit dvakrát (např. nesmíte mít před sebou 2 Barely nebo 2 Mustangy).</p>
      </div>
      <div class="concept-item" style="border-left: 4px solid #d35400;">
        <span class="concept-badge">Omezení 3</span>
        <h4>Max. 1 zbraň ve hře</h4>
        <p>Smíte mít před sebou vyloženou <strong>pouze jednu zbraň</strong>. Jakmile zahrajete jinou zbraň, dříve vyložená se ihned odhodí. Není dovoleno zahrát zbraň se stejným názvem jen proto, abyste se zbavili karty z ruky!</p>
      </div>
    </div>

    <div style="margin-top: 1rem;">
      <h4>Rozdíl mezi hnědými a modrými kartami:</h4>
      <ul>
        <li><strong>Hnědé karty (okamžitý efekt):</strong> Zahrajete je položením lícem nahoru na odhazovací hromádku a ihned provedete jejich efekt (např. <em>BANG!, Vedle!, Pivo, Panika!, Cat Balou, Indiáni!, Duel</em>).</li>
        <li><strong>Modré karty (trvalý efekt):</strong> Vykládáte je přímo před sebe na stůl (výjimka: <em>Vězení</em>, které vykládáte před jiného hráče). Zůstávají vyložené a jejich efekt působí trvale, dokud nejsou odstraněny kartou jako Cat Balou nebo Panika!.</li>
      </ul>
    </div>
  </div>
</div>

<div class="phase-card phase-3">
  <div class="phase-header">
    <span class="phase-tag">3. fáze</span>
    <h3>3. Fáze: Odhození nadpočetných karet</h3>
  </div>
  <div class="phase-body">
    <p>Jakmile 2. fáze skončí (protože nechcete nebo nemůžete hrát žádné další karty), zkontrolujte počet karet v ruce:</p>
    <ul>
      <li><strong>Limit karet v ruce na konci tahu se přesně rovná vašemu aktuálnímu počtu životů</strong> (počet viditelných nábojů).</li>
      <li>Všechny karty nad tento limit musíte odhodit lícem nahoru na odhazovací balíček.</li>
      <li><strong>Zákaz dobrovolného odhazování:</strong> Jestliže máte v ruce stejně nebo méně karet, než máte momentálně životů, <strong>nesmíte žádné karty dobrovolně odhodit</strong>!</li>
    </ul>
    <p>Poté váš tah končí a na řadu přichází další hráč po vaší levici.</p>
  </div>
</div>
"""
    },
    {
        "id": "base-vzdalenost-a-dostrel",
        "category": "base",
        "categoryTitle": "🎯 Základní hra BANG!",
        "title": "4. Vzdálenost, dostřel a Colt .45",
        "icon": "crosshair",
        "content": """
<div class="rule-section-header">
  <span class="section-tag">Základní hra BANG!</span>
  <h2>4. Vzdálenost, dostřel a Colt .45</h2>
  <p class="section-lead">Pochopení rozdílu mezi skutečnou vzdáleností a dostřelem zbraní je nejdůležitějším pravidlem celé hry.</p>
</div>

<div class="concept-card">
  <h3>Kruh hráčů a výchozí vzdálenost 1</h3>
  <p>Vzdálenost mezi dvěma hráči představuje <strong>minimální počet míst mezi nimi</strong>, počítáno po směru nebo proti směru hodinových ručiček:</p>
  <ul>
    <li>Hráči sedící bezprostředně nalevo a napravo od vás jsou ve <strong>vzdálenosti 1</strong>.</li>
    <li>Hráči sedící o jedno místo dále jsou ve <strong>vzdálenosti 2</strong> atd.</li>
    <li><strong>Vyřazení hráči:</strong> Pokud hráč vypadne ze hry, přestává se počítat a zbývající hráči se k sobě přiblíží!</li>
  </ul>
</div>

<div class="callout callout-warning">
  <h4>⚠️ ZLATÉ PRAVIDLO: Zbraně nemění vzdálenost mezi hráči!</h4>
  <p>Zbraně udávají pouze <strong>maximální dosah (dostřel)</strong>, na jakou vzdálenost dokážete z ruky vystřelit kartu BANG!. <strong>Zbraně v žádném případě nezkracují skutečnou vzdálenost</strong> pro karty jako <em>Panika!</em>.</p>
  <p><strong>Příklad:</strong> Hráč sedí ve vzdálenosti 2. Vy máte vyložený Winchester (dostřel 5). Kartou BANG! na něj vystřelíte snadno. Kartu <em>Panika!</em> (která vyžaduje vzdálenost 1) na něj však <strong>zahrát NEMŮŽETE</strong>, pokud nemáte vyložené Hledí!</p>
</div>

<div class="roles-grid">
  <div class="role-card">
    <div class="role-badge">Výchozí zbraň</div>
    <h3>Revolver Colt .45</h3>
    <p>Každý hráč má od začátku hry k dispozici <strong>virtuální Colt .45 s dostřelem 1</strong>. Tento revolver není reprezentován žádnou kartou. Dokud nemáte vyloženou jinou zbraň, dostřelíte pouze na sousedy ve vzdálenosti 1.</p>
  </div>

  <div class="role-card">
    <div class="role-badge">Karty zbraní</div>
    <h3>Vyložené zbraně</h3>
    <p>Poznají se podle modrého okraje bez děr po kulkách a čísla v zaměřovači (1 až 5). Nahrazují Colt .45, dokud nejsou odhozeny novou zbraní nebo odstraněny (Cat Balou, Panika!).</p>
    <ul>
      <li><strong>Volcanic:</strong> Dostřel 1, ale umožňuje zahrát <em>libovolný počet karet BANG! za tah</em>.</li>
      <li><strong>Schofield:</strong> Dostřel 2</li>
      <li><strong>Remington:</strong> Dostřel 3</li>
      <li><strong>Rev. Carabine:</strong> Dostřel 4</li>
      <li><strong>Winchester:</strong> Dostřel 5</li>
    </ul>
  </div>
</div>

<div class="concept-card" style="margin-top: 1.5rem;">
  <h3>🐎 Karty modifikující vzdálenost a jejich sčítání</h3>
  <div class="concept-grid">
    <div class="concept-item">
      <span class="concept-badge">Obranné karty</span>
      <h4>Mustang &amp; Skrýš</h4>
      <p><strong>Zvyšují vzdálenost, na kterou vás vidí ostatní hráči.</strong></p>
      <ul>
        <li><em>Mustang:</em> Ostatní vás vidí o 1 dál.</li>
        <li><em>Skrýš:</em> Ostatní vás vidí o 1 dál.</li>
        <li><strong>Sčítání:</strong> Pokud máte vyloženého Mustanga i Skrýš, ostatní vás vidí <strong>celkově o 2 dál</strong>! Soused na vzdálenost 1 na vás potřebuje zbraň s dostřelem alespoň 3.</li>
      </ul>
    </div>
    <div class="concept-item">
      <span class="concept-badge concept-badge-eff">Útočné karty</span>
      <h4>Hledí (Appaloosa) &amp; Dalekohled</h4>
      <p><strong>Zkracují vzdálenost, na kterou vidíte vy ostatní hráče.</strong></p>
      <ul>
        <li><em>Hledí / Appaloosa:</em> Vidíte ostatní o 1 blíž.</li>
        <li><em>Dalekohled:</em> Vidíte ostatní o 1 blíž.</li>
        <li><strong>Sčítání:</strong> Pokud máte vyložené Hledí i Dalekohled, vidíte všechny hráče <strong>o 2 blíž</strong>! Hráče na vzdálenost 3 vidíte na vzdálenost 1 a stačí vám Colt .45 i na Paniku!.</li>
      </ul>
    </div>
  </div>
  <p style="margin-top: 0.75rem;"><em>Poznámka k pravidlům:</em> Vzdálenost nižší než 1 se vždy považuje za rovnou 1. Hráče ve vzdálenosti 1 smíte zacílit i sami na sebe (např. zahrát Paniku! na vlastní vyloženou kartu).</p>
</div>
"""
    },
    {
        "id": "base-karty-zraneni-a-pivo",
        "category": "base",
        "categoryTitle": "🎯 Základní hra BANG!",
        "title": "5. Zranění, vyřazení a pravidla karty Pivo",
        "icon": "shield",
        "content": """
<div class="rule-section-header">
  <span class="section-tag">Základní hra BANG!</span>
  <h2>5. Zranění, vyřazení a pravidla karty Pivo</h2>
  <p class="section-lead">Jak se vyhnout zásahu, jak funguje léčení a za jakých přesných podmínek vás zachrání karta Pivo.</p>
</div>

<div class="concept-card">
  <h3>💥 BANG! a Vedle!</h3>
  <ul>
    <li>Když na vás někdo zahraje kartu <strong>BANG!</strong>, můžete okamžitě (mimo svůj tah) zahrát kartu <strong>Vedle!</strong>, abyste výstřel zrušili.</li>
    <li>Pokud kartu Vedle! nezahrajete (nebo neuspěje Barel), <strong>ztrácíte 1 život</strong> – posunete kartu postavy tak, aby zakryla jeden náboj.</li>
    <li>Karty BANG! se po vyhodnocení vždy odhazují, i když byly zrušeny.</li>
  </ul>
</div>

<div class="concept-card" style="border-left: 4px solid var(--accent-gold);">
  <h3>🍺 Pravidla karty Pivo (Oficiální výklad)</h3>
  <p>Karta Pivo dovoluje vyléčit 1 život (posunout kartu postavy, aby byl vidět o náboj více). Postava nikdy nemůže mít více životů než na začátku hry. Kartu Pivo lze zahrát <strong>pouze dvěma způsoby</strong>:</p>
  
  <div class="concept-grid">
    <div class="concept-item">
      <span class="concept-badge">Způsob 1: Vlastní tah</span>
      <h4>Běžné zahrání ve 2. fázi</h4>
      <p>Ve svém vlastním tahu můžete zahrát Pivo z ruky pro vyléčení 1 zranění. Můžete zahrát i více piv, pokud vám chybí více životů.</p>
    </div>
    <div class="concept-item">
      <span class="concept-badge concept-badge-sup">Způsob 2: Mimo vlastní tah</span>
      <h4>POUZE při smrtelném zásahu!</h4>
      <p>Mimo svůj tah můžete Pivo zahrát <strong>VÝHRADNĚ tehdy, pokud jste právě utrpěli smrtelný zásah</strong> (který by vás připravil o poslední život). Nelze jej zahrát mimo tah, pokud jste pouze zraněni, ale stále vám zbývá 1 či více životů!</p>
    </div>
  </div>

  <div class="callout callout-warning" style="margin-top: 1rem;">
    <h4>⚠️ Záchrana před vícečetným smrtelným zraněním</h4>
    <p>Jestliže máte ztratit jedním efektem více životů, než kolik máte (např. máte 2 životy a vybuchne vám Dynamit za 3 životy), můžete zahrát <strong>více karet Pivo současně</strong>, pokud vás to udrží naživu alespoň s 1 životem (2 - 3 + 2 piva = 1 život). Kdybyste měli jen 1 Pivo, nepomůže vám a umíráte (2 - 3 + 1 = 0)!</p>
  </div>

  <div class="callout callout-info" style="margin-top: 1rem;">
    <h4>👥 Pravidlo pro 2 hráče: Pivo nemá žádný účinek!</h4>
    <p>Jakmile ve hře zbývají <strong>pouze 2 poslední hráči</strong>, karta Pivo ztrácí svůj léčivý účinek. Zahráním Piva si žádný život nevyléčíte (ve Zlaté horečce jej však lze směnit za 1 valoun zlata).</p>
  </div>

  <div class="callout callout-purple" style="margin-top: 1rem;">
    <h4>🍷 Saloon není Pivo!</h4>
    <p>Karta <em>Saloon</em> vyléčí 1 život všem hráčům ve hře. <strong>Saloon však NENÍ Pivo</strong> – nelze jej použít k záchraně života mimo váš tah při smrtelném zásahu!</p>
  </div>
</div>

<div class="concept-card">
  <h3>☠️ Vyřazení postavy ze hry</h3>
  <p>Když hráč ztratí svůj poslední život a nezachrání se Pivem:</p>
  <ol>
    <li>Je vyřazen ze hry a <strong>ihned ukáže všem svou kartu role</strong>.</li>
    <li>Odhodí všechny karty z ruky i ze stolu před sebou na odhazovací balíček.</li>
    <li><strong>Trest pro Šerifa:</strong> Pokud Šerif osobně zabil svého Pomocníka, Šerif musí odhodit všechny své karty z ruky i ze stolu!</li>
    <li><strong>Odměna za Banditu:</strong> Hráč, který zasadil smrtící ránu Banditovi, si ihned dobere 3 karty z balíčku.</li>
  </ol>
</div>
"""
    },
    {
        "id": "base-barel-vezeni-dynamit-duel",
        "category": "base",
        "categoryTitle": "🎯 Základní hra BANG!",
        "title": "6. Sejmutí, Barel, Vězení, Dynamit a Duel",
        "icon": "book-open",
        "content": """
<div class="rule-section-header">
  <span class="section-tag">Základní hra BANG!</span>
  <h2>6. Sejmutí, Barel, Vězení, Dynamit a Duel</h2>
  <p class="section-lead">Pravidla klíčových modrých a akčních karet základní hry a mechanika „Sejmutí“.</p>
</div>

<div class="concept-card">
  <h3>🎴 Mechanika „Sejmutí“ (Draw! / Estrazione)</h3>
  <p>Každá hrací karta má v levém dolním rohu barvu (♥ srdce, ♦ kára, ♣ kříže, ♠ piky) a hodnotu (2 až Eso). Pokud máte <strong>„sejmout“</strong>:</p>
  <ul>
    <li>Otočíte vrchní kartu z dobíracího balíčku lícem nahoru a položíte ji na odhazovací hromádku.</li>
    <li>Zkontrolujete, zda barva a/nebo hodnota vyhovuje podmínce karty.</li>
    <li>Hodnoty karet jdou vzestupně: <code>2, 3, 4, 5, 6, 7, 8, 9, 10, J, Q, K, A</code>.</li>
  </ul>
</div>

<div class="roles-grid">
  <div class="role-card">
    <div class="role-badge">Modrá karta</div>
    <h3>🛢️ Barel</h3>
    <p>Když jste cílem karty BANG! (nebo efektu BANG!, např. Kulometu), můžete <strong>„sejmout“</strong>:</p>
    <ul>
      <li>Otočíte-li <strong>srdcovou kartu (♥)</strong>, BANG! je úspěšně zrušen (jako karta Vedle!).</li>
      <li>Otočíte-li jinou barvu, Barel neuspěl – <strong>stále však můžete z ruky zahrát kartu Vedle!</strong></li>
      <li>Barel nelze použít proti kartám <em>Duel</em> a <em>Indiáni!</em>.</li>
    </ul>
  </div>

  <div class="role-card">
    <div class="role-badge">Modrá karta</div>
    <h3>🔒 Vězení</h3>
    <p>Vykládá se před kteréhokoli hráče <strong>s výjimkou Šerifa</strong> (Šerifa nelze uvěznit!).</p>
    <ul>
      <li>Uvězněný hráč na začátku svého tahu (před 1. fází) musí <strong>„sejmout“</strong>:</li>
      <li><strong>Otočí ♥ (srdce):</strong> Uprchl z vězení! Karta Vězení se odhodí a hráč odehraje celý svůj tah normálně.</li>
      <li><strong>Otočí jinou barvu:</strong> Karta Vězení se odhodí a hráč <strong>vynechá celý svůj tah</strong> (fáze 1, 2 i 3).</li>
      <li>Uvězněný hráč stále může být cílem útoků a může mimo svůj tah hrát karty Vedle! a Pivo.</li>
    </ul>
  </div>

  <div class="role-card">
    <div class="role-badge">Modrá karta</div>
    <h3>🧨 Dynamit</h3>
    <p>Vyložíte jej před sebe. Zůstane tam celé kolo, dokud nepřijdete znovu na řadu.</p>
    <ul>
      <li>Na začátku vašeho dalšího tahu (před 1. fází) musíte <strong>„sejmout“</strong>:</li>
      <li><strong>Piková karta mezi 2 a 9 (♠ 2–9):</strong> Dynamit <strong>exploduje</strong>! Odhodí se a ztratíte okamžitě <strong>3 životy</strong>! Smrt Dynamitem se nepřipisuje žádnému hráči (nikdo nebere odměnu).</li>
      <li><strong>Jakákoli jiná karta:</strong> Dynamit se posune k hráči <strong>po vaší levici</strong>, který bude snímat ve svém tahu.</li>
      <li><strong>Pořadí s Vězením:</strong> Pokud má hráč před sebou Dynamit i Vězení, <strong>vždy se nejprve vyhodnocuje Dynamit</strong>!</li>
    </ul>
  </div>

  <div class="role-card">
    <div class="role-badge">Hnědá karta</div>
    <h3>⚔️ Duel</h3>
    <p>Vyzvete libovolného hráče bez ohledu na vzdálenost na souboj z očí do očí.</p>
    <ul>
      <li>Vyzvaný hráč musí odhodit kartu BANG!. Pokud tak učiní, vyzvavší hráč musí odhodit kartu BANG! atd.</li>
      <li>První hráč, který <strong>neodhodí kartu BANG!, ztrácí 1 život</strong> a Duel končí.</li>
      <li>V Duelu <strong>nelze použít Vedle! ani Barel</strong>.</li>
      <li>Karty BANG! odhozené v Duelu se <strong>nepočítají do limitu 1 BANG! za tah</strong>.</li>
    </ul>
  </div>
</div>
"""
    },
    {
        "id": "base-casova-posloupnost",
        "category": "base",
        "categoryTitle": "🎯 Základní hra BANG!",
        "title": "7. Časová posloupnost karet a oprava chyb",
        "icon": "shuffle",
        "content": """
<div class="rule-section-header">
  <span class="section-tag">Základní hra BANG!</span>
  <h2>7. Časová posloupnost karet a oprava chyb</h2>
  <p class="section-lead">Oficiální pravidla pro řešení přehlédnutí, nechtěných chyb a vyhodnocování plošných karet.</p>
</div>

<div class="callout callout-gold">
  <h4>⏱️ Pravidlo o vrácení akce zpět (Oficiální pravidla str. 9)</h4>
  <p>Když zahrajete kartu z ruky nebo použijete schopnost postavy či karty ve hře, <strong>můžete tuto akci vzít zpět, dokud nezahrajete jinou kartu nebo nepoužijete další schopnost</strong>. Jedná se zejména o nechtěná přehlédnutí pravidel:</p>
  <ul>
    <li><strong>Zahrání BANG! mimo dostřel:</strong> Pokud vystřelíte na hráče mimo dostřel zbraně, můžete si kartu BANG! vzít zpět do ruky (a napadený hráč si vezme zpět své zahrané Vedle!).</li>
    <li><strong>Slab the Killer:</strong> Pokud Slab vystřelí na hráče a ten zahraje 1 Vedle! v domnění, že to stačí, ale nemá druhé, může si po uvědomění vzít své Vedle! zpět do ruky a raději ztratit 1 život.</li>
    <li><strong>Opomenutí Barelu:</strong> Pokud jste cílem BANG!, zahrajete Vedle! a hned si vzpomenete na vyložený Barel, smíte si kartu Vedle! vzít zpět do ruky a nejprve „sejmout“ na Barel (pokud aktivní hráč nezahrál další akci).</li>
  </ul>
</div>

<div class="concept-card">
  <h3>🔄 Vyhodnocování plošných karet</h3>
  <p>U karet, které cílí na všechny ostatní hráče (např. <em>Kulomet, Indiáni!, Hokynářství</em>):</p>
  <ul>
    <li>Efekty se vyhodnocují <strong>po směru hodinových ručiček</strong>, počínaje hráčem sedícím po levici od toho, kdo kartu zahrál.</li>
    <li>Při Kulometu si hráči s Barelem snímají postupně v pořadí po směru hodinových ručiček.</li>
    <li>Při Hokynářství začíná výběr karet hráč, který kartu zahrál, a dále se vybírá po směru hodinových ručiček. Nelze přerušit výběr karet zahráním Paniky!.</li>
  </ul>
</div>

<div class="concept-card">
  <h3>⚡ Suzy Lafayette vs El Gringo (Příklad časování)</h3>
  <p>Suzy Lafayette má v ruce jako poslední kartu BANG!. Zahraje ji a zraní El Gringa:</p>
  <ol>
    <li>Nejprve si Suzy dobere 1 kartu z balíčku, protože nemá žádnou kartu v ruce (spuštění schopnosti Suzy).</li>
    <li>Poté si tuto čerstvě dobranou kartu vezme El Gringo jako odvetu za ztracený život.</li>
    <li>A jelikož nyní Suzy opět nemá v ruce žádnou kartu, <strong>okamžitě si dobere další kartu z balíčku</strong>!</li>
  </ol>
</div>
"""
    },
    {
        "id": "base-prehled-postav",
        "category": "base",
        "categoryTitle": "🎯 Základní hra BANG!",
        "title": "8. Přehled všech 16 postav a bonusové postavy",
        "icon": "users",
        "content": """
<div class="rule-section-header">
  <span class="section-tag">Základní hra BANG!</span>
  <h2>8. Přehled všech 16 postav a bonusové postavy</h2>
  <p class="section-lead">Oficiální popis schopností všech 16 postav ze základní hry a 3 bonusových postav.</p>
</div>

<div class="characters-rules-grid">
  <div class="char-rule-box">
    <h4>Bart Cassidy (4 životy)</h4>
    <p>Vždy, když ztratí život, dobere si okamžitě 1 kartu z dobíracího balíčku. Schopnost neúčinkuje při ztrátě posledního života.</p>
  </div>

  <div class="char-rule-box">
    <h4>Black Jack (4 životy)</h4>
    <p>Ve svém tahu v 1. fázi musí ukázat ostatním druhou kartu, kterou dobírá. Pokud je srdcová (♥) nebo kárová (♦), dobere si ještě jednu kartu (tu neukazuje).</p>
  </div>

  <div class="char-rule-box">
    <h4>Calamity Janet (4 životy)</h4>
    <p>Může používat karty BANG! jako Vedle! a naopak. Když zahraje ve svém tahu Vedle! jako BANG!, nemůže již zahrát další kartu BANG! (pokud nemá Volcanic).</p>
  </div>

  <div class="char-rule-box">
    <h4>El Gringo (3 životy)</h4>
    <p>Vždy, když díky nějakému hráči ztratí život, vezme si náhodně 1 kartu z jeho ruky za každý ztracený život. Neúčinkuje při ztrátě posledního života ani na Dynamit.</p>
  </div>

  <div class="char-rule-box">
    <h4>Jesse Jones (4 životy)</h4>
    <p>Ve svém tahu v 1. fázi si může vybrat, zda si první kartu vezme náhodně z ruky jiného hráče, nebo z balíčku. Druhou kartu dobírá normálně z balíčku.</p>
  </div>

  <div class="char-rule-box">
    <h4>Jourdonnais (4 životy)</h4>
    <p>Má k dispozici virtuální Barel: kdykoli je cílem BANG!, může sejmout na ♥ pro zrušení výstřelu. Může mít ve hře i skutečný Barel a zkusit sejmout 2x!</p>
  </div>

  <div class="char-rule-box">
    <h4>Kit Carlson (4 životy)</h4>
    <p>Ve svém tahu v 1. fázi se podívá na vrchní 3 karty balíčku; 2 z nich si vezme do ruky a zbývající vrátí na vršek balíčku lícem dolů.</p>
  </div>

  <div class="char-rule-box">
    <h4>Lucky Duke (4 životy)</h4>
    <p>Kdykoli má „sejmout“, otočí vrchní 2 karty z balíčku a vybere si, kterou z nich použije. Obě karty se poté odhodí.</p>
  </div>

  <div class="char-rule-box">
    <h4>Paul Regret (3 životy)</h4>
    <p>Má k dispozici virtuálního Mustanga: pro ostatní se nachází ve vzdálenosti o 1 větší. Může mít ve hře i kartu Mustang a být o 2 dál!</p>
  </div>

  <div class="char-rule-box">
    <h4>Pedro Ramirez (4 životy)</h4>
    <p>Ve svém tahu v 1. fázi si může vybrat, zda si první kartu vezme z vršku odhazovacího balíčku, nebo z dobíracího. Druhou kartu dobírá z balíčku.</p>
  </div>

  <div class="char-rule-box">
    <h4>Rose Doolan (4 životy)</h4>
    <p>Má k dispozici virtuální Hledí: všechny ostatní hráče vidí o 1 blíž. Může mít ve hře i kartu Hledí a vidět všechny o 2 blíž!</p>
  </div>

  <div class="char-rule-box">
    <h4>Sid Ketchum (4 životy)</h4>
    <p>Může kdykoli odhodit 2 karty z ruky a vyléčit si tak 1 život. Může to udělat i vícekrát za tah a může se tak zachránit i při ztrátě posledního života.</p>
  </div>

  <div class="char-rule-box">
    <h4>Slab the Killer (4 životy)</h4>
    <p>Kdo chce zrušit jeho kartu BANG!, musí použít 2 efekty Vedle!. Úspěšné sejmutí Barelu zastoupí pouze jeden z nich.</p>
  </div>

  <div class="char-rule-box">
    <h4>Suzy Lafayette (4 životy)</h4>
    <p>Jakmile nemá v ruce žádnou kartu, ihned si dobere 1 kartu z dobíracího balíčku. (Během probíhajícího Duelu tato schopnost nefunguje).</p>
  </div>

  <div class="char-rule-box">
    <h4>Vulture Sam (4 životy)</h4>
    <p>Kdykoli je nějaká postava zabita, vezme si do ruky všechny karty, které měl její hráč v ruce a ve hře před sebou.</p>
  </div>

  <div class="char-rule-box">
    <h4>Willy the Kid (4 životy)</h4>
    <p>Ve svém tahu smí zahrát libovolný počet karet BANG! (má v sobě zabudovaný trvalý efekt zbraně Volcanic).</p>
  </div>
</div>

<div class="callout callout-purple" style="margin-top: 1.5rem;">
  <h4>🎁 Bonusové postavy</h4>
  <div class="characters-rules-grid">
    <div class="char-rule-box">
      <h4>Claus „The Saint“ (3 životy)</h4>
      <p>Ve svém tahu v 1. fázi si dobere o 1 kartu více, než je hráčů u stolu. 2 karty si nechá a každému dalšímu hráči dá po jedné kartě do ruky.</p>
    </div>
    <div class="char-rule-box">
      <h4>Johnny Kisch (4 životy)</h4>
      <p>Kdykoli vyloží jakoukoli kartu do hry, všechny stejnojmenné karty, které již jsou kdekoliv ve hře vyloženy, se okamžitě odhodí.</p>
    </div>
    <div class="char-rule-box">
      <h4>Uncle Will (4 životy)</h4>
      <p>Jednou během svého tahu může zahrát jakoukoli kartu z ruky jako kartu Hokynářství.</p>
    </div>
  </div>
</div>
"""
    }
]
