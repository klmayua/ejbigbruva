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
      
<nav className="fixed top-0 w-full z-50 bg-primary/70 backdrop-blur-md dark:bg-primary/70 border-b border-soft-ivory/10 flex justify-between items-center px-margin-desktop py-base w-full">
<div className="flex items-center gap-4">
<Image src="https://lh3.googleusercontent.com/aida-public/AB6AXuC_9RAnNPaThFbDC9iMvDA8uOr07jICBY7uGu__cFV8jxBzQO8-Tm3ebSes-ThFZ8AKYJimewJjveK0G5ls4ZGYP5zKw4bmFIvzD2fk8dWvSQ5czhfyY_wZz26nrNvoq0cjmOSZ50z0RrcjZ1-60wFLKhQi-FaySXW2mByFNxJb5sDdJ7A25SmAl6Epehet_ttWF0nOiJAJ7W7qpYZHJZaWhADCKgpDlUqgQxeRRQvzyuFTWsDwhJevSezlSCvvnqQtWmBKq7PV754" alt="Official Crest Logo" className="w-12 h-12 object-contain" width={160} height={80} style={{ objectFit: 'contain' }} />
<span className="font-display-lg text-headline-md text-secondary tracking-widest uppercase">BIGBRUVA</span>
</div>
<div className="hidden lg:flex items-center gap-8">
<a className="text-on-surface-variant hover:text-secondary transition-colors duration-300" href="/">Home</a>
<a className="text-on-surface-variant hover:text-secondary transition-colors duration-300" href="/about">About</a>
<a className="text-on-surface-variant hover:text-secondary transition-colors duration-300" href="/legacy">Legacy</a>
<a className="text-on-surface-variant hover:text-secondary transition-colors duration-300" href="/media">Media</a>
<a className="text-secondary border-b-2 border-secondary pb-1 font-bold" href="/voice">Voice</a>
<a className="text-on-surface-variant hover:text-secondary transition-colors duration-300" href="/events">Events</a>
<a className="text-on-surface-variant hover:text-secondary transition-colors duration-300" href="/gallery">Gallery</a>
</div>
<div className="flex items-center gap-6">
<a className="text-on-surface-variant hover:text-secondary transition-all" href="/community">Community</a>
<button className="bg-secondary text-on-secondary px-6 py-2 rounded-lg font-label-md hover:bg-secondary-fixed transition-all uppercase tracking-wider">Contact</button>
<span className="material-symbols-outlined text-secondary cursor-pointer">newspaper</span>
</div>
</nav>

<header className="relative min-h-screen flex items-center pt-24 overflow-hidden">
<div className="absolute inset-0 z-0">
<div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent z-10"></div>
<Image src="https://lh3.googleusercontent.com/aida-public/AB6AXuDndsixHjhANHIuI883kfVDOBOzVqzWn_A9sdtc-aj_q1WzwtctGPBKKuAfxkQVDZSRLDEHXjYE3aHca4sQoGIMexkXZkAyieY7rWzBgrm43lAywRyonTh9lb1cGM4yKOje3hRGmkV8AQZqfY8D849XDxg4s37Ehfkkm1JocASoFnfUv06gUUjvw-VuAXDPtnO0H0Jv_lCXYwba1mKXdS2jcToqV2mo3WXJjkqaLbXaH08qIoe_ukGiqEAiLtqKfjpWJxRsgiCYL5k" alt="Reflective portrait for Voice editorial section" className="w-full h-full object-cover object-center opacity-60 scale-105 transition-transform duration-[10000ms] hover:scale-100" fill sizes="(max-width: 768px) 100vw, 50vw" />
</div>
<div className="container mx-auto px-margin-desktop relative z-20">
<div className="max-w-3xl">
<span className="font-label-md text-secondary uppercase tracking-[0.3em] mb-4 block">Editorial Reflections</span>
<h1 className="font-display-lg text-display-lg text-on-surface mb-8 leading-tight">Thoughts Worth Sharing</h1>
<p className="font-body-lg text-on-surface-variant mb-12 max-w-xl">Dive into a curated collection of long-form editorial pieces, private letters, and reflective audio snippets exploring the intersections of legacy, culture, and the institutional archive.</p>
<div className="flex gap-6">
<button className="bg-secondary text-on-secondary px-8 py-4 rounded-lg font-label-md flex items-center gap-3 transition-all hover:scale-105">
                        LATEST ARTICLES <span className="material-symbols-outlined">arrow_forward</span>
