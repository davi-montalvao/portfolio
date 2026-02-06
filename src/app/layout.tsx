import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { cookies, headers } from 'next/headers';
import './globals.css';
import { Analytics } from '@vercel/analytics/react';
import { LanguageProvider } from '@/contexts/LanguageContext';
import type { Locale } from '@/i18n';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Davi Montalvão - Front-end Developer & Portfolio',
  description:
    'Portfólio profissional de Davi Montalvão, desenvolvedor front-end com 18+ anos de experiência em tecnologia. Especializado em React, TypeScript, Next.js e desenvolvimento web moderno.',
  keywords: [
    'Davi Montalvão',
    'Front-end Developer',
    'React Developer',
    'TypeScript',
    'Next.js',
    'Portfolio',
    'Desenvolvedor Web',
    'São Paulo',
    'Brasil',
  ],
  authors: [{ name: 'Davi Montalvão' }],
  creator: 'Davi Montalvão',
  publisher: 'Davi Montalvão',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://www.davimontalvao.com.br'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Davi Montalvão - Front-end Developer & Portfolio',
    description:
      'Portfólio profissional de Davi Montalvão, desenvolvedor front-end com 18+ anos de experiência em tecnologia.',
    url: 'https://www.davimontalvao.com.br',
    siteName: 'Davi Montalvão Portfolio',
    images: [
      {
        url: '/foto-perfil.jpg',
        width: 1200,
        height: 630,
        alt: 'Davi Montalvão - Front-end Developer',
      },
    ],
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Davi Montalvão - Front-end Developer & Portfolio',
    description:
      'Portfólio profissional de Davi Montalvão, desenvolvedor front-end com 18+ anos de experiência em tecnologia.',
    images: ['/foto-perfil.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const cookieStore = await cookies();
  const headerList = await headers();
  const localeCookie = cookieStore.get('locale')?.value as Locale | undefined;
  let country = headerList.get('x-vercel-ip-country')?.toUpperCase();
  if (!country && process.env.NODE_ENV === 'development') {
    country = cookieStore.get('test-country')?.value?.toUpperCase() ?? undefined;
  }

  const initialLocale: Locale =
    localeCookie === 'pt' || localeCookie === 'en'
      ? localeCookie
      : country && country !== 'BR'
        ? 'en'
        : 'pt';

  return (
    <html lang={initialLocale === 'en' ? 'en' : 'pt-BR'} className={`${inter.variable} dark`}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/foto-perfil.jpg" />
        <meta name="theme-color" content="#0a0a0a" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=5"
        />
        <meta name="author" content="Davi Montalvão" />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />

        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'Davi Montalvão',
              jobTitle: 'Front-end Developer',
              description:
                'Desenvolvedor front-end com 18+ anos de experiência em tecnologia',
              url: 'https://www.davimontalvao.com.br',
              sameAs: [
                'https://github.com/davi-montalvao',
                'https://www.linkedin.com/in/davi-montalvao-dev/',
              ],
              worksFor: {
                '@type': 'Organization',
                name: 'TalentFour Consulting',
              },
              knowsAbout: [
                'React',
                'TypeScript',
                'Next.js',
                'JavaScript',
                'Front-end Development',
                'Web Development',
              ],
            }),
          }}
        />
      </head>
      <body
        className={`${inter.className} bg-[#121214] text-slate-50 antialiased`}
      >
        <LanguageProvider initialLocale={initialLocale}>{children}</LanguageProvider>
        <Analytics />
      </body>
    </html>
  );
}
