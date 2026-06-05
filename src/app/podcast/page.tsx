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
      
<nav className="fixed top-0 w-full z-50 flex justify-between items-center px-margin-desktop py-4 bg-primary-container/70 backdrop-blur-md border-b border-outline-variant/10">
<div className="flex items-center gap-8">
<span className="font-headline-md text-headline-md tracking-tighter text-secondary uppercase">BIGBRUVA</span>
<div className="hidden md:flex gap-6">
<a className="font-label-md text-label-md text-on-surface-variant hover:text-secondary transition-colors duration-300" href="/">Home</a>
<a className="font-label-md text-label-md text-on-surface-variant hover:text-secondary transition-colors duration-300" href="/legacy">Legacy</a>
<a className="font-label-md text-label-md text-on-surface-variant hover:text-secondary transition-colors duration-300" href="/media">Media</a>
<a className="font-label-md text-label-md text-on-surface-variant hover:text-secondary transition-colors duration-300" href="/marketplace">Marketplace</a>
<a className="font-label-md text-label-md text-secondary border-b-2 border-secondary pb-1" href="/">EJlive</a>
<a className="font-label-md text-label-md text-on-surface-variant hover:text-secondary transition-colors duration-300" href="/ejs-circle">EJ's Circle</a>
</div>
</div>
<div className="flex items-center gap-6">
<div className="hidden lg:flex items-center bg-surface-container-lowest/50 rounded-full px-4 py-1.5 border border-outline-variant/20">
<span className="material-symbols-outlined text-on-surface-variant text-sm mr-2">search</span>
<input className="bg-transparent border-none focus:ring-0 text-label-sm w-32 placeholder:text-on-surface-variant/50" placeholder="Search archive..." type="text"/>
</div>
<button className="bg-secondary text-on-secondary-fixed font-label-md px-6 py-2 rounded-full hover:opacity-90 transition-opacity active:scale-95">
                Join The Circle
            </button>
</div>
</nav>

<header className="relative min-h-[90vh] flex flex-col justify-end pt-32 pb-20 px-margin-desktop">
<div className="absolute inset-0 z-0">
<div className="absolute inset-0 bg-gradient-to-r from-background via-background/60 to-transparent z-10"></div>
<img alt="EJ official portrait" className="w-full h-full object-cover object-top" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDJyTNQhzYW6z08KigKIXf2R0SHlJjtCSndnLWqTC3IVJa57-SgIlWpdOTolNK6DYTgtKQHofxkTEEYsHClr3LlmyH3Ls2aNaKr_oQP6Q3OtJZQAEA-C8neU7U0dd6MwRTsSggKxbx9vSakmrukw9lH8OCZV5Tl9zTgJSnDt9q1lRCZTlpPLqnA4evtJY3rL7ylwMMPMxiZwA7IpGZ1OTTzVtv2BbrArQdE5YRh8OlEIsOll2l84ZPMbPfAyvL_4I5wZXvllSnlRiU"/>
</div>
<div className="relative z-20 max-w-2xl">
<div className="flex items-center gap-2 mb-4">
<span className="bg-secondary/20 text-secondary border border-secondary/30 px-3 py-1 rounded-full font-label-sm text-label-sm uppercase tracking-widest">Featured Episode</span>
<span className="text-on-surface-variant font-label-sm">• Season 4, Ep 12</span>
</div>
<h1 className="font-display-lg text-display-lg text-on-surface mb-6 leading-tight">Sovereign Wealth: The Architecture of Multi-Generational Liberty</h1>
<p className="font-body-lg text-body-lg text-on-surface-variant mb-10 max-w-xl">
                In this exclusive deep-dive, EJ explores the psychological and structural shifts required to transform individual success into an enduring legacy of health, wisdom, and capital.
            </p>
<div className="flex flex-wrap gap-4">
<button className="flex items-center gap-3 bg-secondary text-on-secondary-fixed font-label-md px-8 py-4 rounded-full hover:opacity-90 transition-all active:scale-95 group">
<span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>play_arrow</span>
                    Listen to Latest Episode
                </button>
<button className="flex items-center gap-3 bg-primary-container/40 backdrop-blur border border-secondary/20 text-on-surface font-label-md px-8 py-4 rounded-full hover:bg-primary-container/60 transition-all">
<span className="material-symbols-outlined">playlist_add</span>
                    View Show Notes
                </button>