</button>
<button className="border border-secondary text-secondary px-8 py-4 rounded-lg font-label-md flex items-center gap-3 hover:bg-secondary/10 transition-all">
<span className="material-symbols-outlined">play_circle</span> LISTEN TO AUDIO
                    </button>
</div>
</div>
</div>
</header>

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

<main className="py-32 px-margin-desktop bg-background">
<div className="container mx-auto">
<div className="flex justify-between items-end mb-16">
<div>
<div className="gold-underline mb-4"></div>
<h2 className="font-headline-lg text-on-surface">The Monthly Dossier</h2>
</div>
<div className="flex gap-4">
<button className="p-2 border border-outline-variant text-on-surface-variant hover:border-secondary transition-colors">
<span className="material-symbols-outlined">grid_view</span>
</button>
<button className="p-2 border border-outline-variant text-on-surface-variant hover:border-secondary transition-colors">
<span className="material-symbols-outlined">view_agenda</span>
</button>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">

<article className="md:col-span-8 group cursor-pointer transition-all duration-700 opacity-100 translate-y-0">
<div className="relative overflow-hidden h-[600px] mb-6 editorial-shadow">
<Image src="https://lh3.googleusercontent.com/aida-public/AB6AXuAmI2UA1wMyhYSQ7c2Zv_MvCT9tDxjqs9_e7UEGbflaoQtgD6u19eVm6TwstQkdWXq4PSE_lNZ5jTwgjGBLKWiDtwxoNqhb7zkq3fJSWakSBKzK6uGKVAxEZ2eF1PiR7wiouaCLttXef-UiDfKpQ6bEqLq3fUVbHcf4MZZwt8yNbFWdFMuAVKZGYq_8PO84aN1qgppmUMaHYb1UXQlnFQLHrFn-hAJp4iVDz0sE-arLiwN28GVK4DvPNPPYDlSC-XXJUujMwHXcVCE" alt="A sophisticated close-up of an antique leather-bound journal resting on a dark mahogany desk. Soft ambient lighting catches the texture of the worn leather and the subtle glint of a fountain pen beside it. The background is a deep navy wall with a faint gold trim, creating a mood of quiet intellectual pursuit and historical preservation." className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" fill sizes="(max-width: 768px) 100vw, 50vw" />
<div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
<div className="absolute bottom-0 left-0 p-12">
<span className="font-label-sm bg-secondary text-on-secondary px-3 py-1 mb-4 inline-block">LEGACY SERIES</span>
<h3 className="font-headline-lg text-white mb-4">Reclaiming the Narrative: The Silent Influence of Archive</h3>
<p className="font-body-md text-on-surface-variant/90 max-w-lg">How the preservation of overlooked voices shapes the future of modern identity and institutional power structures.</p>
</div>
</div>
</article>

<div className="md:col-span-4 flex flex-col gap-gutter">
<article className="glass-card p-8 group transition-all duration-700 opacity-100 translate-y-0">
<span className="text-secondary font-label-sm mb-4 block">AUDIO EPISODE #24</span>
<h4 className="font-headline-md text-on-surface mb-4 group-hover:text-secondary transition-colors">Echoes of the 1970s: A Private Interview</h4>
<div className="flex items-center gap-4 text-on-surface-variant">
<span className="material-symbols-outlined text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>play_circle</span>
<span className="text-label-md tracking-tighter">14:22 MINS</span>
</div>
</article>
<article className="relative h-[380px] group overflow-hidden transition-all duration-700 opacity-100 translate-y-0">
<Image src="https://lh3.googleusercontent.com/aida-public/AB6AXuDnnxJQ9vkkCiIUz9m9Ku8u4ehx0t0tMM0Y5rKlKZshVZWA8_DuEoANo4y0voB31y1uVl3NADGiNgxY3BuVFvf5LO1snOZoUemONqyi8xuBLsu3xGoifT-iOlwLf5QF_TWly-GJ5PqCiZInN8LdtWIJWclnd_YORyimKgJ95ctlK0IE92zZ9RHcYruqKgd8PilgtvRiMIBLq1aJ7J4npsj-5D6laosew2kgXNm43kYxth7Ua4qy7QkzXR9fgx7Pvtjbz_N88tmHPo0" alt="A collection of vintage black and white photographs spread across a dark table, illuminated by a single warm desk lamp. The lighting creates strong shadows and highlights the grainy texture of the old prints. The scene evokes a feeling of nostalgic investigation and the tangible weight of history, perfectly matching the premium navy and gold aesthetic." className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" fill sizes="(max-width: 768px) 100vw, 50vw" />
<div className="absolute inset-0 bg-secondary/10 group-hover:bg-transparent transition-colors"></div>
<div className="absolute inset-x-0 bottom-0 p-8 glass-card border-none">
<h4 className="font-label-md text-secondary uppercase mb-2">Reflections</h4>
<p className="font-body-md font-bold">The Visual Language of Remembrance</p>
</div>
</article>
</div>

