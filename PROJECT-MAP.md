# Katana Studios — Website & Content Map

Use this file as the single guide for finding pages, videos, thumbnails, and links. The main deployment starts at `index.html`.

## Pages

| File / folder | What it contains |
| --- | --- |
| `index.html` | Main Katana Studios landing page and banner |
| `work.html` | Japanese sketchbook for Films, Ads / Commercials, Social Media, and Production |
| `films.html` | Film shelf, film details, credits, preview, and playback |
| `katana-portfolio/index.html` | Portfolio gallery with its own modal video player |

## Video and link control files

### Sketchbook, banner, films, and outbound social links

Edit **`katana-work-videos.js`**. This is the central config loaded by the landing page, sketchbook, and film shelf.

- `banner.horizontal` / `banner.vertical` — banner media fields for desktop/mobile.
- `workBook.films`, `.ads`, `.social`, `.production` — three editable reel slots per sketchbook category. Each item has:
  - `title` — label shown under its thumbnail.
  - `sampleSrc` — paste the GitHub/API video URL here.
  - `poster` — paste a project-relative thumbnail path here, e.g. `katana-portfolio/assets/thumbnails/cover.jpg`.
  - `driveLink` — leave blank; the sketchbook player uses the GitHub/API video URL in `sampleSrc`.
- `filmShelf` — the ten film volumes: title, description, video source, poster, and credits.
- `socialLinks` / `externalLinks` — social profile and other outbound URLs (see the matching section labels in the config file).

Example sketchbook slot:

```js
{ title: 'Films · Video 1', driveLink: '', sampleSrc: 'https://katana-studio-portfolio.vercel.app/api/video?file=your-video.mp4', poster: 'katana-portfolio/assets/thumbnails/cover.jpg' }
```

Clicking a sketchbook reel opens the on-page modal player. It detects portrait versus landscape from the actual video dimensions.

### Portfolio gallery

Edit **`katana-portfolio/js/work.js`**. Each category has parallel arrays passed to `videoEntries`: video sources, thumbnail filenames, and optional titles. Keep each item's source, thumbnail, and title at the same array position.

- Ads has **9 cards**. Ads 01–06 are already populated. Ads 07–09 are blank ready-to-fill slots.
- For Ads 07–09, paste the GitHub Release filename or a direct video URL into the last three entries of the Ads source list.
- Add each corresponding image to `katana-portfolio/assets/thumbnails/` and put only its filename in the matching thumbnail position.
- Update the matching title entries (`Ads Video 07`, `Ads Video 08`, `Ads Video 09`).
- Other portfolio categories and their existing links are in the same file.

Example Ads source entry:

```js
'your-ad-video.mp4' // The GitHub Release filename
```

The filename is served through `katana-portfolio/api/video.js`, which reads from the configured GitHub Release. The portfolio modal detects video orientation automatically.

### Thumbnail folder

Portfolio images go in **`katana-portfolio/assets/thumbnails/`**. Keep the filename and extension exactly the same as the entry in `katana-portfolio/js/work.js`.

## Search / deployment files

- `sitemap.xml` — public page URLs for search crawlers.
- `robots.txt` — crawl rules and sitemap address.
- After deploying changes, submit `https://www.katanastudios.in/sitemap.xml` in Search Console.

## Local preview

1. Double-click `START FILMS.bat` and keep the server window open.
2. Open `http://127.0.0.1:8000/` for the landing page.
3. Open `/work.html`, `/films.html`, or `/katana-portfolio/` for the other pages.
4. Stop the local server with `Ctrl+C` in the terminal window.

Keep the asset folders beside the HTML files: `assets/`, `katana-sketchbook/`, `secret-pathways-assets/`, `threeui-ashen-press/`, and `katana-portfolio/`.

## What We Do card posters

The four landing-page card images are in `assets/`: `what-we-do-films.png`, `what-we-do-ads.png`, `what-we-do-social.png`, and `what-we-do-production.png`. The background image mappings are in the `.what-card--*` rules in both `index.html` and `katana-studio-colorful.html`.
