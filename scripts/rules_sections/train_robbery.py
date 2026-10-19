# -*- coding: utf-8 -*-
"""
Oficiální pravidla rozšíření Velká vlaková loupež (The Great Train Robbery).
"""

TRAIN_ROBBERY_SECTIONS = [
    {
        "id": "tr-vlak-a-stanice",
        "category": "train-robbery",
        "categoryTitle": "🚂 Velká vlaková loupež",
        "title": "1. Lokomotivy, trať stanic a pohyb vlaku",
        "icon": "navigation",
        "content": """
<div class="rule-section-header">
  <span class="section-tag">Velká vlaková loupež</span>
  <h2>1. Lokomotivy, trať stanic a pohyb vlaku</h2>
  <p class="section-lead">Do hry přijíždí parní vlak! Trať tvoří řada destiček stanic, po nichž se posouvá lokomotiva táhnoucí vagony.</p>
</div>

<div class="concept-card">
  <h3>🚂 Příprava tratě a vlaku</h3>
  <ul>
    <li>Vyložte do řady tolik destiček stanic, <strong>kolik je hráčů u stolu</strong>.</li>
    <li>Pod první stanici (zcela vlevo) položte kartu lokomotivy náhodnou stranou nahoru (sejměte: ♣/♠ = <strong>Ironhorse</strong>, ♥/♦ = <strong>Leland</strong>).</li>
    <li>Za lokomotivu vyložte <strong>3 náhodné karty vagonů</strong> z balíčku vagonů.</li>
  </ul>
</div>

<div class="concept-card">
  <h3>🛤️ Dva způsoby pohybu vlaku</h3>
  <div class="concept-grid">
    <div class="concept-item">
      <span class="concept-badge">1. Pohyb Šerifem</span>
      <h4>Pohyb na začátku tahu</h4>
      <p>Šerif počínaje 2. kolem hry na začátku každého svého tahu <strong>posune lokomotivu o 1 stanici doprava</strong> (vlak za sebou táhne vagony).</p>
    </div>

    <div class="concept-item">
      <span class="concept-badge concept-badge-gun">2. Pohyb hráčem ve fázi 2</span>
      <h4>Dobrovolný posun s povinným nákupem</h4>
      <p>Kterýkoli hráč může ve 2. fázi svého tahu <strong>posunout vlak o 1 stanici zdarma</strong>. Pokud to však udělá, <strong>MUSÍ POVINNĚ ZAKOUPIT VAGON</strong> přiřazený k cílové stanici zaplacením její ceny!</p>
    </div>
  </div>
</div>

<div class="callout callout-warning">
  <h4>🏁 KONEČNÁ STANICE A VYHODNOCENÍ LOKOMOTIVY</h4>
  <p>Jakmile se lokomotiva posune za poslední stanici tratě, dosáhla konečné a <strong>ihned se vyhodnotí její efekt</strong>:</p>
  <ul>
    <li><strong>Ironhorse:</strong> Všichni hráči se stávají cílem efektu BANG! (mohou se bránit kartami Vedle! a Barelem). Pokud tímto výstřelem zemřou všichni zbývající hráči včetně Šerifa, <strong>vítězí Bandité</strong>!</li>
    <li><strong>Leland:</strong> Pro všechny hráče se spustí efekt karty <em>Hokynářství</em> (otočí se tolik karet, kolik je hráčů, a každý si jednu vezme).</li>
  </ul>
  <p>Po vyhodnocení se všechny destičky stanic i zbývající vagony zamíchají, postaví se nová trať a lokomotiva se <strong>otočí na opačnou stranu</strong>.</p>
</div>

<div class="concept-card" style="margin-top: 1.5rem;">
  <h3>🏛️ Přehled všech 13 oficiálních stanic a jejich cen</h3>
  <table class="rules-table">
    <thead>
      <tr>
        <th>Destička stanice</th>
        <th>Požadovaná cena za nákup přiřazeného vagonu</th>
      </tr>
    </thead>
    <tbody>
      <tr><td><strong>Boom Town</strong></td><td>Odhoď 1 libovolnou kartu</td></tr>
      <tr><td><strong>Dodgeville</strong></td><td>Odhoď 2 libovolné karty</td></tr>
      <tr><td><strong>Crown's Hole</strong></td><td>Odhoď kartu Pivo</td></tr>
      <tr><td><strong>Catico</strong></td><td>Odhoď Panika! nebo Cat Balou</td></tr>
      <tr><td><strong>Deathwood</strong></td><td>Odhoď 1 modrou kartu</td></tr>
      <tr><td><strong>Tombrock</strong></td><td>Uber si 1 život (nesmí jít o poslední život)</td></tr>
      <tr><td><strong>Virginia Town</strong></td><td>Odhoď 2 libovolné karty</td></tr>
      <tr><td><strong>Yooma</strong></td><td>Odhoď kartu s hodnotou 2 až 9</td></tr>
      <tr><td><strong>Fort Wroth</strong></td><td>Odhoď kartu 10, J, Q, K nebo A</td></tr>
      <tr><td><strong>San Tafe</strong></td><td>Odhoď srdcovou kartu (♥)</td></tr>
      <tr><td><strong>Miner's Oath</strong></td><td>Odhoď károvou kartu (♦)</td></tr>
      <tr><td><strong>Frisco</strong></td><td>Odhoď křížovou kartu (♣)</td></tr>
      <tr><td><strong>Creepy Creek</strong></td><td>Odhoď pikovou kartu (♠)</td></tr>
    </tbody>
  </table>
</div>
"""
    },
    {
        "id": "tr-vagony-a-mechaniky",
        "category": "train-robbery",
        "categoryTitle": "🚂 Velká vlaková loupež",
        "title": "2. Pravidla vagonů a Vagon duchů",
        "icon": "shield",
        "content": """
<div class="rule-section-header">
  <span class="section-tag">Velká vlaková loupež</span>
  <h2>2. Pravidla vagonů a Vagon duchů</h2>
  <p class="section-lead">Zakoupené vagony poskytují mocné trvalé výhody, ale mají jedno přísné pravidlo.</p>
</div>

<div class="callout callout-gold">
  <h4>🚫 ZÁKAZ BRANÍ VAGONŮ DO RUKY!</h4>
  <p>Vagony se vykládají přímo před hráče a chovají se jako modré karty. <strong>VAGONY SE VŠAK NIKDY NESMÍ VZÍT DO RUKY!</strong></p>
  <p>Pokud soupeř zahraje na váš vagon kartu <em>Panika!</em>, <strong>vezme si vagon a vyloží jej ihned přímo před sebe na stůl</strong> (nikoli do ruky)!</p>
</div>

<div class="concept-card" style="border-left: 4px solid #8e44ad;">
  <h3>👻 Vagon duchů (Ghost Car)</h3>
  <ul>
    <li>Pokud má hráč ztratit svůj poslední život a drží před sebou <strong>Vagon duchů</strong>, <strong>neumírá</strong>!</li>
    <li>Zůstává ve hře s <strong>0 životy</strong>. Ve svém tahu hraje normálně.</li>
    <li>Pokud však o Vagon duchů přijde (vlivem Cat Balou, Paniky nebo jiného efektu), <strong>okamžitě definitivně umírá</strong> a nikdo za něj nedostane odměnu!</li>
    <li><strong>Imunita Šerifa:</strong> Šerif <strong>NESMÍ vlastnit Vagon duchů</strong> (kdyby si jej koupil nebo získal, vagon se ihned odhodí).</li>
  </ul>
</div>
"""
    }
]
