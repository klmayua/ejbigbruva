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
      
<aside className="fixed left-0 top-0 h-full z-40 hidden lg:flex flex-col w-80 bg-surface-container-lowest border-r border-outline-variant/10">
<div className="px-8 py-10">
<div className="w-full mb-8">
<img alt="BIGBRUVA Crest" className="h-24 w-auto object-contain" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDzoQachYWqkheryCjc0oj1MFa-C1ZPMJ7iMTX-2-IDj7U9vodjQkBDg6bzs8DGk-WmboILzxQlYaQcA2aHbUEYZcJRksEek2fr3QWgIrtR-1uivfoHhCgtW90_f6_8W4NQYgsLsKZ0qSQin7U0OqkqxqrlplbfTuEt6pFWYYQmG4aDRV2AFdu5ZJyhZyKPZTRJaMbuic6zpM-OG6I9l73dLr-tV4GAyFoG0xg_-5hrsvTea3SIsK9OnWGI5gPT5RFgnnA0E5N6ZZU"/>
</div>
<p className="font-label-sm text-[10px] text-on-surface-variant uppercase tracking-[0.25em] opacity-60">Ejike Ebidilo Institutional</p>
</div>
<nav className="flex-1 px-4 space-y-1">
<a className="flex items-center px-4 py-3 text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-all duration-200 ease-in-out group rounded-xl" href="/">
<span className="material-symbols-outlined mr-4 opacity-70 group-hover:text-secondary">home</span>
<span className="font-label-md">Home</span>
</a>
<a className="flex items-center px-4 py-3 bg-primary-container/40 text-secondary rounded-xl font-bold transition-all duration-200 ease-in-out" href="/about">
<span className="material-symbols-outlined mr-4">person_celebrate</span>
<span className="font-label-md">About</span>
</a>
<a className="flex items-center px-4 py-3 text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-all duration-200 ease-in-out group rounded-xl" href="/legacy">
<span className="material-symbols-outlined mr-4 opacity-70 group-hover:text-secondary">history_edu</span>
<span className="font-label-md">Legacy</span>
</a>
<a className="flex items-center px-4 py-3 text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-all duration-200 ease-in-out group rounded-xl" href="/media">
<span className="material-symbols-outlined mr-4 opacity-70 group-hover:text-secondary">video_library</span>
<span className="font-label-md">Media</span>
</a>
<a className="flex items-center px-4 py-3 text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-all duration-200 ease-in-out group rounded-xl" href="/voice">
<span className="material-symbols-outlined mr-4 opacity-70 group-hover:text-secondary">record_voice_over</span>
<span className="font-label-md">Voice</span>
</a>
<a className="flex items-center px-4 py-3 text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-all duration-200 ease-in-out group rounded-xl" href="/events">
<span className="material-symbols-outlined mr-4 opacity-70 group-hover:text-secondary">event</span>
<span className="font-label-md">Events</span>
</a>
</nav>
<div className="p-8">
<button className="w-full py-4 bg-secondary text-on-secondary-fixed font-bold rounded-xl active:scale-95 transition-all shadow-lg shadow-secondary/10">
            Join Community
        </button>
</div>
</aside>

<header className="lg:hidden fixed top-0 w-full z-50 glass-header border-b border-outline-variant/10 bg-surface-container-lowest/80 flex justify-between items-center px-margin-mobile py-4">
<div className="h-10">
<img alt="BIGBRUVA Crest" className="h-full w-auto object-contain" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDzoQachYWqkheryCjc0oj1MFa-C1ZPMJ7iMTX-2-IDj7U9vodjQkBDg6bzs8DGk-WmboILzxQlYaQcA2aHbUEYZcJRksEek2fr3QWgIrtR-1uivfoHhCgtW90_f6_8W4NQYgsLsKZ0qSQin7U0OqkqxqrlplbfTuEt6pFWYYQmG4aDRV2AFdu5ZJyhZyKPZTRJaMbuic6zpM-OG6I9l73dLr-tV4GAyFoG0xg_-5hrsvTea3SIsK9OnWGI5gPT5RFgnnA0E5N6ZZU"/>
</div>
<button className="material-symbols-outlined text-secondary text-3xl">menu</button>
</header>

