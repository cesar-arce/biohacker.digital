import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/lib/i18n/routing';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import NewsletterFloat from '@/components/layout/NewsletterFloat';
import '../globals.css';

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] });
const geistMono = Geist_Mono({ variable: '--font-geist-mono', subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: "The Biohacker's Guide",
    template: "%s | The Biohacker's Guide",
  },
  description: 'Science-backed guides to optimize sleep, nutrition, performance, and longevity.',
  openGraph: {
    siteName: "The Biohacker's Guide",
    type: 'website',
    url: 'https://biohacker.digital',
  },
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as typeof routing.locales[number])) {
    notFound();
  }

  setRequestLocale(locale);
  const messages = await getMessages({ locale });

  return (
    <html lang={locale} className="dark" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-zinc-950 text-zinc-50`}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Navbar />
          <main className="pt-16">{children}</main>
          <Footer />
          <NewsletterFloat />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
