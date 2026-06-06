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
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <style dangerouslySetInnerHTML={{__html: `
        body > nav { display: none !important; }
        body > footer { display: none !important; }
        
        body {
            background-color: #0c0f0e;
            color: #e2e3e1;
            font-family: 'Inter', sans-serif;
            overflow-x: hidden;
        }
        .font-serif {
            font-family: 'Libre Caslon Text', serif;
        }
        .material-symbols-outlined {
            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
            display: inline-block;
            vertical-align: middle;
        }
        .glass-card {
            background: rgba(18, 20, 19, 0.6);
            backdrop-filter: blur(12px);
            border: 0.5px solid rgba(233, 195, 73, 0.15);
        }
        .gradient-text {
            background: linear-gradient(to bottom right, #ffe088, #e9c349);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }
      `}} />

      {/* TopNavBar */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 border-b border-soft-ivory/10 px-margin-desktop py-base flex justify-between items-center ${
        scrolled ? 'py-2 shadow-2xl bg-[#b2c5ff]/90 backdrop-blur-md' : 'py-base bg-[#b2c5ff]/70 backdrop-blur-md dark:bg-[#b2c5ff]/70'
      }`}>
        <div className="flex items-center gap-4">
          <Link href="/" className="flex items-center gap-4 cursor-pointer">
            <img alt="BIGBRUVA LOGO" className="h-10 w-auto" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC_9RAnNPaThFbDC9iMvDA8uOr07jICBY7uGu__cFV8jxBzQO8-Tm3ebSes-ThFZ8AKYJimewJjveK0G5ls4ZGYP5zKw4bmFIvzD2fk8dWvSQ5czhfyY_wZz26nrNvoq0cjmOSZ50z0RrcjZ1-60wFLKhQi-FaySXW2mByFNxJb5sDdJ7A25SmAl6Epehet_ttWF0nOiJAJ7W7qpYZHJZaWhADCKgpDlUqgQxeRRQvzyuFTWsDwhJevSezlSCvvnqQtWmBKq7PV754"/>
            <span className="font-display-lg text-headline-md text-secondary tracking-widest uppercase font-serif">BIGBRUVA</span>
          </Link>
        </div>
        <div className="hidden lg:flex items-center gap-8">
          <Link className="text-on-surface-variant hover:text-secondary transition-colors duration-300 font-label-md text-label-md" href="/">Home</Link>
          <Link className="text-on-surface-variant hover:text-secondary transition-colors duration-300 font-label-md text-label-md" href="/about">About</Link>
          <Link className="text-on-surface-variant hover:text-secondary transition-colors duration-300 font-label-md text-label-md" href="/legacy">Legacy</Link>
          <Link className="text-on-surface-variant hover:text-secondary transition-colors duration-300 font-label-md text-label-md" href="/media">Media</Link>
          <Link className="text-on-surface-variant hover:text-secondary transition-colors duration-300 font-label-md text-label-md" href="/voice">Voice</Link>
          <Link className="text-on-surface-variant hover:text-secondary transition-colors duration-300 font-label-md text-label-md" href="/events">Events</Link>
          <Link className="text-on-surface-variant hover:text-secondary transition-colors duration-300 font-label-md text-label-md" href="/gallery">Gallery</Link>
        </div>
        <div className="flex items-center gap-6">
          <Link className="text-on-surface-variant hover:text-secondary transition-colors duration-300 font-label-md text-label-md" href="/community">Community</Link>
          <Link className="text-secondary border-b-2 border-secondary pb-1 font-bold font-label-md text-label-md" href="/press">Press</Link>
          <Link className="bg-secondary text-on-secondary px-6 py-2 rounded-sm font-label-md text-label-md hover:bg-secondary-fixed transition-all duration-300" href="/contact">Contact</Link>
        </div>
      </nav>

      <main className="pt-32 pb-24">
        {/* Hero Section: Official Biography */}
        <section className="max-w-container-max mx-auto px-margin-desktop mb-24">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter items-center">
            <div className="md:col-span-5 relative group">
              <div className="absolute -inset-2 border border-secondary/20 group-hover:border-secondary/40 transition-colors duration-500"></div>
              <img alt="Ejike Ebidilo Casual Portrait" className="w-full grayscale hover:grayscale-0 transition-all duration-700 aspect-[2/3] object-cover relative z-10 shadow-2xl" src="/images/EJ_casual_03.jpeg" />
            </div>
            <div className="md:col-span-7 flex flex-col justify-center">
              <span className="text-secondary font-label-md text-label-md tracking-[0.2em] uppercase mb-4">Official Biography</span>
              <h1 className="font-display-lg text-display-lg mb-8 leading-tight font-serif">Ejike Ebidilo: <span className="gradient-text italic font-normal">The Visionary Voice</span></h1>
              <div className="space-y-6 text-on-surface-variant font-body-lg text-body-lg">
                <p>With a career spanning decades of institutional influence, Ejike Ebidilo has emerged as a cornerstone of strategic communications and legacy preservation. His work under the BIGBRUVA banner has redefined how narratives are archived and projected in the modern era.</p>
                <p>This newsroom serves as the definitive source for accredited information, high-resolution brand assets, and official announcements regarding his ongoing contributions to media and institutional heritage.</p>
              </div>
              <div className="mt-10 flex gap-6">
                <button className="flex items-center gap-2 text-secondary hover:text-secondary-fixed transition-colors font-label-md text-label-md bg-transparent border-none outline-none cursor-pointer">
                  <span className="material-symbols-outlined flex items-center">description</span>
                  Download Full Biography (PDF)
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Press Releases & Coverage: Bento Layout */}
        <section className="max-w-container-max mx-auto px-margin-desktop mb-32">
          <div className="flex justify-between items-end mb-12">
            <div>
              <span className="text-secondary font-label-md text-label-md tracking-[0.2em] uppercase">The Newsroom</span>
              <h2 className="font-headline-lg text-headline-lg mt-2 font-serif">Latest Press &amp; Coverage</h2>
            </div>
            <button className="text-on-surface-variant hover:text-secondary transition-colors underline underline-offset-8 cursor-pointer bg-transparent border-none outline-none">View Archive</button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {/* Main Release */}
            <div className="md:col-span-2 md:row-span-2 glass-card p-10 flex flex-col justify-between group cursor-pointer overflow-hidden">
              <div>
                <span className="text-secondary/60 font-label-sm text-label-sm uppercase mb-4 block">Press Release • June 12, 2024</span>
                <h3 className="font-headline-md text-headline-md group-hover:text-secondary transition-colors duration-300 font-serif">Announcing the BIGBRUVA Institutional Archive Global Initiative</h3>
                <p className="mt-6 text-on-surface-variant font-body-md text-body-md line-clamp-3">A revolutionary digital sanctuary dedicated to the meticulous preservation of media history and cultural milestones, spearheaded by Ejike Ebidilo.</p>
              </div>
              <div className="flex items-center gap-2 text-secondary mt-8">
                <span className="font-label-md text-label-md uppercase tracking-wider">Read Full Release</span>
                <span className="material-symbols-outlined group-hover:translate-x-2 transition-transform flex items-center">arrow_forward</span>
              </div>
            </div>
            {/* Secondary Coverage */}
            <div className="glass-card p-6 flex flex-col justify-between group cursor-pointer border-l-4 border-l-secondary">
              <span className="text-secondary/60 font-label-sm text-label-sm uppercase mb-4 block">Media Coverage • Forbes</span>
              <h4 className="text-lg font-bold group-hover:text-secondary transition-colors font-serif">The Architect of Digital Legacy</h4>
              <span className="material-symbols-outlined text-secondary mt-4 flex items-center">open_in_new</span>
            </div>
            <div className="glass-card p-6 flex flex-col justify-between group cursor-pointer">
              <span className="text-secondary/60 font-label-sm text-label-sm uppercase mb-4 block">Media Coverage • Times</span>
              <h4 className="text-lg font-bold group-hover:text-secondary transition-colors font-serif">Voice of the Institution</h4>
              <span className="material-symbols-outlined text-secondary mt-4 flex items-center">open_in_new</span>
            </div>
            {/* Media Kit Promo */}
            <div className="md:col-span-2 bg-secondary/10 border border-secondary/20 p-8 flex items-center justify-between group">
              <div className="max-w-[70%]">
                <h4 className="text-headline-md font-headline-md text-secondary font-serif">2024 Media Kit</h4>
                <p className="text-on-surface-variant font-body-md text-body-md mt-2">Essential assets, backgrounders, and high-res imagery for press use.</p>
              </div>
              <button className="bg-secondary text-on-secondary px-6 py-4 rounded-full flex items-center gap-2 hover:scale-105 transition-transform cursor-pointer font-bold border-none outline-none">
                <span className="material-symbols-outlined flex items-center">download</span>
                <span>240MB</span>
              </button>
            </div>
          </div>
        </section>

        {/* Brand Assets: Grid */}
        <section className="max-w-container-max mx-auto px-margin-desktop mb-32">
          <div className="mb-12">
            <span className="text-secondary font-label-md text-label-md tracking-[0.2em] uppercase">Official Assets</span>
            <h2 className="font-headline-lg text-headline-lg mt-2 font-serif animate-none">Approved Photography &amp; Brand Identity</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {/* Photography Card */}
            <div className="group">
              <div className="aspect-square bg-surface-container overflow-hidden mb-4 relative">
                <img alt="Press Portrait 01" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 scale-110 group-hover:scale-100" src="/images/EJ_casual_03.jpeg" />
                <div className="absolute inset-0 bg-background/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                  <span className="material-symbols-outlined p-2 bg-secondary text-on-secondary rounded-full cursor-pointer hover:bg-secondary-fixed transition-colors flex items-center">download</span>
                  <span className="material-symbols-outlined p-2 bg-white/20 backdrop-blur text-white rounded-full cursor-pointer hover:bg-white/30 transition-colors flex items-center">visibility</span>
                </div>
              </div>
              <p className="font-label-md text-label-md text-on-surface-variant">Official Portrait 01 (Color)</p>
            </div>
            {/* Logo Assets */}
            <div className="group">
              <div className="aspect-square bg-surface-container flex items-center justify-center mb-4 relative p-12 border border-soft-ivory/5">
                <img alt="BIGBRUVA Crest" className="w-full h-auto opacity-40 group-hover:opacity-100 transition-all duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC_9RAnNPaThFbDC9iMvDA8uOr07jICBY7uGu__cFV8jxBzQO8-Tm3ebSes-ThFZ8AKYJimewJjveK0G5ls4ZGYP5zKw4bmFIvzD2fk8dWvSQ5czhfyY_wZz26nrNvoq0cjmOSZ50z0RrcjZ1-60wFLKhQi-FaySXW2mByFNxJb5sDdJ7A25SmAl6Epehet_ttWF0nOiJAJ7W7qpYZHJZaWhADCKgpDlUqgQxeRRQvzyuFTWsDwhJevSezlSCvvnqQtWmBKq7PV754"></img>
                <div className="absolute inset-0 bg-background/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                  <span className="material-symbols-outlined p-2 bg-secondary text-on-secondary rounded-full cursor-pointer hover:bg-secondary-fixed transition-colors flex items-center">download</span>
                </div>
              </div>
              <p className="font-label-md text-label-md text-on-surface-variant">BIGBRUVA Crest (Primary)</p>
            </div>
            {/* Logo Inverted */}
            <div className="group">
              <div className="aspect-square bg-secondary flex items-center justify-center mb-4 relative p-12">
                <img alt="BIGBRUVA Crest Inverted" className="w-full h-auto invert group-hover:scale-110 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC_9RAnNPaThFbDC9iMvDA8uOr07jICBY7uGu__cFV8jxBzQO8-Tm3ebSes-ThFZ8AKYJimewJjveK0G5ls4ZGYP5zKw4bmFIvzD2fk8dWvSQ5czhfyY_wZz26nrNvoq0cjmOSZ50z0RrcjZ1-60wFLKhQi-FaySXW2mByFNxJb5sDdJ7A25SmAl6Epehet_ttWF0nOiJAJ7W7qpYZHJZaWhADCKgpDlUqgQxeRRQvzyuFTWsDwhJevSezlSCvvnqQtWmBKq7PV754"></img>
                <div className="absolute inset-0 bg-background/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                  <span className="material-symbols-outlined p-2 bg-white text-black rounded-full cursor-pointer flex items-center">download</span>
                </div>
              </div>
              <p className="font-label-md text-label-md text-on-surface-variant">BIGBRUVA Crest (Inverted)</p>
            </div>
            {/* Asset Card */}
            <div className="group">
              <div className="aspect-square glass-card flex flex-col items-center justify-center mb-4 relative group-hover:border-secondary transition-all">
                <span className="material-symbols-outlined text-secondary text-5xl mb-4 flex items-center justify-center" style={{ fontVariationSettings: "'FILL' 0" }}>branding_watermark</span>
                <span className="font-label-md text-label-md text-secondary">Typography Kit</span>
                <div className="absolute inset-0 bg-background/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                  <span className="material-symbols-outlined p-2 bg-secondary text-on-secondary rounded-full cursor-pointer flex items-center">download</span>
                </div>
              </div>
              <p className="font-label-md text-label-md text-on-surface-variant">Official Brand Guidelines</p>
            </div>
          </div>
        </section>

        {/* Media Contact Section */}
        <section className="max-w-4xl mx-auto px-margin-mobile">
          <div className="glass-card p-12 text-center border-t-2 border-t-secondary relative overflow-hidden">
            <div className="absolute -top-10 -right-10 opacity-5">
              <img alt="Watermark" className="w-64" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC_9RAnNPaThFbDC9iMvDA8uOr07jICBY7uGu__cFV8jxBzQO8-Tm3ebSes-ThFZ8AKYJimewJjveK0G5ls4ZGYP5zKw4bmFIvzD2fk8dWvSQ5czhfyY_wZz26nrNvoq0cjmOSZ50z0RrcjZ1-60wFLKhQi-FaySXW2mByFNxJb5sDdJ7A25SmAl6Epehet_ttWF0nOiJAJ7W7qpYZHJZaWhADCKgpDlUqgQxeRRQvzyuFTWsDwhJevSezlSCvvnqQtWmBKq7PV754"/>
            </div>
            <h2 className="font-headline-lg text-headline-lg mb-6 font-serif">Media Inquiries</h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant mb-10">For interview requests, speaking engagements, or specific media asset permissions, please contact our global communications desk.</p>
            <div className="flex flex-col md:flex-row items-center justify-center gap-12">
              <div>
                <span className="font-label-sm text-label-sm text-secondary uppercase tracking-widest block mb-1">Direct Email</span>
                <a className="text-headline-md font-headline-md hover:text-secondary transition-colors underline decoration-secondary/30 font-serif" href="mailto:press@bigbruva.archive">press@bigbruva.archive</a>
              </div>
              <div className="h-12 w-px bg-secondary/20 hidden md:block"></div>
              <div>
                <span className="font-label-sm text-label-sm text-secondary uppercase tracking-widest block mb-1">Global Desk</span>
                <p className="text-headline-md font-headline-md font-serif">+1 (800) BRUVA-HQ</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full py-16 px-margin-desktop bg-surface-container-lowest border-t border-secondary/20">
        <div className="flex flex-col items-center justify-center space-y-8 w-full max-w-container-max mx-auto animate-none">
          <img alt="BIGBRUVA Official Crest" className="w-32 md:w-40 mb-8 opacity-90 hover:opacity-100 transition-opacity duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC6WdFJlD557NG1rjXjDo-d7qR5erFaA-cBmArXCvURIRozCAqFglCoCRtIDt6qYexzdJLve0GkxfaOp0fS0s2Z895B-wzYPSAb7uF1InR9g-H1FNWtQxUVBN8bl9jwc8vTEvVTXy0mgDZZUqukRlYYxNIHvHLM5_BiIony1nnVtb_78YezpJF8eql5hOOQvtChzsTi0hy6udWqH0ndHiePZbWH6cOBNkCNu8QguUbgwn7z0G9XEeI_OOCMV9fUsfttHZcMGJ7GCRA"/>
          <nav className="flex flex-wrap justify-center gap-x-12 gap-y-6 mb-12">
            <Link className="text-on-surface-variant hover:text-secondary transition-colors font-label-md text-label-md" href="/community">Community</Link>
            <Link className="text-secondary font-bold font-label-md text-label-md" href="/press">Press</Link>
            <Link className="text-on-surface-variant hover:text-secondary transition-colors font-label-md text-label-md" href="/contact">Contact</Link>
            <Link className="text-on-surface-variant hover:text-secondary transition-colors font-label-md text-label-md" href="#">Privacy Policy</Link>
            <Link className="text-on-surface-variant hover:text-secondary transition-colors font-label-md text-label-md" href="#">Terms of Service</Link>
          </nav>
          <div className="editorial-line w-24"></div>
          <p className="text-on-surface-variant/60 font-body-md text-label-md tracking-widest">
            © 2024 EJIKE EBIDILO - BIGBRUVA INSTITUTIONAL ARCHIVE. ALL RIGHTS RESERVED.
          </p>
        </div>
      </footer>
    </>
  );
}
