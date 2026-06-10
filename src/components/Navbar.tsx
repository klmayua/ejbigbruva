"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const MOBILE_NAV_ITEMS = [
  { label: 'Home', href: '/', icon: 'home' },
  { label: 'Media', href: '/media', icon: 'movie' },
  { label: 'Events', href: '/events', icon: 'event' },
  { label: 'Contact', href: '/contact', icon: 'mail' },
  { label: 'More', href: '#', icon: 'more_horiz' },
];

const MORE_ITEMS = [
  { label: 'About', href: '/about', icon: 'info' },
  { label: 'Legacy', href: '/legacy', icon: 'account_balance' },
  { label: 'Gallery', href: '/gallery', icon: 'image' },
  { label: 'Voice', href: '/voice', icon: 'mic' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isMoreOpen, setIsMoreOpen] = useState(false);

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
      {/* Approved Desktop Navbar (md and up) - Do Not Modify */}
      <nav 
        className="hidden md:flex fixed top-[20px] left-1/2 -translate-x-1/2 z-[100] w-[90%] max-w-[1120px] h-[72px] rounded-full justify-between items-center px-4 transition-all duration-300"
        style={{
          backgroundColor: 'rgba(8,8,8,0.85)',
          backdropFilter: 'blur(24px)',
          WebkitBackdropFilter: 'blur(24px)',
          border: '1px solid rgba(212,175,55,0.22)',
          boxShadow: '0 0 40px rgba(212,175,55,0.08), inset 0 1px 0 rgba(255,255,255,0.04)'
        }}
      >
        <div className="flex items-center pl-[28px]">
          <Link href="/">
            <img 
              alt="EJTheVoice Logo" 
              className="w-[68px] h-auto object-contain cursor-pointer" 
              src="/images/EjTheVoice_logo.png"
            />
          </Link>
        </div>

        <div className="absolute left-1/2 -translate-x-1/2 flex items-center gap-[32px]">
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

        <div className="flex items-center pr-[14px]">
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

      {/* Mobile Top Bar (Mobile Only) */}
      <nav 
        className="flex md:hidden fixed top-[10px] left-1/2 -translate-x-1/2 z-[100] w-[92%] h-[48px] rounded-[16px] justify-between items-center px-4 transition-all duration-300"
        style={{
          backgroundColor: 'rgba(8,8,8,0.85)',
          backdropFilter: 'blur(24px)',
          WebkitBackdropFilter: 'blur(24px)',
          border: '1px solid rgba(212,175,55,0.22)',
          boxShadow: '0 0 40px rgba(212,175,55,0.08), inset 0 1px 0 rgba(255,255,255,0.04)'
        }}
      >
        <Link href="/" style={{ minWidth: '44px', minHeight: '44px', display: 'flex', alignItems: 'center' }}>
          <img 
            alt="EJTheVoice Logo" 
            className="w-[42px] h-auto object-contain cursor-pointer" 
            src="/images/EjTheVoice_logo.png"
          />
        </Link>

        <Link 
          href="/contact" 
          className="h-[32px] px-[12px] text-[#0A0A0A] font-bold rounded-full flex items-center justify-center gap-1 hover:brightness-105 active:scale-95 transition-all duration-300 text-[10px] relative before:absolute before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:w-[calc(100%+16px)] before:h-[44px] before:content-['']"
          style={{
            background: 'linear-gradient(to right, #D4AF37, #E8C85A)',
            boxShadow: '0 0 15px rgba(212,175,55,0.15)',
            letterSpacing: '0.04em',
            minHeight: '32px'
          }}
        >
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
          </svg>
          ENGAGE NOW
        </Link>
      </nav>

      {/* Mobile Bottom Navigation (Mobile Only) */}
      <nav 
        className="flex md:hidden fixed bottom-0 left-0 right-0 z-[100] w-full bg-[#080808]/90 border-t border-secondary/20 transition-all duration-300"
        style={{
          paddingBottom: 'env(safe-area-inset-bottom)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
        }}
      >
        <div className="flex w-full justify-around items-center h-[56px] px-2">
          {MOBILE_NAV_ITEMS.map((item) => {
            const isActive = pathname === item.href;
            const isMore = item.label === 'More';

            return (
              <Link 
                key={item.label}
                href={item.href}
                onClick={(e) => {
                  if (isMore) {
                    e.preventDefault();
                    setIsMoreOpen(true);
                  }
                }}
                className={`flex-1 flex flex-col items-center justify-center h-full transition-all duration-300 ${
                  isActive ? 'text-secondary' : 'text-on-surface-variant hover:text-secondary'
                }`}
                style={{
                  minHeight: '44px',
                  minWidth: '44px'
                }}
              >
                <span className="material-symbols-outlined select-none text-[22px] mb-0.5">
                  {item.icon}
                </span>
                <span className="text-[10px] font-semibold uppercase tracking-wider text-center">
                  {item.label}
                </span>
              </Link>
            );
          })}
        </div>
      </nav>

      {/* More Bottom Sheet (Mobile Only) */}
      {isMoreOpen && (
        <div 
          className="fixed inset-0 z-[110] md:hidden"
          onClick={() => setIsMoreOpen(false)}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/70 backdrop-blur-xs transition-opacity duration-300" />
          
          {/* Sheet Container */}
          <div 
            className="absolute bottom-0 left-0 right-0 bg-[#0E0E0E] rounded-t-[24px] border-t border-secondary/30 p-6 pb-[calc(24px+env(safe-area-inset-bottom))] transform transition-transform duration-300 ease-out"
            style={{
              maxHeight: '80vh',
              overflowY: 'auto'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Grab Handle */}
            <div className="w-12 h-1 bg-white/20 rounded-full mx-auto mb-6" />
            
            <div className="flex justify-between items-center mb-6">
              <h3 className="font-sans font-bold text-[18px] text-secondary uppercase tracking-widest">More Navigation</h3>
              <button 
                onClick={() => setIsMoreOpen(false)}
                className="p-1.5 bg-white/5 hover:bg-white/10 rounded-full text-on-surface-variant transition-colors flex items-center justify-center"
                style={{ minWidth: '44px', minHeight: '44px' }}
              >
                <span className="material-symbols-outlined text-[20px]">close</span>
              </button>
            </div>

            <div className="grid grid-cols-1 gap-3">
              {MORE_ITEMS.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link 
                    key={item.label}
                    href={item.href}
                    onClick={() => setIsMoreOpen(false)}
                    className={`flex items-center justify-between p-4 rounded-xl transition-all duration-300 ${
                      isActive 
                        ? 'bg-secondary/15 text-secondary border border-secondary/20' 
                        : 'bg-white/5 text-on-surface-variant hover:bg-white/10'
                    }`}
                    style={{ minHeight: '44px' }}
                  >
                    <div className="flex items-center gap-4">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                        isActive ? 'bg-secondary text-on-secondary' : 'bg-white/5 text-secondary'
                      }`}>
                        <span className="material-symbols-outlined text-[18px] flex items-center justify-center">
                          {item.icon}
                        </span>
                      </div>
                      <span className="font-sans text-[14px] font-semibold uppercase tracking-wider">{item.label}</span>
                    </div>
                    <span className="material-symbols-outlined opacity-50 text-[18px]">chevron_right</span>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
