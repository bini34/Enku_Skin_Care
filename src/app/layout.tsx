import type { Metadata } from "next";
import { Geist, Geist_Mono, Marcellus } from "next/font/google";
import Header from "@/components/header";
import Footer from "@/components/footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const marcellus = Marcellus({
  variable: "--font-marcellus",
  subsets: ["latin"],
  weight: "400", // Marcellus has only one weight
});

export const metadata: Metadata = {
  title: "Enku Skin Care",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${marcellus.variable} font-marcellus antialiased bg-amber-50 text-black`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
