# Katana Studios

A static portfolio website for Katana Studios.

## Pages

- `katana-studio-colorful.html` — index / landing page
- `work.html` — What We Do work book
- `films.html` — film shelf with ten volumes

## Run locally

On Windows, double-click `START FILMS.bat` and keep the terminal open. Then open `http://127.0.0.1:8000/katana-studio-colorful.html`.

## Edit videos and links

Edit `katana-work-videos.js`. It contains desktop/mobile banner video links, work book video slots, ten film volume links, social links, and film credit links. For Google Drive videos, set sharing to “Anyone with the link” / Viewer and paste the share link into the matching `driveLink` field. Each film volume has its own title, description, optional poster, and Drive link.

See `README.txt` for the step-by-step Hinglish guide. Blank Drive links use the included temporary sample clips where configured.

## Assets

Keep the `assets`, `katana-sketchbook`, `secret-pathways-assets`, and `threeui-ashen-press` folders alongside the HTML pages; the pages reference these files by relative path.
