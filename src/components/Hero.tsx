import React from 'react';
import Image from 'next/image';

interface HeroProps {
  title: string | React.ReactNode;
  subtitle?: string;
  description?: string;
  imageSrc: string;
  imageAlt?: string;
  focalPoint?: string; // e.g. "center 25%" or "center top"
  ctas?: React.ReactNode;
  verticalText?: string;
  className?: string;
}

export default function Hero({
  title,
  subtitle,
  description,
  imageSrc,
  imageAlt = 'EJTheVoice Hero image',
  focalPoint = 'center 20%', // Default focal point to avoid cropping faces
  ctas,
  verticalText = 'EJIKE EBIDILO • SINCE 1978',
  className = ''
}: HeroProps) {
  return (
    <section className={`relative min-h-[90vh] flex items-center overflow-hidden w-full ${className}`}>
      {/* Background Image Container with type guard for Parallax */}
      <div className="absolute inset-0 z-0">
        <Image 
          src={imageSrc} 
          alt={imageAlt}
          fill
          sizes="100vw"
          className="object-cover hero-image"
          style={{ objectPosition: focalPoint }}
          priority
        />
        <div className="absolute inset-0 hero-gradient"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 px-margin-mobile md:px-margin-desktop max-w-4xl py-20 w-full max-w-container-max mx-auto">
        <div id="hero-content" className="max-w-2xl">
          {subtitle && (
            <span className="font-label-md text-secondary tracking-[0.2em] uppercase mb-6 block">
              {subtitle}
            </span>
          )}
          
          {typeof title === 'string' ? (
            <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-on-background mb-8 leading-tight">
              {title}
            </h1>
          ) : (
            <div className="mb-8">{title}</div>
          )}

          {description && (
            <p className="font-body-lg text-body-lg text-on-surface-variant/90 max-w-xl mb-12 leading-relaxed">
              {description}
            </p>
          )}

          {ctas && <div className="flex flex-wrap gap-6">{ctas}</div>}
        </div>
      </div>

      {/* Vertical Branding Text */}
      {verticalText && (
        <div className="absolute right-margin-desktop bottom-1/4 hidden xl:block z-10">
          <div className="vertical-text font-label-sm text-secondary/40 tracking-[0.6em] uppercase pointer-events-none select-none">
            {verticalText}
          </div>
        </div>
      )}
    </section>
  );
}
