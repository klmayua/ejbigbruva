"use client";

import React, { useEffect } from 'react';
import Link from 'next/link';
import useReveal from '@/hooks/useReveal';
import useParallax from '@/hooks/useParallax';

export default function Page() {
  useReveal();
  useParallax();

  // Scroll reveal animation for editorial articles to match the design's transition exactly
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const observerOptions = {
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100', 'translate-y-0');
          entry.target.classList.remove('opacity-0', 'translate-y-8');
        }
      });
    }, observerOptions);

    document.querySelectorAll('article').forEach(el => {
      el.classList.add('opacity-0', 'translate-y-8', 'transition-all', 'duration-700');
      observer.observe(el);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <>
      {/* Page-specific overrides to hide the global navbar and footer */}
      <style dangerouslySetInnerHTML={{__html: `
        body {
            background-color: #0c0f0e !important; /* Background Navy */
            color: #e2e3e1;
            overflow-x: hidden;
        }
        .glass-card {
            background: rgba(18, 20, 19, 0.7);
            backdrop-filter: blur(12px);
            -webkit-backdrop-filter: blur(12px);
            border: 0.5px solid rgba(233, 195, 73, 0.15);
        }
        .editorial-shadow {
            box-shadow: 0 4px 30px rgba(0, 0, 0, 0.5);
        }
        .gold-underline {
            background: linear-gradient(to right, #e9c349, transparent);
            height: 2px;
            width: 60px;
        }
      `}} />



       {/* Hero Section */}
       <header className="relative min-h-screen flex items-center pt-16 md:pt-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent z-10"></div>
          <img 
            alt="Reflective portrait for Voice editorial section" 
            className="w-full h-full object-cover object-center opacity-60 scale-105 transition-transform duration-[10000ms] hover:scale-100" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDndsixHjhANHIuI883kfVDOBOzVqzWn_A9sdtc-aj_q1WzwtctGPBKKuAfxkQVDZSRLDEHXjYE3aHca4sQoGIMexkXZkAyieY7rWzBgrm43lAywRyonTh9lb1cGM4yKOje3hRGmkV8AQZqfY8D849XDxg4s37Ehfkkm1JocASoFnfUv06gUUjvw-VuAXDPtnO0H0Jv_lCXYwba1mKXdS2jcToqV2mo3WXJjkqaLbXaH08qIoe_ukGiqEAiLtqKfjpWJxRsgiCYL5k" 
          />
        </div>
        <div className="container mx-auto px-margin-desktop relative z-20">
          <div className="max-w-3xl">
            <span className="font-label-md text-secondary uppercase tracking-[0.3em] mb-4 block">Editorial Reflections</span>
            <h1 className="font-display-lg text-display-lg text-on-surface mb-8 leading-tight">Thoughts Worth Sharing</h1>
            <p className="font-body-lg text-on-surface-variant mb-12 max-w-xl">
              Dive into a curated collection of long-form editorial pieces, private letters, and reflective audio snippets exploring the intersections of legacy, culture, and the institutional archive.
            </p>
            <div className="flex gap-6">
              <a href="#dossier" className="bg-secondary text-on-secondary px-8 py-4 rounded-lg font-label-md flex items-center gap-3 transition-all hover:scale-105">
                LATEST ARTICLES <span className="material-symbols-outlined">arrow_forward</span>
              </a>
              <a href="#dossier" className="border border-secondary text-secondary px-8 py-4 rounded-lg font-label-md flex items-center gap-3 hover:bg-secondary/10 transition-all">
                <span className="material-symbols-outlined">play_circle</span> LISTEN TO AUDIO
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Featured Quote */}
      <section className="py-24 bg-surface-container-lowest border-y border-secondary/10">
        <div className="container mx-auto px-margin-desktop text-center">
          <div className="max-w-4xl mx-auto italic">
            <span className="material-symbols-outlined text-6xl text-secondary/30 mb-8" style={{ fontVariationSettings: "'FILL' 1" }}>format_quote</span>
            <blockquote className="font-headline-lg text-on-surface mb-8">
              "The archive is not a graveyard of documents; it is a living conversation between who we were and who we are becoming. Our voice is the bridge."
            </blockquote>
            <cite className="font-label-md text-secondary not-italic tracking-widest">— EJ EBIDILO, FOUNDER'S REFLECTION</cite>
          </div>
        </div>
      </section>

      {/* Main Editorial Feed */}
      <main id="dossier" className="py-32 bg-background">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="flex justify-between items-end mb-16">
            <div>
              <div className="gold-underline mb-4"></div>
              <h2 className="font-headline-lg text-on-surface">The Monthly Dossier</h2>
            </div>
            <div className="flex gap-4">
              <button className="p-2 border border-outline-variant text-on-surface-variant hover:border-secondary transition-colors" aria-label="Grid View">
                <span className="material-symbols-outlined">grid_view</span>
              </button>
              <button className="p-2 border border-outline-variant text-on-surface-variant hover:border-secondary transition-colors" aria-label="Agenda View">
                <span className="material-symbols-outlined">view_agenda</span>
              </button>
            </div>
          </div>

          {/* Bento Grid Editorial Layout */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
            {/* Main Feature */}
            <article className="md:col-span-8 group cursor-pointer transition-all duration-700">
              <div className="relative overflow-hidden h-[600px] mb-6 editorial-shadow">
                <img 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                  alt="A sophisticated close-up of an antique leather-bound journal resting on a dark mahogany desk" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAmI2UA1wMyhYSQ7c2Zv_MvCT9tDxjqs9_e7UEGbflaoQtgD6u19eVm6TwstQkdWXq4PSE_lNZ5jTwgjGBLKWiDtwxoNqhb7zkq3fJSWakSBKzK6uGKVAxEZ2eF1PiR7wiouaCLttXef-UiDfKpQ6bEqLq3fUVbHcf4MZZwt8yNbFWdFMuAVKZGYq_8PO84aN1qgppmUMaHYb1UXQlnFQLHrFn-hAJp4iVDz0sE-arLiwN28GVK4DvPNPPYDlSC-XXJUujMwHXcVCE" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-12">
                  <span className="font-label-sm bg-secondary text-on-secondary px-3 py-1 mb-4 inline-block">LEGACY SERIES</span>
                  <h3 className="font-headline-lg text-white mb-4">Reclaiming the Narrative: The Silent Influence of Archive</h3>
                  <p className="font-body-md text-on-surface-variant/90 max-w-lg">How the preservation of overlooked voices shapes the future of modern identity and institutional power structures.</p>
                </div>
              </div>
            </article>

            {/* Sidebar Content */}
            <div className="md:col-span-4 flex flex-col gap-gutter">
              <article className="glass-card p-8 group transition-all duration-700">
                <span className="text-secondary font-label-sm mb-4 block">AUDIO EPISODE #24</span>
                <h4 className="font-headline-md text-on-surface mb-4 group-hover:text-secondary transition-colors">Echoes of the 1970s: A Private Interview</h4>
                <div className="flex items-center gap-4 text-on-surface-variant">
                  <span className="material-symbols-outlined text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>play_circle</span>
                  <span className="text-label-md tracking-tighter">14:22 MINS</span>
                </div>
              </article>
              
              <article className="relative h-[380px] group overflow-hidden transition-all duration-700">
                <img 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" 
                  alt="A collection of vintage black and white photographs spread across a dark table" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDnnxJQ9vkkCiIUz9m9Ku8u4ehx0t0tMM0Y5rKlKZshVZWA8_DuEoANo4y0voB31y1uVl3NADGiNgxY3BuVFvf5LO1snOZoUemONqyi8xuBLsu3xGoifT-iOlwLf5QF_TWly-GJ5PqCiZInN8LdtWIJWclnd_YORyimKgJ95ctlK0IE92zZ9RHcYruqKgd8PilgtvRiMIBLq1aJ7J4npsj-5D6laosew2kgXNm43kYxth7Ua4qy7QkzXR9fgx7Pvtjbz_N88tmHPo0" 
                />
                <div className="absolute inset-0 bg-secondary/10 group-hover:bg-transparent transition-colors"></div>
                <div className="absolute inset-x-0 bottom-0 p-8 glass-card border-none">
                  <h4 className="font-label-md text-secondary uppercase mb-2">Reflections</h4>
                  <p className="font-body-md font-bold">The Visual Language of Remembrance</p>
                </div>
              </article>
            </div>

            {/* Three Column Row */}
            <div className="md:col-span-4 glass-card p-10 flex flex-col justify-between">
              <div>
                <span className="material-symbols-outlined text-secondary mb-6">description</span>
                <h4 className="font-headline-md mb-4 leading-snug">Letters from the Field: July Edition</h4>
                <p className="text-on-surface-variant font-body-md">A monthly deep dive into our most recent acquisitions and the stories behind them.</p>
              </div>
              <a className="mt-8 text-secondary font-label-md flex items-center gap-2 hover:translate-x-2 transition-transform" href="/media">
                READ FULL TRANSCRIPT <span className="material-symbols-outlined text-sm">north_east</span>
              </a>
            </div>

            <div className="md:col-span-4 group cursor-pointer">
              <div className="aspect-square overflow-hidden mb-6">
                <img 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                  alt="High-contrast editorial shot of a bookshelf in a dark, luxury library" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuB5H9BDG0nQBKU9vWf4Y5InSDlfwIJkKhrGHNHx3QYVtwJgQ9OzITVrGVfteNH5iI2rJOsbllAKGi3iUDW2pizOwYpdxv1aFtVpFLjePXNHPWOwkXRydKtof3eU7BKOM-tbN6uWml1M27WEFe1Zo9weV2WzUyjr00HHL0G59shONE3S-dpXMbNgOGUQeysLSEodIN-bx4o_tuFi9QHctUol2JIf8C8Fes_aAeGJKpZUWGAOPjZu2Z-pv_Ng171_zPMoxuXTSYrIlZQ" 
                />
              </div>
              <h4 className="font-headline-md mb-2">Architectural Whispers</h4>
              <p className="text-on-surface-variant">Exploring the physical spaces where history is held captive.</p>
            </div>

            <div className="md:col-span-4 group cursor-pointer">
              <div className="aspect-square overflow-hidden mb-6">
                <img 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                  alt="Minimalist abstract photograph featuring layers of deep navy blue textures" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBEX_iB19Uzhq1eG7ppPHl12UCnVfNbUOmQmNEKHMsrwJ1DYDsxABGyOPTnK8fOro7rRdB8af2b3qoO3fccH3hWYjDkr0CPNaMd-6OpVlu7miJIWMCk2f82dfp53QPziYOxlZKtB0Lc41GB-BUN6uRxMT61Oz_XRvh6KN5OXqjZuXHi65lhdqRGsjrIGVTBELGWqGapchlG5KOoEi4LRelnbKJSx7r-40myFlwstHSxVSJ7ifuzFjJOvdPk3kuRzqxydx40JO5a1ag" 
                />
              </div>
              <h4 className="font-headline-md mb-2">Defining the Void</h4>
              <p className="text-on-surface-variant">The power of silence in recorded oral histories.</p>
            </div>
          </div>
        </div>
      </main>

      {/* Subscription Section */}
      <section className="py-24 bg-surface-container-high relative overflow-hidden">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop relative z-10 text-center">
          <h2 className="font-display-lg text-headline-lg mb-6">Join the Internal Dialogue</h2>
          <p className="text-on-surface-variant mb-12 max-w-xl mx-auto">Receive quarterly reflections, exclusive media releases, and invitations to private institutional gatherings.</p>
          <form className="max-w-md mx-auto flex gap-0 border-b-2 border-secondary/50 focus-within:border-secondary transition-all" onSubmit={(e) => e.preventDefault()}>
            <input className="bg-transparent border-none focus:ring-0 text-secondary w-full py-4 font-label-md placeholder:text-secondary/50 outline-none" placeholder="EMAIL ADDRESS" type="email" required />
            <button className="text-secondary p-4 group" type="submit" aria-label="Subscribe">
              <span className="material-symbols-outlined group-hover:translate-x-2 transition-transform">arrow_forward</span>
            </button>
          </form>
        </div>
      </section>


    </>
  );
}
