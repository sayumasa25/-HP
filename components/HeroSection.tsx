"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export function HeroSection() {
  return (
    <>
      <section className="relative min-h-screen bg-white flex items-center justify-center overflow-hidden">
        {/* Large Hero Image */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1445205170230-053b83016050?w=1920&h=1080&fit=crop&crop=center"
            alt="美しい女性用シューズコレクション - エレガントで上品なデザイン"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        <div className="relative z-10 max-w-screen-xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <motion.h1
              className="font-light text-4xl md:text-6xl lg:text-7xl text-white mb-8 leading-relaxed tracking-wider"
              style={{
                fontFamily:
                  "'Noto Serif JP', 'Yu Mincho', 'YuMincho', 'Hiragino Mincho Pro', serif",
              }}
            >
              <span className="text-white/90 tracking-widest text-2xl md:text-3xl block mb-4">
                くつの橋本商店
              </span>
              <span className="text-lg md:text-xl font-light tracking-wide block mb-6 text-white/80">
                1922年創業の広島の靴の老舗です。
              </span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            >
              <motion.a
                href="https://hs928.base.shop/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-gray-800 px-10 py-4 rounded-none font-light text-lg hover:bg-gray-100 transition-colors border border-white"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                ONLINE SHOP
              </motion.a>
              <motion.a
                href="/company"
                className="border border-white text-white px-10 py-4 rounded-none font-light text-lg hover:bg-white hover:text-gray-800 transition-colors"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                COMPANY
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Mission Section - Below Hero Image */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="relative z-10 bg-white py-20"
      >
        <div className="max-w-screen-xl mx-auto px-4 text-center">
          <h2
            className="text-5xl md:text-6xl font-extralight text-gray-800 mb-8 tracking-wide"
            style={{
              fontFamily:
                "'Noto Serif JP', 'Yu Mincho', 'YuMincho', 'Hiragino Mincho Pro', serif",
            }}
          >
            MISSION
          </h2>

          <div className="max-w-4xl mx-auto">
            <p
              className="text-3xl md:text-4xl font-light mb-8 text-gray-800 leading-relaxed"
              style={{
                fontFamily:
                  "'Noto Serif JP', 'Yu Mincho', 'YuMincho', 'Hiragino Mincho Pro', serif",
              }}
            >
              一歩先の美しさを、あなたの足元に。
            </p>

            <div
              className="text-lg md:text-xl leading-relaxed text-gray-700 font-light space-y-4"
              style={{
                fontFamily:
                  "'Noto Serif JP', 'Yu Mincho', 'YuMincho', 'Hiragino Mincho Pro', serif",
              }}
            >
              <p>私たちは1922年創業のレディースシューズの専門店です。</p>
              <p>
                品質・快適さ・美しさを兼ね備えた靴を、全国の女性にお届けしています。
              </p>
              <p>
                時代に合わせたEC展開と、変わらぬ職人技を融合し、100年企業として進化を続けています。
              </p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Product Showcase Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="relative z-10 bg-gray-50 py-16"
      >
        <div className="max-w-screen-xl mx-auto px-4">
          <h2
            className="text-3xl md:text-4xl font-light text-center text-gray-800 mb-12 tracking-wide"
            style={{
              fontFamily:
                "'Noto Serif JP', 'Yu Mincho', 'YuMincho', 'Hiragino Mincho Pro', serif",
            }}
          >
            COLLECTION
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <motion.a
              href="https://item.rakuten.co.jp/hs928/c/0000000100/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-center block"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src="/エレガント.JPG"
                alt="エレガントシューズ"
                className="w-full h-48 object-cover mb-4 border border-gray-200"
              />
              <h3 className="text-lg font-light text-gray-800 tracking-wide">
                エレガント
              </h3>
            </motion.a>

            <motion.a
              href="https://item.rakuten.co.jp/hs928/c/0000000277/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-center block"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src="/カジュアル.png"
                alt="カジュアルシューズ"
                className="w-full h-48 object-cover mb-4 border border-gray-200"
              />
              <h3 className="text-lg font-light text-gray-800 tracking-wide">
                カジュアル
              </h3>
            </motion.a>

            <motion.a
              href="https://item.rakuten.co.jp/hs928/c/0000000102/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-center block"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src="/コンフォート.JPG"
                alt="コンフォートシューズ"
                className="w-full h-48 object-cover mb-4 border border-gray-200"
              />
              <h3 className="text-lg font-light text-gray-800 tracking-wide">
                コンフォート
              </h3>
            </motion.a>

            <motion.a
              href="https://item.rakuten.co.jp/hs928/c/0000000272/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-center block"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src="/スニーカー.png"
                alt="スニーカー"
                className="w-full h-48 object-cover mb-4 border border-gray-200"
              />
              <h3 className="text-lg font-light text-gray-800 tracking-wide">
                スニーカー
              </h3>
            </motion.a>
          </div>
        </div>
      </motion.div>
    </>
  );
}
