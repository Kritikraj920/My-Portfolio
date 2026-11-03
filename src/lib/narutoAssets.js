// Asset loader for Naruto & Itachi-Sasuke media sequence and audio
const pad = (n) => String(n).padStart(3, '0');
const BASE = process.env.PUBLIC_URL || '';
const MEDIA = `${BASE}/media`;

export const AUDIO_SRC = `${BASE}/audio.mp3`;

export const SOURCES = {
  swing: Array.from({ length: 22 }, (_, i) => `${MEDIA}/swing/${pad(i + 1)}.webp`),
  sage: Array.from({ length: 58 }, (_, i) => `${MEDIA}/sage/${pad(i + 1)}.webp`),
  itachiHero: Array.from({ length: 70 }, (_, i) => `${MEDIA}/itachi-sasuke/hero/f_${pad(i + 1)}.webp`),
  itachiBond: Array.from({ length: 70 }, (_, i) => `${MEDIA}/itachi-sasuke/bond/b_${pad(i + 1)}.webp`),
  itachiBrothers: `${MEDIA}/itachi-sasuke/art/brothers.webp`,
  front: `${MEDIA}/front.webp`,
  back: `${MEDIA}/back.webp`,
  lonely: `${MEDIA}/lonely.webp`,
  family: `${MEDIA}/family.webp`,
};

export const loadedAssets = {
  swing: [],
  sage: [],
  itachiHero: [],
  itachiBond: [],
  itachiBrothers: null,
  front: null,
  back: null,
  lonely: null,
  family: null,
  isLoaded: false,
};

function loadImage(src) {
  return new Promise((resolve) => {
    const img = new Image();
    img.decoding = 'async';
    img.onload = () => resolve(img);
    img.onerror = () => {
      resolve(null);
    };
    img.src = src;
  });
}

// Staged loader so playback can start quickly without waiting for all 220+ frames
export async function preloadAllAssets(onProgress) {
  if (loadedAssets.isLoaded) {
    onProgress?.(1);
    return loadedAssets;
  }

  // Phase 1: Load essential swing frames and key stills first
  let completed = 0;
  const total = SOURCES.swing.length + SOURCES.itachiHero.length + SOURCES.itachiBond.length + SOURCES.sage.length + 5;

  const tick = (img) => {
    completed += 1;
    onProgress?.(Math.min(1, completed / total));
    return img;
  };

  // Load swing, initial itachi hero, and stills
  const [swing, stills] = await Promise.all([
    Promise.all(SOURCES.swing.map((s) => loadImage(s).then(tick))),
    Promise.all([
      loadImage(SOURCES.front).then(tick),
      loadImage(SOURCES.back).then(tick),
      loadImage(SOURCES.lonely).then(tick),
      loadImage(SOURCES.family).then(tick),
      loadImage(SOURCES.itachiBrothers).then(tick),
    ]),
  ]);

  loadedAssets.swing = swing.filter(Boolean);
  loadedAssets.front = stills[0];
  loadedAssets.back = stills[1];
  loadedAssets.lonely = stills[2];
  loadedAssets.family = stills[3];
  loadedAssets.itachiBrothers = stills[4];

  // Phase 2: Stream in Itachi Hero, Itachi Bond, and Sage frames
  const [itachiHero, itachiBond, sage] = await Promise.all([
    Promise.all(SOURCES.itachiHero.map((s) => loadImage(s).then(tick))),
    Promise.all(SOURCES.itachiBond.map((s) => loadImage(s).then(tick))),
    Promise.all(SOURCES.sage.map((s) => loadImage(s).then(tick))),
  ]);

  loadedAssets.itachiHero = itachiHero.filter(Boolean);
  loadedAssets.itachiBond = itachiBond.filter(Boolean);
  loadedAssets.sage = sage.filter(Boolean);
  loadedAssets.isLoaded = true;

  onProgress?.(1);
  return loadedAssets;
}

export function drawCover(ctx, img, cw, ch, fx = 0.5, fy = 0.5, scale = 1) {
  if (!img) return;
  const ir = img.width / img.height;
  const cr = cw / ch;
  let w, h;
  if (ir > cr) {
    h = ch;
    w = ch * ir;
  } else {
    w = cw;
    h = cw / ir;
  }
  w *= scale;
  h *= scale;
  const x = (cw - w) * fx;
  const y = (ch - h) * fy;
  ctx.drawImage(img, x, y, w, h);
}
