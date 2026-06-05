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
      

<main className="pt-32 pb-24 max-w-container-max mx-auto px-margin-desktop">

<section className="mb-24 text-center">
<h1 className="font-display-lg text-display-lg mb-6 leading-tight">Engage with the <br /><span className="text-gold-gradient font-bold italic">Institutional Legacy</span></h1>
<p className="max-w-2xl mx-auto font-body-lg text-on-surface-variant opacity-80">
                Direct inquiries for media, strategic partnerships, and speaking engagements. Connect with the custodians of the BIGBRUVA Archive.
            </p>
</section>

<div className="grid grid-cols-1 md:grid-cols-12 gap-gutter mb-24">

<div className="md:col-span-4 glass-panel p-base p-8 flex flex-col justify-between group hover:border-secondary/40 transition-all duration-500" style={{ opacity: "1", transform: "translateY(0px)", transition: "0.6s cubic-bezier(0.16, 1, 0.3, 1)" }}>
<div>
<span className="material-symbols-outlined text-secondary text-4xl mb-6" data-icon="stadium">stadium</span>
<h3 className="font-headline-md mb-4 uppercase tracking-wider">Media Requests</h3>
<p className="text-on-surface-variant text-label-md leading-relaxed">
                        For press kits, high-resolution archival assets, and official statements regarding institutional developments.
                    </p>
</div>
<a className="mt-8 text-secondary font-bold flex items-center gap-2 group-hover:gap-4 transition-all" href="mailto:press@bigbruva.edu">
                    press@bigbruva.edu <span className="material-symbols-outlined">arrow_right_alt</span>
</a>
</div>

<div className="md:col-span-4 glass-panel p-8 flex flex-col justify-between group hover:border-secondary/40 transition-all duration-500" style={{ opacity: "1", transform: "translateY(0px)", transition: "0.6s cubic-bezier(0.16, 1, 0.3, 1)" }}>
<div>
<span className="material-symbols-outlined text-secondary text-4xl mb-6" data-icon="mic_external_on">mic_external_on</span>
<h3 className="font-headline-md mb-4 uppercase tracking-wider">Speaking</h3>
<p className="text-on-surface-variant text-label-md leading-relaxed">
                        Inquiries for keynote addresses, institutional panels, and academic symposiums focused on heritage preservation.
                    </p>
</div>
<a className="mt-8 text-secondary font-bold flex items-center gap-2 group-hover:gap-4 transition-all" href="mailto:bookings@bigbruva.edu">
                    bookings@bigbruva.edu <span className="material-symbols-outlined">arrow_right_alt</span>
</a>
</div>

<div className="md:col-span-4 glass-panel p-8 flex flex-col justify-between group hover:border-secondary/40 transition-all duration-500" style={{ opacity: "1", transform: "translateY(0px)", transition: "0.6s cubic-bezier(0.16, 1, 0.3, 1)" }}>
<div>
<span className="material-symbols-outlined text-secondary text-4xl mb-6" data-icon="handshake">handshake</span>
<h3 className="font-headline-md mb-4 uppercase tracking-wider">Partnerships</h3>
<p className="text-on-surface-variant text-label-md leading-relaxed">
                        Strategic collaborations with cultural institutions, foundations, and global archive networks.
                    </p>
</div>
<a className="mt-8 text-secondary font-bold flex items-center gap-2 group-hover:gap-4 transition-all" href="mailto:partners@bigbruva.edu">
                    partners@bigbruva.edu <span className="material-symbols-outlined">arrow_right_alt</span>
</a>
</div>

<div className="md:col-span-8 glass-panel p-12" style={{ opacity: "1", transform: "translateY(0px)", transition: "0.6s cubic-bezier(0.16, 1, 0.3, 1)" }}>
<h2 className="font-headline-lg mb-8 text-secondary uppercase tracking-widest">General Enquiries</h2>
<form className="space-y-12">
<div className="grid grid-cols-1 md:grid-cols-2 gap-12">
<div className="flex flex-col">
<label className="font-label-md text-secondary/70 uppercase mb-2">Legal Name</label>
<input className="contact-input py-3 font-body-lg text-on-surface" placeholder="Your Full Name" type="text" />
</div>
<div className="flex flex-col">
<label className="font-label-md text-secondary/70 uppercase mb-2">Email Identity</label>
<input className="contact-input py-3 font-body-lg text-on-surface" placeholder="address@domain.com" type="email" />
</div>
</div>
<div className="flex flex-col">
<label className="font-label-md text-secondary/70 uppercase mb-2">Nature of Inquiry</label>
<select className="contact-input py-3 font-body-lg text-on-surface bg-transparent appearance-none">
<option className="bg-surface text-on-surface">Select a Category</option>
<option className="bg-surface text-on-surface">Archive Access</option>
<option className="bg-surface text-on-surface">Community Programs</option>
<option className="bg-surface text-on-surface">Institutional Relations</option>
<option className="bg-surface text-on-surface">Other</option>
</select>
</div>
<div className="flex flex-col">
<label className="font-label-md text-secondary/70 uppercase mb-2">Message</label>
<textarea className="contact-input py-3 font-body-lg text-on-surface resize-none" placeholder="How may we assist you?" rows={4}></textarea>
</div>
<button className="bg-secondary text-on-secondary px-12 py-4 font-label-md uppercase tracking-widest font-bold hover:brightness-110 transition-all flex items-center gap-3" type="submit">
                        Transmit Inquiry <span className="material-symbols-outlined" data-icon="send">send</span>
