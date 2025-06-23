import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from '@vercel/analytics/react';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kenku 2.0 – AI-Powered Grappling Insights",
  description: "Join the waitlist for Kenku 2.0 – the AI-powered notebook for grappling athletes. Smarter training, semantic search, and actionable analytics.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <title>Kenku 2.0 – AI-Powered Grappling Insights</title>
        <meta name="description" content="Join the waitlist for Kenku 2.0 – the AI-powered notebook for grappling athletes. Smarter training, semantic search, and actionable analytics." />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
