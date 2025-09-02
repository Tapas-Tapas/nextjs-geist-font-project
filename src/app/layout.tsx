import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter"
});

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: "--font-playfair"
});

export const metadata: Metadata = {
  title: "Kunmun Hotel - Fine Dining Experience",
  description: "Discover exquisite culinary delights at Kunmun Hotel. Experience our carefully crafted lunch, dinner, and monthly special menus.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="min-h-screen bg-gradient-to-br from-slate-50 to-stone-100 font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
