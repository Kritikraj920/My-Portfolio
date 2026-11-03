import React, { useState, useEffect, useRef } from 'react';
import { loadedAssets, preloadAllAssets, drawCover } from '../../lib/narutoAssets';
import './SageShowcase.css';

export default function SageShowcase({ onWatchIntro }) {
  const [activeTab, setActiveTab] = useState('sage'); // 'sage' | 'itachi' | 'swing' | 'bonds'
  const [sageFrame, setSageFrame] = useState(28);
  const [itachiFrame, setItachiFrame] = useState(35);
  const [swingFrame, setSwingFrame] = useState(0);
  const [bondsRevealed, setBondsRevealed] = useState(0.5);
  const [isPlayingAuto, setIsPlayingAuto] = useState(true);

  const canvasRef = useRef(null);

  useEffect(() => {
    preloadAllAssets();
  }, []);

  // Canvas render based on activeTab
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    const render = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const w = canvas.clientWidth;
      const h = canvas.clientHeight;
      if (canvas.width !== Math.round(w * dpr) || canvas.height !== Math.round(h * dpr)) {
        canvas.width = Math.round(w * dpr);
        canvas.height = Math.round(h * dpr);
      }

      ctx.save();
      ctx.scale(dpr, dpr);
      ctx.clearRect(0, 0, w, h);

      if (activeTab === 'sage') {
        const frames = loadedAssets.sage;
        if (frames && frames.length > 0) {
          const idx = Math.min(frames.length - 1, Math.max(0, sageFrame));
          const img = frames[idx];
          if (img) {
            drawCover(ctx, img, w, h, 0.5, 0.35);

            if (idx > 30) {
              const heat = (idx - 30) / 28;
              const grad = ctx.createRadialGradient(w / 2, h * 0.45, w * 0.2, w / 2, h / 2, w * 0.7);
              grad.addColorStop(0, 'rgba(0,0,0,0)');
              grad.addColorStop(1, `rgba(255, 122, 26, ${heat * 0.35})`);
              ctx.fillStyle = grad;
              ctx.fillRect(0, 0, w, h);
            }
          }
        }
      } else if (activeTab === 'itachi') {
        const frames = loadedAssets.itachiHero;
        if (frames && frames.length > 0) {
          const idx = Math.min(frames.length - 1, Math.max(0, itachiFrame));
          const img = frames[idx];
          if (img) {
            drawCover(ctx, img, w, h, 0.5, 0.42);

            const crimsonGrad = ctx.createRadialGradient(w * 0.5, h * 0.42, w * 0.15, w / 2, h / 2, Math.max(w, h) * 0.75);
            crimsonGrad.addColorStop(0, 'rgba(0,0,0,0)');
            crimsonGrad.addColorStop(1, 'rgba(226, 56, 63, 0.2)');
            ctx.fillStyle = crimsonGrad;
            ctx.fillRect(0, 0, w, h);
          }
        }
      } else if (activeTab === 'swing') {
        const frames = loadedAssets.swing;
        if (frames && frames.length > 0) {
          const idx = Math.min(frames.length - 1, Math.max(0, swingFrame));
          const img = frames[idx];
          if (img) {
            drawCover(ctx, img, w, h, 0.5, 0.45);
          }
        }
      } else if (activeTab === 'bonds') {
        const { lonely, family, front } = loadedAssets;
        const baseImg = lonely || front;
        const revealImg = family || front;

        if (baseImg) {
          drawCover(ctx, baseImg, w, h, 0.5, 0.5);
        }
        if (revealImg && bondsRevealed > 0) {
          ctx.save();
          ctx.beginPath();
          const r = bondsRevealed * Math.hypot(w, h);
          ctx.arc(w / 2, h * 0.55, r, 0, Math.PI * 2);
          ctx.clip();
          drawCover(ctx, revealImg, w, h, 0.5, 0.5);
          ctx.restore();

          ctx.save();
          ctx.strokeStyle = 'rgba(255, 181, 46, 0.8)';
          ctx.lineWidth = 4;
          ctx.beginPath();
          ctx.arc(w / 2, h * 0.55, r, 0, Math.PI * 2);
          ctx.stroke();
          ctx.restore();
        }
      }

      ctx.restore();
    };

    render();
  }, [activeTab, sageFrame, itachiFrame, swingFrame, bondsRevealed]);

  // Auto playback loop
  useEffect(() => {
    if (!isPlayingAuto) return;

    let forward = true;
    const interval = setInterval(() => {
      if (activeTab === 'sage') {
        setSageFrame((prev) => {
          if (prev >= 57) forward = false;
          if (prev <= 0) forward = true;
          return forward ? prev + 1 : prev - 1;
        });
      } else if (activeTab === 'itachi') {
        setItachiFrame((prev) => {
          if (prev >= 69) forward = false;
          if (prev <= 0) forward = true;
          return forward ? prev + 1 : prev - 1;
        });
      } else if (activeTab === 'swing') {
        setSwingFrame((prev) => {
          if (prev >= 21) forward = false;
          if (prev <= 0) forward = true;
          return forward ? prev + 1 : prev - 1;
        });
      }
    }, activeTab === 'sage' ? 85 : activeTab === 'itachi' ? 90 : 110);

    return () => clearInterval(interval);
  }, [activeTab, isPlayingAuto]);

  return (
    <section className="content-section section-wrap shinobi-showcase-section" id="shinobi-canvas">
      <div className="section-heading">
        <div className="kicker-row">
          <span className="section-kicker">🍥 INTERACTIVE SHINOBI THEATER</span>
          <button className="watch-intro-mini-btn" onClick={onWatchIntro}>
            <span>🎬 Watch 45s Cinematic Story Intro</span>
            <span className="arrow-icon">↗</span>
          </button>
        </div>
        <h2>
          Awakening Sage Mode: <span className="gradient-text">Interactive Shinobi Journey</span>
        </h2>
        <p className="section-subtitle">
          Experience the 58-frame Sage Mode sequence, Itachi &amp; Sasuke&apos;s brotherhood touch (70 frames),
          the iconic swing, and the bond transformation that fuel my engineering ethos.
        </p>
      </div>

      <div className="showcase-card glass-panel">
        {/* Tab Controls */}
        <div className="showcase-tabs-bar">
          <div className="tabs-group">
            <button
              className={`showcase-tab ${activeTab === 'sage' ? 'is-active' : ''}`}
              onClick={() => setActiveTab('sage')}
            >
              <span className="tab-icon">🔥</span>
              <span>Sage Mode Awakening (58 Frames)</span>
            </button>
            <button
              className={`showcase-tab ${activeTab === 'itachi' ? 'is-active' : ''}`}
              onClick={() => setActiveTab('itachi')}
            >
              <span className="tab-icon">👁</span>
              <span>Itachi &amp; Sasuke Touch (70 Frames)</span>
            </button>
            <button
              className={`showcase-tab ${activeTab === 'swing' ? 'is-active' : ''}`}
              onClick={() => setActiveTab('swing')}
            >
              <span className="tab-icon">🌧</span>
              <span>The Solitary Swing (22 Frames)</span>
            </button>
            <button
              className={`showcase-tab ${activeTab === 'bonds' ? 'is-active' : ''}`}
              onClick={() => setActiveTab('bonds')}
            >
              <span className="tab-icon">✨</span>
              <span>The Bonds Transformation</span>
            </button>
          </div>

          <div className="tab-actions">
            {activeTab !== 'bonds' && (
              <button
                className="auto-play-toggle"
                onClick={() => setIsPlayingAuto(!isPlayingAuto)}
              >
                {isPlayingAuto ? '⏸ Pause Loop' : '▶ Auto Play'}
              </button>
            )}
          </div>
        </div>

        {/* Display Canvas Frame */}
        <div className="canvas-viewport">
          <div className="canvas-header-bar">
            <div className="terminal-dots">
              <span className="dot dot-red" />
              <span className="dot dot-yellow" />
              <span className="dot dot-green" />
            </div>
            <span className="canvas-title">
              {activeTab === 'sage' && `media/sage/frame_${String(sageFrame + 1).padStart(3, '0')}.webp • Eye Ignition & Chakra Flow`}
              {activeTab === 'itachi' && `media/itachi-sasuke/hero/f_${String(itachiFrame + 1).padStart(3, '0')}.webp • Forehead Poke & Mentorship Bond`}
              {activeTab === 'swing' && `media/swing/frame_${String(swingFrame + 1).padStart(3, '0')}.webp • Childhood Origin Memory`}
              {activeTab === 'bonds' && `media/bonds • Lonely to Family Radial Burst (${Math.round(bondsRevealed * 100)}%)`}
            </span>
            <span className="live-tag">CANVAS SHINOBI 60FPS</span>
          </div>

          <div className="canvas-wrapper">
            <canvas ref={canvasRef} className="interactive-canvas" />
          </div>

          {/* Interactive Scrubbers */}
          <div className="canvas-scrubber-dock">
            {activeTab === 'sage' && (
              <div className="scrubber-control">
                <span className="scrub-label">Scrub Sage Mode Chakra:</span>
                <input
                  type="range"
                  min="0"
                  max="57"
                  value={sageFrame}
                  onChange={(e) => {
                    setIsPlayingAuto(false);
                    setSageFrame(parseInt(e.target.value, 10));
                  }}
                  className="showcase-slider"
                />
                <span className="frame-count">Frame {sageFrame + 1} / 58</span>
              </div>
            )}

            {activeTab === 'itachi' && (
              <div className="scrubber-control">
                <span className="scrub-label">Scrub Itachi Touch Sequence:</span>
                <input
                  type="range"
                  min="0"
                  max="69"
                  value={itachiFrame}
                  onChange={(e) => {
                    setIsPlayingAuto(false);
                    setItachiFrame(parseInt(e.target.value, 10));
                  }}
                  className="showcase-slider"
                />
                <span className="frame-count">Frame {itachiFrame + 1} / 70</span>
              </div>
            )}

            {activeTab === 'swing' && (
              <div className="scrubber-control">
                <span className="scrub-label">Scrub Swing Sequence:</span>
                <input
                  type="range"
                  min="0"
                  max="21"
                  value={swingFrame}
                  onChange={(e) => {
                    setIsPlayingAuto(false);
                    setSwingFrame(parseInt(e.target.value, 10));
                  }}
                  className="showcase-slider"
                />
                <span className="frame-count">Frame {swingFrame + 1} / 22</span>
              </div>
            )}

            {activeTab === 'bonds' && (
              <div className="scrubber-control">
                <span className="scrub-label">Reveal Bonds of Friendship:</span>
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.02"
                  value={bondsRevealed}
                  onChange={(e) => setBondsRevealed(parseFloat(e.target.value))}
                  className="showcase-slider"
                />
                <span className="frame-count">{Math.round(bondsRevealed * 100)}% Revealed</span>
              </div>
            )}
          </div>
        </div>

        {/* Narrative Context Card */}
        <div className="showcase-narrative">
          <div className="narrative-left">
            <span className="narrative-badge">🍥 SHINOBI PHILOSOPHY</span>
            <h3>Unshakable Will &amp; Deep Technical Discipline</h3>
            <p>
              From Itachi's selfless dedication to Naruto's relentless perseverance, I treat software engineering
              with deep craftsmanship — architecting resilient enterprise automation at Grant Thornton Bharat,
              AI Copilots, and scalable full-stack apps.
            </p>
          </div>
          <div className="narrative-right">
            <button className="play-intro-callout-btn" onClick={onWatchIntro}>
              <span className="play-icon">▶</span>
              <div>
                <strong>Play Full 45s Anime Intro Video</strong>
                <small>Naruto OST + Swing + Itachi Touch + Sage Awakening</small>
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
