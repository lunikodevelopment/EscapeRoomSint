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
// Aantikken op het bovenste linkerblokje van het pakje moet dezelfde plaatsing geven als de oplossing.
{
  const zak2 = [0, 1, 2, 3].map(() => [null, null, null, null]);
  for (let i = 0; i < 4; i++) zak2[0][i] = 'I';
  for (const id of ['O', 'L1', 'L2']) {
    const [rr, cc, rot] = l3.oplossing[id]; const st = l3.stukken.find(x => x.id === id);
    const v = LOGIC.vorm(st, rot);
    const [tr, tc] = [rr + v[0][0], cc + v[0][1]]; // het vakje dat de speler aantikt
    const [or, oc] = LOGIC.l3Origin(v, tr, tc);
    ok(or === rr && oc === cc && !!LOGIC.l3Plaats(zak2, v, or, oc), `${id}: tik op rij ${tr + 1} kolom ${tc + 1} (bovenste linkerblokje) plaatst hem goed`);
    for (const [a, b] of LOGIC.l3Plaats(zak2, v, or, oc)) zak2[a][b] = id;
  }
  ok(LOGIC.l3ZakVol(zak2), 'zak vol via aantik-methode');
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
