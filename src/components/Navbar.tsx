"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
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
    <>
      <nav 
        className="fixed top-[28px] left-1/2 -translate-x-1/2 z-[100] w-[90%] max-w-[1120px] h-[88px] rounded-full flex justify-between items-center transition-all duration-300"
        style={{
          backgroundColor: 'rgba(8,8,8,0.82)',
          backdropFilter: 'blur(24px)',
          WebkitBackdropFilter: 'blur(24px)',
          border: '1px solid rgba(212,175,55,0.22)',
          boxShadow: '0 0 40px rgba(212,175,55,0.08), inset 0 1px 0 rgba(255,255,255,0.04)'
        }}
      >
        {/* Logo left positioned */}
        <div className="flex items-center pl-[34px]">
          <Link href="/">
            <img 
              alt="BIGBRUVA Logo" 
              className="w-[62px] h-auto object-contain cursor-pointer" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDzoQachYWqkheryCjc0oj1MFa-C1ZPMJ7iMTX-2-IDj7U9vodjQkBDg6bzs8DGk-WmboILzxQlYaQcA2aHbUEYZcJRksEek2fr3QWgIrtR-1uivfoHhCgtW90_f6_8W4NQYgsLsKZ0qSQin7U0OqkqxqrlplbfTuEt6pFWYYQmG4aDRV2AFdu5ZJyhZyKPZTRJaMbuic6zpM-OG6I9l73dLr-tV4GAyFoG0xg_-5hrsvTea3SIsK9OnWGI5gPT5RFgnnA0E5N6ZZU"
            />
          </Link>
        </div>
        
        {/* Center Navigation Links */}
        <div className="absolute left-1/2 -translate-x-1/2 hidden md:flex items-center gap-[42px]">
          {links.map((link) => {
            const isActive = pathname === link.href;
            return (
              <div key={link.href} className="flex flex-col items-center">
                <Link 
                  className={`font-sans text-[18px] font-medium transition-all duration-300 ${
                    isActive ? 'text-secondary' : 'text-on-surface-variant hover:text-secondary'
                  }`}
                  href={link.href}
                >
                  {link.label}
                </Link>
                {isActive && (
                  <div className="w-[32px] h-[2px] bg-secondary mt-1 rounded-full" />
                )}
              </div>
            );
          })}
        </div>

        {/* Right CTA / Mobile Menu Button */}
        <div className="flex items-center pr-[18px] gap-4">
          <Link 
            href="/contact" 
            className="hidden md:flex h-[56px] px-[30px] text-[#0A0A0A] font-bold rounded-full items-center justify-center gap-2 hover:-translate-y-[2px] hover:brightness-105 active:scale-95 transition-all duration-300"
            style={{
              background: 'linear-gradient(to right, #D4AF37, #E8C85A)',
              boxShadow: '0 0 25px rgba(212,175,55,0.25)',
              letterSpacing: '0.04em'
            }}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
            </svg>
            ENGAGE NOW
          </Link>
          
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
            aria-label="Toggle Navigation Menu"
            className="material-symbols-outlined text-secondary text-3xl cursor-pointer md:hidden select-none bg-transparent border-none outline-none"
          >
            {mobileMenuOpen ? 'close' : 'menu'}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Slide-down Overlay */}
      <div 
        className={`fixed inset-0 z-[90] bg-[#0c0f0e]/98 backdrop-blur-2xl transition-all duration-500 ease-in-out flex flex-col justify-center items-center md:hidden ${
          mobileMenuOpen 
            ? 'opacity-100 translate-y-0 pointer-events-auto' 
            : 'opacity-0 -translate-y-full pointer-events-none'
        }`}
      >
        <div className="flex flex-col gap-6 text-center">
          {links.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link 
                key={link.href}
                href={link.href} 
                onClick={() => setMobileMenuOpen(false)} 
                className={`font-sans text-[24px] transition-colors ${
                  isActive ? 'text-secondary font-bold' : 'text-on-surface-variant hover:text-secondary'
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <Link 
            href="/contact" 
            onClick={() => setMobileMenuOpen(false)} 
            className="mt-8 h-[56px] px-[30px] text-[#0A0A0A] font-bold rounded-full flex items-center justify-center gap-2 hover:brightness-105 active:scale-95 transition-all duration-300"
            style={{
              background: 'linear-gradient(to right, #D4AF37, #E8C85A)',
              boxShadow: '0 0 25px rgba(212,175,55,0.25)',
              letterSpacing: '0.04em'
            }}
          >
            ENGAGE NOW
          </Link>
        </div>
      </div>
    </>
  );
}
