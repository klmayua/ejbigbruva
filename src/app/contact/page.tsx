"use client";

import React, { useEffect, useState } from 'react';
import Link from 'next/link';

export default function Page() {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Micro-interaction for form labels
    const inputs = document.querySelectorAll('.text-input');
    inputs.forEach(input => {
      const focusHandler = () => {
        const label = input.previousElementSibling as HTMLElement;
        if (label) label.style.color = '#e9c349';
      };
      const blurHandler = () => {
        const label = input.previousElementSibling as HTMLElement;
        if (label) label.style.color = '';
      };

      input.addEventListener('focus', focusHandler);
      input.addEventListener('blur', blurHandler);
    });

    // Simple scroll effect for top nav
    const handleScroll = () => {
      const nav = document.querySelector('nav');
      if (nav) {
        if (window.scrollY > 20) {
          nav.classList.add('shadow-2xl');
        } else {
          nav.classList.remove('shadow-2xl');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      {/* Page specific overrides to hide global nav/footer and define local classes */}
      <style dangerouslySetInnerHTML={{__html: `
        body > nav { display: none !important; }
        body > footer { display: none !important; }
        
        body {
            background-color: #041635 !important;
            color: #e2e3e1;
        }
        .glass-card {
            background: rgba(30, 32, 31, 0.7);
            backdrop-filter: blur(12px);
            border: 1px solid rgba(233, 195, 73, 0.15);
        }
        .text-input {
            background-color: #121413;
            border: none;
            border-bottom: 2px solid #e2e3e1;
            border-radius: 0;
            transition: border-color 0.3s ease;
        }
        .text-input:focus {
            outline: none;
            border-color: #e9c349;
            box-shadow: none;
        }
      `}} />

      {/* TopNavBar */}
      <nav className="fixed top-0 w-full z-50 bg-surface/70 dark:bg-surface/70 backdrop-blur-md border-b border-on-surface/10">
        <div className="flex justify-between items-center px-margin-desktop py-4 max-w-container-max mx-auto h-20">
          <div className="flex items-center gap-4">
            <Link href="/" className="flex items-center gap-4 cursor-pointer">
              <img 
                alt="BIGBRUVA Logo" 
                className="h-10 w-auto" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAKDUJTaZQMpdDOC2D3t7osqjlQOQxKaophIXE6loxPxOQzHL14Sd6mRLxwQH_9wp6_MTNIAld3Xgqf8WEUqZjJEP2ew47rJcn1W7j3XliCqL3Fn3nGotPP4sc6NKw2m6wiUN3oE4CbxLvR5wAX3wNA4iv-pu2LVJamUp_O8z3KIQBmsubc1yvrcxtRynp2YgtxKFsaRKSPfBoJKsBmfsW0yVSW36cxWu8dHK4dqv3dWYjL7WHkBo2ralFMQ69j_6eKNeKEj1x9lrc"
              />
              <span className="font-headline-md text-headline-md uppercase tracking-widest text-on-surface dark:text-on-surface">BIGBRUVA</span>
            </Link>
          </div>
          <div className="hidden md:flex space-x-8">
            <Link className="text-on-surface-variant hover:text-secondary transition-colors duration-300 font-label-md text-label-md" href="/">Home</Link>
            <Link className="text-on-surface-variant hover:text-secondary transition-colors duration-300 font-label-md text-label-md" href="/about">About</Link>
            <Link className="text-on-surface-variant hover:text-secondary transition-colors duration-300 font-label-md text-label-md" href="/legacy">Legacy</Link>
            <Link className="text-on-surface-variant hover:text-secondary transition-colors duration-300 font-label-md text-label-md" href="/media">Media</Link>
            <Link className="text-on-surface-variant hover:text-secondary transition-colors duration-300 font-label-md text-label-md" href="/voice">Voice</Link>
            <Link className="text-on-surface-variant hover:text-secondary transition-colors duration-300 font-label-md text-label-md" href="/events">Events</Link>
            <Link className="text-secondary font-bold border-b-2 border-secondary pb-1 font-label-md text-label-md" href="/contact">Contact</Link>
          </div>
          <div className="flex gap-4">
            <Link href="/gallery" className="bg-secondary text-on-secondary px-6 py-2 font-label-md text-label-md uppercase tracking-widest transition-transform active:scale-95 text-center inline-block">
              Gallery
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Header */}
      <header className="pt-40 pb-20 px-margin-desktop max-w-container-max mx-auto">
        <div className="max-w-3xl">
          <h1 className="font-display-lg text-display-lg mb-4 text-on-surface leading-tight">Institutional Inquiries</h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant">The office of BIGBRUVA manages all global media, speaking engagements, and official partnerships for Ejike Ebidilo.</p>
        </div>
      </header>

      <main className="px-margin-desktop max-w-container-max mx-auto pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter">
          {/* Contact Cards Column (5 Cols) */}
          <div className="lg:col-span-5 space-y-gutter">
            {/* Media Requests Card */}
            <div className="glass-card p-10 flex flex-col h-full group hover:border-secondary transition-colors duration-500">
              <div className="flex items-center gap-4 mb-6">
                <span className="material-symbols-outlined text-secondary text-4xl">movie</span>
                <h3 className="font-headline-md text-headline-md text-on-surface">Media Requests</h3>
              </div>
              <p className="text-on-surface-variant font-body-md mb-8 flex-grow">For press interviews, broadcast appearances, and digital features. Our media team ensures rapid vetting and official statements.</p>
              <a className="text-secondary font-label-md text-label-md uppercase tracking-widest flex items-center gap-2 group-hover:gap-4 transition-all" href="mailto:media@bigbruva.com">
                media@bigbruva.com <span className="material-symbols-outlined">arrow_forward</span>
              </a>
            </div>
            {/* Speaking Engagements Card */}
            <div className="glass-card p-10 flex flex-col group hover:border-secondary transition-colors duration-500">
              <div className="flex items-center gap-4 mb-6">
                <span className="material-symbols-outlined text-secondary text-4xl">mic</span>
                <h3 className="font-headline-md text-headline-md text-on-surface">Speaking &amp; Events</h3>
              </div>
              <p className="text-on-surface-variant font-body-md mb-8">Official bookings for keynote addresses, corporate leadership seminars, and high-profile public appearances.</p>
              <a className="text-secondary font-label-md text-label-md uppercase tracking-widest flex items-center gap-2 group-hover:gap-4 transition-all" href="mailto:bookings@bigbruva.com">
                bookings@bigbruva.com <span className="material-symbols-outlined">arrow_forward</span>
              </a>
            </div>
            {/* Partnerships Card */}
            <div className="glass-card p-10 flex flex-col group hover:border-secondary transition-colors duration-500">
              <div className="flex items-center gap-4 mb-6">
                <span className="material-symbols-outlined text-secondary text-4xl">handshake</span>
                <h3 className="font-headline-md text-headline-md text-on-surface">Partnerships</h3>
              </div>
              <p className="text-on-surface-variant font-body-md mb-8">Strategic alliances with institutions that align with the BIGBRUVA legacy of excellence and authority.</p>
              <a className="text-secondary font-label-md text-label-md uppercase tracking-widest flex items-center gap-2 group-hover:gap-4 transition-all" href="mailto:partnerships@bigbruva.com">
                partnerships@bigbruva.com <span className="material-symbols-outlined">arrow_forward</span>
              </a>
            </div>
          </div>

          {/* Contact Form Column (7 Cols) */}
          <div className="lg:col-span-7">
            <div className="glass-card p-12 h-full">
              <h2 className="font-headline-lg text-headline-lg text-on-surface mb-12">Submit Formal Inquiry</h2>
              <form className="space-y-12" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  <div className="flex flex-col">
                    <label className="font-label-sm text-label-sm uppercase tracking-widest text-on-surface-variant mb-2">Full Name</label>
                    <input className="text-input text-on-surface py-3" placeholder="Johnathan Sterling" type="text" />
                  </div>
                  <div className="flex flex-col">
                    <label className="font-label-sm text-label-sm uppercase tracking-widest text-on-surface-variant mb-2">Professional Email</label>
                    <input className="text-input text-on-surface py-3" placeholder="sterling@corp.com" type="email" />
                  </div>
                </div>
                <div className="flex flex-col">
                  <label className="font-label-sm text-label-sm uppercase tracking-widest text-on-surface-variant mb-2">Organization / Department</label>
                  <input className="text-input text-on-surface py-3" placeholder="Global Media Group" type="text" />
                </div>
                <div className="flex flex-col">
                  <label className="font-label-sm text-label-sm uppercase tracking-widest text-on-surface-variant mb-2">Inquiry Type</label>
                  <select className="text-input text-on-surface py-3 appearance-none bg-transparent" defaultValue="Media Request">
                    <option value="Media Request" className="bg-surface">Media Request</option>
                    <option value="Speaking Engagement" className="bg-surface">Speaking Engagement</option>
                    <option value="Strategic Partnership" className="bg-surface">Strategic Partnership</option>
                    <option value="Institutional Inquiry" className="bg-surface">Institutional Inquiry</option>
                    <option value="Legacy Archive Access" className="bg-surface">Legacy Archive Access</option>
                  </select>
                </div>
                <div className="flex flex-col">
                  <label className="font-label-sm text-label-sm uppercase tracking-widest text-on-surface-variant mb-2">Detailed Message</label>
                  <textarea className="text-input text-on-surface py-3 resize-none" placeholder="Briefly describe the nature of your request, proposed dates, and relevant context..." rows={4}></textarea>
                </div>
                <div className="pt-8">
                  <button className="bg-secondary text-on-secondary px-12 py-4 font-label-md text-label-md uppercase tracking-widest font-bold hover:scale-[1.02] active:scale-95 transition-transform w-full md:w-auto shadow-xl cursor-pointer" type="submit">
                    Submit Documentation
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* Social Links Institutional Banner */}
        <section className="mt-gutter">
          <div className="glass-card py-12 px-10 flex flex-col md:flex-row justify-between items-center gap-8">
            <div>
              <h4 className="font-headline-md text-headline-md text-on-surface mb-2">Digital Presence</h4>
              <p className="text-on-surface-variant font-body-md">Connect with the official BIGBRUVA ecosystem across global networks.</p>
            </div>
            <div className="flex gap-10">
              <a className="group" href="#">
                <div className="w-14 h-14 rounded-full border border-outline-variant flex items-center justify-center group-hover:border-secondary transition-colors">
                  <span className="material-symbols-outlined text-on-surface group-hover:text-secondary">public</span>
                </div>
              </a>
              <a className="group" href="#">
                <div className="w-14 h-14 rounded-full border border-outline-variant flex items-center justify-center group-hover:border-secondary transition-colors">
                  <span className="material-symbols-outlined text-on-surface group-hover:text-secondary">rss_feed</span>
                </div>
              </a>
              <a className="group" href="#">
                <div className="w-14 h-14 rounded-full border border-outline-variant flex items-center justify-center group-hover:border-secondary transition-colors">
                  <span className="material-symbols-outlined text-on-surface group-hover:text-secondary">share</span>
                </div>
              </a>
              <a className="group" href="#">
                <div className="w-14 h-14 rounded-full border border-outline-variant flex items-center justify-center group-hover:border-secondary transition-colors">
                  <span className="material-symbols-outlined text-on-surface group-hover:text-secondary">podcasts</span>
                </div>
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer Shell */}
      <footer className="w-full py-16 px-margin-desktop bg-surface-container-lowest dark:bg-surface-container-lowest border-t border-secondary/20">
        <div className="flex flex-col items-center justify-center space-y-8 w-full max-w-container-max mx-auto">
          <div className="mb-4 flex justify-center">
            <img 
              alt="BIGBRUVA Official Crest" 
              className="h-32 w-auto object-contain" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCWvF-nHdw2xKstGjft8ySDVK94zelb6MpCkEiDtT3PB8YXAgFgSYTRjSILgn5BvsGjb8lQmrgvgruVQDyp5-wOa5NCgbujblFQ_9CiIGu8T-eLVUcjr-FzmkhptVpclIV49zl-7XM7EQFTibf-k2lRoNuCBdPeNi1GNgvX4B7FUwB40bOJud9sWs-2TOB6nXSBiJLWIxGhYfQVUOlsC9jjYDuDknGT_-IGmQMPwL4oGy-3cSjdPWDsU2Cha_B7DU9NEB_kmzHoZSs"
            />
          </div>
          <nav className="flex flex-wrap justify-center gap-8">
            <Link className="font-label-sm text-label-sm uppercase tracking-widest text-on-surface-variant hover:text-secondary transition-colors" href="/legacy">Legacy Archive</Link>
            <Link className="font-label-sm text-label-sm uppercase tracking-widest text-on-surface-variant hover:text-secondary transition-colors" href="/contact">Privacy Policy</Link>
            <Link className="font-label-sm text-label-sm uppercase tracking-widest text-on-surface-variant hover:text-secondary transition-colors" href="/press">Press Kit</Link>
            <Link className="font-label-sm text-label-sm uppercase tracking-widest text-on-surface-variant hover:text-secondary transition-colors" href="/media">Media Inquiries</Link>
          </nav>
          <p className="font-label-sm text-label-sm uppercase tracking-widest text-on-surface-variant text-center border-t border-outline-variant/30 pt-8 w-full">
            © 2024 BIGBRUVA. THE ORIGINAL BIG BROTHER. ALL RIGHTS RESERVED.
          </p>
        </div>
      </footer>
    </>
  );
}
