"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();

  if (pathname && pathname.startsWith('/dashboard')) {
    return null;
  }

  const links = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Legacy', href: '/legacy' },
    { label: 'Media', href: '/media' },
    { label: 'Voice', href: '/voice' },
    { label: 'Events', href: '/events' },
  ];

  return (
    <nav 
      className="fixed top-[14px] md:top-[20px] left-1/2 -translate-x-1/2 z-[100] w-[92%] md:w-[90%] max-w-[1120px] h-auto min-h-[96px] md:h-[72px] rounded-[24px] md:rounded-full flex flex-col md:flex-row justify-between items-center py-2.5 md:py-0 px-4 md:px-0 transition-all duration-300"
      style={{
        backgroundColor: 'rgba(8,8,8,0.85)',
        backdropFilter: 'blur(24px)',
        WebkitBackdropFilter: 'blur(24px)',
        border: '1px solid rgba(212,175,55,0.22)',
        boxShadow: '0 0 40px rgba(212,175,55,0.08), inset 0 1px 0 rgba(255,255,255,0.04)'
      }}
    >
      {/* Top row for mobile / Main layout for desktop */}
      <div className="w-full md:w-auto flex justify-between items-center md:h-full md:pl-[28px]">
        <Link href="/">
          <img 
            alt="BIGBRUVA Logo" 
            className="w-[56px] md:w-[68px] h-auto object-contain cursor-pointer" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDzoQachYWqkheryCjc0oj1MFa-C1ZPMJ7iMTX-2-IDj7U9vodjQkBDg6bzs8DGk-WmboILzxQlYaQcA2aHbUEYZcJRksEek2fr3QWgIrtR-1uivfoHhCgtW90_f6_8W4NQYgsLsKZ0qSQin7U0OqkqxqrlplbfTuEt6pFWYYQmG4aDRV2AFdu5ZJyhZyKPZTRJaMbuic6zpM-OG6I9l73dLr-tV4GAyFoG0xg_-5hrsvTea3SIsK9OnWGI5gPT5RFgnnA0E5N6ZZU"
          />
        </Link>

        {/* CTA (visible on top row for mobile) */}
        <div className="flex md:hidden">
          <Link 
            href="/contact" 
            className="h-[38px] px-[16px] text-[#0A0A0A] font-bold rounded-full flex items-center justify-center gap-1.5 hover:brightness-105 active:scale-95 transition-all duration-300 text-[12px]"
            style={{
              background: 'linear-gradient(to right, #D4AF37, #E8C85A)',
              boxShadow: '0 0 20px rgba(212,175,55,0.2)',
              letterSpacing: '0.04em'
            }}
          >
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
            </svg>
            ENGAGE NOW
          </Link>
        </div>
      </div>

      {/* Desktop Navigation Links */}
      <div className="absolute left-1/2 -translate-x-1/2 hidden md:flex items-center gap-[32px]">
        {links.map((link) => {
          const isActive = pathname === link.href;
          return (
            <div key={link.href} className="flex flex-col items-center">
              <Link 
                className={`font-sans text-[16px] font-medium transition-all duration-300 ${
                  isActive ? 'text-secondary' : 'text-on-surface-variant hover:text-secondary'
                }`}
                href={link.href}
              >
                {link.label}
              </Link>
              {isActive && (
                <div className="w-[24px] h-[2px] bg-secondary mt-0.5 rounded-full" />
              )}
            </div>
          );
        })}
      </div>

      {/* Mobile Navigation Links Row (Always visible, inline) */}
      <div className="flex md:hidden w-full justify-center items-center gap-[14px] mt-2 border-t border-white/5 pt-2">
        {links.map((link) => {
          const isActive = pathname === link.href;
          return (
            <div key={link.href} className="flex flex-col items-center">
              <Link 
                className={`font-sans text-[13px] font-semibold transition-all duration-300 ${
                  isActive ? 'text-secondary' : 'text-on-surface-variant hover:text-secondary'
                }`}
                href={link.href}
              >
                {link.label}
              </Link>
              {isActive && (
                <div className="w-[12px] h-[2px] bg-secondary mt-0.5 rounded-full" />
              )}
            </div>
          );
        })}
      </div>

      {/* Desktop CTA Button Container */}
      <div className="hidden md:flex items-center pr-[14px]">
        <Link 
          href="/contact" 
          className="h-[48px] px-[24px] text-[#0A0A0A] font-bold rounded-full flex items-center justify-center gap-1.5 hover:-translate-y-[1px] hover:brightness-105 active:scale-95 transition-all duration-300 text-[14px]"
          style={{
            background: 'linear-gradient(to right, #D4AF37, #E8C85A)',
            boxShadow: '0 0 20px rgba(212,175,55,0.2)',
            letterSpacing: '0.04em'
          }}
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
          </svg>
          ENGAGE NOW
        </Link>
      </div>
    </nav>
  );
}
