// Controleert dat elk level oplosbaar is met de oplossing uit de opdracht,
// en dat de geheime waarden niet als platte tekst in de bron staan.
// Gebruik: node tools/controleer.js
const fs = require('fs');
const path = require('path');
const { CONFIG, LOGIC, decodeer } = require(path.join(__dirname, '..', 'game.js'));
let fouten = 0;
const ok = (cond, msg) => { console.log((cond ? '  OK   ' : '  FOUT ') + msg); if (!cond) fouten++; };

console.log('Level 1 – Routeplanner');
const l1 = CONFIG.levels[0];
let r = [l1.start];
for (const v of l1.oplossing.slice(1)) { const s = LOGIC.l1Stap(r, v, l1); ok(s.ok, `stap ${v}`); r.push(v); }
ok(LOGIC.l1RouteGeldig(r, l1), 'route geldig en compleet');
ok(!LOGIC.l1Stap(['A1', 'A2'], 'B2', l1).ok, 'antenne wordt geweigerd');
ok(!LOGIC.l1Stap(['A1'], 'B1', l1).ok, 'te vroeg naar José wordt geweigerd');

console.log('Level 2 – Weegschaal (alle 6 mogelijke nepnoten, max 2 wegingen)');
for (let nep = 1; nep <= 6; nep++) {
  const w1 = LOGIC.weeg([1, 2, 3], [4, 5, 6], nep);
  const zwaar = w1 < 0 ? [1, 2, 3] : [4, 5, 6];
  const w2 = LOGIC.weeg([zwaar[0]], [zwaar[1]], nep);
  const keuze = w2 < 0 ? zwaar[0] : w2 > 0 ? zwaar[1] : zwaar[2];
  ok(w1 !== 0 && LOGIC.l2NepGevonden(keuze, nep), `nep=${nep} gevonden als ${keuze}`);
}

console.log('Level 3 – Pakjeszak');
const l3 = CONFIG.levels[2];
const zak = [0, 1, 2, 3].map(() => [null, null, null, null]);
const zet = (id, rr, cc, rot) => { const st = l3.stukken.find(s => s.id === id); const a = LOGIC.l3Plaats(zak, LOGIC.vorm(st, rot), rr, cc); ok(!!a, `${id} past op rij ${rr + 1} kolom ${cc + 1}`); if (a) for (const [x, y] of a) zak[x][y] = id; };
zet('I', 0, 0, 0);
for (const id of ['O', 'L1', 'L2']) { const [rr, cc, rot] = l3.oplossing[id]; zet(id, rr, cc, rot); }
ok(LOGIC.l3ZakVol(zak), 'zak helemaal vol');
const verwacht = { O: [[1,0],[1,1],[2,0],[2,1]], L1: [[3,0],[3,1],[3,2],[2,2]], L2: [[1,2],[1,3],[2,3],[3,3]] };
for (const id in verwacht) ok(verwacht[id].every(([a, b]) => zak[a][b] === id), `${id} ligt precies zoals in de opdracht`);
// Elk vakje van een pakje in de oplossing aantikken moet de oplossing als mogelijkheid geven (ook bij L's met leeg hoekje).
{
  const zak2 = [0, 1, 2, 3].map(() => [null, null, null, null]);
  for (let i = 0; i < 4; i++) zak2[0][i] = 'I';
  for (const id of ['O', 'L1', 'L2']) {
    const [rr, cc, rot] = l3.oplossing[id]; const st = l3.stukken.find(x => x.id === id);
    const v = LOGIC.vorm(st, rot);
    const alles = v.every(([a, b]) => LOGIC.l3Kandidaten(zak2, v, rr + a, cc + b).some(o => o[0] === rr && o[1] === cc));
    ok(alles, `${id}: elk blokje van de oplossing aantikken geeft de goede plek als mogelijkheid`);
    for (const [a, b] of LOGIC.l3Plaats(zak2, v, rr, cc)) zak2[a][b] = id;
  }
  ok(LOGIC.l3ZakVol(zak2), 'zak vol');
  // Vegen: precies, met een overbodig vakje (hoekje afgesneden) of een ontbrekend vakje, en niet te slordig.
  const zakVoor = (tot) => { const z = [0, 1, 2, 3].map(() => [null, null, null, null]); for (let i = 0; i < 4; i++) z[0][i] = 'I'; for (const id of tot) { const [rr, cc, rot] = l3.oplossing[id]; const st = l3.stukken.find(x => x.id === id); for (const [a, b] of LOGIC.l3Plaats(z, LOGIC.vorm(st, rot), rr, cc)) z[a][b] = id; } return z; };
  const volgorde = ['O', 'L1', 'L2'];
  volgorde.forEach((id, i) => {
    const [rr, cc, rot] = l3.oplossing[id]; const st = l3.stukken.find(x => x.id === id);
    const zak3 = zakVoor(volgorde.slice(0, i));
    const juist = LOGIC.vorm(st, rot).map(([a, b]) => [a + rr, b + cc]);
    const goed = (m) => m && m.rot === rot && m.r === rr && m.c === cc;
    ok(goed(LOGIC.l3VeegBeste(st, zak3, juist.slice().reverse())), `${id}: precies vegen wordt herkend (draaiing ${rot})`);
    ok(goed(LOGIC.l3VeegBeste(st, zak3, juist.slice(0, 3))), `${id}: één vakje te weinig geveegd wordt herkend`);
  });
  {
    const zak3 = zakVoor(['O', 'L1']); const st = l3.stukken[3]; const [rr, cc, rot] = l3.oplossing.L2;
    const juist = LOGIC.vorm(st, rot).map(([a, b]) => [a + rr, b + cc]);
    const m = LOGIC.l3VeegBeste(st, zak3, juist.concat([[1, 1]]));
    ok(m && m.rot === rot && m.r === rr && m.c === cc, 'L2: één vakje te veel (hoekje afgesneden) wordt herkend');
  }
  ok(LOGIC.l3VeegBeste(l3.stukken[1], zakVoor([]), [[1, 0], [2, 3], [3, 3], [1, 2]]) === null, 'rommelige veeg wordt afgewezen');
}
ok(JSON.stringify(LOGIC.vorm(l3.stukken[2], 4)) === JSON.stringify(LOGIC.vorm(l3.stukken[2], 0)), '4× draaien = origineel');