</div>
</div>
</header>

<section className="py-24 px-margin-desktop bg-surface-container-lowest">
<div className="max-w-container-max mx-auto">
<div className="mb-12">
<h2 className="font-headline-lg text-headline-lg text-on-surface mb-2">The Pillars of Sovereignty</h2>
<p className="text-on-surface-variant font-body-md">Curated archives categorized for focused cultivation.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">

<div className="md:col-span-4 group relative overflow-hidden rounded-xl bg-primary-container aspect-[4/5] p-8 flex flex-col justify-end">
<div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-700"></div>
<img className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" data-alt="A macro shot of an antique leather-bound journal and a gold fountain pen sitting on a dark oak desk in a study filled with books. The atmosphere is quiet, scholarly, and authoritative, echoing the deep navy and royal gold color palette of the brand." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDkIg8EXlc4f4_gJGQLDFgaxF9UnBkB-UlHG-K1wTuBPTWLhiTOL9u194JpMlqHeEXO4xu_mESi-fLNQyjnU9oCaMxrkZtQ6UHRulJVSSiDJ6r8AkxaNRRr79RJTl-Y_VqElnJsCYy2vgePh9ac9wYOtyjBtw81pjRJ1mm3rw4WXgPyoFy4WwG634x-DLegu7yveK4D78chazMT3WC66o4jHWd0tuDcrwAR4wynRyAW19-wdbGybNl-N_sHJbOJUbmiA52gFKV57wk"/>
<div className="relative z-10">
<span className="material-symbols-outlined text-secondary text-4xl mb-4">auto_stories</span>
<h3 className="font-headline-md text-headline-md text-on-surface mb-2">Wisdom</h3>
<p className="text-on-surface-variant text-label-md mb-4">Philosophy, mental models, and ancestral strategies for modern men.</p>
<a className="inline-flex items-center text-secondary font-label-md group/link" href="/">
                            Browse Wisdom <span className="material-symbols-outlined ml-2 transition-transform group-hover/link:translate-x-1">arrow_forward</span>
</a>
</div>
</div>

<div className="md:col-span-8 grid grid-rows-2 gap-gutter">

<div className="group relative overflow-hidden rounded-xl bg-primary-container p-8 flex flex-col justify-center border border-outline-variant/10">
<div className="absolute inset-0 bg-gradient-to-r from-background/90 to-transparent z-10"></div>
<img className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" data-alt="Minimalist abstract representation of financial growth with subtle golden lines rising against a dark navy textured background. The lighting is low-key with high-contrast accents, suggesting exclusivity, luxury, and the sophisticated 'Midnight Sovereign' aesthetic." src="https://lh3.googleusercontent.com/aida-public/AB6AXuD5mZ9S_pL9eaN6SPgEQ6ppuN-_FDgT5NMH4EqG_pNWKDFrWPh7zzjaGP6GQDpXFJXlvdvtDz_LVxoHIx5BuAn8LRDMSiX-3IcKuBW6z-1Xl_V9-BfbC3CNXdW2hKjZwMsFyRmUyHnCeNILN61f1rTFIaFZT92_qW8raku9ADsreGbwjQgzpSP0OZLIFrKfjSI0iD6CVZ-gSdPjsLFdrU5c3PIujJSmFlC1niY8_UQsI6KwKtXRQcEgBNapB8dchL4ABVdyRUSa1Ig"/>
<div className="relative z-20 max-w-md">
<span className="material-symbols-outlined text-secondary text-4xl mb-4">account_balance</span>
<h3 className="font-headline-md text-headline-md text-on-surface mb-2">Wealth</h3>
<p className="text-on-surface-variant text-label-md mb-6">Mastering currency, capital allocation, and sovereign asset protection.</p>
<a className="inline-flex items-center text-secondary font-label-md group/link" href="/">
                                Browse Wealth <span className="material-symbols-outlined ml-2 transition-transform group-hover/link:translate-x-1">arrow_forward</span>
</a>
</div>
</div>

