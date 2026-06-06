"use client";

import React, { useEffect, useState } from 'react';
import Link from 'next/link';

export default function Page() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [waveformHeights, setWaveformHeights] = useState<number[]>([]);
  const [selectedLicense, setSelectedLicense] = useState("individual");

  // Generate initial static waveform heights on mount
  useEffect(() => {
    const heights = Array.from({ length: 60 }, () => Math.floor(Math.random() * 80) + 10);
    setWaveformHeights(heights);
  }, []);

  // Animate waveform segments when playing
  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      setWaveformHeights(prev => prev.map(() => Math.floor(Math.random() * 90) + 5));
    }, 100);

    return () => clearInterval(interval);
  }, [isPlaying]);

  return (
    <>
      <style dangerouslySetInnerHTML={{__html: `
        body > nav { display: none !important; }
        body > footer { display: none !important; }
        
        body {
            background-color: #121413;
            color: #e2e3e1;
            -webkit-font-smoothing: antialiased;
            font-family: 'Inter', sans-serif;
        }
        .font-serif {
            font-family: 'Libre Caslon Text', serif;
        }
        .glass-panel {
            background: rgba(8, 46, 115, 0.1);
            backdrop-filter: blur(12px);
            border: 0.5px solid rgba(233, 195, 73, 0.15);
        }
        .waveform-segment {
            transition: height 0.2s ease;
        }
        .gold-gradient-text {
            background: linear-gradient(to right, #e9c349, #ffe088);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }
      `}} />

      {/* Top Navigation Bar */}
      <header className="fixed top-0 w-full z-50 bg-[#082e73]/70 backdrop-blur-md border-b border-secondary/15 h-20 flex justify-between items-center px-margin-desktop">
        <div className="flex items-center gap-4">
          <Link href="/" className="flex items-center gap-4 cursor-pointer">
            <img alt="BIGBRUVA Crest" className="w-12 h-12" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBWRvSa_kb5jU2Ls7WpBSvV2HfQo6EkEJ5Nr_TVfFfUbmuDJ7eRMrrkPOp233f4HnQK_HrEO3Mfqae8r7oOEZ15B-VvK4Dd1xTR6vPAeVL49ZfQVmzjDxtsLlOOexjrg2BM0qR9Mxv_LnS-2DbisQEAGJ5X-NtOlzgoiGUt41KnFJEMUxNkSJZjLXM1cY1H6PEF9KXy2Oc1OL_fURiO6hBFICG6mppSK8oMywXAwS_BRayPEoDo-qG4J-06XdEoLfRuVk-Uf-8aVmM"/>
            <span className="font-display-lg text-display-lg text-secondary dark:text-secondary uppercase tracking-widest hidden lg:block">BIGBRUVA</span>
          </Link>
        </div>
        <nav className="hidden md:flex items-center gap-8">
          <Link className="font-label-md text-label-md text-on-surface-variant hover:text-secondary transition-colors" href="/">Home</Link>
          <Link className="font-label-md text-label-md text-on-surface-variant hover:text-secondary transition-colors" href="/about">About</Link>
          <Link className="font-label-md text-label-md text-on-surface-variant hover:text-secondary transition-colors" href="/legacy">Legacy</Link>
          <Link className="font-label-md text-label-md text-on-surface-variant hover:text-secondary transition-colors" href="/media">Media</Link>
          <Link className="font-label-md text-label-md text-secondary font-bold border-b-2 border-secondary pb-1" href="/marketplace">Marketplace</Link>
          <Link className="font-label-md text-label-md text-on-surface-variant hover:text-secondary transition-colors" href="/contact">Contact</Link>
        </nav>
        <div className="flex items-center gap-6">
          <button className="material-symbols-outlined text-secondary text-2xl bg-transparent border-none outline-none cursor-pointer select-none">search</button>
          <button className="font-label-md text-label-md bg-secondary text-on-secondary px-6 py-2 rounded-sm font-bold uppercase tracking-wider hover:opacity-90 transition-opacity cursor-pointer">Account</button>
        </div>
      </header>

      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative w-full h-[70vh] flex items-end overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img className="w-full h-full object-cover grayscale-[0.5] opacity-60" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDdOl4GyMmM_JkfqSlFXlSTEx0bCKx_09edrXDhNvm6wht6rSsKFht94RjG0xZ_0IPdGgn1QOYzmLQTVCd7XWiP453s9Eeb_zA2TVFMAeyZ6f7OitHmY2c9D2KUhJtCwJ5WToQchetjIFC_07sWByw8_ZdsgEgyWC6_Z7UuMDbdkeCNZl6aj_VlWEvaAgfwC6Elr8gku4qBEWVm5dMBOX6LHNKsAaVxUvn_kDHwkRY8TgCkrfkU4QhCI79AIGN6gHZLEkC0B_7nH1U"/>
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent"></div>
          </div>
          <div className="relative z-10 w-full max-w-container-max mx-auto px-margin-desktop pb-16">
            <span className="font-label-md text-label-md text-secondary tracking-[0.3em] uppercase mb-4 block">Institutional Series</span>
            <h1 className="font-display-lg text-display-lg lg:text-[80px] text-white leading-tight mb-6 font-serif">The Legacy Voice Pack<br/><span className="italic font-normal gold-gradient-text">— Volume I</span></h1>
          </div>
        </section>

        {/* Product Content Grid */}
        <section className="max-w-container-max mx-auto px-margin-desktop py-20 grid grid-cols-12 gap-gutter">
          {/* Left Column: Product Details */}
          <div className="col-span-12 lg:col-span-8 space-y-16">
            {/* Audio Sample Player */}
            <div className="glass-panel p-8 rounded-lg">
              <div className="flex items-center gap-6 mb-8">
                <button 
                  onClick={() => setIsPlaying(!isPlaying)}
                  className={`w-16 h-16 rounded-full bg-secondary text-on-secondary flex items-center justify-center hover:scale-105 transition-transform cursor-pointer border-none outline-none select-none ${
                    isPlaying ? 'scale-95' : ''
                  }`}
                >
                  <span className="material-symbols-outlined text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                    {isPlaying ? 'pause' : 'play_arrow'}
                  </span>
                </button>
                <div>
                  <p className="font-label-md text-label-md text-secondary uppercase tracking-widest">Preview: Institutional Intro</p>
                  <h3 className="font-headline-md text-headline-md text-white font-serif">Baritone Range Signature</h3>
                </div>
              </div>
              {/* Custom Gold Waveform */}
              <div className="h-24 w-full flex items-center gap-[2px]">
                {waveformHeights.map((height, i) => (
                  <div
                    key={i}
                    className={`waveform-segment w-1 rounded-full ${
                      isPlaying ? 'bg-secondary' : 'bg-secondary/30'
                    }`}
                    style={{ height: `${height}%`, transition: 'height 0.2s ease' }}
                  />
                ))}
              </div>
            </div>

            {/* Description */}
            <article className="space-y-6">
              <h2 className="font-headline-lg text-headline-lg text-secondary font-serif">The Authority of Sound</h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
                Volume I of the Legacy Voice Pack series offers an unparalleled auditory signature. Specifically engineered for institutional branding, this collection features a commanding baritone range that resonates with trust, history, and permanence. Each recording has been captured in an acoustically dead environment to ensure maximum flexibility in post-production.
              </p>
              <p className="font-body-md text-body-md text-on-surface-variant opacity-80">
                Designed for entities that require their digital presence to match their physical heritage. From automated concierge systems to flagship documentary narration, 'The Legacy' provides the sonic weight your brand deserves.
              </p>
            </article>

            {/* Technical Specs */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
              <div className="border-l border-secondary/30 pl-6 py-2">
                <p className="font-label-sm text-label-sm text-secondary/60 uppercase">Format</p>
                <p className="font-body-lg text-body-lg text-white">WAV, MP3, AIFF</p>
              </div>
              <div className="border-l border-secondary/30 pl-6 py-2">
                <p className="font-label-sm text-label-sm text-secondary/60 uppercase">Resolution</p>
                <p className="font-body-lg text-body-lg text-white">24-bit / 96kHz</p>
              </div>
              <div className="border-l border-secondary/30 pl-6 py-2">
                <p className="font-label-sm text-label-sm text-secondary/60 uppercase">Components</p>
                <p className="font-body-lg text-body-lg text-white">142 Mastered Assets</p>
              </div>
            </div>

            {/* Related Items (Bento Style) */}
            <div className="pt-16">
              <h4 className="font-label-md text-label-md text-secondary uppercase tracking-widest mb-8">Related Assets</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
                <div className="group relative aspect-[16/9] overflow-hidden rounded-lg bg-surface-container border border-white/5 cursor-pointer">
                  <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-40" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBUSgH3eFNvc6FmN3KCnjGfv81gk-cp_G7xlbevS-N8BBbBgDjsfD9fi4aYM1mVsZrFj2lv-FLYTUFu70mRaYaCAkmyRNR-bv79Io9UfxjvCL-dLs8U6XV53dIZlXco9eQdqm-_V9Yi3GI8S67AHGjNUxNv80lF7vrP1dEHKwS0fbpcdKKCz5E7UwFVxYuRrZ0TxBDqnX7QvHSWsCXdN5v-ujFOeewzrLw2RpWvtCpKBh_-d6HMIjEXlbMk3MuJrVbAp0ncRC6Huy8"/>
                  <div className="absolute inset-0 p-8 flex flex-col justify-end">
                    <h5 className="font-headline-md text-headline-md text-white font-serif">Documentary Narration Rights</h5>
                    <p className="text-secondary group-hover:translate-x-2 transition-transform inline-flex items-center gap-2 mt-2">
                      Explore License <span className="material-symbols-outlined text-sm flex items-center">arrow_forward</span>
                    </p>
                  </div>
                </div>
                <div className="group relative aspect-[16/9] overflow-hidden rounded-lg bg-surface-container border border-white/5 cursor-pointer">
                  <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-40" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC9ing7vTS8xHKKgapOXe-Yz_irgBGzndu2vT3RIAnav4NHNKE7JQTuBHrpUp6qF-IGLaNhhuuJLnbJM9FsvtIVpzqNwV-JUlgU7wkOQQjv24njvaoPeE5zs4Yh9B1TNBe-E3OhnwrW6KlBBmnwzOw4t0pob_xIO-C7_v7EgZkq4viKNlGfjPmNkVwVXGh5p7TFBFTUQEYmWASziSaVECmNh_g8Wkx4J5tSZtN363jDm1S-lZ6RFbhMfmsUntQ2-79AZB2LeMFqB4Q"/>
                  <div className="absolute inset-0 p-8 flex flex-col justify-end">
                    <h5 className="font-headline-md text-headline-md text-white font-serif">Crest Branding Assets</h5>
                    <p className="text-secondary group-hover:translate-x-2 transition-transform inline-flex items-center gap-2 mt-2">
                      View Collection <span className="material-symbols-outlined text-sm flex items-center">arrow_forward</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Investment Summary */}
          <aside className="col-span-12 lg:col-span-4">
            <div className="sticky top-32 space-y-8">
              {/* Main Purchase Card */}
              <div className="bg-surface-container-high p-8 border border-secondary/10 relative">
                <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden">
                  <div className="bg-secondary text-on-secondary text-[10px] font-bold uppercase rotate-45 translate-x-4 translate-y-2 py-1 text-center w-24">Premium</div>
                </div>
                <h3 className="font-headline-md text-headline-md text-white mb-6 font-serif">Investment Summary</h3>
                <div className="space-y-4 mb-8">
                  <label className={`block p-4 border cursor-pointer hover:border-secondary transition-colors group ${
                    selectedLicense === 'individual' ? 'border-secondary bg-[#082e73]/20' : 'border-secondary/20 bg-background/50'
                  }`}>
                    <input 
                      className="hidden" 
                      name="license" 
                      type="radio" 
                      checked={selectedLicense === 'individual'} 
                      onChange={() => setSelectedLicense('individual')} 
                    />
                    <div className="flex justify-between items-center">
                      <span className="font-label-md text-label-md text-on-surface-variant group-hover:text-white transition-colors">Individual License</span>
                      <span className="font-body-lg text-body-lg text-secondary">$450.00</span>
                    </div>
                  </label>
                  <label className={`block p-4 border cursor-pointer hover:border-secondary transition-colors group ${
                    selectedLicense === 'institutional' ? 'border-secondary bg-[#082e73]/20' : 'border-secondary/20 bg-background/50'
                  }`}>
                    <input 
                      className="hidden" 
                      name="license" 
                      type="radio" 
                      checked={selectedLicense === 'institutional'} 
                      onChange={() => setSelectedLicense('institutional')}
                    />
                    <div className="flex justify-between items-center">
                      <span className="font-label-md text-label-md text-on-surface-variant group-hover:text-white transition-colors">Institutional License</span>
                      <span className="font-body-lg text-body-lg text-secondary">$1,200.00</span>
                    </div>
                  </label>
                  <label className={`block p-4 border cursor-pointer hover:border-secondary transition-colors group ${
                    selectedLicense === 'global' ? 'border-secondary bg-[#082e73]/20' : 'border-secondary/20 bg-background/50'
                  }`}>
                    <input 
                      className="hidden" 
                      name="license" 
                      type="radio" 
                      checked={selectedLicense === 'global'} 
                      onChange={() => setSelectedLicense('global')}
                    />
                    <div className="flex justify-between items-center">
                      <span className="font-label-md text-label-md text-on-surface-variant group-hover:text-white transition-colors">Global Broadcast</span>
                      <span className="font-body-lg text-body-lg text-secondary">$3,500.00</span>
                    </div>
                  </label>
                </div>
                <div className="space-y-4">
                  <button className="w-full bg-secondary text-on-secondary font-bold font-label-md text-label-md py-4 uppercase tracking-widest hover:brightness-110 transition-all cursor-pointer border-none outline-none">Purchase Now</button>
                  <button className="w-full border border-secondary text-secondary font-bold font-label-md text-label-md py-4 uppercase tracking-widest hover:bg-secondary/10 transition-all cursor-pointer">Consult for Enterprise</button>
                </div>
                <div className="mt-8 pt-8 border-t border-white/5 space-y-3">
                  <div className="flex items-center gap-3 text-on-surface-variant opacity-70">
                    <span className="material-symbols-outlined text-sm flex items-center">verified_user</span>
                    <span className="text-xs uppercase tracking-tighter">Lifetime Institutional Rights</span>
                  </div>
                  <div className="flex items-center gap-3 text-on-surface-variant opacity-70">
                    <span className="material-symbols-outlined text-sm flex items-center">cloud_download</span>
                    <span className="text-xs uppercase tracking-tighter">Instant Secure Access</span>
                  </div>
                </div>
              </div>

              {/* Visual Accent Card */}
              <div className="relative h-48 rounded-lg overflow-hidden glass-panel flex items-center justify-center p-8 group">
                <img alt="Crest Accent" className="w-24 opacity-20 grayscale group-hover:scale-110 transition-transform duration-1000" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBWRvSa_kb5jU2Ls7WpBSvV2HfQo6EkEJ5Nr_TVfFfUbmuDJ7eRMrrkPOp233f4HnQK_HrEO3Mfqae8r7oOEZ15B-VvK4Dd1xTR6vPAeVL49ZfQVmzjDxtsLlOOexjrg2BM0qR9Mxv_LnS-2DbisQEAGJ5X-NtOlzgoiGUt41KnFJEMUxNkSJZjLXM1cY1H6PEF9KXy2Oc1OL_fURiO6hBFICG6mppSK8oMywXAwS_BRayPEoDo-qG4J-06XdEoLfRuVk-Uf-8aVmM"/>
                <div className="absolute inset-0 flex items-center justify-center">
                  <p className="font-display-lg text-[20px] text-secondary tracking-[0.4em] uppercase font-serif">Bigbruva Quality</p>
                </div>
              </div>
            </div>
          </aside>
        </section>
      </main>

      {/* Footer */}
      <footer className="relative w-full py-16 bg-background dark:bg-background border-t border-secondary/10 mt-20">
        <div className="flex flex-col items-center gap-base max-w-container-max mx-auto px-margin-desktop animate-none">
          <img alt="BIGBRUVA Footer Crest" className="w-24 h-24 opacity-20 mb-8" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBWRvSa_kb5jU2Ls7WpBSvV2HfQo6EkEJ5Nr_TVfFfUbmuDJ7eRMrrkPOp233f4HnQK_HrEO3Mfqae8r7oOEZ15B-VvK4Dd1xTR6vPAeVL49ZfQVmzjDxtsLlOOexjrg2BM0qR9Mxv_LnS-2DbisQEAGJ5X-NtOlzgoiGUt41KnFJEMUxNkSJZjLXM1cY1H6PEF9KXy2Oc1OL_fURiO6hBFICG6mppSK8oMywXAwS_BRayPEoDo-qG4J-06XdEoLfRuVk-Uf-8aVmM"/>
          <nav className="flex flex-wrap justify-center gap-8 mb-8">
            <Link className="font-label-sm text-label-sm text-on-surface-variant hover:text-secondary-fixed transition-colors uppercase tracking-widest" href="#">Privacy Policy</Link>
            <Link className="font-label-sm text-label-sm text-on-surface-variant hover:text-secondary-fixed transition-colors uppercase tracking-widest" href="#">Terms of Service</Link>
            <Link className="font-label-sm text-label-sm text-on-surface-variant hover:text-secondary-fixed transition-colors uppercase tracking-widest" href="#">Licensing</Link>
            <Link className="font-label-sm text-label-sm text-on-surface-variant hover:text-secondary-fixed transition-colors uppercase tracking-widest" href="#">Archive Access</Link>
          </nav>
          <p className="font-body-md text-body-md text-on-surface-variant opacity-60 text-center max-w-2xl">
            © 2024 BIGBRUVA (Ejike Ebidilo). All Rights Reserved. Institutional Seal of Legacy. Our audio assets are protected by cryptographic provenance and international copyright law.
          </p>
        </div>
      </footer>
    </>
  );
}