console.log('Level 4 – Pietenritme');
const l4 = CONFIG.levels[3];
for (let len = l4.beginLengte; len <= l4.reeks.length; len++) {
  const inv = [];
  for (let i = 0; i < len; i++) { inv.push(l4.reeks[i]); const u = LOGIC.l4Tik(l4.reeks, len, inv); ok(u === (i === len - 1 ? 'rond' : 'verder'), `ronde ${len}, tik ${i + 1}: ${u}`); }
}
ok(LOGIC.l4Tik(l4.reeks, 3, [(l4.reeks[0] + 1) % 4]) === 'fout', 'foute tik geeft fout');
ok(l4.beginLengte === 3 && l4.reeks.length === 5, 'reeks groeit van 3 tot 5');

console.log('Finale – gedicht');
const f = CONFIG.finale;
const goed = ['SCHOORSTEEN', 'PEPERNOOT', 'ZAK', 'TROMMEL'];
goed.forEach((w, i) => ok(LOGIC.gedichtPast(i, w), `plek ${i + 1} = ${w}`));
ok(!LOGIC.gedichtPast(0, 'STOOMBOOT') && !LOGIC.gedichtPast(3, 'MIJTER'), 'nepkaarten passen nergens');
ok(LOGIC.gedichtKlaar(goed), 'gedicht compleet');

console.log('Finale – herstartroute');
const rt = f.route;
r = [rt.start];
for (const v of rt.oplossing.slice(1)) { const s = LOGIC.fStap(r, v, rt); ok(s.ok, `stap ${v}`); r.push(v); }
ok(LOGIC.fRouteGeldig(r, rt), 'route geldig (woorden in volgorde, eindigt bij kluis)');
ok(!LOGIC.fStap(['A1', 'A2', 'B2', 'B3'], 'C3', rt).ok, 'te vroeg naar ZAK wordt geweigerd');
ok(!LOGIC.fStap(['A1', 'A2'], 'A3', rt).ok, 'kruisvakje wordt geweigerd');