<main className="lg:ml-80 min-h-screen">

<section className="relative min-h-screen flex flex-col justify-end p-margin-mobile md:p-margin-desktop overflow-hidden">
<div className="absolute inset-0 z-0">
<img alt="Ejike Ebidilo Casual Portrait" className="w-full h-full object-cover object-center scale-105" src="/images/EJ_casual_01.jpeg"/>
<div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest via-surface-container-lowest/60 to-transparent"></div>
</div>
<div className="relative z-10 max-w-4xl opacity-0 translate-y-8 transition-all duration-1000" id="hero-content">
<span className="font-label-md text-secondary uppercase tracking-[0.3em] mb-6 block">The Architect of Sound</span>
<h2 className="font-display-lg text-display-lg-mobile md:text-display-lg text-on-background mb-8 leading-tight">
                The Man Behind <br/><span className="italic font-normal royal-gradient-text">The Voice.</span>
</h2>
<div className="editorial-line w-32 mb-8"></div>
<p className="font-body-lg text-on-surface-variant max-w-2xl leading-relaxed">
                Ejike Ebidilo, known across the continent as BIGBRUVA, has redefined the landscape of modern broadcasting. With a career spanning decades, his journey is a testament to the power of authenticity in the digital age.
            </p>
</div>
</section>

<section className="px-margin-mobile md:px-margin-desktop py-32 bg-surface-container-lowest">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter">

<div className="lg:col-span-7 space-y-32">

<div className="space-y-8 opacity-0 translate-y-8 transition-all duration-1000">
<div className="flex items-center gap-4">
<span className="font-serif text-display-lg-mobile text-secondary/30">01</span>
<h3 className="font-headline-lg text-secondary">Early Years</h3>
</div>
<p className="font-body-lg text-on-surface-variant leading-relaxed">
                        Born from a heritage of storytellers, Ejike's fascination with the auditory medium began in the vibrant corridors of Lagos. Before the fame, there was a relentless curiosity about how sound shapes human emotion. This foundational period was defined by an obsession with the nuances of linguistic delivery and the rhythmic cadence of the African narrative.
                    </p>
<blockquote className="pl-8 border-l-2 border-secondary/30 italic font-serif text-headline-md text-on-surface py-2">
                        "A voice isn't just sound; it's a bridge between souls."
                    </blockquote>
</div>

<div className="space-y-8 opacity-0 translate-y-8 transition-all duration-1000">
<div className="flex items-center gap-4">
<span className="font-serif text-display-lg-mobile text-secondary/30">02</span>
<h3 className="font-headline-lg text-secondary">Broadcasting Philosophy</h3>
</div>
<p className="font-body-lg text-on-surface-variant leading-relaxed">
                        At the core of the BIGBRUVA identity is a commitment to 'Institutional Intimacy.' This philosophy dictates that while the scale of delivery remains global and authoritative, the connection with every individual listener remains personal and profound.
                    </p>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-8">
<div className="p-8 bg-surface-container rounded-xl border border-outline-variant/10 hover:border-secondary/20 transition-colors">
<h4 className="font-label-md text-secondary uppercase mb-4">Authenticity</h4>
<p className="font-body-md text-on-surface-variant">The refusal to perform a character, choosing instead to reveal the man.</p>
</div>
<div className="p-8 bg-surface-container rounded-xl border border-outline-variant/10 hover:border-secondary/20 transition-colors">
<h4 className="font-label-md text-secondary uppercase mb-4">Precision</h4>
<p className="font-body-md text-on-surface-variant">Every syllable measured for impact and clarity of vision.</p>
</div>
</div>
</div>
</div>

