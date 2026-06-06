"use client";

import React, { useEffect } from 'react';
import Link from 'next/link';

export default function Page() {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Smooth reveal for glass panels on scroll
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100', 'translate-y-0');
          entry.target.classList.remove('opacity-0', 'translate-y-8');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.glass-panel, section > div').forEach(el => {
      el.classList.add('transition-all', 'duration-700', 'opacity-0', 'translate-y-8');
      observer.observe(el);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <>
      {/* Page specific overrides to hide global nav/footer and define local classes */}
      <style dangerouslySetInnerHTML={{__html: `
        body > nav { display: none !important; }
        body > footer { display: none !important; }
        
        body {
            background-color: #121413 !important;
            color: #e2e3e1;
            font-family: 'Inter', sans-serif;
        }
        .glass-panel {
            background: rgba(8, 46, 115, 0.1);
            backdrop-filter: blur(12px);
            -webkit-backdrop-filter: blur(12px);
            border: 0.5px solid rgba(233, 195, 73, 0.15);
        }
        .hero-gradient {
            background: linear-gradient(to bottom, rgba(18, 20, 19, 0) 0%, rgba(18, 20, 19, 1) 100%);
        }
        .custom-gold-border {
            border-bottom: 2px solid #e9c349;
        }
      `}} />

      {/* TopNavBar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#121413]/70 backdrop-blur-md border-b border-outline-variant/20">
        <div className="flex justify-between items-center w-full px-margin-desktop py-unit-3 max-w-container-max mx-auto">
          <div className="flex items-center gap-4">
            <Link href="/" className="flex items-center gap-4 cursor-pointer">
              <img 
                alt="BIGBRUVA Institutional Logo" 
                className="h-10 w-10 object-contain" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDTKWSJRZMFnqnbwKMtnZEh_XVb44eSKBhpKQPAUw2l7b6cuQrQCyuaDC0r-jmsu_CyhfEkGwhsFr_elhV-oGDzvp_h3SszRZGbduftD6js3dYo-NOufBxJVLQLsDsh4mwqNXx8irdMzj61YhconXxX9iUIKlix9w2R055nJjd1_U1ub30rSP3CbuUkFj57blXLX8jQ2VSTuGx5i30vVkn0UG-Ya9xcfALiUILDvyeH4kpH4RU8L2lA6tPGk4IZbI8rav1ENNtVOOU"
              />
              <span className="font-display-lg text-headline-md tracking-tighter text-primary">BIGBRUVA</span>
            </Link>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <Link className="font-label-sm text-label-sm text-on-surface-variant hover:text-secondary transition-colors" href="/">Home</Link>
            <Link className="font-label-sm text-label-sm text-on-surface-variant hover:text-secondary transition-colors" href="/about">About</Link>
            <Link className="font-label-sm text-label-sm text-on-surface-variant hover:text-secondary transition-colors" href="/legacy">Legacy</Link>
            <Link className="font-label-sm text-label-sm text-on-surface-variant hover:text-secondary transition-colors" href="/media">Media</Link>
            <Link className="font-label-sm text-label-sm text-secondary font-bold border-b-2 border-secondary" href="/bookings">Inquiries</Link>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/legacy" className="hidden md:block px-6 py-2 bg-secondary text-on-secondary text-label-md font-label-md rounded-lg hover:bg-secondary-container transition-all active:scale-95 text-center">
              Explore Legacy
            </Link>
            <span className="material-symbols-outlined text-primary cursor-pointer md:hidden">menu</span>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative min-h-[85vh] flex items-end pt-32 pb-24 px-margin-mobile md:px-margin-desktop overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            alt="BIGBRUVA Portrait" 
            className="w-full h-full object-cover object-top filter brightness-75 contrast-110" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBwZ36V1MFfrIhzLLNscCDWhxxgAk67jp1zDY0TdMvsV5ZtEd-vE-SUE9EkayQMoPMnpbaXTE63ppqyhWQ-zhb9ZohgUj9WM8uPxoKHsPavJUOQG2sebcXC2Kc8fZ8_RSb82DOleVSfwyZRSrDAB6qnrHP2A1wDQVm8-56DenvoaALua7EaO_OnxrenksANkeAL-R_kJ6tvOcioVW5cWuaR2jLUtndHHFftIC2Oiajybx_NqjwIEYBiTdU9Ym-T5Vjg3aesjshYdZI" 
          />
          <div className="absolute inset-0 hero-gradient"></div>
        </div>
        <div className="relative z-10 max-w-container-max mx-auto w-full">
          <div className="max-w-3xl">
            <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-secondary leading-tight mb-6">
              Institutional Engagements
            </h1>
            <p className="font-headline-md text-headline-md text-on-surface-variant max-w-2xl">
              Secure the voice of a generation for your next milestone. Elevating discourse through intellectual depth and cultural authority.
            </p>
            <div className="mt-12 flex flex-wrap gap-6">
              <a className="px-8 py-4 bg-secondary text-on-secondary font-label-md text-label-md rounded-xl hover:shadow-[0_0_20px_rgba(233,195,73,0.3)] transition-all" href="#booking-form">Secure Commission</a>
              <a className="px-8 py-4 border border-secondary text-secondary font-label-md text-label-md rounded-xl hover:bg-secondary/10 transition-all" href="#rate-card">View Rate Framework</a>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-24 space-y-32">
        {/* 1. Appearance Categories: Bento Grid */}
        <section id="categories">
          <div className="mb-16 transition-all duration-700 opacity-100 translate-y-0">
            <span className="text-secondary font-label-md tracking-widest uppercase">Expertise</span>
            <h2 className="font-display-lg text-headline-lg mt-4">Appearance Categories</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter transition-all duration-700 opacity-100 translate-y-0">
            {/* Keynote */}
            <div className="md:col-span-7 group glass-panel p-10 rounded-2xl flex flex-col justify-between min-h-[350px] transition-all hover:border-secondary/40 duration-700 opacity-100 translate-y-0">
              <div>
                <span className="material-symbols-outlined text-4xl text-secondary mb-6">mic_external_on</span>
                <h3 className="font-headline-md text-headline-md mb-4">Keynote Speaking</h3>
                <p className="text-on-surface-variant text-body-lg leading-relaxed max-w-md">
                  Visionary addresses tailored for summits, institutional galas, and global policy forums. Focused on legacy, cultural shifts, and intellectual leadership.
                </p>
              </div>
              <div className="mt-8">
                <ul className="flex flex-wrap gap-3">
                  <li className="px-3 py-1 bg-surface-variant rounded-full text-label-sm font-label-sm">Leadership</li>
                  <li className="px-3 py-1 bg-surface-variant rounded-full text-label-sm font-label-sm">Futurism</li>
                  <li className="px-3 py-1 bg-surface-variant rounded-full text-label-sm font-label-sm">Ethics</li>
                </ul>
              </div>
            </div>
            {/* Panel Moderation */}
            <div className="md:col-span-5 group bg-primary-container p-10 rounded-2xl flex flex-col justify-between min-h-[350px] transition-all hover:bg-primary-container/80">
              <div>
                <span className="material-symbols-outlined text-4xl text-secondary mb-6">forum</span>
                <h3 className="font-headline-md text-headline-md text-white mb-4">Panel Moderation</h3>
                <p className="text-on-primary-container text-body-lg leading-relaxed">
                  Mastering the flow of complex dialogue. Orchestrating high-stakes conversations between industry titans and thought leaders.
                </p>
              </div>
            </div>
            {/* Brand Ambassadorship */}
            <div className="md:col-span-5 group border border-outline-variant/30 p-10 rounded-2xl flex flex-col justify-between min-h-[350px] hover:bg-surface-variant/20 transition-all">
              <div>
                <span className="material-symbols-outlined text-4xl text-secondary mb-6">verified_user</span>
                <h3 className="font-headline-md text-headline-md mb-4">Brand Ambassadorship</h3>
                <p className="text-on-surface-variant text-body-lg leading-relaxed">
                  Alignment with prestige entities that share a commitment to excellence and cultural resonance. Strategic long-term partnerships.
                </p>
              </div>
            </div>
            {/* Voiceover */}
            <div className="md:col-span-7 group glass-panel p-10 rounded-2xl flex flex-col justify-between min-h-[350px] transition-all duration-700 opacity-100 translate-y-0">
              <div>
                <span className="material-symbols-outlined text-4xl text-secondary mb-6">record_voice_over</span>
                <h3 className="font-headline-md text-headline-md mb-4">Voiceover Commissions</h3>
                <p className="text-on-surface-variant text-body-lg leading-relaxed max-w-md">
                  Lending an authoritative, deep timbre to documentary narration, cinematic trailers, and high-end brand storytelling.
                </p>
              </div>
              <div className="mt-8 flex justify-end">
                <span className="material-symbols-outlined text-secondary animate-pulse">settings_voice</span>
              </div>
            </div>
          </div>
        </section>

        {/* 2. Rate Card Overview */}
        <section className="bg-surface-container-lowest border border-outline-variant/20 rounded-3xl p-8 md:p-16" id="rate-card">
          <div className="text-center max-w-2xl mx-auto mb-16 transition-all duration-700 opacity-100 translate-y-0">
            <h2 className="font-display-lg text-headline-lg text-secondary mb-4">Engagement Framework</h2>
            <p className="text-on-surface-variant">BIGBRUVA engagements are structured by impact and reach. We prioritize missions that align with our core intellectual values.</p>
          </div>
          <div className="overflow-x-auto transition-all duration-700 opacity-100 translate-y-0">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-outline-variant">
                  <th className="py-6 px-4 font-label-md text-label-md text-primary uppercase">Tier</th>
                  <th className="py-6 px-4 font-label-md text-label-md text-primary uppercase">Scope</th>
                  <th className="py-6 px-4 font-label-md text-label-md text-primary uppercase">Deliverables</th>
                  <th className="py-6 px-4 font-label-md text-label-md text-primary uppercase">Inquiry</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-outline-variant/10">
                <tr className="hover:bg-surface-bright/30 transition-colors">
                  <td className="py-8 px-4">
                    <span className="font-headline-md block">Institutional</span>
                    <span className="text-label-sm text-secondary">Foundations &amp; Gov</span>
                  </td>
                  <td className="py-8 px-4 text-on-surface-variant text-body-md">Global summits, policy keynotes, state dinners.</td>
                  <td className="py-8 px-4 text-on-surface-variant text-body-md">60m Speech, 1x VIP Meet, Media Access.</td>
                  <td className="py-8 px-4 font-label-md italic text-secondary">Custom Quote</td>
                </tr>
                <tr className="hover:bg-surface-bright/30 transition-colors">
                  <td className="py-8 px-4">
                    <span className="font-headline-md block">Corporate</span>
                    <span className="text-label-sm text-secondary">Fortune 500 / Tech</span>
                  </td>
                  <td className="py-8 px-4 text-on-surface-variant text-body-md">Internal leadership series, brand launches.</td>
                  <td className="py-8 px-4 text-on-surface-variant text-body-md">45m Keynote, Q&amp;A Session, Social Mention.</td>
                  <td className="py-8 px-4 font-label-md italic text-secondary">Custom Quote</td>
                </tr>
                <tr className="hover:bg-surface-bright/30 transition-colors">
                  <td className="py-8 px-4">
                    <span className="font-headline-md block">Cultural</span>
                    <span className="text-label-sm text-secondary">Non-Profits / Arts</span>
                  </td>
                  <td className="py-8 px-4 text-on-surface-variant text-body-md">Educational workshops, museum panels.</td>
                  <td className="py-8 px-4 text-on-surface-variant text-body-md">Panel Participation, Resource Contribution.</td>
                  <td className="py-8 px-4 font-label-md italic text-secondary">Bespoke Terms</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-8 text-center text-label-sm text-on-surface-variant italic">
            * All rates are exclusive of travel, lodging, and logistics unless otherwise negotiated.
          </p>
        </section>

        {/* 3. Booking Process */}
        <section id="process">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center transition-all duration-700 opacity-100 translate-y-0">
            <div>
              <span className="text-secondary font-label-md tracking-widest uppercase">Protocol</span>
              <h2 className="font-display-lg text-headline-lg mt-4 mb-8">The Path to Engagement</h2>
              <p className="text-body-lg text-on-surface-variant mb-12">We maintain a rigorous selection process to ensure total alignment between the event's mission and BIGBRUVA's intellectual trajectory.</p>
              <div className="space-y-10">
                <div className="flex gap-6 group">
                  <div className="w-12 h-12 shrink-0 rounded-full border border-secondary flex items-center justify-center font-display-lg text-headline-md text-secondary group-hover:bg-secondary group-hover:text-on-secondary transition-all">1</div>
                  <div>
                    <h4 className="font-headline-md mb-2">Initial Inquiry</h4>
                    <p className="text-on-surface-variant">Submit a formal request via our secure portal outlining dates, vision, and core themes.</p>
                  </div>
                </div>
                <div className="flex gap-6 group">
                  <div className="w-12 h-12 shrink-0 rounded-full border border-secondary flex items-center justify-center font-display-lg text-headline-md text-secondary group-hover:bg-secondary group-hover:text-on-secondary transition-all">2</div>
                  <div>
                    <h4 className="font-headline-md mb-2">Strategic Alignment</h4>
                    <p className="text-on-surface-variant">A briefing call with the BIGBRUVA office to refine the deliverable and ensure synergy.</p>
                  </div>
                </div>
                <div className="flex gap-6 group">
                  <div className="w-12 h-12 shrink-0 rounded-full border border-secondary flex items-center justify-center font-display-lg text-headline-md text-secondary group-hover:bg-secondary group-hover:text-on-secondary transition-all">3</div>
                  <div>
                    <h4 className="font-headline-md mb-2">Contractual Agreement</h4>
                    <p className="text-on-surface-variant">Legal formalization of terms, deliverables, and exclusivity clauses.</p>
                  </div>
                </div>
                <div className="flex gap-6 group">
                  <div className="w-12 h-12 shrink-0 rounded-full border border-secondary flex items-center justify-center font-display-lg text-headline-md text-secondary group-hover:bg-secondary group-hover:text-on-secondary transition-all">4</div>
                  <div>
                    <h4 className="font-headline-md mb-2">Logistics</h4>
                    <p className="text-on-surface-variant">Final coordination with our hospitality and operations team for flawless execution.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/5] rounded-3xl overflow-hidden glass-panel p-4 transition-all duration-700 opacity-100 translate-y-0 relative">
                <img 
                  alt="Execution detail" 
                  className="w-full h-full object-cover rounded-2xl opacity-40 grayscale" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBwZ36V1MFfrIhzLLNscCDWhxxgAk67jp1zDY0TdMvsV5ZtEd-vE-SUE9EkayQMoPMnpbaXTE63ppqyhWQ-zhb9ZohgUj9WM8uPxoKHsPavJUOQG2sebcXC2Kc8fZ8_RSb82DOleVSfwyZRSrDAB6qnrHP2A1wDQVm8-56DenvoaALua7EaO_OnxrenksANkeAL-R_kJ6tvOcioVW5cWuaR2jLUtndHHFftIC2Oiajybx_NqjwIEYBiTdU9Ym-T5Vjg3aesjshYdZI" 
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="p-8 glass-panel rounded-2xl text-center max-w-xs transform rotate-3 transition-all duration-700 opacity-100 translate-y-0">
                    <span className="material-symbols-outlined text-secondary text-5xl mb-4">verified</span>
                    <h5 className="font-headline-md mb-2">Excellence Guaranteed</h5>
                    <p className="text-label-sm text-on-surface-variant">Every engagement is curated to be a definitive moment in institutional history.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4. FAQ */}
        <section id="faq">
          <div className="max-w-3xl mx-auto transition-all duration-700 opacity-100 translate-y-0">
            <h2 className="font-display-lg text-headline-lg text-center mb-16">Operational FAQ</h2>
            <div className="space-y-6">
              <div className="p-6 border-b border-outline-variant/30 hover:border-secondary transition-colors cursor-pointer group">
                <div className="flex justify-between items-center">
                  <h4 className="font-headline-md text-headline-md">Travel &amp; Logistics Requirements</h4>
                  <span className="material-symbols-outlined text-secondary group-hover:rotate-45 transition-transform">add</span>
                </div>
                <p className="mt-4 text-on-surface-variant text-body-md">For all international engagements, Business Class airfare, private ground transport, and 5-star institutional accommodations are required for the Principal and one aide.</p>
              </div>
              <div className="p-6 border-b border-outline-variant/30 hover:border-secondary transition-colors cursor-pointer group">
                <div className="flex justify-between items-center">
                  <h4 className="font-headline-md text-headline-md">Media Rights &amp; Documentation</h4>
                  <span className="material-symbols-outlined text-secondary group-hover:rotate-45 transition-transform">add</span>
                </div>
                <p className="mt-4 text-on-surface-variant text-body-md">Archive rights are granted for internal use. Broadcast or commercial redistribution requires separate licensing agreements specified during contracting.</p>
              </div>
              <div className="p-6 border-b border-outline-variant/30 hover:border-secondary transition-colors cursor-pointer group">
                <div className="flex justify-between items-center">
                  <h4 className="font-headline-md text-headline-md">Custom Commission Requests</h4>
                  <span className="material-symbols-outlined text-secondary group-hover:rotate-45 transition-transform">add</span>
                </div>
                <p className="mt-4 text-on-surface-variant text-body-md">Bespoke speechwriting or strategic advisory outside of the engagement timeframe is available as a separate institutional retainer.</p>
              </div>
            </div>
          </div>
        </section>

        {/* 5. Inquiry Form */}
        <section className="relative" id="booking-form">
          <div className="absolute inset-0 bg-primary-container/10 -rotate-1 rounded-[4rem] -z-10 transition-all duration-700 opacity-100 translate-y-0"></div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 bg-surface-container-high p-8 md:p-20 rounded-[3rem] border border-outline-variant/30 shadow-2xl transition-all duration-700 opacity-100 translate-y-0">
            <div>
              <h2 className="font-display-lg text-headline-lg text-secondary mb-6">Inquiry Portal</h2>
              <p className="text-body-lg text-on-surface-variant mb-12">Direct access for agencies, institutions, and corporate entities. Our team responds to qualified inquiries within 48 business hours.</p>
              <div className="space-y-8">
                <div className="flex items-center gap-6">
                  <span className="material-symbols-outlined text-secondary">mail</span>
                  <div>
                    <p className="text-label-sm text-primary uppercase font-bold">Office</p>
                    <p className="text-headline-md">office@bigbruva.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <span className="material-symbols-outlined text-secondary">location_on</span>
                  <div>
                    <p className="text-label-sm text-primary uppercase font-bold">Base</p>
                    <p className="text-headline-md">Lagos | London | New York</p>
                  </div>
                </div>
              </div>
            </div>
            <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-label-sm text-on-surface-variant uppercase tracking-tighter">Full Name</label>
                  <input className="w-full bg-primary-container/20 border-0 border-b-2 border-on-surface/20 text-on-surface focus:border-secondary focus:ring-0 transition-all py-3" placeholder="Johnathan Sterling" type="text" />
                </div>
                <div className="space-y-2">
                  <label className="text-label-sm text-on-surface-variant uppercase tracking-tighter">Organization</label>
                  <input className="w-full bg-primary-container/20 border-0 border-b-2 border-on-surface/20 text-on-surface focus:border-secondary focus:ring-0 transition-all py-3" placeholder="Institutional Name" type="text" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-label-sm text-on-surface-variant uppercase tracking-tighter">Engagement Type</label>
                <select className="w-full bg-primary-container/20 border-0 border-b-2 border-on-surface/20 text-on-surface focus:border-secondary focus:ring-0 transition-all py-3" defaultValue="Keynote Speaking">
                  <option value="Keynote Speaking">Keynote Speaking</option>
                  <option value="Panel Moderation">Panel Moderation</option>
                  <option value="Brand Ambassadorship">Brand Ambassadorship</option>
                  <option value="Voiceover Commission">Voiceover Commission</option>
                  <option value="Other / Bespoke">Other / Bespoke</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-label-sm text-on-surface-variant uppercase tracking-tighter">Mission Briefing</label>
                <textarea className="w-full bg-primary-container/20 border-0 border-b-2 border-on-surface/20 text-on-surface focus:border-secondary focus:ring-0 transition-all py-3" placeholder="Detail the cultural impact and objectives of the engagement..." rows={4}></textarea>
              </div>
              <div className="flex items-center gap-3">
                <input className="rounded bg-primary-container/20 border-outline-variant text-secondary focus:ring-secondary" type="checkbox" />
                <label className="text-label-sm text-on-surface-variant">I understand travel &amp; hospitality requirements apply.</label>
              </div>
              <button className="w-full py-5 bg-secondary text-on-secondary font-display-lg text-headline-md hover:brightness-110 transition-all active:scale-95 shadow-xl cursor-pointer" type="submit">
                Submit Inquiry
              </button>
            </form>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-primary-container pt-24 pb-12 border-t border-secondary/20">
        <div className="max-w-container-max mx-auto px-margin-desktop">
          <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-20">
            <div className="max-w-md">
              <img 
                alt="BIGBRUVA Official Crest" 
                className="h-24 w-24 mb-8 object-contain filter brightness-110" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuC6WdFJlD557NG1rjXjDo-d7qR5erFaA-cBmArXCvURIRozCAqFglCoCRtIDt6qYexzdJLve0GkxfaOp0fS0s2Z895B-wzYPSAb7uF1InR9g-H1FNWtQxUVBN8bl9jwc8vTEvVTXy0mgDZZUqukRlYYxNIHvHLM5_BiIony1nnVtb_78YezpJF8eql5hOOQvtChzsTi0hy6udWqH0ndHiePZbWH6cOBNkCNu8QguUbgwn7z0G9XEeI_OOCMV9fUsfttHZcMGJ7GCRA"
              />
              <p className="text-on-primary-container text-body-md">Curating Intellectual Depth and Cultural Influence across the global landscape. A voice for legacy, a vision for the future.</p>
            </div>
            <div className="grid grid-cols-2 gap-16">
              <div className="space-y-4">
                <h4 className="text-primary font-bold uppercase tracking-widest text-label-sm">Navigation</h4>
                <ul className="space-y-3">
                  <li><Link className="text-tertiary-fixed hover:text-secondary transition-colors" href="/press">Press</Link></li>
                  <li><Link className="text-tertiary-fixed hover:text-secondary transition-colors" href="/legacy">Archive Access</Link></li>
                  <li><Link className="text-tertiary-fixed hover:text-secondary transition-colors" href="/media">Media</Link></li>
                </ul>
              </div>
              <div className="space-y-4">
                <h4 className="text-primary font-bold uppercase tracking-widest text-label-sm">Legal</h4>
                <ul className="space-y-3">
                  <li><Link className="text-tertiary-fixed hover:text-secondary transition-colors" href="/contact">Privacy Policy</Link></li>
                  <li><Link className="text-tertiary-fixed hover:text-secondary transition-colors" href="/contact">Terms of Service</Link></li>
                  <li><Link className="text-tertiary-fixed hover:text-secondary transition-colors" href="/contact">Contact</Link></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="border-t border-secondary/10 pt-12 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-label-sm text-tertiary-fixed-dim">© 2024 BIGBRUVA. All Rights Reserved. Curating Intellectual Depth and Cultural Influence.</p>
            <div className="flex gap-8">
              <a className="material-symbols-outlined text-primary hover:text-secondary transition-all" href="#">public</a>
              <a className="material-symbols-outlined text-primary hover:text-secondary transition-all" href="#">hub</a>
              <a className="material-symbols-outlined text-primary hover:text-secondary transition-all" href="#">podcasts</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
