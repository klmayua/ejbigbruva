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
      

<main className="relative">

<section className="relative min-h-[90vh] flex items-end overflow-hidden">
<div className="absolute inset-0 z-0 transition-all duration-1000 opacity-100 translate-y-0">
<Image src="/images/EJ_casual_02.jpeg" alt="Featured Documentary Background" className="w-full h-full object-cover object-top filter brightness-75" fill sizes="(max-width: 768px) 100vw, 50vw"  style={{ objectPosition: 'center 25%' }} />
<div className="absolute inset-0 hero-gradient"></div>
</div>
<div className="relative z-10 w-full px-margin-mobile md:px-margin-desktop pb-20 max-w-container-max mx-auto transition-all duration-1000 opacity-100 translate-y-0">
<div className="max-w-2xl animate-fade-in-up">
<div className="flex items-center gap-3 mb-6">
<span className="bg-secondary/20 text-secondary border border-secondary/40 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest">Documentary Special</span>
<div className="h-px w-12 bg-secondary/40"></div>
<span className="text-on-surface-variant text-xs uppercase tracking-widest">A BIGBRUVA Original</span>
</div>
<h1 className="font-display-lg text-display-lg-mobile md:text-display-lg mb-4 royal-gradient-text leading-none">The Cinematic Archive</h1>
<p className="font-body-lg text-body-lg text-on-surface-variant mb-8 leading-relaxed">Exploring Ejike Ebidilo’s contributions to film, television, and documentary storytelling.</p>
<div className="flex flex-wrap gap-4">
<button className="flex items-center gap-2 bg-secondary text-on-secondary px-8 py-4 rounded-lg font-bold hover:bg-secondary-fixed transition-all group">
<span className="material-symbols-outlined fill-current" style={{ fontVariationSettings: "'FILL' 1" }}>play_arrow</span>
                            Watch: Origins of Excellence
                        </button>
<button className="flex items-center gap-2 glass-01 text-on-surface px-8 py-4 rounded-lg font-bold border border-outline hover:bg-surface-variant transition-all">
<span className="material-symbols-outlined">info</span>
                            Film Details
                        </button>
</div>
</div>
</div>
</section>

<section className="py-24 bg-surface-container-lowest relative overflow-hidden">
<div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop transition-all duration-1000 opacity-100 translate-y-0">
<div className="mb-16 text-center">
<h2 className="font-display-lg text-headline-lg mb-2 text-secondary">Filmography Timeline</h2>
<p className="text-on-surface-variant font-body-md">A journey through key production credits and lead roles.</p>
</div>
<div className="relative">

<div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-gradient-to-b from-secondary/0 via-secondary/50 to-secondary/0 hidden md:block"></div>
<div className="space-y-12 md:space-y-0">

<div className="flex flex-col md:flex-row items-center justify-between group">
<div className="w-full md:w-5/12 text-right hidden md:block">
<h3 className="font-headline-md text-secondary">Echoes of the Sahar</h3>
<p className="text-on-surface-variant mb-2">Lead Role: Commander Diallo</p>
<span className="bg-surface-container-high px-3 py-1 rounded text-xs text-on-surface-variant">2023 • Feature Film</span>
</div>
<div className="relative z-10 w-12 h-12 rounded-full glass-01 border border-secondary flex items-center justify-center mb-4 md:mb-0">
<span className="text-secondary font-bold">23</span>
</div>
<div className="w-full md:w-5/12 text-left bg-surface-container px-6 py-6 rounded-xl border border-outline-variant group-hover:border-secondary transition-colors">
<div className="md:hidden">
<h3 className="font-headline-md text-secondary">Echoes of the Sahar</h3>
<p className="text-on-surface-variant mb-4">2023 • Feature Film</p>
</div>
<p className="text-on-surface-variant text-sm italic mb-4">"A masterclass in restraint and emotional depth. Ebidilo anchors this desert epic with a presence that rivals the landscape itself." — Global Cinema Weekly</p>
<Image src="/images/EJ_casual_03.jpeg" alt="A cinematic still of a wide, dramatic desert landscape under a deep navy sky, featuring a silhouetted figure standing on a sand dune. The lighting is high-contrast with moonlight reflections, creating a moody, editorial aesthetic consistent with a prestige film production. Royal gold accents highlight the film's title typography in the corner." className="w-full h-32 object-cover rounded-lg" fill sizes="(max-width: 768px) 100vw, 50vw"  style={{ objectPosition: 'center 20%' }} />
</div>
</div>

