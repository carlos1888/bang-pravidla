const fs = require('fs');
const path = require('path');
const vm = require('vm');

const CARDS_DATA_PATH = path.resolve(__dirname, '../js/cards-data.js');
const CATALOG_PATH = path.resolve(__dirname, '../assets/cards/catalog.json');

function clean(s) {
  if (!s) return '';
  return s.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().replace(/[^a-z0-9]/g, '');
}

// Explicit overrides where names differ or special mapping is needed
const MANUAL_OVERRIDES = {
  // Roles
  'role-sheriff': 'assets/cards/01_zakladni_hra/sheriff.webp',
  'role-deputy': 'assets/cards/01_zakladni_hra/deputy-sheriff.webp',
  'role-outlaw': 'assets/cards/01_zakladni_hra/outlaw.webp',
  'role-renegade': 'assets/cards/01_zakladni_hra/renegade.webp',

  // Dodge City
  'card-binoculars': 'assets/cards/02_mesto_duchu/binocular.webp',
  'char-jose-delgado': 'assets/cards/02_mesto_duchu/jose-delgado.webp',

  // Gold Rush
  'equip-talisman': 'assets/cards/03_zlata_horecka/lucky-charm.webp',
  'equip-gold-rush': 'assets/cards/03_zlata_horecka/gold-rush-equipment.webp',
  'equip-gun-belt': 'assets/cards/03_zlata_horecka/gun-belt.webp',
  'equip-rum': 'assets/cards/03_zlata_horecka/rhum.webp',
  'equip-rattie-snake': 'assets/cards/03_zlata_horecka/raddie-snake.webp',

  // Armed & Dangerous
  'weapon-buntline-special-ad': 'assets/cards/04_ozbrojeni_a_nebezpecni/buntline-special.webp',

  // Train Robbery
  'char-benny-brawler': 'assets/cards/05_velka_vlakova_loupez/benny-brawler.webp',
  'char-evan-babbit': 'assets/cards/05_velka_vlakova_loupez/evan-babbit.webp',
  'char-jimmy-texas': 'assets/cards/05_velka_vlakova_loupez/jimmy-texas.webp',
  'char-manuelita': 'assets/cards/05_velka_vlakova_loupez/manuelita.webp',
  'train-leland': 'assets/cards/05_velka_vlakova_loupez/leland.webp',
  'card-train-robbery': 'assets/cards/05_velka_vlakova_loupez/train-robbery.webp',
  'card-map': 'assets/cards/05_velka_vlakova_loupez/map.webp',
  'card-knife-revolver': 'assets/cards/05_velka_vlakova_loupez/knife-revolver.webp',
  'card-refund': 'assets/cards/05_velka_vlakova_loupez/refund.webp',
  'card-full-steam': 'assets/cards/05_velka_vlakova_loupez/full-steam.webp',
  'card-switch': 'assets/cards/05_velka_vlakova_loupez/switch.webp',
  'card-evaded': 'assets/cards/05_velka_vlakova_loupez/evaded.webp',
  'railcar-circus-wagon': 'assets/cards/05_velka_vlakova_loupez/circus-wagon.webp',
  'railcar-express-car': 'assets/cards/05_velka_vlakova_loupez/express-card.webp',
  'railcar-caboose': 'assets/cards/05_velka_vlakova_loupez/caboose.webp',
  'railcar-ghost-car': 'assets/cards/05_velka_vlakova_loupez/ghost-car.webp',
  'station-boom-town': 'assets/cards/05_velka_vlakova_loupez/boom-town.webp',
  'station-dodgeville': 'assets/cards/05_velka_vlakova_loupez/dodgeville.webp',
  'station-deathwood': 'assets/cards/05_velka_vlakova_loupez/deathwood.webp',
  'station-tombrock': 'assets/cards/05_velka_vlakova_loupez/tombrock.webp',
  'station-yooma': 'assets/cards/05_velka_vlakova_loupez/yooma.webp',
  'station-fort-woth': 'assets/cards/05_velka_vlakova_loupez/fort-wroth.webp',
  'station-santa-fe': 'assets/cards/05_velka_vlakova_loupez/san-tafe.webp',
  'station-callico': 'assets/cards/05_velka_vlakova_loupez/catico.webp',
  'station-cripple-crack': 'assets/cards/05_velka_vlakova_loupez/creepy-creek.webp',
  'station-virginian-city': 'assets/cards/05_velka_vlakova_loupez/virginia-town.webp',
  'station-oathman': 'assets/cards/05_velka_vlakova_loupez/miner-s-oath.webp',
  'station-st-francis': 'assets/cards/05_velka_vlakova_loupez/frisco.webp',

  // Valley of Shadows
  'char-tuco-the-franciscan': 'assets/cards/06_udoli_stinu/tuco-franziskaner.webp',
  'card-return-fire': 'assets/cards/06_udoli_stinu/backfire.webp',
  'card-double-shot': 'assets/cards/06_udoli_stinu/fanning.webp',

  // High Noon
  'event-the-preacher': 'assets/cards/07_prave_poledne/the-reverend.webp',

  // A Fistful of Cards
  'event-abandoned-mine': 'assets/cards/08_pest_plna_karet/abonded-mine.webp',

  // Legends
  'legend-bart-cassidy': 'assets/cards/10_legendy/bart-cassidy-legend.webp',
  'legend-black-jack': 'assets/cards/10_legendy/black-jack-legend.webp',
  'legend-calamity-janet': 'assets/cards/10_legendy/calamity-janet-legend.webp',
  'legend-el-gringo': 'assets/cards/10_legendy/el-gringo-legend.webp',
  'legend-jourdonnais': 'assets/cards/10_legendy/jourdonnais-legend.webp',
  'legend-lucky-duke': 'assets/cards/10_legendy/lucky-duke-legend.webp',
  'legend-paul-regret': 'assets/cards/10_legendy/paul-regret-legend.webp',
  'legend-rose-doolan': 'assets/cards/10_legendy/rose-doolan-legend.webp',
  'legend-sid-ketchum': 'assets/cards/10_legendy/sid-ketchum-legend.webp',
  'legend-slab-the-killer': 'assets/cards/10_legendy/slab-the-killer-legend.webp',
  'legend-suzy-lafayette': 'assets/cards/10_legendy/suzy-lafayette-legend.webp',
  'legend-vulture-sam': 'assets/cards/10_legendy/vulture-sam-legend.webp',
  'legend-willy-the-kid': 'assets/cards/10_legendy/willy-the-kid-legend.webp',
  'feat-vlak-do-yoomy': 'assets/cards/10_legendy/3-15-to-yooma-legend.webp',
  'feat-hrdlo-lahve': 'assets/cards/10_legendy/bottleneck-legend.webp',

  // Dynamite Box / Extra
  'char-claus-the-saint': 'assets/cards/11_extra_karty/claus-the-saint.webp',
  'char-johnny-kisch': 'assets/cards/11_extra_karty/johnny-kisch.webp',
  'char-uncle-will': 'assets/cards/11_extra_karty/uncle-will.webp',
  'char-annie-versary': 'assets/cards/11_extra_karty/annie-versary.webp',
  'char-emiliano': 'assets/cards/11_extra_karty/emiliano.webp',
  'card-new-identity': 'assets/cards/11_extra_karty/new-identity.webp',
  'card-handcuffs': 'assets/cards/11_extra_karty/handcuffs.webp'
};

