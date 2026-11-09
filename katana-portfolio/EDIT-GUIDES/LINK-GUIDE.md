# Video link and mapping guide

Edit `js/work.js`. Each category calls `videoEntries(sources, thumbnails, titles)`. Entry number 1 in each list belongs together, entry number 2 belongs together, and so on. The first source and first thumbnail make card 01 of that category.

## Exact current mapping

| Section / card | Video source in `js/work.js` | Thumbnail filename |
| --- | --- | --- |
| Ads 01 — Matinoz TVC | `Video-72566.mp4` (GitHub Release) | `matinoz TVC.jpg` |
| Ads 02 | `vidssave.com Behaveneu AD 1080P.mp4` (GitHub Release) | `BehaveNeu Brand video.jpg` |
| Ads 03 | `vidssave.com BNI commercial 720P.mp4` (GitHub Release) | `BNI Brand shoot.jpg` |
| Ads 04 | `https://drive.google.com/file/d/14K_KHn9d3o6UK56b9FHqSeJl4-y2pbrM/view?usp=sharing` | `Grew Solar Brand film.jpg.jpeg` |
| Ads 05 | `https://drive.google.com/file/d/1eb6B2A8JyYuml7bvK9TJ160ejVrU4W9c/view?usp=sharing` | `The Architecture brand podcast.jpg.jpeg` |
| Ads 06 | `https://drive.google.com/file/d/1ZIGL33HgNs2xMyVgl5y2LT3bODFfSfzb/view?usp=sharing` | `SANMACH Machinery product film.jpg.jpeg` |
| Content 01 | `Video-13962.mp4` (GitHub Release) | `Marketing Content 01.jpg` |
| Content 02 | `Video-20696.mp4` (GitHub Release) | `Marketing Content 02.jpg` |
| Content 03 | `Video-21781.mp4` (GitHub Release) | `Marketing Content 03.jpg` |
| Content 04 | `Video-32570.mp4` (GitHub Release) | `Marketing Content 04.jpg` |
| Content 05 | `Video-56054.mp4` (GitHub Release) | `Marketing Content 05.jpg` |
| Content 06 | `Video-61774.mp4` (GitHub Release) | `Marketing Content 06.jpg` |
| Content 07 | `Video-95748.mp4` (GitHub Release) | `Marketing Content 07.jpg` |
| Edits 01 | `f r sample.mp4` (GitHub Release) | `Edit 01.jpg` |
| Edits 02 | `Halucinated Vinyl Crown Promo Work.mp4` (GitHub Release) | `Edit 02.jpg` |
| Edits 03 | `portfo3.mp4` (GitHub Release) | `Edit 03.jpg` |
| Edits 04 | `profecialnal edit.mp4` (GitHub Release) | `Edit 04.jpg` |
| Fashion 01 | `Video-255.mp4` (GitHub Release) | `Craftroots 01.jpg` |
| Fashion 02 | `Video-22081.mp4` (GitHub Release) | `Craftroots 02.jpg` |
| Fashion 03 | `Video-78819.mp4` (GitHub Release) | `Craftroots 03.jpg` |
| Fashion 04 | `Video-97752.mp4` (GitHub Release) | `Craftroots 04.jpg` |
| Fashion 05 | `Video-63388.mp4` (GitHub Release) | `Pantaloons diwali.jpg` |
| Music Video Reels 01 | `Video-71735.mp4` (GitHub Release) | `Atish reel .jpg` |
| Music Video Reels 02 | `Video-94622.mp4` (GitHub Release) | `Blues.jpg` |
| Music Video Reels 03 | `Video-50818.mp4` (GitHub Release) | `Mota bhai 01.jpg` |
| Music Video Reels 04 | `Video-91448.mp4` (GitHub Release) | `Mota bhai 02.jpg` |
| Music Video Reels 05 | `Video-13163.mp4` (GitHub Release) | `Mystic the wiz.jpg` |
| Music Video Reels 06 | `Video-93650.mp4` (GitHub Release) | `Music Video Reel 06.png` |
| Real Estate 01 | `DPA 1.mp4` (GitHub Release) | `DPA 01.jpg` |
| Real Estate 02 | `Serenity_Casa_10-05-25.2.mp4` (GitHub Release) | `DPA 02.jpg` |
| Real Estate 03 | `DPA 3.mp4` (GitHub Release) | `DPA 03.jpg` |
| Real Estate 04 | `the garden video 1 28-5-2025.mp4` (GitHub Release) | `DPA 04.jpg` |
| Real Estate 05 | `the garden video 7-6-2025.mp4` (GitHub Release) | `DPA 05.jpg` |
| UGC 01 | `A07.mp4` (GitHub Release) | `BizKonnet 01.jpg` |
| UGC 02 | `UGC Sample (1).mp4` (GitHub Release) | `Book piblishing.jpg` |
| UGC 03 | `2-7-26 Tech Hub Video.mp4` (GitHub Release) | `TOPS 01.jpg` |
| UGC 04 | `Ahmedabad mirror  (1).mp4` (GitHub Release) | `Ahmedabad Mirror 01.jpg` |
| UGC 05 | `Ahmedabad mirror .mp4` (GitHub Release) | `Ahmedabad Mirror 02.jpg` |
| UGC 06 | `Doctor_skincare.mp4` (GitHub Release) | `Doctor skincare.jpg` |
| UGC 07 | `7-7-26 Editing Creative Video.mp4` (GitHub Release) | `TOPS 02.jpg` |
| UGC 08 | `Graphic Designing Pooja Final.mp4` (GitHub Release) | `TOPS 03.jpg` |
| UGC 09 | `Jigar Thakkar Final Video.mp4` (GitHub Release) | `TOPS 04.jpg` |

