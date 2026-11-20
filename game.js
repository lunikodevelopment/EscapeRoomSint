/* =====================================================================
   HET GROTE BOEK IS GECRASHT – Sinterklaas-escaperoom
   Alleen vanilla JavaScript. Alle teksten, levels en codes staan in CONFIG.
   ===================================================================== */
'use strict';

const CONFIG = {
  naam: 'José',
  titel: 'HET GROTE BOEK IS GECRASHT',
  opslagSleutel: 'sint-escaperoom-v1',

  // ---- Geheime velden (base64, UTF-8) ----
  slotcode1: 'NDgy',
  slotcode2: 'NzM5',
  verstopplek: 'SW4gZGUgaGFsLCB0dXNzZW4gZGUgamFzc2VuIGVuIHRhc3Nlbi4=',
  raadsel: 'QmlqIGRlIHZvb3JkZXVyIGhhbmd0IGhldCB2b2wgbWV0IG1vdXdlbiBlbiBtZXQga3JhZ2VuLApkYWFyIGhhbmdlbiBvb2sgZGUgdGFzc2VuIGRpZSB3ZSBlbGtlIGRhZyBkcmFnZW4uCkXDqW4gdGFzIGRhYXJ0dXNzZW4gaXMgbmlldCB2YW4gam91IG9mIHZhbiBtaWo6CmRpZSBoZWVmdCBTaW50IGRhYXIgdmVyc3RvcHQsIG1ldCB0d2VlIHNsb3RlbiBlcmJpaiE=',
  // Hints bij het raadsel; de derde hint is de verstopplek hierboven.
  raadselHints: ['SGV0IGlzIHZsYWsgYmlqIGRlIHZvb3JkZXVyLg==', 'S2lqayB3YWFyIGRlIGphc3NlbiBoYW5nZW4u'],

  // Achtergrondmuziek: happy-hardcore-remix (172 BPM) van "Sinterklaas kapoentje" (traditioneel).
  // Melodie: [noot, duur in tellen]; origineel in 3/4 = 16 maten x 3 tellen = 48 tellen,
  // gespeeld boven een 4/4-beat (48 tellen = 12 maten). Akkoorden: per originele maat (3 tellen).
  muziek: {
    bpm: 172,
    tellenPerMaat: 3,
    // Relatieve luidheid: de originele melodie is het luidst, alles eromheen zachter.
    volume: { melodie: 0.05, vul: 0.026, kick: 0.15, snare: 0.065, hatOpen: 0.02, hatDicht: 0.011, bas: 0.032, arp: 0.016 },
    melodie: [
      ['G4', 2], ['G4', 1], ['A4', 2], ['A4', 1], ['G4', 3], ['E4', 3],
      ['G4', 2], ['G4', 1], ['A4', 2], ['A4', 1], ['G4', 3], ['E4', 3],
      ['F4', 2], ['F4', 1], ['F4', 2], ['D4', 1], ['F4', 3], ['F4', 3],
      ['A4', 2], ['G4', 1], ['F4', 2], ['E4', 1], ['D4', 3], ['C4', 3]
    ],
    akkoorden: [
      ['C2', 'C4', 'E4', 'G4'], ['F2', 'F4', 'A4', 'C5'], ['C2', 'C4', 'E4', 'G4'], ['C2', 'C4', 'E4', 'G4'],
      ['C2', 'C4', 'E4', 'G4'], ['F2', 'F4', 'A4', 'C5'], ['C2', 'C4', 'E4', 'G4'], ['C2', 'C4', 'E4', 'G4'],
      ['D2', 'D4', 'F4', 'A4'], ['D2', 'D4', 'F4', 'A4'], ['D2', 'D4', 'F4', 'A4'], ['D2', 'D4', 'F4', 'A4'],
      ['F2', 'F4', 'A4', 'C5'], ['D2', 'D4', 'F4', 'A4'], ['F2', 'F4', 'A4', 'C5'], ['C2', 'C4', 'E4', 'G4']
    ]
  },

  teksten: {
    tikStart: 'TIK OM TE STARTEN',
    foutmelding: 'FOUT 5-12: GROTE BOEK NIET GEVONDEN',
    bitsNaam: 'HOOFDPIET BITS',
    intro: [
      'Hallo José?! Hier Bits van de Sint-helpdesk.',
      "Sinterklaas wilde dit jaar 'helemaal digitaal'. Hij heeft het Grote Boek op een laptop gezet.",
      'Ozosnel is erop gaan liggen. Nu is ALLES gecrasht. Ook de kluis met jouw cadeau.',
      'Help je ons de vier modules te repareren?'
    ],
    brief: {
      titel: 'Beste José,',
      regels: [
        'Ik ben 700 jaar en snap niets van wifi.',
        'Ik dacht: zet ik het Grote Boek op de computer, dan hoef ik nooit meer te bladeren. Toen ging Ozosnel erop liggen. Het paard is in orde, het boek niet.',
        'Wil jij de Pieten helpen? Ik reken op je!',
        'Hartelijke groet, Sinterklaas',
        'P.S. Wat is een wachtwoord? Is dat iets met paarden?'
      ]
    },
    startKnop: 'START',
    verder: 'VERDER',
    opnieuw: 'Opnieuw',
    bitsLost: 'Bits, los jij het maar op',
    levelClear: 'LEVEL CLEAR!',
    fout: [
      'Bijna! Ozosnel hinnikt aanmoedigend.',
      'Oeps! Bits verslikt zich in een pepernoot.',
      'Net niet! Ergens zucht een Piet heel zachtjes.',
      'De computer zegt nee. Ozosnel zegt: nog een keer!'
    ],
    overslaan: ['Oké, oké… *tikt heel snel met tien vingers* …GELUKT! Niet tegen Sint zeggen.'],
    naLevel4: [
      'Alles is gerepareerd! Alleen… het Grote Boek start niet.',
      'Sint moet het herstartgedicht voorlezen, maar zijn rijmrobot is ook kapot. Kom snel naar de kluis!'
    ],
    kaartLocked: 'Die plek is nog op slot. Eerst het vorige level!',
    menu: {
      titel: 'MENU',
      verder: 'Verder spelen',
      kaart: 'Naar de kaart',
      geluidAan: 'Geluid: AAN',
      geluidUit: 'Geluid: UIT',
      reset: 'Opnieuw beginnen',
      zeker: 'Weet je het zeker? Alle voortgang wordt gewist.',
      ja: 'Ja, wis alles',
      nee: 'Nee'
    }
  },

  // Inventaris-items (cel in items-set.png)
  items: [
    { woord: 'SCHOORSTEEN', cel: [0, 0] },
    { woord: 'PEPERNOOT', cel: [1, 0] },
    { woord: 'ZAK', cel: [0, 1] },
    { woord: 'TROMMEL', cel: [1, 1] }
  ],

  kaart: {
    plekken: ['DAKEN', 'BAKKERIJ', 'STOOMBOOT', 'PIETENHUIS', 'KLUIS']
  },

  levels: [
    {
      nr: 1, kort: 'ROUTEPLANNER',
      intro: ["De GPS van Piet is gewist. Elk dak precies één keer, nooit op een schotelantenne, en eindigen bij José's schoorsteen."],
      instructie: 'Tik een aangrenzend dak. Tik het laatste dak om terug te gaan.',
      start: 'A1', eind: 'B1', antennes: ['B2', 'C2'],
      oplossing: ['A1', 'A2', 'A3', 'A4', 'B4', 'B3', 'C3', 'C4', 'D4', 'D3', 'D2', 'D1', 'C1', 'B1'],
      hints: ['Begin bij de randen.', 'Vakjes met maar één buur moet je meteen meenemen.', 'Ik zet de eerste vijf stappen voor je klaar!'],
      redenen: {
        antenne: 'Au! Piet struikelt over een schotelantenne.',
        dubbel: 'Op dat dak was Piet al. Elk dak maar één keer!',
        ver: 'Zo ver springt zelfs Piet niet. Alleen buurdaken!',
        tevroeg: "Nog niet naar José's huis: eerst alle daken langs!"
      },
      beloning: ['Route gevonden! De schoorsteen van José staat in de GPS. Hier, voor in je inventaris.']
    },
    {
      nr: 2, kort: 'KWALITEITSCONTROLE',
      intro: ['Er zit een NEP-pepernoot in het systeem. Gevuld met marsepein, dus zwaarder. We verdenken Sint zelf. Je mag maar twee keer wegen.'],
      instructie: 'Tik een pepernoot, tik een schaal. Dan WEEG. Weet je het? Tik hem aan en druk NEP!',
      maxWegingen: 2,
      hints: ['Je hoeft niet alles tegelijk te wegen.', 'Leg er drie tegen drie.', 'Weeg 1-2-3 tegen 4-5-6. Pak van de zware kant er twee en weeg die tegen elkaar. In evenwicht? Dan is het de derde!'],
      teksten: {
        links: 'Links is zwaarder!', rechts: 'Rechts is zwaarder!', gelijk: 'In evenwicht!',
        leeg: 'Leg eerst pepernoten op de schalen.',
        moe: 'De weegschaal is moe. Wijs nu de nep aan!',
        kies: 'Tik eerst een pepernoot aan.',
        knopWeeg: 'WEEG', knopLeeg: 'LEEG', knopNep: 'NEP!'
      },
      beloning: ['KRAK! Marsepein! Ik wist het. Sint, foei. Deze pepernoot gaat in je inventaris.']
    },
    {
      nr: 3, kort: 'LAADRUIM',
      intro: ['Alles moet in de zak. Geen gaten, anders krijgt Sint hem niet dicht.'],
      instructie: 'Tik een pakje en veeg over de vakjes in de zak waar het heen moet.',
      stukken: [
        { id: 'I', label: 'fiets', vast: [0, 0], cellen: [[0, 0], [0, 1], [0, 2], [0, 3]], sprite: { x: 0, y: 0, w: 64, h: 16 } },
        { id: 'O', label: 'boeken', cellen: [[0, 0], [0, 1], [1, 0], [1, 1]], sprite: { x: 64, y: 0, w: 32, h: 32 } },
        { id: 'L1', label: 'spelletje', cellen: [[0, 2], [1, 0], [1, 1], [1, 2]], sprite: { x: 0, y: 64, w: 48, h: 32 } },
        { id: 'L2', label: 'sokken', cellen: [[0, 0], [0, 1], [1, 1], [2, 1]], sprite: { x: 64, y: 64, w: 32, h: 48 } }
      ],
      // oplossing: [rij, kolom] van de linkerbovenhoek, draaiing 0
      oplossing: { O: [1, 0, 0], L1: [2, 0, 0], L2: [1, 2, 0] },
      hints: ['Begin met het lastigste pakje.', 'Het boekenpakket hoort in een hoek.', 'Kijk, ik leg er eentje goed voor je.'],
      teksten: { knopDraai: 'DRAAI', veegFout: 'Veeg precies over de vakjes die het pakje vult, zonder gaten of extra vakjes.', past: 'Dat past niet. Probeer een ander vakje of DRAAI.', kies: 'Tik eerst een pakje onder de zak.' },
      beloning: ['De zak is dicht, met een gouden strik! Sint is zo blij dat hij een dansje doet. Hier is je ZAK.']
    },
    {
      nr: 4, kort: 'BEVEILIGING',
      intro: ['Laatste stap! Ik speel het geheime Pietenritme voor, jij speelt het na. Niet zenuwachtig worden. Ik ben dat wel.'],
      instructie: 'Kijk en luister. Tik daarna dezelfde volgorde.',
      knoppen: ['TROMMEL', 'MIJTER', 'STAF', 'HOEFIJZER'],
      reeks: [0, 2, 1, 3, 0],
      beginLengte: 3,
      hints: ['Zeg de plaatjes hardop mee.', 'Ik speel het ritme voortaan lekker traag.', 'Let op: de volgende knop knippert even!'],
      teksten: { kijk: 'Kijk goed…', beurt: 'Jouw beurt!', goed: 'Goed zo! Er komt er eentje bij.', knopNogEens: 'NOG EENS' },
      beloning: ['Het Pietenritme klopt! De beveiliging staat weer aan. Hier is je TROMMEL.']
    }
  ],

  finale: {
    kort: 'DE GROTE HERSTART',
    intro: ['Het herstartgedicht! Sints rijmrobot is kapot, dus de woorden ontbreken. Tik een woordkaart en tik dan een lege plek.'],
    instructie: 'Tik een kaart, tik dan een lege plek.',
    gedicht: [
      { a: 'Eerst liep Piet in het donker over de daken, langs iedereen,', b: 'en eindigde bij José in de', woord: 'SCHOORSTEEN' },
      { a: 'Toen woog jij de koekjes, of ze klein waren of groot,', b: 'en ontmaskerde jij de nep-', woord: 'PEPERNOOT' },
      { a: 'Daarna paste je alles, zonder één leeg vak,', b: 'keurig in Sinterklaas zijn', woord: 'ZAK' },
      { a: 'En tot slot speelde jij, tussen al die rommel,', b: 'het geheime Pietenritme op de', woord: 'TROMMEL' }
    ],
    slot: ['Loop nu die vier, op volgorde, als Piet over het dak,', 'dan gaat de kluis open met een luide KRAK!'],
    kaarten: ['STOOMBOOT', 'SCHOORSTEEN', 'TROMMEL', 'MIJTER', 'ZAK', 'PEPERNOOT'],
    gedichtHints: ['Let op het rijm én op het spel.', 'Elke regel hoort bij één level.', 'Eén woord zet ik er alvast in.'],
    gedichtFout: 'Dat woord rijmt niet helemaal… het springt terug!',
    gedichtKlaar: ['Het gedicht klopt! Nu de herstartroute.', 'Loop van Sint naar de kluis. Langs de vier woorden, in de volgorde van het gedicht. Nooit op een kruisje!'],
    route: {
      instructie: 'Van Sint naar de kluis, langs de woorden in gedicht-volgorde.',
      start: 'A1', eind: 'D1',
      geblokt: ['A3', 'B1', 'C1', 'C2'],
      volgorde: ['B2', 'B4', 'C3', 'D2'], // SCHOORSTEEN, PEPERNOOT, ZAK, TROMMEL
      vakjes: {
        A1: 'sint', A3: 'mijter', B1: 'stoomboot', B2: 'item0', B4: 'item1',
        C1: 'paard', C2: 'mijter', C3: 'item2', D1: 'kluis', D2: 'item3'
      },
      oplossing: ['A1', 'A2', 'B2', 'B3', 'B4', 'C4', 'C3', 'D3', 'D2', 'D1'],
      hints: ['De volgorde staat in het gedicht.', 'Niet te snel naar de ZAK.', 'Ik loop met je mee tot de PEPERNOOT.'],
      redenen: {
        kruis: 'Daar staat een kruisje. Daar mag Piet niet komen!',
        dubbel: 'Daar was je al. Elk vakje hoogstens één keer.',
        ver: 'Alleen naar een buurvakje!',
        volgorde: 'Verkeerde volgorde! Kijk nog eens in het gedicht.',
        tevroeg: 'De kluis wil eerst alle vier de woorden.'
      }
    }
  },

  onthulling: {
    banner: 'GAME VOLTOOID!',
    krak: 'KRAK!',
    sint: 'Het Grote Boek is weer online! José, zonder jou had ik dit jaar per fax moeten werken. Jouw cadeau zit in een tas met twee cijfersloten.',
    slot1: 'SLOT 1',
    slot2: 'SLOT 2',
    klein: 'Past een code niet? Probeer hem op het andere slot.',
    raadselTitel: 'Waar is de tas?',
    hintKnop: 'HINT'
  }
};

