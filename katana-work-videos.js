/*
  KATANA STUDIOS — VIDEO + LINK CONTROL FILE
  =========================================
  BHAI, LINKS EDIT KARNE KE LIYE BAS YE 4 STEPS:
  1. Google Drive me video par Share > General access > Anyone with the link > Viewer karo.
  2. Copy link dabao.
  3. Neeche sahi naam wala slot dhoondo. driveLink: '' ke andar apna poora link paste karo.
  4. File save karo, phir website refresh karo.

  Example:
  driveLink: 'https://drive.google.com/file/d/PASTE_FILE_ID/view?usp=sharing'

  driveLink khaali chhoda hai to sampleSrc wala sample video chalega.
  Google Drive link daalne ke baad sampleSrc ko badalne ki zaroorat nahi hai.
*/
(() => {
  // Ye helpers share link me se Drive file ID nikaalte hain. Inko edit mat karna.
  const driveFileId = (value = '') => {
    const text = String(value).trim();
    if (!text) return '';
    const pathMatch = text.match(/\/file\/d\/([^/?#]+)/i);
    const queryMatch = text.match(/[?&]id=([^&#]+)/i);
    const id = pathMatch?.[1] || queryMatch?.[1] || text;
    return decodeURIComponent(id).trim();
  };
  const drivePreviewUrl = value => {
    const id = driveFileId(value);
    return id ? `https://drive.google.com/file/d/${encodeURIComponent(id)}/preview` : '';
  };
  const driveVideoUrl = value => {
    const id = driveFileId(value);
    return id ? `https://drive.google.com/uc?export=download&id=${encodeURIComponent(id)}` : '';
  };

  // Ye temporary sample videos hain. Apne Google Drive links driveLink me daalo.
  const tears = 'https://storage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4';
  const escapes = 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4';
  const fun = 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4';
  const tearsPoster = 'https://storage.googleapis.com/gtv-videos-bucket/sample/images/TearsOfSteel.jpg';
  const escapesPoster = 'https://storage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerEscapes.jpg';
  const funPoster = 'https://storage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerFun.jpg';

  window.KATANA_MEDIA = {
    // ================================================================
    // A · LANDING PAGE BANNER VIDEOS
    // Horizontal desktop par, vertical mobile par khud select hota hai.
    // ================================================================
    banner: {
      horizontal: {
        label: 'Banner video (horizontal · desktop)',
        driveLink: '', // YAHAN desktop/horizontal video ka Drive link paste karo.
        sampleSrc: 'assets/video/katana-studios-brand-portfolio.mp4'
      },
      vertical: {
        label: 'Banner video (vertical · mobile)',
        driveLink: '', // YAHAN mobile/vertical video ka Drive link paste karo.
        sampleSrc: 'assets/video/katana-studios-banner-mobile.mp4'
      }
    },

    // ================================================================
    // B · WORK BOOK VIDEOS
    // Har category ke 3 slots. Har slot me apna Drive link daal sakte ho.
    // Example: Ads Video 2 ko badalna ho, to sirf usi driveLink ko edit karo.
    // ================================================================
    workBook: {
      films: [
        { title: 'Films · Video 1', driveLink: '', sampleSrc: tears, poster: tearsPoster }, // FILMS VIDEO 1 link yahan
        { title: 'Films · Video 2', driveLink: '', sampleSrc: escapes, poster: escapesPoster }, // FILMS VIDEO 2 link yahan
        { title: 'Films · Video 3', driveLink: '', sampleSrc: fun, poster: funPoster } // FILMS VIDEO 3 link yahan
      ],
      ads: [
        { title: 'Ads · Video 1', driveLink: '', sampleSrc: escapes, poster: escapesPoster }, // ADS VIDEO 1 link yahan
        { title: 'Ads · Video 2', driveLink: '', sampleSrc: fun, poster: funPoster }, // ADS VIDEO 2 link yahan
        { title: 'Ads · Video 3', driveLink: '', sampleSrc: tears, poster: tearsPoster } // ADS VIDEO 3 link yahan
      ],
      social: [
        { title: 'Social Media · Video 1', driveLink: '', sampleSrc: fun, poster: funPoster }, // SOCIAL VIDEO 1 link yahan
        { title: 'Social Media · Video 2', driveLink: '', sampleSrc: tears, poster: tearsPoster }, // SOCIAL VIDEO 2 link yahan
        { title: 'Social Media · Video 3', driveLink: '', sampleSrc: escapes, poster: escapesPoster } // SOCIAL VIDEO 3 link yahan
      ],
      production: [
        { title: 'Production · Video 1', driveLink: '', sampleSrc: tears, poster: tearsPoster }, // PRODUCTION VIDEO 1 link yahan
        { title: 'Production · Video 2', driveLink: '', sampleSrc: escapes, poster: escapesPoster }, // PRODUCTION VIDEO 2 link yahan
        { title: 'Production · Video 3', driveLink: '', sampleSrc: fun, poster: funPoster } // PRODUCTION VIDEO 3 link yahan
      ]
    },

    // ================================================================
    // C · ASHEN PRESS FILM SHELF — all 10 volumes
    // Har book ka Drive link alag hai. Film 02 ka link badalna ho to
    // sirf film-02 ke driveLink ko edit karo. Poster optional hai.
    // Poster apne folder me rakhkar relative path likho, jaise:
    // poster: 'assets/posters/film-02.jpg'
    // ================================================================
    filmShelf: [
      { id: 'she-lived', title: 'SHE LIVED', blurb: 'Something inside her is still alive.', driveLink: '', sampleSrc: tears, poster: '' }, // VOLUME 1 · SHE LIVED
      { id: 'film-02', title: 'Film 02', blurb: '', driveLink: '', sampleSrc: escapes, poster: '' }, // VOLUME 2
      { id: 'film-03', title: 'Film 03', blurb: '', driveLink: '', sampleSrc: fun, poster: '' }, // VOLUME 3
      { id: 'film-04', title: 'Film 04', blurb: '', driveLink: '', sampleSrc: tears, poster: '' }, // VOLUME 4
      { id: 'film-05', title: 'Film 05', blurb: '', driveLink: '', sampleSrc: escapes, poster: '' }, // VOLUME 5
      { id: 'film-06', title: 'Film 06', blurb: '', driveLink: '', sampleSrc: fun, poster: '' }, // VOLUME 6
      { id: 'film-07', title: 'Film 07', blurb: '', driveLink: '', sampleSrc: tears, poster: '' }, // VOLUME 7
      { id: 'film-08', title: 'Film 08', blurb: '', driveLink: '', sampleSrc: escapes, poster: '' }, // VOLUME 8
      { id: 'film-09', title: 'Film 09', blurb: '', driveLink: '', sampleSrc: fun, poster: '' }, // VOLUME 9
      { id: 'film-10', title: 'Film 10', blurb: '', driveLink: '', sampleSrc: tears, poster: '' } // VOLUME 10
    ],

    // ================================================================
    // D · KATANA STUDIOS SOCIAL LINKS
    // Har url: '' ke beech apne profile ka poora link paste karo.
    // NOTE: ye links abhi save honge; page par social buttons dikhane ke
    // liye un buttons ko layout me add karna alag kaam hai.
    // ================================================================
    links: {
      social: {
        instagram: { label: 'Katana Studios · Instagram', url: '' }, // e.g. https://www.instagram.com/yourstudio/
        x: { label: 'Katana Studios · X', url: '' }, // e.g. https://x.com/yourstudio
        linkedin: { label: 'Katana Studios · LinkedIn', url: '' }, // e.g. https://www.linkedin.com/company/yourstudio/
        youtube: { label: 'Katana Studios · YouTube', url: '' } // e.g. https://www.youtube.com/@yourstudio
      },

      // E · SHE LIVED FILM CREDITS — ye profile links Films page par chalte hain.
      // Kisi profile ka URL badalna ho, usi naam ki line ke quotes ke andar badlo.
      filmCredits: {
        hypernair12: 'https://www.instagram.com/hypernair12/?hl=en',
        krish_lakhyani_: 'https://www.instagram.com/krish_lakhyani_/?hl=en',
        being_roochii: 'https://www.instagram.com/being_roochii/?hl=en',
        janki_pj_: 'https://www.instagram.com/janki_pj_/?hl=en',
        itsthawiz: 'https://www.instagram.com/itsthawiz/?hl=en',
        cinematic_renish: 'https://www.instagram.com/cinematic_renish/?hl=en',
        rr_films_l: 'https://www.instagram.com/rr_films_l/?hl=en',
        yaarkrunall: 'https://www.instagram.com/yaarkrunall/?hl=en',
        mohit_bhavsar: 'https://www.instagram.com/mohit_.bhavsar/?hl=en',
        nitya_jagdale: 'https://www.instagram.com/_nityajagdale/?hl=en',
        aatishskies: 'https://www.instagram.com/aatishskies/?hl=en',
        speaking_beats_music: 'https://www.instagram.com/speaking_beats_music/?hl=en',
        poojaaajha: 'https://www.instagram.com/poojaaajha/?hl=en',
        heyy_hastiii_12: 'https://www.instagram.com/heyy.hastiii_12/?hl=en',
        the_rohel: 'https://www.instagram.com/the_rohel/?hl=en',
        musicologist_2003: 'https://www.instagram.com/musicologist__2003/?hl=en',
        theartistronny: 'https://www.instagram.com/theartistronny/?hl=en'
      }
    }
  };

  // Website pages in values ko use karte hain. Neeche ke code ko edit mat karna.
  window.KATANA_WORK_VIDEOS = window.KATANA_MEDIA.workBook;
  window.KATANA_DRIVE = { fileId: driveFileId, previewUrl: drivePreviewUrl, videoUrl: driveVideoUrl };
  const getPath = path => path.split('.').reduce((value, key) => value?.[key], window.KATANA_MEDIA);
  document.querySelectorAll('[data-katana-link]').forEach(anchor => {
    const url = getPath(anchor.dataset.katanaLink);
    if (typeof url === 'string' && url.trim()) {
      anchor.href = url.trim();
      anchor.hidden = false;
    } else {
      anchor.removeAttribute('href');
      anchor.hidden = true;
    }
  });
})();
