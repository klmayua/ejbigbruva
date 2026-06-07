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
        body {
            background-color: #0c0f0e; /* surface-container-lowest for deep navy vibe */
            color: #e2e3e1;
            overflow-x: hidden;
        }
        .material-symbols-outlined {
            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
        }
        .glass-card {
            background: rgba(18, 20, 19, 0.7);
            backdrop-filter: blur(12px);
            border: 0.5px solid rgba(233, 195, 73, 0.15);
        }
        .gold-glow {
            box-shadow: 0 0 20px rgba(233, 195, 73, 0.1);
        }
      `}} />



      <main className="pt-24">
        {/* Hero Section */}
        <section className="relative h-[90vh] flex items-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img alt="Hero" className="w-full h-full object-cover grayscale opacity-40" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDxyECnHvOCHSSYTMlOn50migsKllrCwr_6xsRt6j0bHOO_ua0VDQe1qHHxoex8x8ohCLW28Peevk_yUffBTmPzWaUyf5vwGemiJLSkx3x0KMkX2Br3vnA10sTYIrvq5lLsPThAxsvUcPmxeqjhueMf7Hb5DOmujMSPzEnTxz9yMbjdrH1FRtTTIRZy8qEEvx1Iooy8LEjJfdf5_pEQjDhpFTL7BPt8Rd78Cp8joVpN2GTGvJ5ymtgO8HNJuOb1L7wuto2y2C_5QVU" />
            <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent"></div>
          </div>
          <div className="relative z-10 px-margin-desktop max-w-4xl">
            <span className="text-secondary font-label-md tracking-[0.3em] uppercase mb-6 block">Institutional Archive</span>
            <h1 className="font-display-lg text-display-lg leading-none mb-8">Convening <br /><span className="italic text-secondary">The Cultural Vanguard</span></h1>
            <p className="font-body-lg text-on-surface-variant max-w-xl mb-12">
              A curated calendar of high-level discourse, private viewings, and legacy-shaping engagements hosted by BIGBRUVA. Join the conversation that defines the next decade.
            </p>
            <div className="flex gap-6">
              <button className="bg-secondary text-on-secondary px-10 py-4 font-label-md uppercase tracking-[0.2em] hover:scale-105 transition-transform">View Schedule</button>
              <button className="border border-secondary/30 text-secondary px-10 py-4 font-label-md uppercase tracking-[0.2em] hover:bg-secondary/10 transition-colors">Inquiry</button>
            </div>
          </div>
        </section>

        {/* Upcoming Events - Bento Grid */}
        <section className="py-24 px-margin-mobile md:px-margin-desktop bg-surface">
          <div className="max-w-container-max mx-auto w-full">
            <div className="flex justify-between items-end mb-16">
              <div>
                <h2 className="font-headline-lg text-secondary mb-2">Upcoming Events</h2>
                <p className="text-on-surface-variant font-body-md uppercase tracking-widest">The Academic &amp; Cultural Quarter</p>
              </div>
              <div className="h-[1px] flex-grow mx-12 bg-secondary/20"></div>
              <button className="text-secondary font-label-md uppercase tracking-widest flex items-center gap-2">View All <span className="material-symbols-outlined">trending_flat</span></button>
            </div>
            <div className="grid grid-cols-12 gap-gutter">
              {/* Main Featured Event */}
              <div className="col-span-12 lg:col-span-7 group relative overflow-hidden glass-card p-12 flex flex-col justify-end min-h-[500px]">
                <div className="absolute top-0 right-0 p-8">
                  <span className="text-secondary font-display-lg text-headline-lg opacity-20">01</span>
                </div>
                <div className="mb-4">
                  <span className="bg-primary-container text-primary px-3 py-1 text-label-sm font-bold uppercase tracking-tighter">Symposium</span>
                </div>
                <h3 className="font-headline-lg mb-6 group-hover:text-secondary transition-colors">The Legacy of Digital Sovereignism</h3>
                <div className="flex gap-12 text-on-surface-variant font-label-md uppercase tracking-widest">
                  <div className="flex items-center gap-2"><span className="material-symbols-outlined text-secondary flex items-center">calendar_today</span> Oct 14, 2024</div>
                  <div className="flex items-center gap-2"><span className="material-symbols-outlined text-secondary flex items-center">location_on</span> Lagos, Nigeria</div>
                </div>
                <div className="mt-8 opacity-0 group-hover:opacity-100 transition-opacity translate-y-4 group-hover:translate-y-0 duration-500">
                  <p className="text-on-surface-variant mb-6 max-w-md">An exclusive roundtable session discussing the intersection of indigenous legacy and the future of web sovereignty.</p>
                  <button className="text-secondary underline underline-offset-8 font-bold">Request Invite</button>
                </div>
              </div>
              {/* Secondary Event 1 */}
              <div className="col-span-12 lg:col-span-5 glass-card p-8 flex flex-col justify-between group hover:border-secondary/40 transition-colors">
                <div>
                  <div className="flex justify-between items-start mb-8">
                    <span className="text-secondary font-label-md uppercase tracking-widest">Private Viewing</span>
                    <span className="material-symbols-outlined text-secondary">north_east</span>
                  </div>
                  <h3 className="font-headline-md mb-4">Midnight Sovereign: Art &amp; Identity</h3>
                  <p className="text-on-surface-variant text-label-md">Gallery Opening &amp; Gala Dinner</p>
                </div>
                <div className="pt-8 border-t border-secondary/10 flex justify-between items-center">
                  <span className="font-label-md text-secondary">Nov 02</span>
                  <span className="text-label-sm uppercase tracking-widest opacity-60">London, UK</span>
                </div>
              </div>
              {/* Secondary Event 2 */}
              <div className="col-span-12 lg:col-span-5 glass-card p-8 flex flex-col justify-between group hover:border-secondary/40 transition-colors">
                <div>
                  <div className="flex justify-between items-start mb-8">
                    <span className="text-secondary font-label-md uppercase tracking-widest">Legacy Lecture</span>
                    <span className="material-symbols-outlined text-secondary">north_east</span>
                  </div>
                  <h3 className="font-headline-md mb-4">The BIGBRUVA Philosophical Framework</h3>
                  <p className="text-on-surface-variant text-label-md">Institutional Archives Series</p>
                </div>
                <div className="pt-8 border-t border-secondary/10 flex justify-between items-center">
                  <span className="font-label-md text-secondary">Dec 12</span>
                  <span className="text-label-sm uppercase tracking-widest opacity-60">New York, US</span>
                </div>
              </div>
              {/* Small Grid Items */}
              <div className="col-span-6 lg:col-span-2 glass-card p-6 flex flex-col items-center justify-center text-center">
                <span className="material-symbols-outlined text-secondary text-4xl mb-4 flex justify-center">school</span>
                <span className="font-headline-md block font-serif">12</span>
                <span className="text-label-sm uppercase text-on-surface-variant">Workshops</span>
              </div>
              <div className="col-span-6 lg:col-span-2 glass-card p-6 flex flex-col items-center justify-center text-center border-secondary/40 bg-secondary/5">
                <span className="material-symbols-outlined text-secondary text-4xl mb-4 flex justify-center">groups</span>
                <span className="font-headline-md block font-serif">5k+</span>
                <span className="text-label-sm uppercase text-on-surface-variant">Attendees</span>
              </div>
              <div className="col-span-12 lg:col-span-3 bg-secondary p-8 flex flex-col justify-center">
                <h4 className="text-on-secondary font-headline-md mb-2 font-serif">Host an Event</h4>
                <p className="text-on-secondary/80 text-label-sm mb-6">Partner with BIGBRUVA for your next high-impact symposium.</p>
                <button className="bg-on-secondary text-secondary px-4 py-2 text-label-sm font-bold uppercase cursor-pointer">Learn More</button>
              </div>
            </div>
          </div>
        </section>

        {/* Past Events & Speaking Engagements Section */}
        <section className="py-24 px-margin-mobile md:px-margin-desktop bg-surface-container-lowest relative overflow-hidden">
          <div className="absolute -right-20 top-0 opacity-5">
            <img alt="Logo Watermark" className="w-[800px] h-[800px] object-contain rotate-12" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDzoQachYWqkheryCjc0oj1MFa-C1ZPMJ7iMTX-2-IDj7U9vodjQkBDg6bzs8DGk-WmboILzxQlYaQcA2aHbUEYZcJRksEek2fr3QWgIrtR-1uivfoHhCgtW90_f6_8W4NQYgsLsKZ0qSQin7U0OqkqxqrlplbfTuEt6pFWYYQmG4aDRV2AFdu5ZJyhZyKPZTRJaMbuic6zpM-OG6I9l73dLr-tV4GAyFoG0xg_-5hrsvTea3SIsK9OnWGI5gPT5RFgnnA0E5N6ZZU" />
          </div>
          <div className="max-w-container-max mx-auto w-full relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
              {/* Past Events */}
              <div>
                <h2 className="font-headline-lg text-secondary mb-12 border-l-4 border-secondary pl-6">Past Milestones</h2>
                <div className="space-y-12">
                  <div className="group cursor-pointer">
                    <span className="text-secondary font-label-md">2023 RECAP</span>
                    <h3 className="text-headline-md mt-2 group-hover:translate-x-4 transition-transform duration-300 flex items-center gap-4">The Inaugural Archive Launch <span className="material-symbols-outlined opacity-0 group-hover:opacity-100 transition-opacity">arrow_forward</span></h3>
                    <p className="text-on-surface-variant mt-4 font-body-md border-b border-soft-ivory/10 pb-6">A landmark gathering at the National Museum celebrating the first 50 years of legacy preservation.</p>
                  </div>
                  <div className="group cursor-pointer">
                    <span className="text-secondary font-label-md">2022 SUMMIT</span>
                    <h3 className="text-headline-md mt-2 group-hover:translate-x-4 transition-transform duration-300 flex items-center gap-4">Global Voices: Pan-Africanism Today <span className="material-symbols-outlined opacity-0 group-hover:opacity-100 transition-opacity">arrow_forward</span></h3>
                    <p className="text-on-surface-variant mt-4 font-body-md border-b border-soft-ivory/10 pb-6">International experts convened to discuss the export of cultural capital through digital archives.</p>
                  </div>
                </div>
              </div>
            {/* Speaking Engagements */}
            <div>
              <h2 className="font-headline-lg text-secondary mb-12 border-l-4 border-secondary pl-6">Speaking Engagements</h2>
              <div className="glass-card p-10">
                <div className="space-y-10">
                  <div className="flex gap-6 items-start">
                    <div className="bg-secondary/10 p-4">
                      <span className="material-symbols-outlined text-secondary flex items-center" style={{ fontVariationSettings: "'FILL' 1" }}>mic</span>
                    </div>
                    <div>
                      <h4 className="font-label-md uppercase text-secondary tracking-widest mb-1">Keynote</h4>
                      <p className="font-headline-md mb-2">World Economic Forum</p>
                      <p className="text-on-surface-variant text-label-sm italic">"The Future of Institutional Memory"</p>
                    </div>
                  </div>
                  <div className="flex gap-6 items-start">
                    <div className="bg-secondary/10 p-4">
                      <span className="material-symbols-outlined text-secondary flex items-center" style={{ fontVariationSettings: "'FILL' 1" }}>forum</span>
                    </div>
                    <div>
                      <h4 className="font-label-md uppercase text-secondary tracking-widest mb-1">Panelist</h4>
                      <p className="font-headline-md mb-2">Digital Heritage Expo</p>
                      <p className="text-on-surface-variant text-label-sm italic">"Preserving the Unpreservable"</p>
                    </div>
                  </div>
                </div>
                <button className="w-full mt-10 py-4 border border-secondary/30 text-secondary font-label-md uppercase tracking-[0.3em] hover:bg-secondary hover:text-on-secondary transition-all cursor-pointer">Book Speaker</button>
            </div>
          </div>
        </div>
      </div>
    </section>

        {/* Media Gallery */}
        <section className="py-24 bg-surface">
          <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
            <div className="mb-12">
              <h2 className="font-headline-lg text-secondary text-center">Moments in History</h2>
              <div className="w-24 h-1 bg-secondary mx-auto mt-4"></div>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="h-80 overflow-hidden relative group">
                <img alt="Gallery Image" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDxyECnHvOCHSSYTMlOn50migsKllrCwr_6xsRt6j0bHOO_ua0VDQe1qHHxoex8x8ohCLW28Peevk_yUffBTmPzWaUyf5vwGemiJLSkx3x0KMkX2Br3vnA10sTYIrvq5lLsPThAxsvUcPmxeqjhueMf7Hb5DOmujMSPzEnTxz9yMbjdrH1FRtTTIRZy8qEEvx1Iooy8LEjJfdf5_pEQjDhpFTL7BPt8Rd78Cp8joVpN2GTGvJ5ymtgO8HNJuOb1L7wuto2y2C_5QVU" />
                <div className="absolute inset-0 bg-secondary/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="material-symbols-outlined text-white text-5xl flex items-center">zoom_in</span>
                </div>
              </div>
              <div className="h-80 overflow-hidden relative group">
                <img alt="Gallery 2" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBPaQ4TPeOAZLgywglnZXOW9db--ESN0UdG29J6f-wyMCd9-T1BWZv4HARDM03GWr8YzRhVjAY3U9HJT3e3pBEhAJiEtAr22aPJNFGxW9QGOJKIz-VHaaQapfS24xioRUseFePqPD9v_Iqs0sAo39oEfHbwQDLZxPE9sKDFREqnpB865WMXmqjE98jIaARiZmFUCzibLSxK2G5OGaS1nWVco1n5t_-N1wEaJSsTozg6PEWCwJUuyYAt1gyjSpuS1c6LMwgzMd7V_2U" />
                <div className="absolute inset-0 bg-secondary/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="material-symbols-outlined text-white text-5xl flex items-center">zoom_in</span>
                </div>
              </div>
              <div className="h-80 overflow-hidden relative group">
                <img alt="Gallery 3" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDF-GOXdZH4wLMq3BJ2D_iuqEnNbN_UzfZnvMguWXaAdgGgsOAwqS1vybxSeLKjHt-p7tXjaZGvliiecHlYSS1LQeIObAnLA8yZKK9eV6rNB78EqqC8K-8UxFFW48DbmMES4C6kBH_UngcZddL0grHf5e_GoLeqT2OWcuh-P4TtGkZ2w4CrK1gNPAmo_KpB-K0EPX5SJulUfFrAVZErKDIm8X2Jc8e4uw_ynhH_Kb3x5TGvlLXeuWn62UlkbhrfvlkkHEo16ijhERM" />
                <div className="absolute inset-0 bg-secondary/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="material-symbols-outlined text-white text-5xl flex items-center">zoom_in</span>
                </div>
              </div>
              <div className="h-80 overflow-hidden relative group">
                <img alt="Gallery 4" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCTZ7XTZF0ThfRDQrTS8yQ1mWshSz3qdGipldpHgu58NMoMccb9wn_7lQ58GGKB0m0XGUoccbW0HylrTDhzGDs4YyksQG3Fe6MAoCCQm3A_h5IJDvYF-xihSdNyptc7koCjNPmAiSMEHf83vjcHVbJasPvduMZnL0CIiSiOSOYOiR0x8foMc_Jb8w3H4FG2FMy0Ptb85KuUZIzjxj7benOJtqjNa9qaOxpLotrUFbt3794bQXj0d6p0i6cXmNtcrGGVceESH-b0sjY" />
                <div className="absolute inset-0 bg-secondary/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="material-symbols-outlined text-white text-5xl flex items-center">zoom_in</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Booking & Inquiry Information */}
        <section className="py-24 px-margin-mobile md:px-margin-desktop bg-surface-container-low border-t border-secondary/10">
          <div className="max-w-container-max mx-auto glass-card p-16 grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="font-headline-lg text-secondary mb-6">Booking Information</h2>
              <p className="font-body-lg text-on-surface-variant mb-10">We invite institutions, cultural bodies, and educational partners to collaborate on future events. Our team ensures each engagement reflects the prestige of the BIGBRUVA legacy.</p>
              <ul className="space-y-6">
                <li className="flex items-center gap-4">
                  <span className="material-symbols-outlined text-secondary flex items-center">check_circle</span>
                  <span className="text-label-md uppercase tracking-wider">Curated Panel Selection</span>
                </li>
                <li className="flex items-center gap-4">
                  <span className="material-symbols-outlined text-secondary flex items-center">check_circle</span>
                  <span className="text-label-md uppercase tracking-wider">Global Logistics Coordination</span>
                </li>
                <li className="flex items-center gap-4">
                  <span className="material-symbols-outlined text-secondary flex items-center">check_circle</span>
                  <span className="text-label-md uppercase tracking-wider">Multimedia Archive Production</span>
                </li>
              </ul>
            </div>
            <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-2 gap-8">
                <div className="flex flex-col">
                  <label className="text-label-sm uppercase text-secondary mb-2">Name</label>
                  <input className="bg-surface-container-lowest border-0 border-b-2 border-soft-ivory/20 focus:ring-0 focus:border-secondary transition-colors py-3 text-on-surface" type="text" />
                </div>
                <div className="flex flex-col">
                  <label className="text-label-sm uppercase text-secondary mb-2">Organization</label>
                  <input className="bg-surface-container-lowest border-0 border-b-2 border-soft-ivory/20 focus:ring-0 focus:border-secondary transition-colors py-3 text-on-surface" type="text" />
                </div>
              </div>
              <div className="flex flex-col">
                <label className="text-label-sm uppercase text-secondary mb-2">Inquiry Type</label>
                <select className="bg-surface-container-lowest border-0 border-b-2 border-soft-ivory/20 focus:ring-0 focus:border-secondary transition-colors py-3 text-on-surface">
                  <option>Event Partnership</option>
                  <option>Speaking Engagement</option>
                  <option>Media Access</option>
                </select>
              </div>
              <div className="flex flex-col">
                <label className="text-label-sm uppercase text-secondary mb-2">Details</label>
                <textarea className="bg-surface-container-lowest border-0 border-b-2 border-soft-ivory/20 focus:ring-0 focus:border-secondary transition-colors py-3 text-on-surface resize-none" rows={4}></textarea>
              </div>
              <button className="w-full bg-secondary text-on-secondary py-5 font-label-md uppercase tracking-[0.4em] hover:bg-secondary-fixed transition-all font-bold cursor-pointer" type="submit">Submit Request</button>
            </form>
          </div>
        </section>
      </main>


    </>
  );
}
