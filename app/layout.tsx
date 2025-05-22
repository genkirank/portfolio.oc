import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Raphael Luis | Développeur Front-End',
  description: "Portfolio de Raphael Luis – Développeur front-end spécialisé en React, TypeScript et UI moderne. Découvrez mes projets et mon approche centrée sur l'expérience utilisateur.",
  authors: [{ name: 'Raphael Luis', url: 'https://genkirank.github.io' }],
  openGraph: {
    title: 'Raphael Luis | Développeur Front-End',
    description: "Portfolio de Raphael Luis – Projets React, Next.js, design moderne et performance.",
    url: 'https://genkirank.github.io',
    siteName: 'Raphael Luis – Portfolio',
    images: [
      {
        url: '/opengraph-preview.png',
        width: 1200,
        height: 630,
        alt: 'Aperçu du portfolio Raphael Luis',
      },
    ],
    locale: 'fr_FR',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
  themeColor: '#ffffff',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
