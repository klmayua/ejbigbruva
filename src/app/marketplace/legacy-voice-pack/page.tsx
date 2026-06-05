"use client";

import Image from 'next/image';
import React from 'react';
import useReveal from '@/hooks/useReveal';
import useParallax from '@/hooks/useParallax';
import Link from 'next/link';

export default function Page() {
  useReveal();
  useParallax();
  

  return (
    <>
      

<main className="pt-20">

<section className="relative w-full h-[70vh] flex items-end overflow-hidden">
<div className="absolute inset-0 z-0">
<Image src="https://lh3.googleusercontent.com/aida-public/AB6AXuDdOl4GyMmM_JkfqSlFXlSTEx0bCKx_09edrXDhNvm6wht6rSsKFht94RjG0xZ_0IPdGgn1QOYzmLQTVCd7XWiP453s9Eeb_zA2TVFMAeyZ6f7OitHmY2c9D2KUhJtCwJ5WToQchetjIFC_07sWByw8_ZdsgEgyWC6_Z7UuMDbdkeCNZl6aj_VlWEvaAgfwC6Elr8gku4qBEWVm5dMBOX6LHNKsAaVxUvn_kDHwkRY8TgCkrfkU4QhCI79AIGN6gHZLEkC0B_7nH1U" alt="A cinematic, high-end recording studio interior bathed in dramatic amber and navy lighting. Professional vintage microphones stand prominently in the foreground, with soundproofing acoustic panels and soft glowing control monitors in the background. The atmosphere is sophisticated and institutional, reflecting a premium audio production environment with deep shadows and golden highlights." className="w-full h-full object-cover grayscale-[0.5] opacity-60" fill sizes="(max-width: 768px) 100vw, 50vw" />
<div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent"></div>
</div>
<div className="relative z-10 w-full max-w-container-max mx-auto px-margin-desktop pb-16">
<span className="font-label-md text-label-md text-secondary tracking-[0.3em] uppercase mb-4 block">Institutional Series</span>
<h1 className="font-display-lg text-display-lg lg:text-[80px] text-white leading-tight mb-6">The Legacy Voice Pack<br/><span className="italic font-normal gold-gradient-text">— Volume I</span></h1>
</div>
</section>

<section className="max-w-container-max mx-auto px-margin-desktop py-20 grid grid-cols-12 gap-gutter">

<div className="col-span-12 lg:col-span-8 space-y-16">

<div className="glass-01 p-8 rounded-lg">
<div className="flex items-center gap-6 mb-8">
<button className="w-16 h-16 rounded-full bg-secondary text-on-secondary flex items-center justify-center hover:scale-105 transition-transform" id="play-btn">
<span className="material-symbols-outlined text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>play_arrow</span>
</button>
<div>
<p className="font-label-md text-label-md text-secondary uppercase tracking-widest">Preview: Institutional Intro</p>
<h3 className="font-headline-md text-headline-md text-white">Baritone Range Signature</h3>
</div>
</div>

<div className="h-24 w-full flex items-center gap-[2px]" id="waveform">

</div>
</div>

<article className="space-y-6">
<h2 className="font-headline-lg text-headline-lg text-secondary">The Authority of Sound</h2>
<p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
                        Volume I of the Legacy Voice Pack series offers an unparalleled auditory signature. Specifically engineered for institutional branding, this collection features a commanding baritone range that resonates with trust, history, and permanence. Each recording has been captured in an acoustically dead environment to ensure maximum flexibility in post-production.
                    </p>
<p className="font-body-md text-body-md text-on-surface-variant opacity-80">
                        Designed for entities that require their digital presence to match their physical heritage. From automated concierge systems to flagship documentary narration, 'The Legacy' provides the sonic weight your brand deserves.
                    </p>
</article>

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

<div className="pt-16">
<h4 className="font-label-md text-label-md text-secondary uppercase tracking-widest mb-8">Related Assets</h4>
<div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
<div className="group relative aspect-[16/9] overflow-hidden rounded-lg bg-surface-container border border-white/5 cursor-pointer">
<Image src="https://lh3.googleusercontent.com/aida-public/AB6AXuBUSgH3eFNvc6FmN3KCnjGfv81gk-cp_G7xlbevS-N8BBbBgDjsfD9fi4aYM1mVsZrFj2lv-FLYTUFu70mRaYaCAkmyRNR-bv79Io9UfxjvCL-dLs8U6XV53dIZlXco9eQdqm-_V9Yi3GI8S67AHGjNUxNv80lF7vrP1dEHKwS0fbpcdKKCz5E7UwFVxYuRrZ0TxBDqnX7QvHSWsCXdN5v-ujFOeewzrLw2RpWvtCpKBh_-d6HMIjEXlbMk3MuJrVbAp0ncRC6Huy8" alt="A stack of aged, premium parchment documents with wax seals and intricate calligraphy. The lighting is warm and directional, highlighting the texture of the paper and the depth of the embossments. A scholarly and archival mood that suggests legal narration rights and historical authority." className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-40" fill sizes="(max-width: 768px) 100vw, 50vw" />
<div className="absolute inset-0 p-8 flex flex-col justify-end">
<h5 className="font-headline-md text-headline-md text-white">Documentary Narration Rights</h5>
<p className="text-secondary group-hover:translate-x-2 transition-transform inline-flex items-center gap-2 mt-2">
                                    Explore License <span className="material-symbols-outlined text-sm">arrow_forward</span>
</p>
</div>
</div>
<div className="group relative aspect-[16/9] overflow-hidden rounded-lg bg-surface-container border border-white/5 cursor-pointer">
<Image src="https://lh3.googleusercontent.com/aida-public/AB6AXuC9ing7vTS8xHKKgapOXe-Yz_irgBGzndu2vT3RIAnav4NHNKE7JQTuBHrpUp6qF-IGLaNhhuuJLnbJM9FsvtIVpzqNwV-JUlgU7wkOQQjv24njvaoPeE5zs4Yh9B1TNBe-E3OhnwrW6KlBBmnwzOw4t0pob_xIO-C7_v7EgZkq4viKNlGfjPmNkVwVXGh5p7TFBFTUQEYmWASziSaVECmNh_g8Wkx4J5tSZtN363jDm1S-lZ6RFbhMfmsUntQ2-79AZB2LeMFqB4Q" alt="Abstract golden metallic shapes interlocking to form a modern crest-like structure. Soft bokeh in the background with particles of light floating in a deep navy void. Sophisticated branding aesthetics suitable for high-end institutional visual assets." className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-40" width={160} height={80} style={{ objectFit: 'contain' }} />
<div className="absolute inset-0 p-8 flex flex-col justify-end">
<h5 className="font-headline-md text-headline-md text-white">Crest Branding Assets</h5>
<p className="text-secondary group-hover:translate-x-2 transition-transform inline-flex items-center gap-2 mt-2">
                                    View Collection <span className="material-symbols-outlined text-sm">arrow_forward</span>
</p>
</div>
</div>
</div>
</div>
</div>


</section>
</main>


    </>
  );
}