/* ---------- Asset-informatie (uit assets/assets.json) ---------- */
const ASSETS = {
  'titel-skyline.png': [180, 320], 'bg-cadeaupapier.png': [32, 32], 'divider-pepernoten.png': [96, 12],
  'levelkaart.png': [180, 320], 'avatar-bits.png': [32, 32], 'perkament.png': [96, 128],
  'kluis-dicht.png': [64, 64], 'kluis-open.png': [64, 64], 'daken-set.png': [64, 64, 32, 32],
  'pepernoot-heel.png': [16, 16], 'pepernoot-nep.png': [16, 16], 'balans.png': [64, 64],
  'pakjes-set.png': [128, 128, 64, 64], 'pakjeszak.png': [64, 64], 'ritme-knoppen.png': [64, 64, 32, 32],
  'items-set.png': [64, 64, 32, 32], 'icoon-stoomboot.png': [32, 32], 'confetti-pepernoot.png': [8, 8]
};
const KAART_PLEKKEN = [[36, 264], [112, 204], [36, 144], [112, 84], [36, 24]]; // linkerbovenhoek, 32×32
const ZAK_RASTER = { x: 6, y: 6, stap: 13, vak: 12 };

/* =====================================================================
   SPELLOGICA (puur, zonder DOM – ook te testen met Node)
   ===================================================================== */
const LOGIC = {
  RIJEN: 'ABCD',
  id(r, c) { return 'ABCD'[r] + (c + 1); },
  rc(id) { return ['ABCD'.indexOf(id[0]), Number(id.slice(1)) - 1]; },
  buren(a, b) {
    const [r1, c1] = LOGIC.rc(a), [r2, c2] = LOGIC.rc(b);
    return Math.abs(r1 - r2) + Math.abs(c1 - c2) === 1;
  },

  // ---- Level 1: route over de daken ----
  l1Stap(route, vak, lv) {
    const laatste = route[route.length - 1];
    const totaal = 16 - lv.antennes.length;
    if (lv.antennes.includes(vak)) return { ok: false, reden: 'antenne' };
    if (route.includes(vak)) return { ok: false, reden: 'dubbel' };
    if (!LOGIC.buren(laatste, vak)) return { ok: false, reden: 'ver' };
    if (vak === lv.eind && route.length + 1 < totaal) return { ok: false, reden: 'tevroeg' };
    return { ok: true };
  },
  l1RouteGeldig(route, lv) {
    const totaal = 16 - lv.antennes.length;
    if (route[0] !== lv.start || route[route.length - 1] !== lv.eind) return false;
    if (route.length !== totaal || new Set(route).size !== route.length) return false;
    for (let i = 0; i < route.length; i++) {
      if (lv.antennes.includes(route[i])) return false;
      if (i > 0 && !LOGIC.buren(route[i - 1], route[i])) return false;
    }
    return true;
  },

  // ---- Level 2: weegschaal ----
  // -1 = links zwaarder, 1 = rechts zwaarder, 0 = evenwicht
  weeg(links, rechts, nep) {
    const g = (k) => k.length * 10 + (k.includes(nep) ? 3 : 0);
    const d = g(links) - g(rechts);
    return d > 0 ? -1 : d < 0 ? 1 : 0;
  },
  l2NepGevonden(keuze, nep) { return keuze === nep; },

  // ---- Level 3: pakjeszak ----
  normaliseer(cellen) {
    const mr = Math.min(...cellen.map(c => c[0])), mc = Math.min(...cellen.map(c => c[1]));
    return cellen.map(([r, c]) => [r - mr, c - mc]).sort((p, q) => p[0] - q[0] || p[1] - q[1]);
  },
  draai(cellen) { // 90° met de klok mee
    const H = Math.max(...cellen.map(c => c[0])) + 1;
    return LOGIC.normaliseer(cellen.map(([r, c]) => [c, H - 1 - r]));
  },
  vorm(stuk, rot) {
    let c = LOGIC.normaliseer(stuk.cellen);
    for (let i = 0; i < (rot % 4); i++) c = LOGIC.draai(c);
    return c;
  },
  // zak: 4×4 array met stuk-id of null. Geeft absolute cellen terug, of null als het niet past.
  l3Plaats(zak, cellen, r0, c0) {
    const abs = cellen.map(([r, c]) => [r + r0, c + c0]);
    for (const [r, c] of abs) {
      if (r < 0 || r > 3 || c < 0 || c > 3) return null;
      if (zak[r][c]) return null;
    }
    return abs;
  },
  // Tik op een vakje: het pakje komt zó te liggen dat één van zijn eigen blokjes op dat vakje ligt.
  // Geeft alle mogelijkheden (oorsprong [rij, kolom]) die in de zak passen, in leesvolgorde van de blokjes.
  l3Kandidaten(zak, cellen, r, c) {
    const uit = [];
    for (const [a, b] of cellen) {
      const o = [r - a, c - b];
      if (LOGIC.l3Plaats(zak, cellen, o[0], o[1]) && !uit.some(x => x[0] === o[0] && x[1] === o[1])) uit.push(o);
    }
    return uit;
  },
  // Veegplaatsen: de geveegde vakjes ([rij, kolom]-lijst) moeten precies de vorm van het pakje zijn,
  // in een van de vier draaiingen. Geeft { rot, r, c } (c/r = oorsprong) of null.
  l3VeegMatch(stuk, cellen) {
    const sleutel = (cs) => LOGIC.normaliseer(cs).map(x => x.join(',')).join(';');
    const doel = sleutel(cellen);
    const r0 = Math.min(...cellen.map(x => x[0])), c0 = Math.min(...cellen.map(x => x[1]));
    for (let rot = 0; rot < 4; rot++) if (sleutel(LOGIC.vorm(stuk, rot)) === doel) return { rot, r: r0, c: c0 };
    return null;
  },
  l3ZakVol(zak) { return zak.every(rij => rij.every(Boolean)); },

  // ---- Level 4: ritme ----
  // 'fout' | 'verder' | 'rond'
  l4Tik(reeks, lengte, invoer) {
    for (let i = 0; i < invoer.length; i++) if (invoer[i] !== reeks[i]) return 'fout';
    return invoer.length >= lengte ? 'rond' : 'verder';
  },

  // ---- Finale ----
  gedichtPast(plek, woord) { return CONFIG.finale.gedicht[plek].woord === woord; },
  gedichtKlaar(ingevuld) { return CONFIG.finale.gedicht.every((g, i) => ingevuld[i] === g.woord); },
  fStap(route, vak, f) {
    const laatste = route[route.length - 1];
    if (f.geblokt.includes(vak)) return { ok: false, reden: 'kruis' };
    if (route.includes(vak)) return { ok: false, reden: 'dubbel' };
    if (!LOGIC.buren(laatste, vak)) return { ok: false, reden: 'ver' };
    const gehad = route.filter(v => f.volgorde.includes(v)).length;
    if (f.volgorde.includes(vak) && f.volgorde[gehad] !== vak) return { ok: false, reden: 'volgorde' };
    if (vak === f.eind && gehad < f.volgorde.length) return { ok: false, reden: 'tevroeg' };
    return { ok: true };
  },
  fRouteGeldig(route, f) {
    if (route[0] !== f.start || route[route.length - 1] !== f.eind) return false;
    if (new Set(route).size !== route.length) return false;
    for (let i = 0; i < route.length; i++) {
      if (f.geblokt.includes(route[i])) return false;
      if (i > 0 && !LOGIC.buren(route[i - 1], route[i])) return false;
    }
    const items = route.filter(v => f.volgorde.includes(v));
    return items.length === f.volgorde.length && items.every((v, i) => v === f.volgorde[i]);
  }
};

