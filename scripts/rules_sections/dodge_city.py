# -*- coding: utf-8 -*-
"""
Oficiální pravidla rozšíření Dodge City (Město duchů) včetně FAQ D1-D16.
"""

DODGE_CITY_SECTIONS = [
    {
        "id": "dc-zelene-karty",
        "category": "dodge-city",
        "categoryTitle": "🟢 Dodge City (Město duchů)",
        "title": "1. Zelené karty s odloženým účinkem",
        "icon": "clock",
        "content": """
<div class="rule-section-header">
  <span class="section-tag">Dodge City</span>
  <h2>1. Zelené karty s odloženým účinkem</h2>
  <p class="section-lead">Dodge City přináší zcela nový typ karet se zeleným okrajem, které fungují na principu přípravy a pozdějšího odpálení.</p>
</div>

<div class="concept-card">
  <h3>🟢 Pravidla vykládání a aktivace zelených karet</h3>
  <ul>
    <li><strong>Vyložení před sebe:</strong> Zelenou kartu vykládáte ve svém tahu před sebe na stůl stejně jako modrou kartu.</li>
    <li><strong>ZÁKAZ POUŽITÍ V TAHU VYLOŽENÍ:</strong> Zelenou kartu <strong>nemůžete použít v témže tahu, v němž jste ji vyložili</strong>! Musí zůstat ležet na stole alespoň do začátku vašeho příštího tahu.</li>
    <li><strong>Aktivace v dalších tazích:</strong> V jakémkoli ze svých dalších tahů můžete kartu odhodit a uplatnit její efekt. Na každé zelené kartě jsou symboly: symbol roztržené/odhozené karty <code>=</code> a za ním symboly efektu, který tím získáte.</li>
    <li><strong>Obranné zelené karty (Sombrero, Bible, Železný plát, Skrýš):</strong> Karty se symbolem <em>Vedle!</em> můžete odhodit i <strong>mimo svůj vlastní tah</strong>, kdykoli na vás někdo zaútočí efektem BANG!.</li>
  </ul>
</div>

<div class="callout callout-warning">
  <h4>⚠️ Co se stane, když vám zelenou kartu někdo vezme (Panika!, Cat Balou)?</h4>
  <p>Karty se zeleným okrajem mohou být ze hry odstraněny kartami jako <em>Panika!</em> nebo <em>Cat Balou</em>:</p>
  <ul>
    <li>Pokud soupeř zahraje <em>Paniku!</em> na vaši vyloženou zelenou kartu, <strong>vezme si ji do ruky</strong>.</li>
    <li>Tuto kartu však <strong>NEMŮŽE ihned zahrát z ruky</strong> pro její efekt! Musí ji nejprve ve svém tahu vyložit před sebe a počkat celé kolo, než ji bude moci aktivovat.</li>
  </ul>
</div>

<div class="callout callout-info">
  <h4>📌 Obecná pravidla pro zelené karty</h4>
  <ul>
    <li>Jakákoli zelená karta se symbolem <em>Vedle!</em> může být použita na zrušení jakékoli karty se symbolem <em>BANG!</em>.</li>
    <li>Nelze mít před sebou vyloženy <strong>dvě zelené karty se stejným názvem</strong>.</li>
  </ul>
</div>
"""
    },
    {
        "id": "dc-odhozeni-karty",
        "category": "dodge-city",
        "categoryTitle": "🟢 Dodge City (Město duchů)",
        "title": "2. Karty se symbolem „Odhoďte další kartu“",
        "icon": "layers",
        "content": """
<div class="rule-section-header">
  <span class="section-tag">Dodge City</span>
  <h2>2. Karty se symbolem „Odhoďte další kartu“</h2>
  <p class="section-lead">Některé hnědé i zelené karty v Dodge City vyžadují k aktivaci zaplacení dodatečné karty z ruky.</p>
</div>

<div class="concept-card">
  <h3>Symbol odhození karty (Rvačka, Tequila, Rag Time, Pružina)</h3>
  <p>Na těchto kartách naleznete symbol odhozené karty vedle nového symbolu oddělený znaménkem rovná se <code>=</code>. To znamená:</p>
  <ul>
    <li>Při zahrání této karty musíte z ruky <strong>odhodit ještě 1 další libovolnou kartu</strong>.</li>
    <li><strong>Rvačka:</strong> Všichni ostatní hráči musí odhodit 1 kartu ze stolu nebo z ruky (vyžaduje odhození 1 další karty z ruky).</li>
    <li><strong>Tequila:</strong> Vyléčí vám 1 život (vyžaduje odhození 1 karty z ruky). <em>Pozor:</em> Tequila není Pivo a nelze ji zahrát mimo svůj tah!</li>
    <li><strong>Rag Time:</strong> Zelená karta – odhoďte ji ze hry a další kartu z ruky pro efekt Paniky! bez ohledu na vzdálenost.</li>
    <li><strong>Pružina:</strong> Zelená karta – odhoďte ji ze hry a další kartu z ruky pro efekt Cat Balou bez ohledu na vzdálenost.</li>
  </ul>
</div>
"""
    },
    {
        "id": "dc-8-a-3-hraci",
        "category": "dodge-city",
        "categoryTitle": "🟢 Dodge City (Město duchů)",
        "title": "3. Pravidla pro 8 hráčů a pro 3 hráče",
        "icon": "users",
        "content": """
<div class="rule-section-header">
  <span class="section-tag">Dodge City</span>
  <h2>3. Pravidla pro 8 hráčů a pro 3 hráče</h2>
  <p class="section-lead">Oficiální varianty z Dodge City umožňující hrát BANG! v plném počtu 8 hráčů nebo v rychlém souboji 3 hráčů.</p>
</div>

<div class="concept-card" style="border-left: 4px solid var(--accent-gold);">
  <h3>👥 Pravidla pro 8 hráčů (2 Odpadlíci)</h3>
  <p>V 8 hráčích se použije 8 karet rolí: <strong>1 Šerif, 2 Pomocníci, 3 Bandité a 2 Odpadlíci</strong>.</p>
  <ul>
    <li>Každý z obou Odpadlíků <strong>hraje striktně sám za sebe</strong> (netvoří tým!).</li>
    <li><strong>Podmínka vítězství Odpadlíka:</strong> Aby Odpadlík vyhrál, musí zůstat jako <strong>úplně poslední živý hráč ve hře</strong> (musí tedy zabít i druhého Odpadlíka a Šerifa nechat na konec).</li>
    <li><strong>Kritické pravidlo:</strong> Pokud Šerif zemře a ve hře jsou stále dva Odpadlíci (nebo Odpadlík a Pomocník), <strong>OKAMŽITĚ VÍTĚZÍ BANDITÉ</strong>, i kdyby už všichni leželi na hřbitově!</li>
  </ul>
</div>

<div class="concept-card" style="border-left: 4px solid #8e44ad; margin-top: 1.5rem;">
  <h3>🤠 Speciální pravidla pro 3 hráče (Kruh cílů)</h3>
  <p>Při 3 hráčích vezměte 3 karty rolí a vyložte je <strong>lícem nahoru na stůl</strong>. Každý zná roli svou i soupeřů:</p>
  <div class="concept-grid">
    <div class="concept-item">
      <span class="concept-badge">🛡️ Pomocník šerifa</span>
      <p>Musí zabít <strong>Odpadlíka</strong>.</p>
    </div>
    <div class="concept-item">
      <span class="concept-badge">🗡️ Odpadlík</span>
      <p>Musí zabít <strong>Banditu</strong>.</p>
    </div>
    <div class="concept-item">
      <span class="concept-badge">💀 Bandita</span>
      <p>Musí zabít <strong>Pomocníka šerifa</strong>.</p>
    </div>
  </div>
  <ul style="margin-top: 1rem;">
    <li><strong>Okamžité vítězství:</strong> Hráč zvítězí okamžitě, jakmile osobně zasadí smrtelnou ránu svému určenému cíli!</li>
    <li><strong>Zabití jiným hráčem:</strong> Pokud cíl zabije někdo jiný (např. Pomocník zabije Banditu), novým cílem obou přeživších hráčů se stává <strong>zůstat jako poslední živý ve hře</strong>.</li>
    <li>Za zabití kteréhokoli hráče je odměna <strong>3 karty z balíčku</strong>.</li>
    <li>Jelikož ve hře není Šerif, <strong>kartu Vězení lze hrát na kohokoli</strong>.</li>
    <li>Karta Pivo nemá žádný efekt, pokud zbývají pouze 2 hráči.</li>
  </ul>
</div>
"""
    },
    {
        "id": "dc-postavy",
        "category": "dodge-city",
        "categoryTitle": "🟢 Dodge City (Město duchů)",
        "title": "4. 15 nových postav Dodge City",
        "icon": "award",
        "content": """
<div class="rule-section-header">
  <span class="section-tag">Dodge City</span>
  <h2>4. 15 nových postav Dodge City</h2>
  <p class="section-lead">Přehled všech 15 westernových postav z rozšíření Dodge City a přesná pravidla k jejich schopnostem.</p>
</div>

<div class="characters-rules-grid">
  <div class="char-rule-box">
    <h4>Apache Kid (3 životy)</h4>
    <p>Nemají na něj vliv karty s károvou barvou (♦) zahrané jinými hráči (BANG!, Cat Balou, Panika, Duel...). Kárové zbraně soupeřů na něj však normálně dostřelí!</p>
  </div>

  <div class="char-rule-box">
    <h4>Belle Star (4 životy)</h4>
    <p>Během jejího vlastního tahu nefungují žádné karty, které mají ostatní hráči vyložené před sebou (Barel, Mustang, Skrýš, zelené karty, zbraně).</p>
  </div>

  <div class="char-rule-box">
    <h4>Bill Noface (4 životy)</h4>
    <p>Ve svém tahu v 1. fázi líže 1 kartu plus jednu další kartu za každý život, který mu momentálně chybí (např. má 1 život ze 4 = líže 1 + 3 = 4 karty!).</p>
  </div>

  <div class="char-rule-box">
    <h4>Chuck Wengam (4 životy)</h4>
    <p>Ve svém tahu se může vzdát 1 života a líznout si 2 karty z balíčku. Může to udělat i vícekrát za kolo, ale nemůže se takto připravit o svůj poslední život.</p>
  </div>

  <div class="char-rule-box">
    <h4>Doc Holyday (4 životy)</h4>
    <p>Až dvakrát za tah může odhodit 2 karty z ruky a získat tím efekt BANG! navíc. Tento výstřel se nepočítá do limitu 1 BANG! za tah a nespouští efekty zbraní.</p>
  </div>

  <div class="char-rule-box">
    <h4>Elena Fuente (3 životy)</h4>
    <p>Může použít jakoukoli kartu ze své ruky jako kartu Vedle!.</p>
  </div>

  <div class="char-rule-box">
    <h4>Greg Digger (4 životy)</h4>
    <p>Kdykoli je jiná postava zabita, Greg Digger si ihned vyléčí 2 životy (až do maxima své postavy).</p>
  </div>

  <div class="char-rule-box">
    <h4>Herb Hunter (4 životy)</h4>
    <p>Kdykoli je jiná postava zabita, Herb Hunter si ihned lízne 2 karty z dobíracího balíčku.</p>
  </div>

  <div class="char-rule-box">
    <h4>José Delgado (4 životy)</h4>
    <p>Až dvakrát za tah může odhodit z ruky modrou kartu a líznout si 2 karty z dobíracího balíčku.</p>
  </div>

  <div class="char-rule-box">
    <h4>Molly Stark (4 životy)</h4>
    <p>Kdykoli zahraje nebo odhodí kartu mimo svůj tah (např. Vedle!, Pivo, BANG! v Duelu nebo na Indiány), ihned si lízne 1 kartu z balíčku. Neplatí pro karty odhozené vlivem Cat Balou!</p>
  </div>

  <div class="char-rule-box">
    <h4>Pat Brennan (4 životy)</h4>
    <p>Ve svém tahu v 1. fázi může místo dobrání 2 karet z balíčku vzít 1 kartu vyloženou ve hře před kterýmkoli hráčem (i zelenou kartu či zbraň!).</p>
  </div>

  <div class="char-rule-box">
    <h4>Pixie Pete (3 životy)</h4>
    <p>Ve svém tahu v 1. fázi líže rovnou 3 karty z dobíracího balíčku.</p>
  </div>

  <div class="char-rule-box">
    <h4>Sean Mallory (3 životy)</h4>
    <p>Ve 3. fázi svého tahu smí mít v ruce až 10 karet bez ohledu na svůj aktuální počet životů.</p>
  </div>

  <div class="char-rule-box">
    <h4>Tequila Joe (4 životy)</h4>
    <p>Kdykoli zahraje kartu Pivo, vyléčí si 2 životy místo jednoho. (Na karty jako Saloon či Tequila se bonus nevztahuje).</p>
  </div>

  <div class="char-rule-box">
    <h4>Vera Custer (3 životy)</h4>
    <p>Na začátku svého tahu si vybere schopnost jedné jiné živé postavy ve hře. Tuto schopnost má po celé kolo až do svého příštího tahu.</p>
  </div>
</div>
"""
    },
    {
        "id": "dc-faq",
        "category": "dodge-city",
        "categoryTitle": "🟢 Dodge City (Město duchů)",
        "title": "5. Oficiální FAQ Dodge City (Otázky D1–D16)",
        "icon": "help-circle",
        "content": """
<div class="rule-section-header">
  <span class="section-tag">Dodge City FAQ</span>
  <h2>5. Oficiální FAQ Dodge City (Otázky D1–D16)</h2>
  <p class="section-lead">Autentické odpovědi z oficiálního pravidlového sešitu Albi k nejčastějším sporným situacím v Dodge City.</p>
</div>

<div class="faq-rules-list">
  <div class="faq-rule-item">
    <h4>D1. Mohou zahrát karty Whisky, Tequila nebo Čutora mimo svůj tah, když přicházím o svůj poslední život?</h4>
    <p><strong>NE.</strong> Pouze karta Pivo má speciální symbol „přidej si jeden život“, pouze karty Pivo mohou být podle pravidel použity mimo svůj tah.</p>
  </div>

  <div class="faq-rule-item">
    <h4>D2. Mohu použít Barel, když jsem cílem útoku karet Úder, Nůž, Springfield, Puška na bizony, Houfnice, Pepperbox nebo Derringer?</h4>
    <p><strong>ANO.</strong> Obecně platí, že Barel funguje proti všem kartám se symbolem BANG!.</p>
  </div>

  <div class="faq-rule-item">
    <h4>D3. Když má Vera Custer aktuálně stejnou schopnost jako Vulture Sam a jiný hráč je odstraněn ze hry, kdo získá jeho karty?</h4>
    <p>Karty hráče odstraněného ze hry jsou rozděleny mezi postavy Vera Custer a Vulture Sam. Ten z nich, který je první na řadě za zabitým hráčem ve směru hodinových ručiček, si vezme první kartu (buď náhodně z ruky, nebo z karet ze stolu). Pak si vybírá druhý hráč další kartu a tak to pokračuje dále, dokud si nerozdělí všechny karty zabitého hráče.</p>
  </div>

  <div class="faq-rule-item">
    <h4>D4. Když Slab the Killer zahraje karty Úder, Nůž, Springfield, Puška na bizony, Houfnice, Pepperbox nebo Derringer, kolik karet Vedle! musím zahrát, abych se vyhnul zranění?</h4>
    <p><strong>Stačí pouze 1 karta Vedle!.</strong> Schopnost postavy Slab the Killer se vztahuje pouze na kartu BANG!.</p>
  </div>

  <div class="faq-rule-item">
    <h4>D5. Mohu mít současně před sebou na stole vyloženy karty Hledí a Dalekohled, Mustang a Skrýš, či libovolnou kombinaci těchto karet?</h4>
    <p><strong>ANO.</strong> Všechny tyto karty mají různá jména, není zde tedy žádné omezení a jejich efekty se sčítají.</p>
  </div>

  <div class="faq-rule-item">
    <h4>D6. Co se stane, když jsou ve hře dvě karty Dynamit a naživu jsou již jen dva hráči?</h4>
    <p>Dynamit se musí posunout před následujícího hráče (ve směru hodinových ručiček), který před sebou nemá kartu Dynamit. Jestliže tedy Dynamit nevybuchne, zůstává před tím samým hráčem, neboť druhý hráč již před sebou Dynamit má.</p>
  </div>

  <div class="faq-rule-item">
    <h4>D7. Mohu mít před sebou vyloženy dvě karty Železný plát?</h4>
    <p><strong>NE.</strong> Obecně řečeno, nikdy nemůžete mít před sebou vyloženy dvě karty stejného jména.</p>
  </div>

  <div class="faq-rule-item">
    <h4>D8. Mohu zahrát karty Tequila, Whisky nebo Čutora, pokud jsou naživu již jen dva hráči?</h4>
    <p><strong>ANO,</strong> nejsou to karty Pivo. Nicméně stále je nemůžete použít mimo svůj tah k záchraně svého života.</p>
  </div>

  <div class="faq-rule-item">
    <h4>D9. Pokud je zabit Tequila Joe a má na ruce Pivo, kolik životů obdrží?</h4>
    <p>Pokud Tequila Joe ztrácí jeden život a zahraje Pivo, zůstanou mu dva životy. Pokud je ale zabit v důsledku karty Dynamit, musí spočítat všechny zranění a získané životy, aby zjistil, jestli přežije. Když má například 1 život a Dynamit vybuchne, Tequila Joe bude mít -2 životy, potřebuje tedy dvě karty Pivo k tomu, aby se zachránil (v tomto případě mu zůstanou -2 + 4 = 2 životy).</p>
  </div>

  <div class="faq-rule-item">
    <h4>D10. Zabraňuje schopnost postavy Apache Kid ostatním hráčům zahrát kávové karty Vedle! proti jeho kartám BANG!?</h4>
    <p><strong>NE.</strong> Schopnost postavy Apache Kid se vztahuje pouze na karty zahrané ostatními hráči během jejich tahu. Je tedy chráněn před přibližně polovinou karet BANG!, před všemi kartami Duel (všechny kárové!), proti některým kartám Cat Balou a Panika!. Pokud by byly proti němu hrány zbraně, Skrýš, Barel atd., vždy fungují normálně.</p>
  </div>

  <div class="faq-rule-item">
    <h4>D11. Kolik karet získá Vulture Sam, pokud je zabit Sean Mallory?</h4>
    <p>Vulture Sam dostane všechny karty postavy Sean Mallory, z ruky i ze stolu.</p>
  </div>

  <div class="faq-rule-item">
    <h4>D12. Kolik karet může mít na ruce Sean Mallory?</h4>
    <p>I když je na kartě napsáno „libovolný počet karet“, jako turnajové pravidlo je povoleno maximálně 15 karet, aby se zabránilo zpomalení hry v případě příliš opatrných hráčů (v pravidlech Města duchů 10 karet).</p>
  </div>

  <div class="faq-rule-item">
    <h4>D13. Pokud je Vera Custer ve Vězení, může převzít schopnost postavy Lucky Duke (pokud je naživu) předtím, než si „táhne“?</h4>
    <p><strong>NE,</strong> pokud ovšem nepřevzala schopnost Lucky Duke v minulém tahu. Schopnost postavy Vera Custer je vyvolána během fáze 1 jejího tahu (před líznutím), ale Vězení ji donutí tuto fázi zcela přeskočit. Zjistěte tedy nejdříve, jestli Vera Custer unikne z Vězení. Pokud ne, nemá až do svého příštího tahu žádnou schopnost.</p>
  </div>

  <div class="faq-rule-item">
    <h4>D14. Jak fungují karty Krytý vůz a Ragtime?</h4>
    <p>Přečtěte si symboly na kartách. Obě karty dovolují vzít si kartu (z ruky či ze stolu) libovolného hráče, bez ohledu na vzdálenost.</p>
  </div>

  <div class="faq-rule-item">
    <h4>D15. Na jakou vzdálenost může vystřelit Doc Holyday, když využije svou schopnost?</h4>
    <p>Na jakoukoli vzdálenost, na kterou dostřelí zbraní.</p>
  </div>

  <div class="faq-rule-item">
    <h4>D16. Mohu použít Pepperbox nebo Nůž proti kartě Indiáni!, nebo během Duelu?</h4>
    <p><strong>NE,</strong> v těchto případech musíte použít skutečné karty BANG!.</p>
  </div>
</div>
"""
    }
]
