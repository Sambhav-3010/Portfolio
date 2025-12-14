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
  metadataBase: new URL("https://sambhav-portfolio.vercel.app"),
  title: {
    default: "Sambhav's Portfolio",
    template: "%s | Sambhav's Portfolio",
  },
  description: "Computer Engineering Student & Full Stack Developer specialized in Next.js, React, and Modern Web Technologies.",
  authors: [{ name: "Sambhav Mani Tripathi" }],
  keywords: ["Portfolio", "Web Developer", "Next.js", "React", "Engineer", "Sambhav Mani Tripathi"],
  openGraph: {
    title: "Sambhav's Portfolio",
    description: "Computer Engineering Student & Full Stack Developer specialized in Next.js, React, and Modern Web Technologies.",
    url: "https://sambhav-portfolio.vercel.app",
    siteName: "Sambhav's Portfolio",
    images: [
      {
        url: "/S.jpg",
        width: 800,
        height: 800,
        alt: "Sambhav Mani Tripathi",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sambhav's Portfolio",
    description: "Computer Engineering Student & Full Stack Developer specialized in Next.js, React, and Modern Web Technologies.",
    images: ["/S.jpg"],
  },
  icons: {
    icon: ["/S.jpg"],
    apple: ["/S.jpg"],
    shortcut: ["/S.jpg"],
  },
};

import { ThemeProvider } from "@/components/theme-provider";

// ... existing imports

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
