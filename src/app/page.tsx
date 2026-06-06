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
            background-color: #121413 !important;
            color: #e2e3e1;
            scroll-behavior: smooth;
        }
        .hero-gradient-overlay {
            background: linear-gradient(to right, rgba(0,0,0,0.88) 0%, rgba(0,0,0,0.5) 50%, rgba(0,0,0,0) 100%) !important;
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
      `}} />

      {/* Floating Pill TopNavBar */}
      <nav 
        className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-[1080px] h-[70px] px-8 rounded-full flex justify-between items-center transition-all duration-300"
        style={{
          backgroundColor: 'rgba(8,8,8,0.78)',
          backdropFilter: 'blur(22px)',
          WebkitBackdropFilter: 'blur(22px)',
          border: '1px solid rgba(212,175,55,0.15)',
          boxShadow: '0 12px 40px rgba(0,0,0,0.5)'
        }}
      >
        <div className="flex items-center">
          <Link href="/">
            <img 
              alt="BIGBRUVA Logo" 
              className="h-[46px] w-auto object-contain cursor-pointer" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDzoQachYWqkheryCjc0oj1MFa-C1ZPMJ7iMTX-2-IDj7U9vodjQkBDg6bzs8DGk-WmboILzxQlYaQcA2aHbUEYZcJRksEek2fr3QWgIrtR-1uivfoHhCgtW90_f6_8W4NQYgsLsKZ0qSQin7U0OqkqxqrlplbfTuEt6pFWYYQmG4aDRV2AFdu5ZJyhZyKPZTRJaMbuic6zpM-OG6I9l73dLr-tV4GAyFoG0xg_-5hrsvTea3SIsK9OnWGI5gPT5RFgnnA0E5N6ZZU"
            />
          </Link>
        </div>
        <div className="hidden md:flex gap-10 items-center">
          <Link className="font-sans text-[16px] font-medium text-secondary border-b-2 border-secondary pb-1 cursor-pointer transition-all" href="/">Home</Link>
          <Link className="font-sans text-[16px] font-medium text-on-surface-variant hover:text-secondary cursor-pointer transition-colors duration-300" href="/about">About</Link>
          <Link className="font-sans text-[16px] font-medium text-on-surface-variant hover:text-secondary cursor-pointer transition-colors duration-300" href="/legacy">Legacy</Link>
          <Link className="font-sans text-[16px] font-medium text-on-surface-variant hover:text-secondary cursor-pointer transition-colors duration-300" href="/media">Media</Link>
          <Link className="font-sans text-[16px] font-medium text-on-surface-variant hover:text-secondary cursor-pointer transition-colors duration-300" href="/voice">Voice</Link>
          <Link className="font-sans text-[16px] font-medium text-on-surface-variant hover:text-secondary cursor-pointer transition-colors duration-300" href="/events">Events</Link>
        </div>
        <div className="flex items-center">
          <Link 
            href="/contact" 
            className="h-[50px] px-[28px] text-[#121413] font-semibold rounded-full flex items-center justify-center gap-2 hover:-translate-y-[2px] hover:brightness-105 active:scale-95 transition-all duration-300"
            style={{
              backgroundColor: '#d4af37',
              boxShadow: '0 10px 30px rgba(212,175,55,0.22)'
            }}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
            </svg>
            ENGAGE NOW
          </Link>
        </div>
      </nav>

      {/* Mobile Menu Slide-down Overlay */}
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
        <section className="relative h-screen w-full overflow-hidden bg-black flex items-end">
          {/* Portrait Image Container (z-0) with mask fades */}
          <div className="absolute right-[6%] bottom-0 w-[46%] max-w-[680px] h-full pointer-events-none z-0 translate-x-[80px] translate-y-[20px]">
            <img 
              alt="Ejike Ebidilo Portrait" 
              className="w-full h-full object-contain object-bottom select-none pointer-events-none filter contrast-[1.13] brightness-[0.93]" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCQ-559P85BIW1Vp8U3rAA_DXLCOB6Cuv_k8nUEPsPB6j1gRYGOyQkwtoqJt8OqbMkc1QcahDC8L52rMXERda9PerZ5UaANs_sdmZ5ARo8eAslvfbuKa9UIY3B2PmhJ-67_UgWdsc50d12bRJogrXpgFXUT703nd8v9kf6fRFHkrkNiwepIRUkqCICu5z6FtCRbsPu_MkX7WNAHyklcbFiwripfDfAyqqTznLLljY-kU7uq7b9-seQTcnLvU_-5cDbHESj5ri6uhwQ" 
            />
            {/* Left fade: 260px wide, black to transparent */}
            <div 
              className="absolute left-0 top-0 bottom-0 z-10 pointer-events-none" 
              style={{
                width: '260px',
                background: 'linear-gradient(to right, #000000 0%, transparent 100%)'
              }}
            />
            {/* Bottom fade: 280px high, transparent to black */}
            <div 
              className="absolute left-0 right-0 bottom-0 z-10 pointer-events-none" 
              style={{
                height: '280px',
                background: 'linear-gradient(to top, #000000 0%, transparent 100%)'
              }}
            />
            {/* Right fade: 140px wide, transparent to black */}
            <div 
              className="absolute right-0 top-0 bottom-0 z-10 pointer-events-none" 
              style={{
                width: '140px',
                background: 'linear-gradient(to left, #000000 0%, transparent 100%)'
              }}
            />
          </div>

          {/* Left-to-Right Linear Blend Overlay (z-10) */}
          <div className="absolute inset-0 z-10 hero-gradient-overlay pointer-events-none"></div>
          
          {/* Content Block (z-20) */}
          <div className="absolute left-[8%] top-[50%] -translate-y-[50%] -mt-[170px] w-full max-w-[700px] z-20 px-margin-mobile md:px-0 pb-[80px]">
            {/* Trust Indicator replaces existing dot */}
            <div className="flex items-center gap-3 mb-6 max-w-[560px]">
              <div 
                className="flex items-center justify-center w-[30px] h-[30px] bg-[#22C55E]/10 rounded-full mic-pulse-glow"
                style={{ flexShrink: 0 }}
              >
                <svg className="w-[18px] h-[18px]" style={{ color: '#22C55E' }} fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3zm5.5 10a.5.5 0 0 0-1 0 4.5 4.5 0 0 1-9 0 .5.5 0 0 0-1 0 5.5 5.5 0 0 0 5 5.48V19h-3a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1h-3v-1.52a5.5 5.5 0 0 0 5-5.48z"/>
                </svg>
              </div>
              <span className="font-sans text-[14px] font-semibold text-on-surface-variant uppercase tracking-[0.18em] leading-none">
                40+ YEARS VOICING EXCELLENCE
              </span>
            </div>
            
            {/* Headline */}
            <h1 
              className="relative -top-[40px] font-display-lg text-[42px] md:text-[60px] lg:text-[78px] font-medium max-w-[700px] mb-6"
              style={{
                lineHeight: '0.92',
                letterSpacing: '-0.04em',
              }}
            >
              <span className="text-white block">THE ORIGINAL</span>
              <span className="text-secondary block">BIG BROTHER.</span>
            </h1>
            
            {/* Descriptor */}
            <p className="font-sans text-[18px] md:text-[22px] lg:text-[26px] font-medium text-on-background mt-[24px] leading-relaxed max-w-[560px]">
              Broadcaster • Storyteller • Mentor
            </p>
            
            {/* Voice of Generations */}
            <p className="font-sans text-[24px] md:text-[32px] lg:text-[42px] font-bold text-secondary mt-[16px] leading-tight max-w-[560px]">
              Voice of Generations
            </p>
            
            {/* CTAs */}
            <div className="flex flex-wrap gap-[18px] mt-[40px] max-w-[560px]">
              <Link href="/contact" className="h-[56px] px-8 bg-secondary text-on-secondary font-label-md text-label-md rounded-full flex items-center justify-center gap-3 hover:brightness-110 active:scale-95 transition-all shadow-lg shadow-secondary/20">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                </svg>
                Book a Conversation
              </Link>
              <Link href="/media" className="h-[56px] px-8 border-2 border-secondary text-secondary font-label-md text-label-md rounded-full flex items-center justify-center gap-3 hover:bg-secondary/10 active:scale-95 transition-all">
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
