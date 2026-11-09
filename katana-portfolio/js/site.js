(function () {
  "use strict";

  const data = window.KATANA_WORK;
  const nav = document.getElementById("categoryNav");
  const sections = document.getElementById("categorySections");
  const dialog = document.getElementById("videoDialog");
  const playerFrame = document.getElementById("playerFrame");
  const playerEmpty = document.getElementById("playerEmpty");
  const dialogTitle = document.getElementById("dialogTitle");
  const dialogCategory = document.querySelector("[data-dialog-category]");

  if (!data || !Array.isArray(data.categories)) return;

  const pad = (number) => String(number).padStart(2, "0");
  const thumbnailTitle = (path) => {
    if (!path) return "";
    const filename = path.split("/").pop() || "";
    let decodedFilename = filename;
    try {
      decodedFilename = decodeURIComponent(filename);
    } catch {
      // Keep the original filename if the URL encoding is malformed.
    }
    return decodedFilename.replace(/(?:\.(?:jpe?g|png|webp|gif|avif))+$/i, "").trim();
  };
  const visibleCategories = data.categories.filter((category) => category.links.length > 0);
  const totalVideos = visibleCategories.reduce((sum, category) => sum + category.links.length, 0);
  document.querySelector("[data-total-categories]").textContent = pad(visibleCategories.length);
  document.querySelector("[data-total-videos]").textContent = pad(totalVideos);
  document.querySelector("[data-nav-video-total]").textContent = pad(totalVideos);
  document.querySelector("[data-year]").textContent = new Date().getFullYear();

  const email = (data.email || "sales.katanastudios@gmail.com").trim();
  document.querySelectorAll("[data-email-link]").forEach((link) => {
    link.href = `mailto:${email}`;
  });
  document.querySelectorAll("[data-email-text]").forEach((link) => {
    link.href = `mailto:${email}`;
    link.textContent = email;
  });
  const phone = (data.phone || "").trim();
  document.querySelectorAll("[data-phone-link]").forEach((link) => {
    link.href = `tel:${phone.replace(/[^\d+]/g, "")}`;
  });
  document.querySelectorAll("[data-phone-text]").forEach((link) => {
    link.textContent = phone;
  });
  const instagram = (data.instagram || "").trim();
  document.querySelectorAll("[data-instagram-link]").forEach((link) => {
    link.href = instagram;
  });

  const playIcon = '<svg viewBox="0 0 12 12" aria-hidden="true"><path d="M2 1.15c0-.7.75-1.13 1.35-.77l7.1 4.27a1.57 1.57 0 0 1 0 2.7l-7.1 4.27C2.75 11.98 2 11.55 2 10.85z"/></svg>';

  visibleCategories.forEach((category, categoryIndex) => {
    const navLink = document.createElement("a");
    navLink.href = `#work-${category.id}`;
    navLink.dataset.categoryLink = category.id;
    navLink.innerHTML = `<span>${pad(category.links.length)}</span>${category.navTitle || category.title.toUpperCase()}`;
    nav.append(navLink);

    const section = document.createElement("section");
    section.className = "work-section";
    section.id = `work-${category.id}`;
    section.setAttribute("aria-labelledby", `heading-${category.id}`);

    const heading = document.createElement("div");
    heading.className = "section-heading";
    heading.innerHTML = `
      <span class="section-number">${pad(categoryIndex + 1)} / ${pad(visibleCategories.length)}</span>
      <div class="section-heading__main">
        <div>
          <h2 id="heading-${category.id}">${category.title}</h2>
        </div>
      </div>
      <span class="section-count"><strong>${pad(category.links.length)}</strong> PROJECTS</span>
    `;

    const grid = document.createElement("div");
    grid.className = "work-grid";

    category.links.forEach((project, index) => {
      const url = typeof project === "string" ? project : project.url;
      const projectTitle = project.title || thumbnailTitle(project.thumbnail) || `${category.cardName} ${pad(index + 1)}`;
      const card = document.createElement("button");
      card.type = "button";
      card.className = "work-card";
      card.dataset.videoUrl = url;
      card.dataset.category = category.title;
      card.dataset.title = projectTitle;
      card.dataset.variant = String(index % 4);
      card.style.setProperty("--tone", category.hue);
      card.setAttribute("aria-label", `Play ${category.title}: ${projectTitle}`);

      const poster = document.createElement("span");
      poster.className = "work-card__poster";
      poster.setAttribute("aria-hidden", "true");

      if (project.thumbnail) {
        const thumbnail = document.createElement("img");
        thumbnail.className = "poster-image";
        thumbnail.src = project.thumbnail;
        thumbnail.alt = "";
        thumbnail.loading = "lazy";
        thumbnail.decoding = "async";
        thumbnail.addEventListener("error", () => thumbnail.remove(), { once: true });
        poster.append(thumbnail);
      }

      const orbit = document.createElement("span");
      orbit.className = "poster-orbit";
      const serial = document.createElement("span");
      serial.className = "poster-index";
      serial.textContent = `KS / ${pad(index + 1)}`;
      const categoryLabel = document.createElement("span");
      categoryLabel.className = "poster-category";
      categoryLabel.textContent = category.title.toUpperCase();
      const play = document.createElement("span");
      play.className = "poster-play";
      play.innerHTML = playIcon;
      poster.append(orbit, serial, categoryLabel, play);

      const caption = document.createElement("span");
      caption.className = "work-card__caption";
      const title = document.createElement("span");
      title.className = "work-card__title";
      title.textContent = projectTitle;
      const meta = document.createElement("span");
      meta.className = "work-card__meta";
      meta.textContent = `${pad(categoryIndex + 1)}.${pad(index + 1)}`;
      caption.append(title, meta);
      card.append(poster, caption);
      card.addEventListener("click", () => openProject(card));
      grid.append(card);
    });

    section.append(heading, grid);
    sections.append(section);
  });

  function parseVideoUrl(raw) {
    let url;
    try {
      url = new URL(raw);
    } catch {
      return null;
    }

    const host = url.hostname.replace(/^www\./, "").toLowerCase();
    const youtubeHosts = ["youtube.com", "m.youtube.com", "music.youtube.com", "youtube-nocookie.com"];
    if (youtubeHosts.includes(host) || host === "youtu.be") {
      let videoId = "";
      if (host === "youtu.be") {
        videoId = url.pathname.split("/").filter(Boolean)[0] || "";
      } else {
        videoId = url.searchParams.get("v") || "";
        if (!videoId) {
          const parts = url.pathname.split("/").filter(Boolean);
          const marker = parts.findIndex((part) => ["embed", "shorts", "live"].includes(part));
          if (marker >= 0) videoId = parts[marker + 1] || "";
        }
      }
      if (!/^[\w-]{6,}$/.test(videoId)) return null;
      const start = url.searchParams.get("start") || url.searchParams.get("t");
      const startSeconds = start && /^\d+$/.test(start) ? `&start=${start}` : "";
      return { type: "iframe", src: `https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0${startSeconds}` };
    }

    if (host === "drive.google.com" || host === "docs.google.com") {
      const match = url.pathname.match(/\/file\/d\/([^/]+)/);
      const fileId = match?.[1] || url.searchParams.get("id");
      if (!fileId) return null;
      return { type: "iframe", src: `https://drive.google.com/file/d/${encodeURIComponent(fileId)}/preview` };
    }

    if (/\.(mp4|webm|ogg)(?:$|\?)/i.test(raw)) {
      return { type: "video", src: raw };
    }
    return null;
  }

  function showEmptyState(message) {
    playerFrame.replaceChildren(playerEmpty);
    playerEmpty.querySelector("h3").textContent = message;
    playerEmpty.hidden = false;
  }

  function openProject(card) {
    const url = card.dataset.videoUrl.trim();
    const title = card.dataset.title;
    const category = card.dataset.category;
    dialog.classList.remove("is-portrait");
    dialogTitle.textContent = title;
    dialogCategory.textContent = `${category.toUpperCase()} / VIDEO`;

    if (!url) {
      showEmptyState("This project is waiting for its link.");
    } else {
      const media = parseVideoUrl(url);
      if (!media) {
        showEmptyState("That link could not be embedded.");
      } else if (media.type === "iframe") {
        const frame = document.createElement("iframe");
        frame.src = media.src;
        frame.title = `${title} — ${category}`;
        frame.allow = "autoplay; encrypted-media; picture-in-picture; fullscreen";
        frame.allowFullscreen = true;
        frame.referrerPolicy = "strict-origin-when-cross-origin";
        playerFrame.replaceChildren(frame);
      } else {
        const video = document.createElement("video");
        video.src = media.src;
        video.controls = true;
        video.autoplay = true;
        video.playsInline = true;
        video.addEventListener("loadedmetadata", () => {
          if (playerFrame.contains(video)) {
            dialog.classList.toggle("is-portrait", video.videoHeight > video.videoWidth);
          }
        }, { once: true });
        playerFrame.replaceChildren(video);
      }
    }
    if (!dialog.open) dialog.showModal();
  }

  function closeDialog() {
    if (dialog.open) dialog.close();
  }

  document.querySelector("[data-close-dialog]").addEventListener("click", closeDialog);
  dialog.addEventListener("click", (event) => {
    if (event.target === dialog) closeDialog();
  });
  dialog.addEventListener("close", () => {
    dialog.classList.remove("is-portrait");
    showEmptyState("This project is waiting for its link.");
  });

  const categoryLinks = [...document.querySelectorAll("[data-category-link]")];
  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver((entries) => {
      const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (!visible) return;
      categoryLinks.forEach((link) => {
        if (link.hash === `#${visible.target.id}`) link.setAttribute("aria-current", "location");
        else link.removeAttribute("aria-current");
      });
    }, { rootMargin: "-20% 0px -65% 0px", threshold: [0, 0.15, 0.35] });
    document.querySelectorAll(".work-section").forEach((section) => observer.observe(section));
  }
})();

