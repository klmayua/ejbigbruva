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
      

<main className="pt-24 pb-20">

<section className="px-margin-mobile md:px-margin-desktop mb-20 max-w-container-max mx-auto">
<div className="relative w-full h-[70vh] rounded-xl overflow-hidden group">
<div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDGa7cMm7W_DT0w2BpehX-xvozvGtEU74Pw6gK00HB3ngubQSZpD_-fBatapidGxUPJVTD1hki0qG3g-UdGu01nxqMlLBv2_bkD1wXXB8eHFERM2AsPgg5z1UVFboZZ_P-plvWZHF1GQGYemZcuYfCxm2aNxXlyEvQ_qFBTh3ZIkrZuAHSgTMkncgsMVIVnj3LUn7Z9TgND7YPRU4aHZoq4hvpEFntC7ItG_BspbBkR5Sdk1MxNphXkJvkySsppX6JaxkA9S_4ygG0')" }}></div>
<div className="absolute inset-0 mask-overlay opacity-90"></div>
<div className="absolute bottom-0 left-0 p-8 md:p-16 max-w-3xl">
<div className="flex items-center gap-4 mb-4">
<span className="bg-secondary text-on-secondary-fixed px-3 py-1 rounded-sm font-label-sm text-label-sm tracking-widest uppercase">Featured Legacy</span>
<span className="text-on-surface-variant font-label-sm text-label-sm">October 24, 2024</span>
</div>
<h1 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-on-surface mb-6 leading-tight">The Sovereign Blueprint: Building Generational Wealth in Silence</h1>
<p className="font-body-lg text-body-lg text-on-surface-variant mb-8 max-w-xl">A deep dive into the quiet discipline of compounding assets beyond the noise of digital markets.</p>
<button className="flex items-center gap-2 text-secondary font-label-md text-label-md border-b border-secondary pb-1 hover:gap-4 transition-all">
                        Read Full Insight <span className="material-symbols-outlined">arrow_forward</span>
</button>
</div>
</div>
</section>

<section className="px-margin-mobile md:px-margin-desktop mb-12 max-w-container-max mx-auto">
<div className="flex flex-wrap items-center gap-8 border-b border-outline-variant/20 pb-4">
<button className="text-secondary font-bold font-label-md text-label-md uppercase tracking-widest">All Records</button>
<button className="text-on-surface-variant hover:text-on-surface font-label-md text-label-md uppercase tracking-widest transition-colors">Wisdom</button>
<button className="text-on-surface-variant hover:text-on-surface font-label-md text-label-md uppercase tracking-widest transition-colors">Health</button>
<button className="text-on-surface-variant hover:text-on-surface font-label-md text-label-md uppercase tracking-widest transition-colors">Wealth</button>
<div className="ml-auto hidden md:flex items-center gap-2 text-on-surface-variant font-label-sm text-label-sm">
<span>Sort by:</span>
<select className="bg-transparent border-none text-secondary font-bold focus:ring-0 cursor-pointer">
<option>Newest First</option>
<option>Oldest First</option>
<option>Most Read</option>
</select>
</div>
</div>
</section>

<section className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">

<article className="legacy-card bg-surface-container-lowest p-6 rounded-xl flex flex-col h-full">
<div className="relative aspect-video mb-6 overflow-hidden rounded-lg">
<Image src="https://lh3.googleusercontent.com/aida-public/AB6AXuCkjjge62Xqxr-eCjBJgweBa-EuAzk70F9zJwi2MO4EARU3HSSlAXA4XYna3tBfHlD7feI7YAsFy9jn4GXLEEnSX0ncJ_5F3a4_eQ9tpxPbuyG2plRnSM9aKznZ3uKg-zMmd50nSDoLtp_Mw4KzZwjIPi1YAPYio-70Ejx2pEdoUiRzAcuC8Rs2png9W7MiN5P74XrT2Sj1J2xohkyjJ-e5PrAkFo6drn-a8QXaBOWi0W0Uu3KwXsP_DvwUOohC8aQ78Flx7qe472w" alt="A macro photography shot of an antique fountain pen resting on a dark, leather-bound journal with gold leaf edges. The lighting is moody and dramatic, emphasizing the rich textures and the deep navy and gold color palette. The composition is clean and focused, evoking a sense of timeless wisdom and sophisticated scholarship." className="w-full h-full object-cover" fill sizes="(max-width: 768px) 100vw, 50vw" />
</div>
<div className="flex justify-between items-center mb-4">
<span className="text-secondary font-label-sm text-label-sm uppercase tracking-wider">Wisdom</span>
<span className="text-on-surface-variant font-label-sm text-label-sm">12 Oct 2024</span>
</div>
<h3 className="font-headline-md text-headline-md text-on-surface mb-4 flex-grow">The Stoic Executive: Mastering Emotional Arbitrage</h3>
<p className="text-on-surface-variant font-body-md text-body-md mb-6 line-clamp-3">Navigating high-stakes environments requires a psychological moat. Learn the ancient strategies adapted for modern sovereignty.</p>
<a className="mt-auto flex items-center gap-2 text-on-surface hover:text-secondary transition-colors font-label-md text-label-md" href="/">
                        Open File <span className="material-symbols-outlined text-[18px]">open_in_new</span>
