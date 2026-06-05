export interface NavLink {
  href: string;
  label: string;
}

export const navLinks: NavLink[] = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/legacy', label: 'Legacy' },
  { href: '/media', label: 'Media' },
  { href: '/voice', label: 'Voice' },
  { href: '/events', label: 'Events' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/community', label: 'Community' },
  { href: '/press', label: 'Press' },
  { href: '/contact', label: 'Contact' }
];
