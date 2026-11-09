# Copy-paste brief for another coding AI

Copy everything inside the prompt block. Give the AI this project folder and its assets as context.

---

```text
Build, refine, and maintain the Katana Studios video portfolio website using the supplied project folder as the source of truth. Inspect the existing files before changing anything. Preserve the existing project data and brand assets; do not invent replacement videos, links, thumbnails, project names, or contact details.

BRAND
- Studio: Katana Studios, an independent creative/video studio.
- Brand mark/logo: assets/katana-brushmark-transparent.png. Favicon: assets/favicon.svg.
- Visual direction: minimal cinematic portfolio, dark warm charcoal/brown background, ivory text and restrained bright vermilion/orange accents. The existing screenshots supplied by the owner are the design reference: clean hierarchy, large readable headings, orange eyebrow labels, ample spacing, restrained thin borders, rectangular video thumbnails, no lorem ipsum, no placeholder boxes where actual thumbnails exist.
- Existing colors in css/styles.css: background #15110f; raised #1c1816; surface #241f1c; lighter surface #302824; main text #f5f1ed; muted #b4a9a1; muted dark #81746c; orange #ff704e; orange light #ff9775.
- Typography: Manrope for interface/headlines, DM Mono for small uppercase labels and metadata. Google Fonts are linked in index.html.
- Desktop portfolio grid: four columns; medium screens three; mobile two. Keep cards and labels readable at small sizes. Category navigation is sticky and horizontally scrollable on narrow screens.

PAGE AND INTERACTIONS
- Static, responsive, single-page portfolio; use semantic HTML, CSS and plain JavaScript. No framework, package install, backend or build step is needed.
- Header: Katana brand, WORK link with live project count, CONTACT, LET’S TALK.
- Hero copy: “INDEPENDENT CREATIVE STUDIO”; “Bold ideas. Crafted to make an impact.”; “A collection of campaigns, films and digital stories made to stay with you.” Actions: “EXPLORE THE WORK” and “HAVE A PROJECT?”. Show live section and project totals.
- Portfolio intro: eyebrow “THE PORTFOLIO”; heading “Different frames. One point of view.”; short prompt “Browse work by discipline.”
- Render category links and video cards from window.KATANA_WORK in js/work.js. Clicking a card opens the in-page dialog player. Support YouTube URLs, Google Drive file/share URLs, and direct MP4/WebM/OGG URLs. For direct videos, detect portrait vs landscape and size the player to 9:16 or 16:9 using contain (never crop). Closing the dialog must stop/clear playback. Preserve keyboard and accessible dialog behavior.
- Contact section: “HAVE A GOOD ONE IN MIND?”; “Let’s make something matter.” The “START A CONVERSATION” CTA must open WhatsApp for +91 7486084751. Show email sales.katanastudios@gmail.com, phone 7486084751, Instagram https://www.instagram.com/katanastudio.ads?obrf=amhhZ3NrenA3ZWpw.
- Footer: Katana Studios brand and copyright year.

EXACT CURRENT PORTFOLIO DATA
The live mapping is in js/work.js and the complete source-to-thumbnail table is EDIT-GUIDES/LINK-GUIDE.md. Use those files as canonical data and preserve each source/thumbnail pairing. Current unique entries are Ads 6, Content 7, Edits 4, Fashion 5, Music Video Reels 6, Real Estate 5, UGC 9 (42 total). Do not repeat cards to reach older proposed totals of 78; the owner later requested every video only once. Do not silently remove or relabel a clip.

Hosting details:
- Website repo: https://github.com/lakhyanidevansh-ops/katana-studio-portfolio
- Video release assets currently point to: https://github.com/lakhyanidevansh-ops/katana-studios/releases/download/katana-portfolio-videos-v1/ . `katanaVideo()` in js/work.js trims filenames, removes parentheses, changes spaces to periods, collapses repeated periods, and URL-encodes the result. Preserve this rule unless verified release names are changed.
- Ads 04, 05 and 06 use these Google Drive URLs (keep exact unless owner supplies replacements):
  04 https://drive.google.com/file/d/14K_KHn9d3o6UK56b9FHqSeJl4-y2pbrM/view?usp=sharing
  05 https://drive.google.com/file/d/1eb6B2A8JyYuml7bvK9TJ160ejVrU4W9c/view?usp=sharing
  06 https://drive.google.com/file/d/1ZIGL33HgNs2xMyVgl5y2LT3bODFfSfzb/view?usp=sharing
- Drive videos need General access “Anyone with the link — Viewer”. Drive can still reject some video codecs/formats; diagnose the host/file before claiming a site code fix.
- All 42 card thumbnail images are in assets/thumbnails/. Use exact spelling/case/extension. The card title is derived from the thumbnail filename with image suffixes removed; Ads 01 has custom title “Matinoz TVC” (capital M).

DEPLOYMENT
- Deploy as a Render Static Site from the website repo, branch feat/katana-studios-portfolio (or the branch selected by the owner).
- Root Directory: blank/repository root. Build Command: blank. Publish Directory: `.` because index.html is in the root.
- Never commit large video files into the website repository. Keep large video media in the GitHub Release or an externally accessible host.

EDITING SAFETY
- Before editing video data, read EDIT-GUIDES/LINK-GUIDE.md and EDIT-GUIDES/THUMBNAIL-GUIDE.md.
- In each `videoEntries(sources, thumbnails, titles)` call, index positions must stay aligned. Replacing a source must keep the matching thumbnail at the same position. Adding/removing a card means updating the source and thumbnail arrays together and the title array if a custom title exists.
- Ask only if a necessary asset, intended mapping, or behavior is truly ambiguous. Otherwise make focused changes, keep copy concise, and explain which files changed.
```

---

## Data/file guide

- `index.html`: page skeleton and visible copy.
- `css/styles.css`: design tokens, page layout, cards, 16:9/9:16 player sizing and mobile rules.
- `js/work.js`: category data, video sources, thumbnail names, custom title, email, phone and Instagram.
- `js/site.js`: category/card rendering, title generation, video URL handling, player modal, mobile/portrait player sizing, contact-link population.
- `EDIT-GUIDES/LINK-GUIDE.md`: exact 42-row source-to-thumbnail mapping and how to replace links.
- `EDIT-GUIDES/THUMBNAIL-GUIDE.md`: image folder and title behavior.