<div className="flex flex-col md:flex-row-reverse items-center justify-between group pt-12">
<div className="w-full md:w-5/12 text-left hidden md:block">
<h3 className="font-headline-md text-secondary">The Sovereign Debt</h3>
<p className="text-on-surface-variant mb-2">Executive Producer / Lead</p>
<span className="bg-surface-container-high px-3 py-1 rounded text-xs text-on-surface-variant">2021 • Political Thriller</span>
</div>
<div className="relative z-10 w-12 h-12 rounded-full glass-01 border border-secondary flex items-center justify-center mb-4 md:mb-0">
<span className="text-secondary font-bold">21</span>
</div>
<div className="w-full md:w-5/12 text-left bg-surface-container px-6 py-6 rounded-xl border border-outline-variant group-hover:border-secondary transition-colors">
<div className="md:hidden">
<h3 className="font-headline-md text-secondary">The Sovereign Debt</h3>
<p className="text-on-surface-variant mb-4">2021 • Political Thriller</p>
</div>
<p className="text-on-surface-variant text-sm italic mb-4">Defining the intersection of global finance and morality through a high-stakes dramatic lens.</p>
<Image src="https://lh3.googleusercontent.com/aida-public/AB6AXuBdStkgSmnC7EIEPB57B5qDtIENTZx_w9QaFUo3XuP7z2ZhZgYy9wLk0zn0a26tILItukiNjTAdp1m10Fgj_lAb7JSzvto8m427TKuKRZyaI74GNVagttEtMdRAOC5GudLsi743tt296VwXD56824l0WaitzVUEOLh4RJknANAbSjCRmFU_3eGFd-hs66uH7-WjpsdYNuPCNQSFo6s_k59eVM5ctRJPiPze96yYLZlvS10pDwBbS8I_aW2g8R0294tPYepT6kKrfNg" alt="A sleek, modern glass skyscraper at dusk with deep navy and steel blue tones. The architectural design is minimalist and imposing, reflecting city lights like stars. The overall mood is sophisticated and authoritative, embodying a corporate political thriller vibe with a high-end editorial finish." className="w-full h-32 object-cover rounded-lg" fill sizes="(max-width: 768px) 100vw, 50vw" />
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-surface">
<div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop transition-all duration-1000 opacity-100 translate-y-0">
<div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
<div>
<h2 className="font-display-lg text-headline-lg text-secondary">Television Appearances</h2>
<p className="text-on-surface-variant font-body-md mt-2">Dramas, late-night discourse, and guest spot highlights.</p>
</div>
<div className="flex gap-2">
<button className="p-2 border border-outline-variant hover:bg-secondary hover:text-on-secondary transition-all rounded-lg"><span className="material-symbols-outlined">chevron_left</span></button>
<button className="p-2 border border-outline-variant hover:bg-secondary hover:text-on-secondary transition-all rounded-lg"><span className="material-symbols-outlined">chevron_right</span></button>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">

<div className="group relative overflow-hidden rounded-xl bg-surface-container border border-outline-variant/30 hover:border-secondary/50 transition-all">
<div className="aspect-video relative overflow-hidden">
<Image src="https://lh3.googleusercontent.com/aida-public/AB6AXuADTq7Pgo9qBMXxHws10nMNTO-UPsnRVzOMK31ZJmCgDuNvr6JftcudtgAhMgJBt1WZxZx2G1ZODR8CksirpvAppfHmZlaymfYyGd5WAOoU_1gd9FjfhwPR0-9jRnSeVDC69kM2dzCN74hJsxUTGMPePJQJuira-SMdcvMyweZjhU9G16_oF2lxmsAWwa1aJoRtBnbcJ7vIYpa5jMdc5UMguJztfn-ws5UVxFmeJUFt84-cskHXJIvaNy36nWR69NAnhGCB9vq0TFM" alt="A professional television studio set with warm mahogany wood and dark navy acoustic panels. Soft gold ambient lighting illuminates the stage. Two high-end armchairs face each other, suggesting an intimate and intellectual talk show interview. The style is premium broadcast media, focused on sophisticated cultural dialogue." className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" fill sizes="(max-width: 768px) 100vw, 50vw" />
<div className="absolute top-4 left-4 bg-background/80 backdrop-blur-md px-2 py-1 rounded text-[10px] uppercase tracking-tighter text-secondary">Series Regular</div>
</div>
<div className="p-6">
<h4 className="font-headline-md text-on-surface mb-1">State of Affairs</h4>
<p className="text-on-surface-variant text-sm mb-4">Recurring Analyst (S3-S5)</p>
<div className="flex items-center gap-2 text-secondary font-label-sm text-label-sm cursor-pointer group-hover:underline">
                                Episode Archive <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