<div className="group relative overflow-hidden rounded-xl bg-primary-container p-8 flex flex-col justify-center border border-outline-variant/10">
<div className="absolute inset-0 bg-gradient-to-r from-background/90 to-transparent z-10"></div>
<img className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" data-alt="A dramatic, high-contrast black and white photograph of a professional athlete's silhouette during training, highlighted by subtle royal gold atmospheric lighting. The mood is powerful and disciplined, aligning with the premium fitness and wellness theme of the EJlive brand." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDuMxuYO_1INxGt3h4li7HK-9nTAJLHN1VuwKMYZ6jik1yYpopqewKWvq8EKynM0WrqhEPGkObIBwOcUIFq-ICcTUTvKVdJ_DMcAOQUlMV5L3TQWPeBaCoOWlNuGTH0LOmeAJJw5JbdsoWjMGddLtgJ7kznd_LhBZNMT-srTT7i6MnKogU49qgB5WHlmsWhMHrdjPoMblzj41nPxkZAJzkhcj--FHAb9_yE7u7B17q1QyhG3fj5CWWpgwV7YtDTupGOQ4kSdRpTY5k"/>
<div className="relative z-20 max-w-md">
<span className="material-symbols-outlined text-secondary text-4xl mb-4">fitness_center</span>
<h3 className="font-headline-md text-headline-md text-on-surface mb-2">Health</h3>
<p className="text-on-surface-variant text-label-md mb-6">Biological optimization, high-performance vitality, and longevity protocols.</p>
<a className="inline-flex items-center text-secondary font-label-md group/link" href="/">
                                Browse Health <span className="material-symbols-outlined ml-2 transition-transform group-hover/link:translate-x-1">arrow_forward</span>
</a>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-margin-desktop bg-background">
<div className="max-w-container-max mx-auto">
<div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
<div>
<h2 className="font-headline-lg text-headline-lg text-on-surface mb-2">Archived Episodes</h2>
<p className="text-on-surface-variant font-body-md">Refine your management of self and state.</p>
</div>
<div className="flex gap-4">
<button className="bg-surface-container-high px-4 py-2 rounded-lg text-label-md text-on-surface hover:bg-surface-container-highest transition-colors">Latest</button>
<button className="bg-surface-container-low px-4 py-2 rounded-lg text-label-md text-on-surface-variant hover:text-on-surface transition-colors">Popular</button>
<button className="bg-surface-container-low px-4 py-2 rounded-lg text-label-md text-on-surface-variant hover:text-on-surface transition-colors">Trending</button>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="group bg-primary-container/30 border border-outline-variant/10 rounded-xl overflow-hidden hover:border-secondary/30 transition-all duration-300 flex flex-col">
<div className="aspect-video relative overflow-hidden">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="A sophisticated digital rendering of a justice scale in gold against a deep navy blue background. The lighting is elegant and directional, creating a mood of authority and prestige. This visual represents the 'Wealth Archival' and 'Wisdom' pillars of the podcast." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBMImdumhQamKYU8VdZr5z6l0JsYCEDcueo5zhdVIkJPWv_xrQ2iJWK231X4nLSdDiW1P_DumcmVSfF_xH-WkgtvdGXwSBaxBa387YJS8_lxEx-o4VFJYvCaSBof4RXbNa1TCVBPnoFTn_Qss4zLtozzrkqhTObLXugoo8rxVP0pQaTjDP3WL1jzRDxZ4CQIqglT_ua-XLt7tOiOoD4B48RV5Ifekr7D0e1MW2BWm_1IxTUjj6OZ5vybdTVsCXOL5KkpQ-FbobxiJs"/>
<div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
<div className="bg-secondary p-4 rounded-full text-on-secondary-fixed">
<span className="material-symbols-outlined text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>play_arrow</span>
</div>
</div>
<div className="absolute bottom-3 right-3 bg-black/60 backdrop-blur px-2 py-1 rounded text-[10px] text-white font-bold tracking-tighter">
                            58:24
                        </div>
</div>
<div className="p-6 flex-grow flex flex-col">
<div className="text-secondary font-label-sm uppercase tracking-tighter mb-2">Wealth • Oct 24, 2024</div>
<h4 className="font-headline-md text-[20px] leading-tight text-on-surface mb-3">Escaping the Fiat Mindset: A Guide to Hard Assets</h4>
<p className="text-on-surface-variant text-label-md mb-6 line-clamp-2">How to decouple your psychological value from currency fluctuations and build actual power.</p>
<div className="mt-auto pt-6 border-t border-outline-variant/10 flex justify-between items-center">
<button className="text-secondary font-label-md flex items-center gap-2 hover:underline">
                                Details
                            </button>
