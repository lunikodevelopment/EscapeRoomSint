# Het Grote Boek is Gecrasht

Sinterklaas-escaperoom in retro pixel-stijl voor José. Alleen HTML, CSS en vanilla JavaScript.

- `index.html`, `style.css`, `game.js` en de map `assets/` vormen het hele spel.
- Alle teksten, levels, hints en (base64-gecodeerde) codes staan in `CONFIG` bovenin `game.js`.
- **Testen:** open `index.html?test=1` voor een testmenu (rechtsonder) om elk level en het eindscherm direct te openen.
- **Controle:** `node tools/controleer.js` speelt elk level na met de officiële oplossing en checkt dat codes, raadsel en verstopplek niet leesbaar in de bron staan.
- **Homelab:** `docker compose up -d` en open `http://<homelab-ip>:8080`.
- **Muziek:** aan via het luidsprekertje; een happy-hardcore-remix (172 BPM) van "Sinterklaas kapoentje", opgebouwd uit Web Audio-tonen (`CONFIG.muziek`). Staat standaard uit.
- **Opnieuw beginnen:** menu (☰ linksboven) → *Opnieuw beginnen*.
