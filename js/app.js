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
    selectedQuickTag: 'all',
    sortBy: 'name-asc',
    activeRulesCategory: 'all',
    activeFaqCategory: 'all',
    faqQuery: '',
    selectedCard: null,
    activeTool: 'calc',
    pinnedCharacter: JSON.parse(localStorage.getItem('bang_pinned_char') || 'null'),
    soundEnabled: localStorage.getItem('bang_sound') !== 'false'
  };

  // DOM Elements
  const els = {
    tabs: document.querySelectorAll('.nav-tab'),
    panes: document.querySelectorAll('.tab-pane'),
    globalSearch: document.getElementById('global-search'),
    themeToggle: document.getElementById('theme-toggle'),
    soundToggle: document.getElementById('sound-toggle'),
    soundIcon: document.getElementById('sound-icon'),
    pinnedCharacterWidget: document.getElementById('pinned-character-widget'),
    catalogQuickTags: document.getElementById('catalog-quick-tags'),
    quickTagLabel: document.getElementById('quick-tag-label'),
    navTextNastroje: document.getElementById('nav-text-nastroje'),
    toolsSubnav: document.getElementById('tools-subnav'),
    toolsContentArea: document.getElementById('tools-content-area'),
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
    filterSidebar: document.getElementById('filter-sidebar'),
    filterSidebarToggle: document.getElementById('filter-sidebar-toggle'),
    activeFiltersBadge: document.getElementById('active-filters-count'),
    faqMainTitle: document.getElementById('faq-main-title'),
    faqMainLead: document.getElementById('faq-main-lead'),
    faqSearch: document.getElementById('faq-search'),
    faqList: document.getElementById('faq-list'),
    faqCatContainer: document.getElementById('faq-categories-container'),
    cardModal: document.getElementById('card-modal'),
    modalBody: document.getElementById('modal-body'),
    modalClose: document.getElementById('modal-close'),
    rulesCategoriesContainer: document.getElementById('rules-categories-container'),
    rulesTocHeader: document.getElementById('rules-toc-header'),
    rulesContentTarget: document.getElementById('rules-content-target'),
    rulesTocTarget: document.getElementById('rules-toc-target'),
    tahHraceTarget: document.getElementById('tah-hrace-target'),
    pomocnikTarget: document.getElementById('pomocnik-target'),
    footerText1: document.getElementById('footer-text-1'),
    footerText2: document.getElementById('footer-text-2'),
    footerText3: document.getElementById('footer-text-3'),
    footerRepoLink: document.getElementById('footer-repo-link'),
    footerNavLinks: document.getElementById('footer-nav-links'),
    btnScrollTop: document.getElementById('btn-scroll-top'),
    scrollTopText: document.getElementById('scroll-top-text')
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
      navNastroje: "Herní nástroje",
      quickTagsLabel: "⚡ Tagy:",
      pinCharacter: "⭐ Připnout jako moji postavu",
      unpinCharacter: "✕ Odepnout postavu",
      compareCard: "⚖️ Porovnat s jinou kartou",
      filterTitle: "Filtry",
      filterReset: "Resetovat",
      filterExpansion: "Rozšíření",
      filterType: "Typ",
      filterSuit: "Barva",
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
      footerNav: '<a href="#pravidla">Pravidla</a> • <a href="#faq">FAQ</a> • <a href="#katalog">Karty</a>',
      scrollTopText: "Nahoru",
      scrollTopTitle: "Zpět nahoru"
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
      navNastroje: "Game Tools",
      quickTagsLabel: "⚡ Tags:",
      pinCharacter: "⭐ Pin as My Character",
      unpinCharacter: "✕ Unpin Character",
      compareCard: "⚖️ Compare with Another Card",
      filterTitle: "Filters",
      filterReset: "Reset",
      filterExpansion: "Expansion",
      filterType: "Type",
      filterSuit: "Suit",
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
      footerNav: '<a href="#pravidla">Rules</a> • <a href="#faq">FAQ</a> • <a href="#katalog">Cards</a>',
      scrollTopText: "Top",
      scrollTopTitle: "Scroll to top"
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
    if (els.globalSearch) {
      const isMobile = window.innerWidth <= 640;
      els.globalSearch.placeholder = isMobile
        ? (isEn ? "Search card, character, rule..." : "Hledat kartu, postavu, pravidlo...")
        : t.searchPlaceholder;
    }
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
    if (els.quickTagLabel) els.quickTagLabel.textContent = t.quickTagsLabel;
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

    // Scroll to Top Button
    if (els.btnScrollTop) {
      els.btnScrollTop.title = t.scrollTopTitle || 'Zpět nahoru';
      els.btnScrollTop.setAttribute('aria-label', t.scrollTopTitle || 'Zpět nahoru');
    }
    if (els.scrollTopText) {
      els.scrollTopText.textContent = t.scrollTopText || (isEn ? 'Top' : 'Nahoru');
    }

    // Render all components
    renderCards();
    renderRulesCategories();
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

    if (tabId === 'nastroje') {
      renderTools();
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function initRouting() {
    const hash = window.location.hash.replace('#', '');
    if (hash && ['katalog', 'pravidla', 'faq', 'tah-hrace', 'pomocnik', 'nastroje'].includes(hash)) {
      setTab(hash);
    }
  }

  // =========================================================================
  // NORMALIZATION & FILTER LOGIC (Diacritics-insensitive search)
  // =========================================================================
  function normalizeString(str) {
    if (!str) return '';
    return str
      .toString()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .toLowerCase();
  }

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

      // Quick Tag Filter
      if (state.selectedQuickTag && state.selectedQuickTag !== 'all') {
        const tag = state.selectedQuickTag;
        const normName = normalizeString(card.name + ' ' + (card.nameEn || ''));
        const normEffect = normalizeString(card.effect + ' ' + (card.effectEn || ''));
        const tags = (card.tags || []).map(t => normalizeString(t));

        if (tag === 'zbrane') {
          const isWeapon = card.range || (card.type === 'blue' && (normName.includes('colt') || normName.includes('volcanic') || normName.includes('schofield') || normName.includes('remington') || normName.includes('carabine') || normName.includes('winchester') || tags.includes('zbran')));
          if (!isWeapon) return false;
        } else if (tag === 'leceni') {
          const isHeal = normEffect.includes('zivot') || normEffect.includes('vylec') || normEffect.includes('heal') || normEffect.includes('life') || normName.includes('pivo') || normName.includes('beer') || normName.includes('saloon') || normName.includes('tequila') || normName.includes('whisky');
          if (!isHeal) return false;
        } else if (tag === 'obrana') {
          const isDef = normName.includes('vedle') || normName.includes('missed') || normName.includes('barel') || normName.includes('barrel') || normName.includes('mustang') || normName.includes('skrys') || normName.includes('hideout') || normName.includes('sombrero') || normName.includes('bible') || normName.includes('zelezny') || normName.includes('iron') || tags.includes('obrana');
          if (!isDef) return false;
        } else if (tag === 'vzdalenost') {
          const isDist = normEffect.includes('vzdalenost') || normEffect.includes('distance') || normName.includes('mustang') || normName.includes('skrys') || normName.includes('hledi') || normName.includes('appaloosa') || normName.includes('dalekohled') || normName.includes('scope');
          if (!isDist) return false;
        } else if (tag === 'snimani') {
          const isDraw = normEffect.includes('sejm') || normEffect.includes('snime') || normEffect.includes('draw!') || normName.includes('barel') || normName.includes('vezeni') || normName.includes('dynamit') || normName.includes('jail');
          if (!isDraw) return false;
        } else if (tag === 'zelene') {
          if (card.type !== 'green') return false;
        } else if (tag === 'oranzove') {
          if (card.type !== 'orange') return false;
        } else if (tag === 'postavy') {
          if (!['character', 'legend-character'].includes(card.type)) return false;
        } else if (tag === 'udalosti') {
          if (card.type !== 'event') return false;
        }
      }

      if (state.searchQuery.trim()) {
        const qNorm = normalizeString(state.searchQuery);
        const tokens = qNorm.split(/\s+/).filter(Boolean);
        const rulingsText = Array.isArray(card.rulings) ? card.rulings.join(' ') : (card.rulings || '');
        const rulingsEnText = Array.isArray(card.rulingsEn) ? card.rulingsEn.join(' ') : (card.rulingsEn || '');
        const fullCardText = `${card.name} ${card.nameEn || ''} ${card.effect || ''} ${card.effectEn || ''} ${card.expansionName} ${card.typeLabel} ${(card.tags || []).join(' ')} ${rulingsText} ${rulingsEnText} ${card.values || ''}`;
        const cardTextNorm = normalizeString(fullCardText);

        const matches = tokens.every(token => cardTextNorm.includes(token));
        if (!matches) return false;
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

  function updateActiveFiltersBadge() {
    if (!els.activeFiltersBadge) return;
    let count = 0;
    if (state.selectedExpansion !== 'all') count++;
    if (state.selectedType !== 'all') count++;
    if (state.selectedSuit !== 'all') count++;
    if (state.selectedQuickTag !== 'all') count++;
    if (state.sortBy !== 'name-asc') count++;

    if (count > 0) {
      els.activeFiltersBadge.textContent = count;
      els.activeFiltersBadge.style.display = 'inline-block';
    } else {
      els.activeFiltersBadge.style.display = 'none';
    }
  }

  // =========================================================================
  // RENDER CARDS GRID (Pure Text, Color Borders, No English under Czech)
  // =========================================================================
  function renderCards() {
    updateActiveFiltersBadge();
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

      let suitHtml = '';
      if (card.suit) {
        let cleanSuit = card.suit === 'mixed' ? '♠ ♥ ♦ ♣' : card.suit;
        let formatted = cleanSuit
          .replace(/[♥♦]/g, '<span class="suit-red">$&</span>')
          .replace(/[♠♣]/g, '<span class="suit-black">$&</span>');
        let valText = (card.values && !card.values.includes('Kříže')) ? ` ${card.values}` : '';
        suitHtml = `<span class="card-suit-value">${formatted}${valText}</span>`;
      }

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

      const imageThumbHtml = card.image
        ? `<div class="card-thumb-wrap"><img src="${card.image}" alt="${cardTitle}" class="card-thumb-img" loading="lazy" decoding="async" onerror="this.parentElement.style.display='none'"></div>`
        : '';

      return `
        <article class="bang-card ${borderClass}" data-id="${card.id}" tabindex="0" role="button" aria-label="Detail ${cardTitle}">
          <div class="card-top-bar">
            <span class="card-badge">${cardBadge}</span>
            ${suitHtml}
          </div>
          ${imageThumbHtml}
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

    let modalSuitHtml = '';
    if (card.suit) {
      let cleanSuit = card.suit === 'mixed' ? '♠ ♥ ♦ ♣' : card.suit;
      let formatted = cleanSuit
        .replace(/[♥♦]/g, '<span class="suit-red">$&</span>')
        .replace(/[♠♣]/g, '<span class="suit-black">$&</span>');
      let valText = (card.values && !card.values.includes('Kříže')) ? ` ${card.values}` : '';
      modalSuitHtml = `<span class="card-suit-value" style="font-size: 1.15rem; font-weight: 700;">${formatted}${valText}</span>`;
    }

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

    const imageColHtml = card.image
      ? `
        <div class="card-modal-img-col">
          <div class="card-modal-img-wrap">
            <img src="${card.image}" alt="${cardTitle}" class="card-modal-img" fetchpriority="high" onerror="this.parentElement.parentElement.style.display='none'">
          </div>
        </div>
      `
      : '';

    const isCharacter = ['character', 'legend-character'].includes(card.type);
    const isPinned = state.pinnedCharacter && state.pinnedCharacter.id === card.id;

    const modalActionsHtml = `
      <div style="display: flex; flex-wrap: wrap; gap: 0.65rem; margin-top: 1.5rem; border-top: 2px solid var(--border-color); padding-top: 1.25rem;">
        ${isCharacter ? `
          <button type="button" id="btn-pin-character" class="btn-reset-filters" style="display: inline-flex; align-items: center; gap: 0.4rem; font-weight: 700; ${isPinned ? 'background: #c0392b; border-color: #c0392b; color: #fff;' : ''}">
            ${isPinned ? t.unpinCharacter : t.pinCharacter}
          </button>
        ` : ''}
        <button type="button" id="btn-compare-card" class="btn-reset-filters" style="display: inline-flex; align-items: center; gap: 0.4rem; font-weight: 700;">
          ${t.compareCard}
        </button>
        <button type="button" id="btn-modal-close-action" class="btn-reset-filters" style="display: inline-flex; align-items: center; gap: 0.4rem; font-weight: 700; margin-left: auto;">
          ✕ ${isEn ? 'Close' : 'Zavřít'}
        </button>
      </div>
    `;

    els.modalBody.innerHTML = `
      <div class="card-modal-layout ${card.image ? 'has-image' : 'no-image'}">
        ${imageColHtml}
        <div class="card-modal-info-col">
          <div class="card-modal-header">
            <div class="card-modal-header-top">
              <span class="card-badge" style="font-size: 0.85rem; display: inline-block;">${cardBadge} • ${cardTypeLabel}</span>
              ${modalSuitHtml}
            </div>
            <h2 class="card-modal-title">${cardTitle}</h2>
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
          ${modalActionsHtml}
        </div>
      </div>
    `;

    els.cardModal.classList.toggle('has-image', !!card.image);
    els.cardModal.classList.add('active');
    document.body.style.overflow = 'hidden';

    const modalContentEl = els.cardModal.querySelector('.modal-content');
    if (modalContentEl) {
      modalContentEl.scrollTop = 0;
    }

    const pinBtn = document.getElementById('btn-pin-character');
    if (pinBtn) {
      pinBtn.addEventListener('click', () => {
        const currentlyPinned = state.pinnedCharacter && state.pinnedCharacter.id === card.id;
        if (currentlyPinned) {
          state.pinnedCharacter = null;
          localStorage.removeItem('bang_pinned_char');
          pinBtn.innerHTML = t.pinCharacter;
          pinBtn.style.background = '';
          pinBtn.style.borderColor = '';
          pinBtn.style.color = '';
        } else {
          state.pinnedCharacter = {
            id: card.id,
            name: card.name,
            nameEn: card.nameEn,
            image: card.image,
            lives: card.lives || 4,
            maxLives: card.lives || 4
          };
          localStorage.setItem('bang_pinned_char', JSON.stringify(state.pinnedCharacter));
          pinBtn.innerHTML = t.unpinCharacter;
          pinBtn.style.background = '#c0392b';
          pinBtn.style.borderColor = '#c0392b';
          pinBtn.style.color = '#fff';
        }
        renderPinnedCharacterWidget();
      });
    }

    const compBtn = document.getElementById('btn-compare-card');
    if (compBtn) {
      compBtn.addEventListener('click', () => {
        openCardComparator(card);
      });
    }

    const closeActionBtn = document.getElementById('btn-modal-close-action');
    if (closeActionBtn) {
      closeActionBtn.addEventListener('click', closeCardModal);
    }
  }

  function closeCardModal() {
    els.cardModal.classList.remove('active');
    els.cardModal.classList.remove('has-image');
    document.body.style.overflow = '';
    state.selectedCard = null;
  }

  // =========================================================================
  // PINNED CHARACTER WIDGET
  // =========================================================================
  function renderPinnedCharacterWidget() {
    if (!els.pinnedCharacterWidget) return;
    const char = state.pinnedCharacter;
    if (!char) {
      els.pinnedCharacterWidget.style.display = 'none';
      els.pinnedCharacterWidget.innerHTML = '';
      return;
    }
    const isEn = state.lang === 'en';
    const charName = isEn ? (char.nameEn || char.name) : char.name;
    const thumbHtml = char.image ? `<img src="${char.image}" alt="${charName}" class="pinned-char-thumb">` : '🤠';

    els.pinnedCharacterWidget.style.display = 'flex';
    els.pinnedCharacterWidget.innerHTML = `
      <div class="pinned-char-left" id="pinned-char-click" title="${isEn ? 'Open character detail' : 'Otevřít detail postavy'}">
        ${thumbHtml}
        <div>
          <div style="font-size: 0.72rem; text-transform: uppercase; color: var(--text-muted); font-weight: 700;">${isEn ? 'My Character' : 'Moje postava'}</div>
          <div class="pinned-char-title">${charName}</div>
        </div>
      </div>
      <div style="display: flex; align-items: center; gap: 0.75rem;">
        <div class="pinned-char-lives">
          <button type="button" class="pinned-btn-life" id="btn-pinned-minus" aria-label="Ubrat život">−</button>
          <span style="font-weight: 800; color: #b71c1c;">❤️ ${char.lives} / ${char.maxLives}</span>
          <button type="button" class="pinned-btn-life" id="btn-pinned-plus" aria-label="Přidat život">+</button>
        </div>
        <button type="button" class="pinned-btn-unpin" id="btn-pinned-unpin" title="${isEn ? 'Unpin' : 'Odepnout'}">✕</button>
      </div>
    `;

    const clickArea = document.getElementById('pinned-char-click');
    if (clickArea) clickArea.addEventListener('click', () => openCardModal(char.id));

    const minusBtn = document.getElementById('btn-pinned-minus');
    if (minusBtn) {
      minusBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        if (char.lives > 0) {
          char.lives--;
          localStorage.setItem('bang_pinned_char', JSON.stringify(char));
          renderPinnedCharacterWidget();
        }
      });
    }

    const plusBtn = document.getElementById('btn-pinned-plus');
    if (plusBtn) {
      plusBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        if (char.lives < char.maxLives + 2) {
          char.lives++;
          localStorage.setItem('bang_pinned_char', JSON.stringify(char));
          renderPinnedCharacterWidget();
        }
      });
    }

    const unpinBtn = document.getElementById('btn-pinned-unpin');
    if (unpinBtn) {
      unpinBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        state.pinnedCharacter = null;
        localStorage.removeItem('bang_pinned_char');
        renderPinnedCharacterWidget();
      });
    }
  }

  // =========================================================================
  // CARD COMPARATOR
  // =========================================================================
  function openCardComparator(card1, card2 = null) {
    if (!card2) {
      card2 = window.BANG_CARDS.find(c => c.id !== card1.id && c.type === card1.type) || window.BANG_CARDS.find(c => c.id !== card1.id);
    }
    const isEn = state.lang === 'en';
    const t = I18N[state.lang] || I18N.cs;

    const renderCardCol = (c) => {
      if (!c) return '';
      const title = isEn ? (c.nameEn || c.name) : c.name;
      const badge = isEn ? (c.expansionNameEn || EXPANSIONS_EN[c.expansion] || c.expansionName) : c.expansionName;
      const typeLabel = isEn ? (c.typeLabelEn || TYPES_EN[c.type] || c.typeLabel) : c.typeLabel;
      const effect = isEn ? (c.effectEn || c.effect) : c.effect;
      const rulings = isEn && c.rulingsEn && c.rulingsEn.length > 0 ? c.rulingsEn : c.rulings;

      return `
        <div style="background: var(--bg-surface); border: 1.5px solid var(--border-color); border-radius: var(--radius-md); padding: 1.25rem;">
          <div style="text-align: center; margin-bottom: 1rem;">
            ${c.image ? `<img src="${c.image}" alt="${title}" style="max-height: 160px; object-fit: contain; border-radius: 6px; border: 1px solid var(--border-color); margin-bottom: 0.5rem;">` : ''}
            <div style="font-size: 0.8rem; color: var(--color-brown); font-weight: 700; text-transform: uppercase;">${badge} • ${typeLabel}</div>
            <h3 style="font-family: 'Georgia', serif; font-size: 1.4rem; color: var(--text-main); margin: 0.25rem 0;">${title}</h3>
            ${c.lives ? `<div style="color: #b71c1c; font-weight: 700;">❤️ ${c.lives} ${t.livesLabel}</div>` : ''}
            ${c.range ? `<div style="font-weight: 700; font-size: 0.9rem;">${t.rangeLabel}: ${c.range}</div>` : ''}
          </div>
          <div style="background: var(--bg-card); padding: 0.85rem; border-radius: 6px; border-left: 3px solid var(--color-brown); font-size: 0.95rem; line-height: 1.5; margin-bottom: 1rem;">
            ${effect}
          </div>
          ${(rulings && rulings.length > 0) ? `
            <div style="font-size: 0.85rem; line-height: 1.5; border-top: 1px dashed var(--border-color); padding-top: 0.75rem;">
              <strong style="color: var(--color-brown);">${t.rulingsHeader}</strong>
              <ul style="padding-left: 1.15rem; margin-top: 0.35rem;">
                ${rulings.map(r => `<li>${r}</li>`).join('')}
              </ul>
            </div>
          ` : ''}
        </div>
      `;
    };

    els.modalBody.innerHTML = `
      <div style="padding: 0.5rem;">
        <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 2px solid var(--border-color); padding-bottom: 0.85rem; margin-bottom: 1.25rem; flex-wrap: wrap; gap: 0.75rem; padding-right: 3.5rem;">
          <h2 style="font-family: 'Georgia', serif; font-size: 1.6rem; color: var(--color-brown); margin: 0;">
            ⚖️ ${isEn ? 'Card Comparison' : 'Porovnání karet'}
          </h2>
          <button type="button" class="btn-reset-filters" id="btn-back-to-single" style="font-weight: 700;">
            ← ${isEn ? 'Back to Card Detail' : 'Zpět na detail karty'}
          </button>
        </div>

        <div style="margin-bottom: 1.25rem; display: flex; align-items: center; gap: 0.75rem; flex-wrap: wrap;">
          <label for="comp-select-2" style="font-weight: 700; font-size: 0.92rem;">
            ${isEn ? 'Compare against:' : 'Porovnat s kartou:'}
          </label>
          <select id="comp-select-2" class="filter-select" style="max-width: 340px;">
            ${window.BANG_CARDS.map(c => `
              <option value="${c.id}" ${card2 && c.id === card2.id ? 'selected' : ''}>
                ${isEn ? (c.nameEn || c.name) : c.name} (${isEn ? (c.expansionNameEn || c.expansionName) : c.expansionName})
              </option>
            `).join('')}
          </select>
        </div>

        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1.25rem;">
          ${renderCardCol(card1)}
          ${renderCardCol(card2)}
        </div>
      </div>
    `;

    document.getElementById('btn-back-to-single').addEventListener('click', () => {
      openCardModal(card1.id);
    });

    document.getElementById('comp-select-2').addEventListener('change', (e) => {
      const nextCard2 = window.BANG_CARDS.find(c => c.id === e.target.value);
      if (nextCard2) {
        openCardComparator(card1, nextCard2);
      }
    });

    els.cardModal.classList.remove('has-image');
    els.cardModal.classList.add('active');
    document.body.style.overflow = 'hidden';

    const modalContentEl = els.cardModal.querySelector('.modal-content');
    if (modalContentEl) {
      modalContentEl.scrollTop = 0;
    }
  }

  // =========================================================================
  // SCROLL HELPERS (BULLETPROOF ACROSS ALL MOBILE BROWSERS & SAFARI)
  // =========================================================================
  function scrollToElement(targetEl, extraOffset = 14) {
    if (!targetEl) return;
    const header = document.querySelector('header.app-header');
    const headerHeight = header ? header.offsetHeight : 100;
    const rect = targetEl.getBoundingClientRect();
    const targetY = window.pageYOffset + rect.top - headerHeight - extraOffset;
    window.scrollTo({
      top: Math.max(0, targetY),
      behavior: 'smooth'
    });
  }

  function scrollToRulesToc() {
    const toc = document.querySelector('.rules-toc') || document.getElementById('rules-toc-header');
    if (toc) {
      scrollToElement(toc, 14);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  // =========================================================================
  // RULES CATEGORIES & RENDER RULES
  // =========================================================================
  const RULES_CATEGORIES = [
    { id: 'all', cs: '📚 Všechna pravidla', en: '📚 All Rules' },
    { id: 'base', cs: '🎯 Základní hra BANG!', en: '🎯 BANG! Base Game' },
    { id: 'dodge-city', cs: '🟢 Dodge City', en: '🟢 Dodge City' },
    { id: 'high-noon-fistful', cs: '☀️ Pravé poledne & Fistful', en: '☀️ High Noon & Fistful' },
    { id: 'gold-rush', cs: '🪙 Zlatá horečka', en: '🪙 Gold Rush' },
    { id: 'armed-dangerous', cs: '🟠 Ozbrojení a nebezpeční', en: '🟠 Armed & Dangerous' },
    { id: 'train-robbery', cs: '🚂 Velká vlaková loupež', en: '🚂 The Great Train Robbery' },
    { id: 'legends', cs: '🌟 Legendy', en: '🌟 Legends' },
    { id: 'valley-wildwest', cs: '💀 Údolí stínů & Divoký západ', en: '💀 Valley & Wild West' },
    { id: 'dynamite-box', cs: '🧨 Kompletní hra dohromady', en: '🧨 Complete Game' }
  ];

  function renderRulesCategories() {
    if (!els.rulesCategoriesContainer) return;
    const isEn = state.lang === 'en';

    els.rulesCategoriesContainer.innerHTML = RULES_CATEGORIES.map(cat => `
      <button class="rules-cat-btn ${state.activeRulesCategory === cat.id ? 'active' : ''}" data-cat-id="${cat.id}">
        ${isEn ? cat.en : cat.cs}
      </button>
    `).join('');

    els.rulesCategoriesContainer.querySelectorAll('.rules-cat-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        els.rulesCategoriesContainer.querySelectorAll('.rules-cat-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        state.activeRulesCategory = btn.dataset.catId;
        renderRules();
        scrollToRulesToc();
      });
    });
  }

  function renderRules() {
    if (!els.rulesContentTarget) return;
    const isEn = state.lang === 'en';
    const allRules = (isEn && window.BANG_RULES_EN) ? window.BANG_RULES_EN : (window.BANG_RULES || []);

    const rules = state.activeRulesCategory === 'all'
      ? allRules
      : allRules.filter(sec => sec.category === state.activeRulesCategory);

    if (els.rulesTocHeader) {
      const activeCat = RULES_CATEGORIES.find(c => c.id === state.activeRulesCategory);
      if (state.activeRulesCategory === 'all') {
        els.rulesTocHeader.textContent = isEn ? 'Table of Contents' : 'Obsah pravidel';
      } else {
        els.rulesTocHeader.textContent = isEn
          ? `Contents: ${activeCat ? activeCat.en : ''}`
          : `Obsah: ${activeCat ? activeCat.cs : ''}`;
      }
    }

    if (els.rulesTocTarget) {
      if (state.activeRulesCategory === 'all') {
        let lastCategory = null;
        let tocHtml = '';
        rules.forEach((sec, idx) => {
          if (sec.category !== lastCategory) {
            lastCategory = sec.category;
            const catObj = RULES_CATEGORIES.find(c => c.id === sec.category);
            const catName = isEn ? (catObj ? catObj.en : sec.categoryTitle) : (catObj ? catObj.cs : sec.categoryTitle);
            tocHtml += `<li class="rules-toc-group-header" role="presentation">${catName}</li>`;
          }
          tocHtml += `
            <li class="rules-toc-item">
              <a href="#${sec.id}" class="rules-toc-link ${idx === 0 ? 'active' : ''}">${sec.title}</a>
            </li>
          `;
        });
        els.rulesTocTarget.innerHTML = tocHtml;
      } else {
        els.rulesTocTarget.innerHTML = rules.map((sec, idx) => `
          <li class="rules-toc-item">
            <a href="#${sec.id}" class="rules-toc-link ${idx === 0 ? 'active' : ''}">${sec.title}</a>
          </li>
        `).join('');
      }

      els.rulesTocTarget.querySelectorAll('.rules-toc-link').forEach(link => {
        link.addEventListener('click', (e) => {
          const targetId = link.getAttribute('href').replace('#', '');
          const targetEl = document.getElementById(targetId);
          if (targetEl) {
            e.preventDefault();
            els.rulesTocTarget.querySelectorAll('.rules-toc-link').forEach(l => l.classList.remove('active'));
            link.classList.add('active');
            link.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
            scrollToElement(targetEl, 14);
          }
        });
      });
    }

    els.rulesContentTarget.innerHTML = rules.map(sec => `
      <section id="${sec.id}" class="rules-article">
        ${sec.content}
        <div class="rules-back-to-toc">
          <button type="button" class="btn-back-to-toc" data-action="back-to-toc">
            <span>↑</span> <span>${isEn ? 'Back to Table of Contents' : 'Zpět na obsah pravidel'}</span>
          </button>
        </div>
      </section>
    `).join('');

    // Attach back to TOC event listeners
    els.rulesContentTarget.querySelectorAll('.btn-back-to-toc').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        scrollToRulesToc();
      });
    });

    // Setup scrollspy observer for rule articles
    if (window.rulesSectionObserver) {
      window.rulesSectionObserver.disconnect();
    }
    if ('IntersectionObserver' in window && els.rulesContentTarget) {
      window.rulesSectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const secId = entry.target.id;
            if (els.rulesTocTarget) {
              const matchingLink = els.rulesTocTarget.querySelector(`a[href="#${secId}"]`);
              if (matchingLink) {
                els.rulesTocTarget.querySelectorAll('.rules-toc-link').forEach(l => l.classList.remove('active'));
                matchingLink.classList.add('active');
              }
            }
          }
        });
      }, {
        rootMargin: '-80px 0px -65% 0px',
        threshold: 0
      });

      els.rulesContentTarget.querySelectorAll('.rules-article').forEach(art => {
        window.rulesSectionObserver.observe(art);
      });
    }
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
        const qNorm = normalizeString(state.faqQuery);
        const tokens = qNorm.split(/\s+/).filter(Boolean);
        const plainAnswer = (item.answerHtml || '').replace(/<[^>]*>/g, ' ');
        const fullText = `${item.question} ${plainAnswer} ${(item.tags || []).join(' ')} ${item.category}`;
        const faqTextNorm = normalizeString(fullText);

        const matches = tokens.every(token => faqTextNorm.includes(token));
        if (!matches) return false;
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
  // TOOLS CONTROLLER & SUB-VIEWS (100% Client-Side, No Database)
  // =========================================================================
  const calcParams = {
    totalPlayers: 5,
    shooterIdx: 0,
    targetIdx: 2,
    mode: 'target',
    weaponId: 'colt',
    appaloosa: false,
    binoculars: false,
    roseDoolan: false,
    mustang: false,
    hideout: false,
    paulRegret: false,
    zvonice: false
  };

  const eventDeckState = {
    filterSet: 'both',
    deck: [],
    currentIndex: -1
  };

  const draftState = {
    step: 'setup',
    playerCount: 5,
    expansions: ['base', 'dodge-city'],
    currentIdx: 0,
    players: [],
    revealed: false
  };

  const trackerState = {
    lives: 4,
    maxLives: 4,
    isSheriff: false,
    gold: 0,
    cubes: 0,
    hand: 4
  };

  const quizState = {
    questions: [],
    idx: 0,
    score: 0,
    answered: false,
    selectedOption: null,
    finished: false
  };

  function renderTools() {
    if (!els.toolsContentArea) return;

    if (els.toolsSubnav) {
      els.toolsSubnav.querySelectorAll('.tool-subnav-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.tool === state.activeTool);
      });
    }

    if (state.activeTool === 'calc') {
      renderDistanceCalc(els.toolsContentArea);
    } else if (state.activeTool === 'events') {
      renderEventDeck(els.toolsContentArea);
    } else if (state.activeTool === 'draft') {
      renderRoleDraft(els.toolsContentArea);
    } else if (state.activeTool === 'tracker') {
      renderPlayerBoard(els.toolsContentArea);
    } else if (state.activeTool === 'quiz') {
      renderRulesQuiz(els.toolsContentArea);
    } else if (state.activeTool === 'soundboard') {
      renderSoundboard(els.toolsContentArea);
    }
  }

  // 1. DISTANCE CALCULATOR WITH SALOON POKER TABLE
  function renderDistanceCalc(container) {
    const isEn = state.lang === 'en';
    const weapons = window.BANG_TOOLS ? window.BANG_TOOLS.DistanceCalc.weapons : [];
    const selectedWeapon = weapons.find(w => w.id === calcParams.weaponId) || weapons[0] || { range: 1, nameCs: 'Colt .45', nameEn: 'Colt .45' };

    const calcResult = window.BANG_TOOLS.DistanceCalc.calculate({
      shooterIdx: calcParams.shooterIdx,
      targetIdx: calcParams.targetIdx,
      totalPlayers: calcParams.totalPlayers,
      shooterWeaponRange: selectedWeapon.range,
      shooterAppaloosa: calcParams.appaloosa,
      shooterBinoculars: calcParams.binoculars,
      shooterRoseDoolan: calcParams.roseDoolan,
      targetMustang: calcParams.mustang,
      targetHideout: calcParams.hideout,
      targetPaulRegret: calcParams.paulRegret,
      globalZvonice: calcParams.zvonice
    });

    const dir = calcResult.directionDetails || { clockwise: 1, counterClockwise: 1, shortest: 1, direction: 'cw' };

    // Table Geometry for SVG
    const cx = 350;
    const cy = 230;
    const rxSeat = 265;
    const rySeat = 168;

    const seatCoords = [];
    let seatsSvg = '';

    for (let i = 0; i < calcParams.totalPlayers; i++) {
      const theta = (2 * Math.PI * i / calcParams.totalPlayers) - (Math.PI / 2);
      const sx = Math.round(cx + rxSeat * Math.cos(theta));
      const sy = Math.round(cy + rySeat * Math.sin(theta));
      seatCoords.push({ x: sx, y: sy });

      const isShooter = i === calcParams.shooterIdx;
      const isTarget = i === calcParams.targetIdx;
      const seatDist = window.BANG_TOOLS.DistanceCalc.getSeatDistance(calcParams.shooterIdx, i, calcParams.totalPlayers);

      let strokeColor = '#5c3a21';
      let strokeWidth = '2';
      let fillColor = '#3a2012';
      let icon = '👤';
      let roleTitle = `${isEn ? 'Player' : 'Hráč'} ${i + 1}`;
      let titleColor = '#e8d3b9';

      if (isShooter) {
        strokeColor = '#f39c12';
        strokeWidth = '4';
        fillColor = '#c0392b';
        icon = '🤠';
        roleTitle = isEn ? 'SHOOTER' : 'STŘELEC';
        titleColor = '#ffeb3b';
      } else if (isTarget) {
        strokeColor = '#ffffff';
        strokeWidth = '4';
        fillColor = '#2980b9';
        icon = '🎯';
        roleTitle = isEn ? 'TARGET' : 'CÍL';
        titleColor = '#ffffff';
      }

      // Distance indicator badge for non-shooters
      let distBadge = '';
      if (!isShooter) {
        distBadge = `
          <g transform="translate(0, 36)">
            <rect x="-30" y="-10" width="60" height="20" rx="10" fill="${isTarget ? '#2980b9' : '#1c262f'}" stroke="${isTarget ? '#ffffff' : '#8b5a2b'}" stroke-width="1.5" />
            <text x="0" y="4" text-anchor="middle" font-size="11" font-weight="bold" fill="#ffffff">${isEn ? 'Dist' : 'Vzdál'}: ${seatDist}</text>
          </g>
        `;
      }

      // Equipment chips above seat
      let equipBadge = '';
      if (isShooter) {
        const wShort = (isEn ? selectedWeapon.nameEn : selectedWeapon.nameCs).split(' ')[0];
        equipBadge = `
          <g transform="translate(0, -36)">
            <rect x="-44" y="-10" width="88" height="20" rx="10" fill="#c0392b" stroke="#ffeb3b" stroke-width="1.5" />
            <text x="0" y="4" text-anchor="middle" font-size="10" font-weight="900" fill="#ffffff">🔫 ${wShort} (${selectedWeapon.range})</text>
          </g>
        `;
      } else if (isTarget && (calcParams.mustang || calcParams.hideout || calcParams.paulRegret)) {
        const mods = [];
        if (calcParams.mustang) mods.push('🐴+1');
        if (calcParams.hideout) mods.push('🏕️+1');
        if (calcParams.paulRegret) mods.push('🤠+1');
        equipBadge = `
          <g transform="translate(0, -36)">
            <rect x="-38" y="-10" width="76" height="20" rx="10" fill="#27ae60" stroke="#ffffff" stroke-width="1.5" />
            <text x="0" y="4" text-anchor="middle" font-size="10" font-weight="900" fill="#ffffff">${mods.join(' ')}</text>
          </g>
        `;
      }

      seatsSvg += `
        <g class="table-seat-node ${isShooter ? 'is-shooter' : ''} ${isTarget ? 'is-target' : ''}" data-seat="${i}" transform="translate(${sx}, ${sy})" role="button" tabindex="0" aria-label="${roleTitle} ${i + 1}">
          <circle r="38" fill="transparent" class="seat-hit-area" />
          <circle r="32" class="seat-rim" fill="#221107" stroke="${strokeColor}" stroke-width="${strokeWidth}" />
          <circle r="26" class="seat-cushion seat-felt" fill="${fillColor}" />
          <text x="0" y="-2" text-anchor="middle" font-size="20">${icon}</text>
          <text x="0" y="15" text-anchor="middle" font-size="10" font-weight="900" fill="${titleColor}">${roleTitle}</text>
          ${distBadge}
          ${equipBadge}
        </g>
      `;
    }

    const shooterPos = seatCoords[calcParams.shooterIdx] || { x: cx, y: cy - rySeat };
    const targetPos = seatCoords[calcParams.targetIdx] || { x: cx, y: cy + rySeat };
    const sightlineClass = calcResult.canBang ? 'sightline-in-range' : 'sightline-out-range';

    // Decorative forged iron & brass rivets around table rim
    let studsSvg = '';
    const numStuds = 32;
    for (let s = 0; s < numStuds; s++) {
      const a = (2 * Math.PI * s / numStuds);
      const stX = Math.round(cx + 217 * Math.cos(a));
      const stY = Math.round(cy + 138 * Math.sin(a));
      studsSvg += `<circle cx="${stX}" cy="${stY}" r="3" fill="#1e1109" stroke="#422919" stroke-width="0.8" /><circle cx="${stX - 0.7}" cy="${stY - 0.7}" r="1" fill="#8c6245" opacity="0.75" />`;
    }

    container.innerHTML = `
      <div class="tool-card-box">
        <div class="tool-card-header">
          <h2><span>📏</span> ${isEn ? 'Saloon Distance & Range Calculator' : 'Kalkulačka vzdálenosti a dostřelu u stolu'}</h2>
          <p class="tool-card-lead">${isEn ? 'Authentic rustic saloon table view as featured in the BANG! rules. Click any seat to designate Shooter or Target!' : 'Věrná vizualizace stolu ve westernovém saloonu podle pravidel hry BANG!. Klepněte na libovolnou židli pro výběr Střelce či Cíle!'}</p>
        </div>

        <div class="saloon-table-container">
          <div class="table-controls-bar">
            <div style="display: flex; align-items: center; gap: 0.6rem; flex-wrap: wrap;">
              <span style="font-weight: 800; font-size: 0.92rem; color: var(--color-brown);">
                👥 ${isEn ? 'Players at table:' : 'Hráčů u stolu:'}
              </span>
              <div style="display: flex; gap: 0.35rem;">
                ${[4, 5, 6, 7, 8].map(n => `
                  <button type="button" class="seat-btn ${n === calcParams.totalPlayers ? 'active-shooter' : ''}" data-total="${n}">${n}</button>
                `).join('')}
              </div>
            </div>

            <div class="table-mode-toggle">
              <button type="button" class="table-mode-btn ${calcParams.mode === 'shooter' ? 'active mode-shooter' : ''}" id="btn-mode-shooter">
                🤠 ${isEn ? 'Pick Shooter' : 'Zvolit Střelce'}
              </button>
              <button type="button" class="table-mode-btn ${calcParams.mode === 'target' ? 'active mode-target' : ''}" id="btn-mode-target">
                🎯 ${isEn ? 'Pick Target' : 'Zvolit Cíl'}
              </button>
            </div>
          </div>

          <div class="saloon-table-svg-wrap">
            <svg class="saloon-table-svg" viewBox="0 0 700 460">
              <defs>
                <!-- Heavy Table Outer Timber Bevel Rim -->
                <radialGradient id="tableWoodRimGrad" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stop-color="#4f2b15" />
                  <stop offset="75%" stop-color="#341b0c" />
                  <stop offset="92%" stop-color="#221006" />
                  <stop offset="100%" stop-color="#120702" />
                </radialGradient>

                <!-- Inset Edge Shadow for Wooden Tabletop Depth -->
                <radialGradient id="tableEdgeShadow" cx="50%" cy="50%" r="50%">
                  <stop offset="84%" stop-color="rgba(15, 6, 2, 0)" />
                  <stop offset="100%" stop-color="rgba(15, 6, 2, 0.75)" />
                </radialGradient>

                <!-- Clip Path for Table Planks -->
                <clipPath id="saloonTableClip">
                  <ellipse cx="350" cy="230" rx="202" ry="124" />
                </clipPath>
              </defs>

              <!-- Table Cast Shadow -->
              <ellipse cx="350" cy="238" rx="230" ry="150" fill="rgba(0,0,0,0.38)" />

              <!-- Outer Heavy Timber Rim -->
              <ellipse cx="350" cy="230" rx="226" ry="146" fill="url(#tableWoodRimGrad)" stroke="#110602" stroke-width="4.5" />

              <!-- Inset Wood Groove Line on Rim -->
              <ellipse cx="350" cy="230" rx="207" ry="129" fill="none" stroke="#1d0d05" stroke-width="1.8" />

              <!-- Forged Iron Studs on Rim -->
              ${studsSvg}

              <!-- Inner Wood Planks Surface -->
              <g clip-path="url(#saloonTableClip)">
                <!-- Base Plank Fills (6 weathered saloon oak planks) -->
                <rect x="100" y="100" width="500" height="42" fill="#543017" />
                <rect x="100" y="142" width="500" height="42" fill="#623a1c" />
                <rect x="100" y="184" width="500" height="44" fill="#4d2b13" />
                <rect x="100" y="228" width="500" height="44" fill="#5a3419" />
                <rect x="100" y="272" width="500" height="42" fill="#47260f" />
                <rect x="100" y="314" width="500" height="48" fill="#583318" />

                <!-- Wood Grain Texture Lines -->
                <path d="M 140 120 Q 250 115 360 122 T 560 118" stroke="rgba(255,240,210,0.08)" stroke-width="1.6" fill="none" />
                <path d="M 130 134 Q 280 130 430 136 T 570 132" stroke="rgba(0,0,0,0.22)" stroke-width="1.8" fill="none" />
                <path d="M 130 162 Q 280 168 430 160 T 570 166" stroke="rgba(255,240,210,0.07)" stroke-width="1.5" fill="none" />
                <path d="M 125 176 Q 240 172 370 178 T 575 174" stroke="rgba(0,0,0,0.2)" stroke-width="1.8" fill="none" />
                <path d="M 125 204 Q 240 199 370 207 T 575 202" stroke="rgba(255,240,210,0.09)" stroke-width="1.5" fill="none" />
                <path d="M 130 219 Q 270 223 420 216 T 570 220" stroke="rgba(0,0,0,0.22)" stroke-width="2" fill="none" />
                <path d="M 130 250 Q 270 256 420 248 T 570 253" stroke="rgba(255,240,210,0.08)" stroke-width="1.5" fill="none" />
                <path d="M 135 264 Q 260 260 380 267 T 565 262" stroke="rgba(0,0,0,0.24)" stroke-width="1.8" fill="none" />
                <path d="M 140 292 Q 260 287 380 295 T 560 290" stroke="rgba(255,240,210,0.07)" stroke-width="1.5" fill="none" />
                <path d="M 150 306 Q 290 311 440 304 T 550 308" stroke="rgba(0,0,0,0.2)" stroke-width="1.8" fill="none" />
                <path d="M 160 334 Q 280 341 430 333 T 540 338" stroke="rgba(255,240,210,0.08)" stroke-width="1.6" fill="none" />

                <!-- Plank Seams & Grooves -->
                <line x1="120" y1="142" x2="580" y2="142" stroke="#180b04" stroke-width="2.5" />
                <line x1="120" y1="143.5" x2="580" y2="143.5" stroke="rgba(255,230,180,0.14)" stroke-width="0.9" />

                <line x1="120" y1="184" x2="580" y2="184" stroke="#180b04" stroke-width="2.5" />
                <line x1="120" y1="185.5" x2="580" y2="185.5" stroke="rgba(255,230,180,0.14)" stroke-width="0.9" />

                <line x1="120" y1="228" x2="580" y2="228" stroke="#180b04" stroke-width="2.5" />
                <line x1="120" y1="229.5" x2="580" y2="229.5" stroke="rgba(255,230,180,0.14)" stroke-width="0.9" />

                <line x1="120" y1="272" x2="580" y2="272" stroke="#180b04" stroke-width="2.5" />
                <line x1="120" y1="273.5" x2="580" y2="273.5" stroke="rgba(255,230,180,0.14)" stroke-width="0.9" />

                <line x1="120" y1="314" x2="580" y2="314" stroke="#180b04" stroke-width="2.5" />
                <line x1="120" y1="315.5" x2="580" y2="315.5" stroke="rgba(255,230,180,0.14)" stroke-width="0.9" />

                <!-- Forged Iron Plank Nails -->
                <rect x="210" y="140" width="5" height="4" rx="1" fill="#140b06" stroke="#3b2315" stroke-width="0.8" />
                <rect x="490" y="140" width="5" height="4" rx="1" fill="#140b06" stroke="#3b2315" stroke-width="0.8" />
                <rect x="210" y="226" width="5" height="4" rx="1" fill="#140b06" stroke="#3b2315" stroke-width="0.8" />
                <rect x="490" y="226" width="5" height="4" rx="1" fill="#140b06" stroke="#3b2315" stroke-width="0.8" />
                <rect x="210" y="312" width="5" height="4" rx="1" fill="#140b06" stroke="#3b2315" stroke-width="0.8" />
                <rect x="490" y="312" width="5" height="4" rx="1" fill="#140b06" stroke="#3b2315" stroke-width="0.8" />

                <!-- Natural Wood Knots -->
                <g opacity="0.9">
                  <ellipse cx="230" cy="163" rx="13" ry="7" fill="#2d1508" stroke="#1c0c04" stroke-width="1.2" />
                  <ellipse cx="230" cy="163" rx="6" ry="3.5" fill="#160802" />
                  <path d="M 212 163 Q 230 152 248 163" stroke="rgba(0,0,0,0.3)" stroke-width="1.4" fill="none" />
                  <path d="M 212 163 Q 230 174 248 163" stroke="rgba(0,0,0,0.3)" stroke-width="1.4" fill="none" />
                </g>
                <g opacity="0.9">
                  <ellipse cx="480" cy="250" rx="14" ry="7.5" fill="#2b1407" stroke="#1c0b03" stroke-width="1.2" />
                  <ellipse cx="480" cy="250" rx="7" ry="3.5" fill="#150702" />
                  <path d="M 460 250 Q 480 238 500 250" stroke="rgba(0,0,0,0.3)" stroke-width="1.4" fill="none" />
                  <path d="M 460 250 Q 480 262 500 250" stroke="rgba(0,0,0,0.3)" stroke-width="1.4" fill="none" />
                </g>

                <!-- Saloon Condensation Watermarks (Beer & Whiskey Rings) -->
                <ellipse cx="275" cy="168" rx="22" ry="16" fill="none" stroke="rgba(25, 9, 3, 0.45)" stroke-width="2.8" stroke-dasharray="14 4 8 2" transform="rotate(-15 275 168)" />
                <ellipse cx="275" cy="168" rx="19.5" ry="14" fill="none" stroke="rgba(25, 9, 3, 0.22)" stroke-width="1.2" transform="rotate(-15 275 168)" />

                <ellipse cx="435" cy="295" rx="24" ry="16" fill="none" stroke="rgba(25, 9, 3, 0.4)" stroke-width="2.5" stroke-dasharray="12 4 9 3" transform="rotate(20 435 295)" />

                <!-- Knife Scratches / Duel Graze Marks -->
                <path d="M 185 244 L 218 239" stroke="rgba(15, 6, 2, 0.6)" stroke-width="1.8" />
                <path d="M 495 195 L 518 202" stroke="rgba(15, 6, 2, 0.55)" stroke-width="1.5" />

                <!-- Branded Saloon Mark Burned into Wood -->
                <g opacity="0.45">
                  <text x="350" y="132" text-anchor="middle" font-size="14" fill="#230d04">★</text>
                  <text x="350" y="148" text-anchor="middle" font-family="'Rye', 'Georgia', serif" font-size="12" font-weight="900" fill="#230d04" letter-spacing="3.5">★ BANG! WESTERN SALOON ★</text>
                </g>

                <!-- Inset Table Edge Shadow -->
                <ellipse cx="350" cy="230" rx="202" ry="124" fill="url(#tableEdgeShadow)" />
              </g>

              <!-- Sightline / Line of Fire -->
              <line x1="${shooterPos.x}" y1="${shooterPos.y}" x2="${targetPos.x}" y2="${targetPos.y}" class="${sightlineClass}" />

              <!-- Bullet on Sightline -->
              <circle id="svg-bullet" cx="${shooterPos.x}" cy="${shooterPos.y}" r="6" fill="#ffd700" stroke="#d35400" stroke-width="2" style="opacity: 0; pointer-events: none;" />

              <!-- Center Distance Readout Plaque (Rustic Forged Iron & Brass) -->
              <g transform="translate(350, 230)">
                <!-- Outer Iron Plaque Plate -->
                <rect x="-142" y="-39" width="284" height="78" rx="10" fill="#1a0e07" stroke="#936d2a" stroke-width="2.5" />
                <!-- Inner Dark Walnut Inlay -->
                <rect x="-137" y="-34" width="274" height="68" rx="7" fill="#261309" stroke="#482914" stroke-width="1.2" />
                <!-- Corner Brass Screws -->
                <circle cx="-130" cy="-27" r="2.5" fill="#d4af37" stroke="#604010" stroke-width="0.8" />
                <circle cx="130" cy="-27" r="2.5" fill="#d4af37" stroke="#604010" stroke-width="0.8" />
                <circle cx="-130" cy="27" r="2.5" fill="#d4af37" stroke="#604010" stroke-width="0.8" />
                <circle cx="130" cy="27" r="2.5" fill="#d4af37" stroke="#604010" stroke-width="0.8" />

                <text x="0" y="-10" text-anchor="middle" font-family="'Rye', 'Georgia', serif" font-size="15" font-weight="bold" fill="#ffeb3b" letter-spacing="0.5">
                  🎯 ${isEn ? 'EFFECTIVE DISTANCE' : 'SKUTEČNÁ VZDÁLENOST'}: ${calcResult.actualDistance} ${isEn ? (calcResult.actualDistance === 1 ? 'SEAT' : 'SEATS') : (calcResult.actualDistance === 1 ? 'MÍSTO' : (calcResult.actualDistance < 5 ? 'MÍSTA' : 'MÍST'))}
                </text>
                <text x="0" y="11" text-anchor="middle" font-size="11.5" font-weight="bold" fill="#f5deb3">
                  ↻ ${isEn ? 'Clockwise' : 'Po směru'}: ${dir.clockwise} | ↺ ${isEn ? 'Counter-CW' : 'Proti směru'}: ${dir.counterClockwise}
                </text>
                <text x="0" y="26" text-anchor="middle" font-size="10.5" fill="#e6b84d">
                  ${isEn ? 'Shortest table distance' : 'Základ u stolu (nejkratší)'}: ${dir.shortest} ${isEn ? 'seats' : (dir.shortest === 1 ? 'místo' : 'místa')}
                </text>
              </g>

              <!-- Player Chairs / Saloon Stools -->
              ${seatsSvg}
            </svg>
          </div>

          <div class="table-instruction-hint">
            💡 ${isEn ? 'Tap any seat to select who is shooting and who is being targeted. The table calculates the shortest direction (clockwise vs counter-clockwise) automatically.' : 'Klepněte na libovolnou židli pro výběr střelce či cíle. Stůl automaticky počítá nejkratší vzdálenost (po směru i proti směru hodinových ručiček).'}
          </div>
        </div>

        <div class="calc-grid">
          <div class="calc-panel">
            <h3><span>🤠</span> ${isEn ? 'Shooter Equipment & Abilities' : 'Výbava střelce & Schopnosti'}</h3>
            <div style="margin-bottom: 1rem;">
              <label for="calc-weapon" style="display: block; font-weight: 700; font-size: 0.88rem; margin-bottom: 0.35rem;">${isEn ? 'Equipped Weapon:' : 'Vyložená zbraň:'}</label>
              <select id="calc-weapon" class="filter-select" style="width: 100%;">
                ${weapons.map(w => `<option value="${w.id}" ${w.id === calcParams.weaponId ? 'selected' : ''}>${isEn ? w.nameEn : w.nameCs}</option>`).join('')}
              </select>
            </div>
            <div class="calc-mods-list">
              <label class="calc-checkbox-label">
                <input type="checkbox" id="chk-appaloosa" ${calcParams.appaloosa ? 'checked' : ''}>
                <span>🐎 ${isEn ? 'Appaloosa / Scope (-1 distance)' : 'Hledí / Appaloosa (-1 ke vzdálenosti)'}</span>
              </label>
              <label class="calc-checkbox-label">
                <input type="checkbox" id="chk-binoculars" ${calcParams.binoculars ? 'checked' : ''}>
                <span>🔭 ${isEn ? 'Binoculars (-1 distance)' : 'Dalekohled (-1 ke vzdálenosti)'}</span>
              </label>
              <label class="calc-checkbox-label">
                <input type="checkbox" id="chk-rosedoolan" ${calcParams.roseDoolan ? 'checked' : ''}>
                <span>👩 ${isEn ? 'Rose Doolan character (-1 distance)' : 'Postava Rose Doolan (-1 ke vzdálenosti)'}</span>
              </label>
            </div>
          </div>

          <div class="calc-panel">
            <h3><span>🎯</span> ${isEn ? 'Target Defenses & Abilities' : 'Obrana cíle & Schopnosti'}</h3>
            <div class="calc-mods-list" style="margin-top: 0.5rem;">
              <label class="calc-checkbox-label">
                <input type="checkbox" id="chk-mustang" ${calcParams.mustang ? 'checked' : ''}>
                <span>🐎 ${isEn ? 'Mustang (+1 distance away)' : 'Mustang (+1 ke vzdálenosti)'}</span>
              </label>
              <label class="calc-checkbox-label">
                <input type="checkbox" id="chk-hideout" ${calcParams.hideout ? 'checked' : ''}>
                <span>🏕️ ${isEn ? 'Hideout (+1 distance away)' : 'Skrýš (+1 ke vzdálenosti)'}</span>
              </label>
              <label class="calc-checkbox-label">
                <input type="checkbox" id="chk-paulregret" ${calcParams.paulRegret ? 'checked' : ''}>
                <span>🤠 ${isEn ? 'Paul Regret character (+1 distance away)' : 'Postava Paul Regret (+1 ke vzdálenosti)'}</span>
              </label>
              <label class="calc-checkbox-label" style="margin-top: 0.5rem; padding-top: 0.5rem; border-top: 1px dashed var(--border-color);">
                <input type="checkbox" id="chk-zvonice" ${calcParams.zvonice ? 'checked' : ''}>
                <span>🔔 ${isEn ? 'Event: Church Bell / Zvonice (all dist = 1)' : 'Událost: Zvonice (všichni na vzdálenost 1)'}</span>
              </label>
            </div>
          </div>
        </div>

        <div class="calc-result-box">
          <div class="calc-stat-row">
            <div class="calc-stat-card">
              <div class="calc-stat-num">${calcResult.seatDistance}</div>
              <div class="calc-stat-lbl">${isEn ? 'Base Table Distance' : 'Míst v kruhu (základ)'}</div>
            </div>
            <div class="calc-stat-card">
              <div class="calc-stat-num" style="color: #2980b9;">${calcResult.actualDistance}</div>
              <div class="calc-stat-lbl">${isEn ? 'Effective Distance' : 'Skutečná vzdálenost'}</div>
            </div>
            <div class="calc-stat-card">
              <div class="calc-stat-num" style="color: #c0392b;">${calcResult.weaponRange}</div>
              <div class="calc-stat-lbl">${isEn ? 'Weapon Range' : 'Dostřel zbraně'}</div>
            </div>
          </div>

          <div class="calc-verdict-grid">
            <div class="calc-verdict-item ${calcResult.canBang ? 'verdict-success' : 'verdict-fail'}">
              <span>${calcResult.canBang ? '💥' : '🚫'}</span>
              <span>BANG! ${calcResult.canBang ? (isEn ? 'CAN HIT TARGET!' : 'DOSTŘELÍ NA CÍL!') : (isEn ? 'CANNOT HIT (Need ' + calcResult.actualDistance + ')' : 'NEDOSTŘELÍ (chybí ' + (calcResult.actualDistance - calcResult.weaponRange) + ')') }</span>
            </div>
            <div class="calc-verdict-item ${calcResult.canPanic ? 'verdict-success' : 'verdict-fail'}">
              <span>${calcResult.canPanic ? '🧤' : '🚫'}</span>
              <span>Panika! ${calcResult.canPanic ? (isEn ? 'CAN BE PLAYED (Dist = 1)' : 'LZE ZAHRÁT (vzdálenost 1)') : (isEn ? 'CANNOT PLAY (Dist > 1)' : 'NELZE ZAHRÁT (vzdálenost ' + calcResult.actualDistance + ')')}</span>
            </div>
            <div class="calc-verdict-item verdict-success">
              <span>⚔️</span>
              <span>Duel / Cat Balou / Indiáni: ${isEn ? 'Always playable' : 'Vždy lze zahrát'}</span>
            </div>
          </div>

          <div style="margin-top: 1.25rem; font-size: 0.9rem; color: var(--text-muted); display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 0.75rem;">
            <div>
              <strong>${isEn ? 'Calculation:' : 'Výpočet:'}</strong> ${isEn ? 'Table seats' : 'Základ u stolu'} (${calcResult.seatDistance}) ${calcResult.targetMods ? `+ ${isEn ? 'Defense' : 'Obrana'} (+${calcResult.targetMods})` : ''} ${calcResult.shooterMods ? `- ${isEn ? 'Sight' : 'Hledí'} (-${calcResult.shooterMods})` : ''} = <strong>${calcResult.actualDistance}</strong>.
            </div>
            <button type="button" class="btn-reset-filters" id="btn-sound-shot" style="display: inline-flex; align-items: center; gap: 0.4rem; font-weight: 800; font-size: 0.95rem; padding: 0.65rem 1.2rem; background: var(--color-brown); color: #fff;">
              <span>💥</span> ${isEn ? 'Test Shot on Table' : 'Otestovat výstřel na stůl'}
            </button>
          </div>
        </div>
      </div>
    `;

    // Handle Total Players change
    container.querySelectorAll('[data-total]').forEach(btn => {
      btn.addEventListener('click', () => {
        calcParams.totalPlayers = parseInt(btn.dataset.total, 10);
        if (calcParams.shooterIdx >= calcParams.totalPlayers) calcParams.shooterIdx = 0;
        if (calcParams.targetIdx >= calcParams.totalPlayers) calcParams.targetIdx = 1;
        renderDistanceCalc(container);
      });
    });

    // Handle Mode Toggles
    const modeShooterBtn = document.getElementById('btn-mode-shooter');
    if (modeShooterBtn) {
      modeShooterBtn.addEventListener('click', () => {
        calcParams.mode = 'shooter';
        renderDistanceCalc(container);
      });
    }

    const modeTargetBtn = document.getElementById('btn-mode-target');
    if (modeTargetBtn) {
      modeTargetBtn.addEventListener('click', () => {
        calcParams.mode = 'target';
        renderDistanceCalc(container);
      });
    }

    // Handle Seat Click / Keyboard
    container.querySelectorAll('.table-seat-node[data-seat]').forEach(seatNode => {
      const handleSelect = () => {
        const seat = parseInt(seatNode.dataset.seat, 10);
        if (calcParams.mode === 'shooter') {
          if (seat !== calcParams.targetIdx) {
            calcParams.shooterIdx = seat;
            calcParams.mode = 'target'; // Auto advance to target pick
          } else {
            // Swap if clicked target
            calcParams.targetIdx = calcParams.shooterIdx;
            calcParams.shooterIdx = seat;
          }
        } else {
          if (seat !== calcParams.shooterIdx) {
            calcParams.targetIdx = seat;
          } else {
            // Swap if clicked shooter
            calcParams.shooterIdx = calcParams.targetIdx;
            calcParams.targetIdx = seat;
          }
        }
        renderDistanceCalc(container);
      };

      seatNode.addEventListener('click', handleSelect);
      seatNode.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          handleSelect();
        }
      });
    });

    // Handle Weapon Change
    const wSelect = document.getElementById('calc-weapon');
    if (wSelect) {
      wSelect.addEventListener('change', (e) => {
        calcParams.weaponId = e.target.value;
        renderDistanceCalc(container);
      });
    }

    // Handle Checkboxes
    const bindChk = (id, key) => {
      const el = document.getElementById(id);
      if (el) {
        el.addEventListener('change', (e) => {
          calcParams[key] = e.target.checked;
          renderDistanceCalc(container);
        });
      }
    };

    bindChk('chk-appaloosa', 'appaloosa');
    bindChk('chk-binoculars', 'binoculars');
    bindChk('chk-rosedoolan', 'roseDoolan');
    bindChk('chk-mustang', 'mustang');
    bindChk('chk-hideout', 'hideout');
    bindChk('chk-paulregret', 'paulRegret');
    bindChk('chk-zvonice', 'zvonice');

    // Handle Test Shot Button with Animation & Authentic Audio
    const shotBtn = document.getElementById('btn-sound-shot');
    if (shotBtn) {
      shotBtn.addEventListener('click', () => {
        const bullet = document.getElementById('svg-bullet');
        if (bullet) {
          bullet.setAttribute('cx', shooterPos.x);
          bullet.setAttribute('cy', shooterPos.y);
          bullet.style.opacity = '1';
          bullet.style.transition = 'all 0.35s cubic-bezier(0.2, 0.8, 0.4, 1)';
          setTimeout(() => {
            bullet.setAttribute('cx', targetPos.x);
            bullet.setAttribute('cy', targetPos.y);
          }, 20);
          setTimeout(() => {
            bullet.style.opacity = '0';
            bullet.style.transition = 'none';
            bullet.setAttribute('cx', shooterPos.x);
            bullet.setAttribute('cy', shooterPos.y);
          }, 400);
        }

        if (calcResult.canBang) {
          window.BANG_TOOLS.SoundFX.playShot();
        } else {
          window.BANG_TOOLS.SoundFX.playRicochet();
        }
      });
    }
  }

  // 2. EVENT DECK
  function renderEventDeck(container) {
    const isEn = state.lang === 'en';
    const allEventCards = window.BANG_CARDS.filter(c => c.type === 'event');

    const initEventDeck = () => {
      let filtered = allEventCards;
      if (eventDeckState.filterSet === 'high-noon') {
        filtered = allEventCards.filter(c => c.expansion === 'high-noon');
      } else if (eventDeckState.filterSet === 'fistful') {
        filtered = allEventCards.filter(c => c.expansion === 'fistful-of-cards');
      } else if (eventDeckState.filterSet === 'both') {
        filtered = allEventCards.filter(c => ['high-noon', 'fistful-of-cards'].includes(c.expansion));
      }

      const shuffled = [...filtered].sort(() => Math.random() - 0.5);
      const climaxIdx = shuffled.findIndex(c => c.name === 'Pravé poledne' || c.name === 'Pěst plná karet');
      if (climaxIdx !== -1) {
        const climaxCard = shuffled.splice(climaxIdx, 1)[0];
        shuffled.push(climaxCard);
      }

      eventDeckState.deck = shuffled;
      eventDeckState.currentIndex = 0;
    };

    if (eventDeckState.deck.length === 0) {
      initEventDeck();
    }

    const currentCard = eventDeckState.deck[eventDeckState.currentIndex] || eventDeckState.deck[0];
    const title = isEn ? (currentCard.nameEn || currentCard.name) : currentCard.name;
    const badge = isEn ? (currentCard.expansionNameEn || currentCard.expansionName) : currentCard.expansionName;
    const effect = isEn ? (currentCard.effectEn || currentCard.effect) : currentCard.effect;
    const timing = isEn ? (currentCard.timingEn || currentCard.timing) : currentCard.timing;
    const rulings = isEn && currentCard.rulingsEn && currentCard.rulingsEn.length > 0 ? currentCard.rulingsEn : currentCard.rulings;

    container.innerHTML = `
      <div class="tool-card-box">
        <div class="tool-card-header">
          <h2><span>☀️</span> ${isEn ? 'Event Deck (High Noon & Fistful of Cards)' : 'Digitální balíček událostí (Pravé poledne & Fistful)'}</h2>
          <p class="tool-card-lead">${isEn ? 'Sheriff turns a new global event card at the start of each round. The climax card is automatically placed on the bottom.' : 'Šerif na začátku každého kola hry otočí novou událost. Finální karta je automaticky zamíchána na spodek balíčku dle oficiálních pravidel.'}</p>
        </div>

        <div class="events-deck-container">
          <div class="events-controls-bar">
            <select id="event-set-select" class="filter-select">
              <option value="both" ${eventDeckState.filterSet === 'both' ? 'selected' : ''}>☀️ ${isEn ? 'High Noon & Fistful together' : 'Pravé poledne & Pěst plná karet'}</option>
              <option value="high-noon" ${eventDeckState.filterSet === 'high-noon' ? 'selected' : ''}>☀️ ${isEn ? 'High Noon only' : 'Pouze Pravé poledne'}</option>
              <option value="fistful" ${eventDeckState.filterSet === 'fistful' ? 'selected' : ''}>💀 ${isEn ? 'A Fistful of Cards only' : 'Pouze Pěst plná karet'}</option>
              <option value="all" ${eventDeckState.filterSet === 'all' ? 'selected' : ''}>🏜️ ${isEn ? 'All Expansions (incl. Wild West Show)' : 'Všechny (včetně Divokého západu)'}</option>
            </select>
            <button type="button" class="btn-reset-filters" id="btn-shuffle-events" style="font-weight: 700;">
              🔄 ${isEn ? 'Shuffle New Deck' : 'Zamíchat nový balíček'}
            </button>
          </div>

          <div class="event-big-card">
            <div class="event-card-top">
              <span class="event-round-badge">
                ${isEn ? 'Round' : 'Kolo'} ${eventDeckState.currentIndex + 1} / ${eventDeckState.deck.length}
              </span>
              <span style="font-size: 0.85rem; font-weight: 700; opacity: 0.95;">${badge}</span>
            </div>
            ${currentCard.image ? `
              <div style="background: var(--bg-surface); text-align: center; padding: 1.25rem 0.5rem; border-bottom: 1px solid var(--border-color);">
                <img src="${currentCard.image}" alt="${title}" style="max-height: 220px; object-fit: contain; border-radius: 8px; box-shadow: var(--shadow-sm);">
              </div>
            ` : ''}
            <div class="event-card-body">
              <h3 class="event-card-title">${title}</h3>
              <div class="event-card-timing">⏱️ ${timing}</div>
              <div class="event-card-effect">${effect}</div>
              ${(rulings && rulings.length > 0) ? `
                <div style="font-size: 0.88rem; line-height: 1.6; border-top: 1px dashed var(--border-color); padding-top: 0.75rem;">
                  <strong style="color: var(--color-brown);">${isEn ? 'Official Rulings:' : 'Přesný výklad pravidla:'}</strong>
                  <ul style="padding-left: 1.2rem; margin-top: 0.35rem;">
                    ${rulings.map(r => `<li>${r}</li>`).join('')}
                  </ul>
                </div>
              ` : ''}
            </div>
          </div>

          <div style="display: flex; gap: 0.85rem; flex-wrap: wrap; justify-content: center;">
            <button type="button" class="tool-subnav-btn" id="btn-prev-event" ${eventDeckState.currentIndex <= 0 ? 'disabled style="opacity: 0.5;"' : ''}>
              ← ${isEn ? 'Previous Round' : 'Předchozí kolo'}
            </button>
            <button type="button" class="tool-subnav-btn active" id="btn-next-event" ${eventDeckState.currentIndex >= eventDeckState.deck.length - 1 ? 'disabled style="opacity: 0.5;"' : ''}>
              ${isEn ? 'Next Event (New Round)' : 'Další událost (Nové kolo)'} ➔
            </button>
          </div>
        </div>
      </div>
    `;

    document.getElementById('event-set-select').addEventListener('change', (e) => {
      eventDeckState.filterSet = e.target.value;
      initEventDeck();
      renderEventDeck(container);
    });

    document.getElementById('btn-shuffle-events').addEventListener('click', () => {
      initEventDeck();
      window.BANG_TOOLS.SoundFX.playBell();
      renderEventDeck(container);
    });

    const prevBtn = document.getElementById('btn-prev-event');
    if (prevBtn && eventDeckState.currentIndex > 0) {
      prevBtn.addEventListener('click', () => {
        eventDeckState.currentIndex--;
        renderEventDeck(container);
      });
    }

    const nextBtn = document.getElementById('btn-next-event');
    if (nextBtn && eventDeckState.currentIndex < eventDeckState.deck.length - 1) {
      nextBtn.addEventListener('click', () => {
        eventDeckState.currentIndex++;
        window.BANG_TOOLS.SoundFX.playBell();
        renderEventDeck(container);
      });
    }
  }

  // 3. ROLE & CHARACTER DRAFT
  function renderRoleDraft(container) {
    const isEn = state.lang === 'en';

    const getRolesDistribution = (n) => {
      const roles = ['sheriff'];
      if (n === 4) { roles.push('renegade', 'outlaw', 'outlaw'); }
      else if (n === 5) { roles.push('deputy', 'renegade', 'outlaw', 'outlaw'); }
      else if (n === 6) { roles.push('deputy', 'renegade', 'outlaw', 'outlaw', 'outlaw'); }
      else if (n === 7) { roles.push('deputy', 'deputy', 'renegade', 'outlaw', 'outlaw', 'outlaw'); }
      else if (n === 8) { roles.push('deputy', 'deputy', 'renegade', 'renegade', 'outlaw', 'outlaw', 'outlaw'); }
      return roles.sort(() => Math.random() - 0.5);
    };

    const startDraft = () => {
      const roles = getRolesDistribution(draftState.playerCount);
      const availableChars = window.BANG_CARDS.filter(c =>
        ['character', 'legend-character'].includes(c.type) &&
        (draftState.expansions.includes(c.expansion) || draftState.expansions.includes('all'))
      ).sort(() => Math.random() - 0.5);

      draftState.players = [];
      for (let i = 0; i < draftState.playerCount; i++) {
        const c1 = availableChars.pop();
        const c2 = availableChars.pop();
        draftState.players.push({
          num: i + 1,
          name: `${isEn ? 'Player' : 'Hráč'} ${i + 1}`,
          role: roles[i],
          choices: [c1, c2].filter(Boolean),
          chosenChar: null
        });
      }

      draftState.currentIdx = 0;
      draftState.revealed = false;
      draftState.step = 'turn';
    };

    if (draftState.step === 'setup') {
      container.innerHTML = `
        <div class="tool-card-box">
          <div class="tool-card-header">
            <h2><span>🎲</span> ${isEn ? 'Role & Character Draft' : 'Losovač rolí a postav'}</h2>
            <p class="tool-card-lead">${isEn ? 'Secret "Pass the Phone" mode: each player privately discovers their role and chooses from 2 dealt characters.' : 'Režim „Předej mobil“ pro tajné losování: každý hráč v soukromí zjistí svou roli a vybere si ze 2 nabídnutých postav.'}</p>
          </div>

          <div class="draft-card-wrap">
            <div style="background: var(--bg-surface); padding: 1.5rem; border-radius: var(--radius-md); border: 1.5px solid var(--border-color); margin-bottom: 1.5rem; text-align: left;">
              <div style="margin-bottom: 1.25rem;">
                <label style="font-weight: 700; font-size: 0.95rem; display: block; margin-bottom: 0.5rem;">${isEn ? 'Number of Players (4–8):' : 'Počet hráčů (4–8):'}</label>
                <div style="display: flex; gap: 0.45rem;">
                  ${[4, 5, 6, 7, 8].map(n => `
                    <button type="button" class="seat-btn ${n === draftState.playerCount ? 'active-shooter' : ''}" data-draft-n="${n}">${n}</button>
                  `).join('')}
                </div>
              </div>

              <div style="margin-bottom: 1.25rem;">
                <label style="font-weight: 700; font-size: 0.95rem; display: block; margin-bottom: 0.5rem;">${isEn ? 'Include Character Expansions:' : 'Zahrnout postavy z rozšíření:'}</label>
                <div style="display: flex; flex-direction: column; gap: 0.5rem;">
                  <label class="calc-checkbox-label"><input type="checkbox" data-exp="base" ${draftState.expansions.includes('base') ? 'checked' : ''}> <span>🎯 Základní hra (16 postav)</span></label>
                  <label class="calc-checkbox-label"><input type="checkbox" data-exp="dodge-city" ${draftState.expansions.includes('dodge-city') ? 'checked' : ''}> <span>🟢 Dodge City (15 postav)</span></label>
                  <label class="calc-checkbox-label"><input type="checkbox" data-exp="gold-rush" ${draftState.expansions.includes('gold-rush') ? 'checked' : ''}> <span>🪙 Zlatá horečka (8 postav)</span></label>
                  <label class="calc-checkbox-label"><input type="checkbox" data-exp="armed-dangerous" ${draftState.expansions.includes('armed-dangerous') ? 'checked' : ''}> <span>🟠 Ozbrojení a nebezpeční (8 postav)</span></label>
                  <label class="calc-checkbox-label"><input type="checkbox" data-exp="train-robbery" ${draftState.expansions.includes('train-robbery') ? 'checked' : ''}> <span>🚂 Velká vlaková loupež (8 postav)</span></label>
                  <label class="calc-checkbox-label"><input type="checkbox" data-exp="valley-of-shadows" ${draftState.expansions.includes('valley-of-shadows') ? 'checked' : ''}> <span>💀 Údolí stínů (8 postav)</span></label>
                  <label class="calc-checkbox-label"><input type="checkbox" data-exp="wild-west-show" ${draftState.expansions.includes('wild-west-show') ? 'checked' : ''}> <span>🎪 Divoký západ (8 postav)</span></label>
                  <label class="calc-checkbox-label"><input type="checkbox" data-exp="legends" ${draftState.expansions.includes('legends') ? 'checked' : ''}> <span>🌟 Legendy (16 legendárních postav)</span></label>
                </div>
              </div>
            </div>

            <button type="button" class="tool-subnav-btn active" id="btn-start-draft" style="font-size: 1.1rem; padding: 0.85rem 2rem;">
              🎲 ${isEn ? 'Start Secret Draft' : 'Zahájit tajné losování'}
            </button>
          </div>
        </div>
      `;

      container.querySelectorAll('[data-draft-n]').forEach(btn => {
        btn.addEventListener('click', () => {
          draftState.playerCount = parseInt(btn.dataset.draftN, 10);
          renderRoleDraft(container);
        });
      });

      container.querySelectorAll('[data-exp]').forEach(chk => {
        chk.addEventListener('change', () => {
          const exp = chk.dataset.exp;
          if (chk.checked && !draftState.expansions.includes(exp)) draftState.expansions.push(exp);
          if (!chk.checked) draftState.expansions = draftState.expansions.filter(e => e !== exp);
          if (draftState.expansions.length === 0) draftState.expansions = ['base'];
        });
      });

      document.getElementById('btn-start-draft').addEventListener('click', () => {
        startDraft();
        renderRoleDraft(container);
      });
      return;
    }

    if (draftState.step === 'turn') {
      const p = draftState.players[draftState.currentIdx];

      if (!draftState.revealed) {
        container.innerHTML = `
          <div class="tool-card-box">
            <div class="draft-card-wrap">
              <div style="font-size: 0.9rem; font-weight: 800; color: var(--color-brown); text-transform: uppercase; margin-bottom: 0.5rem;">
                ${isEn ? 'Secret Hand-Off' : 'Tajné předání'} (${draftState.currentIdx + 1} / ${draftState.playerCount})
              </div>
              <h2 style="font-family: 'Georgia', serif; font-size: 2.2rem; color: var(--text-main); margin-bottom: 1rem;">
                📱 ${isEn ? 'Pass device to' : 'Předejte zařízení hráči:'} <strong>${p.name}</strong>
              </h2>
              <p style="color: var(--text-muted); margin-bottom: 2rem; font-size: 1.05rem;">
                ${isEn ? 'Ensure nobody else is looking at the screen, then tap below to reveal your secret role and select your character.' : 'Ujistěte se, že se nikdo jiný nedívá na displej, a klepnutím odhalte svou tajnou roli a výběr postav.'}
              </p>

              <div class="draft-mystery-box" id="btn-reveal-turn">
                <div style="font-size: 3.5rem; margin-bottom: 0.5rem;">🔒</div>
                <h3 style="font-family: 'Georgia', serif; font-size: 1.5rem; color: var(--color-brown); margin-bottom: 0.25rem;">
                  ${isEn ? 'Tap to Reveal Role & Characters' : 'Klepnutím odhalit roli a postavy'}
                </h3>
                <div style="color: var(--text-muted); font-size: 0.88rem;">${isEn ? 'For your eyes only!' : 'Pouze pro tvé oči!'}</div>
              </div>
            </div>
          </div>
        `;

        document.getElementById('btn-reveal-turn').addEventListener('click', () => {
          draftState.revealed = true;
          renderRoleDraft(container);
        });
        return;
      }

      let roleInfo = { title: '💀 Bandita', color: '#c0392b', desc: isEn ? 'Eliminate the Sheriff!' : 'Zlikviduj Šerifa za každou cenu!' };
      if (p.role === 'sheriff') {
        roleInfo = { title: '⭐️ ŠERIF', color: '#f39c12', desc: isEn ? 'PUBLIC ROLE: Reveal this card to everyone immediately! You get +1 max life and play first.' : 'VEŘEJNÁ ROLE: Tuto kartu ihned otoč všem lícem nahoru! Máš +1 život navíc a hraješ jako první.' };
      } else if (p.role === 'deputy') {
        roleInfo = { title: '🛡️ Pomocník šerifa', color: '#2980b9', desc: isEn ? 'Protect the Sheriff and eliminate Outlaws & Renegade.' : 'Chraň Šerifa za každou cenu a pomoz mu zvítězit!' };
      } else if (p.role === 'renegade') {
        roleInfo = { title: '🗡️ Odpadlík', color: '#8e44ad', desc: isEn ? 'Be the last one standing – eliminate the Sheriff in a final 1v1 duel!' : 'Zůstaň jako poslední živý ve hře – Šerifa musíš zabít až úplně naposledy 1 na 1!' };
      }

      container.innerHTML = `
        <div class="tool-card-box">
          <div class="draft-card-wrap">
            <div style="font-size: 0.85rem; font-weight: 800; color: var(--text-muted); text-transform: uppercase;">
              ${p.name} (${draftState.currentIdx + 1} / ${draftState.playerCount})
            </div>

            <div style="background: ${roleInfo.color}; color: #ffffff; padding: 1.25rem 1.5rem; border-radius: var(--radius-md); margin: 1rem 0 1.5rem; box-shadow: var(--shadow-md);">
              <div style="font-size: 0.85rem; font-weight: 800; text-transform: uppercase; letter-spacing: 0.5px; opacity: 0.9;">${isEn ? 'Your Role:' : 'Tvoje role:'}</div>
              <h2 style="font-family: 'Georgia', serif; font-size: 2.2rem; margin: 0.35rem 0;">${roleInfo.title}</h2>
              <div style="font-size: 0.95rem; opacity: 0.95; line-height: 1.4;">${roleInfo.desc}</div>
            </div>

            <h3 style="font-family: 'Georgia', serif; font-size: 1.3rem; color: var(--color-brown); margin-bottom: 0.75rem;">
              ${isEn ? 'Choose 1 of 2 dealt characters:' : 'Vyber si 1 ze 2 nabízených postav:'}
            </h3>

            <div class="draft-chars-grid">
              ${p.choices.map((c) => {
                const cTitle = isEn ? (c.nameEn || c.name) : c.name;
                const cEffect = isEn ? (c.effectEn || c.effect) : c.effect;
                const isSelected = p.chosenChar && p.chosenChar.id === c.id;
                return `
                  <div class="draft-char-choice ${isSelected ? 'selected' : ''}" data-char-id="${c.id}">
                    <div style="text-align: center; margin-bottom: 0.75rem;">
                      ${c.image ? `<img src="${c.image}" alt="${cTitle}" style="max-height: 140px; object-fit: contain; border-radius: 6px; margin-bottom: 0.4rem;">` : ''}
                      <h4 style="font-family: 'Georgia', serif; font-size: 1.2rem; margin: 0.2rem 0; color: var(--text-main);">${cTitle}</h4>
                      <div style="color: #b71c1c; font-weight: 800; font-size: 0.95rem;">❤️ ${c.lives} ${isEn ? 'lives' : 'životy'}</div>
                    </div>
                    <div style="font-size: 0.9rem; line-height: 1.5; color: var(--text-main); background: var(--bg-surface); padding: 0.65rem; border-radius: 4px; border-left: 3px solid var(--color-brown);">
                      ${cEffect}
                    </div>
                    <button type="button" class="tool-subnav-btn ${isSelected ? 'active' : ''}" style="width: 100%; margin-top: 0.75rem; justify-content: center;">
                      ${isSelected ? (isEn ? '✓ Selected' : '✓ Zvoleno') : (isEn ? 'Select Character' : 'Zvolit tuto postavu')}
                    </button>
                  </div>
                `;
              }).join('')}
            </div>

            <button type="button" class="tool-subnav-btn active" id="btn-confirm-turn" ${!p.chosenChar ? 'disabled style="opacity: 0.5;"' : ''} style="font-size: 1.1rem; padding: 0.85rem 2rem;">
              ${draftState.currentIdx < draftState.playerCount - 1 ? (isEn ? 'Confirm & Pass to Next Player ➔' : 'Potvrdit a předat dalšímu hráči ➔') : (isEn ? 'Finish Draft ➔' : 'Dokončit losování ➔')}
            </button>
          </div>
        </div>
      `;

      container.querySelectorAll('.draft-char-choice').forEach(cardEl => {
        cardEl.addEventListener('click', () => {
          const charId = cardEl.dataset.charId;
          p.chosenChar = p.choices.find(c => c.id === charId);
          renderRoleDraft(container);
        });
      });

      const confirmBtn = document.getElementById('btn-confirm-turn');
      if (confirmBtn && p.chosenChar) {
        confirmBtn.addEventListener('click', () => {
          if (draftState.currentIdx < draftState.playerCount - 1) {
            draftState.currentIdx++;
            draftState.revealed = false;
          } else {
            draftState.step = 'summary';
          }
          renderRoleDraft(container);
        });
      }
      return;
    }

    if (draftState.step === 'summary') {
      const sheriffPlayer = draftState.players.find(p => p.role === 'sheriff');

      container.innerHTML = `
        <div class="tool-card-box">
          <div class="tool-card-header">
            <h2><span>🎉</span> ${isEn ? 'Draft Completed! Game Ready!' : 'Losování dokončeno! Hra je připravena!'}</h2>
            <p class="tool-card-lead">${isEn ? 'Sheriff plays first and reveals their card publicly. All other roles remain strictly secret.' : 'Šerif hraje jako první a otočí kartu lícem nahoru. Všechny ostatní role zůstávají tajné!'}</p>
          </div>

          <div class="draft-card-wrap">
            ${sheriffPlayer ? `
              <div style="background: linear-gradient(135deg, #f39c12 0%, #d35400 100%); color: #ffffff; padding: 1.5rem; border-radius: var(--radius-md); margin-bottom: 1.5rem; box-shadow: var(--shadow-md);">
                <div style="font-size: 0.85rem; font-weight: 800; text-transform: uppercase;">${isEn ? 'Public Sheriff of the Town:' : 'Veřejný Šerif pro tuto hru:'}</div>
                <h2 style="font-family: 'Georgia', serif; font-size: 2.2rem; margin: 0.4rem 0;">⭐ ${sheriffPlayer.name}</h2>
                <div style="font-size: 1.15rem; font-weight: 700;">
                  ${isEn ? 'Character:' : 'Postava:'} ${sheriffPlayer.chosenChar ? (isEn ? (sheriffPlayer.chosenChar.nameEn || sheriffPlayer.chosenChar.name) : sheriffPlayer.chosenChar.name) : ''}
                  (+1 ${isEn ? 'bonus life' : 'život navíc'} = ${(sheriffPlayer.chosenChar ? sheriffPlayer.chosenChar.lives : 4) + 1} ❤️)
                </div>
              </div>
            ` : ''}

            <div style="text-align: left; background: var(--bg-surface); padding: 1.25rem; border-radius: var(--radius-md); border: 1px solid var(--border-color); margin-bottom: 1.5rem;">
              <h4 style="font-family: 'Georgia', serif; font-size: 1.15rem; color: var(--color-brown); margin-bottom: 0.75rem;">
                ${isEn ? 'Confidential Role Reminders (Tap to peek):' : 'Nápověda pro zapomnětlivé (Klepnutím diskrétně zkontroluj):'}
              </h4>
              <div style="display: flex; flex-direction: column; gap: 0.5rem;">
                ${draftState.players.map(p => `
                  <details style="background: var(--bg-card); border: 1px solid var(--border-color); border-radius: 6px; padding: 0.6rem 0.85rem;">
                    <summary style="font-weight: 700; cursor: pointer; color: var(--text-main);">
                      🔒 ${p.name} (${p.chosenChar ? (isEn ? (p.chosenChar.nameEn || p.chosenChar.name) : p.chosenChar.name) : ''})
                    </summary>
                    <div style="margin-top: 0.5rem; font-size: 0.92rem; color: var(--color-brown); font-weight: 800; border-top: 1px dashed var(--border-color); padding-top: 0.5rem;">
                      ${isEn ? 'Secret Role:' : 'Tajná role:'} ${p.role.toUpperCase()}
                    </div>
                  </details>
                `).join('')}
              </div>
            </div>

            <button type="button" class="btn-reset-filters" id="btn-restart-draft" style="font-weight: 700; font-size: 1rem; padding: 0.75rem 1.5rem;">
              🔄 ${isEn ? 'Start New Draft' : 'Spustit nové losování'}
            </button>
          </div>
        </div>
      `;

      document.getElementById('btn-restart-draft').addEventListener('click', () => {
        draftState.step = 'setup';
        renderRoleDraft(container);
      });
    }
  }

  // 4. VIRTUAL PLAYER BOARD
  function renderPlayerBoard(container) {
    const isEn = state.lang === 'en';
    const effectiveMaxLives = trackerState.maxLives + (trackerState.isSheriff ? 1 : 0);
    const handWarning = trackerState.hand > trackerState.lives;

    container.innerHTML = `
      <div class="tool-card-box">
        <div class="tool-card-header">
          <h2><span>🤠</span> ${isEn ? 'Virtual Player Board & Resource Tracker' : 'Virtuální deska a sledovač surovin'}</h2>
          <p class="tool-card-lead">${isEn ? 'Track lives, gold nuggets, charge cubes, and end-of-turn hand card limit right on your screen.' : 'Sledování životů, zlatých valounů, žetonů nabití a limitu karet na konci tahu přímo na displeji mobilu či tabletu.'}</p>
        </div>

        <div style="margin-bottom: 1.5rem; display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 0.75rem;">
          <label class="calc-checkbox-label" style="font-weight: 700; font-size: 1.05rem;">
            <input type="checkbox" id="chk-tracker-sheriff" ${trackerState.isSheriff ? 'checked' : ''}>
            <span>⭐️ ${isEn ? 'I am the Sheriff (+1 max life)' : 'Jsem Šerif (+1 max život navíc)'}</span>
          </label>
          <button type="button" class="btn-reset-filters" id="btn-reset-tracker">
            🔄 ${isEn ? 'Reset Tracker' : 'Resetovat desku'}
          </button>
        </div>

        <div class="tracker-board-grid">
          <div class="tracker-tile" style="border-top: 4px solid #c0392b;">
            <div class="tracker-tile-title">❤️ ${isEn ? 'Life Points (Bullets)' : 'Životy (Náboje)'}</div>
            <div class="tracker-counter-val" style="color: #c0392b;">${trackerState.lives} <span style="font-size: 1.4rem; color: var(--text-muted); font-weight: normal;">/ ${effectiveMaxLives}</span></div>
            <div class="tracker-btns-row">
              <button type="button" class="btn-counter" id="btn-lives-minus">−</button>
              <button type="button" class="btn-counter" id="btn-lives-plus">+</button>
            </div>
          </div>

          <div class="tracker-tile" style="border-top: 4px solid #f39c12;">
            <div class="tracker-tile-title">🪙 ${isEn ? 'Gold Nuggets (Gold Rush)' : 'Zlaté valouny (Zlatá horečka)'}</div>
            <div class="tracker-counter-val" style="color: #f39c12;">${trackerState.gold}</div>
            <div class="tracker-btns-row">
              <button type="button" class="btn-counter" id="btn-gold-minus">−</button>
              <button type="button" class="btn-counter" id="btn-gold-plus">+</button>
            </div>
          </div>

          <div class="tracker-tile" style="border-top: 4px solid #e67e22;">
            <div class="tracker-tile-title">🟧 ${isEn ? 'Load Cubes (Armed & Dangerous)' : 'Žetony nabití (Ozbrojení)'}</div>
            <div class="tracker-counter-val" style="color: #e67e22;">${trackerState.cubes}</div>
            <div class="tracker-btns-row">
              <button type="button" class="btn-counter" id="btn-cubes-minus">−</button>
              <button type="button" class="btn-counter" id="btn-cubes-plus">+</button>
            </div>
          </div>

          <div class="tracker-tile" style="border-top: 4px solid #2980b9;">
            <div class="tracker-tile-title">🃏 ${isEn ? 'Cards in Hand' : 'Karet v ruce'}</div>
            <div class="tracker-counter-val" style="color: #2980b9;">${trackerState.hand}</div>
            <div class="tracker-btns-row">
              <button type="button" class="btn-counter" id="btn-hand-minus">−</button>
              <button type="button" class="btn-counter" id="btn-hand-plus">+</button>
            </div>
          </div>
        </div>

        <div style="margin-top: 1.5rem; padding: 1rem 1.25rem; border-radius: var(--radius-sm); font-weight: 700; display: flex; align-items: center; gap: 0.6rem; ${handWarning ? 'background: rgba(192, 57, 43, 0.15); border: 1.5px solid #c0392b; color: #c0392b;' : 'background: rgba(39, 174, 96, 0.15); border: 1.5px solid #27ae60; color: #27ae60;'}">
          <span>${handWarning ? '⚠️' : '✅'}</span>
          <span>
            ${handWarning
              ? (isEn ? `Discard warning: You have ${trackerState.hand} cards in hand, but only ${trackerState.lives} lives! Discard ${trackerState.hand - trackerState.lives} cards at turn end.` : `Pozor na limit: Máš v ruce ${trackerState.hand} karet, ale jen ${trackerState.lives} životů! Ve 3. fázi musíš odhodit ${trackerState.hand - trackerState.lives} karet.`)
              : (isEn ? `Hand limit OK: You can keep up to ${trackerState.lives} cards in hand at end of turn.` : `Limit v pořádku: Na konci tahu ve 3. fázi smíš v ruce držet až ${trackerState.lives} karet.`)}
          </span>
        </div>
      </div>
    `;

    document.getElementById('chk-tracker-sheriff').addEventListener('change', (e) => {
      trackerState.isSheriff = e.target.checked;
      renderPlayerBoard(container);
    });

    document.getElementById('btn-reset-tracker').addEventListener('click', () => {
      trackerState.lives = 4;
      trackerState.gold = 0;
      trackerState.cubes = 0;
      trackerState.hand = 4;
      renderPlayerBoard(container);
    });

    document.getElementById('btn-lives-minus').addEventListener('click', () => {
      if (trackerState.lives > 0) {
        trackerState.lives--;
        renderPlayerBoard(container);
      }
    });

    document.getElementById('btn-lives-plus').addEventListener('click', () => {
      if (trackerState.lives < effectiveMaxLives + 2) {
        trackerState.lives++;
        renderPlayerBoard(container);
      }
    });

    document.getElementById('btn-gold-minus').addEventListener('click', () => {
      if (trackerState.gold > 0) {
        trackerState.gold--;
        renderPlayerBoard(container);
      }
    });

    document.getElementById('btn-gold-plus').addEventListener('click', () => {
      trackerState.gold++;
      renderPlayerBoard(container);
    });

    document.getElementById('btn-cubes-minus').addEventListener('click', () => {
      if (trackerState.cubes > 0) {
        trackerState.cubes--;
        renderPlayerBoard(container);
      }
    });

    document.getElementById('btn-cubes-plus').addEventListener('click', () => {
      trackerState.cubes++;
      renderPlayerBoard(container);
    });

    document.getElementById('btn-hand-minus').addEventListener('click', () => {
      if (trackerState.hand > 0) {
        trackerState.hand--;
        renderPlayerBoard(container);
      }
    });

    document.getElementById('btn-hand-plus').addEventListener('click', () => {
      trackerState.hand++;
      renderPlayerBoard(container);
    });
  }

  // 5. RULES QUIZ
  function renderRulesQuiz(container) {
    const isEn = state.lang === 'en';
    const questions = window.BANG_TOOLS ? window.BANG_TOOLS.QuizQuestions : [];

    const initQuiz = () => {
      quizState.questions = [...questions].sort(() => Math.random() - 0.5).slice(0, 10);
      quizState.idx = 0;
      quizState.score = 0;
      quizState.answered = false;
      quizState.selectedOption = null;
      quizState.finished = false;
    };

    if (quizState.questions.length === 0) {
      initQuiz();
    }

    if (quizState.finished) {
      let rankTitle = isEn ? '🤠 Prairie Greenhorn' : '🌵 Zelenáč z prérie';
      if (quizState.score === 10) rankTitle = isEn ? '🏆 Legendary Gunslinger of the West!' : '🏆 Legendární šerif Divokého západu!';
      else if (quizState.score >= 8) rankTitle = isEn ? '⭐ Feared Deputy' : '⭐ Obávaný zástupce šerifa';
      else if (quizState.score >= 5) rankTitle = isEn ? '🤠 Experienced Gunslinger' : '🤠 Zkušený pistolník';

      container.innerHTML = `
        <div class="tool-card-box">
          <div class="quiz-container" style="text-align: center; padding: 2rem 1rem;">
            <div style="font-size: 4rem; margin-bottom: 0.5rem;">🏆</div>
            <h2 style="font-family: 'Georgia', serif; font-size: 2.2rem; color: var(--color-brown); margin-bottom: 0.5rem;">
              ${isEn ? 'Quiz Finished!' : 'Kvíz dokončen!'}
            </h2>
            <div style="font-size: 2.5rem; font-weight: 900; color: var(--text-main); margin-bottom: 0.75rem;">
              ${quizState.score} / ${quizState.questions.length}
            </div>
            <div style="font-size: 1.3rem; font-weight: 800; color: var(--color-brown); margin-bottom: 1.5rem;">
              ${rankTitle}
            </div>
            <button type="button" class="tool-subnav-btn active" id="btn-restart-quiz" style="font-size: 1.1rem; padding: 0.85rem 2rem;">
              🔄 ${isEn ? 'Play Again' : 'Hrát znovu'}
            </button>
          </div>
        </div>
      `;

      document.getElementById('btn-restart-quiz').addEventListener('click', () => {
        initQuiz();
        renderRulesQuiz(container);
      });
      return;
    }

    const q = quizState.questions[quizState.idx];
    const qText = isEn ? q.questionEn : q.questionCs;
    const qOpts = isEn ? q.optionsEn : q.optionsCs;
    const qExp = isEn ? q.explanationEn : q.explanationCs;
    const progressPct = ((quizState.idx) / quizState.questions.length) * 100;

    container.innerHTML = `
      <div class="tool-card-box">
        <div class="tool-card-header">
          <h2><span>🏆</span> ${isEn ? 'BANG! Official Rules Quiz' : 'Westernový kvíz pravidel BANG!'}</h2>
          <p class="tool-card-lead">${isEn ? 'Test your expertise on official rulings, conflict situations, and tricky timing sequences.' : 'Otestujte své znalosti oficiálních pravidel a záludných sporných momentů.'}</p>
        </div>

        <div class="quiz-container">
          <div style="display: flex; justify-content: space-between; font-weight: 700; font-size: 0.88rem; margin-bottom: 0.4rem; color: var(--text-muted);">
            <span>${isEn ? 'Question' : 'Otázka'} ${quizState.idx + 1} / ${quizState.questions.length}</span>
            <span>${isEn ? 'Score:' : 'Skóre:'} ${quizState.score}</span>
          </div>

          <div class="quiz-progress-bar">
            <div class="quiz-progress-fill" style="width: ${progressPct}%;"></div>
          </div>

          <div class="quiz-question-text">${qText}</div>

          <div class="quiz-options-list">
            ${qOpts.map((opt, optIdx) => {
              let cls = 'quiz-opt-btn';
              if (quizState.answered) {
                if (optIdx === q.correctIndex) cls += ' correct';
                else if (optIdx === quizState.selectedOption) cls += ' wrong';
              }
              return `<button type="button" class="${cls}" data-opt="${optIdx}" ${quizState.answered ? 'disabled' : ''}>${opt}</button>`;
            }).join('')}
          </div>

          ${quizState.answered ? `
            <div class="quiz-explanation-box">
              <strong style="color: var(--color-brown); display: block; margin-bottom: 0.35rem;">
                ${quizState.selectedOption === q.correctIndex ? (isEn ? '✓ Correct!' : '✓ Správně!') : (isEn ? '✕ Incorrect!' : '✕ Špatně!')}
              </strong>
              <div>${qExp}</div>
            </div>

            <div style="text-align: right;">
              <button type="button" class="tool-subnav-btn active" id="btn-next-quiz-q" style="font-size: 1rem; padding: 0.75rem 1.75rem;">
                ${quizState.idx < quizState.questions.length - 1 ? (isEn ? 'Next Question ➔' : 'Další otázka ➔') : (isEn ? 'View Final Score ➔' : 'Zobrazit výsledek ➔')}
              </button>
            </div>
          ` : ''}
        </div>
      </div>
    `;

    container.querySelectorAll('.quiz-opt-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        if (quizState.answered) return;
        const chosen = parseInt(btn.dataset.opt, 10);
        quizState.selectedOption = chosen;
        quizState.answered = true;
        if (chosen === q.correctIndex) {
          quizState.score++;
          window.BANG_TOOLS.SoundFX.playCoin();
        } else {
          window.BANG_TOOLS.SoundFX.playRicochet();
        }
        renderRulesQuiz(container);
      });
    });

    const nextQBtn = document.getElementById('btn-next-quiz-q');
    if (nextQBtn) {
      nextQBtn.addEventListener('click', () => {
        if (quizState.idx < quizState.questions.length - 1) {
          quizState.idx++;
          quizState.answered = false;
          quizState.selectedOption = null;
        } else {
          quizState.finished = true;
        }
        renderRulesQuiz(container);
      });
    }
  }

  // 6. WESTERN SOUNDBOARD (AUTHENTIC CINEMATIC WILD WEST SOUNDS)
  function renderSoundboard(container) {
    const isEn = state.lang === 'en';
    const sounds = [
      { id: 'shot', icon: '💥', nameCs: 'Výstřel', nameEn: 'Gunshot', action: () => window.BANG_TOOLS.SoundFX.playShot() },
      { id: 'ricochet', icon: '⚡', nameCs: 'Odraz kulky', nameEn: 'Ricochet', action: () => window.BANG_TOOLS.SoundFX.playRicochet() },
      { id: 'dynamite', icon: '🧨', nameCs: 'Dynamit', nameEn: 'Dynamite', action: () => window.BANG_TOOLS.SoundFX.playDynamite() },
      { id: 'gatling', icon: '🔫', nameCs: 'Gatling', nameEn: 'Gatling', action: () => window.BANG_TOOLS.SoundFX.playGatling() },
      { id: 'indians', icon: '🏹', nameCs: 'Indiáni!', nameEn: 'Indians!', action: () => window.BANG_TOOLS.SoundFX.playIndians() },
      { id: 'rattlesnake', icon: '🐍', nameCs: 'Chřestýš', nameEn: 'Rattlesnake', action: () => window.BANG_TOOLS.SoundFX.playRattlesnake() },
      { id: 'jail', icon: '⛓️', nameCs: 'Vězení', nameEn: 'Jail', action: () => window.BANG_TOOLS.SoundFX.playJail() },
      { id: 'duel', icon: '⚔️', nameCs: 'Duel', nameEn: 'Duel', action: () => window.BANG_TOOLS.SoundFX.playDuel() },
      { id: 'beer', icon: '🍺', nameCs: 'Pivo', nameEn: 'Beer', action: () => window.BANG_TOOLS.SoundFX.playBeer() },
      { id: 'saloon', icon: '🎹', nameCs: 'Saloon piáno', nameEn: 'Saloon Piano', action: () => window.BANG_TOOLS.SoundFX.playSaloon() },
      { id: 'bell', icon: '🔔', nameCs: 'Umíráček', nameEn: 'Church Bell', action: () => window.BANG_TOOLS.SoundFX.playBell() },
      { id: 'train', icon: '🚂', nameCs: 'Parní vlak', nameEn: 'Steam Train', action: () => window.BANG_TOOLS.SoundFX.playTrain() },
      { id: 'coin', icon: '💰', nameCs: 'Zlaťáky', nameEn: 'Gold Coins', action: () => window.BANG_TOOLS.SoundFX.playCoin() },
      { id: 'whip', icon: '🤠', nameCs: 'Bič', nameEn: 'Bullwhip', action: () => window.BANG_TOOLS.SoundFX.playWhip() },
      { id: 'horse', icon: '🐎', nameCs: 'Kůň', nameEn: 'Mustang', action: () => window.BANG_TOOLS.SoundFX.playHorse() },
      { id: 'wilhelm', icon: '😱', nameCs: 'Wilhelmův křik', nameEn: 'Wilhelm Scream', action: () => window.BANG_TOOLS.SoundFX.playWilhelm() }
    ];

    container.innerHTML = `
      <div class="tool-card-box">
        <div class="tool-card-header">
          <h2><span>🔊</span> ${isEn ? 'Wild West Soundboard' : 'Westernový Soundboard'}</h2>
          <p class="tool-card-lead">${isEn ? 'Cinematic sound effects from the Wild West and BANG! game: Colt .45, Gatling, Indians!, Rattlesnake, Duel, Jail, and cold beer. Fully cached for 100% offline play.' : 'Filmové a herní zvukové efekty ze hry BANG! a Divokého západu: Colt .45, Gatling, Indiáni!, Chřestýš, Duel, Vězení i poctivé vychlazené pivo. Funguje 100% i offline bez internetu.'}</p>
        </div>

        <div class="soundboard-grid">
          ${sounds.map(s => `
            <div class="sound-tile" data-snd="${s.id}" role="button" tabindex="0" title="${isEn ? s.nameEn : s.nameCs}" aria-label="${isEn ? s.nameEn : s.nameCs}">
              <span class="sound-tile-icon">${s.icon}</span>
              <div class="sound-tile-name">${isEn ? s.nameEn : s.nameCs}</div>
            </div>
          `).join('')}
        </div>
      </div>
    `;

    container.querySelectorAll('.sound-tile').forEach(tile => {
      const play = () => {
        const sid = tile.dataset.snd;
        const targetSnd = sounds.find(s => s.id === sid);
        if (targetSnd) {
          tile.classList.add('sound-tile-playing');
          setTimeout(() => tile.classList.remove('sound-tile-playing'), 250);
          targetSnd.action();
        }
      };

      tile.addEventListener('click', play);
      tile.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          play();
        }
      });
    });
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

    if (els.soundToggle) {
      els.soundToggle.addEventListener('click', () => {
        state.soundEnabled = !state.soundEnabled;
        localStorage.setItem('bang_sound', state.soundEnabled ? 'true' : 'false');
        if (els.soundIcon) els.soundIcon.textContent = state.soundEnabled ? '🔊' : '🔇';
        if (window.BANG_TOOLS && window.BANG_TOOLS.SoundFX) {
          window.BANG_TOOLS.SoundFX.toggle(state.soundEnabled);
        }
      });
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
        if (state.activeTab !== 'katalog') {
          setTab('katalog');
        }
        renderCards();
      });
    }

    // Quick Tag Buttons
    if (els.catalogQuickTags) {
      els.catalogQuickTags.querySelectorAll('.quick-tag').forEach(btn => {
        btn.addEventListener('click', () => {
          els.catalogQuickTags.querySelectorAll('.quick-tag').forEach(b => b.classList.remove('active'));
          btn.classList.add('active');
          state.selectedQuickTag = btn.dataset.tag;
          renderCards();
        });
      });
    }

    // Tools Subnav Buttons
    if (els.toolsSubnav) {
      els.toolsSubnav.querySelectorAll('.tool-subnav-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          els.toolsSubnav.querySelectorAll('.tool-subnav-btn').forEach(b => b.classList.remove('active'));
          btn.classList.add('active');
          state.activeTool = btn.dataset.tool;
          renderTools();
        });
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
        state.selectedQuickTag = 'all';
        state.sortBy = 'name-asc';

        if (els.globalSearch) els.globalSearch.value = '';
        if (els.filterExpansion) els.filterExpansion.value = 'all';
        if (els.filterType) els.filterType.value = 'all';
        if (els.filterSuit) els.filterSuit.value = 'all';
        if (els.sortCards) els.sortCards.value = 'name-asc';

        if (els.catalogQuickTags) {
          els.catalogQuickTags.querySelectorAll('.quick-tag').forEach(b => {
            b.classList.toggle('active', b.dataset.tag === 'all');
          });
        }

        renderCards();
      });
    }

    // Mobile Collapsible Filter Sidebar
    if (els.filterSidebarToggle && els.filterSidebar) {
      const toggleFilters = (e) => {
        if (e && e.target && e.target.closest('#btn-reset-filters')) return;
        if (window.innerWidth <= 900 || window.matchMedia('(max-width: 900px)').matches) {
          const isOpen = els.filterSidebar.classList.toggle('is-open');
          els.filterSidebarToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
        }
      };

      els.filterSidebarToggle.addEventListener('click', toggleFilters);
      els.filterSidebarToggle.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          if (e.target.closest('#btn-reset-filters')) return;
          e.preventDefault();
          toggleFilters(e);
        }
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
      els.modalClose.addEventListener('touchend', (e) => {
        e.preventDefault();
        closeCardModal();
      });
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

    // Delegated click for "Zpět na obsah pravidel" and TOC links
    document.addEventListener('click', (e) => {
      const btnBack = e.target.closest('.btn-back-to-toc');
      if (btnBack) {
        e.preventDefault();
        e.stopPropagation();
        scrollToRulesToc();
        return;
      }

      const tocLink = e.target.closest('.rules-toc-link');
      if (tocLink) {
        e.preventDefault();
        e.stopPropagation();
        const href = tocLink.getAttribute('href') || '';
        const targetId = href.replace('#', '');
        const targetEl = document.getElementById(targetId);
        if (targetEl) {
          scrollToElement(targetEl, 12);
        }
        document.querySelectorAll('.rules-toc-link').forEach(l => l.classList.remove('active'));
        tocLink.classList.add('active');
        tocLink.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
      }
    });

    // Floating Scroll-to-Top Button (Desktop & Mobile)
    if (els.btnScrollTop) {
      const handleScroll = () => {
        const scrolled = window.scrollY || window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
        if (scrolled > 150) {
          els.btnScrollTop.classList.add('visible');
        } else {
          els.btnScrollTop.classList.remove('visible');
        }
      };
      window.addEventListener('scroll', handleScroll, { passive: true });
      document.addEventListener('scroll', handleScroll, { passive: true });
      handleScroll();

      els.btnScrollTop.addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
        try {
          document.documentElement.scrollTo({ top: 0, behavior: 'smooth' });
        } catch (_) {}
      });
    }

    window.addEventListener('hashchange', initRouting);
  }

  // DOMContentLoaded
  document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    if (els.soundIcon) {
      els.soundIcon.textContent = state.soundEnabled ? '🔊' : '🔇';
      if (window.BANG_TOOLS && window.BANG_TOOLS.SoundFX) {
        window.BANG_TOOLS.SoundFX.toggle(state.soundEnabled);
      }
    }
    initEvents();
    setLanguage(state.lang);
    initRouting();

    // Register Service Worker for Offline PWA
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('./sw.js').then((reg) => {
        console.log('[PWA] Service Worker registered with scope:', reg.scope);
      }).catch((err) => {
        console.warn('[PWA] Service Worker registration failed:', err);
      });
    }
  });
})();
