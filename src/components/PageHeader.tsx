import React from 'react';

interface PageHeaderProps {
  title: string | React.ReactNode;
  subtitle?: string;
  description?: string;
  className?: string;
}

export default function PageHeader({
  title,
  subtitle,
  description,
  className = ''
}: PageHeaderProps) {
  return (
    <div className={`text-center max-w-3xl mx-auto mb-20 md:mb-24 reveal ${className}`}>
      {subtitle && (
        <span className="font-label-md text-secondary uppercase tracking-[0.3em] mb-4 block">
          {subtitle}
        </span>
      )}
      
      {typeof title === 'string' ? (
        <h1 className="font-serif text-display-lg-mobile md:text-display-lg text-on-background mb-6 leading-tight">
          {title}
        </h1>
      ) : (
        <div className="mb-6">{title}</div>
      )}

      {/* Luxury editorial divider line */}
      <div className="h-[1px] w-24 bg-gradient-to-r from-secondary/0 via-secondary/60 to-secondary/0 mx-auto mb-8"></div>

      {description && (
        <p className="font-body-lg text-on-surface-variant max-w-xl mx-auto leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}
