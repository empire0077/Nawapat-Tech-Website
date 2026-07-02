import type { Metadata } from 'next';
import { Geist, Anuphan } from 'next/font/google';
import './globals.css';

const geist = Geist({
  subsets: ['latin'],
  variable: '--font-geist',
  display: 'swap',
});

const anuphan = Anuphan({
  subsets: ['thai', 'latin'],
  variable: '--font-anuphan',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Nawapat Thamchob | Enterprise Architect',
  description: 'Enterprise Architecture & Strategy by Nawapat Thamchob',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`${geist.variable} ${anuphan.variable}`}>
      <body className="antialiased font-sans text-onyx bg-white selection:bg-navy selection:text-white leading-relaxed" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
