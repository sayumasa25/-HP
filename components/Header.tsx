"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { href: "/", label: "ABOUT" },
  { href: "/news", label: "NEWS" },
  { href: "/company", label: "COMPANY" },
  { href: "/hiroshima", label: "広島在住の方へ" },
  { href: "/contact", label: "CONTACT" },
  { href: "https://hs928.base.shop/", label: "ONLINE SHOP", external: true },
];

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-white/90 backdrop-blur-md shadow-sm border-b border-gray-200">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between px-4 py-4">
        <Link
          href="/"
          className="flex items-center gap-3 font-light text-xl text-gray-800 tracking-wide"
          style={{
            fontFamily:
              "'Noto Serif JP', 'Yu Mincho', 'YuMincho', 'Hiragino Mincho Pro', serif",
          }}
        >
          <Image
            src="/HSロゴ.png"
            alt="くつの橋本商店ロゴ"
            width={40}
            height={40}
            className="object-contain"
          />
          くつの橋本商店
        </Link>
        {/* Desktop nav */}
        <nav className="hidden md:flex gap-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-gray-700 hover:text-gray-900 transition-colors font-light text-sm tracking-wide"
              target={item.external ? "_blank" : "_self"}
              rel={item.external ? "noopener noreferrer" : ""}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1"
          aria-label="Toggle menu"
          onClick={() => setOpen(!open)}
        >
          <span
            className={`block w-6 h-0.5 bg-gray-800 transition-transform ${open ? "rotate-45 translate-y-1.5" : ""}`}
          />
          <span
            className={`block w-6 h-0.5 bg-gray-800 transition-opacity ${open ? "opacity-0" : ""}`}
          />
          <span
            className={`block w-6 h-0.5 bg-gray-800 transition-transform ${open ? "-rotate-45 -translate-y-1.5" : ""}`}
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
            className="md:hidden bg-white border-t border-gray-200"
          >
            <ul className="flex flex-col py-4 px-4 gap-4">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="block py-2 text-gray-700 hover:text-gray-900 font-light tracking-wide"
                    target={item.external ? "_blank" : "_self"}
                    rel={item.external ? "noopener noreferrer" : ""}
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
