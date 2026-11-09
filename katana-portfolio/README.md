# Katana Studios portfolio

Responsive static video portfolio for Katana Studios. It uses plain HTML, CSS and JavaScript; there is no framework, package install or build step.

## Run and deploy

- Open `index.html` directly, or serve this folder with any static file server.
- Render service: **Static Site**.
- Root Directory: repository root (leave blank).
- Build Command: leave blank.
- Publish Directory: `.`.
- Website repository: <https://github.com/lakhyanidevansh-ops/katana-studio-portfolio>.
- Current site code branch: `feat/katana-studios-portfolio`.
- Most GitHub-hosted videos are Release assets in `lakhyanidevansh-ops/katana-studios`, tag `katana-portfolio-videos-v1`; three Ads links use Google Drive.

## Files

- `index.html` — page structure, metadata, navigation, contact and video dialog.
- `css/styles.css` — colors, typography, cards, dialog and responsive layouts.
- `js/work.js` — all category/video/thumbnail/title data and contact values.
- `js/site.js` — category/card generation, playback modal and contact link wiring.
- `assets/katana-brushmark-transparent.png`, `assets/favicon.svg` — brand assets.
- `assets/thumbnails/` — the 42 portfolio cover images.
- `EDIT-GUIDES/` — concrete link and thumbnail editing instructions.
- `AI-HANDOFF-PROMPT.md` — full project brief to hand to another coding AI.
- `PUSH-GUIDE.md` — how to publish future edits from this folder with GitHub Desktop or Git.

## Actual unique portfolio entries

The displayed source data currently has 42 entries, without repeated video slots:

| Section | Unique entries |
| --- | ---: |
| Ads | 6 |
| Content | 7 |
| Edits | 4 |
| Fashion | 5 |
| Music Video Reels | 6 |
| Real Estate | 5 |
| UGC | 9 |
| **Total** | **42** |

The earlier requested per-section totals (6/14/8/10/12/10/18) add to 78, but the later instruction was to show each video once with no duplicates. The site reflects the actual unique clips available in `js/work.js`, not repeated cards to reach 78.

## Editing work

Follow `EDIT-GUIDES/LINK-GUIDE.md` and `EDIT-GUIDES/THUMBNAIL-GUIDE.md`. Video and thumbnail arrays use the same order; index 0 in each array describes the same card. Keep that pairing when replacing or adding a project.

Set Google Drive videos to **Anyone with the link — Viewer**. Playback also depends on Drive supporting the video's codec and preview. YouTube share links and public direct video URLs are supported.

## Brand and contact

- Base: `#15110f`; raised `#1c1816`; surface `#241f1c`.
- Main text: `#f5f1ed`; muted `#b4a9a1`.
- Accent: `#ff704e`; accent light: `#ff9775`.
- Fonts: Manrope and DM Mono (Google Fonts).
- Email: `sales.katanastudios@gmail.com`.
- Phone: `7486084751`.
- Instagram: <https://www.instagram.com/katanastudio.ads?obrf=amhhZ3NrenA3ZWpw>.
- “Start a conversation” WhatsApp link: <https://wa.me/917486087451>.