</button>
</form>
</div>

<div className="md:col-span-4 flex flex-col gap-gutter">
<div className="glass-panel p-8 flex-1" style={{ opacity: "1", transform: "translateY(0px)", transition: "0.6s cubic-bezier(0.16, 1, 0.3, 1)" }}>
<h3 className="font-headline-md mb-6 uppercase tracking-wider text-secondary">Follow</h3>
<div className="space-y-6">
<a className="flex items-center justify-between text-on-surface-variant hover:text-secondary transition-all pb-4 border-b border-soft-ivory/10" href="/">
<span className="font-label-md tracking-widest">X / TWITTER</span>
<span className="material-symbols-outlined" data-icon="north_east">north_east</span>
</a>
<a className="flex items-center justify-between text-on-surface-variant hover:text-secondary transition-all pb-4 border-b border-soft-ivory/10" href="/">
<span className="font-label-md tracking-widest">INSTAGRAM</span>
<span className="material-symbols-outlined" data-icon="north_east">north_east</span>
</a>
<a className="flex items-center justify-between text-on-surface-variant hover:text-secondary transition-all pb-4 border-b border-soft-ivory/10" href="/">
<span className="font-label-md tracking-widest">LINKEDIN</span>
<span className="material-symbols-outlined" data-icon="north_east">north_east</span>
</a>
<a className="flex items-center justify-between text-on-surface-variant hover:text-secondary transition-all pb-4 border-b border-soft-ivory/10" href="/">
<span className="font-label-md tracking-widest">SUBSTACK</span>
<span className="material-symbols-outlined" data-icon="north_east">north_east</span>
</a>
</div>
</div>
<div className="glass-panel p-8 flex flex-col justify-center items-center text-center" style={{ opacity: "1", transform: "translateY(0px)", transition: "0.6s cubic-bezier(0.16, 1, 0.3, 1)" }}>
<span className="material-symbols-outlined text-secondary/40 text-6xl mb-4" data-icon="location_on">location_on</span>
<p className="font-label-md tracking-widest text-secondary/70 uppercase mb-2">The Vault</p>
<p className="font-body-md text-on-surface opacity-80 leading-relaxed">
                        42 Sovereign Plaza, <br />Financial District, <br />Metropolis HQ
                    </p>
</div>
</div>
</div>

<section className="w-full h-96 relative overflow-hidden glass-panel" style={{ opacity: "1", transform: "translateY(0px)", transition: "0.6s cubic-bezier(0.16, 1, 0.3, 1)" }}>
<div className="absolute inset-0 bg-primary/20 flex items-center justify-center">
<div className="text-center z-10 p-12 bg-surface-container-lowest/80 backdrop-blur-md border border-secondary/20 max-w-lg">
<h4 className="font-display-lg text-headline-md text-secondary uppercase mb-4">Visit the Archive</h4>
<p className="font-body-md text-on-surface-variant mb-6">Guided tours of the Physical Archive are by appointment only. Please contact Institutional Relations for scheduling.</p>
<button className="border border-secondary px-8 py-3 text-secondary font-label-md uppercase tracking-widest hover:bg-secondary hover:text-on-secondary transition-all">Schedule Visit</button>
</div>
</div>

<div className="w-full h-full bg-[#082e73] opacity-30 grayscale contrast-125" style={{ backgroundImage: "radial-gradient(#e9c349 0.5px, transparent 0.5px)", backgroundSize: "24px 24px" }}></div>
</section>
</main>

<footer className="bg-surface-container-lowest dark:bg-surface-container-lowest w-full py-16 px-margin-desktop border-t border-secondary/20">
<div className="flex flex-col items-center gap-base text-center w-full max-w-container-max mx-auto">
<div className="mb-12 flex justify-center"><Image src="https://lh3.googleusercontent.com/aida-public/AB6AXuC6WdFJlD557NG1rjXjDo-d7qR5erFaA-cBmArXCvURIRozCAqFglCoCRtIDt6qYexzdJLve0GkxfaOp0fS0s2Z895B-wzYPSAb7uF1InR9g-H1FNWtQxUVBN8bl9jwc8vTEvVTXy0mgDZZUqukRlYYxNIHvHLM5_BiIony1nnVtb_78YezpJF8eql5hOOQvtChzsTi0hy6udWqH0ndHiePZbWH6cOBNkCNu8QguUbgwn7z0G9XEeI_OOCMV9fUsfttHZcMGJ7GCRA" alt="BIGBRUVA Official Crest" className="h-48 w-48 object-contain opacity-80 hover:opacity-100 transition-all duration-500" width={160} height={80} style={{ objectFit: 'contain' }} /></div>

<div className="flex flex-wrap justify-center gap-8 mb-12">
<a className="text-on-surface-variant hover:text-secondary transition-colors font-label-md" href="/community">Community</a>
<a className="text-on-surface-variant hover:text-secondary transition-colors font-label-md" href="/press">Press</a>
<a className="text-secondary font-bold font-label-md" href="/contact">Contact</a>
<a className="text-on-surface-variant hover:text-secondary transition-colors font-label-md" href="/">Privacy Policy</a>
<a className="text-on-surface-variant hover:text-secondary transition-colors font-label-md" href="/">Terms of Service</a>
</div>
<p className="font-body-md text-label-md text-on-surface-variant/50 max-w-xl">
                © 2024 EJIKE EBIDILO - BIGBRUVA INSTITUTIONAL ARCHIVE. ALL RIGHTS RESERVED.
            </p>
</div>
</footer>
    </>
  );
}
