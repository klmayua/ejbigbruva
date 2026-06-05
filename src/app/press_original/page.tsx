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
      
<nav className="fixed top-0 w-full z-50 bg-primary/70 backdrop-blur-md dark:bg-primary/70 border-b border-soft-ivory/10 px-margin-desktop py-base flex justify-between items-center transition-all duration-300">
<div className="flex items-center gap-4">
<img alt="BIGBRUVA LOGO" className="h-10 w-auto" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC_9RAnNPaThFbDC9iMvDA8uOr07jICBY7uGu__cFV8jxBzQO8-Tm3ebSes-ThFZ8AKYJimewJjveK0G5ls4ZGYP5zKw4bmFIvzD2fk8dWvSQ5czhfyY_wZz26nrNvoq0cjmOSZ50z0RrcjZ1-60wFLKhQi-FaySXW2mByFNxJb5sDdJ7A25SmAl6Epehet_ttWF0nOiJAJ7W7qpYZHJZaWhADCKgpDlUqgQxeRRQvzyuFTWsDwhJevSezlSCvvnqQtWmBKq7PV754" />
<span className="font-display-lg text-headline-md text-secondary tracking-widest uppercase">BIGBRUVA</span>
</div>
<div className="hidden lg:flex items-center gap-8">
<a className="text-on-surface-variant hover:text-secondary transition-colors duration-300 font-label-md text-label-md" href="/">Home</a>
<a className="text-on-surface-variant hover:text-secondary transition-colors duration-300 font-label-md text-label-md" href="/about">About</a>
<a className="text-on-surface-variant hover:text-secondary transition-colors duration-300 font-label-md text-label-md" href="/legacy">Legacy</a>
<a className="text-on-surface-variant hover:text-secondary transition-colors duration-300 font-label-md text-label-md" href="/media">Media</a>
<a className="text-on-surface-variant hover:text-secondary transition-colors duration-300 font-label-md text-label-md" href="/voice">Voice</a>
<a className="text-on-surface-variant hover:text-secondary transition-colors duration-300 font-label-md text-label-md" href="/events">Events</a>
<a className="text-on-surface-variant hover:text-secondary transition-colors duration-300 font-label-md text-label-md" href="/gallery">Gallery</a>
</div>
<div className="flex items-center gap-6">
<a className="text-on-surface-variant hover:text-secondary transition-colors duration-300 font-label-md text-label-md" href="/community">Community</a>
<a className="text-secondary border-b-2 border-secondary pb-1 font-bold font-label-md text-label-md" href="/press">Press</a>
<a className="bg-secondary text-on-secondary px-6 py-2 rounded-sm font-label-md text-label-md hover:bg-secondary-fixed transition-all duration-300" href="/contact">Contact</a>
</div>
</nav>
<main className="pt-32 pb-24">

<section className="max-w-container-max mx-auto px-margin-desktop mb-24">
<div className="grid grid-cols-1 md:grid-cols-12 gap-gutter items-center">
<div className="md:col-span-5 relative group">
<div className="absolute -inset-2 border border-secondary/20 group-hover:border-secondary/40 transition-colors duration-500"></div>
<img alt="Ejike Ebidilo Casual Portrait" className="w-full grayscale hover:grayscale-0 transition-all duration-700 aspect-[2/3] object-cover relative z-10 shadow-2xl" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBRsGXlQa5y3evRUsCH1vJQzivIo-2mlZuKjZRSsZ_wqozSVkK87BozAxk_YhZgIZjRVWOIVpfxvtMMrSTNneasKno4ZF9chYzmXlgd014QcThABZOJHIHdX42m1MCbC8Iy8TcKfXuAPae98SSI7LMzttvuylQt_cjdTpvbKNLNzgbXDwgphjq8T2gnGPEs1VM6sju65RDCCHWiTIbaQujnATuoDtH4g-yZQ3InxPcorC7XB_i6-oORH7b4cCAmCXNvrXTfS2O4Nk4" />
</div>
<div className="md:col-span-7 flex flex-col justify-center">
<span className="text-secondary font-label-md text-label-md tracking-[0.2em] uppercase mb-4">Official Biography</span>
<h1 className="font-display-lg text-display-lg mb-8 leading-tight">Ejike Ebidilo: <span className="gradient-text italic">The Visionary Voice</span></h1>
<div className="space-y-6 text-on-surface-variant font-body-lg text-body-lg">
<p className="">With a career spanning decades of institutional influence, Ejike Ebidilo has emerged as a cornerstone of strategic communications and legacy preservation. His work under the BIGBRUVA banner has redefined how narratives are archived and projected in the modern era.</p>
<p className="">This newsroom serves as the definitive source for accredited information, high-resolution brand assets, and official announcements regarding his ongoing contributions to media and institutional heritage.</p>
</div>
<div className="mt-10 flex gap-6">
<button className="flex items-center gap-2 text-secondary hover:text-secondary-fixed transition-colors font-label-md text-label-md">
<span className="material-symbols-outlined">description</span>
                            Download Full Biography (PDF)
                        </button>