</a>
</article>

<article className="legacy-card bg-surface-container-lowest p-6 rounded-xl flex flex-col h-full">
<div className="relative aspect-video mb-6 overflow-hidden rounded-lg">
<Image src="https://lh3.googleusercontent.com/aida-public/AB6AXuDnq9XX3BWL43PV59lMinOtnuaKQFyDW0WDJrwtH6TVfyyJbSVP2bL1SsmQ56p32bsBZ3q2vRWh5S1qgPHg_Q-5hv7K-gc3rChY45wzMFX-ryfHxjqMTUQtXH5yr1OYybthRs_nbtawA7ex4iWrqdvx8OGQ4HPYkn-ZP6Gw2vSrgtwncivTSlYAbS4yKyMrxtJdVmA70O3fOkQn_H_gO4I8lGPmbrOlVZ2bj5jG0zrItOiVu4FXw-_5gBxEjQwEuN5tS5lSEtZ7lz0" alt="A high-end modern bathroom with dark marble walls and gold fixtures, featuring a pristine steam shower and soft ambient lighting. The scene is tranquil and luxurious, focusing on wellness and self-care. The colors are dominated by charcoal and deep navy with warm metallic accents, suggesting a space of elite rejuvenation." className="w-full h-full object-cover" fill sizes="(max-width: 768px) 100vw, 50vw" />
</div>
<div className="flex justify-between items-center mb-4">
<span className="text-secondary font-label-sm text-label-sm uppercase tracking-wider">Health</span>
<span className="text-on-surface-variant font-label-sm text-label-sm">08 Oct 2024</span>
</div>
<h3 className="font-headline-md text-headline-md text-on-surface mb-4 flex-grow">Biological Longevity for the Modern Sovereign</h3>
<p className="text-on-surface-variant font-body-md text-body-md mb-6 line-clamp-3">Wealth is meaningless without the vitality to enjoy it. Protocol 02: Advanced recovery and cellular optimization for leaders.</p>
<a className="mt-auto flex items-center gap-2 text-on-surface hover:text-secondary transition-colors font-label-md text-label-md" href="/">
                        Open File <span className="material-symbols-outlined text-[18px]">open_in_new</span>
</a>
</article>

<article className="legacy-card bg-surface-container-lowest p-6 rounded-xl flex flex-col h-full border-secondary/20 border">
<div className="relative aspect-video mb-6 overflow-hidden rounded-lg">
<Image src="https://lh3.googleusercontent.com/aida-public/AB6AXuCvBfQ_FVy_SWMzsLj3epBuS0SNksvjpCiM-w62ChVMVtHiK28jt9saGsiSwrWB8VWuEvcOYMDGBQiP95e6QB-lk53o-oBB0ftyXMK1rdsHk9KWc4s1KOR3OO_Y6XKPy3OxMaoDboTJZD4mA0EHScc66G1i8B-myGwC0Y4_1VX9hX6IvuwEs7cyKrGkaXRTGSFfSASwZeryShpRATuS_PJ6jaUrt3MSeh4IkCwb-sbsnJaOo7kHpf4rnVFlwVsShVeauG8NBJz4ezs" alt="A minimalist architectural shot of a sleek, dark office building reflecting the golden sunset in its large glass windows. The lines are sharp and geometric, symbolizing precision and corporate power. The overall mood is authoritative and prosperous, with a palette of deep blues and vibrant evening golds." className="w-full h-full object-cover" fill sizes="(max-width: 768px) 100vw, 50vw" />
</div>
<div className="flex justify-between items-center mb-4">
<span className="text-secondary font-label-sm text-label-sm uppercase tracking-wider">Wealth</span>
<span className="text-on-surface-variant font-label-sm text-label-sm">03 Oct 2024</span>
</div>
<h3 className="font-headline-md text-headline-md text-on-surface mb-4 flex-grow">Off-Market Equity: The Secret Secondary Portfolios</h3>
<p className="text-on-surface-variant font-body-md text-body-md mb-6 line-clamp-3">How the world's most discreet families manage assets far beyond the public eye. An archival exploration of privacy.</p>
<a className="mt-auto flex items-center gap-2 text-on-surface hover:text-secondary transition-colors font-label-md text-label-md" href="/">
                        Open File <span className="material-symbols-outlined text-[18px]">open_in_new</span>