<span className="material-symbols-outlined text-on-surface-variant hover:text-secondary cursor-pointer">share</span>
</div>
</div>
</div>

<div className="group bg-primary-container/30 border border-outline-variant/10 rounded-xl overflow-hidden hover:border-secondary/30 transition-all duration-300 flex flex-col">
<div className="aspect-video relative overflow-hidden">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="A cinematic, low-light photograph of a person practicing mindfulness in a luxury mountain retreat at dusk. The palette is dominated by deep blues and cold greys, punctuated by the warm glow of a gold candle flame. The image communicates elite health and mental clarity." src="https://lh3.googleusercontent.com/aida-public/AB6AXuB2mYCbf3lKKzZpsQ22yE1yu_ILkE9Ue9kWpDObzg2yAqEm2AP59fQiyMdkEEexHJ6_2yAN89bhkN7hKaeJ3aaKtCMwyXt9HlNyEhRqUJJ-oXH4PjJNrBf6XVMyEP6OZWpOTqymcotJ2vjvy7aZxrhDmQJmDwisKx8O-FMdV2zpP2N72kTeu4cujwvUp9UuC5hZRxKf9bjdIccMQd6CpV8ggzZxGpB1Dhd3U4tWz9KMeU7vWktjnVYaipCV3W_WG8nK3jXP8Crlcv4"/>
<div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
<div className="bg-secondary p-4 rounded-full text-on-secondary-fixed">
<span className="material-symbols-outlined text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>play_arrow</span>
</div>
</div>
<div className="absolute bottom-3 right-3 bg-black/60 backdrop-blur px-2 py-1 rounded text-[10px] text-white font-bold tracking-tighter">
                            42:15
                        </div>
</div>
<div className="p-6 flex-grow flex flex-col">
<div className="text-secondary font-label-sm uppercase tracking-tighter mb-2">Health • Oct 17, 2024</div>
<h4 className="font-headline-md text-[20px] leading-tight text-on-surface mb-3">Biological Leverage: Hormonal Optimization Over 40</h4>
<p className="text-on-surface-variant text-label-md mb-6 line-clamp-2">The scientific protocols EJ uses to maintain peak cognitive and physical drive in the second half of life.</p>
<div className="mt-auto pt-6 border-t border-outline-variant/10 flex justify-between items-center">
<button className="text-secondary font-label-md flex items-center gap-2 hover:underline">
                                Details
                            </button>
<span className="material-symbols-outlined text-on-surface-variant hover:text-secondary cursor-pointer">share</span>
</div>
</div>
</div>

<div className="group bg-primary-container/30 border border-outline-variant/10 rounded-xl overflow-hidden hover:border-secondary/30 transition-all duration-300 flex flex-col">
<div className="aspect-video relative overflow-hidden">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="An artistic high-end capture of a chess board in mid-game, with the king piece in focus, carved from dark marble and accented with gold leaf. The background is softly blurred with deep navy studio lighting. This symbolizes the strategic wisdom and institutional management of the EJlive brand." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDM3UPtKuoH17V9b3xoduioQP96wSxVMueFLNX4BLhsvcM54ob9HA9eD2ptg4J3Omt3HnWrFlqxcNg5LJgo9tc0URgEw1kjt4KdYiYc-On9ZFNyKo7UFSxpifRIT3nyKdD5U31_zsczkFkH4aigwlG8RB6CuK-yeUQXo5FoXQSTOwS-BaFyHQYUBhwuc4Bt42YRTTwNA4rH0mxIFUC4dYJIkbnftWFvtz-CTrKcsbY0Fj_IqOL06SptESXLrg60d9uPbrbl5qJF2rM"/>
<div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
<div className="bg-secondary p-4 rounded-full text-on-secondary-fixed">
<span className="material-symbols-outlined text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>play_arrow</span>
</div>
</div>
<div className="absolute bottom-3 right-3 bg-black/60 backdrop-blur px-2 py-1 rounded text-[10px] text-white font-bold tracking-tighter">
                            1:12:05
                        </div>
</div>
<div className="p-6 flex-grow flex flex-col">
<div className="text-secondary font-label-sm uppercase tracking-tighter mb-2">Wisdom • Oct 10, 2024</div>
<h4 className="font-headline-md text-[20px] leading-tight text-on-surface mb-3">The Sovereign Mind: Stoic Response in Global Crisis</h4>
<p className="text-on-surface-variant text-label-md mb-6 line-clamp-2">How to remain unshakeable when the external world loses its center. Foundational wisdom for leaders.</p>
<div className="mt-auto pt-6 border-t border-outline-variant/10 flex justify-between items-center">
<button className="text-secondary font-label-md flex items-center gap-2 hover:underline">
                                Details
                            </button>
