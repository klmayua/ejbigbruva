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
            background: rgba(18, 20, 19, 0.65);
            backdrop-filter: blur(16px);
            border: 1px solid rgba(233, 195, 73, 0.2);
        }
        .hero-vignette {
            background: radial-gradient(circle at 70% 30%, transparent 20%, rgba(18, 20, 19, 0.8) 100%);
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

      {/* TopNavBar - Preserved Floating Premium Pill Navbar */}
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

      <main>
        {/* Editorial Hero Section */}
        <section className="relative h-screen w-full flex items-end overflow-hidden bg-surface-container-lowest">
          <div className="absolute inset-0 z-0">
            <img 
              alt="Ejike Ebidilo Institutional Portrait" 
              className="w-full h-full object-cover object-[70%_20%]" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCQ-559P85BIW1Vp8U3rAA_DXLCOB6Cuv_k8nUEPsPB6j1gRYGOyQkwtoqJt8OqbMkc1QcahDC8L52rMXERda9PerZ5UaANs_sdmZ5ARo8eAslvfbuKa9UIY3B2PmhJ-67_UgWdsc50d12bRJogrXpgFXUT703nd8v9kf6fRFHkrkNiwepIRUkqCICu5z6FtCRbsPu_MkX7WNAHyklcbFiwripfDfAyqqTznLLljY-kU7uq7b9-seQTcnLvU_-5cDbHESj5ri6uhwQ" 
            />
            <div className="absolute inset-0 hero-vignette"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60"></div>
          </div>
          <div className="relative z-10 px-margin-mobile md:px-margin-desktop w-full pb-16 md:pb-24">
            <div className="glass-panel w-full md:w-[580px] p-8 md:p-10 rounded-xl shadow-2xl animate-in fade-in slide-in-from-bottom-8 duration-1000">
              <span className="font-label-sm text-secondary tracking-[0.3em] uppercase mb-4 block">Institutional Identity</span>
              <h1 className="font-display-lg text-4xl md:text-5xl text-on-background mb-4 leading-tight">
                THE ORIGINAL <br/> <span className="text-secondary italic">BIG BROTHER.</span>
              </h1>
              <p className="font-body-md text-on-surface-variant/90 mb-6 leading-relaxed">
                Broadcaster. Storyteller. Mentor. <span className="text-on-background font-semibold">Voice of Generations.</span> 
                For over four decades, resonance behind Nigeria's most iconic broadcasts.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/legacy" className="px-8 py-3 bg-secondary text-on-secondary font-bold text-sm rounded hover:-translate-y-0.5 transition-all shadow-lg text-center">
                  The Legacy
                </Link>
                <Link href="/media" className="px-8 py-3 border border-secondary/40 text-secondary font-bold text-sm rounded hover:bg-secondary/10 transition-all text-center">
                  Latest Media
                </Link>
              </div>
            </div>
          </div>
          {/* Side Signature / Date */}
          <div className="absolute right-margin-desktop bottom-24 hidden xl:block z-10">
            <div className="vertical-text font-label-sm text-secondary/30 tracking-[0.8em] uppercase pointer-events-none select-none">
              EJIKE EBIDILO • SINCE 1978
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

        {/* Featured Story Section */}
        <section className="py-32 px-margin-mobile md:px-margin-desktop bg-surface">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
            <div className="md:col-span-7 flex flex-col justify-center">
              <span className="font-label-md text-secondary mb-6 block uppercase tracking-widest">Featured Chronicle</span>
              <h2 className="font-display-lg text-headline-lg md:text-display-lg text-on-background mb-10 leading-tight">
                A Life Behind The <br/> <span className="text-secondary italic">Microphone.</span>
              </h2>
              <div className="space-y-6 font-body-lg text-on-surface-variant/90 leading-relaxed max-w-2xl">
                <p className="">
                  From the early days of radio waves reaching across the federation to the digital frontier of global streaming, Ejike's voice has been a constant companion to millions.
                </p>
                <p className="">
                  His approach to storytelling transcends mere reporting; it is an art form rooted in deep empathy, linguistic precision, and an unwavering commitment to the truth. Whether narrating a nation's history or guiding a new talent, the "Big Brother" archetype is felt in every syllable.
                </p>
              </div>
              <div className="mt-12">
                <Link className="inline-flex items-center gap-4 text-secondary font-label-md group hover:gap-6 transition-all" href="/legacy">
                  READ THE FULL ARCHIVE
                  <span className="material-symbols-outlined" data-icon="arrow_forward">arrow_forward</span>
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

        {/* Quote Section */}
        <section className="py-40 bg-surface-container-low overflow-hidden relative">
          <div className="max-w-5xl mx-auto px-margin-mobile md:px-margin-desktop text-center relative z-10">
            <span className="material-symbols-outlined text-secondary text-7xl mb-12 opacity-50" data-icon="format_quote">format_quote</span>
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
            <div className="group cursor-pointer">
              <div className="aspect-[4/5] bg-surface-container mb-6 overflow-hidden relative rounded-lg">
                <img 
                  alt="Vintage portrait" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDioAxOCtb2-qp6zChX8Z-QBswqAv35CSL1gIfCgs0QO6d84m1xGsf3wVoUqOUIKuez69eIrkos3_SiqVF37TfJ1zPeqHDFQ-x2iEQx0jlWZ_-f1ne5-OPWiIsBpSmUzQHo8kL3e9YkmxDJlOohajdDa0hQVVkJZAo6WqZcTtVuF_SjaX_qZ9gVxj3H7sjytVVEbV3hB4lbPJW-MV5J0fCMyt622sOvAlPRPm3o3cq1FYPADrXGMCMp9z2IYkbScV9ls9LhwRNWR6s" 
                />
                <div className="absolute inset-0 bg-primary-container/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[2px]">
                  <span className="material-symbols-outlined text-white text-5xl" data-icon="play_circle">play_circle</span>
                </div>
              </div>
              <h3 className="font-headline-md text-on-background mb-2">The Golden Era Interviews</h3>
              <p className="font-label-sm text-on-surface-variant uppercase tracking-widest">Archived Audio • 1994</p>
            </div>
            {/* Media Item 2 */}
            <div className="group cursor-pointer">
              <div className="aspect-[4/5] bg-surface-container-highest mb-6 overflow-hidden relative rounded-lg flex items-center justify-center border border-outline-variant/10">
                <span className="material-symbols-outlined text-secondary/10 text-9xl group-hover:scale-110 transition-transform duration-1000" data-icon="mic">mic</span>
                <div className="absolute inset-0 bg-primary-container/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[2px]">
                  <span className="material-symbols-outlined text-white text-5xl" data-icon="podcasts">podcasts</span>
                </div>
              </div>
              <h3 className="font-headline-md text-on-background mb-2">Voice of Generations</h3>
              <p className="font-label-sm text-on-surface-variant uppercase tracking-widest">Monograph • 2023</p>
            </div>
            {/* Media Item 3 */}
            <div className="group cursor-pointer">
              <div className="aspect-[4/5] bg-surface-container mb-6 overflow-hidden relative rounded-lg">
                <img 
                  alt="Creative session" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDeInVieQFXF4d8UzMMykXuM5fPy-Mf9CbEKa3-dUuqw_sEUs3tNBHs_Jw8o517789ZUwK6Iczz6gG22MxX0_gqLSW3YYCxfiVkRt352wnzefGKNIPEr-NICF_aAuQlKLaklbJOnFr2CaKHKUpaqB3vyNe0iUWdMC2cK--x49Te4C8sXut7DpR3L8SeeNHB9_EqSkTTjr829edkDu6mzKIIcxy6AR4Fb9ADw-3wX53BftnhTi4hIMsfCLkmVd7x_QJ5rrasq9L-nzo" 
                />
                <div className="absolute inset-0 bg-primary-container/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[2px]">
                  <span className="material-symbols-outlined text-white text-5xl" data-icon="auto_stories">auto_stories</span>
                </div>
              </div>
              <h3 className="font-headline-md text-on-background mb-2">Beyond the Script</h3>
              <p className="font-label-sm text-on-surface-variant uppercase tracking-widest">Masterclass • Ongoing</p>
            </div>
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
              <span className="material-symbols-outlined text-on-surface-variant hover:text-secondary cursor-pointer transition-all hover:scale-110" data-icon="public">public</span>
              <span className="material-symbols-outlined text-on-surface-variant hover:text-secondary cursor-pointer transition-all hover:scale-110" data-icon="podcasts">podcasts</span>
              <span className="material-symbols-outlined text-on-surface-variant hover:text-secondary cursor-pointer transition-all hover:scale-110" data-icon="video_library">video_library</span>
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
