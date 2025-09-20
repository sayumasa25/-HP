"use client";
import { motion } from "framer-motion";
import { NewsItem } from "@/lib/microcms";
import Link from "next/link";

interface NewsSectionProps {
  newsData: NewsItem[];
}

export function NewsSection({ newsData }: NewsSectionProps) {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('ja-JP', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit'
    }).replace(/\//g, '.');
  };

  // 最新3件のみ表示
  const latestNews = newsData.slice(0, 3);

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-screen-xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2
            className="text-4xl md:text-5xl font-light text-gray-800 mb-4 tracking-wider"
            style={{
              fontFamily:
                "'Noto Serif JP', 'Yu Mincho', 'YuMincho', 'Hiragino Mincho Pro', serif",
            }}
          >
            NEWS
          </h2>
          <p className="text-lg text-gray-600 font-light">ニュース</p>
        </motion.div>

        <div className="space-y-8">
          {latestNews.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="bg-white border border-gray-200 hover:shadow-lg transition-shadow duration-300"
            >
              <Link href={`/news/${item.id}`} className="block p-8">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-1/3">
                    <img
                      src={item.thumbnail.url}
                      alt={item.title}
                      className="w-full h-48 md:h-32 object-cover border border-gray-300"
                    />
                  </div>
                  <div className="md:w-2/3">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="text-gray-500 font-light text-sm tracking-wide">
                        {formatDate(item.publishedAt)}
                      </span>
                    </div>
                    <h3
                      className="text-xl font-light text-gray-800 mb-2 tracking-wide hover:text-gray-600 transition-colors"
                      style={{
                        fontFamily:
                          "'Noto Serif JP', 'Yu Mincho', 'YuMincho', 'Hiragino Mincho Pro', serif",
                      }}
                    >
                      {item.title}
                    </h3>
                    <p className="text-gray-600 font-light leading-relaxed">
                      {item.content.replace(/<[^>]*>/g, '').substring(0, 100) + '...'}
                    </p>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-center mt-12"
        >
          <a
            href="/news"
            className="inline-block border border-gray-800 text-gray-800 px-8 py-3 font-light text-sm tracking-wide hover:bg-gray-800 hover:text-white transition-colors duration-300"
          >
            VIEW MORE
          </a>
        </motion.div>
      </div>
    </section>
  );
}