</div>
</div>
</div>
</section>

<section className="max-w-container-max mx-auto px-margin-desktop mb-32">
<div className="flex justify-between items-end mb-12">
<div>
<span className="text-secondary font-label-md text-label-md tracking-[0.2em] uppercase">The Newsroom</span>
<h2 className="font-headline-lg text-headline-lg mt-2">Latest Press &amp; Coverage</h2>
</div>
<button className="text-on-surface-variant hover:text-secondary transition-colors underline underline-offset-8">View Archive</button>
</div>
<div className="grid grid-cols-1 md:grid-cols-4 gap-6">

<div className="md:col-span-2 md:row-span-2 glass-card p-10 flex flex-col justify-between group cursor-pointer overflow-hidden">
<div>
<span className="text-secondary/60 font-label-sm text-label-sm uppercase mb-4 block">Press Release • June 12, 2024</span>
<h3 className="text-headline-md font-headline-md group-hover:text-secondary transition-colors duration-300">Announcing the BIGBRUVA Institutional Archive Global Initiative</h3>
<p className="mt-6 text-on-surface-variant font-body-md text-body-md line-clamp-3">A revolutionary digital sanctuary dedicated to the meticulous preservation of media history and cultural milestones, spearheaded by Ejike Ebidilo.</p>
</div>
<div className="flex items-center gap-2 text-secondary mt-8">
<span className="font-label-md text-label-md uppercase tracking-wider">Read Full Release</span>
<span className="material-symbols-outlined group-hover:translate-x-2 transition-transform">arrow_forward</span>
</div>
</div>

<div className="glass-card p-6 flex flex-col justify-between group cursor-pointer border-l-4 border-l-secondary">
<span className="text-secondary/60 font-label-sm text-label-sm uppercase mb-4 block">Media Coverage • Forbes</span>
<h4 className="text-lg font-bold group-hover:text-secondary transition-colors">The Architect of Digital Legacy</h4>
<span className="material-symbols-outlined text-secondary mt-4">open_in_new</span>
</div>
<div className="glass-card p-6 flex flex-col justify-between group cursor-pointer">
<span className="text-secondary/60 font-label-sm text-label-sm uppercase mb-4 block">Media Coverage • Times</span>
<h4 className="text-lg font-bold group-hover:text-secondary transition-colors">Voice of the Institution</h4>
<span className="material-symbols-outlined text-secondary mt-4">open_in_new</span>
</div>

<div className="md:col-span-2 bg-secondary/10 border border-secondary/20 p-8 flex items-center justify-between group">
<div className="max-w-[70%]">
<h4 className="text-headline-md font-headline-md text-secondary">2024 Media Kit</h4>
<p className="text-on-surface-variant font-body-md text-body-md mt-2">Essential assets, backgrounders, and high-res imagery for press use.</p>
</div>
<button className="bg-secondary text-on-secondary px-6 py-4 rounded-full flex items-center gap-2 hover:scale-105 transition-transform">
<span className="material-symbols-outlined">download</span>
<span className="font-bold">240MB</span>
</button>
</div>
</div>
</section>

<section className="max-w-container-max mx-auto px-margin-desktop mb-32">
<div className="mb-12">
<span className="text-secondary font-label-md text-label-md tracking-[0.2em] uppercase">Official Assets</span>
<h2 className="font-headline-lg text-headline-lg mt-2">Approved Photography &amp; Brand Identity</h2>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">

