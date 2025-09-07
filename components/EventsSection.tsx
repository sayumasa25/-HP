"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface EventItem {
  id: string;
  title: string;
  date: string;
  excerpt: string;
  location?: string;
  publishedAt: string;
}

export function EventsSection() {
  const [events, setEvents] = useState<EventItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch('http://localhost:4000/api/events');
        const data = await response.json();
        setEvents(data);
      } catch (error) {
        console.error('Failed to fetch events:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  if (loading) {
    return (
      <section className="py-16 bg-brand-beige/10">
        <div className="max-w-screen-xl mx-auto px-4">
          <h2 className="font-serif text-3xl text-center mb-12">イベント・展示会</h2>
          <div className="text-center">読み込み中...</div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-brand-beige/10">
      <div className="max-w-screen-xl mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-serif text-3xl text-center mb-12 text-brand-charcoal"
        >
          イベント・展示会
        </motion.h2>
        
        {events.length === 0 ? (
          <div className="text-center text-gray-500">
            イベント情報がありません
          </div>
        ) : (
          <div className="space-y-6">
            {events.map((item, index) => (
              <motion.article
                key={item.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-lg p-6 shadow-soft hover:shadow-soft-lg transition-shadow border-l-4 border-brand-accent"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div className="flex-1">
                    <h3 className="font-serif text-xl mb-2 text-brand-charcoal">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 mb-2">
                      {item.excerpt}
                    </p>
                    {item.location && (
                      <p className="text-sm text-brand-accent">
                        📍 {item.location}
                      </p>
                    )}
                  </div>
                  <div className="mt-4 md:mt-0 md:ml-6 text-right">
                    <time className="text-lg font-semibold text-brand-charcoal block">
                      {new Date(item.date).toLocaleDateString('ja-JP')}
                    </time>
                    <span className="text-xs text-gray-500">
                      {new Date(item.date).toLocaleDateString('ja-JP', { weekday: 'short' })}
                    </span>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