## Replace a video URL

1. Open `js/work.js`.
2. Find the category and exact item in its first `videoEntries([...])` list.
3. Replace that string with the new video source. Keep the quotes and comma.
4. Keep the thumbnail at the same position in the second list, or replace it with the matching image.
5. Save and refresh. A category's card count comes from its number of source entries.

### Google Drive

Paste the complete share URL, for example:

```js
"https://drive.google.com/file/d/FILE_ID/view?usp=sharing"
```

In Drive set **General access → Anyone with the link → Viewer**. Preview can still fail if Drive does not support that video's format or playback. If Drive preview fails, use a supported YouTube URL or a publicly accessible direct MP4 URL; changing the website cannot repair an unsupported Drive file.

### YouTube or direct video

YouTube watch/share/short URLs are accepted by the player. A direct `.mp4`, `.webm` or `.ogg` URL is also supported when the host allows public playback and cross-origin access.

### GitHub Release asset

For a filename instead of a full URL, the code builds this base URL:

`https://github.com/lakhyanidevansh-ops/katana-studios/releases/download/katana-portfolio-videos-v1/`

Then it trims leading/trailing spaces, removes parentheses, changes spaces to dots, collapses repeated dots, and URL-encodes the result. Use a release asset filename that matches that transformation. Do not upload video files into the website source repository; large video assets belong in the Release or another video host.

## Add or remove a card without breaking mapping

- Add one video by adding a source and a thumbnail in the same index in the two arrays. If using a custom title, add it at that same index in the optional third array.
- Remove one video by removing its source and its thumbnail at the same index. Remove its custom title too, if present.
- Keep source, thumbnail, and optional title arrays in identical order. Do not copy/paste an existing source if every project should stay unique.
- `videoEntries` generates the card title from the thumbnail filename with image extensions removed; Ads 01 has the explicit custom title `Matinoz TVC`.

## Replace a thumbnail

1. Put the image in `assets/thumbnails/`.
2. In the category's thumbnail list, replace the matching filename at the same array index. Include extension and exact capitalization.
3. Keep the `assets/thumbnails/` path generated by the code; list only the filename in the array.

The current unique counts are Ads 6, Content 7, Edits 4, Fashion 5, Music Video Reels 6, Real Estate 5, UGC 9 (42 total). Keep all category arrays aligned when the counts change.