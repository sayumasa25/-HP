"use client";
import { motion } from "framer-motion";

export function AboutSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-light text-gray-800 mb-6 tracking-wider"
                style={{ fontFamily: "'Noto Serif JP', 'Yu Mincho', 'YuMincho', 'Hiragino Mincho Pro', serif" }}>
              ABOUT US
            </h2>
            <p className="text-lg text-gray-600 font-light mb-4">私たちについて</p>
            
            <h3 className="text-2xl md:text-3xl font-light text-gray-800 mb-6 tracking-wide"
                style={{ fontFamily: "'Noto Serif JP', 'Yu Mincho', 'YuMincho', 'Hiragino Mincho Pro', serif" }}>
              女性の輝きを足元から応援する
            </h3>
            
            <p className="text-gray-700 font-light leading-relaxed mb-6">
              女性が活躍する時代。女性のライフスタイルに寄り添い、支えていく。
              それが橋本商店の存在意義であり、ミッションだと考えています。
            </p>
            
            <p className="text-gray-700 font-light leading-relaxed mb-8">
              自分らしく輝く女性たちへ。
              橋本商店はそんなあなたの毎日を快適に彩ります。
            </p>
            
            <motion.a 
              href="/company"
              className="inline-block border border-gray-800 text-gray-800 px-8 py-3 font-light text-sm tracking-wide hover:bg-gray-800 hover:text-white transition-colors duration-300"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              VIEW MORE
            </motion.a>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <img 
              src="https://images.unsplash.com/photo-1556906781-9a412961c28c?w=600&h=500&fit=crop&crop=center"
              alt="女性の輝きを足元から応援"
              className="w-full h-96 object-cover border border-gray-200"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
