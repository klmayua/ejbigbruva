"use client";

import React, { useEffect, useState } from 'react';
import Link from 'next/link';

export default function Page() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Reveal Observer
    const observerOptions = {
      threshold: 0.15,
      rootMargin: '0px 0px -50px 0px'
    };

    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.remove('opacity-0', 'translate-y-8');
          entry.target.classList.add('opacity-100', 'translate-y-0');
        }
      });
    }, observerOptions);

    // Initial hero reveal
    const heroTimeout = setTimeout(() => {
      const hero = document.getElementById('hero-content');
      if (hero) {
        hero.classList.remove('opacity-0', 'translate-y-8');
        hero.classList.add('opacity-100', 'translate-y-0');
      }
    }, 300);

    // Section reveal elements
    document.querySelectorAll('section > div, .space-y-32 > div').forEach(el => {
      if (!el.id) {
        el.classList.add('opacity-0', 'translate-y-8', 'transition-all', 'duration-1000');
        revealObserver.observe(el);
      }
    });

    // Parallax logic
    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      const heroImage = document.querySelector('section img') as HTMLImageElement;
      if (heroImage) {
        heroImage.style.transform = `scale(1.05) translateY(${scrolled * 0.1}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      clearTimeout(heroTimeout);
      revealObserver.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      {/* Page specific overrides to hide global nav/footer and define local classes */}
      <style dangerouslySetInnerHTML={{__html: `
        body {
            background-color: #0c0f0e !important;
            color: #e2e3e1;
            overflow-x: hidden;
            font-family: 'Inter', sans-serif;
        }
        .font-serif {
            font-family: 'Libre Caslon Text', serif;
        }
        .glass-header {
            backdrop-filter: blur(12px);
            -webkit-backdrop-filter: blur(12px);
        }
        .royal-gradient-text {
            background: linear-gradient(to bottom right, #ffe088, #e9c349);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }
        .editorial-line {
            height: 1px;
            background: linear-gradient(90deg, rgba(233, 195, 73, 0.5) 0%, rgba(233, 195, 73, 0) 100%);
        }
        ::-webkit-scrollbar {
            width: 6px;
        }
        ::-webkit-scrollbar-track {
            background: #0c0f0e;
        }
        ::-webkit-scrollbar-thumb {
            background: #333534;
            border-radius: 10px;
        }
        ::-webkit-scrollbar-thumb:hover {
            background: #444651;
        }
      `}} />

      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative min-h-[70vh] md:min-h-screen flex flex-col justify-end p-margin-mobile md:p-margin-desktop overflow-hidden">
          <div className="absolute inset-0 z-0 transition-all duration-1000 opacity-100 translate-y-0">
            <img 
              alt="Ejike Ibedilo Casual Portrait" 
              className="w-full h-full object-cover object-center scale-105" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDeInVieQFXF4d8UzMMykXuM5fPy-Mf9CbEKa3-dUuqw_sEUs3tNBHs_Jw8o517789ZUwK6Iczz6gG22MxX0_gqLSW3YYCxfiVkRt352wnzefGKNIPEr-NICF_aAuQlKLaklbJOnFr2CaKHKUpaqB3vyNe0iUWdMC2cK--x49Te4C8sXut7DpR3L8SeeNHB9_EqSkTTjr829edkDu6mzKIIcxy6AR4Fb9ADw-3wX53BftnhTi4hIMsfCLkmVd7x_QJ5rrasq9L-nzo" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest via-surface-container-lowest/60 to-transparent"></div>
          </div>
          <div className="relative z-10 max-w-4xl transition-all duration-1000 opacity-100 translate-y-0" id="hero-content">
            <span className="font-label-md text-secondary uppercase tracking-[0.3em] mb-6 block">The Architect of Sound</span>
            <h2 className="font-display-lg text-display-lg-mobile md:text-display-lg text-on-background mb-8 leading-tight">
              The Man Behind <br/><span className="italic font-normal royal-gradient-text">The Voice.</span>
            </h2>
            <div className="editorial-line w-32 mb-8"></div>
            <p className="font-body-lg text-on-surface-variant max-w-2xl leading-relaxed">
              Ejike Ibedilo, known across the continent as EJTheVoice, has redefined the landscape of modern broadcasting. With a career spanning decades, his journey is a testament to the power of authenticity in the digital age.
            </p>
          </div>
        </section>

        {/* Biography Grid */}
        <section className="px-margin-mobile md:px-margin-desktop py-16 md:py-32 bg-surface-container-lowest">
          <div className="max-w-container-max mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-gutter transition-all duration-1000 opacity-100 translate-y-0">
            {/* Left Column */}
            <div className="lg:col-span-7 space-y-32">
              {/* Early Years */}
              <div className="space-y-8 transition-all duration-1000 opacity-100 translate-y-0">
                <div className="flex items-center gap-4">
                  <span className="font-serif text-display-lg-mobile text-secondary/30">01</span>
                  <h3 className="font-headline-lg text-secondary">Early Years</h3>
                </div>
                <p className="font-body-lg text-on-surface-variant leading-relaxed">
                  Born from a heritage of storytellers, Ejike's fascination with the auditory medium began in the vibrant corridors of Lagos. Before the fame, there was a relentless curiosity about how sound shapes human emotion. This foundational period was defined by an obsession with the nuances of linguistic delivery and the rhythmic cadence of the African narrative.
                </p>
                <blockquote className="pl-8 border-l-2 border-secondary/30 italic font-serif text-headline-md text-on-surface py-2">
                  "A voice isn't just sound; it's a bridge between souls."
                </blockquote>
              </div>
              {/* Philosophy */}
              <div className="space-y-8 transition-all duration-1000 opacity-100 translate-y-0">
                <div className="flex items-center gap-4">
                  <span className="font-serif text-display-lg-mobile text-secondary/30">02</span>
                  <h3 className="font-headline-lg text-secondary">Broadcasting Philosophy</h3>
                </div>
                <p className="font-body-lg text-on-surface-variant leading-relaxed">
                  At the core of the EJTheVoice identity is a commitment to 'Institutional Intimacy.' This philosophy dictates that while the scale of delivery remains global and authoritative, the connection with every individual listener remains personal and profound.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 pt-4 md:pt-8">
                  <div className="p-8 bg-surface-container rounded-xl border border-outline-variant/10 hover:border-secondary/20 transition-colors">
                    <h4 className="font-label-md text-secondary uppercase mb-4">Authenticity</h4>
                    <p className="font-body-md text-on-surface-variant">The refusal to perform a character, choosing instead to reveal the man.</p>
                  </div>
                  <div className="p-8 bg-surface-container rounded-xl border border-outline-variant/10 hover:border-secondary/20 transition-colors">
                    <h4 className="font-label-md text-secondary uppercase mb-4">Precision</h4>
                    <p className="font-body-md text-on-surface-variant">Every syllable measured for impact and clarity of vision.</p>
                  </div>
                </div>
              </div>
            </div>
            {/* Right Column: Sticky Timeline */}
            <div className="lg:col-span-5">
              <div className="sticky top-32 p-10 bg-surface-container-low rounded-2xl border border-outline-variant/10 glass-header shadow-xl">
                <h3 className="font-headline-lg text-on-background mb-12">Career Journey</h3>
                <div className="space-y-12 relative">
                  <div className="absolute left-[11px] top-2 bottom-2 w-[1px] bg-outline-variant/30"></div>
                  <div className="relative pl-10">
                    <div className="absolute left-0 top-1.5 w-6 h-6 rounded-full bg-secondary border-4 border-surface-container-low"></div>
                    <span className="font-label-sm text-secondary uppercase tracking-widest mb-2 block">1998 â€” Genesis</span>
                    <p className="font-body-md text-on-surface">Initial forays into community radio, developing the signature resonance.</p>
                  </div>
                  <div className="relative pl-10">
                    <div className="absolute left-0 top-1.5 w-6 h-6 rounded-full bg-outline-variant border-4 border-surface-container-low"></div>
                    <span className="font-label-sm text-secondary uppercase tracking-widest mb-2 block">2005 â€” National Impact</span>
                    <p className="font-body-md text-on-surface">Transitioning to prime-time terrestrial broadcasting during a transformative era.</p>
                  </div>
                  <div className="relative pl-10">
                    <div className="absolute left-0 top-1.5 w-6 h-6 rounded-full bg-outline-variant border-4 border-surface-container-low"></div>
                    <span className="font-label-sm text-secondary uppercase tracking-widest mb-2 block">2012 â€” EJTheVoice Era</span>
                    <p className="font-body-md text-on-surface">Launching the global brand, expanding into digital syndication and institutional voice work.</p>
                  </div>
                </div>
                <div className="mt-16 pt-8 border-t border-outline-variant/20">
                  <p className="font-body-md text-on-surface-variant italic opacity-80">"Success is not a destination, but the consistency of one's evolution."</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Leadership & Legacy */}
        <section className="px-margin-mobile md:px-margin-desktop py-16 md:py-32 bg-surface">
          <div className="max-w-container-max mx-auto transition-all duration-1000 opacity-100 translate-y-0">
            <div className="text-center mb-24 opacity-0 translate-y-8 transition-all duration-1000">
              <h2 className="font-serif text-display-lg-mobile md:text-display-lg text-on-background mb-4">Leadership &amp; <span className="italic royal-gradient-text">Legacy</span></h2>
              <p className="font-body-lg text-on-surface-variant max-w-xl mx-auto">Creating a blueprint for the next generation of African creators and institutional leaders.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
              <div className="col-span-1 md:col-span-2 p-12 bg-surface-container-low rounded-3xl border border-outline-variant/10 flex flex-col justify-between group hover:border-secondary/30 transition-all duration-500">
                <div className="space-y-6">
                  <span className="material-symbols-outlined text-secondary text-5xl font-light">diversity_3</span>
                  <h3 className="font-headline-lg text-on-background">Mentorship Framework</h3>
                  <p className="font-body-lg text-on-surface-variant leading-relaxed">Developing the 'Voice Academy' initiative to empower young talent with the technical skills and psychological resilience needed for long-term career sustainability.</p>
                </div>
                <div className="mt-12 flex items-center text-secondary font-bold group-hover:translate-x-2 transition-transform cursor-pointer">
                  Learn more <span className="material-symbols-outlined ml-2">arrow_right_alt</span>
                </div>
              </div>
              <div className="col-span-1 p-12 bg-primary-container text-on-primary-container rounded-3xl flex flex-col justify-center text-center shadow-inner">
                <h4 className="font-label-md uppercase tracking-[0.2em] mb-4 opacity-70">Core Principle</h4>
                <p className="font-serif text-headline-lg italic">"Ego is the noise that drowns out the impact."</p>
              </div>
              <div className="col-span-1 p-12 bg-surface-container-high rounded-3xl border border-outline-variant/10 hover:bg-surface-container-highest transition-colors">
                <h3 className="font-headline-md text-secondary mb-6">Legacy Vision</h3>
                <p className="font-body-md text-on-surface-variant">To leave behind a centralized digital archive of the African voiceâ€”a repository of wisdom and high production standards.</p>
              </div>
              <div className="col-span-1 md:col-span-2 relative p-12 rounded-3xl overflow-hidden group border border-outline-variant/10">
                <div className="absolute inset-0 bg-surface-container-lowest">
                  <div className="absolute inset-0 bg-secondary/5 opacity-50"></div>
                  <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-surface-container-lowest to-transparent"></div>
                </div>
                <div className="relative z-10 space-y-6">
                  <h3 className="font-headline-lg text-on-background">Institutional Authority</h3>
                  <p className="font-body-lg text-on-surface-variant max-w-lg">Defining what it means to be a modern icon. It isn't about being seen everywhere; it's about being indispensable where it matters most.</p>
                </div>
              </div>
            </div>
          </div>
        </section>


      </main>


    </>
  );
}
