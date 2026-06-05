import React from 'react';
import Link from 'next/link';

interface CTAButtonProps {
  label: string;
  href?: string;
  onClick?: () => void;
  variant?: 'solid' | 'outline' | 'deep';
  className?: string;
}

export default function CTAButton({
  label,
  href,
  onClick,
  variant = 'solid',
  className = ''
}: CTAButtonProps) {
  let baseClass = 'px-8 py-4 font-bold rounded transition-all duration-300 transform active:scale-95 text-center shadow-lg';
  let variantClass = '';

  switch (variant) {
    case 'solid':
      variantClass = 'bg-secondary text-on-secondary hover:brightness-110 hover:-translate-y-0.5 shadow-secondary/10';
      break;
    case 'outline':
      variantClass = 'border border-secondary/40 text-secondary hover:bg-secondary/10 hover:-translate-y-0.5';
      break;
    case 'deep':
      variantClass = 'bg-primary-container text-on-primary-container hover:bg-primary-container/80 hover:-translate-y-0.5';
      break;
  }

  const combinedClasses = `${baseClass} ${variantClass} ${className}`;

  if (href) {
    return (
      <Link href={href} className={combinedClasses}>
        {label}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={combinedClasses}>
      {label}
    </button>
  );
}
