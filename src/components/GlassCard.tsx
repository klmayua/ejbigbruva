import React from 'react';

interface GlassCardProps {
  children: React.ReactNode;
  variant?: '01' | '02' | '03' | 'premium';
  className?: string;
  onClick?: () => void;
}

export default function GlassCard({
  children,
  variant = '01',
  className = '',
  onClick
}: GlassCardProps) {
  let glassClass = '';
  switch (variant) {
    case '01':
      glassClass = 'glass-01';
      break;
    case '02':
      glassClass = 'glass-02';
      break;
    case '03':
      glassClass = 'glass-03';
      break;
    case 'premium':
      glassClass = 'glass-premium';
      break;
  }

  return (
    <div
      onClick={onClick}
      className={`rounded-2xl border transition-all duration-300 ${glassClass} ${className} ${
        onClick ? 'cursor-pointer hover:border-secondary/35 active:scale-[0.99]' : ''
      }`}
    >
      {children}
    </div>
  );
}
