"use client";

import React, { useEffect } from 'react';
import Link from 'next/link';

export default function Page() {
  useEffect(() => {
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

    const elements = document.querySelectorAll('section > div');
    elements.forEach(el => {
      el.classList.add('transition-all', 'duration-1000', 'opacity-0', 'translate-y-10');
      observer.observe(el);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <style dangerouslySetInnerHTML={{__html: `
        body > nav { display: none !important; }
        body > footer { display: none !important; }
        
        body {
            background-color: #121413;
            color: #e2e3e1;
            font-family: 'Inter', sans-serif;
            overflow-x: hidden;
        }
        .font-serif {
            font-family: 'Libre Caslon Text', serif;
        }
        .glass-panel {
            background: rgba(4, 22, 53, 0.7);
            backdrop-filter: blur(12px);
            border: 0.5px solid rgba(233, 195, 73, 0.15);
        }
        .hero-gradient {
            background: linear-gradient(0deg, #121413 0%, rgba(18, 20, 19, 0.4) 50%, rgba(18, 20, 19, 0) 100%);
        }
        .text-glow {
            text-shadow: 0 0 15px rgba(233, 195, 73, 0.3);
        }
        .royal-gradient-text {
            background: linear-gradient(to right, #e9c349, #ffe088);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }
        ::-webkit-scrollbar {
            width: 8px;
        }
        ::-webkit-scrollbar-track {
            background: #121413;
        }
        ::-webkit-scrollbar-thumb {
            background: #333534;
            border-radius: 4px;
        }
        ::-webkit-scrollbar-thumb:hover {
            background: #e9c349;
        }
      `}} />

      {/* Top Navigation Bar */}
      <nav className="fixed top-0 z-50 w-full glass-panel border-b border-outline-variant dark:border-secondary-fixed-dim/20">
        <div className="flex justify-between items-center w-full px-margin-mobile md:px-margin-desktop py-4 max-w-container-max mx-auto">
          <div className="flex items-center gap-4">
            <Link href="/" className="flex items-center gap-4 cursor-pointer">
              <img alt="BIGBRUVA Logo" className="h-10 w-10 object-contain" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDTKWSJRZMFnqnbwKMtnZEh_XVb44eSKBhpKQPAUw2l7b6cuQrQCyuaDC0r-jmsu_CyhfEkGwhsFr_elhV-oGDzvp_h3SszRZGbduftD6js3dYo-NOufBxJVLQLsDsh4mwqNXx8irdMzj61YhconXxX9iUIKlix9w2R055nJjd1_U1ub30rSP3CbuUkFj57blXLX8jQ2VSTuGx5i30vVkn0UG-Ya9xcfALiUILDvyeH4kpH4RU8L2lA6tPGk4IZbI8rav1ENNtVOOU"/>
              <span className="font-display-lg text-headline-md tracking-tighter text-secondary dark:text-secondary-fixed">BIGBRUVA</span>
            </Link>
          </div>
          <div className="hidden md:flex gap-8 items-center">
            <Link className="font-label-sm text-label-sm text-on-surface-variant dark:text-tertiary-fixed-dim font-medium hover:text-primary transition-colors" href="/">Home</Link>
            <Link className="font-label-sm text-label-sm text-on-surface-variant dark:text-tertiary-fixed-dim font-medium hover:text-primary transition-colors" href="/about">About</Link>
            <Link className="font-label-sm text-label-sm text-secondary dark:text-secondary-fixed-dim font-bold border-b-2 border-secondary" href="/media">Media</Link>
            <Link className="font-label-sm text-label-sm text-on-surface-variant dark:text-tertiary-fixed-dim font-medium hover:text-primary transition-colors" href="/legacy">Legacy</Link>
            <Link className="font-label-sm text-label-sm text-on-surface-variant dark:text-tertiary-fixed-dim font-medium hover:text-primary transition-colors" href="/events">Events</Link>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/legacy" className="hidden lg:block bg-secondary text-on-secondary px-6 py-2 font-label-md text-label-md rounded-lg hover:brightness-110 transition-all active:scale-95 text-center">Explore Legacy</Link>
          </div>
        </div>
      </nav>

      <main className="relative pt-20">
        {/* Hero Section: Featured Documentary */}
        <section className="relative min-h-[90vh] flex items-end overflow-hidden">
          <div className="absolute inset-0 z-0 transition-all duration-1000 opacity-100 translate-y-0">
            <img alt="Featured Documentary Background" className="w-full h-full object-cover object-top filter brightness-75 animate-none" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCtdD5KKPMAIVleks6TfyMoklsyrL6y7hEL3e58skpEj0Vdz-iPzaVVr8kRsc_UOfiy9oSZTnZvZ6ymhA5EQFLUj3H5fdWHwrngZlzKAiBhAFCmkKVr4zhFett2J4adeb37VI2-ke1-R9tPWXwo_7460NKwjEBQM19K_SBxKzmzOPmg7mWErlluRAl9PwLZ1Lm95jbt332vDoFmf0c7PqqirZwraC5WSKgvTP86PCY6DzejHYhDyspDldkHK22al_bcb7sWNkf-iS0"/>
            <div className="absolute inset-0 hero-gradient"></div>
          </div>
          <div className="relative z-10 w-full px-margin-mobile md:px-margin-desktop pb-20 max-w-container-max mx-auto transition-all duration-1000 opacity-100 translate-y-0">
            <div className="max-w-2xl">
              <div className="flex items-center gap-3 mb-6">
                <span className="bg-secondary/20 text-secondary border border-secondary/40 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest">Documentary Special</span>
                <div className="h-px w-12 bg-secondary/40"></div>
                <span className="text-on-surface-variant text-xs uppercase tracking-widest">A BIGBRUVA Original</span>
              </div>
              <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg mb-4 royal-gradient-text leading-none font-serif">The Cinematic Archive</h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-8 leading-relaxed">Exploring Ejike Ebidilo’s contributions to film, television, and documentary storytelling.</p>
              <div className="flex flex-wrap gap-4">
                <button className="flex items-center gap-2 bg-secondary text-on-secondary px-8 py-4 rounded-lg font-bold hover:bg-secondary-fixed transition-all group cursor-pointer border-none outline-none">
                  <span className="material-symbols-outlined flex items-center" style={{ fontVariationSettings: "'FILL' 1" }}>play_arrow</span>
                  Watch: Origins of Excellence
                </button>
                <button className="flex items-center gap-2 glass-panel text-on-surface px-8 py-4 rounded-lg font-bold border border-outline hover:bg-surface-variant transition-all cursor-pointer">
                  <span className="material-symbols-outlined flex items-center">info</span>
                  Film Details
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Filmography Timeline */}
        <section className="py-24 bg-surface-container-lowest relative overflow-hidden">
          <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop transition-all duration-1000 opacity-100 translate-y-0">
            <div className="mb-16 text-center">
              <h2 className="font-display-lg text-headline-lg mb-2 text-secondary font-serif">Filmography Timeline</h2>
              <p className="text-on-surface-variant font-body-md">A journey through key production credits and lead roles.</p>
            </div>
            <div className="relative">
              {/* Vertical Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-gradient-to-b from-secondary/0 via-secondary/50 to-secondary/0 hidden md:block"></div>
              <div className="space-y-12 md:space-y-0">
                {/* Item 1 */}
                <div className="flex flex-col md:flex-row items-center justify-between group">
                  <div className="w-full md:w-5/12 text-right hidden md:block">
                    <h3 className="font-headline-md text-secondary font-serif">Echoes of the Sahara</h3>
                    <p className="text-on-surface-variant mb-2 font-body-md">Lead Role: Commander Diallo</p>
                    <span className="bg-surface-container-high px-3 py-1 rounded text-xs text-on-surface-variant">2023 • Feature Film</span>
                  </div>
                  <div className="relative z-10 w-12 h-12 rounded-full glass-panel border border-secondary flex items-center justify-center mb-4 md:mb-0">
                    <span className="text-secondary font-bold">23</span>
                  </div>
                  <div className="w-full md:w-5/12 text-left bg-surface-container px-6 py-6 rounded-xl border border-outline-variant group-hover:border-secondary transition-colors">
                    <div className="md:hidden">
                      <h3 className="font-headline-md text-secondary font-serif">Echoes of the Sahara</h3>
                      <p className="text-on-surface-variant mb-4">2023 • Feature Film</p>
                    </div>
                    <p className="text-on-surface-variant text-sm italic mb-4">"A masterclass in restraint and emotional depth. Ebidilo anchors this desert epic with a presence that rivals the landscape itself." — Global Cinema Weekly</p>
                    <img className="w-full h-32 object-cover rounded-lg" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBItZIBWnPMku5nUlCmN3juHKEFhgtUyTddIG4h_9hSbjYJXrJA82E0Jo2K7dwStRY83F1IMi-uqbUZC3Ur1yFu7g52I6dQ_ibhDc0s-FBZWEzBksgxDl_ZrJ0-G-gYSjX2kX2CQyHxDlz2iJDBnGEVD8CZKmg8OMEQWOs6K4bPxSuDd_PHYXL8jyb7jEfa166I8xqyb-t2IomyKwQfdZkMNLrAP_Cn_Xw4fXsEb7cv1hqYoW9OILhEiT3ast4OiLyhRfOUXklU7IU"/>
                  </div>
                </div>
                {/* Item 2 */}
                <div className="flex flex-col md:flex-row-reverse items-center justify-between group pt-12">
                  <div className="w-full md:w-5/12 text-left hidden md:block">
                    <h3 className="font-headline-md text-secondary font-serif">The Sovereign Debt</h3>
                    <p className="text-on-surface-variant mb-2 font-body-md">Executive Producer / Lead</p>
                    <span className="bg-surface-container-high px-3 py-1 rounded text-xs text-on-surface-variant">2021 • Political Thriller</span>
                  </div>
                  <div className="relative z-10 w-12 h-12 rounded-full glass-panel border border-secondary flex items-center justify-center mb-4 md:mb-0">
                    <span className="text-secondary font-bold">21</span>
                  </div>
                  <div className="w-full md:w-5/12 text-left bg-surface-container px-6 py-6 rounded-xl border border-outline-variant group-hover:border-secondary transition-colors">
                    <div className="md:hidden">
                      <h3 className="font-headline-md text-secondary font-serif">The Sovereign Debt</h3>
                      <p className="text-on-surface-variant mb-4">2021 • Political Thriller</p>
                    </div>
                    <p className="text-on-surface-variant text-sm italic mb-4">Defining the intersection of global finance and morality through a high-stakes dramatic lens.</p>
                    <img className="w-full h-32 object-cover rounded-lg" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBdStkgSmnC7EIEPB57B5qDtIENTZx_w9QaFUo3XuP7z2ZhZgYy9wLk0zn0a26tILItukiNjTAdp1m10Fgj_lAb7JSzvto8m427TKuKRZyaI74GNVagttEtMdRAOC5GudLsi743tt296VwXD56824l0WaitzVUEOLh4RJknANAbSjCRmFU_3eGFd-hs66uH7-WjpsdYNuPCNQSFo6s_k59eVM5ctRJPiPze96yYLZlvS10pDwBbS8I_aW2g8R0294tPYepT6kKrfNg"/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Television Appearances Grid */}
        <section className="py-24 bg-surface">
          <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop transition-all duration-1000 opacity-100 translate-y-0">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
              <div>
                <h2 className="font-display-lg text-headline-lg text-secondary font-serif">Television Appearances</h2>
                <p className="text-on-surface-variant font-body-md mt-2">Dramas, late-night discourse, and guest spot highlights.</p>
              </div>
              <div className="flex gap-2">
                <button className="p-2 border border-outline-variant hover:bg-secondary hover:text-on-secondary transition-all rounded-lg cursor-pointer"><span className="material-symbols-outlined flex items-center justify-center">chevron_left</span></button>
                <button className="p-2 border border-outline-variant hover:bg-secondary hover:text-on-secondary transition-all rounded-lg cursor-pointer"><span className="material-symbols-outlined flex items-center justify-center">chevron_right</span></button>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
              {/* TV Card 1 */}
              <div className="group relative overflow-hidden rounded-xl bg-surface-container border border-outline-variant/30 hover:border-secondary/50 transition-all">
                <div className="aspect-video relative overflow-hidden">
                  <img className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuADTq7Pgo9qBMXxHws10nMNTO-UPsnRVzOMK31ZJmCgDuNvr6JftcudtgAhMgJBt1WZxZx2G1ZODR8CksirpvAppfHmZlaymfYyGd5WAOoU_1gd9FjfhwPR0-9jRnSeVDC69kM2dzCN74hJsxUTGMPePJQJuira-SMdcvMyweZjhU9G16_oF2lxmsAWwa1aJoRtBnbcJ7vIYpa5jMdc5UMguJztfn-ws5UVxFmeJUFt84-cskHXJIvaNy36nWR69NAnhGCB9vq0TFM" />
                  <div className="absolute top-4 left-4 bg-background/80 backdrop-blur-md px-2 py-1 rounded text-[10px] uppercase tracking-tighter text-secondary">Series Regular</div>
                </div>
                <div className="p-6">
                  <h4 className="font-headline-md text-on-surface mb-1 font-serif">State of Affairs</h4>
                  <p className="text-on-surface-variant text-sm mb-4">Recurring Analyst (S3-S5)</p>
                  <div className="flex items-center gap-2 text-secondary font-label-sm text-label-sm cursor-pointer hover:underline">
                    Episode Archive <span className="material-symbols-outlined text-[16px] flex items-center">arrow_forward</span>
                  </div>
                </div>
              </div>
              {/* TV Card 2 */}
              <div className="group relative overflow-hidden rounded-xl bg-surface-container border border-outline-variant/30 hover:border-secondary/50 transition-all">
                <div className="aspect-video relative overflow-hidden">
                  <img className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCF_lQVNSEwF_28jVj252Hz0Wd-cM8p-0FC9NeE8v5qs-pHTPpSa-B-esps8HocWa2dGhYsmI2MuP44Siwv1jroUlBzhYWdrleFZ4qVWCcB4TrI51xyrT0jpS805CibERJm7K1A7iwc6-Uwf3icAyD_ghbpM3vUJUFcscMybkjvFf-Mwu1x2GoC6UUqi_xd1srvo0BdzVVYgErokWmW1sNMrb7B3PB23ZMqxCiry7BIrOKCuEB1JP2zJWscGPdc45HHiwDJ8uOGjpY" />
                  <div className="absolute top-4 left-4 bg-background/80 backdrop-blur-md px-2 py-1 rounded text-[10px] uppercase tracking-tighter text-secondary">Guest Spot</div>
                </div>
                <div className="p-6">
                  <h4 className="font-headline-md text-on-surface mb-1 font-serif">The Midnight Round</h4>
                  <p className="text-on-surface-variant text-sm mb-4">Guest Participant - 'Culture Lab'</p>
                  <div className="flex items-center gap-2 text-secondary font-label-sm text-label-sm cursor-pointer hover:underline">
                    Watch Clip <span className="material-symbols-outlined text-[16px] flex items-center">arrow_forward</span>
                  </div>
                </div>
              </div>
              {/* TV Card 3 */}
              <div className="group relative overflow-hidden rounded-xl bg-surface-container border border-outline-variant/30 hover:border-secondary/50 transition-all">
                <div className="aspect-video relative overflow-hidden">
                  <img className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDBypWEr6H6ZR-J3vrO8P61_hY-_7saUyccEmXQPuhn5OX3piCTbIs0zLTuu9cpXzIUxWrDXXdZMBvZfw8YMiJ_8MQoMWA2hoPBLxzTAwr7CLHHN7xN8qlVNu3xHFDmLBUyGrf5Wxeh4ElBKIQ1IC3qyZq2PH4XLU2YMmDGyMm8WoWC0aiwjvnUwDD7iIXl7B-9PRIS3crohXdAXWf92IkJAujevzmXg4RvtUy737O6qYd3y_hRgA2xyvSlbO7_x6OWZzDlXC4FYsw" />
                  <div className="absolute top-4 left-4 bg-background/80 backdrop-blur-md px-2 py-1 rounded text-[10px] uppercase tracking-tighter text-secondary">Voice Contribution</div>
                </div>
                <div className="p-6">
                  <h4 className="font-headline-md text-on-surface mb-1 font-serif">Modern Vanguard</h4>
                  <p className="text-on-surface-variant text-sm mb-4">Narrative Consultant</p>
                  <div className="flex items-center gap-2 text-secondary font-label-sm text-label-sm cursor-pointer hover:underline">
                    Behind the Scenes <span className="material-symbols-outlined text-[16px] flex items-center">arrow_forward</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Voice Acting & Narration Section */}
        <section className="py-24 bg-surface-container-low overflow-hidden">
          <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop transition-all duration-1000 opacity-100 translate-y-0">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="font-display-lg text-headline-lg text-secondary mb-6 leading-tight font-serif">The Resonance of Voice</h2>
                <p className="text-body-lg text-on-surface-variant mb-8 font-body-lg">Beyond the screen, Ejike Ebidilo brings life to characters and narratives through an authoritative and versatile vocal range. From international animation to prestige documentary narration.</p>
                <div className="space-y-6">
                  <div className="flex items-center gap-4 p-4 rounded-lg bg-surface border border-outline-variant/20">
                    <span className="material-symbols-outlined text-secondary text-3xl flex items-center">mic</span>
                    <div>
                      <h5 className="font-bold">Narrator</h5>
                      <p className="text-xs text-on-surface-variant italic">"The Atlas of Humanity" Series</p>
                    </div>
                    <div className="ml-auto flex gap-2">
                      <span className="material-symbols-outlined text-secondary cursor-pointer flex items-center">play_circle</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 p-4 rounded-lg bg-surface border border-outline-variant/20">
                    <span className="material-symbols-outlined text-secondary text-3xl flex items-center">animation</span>
                    <div>
                      <h5 className="font-bold">Voice: M'baku</h5>
                      <p className="text-xs text-on-surface-variant italic">"Celestial Guardians" (Animated Feature)</p>
                    </div>
                    <div className="ml-auto flex gap-2">
                      <span className="material-symbols-outlined text-secondary cursor-pointer flex items-center">play_circle</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="absolute -inset-4 bg-secondary/10 blur-3xl rounded-full"></div>
                <div className="relative glass-panel rounded-2xl p-8 border border-secondary/20 aspect-square flex items-center justify-center">
                  <div className="text-center z-10">
                    <span className="material-symbols-outlined text-secondary text-8xl mb-4 flex justify-center" style={{ fontVariationSettings: "'FILL' 1" }}>graphic_eq</span>
                    <p className="text-secondary font-display-lg text-headline-md italic font-serif">Acoustic Clarity</p>
                    <p className="text-on-surface-variant mt-2 max-w-xs mx-auto text-sm">Ejike's baritone is recognized globally for its poise and persuasive depth.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Awards & Recognition */}
        <section className="py-24 bg-surface border-t border-secondary/10">
          <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop transition-all duration-1000 opacity-100 translate-y-0">
            <div className="text-center mb-16">
              <h2 className="font-display-lg text-headline-lg text-secondary uppercase tracking-widest font-serif">Industry Honors</h2>
              <div className="h-px w-24 bg-secondary mx-auto mt-4"></div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center p-8 glass-panel rounded-xl hover:scale-105 transition-transform cursor-pointer">
                <span className="material-symbols-outlined text-secondary text-5xl mb-4 flex justify-center" style={{ fontVariationSettings: "'FILL' 1" }}>military_tech</span>
                <h4 className="font-bold text-on-surface">Pan-African Film Festival</h4>
                <p className="text-xs text-on-surface-variant mt-2">Best Supporting Actor - 2022</p>
              </div>
              <div className="text-center p-8 glass-panel rounded-xl hover:scale-105 transition-transform cursor-pointer">
                <span className="material-symbols-outlined text-secondary text-5xl mb-4 flex justify-center" style={{ fontVariationSettings: "'FILL' 1" }}>rewarded_ads</span>
                <h4 className="font-bold text-on-surface">Cannes Indie Shorts</h4>
                <p className="text-xs text-on-surface-variant mt-2">Narrator of the Year - 2021</p>
              </div>
              <div className="text-center p-8 glass-panel rounded-xl hover:scale-105 transition-transform cursor-pointer">
                <span className="material-symbols-outlined text-secondary text-5xl mb-4 flex justify-center" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                <h4 className="font-bold text-on-surface">British Documentary Awards</h4>
                <p className="text-xs text-on-surface-variant mt-2">Emerging Producer Finalist</p>
              </div>
              <div className="text-center p-8 glass-panel rounded-xl hover:scale-105 transition-transform cursor-pointer">
                <span className="material-symbols-outlined text-secondary text-5xl mb-4 flex justify-center" style={{ fontVariationSettings: "'FILL' 1" }}>workspace_premium</span>
                <h4 className="font-bold text-on-surface">The Heritage Guild</h4>
                <p className="text-xs text-on-surface-variant mt-2">Lifetime Cultural Impact Award</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-primary dark:bg-surface-container-highest border-t border-secondary-fixed/30 pt-20 pb-12">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="flex flex-col md:flex-row justify-between items-start gap-gutter mb-20">
            <div className="max-w-md animate-none">
              <div className="mb-6 flex items-center gap-4">
                <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuCWvF-nHdw2xKstGjft8ySDVK94zelb6MpCkEiDtT3PB8YXAgFgSYTRjSILgn5BvsGjb8lQmrgvgruVQDyp5-wOa5NCgbujblFQ_9CiIGu8T-eLVUcjr-FzmkhptVpclIV49zl-7XM7EQFTibf-k2lRoNuCBdPeNi1GNgvX4B7FUwB40bOJud9sWs-2TOB6nXSBiJLWIxGhYfQVUOlsC9jjYDuDknGT_-IGmQMPwL4oGy-3cSjdPWDsU2Cha_B7DU9NEB_kmzHoZSs" alt="BIGBRUVA Crest" className="h-16 w-16 object-contain brightness-110 filter" />
                <span className="font-display-lg text-headline-xl text-secondary-fixed dark:text-secondary tracking-tighter font-serif">BIGBRUVA</span>
              </div>
              <p className="text-on-primary dark:text-on-surface-variant font-body-md">Dedicated to curating intellectual depth and the ongoing evolution of cultural influence through the power of cinematic storytelling.</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-12">
              <div className="space-y-4">
                <h5 className="text-secondary font-bold uppercase text-xs tracking-widest">Navigation</h5>
                <ul className="space-y-2">
                  <li><Link className="text-label-sm font-label-sm text-tertiary-fixed dark:text-on-surface-variant hover:text-secondary-fixed transition-colors" href="/press">Press</Link></li>
                  <li><Link className="text-label-sm font-label-sm text-tertiary-fixed dark:text-on-surface-variant hover:text-secondary-fixed transition-colors" href="/contact">Contact</Link></li>
                  <li><Link className="text-label-sm font-label-sm text-tertiary-fixed dark:text-on-surface-variant hover:text-secondary-fixed transition-colors" href="/media">Archive Access</Link></li>
                </ul>
              </div>
              <div className="space-y-4">
                <h5 className="text-secondary font-bold uppercase text-xs tracking-widest">Legal</h5>
                <ul className="space-y-2">
                  <li><Link className="text-label-sm font-label-sm text-tertiary-fixed dark:text-on-surface-variant hover:text-secondary-fixed transition-colors" href="#">Privacy Policy</Link></li>
                  <li><Link className="text-label-sm font-label-sm text-tertiary-fixed dark:text-on-surface-variant hover:text-secondary-fixed transition-colors" href="#">Terms of Service</Link></li>
                </ul>
              </div>
              <div className="space-y-4 col-span-2 md:col-span-1">
                <h5 className="text-secondary font-bold uppercase text-xs tracking-widest">Connect</h5>
                <div className="flex gap-4">
                  <span className="material-symbols-outlined text-secondary-fixed cursor-pointer hover:scale-110 transition-transform">public</span>
                  <span className="material-symbols-outlined text-secondary-fixed cursor-pointer hover:scale-110 transition-transform">play_circle</span>
                  <span className="material-symbols-outlined text-secondary-fixed cursor-pointer hover:scale-110 transition-transform">podcasts</span>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-outline-variant/30 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-label-sm font-label-sm text-tertiary-fixed dark:text-on-surface-variant text-center md:text-left">© 2024 BIGBRUVA. All Rights Reserved. Curating Intellectual Depth and Cultural Influence.</p>
            <div className="flex items-center gap-2">
              <span className="text-[10px] text-on-surface-variant">THE SOVEREIGN SERIES</span>
              <div className="w-2 h-2 rounded-full bg-secondary animate-pulse"></div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
