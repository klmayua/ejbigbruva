"use client";

import React, { useEffect, useState } from 'react';
import Link from 'next/link';

export default function Page() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const bentoCards = document.querySelectorAll('.bento-card');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100', 'translate-y-0');
          entry.target.classList.remove('opacity-0', 'translate-y-10');
        }
      });
    }, { threshold: 0.1 });

    bentoCards.forEach(card => {
      card.classList.add('opacity-0', 'translate-y-10', 'transition-all', 'duration-700');
      observer.observe(card);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <>
      {/* Page specific overrides to define local classes */}
      <style dangerouslySetInnerHTML={{__html: `
        body {
            background-color: #121413 !important;
            color: #e2e3e1;
            scroll-behavior: smooth;
        }
        .glass-panel {
            background: rgba(18, 20, 19, 0.7);
            backdrop-filter: blur(12px);
            border: 1px solid rgba(233, 195, 73, 0.15);
        }
        .gold-gradient-text {
            background: linear-gradient(to bottom, #ffe088, #e9c349);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }
        .bento-card {
            background: #1e201f;
            border: 0.5px solid rgba(226, 227, 225, 0.1);
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .bento-card:hover {
            border-color: rgba(233, 195, 73, 0.4);
            transform: translateY(-4px);
        }
      `}} />

      <main className="pt-32">
        {/* Hero Section */}
        <section className="px-margin-desktop py-20 relative overflow-hidden">
          <div className="max-w-container-max mx-auto relative z-10">
            <div className="flex flex-col gap-6 max-w-3xl">
              <span className="text-secondary font-label-md tracking-[0.2em] uppercase">The Global Network</span>
              <h1 className="font-display-lg text-display-lg gold-gradient-text leading-tight">The BIGBRUVA Community</h1>
              <p className="font-body-lg text-on-surface-variant leading-relaxed">A sanctuary for critical thought, cultural preservation, and institutional excellence. Explore the collective impact of our members across the globe.</p>
            </div>
          </div>
          {/* Decorative Element */}
          <div className="absolute -right-20 -top-20 opacity-10">
            <img 
              alt="Background Crest" 
              className="w-[600px] h-[600px] grayscale" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuC_9RAnNPaThFbDC9iMvDA8uOr07jICBY7uGu__cFV8jxBzQO8-Tm3ebSes-ThFZ8AKYJimewJjveK0G5ls4ZGYP5zKw4bmFIvzD2fk8dWvSQ5czhfyY_wZz26nrNvoq0cjmOSZ50z0RrcjZ1-60wFLKhQi-FaySXW2mByFNxJb5sDdJ7A25SmAl6Epehet_ttWF0nOiJAJ7W7qpYZHJZaWhADCKgpDlUqgQxeRRQvzyuFTWsDwhJevSezlSCvvnqQtWmBKq7PV754" 
            />
          </div>
        </section>

        {/* Mentorship Stories (Bento Grid) */}
        <section className="px-margin-desktop py-16 bg-surface-container-lowest">
          <div className="max-w-container-max mx-auto">
            <div className="mb-12 flex justify-between items-end">
              <div>
                <h2 className="font-headline-lg text-secondary">Mentorship Stories</h2>
                <div className="h-1 w-20 bg-secondary mt-2"></div>
              </div>
              <Link className="text-on-surface-variant hover:text-secondary flex items-center gap-2 group" href="/legacy">
                <span className="font-label-md">VIEW ALL ARCHIVES</span>
                <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-auto md:h-[600px]">
              <div className="md:col-span-8 bento-card p-10 flex flex-col justify-end relative overflow-hidden group opacity-0 translate-y-10 transition-all duration-700">
                <div className="absolute inset-0 z-0 opacity-40 group-hover:opacity-60 transition-opacity">
                  <div 
                    className="w-full h-full bg-[url('https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&amp;w=2071&amp;auto=format&amp;fit=crop')] bg-cover bg-center" 
                    data-alt="A sophisticated black and white portrait of a senior mentor in a deep navy suit, guiding a young professional in a grand, dimly lit library with tall bookshelves and golden ambient lighting."
                  />
                </div>
                <div className="relative z-10">
                  <span className="bg-secondary text-on-secondary px-3 py-1 text-label-sm font-bold mb-4 inline-block">LEGACY PAIRING</span>
                  <h3 className="font-headline-lg mb-4">The Architect of Thought: Mentoring the Next Generation</h3>
                  <p className="text-on-surface-variant max-w-xl">A deep dive into the 12-month residency program that pairs institutional veterans with emerging leaders in media and voice.</p>
                </div>
              </div>
              <div className="md:col-span-4 bento-card p-8 flex flex-col gap-6 opacity-0 translate-y-10 transition-all duration-700">
                <div className="h-48 w-full bg-surface-container-highest flex items-center justify-center border border-secondary/10">
                  <span className="material-symbols-outlined text-secondary text-5xl">school</span>
                </div>
                <div>
                  <h4 className="font-headline-md text-secondary mb-2">Academic Reach</h4>
                  <p className="text-on-surface-variant font-body-md">Empowering over 500 scholars annually through our cross-continental institutional network.</p>
                </div>
                <Link href="/legacy" className="mt-auto border border-secondary text-secondary py-3 font-label-md hover:bg-secondary/10 transition-colors uppercase text-center block">
                  Read Impact Report
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials (Glassmorphism Cards) */}
        <section className="px-margin-desktop py-24 relative">
          <div className="max-w-container-max mx-auto relative z-10">
            <h2 className="font-headline-lg text-center mb-16 uppercase tracking-widest text-secondary">Audience Voices</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Testimonial 1 */}
              <div className="glass-panel p-8 flex flex-col gap-6">
                <span className="material-symbols-outlined text-secondary text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>format_quote</span>
                <p className="italic text-on-surface font-body-lg leading-relaxed">"BIGBRUVA isn't just an archive; it's a living organism of history. The Community projects have redefined how we view our collective legacy in the modern age."</p>
                <div className="flex items-center gap-4 mt-4">
                  <div className="w-12 h-12 rounded-full bg-secondary/20 border border-secondary/40"></div>
                  <div>
                    <p className="font-bold text-secondary">Julian Vane</p>
                    <p className="text-label-sm text-on-surface-variant">Cultural Historian</p>
                  </div>
                </div>
              </div>
              {/* Testimonial 2 */}
              <div className="glass-panel p-8 flex flex-col gap-6 border-t-2 border-t-secondary">
                <span className="material-symbols-outlined text-secondary text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>format_quote</span>
                <p className="italic text-on-surface font-body-lg leading-relaxed">"Joining this network was the most significant move for my career in voice. The mentorship here is unparalleled in its depth and institutional rigor."</p>
                <div className="flex items-center gap-4 mt-4">
                  <div className="w-12 h-12 rounded-full bg-secondary/20 border border-secondary/40"></div>
                  <div>
                    <p className="font-bold text-secondary">Amara Okafor</p>
                    <p className="text-label-sm text-on-surface-variant">Voice Media Lead</p>
                  </div>
                </div>
              </div>
              {/* Testimonial 3 */}
              <div className="glass-panel p-8 flex flex-col gap-6">
                <span className="material-symbols-outlined text-secondary text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>format_quote</span>
                <p className="italic text-on-surface font-body-lg leading-relaxed">"A bastion of truth and a lighthouse for community-led progress. The BIGBRUVA archive serves as our definitive source of historical integrity."</p>
                <div className="flex items-center gap-4 mt-4">
                  <div className="w-12 h-12 rounded-full bg-secondary/20 border border-secondary/40"></div>
                  <div>
                    <p className="font-bold text-secondary">David Sterling</p>
                    <p className="text-label-sm text-on-surface-variant">Legacy Supporter</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Community Projects */}
        <section className="px-margin-desktop py-16">
          <div className="max-w-container-max mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="font-display-lg text-headline-lg text-secondary mb-8">Community Projects</h2>
                <div className="flex flex-col gap-8">
                  <div className="flex gap-6 group">
                    <div className="text-secondary font-display-lg text-headline-md opacity-30 group-hover:opacity-100 transition-opacity">01</div>
                    <div>
                      <h4 className="font-headline-md mb-2">Digital Restoration Initiative</h4>
                      <p className="text-on-surface-variant">Restoring 100-year-old voice recordings for the public domain using state-of-the-art acoustic technology.</p>
                    </div>
                  </div>
                  <div className="flex gap-6 group border-t border-secondary/10 pt-8">
                    <div className="text-secondary font-display-lg text-headline-md opacity-30 group-hover:opacity-100 transition-opacity">02</div>
                    <div>
                      <h4 className="font-headline-md mb-2">Voice of the Elders</h4>
                      <p className="text-on-surface-variant">An oral history project capturing the firsthand accounts of institutional founders across three continents.</p>
                    </div>
                  </div>
                  <div className="flex gap-6 group border-t border-secondary/10 pt-8">
                    <div className="text-secondary font-display-lg text-headline-md opacity-30 group-hover:opacity-100 transition-opacity">03</div>
                    <div>
                      <h4 className="font-headline-md mb-2">Media Literacy Fellowship</h4>
                      <p className="text-on-surface-variant">Equipping local journalists with the tools to verify archival data and historical narratives.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative h-[600px] bento-card overflow-hidden opacity-0 translate-y-10 transition-all duration-700">
                <img 
                  className="w-full h-full object-cover" 
                  alt="An expansive, high-tech archival storage facility with rows of glowing server racks" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAWMHXrCShC2BPNM8oWZ199BYhOD_16nRv8-F9Axunh3oLZTha0hgxSttYHUZqWIVKlecYSvrjcgY1udJfuu-s5ia2VJrMRXl8exW751gXPpSUCM5SwacvqvOWDHr1QGJDcwzFSW0tndX3Hyk-YfiPgDd9HKC5wwsyJUrUMwVIwWqJ5HMMueYXfIJXadlT-jem77dtJl2-qYHLlrnAMlLTkdYOP9Bpqc_A8u-IsmP_cX-y_aGKt_S25N99Z2ty5zopE-IObYakpRmY"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
                <div className="absolute bottom-8 left-8 right-8 p-6 glass-panel">
                  <h5 className="font-label-md text-secondary uppercase mb-2">Active Mission</h5>
                  <p className="text-on-surface">The Archive Preservation Project is currently 78% funded. Join the movement.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Supporters */}
        <section className="px-margin-desktop py-24 bg-surface-container-low border-y border-secondary/5">
          <div className="max-w-container-max mx-auto text-center">
            <h2 className="font-headline-md text-on-surface-variant uppercase tracking-[0.3em] mb-12">Featured Supporters</h2>
            <div className="flex flex-wrap justify-center items-center gap-16 grayscale opacity-50 hover:grayscale-0 transition-all duration-700">
              <span className="font-display-lg text-headline-md">INSTITUTE A</span>
              <span className="font-display-lg text-headline-md">CORP B</span>
              <span className="font-display-lg text-headline-md">FOUNDATION C</span>
              <span className="font-display-lg text-headline-md">GLOBAL D</span>
              <span className="font-display-lg text-headline-md">LEGACY E</span>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="px-margin-desktop py-20 text-center">
          <div className="max-w-2xl mx-auto flex flex-col items-center gap-8">
            <h2 className="font-display-lg text-headline-lg">Lend Your Voice to History</h2>
            <p className="text-on-surface-variant font-body-lg">The BIGBRUVA community is built on the contributions of those who value truth and legacy. Apply for membership or start a project today.</p>
            <div className="flex gap-4">
              <Link href="/contact" className="bg-secondary text-on-secondary px-10 py-4 rounded-DEFAULT font-label-md hover:scale-105 transition-transform uppercase tracking-widest text-center block">
                Join the Community
              </Link>
              <Link href="/contact" className="border border-secondary text-secondary px-10 py-4 rounded-DEFAULT font-label-md hover:bg-secondary/10 transition-colors uppercase tracking-widest text-center block">
                Support Us
              </Link>
            </div>
          </div>
        </section>
      </main>    </>
  );
}
