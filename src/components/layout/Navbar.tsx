'use client';

import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import LanguageSwitcher from './LanguageSwitcher';
import UserMenu from '@/components/auth/UserMenu';

export default function Navbar() {
  const t = useTranslations('nav');
  const locale = useLocale();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { href: `/${locale}`, label: t('home') },
    { href: `/${locale}/books`, label: t('books') },
    { href: `/${locale}/products`, label: t('products') },
    { href: `/${locale}/blog`, label: t('blog') },
    { href: `/${locale}/community`, label: t('community') },
    { href: `/${locale}/resources`, label: t('resources') },
    { href: `/${locale}/about`, label: t('about') },
  ];

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-zinc-950/90 backdrop-blur-md border-b border-zinc-800' : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href={`/${locale}`} className="flex items-center gap-2 group">
          <span className="w-8 h-8 rounded-lg bg-green-400 flex items-center justify-center">
            <span className="text-zinc-950 font-black text-sm">BH</span>
          </span>
          <span className="font-bold text-white hidden sm:block group-hover:text-green-400 transition-colors">
            Biohacker<span className="text-green-400">.digital</span>
          </span>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-1">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="px-3 py-2 text-sm text-zinc-400 hover:text-white hover:bg-zinc-800 rounded-md transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Right side */}
        <div className="flex items-center gap-3">
          <LanguageSwitcher />
          <UserMenu />
          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 text-zinc-400 hover:text-white"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen
                ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              }
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-zinc-900 border-t border-zinc-800 px-4 py-3 flex flex-col gap-1">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="px-3 py-2.5 text-sm text-zinc-300 hover:text-white hover:bg-zinc-800 rounded-md transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
