import type { Metadata } from 'next';
import { Nunito } from 'next/font/google';
import './globals.css';
import Providers from './providers'; // ← added

const nunito = Nunito({
  variable: '--font-nunito',
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700', '800', '900'],
});

export const metadata: Metadata = {
  title: 'Restaurant App',
  description: 'Restaurant ordering app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${nunito.variable} antialiased`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