</a>
</article>

<article className="legacy-card bg-surface-container-lowest p-6 rounded-xl flex flex-col h-full">
<div className="relative aspect-video mb-6 overflow-hidden rounded-lg">
<Image src="https://lh3.googleusercontent.com/aida-public/AB6AXuAcnJjyRA2n_HO9W9dcCEsTPtaRMabs9tUpdFaYwI02X0R1f7hAx5z1xSL7koAzqfGSh0Ugd8cYmU3DUgdrsNltUzJvIV5CmPjNrfS2BsG9U_n9gMa0oq8WBgdqwUWOn5VxcgGgAJufa9kedbslPuEegM9MHyw8ahdlUgoUGZv3yjEIgkNEVzDIWUKX4GpExtWj9o_0e_fpOsVSPRiAte2Hh8ExreKNxD1jwWkLVSETCoAGSRCB70aTaIeCWH3rf9_Rpq7q6qTPRWI" alt="Close-up of a high-end mechanical watch movement with intricate gears and gold-plated components visible through a sapphire glass back. The lighting highlights the meticulous craftsmanship and precision engineering. The aesthetic is industrial yet incredibly refined, emphasizing the value of time and enduring quality." className="w-full h-full object-cover" fill sizes="(max-width: 768px) 100vw, 50vw" />
</div>
<div className="flex justify-between items-center mb-4">
<span className="text-secondary font-label-sm text-label-sm uppercase tracking-wider">Wisdom</span>
<span className="text-on-surface-variant font-label-sm text-label-sm">29 Sep 2024</span>
</div>
<h3 className="font-headline-md text-headline-md text-on-surface mb-4 flex-grow">Temporal Management: Buying Back the Years</h3>
<p className="text-on-surface-variant font-body-md text-body-md mb-6 line-clamp-3">The ultimate currency is not the dollar, but the hour. Systems for extreme delegation and life-architecting.</p>
<a className="mt-auto flex items-center gap-2 text-on-surface hover:text-secondary transition-colors font-label-md text-label-md" href="/">
                        Open File <span className="material-symbols-outlined text-[18px]">open_in_new</span>
</a>
</article>

<article className="legacy-card bg-surface-container-lowest p-6 rounded-xl flex flex-col h-full">
<div className="relative aspect-video mb-6 overflow-hidden rounded-lg">
<Image src="https://lh3.googleusercontent.com/aida-public/AB6AXuCovG3VC3gfXAM3fhAiTfr0dDvFhKjbaXLgifkEQiAMxhfX5IZ2rl6m7bkM4nB8Hek0CvI05zahxPBrYpJATnVRbS-YTQAAeTEZBd19fp7NUgMDZPBa5oUNadPs5hZuNlv2DvcfikhmCvAR2YfVKJkvcsizgy4-iu_Q_V09HEYWeXUDnOP8Ol0BLCGPkd3VayzZUGCs6xa2O7-6jdhRtpu-ICxfHP-5nqciScW6Mv8co35n4szkm3SgEYofIPsemjOXL2Ww1TL-aG0" alt="A serene landscape of a misty mountain range at dawn, with layers of deep blue and purple peaks fading into a soft golden horizon. The atmosphere is contemplative and expansive, suggesting a sense of peace and legacy. The image is clean and high-contrast, perfectly aligning with a luxury minimalist design system." className="w-full h-full object-cover" fill sizes="(max-width: 768px) 100vw, 50vw" />
</div>
<div className="flex justify-between items-center mb-4">
<span className="text-secondary font-label-sm text-label-sm uppercase tracking-wider">Health</span>
<span className="text-on-surface-variant font-label-sm text-label-sm">22 Sep 2024</span>
</div>
<h3 className="font-headline-md text-headline-md text-on-surface mb-4 flex-grow">Mental Fortress: Shielding Your Clarity</h3>
<p className="text-on-surface-variant font-body-md text-body-md mb-6 line-clamp-3">Protecting your focus in a hyper-connected age. The neurobiology of isolation and high-performance thinking.</p>
<a className="mt-auto flex items-center gap-2 text-on-surface hover:text-secondary transition-colors font-label-md text-label-md" href="/">
                        Open File <span className="material-symbols-outlined text-[18px]">open_in_new</span>
</a>
</article>

