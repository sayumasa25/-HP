"use client";
import { motion } from "framer-motion";

export function BrandsSection() {
  const brands = [
    {
      name: "HS（エイチエス）",
      description: "履きやすさとデザインにこだわった当店オリジナルブランド",
      image: "/エイチエス.png",
    },
    {
      name: "SCORPIUS（スコーピウス）",
      description:
        "メタル素材のカッコよさとトラッドを融合させた当店新ブランド。LWGレザーのみを使用した唯一の靴ブランド。",
      image: "/スコーピウス.png",
      link: "https://www.rakuten.co.jp/hs928/contents/lwg-scorpius//",
    },
    {
      name: "Phiten（ファイテン）",
      description:
        "ファイテンの正規代理店から買い付けたスニーカーを販売しています。",
      image: "/PHITEN.jpg",
    },
  ];

  return (
    <section className="py-20 bg-white">
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
            BRANDS
          </h2>
          <p className="text-lg text-gray-600 font-light">ブランド・シリーズ</p>
          <p className="text-gray-700 font-light leading-relaxed mt-6 max-w-3xl mx-auto">
            100年以上にわたる歴史の中で長く愛されるロングセラーから、トレンド感のある旬なアイテムまで、
            様々なブランド・シリーズを展開しています。履き心地が良く、かつファッション性を兼ね備えた高品質なシューズをご提案します。
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {brands.map((brand, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="bg-gray-50 border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <img
                src={brand.image}
                alt={brand.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3
                  className="text-xl font-light text-gray-800 mb-3 tracking-wide"
                  style={{
                    fontFamily:
                      "'Noto Serif JP', 'Yu Mincho', 'YuMincho', 'Hiragino Mincho Pro', serif",
                  }}
                >
                  {brand.name}
                </h3>
                <p className="text-gray-600 font-light leading-relaxed">
                  {brand.name === "SCORPIUS（スコーピウス）" ? (
                    <>
                      メタル素材のカッコよさとトラッドを融合させた当店新ブランド。LWGレザーのみを使用した唯一の靴ブランド。
                      <a
                        href="https://www.rakuten.co.jp/hs928/contents/lwg-scorpius//"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-800 underline ml-1"
                      >
                        LWGとは？
                      </a>
                    </>
                  ) : (
                    brand.description
                  )}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="text-center mt-12"
        >
          <a
            href="https://hs928.base.shop/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block border border-gray-800 text-gray-800 px-8 py-3 font-light text-sm tracking-wide hover:bg-gray-800 hover:text-white transition-colors duration-300"
          >
            VIEW MORE
          </a>
        </motion.div>
      </div>
    </section>
  );
}
