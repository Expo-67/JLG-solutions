import type { Metadata } from "next";
import { Roboto } from 'next/font/google';
import "./globals.css";


const roboto = Roboto({ subsets: ['latin'], weight: '400' });

const geistSans = Roboto({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-geist-sans',
});

export const metadata: Metadata = {
  title: "JLG solutions ",
  description: "JLG Solutions delivers technology built for real people and real needs.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.className} ${geistSans.variable}`}>
        {children}
      </body>
    </html>
  );
}
