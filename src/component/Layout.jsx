import React, { useState } from 'react';
import Navbar from './Navbar/Navbar';
import Home from './Home/Home';
import SageShowcase from './SageShowcase/SageShowcase';
import About from './About/About';
import NinjaId from './Dashboard/NinjaId';
import Village from './Village/Village';
import Contact from './contact/Contact';
import Footer from './Footer/Foater';
import IntroVideo from './IntroAnimation/IntroVideo';
import ShinobiAudioPlayer from './AudioPlayer/ShinobiAudioPlayer';

export default function Layout() {
  // On page load, play the cinematic animation video
  const [showIntro, setShowIntro] = useState(true);

  const handleCompleteIntro = () => {
    // When intro finishes or is skipped, hide intro. Audio stops inside IntroVideo.
    setShowIntro(false);
  };

  const handleReplayIntro = () => {
    setShowIntro(true);
  };

  return (
    <>
      {/* Fullscreen Cinematic Anime Intro Video */}
      {showIntro && (
        <IntroVideo
          onComplete={handleCompleteIntro}
        />
      )}

      {/* Main Portfolio Website */}
      <div className={`portfolio-shell ${showIntro ? 'intro-active' : ''}`}>
        <Navbar onWatchIntro={handleReplayIntro} />
        <main>
          <Home onWatchIntro={handleReplayIntro} />
          <SageShowcase onWatchIntro={handleReplayIntro} />
          <About />
          <NinjaId />
          <Village />
          <Contact />
        </main>
        <Footer />

        {/* Floating Shinobi Audio Player (Plays only on manual user click) */}
        <ShinobiAudioPlayer
          onReplayIntro={handleReplayIntro}
        />
      </div>
    </>
  );
}
