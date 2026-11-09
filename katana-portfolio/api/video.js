const { Readable } = require("node:stream");
const { pipeline } = require("node:stream/promises");

const RELEASE_BASE =
  "https://github.com/lakhyanidevansh-ops/katana-studio-portfolio/releases/download/katana-portfolio-videos-v1/";

module.exports = async function handler(req, res) {
  if (req.method !== "GET" && req.method !== "HEAD") {
    res.setHeader("Allow", "GET, HEAD");
    res.status(405).end("Method not allowed");
    return;
  }

  const filename = typeof req.query.file === "string" ? req.query.file : "";
  if (!/^[A-Za-z0-9][A-Za-z0-9._-]*\.mp4$/i.test(filename)) {
    res.status(400).end("Invalid video file");
    return;
  }

  const requestHeaders = {};
  if (req.headers.range) requestHeaders.Range = req.headers.range;
  if (req.headers["if-range"]) requestHeaders["If-Range"] = req.headers["if-range"];

  const controller = new AbortController();
  res.on("close", () => {
    if (!res.writableEnded) controller.abort();
  });

  try {
    const upstream = await fetch(RELEASE_BASE + encodeURIComponent(filename), {
      method: req.method,
      headers: requestHeaders,
      signal: controller.signal,
      redirect: "follow"
    });

    if (![200, 206, 416].includes(upstream.status)) {
      res.status(upstream.status).end("Video unavailable");
      return;
    }

    res.statusCode = upstream.status;
    res.setHeader("Content-Type", "video/mp4");
    res.setHeader("Content-Disposition", `inline; filename="${filename}"`);
    res.setHeader("Accept-Ranges", "bytes");
    res.setHeader("X-Content-Type-Options", "nosniff");
    res.setHeader("Cache-Control", "public, max-age=3600, s-maxage=86400");

    for (const header of ["content-length", "content-range", "etag", "last-modified"]) {
      const value = upstream.headers.get(header);
      if (value) res.setHeader(header, value);
    }

    if (req.method === "HEAD" || !upstream.body) {
      res.end();
      return;
    }

    await pipeline(Readable.fromWeb(upstream.body), res);
  } catch (error) {
    if (res.headersSent) {
      res.destroy();
      return;
    }
    res.status(502).end("Video stream unavailable");
  }
};
