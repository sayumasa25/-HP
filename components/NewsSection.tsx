"use client";
import { motion } from "framer-motion";

export function NewsSection() {
  const newsItems = [
    {
      date: "2025.01.10",
      category: "INFO",
      title: "新春セール開催のお知らせ",
      description: "1月15日より新春セールを開催いたします。人気商品が最大30%OFF。",
      image: "https://images.unsplash.com/photo-1607522370275-f14206abe5d3?w=400&h=250&fit=crop&crop=center"
    },
    {
      date: "2025.01.08",
      category: "SHOP",
      title: "広島本店リニューアルオープン",
      description: "広島本店が新装開店いたします。記念セールも同時開催。",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=250&fit=crop&crop=center"
    },
    {
      date: "2025.01.05",
      category: "PRODUCT",
      title: "春の新作コレクション発表",
      description: "2025年春夏の新作シューズコレクションを発表いたします。",
      image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=250&fit=crop&crop=center"
    }
  ];

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
          <h2 className="text-4xl md:text-5xl font-light text-gray-800 mb-4 tracking-wider"
              style={{ fontFamily: "'Noto Serif JP', 'Yu Mincho', 'YuMincho', 'Hiragino Mincho Pro', serif" }}>
            NEWS
          </h2>
          <p className="text-lg text-gray-600 font-light">ニュース</p>
        </motion.div>

        <div className="space-y-8">
          {newsItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="bg-white border border-gray-200 p-8 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-1/3">
                  <img 
                    src={item.image}
                    alt={item.title}
                    className="w-full h-48 md:h-32 object-cover border border-gray-300"
                  />
                </div>
                <div className="md:w-2/3">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-gray-500 font-light text-sm tracking-wide">
                      {item.date}
                    </span>
                    <span className="bg-gray-800 text-white px-3 py-1 text-xs font-light tracking-wide">
                      {item.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-light text-gray-800 mb-2 tracking-wide"
                      style={{ fontFamily: "'Noto Serif JP', 'Yu Mincho', 'YuMincho', 'Hiragino Mincho Pro', serif" }}>
                    {item.title}
                  </h3>
                  <p className="text-gray-600 font-light leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
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
