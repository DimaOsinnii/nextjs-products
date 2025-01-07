import { ReactNode } from 'react';
import type { Metadata } from 'next';

import { Geist, Geist_Mono } from 'next/font/google';

import Header from '@/components/header';
import Footer from '@/components/footer';

import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

//Mocked data for dev
export const metadata: Metadata = {
  metadataBase: new URL('https://techcart.io'),
  title: 'TechCart - Handpicked Tech Products for Everyday Life',
  description:
    'Explore a curated selection of tech gadgets, tools, and accessories. Find the perfect tech products for work, play, and everything in between.',
  openGraph: {
    title: 'TechCart - Your Go-To Tech Shop',
    description:
      'Discover a world of technology at TechCart. From cutting-edge gadgets to everyday tech essentials, find everything you need in one place.',
    url: 'https://techcart.io',
    siteName: 'TechCart',
    images: [
      {
        url: 'https://techcart.io/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'TechCart - Curated Tech Products',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    site: '@techcartio',
    card: 'summary_large_image',
    title: 'TechCart - Handpicked Tech Products',
    description:
      'Shop the latest gadgets and tech essentials with TechCart. Curated products, great prices, and unbeatable quality.',
    images: [
      {
        url: 'https://techcart.io/twitter-card.jpg',
        alt: 'TechCart - Shop Technology Products',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
