#!/usr/bin/env node
/**
 * Baixa o regif.exe da release mais recente do GitHub para public/downloads.
 * Roda no build do Vercel (via package.json "build" script).
 *
 * Requisitos: internet no build. Se falhar, o build falha explicitamente.
 */
const https = require("https");
const fs = require("fs");
const path = require("path");

const OWNER = "kaiqueq147";
const REPO = "regif";
const ASSET_NAME = "regif.exe";
const OUT_DIR = path.join(__dirname, "..", "public", "downloads");
const OUT_FILE = path.join(OUT_DIR, ASSET_NAME);

function getJson(url) {
  return new Promise((resolve, reject) => {
    const req = https.get(
      url,
      {
        headers: {
          "User-Agent": "regif-site-build",
          Accept: "application/vnd.github+json",
        },
      },
      (res) => {
        if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
          // follow redirect
          return resolve(getJson(res.headers.location));
        }
        if (res.statusCode !== 200) {
          return reject(new Error(`GET ${url} -> ${res.statusCode}`));
        }
        let data = "";
        res.on("data", (c) => (data += c));
        res.on("end", () => {
          try {
            resolve(JSON.parse(data));
          } catch (e) {
            reject(e);
          }
        });
      }
    );
    req.on("error", reject);
    req.end();
  });
}

function download(url, dest) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest);
    const req = https.get(url, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        file.close();
        fs.unlink(dest, () => {});
        return resolve(download(res.headers.location, dest));
      }
      if (res.statusCode !== 200) {
        file.close();
        fs.unlink(dest, () => {});
        return reject(new Error(`Download ${url} -> ${res.statusCode}`));
      }
      res.pipe(file);
      file.on("finish", () => file.close(resolve));
    });
    req.on("error", (e) => {
      file.close();
      fs.unlink(dest, () => {});
      reject(e);
    });
  });
}

async function main() {
  fs.mkdirSync(OUT_DIR, { recursive: true });

  // Prefer the local build in ../dist/regif.exe (the one the user just built)
  const localDist = path.join(__dirname, "..", "..", "dist", ASSET_NAME);
  if (fs.existsSync(localDist)) {
    console.log(`[download-regif] using local dist build: ${localDist}`);
    fs.copyFileSync(localDist, OUT_FILE);
    const size = fs.statSync(OUT_FILE).size;
    console.log(`[download-regif] done: ${(size / 1024 / 1024).toFixed(1)} MB -> ${OUT_FILE}`);
    return;
  }

  console.log("[download-regif] no local dist found, fetching latest release from GitHub...");
  const rel = await getJson(`https://api.github.com/repos/${OWNER}/${REPO}/releases/latest`);
  const asset = (rel.assets || []).find((a) => a.name === ASSET_NAME);
  if (!asset) {
    throw new Error(`Asset ${ASSET_NAME} not found in latest release`);
  }
  const url = asset.browser_download_url;

  console.log(`[download-regif] downloading ${ASSET_NAME} from ${url}`);
  await download(url, OUT_FILE);
  const size = fs.statSync(OUT_FILE).size;
  console.log(`[download-regif] done: ${(size / 1024 / 1024).toFixed(1)} MB -> ${OUT_FILE}`);
}

main().catch((err) => {
  console.warn("[download-regif] WARNING (non-fatal):", err.message || err);
  console.warn("[download-regif] Continuing build without local exe (using external download link).");
  // Do not fail the build — the site now uses a direct external link
  process.exit(0);
});
