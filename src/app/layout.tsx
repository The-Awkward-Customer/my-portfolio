import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import "./_variables.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Peter Abbott",
  description: "A portfolio by me for you ❤️",
};

/* eslint-disable */
const civilPremium = localFont ({
  src: [
    {
      path: '../../public/fonts/CivilPremium-Bold.otf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../../public/fonts/CivilPremium-SemiBold.otf',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../../public/fonts/CivilPremium-Regular.otf',
      weight: '400',
      style: 'normal',
    }
  ],
  variable: '--civil-premium'
})

/* eslint-disable */
const silkaMono = localFont ({
  src: [
    {
      path: '../../public/fonts/SilkaMono-Regular.otf',
      weight: '700',
      style: 'normal',
    }
  ],
  variable: '--silka-mono'
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${civilPremium.variable} ${silkaMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
