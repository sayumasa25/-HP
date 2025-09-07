"use client";
import { motion } from "framer-motion";

export default function HiroshimaPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-r from-pink-500/20 to-yellow-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full blur-3xl animate-bounce"></div>
        </div>

        <div className="relative z-10 max-w-screen-xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent mb-8">
              🏪 広島在住のお客様へ
            </h1>
            <p className="text-2xl md:text-3xl text-white mb-12 max-w-4xl mx-auto leading-relaxed">
              地元だからこそ実現できる<br />
              <span className="text-yellow-400 font-bold">最安値での直販</span>をご提供！
            </p>
          </motion.div>
        </div>
      </section>

      {/* 倉庫大開放市セクション */}
      <section className="py-20 relative">
        <div className="max-w-screen-xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-r from-red-600/80 to-pink-600/80 backdrop-blur-lg rounded-3xl p-12 border border-red-500/30 text-center mb-16"
          >
            <div className="text-6xl mb-6">🎉</div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              倉庫大開放市 開催中！
            </h2>
            <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
              工場直販だから実現できる驚きの価格<br />
              通常価格の<span className="text-yellow-300 font-bold text-3xl">30〜50%OFF</span>
            </p>
            <div className="grid md:grid-cols-2 gap-8 text-left">
              <div className="bg-white/10 rounded-2xl p-6">
                <h3 className="text-2xl font-bold text-white mb-4">📅 開催日程</h3>
                <ul className="text-white/90 space-y-2">
                  <li>• 毎月第2・第4土曜日</li>
                  <li>• 10:00〜17:00</li>
                  <li>• 予約不要・入場無料</li>
                </ul>
              </div>
              <div className="bg-white/10 rounded-2xl p-6">
                <h3 className="text-2xl font-bold text-white mb-4">📍 会場</h3>
                <ul className="text-white/90 space-y-2">
                  <li>• 橋本靴店 本社倉庫</li>
                  <li>• 広島市〇〇区〇〇町1-2-3</li>
                  <li>• 駐車場完備（50台）</li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* 特典セクション */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="bg-gradient-to-br from-green-800/50 to-teal-800/50 backdrop-blur-lg rounded-2xl p-8 border border-green-500/30 text-center"
            >
              <div className="text-4xl mb-4">💰</div>
              <h3 className="text-2xl font-bold text-white mb-4">最安値保証</h3>
              <p className="text-gray-300 leading-relaxed">
                オンラインストアや他店舗よりも確実にお安くご提供。
                中間マージンを一切カットした工場直販価格です。
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="bg-gradient-to-br from-purple-800/50 to-pink-800/50 backdrop-blur-lg rounded-2xl p-8 border border-purple-500/30 text-center"
            >
              <div className="text-4xl mb-4">👠</div>
              <h3 className="text-2xl font-bold text-white mb-4">豊富な在庫</h3>
              <p className="text-gray-300 leading-relaxed">
                サイズ・カラー・デザインの豊富な在庫から
                お気に入りの一足をその場でお選びいただけます。
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="bg-gradient-to-br from-blue-800/50 to-cyan-800/50 backdrop-blur-lg rounded-2xl p-8 border border-blue-500/30 text-center"
            >
              <div className="text-4xl mb-4">🎁</div>
              <h3 className="text-2xl font-bold text-white mb-4">特別サービス</h3>
              <p className="text-gray-300 leading-relaxed">
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
            className="bg-gradient-to-r from-indigo-800/50 to-purple-800/50 backdrop-blur-lg rounded-3xl p-12 border border-indigo-500/30"
          >
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">
              🚗 アクセス・お問い合わせ
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-2xl font-bold text-white mb-4">📍 所在地</h4>
                <p className="text-gray-300 text-lg leading-relaxed mb-4">
                  〒730-0000<br />
                  広島市〇〇区〇〇町1-2-3<br />
                  橋本靴店 本社倉庫
                </p>
                <h4 className="text-2xl font-bold text-white mb-4">🚌 交通手段</h4>
                <ul className="text-gray-300 space-y-2">
                  <li>• JR〇〇駅より徒歩15分</li>
                  <li>• 広島電鉄〇〇停留所より徒歩8分</li>
                  <li>• 無料駐車場50台完備</li>
                </ul>
              </div>
              <div>
                <h4 className="text-2xl font-bold text-white mb-4">📞 お問い合わせ</h4>
                <p className="text-gray-300 text-lg leading-relaxed mb-4">
                  TEL: 082-XXX-XXXX<br />
                  営業時間: 10:00〜17:00<br />
                  定休日: 日曜・祝日
                </p>
                <motion.button 
                  className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-4 rounded-full font-bold text-lg shadow-2xl transform hover:scale-105 transition-all duration-300 w-full"
                  whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(255,0,255,0.3)" }}
                  whileTap={{ scale: 0.95 }}
                >
                  📞 今すぐお電話
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
