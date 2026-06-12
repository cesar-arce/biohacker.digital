import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';

export default function Footer() {
  const t = useTranslations('footer');
  const tNav = useTranslations('nav');
  const locale = useLocale();

  return (
    <footer className="border-t border-zinc-800 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-8 h-8 rounded-lg bg-green-400 flex items-center justify-center">
                <span className="text-zinc-950 font-black text-sm">BH</span>
              </span>
              <span className="font-bold text-white">
                Biohacker<span className="text-green-400">.digital</span>
              </span>
            </div>
            <p className="text-zinc-500 text-sm max-w-xs">{t('tagline')}</p>
            {/* Social icons */}
            <div className="flex gap-3 mt-4">
              {[
                { label: 'Facebook', href: 'https://www.facebook.com/profile.php?id=61578928162037', icon: 'M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z' },
                { label: 'Instagram', href: 'https://www.instagram.com/cesararceauthor/', icon: 'M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01M6.5 19.5h11a3 3 0 003-3v-11a3 3 0 00-3-3h-11a3 3 0 00-3 3v11a3 3 0 003 3z' },
                { label: 'LinkedIn', href: 'https://www.linkedin.com/in/cesar-arce-70167713/', icon: 'M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z M4 6a2 2 0 100-4 2 2 0 000 4z' },
                { label: 'Linktree', href: 'https://linktr.ee/cesararceauthor', icon: 'M10 3L8 7H4l3.5 2.5L6 14l4-2.5L14 14l-1.5-4.5L16 7h-4L10 3z M10 14v4' },
                { label: 'Spotify', href: 'https://open.spotify.com/show/3yjeOceJndIMNIQQN6IR9s?si=19274c75e8194a4c', icon: 'M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm4.586 14.424a.622.622 0 01-.857.207c-2.348-1.435-5.304-1.76-8.785-.964a.622.622 0 11-.277-1.215c3.809-.87 7.076-.496 9.712 1.115a.623.623 0 01.207.857zm1.223-2.722a.78.78 0 01-1.072.257c-2.687-1.652-6.785-2.131-9.965-1.166a.78.78 0 01-.973-.519.781.781 0 01.52-.973c3.632-1.102 8.147-.568 11.233 1.329a.78.78 0 01.257 1.072zm.105-2.835C14.692 8.95 9.375 8.775 6.297 9.71a.937.937 0 11-.543-1.794c3.527-1.07 9.393-.862 13.097 1.332a.937.937 0 01-.937 1.619z' },
                { label: 'YouTube', href: 'https://www.youtube.com/channel/UC7X6mnm70emL3ZibIFrzi_A', icon: 'M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 001.46 6.42 29 29 0 001 12a29 29 0 00.46 5.58A2.78 2.78 0 003.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 001.95-1.95A29 29 0 0023 12a29 29 0 00-.46-5.58zM9.75 15.02V8.98L15.5 12l-5.75 3.02z' },
                { label: 'Amazon', href: 'https://www.amazon.com/stores/C%C3%89SAR-ARCE/author/B0DJTPVK2J', icon: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.99 13.52c-.14.1-.34.06-.46-.07-1.28-1.56-3.18-1.98-5.28-1.08-.18.08-.38 0-.46-.18-.08-.18 0-.38.18-.46 2.36-1.02 4.52-.54 6.02 1.28.12.14.08.36-.07.46l.07.05zm.67-1.49c-.16.12-.4.08-.52-.08-1.46-1.8-3.7-2.32-5.44-1.27-.2.12-.46.06-.58-.14s-.06-.46.14-.58c2.04-1.24 4.58-.66 6.32 1.42.12.16.08.4-.08.52l.16.13zm.06-1.55c-1.74-2.06-4.62-2.26-6.26-1.24-.24.14-.54.06-.68-.18-.14-.24-.06-.54.18-.68 1.98-1.18 5.28-.96 7.34 1.42.18.2.14.52-.06.68-.2.18-.52.14-.68-.06l.16.06z' },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-9 h-9 rounded-lg border border-zinc-800 flex items-center justify-center text-zinc-500 hover:border-green-400 hover:text-green-400 transition-colors"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={s.icon} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-4 uppercase tracking-widest">Navigate</h3>
            <ul className="space-y-2">
              {[
                { href: `/${locale}/books`, label: tNav('books') },
                { href: `/${locale}/products`, label: tNav('products') },
                { href: `/${locale}/blog`, label: tNav('blog') },
                { href: `/${locale}/community`, label: tNav('community') },
                { href: `/${locale}/resources`, label: tNav('resources') },
                { href: `/${locale}/about`, label: tNav('about') },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-zinc-500 hover:text-green-400 text-sm transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-4 uppercase tracking-widest">Legal</h3>
            <ul className="space-y-2">
              <li><Link href={`/${locale}/privacy`} className="text-zinc-500 hover:text-green-400 text-sm transition-colors">{t('privacy')}</Link></li>
              <li><Link href={`/${locale}/terms`} className="text-zinc-500 hover:text-green-400 text-sm transition-colors">{t('terms')}</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-zinc-600 text-xs">
            © {new Date().getFullYear()} The Biohacker&apos;s Guide. {t('rights')}
          </p>
          <p className="text-zinc-700 text-xs">
            Amazon links are affiliate links.
          </p>
        </div>
      </div>
    </footer>
  );
}
