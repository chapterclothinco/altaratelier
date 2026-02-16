import { Inter, Cormorant_Garamond } from 'next/font/google';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Particles from '@/components/Particles';
import ScrollAnimations from '@/components/ScrollAnimations';
import SmoothScroll from '@/components/SmoothScroll';
import '@/styles/globals.css';

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-inter',
  display: 'swap',
});

const cormorantGaramond = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant-garamond',
  display: 'swap',
});

export const metadata = {
  title: {
    default: 'Altar Atelier | Custom Bridal Apparel for Moments Worth Keeping',
    template: '%s | Altar Atelier',
  },
  description: 'Custom silk robes, coordinated bridesmaid sets, and heirloom-quality pieces designed around your vision. From getting ready to going away.',
  metadataBase: new URL('https://altaratelier.com'),
  openGraph: {
    title: 'Altar Atelier | Custom Bridal Apparel for Moments Worth Keeping',
    description: 'Custom silk robes, coordinated bridesmaid sets, and heirloom-quality pieces designed around your vision. From getting ready to going away.',
    url: 'https://altaratelier.com',
    siteName: 'Altar Atelier',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
  },
  icons: {
    icon: '/assets/Logos/AltarAtelier.svg',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${cormorantGaramond.variable}`}>
      <body>
        <Particles />
        <Navbar />
        {children}
        <Footer />
        <ScrollAnimations />
        <SmoothScroll />
      </body>
    </html>
  );
}