<div className="group">
<div className="aspect-square bg-surface-container overflow-hidden mb-4 relative">
<img alt="Press Portrait 01" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 scale-110 group-hover:scale-100" data-alt="High resolution professional headshot of Ejike Ebidilo in a tailored dark navy suit against a minimalist studio background. The lighting is dramatic with soft shadows, highlighting his sophisticated features. The visual style is premium editorial, consistent with a luxury brand identity using a palette of deep blues and subtle gold highlights." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBRsGXlQa5y3evRUsCH1vJQzivIo-2mlZuKjZRSsZ_wqozSVkK87BozAxk_YhZgIZjRVWOIVpfxvtMMrSTNneasKno4ZF9chYzmXlgd014QcThABZOJHIHdX42m1MCbC8Iy8TcKfXuAPae98SSI7LMzttvuylQt_cjdTpvbKNLNzgbXDwgphjq8T2gnGPEs1VM6sju65RDCCHWiTIbaQujnATuoDtH4g-yZQ3InxPcorC7XB_i6-oORH7b4cCAmCXNvrXTfS2O4Nk4" />
<div className="absolute inset-0 bg-background/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
<span className="material-symbols-outlined p-2 bg-secondary text-on-secondary rounded-full cursor-pointer hover:bg-secondary-fixed transition-colors">download</span>
<span className="material-symbols-outlined p-2 bg-white/20 backdrop-blur text-white rounded-full cursor-pointer hover:bg-white/30 transition-colors">visibility</span>
</div>
</div>
<p className="font-label-md text-label-md text-on-surface-variant">Official Portrait 01 (Color)</p>
</div>

<div className="group">
<div className="aspect-square bg-surface-container flex items-center justify-center mb-4 relative p-12 border border-soft-ivory/5">
<img alt="BIGBRUVA Crest" className="w-full h-auto opacity-40 group-hover:opacity-100 transition-all duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC_9RAnNPaThFbDC9iMvDA8uOr07jICBY7uGu__cFV8jxBzQO8-Tm3ebSes-ThFZ8AKYJimewJjveK0G5ls4ZGYP5zKw4bmFIvzD2fk8dWvSQ5czhfyY_wZz26nrNvoq0cjmOSZ50z0RrcjZ1-60wFLKhQi-FaySXW2mByFNxJb5sDdJ7A25SmAl6Epehet_ttWF0nOiJAJ7W7qpYZHJZaWhADCKgpDlUqgQxeRRQvzyuFTWsDwhJevSezlSCvvnqQtWmBKq7PV754" />
<div className="absolute inset-0 bg-background/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
<span className="material-symbols-outlined p-2 bg-secondary text-on-secondary rounded-full cursor-pointer hover:bg-secondary-fixed transition-colors">download</span>
</div>
</div>
<p className="font-label-md text-label-md text-on-surface-variant">BIGBRUVA Crest (Primary)</p>
</div>

<div className="group">
<div className="aspect-square bg-secondary flex items-center justify-center mb-4 relative p-12">
<img alt="BIGBRUVA Crest Inverted" className="w-full h-auto invert group-hover:scale-110 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC_9RAnNPaThFbDC9iMvDA8uOr07jICBY7uGu__cFV8jxBzQO8-Tm3ebSes-ThFZ8AKYJimewJjveK0G5ls4ZGYP5zKw4bmFIvzD2fk8dWvSQ5czhfyY_wZz26nrNvoq0cjmOSZ50z0RrcjZ1-60wFLKhQi-FaySXW2mByFNxJb5sDdJ7A25SmAl6Epehet_ttWF0nOiJAJ7W7qpYZHJZaWhADCKgpDlUqgQxeRRQvzyuFTWsDwhJevSezlSCvvnqQtWmBKq7PV754" />
<div className="absolute inset-0 bg-background/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
<span className="material-symbols-outlined p-2 bg-white text-black rounded-full cursor-pointer">download</span>
</div>
</div>
<p className="font-label-md text-label-md text-on-surface-variant">BIGBRUVA Crest (Inverted)</p>
</div>

