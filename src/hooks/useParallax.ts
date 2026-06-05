import { useEffect } from 'react';

export default function useParallax() {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const handleScroll = () => {
      const scrolled = window.scrollY || window.pageYOffset;
      
      // Select main hero backgrounds
      const heroImage = document.querySelector('section img, .hero-image, .parallax-bg');
      if (heroImage instanceof HTMLElement) {
        heroImage.style.transform = `scale(1.05) translateY(${scrolled * 0.15}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
}
