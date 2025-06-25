import "../styles/globals.css";
import { ReactNode } from "react";
import { Inter, Playfair_Display } from "next/font/google";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

export const metadata = {
  title: {
    default: "Hashimoto Shoes",
    template: "%s | Hashimoto Shoes",
  },
  description: "広島から婦人靴を発信する専門商社",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ja" className={`${inter.variable} ${playfair.variable}`}> 
      <body className="font-sans text-brand-charcoal bg-brand-beige">
        {children}
      </body>
    </html>
  );
}
