import React from 'react';
import Image from 'next/image';

export interface TimelineItem {
  date: string;
  title: string;
  subtitle?: string;
  description: string;
  imageSrc?: string;
  imageAlt?: string;
}

interface TimelineProps {
  items: TimelineItem[];
  className?: string;
}

export default function Timeline({ items, className = '' }: TimelineProps) {
  return (
    <div className={`relative max-w-4xl mx-auto ${className}`}>
      {/* Central line on larger screens */}
      <div className="absolute left-[23px] md:left-1/2 transform md:-translate-x-1/2 h-full w-px bg-gradient-to-b from-secondary/0 via-secondary/40 to-secondary/0"></div>
      
      <div className="space-y-12">
        {items.map((item, idx) => {
          const isEven = idx % 2 === 0;
          return (
            <div 
              key={idx} 
              className={`flex flex-col md:flex-row items-start md:items-center justify-between gap-6 md:gap-0 relative ${
                isEven ? '' : 'md:flex-row-reverse'
              }`}
            >
              {/* Content block left or right */}
              <div className={`w-full md:w-5/12 pl-12 md:pl-0 ${isEven ? 'md:text-right' : 'md:text-left'}`}>
                <span className="font-label-sm text-secondary uppercase tracking-widest mb-1 block">
                  {item.date}
                </span>
                <h3 className="font-headline-md text-on-background leading-tight mb-1">
                  {item.title}
                </h3>
                {item.subtitle && (
                  <p className="text-on-surface-variant text-sm mb-2 font-medium">{item.subtitle}</p>
                )}
                {!item.imageSrc && (
                  <p className="text-on-surface-variant/80 font-body-md leading-relaxed">
                    {item.description}
                  </p>
                )}
              </div>

              {/* Marker dot */}
              <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 z-10 w-12 h-12 rounded-full glass-02 border border-secondary flex items-center justify-center bg-surface">
                <span className="text-secondary font-bold text-sm">
                  {item.date.slice(-2)}
                </span>
              </div>

              {/* Card / Image block opposite to the content */}
              <div className={`w-full md:w-5/12 pl-12 md:pl-0`}>
                <div className="bg-surface-container-low p-6 rounded-2xl border border-outline-variant/10 hover:border-secondary/20 transition-all duration-300 shadow-xl">
                  {item.imageSrc ? (
                    <div className="space-y-4">
                      <p className="text-on-surface-variant/80 font-body-md leading-relaxed italic">
                        "{item.description}"
                      </p>
                      <div className="relative w-full h-40 overflow-hidden rounded-xl">
                        <Image
                          src={item.imageSrc}
                          alt={item.imageAlt || item.title}
                          fill
                          sizes="(max-width: 768px) 100vw, 33vw"
                          className="object-cover transition-transform duration-500 hover:scale-105"
                        />
                      </div>
                    </div>
                  ) : (
                    <p className="text-on-surface-variant/70 text-sm leading-relaxed">
                      Detailed archives record this milestone as a pivotal phase in the expansion of EJTheVoice's reach.
                    </p>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
