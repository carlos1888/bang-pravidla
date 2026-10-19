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
    wilhelm: 'assets/audio/wilhelm.m4a'
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
    playWilhelm: () => playAudioFile('wilhelm')
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

  // Export to window
  window.BANG_TOOLS = {
    SoundFX,
    QuizQuestions: BANG_QUIZ_QUESTIONS,
    DistanceCalc
  };

})();
