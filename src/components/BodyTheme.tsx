"use client";

import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

export default function BodyTheme() {
  const pathname = usePathname();

  useEffect(() => {
    let bgClass = 'bg-[#121413]'; // Default base background

    if (
      pathname === '/about' ||
      pathname === '/voice' ||
      pathname === '/legacy' ||
      pathname === '/media' ||
      pathname === '/press' ||
      pathname === '/press_original' ||
      pathname === '/ejs-circle' ||
      pathname === '/events' ||
      pathname === '/blog'
    ) {
      bgClass = 'bg-[#0c0f0e]';
    } else if (
      pathname === '/contact' ||
      pathname === '/contact_original' ||
      pathname === '/gallery' ||
      pathname === '/dashboard' ||
      pathname === '/podcast'
    ) {
      bgClass = 'bg-[#041635]';
    }

    const body = document.body;
    if (body) {
      // Remove existing background classes
      body.classList.remove('bg-[#121413]', 'bg-[#0c0f0e]', 'bg-[#041635]', 'bg-background');
      body.classList.add(bgClass);
    }
  }, [pathname]);

  return null;
}
