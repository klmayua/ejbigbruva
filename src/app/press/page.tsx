"use client";

import React, { useEffect, useState } from 'react';
import Link from 'next/link';

export default function Page() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Observer for fade-in animations
    const observerOptions = {
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100', 'translate-y-0');
          entry.target.classList.remove('opacity-0', 'translate-y-10');
        }
      });
    }, observerOptions);

    document.querySelectorAll('section, article').forEach(el => {
      el.classList.add('opacity-0', 'translate-y-10', 'transition-all', 'duration-1000');
      observer.observe(el);
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <style dangerouslySetInnerHTML={{__html: `
        
        body {
            background-color: #0c0f0e;
            color: #e2e3e1;
            font-family: 'Inter', sans-serif;
            overflow-x: hidden;
        }
        .font-serif {
            font-family: 'Libre Caslon Text', serif;
        }
        .glass-panel {
            background: rgba(30, 32, 31, 0.7);
            backdrop-filter: blur(12px);
            border: 1px solid rgba(233, 195, 73, 0.1);
        }
        .editorial-line {
            height: 1px;
            background: linear-gradient(90deg, transparent, rgba(233, 195, 73, 0.3), transparent);
        }
        .material-symbols-outlined {
            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
        }
        .transition-cubic {
            transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
        }
      `}} />

       <main className="pt-20 md:pt-32 pb-24 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        {/* Header Section */}
        <header className="mb-20 text-center animate-none">
          <span className="font-label-md text-label-md text-secondary tracking-[0.3em] uppercase block mb-4">Official Newsroom</span>
          <h1 className="font-display-lg text-display-lg mb-6 leading-tight font-serif uppercase">Media &amp; Press Archive</h1>
          <div className="editorial-line w-full max-w-2xl mx-auto mb-8"></div>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-3xl mx-auto">
            The authoritative source for news, updates, and official communications from EJTheVoice. High-resolution brand assets and sanctioned media materials for professional publication.
          </p>
        </header>

        {/* Media Kit & Brand Assets Bento Grid */}
        <section className="grid grid-cols-1 md:grid-cols-12 gap-gutter mb-24 transition-all duration-1000 opacity-100 translate-y-0">
          <div className="md:col-span-8 glass-panel p-10 rounded-lg flex flex-col justify-between">
            <div>
              <h2 className="font-headline-lg text-headline-lg mb-4 text-secondary font-serif">Official Biography</h2>
              <p className="font-body-md text-body-md text-on-surface-variant mb-6 leading-relaxed">
                Born from a legacy of charisma and leadership, EJTheVoice represents the pinnacle of premium entertainment and cultural influence. Known as "The Original Voice of Africa," Ejike Ibedilo has redefined the intersection of media personality and visionary creator. His career spans decades of groundbreaking voice work, events, and community building, cementing his place as a sovereign figure in the global media landscape.
              </p>
            </div>
            <div className="flex gap-4">
              <button className="bg-secondary text-background font-label-md text-label-md px-8 py-3 rounded hover:scale-[1.02] active:scale-95 transition-cubic flex items-center gap-2 cursor-pointer border-none outline-none font-bold">
                <span className="material-symbols-outlined flex items-center justify-center">download</span> Download Full Bio (PDF)
              </button>
              <button className="border border-outline-variant text-on-surface font-label-md text-label-md px-8 py-3 rounded hover:bg-surface-variant transition-cubic cursor-pointer">
                View Career Timeline
              </button>
            </div>
          </div>
          <div className="md:col-span-4 flex flex-col gap-gutter">
            <div className="bg-primary-container p-8 rounded-lg">
              <h3 className="font-headline-md text-headline-md text-primary mb-2 font-serif">Media Kit</h3>
              <p className="font-label-md text-label-md text-primary/80 mb-6 uppercase">Winter 2024 Collection</p>
              <button className="w-full bg-white/10 hover:bg-white/20 text-on-primary-container py-4 rounded-lg flex items-center justify-center gap-2 transition-cubic cursor-pointer border-none outline-none font-bold">
                <span className="material-symbols-outlined flex items-center justify-center">folder_zip</span> Download Bundle
              </button>
            </div>
            <div className="glass-panel p-8 rounded-lg border-l-4 border-secondary">
              <h3 className="font-label-md text-label-md text-secondary uppercase mb-4 tracking-widest">Brand Colors</h3>
              <div className="flex gap-2">
                <div className="w-12 h-12 rounded-full bg-[#0c0f0e] border border-outline shadow-inner" title="Midnight Navy"></div>
                <div className="w-12 h-12 rounded-full bg-[#e9c349] border border-outline shadow-inner" title="Royal Gold"></div>
                <div className="w-12 h-12 rounded-full bg-[#e2e3e1] border border-outline shadow-inner" title="Soft Ivory"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Approved Photography Section */}
        <section className="mb-24 transition-all duration-1000 opacity-100 translate-y-0">
          <div className="flex items-end justify-between mb-10 border-b border-outline-variant pb-6">
            <div>
              <h2 className="font-headline-lg text-headline-lg uppercase tracking-tight font-serif">Approved Photography</h2>
              <p className="font-label-md text-label-md text-on-surface-variant mt-2">FOR EDITORIAL USE ONLY. PLEASE CREDIT ACCORDINGLY.</p>
            </div>
            <button className="hidden md:flex items-center gap-2 text-secondary font-label-md text-label-md hover:underline decoration-2 cursor-pointer bg-transparent border-none outline-none">
              Gallery View <span className="material-symbols-outlined flex items-center">arrow_outward</span>
            </button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-gutter">
            {/* Photo 1 */}
            <div className="group relative overflow-hidden rounded-lg">
              <img alt="Ejike Ibedilo in Traditional Attire" className="w-full aspect-[3/4] object-cover transition-transform duration-700 group-hover:scale-110" src="/images/EJ_Agbada_01.jpeg"/>
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <p className="font-label-sm text-label-sm text-secondary mb-1">TRADITIONAL PORTRAIT</p>
                <button className="bg-surface text-on-surface px-4 py-2 text-xs rounded border border-secondary/30 flex items-center justify-center gap-2 cursor-pointer">
                  <span className="material-symbols-outlined text-sm flex items-center">download</span> High-Res
                </button>
              </div>
            </div>
            {/* Photo 2 */}
            <div className="group relative overflow-hidden rounded-lg">
              <img alt="Ejike Ibedilo Studio Close-up" className="w-full aspect-[3/4] object-cover transition-transform duration-700 group-hover:scale-110" src="/images/EJ_casual_01.jpeg"/>
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <p className="font-label-sm text-label-sm text-secondary mb-1">STUDIO PROFILE</p>
                <button className="bg-surface text-on-surface px-4 py-2 text-xs rounded border border-secondary/30 flex items-center justify-center gap-2 cursor-pointer">
                  <span className="material-symbols-outlined text-sm flex items-center">download</span> High-Res
                </button>
              </div>
            </div>
            {/* Photo 3 */}
            <div className="group relative overflow-hidden rounded-lg">
              <img alt="Ejike Ibedilo Executive Lounge" className="w-full aspect-[3/4] object-cover transition-transform duration-700 group-hover:scale-110" src="/images/EJ_casual_02.jpeg"/>
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <p className="font-label-sm text-label-sm text-secondary mb-1">EXECUTIVE PORTRAIT</p>
                <button className="bg-surface text-on-surface px-4 py-2 text-xs rounded border border-secondary/30 flex items-center justify-center gap-2 cursor-pointer">
                  <span className="material-symbols-outlined text-sm flex items-center">download</span> High-Res
                </button>
              </div>
            </div>
            {/* Photo 4 */}
            <div className="group relative overflow-hidden rounded-lg">
              <img alt="Ejike Ibedilo Casual Modern" className="w-full aspect-[3/4] object-cover transition-transform duration-700 group-hover:scale-110" src="/images/EJ_casual_03.jpeg"/>
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <p className="font-label-sm text-label-sm text-secondary mb-1">CASUAL SOPHISTICATION</p>
                <button className="bg-surface text-on-surface px-4 py-2 text-xs rounded border border-secondary/30 flex items-center justify-center gap-2 cursor-pointer">
                  <span className="material-symbols-outlined text-sm flex items-center">download</span> High-Res
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Latest Press Releases */}
        <section className="mb-24 transition-all duration-1000 opacity-100 translate-y-0">
          <div className="flex items-center justify-between mb-10">
            <h2 className="font-headline-lg text-headline-lg font-serif">Press Releases</h2>
            <div className="flex gap-2">
              <button className="p-2 border border-outline-variant rounded hover:bg-surface-variant transition-colors cursor-pointer bg-transparent">
                <span className="material-symbols-outlined flex items-center justify-center">filter_list</span>
              </button>
              <button className="p-2 border border-outline-variant rounded hover:bg-surface-variant transition-colors cursor-pointer bg-transparent">
                <span className="material-symbols-outlined flex items-center justify-center">search</span>
              </button>
            </div>
          </div>
          <div className="space-y-6">
            {/* Release 1 */}
            <article className="glass-panel group p-8 rounded-lg flex flex-col md:flex-row gap-8 items-start hover:bg-surface-container-high transition-cubic cursor-pointer transition-all duration-1000 opacity-100 translate-y-0">
              <div className="md:w-32 flex-shrink-0">
                <p className="font-label-md text-label-md text-secondary">NOV 14, 2024</p>
                <p className="font-label-sm text-label-sm text-on-surface-variant uppercase mt-1">Global Event</p>
              </div>
              <div className="flex-grow">
                <h3 className="font-headline-md text-headline-md mb-3 group-hover:text-secondary transition-colors font-serif">EJTheVoice Announces Exclusive "Legacy Night" Gala in London</h3>
                <p className="font-body-md text-body-md text-on-surface-variant mb-4">Official announcement regarding the highly anticipated European debut of the sovereign entertainment icon Ejike Ibedilo.</p>
                <div className="flex gap-4 text-secondary font-label-md text-label-md">
                  <span className="flex items-center gap-1 hover:underline">Read Release <span className="material-symbols-outlined text-sm flex items-center">chevron_right</span></span>
                  <span className="flex items-center gap-1 hover:underline">PDF Version <span className="material-symbols-outlined text-sm flex items-center">picture_as_pdf</span></span>
                </div>
              </div>
            </article>
            {/* Release 2 */}
            <article className="glass-panel group p-8 rounded-lg flex flex-col md:flex-row gap-8 items-start hover:bg-surface-container-high transition-cubic cursor-pointer transition-all duration-1000 opacity-100 translate-y-0">
              <div className="md:w-32 flex-shrink-0">
                <p className="font-label-md text-label-md text-secondary">OCT 22, 2024</p>
                <p className="font-label-sm text-label-sm text-on-surface-variant uppercase mt-1">Foundation</p>
              </div>
              <div className="flex-grow">
                <h3 className="font-headline-md text-headline-md mb-3 group-hover:text-secondary transition-colors font-serif">Launch of the EJTheVoice Creative Arts Scholarship Fund</h3>
                <p className="font-body-md text-body-md text-on-surface-variant mb-4">Empowering the next generation of African talent through specialized training in voice, production, and digital media.</p>
                <div className="flex gap-4 text-secondary font-label-md text-label-md">
                  <span className="flex items-center gap-1 hover:underline">Read Release <span className="material-symbols-outlined text-sm flex items-center">chevron_right</span></span>
                  <span className="flex items-center gap-1 hover:underline">PDF Version <span className="material-symbols-outlined text-sm flex items-center">picture_as_pdf</span></span>
                </div>
              </div>
            </article>
          </div>
        </section>

        {/* Media Coverage */}
        <section className="mb-24 transition-all duration-1000 opacity-100 translate-y-0">
          <h2 className="font-headline-lg text-headline-lg font-serif">Selected Coverage</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
            <Link className="block p-8 border border-outline-variant/30 bg-surface-container-lowest hover:border-secondary transition-colors group" href="#">
              <div className="flex items-center justify-between mb-6">
                <span className="font-label-sm text-label-sm text-on-surface-variant uppercase">Vogue Entertainment</span>
                <span className="material-symbols-outlined text-secondary opacity-0 group-hover:opacity-100 transition-opacity flex items-center">open_in_new</span>
              </div>
              <h4 className="font-headline-md text-headline-md italic mb-4 font-serif">"The Quiet Majesty of Ejike Ibedilo: Defining Sovereign Celebrity."</h4>
              <p className="font-label-md text-label-md text-secondary">May 2024 Issue</p>
            </Link>
            <Link className="block p-8 border border-outline-variant/30 bg-surface-container-lowest hover:border-secondary transition-colors group" href="#">
              <div className="flex items-center justify-between mb-6">
                <span className="font-label-sm text-label-sm text-on-surface-variant uppercase">Global Media Hub</span>
                <span className="material-symbols-outlined text-secondary opacity-0 group-hover:opacity-100 transition-opacity flex items-center">open_in_new</span>
              </div>
              <h4 className="font-headline-md text-headline-md italic mb-4 font-serif">"The Voice That Built an Empire: An Interview with EJTheVoice."</h4>
              <p className="font-label-md text-label-md text-secondary">June 2024 Feature</p>
            </Link>
            <Link className="block p-8 border border-outline-variant/30 bg-surface-container-lowest hover:border-secondary transition-colors group" href="#">
              <div className="flex items-center justify-between mb-6">
                <span className="font-label-sm text-label-sm text-on-surface-variant uppercase">Business Daily</span>
                <span className="material-symbols-outlined text-secondary opacity-0 group-hover:opacity-100 transition-opacity flex items-center">open_in_new</span>
              </div>
              <h4 className="font-headline-md text-headline-md italic mb-4 font-serif">"Media Monetization: How Ejike Ibedilo Revolutionized Talent Branding."</h4>
              <p className="font-label-md text-label-md text-secondary">July 2024 Profile</p>
            </Link>
          </div>
        </section>

        {/* Media Contact */}
        <section className="glass-panel p-16 rounded-xl text-center border-t-4 border-secondary overflow-hidden relative transition-all duration-1000 opacity-100 translate-y-0">
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-secondary/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl"></div>
          <h2 className="font-headline-lg text-headline-lg mb-6 font-serif">Media Inquiries</h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto mb-10">
            For interview requests, event appearances, and official media partnerships, please contact our global press office.
          </p>
          <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
            <div className="text-center">
              <p className="font-label-sm text-label-sm text-secondary uppercase mb-2">Global Media Relations</p>
              <p className="font-headline-md text-headline-md font-serif">press@bigbruva.com</p>
            </div>
            <div className="hidden md:block w-px h-12 bg-outline-variant"></div>
            <div className="text-center">
              <p className="font-label-sm text-label-sm text-secondary uppercase mb-2">Urgent Inquiries</p>
              <p className="font-headline-md text-headline-md font-serif">+44 20 7946 0958</p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
