import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import AnimatedBackground from "@/components/AnimatedBackground";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio | Sambhav Mani Tripathi",
  description: "Portfolio showcasing my experience, projects, and tech stack",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/favicon_portfolio.png",
        type: "image/png",
      },
    ],
    apple: "/favicon_portfolio.png",
    shortcut: "/favicon_portfolio.png",
    other: [
      {
        url: "/favicon_portfolio.png",
        type: "image/png",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} antialiased`}>
        <AnimatedBackground />
        <div className="fixed inset-0 bg-white/5 pointer-events-none z-1" />
        {children}
      </body>
    </html>
  );
}