<div className="lg:col-span-5">
<div className="sticky top-32 p-10 bg-surface-container-low rounded-2xl border border-outline-variant/10 glass-header shadow-xl">
<h3 className="font-headline-lg text-on-background mb-12">Career Journey</h3>
<div className="space-y-12 relative">
<div className="absolute left-[11px] top-2 bottom-2 w-[1px] bg-outline-variant/30"></div>
<div className="relative pl-10">
<div className="absolute left-0 top-1.5 w-6 h-6 rounded-full bg-secondary border-4 border-surface-container-low"></div>
<span className="font-label-sm text-secondary uppercase tracking-widest mb-2 block">1998 — Genesis</span>
<p className="font-body-md text-on-surface">Initial forays into community radio, developing the signature resonance.</p>
</div>
<div className="relative pl-10">
<div className="absolute left-0 top-1.5 w-6 h-6 rounded-full bg-outline-variant border-4 border-surface-container-low"></div>
<span className="font-label-sm text-secondary uppercase tracking-widest mb-2 block">2005 — National Impact</span>
<p className="font-body-md text-on-surface">Transitioning to prime-time terrestrial broadcasting during a transformative era.</p>
</div>
<div className="relative pl-10">
<div className="absolute left-0 top-1.5 w-6 h-6 rounded-full bg-outline-variant border-4 border-surface-container-low"></div>
<span className="font-label-sm text-secondary uppercase tracking-widest mb-2 block">2012 — BIGBRUVA Era</span>
<p className="font-body-md text-on-surface">Launching the global brand, expanding into digital syndication and institutional voice work.</p>
</div>
</div>
<div className="mt-16 pt-8 border-t border-outline-variant/20">
<p className="font-body-md text-on-surface-variant italic opacity-80">"Success is not a destination, but the consistency of one's evolution."</p>
</div>
</div>
</div>
</div>
</section>

<section className="px-margin-mobile md:px-margin-desktop py-32 bg-surface">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-24 opacity-0 translate-y-8 transition-all duration-1000">
<h2 className="font-serif text-display-lg-mobile md:text-display-lg text-on-background mb-4">Leadership &amp; <span className="italic royal-gradient-text">Legacy</span></h2>
<p className="font-body-lg text-on-surface-variant max-w-xl mx-auto">Creating a blueprint for the next generation of African creators and institutional leaders.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
<div className="col-span-1 md:col-span-2 p-12 bg-surface-container-low rounded-3xl border border-outline-variant/10 flex flex-col justify-between group hover:border-secondary/30 transition-all duration-500">
<div className="space-y-6">
<span className="material-symbols-outlined text-secondary text-5xl font-light">diversity_3</span>
<h3 className="font-headline-lg text-on-background">Mentorship Framework</h3>
<p className="font-body-lg text-on-surface-variant leading-relaxed">Developing the 'Voice Academy' initiative to empower young talent with the technical skills and psychological resilience needed for long-term career sustainability.</p>
</div>
<div className="mt-12 flex items-center text-secondary font-bold group-hover:translate-x-2 transition-transform cursor-pointer">
                        Learn more <span className="material-symbols-outlined ml-2">arrow_right_alt</span>
