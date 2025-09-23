import "../styles/globals.css";
import { ReactNode } from "react";
import { Inter, Playfair_Display } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata = {
  title: {
    default: "Hashimoto Shoes",
    template: "%s | Hashimoto Shoes",
  },
  description: "広島から婦人靴を発信する専門商社",
  icons: {
    icon: "/ファビコン.png",
    shortcut: "/ファビコン.png",
    apple: "/ファビコン.png",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ja" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans text-brand-charcoal bg-brand-beige">
        <Header />
        <div className="pt-20">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
