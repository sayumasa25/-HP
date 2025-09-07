"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { href: "/", label: "ホーム" },
  { href: "/company", label: "会社情報" },
  { href: "/brands", label: "ブランド" },
  { href: "/products", label: "製品" },
  { href: "/news", label: "ニュース" },
  { href: "/hiroshima", label: "広島在住のお客様へ" },
  { href: "/contact", label: "お問い合わせ" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-brand-beige/70 backdrop-blur-md shadow-sm">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between px-4 py-3">
        <Link href="/" className="flex items-center gap-2 font-serif text-lg md:text-xl text-brand-charcoal">
          <Image src="/HSロゴ.png" alt="くつの橋本商店ロゴ" width={40} height={40} className="object-contain" />
          くつの橋本商店
        </Link>
        {/* Desktop nav */}
        <nav className="hidden md:flex gap-6">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="hover:text-brand-accent transition">
              {item.label}
            </Link>
          ))}
        </nav>
        {/* Mobile hamburger */}
        <button
          className="md:hidden" aria-label="Toggle menu" onClick={() => setOpen(!open)}
        >
          <span
            className={`block w-6 h-0.5 bg-brand-charcoal transition-transform ${open ? "rotate-45 translate-y-[6px]" : ""}`}
          />
          <span
            className={`block w-6 h-0.5 bg-brand-charcoal my-1 transition-opacity ${open ? "opacity-0" : ""}`}
          />
          <span
            className={`block w-6 h-0.5 bg-brand-charcoal transition-transform ${open ? "-rotate-45 -translate-y-[6px]" : ""}`}
          />
        </button>
      </div>
      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
            className="md:hidden bg-brand-beige border-t border-brand-charcoal/10"
          >
            <ul className="flex flex-col py-4 px-4 gap-4">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="block py-2 text-brand-charcoal hover:text-brand-accent"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