</div>
</div>
</div>

<div className="group relative overflow-hidden rounded-xl bg-surface-container border border-outline-variant/30 hover:border-secondary/50 transition-all">
<div className="aspect-video relative overflow-hidden">
<Image src="https://lh3.googleusercontent.com/aida-public/AB6AXuCF_lQVNSEwF_28jVj252Hz0Wd-cM8p-0FC9NeE8v5qs-pHTPpSa-B-esps8HocWa2dGhYsmI2MuP44Siwv1jroUlBzhYWdrleFZ4qVWCcB4TrI51xyrT0jpS805CibERJm7K1A7iwc6-Uwf3icAyD_ghbpM3vUJUFcscMybkjvFf-Mwu1x2GoC6UUqi_xd1srvo0BdzVVYgErokWmW1sNMrb7B3PB23ZMqxCiry7BIrOKCuEB1JP2zJWscGPdc45HHiwDJ8uOGjpY" alt="A close-up shot of a vintage-style television broadcast camera in a dimly lit studio. Dust motes dance in a spotlight of royal gold light. The background is a blurred dark navy studio space. The aesthetic is nostalgic yet high-definition, representing the legacy of television production and archival media." className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" fill sizes="(max-width: 768px) 100vw, 50vw" />
<div className="absolute top-4 left-4 bg-background/80 backdrop-blur-md px-2 py-1 rounded text-[10px] uppercase tracking-tighter text-secondary">Guest Spot</div>
</div>
<div className="p-6">
<h4 className="font-headline-md text-on-surface mb-1">The Midnight Round</h4>
<p className="text-on-surface-variant text-sm mb-4">Guest Participant - 'Culture Lab'</p>
<div className="flex items-center gap-2 text-secondary font-label-sm text-label-sm cursor-pointer group-hover:underline">
                                Watch Clip <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
</div>
</div>
</div>

<div className="group relative overflow-hidden rounded-xl bg-surface-container border border-outline-variant/30 hover:border-secondary/50 transition-all">
<div className="aspect-video relative overflow-hidden">
<Image src="https://lh3.googleusercontent.com/aida-public/AB6AXuDBypWEr6H6ZR-J3vrO8P61_hY-_7saUyccEmXQPuhn5OX3piCTbIs0zLTuu9cpXzIUxWrDXXdZMBvZfw8YMiJ_8MQoMWA2hoPBLxzTAwr7CLHHN7xN8qlVNu3xHFDmLBUyGrf5Wxeh4ElBKIQ1IC3qyZq2PH4XLU2YMmDGyMm8WoWC0aiwjvnUwDD7iIXl7B-9PRIS3crohXdAXWf92IkJAujevzmXg4RvtUy737O6qYd3y_hRgA2xyvSlbO7_x6OWZzDlXC4FYsw" alt="A modern, high-tech control room for a media production company. Dozens of glowing monitors display various cinematic clips in a dark room. The light from the screens casts a cool blue and royal gold glow onto the control desk. The mood is one of professional expertise, precision, and the forefront of digital media technology." className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" fill sizes="(max-width: 768px) 100vw, 50vw" />
<div className="absolute top-4 left-4 bg-background/80 backdrop-blur-md px-2 py-1 rounded text-[10px] uppercase tracking-tighter text-secondary">Voice Contribution</div>
</div>
<div className="p-6">
<h4 className="font-headline-md text-on-surface mb-1">Modern Vanguard</h4>
<p className="text-on-surface-variant text-sm mb-4">Narrative Consultant</p>
<div className="flex items-center gap-2 text-secondary font-label-sm text-label-sm cursor-pointer group-hover:underline">
                                Behind the Scenes <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-surface-container-low overflow-hidden">
