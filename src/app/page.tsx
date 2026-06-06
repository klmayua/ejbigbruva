"use client";

import React, { useEffect, useState } from 'react';
import Link from 'next/link';

export default function Page() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
            background-color: #050505 !important;
            color: #e2e3e1;
            scroll-behavior: smooth;
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
        @keyframes mic-pulse {
          0% {
            box-shadow: 0 0 0 0 rgba(34, 197, 94, 0.5);
            transform: scale(1);
          }
          70% {
            box-shadow: 0 0 0 10px rgba(34, 197, 94, 0);
            transform: scale(1.05);
          }
          100% {
            box-shadow: 0 0 0 0 rgba(34, 197, 94, 0);
            transform: scale(1);
          }
        }
        .mic-pulse-glow {
          animation: mic-pulse 2.4s infinite ease-in-out;
        }
        
        .portrait-mask-final {
          -webkit-mask-image: 
            linear-gradient(to right, transparent 0px, black 340px),
            linear-gradient(to top, transparent 0px, black 260px),
            linear-gradient(to bottom, transparent 0px, black 60px);
          -webkit-mask-composite: source-in;
          
          mask-image: 
            linear-gradient(to right, transparent 0px, black 340px),
            linear-gradient(to top, transparent 0px, black 260px),
            linear-gradient(to bottom, transparent 0px, black 60px);
          mask-composite: intersect;
        }
      `}} />

      {/* Floating Pill TopNavBar */}
      <nav 
        className="absolute top-[28px] left-1/2 -translate-x-1/2 z-[100] w-[90%] max-w-[1120px] h-[88px] rounded-full flex justify-between items-center transition-all duration-300"
        style={{
          backgroundColor: 'rgba(8,8,8,0.82)',
          backdropFilter: 'blur(24px)',
          WebkitBackdropFilter: 'blur(24px)',
          border: '1px solid rgba(212,175,55,0.22)',
          boxShadow: '0 0 40px rgba(212,175,55,0.08), inset 0 1px 0 rgba(255,255,255,0.04)'
        }}
      >
        {/* Logo left positioned */}
        <div className="flex items-center pl-[34px]">
          <Link href="/">
            <img 
              alt="BIGBRUVA Logo" 
              className="w-[62px] h-auto object-contain cursor-pointer" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDzoQachYWqkheryCjc0oj1MFa-C1ZPMJ7iMTX-2-IDj7U9vodjQkBDg6bzs8DGk-WmboILzxQlYaQcA2aHbUEYZcJRksEek2fr3QWgIrtR-1uivfoHhCgtW90_f6_8W4NQYgsLsKZ0qSQin7U0OqkqxqrlplbfTuEt6pFWYYQmG4aDRV2AFdu5ZJyhZyKPZTRJaMbuic6zpM-OG6I9l73dLr-tV4GAyFoG0xg_-5hrsvTea3SIsK9OnWGI5gPT5RFgnnA0E5N6ZZU"
            />
          </Link>
        </div>
        
        {/* Center Navigation Links */}
        <div className="absolute left-1/2 -translate-x-1/2 hidden md:flex items-center gap-[42px]">
          <div className="flex flex-col items-center">
            <Link className="font-sans text-[18px] font-medium text-secondary cursor-pointer transition-all" href="/">Home</Link>
            <div className="w-[32px] h-[2px] bg-secondary mt-1 rounded-full" />
          </div>
          <Link className="font-sans text-[18px] font-medium text-on-surface-variant hover:text-secondary cursor-pointer transition-colors duration-300" href="/about">About</Link>
          <Link className="font-sans text-[18px] font-medium text-on-surface-variant hover:text-secondary cursor-pointer transition-colors duration-300" href="/legacy">Legacy</Link>
          <Link className="font-sans text-[18px] font-medium text-on-surface-variant hover:text-secondary cursor-pointer transition-colors duration-300" href="/media">Media</Link>
          <Link className="font-sans text-[18px] font-medium text-on-surface-variant hover:text-secondary cursor-pointer transition-colors duration-300" href="/voice">Voice</Link>
          <Link className="font-sans text-[18px] font-medium text-on-surface-variant hover:text-secondary cursor-pointer transition-colors duration-300" href="/events">Events</Link>
        </div>

        {/* Right CTA */}
        <div className="flex items-center pr-[18px]">
          <Link 
            href="/contact" 
            className="h-[56px] px-[30px] text-[#0A0A0A] font-bold rounded-full flex items-center justify-center gap-2 hover:-translate-y-[2px] hover:brightness-105 active:scale-95 transition-all duration-300"
            style={{
              background: 'linear-gradient(to right, #D4AF37, #E8C85A)',
              boxShadow: '0 0 25px rgba(212,175,55,0.25)',
              letterSpacing: '0.04em'
            }}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
            </svg>
            ENGAGE NOW
          </Link>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 z-40 bg-surface/98 backdrop-blur-2xl transition-all duration-500 ease-in-out flex flex-col justify-center items-center md:hidden ${
          mobileMenuOpen 
            ? 'opacity-100 translate-y-0 pointer-events-auto' 
            : 'opacity-0 -translate-y-full pointer-events-none'
        }`}
      >
        <div className="flex flex-col gap-6 text-center">
          <Link href="/" onClick={() => setMobileMenuOpen(false)} className="font-display-lg text-headline-lg text-secondary font-bold">Home</Link>
          <Link href="/about" onClick={() => setMobileMenuOpen(false)} className="font-display-lg text-headline-lg text-on-surface-variant hover:text-secondary">About</Link>
          <Link href="/legacy" onClick={() => setMobileMenuOpen(false)} className="font-display-lg text-headline-lg text-on-surface-variant hover:text-secondary">Legacy</Link>
          <Link href="/media" onClick={() => setMobileMenuOpen(false)} className="font-display-lg text-headline-lg text-on-surface-variant hover:text-secondary">Media</Link>
          <Link href="/voice" onClick={() => setMobileMenuOpen(false)} className="font-display-lg text-headline-lg text-on-surface-variant hover:text-secondary">Voice</Link>
          <Link href="/events" onClick={() => setMobileMenuOpen(false)} className="font-display-lg text-headline-lg text-on-surface-variant hover:text-secondary">Events</Link>
          <Link href="/contact" onClick={() => setMobileMenuOpen(false)} className="mt-8 bg-secondary text-on-secondary px-8 py-3 font-label-md text-label-md rounded-lg hover:brightness-110 active:scale-95 inline-block">Contact</Link>
        </div>
      </div>

      <main>
        {/* Full-Bleed Editorial Hero Section */}
        <section className="relative h-screen min-h-[900px] w-full overflow-hidden bg-[#050505]">
          {/* Blue Glow Backlight (z-1, behind portrait) */}
          <div 
            className="absolute right-[-100px] bottom-[-200px] pointer-events-none rounded-full"
            style={{
              width: '900px',
              height: '900px',
              backgroundColor: '#0077FF',
              opacity: 0.28,
              filter: 'blur(140px)',
              zIndex: 1
            }}
          />

          {/* Portrait Image Container (z-10) with mask fades */}
          <div className="absolute right-0 bottom-0 w-[48%] max-w-[760px] pointer-events-none z-10 portrait-mask-final">
            <img 
              alt="Ejike Ebidilo Portrait" 
              className="w-full h-auto object-contain select-none pointer-events-none filter contrast-[1.08] brightness-[1.02]" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCQ-559P85BIW1Vp8U3rAA_DXLCOB6Cuv_k8nUEPsPB6j1gRYGOyQkwtoqJt8OqbMkc1QcahDC8L52rMXERda9PerZ5UaANs_sdmZ5ARo8eAslvfbuKa9UIY3B2PmhJ-67_UgWdsc50d12bRJogrXpgFXUT703nd8v9kf6fRFHkrkNiwepIRUkqCICu5z6FtCRbsPu_MkX7WNAHyklcbFiwripfDfAyqqTznLLljY-kU7uq7b9-seQTcnLvU_-5cDbHESj5ri6uhwQ" 
            />
            {/* Fallback overlays to ensure seamless blend even without mask compositing */}
            {/* Left fade: 340px wide */}
            <div 
              className="absolute left-0 top-0 bottom-0 z-20 pointer-events-none" 
              style={{
                width: '340px',
                background: 'linear-gradient(to right, #050505 0%, transparent 100%)'
              }}
            />
            {/* Bottom fade: 260px high */}
            <div 
              className="absolute left-0 right-0 bottom-0 z-20 pointer-events-none" 
              style={{
                height: '260px',
                background: 'linear-gradient(to top, #050505 0%, transparent 100%)'
              }}
            />
            {/* Top fade: 60px high */}
            <div 
              className="absolute left-0 right-0 top-0 z-20 pointer-events-none" 
              style={{
                height: '60px',
                background: 'linear-gradient(to bottom, #050505 0%, transparent 100%)'
              }}
            />
          </div>

          {/* Left Atmosphere Gradient Overlay (z-10) */}
          <div 
            className="absolute left-0 top-0 bottom-0 pointer-events-none z-10"
            style={{
              width: '55%',
              background: 'linear-gradient(to right, rgba(0,0,0,1) 0%, rgba(0,0,0,0.85) 35%, rgba(0,0,0,0) 100%)'
            }}
          />

          {/* Cinematic Vignette Overlay (z-10) */}
          <div 
            className="absolute inset-0 pointer-events-none z-10"
            style={{
              background: 'radial-gradient(circle, transparent 30%, rgba(0,0,0,0.6) 100%)',
              opacity: 0.25
            }}
          />
          
          {/* Content Block (z-20) */}
          <div className="absolute left-4 md:left-[85px] top-[50%] md:top-[52%] -translate-y-1/2 w-[calc(100%-32px)] md:w-[700px] z-20 px-margin-mobile md:px-0">
            {/* Trust Indicator replaces existing dot */}
            <div className="flex items-center gap-[18px] mb-[30px]">
              <div 
                className="flex items-center justify-center w-[38px] h-[38px] bg-[#22C55E]/10 rounded-full mic-pulse-glow"
                style={{ 
                  flexShrink: 0,
                  boxShadow: '0 0 30px rgba(34,197,94,0.45)'
                }}
              >
                <svg className="w-[22px] h-[22px]" style={{ color: '#22C55E' }} fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3zm5.5 10a.5.5 0 0 0-1 0 4.5 4.5 0 0 1-9 0 .5.5 0 0 0-1 0 5.5 5.5 0 0 0 5 5.48V19h-3a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1h-3v-1.52a5.5 5.5 0 0 0 5-5.48z"/>
                </svg>
              </div>
              
              {/* Green active waveform display */}
              <svg className="w-[44px] h-[22px]" style={{ color: '#22C55E', opacity: 0.7 }} fill="currentColor" viewBox="0 0 44 22" xmlns="http://www.w3.org/2000/svg">
                <rect x="2" y="6" width="3" height="10" rx="1.5" className="animate-pulse" style={{ animationDelay: '0.1s' }} />
                <rect x="10" y="2" width="3" height="18" rx="1.5" className="animate-pulse" style={{ animationDelay: '0.3s' }} />
                <rect x="18" y="8" width="3" height="6" rx="1.5" className="animate-pulse" style={{ animationDelay: '0.5s' }} />
                <rect x="26" y="4" width="3" height="14" rx="1.5" className="animate-pulse" style={{ animationDelay: '0.2s' }} />
                <rect x="34" y="0" width="3" height="22" rx="1.5" className="animate-pulse" style={{ animationDelay: '0.4s' }} />
                <rect x="42" y="7" width="3" height="8" rx="1.5" className="animate-pulse" style={{ animationDelay: '0.6s' }} />
              </svg>

              <span className="font-sans text-[16px] font-semibold text-white uppercase tracking-[0.18em] leading-none">
                <span className="text-[#22C55E]">20+ YEARS </span>
                VOICING EXCELLENCE
              </span>
            </div>
            
            {/* Headline */}
            <h1 
              className="font-serif font-medium max-w-[700px] mb-0 mt-0 leading-[0.9] tracking-[-0.04em]"
              style={{
                fontFamily: "'Libre Caslon Text', serif"
              }}
            >
              <span className="text-white block text-[48px] md:text-[80px] lg:text-[108px]">THE</span>
              <span className="text-white block text-[48px] md:text-[80px] lg:text-[108px]">ORIGINAL</span>
              <span className="text-secondary block text-[48px] md:text-[80px] lg:text-[108px]">BIG</span>
              <span className="text-secondary block text-[48px] md:text-[80px] lg:text-[108px]">BROTHER.</span>
            </h1>
            
            {/* Descriptor */}
            <p className="font-sans text-[18px] md:text-[22px] lg:text-[26px] font-medium text-white mt-[28px] leading-relaxed">
              Broadcaster <span className="text-secondary">•</span> Storyteller <span className="text-secondary">•</span> Mentor
            </p>
            
            {/* Voice of Generations */}
            <p className="font-sans text-[20px] md:text-[24px] lg:text-[28px] font-bold text-secondary mt-[22px] leading-tight">
              Voice of Generations
            </p>

            {/* Divider */}
            <div className="w-[42px] h-[2px] bg-secondary mt-[18px] mb-[28px]" />
            
            {/* CTAs */}
            <div className="flex flex-wrap gap-[18px] mt-[34px]">
              <Link 
                href="/contact" 
                className="h-[64px] px-[34px] rounded-full flex items-center justify-center gap-3 text-[#0A0A0A] font-bold transition-all duration-300 hover:-translate-y-0.5 hover:brightness-105 active:scale-95 shadow-lg"
                style={{
                  background: 'linear-gradient(to right, #D4AF37, #E8C85A)',
                  boxShadow: '0 0 35px rgba(212,175,55,0.30)'
                }}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.4" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                </svg>
                Book a Conversation
              </Link>
              <Link 
                href="/media" 
                className="h-[64px] px-[34px] rounded-full flex items-center justify-center gap-3 text-white font-semibold border transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#D4AF37]/8 active:scale-95"
                style={{
                  border: '1px solid rgba(212,175,55,0.70)',
                  backgroundColor: 'transparent'
                }}
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8 5v14l11-7z"></path>
                </svg>
                Watch Legacy Reel
              </Link>
            </div>
          </div>
        </section>

        {/* Featured Story Section (Moved Biography/Long Copy directly here below Hero) */}
        <section className="py-32 px-margin-mobile md:px-margin-desktop bg-surface border-t border-outline-variant/10">
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
                <Link className="inline-flex items-center gap-4 text-secondary font-label-md group hover:gap-6 transition-all" href="/legacy">
                  READ THE FULL ARCHIVE
                  <span className="material-symbols-outlined">arrow_forward</span>
                </Link>
              </div>
            </div>
            <div className="md:col-span-5 relative">
              <div className="aspect-[3/4] bg-surface-container overflow-hidden rounded shadow-2xl relative">
                <img 
                  alt="Ejike Ebidilo in a casual portrait" 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDeInVieQFXF4d8UzMMykXuM5fPy-Mf9CbEKa3-dUuqw_sEUs3tNBHs_Jw8o517789ZUwK6Iczz6gG22MxX0_gqLSW3YYCxfiVkRt352wnzefGKNIPEr-NICF_aAuQlKLaklbJOnFr2CaKHKUpaqB3vyNe0iUWdMC2cK--x49Te4C8sXut7DpR3L8SeeNHB9_EqSkTTjr829edkDu6mzKIIcxy6AR4Fb9ADw-3wX53BftnhTi4hIMsfCLkmVd7x_QJ5rrasq9L-nzo" 
                />
                <div className="absolute bottom-6 left-6 p-6 glass-panel max-w-[260px] rounded shadow-xl">
                  <p className="font-label-sm text-secondary italic mb-2 tracking-tight">Internal Monologue</p>
                  <p className="font-body-md text-on-surface">"The voice is the soul's first draft of reality."</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Legacy Numbers Section */}
        <section className="py-24 px-margin-mobile md:px-margin-desktop bg-surface-container-lowest">
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

        {/* Quote Section */}
        <section className="py-40 bg-surface-container-low overflow-hidden relative">
          <div className="max-w-5xl mx-auto px-margin-mobile md:px-margin-desktop text-center relative z-10">
            <span className="material-symbols-outlined text-secondary text-7xl mb-12 opacity-50">format_quote</span>
            <blockquote className="font-display-lg text-headline-lg md:text-display-lg text-on-background mb-12 italic leading-tight">
              "Great broadcasting isn't about the volume of your voice, but the depth of the silence you command between your words."
            </blockquote>
            <div className="h-1 w-24 bg-secondary mx-auto mb-8"></div>
            <cite className="font-label-md text-secondary tracking-[0.3em] uppercase not-italic">Ejike Ebidilo, 2024</cite>
          </div>
        </section>

        {/* Legacy Media Grid */}
        <section className="py-32 px-margin-mobile md:px-margin-desktop">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
            <div>
              <span className="font-label-md text-secondary mb-4 block uppercase tracking-widest">Media Repository</span>
              <h2 className="font-headline-lg text-on-background">Echoes of Influence</h2>
            </div>
            <Link href="/media" className="font-label-md text-on-surface-variant hover:text-secondary transition-colors border-b border-transparent hover:border-secondary pb-1 uppercase tracking-widest">
              View All Archives
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Media Item 1 */}
            <Link href="/media" className="group cursor-pointer block">
              <div className="aspect-[4/5] bg-surface-container mb-6 overflow-hidden relative rounded-lg">
                <img 
                  alt="Vintage portrait" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDioAxOCtb2-qp6zChX8Z-QBswqAv35CSL1gIfCgs0QO6d84m1xGsf3wVoUqOUIKuez69eIrkos3_SiqVF37TfJ1zPeqHDFQ-x2iEQx0jlWZ_-f1ne5-OPWiIsBpSmUzQHo8kL3e9YkmxDJlOohajdDa0hQVVkJZAo6WqZcTtVuF_SjaX_qZ9gVxj3H7sjytVVEbV3hB4lbPJW-MV5J0fCMyt622sOvAlPRPm3o3cq1FYPADrXGMCMp9z2IYkbScV9ls9LhwRNWR6s" 
                />
                <div className="absolute inset-0 bg-primary-container/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[2px]">
                  <span className="material-symbols-outlined text-white text-5xl">play_circle</span>
                </div>
              </div>
              <h3 className="font-headline-md text-on-background mb-2">The Golden Era Interviews</h3>
              <p className="font-label-sm text-on-surface-variant uppercase tracking-widest">Archived Audio • 1994</p>
            </Link>
            {/* Media Item 2 */}
            <Link href="/media" className="group cursor-pointer block">
              <div className="aspect-[4/5] bg-surface-container-highest mb-6 overflow-hidden relative rounded-lg flex items-center justify-center border border-outline-variant/10">
                <span className="material-symbols-outlined text-secondary/10 text-9xl group-hover:scale-110 transition-transform duration-1000">mic</span>
                <div className="absolute inset-0 bg-primary-container/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[2px]">
                  <span className="material-symbols-outlined text-white text-5xl">podcasts</span>
                </div>
              </div>
              <h3 className="font-headline-md text-on-background mb-2">Voice of Generations</h3>
              <p className="font-label-sm text-on-surface-variant uppercase tracking-widest">Monograph • 2023</p>
            </Link>
            {/* Media Item 3 */}
            <Link href="/media" className="group cursor-pointer block">
              <div className="aspect-[4/5] bg-surface-container mb-6 overflow-hidden relative rounded-lg">
                <img 
                  alt="Creative session" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDeInVieQFXF4d8UzMMykXuM5fPy-Mf9CbEKa3-dUuqw_sEUs3tNBHs_Jw8o517789ZUwK6Iczz6gG22MxX0_gqLSW3YYCxfiVkRt352wnzefGKNIPEr-NICF_aAuQlKLaklbJOnFr2CaKHKUpaqB3vyNe0iUWdMC2cK--x49Te4C8sXut7DpR3L8SeeNHB9_EqSkTTjr829edkDu6mzKIIcxy6AR4Fb9ADw-3wX53BftnhTi4hIMsfCLkmVd7x_QJ5rrasq9L-nzo" 
                />
                <div className="absolute inset-0 bg-primary-container/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[2px]">
                  <span className="material-symbols-outlined text-white text-5xl">auto_stories</span>
                </div>
              </div>
              <h3 className="font-headline-md text-on-background mb-2">Beyond the Script</h3>
              <p className="font-label-sm text-on-surface-variant uppercase tracking-widest">Masterclass • Ongoing</p>
            </Link>
          </div>
        </section>

        {/* Footer Section */}
        <footer className="py-24 px-margin-mobile md:px-margin-desktop bg-surface-container-lowest border-t border-outline-variant/10 text-center">
          <div className="mb-12">
            <img 
              alt="BIGBRUVA Crest" 
              className="h-40 md:h-56 w-auto mx-auto object-contain mb-8" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDzoQachYWqkheryCjc0oj1MFa-C1ZPMJ7iMTX-2-IDj7U9vodjQkBDg6bzs8DGk-WmboILzxQlYaQcA2aHbUEYZcJRksEek2fr3QWgIrtR-1uivfoHhCgtW90_f6_8W4NQYgsLsKZ0qSQin7U0OqkqxqrlplbfTuEt6pFWYYQmG4aDRV2AFdu5ZJyhZyKPZTRJaMbuic6zpM-OG6I9l73dLr-tV4GAyFoG0xg_-5hrsvTea3SIsK9OnWGI5gPT5RFgnnA0E5N6ZZU" 
            />
            <div className="flex flex-wrap justify-center gap-8 md:gap-12 mb-12">
              <Link className="font-label-md text-on-surface-variant hover:text-secondary transition-colors" href="/legacy">Legacy</Link>
              <Link className="font-label-md text-on-surface-variant hover:text-secondary transition-colors" href="/press">Press</Link>
              <Link className="font-label-md text-on-surface-variant hover:text-secondary transition-colors" href="/contact">Privacy Policy</Link>
              <Link className="font-label-md text-on-surface-variant hover:text-secondary transition-colors" href="/contact">Terms of Service</Link>
            </div>
            <div className="flex justify-center gap-10 mb-10">
              <span className="material-symbols-outlined text-on-surface-variant hover:text-secondary cursor-pointer transition-all hover:scale-110">public</span>
              <span className="material-symbols-outlined text-on-surface-variant hover:text-secondary cursor-pointer transition-all hover:scale-110">podcasts</span>
              <span className="material-symbols-outlined text-on-surface-variant hover:text-secondary cursor-pointer transition-all hover:scale-110">video_library</span>
            </div>
            <p className="font-label-sm text-on-surface-variant/40 tracking-widest uppercase">
              © 2024 BIGBRUVA - Ejike Ebidilo. All Rights Reserved.
            </p>
          </div>
        </footer>
      </main>
    </>
  );
}
