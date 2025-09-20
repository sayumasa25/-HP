import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-light text-gray-400 mb-4">404</h1>
        <h2 className="text-2xl font-light text-gray-800 mb-6">
          記事が見つかりません
        </h2>
        <p className="text-gray-600 mb-8">
          お探しの記事は削除されたか、URLが間違っている可能性があります。
        </p>
        <Link
          href="/news"
          className="inline-block border border-gray-800 text-gray-800 px-8 py-3 font-light text-sm tracking-wide hover:bg-gray-800 hover:text-white transition-colors duration-300"
        >
          ニュース一覧に戻る
        </Link>
      </div>
    </div>
  );
}
