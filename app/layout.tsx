import type React from "react";
import type { Metadata } from "next";
import "./globals.css";

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
    <html lang="en">
      <body className="antialiased" suppressHydrationWarning>
        <div className="site-shell">{children}</div>
      </body>
    </html>
  );
}
