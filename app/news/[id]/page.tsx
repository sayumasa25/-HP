import { getNewsById } from "@/lib/microcms";
import { NewsItem } from "@/lib/microcms";
import Link from "next/link";
import { notFound } from "next/navigation";

interface NewsDetailPageProps {
  params: {
    id: string;
  };
}

export default async function NewsDetailPage({ params }: NewsDetailPageProps) {
  const newsItem = await getNewsById(params.id);

  if (!newsItem) {
    notFound();
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('ja-JP', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit'
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-16">
        {/* パンくずナビ */}
        <nav className="mb-8">
          <div className="flex items-center text-sm text-gray-600">
            <Link href="/" className="hover:text-gray-800 transition-colors">
              ホーム
            </Link>
            <span className="mx-2">/</span>
            <Link href="/news" className="hover:text-gray-800 transition-colors">
              ニュース
            </Link>
            <span className="mx-2">/</span>
            <span className="text-gray-400">{newsItem.title}</span>
          </div>
        </nav>

        {/* 記事ヘッダー */}
        <header className="mb-8">
          <div className="mb-4">
            <span className="text-sm text-gray-500">
              {formatDate(newsItem.publishedAt)}
            </span>
          </div>
          
          <h1 className="text-3xl md:text-4xl font-light text-gray-800 mb-6 leading-relaxed">
            {newsItem.title}
          </h1>
          
          <div className="mb-8">
            <img
              src={newsItem.thumbnail.url}
              alt={newsItem.title}
              className="w-full max-w-2xl mx-auto rounded-lg shadow-sm"
            />
          </div>
        </header>

        {/* 記事本文 */}
        <article className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
          <div 
            className="prose prose-lg max-w-none text-gray-700 leading-relaxed"
            dangerouslySetInnerHTML={{ __html: newsItem.content }}
          />
        </article>

        {/* 戻るボタン */}
        <div className="mt-12 text-center">
          <Link
            href="/news"
            className="inline-block border border-gray-800 text-gray-800 px-8 py-3 font-light text-sm tracking-wide hover:bg-gray-800 hover:text-white transition-colors duration-300"
          >
            ← ニュース一覧に戻る
          </Link>
        </div>
      </div>
    </div>
  );
}
