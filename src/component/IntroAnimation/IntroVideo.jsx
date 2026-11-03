import React, { useEffect, useRef, useState, useCallback } from 'react';
import { loadedAssets, preloadAllAssets, drawCover, AUDIO_SRC } from '../../lib/narutoAssets';
import './IntroVideo.css';

const TOTAL_DURATION = 45.0; // 45 seconds total cinematic story

const CHAPTERS = [
  { id: 'origin', name: 'The Origin', kanji: '原点', start: 0, end: 9.0 },
  { id: 'touch', name: 'Brotherhood', kanji: '絆', start: 9.0, end: 18.0 },
  { id: 'bond', name: 'Architecture', kanji: '宿命', start: 18.0, end: 27.0 },
  { id: 'sage', name: 'Sage Awakening', kanji: '仙人', start: 27.0, end: 37.0 },
  { id: 'way', name: 'My Ninja Way', kanji: '忍道', start: 37.0, end: 45.0 },
];

export default function IntroVideo({ onComplete }) {
  const canvasRef = useRef(null);
  const audioRef = useRef(null);
  const animFrameRef = useRef(null);

  // States
  const [loadProgress, setLoadProgress] = useState(0);
  const [isAssetsReady, setIsAssetsReady] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [audioBlocked, setAudioBlocked] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [activeChapter, setActiveChapter] = useState(0);

  // Animation state refs
  const stateRef = useRef({
    startTime: null,
    pausedAt: 0,
    time: 0,
    rain: [],
    embers: [],
    feathers: [],
    leaves: [],
    lastFrameTime: performance.now(),
  });

  // Stop audio immediately & exit
  const handleSkip = useCallback(() => {
    if (isClosing) return;
    setIsClosing(true);

    // Stop audio immediately as requested
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }

    setTimeout(() => {
      onComplete?.();
    }, 500);
  }, [isClosing, onComplete]);

  // Preload assets & lock background scroll
  useEffect(() => {
    let cancelled = false;
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const audioEl = audioRef.current;

    preloadAllAssets((progress) => {
      if (!cancelled) setLoadProgress(progress);
    }).then(() => {
      if (!cancelled) {
        setIsAssetsReady(true);
      }
    });

    return () => {
      cancelled = true;
      document.body.style.overflow = originalOverflow;
      // Stop audio on unmount
      if (audioEl) {
        audioEl.pause();
        audioEl.currentTime = 0;
      }
    };
  }, []);

  // Keyboard shortcut: ESC to skip, Space to toggle play
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        handleSkip();
      } else if (e.key === ' ' && e.target === document.body) {
        e.preventDefault();
        setIsPlaying((p) => !p);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleSkip]);

  // Audio Playback & Browser Policy
  useEffect(() => {
    if (!isAssetsReady) return;
    const audio = audioRef.current;
    if (!audio) return;

    audio.volume = 0.65;

    const playSound = async () => {
      try {
        await audio.play();
        setAudioBlocked(false);
      } catch (err) {
        setAudioBlocked(true);
        audio.muted = true;
        audio.play().catch(() => {});
      }
    };

    if (isPlaying) {
      playSound();
    } else {
      audio.pause();
    }
  }, [isAssetsReady, isPlaying]);

  // Unblock audio on screen click
  const handleContainerClick = () => {
    if (audioBlocked && audioRef.current) {
      audioRef.current.muted = false;
      audioRef.current.play().then(() => {
        setAudioBlocked(false);
        setIsMuted(false);
      }).catch(() => {});
    }
  };

  const handleUnmuteClick = (e) => {
    e.stopPropagation();
    const audio = audioRef.current;
    if (audio) {
      audio.muted = false;
      audio.play().catch(() => {});
      setIsMuted(false);
      setAudioBlocked(false);
    }
  };

  const toggleSound = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (isMuted || audioBlocked) {
      audio.muted = false;
      audio.play().catch(() => {});
      setIsMuted(false);
      setAudioBlocked(false);
    } else {
      audio.muted = true;
      setIsMuted(true);
    }
  };

  const togglePlayPause = () => {
    setIsPlaying((prev) => {
      const next = !prev;
      const s = stateRef.current;
      const now = performance.now();
      if (!next) {
        s.pausedAt = s.time;
        if (audioRef.current) audioRef.current.pause();
      } else {
        s.startTime = now - s.pausedAt * 1000;
        if (audioRef.current && !isMuted) audioRef.current.play().catch(() => {});
      }
      return next;
    });
  };

  // Main Canvas Render Loop
  useEffect(() => {
    if (!isAssetsReady) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const s = stateRef.current;

    // Initialize particles
    if (s.rain.length === 0) {
      s.rain = Array.from({ length: 90 }, () => ({
        x: Math.random(),
        y: Math.random(),
        v: 0.75 + Math.random() * 0.85,
        l: 0.03 + Math.random() * 0.05,
      }));
    }
    if (s.embers.length === 0) {
      s.embers = Array.from({ length: 70 }, () => ({
        x: Math.random(),
        y: Math.random(),
        v: 0.05 + Math.random() * 0.12,
        r: 1 + Math.random() * 2.5,
        ph: Math.random() * Math.PI * 2,
      }));
    }
    if (s.feathers.length === 0) {
      s.feathers = Array.from({ length: 24 }, () => ({
        x: Math.random(),
        y: Math.random(),
        vx: (Math.random() - 0.4) * 0.04,
        vy: 0.03 + Math.random() * 0.05,
        rot: Math.random() * Math.PI * 2,
        vrot: (Math.random() - 0.5) * 1.5,
        size: 8 + Math.random() * 10,
      }));
    }
    if (s.leaves.length === 0) {
      s.leaves = Array.from({ length: 30 }, () => ({
        x: Math.random(),
        y: Math.random(),
        vx: 0.03 + Math.random() * 0.07,
        vy: 0.03 + Math.random() * 0.05,
        rot: Math.random() * Math.PI * 2,
        vrot: (Math.random() - 0.5) * 2.5,
        size: 6 + Math.random() * 8,
      }));
    }

    let running = true;

    const loop = (timestamp) => {
      if (!running) return;

      if (!s.startTime) {
        s.startTime = timestamp;
      }

      if (isPlaying) {
        s.time = (timestamp - s.startTime) / 1000;
      }

      // Auto stop and complete when duration finishes
      if (s.time >= TOTAL_DURATION) {
        handleSkip();
        return;
      }

      const dt = Math.min(0.05, (timestamp - s.lastFrameTime) / 1000);
      s.lastFrameTime = timestamp;

      setCurrentTime(s.time);

      // Chapter index
      if (s.time < 9.0) setActiveChapter(0);
      else if (s.time < 18.0) setActiveChapter(1);
      else if (s.time < 27.0) setActiveChapter(2);
      else if (s.time < 37.0) setActiveChapter(3);
      else setActiveChapter(4);

      // Canvas dimensions
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

      const time = s.time;

      // ========================================================
      // ACT 1: THE ORIGIN // SWING (0 - 9s)
      // ========================================================
      if (time < 9.0) {
        const swingFrames = loadedAssets.swing;
        if (swingFrames.length > 0) {
          const fps = 9.5;
          const span = swingFrames.length * 2 - 2;
          const step = Math.floor(time * fps) % span;
          const frameIndex = step < swingFrames.length ? step : span - step;
          const img = swingFrames[frameIndex];

          const scale = 1.0 + (time / 9.0) * 0.06;
          drawCover(ctx, img, w, h, 0.5, 0.45, scale);

          // Vignette
          const grad = ctx.createRadialGradient(w / 2, h * 0.45, w * 0.25, w / 2, h / 2, Math.max(w, h) * 0.7);
          grad.addColorStop(0, 'rgba(3, 4, 10, 0.15)');
          grad.addColorStop(1, 'rgba(2, 3, 8, 0.8)');
          ctx.fillStyle = grad;
          ctx.fillRect(0, 0, w, h);

          // Falling Rain
          ctx.strokeStyle = 'rgba(170, 200, 245, 0.25)';
          ctx.lineWidth = 1.2;
          ctx.beginPath();
          for (const d of s.rain) {
            d.y += d.v * dt;
            if (d.y > 1.1) {
              d.y = -0.1;
              d.x = Math.random() * 1.2;
            }
            const rx = d.x * w - d.y * h * 0.12;
            ctx.moveTo(rx, d.y * h);
            ctx.lineTo(rx - d.l * h * 0.12, (d.y + d.l) * h);
          }
          ctx.stroke();
        }
      }
      // ========================================================
      // ACT 2: ITACHI & SASUKE // THE TOUCH (9s - 18s)
      // ========================================================
      else if (time < 18.0) {
        const itachiFrames = loadedAssets.itachiHero;
        const progress = (time - 9.0) / 9.0;

        if (itachiFrames && itachiFrames.length > 0) {
          const frameIdx = Math.min(itachiFrames.length - 1, Math.floor(progress * (itachiFrames.length - 1)));
          const img = itachiFrames[frameIdx];

          const scale = 1.02 + progress * 0.05;
          drawCover(ctx, img, w, h, 0.5, 0.42, scale);

          // Sharingan crimson aura & vignette
          const crimsonGrad = ctx.createRadialGradient(w * 0.5, h * 0.42, w * 0.15, w / 2, h / 2, Math.max(w, h) * 0.75);
          crimsonGrad.addColorStop(0, 'rgba(0,0,0,0)');
          crimsonGrad.addColorStop(0.65, 'rgba(15, 4, 6, 0.35)');
          crimsonGrad.addColorStop(1, 'rgba(226, 56, 63, 0.22)');
          ctx.fillStyle = crimsonGrad;
          ctx.fillRect(0, 0, w, h);

          // Floating crow feathers
          ctx.save();
          ctx.fillStyle = 'rgba(18, 14, 22, 0.85)';
          for (const f of s.feathers) {
            f.x += f.vx * dt;
            f.y += f.vy * dt;
            f.rot += f.vrot * dt;
            if (f.y > 1.1) {
              f.y = -0.1;
              f.x = Math.random();
            }
            ctx.save();
            ctx.translate(f.x * w, f.y * h);
            ctx.rotate(f.rot);
            ctx.beginPath();
            ctx.ellipse(0, 0, f.size, f.size * 0.35, 0, 0, Math.PI * 2);
            ctx.fill();
            ctx.restore();
          }
          ctx.restore();
        }
      }
      // ========================================================
      // ACT 3: ITACHI & SASUKE // BROTHER BOND (18s - 27s)
      // ========================================================
      else if (time < 27.0) {
        const bondFrames = loadedAssets.itachiBond;
        const progress = (time - 18.0) / 9.0;

        if (bondFrames && bondFrames.length > 0) {
          const frameIdx = Math.min(bondFrames.length - 1, Math.floor(progress * (bondFrames.length - 1)));
          const img = bondFrames[frameIdx];

          const scale = 1.03 - progress * 0.03;
          drawCover(ctx, img, w, h, 0.5, 0.48, scale);

          // Deep purple/blue Susanoo vignette
          const bondGrad = ctx.createRadialGradient(w / 2, h * 0.45, w * 0.15, w / 2, h / 2, Math.max(w, h) * 0.75);
          bondGrad.addColorStop(0, 'rgba(0,0,0,0)');
          bondGrad.addColorStop(0.7, 'rgba(10, 8, 24, 0.45)');
          bondGrad.addColorStop(1, 'rgba(199, 125, 255, 0.18)');
          ctx.fillStyle = bondGrad;
          ctx.fillRect(0, 0, w, h);
        }
      }
      // ========================================================
      // ACT 4: SAGE MODE AWAKENING (27s - 37s)
      // ========================================================
      else if (time < 37.0) {
        const sageFrames = loadedAssets.sage;
        const progress = (time - 27.0) / 10.0;

        if (sageFrames && sageFrames.length > 0) {
          const frameIndex = Math.min(sageFrames.length - 1, Math.floor(progress * (sageFrames.length - 1)));
          const img = sageFrames[frameIndex];

          const scale = 1.02 + progress * 0.08;
          drawCover(ctx, img, w, h, 0.5, 0.36, scale);

          // Fiery orange chakra heat
          const heat = Math.min(1, progress * 1.3);
          const grad = ctx.createRadialGradient(w / 2, h * 0.42, w * 0.15, w / 2, h / 2, Math.max(w, h) * 0.75);
          grad.addColorStop(0, 'rgba(0,0,0,0)');
          grad.addColorStop(0.65, `rgba(22, 9, 3, ${0.4 + heat * 0.25})`);
          grad.addColorStop(1, `rgba(255, 122, 26, ${0.2 * heat})`);
          ctx.fillStyle = grad;
          ctx.fillRect(0, 0, w, h);

          // Rising Chakra Embers
          ctx.save();
          ctx.globalCompositeOperation = 'lighter';
          for (const e of s.embers) {
            e.y -= e.v * dt * (1 + heat * 1.6);
            if (e.y < -0.05) {
              e.y = 1.05;
              e.x = Math.random();
            }
            const ex = (e.x + 0.03 * Math.sin(time * 2 + e.ph)) * w;
            const ey = e.y * h;
            ctx.fillStyle = `rgba(255, ${120 + Math.round(90 * Math.sin(e.ph) ** 2)}, 40, ${0.7 * heat})`;
            ctx.beginPath();
            ctx.arc(ex, ey, e.r * (1 + heat * 0.5), 0, Math.PI * 2);
            ctx.fill();
          }
          ctx.restore();

          // White/Gold flash at eye ignition (~progress 0.75)
          if (progress >= 0.72 && progress <= 0.82) {
            const flashVal = 1 - Math.abs(progress - 0.77) / 0.05;
            ctx.fillStyle = `rgba(255, 235, 180, ${flashVal * 0.7})`;
            ctx.fillRect(0, 0, w, h);
          }
        }
      }
      // ========================================================
      // ACT 5: THE NINJA WAY & BONDS (37s - 45s)
      // ========================================================
      else {
        const progress = (time - 37.0) / 8.0;
        const { lonely, family, front } = loadedAssets;
        const baseImg = lonely || front;
        const revealImg = family || front;

        if (baseImg && revealImg) {
          drawCover(ctx, baseImg, w, h, 0.5, 0.5, 1.02);

          // Radial chakra burst
          const revealRad = Math.max(0, Math.min(1, (progress - 0.08) / 0.75));
          if (revealRad > 0) {
            ctx.save();
            ctx.beginPath();
            const maxR = Math.hypot(w, h);
            ctx.arc(w / 2, h * 0.52, revealRad * maxR, 0, Math.PI * 2);
            ctx.clip();
            drawCover(ctx, revealImg, w, h, 0.5, 0.5, 1.02);
            ctx.restore();

            // Glowing ring at shockwave border
            ctx.save();
            ctx.strokeStyle = `rgba(255, 185, 50, ${Math.max(0, 1 - revealRad)})`;
            ctx.lineWidth = 6;
            ctx.beginPath();
            ctx.arc(w / 2, h * 0.52, revealRad * maxR, 0, Math.PI * 2);
            ctx.stroke();
            ctx.restore();
          }

          // Swirling Konoha Leaves
          ctx.save();
          ctx.fillStyle = 'rgba(255, 122, 26, 0.8)';
          for (const leaf of s.leaves) {
            leaf.x += leaf.vx * dt;
            leaf.y += leaf.vy * dt;
            leaf.rot += leaf.vrot * dt;
            if (leaf.x > 1.1) leaf.x = -0.1;
            if (leaf.y > 1.1) leaf.y = -0.1;

            ctx.save();
            ctx.translate(leaf.x * w, leaf.y * h);
            ctx.rotate(leaf.rot);
            ctx.beginPath();
            ctx.ellipse(0, 0, leaf.size, leaf.size * 0.45, 0, 0, Math.PI * 2);
            ctx.fill();
            ctx.restore();
          }
          ctx.restore();

          // Ending smooth golden fade
          if (progress > 0.85) {
            const endFlash = (progress - 0.85) / 0.15;
            ctx.fillStyle = `rgba(255, 160, 40, ${endFlash * 0.85})`;
            ctx.fillRect(0, 0, w, h);
          }
        }
      }

      ctx.restore();
      animFrameRef.current = requestAnimationFrame(loop);
    };

    animFrameRef.current = requestAnimationFrame(loop);

    return () => {
      running = false;
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    };
  }, [isAssetsReady, isPlaying, handleSkip]);

  const formatTime = (t) => {
    const sec = Math.floor(t % 60);
    const min = Math.floor(t / 60);
    return `${min}:${sec < 10 ? '0' : ''}${sec}`;
  };

  const progressPct = Math.min(100, (currentTime / TOTAL_DURATION) * 100);

  return (
    <div
      className={`intro-video-container ${isClosing ? 'is-closing' : ''}`}
      onClick={handleContainerClick}
    >
      {/* Background Audio — Stops immediately when skipped or done */}
      <audio
        ref={audioRef}
        src={AUDIO_SRC}
        preload="auto"
        loop
      />

      {/* Loading Screen */}
      {!isAssetsReady && (
        <div className="intro-loader-backdrop">
          <div className="intro-loader-content">
            <div className="loader-spiral">🍥</div>
            <div className="loader-title">SUMMONING SHINOBI SAGA...</div>
            <div className="loader-progress-bar">
              <div
                className="loader-progress-fill"
                style={{ width: `${Math.round(loadProgress * 100)}%` }}
              />
            </div>
            <div className="loader-pct">{Math.round(loadProgress * 100)}%</div>
          </div>
        </div>
      )}

      {/* Unobstructed Fullscreen Video Canvas */}
      <canvas ref={canvasRef} className="intro-canvas" />

      {/* Sleek Top Header Bar (Letterbox) */}
      <header className="cinematic-header">
        <div className="header-left">
          <span className="live-pulse-dot" />
          <span className="shinobi-header-title">KRITIK RAJ // SHINOBI CHRONICLES</span>
        </div>

        <div className="header-right">
          {audioBlocked && (
            <button
              className="sound-unblock-pill"
              onClick={handleUnmuteClick}
              title="Click to enable Naruto OST"
            >
              <span className="pulse-icon">🔊</span>
              <span>ENABLE AUDIO</span>
            </button>
          )}

          {/* High-Visibility Skip Button */}
          <button
            className="intro-skip-btn"
            onClick={(e) => {
              e.stopPropagation();
              handleSkip();
            }}
            aria-label="Skip intro to portfolio"
          >
            <span>SKIP INTRO</span>
            <span className="skip-arrow">⏭</span>
            <kbd className="skip-kbd">ESC</kbd>
          </button>
        </div>
      </header>

      {/* Cinematic Lower-Third Anime Subtitles (Leaves Center Unblocked) */}
      <div className="cinematic-lower-third">
        {/* ACT 1: THE ORIGIN (0 - 9s) */}
        {activeChapter === 0 && (
          <div className="subtitle-card subtitle-act-1">
            <div className="subtitle-eyebrow">
              <span className="kanji-badge">原点</span>
              <span className="episode-tag">EPISODE 01 // THE SOLITARY SWING</span>
            </div>
            <h2 className="subtitle-headline">
              Every Great Shinobi Begins In The Quiet Hours.
            </h2>
            <p className="subtitle-narration">
              Curiosity ignited a fire. Long nights mastering algorithms, data structures, and
              building the foundation for enterprise systems.
            </p>
            <div className="subtitle-pills">
              <span className="pill">🎓 B.E. 2025 • M.B.M. University</span>
              <span className="pill">💻 Full-Stack Architect</span>
            </div>
          </div>
        )}

        {/* ACT 2: BROTHERHOOD & MENTORSHIP (9s - 18s) */}
        {activeChapter === 1 && (
          <div className="subtitle-card subtitle-act-2">
            <div className="subtitle-eyebrow">
              <span className="kanji-badge kanji-red">絆</span>
              <span className="episode-tag episode-red">EPISODE 02 // BROTHERHOOD &amp; MENTORSHIP</span>
            </div>
            <h2 className="subtitle-headline text-glow-red">
              The Uchiha Touch: Code Integrity &amp; Trust.
            </h2>
            <p className="subtitle-narration">
              "You don't become the Hokage to be acknowledged by everyone. The one who is
              acknowledged becomes the Hokage." Valuing peer review, shared wisdom, and building dependable code.
            </p>
            <div className="subtitle-pills">
              <span className="pill">👥 Collaboration &amp; Mentorship</span>
              <span className="pill">🛡 Clean Code &amp; Governance</span>
            </div>
          </div>
        )}

        {/* ACT 3: COMPLEX WORKFLOWS TO REALITY (18s - 27s) */}
        {activeChapter === 2 && (
          <div className="subtitle-card subtitle-act-3">
            <div className="subtitle-eyebrow">
              <span className="kanji-badge kanji-purple">宿命</span>
              <span className="episode-tag episode-purple">EPISODE 03 // ENTERPRISE ARCHITECTURE</span>
            </div>
            <h2 className="subtitle-headline text-glow-purple">
              Turning Intricate Workflows Into Scalable Realities.
            </h2>
            <p className="subtitle-narration">
              Transforming complex financial and audit workflows into high-concurrency microservices,
              robust Laravel backends, and responsive React applications.
            </p>
            <div className="subtitle-pills">
              <span className="pill">⚡ Lightning APIs: Node.js &amp; Express</span>
              <span className="pill">🏛 Susanoo Fortress: Spring Boot &amp; Laravel</span>
            </div>
          </div>
        )}

        {/* ACT 4: SAGE MODE AWAKENING (27s - 37s) */}
        {activeChapter === 3 && (
          <div className="subtitle-card subtitle-act-4">
            <div className="subtitle-eyebrow">
              <span className="kanji-badge kanji-orange">仙人</span>
              <span className="episode-tag episode-orange">EPISODE 04 // SAGE MODE SENSORY</span>
            </div>
            <h2 className="subtitle-headline text-glow-orange">
              Governed AI Integrations &amp; Enterprise Copilots.
            </h2>
            <p className="subtitle-narration">
              Harnessing Model Context Protocol (MCP) and state-of-the-art AI systems to elevate developer
              productivity and business workflows at Grant Thornton Bharat.
            </p>
            <div className="subtitle-pills">
              <span className="pill pill-gt">🍥 SOFTWARE ENGINEER @ GRANT THORNTON BHARAT</span>
              <span className="pill">🌿 Model Context Protocol (MCP)</span>
            </div>
          </div>
        )}

        {/* ACT 5: THE NINJA WAY (37s - 45s) */}
        {activeChapter === 4 && (
          <div className="subtitle-card subtitle-act-5">
            <div className="subtitle-eyebrow">
              <span className="kanji-badge kanji-gold">忍道</span>
              <span className="episode-tag episode-gold">EPISODE 05 // MY NINJA WAY (忍道)</span>
            </div>
            <h2 className="subtitle-headline text-glow-gold">
              Building Useful Things With A Little Magic.
            </h2>
            <p className="subtitle-narration">
              "Never backing down from complex engineering puzzles. Delivering thoughtful, human-centered digital impact."
            </p>
            <div className="finale-action-row">
              <button
                className="enter-portfolio-btn"
                onClick={(e) => {
                  e.stopPropagation();
                  handleSkip();
                }}
              >
                <span>ENTER SHINOBI PORTFOLIO</span>
                <span className="btn-icon">➔</span>
              </button>
              <span className="dattebayo-tag">🍥 DATTEBAYO! WELCOME TO MY WORLD.</span>
            </div>
          </div>
        )}
      </div>

      {/* Docked Bottom Video Controls Bar */}
      <footer className="cinematic-footer">
        {/* Scrubber Timeline */}
        <div
          className="timeline-track"
          onClick={(e) => {
            e.stopPropagation();
            const rect = e.currentTarget.getBoundingClientRect();
            const clickPos = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
            const newTime = clickPos * TOTAL_DURATION;
            const s = stateRef.current;
            s.time = newTime;
            s.startTime = performance.now() - newTime * 1000;
            if (audioRef.current) {
              audioRef.current.currentTime = (newTime * 1.2) % (audioRef.current.duration || 60);
            }
          }}
        >
          <div className="timeline-fill" style={{ width: `${progressPct}%` }} />
          <div className="timeline-head" style={{ left: `${progressPct}%` }} />

          {/* Chapter markers */}
          {CHAPTERS.map((ch, idx) => (
            <div
              key={ch.id}
              className={`chapter-marker ${activeChapter === idx ? 'is-active' : ''}`}
              style={{ left: `${(ch.start / TOTAL_DURATION) * 100}%` }}
              title={ch.name}
            >
              <span className="marker-dot" />
              <span className="marker-name">{ch.kanji} {ch.name}</span>
            </div>
          ))}
        </div>

        {/* Action Controls */}
        <div className="footer-controls-row">
          <div className="controls-left">
            <button
              className="control-icon-btn"
              onClick={(e) => {
                e.stopPropagation();
                togglePlayPause();
              }}
              aria-label={isPlaying ? 'Pause' : 'Play'}
              title={isPlaying ? 'Pause' : 'Play'}
            >
              {isPlaying ? '⏸' : '▶'}
            </button>

            <button
              className={`control-icon-btn sound-btn ${isMuted || audioBlocked ? 'is-muted' : ''}`}
              onClick={(e) => {
                e.stopPropagation();
                toggleSound();
              }}
              aria-label="Toggle Sound"
              title="Toggle Naruto Soundtrack"
            >
              {isMuted || audioBlocked ? '🔇' : '🔊'}
              {!isMuted && !audioBlocked && (
                <span className="sound-eq-bars" aria-hidden="true">
                  <i />
                  <i />
                  <i />
                </span>
              )}
            </button>

            <div className="time-display">
              <span className="current-t">{formatTime(currentTime)}</span>
              <span className="divider">/</span>
              <span className="total-t">{formatTime(TOTAL_DURATION)}</span>
            </div>

            <span className="track-name-tag">
              🎵 The Rising Fighting Spirit (Naruto OST)
            </span>
          </div>

          <div className="controls-right">
            <button
              className="instant-jump-btn"
              onClick={(e) => {
                e.stopPropagation();
                handleSkip();
              }}
            >
              <span>Skip to Portfolio</span>
              <span className="jump-icon">➔</span>
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}
