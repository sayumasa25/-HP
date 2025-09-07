"use client";
import { motion } from "framer-motion";

export function AboutSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-r from-pink-500/20 to-purple-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-screen-xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent mb-6">
            ABOUT US
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            革新と伝統が融合する、新時代の婦人靴ブランド
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="bg-gradient-to-br from-purple-800/50 to-pink-800/50 backdrop-blur-lg rounded-2xl p-8 border border-purple-500/30"
          >
            <div className="text-4xl mb-4">🚀</div>
            <h3 className="text-2xl font-bold text-white mb-4">デベロッパー向け</h3>
            <p className="text-gray-300 leading-relaxed">
              POPUPイベントに出展中！最新技術を活用したスマートシューズや、
              開発者コミュニティ向けの特別な商品をご紹介しています。
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="bg-gradient-to-br from-cyan-800/50 to-blue-800/50 backdrop-blur-lg rounded-2xl p-8 border border-cyan-500/30"
          >
            <div className="text-4xl mb-4">👥</div>
            <h3 className="text-2xl font-bold text-white mb-4">一般のお客様</h3>
            <p className="text-gray-300 leading-relaxed">
              BASE・楽天市場でお気軽にお買い物いただけます。
              豊富な商品ラインナップから、あなたにぴったりの一足をお選びください。
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="bg-gradient-to-br from-green-800/50 to-teal-800/50 backdrop-blur-lg rounded-2xl p-8 border border-green-500/30"
          >
            <div className="text-4xl mb-4">🏪</div>
            <h3 className="text-2xl font-bold text-white mb-4">広島在住の方</h3>
            <p className="text-gray-300 leading-relaxed">
              倉庫大開放市で最安値でご購入いただけます！
              直販だからこそ実現できる特別価格でご提供しています。
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-purple-800/30 to-pink-800/30 backdrop-blur-lg rounded-3xl p-12 border border-purple-500/30">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
              創業からの想い
            </h3>
            <p className="text-xl text-gray-300 leading-relaxed max-w-4xl mx-auto">
              橋本靴店は、お客様一人ひとりの歩みを大切に考え、
              快適で美しい靴づくりに情熱を注いでまいりました。
              伝統的な職人技術と最新のテクノロジーを融合させ、
              新しい時代にふさわしい婦人靴をお届けしています。
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