<div className="md:col-span-4 glass-card p-10 flex flex-col justify-between">
<div>
<span className="material-symbols-outlined text-secondary mb-6">description</span>
<h4 className="font-headline-md mb-4 leading-snug">Letters from the Field: July Edition</h4>
<p className="text-on-surface-variant font-body-md">A monthly deep dive into our most recent acquisitions and the stories behind them.</p>
</div>
<a className="mt-8 text-secondary font-label-md flex items-center gap-2 hover:translate-x-2 transition-transform" href="/">READ FULL TRANSCRIPT <span className="material-symbols-outlined text-sm">north_east</span></a>
</div>
<div className="md:col-span-4 group cursor-pointer">
<div className="aspect-square overflow-hidden mb-6">
<Image src="https://lh3.googleusercontent.com/aida-public/AB6AXuB5H9BDG0nQBKU9vWf4Y5InSDlfwIJkKhrGHNHx3QYVtwJgQ9OzITVrGVfteNH5iI2rJOsbllAKGi3iUDW2pizOwYpdxv1aFtVpFLjePXNHPWOwkXRydKtof3eU7BKOM-tbN6uWml1M27WEFe1Zo9weV2WzUyjr00HHL0G59shONE3S-dpXMbNgOGUQeysLSEodIN-bx4o_tuFi9QHctUol2JIf8C8Fes_aAeGJKpZUWGAOPjZu2Z-pv_Ng171_zPMoxuXTSYrIlZQ" alt="High-contrast editorial shot of a bookshelf in a dark, luxury library. The spines of old books are barely illuminated by a sliver of golden light, revealing embossed titles in gold leaf. The deep navy blue of the surrounding shadows creates a sense of mystery, depth, and the infinite nature of knowledge and storytelling." className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" fill sizes="(max-width: 768px) 100vw, 50vw" />
</div>
<h4 className="font-headline-md mb-2">Architectural Whispers</h4>
<p className="text-on-surface-variant">Exploring the physical spaces where history is held captive.</p>
</div>
<div className="md:col-span-4 group cursor-pointer">
<div className="aspect-square overflow-hidden mb-6">
<Image src="https://lh3.googleusercontent.com/aida-public/AB6AXuBEX_iB19Uzhq1eG7ppPHl12UCnVfNbUOmQmNEKHMsrwJ1DYDsxABGyOPTnK8fOro7rRdB8af2b3qoO3fccH3hWYjDkr0CPNaMd-6OpVlu7miJIWMCk2f82dfp53QPziYOxlZKtB0Lc41GB-BUN6uRxMT61Oz_XRvh6KN5OXqjZuXHi65lhdqRGsjrIGVTBELGWqGapchlG5KOoEi4LRelnbKJSx7r-40myFlwstHSxVSJ7ifuzFjJOvdPk3kuRzqxydx40JO5a1ag" alt="Minimalist abstract photograph featuring layers of deep navy blue textures intersecting with a sharp, thin line of glowing gold light. The composition is elegant and modern, representing the conceptual theme of 'Voice' and 'Identity' through light and shadow. The lighting is low-key, emphasizing a luxury editorial atmosphere suitable for a premium archive site." className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" fill sizes="(max-width: 768px) 100vw, 50vw" />
</div>
<h4 className="font-headline-md mb-2">Defining the Void</h4>
<p className="text-on-surface-variant">The power of silence in recorded oral histories.</p>
</div>
</div>
</div>
</main>

