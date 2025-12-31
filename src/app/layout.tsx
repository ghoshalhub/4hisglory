import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "4HISGLORY - Faith • Purpose • Impact",
  description: "4HISGLORY is a Christ-centered brand created to inspire people to walk in faith, purpose, and love through jewelry, entertainment, and community outreach across the Inland Empire and beyond.",
  keywords: ["4HISGLORY", "faith-based brand", "Christian jewelry", "faith jewelry", "Christian entertainment", "community giveaways", "Inland Empire", "California", "faith outreach", "Christ-centered"],
  icons: {
    icon: "/img/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
