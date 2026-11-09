import { Archivo, Space_Grotesk, Hind_Siliguri } from 'next/font/google';
import './globals.css';

const sans = Space_Grotesk({ subsets: ['latin'], variable: '--font-sans', display: 'swap' });
const display = Archivo({ subsets: ['latin'], axes: ['wdth'], variable: '--font-display', display: 'swap' });
const bangla = Hind_Siliguri({
  subsets: ['bengali'],
  weight: ['500'],
  variable: '--font-bangla',
  display: 'swap',
});

const description =
  'Web developer from Chattogram, Bangladesh. I build fast, clean websites with React and Next.js, and design the banners, posters and promo videos that go on them.';

export const metadata = {
  title: 'Muhammad Sami | Web Developer, Chattogram',
  description,
  openGraph: {
    title: 'Muhammad Sami | Web Developer',
    description,
    type: 'website',
    images: ['/work/shosthy.webp'],
  },
};

export const viewport = {
  themeColor: '#F6F3EC',
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${sans.variable} ${display.variable} ${bangla.variable}`}
      suppressHydrationWarning
    >
      <head>
        {/* Lets scroll reveals start hidden only when JS is running, so content never disappears without it. */}
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
