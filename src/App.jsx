import { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Features from './components/Features';
import Footer from './components/Footer';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import Model from './components/Model';
import Navbar from './components/Navbar';
import Highlights from './components/highlights';
// Import CSS for custom cursor

const App = () => {
  useEffect(() => {
    const cursor = document.querySelector('.custom-cursor');

    const moveCursor = (e) => {
      if (cursor) {
        cursor.style.left = `${e.clientX}px`;
        cursor.style.top = `${e.clientY}px`;
      }
    };

    const clickCursor = () => {
      if (cursor) {
        cursor.classList.add('active');
        setTimeout(() => cursor.classList.remove('active'), 150);
      }
    };

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('click', clickCursor);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('click', clickCursor);
    };
  }, []);

  return (
    <Router>
      <Navbar />
      <div className="relative min-h-screen bg-black">
        <div className="custom-cursor"></div> {/* Custom cursor element */}
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/explore-darkyy" element={<Highlights />} />
          <Route path="/merchandize" element={<Model />} />
          <Route path="/experience" element={<HowItWorks />} />
          <Route path="/our-story" element={<Features />} />
          <Route path="/projects" element={<Model />} />
          <Route path="/contacts" element={<Footer />} />
          {/* Add additional routes here */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