function decodeer(b64) {
  const bin = atob(b64);
  const bytes = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; i++) bytes[i] = bin.charCodeAt(i);
  return new TextDecoder().decode(bytes);
}

if (typeof module !== 'undefined' && module.exports) module.exports = { CONFIG, LOGIC, decodeer };

/* =====================================================================
   INTERFACE (alleen in de browser)
   ===================================================================== */
if (typeof window !== 'undefined' && typeof document !== 'undefined') (function () {

  const TEST = new URLSearchParams(location.search).get('test') === '1';
  const RM = () => !!(window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches);
  const wacht = (ms) => new Promise(r => setTimeout(r, ms));
  const kies = (a) => a[Math.floor(Math.random() * a.length)];
  const $ = (s) => document.querySelector(s);

  function h(tag, props, ...kids) {
    const el = document.createElement(tag);
    if (props) for (const k in props) {
      const v = props[k];
      if (v == null || v === false) continue;
      if (k === 'class') el.className = v;
      else if (k === 'style') { for (const s in v) el.style.setProperty(s, v[s]); }
      else if (k.startsWith('on')) el.addEventListener(k.slice(2), v);
      else if (v === true) el.setAttribute(k, '');
      else el.setAttribute(k, v);
    }
    for (const kid of kids.flat(3)) if (kid != null && kid !== false) el.append(kid.nodeType ? kid : document.createTextNode(String(kid)));
    return el;
  }

  /* ---------- Opslag ---------- */
  const nieuweStaat = () => ({ intro: false, klaar: [false, false, false, false], items: [], gedicht: false, finale: false, geluid: false });
  let ST = laad();
  function laad() {
    try {
      const s = JSON.parse(localStorage.getItem(CONFIG.opslagSleutel));
      if (s && Array.isArray(s.klaar)) return Object.assign(nieuweStaat(), s);
    } catch (e) { /* geen opslag */ }
    return nieuweStaat();
  }
  function bewaar() { try { localStorage.setItem(CONFIG.opslagSleutel, JSON.stringify(ST)); } catch (e) { /* ok */ } }

  /* ---------- Schaal (altijd hele factoren) ---------- */
  let S = 2, APPW = 360;
  function berekenSchaal() {
    APPW = Math.min(window.innerWidth, 480);
    S = (APPW >= 420 && window.innerHeight >= 760) ? 3 : 2;
    document.documentElement.style.setProperty('--s', S);
    document.documentElement.style.setProperty('--px', S + 'px');
  }

  /* ---------- Sprites ---------- */
  const ONTBREEKT = new Set();
  function laadAssets() {
    return Promise.all(Object.keys(ASSETS).map(n => new Promise(res => {
      const img = new Image();
      img.onload = () => res();
      img.onerror = () => { ONTBREEKT.add(n); res(); };
      img.src = 'assets/' + n;
    })));
  }
  // o: {schaal, cel:[cx,cy], x,y,w,h (bronpixels), cls}
  function spr(naam, o = {}) {
    const a = ASSETS[naam];
    const s = o.schaal || 1;
    const cw = o.w || a[2] || a[0], ch = o.h || a[3] || a[1];
    const sx = o.x != null ? o.x : (o.cel ? o.cel[0] * cw : 0);
    const sy = o.y != null ? o.y : (o.cel ? o.cel[1] * ch : 0);
    const el = h('div', {
      class: 'spr ' + (o.cls || ''), 'aria-hidden': 'true',
      style: { width: cw * s + 'px', height: ch * s + 'px' }
    });
    if (ONTBREEKT.has(naam)) {
      el.classList.add('spr-nep');
      el.innerHTML = vervangSvg(naam, o.cel, cw, ch);
    } else {
      el.style.backgroundImage = `url("assets/${naam}")`;
      el.style.backgroundSize = `${a[0] * s}px ${a[1] * s}px`;
      el.style.backgroundPosition = `${-sx * s}px ${-sy * s}px`;
    }
    return el;
  }
  // Pixel-SVG uit een rij-tekening
  const KLEUR = { K: '#3A0508', N: '#0B1226', R: '#B3121F', r: '#7A0C14', G: '#D4A437', g: '#F3D27A', W: '#FFF8EC', B: '#9A5B2E', b: '#6B3A1A', M: '#F2A7B8', S: '#8A8F98', U: '#14213D', u: '#22355E', Y: '#FFE680' };
  function pix(rijen, cls) {
    const w = rijen[0].length, hh = rijen.length;
    let rects = '';
    rijen.forEach((rij, y) => {
      let x = 0;
      while (x < w) {
        const c = rij[x];
        if (c === '.') { x++; continue; }
        let e = x; while (e < w && rij[e] === c) e++;
        rects += `<rect x="${x}" y="${y}" width="${e - x}" height="1" fill="${KLEUR[c]}"/>`;
        x = e;
      }
    });
    const span = h('span', { class: 'pix ' + (cls || ''), 'aria-hidden': 'true' });
    span.innerHTML = `<svg viewBox="0 0 ${w} ${hh}" shape-rendering="crispEdges" width="100%" height="100%">${rects}</svg>`;
    return span;
  }
  function vervangSvg(naam, cel, w, hh) {
    const kleur = /pepernoot|confetti/.test(naam) ? '#9A5B2E' : /kluis|balans|items/.test(naam) ? '#D4A437' : /titel|kaart|daken/.test(naam) ? '#14213D' : '#B3121F';
    return `<svg viewBox="0 0 ${w} ${hh}" shape-rendering="crispEdges" width="100%" height="100%"><rect x="1" y="1" width="${w - 2}" height="${hh - 2}" fill="${kleur}" stroke="#3A0508"/><rect x="${Math.floor(w / 2) - 1}" y="${Math.floor(hh / 2) - 1}" width="2" height="2" fill="#F3D27A"/></svg>`;
  }
  const ICOON = {
    ster: ['...g...', '..gGg..', 'ggGYGgg', '.gGGGg.', '..GGG..', '.gG.Gg.', '.G...G.'],
    kruis: ['RR...RR', 'RRR.RRR', '.RRRRR.', '..RRR..', '.RRRRR.', 'RRR.RRR', 'RR...RR'],
    pakje: ['.g...g..', '..g.g...', 'RRRgRRRR', 'RRRgRRRR', 'gggggggg', 'RRRgRRRR', 'RRRgRRRR', 'rrrgrrrr'],
    slot: ['..KKK..', '.K...K.', '.K...K.', 'GGGGGGG', 'GGGKGGG', 'GGGKGGG', 'GGGGGGG'],
    vraag: ['.GGGG.', 'GG..GG', '....GG', '...GG.', '..GG..', '......', '..GG..'],
    menu: ['GGGGGGG', '.......', 'GGGGGGG', '.......', 'GGGGGGG'],
    luidAan: ['...G.....', '..GG..G..', 'GGGG...G.', 'GGGG.G.G.', 'GGGG...G.', '..GG..G..', '...G.....'],
    luidUit: ['...G.....', '..GG.....', 'GGGG.R.R.', 'GGGG..R..', 'GGGG.R.R.', '..GG.....', '...G.....'],
    strik: ['GG.....GG', 'gGG...GGg', '.gGG.GGg.', '..gGGGg..', '.gGG.GGg.', 'GGg...gGG', 'G.......G'],
    pijl: ['GGGGG', '.GGG.', '..G..']
  };

  /* ---------- Geluid (Web Audio, standaard uit) ---------- */
  const GELUID = {
    ctx: null,
    zorg() {
      if (!this.ctx) { const AC = window.AudioContext || window.webkitAudioContext; if (!AC) return null; this.ctx = new AC(); }
      if (this.ctx.state === 'suspended') this.ctx.resume();
      return this.ctx;
    },
    toon(f, duur, type = 'square', na = 0, vol = 0.05) {
      if (!ST.geluid) return;
      const c = this.zorg(); if (!c) return;
      const t = c.currentTime + na;
      const o = c.createOscillator(), g = c.createGain();
      o.type = type; o.frequency.setValueAtTime(f, t);
      g.gain.setValueAtTime(vol, t); g.gain.setValueAtTime(0, t + duur);
      o.connect(g); g.connect(c.destination);
      o.start(t); o.stop(t + duur + 0.03);
    },
    reeks(noten, type) { let t = 0; for (const [f, d] of noten) { if (f) this.toon(f, d * 0.85, type, t); t += d; } },
    blip() { this.toon(880, 0.05); },
    tik() { this.toon(1320, 0.015, 'square', 0, 0.02); },
    fout() { this.toon(140, 0.12); this.toon(110, 0.18, 'square', 0.12); },
    clear() { this.reeks([[523, .1], [659, .1], [784, .1], [1047, .25], [0, .05], [784, .1], [1047, .3]]); },
    kluis() { this.reeks([[392, .12], [523, .12], [659, .12], [784, .12], [659, .12], [784, .12], [1047, .5]], 'triangle'); this.reeks([[196, .36], [262, .36], [392, .6]], 'square'); },
    knop(i) { this.toon([262, 330, 392, 523][i], 0.28, i % 2 ? 'triangle' : 'square', 0, 0.06); },

    // ---- Achtergrondmuziek (loop): happy hardcore, 172 BPM ----
    mTimer: null, mBus: null, mVolgende: 0, mTel: 0, mRuis: null, mLead: null, mGraad: null,
    freq(naam) {
      const m = /^([A-G])(\d)$/.exec(naam);
      const semi = { C: 0, D: 2, E: 4, F: 5, G: 7, A: 9, B: 11 }[m[1]];
      return 440 * Math.pow(2, (semi + 12 * (Number(m[2]) + 1) - 69) / 12);
    },
    muziekSchakel(aan) {
      if (aan && ST.geluid && !document.hidden) this.muziekStart(); else this.muziekStop();
    },
    muziekStart() {
      if (this.mTimer) return;
      const c = this.zorg(); if (!c) return;
      if (!this.mRuis) {
        this.mRuis = c.createBuffer(1, Math.floor(c.sampleRate * 0.3), c.sampleRate);
        const d = this.mRuis.getChannelData(0);
        for (let i = 0; i < d.length; i++) d[i] = Math.random() * 2 - 1;
      }
      if (!this.mLead) { // welke melodienoot klinkt op welke tel
        this.mLead = [];
        this.mGraad = [];
        for (const [noot, dur] of CONFIG.muziek.melodie) {
          const g = ['C', 'D', 'E', 'F', 'G', 'A', 'B'].indexOf(noot[0]) + 7 * (Number(noot[1]) - 4);
          for (let i = 0; i < dur; i++) { this.mLead.push(this.freq(noot) * 2); this.mGraad.push(g); }
        }
      }
      this.mBus = c.createGain(); this.mBus.gain.value = 0.7; this.mBus.connect(c.destination);
      this.mVolgende = c.currentTime + 0.15; this.mTel = 0;
      this.mTimer = setInterval(() => this.muziekPlan(), 100);
      this.muziekPlan();
    },
    muziekStop() {
      if (!this.mTimer) return;
      clearInterval(this.mTimer); this.mTimer = null;
      try { this.mBus.disconnect(); } catch (e) { /* ok */ }
      this.mBus = null;
    },
    muziekPlan() {
      const c = this.ctx; if (!c || !this.mBus) return;
      if (c.state !== 'running') { this.mVolgende = Math.max(this.mVolgende, c.currentTime + 0.15); return; }
      const tel = 60 / CONFIG.muziek.bpm, totaal = this.mLead.length;
      while (this.mVolgende < c.currentTime + 0.6) {
        this.muziekTel(this.mTel, this.mVolgende, tel);
        this.mVolgende += tel; this.mTel = (this.mTel + 1) % totaal;
      }
    },
    // Eén tel. De originele melodienoot is het luidst; daartussen volgen snelle 16e-nootjes
    // (stapjes naar de volgende noot). Beat, bas en arpeggio blijven bewust zachter.
    muziekTel(n, t, tel) {
      const M = CONFIG.muziek, V = M.volume, akk = M.akkoorden[Math.floor(n / M.tellenPerMaat) % M.akkoorden.length];
      this.mKick(t, V.kick);
      if (n % 4 === 1 || n % 4 === 3) this.mSnare(t, V.snare);
      this.mHat(t + tel / 2, V.hatOpen, 0.11);      // open hat op de offbeat
      this.mHat(t + tel / 4, V.hatDicht, 0.03);     // 16e
      this.mHat(t + tel * 0.75, V.hatDicht, 0.03);
      this.mNoot(this.freq(akk[0]) * 2, t + tel / 2, tel * 0.46, 'sawtooth', V.bas, 0.3); // rollende bas op de offbeat
      const arp = [akk[1], akk[2], akk[3], akk[2]];
      for (let j = 0; j < 4; j++) this.mNoot(this.freq(arp[j]), t + j * tel / 4, tel / 4 * 0.8, 'triangle', V.arp, 1);
      // originele noot (twee lichtjes verstemde blokgolven)
      for (const det of [-7, 7]) this.mNoot(this.mLead[n], t, tel * 0.5, 'square', V.melodie, 1, det);
      // snelle tussennootjes richting de volgende originele noot
      const cur = this.mGraad[n], volg = this.mGraad[(n + 1) % this.mGraad.length];
      const dir = volg === cur ? 1 : Math.sign(volg - cur), ver = Math.abs(volg - cur);
      const vul = [cur + dir, ver >= 2 ? cur + 2 * dir : cur];
      vul.forEach((g, j) => this.mNoot(this.graadFreq(g), t + tel * (0.5 + 0.25 * j), tel * 0.22, 'square', V.vul, 1));
    },
    graadFreq(g) { // diatonische toonladder C-groot, g=0 is C4, resultaat een octaaf hoger (zoals de lead)
      const toon = [0, 2, 4, 5, 7, 9, 11][((g % 7) + 7) % 7] + 12 * Math.floor(g / 7);
      return 261.6256 * Math.pow(2, (toon + 12) / 12);
    },
    mNoot(f, t, duur, type, vol, start, det, aanloop) {
      const c = this.ctx, o = c.createOscillator(), g = c.createGain();
      o.type = type; o.frequency.setValueAtTime(f, t); if (det) o.detune.value = det;
      g.gain.setValueAtTime(vol * start, t);
      if (start < 1) g.gain.linearRampToValueAtTime(vol, t + (aanloop || duur * 0.5));
      g.gain.setValueAtTime(vol, t + duur * 0.9); g.gain.linearRampToValueAtTime(0, t + duur);
      o.connect(g); g.connect(this.mBus);
      o.start(t); o.stop(t + duur + 0.02);
    },
    mKick(t, vol) {
      const c = this.ctx, o = c.createOscillator(), g = c.createGain();
      o.type = 'sine'; o.frequency.setValueAtTime(170, t); o.frequency.exponentialRampToValueAtTime(42, t + 0.12);
      g.gain.setValueAtTime(vol, t); g.gain.exponentialRampToValueAtTime(0.001, t + 0.18);
      o.connect(g); g.connect(this.mBus); o.start(t); o.stop(t + 0.2);
    },
    mRuisBron(t, duur, filter, freq, vol) {
      const c = this.ctx, src = c.createBufferSource(), f = c.createBiquadFilter(), g = c.createGain();
      src.buffer = this.mRuis; f.type = filter; f.frequency.value = freq;
      g.gain.setValueAtTime(vol, t); g.gain.exponentialRampToValueAtTime(0.001, t + duur);
      src.connect(f); f.connect(g); g.connect(this.mBus); src.start(t); src.stop(t + duur + 0.02);
    },
    mHat(t, vol, duur) { this.mRuisBron(t, duur, 'highpass', 7500, vol); },
    mSnare(t, vol) { this.mRuisBron(t, 0.13, 'bandpass', 1900, vol); }
  };

  /* ---------- Basiselementen ---------- */
  let stage, topbar, inventaris, divider;
  function knop(tekst, actie, cls = '') {
    return h('button', { class: 'btn ' + cls, type: 'button', onclick: (e) => { GELUID.blip(); actie(e); } }, tekst);
  }
  function toast(tekst, slecht) {
    const t = $('#toast');
    t.textContent = tekst;
    t.className = 'toast toon' + (slecht ? ' slecht' : '');
    clearTimeout(toast.timer);
    toast.timer = setTimeout(() => { t.className = 'toast'; }, 2400);
  }
  function foutje(tekst) {
    GELUID.fout();
    toast(tekst || kies(CONFIG.teksten.fout), true);
    const app = $('#app'); app.classList.remove('schud'); void app.offsetWidth; app.classList.add('schud');
  }
  function flitsVak(el) { if (!el) return; el.classList.remove('flits'); void el.offsetWidth; el.classList.add('flits'); }

  // Perkament met border-image; zegel als losse sprite erbovenop
  function perkament(inhoud, schaal, cls = '') {
    return h('div', { class: 'perk ' + cls, style: { '--ps': schaal } },
      inhoud,
      spr('perkament.png', { schaal, x: 35, y: 101, w: 24, h: 24, cls: 'zegel' }));
  }
  function maakPerkamentZonderZegel() {
    // Gum het zegel weg (kolom 20 kopiëren) zodat de onderrand netjes kan rekken.
    if (ONTBREEKT.has('perkament.png')) { document.documentElement.classList.add('geen-perk'); return Promise.resolve(); }
    return new Promise(res => {
      const img = new Image();
      img.onload = () => {
        try {
          const c = document.createElement('canvas'); c.width = 96; c.height = 128;
          const x = c.getContext('2d'); x.drawImage(img, 0, 0);
          const kol = x.getImageData(20, 100, 1, 28);
          for (let i = 33; i <= 60; i++) x.putImageData(kol, i, 100);
          document.documentElement.style.setProperty('--perk-img', `url(${c.toDataURL()})`);
        } catch (e) { /* file:// – gebruik het origineel */ }
        res();
      };
      img.onerror = () => res();
      img.src = 'assets/perkament.png';
    });
  }

  /* ---------- Dialoog van Bits ---------- */
  let dialoogRij = Promise.resolve();
  function zeg(regels) {
    const p = dialoogRij.then(() => _zeg(regels));
    dialoogRij = p.catch(() => {});
    return p;
  }
  function _zeg(regels) {
    return new Promise(klaar => {
      const laag = $('#dialoog'), tekst = $('#dlg-tekst'), pijl = $('#dlg-pijl');
      let i = 0, typen = false, timer = null;
      function toonRegel() {
        const vol = regels[i];
        pijl.hidden = true; tekst.textContent = '';
        if (RM()) { tekst.textContent = vol; pijl.hidden = false; return; }
        let n = 0; typen = true;
        timer = setInterval(() => {
          n += 1; tekst.textContent = vol.slice(0, n);
          if (n % 3 === 0) GELUID.tik();
          if (n >= vol.length) { clearInterval(timer); typen = false; pijl.hidden = false; }
        }, 26);
      }
      laag.onclick = () => {
        if (typen) { clearInterval(timer); typen = false; tekst.textContent = regels[i]; pijl.hidden = false; return; }
        GELUID.blip();
        i++;
        if (i < regels.length) toonRegel();
        else { laag.hidden = true; laag.onclick = null; klaar(); }
      };
      laag.hidden = false;
      toonRegel();
    });
  }

  /* ---------- Overlays ---------- */
  function overlay(inhoud, cls = '') {
    const o = h('div', { class: 'overlay ' + cls }, inhoud);
    $('#overlays').append(o);
    return o;
  }
  function brief(titel, regels, knopTekst) {
    return new Promise(res => {
      const o = overlay(h('div', { class: 'brief-wrap' },
        perkament(h('div', { class: 'brief-tekst' },
          h('p', { class: 'brief-titel' }, titel),
          regels.map(r => h('p', null, r))), 2),
        knop(knopTekst || CONFIG.teksten.verder, () => { o.remove(); res(); }, 'groot')), 'donker');
    });
  }
  async function banner(regel1, regel2, ms = 1600) {
    const o = overlay(h('div', { class: 'banner' }, h('div', { class: 'banner-1' }, regel1), regel2 ? h('div', { class: 'banner-2' }, regel2) : null), 'donker');
    await Promise.race([wacht(RM() ? 900 : ms), new Promise(r => o.addEventListener('click', r))]);
    o.remove();
  }

  /* ---------- Confetti ---------- */
  function confetti(n) {
    if (RM()) n = Math.min(n, 10);
    const laag = $('#confetti');
    for (let i = 0; i < n; i++) {
      const stuk = Math.random() < 0.55
        ? spr('confetti-pepernoot.png', { schaal: S })
        : pix(['.G.', 'GYG', '.G.'], 'conf-ster');
      const el = h('div', { class: 'conf', style: { left: Math.floor(Math.random() * 96) + '%', 'animation-delay': (Math.random() * 0.8).toFixed(2) + 's', 'animation-duration': (1.6 + Math.random() * 1.4).toFixed(2) + 's' } }, stuk);
      laag.append(el);
      setTimeout(() => el.remove(), 4200);
    }
  }

  /* ---------- Topbalk & inventaris ---------- */
  let verborgenItem = -1;
  function tekenInventaris() {
    inventaris.replaceChildren(...CONFIG.items.map((it, i) => {
      const heb = ST.items.includes(i) && i !== verborgenItem;
      return h('div', { class: 'slot' + (heb ? ' vol' : ''), 'data-slot': i },
        h('div', { class: 'slot-vak' }, heb ? spr('items-set.png', { cel: it.cel, schaal: 1 }) : null),
        h('div', { class: 'slot-woord' }, heb ? it.woord : '…'));
    }));
  }
  function tekenTopbar() {
    const sc = HUIDIG;
    $('#titel').textContent = sc && sc.titel ? sc.titel : '';
    $('#hint-knop').hidden = !(sc && sc.hints);
    $('#geluid-knop').replaceChildren(pix(ST.geluid ? ICOON.luidAan : ICOON.luidUit));
    $('#geluid-knop').setAttribute('aria-label', ST.geluid ? 'Geluid uitzetten' : 'Geluid aanzetten');
    $('#geluid-knop').classList.toggle('aan', ST.geluid);
  }
  function zetChrome(modus) {
    topbar.hidden = modus === 'geen';
    inventaris.hidden = modus !== 'vol';
    divider.hidden = modus !== 'vol';
    tekenTopbar(); tekenInventaris();
  }

  /* ---------- Schermbeheer ---------- */
  let HUIDIG = null;
  function ga(scherm) {
    if (HUIDIG && HUIDIG.weg) HUIDIG.weg();
    if (HUIDIG) HUIDIG.actief = false;
    $('#overlays').replaceChildren();
    HUIDIG = scherm; scherm.actief = true;
    zetChrome(scherm.chrome || 'vol');
    stage.className = 'stage ' + (scherm.cls || '');
    stage.scrollTop = 0;
    scherm.teken();
    GELUID.muziekSchakel(!scherm.zonderMuziek);
    if (scherm.start) scherm.start();
  }
  function hertekenen() { berekenSchaal(); if (HUIDIG) { tekenTopbar(); tekenInventaris(); HUIDIG.teken(); } }

  // Hint-knop: drie niveaus, daarna “Bits, los jij het maar op”
  async function doeHint() {
    const sc = HUIDIG; if (!sc || !sc.hints || sc.bezig) return;
    const i = Math.min(sc.hintNr || 0, 2);
    sc.hintNr = i + 1;
    await zeg([sc.hints[i]]);
    if (i === 2 && sc.actief) {
      if (sc.hint3) sc.hint3();
      sc.magOverslaan = true;
      sc.teken();
    }
  }
  function overslaanKnop(sc) {
    return sc.magOverslaan ? knop(CONFIG.teksten.bitsLost, () => sc.overslaan(), 'klein goud') : null;
  }
  function levelLayout(instructie, ...inhoud) {
    return h('div', { class: 'level' }, h('p', { class: 'instructie' }, instructie), ...inhoud);
  }

  async function levelGehaald(i, overgeslagen) {
    const sc = HUIDIG; sc.bezig = true;
    ST.klaar[i] = true; if (!ST.items.includes(i)) ST.items.push(i);
    bewaar();
    GELUID.clear();
    confetti(36);
    verborgenItem = i; tekenInventaris();
    await wacht(700);
    // LEVEL CLEAR-banner met vliegend item
    const it = CONFIG.items[i];
    const item = spr('items-set.png', { cel: it.cel, schaal: 3, cls: 'vlieg-item' });
    const o = overlay(h('div', { class: 'banner' }, h('div', { class: 'banner-1' }, CONFIG.teksten.levelClear), item, h('div', { class: 'banner-2' }, it.woord)), 'donker');
    await wacht(RM() ? 700 : 1500);
    const doel = inventaris.querySelector(`[data-slot="${i}"] .slot-vak`);
    if (doel && !RM()) {
      const a = item.getBoundingClientRect(), b = doel.getBoundingClientRect();
      const dx = Math.round(b.left + b.width / 2 - (a.left + a.width / 2));
      const dy = Math.round(b.top + b.height / 2 - (a.top + a.height / 2));
      item.style.transform = `translate(${dx}px, ${dy}px) scale(${1 / 3})`;
      o.classList.add('vervaag');
      await wacht(800);
    }
    o.remove();
    verborgenItem = -1; tekenInventaris();
    const slot = inventaris.querySelector(`[data-slot="${i}"]`);
    if (slot) slot.classList.add('nieuw');
    await zeg(overgeslagen ? CONFIG.teksten.overslaan.concat(CONFIG.levels[i].beloning) : CONFIG.levels[i].beloning);
    if (i === 3) await zeg(CONFIG.teksten.naLevel4);
    if (sc.actief) ga(schermKaart());
  }

  /* =====================================================================
     SCHERMEN
     ===================================================================== */
  function schermTitel() {
    return {
      chrome: 'geen', cls: 'vol',
      teken() {
        const T = Math.max(1, Math.floor(APPW / 180));
        stage.replaceChildren(h('div', {
          class: 'titel-scherm', role: 'button', tabindex: '0', 'aria-label': CONFIG.teksten.tikStart,
          onclick: () => { GELUID.blip(); ga(ST.finale ? schermOnthulling(false) : ST.intro ? schermKaart() : schermGlitch()); }
        },
          h('div', { class: 'titel-beeld' }, spr('titel-skyline.png', { schaal: T })),
          h('h1', { class: 'titel-tekst' }, 'HET GROTE', h('br'), 'BOEK IS', h('br'), 'GECRASHT'),
          h('div', { class: 'tik-start knipper' }, CONFIG.teksten.tikStart)));
      }
    };
  }

  function schermGlitch() {
    let timer, klaar = false;
    const sc = {
      chrome: 'geen', cls: 'vol',
      teken() {
        const cv = h('canvas', { class: 'ruis', width: 60, height: 100 });
        stage.replaceChildren(h('div', { class: 'glitch', onclick: verder },
          cv,
          h('div', { class: 'glitch-balk' }, h('span', { class: 'knipper-snel' }, CONFIG.teksten.foutmelding)),
          h('div', { class: 'glitch-laptop' }, '>_ ', h('span', { class: 'knipper' }, '█'))));
        const x = cv.getContext('2d');
        const kleuren = ['#14213D', '#0B1226', '#7A0C14', '#B3121F', '#FFF8EC', '#22355E'];
        const ruis = () => {
          for (let i = 0; i < 600; i++) { x.fillStyle = kies(kleuren); x.fillRect(Math.floor(Math.random() * 60), Math.floor(Math.random() * 100), 1 + Math.floor(Math.random() * 4), 1); }
        };
        ruis();
        clearInterval(timer);
        if (!RM()) timer = setInterval(ruis, 90);
      },
      start() { GELUID.fout(); setTimeout(verder, 3000); },
      weg() { clearInterval(timer); }
    };
    function verder() { if (klaar || !sc.actief) return; klaar = true; ga(schermIntro()); }
    return sc;
  }

  function schermIntro() {
    let klaarVoorStart = false;
    const sc = {
      chrome: 'geen', cls: 'vol',
      teken() {
        stage.replaceChildren(h('div', { class: 'nacht-scherm' },
          h('div', { class: 'sterren' }),
          h('div', { class: 'intro-boot' }, spr('icoon-stoomboot.png', { schaal: S * 2 })),
          klaarVoorStart ? knop(CONFIG.teksten.startKnop, () => ga(schermKaart()), 'groot start-knop') : null));
      },
      async start() {
        await wacht(300);
        await zeg(CONFIG.teksten.intro.map(r => r.replace('José', CONFIG.naam)));
        if (!sc.actief) return;
        const b = CONFIG.teksten.brief;
        await brief(b.titel.replace('José', CONFIG.naam), b.regels);
        if (!sc.actief) return;
        ST.intro = true; bewaar();
        klaarVoorStart = true; sc.teken();
      }
    };
    return sc;
  }

  function schermKaart() {
    const sc = {
      chrome: 'vol', titel: 'LEVELKAART', cls: 'kaart-stage',
      teken() {
        const M = Math.max(1, Math.min(2, Math.floor(APPW / 180)));
        const volgende = ST.klaar.indexOf(false);
        const kaart = h('div', { class: 'kaart', style: { width: 180 * M + 'px', height: 320 * M + 'px' } }, spr('levelkaart.png', { schaal: M }));
        let focus = null;
        KAART_PLEKKEN.forEach(([x, y], i) => {
          let status;
          if (i < 4) status = ST.klaar[i] ? 'klaar' : (i === volgende ? 'open' : 'dicht');
          else status = ST.finale ? 'klaar' : (volgende === -1 ? 'open' : 'dicht');
          const naam = CONFIG.kaart.plekken[i];
          const b = h('button', {
            class: 'plek ' + status, type: 'button',
            'aria-label': (i < 4 ? 'Level ' + (i + 1) + ': ' : '') + naam + (status === 'dicht' ? ' (op slot)' : status === 'klaar' ? ' (klaar)' : ''),
            style: { left: x * M + 'px', top: y * M + 'px', width: 32 * M + 'px', height: 32 * M + 'px' },
            onclick: () => {
              if (status === 'dicht') { foutje(CONFIG.teksten.kaartLocked); return; }
              GELUID.blip();
              if (i < 4) ga(LEVELS[i]());
              else ga(ST.finale ? schermOnthulling(false) : schermFinale());
            }
          },
            status === 'klaar' ? pix(ICOON.ster, 'plek-ster') : null,
            status === 'dicht' ? pix(ICOON.slot, 'plek-slot') : null);
          const label = h('div', { class: 'plek-label ' + (x < 90 ? 'rechts' : 'links'), style: { top: (y + 10) * M + 'px', [x < 90 ? 'left' : 'right']: (x < 90 ? (x + 36) * M : (180 - x + 4) * M) + 'px' } },
            (i < 4 ? (i + 1) + ' ' : '') + naam);
          kaart.append(b, label);
          if (status === 'open') focus = y * M;
        });
        stage.replaceChildren(h('div', { class: 'kaart-wrap' }, kaart));
        if (focus != null) requestAnimationFrame(() => { stage.scrollTop = Math.max(0, focus - stage.clientHeight / 2 + 32); });
      }
    };
    return sc;
  }

  /* ---------------- LEVEL 1: ROUTEPLANNER ---------------- */
  function schermLevel1() {
    const lv = CONFIG.levels[0];
    const sc = {
      titel: 'LEVEL 1', hints: lv.hints, hintNr: 0,
      route: [lv.start], klaar: false,
      teken() {
        const T = S;
        const laatste = sc.route[sc.route.length - 1];
        const raster = h('div', { class: 'raster', style: { '--t': 32 * T + 'px' } });
        raster.append(h('span'), ...[1, 2, 3, 4].map(n => h('span', { class: 'as' }, n)));
        for (let r = 0; r < 4; r++) {
          raster.append(h('span', { class: 'as' }, LOGIC.RIJEN[r]));
          for (let c = 0; c < 4; c++) {
            const id = LOGIC.id(r, c);
            const antenne = lv.antennes.includes(id);
            const cel = antenne ? [0, 1] : id === lv.eind ? [1, 1] : ((r + c) % 3 === 1 ? [1, 0] : [0, 0]);
            const stap = sc.route.indexOf(id);
            const vak = h('button', {
              class: 'vak' + (stap >= 0 ? ' inroute' : '') + (id === laatste ? ' laatste' : '') + (antenne ? ' antenne' : ''),
              type: 'button', 'data-id': id, 'aria-label': 'Dak ' + id + (antenne ? ' met antenne' : '') + (stap >= 0 ? ', stap ' + (stap + 1) : ''),
              onclick: () => tik(id)
            }, spr('daken-set.png', { cel, schaal: T }));
            if (id === lv.eind) vak.append(h('span', { class: 'naambord', style: { left: 6 * T + 'px', top: 11 * T + 'px', width: 20 * T + 'px', height: 7 * T + 'px' } }, CONFIG.naam.toUpperCase()));
            if (id === lv.start) vak.append(h('div', { class: 'vak-icoon' }, spr('icoon-stoomboot.png', { schaal: Math.max(1, T - 1) })));
            if (stap >= 0 && id !== laatste) vak.append(h('span', { class: 'stapnr' }, stap + 1));
            if (id === laatste) vak.append(pix(ICOON.pakje, 'pakje-loper'));
            raster.append(vak);
          }
        }
        stage.replaceChildren(levelLayout(lv.instructie, raster,
          h('div', { class: 'knoppen' },
            knop(CONFIG.teksten.opnieuw, () => { if (sc.klaar) return; sc.route = [lv.start]; sc.teken(); }),
            h('span', { class: 'teller' }, `${sc.route.length}/${16 - lv.antennes.length}`),
            overslaanKnop(sc))));
      },
      start() { intro(sc, lv); },
      hint3() { sc.route = lv.oplossing.slice(0, 5); },
      overslaan() { if (sc.klaar) return; sc.klaar = true; sc.route = lv.oplossing.slice(); sc.teken(); levelGehaald(0, true); }
    };
    function tik(id) {
      if (sc.klaar || sc.bezig) return;
      const laatste = sc.route[sc.route.length - 1];
      if (id === laatste) { if (sc.route.length > 1) { sc.route.pop(); GELUID.blip(); sc.teken(); } return; }
      const r = LOGIC.l1Stap(sc.route, id, lv);
      if (!r.ok) { foutje(lv.redenen[r.reden] + ' ' + kies(CONFIG.teksten.fout)); flitsVak(stage.querySelector(`[data-id="${id}"]`)); return; }
      sc.route.push(id); GELUID.blip(); sc.teken();
      if (id === lv.eind && LOGIC.l1RouteGeldig(sc.route, lv)) { sc.klaar = true; levelGehaald(0); }
    }
    return sc;
  }

  async function intro(sc, lv) {
    sc.bezig = true;
    await banner('LEVEL ' + lv.nr, lv.kort);
    if (!sc.actief) return;
    await zeg(lv.intro);
    sc.bezig = false;
    if (sc.naIntro) sc.naIntro();
  }

  /* ---------------- LEVEL 2: PEPERNOTEN-WEEGSCHAAL ---------------- */
  function schermLevel2() {
    const lv = CONFIG.levels[1], tx = lv.teksten;
    const sc = {
      titel: 'LEVEL 2', hints: lv.hints, hintNr: 0,
      nep: 1 + Math.floor(Math.random() * 6), links: [], rechts: [], wegingen: 0, gekozen: null, kant: 0, uitslag: '', klaar: false,
      teken() {
        const B = S + 1;
        const plek = (n) => sc.links.includes(n) ? 'L' : sc.rechts.includes(n) ? 'R' : 'T';
        const noot = (n, schaal) => h('div', { class: 'noot' + (sc.gekozen === n ? ' gekozen' : '') },
          spr(sc.klaar && n === sc.nep ? 'pepernoot-nep.png' : 'pepernoot-heel.png', { schaal }),
          h('span', { class: 'noot-nr' }, n));
        const schaal = (kant, lijst) => h('button', {
          class: 'schaal schaal-' + kant, type: 'button', 'aria-label': (kant === 'L' ? 'Linker' : 'Rechter') + ' schaal',
          onclick: () => tikSchaal(kant)
        }, h('div', { class: 'schaal-stapel' }, lijst.map(n => h('span', {
          class: 'op-schaal', onclick: (e) => { e.stopPropagation(); tikNoot(n); }
        }, noot(n, S)))));
        const balans = h('div', { class: 'balans kant' + sc.kant, style: { width: 64 * B + 'px', height: 64 * B + 'px', '--b': B } },
          h('div', { class: 'balans-beeld' }, spr('balans.png', { schaal: B })),
          schaal('L', sc.links), schaal('R', sc.rechts));
        const bak = h('div', { class: 'bak' }, [1, 2, 3, 4, 5, 6].map(n => plek(n) === 'T'
          ? h('button', { class: 'bak-vak', type: 'button', 'aria-label': 'Pepernoot ' + n, onclick: () => tikNoot(n) }, noot(n, B))
          : h('div', { class: 'bak-vak leeg' }, h('span', { class: 'noot-nr' }, n))));
        stage.replaceChildren(levelLayout(lv.instructie,
          balans,
          h('p', { class: 'status' }, `Wegingen: ${sc.wegingen}/${lv.maxWegingen}`, sc.uitslag ? h('b', null, ' – ' + sc.uitslag) : null),
          bak,
          h('div', { class: 'knoppen' },
            knop(tx.knopWeeg, weeg, sc.wegingen >= lv.maxWegingen ? 'uit' : ''),
            knop(tx.knopLeeg, () => { if (sc.klaar) return; sc.links = []; sc.rechts = []; sc.kant = 0; sc.teken(); }),
            knop(tx.knopNep, beschuldig, 'rood'),
            overslaanKnop(sc))));
      },
      start() { intro(sc, lv); },
      overslaan() { if (sc.klaar) return; sc.klaar = true; sc.gekozen = sc.nep; sc.teken(); levelGehaald(1, true); }
    };
    function tikNoot(n) {
      if (sc.klaar) return;
      GELUID.blip();
      if (sc.gekozen === n) {
        // tweede tik op een noot die op een schaal ligt: terug naar de bak
        if (sc.links.includes(n) || sc.rechts.includes(n)) { sc.links = sc.links.filter(x => x !== n); sc.rechts = sc.rechts.filter(x => x !== n); }
        sc.gekozen = null;
      } else sc.gekozen = n;
      sc.teken();
    }
    function tikSchaal(kant) {
      if (sc.klaar) return;
      if (sc.gekozen == null) { toast(tx.kies); return; }
      const n = sc.gekozen;
      sc.links = sc.links.filter(x => x !== n); sc.rechts = sc.rechts.filter(x => x !== n);
      (kant === 'L' ? sc.links : sc.rechts).push(n);
      sc.gekozen = null; sc.kant = 0; sc.uitslag = '';
      GELUID.blip(); sc.teken();
    }
    function weeg() {
      if (sc.klaar) return;
      if (sc.wegingen >= lv.maxWegingen) { toast(tx.moe); return; }
      if (!sc.links.length && !sc.rechts.length) { toast(tx.leeg); return; }
      const u = LOGIC.weeg(sc.links, sc.rechts, sc.nep);
      sc.wegingen++; sc.kant = u; sc.uitslag = u < 0 ? tx.links : u > 0 ? tx.rechts : tx.gelijk;
      GELUID.toon(u === 0 ? 660 : 330, 0.2, 'triangle');
      sc.teken();
      if (sc.wegingen >= lv.maxWegingen) setTimeout(() => { if (sc.actief && !sc.klaar && sc.wegingen >= lv.maxWegingen) toast(tx.moe); }, 900);
    }
    function beschuldig() {
      if (sc.klaar) return;
      if (sc.gekozen == null) { toast(tx.kies); return; }
      if (LOGIC.l2NepGevonden(sc.gekozen, sc.nep)) { sc.klaar = true; sc.teken(); levelGehaald(1); return; }
      foutje();
      // nieuwe ronde met een nieuwe nep
      sc.nep = 1 + Math.floor(Math.random() * 6); sc.links = []; sc.rechts = []; sc.wegingen = 0; sc.gekozen = null; sc.kant = 0; sc.uitslag = '';
      setTimeout(() => sc.actief && sc.teken(), 400);
    }
    return sc;
  }

  /* ---------------- LEVEL 3: PAKJESZAK ---------------- */
  function schermLevel3() {
    const lv = CONFIG.levels[2], tx = lv.teksten;
    const leegZak = () => [0, 1, 2, 3].map(() => [null, null, null, null]);
    const sc = {
      titel: 'LEVEL 3', hints: lv.hints, hintNr: 0,
      zak: leegZak(), geplaatst: {}, draaiing: { O: 0, L1: 0, L2: 0 }, gekozen: null, klaar: false,
      teken() {
        const Z = S * 2, P = S;
        const zakEl = h('div', { class: 'zak' + (sc.klaar ? ' dicht' : ''), style: { width: 64 * Z + 'px', height: 64 * Z + 'px' } }, spr('pakjeszak.png', { schaal: Z }));
        for (let r = 0; r < 4; r++) for (let c = 0; c < 4; c++) {
          const id = sc.zak[r][c];
          zakEl.append(h('button', {
            class: 'zak-vak', type: 'button', 'data-rc': r + '' + c, 'aria-label': `Vak rij ${r + 1} kolom ${c + 1}` + (id ? ' (' + stuk(id).label + ')' : ''),
            style: { left: (ZAK_RASTER.x + ZAK_RASTER.stap * c) * Z + 'px', top: (ZAK_RASTER.y + ZAK_RASTER.stap * r) * Z + 'px', width: ZAK_RASTER.stap * Z + 'px', height: ZAK_RASTER.stap * Z + 'px' },
            onclick: () => tikVak(r, c)
          }, id ? h('span', { class: 'pk pk-' + id, style: { left: Z + 'px', top: Z + 'px', width: ZAK_RASTER.vak * Z + 'px', height: ZAK_RASTER.vak * Z + 'px' } }) : null));
        }
        koppelVeeg(zakEl);
        if (sc.klaar) zakEl.append(h('div', { class: 'zak-dicht' }, spr('items-set.png', { cel: [0, 1], schaal: Z }), pix(ICOON.strik, 'strik')));
        const lade = h('div', { class: 'lade' }, lv.stukken.filter(s => !s.vast && !sc.geplaatst[s.id]).map(s => {
          const rot = sc.draaiing[s.id];
          const w = s.sprite.w * P, hh = s.sprite.h * P;
          const bw = rot % 2 ? hh : w, bh = rot % 2 ? w : hh;
          const tf = ['none', `translate(${hh}px,0) rotate(90deg)`, `translate(${w}px,${hh}px) rotate(180deg)`, `translate(0,${w}px) rotate(270deg)`][rot];
          return h('button', { class: 'lade-stuk' + (sc.gekozen === s.id ? ' gekozen' : ''), type: 'button', 'aria-label': 'Pakje ' + s.label, onclick: () => kiesStuk(s.id) },
            h('div', { class: 'lade-vorm', style: { width: bw + 'px', height: bh + 'px' } },
              h('div', { class: 'lade-sprite', style: { transform: tf } }, spr('pakjes-set.png', { schaal: P, x: s.sprite.x, y: s.sprite.y, w: s.sprite.w, h: s.sprite.h }))),
            h('span', { class: 'lade-label' }, s.label));
        }));
        stage.replaceChildren(levelLayout(lv.instructie, zakEl, lade,
          h('div', { class: 'knoppen' },
            knop(tx.knopDraai, draai, sc.gekozen ? '' : 'uit'),
            knop(CONFIG.teksten.opnieuw, () => { if (sc.klaar) return; reset(); sc.teken(); }),
            overslaanKnop(sc))));
      },
      start() { intro(sc, lv); },
      hint3() {
        for (const id of ['O', 'L1', 'L2']) {
          const [r, c, rot] = lv.oplossing[id];
          const goed = sc.geplaatst[id] && sc.geplaatst[id].r === r && sc.geplaatst[id].c === c && sc.draaiing[id] === rot;
          if (goed) continue;
          haalWeg(id);
          const doel = LOGIC.vorm(stuk(id), rot).map(([a, b]) => [a + r, b + c]);
          for (const [a, b] of doel) if (sc.zak[a][b]) haalWeg(sc.zak[a][b]);
          sc.draaiing[id] = rot; plaats(id, r, c); break;
        }
        sc.gekozen = null;
        if (LOGIC.l3ZakVol(sc.zak)) { sc.klaar = true; setTimeout(() => levelGehaald(2), 300); }
      },
      overslaan() {
        if (sc.klaar) return;
        reset();
        for (const id of ['O', 'L1', 'L2']) { const [r, c, rot] = lv.oplossing[id]; sc.draaiing[id] = rot; plaats(id, r, c); }
        sc.klaar = true; sc.teken(); levelGehaald(2, true);
      }
    };
    const stuk = (id) => lv.stukken.find(s => s.id === id);
    function plaats(id, r, c) {
      const abs = LOGIC.l3Plaats(sc.zak, LOGIC.vorm(stuk(id), sc.draaiing[id] || 0), r, c);
      if (!abs) return false;
      for (const [a, b] of abs) sc.zak[a][b] = id;
      sc.geplaatst[id] = { r, c };
      return true;
    }
    function haalWeg(id) {
      if (stuk(id).vast) return;
      for (let a = 0; a < 4; a++) for (let b = 0; b < 4; b++) if (sc.zak[a][b] === id) sc.zak[a][b] = null;
      delete sc.geplaatst[id];
    }
    function reset() {
      sc.zak = leegZak(); sc.geplaatst = {}; sc.gekozen = null; sc.draaiing = { O: 0, L1: 0, L2: 0 };
      const I = lv.stukken[0]; plaats(I.id, I.vast[0], I.vast[1]);
    }
    reset();
    function kiesStuk(id) { if (sc.klaar) return; GELUID.blip(); sc.gekozen = sc.gekozen === id ? null : id; sc.teken(); }
    function draai() {
      if (sc.klaar) return;
      if (!sc.gekozen) { toast(tx.kies); return; }
      sc.draaiing[sc.gekozen] = (sc.draaiing[sc.gekozen] + 1) % 4; sc.teken();
    }
    function afronden() {
      sc.gekozen = null; GELUID.blip();
      if (LOGIC.l3ZakVol(sc.zak)) { sc.klaar = true; sc.teken(); levelGehaald(2); return; }
      sc.teken();
    }
    // Plaatsen door te vegen over de vakjes die het pakje gaat vullen (draaiing wordt vanzelf herkend).
    function koppelVeeg(zakEl) {
      let veeg = null;
      const celBij = (x, y) => { const el = document.elementFromPoint(x, y); const v = el && el.closest ? el.closest('.zak-vak') : null; return v && zakEl.contains(v) ? v : null; };
      const voegToe = (v) => { const k = v.dataset.rc; if (!veeg.set.has(k)) { veeg.set.set(k, [Number(k[0]), Number(k[1])]); v.classList.add('swipe'); GELUID.tik(); } };
      zakEl.addEventListener('pointerdown', (e) => {
        if (!sc.gekozen || sc.klaar || sc.bezig) return;
        const v = celBij(e.clientX, e.clientY); if (!v) return;
        veeg = { set: new Map(), x: e.clientX, y: e.clientY }; voegToe(v);
      });
      zakEl.addEventListener('pointermove', (e) => {
        if (!veeg) return;
        const dx = e.clientX - veeg.x, dy = e.clientY - veeg.y, n = Math.max(1, Math.ceil(Math.hypot(dx, dy) / 6));
        for (let i = 1; i <= n; i++) { const v = celBij(veeg.x + dx * i / n, veeg.y + dy * i / n); if (v) voegToe(v); }
        veeg.x = e.clientX; veeg.y = e.clientY;
      });
      const klaar = (e) => {
        if (!veeg) return;
        const cellen = [...veeg.set.values()]; veeg = null;
        zakEl.querySelectorAll('.swipe').forEach(v => v.classList.remove('swipe'));
        if (cellen.length < 2 || e.type === 'pointercancel') return; // één vakje = gewone tik
        sc.negeerKlik = true; setTimeout(() => { sc.negeerKlik = false; }, 80);
        if (!sc.gekozen || sc.klaar || sc.bezig) return;
        const m = LOGIC.l3VeegMatch(stuk(sc.gekozen), cellen);
        if (!m) { foutje(tx.veegFout); return; }
        const oud = sc.draaiing[sc.gekozen]; sc.draaiing[sc.gekozen] = m.rot;
        if (!plaats(sc.gekozen, m.r, m.c)) { sc.draaiing[sc.gekozen] = oud; foutje(tx.past); sc.teken(); return; }
        afronden();
      };
      zakEl.addEventListener('pointerup', klaar);
      zakEl.addEventListener('pointercancel', klaar);
    }
    function tikVak(r, c) {
      if (sc.negeerKlik || sc.klaar || sc.bezig) return;
      const hier = sc.zak[r][c];
      if (!sc.gekozen) {
        if (hier && !stuk(hier).vast) { haalWeg(hier); sc.gekozen = hier; GELUID.blip(); sc.teken(); }
        else toast(tx.kies);
        return;
      }
      const kand = LOGIC.l3Kandidaten(sc.zak, LOGIC.vorm(stuk(sc.gekozen), sc.draaiing[sc.gekozen] || 0), r, c);
      if (!kand.length) { foutje(tx.past); flitsVak(stage.querySelector(`[data-rc="${r}${c}"]`)); return; }
      // Zelfde vakje nog eens tikken (na het pakje weer op te pakken) = volgende mogelijkheid.
      const L = sc.laatsteTik;
      const nr = L && L.id === sc.gekozen && L.r === r && L.c === c ? (L.nr + 1) % kand.length : 0;
      sc.laatsteTik = { id: sc.gekozen, r, c, nr };
      plaats(sc.gekozen, kand[nr][0], kand[nr][1]);
      afronden();
    }
    return sc;
  }

  /* ---------------- LEVEL 4: PIETENRITME ---------------- */
  function schermLevel4() {
    const lv = CONFIG.levels[3], tx = lv.teksten;
    const sc = {
      titel: 'LEVEL 4', hints: lv.hints, hintNr: 0, zonderMuziek: true,
      lengte: lv.beginLengte, invoer: [], speelt: true, traag: false, knipperHulp: false, klaar: false, status: tx.kijk,
      teken() {
        const K = S * 2;
        const ronde = sc.lengte - lv.beginLengte + 1, rondes = lv.reeks.length - lv.beginLengte + 1;
        stage.replaceChildren(levelLayout(lv.instructie,
          h('p', { class: 'status' }, `Ronde ${Math.min(ronde, rondes)}/${rondes} – `, h('b', null, sc.status), ` (${sc.invoer.length}/${sc.lengte})`),
          h('div', { class: 'ritme' + (sc.speelt ? ' speelt' : '') }, lv.knoppen.map((naam, i) => h('button', {
            class: 'ritme-knop rk' + i, type: 'button', 'data-k': i, 'aria-label': naam, onclick: () => tik(i)
          }, spr('ritme-knoppen.png', { cel: [i % 2, Math.floor(i / 2)], schaal: K }), h('span', { class: 'ritme-naam' }, naam)))),
          h('div', { class: 'knoppen' },
            knop(tx.knopNogEens, () => { if (!sc.speelt && !sc.klaar) speel(); }, sc.speelt ? 'uit' : ''),
            overslaanKnop(sc))));
      },
      start() { sc.naIntro = () => setTimeout(speel, 400); intro(sc, lv); },
      hint3() { sc.knipperHulp = true; setTimeout(knipperVolgende, 300); },
      overslaan() { if (sc.klaar) return; sc.klaar = true; sc.speelt = true; levelGehaald(3, true); }
    };
    function licht(i, metGeluid = true) {
      const el = stage.querySelector(`[data-k="${i}"]`);
      if (metGeluid) GELUID.knop(i);
      if (!el) return;
      el.classList.remove('licht'); void el.offsetWidth; el.classList.add('licht');
      setTimeout(() => el.classList.remove('licht'), 380);
    }
    function knipperVolgende() {
      if (!sc.actief || sc.klaar || sc.speelt) return;
      const el = stage.querySelector(`[data-k="${lv.reeks[sc.invoer.length]}"]`);
      if (el) { el.classList.remove('hulp'); void el.offsetWidth; el.classList.add('hulp'); }
    }
    async function speel() {
      sc.speelt = true; sc.invoer = []; sc.status = tx.kijk; sc.teken();
      await wacht(600);
      const tussen = (sc.hintNr >= 2 || sc.traag) ? 1100 : 650;
      for (let i = 0; i < sc.lengte; i++) {
        if (!sc.actief || sc.klaar) return;
        licht(lv.reeks[i]);
        await wacht(tussen);
      }
      if (!sc.actief || sc.klaar) return;
      sc.speelt = false; sc.status = tx.beurt; sc.teken();
      if (sc.knipperHulp) setTimeout(knipperVolgende, 250);
    }
    function tik(i) {
      if (sc.speelt || sc.klaar || sc.bezig) return;
      licht(i);
      sc.invoer.push(i);
      const u = LOGIC.l4Tik(lv.reeks, sc.lengte, sc.invoer);
      if (u === 'fout') {
        foutje(); sc.speelt = true; sc.status = tx.kijk; sc.teken();
        setTimeout(() => sc.actief && speel(), 1300);
        return;
      }
      if (u === 'verder') {
        const st = stage.querySelector('.status');
        if (st) st.lastChild.textContent = ` (${sc.invoer.length}/${sc.lengte})`;
        if (sc.knipperHulp) setTimeout(knipperVolgende, 250);
        return;
      }
      // ronde klaar
      if (sc.lengte >= lv.reeks.length) { sc.klaar = true; sc.speelt = true; sc.teken(); levelGehaald(3); return; }
      sc.lengte++; sc.speelt = true; sc.status = tx.goed; sc.teken();
      toast(tx.goed);
      setTimeout(() => sc.actief && speel(), 1200);
    }
    return sc;
  }

  const LEVELS = [schermLevel1, schermLevel2, schermLevel3, schermLevel4];

  /* ---------------- EINDBAAS: DE GROTE HERSTART ---------------- */
  function schermFinale(stapForce) {
    const f = CONFIG.finale, rt = f.route;
    const sc = {
      titel: 'EINDBAAS', stap: stapForce || (ST.gedicht ? 2 : 1),
      ingevuld: [null, null, null, null], gekozen: null, route: [rt.start], klaar: false, hintNr: 0,
      get hints() { return sc.stap === 1 ? f.gedichtHints : rt.hints; },
      get chrome() { return sc.stap === 1 ? 'top' : 'vol'; },
      teken() {
        zetChrome(sc.chrome);
        if (sc.stap === 1) tekenGedicht(); else tekenRoute();
      },
      async start() {
        sc.bezig = true;
        await banner('EINDBAAS', f.kort);
        if (!sc.actief) return;
        await zeg(sc.stap === 1 ? f.intro : f.gedichtKlaar);
        sc.bezig = false;
      },
      hint3() {
        if (sc.stap === 1) {
          const i = sc.ingevuld.findIndex(x => !x);
          if (i >= 0) sc.ingevuld[i] = f.gedicht[i].woord;
          if (LOGIC.gedichtKlaar(sc.ingevuld)) setTimeout(gedichtAf, 300);
        } else sc.route = rt.oplossing.slice(0, 5);
      },
      overslaan() {
        if (sc.stap === 1) { sc.ingevuld = f.gedicht.map(g => g.woord); sc.teken(); gedichtAf(); }
        else { sc.route = rt.oplossing.slice(); sc.teken(); routeAf(); }
      }
    };
    function tekenGedicht() {
      const gebruikt = (w) => sc.ingevuld.includes(w);
      const gedicht = h('div', { class: 'gedicht' },
        f.gedicht.map((g, i) => h('p', null, g.a, h('br'), g.b.replace('José', CONFIG.naam), ' ',
          h('button', {
            class: 'gat' + (sc.ingevuld[i] ? ' vol' : ''), type: 'button', 'data-gat': i, 'aria-label': sc.ingevuld[i] || 'lege plek ' + (i + 1),
            onclick: () => tikGat(i)
          }, sc.ingevuld[i] || '______'), '.')),
        h('p', null, f.slot[0], h('br'), f.slot[1]));
      stage.replaceChildren(h('div', { class: 'level finale1' },
        perkament(gedicht, 1, 'perk-gedicht'),
        h('div', { class: 'kaarten' }, f.kaarten.map(w => h('button', {
          class: 'kaart-woord' + (sc.gekozen === w ? ' gekozen' : '') + (gebruikt(w) ? ' gebruikt' : ''), type: 'button', 'data-w': w,
          disabled: gebruikt(w), onclick: () => { GELUID.blip(); sc.gekozen = sc.gekozen === w ? null : w; sc.teken(); }
        }, w))),
        overslaanKnop(sc) ? h('div', { class: 'knoppen' }, overslaanKnop(sc)) : null));
    }
    function tikGat(i) {
      if (sc.klaar || sc.bezig || sc.ingevuld[i]) return;
      if (!sc.gekozen) { toast('Tik eerst een woordkaart.'); return; }
      if (LOGIC.gedichtPast(i, sc.gekozen)) {
        sc.ingevuld[i] = sc.gekozen; sc.gekozen = null; GELUID.toon(988, 0.08); sc.teken();
        if (LOGIC.gedichtKlaar(sc.ingevuld)) gedichtAf();
      } else {
        const w = sc.gekozen; sc.gekozen = null;
        foutje(f.gedichtFout);
        sc.teken();
        const k = stage.querySelector(`[data-w="${w}"]`); if (k) k.classList.add('terug');
        flitsVak(stage.querySelector(`[data-gat="${i}"]`));
      }
    }
    async function gedichtAf() {
      if (sc.stap !== 1 || sc.gedichtKlaar) return;
      sc.gedichtKlaar = true; sc.bezig = true;
      ST.gedicht = true; bewaar();
      GELUID.clear(); confetti(24);
      await wacht(600);
      await zeg(f.gedichtKlaar);
      if (!sc.actief) return;
      sc.stap = 2; sc.hintNr = 0; sc.magOverslaan = false; sc.bezig = false;
      tekenTopbar(); sc.teken();
    }
    function vakInhoud(id, T) {
      const soort = rt.vakjes[id];
      const kl = Math.max(1, T - 1);
      if (!soort) return null;
      if (soort.startsWith('item')) {
        const n = Number(soort.slice(4));
        return h('div', { class: 'vak-icoon' }, spr('items-set.png', { cel: CONFIG.items[n].cel, schaal: kl }), h('span', { class: 'vak-woord' }, CONFIG.items[n].woord));
      }
      if (soort === 'kluis') return h('div', { class: 'vak-icoon' }, spr('kluis-dicht.png', { schaal: 1 }));
      if (soort === 'sint') return h('div', { class: 'vak-icoon' }, spr('ritme-knoppen.png', { cel: [0, 1], schaal: kl }), h('span', { class: 'vak-woord' }, 'SINT'));
      const kaart = { mijter: ['ritme-knoppen.png', { cel: [1, 0] }], stoomboot: ['icoon-stoomboot.png', {}], paard: ['ritme-knoppen.png', { cel: [1, 1] }] }[soort];
      return h('div', { class: 'vak-icoon' }, spr(kaart[0], Object.assign({ schaal: kl }, kaart[1])), pix(ICOON.kruis, 'vak-kruis'));
    }
    function tekenRoute() {
      const T = S;
      const laatste = sc.route[sc.route.length - 1];
      const raster = h('div', { class: 'raster nacht', style: { '--t': 32 * T + 'px' } });
      raster.append(h('span'), ...[1, 2, 3, 4].map(n => h('span', { class: 'as' }, n)));
      for (let r = 0; r < 4; r++) {
        raster.append(h('span', { class: 'as' }, LOGIC.RIJEN[r]));
        for (let c = 0; c < 4; c++) {
          const id = LOGIC.id(r, c);
          const stap = sc.route.indexOf(id);
          const vak = h('button', {
            class: 'vak' + (stap >= 0 ? ' inroute' : '') + (id === laatste ? ' laatste' : '') + (rt.geblokt.includes(id) ? ' geblokt' : ''),
            type: 'button', 'data-id': id, 'aria-label': 'Vak ' + id + (rt.vakjes[id] ? ' ' + rt.vakjes[id] : ''),
            onclick: () => tikRoute(id)
          }, spr('daken-set.png', { cel: [0, 0], schaal: T }), vakInhoud(id, T));
          if (stap > 0 && id !== laatste) vak.append(h('span', { class: 'stapnr' }, stap + 1));
          if (id === laatste && id !== rt.start) vak.append(pix(ICOON.pakje, 'pakje-loper'));
          raster.append(vak);
        }
      }
      stage.replaceChildren(levelLayout(rt.instructie, raster,
        h('div', { class: 'knoppen' },
          knop(CONFIG.teksten.opnieuw, () => { if (sc.klaar) return; sc.route = [rt.start]; sc.teken(); }),
          overslaanKnop(sc))));
    }
    function tikRoute(id) {
      if (sc.klaar || sc.bezig) return;
      const laatste = sc.route[sc.route.length - 1];
      if (id === laatste) { if (sc.route.length > 1) { sc.route.pop(); GELUID.blip(); sc.teken(); } return; }
      const r = LOGIC.fStap(sc.route, id, rt);
      if (!r.ok) { foutje(rt.redenen[r.reden]); flitsVak(stage.querySelector(`[data-id="${id}"]`)); return; }
      sc.route.push(id); GELUID.blip(); sc.teken();
      if (id === rt.eind && LOGIC.fRouteGeldig(sc.route, rt)) routeAf();
    }
    async function routeAf() {
      if (sc.klaar) return;
      sc.klaar = true;
      ST.finale = true; bewaar();
      await wacht(500);
      if (sc.actief) ga(schermOnthulling(true));
    }
    return sc;
  }

  /* ---------------- ONTHULLING ---------------- */
  function schermOnthulling(animatie) {
    const o = CONFIG.onthulling;
    const sc = {
      chrome: 'top', titel: 'YOU WIN!', cls: 'onthulling-stage', fase: animatie && !RM() ? 0 : 3, hintNr: 0, zonderMuziek: !!(animatie && !RM()),
      teken() {
        const raadsel = decodeer(CONFIG.raadsel).split('\n');
        const hints = CONFIG.raadselHints.map(decodeer).concat([decodeer(CONFIG.verstopplek)]);
        const kluis = h('div', { class: 'kluis-wrap' },
          sc.fase < 2 ? spr('kluis-dicht.png', { schaal: S, cls: sc.fase === 1 ? 'deur-zwaai' : '' }) : spr('kluis-open.png', { schaal: sc.fase >= 3 ? S - 1 : S }),
          sc.fase >= 1 && sc.fase < 3 ? h('div', { class: 'krak' }, o.krak) : null);
        stage.replaceChildren(h('div', { class: 'onthulling' + (sc.fase >= 3 ? ' toon' : '') },
          kluis,
          sc.fase >= 3 ? [
            h('h2', { class: 'win-banner' }, o.banner),
            h('div', { class: 'kader sint-tekst' }, h('b', null, 'SINTERKLAAS: '), o.sint.replace('José', CONFIG.naam)),
            h('div', { class: 'codes' },
              h('div', { class: 'code-kader' }, h('div', { class: 'code-label' }, o.slot1), h('div', { class: 'code' }, decodeer(CONFIG.slotcode1))),
              h('div', { class: 'code-kader' }, h('div', { class: 'code-label' }, o.slot2), h('div', { class: 'code' }, decodeer(CONFIG.slotcode2)))),
            h('p', { class: 'klein' }, o.klein),
            h('div', { class: 'divider-rij' }),
            perkament(h('div', { class: 'raadsel' }, h('p', { class: 'brief-titel' }, o.raadselTitel), raadsel.map(r => h('p', null, r))), 2),
            h('div', { class: 'raadsel-hint' },
              knop(o.hintKnop + (sc.hintNr < 3 ? ` ${sc.hintNr + 1}/3` : ''), () => { sc.hintNr = Math.min(3, sc.hintNr + 1); sc.teken(); }, sc.hintNr >= 3 ? 'uit' : 'goud'),
              sc.hintNr > 0 ? h('div', { class: 'hint-lijst' }, hints.slice(0, sc.hintNr).map((t, i) => h('p', null, `${i + 1}. ${t}`))) : null)
          ] : null));
      },
      async start() {
        if (sc.fase >= 3) return;
        await wacht(500);
        $('#app').classList.add('schud-lang');
        await wacht(700);
        sc.fase = 1; sc.teken(); GELUID.kluis();
        await wacht(900);
        $('#app').classList.remove('schud-lang');
        sc.fase = 2; sc.teken();
        confetti(90);
        await wacht(1100);
        if (!sc.actief) return;
        sc.fase = 3; sc.teken();
        confetti(50);
        sc.zonderMuziek = false; GELUID.muziekSchakel(true);
      }
    };
    return sc;
  }

  /* ---------- Menu & testmodus ---------- */
  function openMenu() {
    const m = CONFIG.teksten.menu;
    let o;
    const sluit = () => o && o.remove();
    const inhoud = h('div', { class: 'kader menu' },
      h('h2', null, m.titel),
      knop(m.verder, sluit),
      HUIDIG && HUIDIG.titel && HUIDIG.titel !== 'LEVELKAART' && !ST.finale ? knop(m.kaart, () => { sluit(); ga(schermKaart()); }) : null,
      knop(ST.geluid ? m.geluidAan : m.geluidUit, () => { wisselGeluid(); sluit(); openMenu(); }),
      knop(m.reset, () => {
        inhoud.replaceChildren(h('p', null, m.zeker),
          knop(m.ja, () => {
            try { localStorage.removeItem(CONFIG.opslagSleutel); } catch (e) { /* ok */ }
            const geluid = ST.geluid; ST = nieuweStaat(); ST.geluid = geluid; bewaar();
            sluit(); ga(schermTitel());
          }, 'rood'),
          knop(m.nee, () => { sluit(); openMenu(); }));
      }, 'rood'));
    o = overlay(inhoud, 'donker');
  }
  function wisselGeluid() {
    ST.geluid = !ST.geluid; bewaar();
    if (ST.geluid) { GELUID.zorg(); GELUID.blip(); }
    GELUID.muziekSchakel(ST.geluid && !(HUIDIG && HUIDIG.zonderMuziek));
    tekenTopbar();
    toast(ST.geluid ? '♪ Geluid aan' : 'Geluid uit');
  }
  function testMenu() {
    let o;
    const sluit = () => o && o.remove();
    const item = (t, fn) => knop(t, () => { sluit(); fn(); }, 'klein');
    o = overlay(h('div', { class: 'kader menu test-menu' },
      h('h2', null, 'TESTMODUS'),
      item('Titelscherm', () => ga(schermTitel())),
      item('Intro (glitch)', () => ga(schermGlitch())),
      item('Levelkaart', () => ga(schermKaart())),
      item('Level 1 Route', () => ga(schermLevel1())),
      item('Level 2 Weegschaal', () => ga(schermLevel2())),
      item('Level 3 Pakjeszak', () => ga(schermLevel3())),
      item('Level 4 Ritme', () => ga(schermLevel4())),
      item('Finale: gedicht', () => ga(schermFinale(1))),
      item('Finale: route', () => ga(schermFinale(2))),
      item('Eindscherm (animatie)', () => ga(schermOnthulling(true))),
      item('Alle items geven', () => { ST.klaar = [true, true, true, true]; ST.items = [0, 1, 2, 3]; bewaar(); tekenInventaris(); }),
      item('Sluiten', () => {})), 'donker');
  }

  /* ---------- Opstarten ---------- */
  async function opstarten() {
    stage = $('#stage'); topbar = $('#topbar'); inventaris = $('#inventaris'); divider = $('#divider');
    berekenSchaal();
    await Promise.race([laadAssets(), wacht(4000)]);
    await maakPerkamentZonderZegel();
    $('#menu-knop').replaceChildren(pix(ICOON.menu));
    $('#hint-knop').replaceChildren(pix(ICOON.vraag));
    $('#dlg-pijl').replaceChildren(pix(ICOON.pijl));
    $('#dlg-avatar').replaceChildren(spr('avatar-bits.png', { schaal: 2 }));
    $('#dlg-naam').textContent = CONFIG.teksten.bitsNaam;
    $('#menu-knop').addEventListener('click', () => { GELUID.blip(); openMenu(); });
    $('#hint-knop').addEventListener('click', () => { GELUID.blip(); doeHint(); });
    $('#geluid-knop').addEventListener('click', wisselGeluid);
    if (TEST) {
      const t = h('button', { class: 'test-knop', type: 'button', onclick: testMenu }, 'TEST');
      document.body.append(t);
    }
    let rt;
    window.addEventListener('resize', () => { clearTimeout(rt); rt = setTimeout(() => { const oudS = S, oudW = APPW; berekenSchaal(); if (S !== oudS || APPW !== oudW) hertekenen(); }, 150); });
    document.addEventListener('visibilitychange', () => GELUID.muziekSchakel(!document.hidden && !(HUIDIG && HUIDIG.zonderMuziek)));
    document.documentElement.classList.add('klaar');
    ga(ST.finale ? schermOnthulling(false) : schermTitel());
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', opstarten);
  else opstarten();
})();