<div className="group">
<div className="aspect-square glass-card flex flex-col items-center justify-center mb-4 relative group-hover:border-secondary transition-all">
<span className="material-symbols-outlined text-secondary text-5xl mb-4" data-weight="fill">branding_watermark</span>
<span className="font-label-md text-label-md text-secondary">Typography Kit</span>
<div className="absolute inset-0 bg-background/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
<span className="material-symbols-outlined p-2 bg-secondary text-on-secondary rounded-full cursor-pointer">download</span>
</div>
</div>
<p className="font-label-md text-label-md text-on-surface-variant">Official Brand Guidelines</p>
</div>
</div>
</section>

<section className="max-w-4xl mx-auto px-margin-mobile">
<div className="glass-card p-12 text-center border-t-2 border-t-secondary relative overflow-hidden">
<div className="absolute -top-10 -right-10 opacity-5">
<img alt="Watermark" className="w-64" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC_9RAnNPaThFbDC9iMvDA8uOr07jICBY7uGu__cFV8jxBzQO8-Tm3ebSes-ThFZ8AKYJimewJjveK0G5ls4ZGYP5zKw4bmFIvzD2fk8dWvSQ5czhfyY_wZz26nrNvoq0cjmOSZ50z0RrcjZ1-60wFLKhQi-FaySXW2mByFNxJb5sDdJ7A25SmAl6Epehet_ttWF0nOiJAJ7W7qpYZHJZaWhADCKgpDlUqgQxeRRQvzyuFTWsDwhJevSezlSCvvnqQtWmBKq7PV754" />
</div>
<h2 className="font-headline-lg text-headline-lg mb-6">Media Inquiries</h2>
<p className="font-body-lg text-body-lg text-on-surface-variant mb-10">For interview requests, speaking engagements, or specific media asset permissions, please contact our global communications desk.</p>
<div className="flex flex-col md:flex-row items-center justify-center gap-12">
<div>
<span className="font-label-sm text-label-sm text-secondary uppercase tracking-widest block mb-1">Direct Email</span>
<a className="text-headline-md font-headline-md hover:text-secondary transition-colors underline decoration-secondary/30" href="mailto:press@bigbruva.institution">press@bigbruva.archive</a>
</div>
<div className="h-12 w-px bg-secondary/20 hidden md:block"></div>
<div>
<span className="font-label-sm text-label-sm text-secondary uppercase tracking-widest block mb-1">Global Desk</span>
<p className="text-headline-md font-headline-md">+1 (800) BRUVA-HQ</p>
</div>
</div>
</div>
</section>
</main>

<footer className="w-full py-16 px-margin-desktop bg-surface-container-lowest border-t border-secondary/20">
<div className="flex flex-col items-center gap-base text-center w-full max-w-container-max mx-auto">
<img alt="BIGBRUVA Official Crest" className="w-32 md:w-40 mb-8 opacity-90 hover:opacity-100 transition-opacity duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC6WdFJlD557NG1rjXjDo-d7qR5erFaA-cBmArXCvURIRozCAqFglCoCRtIDt6qYexzdJLve0GkxfaOp0fS0s2Z895B-wzYPSAb7uF1InR9g-H1FNWtQxUVBN8bl9jwc8vTEvVTXy0mgDZZUqukRlYYxNIHvHLM5_BiIony1nnVtb_78YezpJF8eql5hOOQvtChzsTi0hy6udWqH0ndHiePZbWH6cOBNkCNu8QguUbgwn7z0G9XEeI_OOCMV9fUsfttHZcMGJ7GCRA" />

<div className="flex flex-wrap justify-center gap-x-12 gap-y-6 mb-12">
<a className="text-on-surface-variant hover:text-secondary transition-colors font-label-md text-label-md" href="/community">Community</a>
<a className="text-secondary font-bold font-label-md text-label-md" href="/press">Press</a>
<a className="text-on-surface-variant hover:text-secondary transition-colors font-label-md text-label-md" href="/contact">Contact</a>
<a className="text-on-surface-variant hover:text-secondary transition-colors font-label-md text-label-md" href="/">Privacy Policy</a>
<a className="text-on-surface-variant hover:text-secondary transition-colors font-label-md text-label-md" href="/">Terms of Service</a>
</div>
<p className="text-on-surface-variant/60 font-body-md text-label-md tracking-widest">
                © 2024 EJIKE EBIDILO - BIGBRUVA INSTITUTIONAL ARCHIVE. ALL RIGHTS RESERVED.
            </p>
</div>
</footer>
    </>
  );
}
