# Katana Studios Website

Static multi-page site for Katana Studios. The production landing page is `index.html`.

## Main pages

- `index.html` — landing page
- `work.html` — What We Do sketchbook and its video player
- `films.html` — film shelf and film detail/player views
- `katana-portfolio/index.html` — portfolio gallery and video player

## Where to edit content

- `katana-work-videos.js` — sketchbook video URLs/posters, banner media, film shelf entries, and outbound social/profile links.
- `katana-portfolio/js/work.js` — portfolio video URLs, titles, and thumbnail filenames. Ads has 9 slots; Ads 07–09 are ready for your links.
- `katana-portfolio/assets/thumbnails/` — portfolio poster/thumbnail images.
- `PROJECT-MAP.md` — detailed file-by-file guide and exact fields to edit.

The sketchbook and portfolio player layouts detect each clip's orientation and fit portrait or landscape video accordingly. For GitHub video hosting details, see `PROJECT-MAP.md`.

## Local preview

On Windows, run `START FILMS.bat`, keep its terminal open, then visit `http://127.0.0.1:8000/`.

## Search indexing

`robots.txt` points crawlers to `sitemap.xml`. After deployment, submit `https://www.katanastudios.in/sitemap.xml` in Google Search Console.