</div>
</div>
<div className="col-span-1 p-12 bg-primary-container text-on-primary-container rounded-3xl flex flex-col justify-center text-center shadow-inner">
<h4 className="font-label-md uppercase tracking-[0.2em] mb-4 opacity-70">Core Principle</h4>
<p className="font-serif text-headline-lg italic">"Ego is the noise that drowns out the impact."</p>
</div>
<div className="col-span-1 p-12 bg-surface-container-high rounded-3xl border border-outline-variant/10 hover:bg-surface-container-highest transition-colors">
<h3 className="font-headline-md text-secondary mb-6">Legacy Vision</h3>
<p className="font-body-md text-on-surface-variant">To leave behind a centralized digital archive of the African voice—a repository of wisdom and high production standards.</p>
</div>
<div className="col-span-1 md:col-span-2 relative p-12 rounded-3xl overflow-hidden group border border-outline-variant/10">
<div className="absolute inset-0 bg-surface-container-lowest">
<div className="absolute inset-0 bg-secondary/5 opacity-50"></div>
<div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-surface-container-lowest to-transparent"></div>
</div>
<div className="relative z-10 space-y-6">
<h3 className="font-headline-lg text-on-background">Institutional Authority</h3>
<p className="font-body-lg text-on-surface-variant max-w-lg">Defining what it means to be a modern icon. It isn't about being seen everywhere; it's about being indispensable where it matters most.</p>
</div>
</div>
</div>
</div>
</section>

<footer className="flex flex-col items-center justify-center py-24 px-margin-desktop text-center w-full border-t border-outline-variant/10 bg-surface-container-lowest">
<div className="mb-12">
<img alt="BIGBRUVA Crest" className="h-32 w-auto object-contain" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDzoQachYWqkheryCjc0oj1MFa-C1ZPMJ7iMTX-2-IDj7U9vodjQkBDg6bzs8DGk-WmboILzxQlYaQcA2aHbUEYZcJRksEek2fr3QWgIrtR-1uivfoHhCgtW90_f6_8W4NQYgsLsKZ0qSQin7U0OqkqxqrlplbfTuEt6pFWYYQmG4aDRV2AFdu5ZJyhZyKPZTRJaMbuic6zpM-OG6I9l73dLr-tV4GAyFoG0xg_-5hrsvTea3SIsK9OnWGI5gPT5RFgnnA0E5N6ZZU"/>
</div>
<div className="flex flex-wrap justify-center gap-8 mb-12">
<a className="font-body-md text-on-surface-variant hover:text-secondary transition-colors" href="/legacy">Legacy</a>
<a className="font-body-md text-on-surface-variant hover:text-secondary transition-colors" href="/press">Press</a>
<a className="font-body-md text-on-surface-variant hover:text-secondary transition-colors" href="/">Privacy Policy</a>
<a className="font-body-md text-on-surface-variant hover:text-secondary transition-colors" href="/">Terms</a>
</div>
<p className="font-body-md text-on-surface-variant/40">© 2024 BIGBRUVA - Ejike Ebidilo. All Rights Reserved.</p>
<div className="mt-8 flex gap-4">
<a className="w-10 h-10 rounded-full border border-outline-variant/30 flex items-center justify-center text-on-surface-variant hover:border-secondary hover:text-secondary transition-all" href="/">
<span className="material-symbols-outlined text-lg">public</span>
</a>
<a className="w-10 h-10 rounded-full border border-outline-variant/30 flex items-center justify-center text-on-surface-variant hover:border-secondary hover:text-secondary transition-all" href="/ejs-circle">
<span className="material-symbols-outlined text-lg">play_circle</span>
</a>
<a className="w-10 h-10 rounded-full border border-outline-variant/30 flex items-center justify-center text-on-surface-variant hover:border-secondary hover:text-secondary transition-all" href="/podcast">
<span className="material-symbols-outlined text-lg">podcasts</span>
</a>
</div>
</footer>
</main>

<button className="fixed bottom-8 right-8 lg:right-12 z-50 w-16 h-16 bg-secondary text-on-secondary-fixed rounded-full shadow-2xl flex items-center justify-center active:scale-90 transition-all group overflow-hidden">
<div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
<span className="material-symbols-outlined text-3xl">mail</span>
<span className="absolute right-20 bg-surface-container-highest text-on-surface text-sm font-bold py-2.5 px-5 rounded-xl opacity-0 group-hover:opacity-100 transition-all translate-x-4 group-hover:translate-x-0 pointer-events-none whitespace-nowrap border border-outline-variant/30 shadow-2xl">Inquire Now</span>
</button>
    </>
  );
}