const EXP_TO_FOLDERS = {
  'base': ['01_zakladni_hra', '11_extra_karty'],
  'dodge-city': ['02_mesto_duchu'],
  'gold-rush': ['03_zlata_horecka'],
  'armed-dangerous': ['04_ozbrojeni_a_nebezpecni'],
  'train-robbery': ['05_velka_vlakova_loupez'],
  'valley-of-shadows': ['06_udoli_stinu'],
  'high-noon': ['07_prave_poledne'],
  'fistful-of-cards': ['08_pest_plna_karet'],
  'wild-west-show': ['09_divoky_zapad'],
  'legends': ['10_legendy'],
  'dynamite-box': ['11_extra_karty']
};

function main() {
  if (!fs.existsSync(CATALOG_PATH)) {
    console.error('Catalog does not exist yet. Please wait for convert_to_webp.js to finish.');
    process.exit(1);
  }

  const catalog = JSON.parse(fs.readFileSync(CATALOG_PATH, 'utf8'));
  const rawJs = fs.readFileSync(CARDS_DATA_PATH, 'utf8');

  const ctx = { window: {} };
  vm.runInNewContext(rawJs, ctx);
  const bangCards = ctx.window.BANG_CARDS;

  let linkedCount = 0;
  let unlinked = [];

  bangCards.forEach(card => {
    // Check manual override first
    if (MANUAL_OVERRIDES[card.id]) {
      card.image = MANUAL_OVERRIDES[card.id];
      linkedCount++;
      return;
    }

    const allowedFolders = EXP_TO_FOLDERS[card.expansion] || [];
    const candidates = catalog.filter(c => allowedFolders.includes(c.origFolder.toLowerCase()));

    const cNameEn = clean(card.nameEn);
    const cNameCs = clean(card.name);

    // Try finding in same expansion
    let match = candidates.find(item => {
      const origClean = clean(item.origTitle);
      return origClean === cNameEn || origClean === cNameCs;
    });

    // Try searching all catalog
    if (!match) {
      match = catalog.find(item => {
        const origClean = clean(item.origTitle);
        return origClean === cNameEn || origClean === cNameCs;
      });
    }

    if (match) {
      card.image = match.webPath;
      linkedCount++;
    } else {
      card.image = null;
      unlinked.push(card);
    }
  });

  console.log(`Successfully linked ${linkedCount} / ${bangCards.length} cards to WebP images!`);
  console.log(`Cards without images: ${unlinked.length}`);
  if (unlinked.length > 0) {
    console.log('Unlinked cards:');
    unlinked.forEach(c => console.log(`  [${c.expansion}] ${c.id}: ${c.name} (${c.nameEn})`));
  }

  // Write updated cards-data.js
  const outputCode = `// BANG! Definitive Card Database (Clean Text-Only & Bilingual)
window.BANG_CARDS = ${JSON.stringify(bangCards, null, 2)};
`;

  fs.writeFileSync(CARDS_DATA_PATH, outputCode, 'utf8');
  console.log(`Updated ${CARDS_DATA_PATH} successfully!`);
}

main();
