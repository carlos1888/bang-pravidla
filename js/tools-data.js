// BANG! Interactive Tools Data & Engine (100% Client-Side, No Database)
(function() {
  'use strict';

  // =========================================================================
  // 1. AUTHENTIC WILD WEST AUDIO ENGINE (HIGH QUALITY SOUND EFFECTS)
  // =========================================================================
  let soundEnabled = true;

  const AUDIO_PATHS = {
    shot: 'assets/audio/gunshot.mp3',
    ricochet: 'assets/audio/ricochet.m4a',
    dynamite: 'assets/audio/dynamite.m4a',
    beer: 'assets/audio/beer.m4a',
    bell: 'assets/audio/church_bell.m4a',
    train: 'assets/audio/steam_train.m4a',
    coins: 'assets/audio/coins.m4a',
    whip: 'assets/audio/whip.m4a',
    horse: 'assets/audio/horse.m4a',
    saloon: 'assets/audio/saloon_piano.m4a',
    wilhelm: 'assets/audio/wilhelm.m4a',
    gatling: 'assets/audio/gatling.m4a',
    indians: 'assets/audio/indians.m4a',
    rattlesnake: 'assets/audio/rattlesnake.m4a',
    jail: 'assets/audio/jail.m4a',
    duel: 'assets/audio/duel.m4a'
  };

  const audioCache = {};

  function playAudioFile(key) {
    if (!soundEnabled) return;
    const path = AUDIO_PATHS[key];
    if (!path) return;
    try {
      if (!audioCache[key]) {
        audioCache[key] = new Audio(path);
      }
      const sound = audioCache[key].cloneNode();
      sound.volume = 0.95;
      const promise = sound.play();
      if (promise && promise.catch) {
        promise.catch((err) => {
          console.warn('[Audio] Playback issue:', err);
        });
      }
    } catch (e) {
      console.warn('[Audio] Audio error:', e);
    }
  }

  const SoundFX = {
    isEnabled: () => soundEnabled,
    toggle: (enable) => {
      soundEnabled = enable !== undefined ? enable : !soundEnabled;
      return soundEnabled;
    },
    play: (id) => playAudioFile(id),
    playShot: () => playAudioFile('shot'),
    playRicochet: () => playAudioFile('ricochet'),
    playDynamite: () => playAudioFile('dynamite'),
    playBeer: () => playAudioFile('beer'),
    playBell: () => playAudioFile('bell'),
    playTrain: () => playAudioFile('train'),
    playCoin: () => playAudioFile('coins'),
    playWhip: () => playAudioFile('whip'),
    playHorse: () => playAudioFile('horse'),
    playSaloon: () => playAudioFile('saloon'),
    playWilhelm: () => playAudioFile('wilhelm'),
    playGatling: () => playAudioFile('gatling'),
    playIndians: () => playAudioFile('indians'),
    playRattlesnake: () => playAudioFile('rattlesnake'),
    playJail: () => playAudioFile('jail'),
    playDuel: () => playAudioFile('duel')
  };

  // =========================================================================
  // 2. RULES QUIZ QUESTIONS (BILINGUAL CS & EN)
  // =========================================================================
  const BANG_QUIZ_QUESTIONS = [
    {
      id: 'q1',
      questionCs: 'Když ve hře zbývají pouze poslední 2 hráči (např. Šerif a Odpadlík), jak funguje karta Pivo?',
      questionEn: 'When only 2 players remain in the game (e.g. Sheriff and Renegade), how does the Beer card work?',
      optionsCs: [
        'Léčí normálně 1 život.',
        'Nemá žádný účinek a nelze s ní léčit.',
        'Může ji zahrát pouze Šerif, ale ne Odpadlík.',
        'Léčí 2 životy najednou.'
      ],
      optionsEn: [
        'Heals 1 life point as usual.',
        'Has no effect and cannot heal.',
        'Can only be played by the Sheriff, not the Renegade.',
        'Heals 2 life points at once.'
      ],
      correctIndex: 1,
      explanationCs: 'Oficiální pravidlo: Jakmile ve hře zbývají pouze 2 hráči, karta Pivo ztrácí veškerý svůj účinek (ve Zlaté horečce ji lze pouze směnit za 1 valoun zlata).',
      explanationEn: 'Official rule: As soon as only 2 players remain in the game, Beer loses all healing effect (in Gold Rush it can only be traded for 1 gold nugget).'
    },
    {
      id: 'q2',
      questionCs: 'Může se karta Pivo zahrát mimo svůj vlastní tah?',
      questionEn: 'Can a Beer card be played outside of your own turn?',
      optionsCs: [
        'Ano, kdykoli jste zraněni a chcete si doplnit život.',
        'Ne, Pivo se smí hrát výhradně ve 2. fázi vlastního tahu.',
        'Pouze tehdy, pokud jste utrpěli smrtelný zásah (poslední život).',
        'Ano, ale pouze pokud s tím souhlasí Šerif.'
      ],
      optionsEn: [
        'Yes, whenever you take damage and want to heal.',
        'No, Beer can only ever be played in Phase 2 of your turn.',
        'Only if you have just taken lethal damage (loss of your last life).',
        'Yes, but only if the Sheriff permits it.'
      ],
      correctIndex: 2,
      explanationCs: 'Oficiální pravidlo: Mimo svůj tah můžete Pivo zahrát VÝHRADNĚ tehdy, pokud byste právě ztratili svůj poslední život (smrtelný zásah), abyste zůstali na 1 životě.',
      explanationEn: 'Official rule: Outside of your turn, you may ONLY play Beer if you have just taken lethal damage to prevent death and stay at 1 life.'
    },
    {
      id: 'q3',
      questionCs: 'Pokud má hráč před sebou vyložený Dynamit i Vězení, která karta se na začátku tahu vyhodnocuje jako první?',
      questionEn: 'If a player has both Dynamite and Jail in front of them, which card is resolved first at the start of their turn?',
      optionsCs: [
        'Vždy nejprve Vězení.',
        'Vždy nejprve Dynamit.',
        'Hráč si může sám vybrat pořadí.',
        'Rozhoduje Šerif.'
      ],
      optionsEn: [
        'Always Jail first.',
        'Always Dynamite first.',
        'The player chooses the order.',
        'The Sheriff decides.'
      ],
      correctIndex: 1,
      explanationCs: 'Oficiální pravidlo: Dynamit se VŽDY vyhodnocuje před Vězením. Pokud Dynamit hráče nezabije, teprve poté snímá na Vězení.',
      explanationEn: 'Official rule: Dynamite is ALWAYS resolved before Jail. If Dynamite does not eliminate the player, they then check for Jail.'
    },
    {
      id: 'q4',
      questionCs: 'Mění vyložené zbraně (např. Winchester s dostřelem 5) skutečnou vzdálenost pro zahrání karty Panika!?',
      questionEn: 'Do equipped weapons (e.g. Winchester with range 5) modify the actual distance for playing Panic!?',
      optionsCs: [
        'Ano, s Winchesterem můžete zahrát Paniku! na vzdálenost 5.',
        'Ne! Zbraně určují pouze dostřel pro kartu BANG!, nikoli skutečnou vzdálenost.',
        'Ano, ale pouze pokud máte vyložený i Mustang.',
        'Pouze pokud jste Šerif.'
      ],
      optionsEn: [
        'Yes, with Winchester you can play Panic! at distance 5.',
        'No! Weapons only modify range for BANG! cards, never actual distance.',
        'Yes, but only if you also have a Mustang.',
        'Only if you are the Sheriff.'
      ],
      correctIndex: 1,
      explanationCs: 'Zlaté pravidlo hry BANG!: Zbraně v žádném případě nezkracují vzdálenost! Panika! vyžaduje skutečnou vzdálenost 1, kterou lze zkrátit pouze Hledím nebo Dalekohledem.',
      explanationEn: 'Golden Rule of BANG!: Weapons never modify actual distance! Panic! requires actual distance 1, which can only be reduced by Appaloosa/Scope or character abilities.'
    },
    {
      id: 'q5',
      questionCs: 'Co se stane, pokud Šerif osobně zabije svého vlastního Pomocníka (Zástupce)?',
      questionEn: 'What happens if the Sheriff personally eliminates their own Deputy?',
      optionsCs: [
        'Nic, je to běžné riziko hry.',
        'Šerif musí za trest odhodit všechny své karty z ruky i ze hry před sebou.',
        'Šerif okamžitě prohrává celou hru.',
        'Šerif ztratí 2 životy.'
      ],
      optionsEn: [
        'Nothing, it is a normal risk of play.',
        'The Sheriff must discard all cards from hand and in play in front of them.',
        'The Sheriff immediately loses the game.',
        'The Sheriff loses 2 life points.'
      ],
      correctIndex: 1,
      explanationCs: 'Oficiální trest: Zabije-li Šerif svého Pomocníka, musí okamžitě odhodit veškeré karty z ruky i ze stolu před sebou (včetně zbraní a vybavení).',
      explanationEn: 'Official penalty: If the Sheriff personally eliminates a Deputy, they must immediately discard all cards from hand and from play in front of them.'
    },
    {
      id: 'q6',
      questionCs: 'Kdo získá odměnu 3 karty z dobíracího balíčku za zabití Bandity?',
      questionEn: 'Who collects the reward of 3 cards from the draw deck for killing an Outlaw?',
      optionsCs: [
        'Pouze Šerif a Pomocník.',
        'Kdokoli, kdo zasadil Banditovi smrtící úder – dokonce i jiný Bandita!',
        'Pouze Odpadlík.',
        'Nikdo, karty se rozdělí rovným dílem.'
      ],
      optionsEn: [
        'Only Sheriff and Deputies.',
        'Whoever dealt the lethal blow to the Outlaw – even another Outlaw!',
        'Only the Renegade.',
        'Nobody, cards are split equally.'
      ],
      correctIndex: 1,
      explanationCs: 'Oficiální pravidlo: Kdokoli eliminuje Banditu (i když je sám Bandita nebo Odpadlík), získá za odměnu 3 karty z balíčku.',
      explanationEn: 'Official rule: Whoever eliminates an Outlaw (even if they are another Outlaw or Renegade) draws 3 reward cards from the deck.'
    },
    {
      id: 'q7',
      questionCs: 'Jak fungují zelené karty z rozšíření Dodge City (Město duchů)?',
      questionEn: 'How do green cards from the Dodge City expansion work?',
      optionsCs: [
        'Hrají se přímo z ruky a ihned se odhodí.',
        'Vykládají se před sebe, ale jejich efekt lze použít až od vašeho DALŠÍHO tahu.',
        'Smí je vykládat pouze vyřazení hráči.',
        'Lze je použít nekonečněkrát za hru.'
      ],
      optionsEn: [
        'They are played straight from hand and discarded.',
        'They are placed in play in front of you, but can only be used starting on your NEXT turn.',
        'Only eliminated players may play them.',
        'They can be activated infinitely often.'
      ],
      correctIndex: 1,
      explanationCs: 'Oficiální pravidlo zelených karet: Vyložíte je před sebe ve 2. fázi. V tomtéž tahu je však NESMÍTE použít – jsou připravené až od vašeho příštího tahu (nebo mimo tah na obranu). Při použití se odhodí.',
      explanationEn: 'Official green card rule: You play them in front of you during Phase 2. You CANNOT use them on the turn they are played; they become ready from your next turn onward. When activated, they are discarded.'
    },
    {
      id: 'q8',
      questionCs: 'Pokud Slab the Killer vystřelí BANG!, kolik karet Vedle! musí cíl zahrát, aby se vyhnul zásahu?',
      questionEn: 'When Slab the Killer plays a BANG!, how many Missed! cards must the target play to avoid being hit?',
      optionsCs: [
        '1 kartu Vedle! jako obvykle.',
        '2 karty Vedle! (nebo 2x úspěšný Barel / kombinaci)',
        '3 karty Vedle!',
        'Proti Slabovi se nelze vůbec bránit.'
      ],
      optionsEn: [
        '1 Missed! card as usual.',
        '2 Missed! cards (or 2 barrel successes / combination).',
        '3 Missed! cards.',
        'Slab cannot be dodged at all.'
      ],
      correctIndex: 1,
      explanationCs: 'Schopnost postavy Slab the Killer: Cíl musí na zrušení jeho BANG! zahrát celkem 2 karty Vedle! (nebo uspět s Barelem a doplatit 1 Vedle!).',
      explanationEn: 'Slab the Killer ability: The target must play 2 Missed! cards to cancel his BANG! (or 1 successful Barrel draw + 1 Missed! card).'
    },
    {
      id: 'q9',
      questionCs: 'Může být na Šerifa zahrána karta Vězení?',
      questionEn: 'Can the Jail card be played on the Sheriff?',
      optionsCs: [
        'Ano, pokud na něj hráč dostřelí.',
        'Ne, Šerif je vůči kartě Vězení plně imunní.',
        'Pouze pokud už byl zabit jeden Pomocník.',
        'Pouze pokud má vyložený Volcanic.'
      ],
      optionsEn: [
        'Yes, if the player is within range.',
        'No, the Sheriff is completely immune to the Jail card.',
        'Only if a Deputy has already died.',
        'Only if the Sheriff has a Volcanic.'
      ],
      correctIndex: 1,
      explanationCs: 'Oficiální pravidlo: Na Šerifa NELZE za žádných okolností zahrát kartu Vězení!',
      explanationEn: 'Official rule: The Sheriff can NEVER be put in Jail under any circumstances!'
    },
    {
      id: 'q10',
      questionCs: 'Jak může Odpadlík (Renegade) vyhrát celou hru?',
      questionEn: 'How can the Renegade win the game?',
      optionsCs: [
        'Zabije Šerifa hned v 1. kole.',
        'Zabije všechny Bandity a nechá Šerifa naživu.',
        'Zůstane jako úplně poslední živý ve hře – Šerifa musí zabít až v závěrečném duelu 1 na 1!',
        'Musí nasbírat 10 valounů zlata.'
      ],
      optionsEn: [
        'Eliminates the Sheriff in round 1.',
        'Eliminates all Outlaws and leaves the Sheriff alive.',
        'Must be the last surviving player – eliminating the Sheriff in a final 1-on-1 duel!',
        'Must collect 10 gold nuggets.'
      ],
      correctIndex: 2,
      explanationCs: 'Oficiální cíl Odpadlíka: Odpadlík vyhrává pouze tehdy, pokud zůstane jako poslední přeživší ve hře. Pokud Šerif zemře dříve, než jsou eliminováni všichni ostatní, automaticky vítězí Bandité!',
      explanationEn: 'Renegade victory condition: The Renegade only wins if they are the last surviving player. If the Sheriff dies while other players are still alive, the Outlaws instantly win!'
    }
  ];

  // =========================================================================
  // 3. DISTANCE CALCULATOR ENGINE
  // =========================================================================
  const DistanceCalc = {
    weapons: [
      { id: 'colt', nameCs: 'Colt .45 (základní)', nameEn: 'Colt .45 (Default)', range: 1 },
      { id: 'volcanic', nameCs: 'Volcanic (dostřel 1, vícenásobný BANG!)', nameEn: 'Volcanic (Range 1, multi BANG!)', range: 1 },
      { id: 'schofield', nameCs: 'Schofield (dostřel 2)', nameEn: 'Schofield (Range 2)', range: 2 },
      { id: 'remington', nameCs: 'Remington (dostřel 3)', nameEn: 'Remington (Range 3)', range: 3 },
      { id: 'rev-carabine', nameCs: 'Rev. Carabine (dostřel 4)', nameEn: 'Rev. Carabine (Range 4)', range: 4 },
      { id: 'winchester', nameCs: 'Winchester (dostřel 5)', nameEn: 'Winchester (Range 5)', range: 5 }
    ],

    // Calculate circular seat distance between two player indices in a circle of N players
    getSeatDistance: (fromIdx, toIdx, totalPlayers) => {
      if (fromIdx === toIdx) return 0;
      const direct = Math.abs(fromIdx - toIdx);
      return Math.min(direct, totalPlayers - direct);
    },

    // Get clockwise and counter-clockwise distances and which is shortest
    getDirectionDetails: (fromIdx, toIdx, totalPlayers) => {
      if (fromIdx === toIdx) {
        return { clockwise: 0, counterClockwise: 0, shortest: 0, direction: 'same' };
      }
      const clockwise = (toIdx - fromIdx + totalPlayers) % totalPlayers;
      const counterClockwise = (fromIdx - toIdx + totalPlayers) % totalPlayers;
      const shortest = Math.min(clockwise, counterClockwise);
      let direction = 'cw';
      if (counterClockwise < clockwise) direction = 'ccw';
      else if (counterClockwise === clockwise) direction = 'both';
      return { clockwise, counterClockwise, shortest, direction };
    },

    // Calculate effective actual distance and weapon reach
    calculate: (params) => {
      const {
        shooterIdx = 0,
        targetIdx = 1,
        totalPlayers = 5,
        shooterWeaponRange = 1,
        shooterAppaloosa,   // -1
        shooterBinoculars,  // -1
        shooterRoseDoolan,  // -1
        targetMustang,      // +1
        targetHideout,      // +1
        targetPaulRegret,   // +1
        globalZvonice       // forces distance to 1
      } = params;

      const directionDetails = DistanceCalc.getDirectionDetails(shooterIdx, targetIdx, totalPlayers);
      const seatDistance = directionDetails.shortest;

      if (globalZvonice) {
        return {
          seatDistance,
          directionDetails,
          actualDistance: 1,
          weaponRange: shooterWeaponRange,
          canBang: shooterWeaponRange >= 1,
          canPanic: true,
          canDuel: true,
          canCatBalou: true,
          targetMods: 0,
          targetBreakdown: [],
          shooterMods: 0,
          shooterBreakdown: [],
          notes: ['🔔 Zvonice: Všichni hráči se vidí na vzdálenost 1!']
        };
      }

      let targetMods = 0;
      const targetBreakdown = [];
      if (targetMustang) { targetMods += 1; targetBreakdown.push('Mustang (+1)'); }
      if (targetHideout) { targetMods += 1; targetBreakdown.push('Skrýš (+1)'); }
      if (targetPaulRegret) { targetMods += 1; targetBreakdown.push('Paul Regret (+1)'); }

      let shooterMods = 0;
      const shooterBreakdown = [];
      if (shooterAppaloosa) { shooterMods += 1; shooterBreakdown.push('Hledí (-1)'); }
      if (shooterBinoculars) { shooterMods += 1; shooterBreakdown.push('Dalekohled (-1)'); }
      if (shooterRoseDoolan) { shooterMods += 1; shooterBreakdown.push('Rose Doolan (-1)'); }

      // Actual distance formula: seatDistance + targetMods - shooterMods
      let actualDistance = seatDistance + targetMods - shooterMods;
      if (actualDistance < 1) actualDistance = 1; // Distance can never be less than 1

      const canBang = shooterWeaponRange >= actualDistance;
      const canPanic = actualDistance === 1;

      return {
        seatDistance,
        directionDetails,
        targetMods,
        targetBreakdown,
        shooterMods,
        shooterBreakdown,
        actualDistance,
        weaponRange: shooterWeaponRange,
        canBang,
        canPanic,
        canDuel: true,
        canCatBalou: true
      };
    }
  };

  // =========================================================================
  // 4. CARD COUNTERS & SYNERGIES ENGINE
  // =========================================================================
  const CARD_SYNERGIES_DB = {
    'bang': {
      countersCs: [
        '🛡️ Karta Vedle! (ruší 1 zásah z karty BANG!)',
        '🛢️ Barel (snímání srdcové barvy ♥ odvrací zásah bez ztráty karty)',
        '🥋 Úskok / Pancéřová deska / Sombrero / Železný plát (alternativní obrany z rozšíření)',
        '☕ Bylinkový čaj (při utrpění zásahu okamžitě léčí 1 život)',
        '🤠 Schopnost Jourdonnaise (má v sobě vestavěný Barel pro každý útok)'
      ],
      countersEn: [
        '🛡️ Missed! card (cancels 1 BANG! hit)',
        '🛢️ Barrel (drawing Heart ♥ evades hit without discarding cards)',
        '🥋 Dodge / Iron Plate / Sombrero (expansion defensive alternatives)',
        '☕ Herbal Tea (instantly restores lost life point upon taking hit)',
        '🤠 Jourdonnais ability (built-in Barrel on every incoming attack)'
      ],
      synergiesCs: [
        '🔫 Willy the Kid (může zahrát libovolný počet karet BANG! za tah)',
        '💀 Slab the Killer (na odvrácení jeho BANG! jsou nutné 2 efekty Vedle!)',
        '🔄 Calamity Janet (může hrát libovolnou kartu Vedle! jako BANG!)',
        '🎯 Doc Holyday (může odhodit libovolné 2 karty za efekt BANG! nad limit)',
        '⚡ Mexicali Kid (může platit žetony nabití za extra BANG!)'
      ],
      synergiesEn: [
        '🔫 Willy the Kid (can play unlimited BANG! cards per turn)',
        '💀 Slab the Killer (requires 2 Missed! effects to cancel)',
        '🔄 Calamity Janet (can play any Missed! card as a BANG!)',
        '🎯 Doc Holyday (can discard any 2 cards for extra BANG! effect)',
        '⚡ Mexicali Kid (spends load tokens for extra BANG!)'
      ]
    },
    'vedle': {
      countersCs: [
        '💀 Slab the Killer (vyžaduje 2 efekty Vedle!, 1 karta nestačí)',
        '🏹 Indiáni! (karta Vedle! proti nim nefunguje, vyžadují pouze odhození BANG!)'
      ],
      countersEn: [
        '💀 Slab the Killer (requires 2 Missed! effects, 1 is not enough)',
        '🏹 Indians! (Missed! cannot cancel Indians, requires discarding BANG!)'
      ],
      synergiesCs: [
        '🔄 Calamity Janet (může hrát Vedle! jako útočný BANG!)',
        '🃏 Elena Fuente (může použít jakoukoli kartu ze své ruky jako Vedle!)'
      ],
      synergiesEn: [
        '🔄 Calamity Janet (can play Missed! as BANG!)',
        '🃏 Elena Fuente (can play any card from hand as Missed!)'
      ]
    },
    'barel': {
      countersCs: [
        '🔥 Panika! / Cat Balou (odstraní Barel ze stolu před střelbou)',
        '💃 Belle Star (v jejím tahu soupeřovy vyložené karty jako Barel neplatí)',
        '💀 Slab the Killer (Barel dá nanejvýš 1 Vedle!, je nutná ještě 2. obrana z ruky)'
      ],
      countersEn: [
        '🔥 Panic! / Cat Balou (removes Barrel from table before shooting)',
        '💃 Belle Star (during her turn opponent table cards like Barrel have no effect)',
        '💀 Slab the Killer (Barrel yields at most 1 Missed!, 2nd defense still required)'
      ],
      synergiesCs: [
        '🤠 Jourdonnais (má vestavěný Barel – s dalším vyloženým má 2 pokusy na srdce!)',
        '🍀 Lucky Duke (při snímání otáčí 2 karty a vybírá výhodnější výsledek)'
      ],
      synergiesEn: [
        '🤠 Jourdonnais (inherent Barrel – with equipped Barrel gets 2 draw checks!)',
        '🍀 Lucky Duke (draws 2 cards during checks and picks the preferred result)'
      ]
    },
    'dynamit': {
      countersCs: [
        '🔥 Cat Balou / Panika! (odhození nebo ukradení před výbuchem)',
        '💣 Plechovka / Kočár / Katastrofa / Odstřelit (bezpečné odstranění ze stolu)'
      ],
      countersEn: [
        '🔥 Cat Balou / Panic! (discard or steal before explosion)',
        '💣 Can-can / Coach / Catastrophe (safe removal from table)'
      ],
      synergiesCs: [
        '🍀 Lucky Duke (otáčí 2 karty při snímání – snáze se vyhne pikovým 2–9)',
        '🪦 Pedro Ramirez (může si vzít vybuchlý/odhozený Dynamit z odhazovacího balíčku)'
      ],
      synergiesEn: [
        '🍀 Lucky Duke (draws 2 cards when checking, evades Spades 2-9 easily)',
        '🪦 Pedro Ramirez (can draw discarded Dynamite from discard pile)'
      ]
    },
    'vezeni': {
      countersCs: [
        '♥️ Snímání karty (srdcová barva ♥ = okamžitý úspěšný útěk)',
        '🌟 Pravidlo Legend (lze z ruky odhodit 1 ♥ kartu a odehrát tah bez snímání!)',
        '🔥 Cat Balou / Panika! od spojence (např. Pomocník osvobodí Šerifa)'
      ],
      countersEn: [
        '♥️ Card draw check (Hearts ♥ = instant successful escape)',
        '🌟 Legends Rule (may discard 1 ♥ card from hand to take turn without checking!)',
        '🔥 Cat Balou / Panic! played by an ally to liberate you'
      ],
      synergiesCs: [
        '⚠️ Na Šerifa nelze Vězení nikdy zahrát!',
        '🎯 Ideální vyřazení nebezpečného Bandity s Volcanicem nebo Slab the Killera'
      ],
      synergiesEn: [
        '⚠️ Jail can never be played on the Sheriff!',
        '🎯 Ideal to incapacitate dangerous outlaws or Volcanic users'
      ]
    },
    'volcanic': {
      countersCs: [
        '🔥 Panika! / Cat Balou (zničení zbraně dříve, než hráč spustí salvu)',
        '💃 Belle Star (ignoruje soupeřovy zbraně)'
      ],
      countersEn: [
        '🔥 Panic! / Cat Balou (destroy weapon before player unleashes volley)',
        '💃 Belle Star (ignores opponent cards)'
      ],
      synergiesCs: [
        '💨 Suzy Lafayette (vystřílí všechny karty a ihned dobere novou)',
        '🎯 Doc Holyday (snadné vyprázdnění ruky pro schopnost)',
        '⚠️ Willy the Kid Volcanic nepotřebuje (má schopnost neomezených BANGů nativně)'
      ],
      synergiesEn: [
        '💨 Suzy Lafayette (discharges entire hand and draws new card instantly)',
        '🎯 Doc Holyday (easy hand management for ability)',
        '⚠️ Willy the Kid does not need Volcanic (inherent unlimited BANGs)'
      ]
    },
    'pivo': {
      countersCs: [
        '⚠️ Ve 2 hráčích NEMÁ ŽÁDNÝ ÚČINEK na léčení (ve Zlaté horečce lze směnit za 1 zlato)',
        '⚠️ Mimo vlastní tah lze zahrát POUZE při smrtelném zásahu (poslední život)'
      ],
      countersEn: [
        '⚠️ When 2 players remain, it has NO HEALING EFFECT (in Gold Rush trades for 1 gold)',
        '⚠️ Outside your turn, can ONLY be played upon taking lethal damage'
      ],
      synergiesCs: [
        '🍺 Tequila Joe (za každé zahrané Pivo si vyléčí 2 životy místo 1)',
        '👩 Molly Stark (pokud zahraje kartu mimo tah na záchranu, líže kartu z balíčku)'
      ],
      synergiesEn: [
        '🍺 Tequila Joe (heals 2 life points per Beer instead of 1)',
        '👩 Molly Stark (draws a card whenever she plays a card out of turn)'
      ]
    },
    'duel': {
      countersCs: [
        '🔫 Mít v ruce více karet BANG! než vyzyvatel',
        '🔄 Calamity Janet (může odhazovat karty Vedle! jako BANG!)'
      ],
      countersEn: [
        '🔫 Keeping more BANG! cards in hand than the challenger',
        '🔄 Calamity Janet (can discard Missed! as BANG!)'
      ],
      synergiesCs: [
        '🤠 Willy the Kid / Slab the Killer (velká zásoba BANGů v ruce)',
        '⚠️ Barel ani schopnost Jourdonnaise v Duelu NEFUNGUJÍ!'
      ],
      synergiesEn: [
        '🤠 Willy the Kid / Slab the Killer (plenty of BANGs in hand)',
        '⚠️ Barrel and Jourdonnais ability DO NOT WORK in Duel!'
      ]
    },
    'indiani': {
      countersCs: [
        '🔫 Pouze odhození skutečné karty BANG! (Vedle! ani Křesadlovka neplatí!)'
      ],
      countersEn: [
        '🔫 Only discarding a genuine BANG! card (Missed! or Flintlock do NOT work!)'
      ],
      synergiesCs: [
        '🔄 Calamity Janet (může odhodit Vedle! jako BANG!)',
        '🏹 Ideální zahrát v okamžiku, kdy soupeři mají málo karet v ruce'
      ],
      synergiesEn: [
        '🔄 Calamity Janet (can discard Missed! as BANG!)',
        '🏹 Perfect timing when opponents have few or no cards in hand'
      ]
    },
    'mustang': {
      countersCs: [
        '🔭 Hledí / Dalekohled (-1 k dosahu střelce)',
        '🔥 Panika! / Cat Balou'
      ],
      countersEn: [
        '🔭 Appaloosa / Scope / Binoculars (-1 shooter range)',
        '🔥 Panic! / Cat Balou'
      ],
      synergiesCs: [
        '🤠 Paul Regret (má nativně +1, s Mustangem je pro ostatní na vzdálenost +2!)',
        '🏕️ Skrýš / Plošinový vůz (kumulativní zvýšení odstupu)'
      ],
      synergiesEn: [
        '🤠 Paul Regret (inherent +1, with Mustang becomes +2 distance for all!)',
        '🏕️ Hideout / Flatcar (stackable distance increases)'
      ]
    },
    'dostavnik': {
      countersCs: ['Nelze zrušit'],
      countersEn: ['Cannot be canceled'],
      synergiesCs: [
        '☀️ V rozšíření Divoký západ každé zahrání Dostavníku otáčí NOVOU KARTU DIVOKÉHO ZÁPADU!'
      ],
      synergiesEn: [
        '☀️ In Wild West Show expansion, playing Stagecoach FLIPS A NEW EVENT CARD!'
      ]
    },
    'wells fargo': {
      countersCs: ['Nelze zrušit'],
      countersEn: ['Cannot be canceled'],
      synergiesCs: [
        '☀️ V rozšíření Divoký západ každé zahrání Wells Fargo otáčí NOVOU KARTU DIVOKÉHO ZÁPADU!'
      ],
      synergiesEn: [
        '☀️ In Wild West Show expansion, playing Wells Fargo FLIPS A NEW EVENT CARD!'
      ]
    }
  };

  function getCardSynergiesAndCounters(card, isEn) {
    if (!card) return null;
    const key = (card.nameCs || card.title || '').toLowerCase().trim();
    const type = (card.type || '').toLowerCase();

    // Check specific match
    for (const [k, v] of Object.entries(CARD_SYNERGIES_DB)) {
      if (key.includes(k)) {
        return {
          counters: isEn ? v.countersEn : v.countersCs,
          synergies: isEn ? v.synergiesEn : v.synergiesCs
        };
      }
    }

    // Default category fallback
    if (type === 'blue' || card.color === 'blue') {
      return {
        counters: isEn
          ? ['🔥 Cat Balou / Panic! (can discard or steal equipment from play)', '💃 Belle Star (ignores all opponent blue/green cards during her turn)']
          : ['🔥 Cat Balou / Panika! (odhození nebo krádež vyložené karty ze stolu)', '💃 Belle Star (v jejím tahu vyložené karty soupeřů nefungují)'],
        synergies: isEn
          ? ['⚡ Armed & Dangerous: Playing blue cards earns +1 load token on dangerous cards!', '⭐ In-play permanence provides long-term tactical advantage']
          : ['⚡ Ozbrojení a nebezpeční: Vyložení každé modré karty dává +1 žeton nabití na oranžové karty!', '⭐ Trvalé vyložení dává dlouhodobou taktickou výhodu']
      };
    } else if (type === 'green' || card.color === 'green') {
      return {
        counters: isEn
          ? ['🔥 Cat Balou / Panic! (discard before it can be used next turn)', '⚡ Requires waiting 1 full round before activation']
          : ['🔥 Cat Balou / Panika! (odhození předtím, než ji hráč může v dalším tahu použít)', '⚡ Vyžaduje počkat 1 celé kolo před použitím'],
        synergies: isEn
          ? ['🎯 Can be held in play without counting against hand limit in Phase 3!', '🛡️ Instant defensive shield ready on table']
          : ['🎯 Nepočítá se do limitu karet v ruce ve Fázi 3!', '🛡️ Okamžitý štít připravený na stole k odhození']
      };
    } else if (type === 'orange' || card.color === 'orange') {
      return {
        counters: isEn
          ? ['🧪 Rust card (Rust can drain load tokens and trigger immediate explosion on Bomb!)', '🔥 Cat Balou / Panic!']
          : ['🧪 Karta Rez (dokáže vysát žetony nabití a u Bomby způsobit okamžitý výbuch!)', '🔥 Cat Balou / Panika!'],
        synergies: isEn
          ? ['⚡ Discarding cards in Phase 3 charges +1 load token!', '💥 Upgradable brown cards can be boosted with load tokens']
          : ['⚡ Odhazování přebytečných karet ve Fázi 3 nabíjí +1 žeton nabití!', '💥 Hnědé karty lze vylepšit zaplacením žetonů nabití']
      };
    } else if (type === 'train' || card.isTrain) {
      return {
        counters: isEn
          ? ['🚫 Railcars can NEVER be taken into hand (Panic forces direct equip)', '🚂 Ironhorse end of line can wipe out all players']
          : ['🚫 Vagony NIKDY nejdou do ruky (Panika! je nutí vyložit rovnou před hráče)', '🚂 Ironhorse na konečné stanici může zabít všechny současně'],
        synergies: isEn
          ? ['🚂 Free train advance each turn before mandatory wagon purchase', '🎫 High versatility effects on attached railcars']
          : ['🚂 Posun vlaku o 1 stanici zdarma před povinným nákupem vagonu', '🎫 Vagony dávají silné permanentní či jednorázové bonusy']
      };
    }

    return null;
  }

  // =========================================================================
  // 5. SETUP ASSISTANT ENGINE (CUSTOM GAME CONFIGURATOR)
  // =========================================================================
  const SETUP_ROLES_MATRIX = {
    3: {
      type: 'special-3p',
      noteCs: 'Speciální varianta pro 3 hráče (Dodge City): Role jsou rozděleny na Zástupce (odkrytý), Odpadlíka (skrytý) a Banditu (skrytý). Každý má unikátní cíl!',
      noteEn: 'Special 3-Player variant (Dodge City): Deputy (revealed), Renegade (hidden), Outlaw (hidden). Each has an individual victory goal!',
      roles: [
        { role: 'deputy', count: 1, nameCs: 'Zástupce Šerifa (odkrytý)', nameEn: 'Deputy (revealed)', goalCs: 'Cíl: Zabít Odpadlíka', goalEn: 'Goal: Kill Renegade' },
        { role: 'renegade', count: 1, nameCs: 'Odpadlík (skrytý)', nameEn: 'Renegade (hidden)', goalCs: 'Cíl: Zabít Banditu', goalEn: 'Goal: Kill Outlaw' },
        { role: 'outlaw', count: 1, nameCs: 'Bandita (skrytý)', nameEn: 'Outlaw (hidden)', goalCs: 'Cíl: Zabít Zástupce', goalEn: 'Goal: Kill Deputy' }
      ]
    },
    4: {
      type: 'standard',
      roles: [
        { role: 'sheriff', count: 1, nameCs: 'Šerif (odkrytý, +1 život)', nameEn: 'Sheriff (revealed, +1 life)', goalCs: 'Zabít všechny Bandity i Odpadlíka', goalEn: 'Eliminate all Outlaws and the Renegade' },
        { role: 'renegade', count: 1, nameCs: 'Odpadlík', nameEn: 'Renegade', goalCs: 'Zůstat jako poslední živý hráč se Šerifem a zabít ho', goalEn: 'Be the last one alive and kill the Sheriff in 1v1' },
        { role: 'outlaw', count: 2, nameCs: 'Bandité (2 hráči)', nameEn: 'Outlaws (2 players)', goalCs: 'Zabít Šerifa', goalEn: 'Kill the Sheriff' }
      ]
    },
    5: {
      type: 'standard',
      roles: [
        { role: 'sheriff', count: 1, nameCs: 'Šerif (odkrytý, +1 život)', nameEn: 'Sheriff (revealed, +1 life)', goalCs: 'Zabít Bandity i Odpadlíka', goalEn: 'Eliminate Outlaws and Renegade' },
        { role: 'deputy', count: 1, nameCs: 'Pomocník Šerifa', nameEn: 'Deputy', goalCs: 'Chránit Šerifa za každou cenu', goalEn: 'Protect Sheriff at all costs' },
        { role: 'renegade', count: 1, nameCs: 'Odpadlík', nameEn: 'Renegade', goalCs: 'Zabít Šerifa jako poslední živý hráč', goalEn: 'Be last alive and kill Sheriff' },
        { role: 'outlaw', count: 2, nameCs: 'Bandité (2 hráči)', nameEn: 'Outlaws (2 players)', goalCs: 'Zabít Šerifa', goalEn: 'Kill the Sheriff' }
      ]
    },
    6: {
      type: 'standard',
      roles: [
        { role: 'sheriff', count: 1, nameCs: 'Šerif (odkrytý, +1 život)', nameEn: 'Sheriff (revealed, +1 life)', goalCs: 'Zabít Bandity i Odpadlíka', goalEn: 'Eliminate Outlaws and Renegade' },
        { role: 'deputy', count: 1, nameCs: 'Pomocník Šerifa', nameEn: 'Deputy', goalCs: 'Chránit Šerifa za každou cenu', goalEn: 'Protect Sheriff at all costs' },
        { role: 'renegade', count: 1, nameCs: 'Odpadlík', nameEn: 'Renegade', goalCs: 'Zabít Šerifa v duelu 1v1', goalEn: 'Be last alive and kill Sheriff' },
        { role: 'outlaw', count: 3, nameCs: 'Bandité (3 hráči)', nameEn: 'Outlaws (3 players)', goalCs: 'Zabít Šerifa', goalEn: 'Kill the Sheriff' }
      ]
    },
    7: {
      type: 'standard',
      roles: [
        { role: 'sheriff', count: 1, nameCs: 'Šerif (odkrytý, +1 život)', nameEn: 'Sheriff (revealed, +1 life)', goalCs: 'Zabít Bandity i Odpadlíka', goalEn: 'Eliminate Outlaws and Renegade' },
        { role: 'deputy', count: 2, nameCs: 'Pomocníci Šerifa (2 hráči)', nameEn: 'Deputies (2 players)', goalCs: 'Chránit Šerifa', goalEn: 'Protect Sheriff' },
        { role: 'renegade', count: 1, nameCs: 'Odpadlík', nameEn: 'Renegade', goalCs: 'Zabít Šerifa v duelu 1v1', goalEn: 'Be last alive and kill Sheriff' },
        { role: 'outlaw', count: 3, nameCs: 'Bandité (3 hráči)', nameEn: 'Outlaws (3 players)', goalCs: 'Zabít Šerifa', goalEn: 'Kill the Sheriff' }
      ]
    },
    8: {
      type: 'standard-dodge',
      noteCs: 'Hra pro 8 hráčů vyžaduje rozšíření Dodge City (přidává 2. Odpadlíka).',
      noteEn: '8-player game requires Dodge City expansion (adds 2nd Renegade).',
      roles: [
        { role: 'sheriff', count: 1, nameCs: 'Šerif (odkrytý, +1 život)', nameEn: 'Sheriff (revealed, +1 life)', goalCs: 'Zabít Bandity i Odpadlíky', goalEn: 'Eliminate Outlaws and Renegades' },
        { role: 'deputy', count: 2, nameCs: 'Pomocníci Šerifa (2 hráči)', nameEn: 'Deputies (2 players)', goalCs: 'Chránit Šerifa', goalEn: 'Protect Sheriff' },
        { role: 'renegade', count: 2, nameCs: 'Odpadlíci (2 hráči)', nameEn: 'Renegades (2 players)', goalCs: 'Každý hraje sám za sebe! Vyhrává ten, kdo zbude poslední', goalEn: 'Play individually! Last survivor wins' },
        { role: 'outlaw', count: 3, nameCs: 'Bandité (3 hráči)', nameEn: 'Outlaws (3 players)', goalCs: 'Zabít Šerifa', goalEn: 'Kill the Sheriff' }
      ]
    }
  };

  function getSetupChecklist(playerCount, enabledExpansions, isEn) {
    const rolesConfig = SETUP_ROLES_MATRIX[playerCount] || SETUP_ROLES_MATRIX[5];
    const hasLegends = enabledExpansions.includes('legends');
    const hasTrain = enabledExpansions.includes('train-robbery');
    const hasGold = enabledExpansions.includes('gold-rush');
    const hasArmed = enabledExpansions.includes('armed-dangerous');
    const hasHighNoon = enabledExpansions.includes('high-noon');
    const hasFistful = enabledExpansions.includes('fistful-of-cards');
    const hasWWS = enabledExpansions.includes('wild-west-show');
    const hasDynamite = enabledExpansions.includes('dynamite-box');

    const checklist = [];

    // 1. Roles
    checklist.push({
      id: 'step-roles',
      category: isEn ? 'Roles & Seating' : 'Role a usazení',
      title: isEn ? `Distribute Secret Roles (${playerCount} Players)` : `Rozdejte tajné role (${playerCount} hráčů)`,
      desc: isEn
        ? `Shuffle and deal 1 role to each player. Sheriff reveals role face up immediately and adds +1 life point.`
        : `Zamíchejte a rozdejte 1 roli každému hráči. Šerif svou roli ihned odhalí a přičte si +1 život navíc.`,
      roles: rolesConfig.roles
    });

    // 2. Starting hand
    if (hasLegends) {
      checklist.push({
        id: 'step-hand-legends',
        category: isEn ? 'Starting Cards' : 'Karty do začátku',
        title: isEn ? 'Official Legends Hand Rule (Equalized Start)' : 'Pravidlo Legend pro počáteční karty',
        desc: isEn
          ? `Players 1 to 5 start with EXACTLY 4 CARDS in hand (regardless of lives, including Sheriff!). Players 6, 7 and 8 start with 5 CARDS.`
          : `1. až 5. hráč začíná PŘESNĚ SE 4 KARTAMI v ruce (bez ohledu na počet životů, včetně Šerifa!). 6., 7. a 8. hráč začíná s 5 KARTAMI.`
      });
    } else {
      checklist.push({
        id: 'step-hand-standard',
        category: isEn ? 'Starting Cards' : 'Karty do začátku',
        title: isEn ? 'Standard Starting Hand' : 'Standardní rozdání karet',
        desc: isEn
          ? `Each player draws starting cards equal to their character life points (Sheriff gets +1 card for the +1 bonus life).`
          : `Každý hráč si dobere tolik karet do začátku, kolik má životů (Šerif má o 1 kartu více díky bonusovému životu).`
      });
    }

    // 3. Components
    if (hasLegends) {
      checklist.push({
        id: 'step-legends-setup',
        category: isEn ? 'Legends Expansion' : 'Rozšíření Legendy',
        title: isEn ? 'Fame Tokens & Feats' : 'Žetony slávy a karty činů',
        desc: isEn
          ? `Each player takes 5 Fame Tokens of one color. Place the Feat deck on the table and turn 1 Feat card face up (max 4 Feats active at once).`
          : `Každý hráč si vezme sadu 5 žetonů slávy jedné barvy. Vyložte balíček činů a otočte 1 kartu činu lícem nahoru (max. 4 činy současně).`
      });
    }

    if (hasTrain) {
      checklist.push({
        id: 'step-train-setup',
        category: isEn ? 'The Great Train Robbery' : 'Velká vlaková loupež',
        title: isEn ? `Train Track: ${playerCount} Stations & Locomotive` : `Vlaková trať: ${playerCount} stanic a lokomotiva`,
        desc: isEn
          ? `Lay out exactly ${playerCount} Stations in a row. Place 1 random Locomotive (Leland or Ironhorse) under Station 1. Place 3 Railcars face up to the left of the Locomotive.`
          : `Vyložte do řady přesně ${playerCount} stanic (= počet hráčů). Pod stanici 1 položte náhodnou stranou lokomotivu (Leland nebo Ironhorse). Vlevo od ní vyložte 3 vagony lícem nahoru.`
      });
    }

    if (hasGold) {
      checklist.push({
        id: 'step-gold-setup',
        category: isEn ? 'Gold Rush' : 'Zlatá horečka',
        title: isEn ? 'Gold Bank & Equipment Market' : 'Banka zlata a nabídka vybavení',
        desc: isEn
          ? `Place the bank of 30 gold nuggets within reach. Reveal 3 Equipment cards face up next to the equipment deck.`
          : `Připravte zásobu 30 valounů zlata do středu stolu. Vedle balíčku vybavení vyložte nabídku 3 karet vybavení lícem nahoru.`
      });
    }

    if (hasArmed) {
      checklist.push({
        id: 'step-armed-setup',
        category: isEn ? 'Armed & Dangerous' : 'Ozbrojení a nebezpeční',
        title: isEn ? 'Load Tokens Supply' : 'Zásoba žetonů nabití',
        desc: isEn
          ? `Place the pile of Load Tokens in the center. Orange Dangerous cards enter play with 3 load tokens each.`
          : `Připravte zásobu žetonů nabití do středu stolu. Oranžové karty vstupují do hry se 3 žetony nabití.`
      });
    }

    if (hasHighNoon || hasFistful) {
      checklist.push({
        id: 'step-events-setup',
        category: isEn ? 'Event Decks' : 'Balíček událostí',
        title: isEn ? 'Sheriff Event Deck' : 'Šerifův balíček událostí',
        desc: isEn
          ? `Prepare a 12-15 card event deck (combining High Noon and Fistful) with the final card (High Noon or Fistful) on the bottom. Sheriff flips an event at the start of their turn starting round 2.`
          : `Šerif připraví balíček 12–15 karet událostí (výběr z Pravého poledne a Pěsti plné karet), na dno položí finální kartu (Pravé poledne nebo Pěst plná karet). Od 2. kola otáčí událost.`
      });
    }

    if (hasWWS) {
      checklist.push({
        id: 'step-wws-setup',
        category: isEn ? 'Wild West Show' : 'Divoký západ',
        title: isEn ? 'Wild West Show Deck (Stagecoach Triggered)' : 'Balíček Divokého západu (otáčen Dostavníkem)',
        desc: isEn
          ? `Place the 10 Wild West Show event cards face down in the center of the table. A new event is drawn whenever ANY player plays Stagecoach or Wells Fargo!`
          : `Položte 10 karet událostí Divokého západu lícem dolů do středu stolu. Nová událost se otáčí KDYKOLI jakýkoli hráč zahraje Dostavník nebo Wells Fargo!`
      });
    }

    if (hasDynamite) {
      checklist.push({
        id: 'step-dynamite-stick',
        category: isEn ? 'Dynamite Box' : 'Dynamite Box bonusy',
        title: isEn ? 'Wooden Dynamite Stick' : 'Dřevěná patrona dynamitu',
        desc: isEn
          ? `Give the wooden dynamite stick prop to the Sheriff to hold during play.`
          : `Předejte dřevěnou patronu dynamitu Šerifovi.`
      });
    }

    return checklist;
  }

  // =========================================================================
  // 6. DRAW! SIMULATOR ENGINE (FRENCH 52-CARD DECK & RULE PRESETS)
  // =========================================================================
  const SUITS = [
    { symbol: '♠', nameCs: 'Piky', nameEn: 'Spades', color: 'black' },
    { symbol: '♥', nameCs: 'Srdce', nameEn: 'Hearts', color: 'red' },
    { symbol: '♦', nameCs: 'Káry', nameEn: 'Diamonds', color: 'red' },
    { symbol: '♣', nameCs: 'Kříže', nameEn: 'Clubs', color: 'black' }
  ];
  const VALUES = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];

  const DrawSimulator = {
    suits: SUITS,
    values: VALUES,

    drawCard: () => {
      const suit = SUITS[Math.floor(Math.random() * SUITS.length)];
      const val = VALUES[Math.floor(Math.random() * VALUES.length)];
      return {
        suitSymbol: suit.symbol,
        suitNameCs: suit.nameCs,
        suitNameEn: suit.nameEn,
        color: suit.color,
        value: val,
        code: `${val}${suit.symbol}`
      };
    },

    createCard: (suitSymbol, val) => {
      const suit = SUITS.find(s => s.symbol === suitSymbol) || SUITS[0];
      return {
        suitSymbol: suit.symbol,
        suitNameCs: suit.nameCs,
        suitNameEn: suit.nameEn,
        color: suit.color,
        value: val,
        code: `${val}${suit.symbol}`
      };
    },

    getOdds: (presetKey, luckyDuke) => {
      switch (presetKey) {
        case 'jail':
          return {
            successPct: luckyDuke ? 44.1 : 25.0,
            failurePct: luckyDuke ? 55.9 : 75.0,
            successLabelCs: 'Útěk (Srdce ♥)',
            successLabelEn: 'Escape (Hearts ♥)',
            failureLabelCs: 'Zůstává ve vězení',
            failureLabelEn: 'Stays in jail',
            ratioCs: luckyDuke ? 'cca 1 z 2.3 pokusů (44.1 %)' : 'přesně 1 ze 4 (25.0 %)',
            ratioEn: luckyDuke ? 'approx 1 in 2.3 (44.1%)' : 'exactly 1 in 4 (25.0%)',
            tipCs: 'Pravidlo Legend: Místo snímání můžeš odhodit 1 ♥ kartu z ruky a vězení bezpečně zahodit.',
            tipEn: 'Legends rule: You may discard 1 ♥ card from your hand instead of drawing.'
          };

        case 'dynamite':
          return {
            successPct: luckyDuke ? 97.9 : 84.6,
            failurePct: luckyDuke ? 2.1 : 15.4,
            successLabelCs: 'Bezpečný posun',
            successLabelEn: 'Safe pass',
            failureLabelCs: 'BUM! Výbuch (Piky ♠ 2–9)',
            failureLabelEn: 'BOOM! Explodes (Spades ♠ 2–9)',
            ratioCs: luckyDuke ? 'pouze 1 ze 47 (2.1 % šance na výbuch!)' : 'cca 1 ze 6.5 (15.4 % šance na výbuch)',
            ratioEn: luckyDuke ? 'only 1 in 47 (2.1% explosion chance!)' : 'approx 1 in 6.5 (15.4% explosion chance)',
            tipCs: 'Pozor: Piky 10, Spodek (J), Dáma (Q), Král (K) ani Eso (A) výbuch nezpůsobí!',
            tipEn: 'Note: Spades 10, J, Q, K, and Ace do NOT explode!'
          };

        case 'barrel':
          return {
            successPct: luckyDuke ? 44.1 : 25.0,
            failurePct: luckyDuke ? 55.9 : 75.0,
            successLabelCs: 'Zásah odvrácen (Srdce ♥)',
            successLabelEn: 'Attack dodged (Hearts ♥)',
            failureLabelCs: 'Neochráněn',
            failureLabelEn: 'Not dodged',
            ratioCs: luckyDuke ? 'téměř 1 ze 2 (44.1 % šance na záchranu)' : '1 ze 4 (25.0 % šance na záchranu)',
            ratioEn: luckyDuke ? 'nearly 1 in 2 (44.1% save chance)' : '1 in 4 (25.0% save chance)',
            tipCs: 'Barel chrání POUZE proti kartě BANG! Nelze jej použít v duelu, proti indiánům, kulometu ani noži.',
            tipEn: 'Barrel only works against BANG! cards, not in Duels, against Indians, Gatling, or Knife.'
          };

        case 'rattlesnake':
          return {
            successPct: luckyDuke ? 94.1 : 75.0,
            failurePct: luckyDuke ? 5.9 : 25.0,
            successLabelCs: 'Neuštkl (bez zranění)',
            successLabelEn: 'No bite (safe)',
            failureLabelCs: 'Uštknutí (Piky ♠)',
            failureLabelEn: 'Bite (Spades ♠)',
            ratioCs: luckyDuke ? 'uštkne jen 1 ze 17 pokusů (5.9 %)' : 'uštkne 1 ze 4 pokusů (25.0 %)',
            ratioEn: luckyDuke ? 'bites only 1 in 17 (5.9%)' : 'bites 1 in 4 (25.0%)',
            tipCs: 'Uštknutí ubere 1 život. Chřestýš zůstává ležet před hráčem, dokud není odstraněn jinou kartou.',
            tipEn: 'A bite costs 1 life. Rattlesnake stays in front of the player until removed.'
          };

        case 'bomb':
          return {
            successPct: luckyDuke ? 75.5 : 50.0,
            failurePct: luckyDuke ? 24.5 : 50.0,
            successLabelCs: 'Bezpečný posun (Červená ♥/♦)',
            successLabelEn: 'Safe pass (Red ♥/♦)',
            failureLabelCs: '-2 žetony nabití (Černá ♠/♣)',
            failureLabelEn: '-2 charge tokens (Black ♠/♣)',
            ratioCs: luckyDuke ? 'úbytek jen 1 ze 4 (24.5 %)' : 'přesně 1 ze 2 (50.0 %)',
            ratioEn: luckyDuke ? 'loss only 1 in 4 (24.5%)' : 'exactly 1 in 2 (50.0%)',
            tipCs: 'Černá barva ubere 2 žetony nabití. Při poklesu na 0 žetonů Bomba okamžitě vybuchne za 2 životy!',
            tipEn: 'Black cards deduct 2 charges. Explodes immediately for 2 lives if charges reach 0!'
          };

        case 'teren':
          return {
            successPct: luckyDuke ? 94.1 : 75.0,
            failurePct: luckyDuke ? 5.9 : 25.0,
            successLabelCs: 'Přežití s 1 HP (Nepiková)',
            successLabelEn: 'Survive at 1 HP (Non-spade)',
            failureLabelCs: 'Eliminace (Piky ♠)',
            failureLabelEn: 'Elimination (Spades ♠)',
            ratioCs: luckyDuke ? 'přežije ve více než 9 z 10 případů (94.1 %)' : 'přežije ve 3 ze 4 případů (75.0 %)',
            ratioEn: luckyDuke ? 'survives in 94.1% of cases' : 'survives in 3 out of 4 cases (75.0%)',
            tipCs: 'Schopnost Teren Killa se aktivuje při smrtícím zranění. Přežívá na jakoukoliv kartu kromě piků.',
            tipEn: 'Teren Kill ability triggers upon fatal damage. Survives on any card except Spades.'
          };

        default:
          return {
            successPct: 100,
            failurePct: 0,
            successLabelCs: 'Jakákoliv karta',
            successLabelEn: 'Any card',
            failureLabelCs: '-',
            failureLabelEn: '-',
            ratioCs: 'Běžné sejmutí',
            ratioEn: 'Standard draw',
            tipCs: 'Otoč kartu z dobíracího balíčku na stole nebo zadej její hodnotu a barvu pro ověření.',
            tipEn: 'Reveal card from physical draw pile or pick suit/value to evaluate.'
          };
      }
    },

    evaluate: (presetKey, card, isEn) => {
      const isHeart = card.suitSymbol === '♥';
      const isSpade = card.suitSymbol === '♠';
      const isRed = card.color === 'red';
      const isBlack = card.color === 'black';
      const isDynamiteSpade = isSpade && ['2', '3', '4', '5', '6', '7', '8', '9'].includes(card.value);

      switch (presetKey) {
        case 'jail':
          if (isHeart) {
            return {
              status: 'success',
              titleCs: 'ÚTĚK Z VĚZENÍ! (SRDCE ♥)',
              titleEn: 'ESCAPED FROM JAIL! (HEART ♥)',
              messageCs: `Otočena karta ${card.code}. Vězení je úspěšně odhozeno a v tomto tahu hraješ normálně!`,
              messageEn: `Drawn card ${card.code}. Jail is discarded and you take your turn normally!`
            };
          } else {
            return {
              status: 'failure',
              titleCs: 'ZŮSTÁVÁŠ VE VĚZENÍ! (NENÍ SRDCE)',
              titleEn: 'STILL IN JAIL! (NOT A HEART)',
              messageCs: `Otočena karta ${card.code}. Ztrácíš Fázi 1 i Fázi 2! (Pravidlo Legend: Místo snímání můžeš odhodit 1 ♥ kartu z ruky).`,
              messageEn: `Drawn card ${card.code}. You skip Phase 1 and Phase 2! (Legends tip: You may discard 1 ♥ card from hand instead of drawing).`
            };
          }

        case 'dynamite':
          if (isDynamiteSpade) {
            return {
              status: 'failure',
              titleCs: '💥 BUM! DYNAMIT VYBUCHL! (PIKY 2–9)',
              titleEn: '💥 BOOM! DYNAMITE EXPLODED! (SPADES 2–9)',
              messageCs: `Otočena karta ${card.code}! Ztrácíš 3 životy a Dynamit je odhozen na odhazovací balíček!`,
              messageEn: `Drawn card ${card.code}! You lose 3 life points and Dynamite is discarded!`
            };
          } else {
            return {
              status: 'success',
              titleCs: 'DYNAMIT NEVYBUCHL! (BEZPEČNÝ POSUN)',
              titleEn: 'DYNAMITE SAFE! (PASSES LEFT)',
              messageCs: `Otočena karta ${card.code}. Dynamit bezpečně postupuje k hráči po tvé levici!`,
              messageEn: `Drawn card ${card.code}. Dynamite safely passes to the player on your left!`
            };
          }

        case 'barrel':
          if (isHeart) {
            return {
              status: 'success',
              titleCs: '🛡️ VEDLE! ZÁSAH ODVRÁCEN! (SRDCE ♥)',
              titleEn: '🛡️ MISSED! ATTACK DODGED! (HEART ♥)',
              messageCs: `Otočena karta ${card.code}. Barel úspěšně odvrátil útočící kartu BANG!`,
              messageEn: `Drawn card ${card.code}. Barrel successfully deflected the incoming BANG!`
            };
          } else {
            return {
              status: 'failure',
              titleCs: 'ZÁSAH NEODVRÁCEN (NENÍ SRDCE)',
              titleEn: 'ATTACK NOT DODGED (NOT A HEART)',
              messageCs: `Otočena karta ${card.code}. Barel tě neochránil, musíš zahrát kartu Vedle! nebo ztratit život.`,
              messageEn: `Drawn card ${card.code}. Barrel failed, you must play a Missed! or lose a life.`
            };
          }

        case 'rattlesnake':
          if (isSpade) {
            return {
              status: 'failure',
              titleCs: '🐍 UŠTKNUTÍ CHŘESTÝŠEM! (PIKY ♠)',
              titleEn: '🐍 RATTLESNAKE BITE! (SPADES ♠)',
              messageCs: `Otočena piková karta ${card.code}! Okamžitě ztrácíš 1 život!`,
              messageEn: `Drawn spade card ${card.code}! You lose 1 life point immediately!`
            };
          } else {
            return {
              status: 'success',
              titleCs: 'CHŘESTÝŠ NEUŠTKL! (BEZ ZRANĚNÍ)',
              titleEn: 'RATTLESNAKE MISSED! (NO DAMAGE)',
              messageCs: `Otočena karta ${card.code}. Chřestýš zůstává před tebou, ale v tomto tahu tě neuštkl.`,
              messageEn: `Drawn card ${card.code}. Rattlesnake stays in front of you, but no bite this turn.`
            };
          }

        case 'bomb':
          if (isRed) {
            return {
              status: 'success',
              titleCs: 'BEZPEČNÝ POSUN BOMBY (ČERVENÁ BARVA ♥/♦)',
              titleEn: 'BOMB PASSES SAFELY (RED ♥/♦)',
              messageCs: `Otočena červená karta ${card.code}. Bomba se posouvá k dalšímu hráči bez úbytku nabití.`,
              messageEn: `Drawn red card ${card.code}. Bomb passes to next player with no charge lost.`
            };
          } else {
            return {
              status: 'failure',
              titleCs: '⚠️ ÚBYTEK 2 ŽETONŮ NABITÍ (ČERNÁ BARVA ♠/♣)',
              titleEn: '⚠️ LOSE 2 LOAD TOKENS (BLACK ♠/♣)',
              messageCs: `Otočena černá karta ${card.code}! Z Bomby se odebírají 2 žetony nabití (při 0 žetonech okamžitě exploduje za 2 životy!).`,
              messageEn: `Drawn black card ${card.code}! Bomb loses 2 load tokens (explodes for 2 lives if charges reach 0!).`
            };
          }

        case 'teren':
          if (isSpade) {
            return {
              status: 'failure',
              titleCs: '💀 PIKOVÁ KARTA! TEREN KILL ELIMINOVÁN',
              titleEn: '💀 SPADES! TEREN KILL ELIMINATED',
              messageCs: `Otočena karta ${card.code}. Teren Kill byl vyřazen ze hry.`,
              messageEn: `Drawn card ${card.code}. Teren Kill has been eliminated.`
            };
          } else {
            return {
              status: 'success',
              titleCs: '🤠 PŘEŽIL! TEREN KILL ZŮSTÁVÁ S 1 ŽIVOTEM',
              titleEn: '🤠 SURVIVED! TEREN KILL REMAINS AT 1 HP',
              messageCs: `Otočena nepiková karta ${card.code}. Schopnost zachránila Teren Killa před smrtí!`,
              messageEn: `Drawn non-spade card ${card.code}. Teren Kill survives the shootout with 1 life!`
            };
          }

        default:
          return {
            status: 'neutral',
            titleCs: `OTOČENA KARTA: ${card.code}`,
            titleEn: `DRAWN CARD: ${card.code}`,
            messageCs: `Hodnota: ${card.value}, Barva: ${card.suitNameCs} (${card.suitSymbol}).`,
            messageEn: `Value: ${card.value}, Suit: ${card.suitNameEn} (${card.suitSymbol}).`
          };
      }
    }
  };

  // =========================================================================
  // 7. MATCH TRACKER & GAME LOG ENGINE (100% LOCAL STORAGE)
  // =========================================================================
  const MATCHES_STORAGE_KEY = 'bang_companion_matches_v1';

  const MatchTracker = {
    getAll: () => {
      try {
        const raw = localStorage.getItem(MATCHES_STORAGE_KEY);
        return raw ? JSON.parse(raw) : [];
      } catch (e) {
        console.warn('[MatchTracker] Read error:', e);
        return [];
      }
    },

    save: (matchData) => {
      try {
        const list = MatchTracker.getAll();
        const entry = {
          id: 'm_' + Date.now() + '_' + Math.floor(Math.random() * 1000),
          createdAt: new Date().toISOString(),
          dateFormatted: new Date().toLocaleDateString(),
          ...matchData
        };
        list.unshift(entry);
        localStorage.setItem(MATCHES_STORAGE_KEY, JSON.stringify(list));
        return entry;
      } catch (e) {
        console.warn('[MatchTracker] Save error:', e);
        return null;
      }
    },

    delete: (matchId) => {
      try {
        const list = MatchTracker.getAll().filter(m => m.id !== matchId);
        localStorage.setItem(MATCHES_STORAGE_KEY, JSON.stringify(list));
        return true;
      } catch (e) {
        console.warn('[MatchTracker] Delete error:', e);
        return false;
      }
    },

    clear: () => {
      try {
        localStorage.removeItem(MATCHES_STORAGE_KEY);
        return true;
      } catch (e) {
        return false;
      }
    },

    getStats: () => {
      const matches = MatchTracker.getAll();
      const total = matches.length;
      if (total === 0) {
        return {
          total: 0,
          sheriffWins: 0,
          outlawWins: 0,
          renegadeWins: 0,
          ironhorseWins: 0,
          sheriffPct: 0,
          outlawPct: 0,
          renegadePct: 0,
          topMvp: []
        };
      }

      let sheriffWins = 0;
      let outlawWins = 0;
      let renegadeWins = 0;
      let ironhorseWins = 0;
      const mvpCounts = {};

      matches.forEach(m => {
        if (m.winner === 'sheriff') sheriffWins++;
        else if (m.winner === 'outlaws') outlawWins++;
        else if (m.winner === 'renegade') renegadeWins++;
        else if (m.winner === 'ironhorse') ironhorseWins++;

        if (m.mvpChar) {
          mvpCounts[m.mvpChar] = (mvpCounts[m.mvpChar] || 0) + 1;
        }
      });

      const topMvp = Object.entries(mvpCounts)
        .sort((a, b) => b[1] - a[1])
        .slice(0, 5)
        .map(([name, count]) => ({ name, count }));

      return {
        total,
        sheriffWins,
        outlawWins,
        renegadeWins,
        ironhorseWins,
        sheriffPct: Math.round((sheriffWins / total) * 100),
        outlawPct: Math.round((outlawWins / total) * 100),
        renegadePct: Math.round((renegadeWins / total) * 100),
        ironhorsePct: Math.round((ironhorseWins / total) * 100),
        topMvp
      };
    }
  };

  // Export to window
  window.BANG_TOOLS = {
    SoundFX,
    QuizQuestions: BANG_QUIZ_QUESTIONS,
    DistanceCalc,
    getCardSynergiesAndCounters,
    getSetupChecklist,
    DrawSimulator,
    MatchTracker
  };

})();