console.log('Willekeurige uitslagen (400 potjes met vaste zaadjes)');
{
  const mulberry = (a) => () => { a |= 0; a = a + 0x6D2B79F5 | 0; let t = Math.imul(a ^ a >>> 15, 1 | a); t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t; return ((t ^ t >>> 14) >>> 0) / 4294967296; };
  let slecht = { l1: 0, l3: 0, l4: 0, f: 0 };
  const uniek = { l1: new Set(), l3: new Set(), l4: new Set(), f: new Set() };
  const l3cfg = CONFIG.levels[2];
  for (let seed = 1; seed <= 400; seed++) {
    const rng = mulberry(seed);
    // Level 1
    const g1 = LOGIC.l1Genereer(l1, rng); const lv1 = Object.assign({}, l1, g1);
    let rt1 = [lv1.start], ok1 = new Set(g1.antennes).size === 2 && !g1.antennes.includes(lv1.start) && !g1.antennes.includes(lv1.eind);
    for (const v of g1.oplossing.slice(1)) { if (!LOGIC.l1Stap(rt1, v, lv1).ok) ok1 = false; rt1.push(v); }
    if (!ok1 || !LOGIC.l1RouteGeldig(rt1, lv1)) slecht.l1++;
    uniek.l1.add(g1.antennes.slice().sort().join('+'));
    // Level 3
    const g3 = LOGIC.l3Genereer(l3cfg.stukken, rng);
    const z = [0, 1, 2, 3].map(() => [null, null, null, null]); let ok3 = true;
    for (let c = 0; c < 4; c++) z[g3.irij][c] = 'I';
    for (const id of ['O', 'L1', 'L2']) { const [rr, cc, rot] = g3.oplossing[id]; const a = LOGIC.l3Plaats(z, LOGIC.vorm(l3cfg.stukken.find(x => x.id === id), rot), rr, cc); if (!a) ok3 = false; else for (const [x, y] of a) z[x][y] = id; }
    if (!ok3 || !LOGIC.l3ZakVol(z)) slecht.l3++;
    uniek.l3.add(g3.irij + JSON.stringify(g3.oplossing));
    // Level 4
    const r4 = LOGIC.l4Genereer(5, rng);
    if (r4.length !== 5 || new Set(r4).size < 3 || r4.some((v, i) => i >= 2 && r4[i - 1] === v && r4[i - 2] === v)) slecht.l4++;
    uniek.l4.add(r4.join(''));
    // Finale-route
    const rf = LOGIC.fGenereer(CONFIG.finale.route, rng);
    let rr = [rf.start], okf = rf.geblokt.length === 4 && rf.volgorde.length === 4 && new Set(rf.volgorde).size === 4 && rf.volgorde.every(v => !rf.geblokt.includes(v));
    for (const v of rf.oplossing.slice(1)) { if (!LOGIC.fStap(rr, v, rf).ok) okf = false; rr.push(v); }
    if (!okf || !LOGIC.fRouteGeldig(rr, rf) || rf.oplossing.indexOf(rf.volgorde[1]) < 1) slecht.f++;
    uniek.f.add(rf.oplossing.join('') + rf.geblokt.slice().sort().join(''));
  }
  ok(slecht.l1 === 0, `level 1: alle 400 willekeurige potjes oplosbaar (${uniek.l1.size} verschillende antenne-paren)`);
  ok(slecht.l3 === 0, `level 3: alle 400 indelingen vullen de zak precies (${uniek.l3.size} verschillende indelingen)`);
  ok(slecht.l4 === 0, `level 4: alle reeksen geldig (${uniek.l4.size} verschillende reeksen)`);
  ok(slecht.f === 0, `finale: alle 400 routes oplosbaar met woorden in gedicht-volgorde (${uniek.f.size} verschillende routes)`);
  ok(uniek.l1.size >= 15 && uniek.l3.size >= 6 && uniek.l4.size >= 50 && uniek.f.size >= 100, 'er is echt variatie');
}

console.log('Muziek');
const M = CONFIG.muziek;
const som = (st) => st.reduce((a, n) => a + n[1], 0);
ok(M.bpm === 172, '172 BPM');
ok(som(M.melodie) === 48 && M.akkoorden.length === 16 && M.tellenPerMaat * M.akkoorden.length === 48, 'melodie en akkoorden: 16 maten van 3 tellen = 48 tellen (12 maten 4/4, sluit netjes af)');
ok([...M.melodie.map(n => n[0]), ...M.akkoorden.flat()].every(n => /^[A-G]\d$/.test(n)), 'alle noten geldig');

console.log('Geheimen');
ok(decodeer(CONFIG.slotcode1) === '482' && decodeer(CONFIG.slotcode2) === '739', 'codes decoderen correct');
ok(decodeer(CONFIG.verstopplek) === 'In de hal, tussen de jassen en tassen.', 'verstopplek decodeert correct');
ok(decodeer(CONFIG.raadsel).startsWith('Bij de voordeur') && decodeer(CONFIG.raadsel).includes('Eén tas'), 'raadsel decodeert correct (met é)');
const bron = ['index.html', 'style.css', 'game.js'].map(n => fs.readFileSync(path.join(__dirname, '..', n), 'utf8')).join('\n');
for (const geheim of ['482', '739', 'jassen en tassen', 'voordeur', 'mouwen en met kragen', 'Kijk waar de jassen']) ok(!bron.includes(geheim), `"${geheim}" staat niet leesbaar in de bron`);

console.log(fouten ? `\n${fouten} FOUT(EN)` : '\nAlles in orde.');
process.exit(fouten ? 1 : 0);
