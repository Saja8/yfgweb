import type { Metadata } from 'next';
import './globals.css';
import Header from '@app/components/Layout/Header';
import Footer from '@app/components/Layout/Footer';

export const metadata: Metadata = {
  title: 'IFToMM Young Faculty Group | Events',
  description:
    'Events platform of the IFToMM Young Faculty Group: symposia, conferences, summer schools, and winter schools in Mechanism and Machine Science.',
  icons: { icon: '/favicon.svg' },
};

export const revalidate = 0;

const themeInitScript = `
(() => {
  try {
    const key = 'yfg-theme-mode';
    const saved = localStorage.getItem(key) || 'system';
    const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const resolved = saved === 'system' ? (systemDark ? 'dark' : 'light') : saved;
    document.documentElement.classList.toggle('dark', resolved === 'dark');
    document.documentElement.style.colorScheme = resolved;
    document.documentElement.setAttribute('data-theme-mode', saved);
  } catch (_) {}
})();
`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="color-scheme" content="light dark" />
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className="bg-zinc-50 text-zinc-950 dark:bg-zinc-950 dark:text-zinc-100">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-white focus:px-3 focus:py-2 focus:text-black focus:shadow-lg dark:focus:bg-zinc-900 dark:focus:text-white"
        >
          Skip to main content
        </a>
        <Header />
        <main id="main-content" className="min-h-[600px]">
          {children}
        </main>
        <div className="mt-10 sm:mt-20">
          <Footer />
        </div>
      </body>
    </html>
  );
}
