"use client";

import React, { useEffect } from 'react';
import Link from 'next/link';

export default function Page() {
  useEffect(() => {
    // Intersection Observer for scroll reveal animations
    const observerOptions = {
      threshold: 0.15,
      rootMargin: '0px 0px -50px 0px'
    };

    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.remove('opacity-0', 'translate-y-8', 'translate-y-10');
          entry.target.classList.add('opacity-100', 'translate-y-0');
        }
      });
    }, observerOptions);

    // Initial hero reveal
    const hero = document.getElementById('hero-content');
    if (hero) {
      setTimeout(() => {
        hero.classList.remove('opacity-0', 'translate-y-8');
        hero.classList.add('opacity-100', 'translate-y-0');
      }, 300);
    }

    // Section reveal elements
    document.querySelectorAll('section > div, .space-y-32 > div').forEach(el => {
      if (!el.id) {
        el.classList.add('opacity-0', 'translate-y-8', 'transition-all', 'duration-1000');
        revealObserver.observe(el);
      }
    });

    // Mobile menu toggle logic
    const menuBtn = document.querySelector('nav .material-symbols-outlined[data-icon="menu"], header button.material-symbols-outlined, nav span.material-symbols-outlined:last-child');
    const aside = document.querySelector('aside');
    if (menuBtn && aside) {
      const toggleMenu = () => {
        aside.classList.toggle('hidden');
        aside.classList.toggle('flex');
      };
      menuBtn.addEventListener('click', toggleMenu);
      return () => menuBtn.removeEventListener('click', toggleMenu);
    }

    // Simple Parallax scroll logic for hero image
    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      const heroImage = document.querySelector('section img');
      if (heroImage instanceof HTMLElement) {
        heroImage.style.transform = `scale(1.05) translateY(${scrolled * 0.1}px)`;
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      
<nav className="fixed top-0 w-full z-50 bg-primary/70 backdrop-blur-md dark:bg-primary/70 border-b border-soft-ivory/10 flex justify-between items-center px-margin-desktop py-base">
<div className="flex items-center gap-4">
<img alt="Official Crest Logo" className="h-10 w-10 object-contain" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC_9RAnNPaThFbDC9iMvDA8uOr07jICBY7uGu__cFV8jxBzQO8-Tm3ebSes-ThFZ8AKYJimewJjveK0G5ls4ZGYP5zKw4bmFIvzD2fk8dWvSQ5czhfyY_wZz26nrNvoq0cjmOSZ50z0RrcjZ1-60wFLKhQi-FaySXW2mByFNxJb5sDdJ7A25SmAl6Epehet_ttWF0nOiJAJ7W7qpYZHJZaWhADCKgpDlUqgQxeRRQvzyuFTWsDwhJevSezlSCvvnqQtWmBKq7PV754" />
<span className="font-display-lg text-headline-md text-secondary tracking-widest uppercase">BIGBRUVA</span>
</div>
<div className="hidden md:flex items-center gap-8">
<a className="text-on-surface-variant hover:text-secondary transition-colors duration-300" href="/">Home</a>
<a className="text-on-surface-variant hover:text-secondary transition-colors duration-300" href="/about">About</a>
<a className="text-on-surface-variant hover:text-secondary transition-colors duration-300" href="/legacy">Legacy</a>
<a className="text-on-surface-variant hover:text-secondary transition-colors duration-300" href="/media">Media</a>
<a className="text-on-surface-variant hover:text-secondary transition-colors duration-300" href="/voice">Voice</a>
<a className="text-on-surface-variant hover:text-secondary transition-colors duration-300" href="/events">Events</a>
<a className="text-secondary border-b-2 border-secondary pb-1 font-bold" href="/gallery">Gallery</a>
</div>
<div className="flex items-center gap-6">
<div className="hidden lg:flex gap-6 items-center">
<a className="text-on-surface-variant hover:text-secondary transition-colors duration-300" href="/community">Community</a>
<a className="text-on-surface-variant hover:text-secondary transition-colors duration-300" href="/press">Press</a>
<a className="text-on-surface-variant hover:text-secondary transition-colors duration-300" href="/contact">Contact</a>
</div>
<span className="material-symbols-outlined text-secondary cursor-pointer">newspaper</span>
</div>
</nav>
<main className="pt-32 pb-24 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">

<header className="mb-16 text-center md:text-left">
<h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-secondary mb-4 uppercase tracking-tighter">The Visual Archive</h1>
<p className="font-body-lg text-on-surface-variant max-w-2xl">A curated collection documenting the evolution, cultural impact, and private moments of BIGBRUVA Institutional Archive. From state agbadas to casual editorial portraits.</p>
</header>

<div className="flex flex-wrap gap-4 mb-12 overflow-x-auto pb-4 scrollbar-hide no-scrollbar">
<button className="px-6 py-2 bg-secondary text-on-secondary font-label-md uppercase tracking-widest border border-secondary transition-all">All Collections</button>
<button className="px-6 py-2 border border-secondary/30 text-secondary font-label-md uppercase tracking-widest hover:bg-secondary/10 transition-all">Portraits</button>
<button className="px-6 py-2 border border-secondary/30 text-secondary font-label-md uppercase tracking-widest hover:bg-secondary/10 transition-all">Behind The Scenes</button>
<button className="px-6 py-2 border border-secondary/30 text-secondary font-label-md uppercase tracking-widest hover:bg-secondary/10 transition-all">Broadcasting</button>
<button className="px-6 py-2 border border-secondary/30 text-secondary font-label-md uppercase tracking-widest hover:bg-secondary/10 transition-all">Events</button>
<button className="px-6 py-2 border border-secondary/30 text-secondary font-label-md uppercase tracking-widest hover:bg-secondary/10 transition-all">Community</button>
<button className="px-6 py-2 border border-secondary/30 text-secondary font-label-md uppercase tracking-widest hover:bg-secondary/10 transition-all">Editorial</button>
<button className="px-6 py-2 border border-secondary/30 text-secondary font-label-md uppercase tracking-widest hover:bg-secondary/10 transition-all">Lifestyle</button>
</div>

<div className="masonry-grid">

<div className="masonry-item group relative overflow-hidden bg-primary-container/20 border border-on-surface-variant/10 transition-all duration-1000 opacity-100 translate-y-0">
<img alt="Institutional Portrait" className="w-full h-auto grayscale hover:grayscale-0 transition-all duration-700 ease-in-out scale-100 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDxyECnHvOCHSSYTMlOn50migsKllrCwr_6xsRt6j0bHOO_ua0VDQe1qHHxoex8x8ohCLW28Peevk_yUffBTmPzWaUyf5vwGemiJLSkx3x0KMkX2Br3vnA10sTYIrvq5lLsPThAxsvUcPmxeqjhueMf7Hb5DOmujMSPzEnTxz9yMbjdrH1FRtTTIRZy8qEEvx1Iooy8LEjJfdf5_pEQjDhpFTL7BPt8Rd78Cp8joVpN2GTGvJ5ymtgO8HNJuOb1L7wuto2y2C_5QVU" />
<div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-6 flex flex-col justify-end">
<span className="text-secondary font-label-sm uppercase tracking-widest mb-1">Portraits</span>
<h3 className="font-headline-md text-on-surface">The Sovereign Agbada</h3>
</div>
</div>

<div className="masonry-item group relative overflow-hidden bg-primary-container/20 border border-on-surface-variant/10 transition-all duration-1000 opacity-100 translate-y-0">
<img alt="Casual Institutional Portrait" className="w-full h-auto grayscale hover:grayscale-0 transition-all duration-700 ease-in-out scale-100 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDndsixHjhANHIuI883kfVDOBOzVqzWn_A9sdtc-aj_q1WzwtctGPBKKuAfxkQVDZSRLDEHXjYE3aHca4sQoGIMexkXZkAyieY7rWzBgrm43lAywRyonTh9lb1cGM4yKOje3hRGmkV8AQZqfY8D849XDxg4s37Ehfkkm1JocASoFnfUv06gUUjvw-VuAXDPtnO0H0Jv_lCXYwba1mKXdS2jcToqV2mo3WXJjkqaLbXaH08qIoe_ukGiqEAiLtqKfjpWJxRsgiCYL5k" />
<div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-6 flex flex-col justify-end">
<span className="text-secondary font-label-sm uppercase tracking-widest mb-1">Lifestyle</span>
<h3 className="font-headline-md text-on-surface">Midday Reflection</h3>
</div>
</div>

<div className="masonry-item group relative overflow-hidden bg-primary-container/20 border border-on-surface-variant/10 transition-all duration-1000 opacity-100 translate-y-0">
<img alt="Editorial Fashion Shot" className="w-full h-auto grayscale hover:grayscale-0 transition-all duration-700 ease-in-out scale-100 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD4SmKl9IzEfPh4xrlgA6lBW4woTU6QLkn9rMvbmVz0_cZrjuDmz8WlO9oE3oCTtJ5n2MAfVXWSaFb-xuGM3datV1a_mKDa969RUAFQ-bjPyHyq-xdXl1byOCpsCl5uUd6vUrY4r-DbSjIC6GYPdo40a_TBoT2zyXcCj5QK3Q3ITX7QmLLb59w_EdMY1R4utylUEtJ5W5xylav7WNoFVWRHg1gh-FqngqjqpTJ9PKBEjAqU_ObzqjgUbU7_oWMER9kf8Vl88BenR_s" />
<div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-6 flex flex-col justify-end">
<span className="text-secondary font-label-sm uppercase tracking-widest mb-1">Editorial</span>
<h3 className="font-headline-md text-on-surface">Modern Heritage</h3>
</div>
</div>

<div className="masonry-item group relative overflow-hidden bg-primary-container/20 border border-on-surface-variant/10 transition-all duration-1000 opacity-100 translate-y-0">
<img alt="Ceremonial Event Agbada" className="w-full h-auto grayscale hover:grayscale-0 transition-all duration-700 ease-in-out scale-100 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAIKiafyRs74NLvS13hgJQ6be6WE2jgI-jw_zgFwUjXWWGmBTsikqoqlSWPE6RaLaIQFoPOutTzjtz9cYhI6iT9kKVIQakx6z7Bo8pzkXbQN60DEdmQTQ9mJ_QzWoVH5NlH2ZZnj1R-sI1a5Y5aQ6n1PLwatzDBkH3TDKNtYoXvHtpVHFM6_zCE1M0FcAoXu9d5DIwsPFI0WhQMC4uflMqOvb7T-d9hzVL0b27efcn0NKXfB9l2HkxjDjUo-DQ2tr7Dmr91FHp2GzU" />
<div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-6 flex flex-col justify-end">
<span className="text-secondary font-label-sm uppercase tracking-widest mb-1">Events</span>
<h3 className="font-headline-md text-on-surface">State Gathering</h3>
</div>
</div>

<div className="masonry-item group relative overflow-hidden bg-primary-container/20 border border-on-surface-variant/10 transition-all duration-1000 opacity-100 translate-y-0">
<img alt="Community Interaction Shot" className="w-full h-auto grayscale hover:grayscale-0 transition-all duration-700 ease-in-out scale-100 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBRsGXlQa5y3evRUsCH1vJQzivIo-2mlZuKjZRSsZ_wqozSVkK87BozAxk_YhZgIZjRVWOIVpfxvtMMrSTNneasKno4ZF9chYzmXlgd014QcThABZOJHIHdX42m1MCbC8Iy8TcKfXuAPae98SSI7LMzttvuylQt_cjdTpvbKNLNzgbXDwgphjq8T2gnGPEs1VM6sju65RDCCHWiTIbaQujnATuoDtH4g-yZQ3InxPcorC7XB_i6-oORH7b4cCAmCXNvrXTfS2O4Nk4" />
<div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-6 flex flex-col justify-end">
<span className="text-secondary font-label-sm uppercase tracking-widest mb-1">Community</span>
<h3 className="font-headline-md text-on-surface">Institutional Ties</h3>
</div>
</div>

<div className="masonry-item glass-panel p-12 flex flex-col items-center justify-center text-center aspect-[3/4] transition-all duration-1000 opacity-100 translate-y-0">
<span className="material-symbols-outlined text-secondary text-5xl mb-6">photo_camera</span>
<h4 className="font-headline-md text-secondary mb-4 uppercase">Behind the Scenes</h4>
<p className="text-on-surface-variant font-body-md mb-8">Access restricted clips and exclusive production stills from the upcoming institutional documentary.</p>
<button className="px-8 py-3 bg-secondary text-on-secondary font-label-md uppercase tracking-widest">Inquire Access</button>
</div>
</div>

<div className="mt-32 grid grid-cols-1 md:grid-cols-4 gap-gutter h-auto md:h-[600px]">
<div className="md:col-span-2 bg-primary-container/30 relative overflow-hidden p-12 flex flex-col justify-between border border-secondary/10 group">

<div className="relative z-10">
<span className="font-label-sm text-secondary uppercase tracking-widest">Documentary Feature</span>
<h2 className="font-display-lg text-headline-lg mt-4 leading-tight uppercase">Legacy In Motion</h2>
</div>
<div className="relative z-10">
<p className="text-on-surface-variant mb-6 max-w-sm">Experience the narrative journey through our interactive visual medium. Cinematic storytelling at its peak.</p>
<a className="flex items-center gap-4 text-secondary uppercase font-label-md tracking-widest group-hover:gap-6 transition-all" href="/media">
                        Explore Media <span className="material-symbols-outlined">arrow_right_alt</span>
</a>
</div>
</div>
<div className="md:col-span-2 grid grid-cols-2 gap-gutter">
<div className="bg-surface-container-high border border-on-surface-variant/5 p-8 flex flex-col justify-center items-center text-center">
<span className="font-display-lg text-display-lg text-secondary/30">12</span>
<p className="font-label-md uppercase tracking-widest text-on-surface-variant mt-2">Active Exhibits</p>
</div>
<div className="bg-secondary/10 border border-secondary/20 p-8 flex flex-col justify-center items-center text-center">
<span className="font-display-lg text-display-lg text-secondary/30">07</span>
<p className="font-label-md uppercase tracking-widest text-on-surface-variant mt-2">Collections</p>
</div>
<div className="col-span-2 bg-surface-container-lowest border border-soft-ivory/10 p-8 flex justify-between items-center">
<div>
<h4 className="font-headline-md uppercase">Request Archive High-Res</h4>
<p className="text-on-surface-variant font-label-sm mt-1">Institutional Use &amp; Press Licensing</p>
</div>
<span className="material-symbols-outlined text-secondary text-4xl">cloud_download</span>
</div>
</div>
</div>
</main>

<footer className="bg-surface-container-lowest dark:bg-surface-container-lowest border-t border-secondary/20 w-full py-16 px-margin-desktop">
<div className="flex flex-col items-center gap-base text-center w-full max-w-container-max mx-auto"><div className="mb-12 w-64 h-64 mx-auto transition-all duration-700 hover:scale-105">
  <img alt="BIGBRUVA Official Crest" className="w-full h-full object-contain" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC6WdFJlD557NG1rjXjDo-d7qR5erFaA-cBmArXCvURIRozCAqFglCoCRtIDt6qYexzdJLve0GkxfaOp0fS0s2Z895B-wzYPSAb7uF1InR9g-H1FNWtQxUVBN8bl9jwc8vTEvVTXy0mgDZZUqukRlYYxNIHvHLM5_BiIony1nnVtb_78YezpJF8eql5hOOQvtChzsTi0hy6udWqH0ndHiePZbWH6cOBNkCNu8QguUbgwn7z0G9XEeI_OOCMV9fUsfttHZcMGJ7GCRA" />
</div>
<div className="flex flex-wrap justify-center gap-x-12 gap-y-4 mb-12">
  <a className="text-on-surface-variant hover:text-secondary transition-colors font-label-md uppercase tracking-widest" href="/community">Community</a>
  <a className="text-on-surface-variant hover:text-secondary transition-colors font-label-md uppercase tracking-widest" href="/press">Press</a>
  <a className="text-on-surface-variant hover:text-secondary transition-colors font-label-md uppercase tracking-widest" href="/contact">Contact</a>
  <a className="text-on-surface-variant hover:text-secondary transition-colors font-label-md uppercase tracking-widest" href="/">Privacy Policy</a>
  <a className="text-on-surface-variant hover:text-secondary transition-colors font-label-md uppercase tracking-widest" href="/">Terms of Service</a>
</div>
<p className="font-body-md text-label-md text-on-surface-variant tracking-widest opacity-50 uppercase">
  © 2024 EJIKE EBIDILO - BIGBRUVA INSTITUTIONAL ARCHIVE. ALL RIGHTS RESERVED.
</p></div>
</footer>
    </>
  );
}
