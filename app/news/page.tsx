import { getNews } from "@/lib/microcms";
import { NewsItem } from "@/lib/microcms";
import Link from "next/link";

export default async function NewsPage() {
  const newsData = await getNews();

  // カテゴリ機能は削除（シンプル版）

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
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-light text-gray-800 mb-6 tracking-wider">
            NEWS
          </h1>
          <p className="text-lg text-gray-600 font-light">ニュース</p>
        </div>

        <div className="space-y-8">
          {newsData.map((news: NewsItem) => (
            <article
              key={news.id}
              className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow duration-300"
            >
              <div className="md:flex">
                <div className="md:w-1/3">
                  <img
                    src={news.thumbnail.url}
                    alt={news.title}
                    className="w-full h-48 md:h-full object-cover"
                  />
                </div>
                <div className="md:w-2/3 p-6">
                  <div className="flex items-center mb-4">
                    <span className="text-sm text-gray-500">
                      {formatDate(news.publishedAt)}
                    </span>
                  </div>
                  
                  <h2 className="text-xl font-medium text-gray-800 mb-3 line-clamp-2">
                    {news.title}
                  </h2>
                  
                  <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
                    {news.content.replace(/<[^>]*>/g, '').substring(0, 150) + '...'}
                  </p>
                  
                  <Link
                    href={`/news/${news.id}`}
                    className="inline-block text-blue-600 hover:text-blue-800 text-sm font-medium transition-colors duration-200"
                  >
                    続きを読む →
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        {newsData.length === 0 && (
          <div className="text-center py-16">
            <p className="text-gray-500 text-lg">ニュースがありません</p>
          </div>
        )}
      </div>
    </div>
  );
}
