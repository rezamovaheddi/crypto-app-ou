import type { Metadata } from "next";
import { Inter,Orbitron } from "next/font/google";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/shared/ui/navbar";

const orbitron = Orbitron({
  subsets: ["latin"],
  variable: "--font-orbitron",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Crypto Reza",
  description: "G'Scalable Feature-Driven Architecture for Next.js 14 with TypeScript, TailwindCSS, and Zustand ",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" dir="ltr" className={orbitron.variable}>
      <body className="font-sans antialiased bg-slate-50 text-slate-900">
        <Navbar/> 
        {children}
      </body>
    </html>
  );
}