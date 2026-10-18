// BANG! Dynamite Box & Legendy — Web Controller (Clean Text, Rich Formatting & Bilingual CZ/EN)
(function() {
  'use strict';

  // State
  const state = {
    lang: localStorage.getItem('bang_lang') || 'cs',
    activeTab: 'katalog',
    searchQuery: '',
    selectedExpansion: 'all',
    selectedType: 'all',
    selectedSuit: 'all',
    sortBy: 'name-asc',
    activeFaqCategory: 'all',
    faqQuery: '',
    selectedCard: null
  };

  // DOM Elements
  const els = {
    tabs: document.querySelectorAll('.nav-tab'),
    panes: document.querySelectorAll('.tab-pane'),
    globalSearch: document.getElementById('global-search'),
    themeToggle: document.getElementById('theme-toggle'),
    langBtnCs: document.getElementById('lang-btn-cs'),
    langBtnEn: document.getElementById('lang-btn-en'),
    brandMainTitle: document.getElementById('brand-main-title'),
    brandSubtitle: document.querySelector('.brand-titles .subtitle'),
    labelFilterTitle: document.getElementById('label-filter-title'),
    labelExpansion: document.getElementById('label-expansion'),
    labelType: document.getElementById('label-type'),
    labelSuit: document.getElementById('label-suit'),
    labelSort: document.getElementById('label-sort'),
    cardsGrid: document.getElementById('cards-grid'),
    resultsCount: document.getElementById('results-count'),
    filterExpansion: document.getElementById('filter-expansion'),
    filterType: document.getElementById('filter-type'),
    filterSuit: document.getElementById('filter-suit'),
    sortCards: document.getElementById('sort-cards'),
    btnResetFilters: document.getElementById('btn-reset-filters'),
    faqMainTitle: document.getElementById('faq-main-title'),
    faqMainLead: document.getElementById('faq-main-lead'),
    faqSearch: document.getElementById('faq-search'),
    faqList: document.getElementById('faq-list'),
    faqCatContainer: document.getElementById('faq-categories-container'),
    cardModal: document.getElementById('card-modal'),
    modalBody: document.getElementById('modal-body'),
    modalClose: document.getElementById('modal-close'),
    rulesTocHeader: document.getElementById('rules-toc-header'),
    rulesContentTarget: document.getElementById('rules-content-target'),
    rulesTocTarget: document.getElementById('rules-toc-target'),
    tahHraceTarget: document.getElementById('tah-hrace-target'),
    pomocnikTarget: document.getElementById('pomocnik-target'),
    footerText1: document.getElementById('footer-text-1'),
    footerText2: document.getElementById('footer-text-2'),
    footerText3: document.getElementById('footer-text-3'),
    footerRepoLink: document.getElementById('footer-repo-link'),
    footerNavLinks: document.getElementById('footer-nav-links')
  };

  // Theme Init
  function initTheme() {
    const saved = localStorage.getItem('bang_theme') || 'light';
    document.documentElement.setAttribute('data-theme', saved);
    updateThemeIcon(saved);
  }

  function toggleTheme() {
    const current = document.documentElement.getAttribute('data-theme') || 'light';
    const next = current === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('bang_theme', next);
    updateThemeIcon(next);
  }

  function updateThemeIcon(theme) {
    if (!els.themeToggle) return;
    els.themeToggle.innerHTML = theme === 'dark' ? '<span>☀️</span>' : '<span>🌙</span>';
  }

  // =========================================================================
  // LANGUAGE CONTROLLER (CZ / EN)
  // =========================================================================
  const I18N = {
    cs: {
      brandTitle: "Pravidla deskové hry Bang!",
      brandSubtitle: "Kompletní pravidla všech rozšíření dohromady & Encyklopedie karet",
      searchPlaceholder: "Hledat kartu, postavu, pravidlo... (stiskni /)",
      themeTitle: "Přepnout tmavý / světlý westernový režim",
      navKatalog: "Katalog karet",
      navPravidla: "Pravidla",
      navFaq: "FAQ",
      navTah: "Tah hráče",
      navPomocnik: "Rychlý pomocník",
      filterTitle: "Filtry karet",
      filterReset: "Resetovat",
      filterExpansion: "Rozšíření",
      filterType: "Typ a barva karty",
      filterSuit: "Karetní barva",
      filterSort: "Řazení",
      copiesInDeck: "v balíčku",
      rangeLabel: "Dosah",
      livesLabel: "životy",
      timingLabel: "Časování",
      costLabel: "Cena / Podmínka",
      rulingsHeader: "Oficiální pravidla a přesné vyhodnocení:",
      effectHeader: "Text a funkce karty:",
      noResultsTitle: "Žádná položka neodpovídá zvoleným filtrům",
      noResultsText: "Zkuste upravit hledaný výraz nebo resetovat filtry.",
      showingResults: (c, t) => `Zobrazeno ${c} z celkem ${t} karet a položek`,
      rulesTocHeader: "Obsah pravidel",
      faqMainTitle: "⚖️ Arbitr sporných situací & Pravidlové rébusy (50+ řešení)",
      faqMainLead: "Okamžité vyhledávání v oficiálních rozhodnutích, neobvyklých kombinacích karet, sporných momentech a časových posloupnostech.",
      faqSearchPlaceholder: "Hledat otázku nebo kartu: např. Slab, Vězení, Pivo, Vagon, Bomba, Rez...",
      faqNoResults: "Nebyly nalezeny žádné sporné situace.",
      faqNoResultsDesc: "Zkuste zadat jiná klíčová slova (např. Slab, Vězení, Pivo, Vagon, Bomba, Rez, Šerif).",
      footerText1: "Pravidla deskové hry Bang! — Encyklopedie pravidel a karet",
      footerText2: "Autor hry: Emiliano Sciarra | Vývoj: daVinci Games / dV Giochi & Albi.",
      footerText3: "Tato nezávislá fanouškovská webová aplikace slouží k rychlému vyhledávání a řešení herních situací.",
      footerRepo: "Repozitář na GitHubu",
      footerNav: '<a href="#pravidla">Pravidla</a> • <a href="#faq">FAQ</a> • <a href="#katalog">Karty</a>'
    },
    en: {
      brandTitle: "Bang! Board Game Rules",
      brandSubtitle: "Complete rules of all expansions together & Card encyclopedia",
      searchPlaceholder: "Search card, character, rule... (press /)",
      themeTitle: "Toggle dark / light western theme",
      navKatalog: "Card Catalog",
      navPravidla: "Rules",
      navFaq: "FAQ",
      navTah: "Player Turn",
      navPomocnik: "Quick Helper",
      filterTitle: "Card Filters",
      filterReset: "Reset",
      filterExpansion: "Expansion",
      filterType: "Card Type & Color",
      filterSuit: "Card Suit",
      filterSort: "Sorting",
      copiesInDeck: "in deck",
      rangeLabel: "Range",
      livesLabel: "lives",
      timingLabel: "Timing",
      costLabel: "Cost / Requirement",
      rulingsHeader: "Official Rulings & Timing Resolution:",
      effectHeader: "Card Text & Ability:",
      noResultsTitle: "No cards match the selected filters",
      noResultsText: "Try adjusting your search query or reset filters.",
      showingResults: (c, t) => `Showing ${c} of ${t} cards and items`,
      rulesTocHeader: "Table of Contents",
      faqMainTitle: "⚖️ Conflict Arbitrator & Rule Enigmas (50+ Resolutions)",
      faqMainLead: "Instant lookup for official rulings, unusual card combinations, dispute resolutions and timing sequences.",
      faqSearchPlaceholder: "Search question or card: e.g. Slab, Jail, Beer, Ghost, Bomb, Rust...",
      faqNoResults: "No conflict situations found.",
      faqNoResultsDesc: "Try different keywords (e.g. Slab, Jail, Beer, Ghost, Bomb, Rust, Sheriff).",
      footerText1: "Bang! Board Game Rules — Rules & Card Encyclopedia",
      footerText2: "Game Author: Emiliano Sciarra | Publishing: daVinci Games / dV Giochi & Albi.",
      footerText3: "This independent fan-made web application provides instant rule reference and dispute resolution.",
      footerRepo: "GitHub Repository",
      footerNav: '<a href="#pravidla">Rules</a> • <a href="#faq">FAQ</a> • <a href="#katalog">Cards</a>'
    }
  };

  const EXPANSIONS_EN = {
    'all': 'All Expansions (234 items)',
    'base': 'Base Game',
    'dodge-city': 'Dodge City (Green Cards)',
    'gold-rush': 'Gold Rush (Equipment & Gold)',
    'armed-dangerous': 'Armed & Dangerous (Orange Cards)',
    'train-robbery': 'The Great Train Robbery (Train & Stations)',
    'valley-of-shadows': 'Valley of Shadows',
    'high-noon': 'High Noon',
    'fistful-of-cards': 'A Fistful of Cards',
    'wild-west-show': 'Wild West Show',
    'legends': 'Legends (Legends & Feats)',
    'dynamite-box': 'Dynamite Box & Promo'
  };

  const EXPANSIONS_CS = {
    'all': 'Všechna rozšíření (234 karet)',
    'base': 'Základní hra',
    'dodge-city': 'Město duchů (Zelené karty)',
    'gold-rush': 'Zlatá horečka (Vybavení a zlato)',
    'armed-dangerous': 'Ozbrojení a nebezpeční (Oranžové)',
    'train-robbery': 'Velká vlaková loupež (Vlak a stanice)',
    'valley-of-shadows': 'Údolí stínů',
    'high-noon': 'Pravé poledne',
    'fistful-of-cards': 'Pěst plná karet',
    'wild-west-show': 'Divoký západ',
    'legends': 'Legendy',
    'dynamite-box': 'Dynamite Box bonusy & Promo'
  };

  const TYPES_EN = {
    'all': 'All Card Types',
    'brown': '🟤 Brown Cards (Immediate)',
    'blue': '🔵 Blue Cards (In Play)',
    'green': '🟢 Green Cards (Dodge City)',
    'orange': '🟠 Orange Cards (Dangerous)',
    'black': '⚫ Black Equipment (Gold Rush)',
    'character': '🤠 Characters (Standard & Legendary)',
    'train': '🚂 Train, Locomotives & Railcars',
    'feat': '📜 Feat Cards (Legends)',
    'event': '⚡ Global Events',
    'role': '⭐ Role Cards'
  };

  const TYPES_CS = {
    'all': 'Všechny typy karet',
    'brown': '🟤 Hnědé karty (okamžité)',
    'blue': '🔵 Modré karty (vyložené ve hře)',
    'green': '🟢 Zelené karty (Město duchů)',
    'orange': '🟠 Oranžové karty (Nebezpečné)',
    'black': '⚫ Černé vybavení (Zlatá horečka)',
    'character': '🤠 Postavy (běžné i legendární)',
    'train': '🚂 Vlak, lokomotivy a vagony',
    'feat': '📜 Karty činů (Legendy)',
    'event': '⚡ Globální události',
    'role': '⭐ Karty rolí'
  };

  const SUITS_EN = {
    'all': 'All Suits',
    '♠': '♠ Spades',
    '♥': '♥ Hearts',
    '♦': '♦ Diamonds',
    '♣': '♣ Clubs'
  };

  const SUITS_CS = {
    'all': 'Všechny barvy',
    '♠': '♠ Piky',
    '♥': '♥ Srdce',
    '♦': '♦ Káry',
    '♣': '♣ Kříže'
  };

  const SORTS_EN = {
    'name-asc': 'Name (A → Z)',
    'name-desc': 'Name (Z → A)',
    'expansion': 'By Expansion',
    'type': 'By Card Type'
  };

  const SORTS_CS = {
    'name-asc': 'Název (A → Z)',
    'name-desc': 'Název (Z → A)',
    'expansion': 'Dle rozšíření',
    'type': 'Dle typu karty'
  };

  const FAQ_CATEGORIES = [
    { id: 'all', cs: 'Všechny kategorie', en: 'All Categories', csCat: 'all', enCat: 'all' },
    { id: 'combat', cs: 'Boj a obrana', en: 'Combat & Defense', csCat: 'Boj a obrana', enCat: 'Combat & Defense' },
    { id: 'characters', cs: 'Schopnosti postav', en: 'Character Abilities', csCat: 'Schopnosti postav', enCat: 'Character Abilities' },
    { id: 'timing', cs: 'Časová posloupnost', en: 'Timing & Order', csCat: 'Časová posloupnost', enCat: 'Timing & Order' },
    { id: 'legends', cs: 'Legendy', en: 'Legends', csCat: 'Legendy', enCat: 'Legends' },
    { id: 'train', cs: 'Vlaková loupež', en: 'Train Robbery', csCat: 'Velká vlaková loupež', enCat: 'The Great Train Robbery' },
    { id: 'armed', cs: 'Ozbrojení a nebezpeční', en: 'Armed & Dangerous', csCat: 'Ozbrojení a nebezpeční', enCat: 'Armed & Dangerous' },
    { id: 'gold', cs: 'Zlatá horečka', en: 'Gold Rush', csCat: 'Zlatá horečka', enCat: 'Gold Rush' },
    { id: 'events', cs: 'Globální události', en: 'Global Events', csCat: 'Globální události', enCat: 'Global Events' }
  ];

  function setLanguage(lang) {
    state.lang = lang;
    localStorage.setItem('bang_lang', lang);
    document.documentElement.setAttribute('lang', lang === 'en' ? 'en' : 'cs');

    if (els.langBtnCs) els.langBtnCs.classList.toggle('active', lang === 'cs');
    if (els.langBtnEn) els.langBtnEn.classList.toggle('active', lang === 'en');

    const isEn = lang === 'en';
    const t = I18N[lang] || I18N.cs;

    // Header & Navigation
    if (els.brandMainTitle) els.brandMainTitle.textContent = t.brandTitle;
    if (els.brandSubtitle) els.brandSubtitle.textContent = t.brandSubtitle;
    if (els.globalSearch) els.globalSearch.placeholder = t.searchPlaceholder;
    if (els.themeToggle) els.themeToggle.title = t.themeTitle;

    const navTexts = {
      'katalog': t.navKatalog,
      'pravidla': t.navPravidla,
      'faq': t.navFaq,
      'tah-hrace': t.navTah,
      'pomocnik': t.navPomocnik
    };

    els.tabs.forEach(tab => {
      const tabId = tab.dataset.tab;
      const span = tab.querySelector('.nav-text');
      if (span && navTexts[tabId]) span.textContent = navTexts[tabId];
    });

    // Filters
    if (els.labelFilterTitle) els.labelFilterTitle.textContent = t.filterTitle;
    if (els.btnResetFilters) els.btnResetFilters.textContent = t.filterReset;
    if (els.labelExpansion) els.labelExpansion.textContent = t.filterExpansion;
    if (els.labelType) els.labelType.textContent = t.filterType;
    if (els.labelSuit) els.labelSuit.textContent = t.filterSuit;
    if (els.labelSort) els.labelSort.textContent = t.filterSort;

    // Options translation
    const expDict = isEn ? EXPANSIONS_EN : EXPANSIONS_CS;
    if (els.filterExpansion) {
      Array.from(els.filterExpansion.options).forEach(opt => {
        if (expDict[opt.value]) opt.textContent = expDict[opt.value];
      });
    }

    const typeDict = isEn ? TYPES_EN : TYPES_CS;
    if (els.filterType) {
      Array.from(els.filterType.options).forEach(opt => {
        if (typeDict[opt.value]) opt.textContent = typeDict[opt.value];
      });
    }

    const suitDict = isEn ? SUITS_EN : SUITS_CS;
    if (els.filterSuit) {
      Array.from(els.filterSuit.options).forEach(opt => {
        if (suitDict[opt.value]) opt.textContent = suitDict[opt.value];
      });
    }

    const sortDict = isEn ? SORTS_EN : SORTS_CS;
    if (els.sortCards) {
      Array.from(els.sortCards.options).forEach(opt => {
        if (sortDict[opt.value]) opt.textContent = sortDict[opt.value];
      });
    }

    // FAQ Section Headers
    if (els.faqMainTitle) els.faqMainTitle.textContent = t.faqMainTitle;
    if (els.faqMainLead) els.faqMainLead.textContent = t.faqMainLead;
    if (els.faqSearch) els.faqSearch.placeholder = t.faqSearchPlaceholder;

    // Footer
    if (els.footerText1) els.footerText1.innerHTML = `<strong>${t.footerText1}</strong>`;
    if (els.footerText2) els.footerText2.textContent = t.footerText2;
    if (els.footerText3) els.footerText3.textContent = t.footerText3;
    if (els.footerRepoLink) els.footerRepoLink.textContent = t.footerRepo;
    if (els.footerNavLinks) els.footerNavLinks.innerHTML = t.footerNav;

    // Render all components
    renderCards();
    renderRules();
    renderFaqCategories();
    renderFaq();
    renderTurnGuide();
    renderQuickHelper();

    if (state.selectedCard) {
      openCardModal(state.selectedCard.id);
    }
  }

  // =========================================================================
  // TAB NAVIGATION & HASH ROUTING
  // =========================================================================
  function setTab(tabId) {
    state.activeTab = tabId;
    window.location.hash = tabId;

    els.tabs.forEach(tab => {
      const isActive = tab.dataset.tab === tabId;
      tab.classList.toggle('active', isActive);
      if (isActive) {
        tab.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
      }
    });

    els.panes.forEach(pane => {
      pane.classList.toggle('active', pane.id === `tab-${tabId}`);
    });

    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function initRouting() {
    const hash = window.location.hash.replace('#', '');
    if (hash && ['katalog', 'pravidla', 'faq', 'tah-hrace', 'pomocnik'].includes(hash)) {
      setTab(hash);
    }
  }

  // =========================================================================
  // FILTER CARDS LOGIC
  // =========================================================================
  function getFilteredCards() {
    if (!window.BANG_CARDS) return [];
    const isEn = state.lang === 'en';

    return window.BANG_CARDS.filter(card => {
      if (state.selectedExpansion !== 'all' && card.expansion !== state.selectedExpansion) {
        return false;
      }
      
      if (state.selectedType !== 'all') {
        if (state.selectedType === 'brown' && !['brown', 'brown-equipment'].includes(card.type)) return false;
        if (state.selectedType === 'blue' && card.type !== 'blue') return false;
        if (state.selectedType === 'green' && card.type !== 'green') return false;
        if (state.selectedType === 'orange' && card.type !== 'orange') return false;
        if (state.selectedType === 'black' && card.type !== 'black') return false;
        if (state.selectedType === 'character' && !['character', 'legend-character'].includes(card.type)) return false;
        if (state.selectedType === 'train' && !['railcar', 'station'].includes(card.type)) return false;
        if (state.selectedType === 'feat' && card.type !== 'feat') return false;
        if (state.selectedType === 'event' && card.type !== 'event') return false;
        if (state.selectedType === 'role' && card.type !== 'role') return false;
      }

      if (state.selectedSuit !== 'all') {
        if (!card.suit || !card.suit.includes(state.selectedSuit)) return false;
      }

      if (state.searchQuery.trim()) {
        const q = state.searchQuery.toLowerCase();
        const text = `${card.name} ${card.nameEn || ''} ${card.effect || ''} ${card.effectEn || ''} ${card.expansionName} ${card.typeLabel} ${(card.tags || []).join(' ')}`.toLowerCase();
        if (!text.includes(q)) return false;
      }

      return true;
    }).sort((a, b) => {
      if (state.sortBy === 'name-asc') {
        const nameA = isEn ? (a.nameEn || a.name) : a.name;
        const nameB = isEn ? (b.nameEn || b.name) : b.name;
        return nameA.localeCompare(nameB, isEn ? 'en' : 'cs');
      }
      if (state.sortBy === 'name-desc') {
        const nameA = isEn ? (a.nameEn || a.name) : a.name;
        const nameB = isEn ? (b.nameEn || b.name) : b.name;
        return nameB.localeCompare(nameA, isEn ? 'en' : 'cs');
      }
      if (state.sortBy === 'expansion') return a.expansionName.localeCompare(b.expansionName, 'cs');
      if (state.sortBy === 'type') return a.typeLabel.localeCompare(b.typeLabel, 'cs');
      return 0;
    });
  }

  // =========================================================================
  // RENDER CARDS GRID (Pure Text, Color Borders, No English under Czech)
  // =========================================================================
  function renderCards() {
    if (!els.cardsGrid) return;
    const cards = getFilteredCards();
    const isEn = state.lang === 'en';
    const t = I18N[state.lang] || I18N.cs;
    
    if (els.resultsCount) {
      els.resultsCount.textContent = t.showingResults(cards.length, window.BANG_CARDS.length);
    }

    if (cards.length === 0) {
      els.cardsGrid.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 3rem 1rem; color: var(--text-muted);">
          <div style="font-size: 3rem; margin-bottom: 0.5rem;">🌵</div>
          <h3>${t.noResultsTitle}</h3>
          <p>${t.noResultsText}</p>
        </div>
      `;
      return;
    }

    els.cardsGrid.innerHTML = cards.map(card => {
      let borderClass = 'card-brown';
      if (card.type === 'blue') borderClass = 'card-blue';
      else if (card.type === 'green') borderClass = 'card-green';
      else if (card.type === 'orange') borderClass = 'card-orange';
      else if (card.type === 'black') borderClass = 'card-black';
      else if (card.type === 'brown-equipment') borderClass = 'card-gold';
      else if (card.type === 'character') borderClass = 'card-character';
      else if (card.type === 'legend-character') borderClass = 'card-legend';
      else if (card.type === 'railcar') borderClass = 'card-train';
      else if (card.type === 'station') borderClass = 'card-station';
      else if (card.type === 'feat') borderClass = 'card-feat';
      else if (card.type === 'event') borderClass = 'card-event';

      const isRed = card.suit === '♥' || card.suit === '♦';
      const suitClass = isRed ? 'suit-red' : 'suit-black';

      const cardTitle = isEn ? (card.nameEn || card.name) : card.name;
      const cardBadge = isEn ? (card.expansionNameEn || EXPANSIONS_EN[card.expansion] || card.expansionName) : card.expansionName;
      const cardTypeLabel = isEn ? (card.typeLabelEn || TYPES_EN[card.type] || card.typeLabel) : card.typeLabel;
      const cardEffect = isEn ? (card.effectEn || card.effect) : card.effect;
      const cardTiming = isEn ? (card.timingEn || card.timing) : card.timing;
      const cardCost = isEn ? (card.costEn || card.cost) : card.cost;

      const metas = [];
      if (card.copies) metas.push(`<span class="card-meta-item meta-copies">${card.copies}× ${t.copiesInDeck}</span>`);
      if (card.range) metas.push(`<span class="card-meta-item">${t.rangeLabel}: ${card.range}</span>`);
      if (cardCost) metas.push(`<span class="card-meta-item meta-cost">${cardCost}</span>`);
      if (card.lives) metas.push(`<span class="card-meta-item" style="color: #b71c1c; font-weight: 700;">❤️ ${card.lives} ${t.livesLabel}</span>`);
      if (cardTiming) metas.push(`<span class="card-meta-item meta-timing">${cardTiming}</span>`);

      return `
        <article class="bang-card ${borderClass}" data-id="${card.id}" tabindex="0" role="button" aria-label="Detail ${cardTitle}">
          <div class="card-top-bar">
            <span class="card-badge">${cardBadge}</span>
            ${card.suit ? `<span class="card-suit-value ${suitClass}">${card.suit} ${card.values || ''}</span>` : ''}
          </div>
          <div class="card-body">
            <div class="card-title-group">
              <h3 class="card-title">${cardTitle}</h3>
            </div>
            <div class="card-effect-box">
              ${cardEffect}
            </div>
            <div class="card-meta-list">
              <span class="card-meta-item" style="font-weight: 700;">${cardTypeLabel}</span>
              ${metas.join('')}
            </div>
          </div>
        </article>
      `;
    }).join('');

    els.cardsGrid.querySelectorAll('.bang-card').forEach(el => {
      el.addEventListener('click', () => openCardModal(el.dataset.id));
      el.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          openCardModal(el.dataset.id);
        }
      });
    });
  }

  // =========================================================================
  // OPEN CARD DETAIL MODAL
  // =========================================================================
  function openCardModal(cardId) {
    const card = window.BANG_CARDS.find(c => c.id === cardId);
    if (!card) return;
    state.selectedCard = card;

    const isEn = state.lang === 'en';
    const t = I18N[state.lang] || I18N.cs;

    const cardTitle = isEn ? (card.nameEn || card.name) : card.name;
    const cardBadge = isEn ? (card.expansionNameEn || EXPANSIONS_EN[card.expansion] || card.expansionName) : card.expansionName;
    const cardTypeLabel = isEn ? (card.typeLabelEn || TYPES_EN[card.type] || card.typeLabel) : card.typeLabel;
    const cardEffect = isEn ? (card.effectEn || card.effect) : card.effect;
    const cardTiming = isEn ? (card.timingEn || card.timing) : card.timing;
    const cardCost = isEn ? (card.costEn || card.cost) : card.cost;
    const cardRulings = isEn && card.rulingsEn && card.rulingsEn.length > 0 ? card.rulingsEn : card.rulings;

    const rulingsHtml = (cardRulings && cardRulings.length > 0)
      ? `
        <div style="margin-top: 1.25rem; border-top: 2px solid var(--border-color); padding-top: 1rem;">
          <h4 style="color: var(--color-brown); margin-bottom: 0.6rem; display: flex; align-items: center; gap: 0.4rem; font-size: 1.1rem;">
            <span>⚖️</span> ${t.rulingsHeader}
          </h4>
          <ul style="padding-left: 1.25rem; font-size: 0.96rem; line-height: 1.6;">
            ${cardRulings.map(r => `<li style="margin-bottom: 0.5rem;">${r}</li>`).join('')}
          </ul>
        </div>
      `
      : '';

    const tagsHtml = (card.tags && card.tags.length > 0)
      ? `
        <div style="display: flex; flex-wrap: wrap; gap: 0.4rem; margin-top: 1.25rem;">
          ${card.tags.map(tag => `<span class="card-meta-item" style="font-size: 0.78rem;">#${tag}</span>`).join('')}
        </div>
      `
      : '';

    els.modalBody.innerHTML = `
      <div style="border-bottom: 2px solid var(--border-color); padding-bottom: 0.85rem; margin-bottom: 1.2rem;">
        <span class="card-badge" style="font-size: 0.85rem; margin-bottom: 0.4rem; display: inline-block;">${cardBadge} • ${cardTypeLabel}</span>
        <h2 style="font-size: 2rem; font-family: 'Georgia', serif; color: var(--text-main); line-height: 1.2;">${cardTitle}</h2>
      </div>

      <div style="background: var(--bg-surface); padding: 1.15rem; border-radius: 8px; margin-bottom: 1.25rem; border-left: 4px solid var(--color-brown);">
        <div style="font-weight: 700; margin-bottom: 0.4rem; color: var(--color-brown); text-transform: uppercase; font-size: 0.82rem; letter-spacing: 0.5px;">${t.effectHeader}</div>
        <div style="font-size: 1.1rem; line-height: 1.6;">${cardEffect}</div>
      </div>

      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 0.75rem; font-size: 0.9rem; margin-bottom: 1rem;">
        ${cardTiming ? `<div style="background: var(--bg-card); border: 1px solid var(--border-color); padding: 0.65rem; border-radius: 6px;"><strong>${t.timingLabel}:</strong><br>${cardTiming}</div>` : ''}
        ${cardCost ? `<div style="background: var(--bg-card); border: 1px solid var(--border-color); padding: 0.65rem; border-radius: 6px;"><strong>${t.costLabel}:</strong><br>${cardCost}</div>` : ''}
        ${card.range ? `<div style="background: var(--bg-card); border: 1px solid var(--border-color); padding: 0.65rem; border-radius: 6px;"><strong>${t.rangeLabel}:</strong><br>${card.range}</div>` : ''}
        ${card.copies ? `<div style="background: var(--bg-card); border: 1px solid var(--border-color); padding: 0.65rem; border-radius: 6px;"><strong>${t.copiesInDeck}:</strong><br>${card.copies}×</div>` : ''}
      </div>

      ${rulingsHtml}
      ${tagsHtml}
    `;

    els.cardModal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeCardModal() {
    els.cardModal.classList.remove('active');
    document.body.style.overflow = '';
    state.selectedCard = null;
  }

  // =========================================================================
  // RENDER RULES
  // =========================================================================
  function renderRules() {
    if (!els.rulesContentTarget) return;
    const isEn = state.lang === 'en';
    const rules = (isEn && window.BANG_RULES_EN) ? window.BANG_RULES_EN : (window.BANG_RULES || []);

    if (els.rulesTocHeader) {
      els.rulesTocHeader.textContent = isEn ? 'Table of Contents' : 'Obsah pravidel';
    }

    if (els.rulesTocTarget) {
      els.rulesTocTarget.innerHTML = rules.map((sec, idx) => `
        <li class="rules-toc-item">
          <a href="#${sec.id}" class="rules-toc-link ${idx === 0 ? 'active' : ''}">${sec.title}</a>
        </li>
      `).join('');

      els.rulesTocTarget.querySelectorAll('.rules-toc-link').forEach(link => {
        link.addEventListener('click', (e) => {
          e.preventDefault();
          const targetId = link.getAttribute('href').replace('#', '');
          const targetEl = document.getElementById(targetId);
          if (targetEl) {
            targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
          els.rulesTocTarget.querySelectorAll('.rules-toc-link').forEach(l => l.classList.remove('active'));
          link.classList.add('active');
          link.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
        });
      });
    }

    els.rulesContentTarget.innerHTML = rules.map(sec => `
      <section id="${sec.id}" class="rules-article">
        ${sec.content}
        <div class="rules-back-to-toc">
          <button type="button" class="btn-back-to-toc">
            <span>↑</span> <span>${isEn ? 'Back to Table of Contents' : 'Zpět na obsah pravidel'}</span>
          </button>
        </div>
      </section>
    `).join('');

    els.rulesContentTarget.querySelectorAll('.btn-back-to-toc').forEach(btn => {
      btn.addEventListener('click', () => {
        const tocEl = document.querySelector('.rules-toc') || els.rulesTocTarget;
        if (tocEl) {
          tocEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
    });
  }

  // =========================================================================
  // RENDER FAQ (CONFLICT SITUATIONS)
  // =========================================================================
  function renderFaqCategories() {
    if (!els.faqCatContainer) return;
    const isEn = state.lang === 'en';

    els.faqCatContainer.innerHTML = FAQ_CATEGORIES.map(cat => `
      <button class="faq-cat-btn ${state.activeFaqCategory === cat.id ? 'active' : ''}" data-cat-id="${cat.id}">
        ${isEn ? cat.en : cat.cs}
      </button>
    `).join('');

    els.faqCatContainer.querySelectorAll('.faq-cat-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        els.faqCatContainer.querySelectorAll('.faq-cat-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        state.activeFaqCategory = btn.dataset.catId;
        renderFaq();
      });
    });
  }

  function renderFaq() {
    if (!els.faqList) return;
    const isEn = state.lang === 'en';
    const t = I18N[state.lang] || I18N.cs;
    const faqData = (isEn && window.BANG_FAQ_EN) ? window.BANG_FAQ_EN : (window.BANG_FAQ || []);

    const selectedCatObj = FAQ_CATEGORIES.find(c => c.id === state.activeFaqCategory);

    const filtered = faqData.filter(item => {
      if (state.activeFaqCategory !== 'all' && selectedCatObj) {
        const targetCat = isEn ? selectedCatObj.enCat : selectedCatObj.csCat;
        if (item.category !== targetCat) return false;
      }
      if (state.faqQuery.trim()) {
        const q = state.faqQuery.toLowerCase();
        const text = `${item.question} ${item.answerHtml} ${(item.tags || []).join(' ')} ${item.category}`.toLowerCase();
        if (!text.includes(q)) return false;
      }
      return true;
    });

    if (filtered.length === 0) {
      els.faqList.innerHTML = `
        <div style="text-align: center; padding: 3rem 1rem; color: var(--text-muted);">
          <h3>${t.faqNoResults}</h3>
          <p>${t.faqNoResultsDesc}</p>
        </div>
      `;
      return;
    }

    els.faqList.innerHTML = filtered.map(item => `
      <details class="bang-disclosure" name="bang-faq" id="${item.id}">
        <summary>
          <span>${item.question}</span>
          <span style="font-size: 0.8rem; font-weight: normal; color: var(--text-muted); background: var(--bg-surface); padding: 0.25rem 0.55rem; border-radius: 4px; border: 1px solid var(--border-color); flex-shrink: 0;">
            ${item.category}
          </span>
        </summary>
        <div class="disclosure-body">
          ${item.answerHtml}
          <div style="display: flex; flex-wrap: wrap; gap: 0.35rem; margin-top: 1rem; border-top: 1px dashed var(--border-color); padding-top: 0.6rem;">
            ${(item.tags || []).map(tag => `<span class="card-meta-item" style="font-size: 0.75rem;">#${tag}</span>`).join('')}
          </div>
        </div>
      </details>
    `).join('');
  }

  // =========================================================================
  // RENDER TURN GUIDE & QUICK HELPER (BILINGUAL)
  // =========================================================================
  function renderTurnGuide() {
    if (!els.tahHraceTarget) return;
    const isEn = state.lang === 'en';
    els.tahHraceTarget.innerHTML = isEn ? window.BANG_TURN_HTML_EN : window.BANG_TURN_HTML_CS;
  }

  function renderQuickHelper() {
    if (!els.pomocnikTarget) return;
    const isEn = state.lang === 'en';
    els.pomocnikTarget.innerHTML = isEn ? window.BANG_HELPER_HTML_EN : window.BANG_HELPER_HTML_CS;
  }

  // =========================================================================
  // EVENTS INITIALIZATION
  // =========================================================================
  function initEvents() {
    els.tabs.forEach(tab => {
      tab.addEventListener('click', () => setTab(tab.dataset.tab));
    });

    if (els.themeToggle) {
      els.themeToggle.addEventListener('click', toggleTheme);
    }

    if (els.langBtnCs) {
      els.langBtnCs.addEventListener('click', () => setLanguage('cs'));
    }
    if (els.langBtnEn) {
      els.langBtnEn.addEventListener('click', () => setLanguage('en'));
    }

    if (els.globalSearch) {
      els.globalSearch.addEventListener('input', (e) => {
        state.searchQuery = e.target.value;
        if (state.activeTab !== 'katalog' && state.activeTab !== 'faq') {
          setTab('katalog');
        }
        renderCards();
      });
    }

    if (els.filterExpansion) {
      els.filterExpansion.addEventListener('change', (e) => {
        state.selectedExpansion = e.target.value;
        renderCards();
      });
    }

    if (els.filterType) {
      els.filterType.addEventListener('change', (e) => {
        state.selectedType = e.target.value;
        renderCards();
      });
    }

    if (els.filterSuit) {
      els.filterSuit.addEventListener('change', (e) => {
        state.selectedSuit = e.target.value;
        renderCards();
      });
    }

    if (els.sortCards) {
      els.sortCards.addEventListener('change', (e) => {
        state.sortBy = e.target.value;
        renderCards();
      });
    }

    if (els.btnResetFilters) {
      els.btnResetFilters.addEventListener('click', () => {
        state.searchQuery = '';
        state.selectedExpansion = 'all';
        state.selectedType = 'all';
        state.selectedSuit = 'all';
        state.sortBy = 'name-asc';

        if (els.globalSearch) els.globalSearch.value = '';
        if (els.filterExpansion) els.filterExpansion.value = 'all';
        if (els.filterType) els.filterType.value = 'all';
        if (els.filterSuit) els.filterSuit.value = 'all';
        if (els.sortCards) els.sortCards.value = 'name-asc';

        renderCards();
      });
    }

    if (els.faqSearch) {
      els.faqSearch.addEventListener('input', (e) => {
        state.faqQuery = e.target.value;
        renderFaq();
      });
    }

    if (els.modalClose) {
      els.modalClose.addEventListener('click', closeCardModal);
    }
    if (els.cardModal) {
      els.cardModal.addEventListener('click', (e) => {
        if (e.target === els.cardModal) closeCardModal();
      });
    }

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        closeCardModal();
      } else if (e.key === '/' && document.activeElement !== els.globalSearch && document.activeElement !== els.faqSearch) {
        e.preventDefault();
        if (els.globalSearch) {
          els.globalSearch.focus();
          els.globalSearch.select();
        }
      }
    });

    window.addEventListener('hashchange', initRouting);
  }

  // DOMContentLoaded
  document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    initEvents();
    setLanguage(state.lang);
    initRouting();
  });
})();
