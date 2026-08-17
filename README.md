# Video Editor Portfolio

A dark, motion-driven one-page portfolio built with plain HTML/CSS/JS —
no build step, so it works directly on GitHub Pages.

## Files
- `index.html` — page structure
- `style.css` — all styling (dark theme, floating 3D badges, animations)
- `script.js` — behaviour (parallax, modal, filters, clock) — you shouldn't need to edit this
- `config.js` — **edit this file to make the site yours** (name, contact, videos, projects, etc.)
- `assets/profile.jpg` — placeholder photo, replace with your real one (keep the same filename, or update `profilePic` in config.js)

## How to edit your info
Open `config.js` and replace the placeholder values — it's commented section by section.
You do not need to know how to code to do this; just replace the text between quotes.

## How to put your videos in
For the main reel and every project card, you only need the YouTube **video ID**
(the part after `watch?v=` in the URL). Example:
`https://www.youtube.com/watch?v=aqz-KE-bpKQ` → ID is `aqz-KE-bpKQ`.
Paste that ID into `reelYoutubeId` or a project's `youtubeId` field.

## How to publish on GitHub Pages
1. Create a new GitHub repository (e.g. `portfolio`).
2. Upload these files to the repo (`index.html`, `style.css`, `script.js`, `config.js`, `assets/`).
3. Go to **Settings → Pages**.
4. Under "Build and deployment", set Source to **Deploy from a branch**, branch `main`, folder `/ (root)`.
5. Save — your site will be live at `https://yourusername.github.io/portfolio/` within a minute or two.

## Notes
- The floating badges, glow-on-hover, and parallax react to your mouse in the hero section (they fall back to a gentle drift animation on touch devices).
- The scrubber bar under the hero fills up as you scroll the page.
- All project thumbnails are pulled automatically from YouTube — no need to upload separate thumbnail images.