<div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop transition-all duration-1000 opacity-100 translate-y-0">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div>
<h2 className="font-display-lg text-headline-lg text-secondary mb-6 leading-tight">The Resonance of Voice</h2>
<p className="text-body-lg text-on-surface-variant mb-8">Beyond the screen, Ejike Ebidilo brings life to characters and narratives through an authoritative and versatile vocal range. From international animation to prestige documentary narration.</p>
<div className="space-y-6">
<div className="flex items-center gap-4 p-4 rounded-lg bg-surface border border-outline-variant/20">
<span className="material-symbols-outlined text-secondary text-3xl">mic</span>
<div>
<h5 className="font-bold">Narrator</h5>
<p className="text-xs text-on-surface-variant italic">"The Atlas of Humanity" Series</p>
</div>
<div className="ml-auto flex gap-2">
<span className="material-symbols-outlined text-secondary cursor-pointer">play_circle</span>
</div>
</div>
<div className="flex items-center gap-4 p-4 rounded-lg bg-surface border border-outline-variant/20">
<span className="material-symbols-outlined text-secondary text-3xl">animation</span>
<div>
<h5 className="font-bold">Voice: M'baku</h5>
<p className="text-xs text-on-surface-variant italic">"Celestial Guardians" (Animated Feature)</p>
</div>
<div className="ml-auto flex gap-2">
<span className="material-symbols-outlined text-secondary cursor-pointer">play_circle</span>
</div>
</div>
</div>
</div>
<div className="relative">
<div className="absolute -inset-4 bg-secondary/10 blur-3xl rounded-full"></div>
<div className="relative glass-01 rounded-2xl p-8 border border-secondary/20 aspect-square flex items-center justify-center">

<div className="text-center z-10">
<span className="material-symbols-outlined text-secondary text-8xl mb-4" style={{ fontVariationSettings: "'FILL' 1" }}>graphic_eq</span>
<p className="text-secondary font-display-lg text-headline-md italic">Acoustic Clarity</p>
<p className="text-on-surface-variant mt-2 max-w-xs mx-auto text-sm">Ejike's baritone is recognized globally for its poise and persuasive depth.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-surface border-t border-secondary/10">
<div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop transition-all duration-1000 opacity-100 translate-y-0">
<div className="text-center mb-16">
<h2 className="font-display-lg text-headline-lg text-secondary uppercase tracking-widest">Industry Honors</h2>
<div className="h-px w-24 bg-secondary mx-auto mt-4"></div>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-8">
<div className="text-center p-8 glass-01 rounded-xl hover:scale-105 transition-transform">
<span className="material-symbols-outlined text-secondary text-5xl mb-4" style={{ fontVariationSettings: "'FILL' 1" }}>military_tech</span>
<h4 className="font-bold text-on-surface">Pan-African Film Festival</h4>
<p className="text-xs text-on-surface-variant mt-2">Best Supporting Actor - 2022</p>
</div>
<div className="text-center p-8 glass-01 rounded-xl hover:scale-105 transition-transform">
<span className="material-symbols-outlined text-secondary text-5xl mb-4" style={{ fontVariationSettings: "'FILL' 1" }}>rewarded_ads</span>
<h4 className="font-bold text-on-surface">Cannes Indie Shorts</h4>
<p className="text-xs text-on-surface-variant mt-2">Narrator of the Year - 2021</p>
</div>
<div className="text-center p-8 glass-01 rounded-xl hover:scale-105 transition-transform">
<span className="material-symbols-outlined text-secondary text-5xl mb-4" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
<h4 className="font-bold text-on-surface">British Documentary Awards</h4>
<p className="text-xs text-on-surface-variant mt-2">Emerging Producer Finalist</p>
</div>
<div className="text-center p-8 glass-01 rounded-xl hover:scale-105 transition-transform">
<span className="material-symbols-outlined text-secondary text-5xl mb-4" style={{ fontVariationSettings: "'FILL' 1" }}>workspace_premium</span>
<h4 className="font-bold text-on-surface">The Heritage Guild</h4>
<p className="text-xs text-on-surface-variant mt-2">Lifetime Cultural Impact Award</p>
</div>
</div>
</div>
</section>
</main>


    </>
  );
}
