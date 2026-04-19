import { useState, useEffect } from 'react';
import type { Workshop } from './types';
import { useReveal } from './hooks/useReveal';
import Nav from './components/Nav';
import Hero from './components/Hero/index';
import ValuesBand from './components/ValuesBand';
import Workshops from './components/Workshops/index';
import Calendar from './components/Calendar';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Modal from './components/Modal';
import './index.css';

function App() {
  const [heroLayout] = useState<'centered' | 'split' | 'asymmetric'>('centered');
  const [picked, setPicked] = useState<Workshop | null>(null);

  useReveal();

  // Re-run reveal whenever picked changes (modal close re-exposes elements)
  useEffect(() => {
    if (!picked) {
      // small delay so DOM is visible again before observing
      const t = setTimeout(() => {
        const els = document.querySelectorAll('.reveal:not(.in)');
        const io = new IntersectionObserver(
          (entries) => {
            entries.forEach((e) => {
              if (e.isIntersecting) {
                e.target.classList.add('in');
                io.unobserve(e.target);
              }
            });
          },
          { threshold: 0.12, rootMargin: '0px 0px -60px 0px' }
        );
        els.forEach((el) => io.observe(el));
        return () => io.disconnect();
      }, 100);
      return () => clearTimeout(t);
    }
  }, [picked]);

  return (
    <div>
      <Nav />
      <Hero layout={heroLayout} />
      <ValuesBand />
      <Workshops onPick={setPicked} />
      <Calendar onPick={setPicked} />
      <FAQ />
      <Contact />
      <Footer />
      <Modal w={picked} onClose={() => setPicked(null)} />
    </div>
  );
}

export default App;
