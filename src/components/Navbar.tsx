"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/legacy', label: 'Legacy' },
  { href: '/media', label: 'Media' },
  { href: '/voice', label: 'Voice' },
  { href: '/events', label: 'Events' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/community', label: 'Community' },
  { href: '/press', label: 'Press' },
  { href: '/contact', label: 'Contact' }
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 glass-02 border-b border-outline-variant/10">
        <div className="flex justify-between items-center w-full px-margin-mobile md:px-margin-desktop py-4 max-w-container-max mx-auto">
          {/* Logo & Brand */}
          <Link href="/" className="flex items-center gap-4 group cursor-pointer">
            <div className="relative w-10 h-10">
              <Image 
                alt="BIGBRUVA Crest" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDzoQachYWqkheryCjc0oj1MFa-C1ZPMJ7iMTX-2-IDj7U9vodjQkBDg6bzs8DGk-WmboILzxQlYaQcA2aHbUEYZcJRksEek2fr3QWgIrtR-1uivfoHhCgtW90_f6_8W4NQYgsLsKZ0qSQin7U0OqkqxqrlplbfTuEt6pFWYYQmG4aDRV2AFdu5ZJyhZyKPZTRJaMbuic6zpM-OG6I9l73dLr-tV4GAyFoG0xg_-5hrsvTea3SIsK9OnWGI5gPT5RFgnnA0E5N6ZZU"
                fill
                sizes="40px"
                className="object-contain transition-transform group-hover:scale-105"
                priority
              />
            </div>
            <span className="font-display-lg text-headline-md tracking-tighter text-secondary dark:text-secondary-fixed transition-colors group-hover:text-secondary-fixed">
              BIGBRUVA
            </span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden xl:flex gap-8 items-center">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`font-label-sm text-label-sm font-medium transition-all duration-300 py-1 hover:text-secondary ${
                    isActive 
                      ? 'text-secondary border-b-2 border-secondary font-bold' 
                      : 'text-on-surface-variant dark:text-tertiary-fixed-dim'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          {/* CTA & Mobile Menu Trigger */}
          <div className="flex items-center gap-4">
            <Link 
              href="/contact"
              className="hidden lg:block bg-secondary text-on-secondary px-6 py-2 font-label-md text-label-md rounded-lg hover:brightness-110 transition-all active:scale-95 shadow-lg shadow-secondary/10"
            >
              Inquire Now
            </Link>
            
            <button 
              onClick={toggleMobileMenu}
              aria-label="Toggle Navigation Menu"
              className="material-symbols-outlined text-secondary text-3xl cursor-pointer xl:hidden select-none active:scale-90 transition-transform"
            >
              {mobileMenuOpen ? 'close' : 'menu'}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Slide-down Panel */}
      <div 
        className={`fixed inset-0 z-40 bg-surface/98 backdrop-blur-2xl transition-all duration-500 ease-in-out flex flex-col justify-center items-center xl:hidden ${
          mobileMenuOpen 
            ? 'opacity-100 translate-y-0 pointer-events-auto' 
            : 'opacity-0 -translate-y-full pointer-events-none'
        }`}
      >
        <div className="flex flex-col gap-6 text-center">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`font-display-lg text-headline-lg transition-colors ${
                  isActive 
                    ? 'text-secondary font-bold italic' 
                    : 'text-on-surface-variant hover:text-secondary'
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <Link
            href="/contact"
            onClick={() => setMobileMenuOpen(false)}
            className="mt-8 bg-secondary text-on-secondary px-8 py-3 font-label-md text-label-md rounded-lg hover:brightness-110 active:scale-95 inline-block"
          >
            Inquire Now
          </Link>
        </div>
      </div>
    </>
  );
}
