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
      {/* Page specific overrides to define local classes */}
      <style dangerouslySetInnerHTML={{__html: `
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

       {/* Hero Header */}
       <header className="pt-16 md:pt-32 pb-12 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        <div className="max-w-3xl">
          <h1 className="font-display-lg text-display-lg mb-4 text-on-surface leading-tight">Institutional Inquiries</h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant">The office of BIGBRUVA manages all global media, speaking engagements, and official partnerships for Ejike Ebidilo.</p>
        </div>
      </header>

      <main className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto pb-16 md:pb-32">
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
      </main>    </>
  );
}
