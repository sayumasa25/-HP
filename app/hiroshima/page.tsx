"use client";
import { motion } from "framer-motion";

export default function HiroshimaPage() {
  return (
    <main className="min-h-screen bg-white pt-20">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="relative z-10 max-w-screen-xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-6xl font-light text-gray-800 mb-8 tracking-wider"
                  style={{ fontFamily: "'Noto Serif JP', 'Yu Mincho', 'YuMincho', 'Hiragino Mincho Pro', serif" }}>
                広島在住のお客様へ
              </h1>
              <p className="text-xl md:text-2xl text-gray-700 mb-12 leading-relaxed font-light">
                地元だからこそ実現できる<br />
                <span className="text-gray-900 font-medium">最安値での直販</span>をご提供いたします
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <img 
                src="https://images.unsplash.com/photo-1549298916-b41d501d3772?w=600&h=400&fit=crop&crop=center"
                alt="高品質な女性用シューズ"
                className="w-full h-80 object-cover border border-gray-200"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* 倉庫大開放市セクション */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-screen-xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white border border-gray-200 p-12 text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-light text-gray-800 mb-6 tracking-wider"
                style={{ fontFamily: "'Noto Serif JP', 'Yu Mincho', 'YuMincho', 'Hiragino Mincho Pro', serif" }}>
              倉庫大開放市 開催中
            </h2>
            <p className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed font-light">
              工場直販だから実現できる驚きの価格<br />
              通常価格の<span className="text-gray-900 font-medium">30〜50%OFF</span>
            </p>
            <div className="grid md:grid-cols-3 gap-8 text-left">
              <div className="bg-gray-50 border border-gray-200 p-6">
                <h3 className="text-xl font-light text-gray-800 mb-4 tracking-wide"
                    style={{ fontFamily: "'Noto Serif JP', 'Yu Mincho', 'YuMincho', 'Hiragino Mincho Pro', serif" }}>
                  開催日程
                </h3>
                <ul className="text-gray-700 space-y-2 font-light">
                  <li>毎月第2・第4土曜日</li>
                  <li>10:00〜17:00</li>
                  <li>予約不要・入場無料</li>
                </ul>
              </div>
              <div className="bg-gray-50 border border-gray-200 p-6">
                <h3 className="text-xl font-light text-gray-800 mb-4 tracking-wide"
                    style={{ fontFamily: "'Noto Serif JP', 'Yu Mincho', 'YuMincho', 'Hiragino Mincho Pro', serif" }}>
                  会場
                </h3>
                <ul className="text-gray-700 space-y-2 font-light">
                  <li>橋本靴店 本社倉庫</li>
                  <li>広島市〇〇区〇〇町1-2-3</li>
                  <li>駐車場完備（50台）</li>
                </ul>
              </div>
              <div className="bg-gray-50 border border-gray-200 p-6">
                <img 
                  src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=250&fit=crop&crop=center"
                  alt="倉庫大開放市の様子"
                  className="w-full h-32 object-cover border border-gray-300 mb-4"
                />
                <h3 className="text-xl font-light text-gray-800 mb-2 tracking-wide"
                    style={{ fontFamily: "'Noto Serif JP', 'Yu Mincho', 'YuMincho', 'Hiragino Mincho Pro', serif" }}>
                  会場の様子
                </h3>
                <p className="text-gray-700 font-light text-sm">
                  広々とした倉庫で豊富な商品をご覧いただけます
                </p>
              </div>
            </div>
          </motion.div>

          {/* 特典セクション */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="bg-white border border-gray-200 p-8 text-center"
            >
              <img 
                src="https://images.unsplash.com/photo-1556906781-9a412961c28c?w=300&h=200&fit=crop&crop=center"
                alt="最安値保証"
                className="w-full h-32 object-cover border border-gray-300 mb-4"
              />
              <h3 className="text-xl font-light text-gray-800 mb-4 tracking-wide"
                  style={{ fontFamily: "'Noto Serif JP', 'Yu Mincho', 'YuMincho', 'Hiragino Mincho Pro', serif" }}>
                最安値保証
              </h3>
              <p className="text-gray-700 leading-relaxed font-light">
                オンラインストアや他店舗よりも確実にお安くご提供。
                中間マージンを一切カットした工場直販価格です。
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="bg-white border border-gray-200 p-8 text-center"
            >
              <img 
                src="https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=300&h=200&fit=crop&crop=center"
                alt="豊富な在庫"
                className="w-full h-32 object-cover border border-gray-300 mb-4"
              />
              <h3 className="text-xl font-light text-gray-800 mb-4 tracking-wide"
                  style={{ fontFamily: "'Noto Serif JP', 'Yu Mincho', 'YuMincho', 'Hiragino Mincho Pro', serif" }}>
                豊富な在庫
              </h3>
              <p className="text-gray-700 leading-relaxed font-light">
                サイズ・カラー・デザインの豊富な在庫から
                お気に入りの一足をその場でお選びいただけます。
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="bg-white border border-gray-200 p-8 text-center"
            >
              <img 
                src="https://images.unsplash.com/photo-1607522370275-f14206abe5d3?w=300&h=200&fit=crop&crop=center"
                alt="特別サービス"
                className="w-full h-32 object-cover border border-gray-300 mb-4"
              />
              <h3 className="text-xl font-light text-gray-800 mb-4 tracking-wide"
                  style={{ fontFamily: "'Noto Serif JP', 'Yu Mincho', 'YuMincho', 'Hiragino Mincho Pro', serif" }}>
                特別サービス
              </h3>
              <p className="text-gray-700 leading-relaxed font-light">
                フィッティング相談、メンテナンス指導、
                次回使える割引クーポンなど特典満載！
              </p>
            </motion.div>
          </div>

          {/* アクセス情報 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="bg-white border border-gray-200 p-12"
          >
            <h3 className="text-2xl md:text-3xl font-light text-gray-800 mb-8 text-center tracking-wider"
                style={{ fontFamily: "'Noto Serif JP', 'Yu Mincho', 'YuMincho', 'Hiragino Mincho Pro', serif" }}>
              アクセス・お問い合わせ
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-xl font-light text-gray-800 mb-4 tracking-wide"
                    style={{ fontFamily: "'Noto Serif JP', 'Yu Mincho', 'YuMincho', 'Hiragino Mincho Pro', serif" }}>
                  所在地
                </h4>
                <p className="text-gray-700 text-lg leading-relaxed mb-4 font-light">
                  〒730-0000<br />
                  広島市〇〇区〇〇町1-2-3<br />
                  橋本靴店 本社倉庫
                </p>
                <h4 className="text-xl font-light text-gray-800 mb-4 tracking-wide"
                    style={{ fontFamily: "'Noto Serif JP', 'Yu Mincho', 'YuMincho', 'Hiragino Mincho Pro', serif" }}>
                  交通手段
                </h4>
                <ul className="text-gray-700 space-y-2 font-light">
                  <li>JR〇〇駅より徒歩15分</li>
                  <li>広島電鉄〇〇停留所より徒歩8分</li>
                  <li>無料駐車場50台完備</li>
                </ul>
              </div>
              <div>
                <h4 className="text-xl font-light text-gray-800 mb-4 tracking-wide"
                    style={{ fontFamily: "'Noto Serif JP', 'Yu Mincho', 'YuMincho', 'Hiragino Mincho Pro', serif" }}>
                  お問い合わせ
                </h4>
                <p className="text-gray-700 text-lg leading-relaxed mb-4 font-light">
                  TEL: 082-XXX-XXXX<br />
                  営業時間: 10:00〜17:00<br />
                  定休日: 日曜・祝日
                </p>
                <motion.a 
                  href="tel:082-XXX-XXXX"
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
    </main>
  );
}