<article className="legacy-card bg-surface-container-lowest p-6 rounded-xl flex flex-col h-full">
<div className="relative aspect-video mb-6 overflow-hidden rounded-lg">
<Image src="https://lh3.googleusercontent.com/aida-public/AB6AXuDpK8C54SBJIKsgGN-1DD1IjA1JtFowXFhpRV_w19g-8sesLiQRXQjN-eWKeyWzUGUqFDY32deyJrZONKhEdDDKc7UWFacA8ot8uvEvHiM6mCZKtK-1y5Y0OVGGrV1LrLf_AkF8SaR6b4vTxCUgSJX4dpilaiZTOXGmMepC9Ml_A5zgDrywueA07bNa5AqzZIIB7oQ7WnrR2NhvbSeP055-rPGPJy9_CwGhHwlEziqOGMoXP7XW90PRqB7V6jVNHEsYd79zKw7KgLY" alt="An abstract arrangement of gold bullion bars stacked neatly against a dark navy velvet background. The lighting is soft but emphasizes the metallic luster of the gold, creating a powerful image of stability and absolute wealth. The composition is asymmetrical and modern, suitable for a prestige editorial archive." className="w-full h-full object-cover" fill sizes="(max-width: 768px) 100vw, 50vw" />
</div>
<div className="flex justify-between items-center mb-4">
<span className="text-secondary font-label-sm text-label-sm uppercase tracking-wider">Wealth</span>
<span className="text-on-surface-variant font-label-sm text-label-sm">15 Sep 2024</span>
</div>
<h3 className="font-headline-md text-headline-md text-on-surface mb-4 flex-grow">Legacy Trust Structures: Beyond 100 Years</h3>
<p className="text-on-surface-variant font-body-md text-body-md mb-6 line-clamp-3">Structuring the transition of values along with value. A technical guide to the Multi-Generational Trust.</p>
<a className="mt-auto flex items-center gap-2 text-on-surface hover:text-secondary transition-colors font-label-md text-label-md" href="/">
                        Open File <span className="material-symbols-outlined text-[18px]">open_in_new</span>
</a>
</article>
</div>

<div className="mt-20 flex justify-center items-center gap-4">
<button className="w-12 h-12 rounded-full border border-outline-variant/30 flex items-center justify-center text-on-surface-variant hover:border-secondary hover:text-secondary transition-all">
<span className="material-symbols-outlined">chevron_left</span>
</button>
<div className="flex items-center gap-2">
<button className="w-10 h-10 rounded-lg bg-secondary text-on-secondary-fixed font-bold font-label-md text-label-md">1</button>
<button className="w-10 h-10 rounded-lg text-on-surface-variant hover:bg-surface-container-high font-label-md text-label-md transition-all">2</button>
<button className="w-10 h-10 rounded-lg text-on-surface-variant hover:bg-surface-container-high font-label-md text-label-md transition-all">3</button>
<span className="text-on-surface-variant mx-2">...</span>
<button className="w-10 h-10 rounded-lg text-on-surface-variant hover:bg-surface-container-high font-label-md text-label-md transition-all">12</button>
</div>
<button className="w-12 h-12 rounded-full border border-outline-variant/30 flex items-center justify-center text-on-surface-variant hover:border-secondary hover:text-secondary transition-all">
<span className="material-symbols-outlined">chevron_right</span>
</button>
</div>
</section>

<section className="mt-32 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
<div className="bg-primary-container/30 border border-outline-variant/10 p-12 md:p-24 rounded-3xl text-center relative overflow-hidden">
<div className="absolute top-0 right-0 w-64 h-64 bg-secondary/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2"></div>
<div className="relative z-10">
<h2 className="font-headline-lg text-headline-lg text-secondary mb-6">Enter The Vault</h2>
<p className="font-body-lg text-body-lg text-on-surface-variant mb-12 max-w-2xl mx-auto">Weekly transmissions on sovereignty, legacy management, and archival wisdom delivered to your private terminal.</p>
<form className="max-w-md mx-auto flex flex-col md:flex-row gap-4">
<input className="flex-grow bg-surface-container-lowest border-b-2 border-on-surface/20 text-on-surface px-4 py-3 focus:border-secondary focus:ring-0 transition-all outline-none" placeholder="Your institutional email" type="email"/>
<button className="bg-secondary text-on-secondary-fixed px-8 py-3 rounded-lg font-bold font-label-md text-label-md hover:scale-[1.02] active:scale-95 transition-all">
                            Secure Access
                        </button>
</form>
<p className="mt-8 font-label-sm text-label-sm text-outline-variant uppercase tracking-widest">Limited availability for EJ's Circle memberships.</p>
</div>
</div>
</section>
</main>
    </>
  );
}
