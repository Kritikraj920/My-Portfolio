import React, { useState, useEffect, useRef } from 'react';
import { AUDIO_SRC } from '../../lib/narutoAssets';
import './ShinobiAudioPlayer.css';

export default function ShinobiAudioPlayer({ onReplayIntro }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(0.45);
  const [isExpanded, setIsExpanded] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.volume = volume;
  }, [volume]);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      audio.play().then(() => {
        setIsPlaying(true);
      }).catch((err) => {
        console.warn('Audio play failed:', err);
      });
    }
  };

  const toggleMute = () => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const handleVolumeChange = (e) => {
    const val = parseFloat(e.target.value);
    setVolume(val);
    if (audioRef.current) {
      audioRef.current.volume = val;
      if (val === 0) setIsMuted(true);
      else setIsMuted(false);
    }
  };

  const handleReplayClick = () => {
    // If audio is playing in portfolio, pause it so intro plays cleanly
    if (audioRef.current) {
      audioRef.current.pause();
      setIsPlaying(false);
    }
    onReplayIntro?.();
  };

  return (
    <aside className="shinobi-audio-widget" aria-label="Naruto background audio player">
      <audio
        ref={audioRef}
        src={AUDIO_SRC}
        loop
        preload="auto"
      />

      <div className={`audio-pill ${isPlaying ? 'is-active' : ''} ${isExpanded ? 'is-expanded' : ''}`}>
        {/* Disc / Play Icon Button */}
        <button
          className={`disc-btn ${isPlaying ? 'spin' : ''}`}
          onClick={togglePlay}
          aria-label={isPlaying ? 'Pause music' : 'Play Naruto theme'}
          title={isPlaying ? 'Pause music' : 'Play The Rising Fighting Spirit'}
        >
          <span className="disc-emblem">🍥</span>
        </button>

        {/* Track Info & Equalizer */}
        <div className="track-details" onClick={() => setIsExpanded(!isExpanded)}>
          <div className="track-title-row">
            <span className="track-tag">BGM</span>
            <span className="track-name-text">The Rising Fighting Spirit</span>
          </div>
          <div className="track-status-row">
            <span className="track-author">{isPlaying ? 'Playing • Naruto OST' : 'Click 🍥 to Play OST'}</span>
            {isPlaying && !isMuted && (
              <span className="live-eq">
                <i />
                <i />
                <i />
                <i />
              </span>
            )}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="audio-actions">
          <button
            className="mini-icon-btn"
            onClick={toggleMute}
            aria-label={isMuted ? 'Unmute' : 'Mute'}
            title={isMuted ? 'Unmute' : 'Mute'}
          >
            {isMuted ? '🔇' : '🔊'}
          </button>

          <button
            className="replay-intro-pill"
            onClick={handleReplayClick}
            title="Replay Cinematic Video Intro"
          >
            <span>🎬 Intro</span>
          </button>

          <button
            className="expand-toggle-btn"
            onClick={() => setIsExpanded(!isExpanded)}
            aria-label={isExpanded ? 'Collapse player' : 'Expand player'}
          >
            {isExpanded ? '▼' : '▲'}
          </button>
        </div>

        {/* Expanded Controls Drawer */}
        {isExpanded && (
          <div className="expanded-drawer">
            <div className="volume-slider-row">
              <span className="vol-icon">{volume === 0 ? '🔈' : '🔊'}</span>
              <input
                type="range"
                min="0"
                max="1"
                step="0.05"
                value={volume}
                onChange={handleVolumeChange}
                className="volume-slider"
                aria-label="Volume slider"
              />
              <span className="vol-pct">{Math.round(volume * 100)}%</span>
            </div>

            <div className="drawer-btn-row">
              <button className="full-replay-btn" onClick={handleReplayClick}>
                <span>🎬 Watch 45s Intro Animation Again</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </aside>
  );
}
