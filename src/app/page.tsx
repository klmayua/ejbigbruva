"use client";

import React, { useEffect } from 'react';
import Link from 'next/link';

export default function Page() {
  const [scrolled, setScrolled] = React.useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const cursorHighlight = document.createElement('div');
      cursorHighlight.style.position = 'fixed';
      cursorHighlight.style.width = '250px';
      cursorHighlight.style.height = '250px';
      cursorHighlight.style.borderRadius = '50%';
      cursorHighlight.style.background = 'radial-gradient(circle, rgba(233,195,73,0.03) 0%, transparent 70%)';
      cursorHighlight.style.left = (e.clientX - 125) + 'px';
      cursorHighlight.style.top = (e.clientY - 125) + 'px';
      cursorHighlight.style.pointerEvents = 'none';
      cursorHighlight.style.zIndex = '9999';
      document.body.appendChild(cursorHighlight);
      
      setTimeout(() => {
        cursorHighlight.remove();
      }, 60);
    };

    document.addEventListener('mousemove', handleMouseMove);
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <>
      {/* Page specific overrides to hide global nav/footer and define local classes */}
      <style dangerouslySetInnerHTML={{__html: `
        body > nav { display: none !important; }
        body > footer { display: none !important; }
        
        body {
            background-color: #121413 !important;
            color: #e2e3e1;
            scroll-behavior: smooth;
        }
        .glass-panel {
            background: rgba(26, 28, 27, 0.7);
            backdrop-filter: blur(12px);
            border: 1px solid rgba(233, 195, 73, 0.15);
        }
        .hero-gradient {
            background: linear-gradient(to right, #121413 30%, transparent 100%);
        }
        .vertical-text {
            writing-mode: vertical-rl;
            text-orientation: mixed;
        }
        ::-webkit-scrollbar {
            width: 8px;
        }
        ::-webkit-scrollbar-track {
            background: #0c0f0e;
        }
        ::-webkit-scrollbar-thumb {
            background: #333534;
            border-radius: 4px;
        }
        ::-webkit-scrollbar-thumb:hover {
            background: #444651;
        }
        @keyframes slow-wave-0 {
            0% { height: 15px; }
            100% { height: 50px; }
        }
        @keyframes slow-wave-1 {
            0% { height: 25px; }
            100% { height: 60px; }
        }
        @keyframes slow-wave-2 {
            0% { height: 10px; }
            100% { height: 45px; }
        }
        .nav-link {
            position: relative;
            transition: color 0.3s ease, transform 0.3s ease;
        }
        .nav-link:hover {
            color: #e9c349 !important;
            transform: translateY(-1px);
            text-shadow: 0 0 10px rgba(233, 195, 73, 0.3);
        }
        .nav-link::after {
            content: '';
            position: absolute;
            width: 100%;
            transform: scaleX(0);
            height: 2px;
            bottom: -4px;
            left: 0;
            background-color: #e9c349;
            transform-origin: bottom right;
            transition: transform 0.25s ease-out;
        }
        .nav-link:hover::after {
            transform: scaleX(1);
            transform-origin: bottom left;
        }
        .nav-link-active {
            position: relative;
            color: #e9c349 !important;
        }
        .nav-link-active::after {
            content: '';
            position: absolute;
            width: 100%;
            height: 2px;
            bottom: -4px;
            left: 0;
            background-color: #e9c349;
        }
        .cta-gold {
            transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .cta-gold:hover {
            transform: translateY(-2px) scale(1.02);
            box-shadow: 0 10px 20px rgba(233, 195, 73, 0.25);
            filter: brightness(1.15);
        }
        .cta-gold:active {
            transform: translateY(0) scale(0.98);
        }
      `}} />

      {/* TopNavBar */}
      <nav className={`fixed left-1/2 -translate-x-1/2 z-[100] w-[90vw] md:w-[78vw] max-w-[1240px] flex justify-between items-center px-8 rounded-full bg-[#050505]/82 backdrop-blur-[16px] border border-[#d4af37]/18 shadow-[0_12px_40px_rgba(0,0,0,0.35)] transition-all duration-300 ${scrolled ? 'top-3 h-[68px]' : 'top-6 h-[80px]'}`}>
        <div className="flex items-center pl-7 md:pl-8">
          <Link href="/">
            <img 
              alt="BIGBRUVA Logo" 
              className={`w-auto object-contain cursor-pointer transition-all duration-300 ${scrolled ? 'h-[36px]' : 'h-[44px]'}`} 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDzoQachYWqkheryCjc0oj1MFa-C1ZPMJ7iMTX-2-IDj7U9vodjQkBDg6bzs8DGk-WmboILzxQlYaQcA2aHbUEYZcJRksEek2fr3QWgIrtR-1uivfoHhCgtW90_f6_8W4NQYgsLsKZ0qSQin7U0OqkqxqrlplbfTuEt6pFWYYQmG4aDRV2AFdu5ZJyhZyKPZTRJaMbuic6zpM-OG6I9l73dLr-tV4GAyFoG0xg_-5hrsvTea3SIsK9OnWGI5gPT5RFgnnA0E5N6ZZU" 
            />
          </Link>
        </div>
        <div className="hidden md:flex gap-[36px] items-center">
          <Link className="font-sans text-[16px] font-medium nav-link-active cursor-pointer" href="/">Home</Link>
          <Link className="font-sans text-[16px] font-medium text-on-surface-variant nav-link cursor-pointer" href="/about">About</Link>
          <Link className="font-sans text-[16px] font-medium text-on-surface-variant nav-link cursor-pointer" href="/legacy">Legacy</Link>
          <Link className="font-sans text-[16px] font-medium text-on-surface-variant nav-link cursor-pointer" href="/media">Media</Link>
          <Link className="font-sans text-[16px] font-medium text-on-surface-variant nav-link cursor-pointer" href="/voice">Voice</Link>
          <Link className="font-sans text-[16px] font-medium text-on-surface-variant nav-link cursor-pointer" href="/events">Events</Link>
        </div>
        <div className="flex items-center">
          <Link href="/contact" className={`bg-gradient-to-r from-[#e9c349] via-[#d4af37] to-[#af8d11] text-[#3c2f00] font-sans text-[14px] font-bold tracking-[0.05em] rounded-full transition-all cursor-pointer shadow-lg flex items-center gap-[10px] shrink-0 cta-gold ${scrolled ? 'h-[44px] px-[22px]' : 'h-[50px] px-[28px]'}`}>
            <svg className="w-[18px] h-[18px] shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
              <line x1="16" y1="2" x2="16" y2="6"></line>
              <line x1="8" y1="2" x2="8" y2="6"></line>
              <line x1="3" y1="10" x2="21" y2="10"></line>
            </svg>
            Book a Conversation
          </Link>
        </div>
      </nav>
 
      <main className="w-full relative">
        {/* Hero Section */}
        <section className="relative min-h-[92vh] flex items-center justify-start py-20 md:py-24 overflow-hidden">
          <div className="absolute inset-0 z-[1] overflow-hidden">
            {/* Centered Portrait Image */}
            <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-full md:w-[70%] z-[1]">
              <img 
                alt="Ejike Ebidilo in traditional Agbada" 
                className="w-full h-full object-cover" 
                src="/images/EJ_Agbada_01.jpeg" 
                style={{ objectPosition: 'center 20%', filter: 'brightness(0.85) contrast(1.18) saturate(1.04)' }}
              />
              {/* Internal vignette for image edge smoothing */}
              <div className="absolute inset-0 z-[2] pointer-events-none shadow-[inset_0_0_80px_rgba(0,0,0,0.5)]"></div>
            </div>

            {/* Horizontal & Vertical Fading Overlays */}
            <div className="absolute inset-y-0 left-0 w-full md:w-[45%] z-[2] pointer-events-none bg-gradient-to-r from-[#121413] via-[#121413]/90 to-transparent"></div>
            <div className="absolute inset-y-0 right-0 w-full md:w-[45%] z-[2] pointer-events-none bg-gradient-to-l from-[#121413] via-[#121413]/90 to-transparent"></div>
            <div className="absolute inset-x-0 top-0 h-[20vh] z-[2] pointer-events-none bg-gradient-to-b from-[#121413] to-transparent"></div>
            <div className="absolute inset-x-0 bottom-0 h-[25vh] z-[2] pointer-events-none bg-gradient-to-t from-[#0c0f0e] via-[#0c0f0e]/40 to-transparent"></div>

            {/* Subtle background glow */}
            <div className="absolute top-[30%] left-[10%] w-[350px] h-[350px] rounded-full bg-secondary/3 blur-[90px] pointer-events-none z-[3]"></div>
            <div className="absolute inset-0 z-[4] pointer-events-none shadow-[inset_0_0_100px_rgba(0,0,0,0.6)]"></div>
          </div>

          {/* Floating Glass Story Card */}
          <div className="relative z-10 px-margin-mobile md:pl-[8vw] max-w-full md:max-w-[620px] mt-[10vh] md:mt-[6vh]">
            <div className="backdrop-blur-[24px] bg-[#161817]/85 border border-[#e9c349]/20 rounded-[28px] p-8 md:p-10 shadow-[0_24px_50px_rgba(0,0,0,0.5)] flex flex-col items-start w-full">
              <h1 className="font-display-lg text-[36px] md:text-[46px] font-medium text-on-background mb-5 leading-[1.1] tracking-tight text-left">
                THE ORIGINAL <br/> <span className="text-secondary italic">BIG BROTHER.</span>
              </h1>
              
              <p className="font-headline-md text-[18px] md:text-[24px] text-on-surface-variant mb-4 leading-[1.4] text-left">
                Broadcaster. Storyteller. Mentor. <br/>
                <span className="text-on-background font-bold">Voice of Generations.</span>
              </p>

              {/* Premium Legacy Indicator */}
              <div className="flex items-center gap-2 mb-5">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-secondary"></span>
                </span>
                <span className="text-secondary font-sans text-xs md:text-sm font-semibold uppercase tracking-widest leading-none">
                  40+ Years Broadcasting Excellence
                </span>
              </div>

              <p className="font-body-lg text-[16px] md:text-[18px] text-on-surface-variant/80 mb-8 leading-[1.7] text-left">
                For over four decades, Ejike Ebidilo has been the resonance behind Nigeria's most iconic broadcasts, shaping the cultural conversation and mentoring the architects of modern media.
              </p>

              <div className="flex flex-wrap gap-4 w-full">
                <Link href="/contact" className="h-[54px] px-[28px] bg-secondary text-[#121413] font-semibold rounded-full flex items-center justify-center gap-2 shadow-xl cta-gold text-sm md:text-base">
                  <svg className="w-[18px] h-[18px] shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                    <line x1="16" y1="2" x2="16" y2="6"></line>
                    <line x1="8" y1="2" x2="8" y2="6"></line>
                    <line x1="3" y1="10" x2="21" y2="10"></line>
                  </svg>
                  Book a Conversation
                </Link>
                <Link href="/media" className="h-[54px] px-[28px] border border-[#d6aa38]/35 text-secondary bg-black/35 backdrop-blur-[8px] font-semibold rounded-full flex items-center justify-center gap-2 shadow-xl cta-gold text-sm md:text-base">
                  <svg className="w-[18px] h-[18px] shrink-0" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                  Watch Legacy Reel
                </Link>
              </div>
            </div>
          </div>

          {/* Animated gold audio-wave motif */}
          <div className="absolute bottom-12 right-12 z-10 flex items-end gap-1.5 h-[60px] opacity-20 pointer-events-none select-none">
            {[20, 45, 30, 60, 40, 25, 50, 35, 55, 30].map((height, i) => (
              <div 
                key={i} 
                className="w-[3px] bg-secondary rounded-full"
                style={{
                  height: `${height}px`,
                  animation: `slow-wave-${i % 3} ${4 + (i % 3) * 1.2}s ease-in-out infinite alternate`,
                  animationDelay: `${i * 0.15}s`
                }}
              />
            ))}
          </div>

          {/* Vertical Text */}
          <div className="absolute right-margin-desktop bottom-1/4 hidden xl:block">
            <div className="vertical-text font-label-sm text-secondary/40 tracking-[0.6em] uppercase pointer-events-none select-none">
              EJIKE EBIDILO • SINCE 1978
            </div>
          </div>
        </section>

        {/* Legacy Numbers Section */}
        <section className="py-12 px-margin-mobile md:px-margin-desktop bg-surface-container-lowest">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-gutter border-y border-outline-variant/20 py-20">
            <div className="text-center group">
              <div className="font-display-lg text-headline-lg md:text-display-lg text-secondary mb-2 group-hover:scale-110 transition-transform duration-500">45+</div>
              <div className="font-label-sm text-on-surface-variant uppercase tracking-widest">Years of Excellence</div>
            </div>
            <div className="text-center group">
              <div className="font-display-lg text-headline-lg md:text-display-lg text-secondary mb-2 group-hover:scale-110 transition-transform duration-500">5000+</div>
              <div className="font-label-sm text-on-surface-variant uppercase tracking-widest">Hours On Air</div>
            </div>
            <div className="text-center group">
              <div className="font-display-lg text-headline-lg md:text-display-lg text-secondary mb-2 group-hover:scale-110 transition-transform duration-500">120+</div>
              <div className="font-label-sm text-on-surface-variant uppercase tracking-widest">Protégés Mentored</div>
            </div>
            <div className="text-center group">
              <div className="font-display-lg text-headline-lg md:text-display-lg text-secondary mb-2 group-hover:scale-110 transition-transform duration-500">15</div>
              <div className="font-label-sm text-on-surface-variant uppercase tracking-widest">National Awards</div>
            </div>
          </div>
        </section>

        {/* Featured Story Section */}
        <section className="py-32 px-margin-mobile md:px-margin-desktop bg-surface">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
            <div className="md:col-span-7 flex flex-col justify-center">
              <span className="font-label-md text-secondary mb-6 block uppercase tracking-widest">Featured Chronicle</span>
              <h2 className="font-display-lg text-headline-lg md:text-display-lg text-on-background mb-10 leading-tight">
                A Life Behind The <br/> <span className="text-secondary italic">Microphone.</span>
              </h2>
              <div className="space-y-6 font-body-lg text-on-surface-variant/90 leading-relaxed max-w-2xl">
                <p>
                  From the early days of radio waves reaching across the federation to the digital frontier of global streaming, Ejike's voice has been a constant companion to millions.
                </p>
                <p>
                  His approach to storytelling transcends mere reporting; it is an art form rooted in deep empathy, linguistic precision, and an unwavering commitment to the truth. Whether narrating a nation's history or guiding a new talent, the "Big Brother" archetype is felt in every syllable.
                </p>
              </div>
              <div className="mt-12">
                <a className="inline-flex items-center gap-4 text-secondary font-label-md group hover:gap-6 transition-all" href="#">
                  READ THE FULL ARCHIVE
                  <span className="material-symbols-outlined" data-icon="arrow_forward">arrow_forward</span>
                </a>
              </div>
            </div>
            <div className="md:col-span-5 relative">
              <div className="aspect-[3/4] bg-surface-container overflow-hidden rounded shadow-2xl relative">
                <img 
                  alt="Ejike Ebidilo in a casual portrait" 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" 
                  src="/images/EJ_casual_01.jpeg" 
                />
                <div className="absolute bottom-6 left-6 p-6 glass-panel max-w-[260px] rounded shadow-xl">
                  <p className="font-label-sm text-secondary italic mb-2 tracking-tight">Internal Monologue</p>
                  <p className="font-body-md text-on-surface">"The voice is the soul's first draft of reality."</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Quote Section */}
        <section className="py-20 md:py-24 bg-surface-container-low overflow-hidden relative">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(214,170,56,0.03)_0%,transparent_70%)] pointer-events-none"></div>
          <div className="max-w-5xl mx-auto px-margin-mobile md:px-margin-desktop text-center relative z-10">
            <span className="material-symbols-outlined text-secondary text-5xl mb-6 opacity-30 block" data-icon="format_quote">format_quote</span>
            <blockquote className="font-display-lg text-[22px] md:text-[32px] text-on-background mb-8 italic leading-snug max-w-4xl mx-auto">
              "Great broadcasting isn't about the volume of your voice, but the depth of the silence you command between your words."
            </blockquote>
            <div className="h-0.5 w-16 bg-secondary/40 mx-auto mb-6"></div>
            <cite className="font-label-sm text-secondary/70 tracking-[0.3em] uppercase not-italic text-xs">Ejike Ebidilo, 2024</cite>
          </div>
        </section>

        {/* Legacy Media Grid */}
        <section className="pt-16 pb-10 px-margin-mobile md:px-margin-desktop">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 gap-6">
            <div>
              <span className="font-label-md text-secondary mb-2 block uppercase tracking-widest text-xs font-semibold">
                Media Repository <span className="text-on-surface-variant/40 ml-2 font-normal text-sm">(142 Archived Items)</span>
              </span>
              <h2 className="font-headline-lg text-[28px] md:text-[36px] text-on-background mb-4 font-bold tracking-tight">Echoes of Influence</h2>
              <p className="font-sans text-[15px] text-on-surface-variant/75 max-w-2xl leading-relaxed">
                A curated selection of Ejike Ebidilo's broadcast legacy, historic masterclasses, and keynote addresses spanning four decades of media excellence.
              </p>
            </div>
            <Link href="/media" className="font-label-md text-on-surface-variant hover:text-secondary transition-colors border-b border-transparent hover:border-secondary pb-1 uppercase tracking-widest text-xs font-semibold outline-none focus-visible:ring-2 focus-visible:ring-secondary rounded">View All Archives</Link>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap gap-x-8 gap-y-3 border-b border-outline-variant/10 pb-4 mb-10 text-[15px] font-semibold text-on-surface-variant">
            <span className="text-secondary relative after:content-[''] after:absolute after:w-full after:h-[2px] after:bottom-[-17px] after:left-0 after:bg-secondary cursor-pointer">All Broadcasts</span>
            <span className="hover:text-secondary cursor-pointer transition-colors pb-1">Podcasts</span>
            <span className="hover:text-secondary cursor-pointer transition-colors pb-1">Interviews</span>
            <span className="hover:text-secondary cursor-pointer transition-colors pb-1">Masterclasses</span>
            <span className="hover:text-secondary cursor-pointer transition-colors pb-1">Monographs</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Media Item 1 */}
            <div className="group cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-secondary rounded-lg">
              <div className="aspect-[4/5] bg-surface-container mb-6 overflow-hidden relative rounded-lg">
                <img 
                  alt="Ejike Ebidilo casual portrait" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" 
                  src="/images/EJ_casual_02.jpeg" 
                />
                <div className="absolute inset-0 bg-primary-container/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[2px]">
                  <span className="material-symbols-outlined text-white text-5xl" data-icon="play_circle">play_circle</span>
                </div>
              </div>
              <h3 className="font-headline-md text-on-background mb-2 group-hover:text-secondary transition-colors text-lg md:text-xl font-semibold">The Golden Era Interviews</h3>
              <p className="font-label-sm text-on-surface-variant uppercase tracking-widest text-xs">Archived Audio • 1994</p>
            </div>
            {/* Media Item 2 */}
            <div className="group cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-secondary rounded-lg">
              <div className="aspect-[4/5] bg-surface-container mb-6 overflow-hidden relative rounded-lg">
                <img 
                  alt="Ejike Ebidilo Agbada portrait" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" 
                  src="/images/EJ_Agbada_02.jpeg" 
                />
                <div className="absolute inset-0 bg-primary-container/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[2px]">
                  <span className="material-symbols-outlined text-white text-5xl" data-icon="podcasts">podcasts</span>
                </div>
              </div>
              <h3 className="font-headline-md text-on-background mb-2 group-hover:text-secondary transition-colors text-lg md:text-xl font-semibold">Voice of Generations</h3>
              <p className="font-label-sm text-on-surface-variant uppercase tracking-widest text-xs">Monograph • 2023</p>
            </div>
            {/* Media Item 3 */}
            <div className="group cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-secondary rounded-lg">
              <div className="aspect-[4/5] bg-surface-container mb-6 overflow-hidden relative rounded-lg">
                <img 
                  alt="Ejike Ebidilo recording session" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" 
                  src="/images/EJ_casual_03.jpeg" 
                />
                <div className="absolute inset-0 bg-primary-container/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[2px]">
                  <span className="material-symbols-outlined text-white text-5xl" data-icon="auto_stories">auto_stories</span>
                </div>
              </div>
              <h3 className="font-headline-md text-on-background mb-2 group-hover:text-secondary transition-colors text-lg md:text-xl font-semibold">Beyond the Script</h3>
              <p className="font-label-sm text-on-surface-variant uppercase tracking-widest text-xs">Masterclass • Ongoing</p>
            </div>
          </div>
        </section>

        {/* Footer Section */}
        <footer className="pt-16 pb-12 px-margin-mobile md:px-margin-desktop bg-surface-container-lowest border-t border-outline-variant/10">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 mb-16">
            {/* Column 1: Brand & Logo */}
            <div className="md:col-span-4 flex flex-col items-start gap-4">
              <Link href="/" className="outline-none focus-visible:ring-2 focus-visible:ring-secondary rounded-lg">
                <img 
                  alt="BIGBRUVA Crest Logo" 
                  className="h-16 w-auto object-contain" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDzoQachYWqkheryCjc0oj1MFa-C1ZPMJ7iMTX-2-IDj7U9vodjQkBDg6bzs8DGk-WmboILzxQlYaQcA2aHbUEYZcJRksEek2fr3QWgIrtR-1uivfoHhCgtW90_f6_8W4NQYgsLsKZ0qSQin7U0OqkqxqrlplbfTuEt6pFWYYQmG4aDRV2AFdu5ZJyhZyKPZTRJaMbuic6zpM-OG6I9l73dLr-tV4GAyFoG0xg_-5hrsvTea3SIsK9OnWGI5gPT5RFgnnA0E5N6ZZU" 
                />
              </Link>
              <p className="text-on-surface-variant/70 text-sm max-w-xs mt-2 leading-relaxed font-sans">
                Recreating the institutional identity and audio broadcasting legacy of Ejike Ebidilo.
              </p>
            </div>

            {/* Column 2: Navigation */}
            <div className="md:col-span-2">
              <h4 className="text-secondary font-bold text-sm uppercase tracking-wider mb-4 font-sans">Navigation</h4>
              <div className="flex flex-col gap-3 font-sans">
                <Link className="text-on-surface-variant hover:text-secondary text-sm transition-colors outline-none focus-visible:ring-2 focus-visible:ring-secondary rounded" href="/about">About</Link>
                <Link className="text-on-surface-variant hover:text-secondary text-sm transition-colors outline-none focus-visible:ring-2 focus-visible:ring-secondary rounded" href="/legacy">Legacy</Link>
                <Link className="text-on-surface-variant hover:text-secondary text-sm transition-colors outline-none focus-visible:ring-2 focus-visible:ring-secondary rounded" href="/media">Media</Link>
                <Link className="text-on-surface-variant hover:text-secondary text-sm transition-colors outline-none focus-visible:ring-2 focus-visible:ring-secondary rounded" href="/voice">Voice</Link>
                <Link className="text-on-surface-variant hover:text-secondary text-sm transition-colors outline-none focus-visible:ring-2 focus-visible:ring-secondary rounded" href="/events">Events</Link>
              </div>
            </div>

            {/* Column 3: Media */}
            <div className="md:col-span-2">
              <h4 className="text-secondary font-bold text-sm uppercase tracking-wider mb-4 font-sans">Media</h4>
              <div className="flex flex-col gap-3 font-sans">
                <Link className="text-on-surface-variant hover:text-secondary text-sm transition-colors outline-none focus-visible:ring-2 focus-visible:ring-secondary rounded" href="/podcast">Podcasts</Link>
                <Link className="text-on-surface-variant hover:text-secondary text-sm transition-colors outline-none focus-visible:ring-2 focus-visible:ring-secondary rounded" href="/media">Interviews</Link>
                <Link className="text-on-surface-variant hover:text-secondary text-sm transition-colors outline-none focus-visible:ring-2 focus-visible:ring-secondary rounded" href="/media">Archives</Link>
                <Link className="text-on-surface-variant hover:text-secondary text-sm transition-colors outline-none focus-visible:ring-2 focus-visible:ring-secondary rounded" href="/press">Press</Link>
              </div>
            </div>

            {/* Column 4: Contact */}
            <div className="md:col-span-2">
              <h4 className="text-secondary font-bold text-sm uppercase tracking-wider mb-4 font-sans">Contact</h4>
              <div className="flex flex-col gap-3 font-sans">
                <Link className="text-on-surface-variant hover:text-secondary text-sm transition-colors outline-none focus-visible:ring-2 focus-visible:ring-secondary rounded" href="/bookings">Booking</Link>
                <Link className="text-on-surface-variant hover:text-secondary text-sm transition-colors outline-none focus-visible:ring-2 focus-visible:ring-secondary rounded" href="/bookings">Speaking</Link>
                <Link className="text-on-surface-variant hover:text-secondary text-sm transition-colors outline-none focus-visible:ring-2 focus-visible:ring-secondary rounded" href="/contact">Collaborations</Link>
              </div>
            </div>

            {/* Column 5: Social */}
            <div className="md:col-span-2">
              <h4 className="text-secondary font-bold text-sm uppercase tracking-wider mb-4 font-sans">Social</h4>
              <div className="flex flex-col gap-3 font-sans">
                <a target="_blank" rel="noopener noreferrer" className="text-on-surface-variant hover:text-secondary text-sm transition-colors outline-none focus-visible:ring-2 focus-visible:ring-secondary rounded flex items-center gap-2" href="https://twitter.com">
                  <span className="material-symbols-outlined text-[18px] leading-none" data-icon="public">public</span>
                  Twitter
                </a>
                <a target="_blank" rel="noopener noreferrer" className="text-on-surface-variant hover:text-secondary text-sm transition-colors outline-none focus-visible:ring-2 focus-visible:ring-secondary rounded flex items-center gap-2" href="https://youtube.com">
                  <span className="material-symbols-outlined text-[18px] leading-none" data-icon="video_library">video_library</span>
                  YouTube
                </a>
                <a target="_blank" rel="noopener noreferrer" className="text-on-surface-variant hover:text-secondary text-sm transition-colors outline-none focus-visible:ring-2 focus-visible:ring-secondary rounded flex items-center gap-2" href="https://spotify.com">
                  <span className="material-symbols-outlined text-[18px] leading-none" data-icon="podcasts">podcasts</span>
                  Spotify
                </a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-outline-variant/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
            <p className="font-label-sm text-on-surface-variant/40 tracking-widest uppercase text-xs">
              © 2024 BIGBRUVA - Ejike Ebidilo. All Rights Reserved.
            </p>
            <div className="flex gap-6 text-xs text-on-surface-variant/40 font-sans">
              <Link className="hover:text-secondary transition-colors" href="/contact">Privacy Policy</Link>
              <Link className="hover:text-secondary transition-colors" href="/contact">Terms of Service</Link>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}