<span className="material-symbols-outlined text-on-surface-variant hover:text-secondary cursor-pointer">share</span>
</div>
</div>
</div>
</div>
<div className="mt-16 text-center">
<button className="border border-secondary/40 text-secondary px-10 py-4 rounded-full font-label-md hover:bg-secondary/10 transition-all">
                    Access Full Archive
                </button>
</div>
</div>
</section>

<section className="py-24 px-margin-desktop bg-surface-container-lowest overflow-hidden relative">
<div className="absolute top-0 right-0 w-1/2 h-full opacity-5 pointer-events-none">
<span className="font-headline-lg text-[400px] text-secondary leading-none select-none">EJ</span>
</div>
<div className="max-w-container-max mx-auto relative z-10 flex flex-col items-center text-center">
<div className="mb-8">
<span className="material-symbols-outlined text-secondary text-6xl" style={{ fontVariationSettings: "'wght' 200" }}>verified</span>
</div>
<h2 className="font-headline-lg text-headline-lg text-on-surface mb-6 italic">"A man without sovereignty is merely a guest in his own life."</h2>
<div className="flex flex-col items-center">
<span className="font-headline-md text-headline-md text-secondary tracking-widest uppercase mb-1">EJlive</span>
<div className="w-12 h-[1px] bg-secondary mb-8"></div>
<p className="text-on-surface-variant font-label-sm max-w-lg mx-auto">
                    EJlive is the premier destination for men committed to total ownership of their destiny. We do not broadcast for the masses; we archive for the institutional few.
                </p>
</div>
</div>
</section>

<section className="py-20 px-margin-desktop bg-primary-container border-y border-outline-variant/10">
<div className="max-w-4xl mx-auto flex flex-col items-center text-center">
<h3 className="font-headline-lg text-headline-lg text-on-surface mb-4">Secure Your Dispatch</h3>
<p className="text-on-surface-variant font-body-md mb-10">Receive weekly sovereign insights on health, wealth, and high-performance living directly to your private terminal.</p>
<form className="w-full flex flex-col md:flex-row gap-4">
<div className="flex-grow gold-border-focus transition-all">
<input className="w-full bg-surface-container-lowest border-0 border-b-2 border-on-surface-variant/30 text-on-surface py-4 px-0 placeholder:text-on-surface-variant/40 focus:ring-0 transition-all" placeholder="professional@address.com" type="email"/>
</div>
<button className="bg-secondary text-on-secondary-fixed font-label-md px-12 py-4 rounded-full whitespace-nowrap hover:opacity-90 active:scale-95 transition-all">
                    Join The Circle
                </button>
</form>
<p className="mt-6 text-[10px] text-on-surface-variant/60 uppercase tracking-widest">Encrypted Communication • Zero Spam Policy</p>
</div>
</section>

<footer className="bg-surface-container-lowest border-t border-outline-variant/10">
<div className="w-full py-12 px-margin-desktop flex flex-col md:flex-row justify-between items-center max-w-container-max mx-auto">
<div className="mb-8 md:mb-0">
<span className="font-headline-lg text-headline-lg text-secondary opacity-20 uppercase tracking-widest">BIGBRUVA</span>
</div>
<div className="flex flex-col items-center md:items-end gap-4">
<div className="flex gap-8 mb-4">
<a className="font-label-sm text-label-sm text-on-surface-variant hover:text-secondary underline transition-all" href="/">Archival Terms</a>
<a className="font-label-sm text-label-sm text-on-surface-variant hover:text-secondary underline transition-all" href="/legacy">Legacy Privacy</a>
<a className="font-label-sm text-label-sm text-on-surface-variant hover:text-secondary underline transition-all" href="/">Sovereign Rights</a>
<a className="font-label-sm text-label-sm text-on-surface-variant hover:text-secondary underline transition-all" href="/contact">Contact</a>
</div>
<p className="font-label-sm text-label-sm text-on-surface-variant opacity-60">© 2024 BIGBRUVA Institutional. All Rights Reserved.</p>
</div>
</div>
</footer>

    </>
  );
}
