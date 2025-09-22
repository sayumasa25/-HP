"use client";
import { motion } from "framer-motion";
import { useState } from "react";

export default function HiroshimaPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <main className="min-h-screen bg-white pt-20">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="relative z-10 max-w-screen-xl mx-auto px-4">
          <div className="text-center mb-16">
            <motion.h1
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-6xl font-light text-gray-800 mb-8 tracking-wider"
              style={{
                fontFamily:
                  "'Noto Serif JP', 'Yu Mincho', 'YuMincho', 'Hiragino Mincho Pro', serif",
              }}
            >
              広島在住の皆様へ
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl text-gray-700 mb-12 leading-relaxed font-light max-w-4xl mx-auto"
            >
              くつの橋本商店では定期的に「倉庫大開放市」を開催し、<br />
              広島の皆様を心よりお迎えしております！<br />
              <span className="text-blue-600 font-medium">年に数回だけの特別なファミリーセール</span>をお見逃しなく。
            </motion.p>
            
            {/* LINE登録バナー */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-green-50 border-2 border-green-200 rounded-lg p-6 max-w-md mx-auto mb-12"
            >
              <div className="flex items-center justify-center mb-4">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mr-3">
                  <span className="text-white font-bold text-lg">LINE</span>
                </div>
                <div className="text-left">
                  <p className="font-medium text-gray-800">販売会のお知らせを受け取る</p>
                  <p className="text-sm text-gray-600">年に数回のみ配信なのでご安心ください</p>
                </div>
              </div>
              <a 
                href="https://lin.ee/XQDGftP" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block w-full bg-green-500 text-white py-3 rounded-lg font-medium hover:bg-green-600 transition-colors text-center"
              >
                LINE友達追加
              </a>
              <p className="text-red-600 font-bold text-sm mt-3 text-center">
                LINE会員様は最終金額から更に5%OFFも！
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 会社紹介セクション */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-screen-xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white border border-gray-200 p-12 mb-16"
          >
            <h2
              className="text-3xl md:text-4xl font-light text-gray-800 mb-8 text-center tracking-wider"
              style={{
                fontFamily:
                  "'Noto Serif JP', 'Yu Mincho', 'YuMincho', 'Hiragino Mincho Pro', serif",
              }}
            >
              くつの橋本商店とは？
            </h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed font-light">
                  くつの橋本商店は<span className="font-medium text-gray-900">1922年創業</span>の老舗婦人靴専門店です。
                  広島市西区商工センターを拠点に、100年以上にわたって女性の足元を美しく彩ってまいりました。
                </p>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed font-light">
                  現在は全国各地のデパートのイベントスペースでの販売を中心に、
                  <span className="font-medium text-gray-900">品質とお求めやすさを両立</span>した商品をお届けしています。
                </p>
                <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
                  <p className="text-blue-800 font-medium mb-2">商品一例：本革やわらかローファー</p>
                  <p className="text-blue-700 text-lg font-medium">¥6,300+税</p>
                  <p className="text-blue-600 text-sm mt-2">
                    楽天ランキング1位獲得！おしゃれでお買い得、履きやすさにもこだわった人気商品です。
                  </p>
                </div>
              </div>
              <div>
                <a
                  href="https://item.rakuten.co.jp/hs928/leather-loafers/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block hover:opacity-80 transition-opacity"
                >
                  <img
                    src="/70001.jpg"
                    alt="本革やわらかローファー - 楽天で詳細を見る"
                    className="w-full h-80 object-contain border border-gray-200 rounded-lg bg-gray-50 cursor-pointer"
                    loading="lazy"
                    decoding="async"
                  />
                  <p className="text-center text-blue-600 text-sm mt-2 hover:underline">
                    🛒 楽天で商品詳細を見る
                  </p>
                </a>
              </div>
            </div>
          </motion.div>

          {/* 倉庫大開放市の魅力 */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white border border-gray-200 p-12 text-center mb-16"
          >
            <h2
              className="text-3xl md:text-4xl font-light text-gray-800 mb-6 tracking-wider"
              style={{
                fontFamily:
                  "'Noto Serif JP', 'Yu Mincho', 'YuMincho', 'Hiragino Mincho Pro', serif",
              }}
            >
              年4回限定！倉庫大開放市
            </h2>
            <p className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed font-light max-w-4xl mx-auto">
              そんなくつの橋本商店が年に4回程度だけ開催する特別なファミリーセールが『倉庫大開放市』！<br />
              デパートでは一部の商品しかお持ちしませんが、倉庫大開放市では<br />
              <span className="text-red-600 font-medium text-2xl">会社にある1万足以上</span>の商品からお選びいただけます！
            </p>
            <div className="grid md:grid-cols-3 gap-8 text-left">
              <div className="bg-gray-50 border border-gray-200 p-6">
                <h3
                  className="text-xl font-light text-gray-800 mb-4 tracking-wide"
                  style={{
                    fontFamily:
                      "'Noto Serif JP', 'Yu Mincho', 'YuMincho', 'Hiragino Mincho Pro', serif",
                  }}
                >
                  開催日程
                </h3>
                <div className="text-gray-700 space-y-3 font-light">
                  <p>四半期に一度不定期にて開催</p>
                  <p className="text-sm text-blue-600 font-medium">
                    LINEご登録の方にのみお知らせが届きます。
                  </p>
                  <div className="mt-4">
                    <a 
                      href="https://lin.ee/XQDGftP" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="block w-full bg-green-500 text-white py-2 px-4 rounded text-sm font-medium hover:bg-green-600 transition-colors text-center"
                    >
                      LINE友達追加
                    </a>
                    <p className="text-red-600 font-bold text-sm mt-2 text-center">
                      LINE会員様は最終金額から更に5%OFFも！
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 border border-gray-200 p-6">
                <h3
                  className="text-xl font-light text-gray-800 mb-4 tracking-wide"
                  style={{
                    fontFamily:
                      "'Noto Serif JP', 'Yu Mincho', 'YuMincho', 'Hiragino Mincho Pro', serif",
                  }}
                >
                  内容
                </h3>
                <div className="text-gray-700 space-y-3 font-light">
                  <p>通常価格から<span className="text-red-600 font-bold text-lg">全商品20％～最大半額以下</span>にて販売しています。</p>
                  <p className="text-xs text-gray-500">画像タップで拡大できます。</p>
                  <img
                    src="/倉庫大解放市.jpg"
                    alt="倉庫大開放市の価格例"
                    className="w-full h-32 object-contain border border-gray-300 bg-white rounded cursor-pointer hover:opacity-80 transition-opacity"
                    onClick={() => setSelectedImage("/倉庫大解放市.jpg")}
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </div>
              <div className="bg-gray-50 border border-gray-200 p-6">
                <img
                  src="/倉庫内風景.jpg"
                  alt="倉庫大開放市の様子"
                  className="w-full h-32 object-cover object-top border border-gray-300 mb-4 rounded cursor-pointer hover:opacity-80 transition-opacity"
                  onClick={() => setSelectedImage("/倉庫内風景.jpg")}
                  loading="lazy"
                  decoding="async"
                />
                <h3
                  className="text-xl font-light text-gray-800 mb-2 tracking-wide"
                  style={{
                    fontFamily:
                      "'Noto Serif JP', 'Yu Mincho', 'YuMincho', 'Hiragino Mincho Pro', serif",
                  }}
                >
                  会場の様子
                </h3>
                <p className="text-gray-700 font-light text-sm">
                  広々とした倉庫で豊富な商品をご覧いただけます。画像タップで拡大できます。
                </p>
              </div>
            </div>
          </motion.div>

          {/* アクセス情報 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="bg-white border border-gray-200 p-12"
          >
            <h3
              className="text-2xl md:text-3xl font-light text-gray-800 mb-8 text-center tracking-wider"
              style={{
                fontFamily:
                  "'Noto Serif JP', 'Yu Mincho', 'YuMincho', 'Hiragino Mincho Pro', serif",
              }}
            >
              アクセス・お問い合わせ
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4
                  className="text-xl font-light text-gray-800 mb-4 tracking-wide"
                  style={{
                    fontFamily:
                      "'Noto Serif JP', 'Yu Mincho', 'YuMincho', 'Hiragino Mincho Pro', serif",
                  }}
                >
                  所在地
                </h4>
                <p className="text-gray-700 text-lg leading-relaxed mb-4 font-light">
                  〒733-0833
                  <br />
                  広島県 広島市西区商工センター2丁目9-32
                  <br />
                  株式会社橋本商店
                </p>
                <h4
                  className="text-xl font-light text-gray-800 mb-4 tracking-wide"
                  style={{
                    fontFamily:
                      "'Noto Serif JP', 'Yu Mincho', 'YuMincho', 'Hiragino Mincho Pro', serif",
                  }}
                >
                  交通手段
                </h4>
                <ul className="text-gray-700 space-y-2 font-light">
                  <li>JR新井口駅より徒歩14分</li>
                  <li>エクセル様の斜め向かいです</li>
                  <li>駐車場あり</li>
                </ul>
              </div>
              <div>
                <h4
                  className="text-xl font-light text-gray-800 mb-4 tracking-wide"
                  style={{
                    fontFamily:
                      "'Noto Serif JP', 'Yu Mincho', 'YuMincho', 'Hiragino Mincho Pro', serif",
                  }}
                >
                  お問い合わせ
                </h4>
                <p className="text-gray-700 text-lg leading-relaxed mb-4 font-light">
                  TEL: 082-277-2671
                  <br />
                  営業時間: 10:00〜17:00
                  <br />
                  定休日: 日曜・祝日
                </p>
                <motion.a
                  href="tel:082-277-2671"
                  className="inline-block bg-gray-800 text-white px-8 py-4 font-light text-lg hover:bg-gray-700 transition-colors border border-gray-800 w-full text-center"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  お電話でのお問い合わせ
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 画像拡大モーダル */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl max-h-full">
            <img
              src={selectedImage}
              alt="拡大画像"
              className="max-w-full max-h-full object-contain"
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-white bg-black bg-opacity-50 rounded-full w-10 h-10 flex items-center justify-center hover:bg-opacity-75 transition-colors"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </main>
  );
}
