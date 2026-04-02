import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { Geist, Geist_Mono } from "next/font/google";
import { CustomCursor } from "@/components/custom-cursor";
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
  title: "Teqfork | Premium Software Engineering Studio",
  description:
    "Architecting Digital Excellence. We build premium, scalable software solutions for forward-thinking businesses.",
  generator: "Teqfork",
  icons: {
    icon: "/teqfork_logo.webp",
    apple: "/teqfork_logo.webp",
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
        <div
          className="noise pointer-events-none fixed inset-0 z-0"
          aria-hidden="true"
        />
        <div className="relative z-10">{children}</div>
        <CustomCursor />
        <Analytics />
      </body>
    </html>
  );
}

