import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-brand-charcoal text-brand-beige py-10 mt-24">
      <div className="max-w-screen-xl mx-auto px-4 grid gap-8 md:grid-cols-3">
        <div>
          <h2 className="font-serif text-lg mb-2">くつの橋本商店</h2>
          <p className="text-sm leading-relaxed">
            〒733-0833
            <br />
            広島市西区商工センター2-9-32
            <br />
            TEL 082-277-2671
          </p>
        </div>
        <div>
          <h3 className="font-serif text-lg mb-2">メニュー</h3>
          <ul className="space-y-1 text-sm">
            <li>
              <Link href="/company" className="hover:text-brand-accent">
                会社情報
              </Link>
            </li>
            <li>
              <Link href="/brands" className="hover:text-brand-accent">
                ブランド
              </Link>
            </li>
            <li>
              <Link href="/products" className="hover:text-brand-accent">
                製品
              </Link>
            </li>
            <li>
              <Link href="/events" className="hover:text-brand-accent">
                展示会
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-brand-accent">
                お問い合わせ
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-col justify-between">
          <div className="flex gap-4 mb-4">
            {/* placeholder icons */}
            <Link
              href="#"
              aria-label="Instagram"
              className="w-6 h-6 bg-brand-beige/20 rounded-full"
            />
            <Link
              href="#"
              aria-label="LinkedIn"
              className="w-6 h-6 bg-brand-beige/20 rounded-full"
            />
          </div>
          <p className="text-xs">
            © {new Date().getFullYear()} くつの橋本商店
          </p>
        </div>
      </div>
    </footer>
  );
}