<section className="py-24 bg-surface-container-high relative overflow-hidden">

<div className="container mx-auto px-margin-desktop relative z-10 text-center">
<h2 className="font-display-lg text-headline-lg mb-6">Join the Internal Dialogue</h2>
<p className="text-on-surface-variant mb-12 max-w-xl mx-auto">Receive quarterly reflections, exclusive media releases, and invitations to private institutional gatherings.</p>
<form className="max-w-md mx-auto flex gap-0 border-b-2 border-secondary/50 focus-within:border-secondary transition-all">
<input className="bg-transparent border-none focus:ring-0 text-secondary w-full py-4 font-label-md placeholder:text-secondary/50" placeholder="EMAIL ADDRESS" type="email" />
<button className="text-secondary p-4 group" type="submit">
<span className="material-symbols-outlined group-hover:translate-x-2 transition-transform">arrow_forward</span>
</button>
</form>
</div>
</section>

<footer className="bg-surface-container-lowest dark:bg-surface-container-lowest w-full py-16 px-margin-desktop border-t border-secondary/20">
<div className="flex flex-col items-center gap-base text-center w-full max-w-container-max mx-auto">
<div className="mb-12"><Image src="https://lh3.googleusercontent.com/aida-public/AB6AXuCWvF-nHdw2xKstGjft8ySDVK94zelb6MpCkEiDtT3PB8YXAgFgSYTRjSILgn5BvsGjb8lQmrgvgruVQDyp5-wOa5NCgbujblFQ_9CiIGu8T-eLVUcjr-FzmkhptVpclIV49zl-7XM7EQFTibf-k2lRoNuCBdPeNi1GNgvX4B7FUwB40bOJud9sWs-2TOB6nXSBiJLWIxGhYfQVUOlsC9jjYDuDknGT_-IGmQMPwL4oGy-3cSjdPWDsU2Cha_B7DU9NEB_kmzHoZSs" alt="BIGBRUVA Official Crest" className="w-32 h-32 object-contain mx-auto mb-4 filter brightness-110" width={160} height={80} style={{ objectFit: 'contain' }} /><h2 className="font-display-lg text-headline-lg text-secondary opacity-40 text-center uppercase tracking-[0.2em]">BIGBRUVA</h2></div>
<div className="flex flex-wrap justify-center gap-8 mb-12"><Image src="https://lh3.googleusercontent.com/aida-public/AB6AXuCWvF-nHdw2xKstGjft8ySDVK94zelb6MpCkEiDtT3PB8YXAgFgSYTRjSILgn5BvsGjb8lQmrgvgruVQDyp5-wOa5NCgbujblFQ_9CiIGu8T-eLVUcjr-FzmkhptVpclIV49zl-7XM7EQFTibf-k2lRoNuCBdPeNi1GNgvX4B7FUwB40bOJud9sWs-2TOB6nXSBiJLWIxGhYfQVUOlsC9jjYDuDknGT_-IGmQMPwL4oGy-3cSjdPWDsU2Cha_B7DU9NEB_kmzHoZSs" alt="BIGBRUVA Official Crest" className="w-32 h-32 object-contain mx-auto mb-4 filter brightness-110" width={160} height={80} style={{ objectFit: 'contain' }} /><h2 className="font-display-lg text-headline-lg text-secondary opacity-40 text-center uppercase tracking-[0.2em]">BIGBRUVA</h2></div>
<p className="text-secondary font-label-md tracking-widest">© 2024 EJIKE EBIDILO - BIGBRUVA INSTITUTIONAL ARCHIVE. ALL RIGHTS RESERVED.</p>
<div className="mt-8 flex gap-6">
<span className="material-symbols-outlined text-secondary opacity-50 cursor-pointer hover:opacity-100 transition-opacity">public</span>
<span className="material-symbols-outlined text-secondary opacity-50 cursor-pointer hover:opacity-100 transition-opacity">podcasts</span>
<span className="material-symbols-outlined text-secondary opacity-50 cursor-pointer hover:opacity-100 transition-opacity">rss_feed</span>
</div>
</div>
</footer>
    </>
  );
}
