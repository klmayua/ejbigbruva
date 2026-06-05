"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="glass-02 border-t border-outline-variant/10 pt-20 pb-12 w-full mt-auto relative z-10">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-gutter mb-16">
          
          {/* Brand Col */}
          <div className="max-w-md space-y-6">
            <div className="flex items-center gap-4">
              <div className="relative w-12 h-12">
                <Image 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDzoQachYWqkheryCjc0oj1MFa-C1ZPMJ7iMTX-2-IDj7U9vodjQkBDg6bzs8DGk-WmboILzxQlYaQcA2aHbUEYZcJRksEek2fr3QWgIrtR-1uivfoHhCgtW90_f6_8W4NQYgsLsKZ0qSQin7U0OqkqxqrlplbfTuEt6pFWYYQmG4aDRV2AFdu5ZJyhZyKPZTRJaMbuic6zpM-OG6I9l73dLr-tV4GAyFoG0xg_-5hrsvTea3SIsK9OnWGI5gPT5RFgnnA0E5N6ZZU" 
                  alt="BIGBRUVA Crest" 
                  fill
                  sizes="48px"
                  className="object-contain brightness-110 filter"
                />
              </div>
              <span className="font-display-lg text-headline-xl text-secondary dark:text-secondary-fixed tracking-tighter">
                BIGBRUVA
              </span>
            </div>
            <p className="text-on-surface-variant font-body-md leading-relaxed">
              Dedicated to curating intellectual depth and the ongoing evolution of cultural influence through the power of cinematic storytelling.
            </p>
          </div>

          {/* Links Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-12 pt-4 lg:pt-0">
            {/* Nav Links */}
            <div className="space-y-4">
              <h5 className="text-secondary font-bold uppercase text-xs tracking-widest">Explore</h5>
              <ul className="space-y-2">
                <li>
                  <Link href="/" className="text-label-sm font-label-sm text-on-surface-variant hover:text-secondary transition-colors">Home</Link>
                </li>
                <li>
                  <Link href="/about" className="text-label-sm font-label-sm text-on-surface-variant hover:text-secondary transition-colors">About</Link>
                </li>
                <li>
                  <Link href="/legacy" className="text-label-sm font-label-sm text-on-surface-variant hover:text-secondary transition-colors">Legacy</Link>
                </li>
                <li>
                  <Link href="/media" className="text-label-sm font-label-sm text-on-surface-variant hover:text-secondary transition-colors">Media</Link>
                </li>
              </ul>
            </div>

            {/* Legal Links */}
            <div className="space-y-4">
              <h5 className="text-secondary font-bold uppercase text-xs tracking-widest">Institutional</h5>
              <ul className="space-y-2">
                <li>
                  <Link href="/press" className="text-label-sm font-label-sm text-on-surface-variant hover:text-secondary transition-colors">Press</Link>
                </li>
                <li>
                  <Link href="/contact" className="text-label-sm font-label-sm text-on-surface-variant hover:text-secondary transition-colors">Contact</Link>
                </li>
                <li>
                  <Link href="#" className="text-label-sm font-label-sm text-on-surface-variant hover:text-secondary transition-colors">Privacy Policy</Link>
                </li>
                <li>
                  <Link href="#" className="text-label-sm font-label-sm text-on-surface-variant hover:text-secondary transition-colors">Terms of Service</Link>
                </li>
              </ul>
            </div>

            {/* Social Connect */}
            <div className="space-y-4 col-span-2 md:col-span-1">
              <h5 className="text-secondary font-bold uppercase text-xs tracking-widest">Connect</h5>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 rounded-full border border-outline-variant/30 flex items-center justify-center text-on-surface-variant hover:border-secondary hover:text-secondary transition-all hover:scale-105">
                  <span className="material-symbols-outlined text-lg">public</span>
                </a>
                <a href="#" className="w-10 h-10 rounded-full border border-outline-variant/30 flex items-center justify-center text-on-surface-variant hover:border-secondary hover:text-secondary transition-all hover:scale-105">
                  <span className="material-symbols-outlined text-lg">play_circle</span>
                </a>
                <a href="#" className="w-10 h-10 rounded-full border border-outline-variant/30 flex items-center justify-center text-on-surface-variant hover:border-secondary hover:text-secondary transition-all hover:scale-105">
                  <span className="material-symbols-outlined text-lg">podcasts</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-outline-variant/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-label-sm font-label-sm text-on-surface-variant text-center md:text-left">
            © 2024 BIGBRUVA - Ejike Ebidilo. All Rights Reserved. Curating Intellectual Depth.
          </p>
          <div className="flex items-center gap-2">
            <span className="text-[10px] text-on-surface-variant tracking-[0.2em]">THE SOVEREIGN SERIES</span>
            <div className="w-2 h-2 rounded-full bg-secondary animate-pulse"></div>
          </div>
        </div>

      </div>
    </footer>
  );
}
