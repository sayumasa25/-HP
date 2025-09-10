"use client";
import { motion } from "framer-motion";

export default function CompanyPage() {
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
              会社情報
            </h1>
            <p className="text-2xl md:text-3xl text-white mb-12 max-w-4xl mx-auto leading-relaxed">
              1922年創業、100年の歴史を持つ<br />
              <span className="text-yellow-400 font-bold">レディースシューズ専門店</span>
            </p>
          </motion.div>
        </div>
      </section>

      {/* 会社概要セクション */}
      <section className="py-20 relative">
        <div className="max-w-screen-xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-r from-indigo-800/50 to-purple-800/50 backdrop-blur-lg rounded-3xl p-12 border border-indigo-500/30 mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 text-center">
              🏢 会社概要
            </h2>
            <div className="text-xl text-gray-200 leading-relaxed max-w-4xl mx-auto">
              <p className="mb-6">
                株式会社橋本商店は、広島を拠点とするレディースシューズの専門店です。
                百貨店やオンラインストアを通じて、30代〜50代女性を中心に、高品質かつ履き心地にこだわった商品を展開しています。
              </p>
              <p>
                創業以来、時代の流れに柔軟に対応しつつも、「お客様に寄り添う靴づくり」を変わらぬ信念として貫いています。
              </p>
            </div>
          </motion.div>

          {/* 企業理念セクション */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="bg-gradient-to-r from-pink-800/50 to-red-800/50 backdrop-blur-lg rounded-3xl p-12 border border-pink-500/30 mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 text-center">
              💎 企業理念
            </h2>
            <div className="text-center">
              <div className="text-2xl md:text-3xl text-white font-bold mb-8 leading-relaxed">
                私たちは、靴づくりを通じて<br />
                「歩く喜び」と「自己表現の自由」を<br />
                すべての女性に届けることを使命としています。
              </div>
              <div className="text-xl text-gray-200 leading-relaxed max-w-3xl mx-auto">
                品質に妥協せず、変化を恐れず、<br />
                100年先も選ばれるブランドであり続けます。
              </div>
            </div>
          </motion.div>

          {/* 会社データ */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="bg-gradient-to-br from-green-800/50 to-teal-800/50 backdrop-blur-lg rounded-2xl p-8 border border-green-500/30"
            >
              <h3 className="text-2xl font-bold text-white mb-6 text-center">📊 会社データ</h3>
              <div className="space-y-4 text-gray-300">
                <div className="flex justify-between">
                  <span>創業年</span>
                  <span className="text-white font-bold">1922年</span>
                </div>
                <div className="flex justify-between">
                  <span>本社所在地</span>
                  <span className="text-white font-bold">〒733-0833<br />広島市西区商工センター2-9-32</span>
                </div>
                <div className="flex justify-between">
                  <span>電話番号</span>
                  <span className="text-white font-bold">082-277-2671</span>
                </div>
                <div className="flex justify-between">
                  <span>事業内容</span>
                  <span className="text-white font-bold">レディースシューズ製造・販売</span>
                </div>
                <div className="flex justify-between">
                  <span>主要顧客層</span>
                  <span className="text-white font-bold">30代〜50代女性</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="bg-gradient-to-br from-blue-800/50 to-cyan-800/50 backdrop-blur-lg rounded-2xl p-8 border border-blue-500/30"
            >
              <h3 className="text-2xl font-bold text-white mb-6 text-center">🎯 事業展開</h3>
              <div className="space-y-4 text-gray-300">
                <div className="flex items-center">
                  <span className="text-2xl mr-3">🏬</span>
                  <span>百貨店での店舗展開</span>
                </div>
                <div className="flex items-center">
                  <span className="text-2xl mr-3">🛒</span>
                  <span>BASE・楽天市場でのEC販売</span>
                </div>
                <div className="flex items-center">
                  <span className="text-2xl mr-3">🏪</span>
                  <span>広島での直販イベント</span>
                </div>
                <div className="flex items-center">
                  <span className="text-2xl mr-3">🚀</span>
                  <span>デベロッパー向けPOPUP出展</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* プライバシーポリシー */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="bg-gradient-to-r from-gray-800/50 to-slate-800/50 backdrop-blur-lg rounded-3xl p-12 border border-gray-500/30"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 text-center">
              🔒 プライバシーポリシー
            </h2>
            <div className="text-lg text-gray-200 leading-relaxed max-w-4xl mx-auto">
              <p className="mb-6">
                株式会社橋本商店（以下「当社」）は、お客様の個人情報の保護を重要な責務と認識し、以下の通りプライバシーポリシーを定めます。
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white/10 rounded-2xl p-6">
                  <h4 className="text-xl font-bold text-white mb-4">📋 基本方針</h4>
                  <ul className="space-y-2 text-gray-300">
                    <li>• 個人情報の取得、利用目的の明示</li>
                    <li>• 利用目的以外での使用の禁止</li>
                    <li>• 安全管理措置の実施</li>
                  </ul>
                </div>
                <div className="bg-white/10 rounded-2xl p-6">
                  <h4 className="text-xl font-bold text-white mb-4">🛡️ お客様の権利</h4>
                  <ul className="space-y-2 text-gray-300">
                    <li>• 第三者提供の制限</li>
                    <li>• 開示・訂正・削除の対応</li>
                    <li>• お問い合わせ対応</li>
                  </ul>
                </div>
              </div>
              <p className="mt-6 text-center text-gray-300">
                その他詳細は当社までお問い合わせください。
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
