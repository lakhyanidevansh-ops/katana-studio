# Thumbnail and title guide

## Where image files go

Place all covers in `assets/thumbnails/`. Use a clear filename and keep the exact file extension. The 42 current cover files are included in that folder.

## How a card finds its cover

Open `js/work.js`. Each category calls `videoEntries(sources, thumbnails, titles)`. The thumbnail at an array position belongs to the video source at the same position. Example: the first Ads source is Ads card 01 and the first Ads thumbnail is its cover.

The JavaScript adds the `assets/thumbnails/` folder path and URL-encodes spaces, so put only the filename in the thumbnail list:

```js
"Grew Solar Brand film.jpg.jpeg"
```

The corresponding full file path is `assets/thumbnails/Grew Solar Brand film.jpg.jpeg`.

## How the card title is chosen

By default, the visible title is the thumbnail filename with image extensions removed. For example, `Grew Solar Brand film.jpg.jpeg` displays as `Grew Solar Brand film`. Ads 01 uses an optional custom title in the third list: `Matinoz TVC`.

To rename a card, rename the image and change its filename in `js/work.js` to match, or set the matching index in the optional third title list. Keep the source and thumbnail at the same index.

## Current Ads and music reel covers

- Ads 01: `matinoz TVC.jpg` → title `Matinoz TVC`
- Ads 02: `BehaveNeu Brand video.jpg`
- Ads 03: `BNI Brand shoot.jpg`
- Ads 04: `Grew Solar Brand film.jpg.jpeg`
- Ads 05: `The Architecture brand podcast.jpg.jpeg`
- Ads 06: `SANMACH Machinery product film.jpg.jpeg`
- Music Video Reels 06: `Music Video Reel 06.png`

All other sections have the complete file-by-file order in `EDIT-GUIDES/LINK-GUIDE.md`.

## If a cover is missing

1. Confirm the image exists in `assets/thumbnails/`.
2. Compare the exact filename, capitalization, spaces and extension to its entry in `js/work.js`.
3. Check that the thumbnail entry is at the same index as the intended video source.
4. Save and hard-refresh the site. If a cached deployment still shows the old cover, wait for Render's deploy to finish and refresh again.