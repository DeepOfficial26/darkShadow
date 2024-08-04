
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { smallHeroVideo, darkyyVideoFirst } from '../utils';
import Navbar from './Navbar'; // Import the Navbar component
import { useEffect, useState } from 'react';

const Hero = () => {
  const [videoSrc, setVideoSrc] = useState(window.innerWidth < 760 ? smallHeroVideo : darkyyVideoFirst);

  const handleVideoSrcSet = () => {
    if (window.innerWidth < 760) {
      setVideoSrc(smallHeroVideo);
    } else {
      setVideoSrc(darkyyVideoFirst);
    }
  };

  useEffect(() => {
    window.addEventListener('resize', handleVideoSrcSet);
    const cursor = document.querySelector('.custom-cursor');

    const moveCursor = (e) => {
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;
    };

    const clickCursor = () => {
      cursor.classList.add('active');
      setTimeout(() => cursor.classList.remove('active'), 150);
    };

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('click', clickCursor);

    return () => {
      window.removeEventListener('resize', handleVideoSrcSet);
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('click', clickCursor);
    };
  }, []);

  useGSAP(() => {
    gsap.fromTo(
      '#hero', 
      { opacity: 0, x: -100 }, // Starting properties
      { opacity: 1, x: 0, duration: 1.5, delay: 2 } // Ending properties and animation details
    );
    gsap.to('#cta', { opacity: 1, y: 230, delay: 2 });
  }, []);

  return (
    <div className="relative w-full h-screen bg-black overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="custom-cursor"></div>
        <video className="w-full h-full object-cover" autoPlay muted playsInline={true} loop key={videoSrc}>
          <source src={videoSrc} type="video/mp4" />
        </video>
      </div>
      <Navbar /> {/* Include the Navbar component here */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full">
        <p id="hero" className="hero-title text-white text-5xl md:text-7xl opacity-0">Find yourself in nature.</p>
        <div id="cta" className="flex flex-col items-center opacity-0 translate-y-20">
          <a href="#highlights" className="btn">Explore Darkyy</a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
