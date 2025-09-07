"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface NewsItem {
  id: string;
  title: string;
  excerpt?: string;
  publishedAt: string;
  thumbnail?: {
    url: string;
  };
}

export function NewsSection() {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch('http://localhost:4000/api/news');
        const data = await response.json();
        setNews(data);
      } catch (error) {
        console.error('Failed to fetch news:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  if (loading) {
    return (
      <section className="py-16 bg-white">
        <div className="max-w-screen-xl mx-auto px-4">
          <h2 className="font-serif text-3xl text-center mb-12">ニュース</h2>
          <div className="text-center">読み込み中...</div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-white">
      <div className="max-w-screen-xl mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-serif text-3xl text-center mb-12 text-brand-charcoal"
        >
          ニュース
        </motion.h2>
        
        {news.length === 0 ? (
          <div className="text-center text-gray-500">
            ニュースがありません
          </div>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {news.map((item, index) => (
              <motion.article
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-brand-beige/20 rounded-lg overflow-hidden shadow-soft hover:shadow-soft-lg transition-shadow"
              >
                {item.thumbnail && (
                  <img 
                    src={item.thumbnail.url} 
                    alt={item.title}
                    className="w-full h-48 object-cover"
                  />
                )}
                <div className="p-6">
                  <h3 className="font-serif text-lg mb-2 text-brand-charcoal">
                    {item.title}
                  </h3>
                  {item.excerpt && (
                    <p className="text-sm text-gray-600 mb-4 line-clamp-3">
                      {item.excerpt}
                    </p>
                  )}
                  <time className="text-xs text-brand-accent">
                    {new Date(item.publishedAt).toLocaleDateString('ja-JP')}
                  </time>
                </div>
              </motion.article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
