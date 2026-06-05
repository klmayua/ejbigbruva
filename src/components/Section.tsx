import React from 'react';

interface SectionProps {
  children: React.ReactNode;
  bg?: 'surface' | 'lowest' | 'low' | 'container' | 'transparent';
  className?: string;
  id?: string;
  breathe?: boolean; // If true, adds extra breathing vertical padding
}

export default function Section({
  children,
  bg = 'surface',
  className = '',
  id,
  breathe = true
}: SectionProps) {
  let bgClass = 'bg-surface';
  switch (bg) {
    case 'lowest':
      bgClass = 'bg-surface-container-lowest';
      break;
    case 'low':
      bgClass = 'bg-surface-container-low';
      break;
    case 'container':
      bgClass = 'bg-surface-container';
      break;
    case 'transparent':
      bgClass = 'bg-transparent';
      break;
  }

  const paddingClass = breathe ? 'py-32 md:py-40 px-margin-mobile md:px-margin-desktop' : 'py-20 md:py-24 px-margin-mobile md:px-margin-desktop';

  return (
    <section 
      id={id}
      className={`w-full relative overflow-hidden ${bgClass} ${paddingClass} ${className}`}
    >
      <div className="max-w-container-max mx-auto w-full">
        {children}
      </div>
    </section>
  );
}
