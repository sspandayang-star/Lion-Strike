# Lion Strike: F-15SG

A 16-bit arcade shoot-'em-up: fly RSAF jets through 10 sorties over Singapore and defend the Lion City.

**Play in your browser:** https://sspandayang-star.github.io/Lion-Strike/

No sign-in and no download. It works on phones, tablets and computers.

## Keep it on your home screen
- **iPhone / iPad (Safari):** open the link, tap **Share → Add to Home Screen**.
- **Android (Chrome):** open the link and tap **Install app** on the title screen, or **⋮ → Install app**.
- **PC (Chrome / Edge):** click the install icon in the address bar.

It then launches full-screen like an app, works offline after the first visit, and keeps your saved progress.

## Boss rush
From the main menu, **Boss rush** sends you against all ten bosses back to back: **Normal** (sortie 1–10 strength), **Hard** (11–20) or **Impossible** (21–30). Hits carry over from boss to boss and the clock runs throughout. Your campaign is not affected.

- **Ranked:** everyone flies the same kit (the jet's own gun at full power, a Missile Rack and 4 bombs for every boss, no hangar parts or jet upgrades) with any of the three jets. Your best run on each difficulty goes on the online leaderboard: most targets first, then the fastest time.
- **Your loadout:** your own campaign jet and hangar parts, upgrades included. Not ranked.

## Controls
- **Touch:** drag anywhere to fly; tap the bomb icon (or put a second finger down) to drop a bomb.
- **Keyboard:** arrow keys to fly, **Space** for a bomb, **P** to pause, **Esc** to go back.

## Play statistics
The game sends anonymous play statistics to the developer: a random ID for each device, play time, sortie results and scores. No names, accounts or personal details are collected. Ranked boss rush runs also send the callsign you type, which is shown to everyone on the leaderboard along with your jet, targets, time and score.

## What's in this repository
`index.html` is the whole game. `music/` holds the soundtrack, `icons/` and `manifest.webmanifest` make it installable, and `sw.js` lets it run offline. Updating the game means replacing these files with a new build; players get the new version on their next launch.
