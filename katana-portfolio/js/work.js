/*
  KATANA STUDIOS — PORTFOLIO VIDEO ASSETS
  Video files are hosted as GitHub Release assets.
*/
const katanaVideo = (filename) => {
  const releaseFilename = filename
    .trim()
    .replace(/[()]/g, "")
    .replace(/\s+/g, ".")
    .replace(/\.{2,}/g, ".");

  const url = new URL("https://katana-studio-portfolio.vercel.app/api/video");
  url.searchParams.set("file", releaseFilename);
  return url.href;
};
const videoEntries = (sources, thumbnails = [], titles = []) => sources.map((source, index) => ({
  // Empty source means a visible, ready-to-fill project slot (no broken request).
  url: !source ? "" : /^https?:\/\//i.test(source) ? source : katanaVideo(source),
  thumbnail: thumbnails[index]
    ? `assets/thumbnails/${encodeURIComponent(thumbnails[index])}`
    : "",
  title: titles[index] || ""
}));

window.KATANA_WORK = {
  email: "sales.katanastudios@gmail.com",
  phone: "7486084751",
  instagram: "https://www.instagram.com/katanastudio.ads?rpxt=Z3VwODFibnhuMnVj",
  categories: [
    {
      id: "ads",
      title: "Ads",
      cardName: "Campaign",
      hue: 17,
      links: videoEntries([
        "Video-72566.mp4",
        "vidssave.com Behaveneu AD 1080P.mp4",
        "vidssave.com BNI commercial 720P.mp4",
        "https://drive.google.com/file/d/14K_KHn9d3o6UK56b9FHqSeJl4-y2pbrM/view?usp=sharing",
        "https://drive.google.com/file/d/1eb6B2A8JyYuml7bvK9TJ160ejVrU4W9c/view?usp=sharing",
        "https://drive.google.com/file/d/1ZIGL33HgNs2xMyVgl5y2LT3bODFfSfzb/view?usp=sharing",
        "Nilang.cables.brand.video.mp4", // ADS VIDEO 07
        "Nilang cables diwali campaign.mp4", // ADS VIDEO 08
        "Sai Drishti Final.mp4"  // ADS VIDEO 09
      ], [
        "matinoz TVC.jpg",
        "BehaveNeu Brand video.jpg",
        "BNI Brand shoot.jpg",
        "Grew Solar Brand film.jpg.jpeg",
        "The Architecture brand podcast.jpg.jpeg",
        "SANMACH Machinery product film.jpg.jpeg",
        "ads7.png", // ADS VIDEO 07 thumbnail
        "ads8.png", // ADS VIDEO 08 thumbnail
        "ads9.png"  // ADS VIDEO 09 thumbnail
      ], [
        "Matinoz TVC", "Behaveneu Brand Video", "BNI Commercial",
        "Grew Solar Brand Film", "Architecture Brand Podcast", "SANMACH Product Film",
        "Nilang cables brand video", "Nilang cables diwali campaign", "Sai Drishti Final"
      ])
    },
    {
      id: "content",
      title: "Content",
      cardName: "Creator",
      hue: 29,
      links: videoEntries([
        "Video-13962.mp4",
        "Video-20696.mp4",
        "Video-21781.mp4",
        "Video-32570.mp4",
        "Video-56054.mp4",
        "Video-61774.mp4",
        "Video-95748.mp4"
      ], [
        "Marketing Content 01.jpg",
        "Marketing Content 02.jpg",
        "Marketing Content 03.jpg",
        "Marketing Content 04.jpg",
        "Marketing Content 05.jpg",
        "Marketing Content 06.jpg",
        "Marketing Content 07.jpg"
      ])
    },
    {
      id: "edits",
      title: "Edits",
      cardName: "Edit",
      hue: 17,
      links: videoEntries([
        "f r sample.mp4",
        "Halucinated Vinyl Crown Promo Work.mp4",
        "portfo3.mp4",
        "profecialnal edit.mp4"
      ], ["Edit 01.jpg", "Edit 02.jpg", "Edit 03.jpg", "Edit 04.jpg"])
    },
    {
      id: "fashion",
      title: "Fashion",
      cardName: "Fashion",
      hue: 17,
      links: videoEntries([
        "Video-255.mp4",
        "Video-22081.mp4",
        "Video-78819.mp4",
        "Video-97752.mp4",
        "Video-63388.mp4"
      ], [
        "Craftroots 01.jpg",
        "Craftroots 02.jpg",
        "Craftroots 03.jpg",
        "Craftroots 04.jpg",
        "Pantaloons diwali.jpg"
      ])
    },
    {
      id: "music-video-reels",
      title: "Music Video Reels",
      cardName: "Music Reel",
      hue: 17,
      links: videoEntries([
        "Video-71735.mp4",
        "Video-94622.mp4",
        "Video-50818.mp4",
        "Video-91448.mp4",
        "Video-13163.mp4",
        "Video-93650.mp4"
      ], [
        "Atish reel .jpg",
        "Blues.jpg",
        "Mota bhai 01.jpg",
        "Mota bhai 02.jpg",
        "Mystic the wiz.jpg",
        "Music Video Reel 06.png"
      ])
    },
    {
      id: "real-estate",
      title: "Real Estate",
      cardName: "Property",
      hue: 17,
      links: videoEntries([
        "DPA 1.mp4",
        "Serenity_Casa_10-05-25.2.mp4",
        "DPA 3.mp4",
        "the garden video 1 28-5-2025.mp4",
        "the garden video 7-6-2025.mp4"
      ], [
        "DPA 01.jpg",
        "DPA 02.jpg",
        "DPA 03.jpg",
        "DPA 04.jpg",
        "DPA 05.jpg"
      ])
    },
    {
      id: "ugc",
      title: "UGC",
      cardName: "UGC",
      hue: 14,
      links: videoEntries([
        "A07.mp4",
        "UGC Sample (1).mp4",
        "2-7-26 Tech Hub Video.mp4",
        "Ahmedabad mirror  (1).mp4",
        "Ahmedabad mirror .mp4",
        "Doctor_skincare.mp4",
        "7-7-26 Editing Creative Video.mp4",
        "Graphic Designing Pooja Final.mp4",
        "Jigar Thakkar Final Video.mp4"
      ], [
        "BizKonnet 01.jpg",
        "Book piblishing.jpg",
        "TOPS 01.jpg",
        "Ahmedabad Mirror 01.jpg",
        "Ahmedabad Mirror 02.jpg",
        "Doctor skincare.jpg",
        "TOPS 02.jpg",
        "TOPS 03.jpg",
        "TOPS 04.jpg"
      ])
    }
  ]
};
