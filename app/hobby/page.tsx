"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function HobbyPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-16">
        {/* ヘッダー */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-light text-gray-800 mb-6 tracking-wider">
            店長・橋本趣味の世界
          </h1>
          <p className="text-lg text-gray-600 font-light">Hobby World of Hashimoto</p>
        </motion.div>

        {/* プロフィール */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 mb-8"
        >
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/3">
              <div className="w-48 h-48 mx-auto bg-gray-200 rounded-full flex items-center justify-center">
                <span className="text-gray-500 text-sm">店長の写真</span>
              </div>
            </div>
            <div className="md:w-2/3">
              <h2 className="text-2xl font-light text-gray-800 mb-4">
                橋本 雅史（はしもと まさし）
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                くつの橋本商店の店長として、お客様に最高の履き心地をお届けすることを使命としています。
                仕事以外では様々な趣味に没頭し、それらの経験が商品選びや接客にも活かされています。
              </p>
              <p className="text-gray-600 leading-relaxed">
                「靴は人生のパートナー」をモットーに、お客様一人ひとりに合った靴選びをサポートしています。
              </p>
            </div>
          </div>
        </motion.div>

        {/* 趣味セクション */}
        <div className="space-y-8">
          {/* 写真撮影 */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-lg shadow-sm border border-gray-200 p-8"
          >
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-1/3">
                <div className="w-full h-48 bg-gray-200 rounded-lg flex items-center justify-center">
                  <span className="text-gray-500 text-sm">📸 写真作品</span>
                </div>
              </div>
              <div className="md:w-2/3">
                <h3 className="text-xl font-light text-gray-800 mb-4">📸 写真撮影</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  風景写真を中心に、広島の美しい景色を撮影しています。
                  特に宮島の四季折々の表情を捉えることが好きで、
                  早朝や夕暮れ時の幻想的な光景を求めて足を運んでいます。
                </p>
                <p className="text-gray-600 leading-relaxed">
                  撮影で培った「瞬間を捉える集中力」は、
                  お客様のニーズを的確に把握する接客にも活かされています。
                </p>
              </div>
            </div>
          </motion.div>

          {/* 読書 */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white rounded-lg shadow-sm border border-gray-200 p-8"
          >
            <div className="flex flex-col md:flex-row-reverse gap-8">
              <div className="md:w-1/3">
                <div className="w-full h-48 bg-gray-200 rounded-lg flex items-center justify-center">
                  <span className="text-gray-500 text-sm">📚 愛読書</span>
                </div>
              </div>
              <div className="md:w-2/3">
                <h3 className="text-xl font-light text-gray-800 mb-4">📚 読書</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  ビジネス書から小説まで幅広く読書を楽しんでいます。
                  特に経営に関する書籍や、接客・サービス業に関する本を好んで読み、
                  日々の業務改善のヒントを探しています。
                </p>
                <p className="text-gray-600 leading-relaxed">
                  最近のお気に入りは「おもてなしの心」に関する書籍。
                  お客様により良いサービスを提供するための学びを続けています。
                </p>
              </div>
            </div>
          </motion.div>

          {/* 料理 */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-white rounded-lg shadow-sm border border-gray-200 p-8"
          >
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-1/3">
                <div className="w-full h-48 bg-gray-200 rounded-lg flex items-center justify-center">
                  <span className="text-gray-500 text-sm">🍳 料理作品</span>
                </div>
              </div>
              <div className="md:w-2/3">
                <h3 className="text-xl font-light text-gray-800 mb-4">🍳 料理</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  休日には家族のために料理を作ることが多く、
                  特に広島の郷土料理やお好み焼きを得意としています。
                  地元の新鮮な食材を使った料理を研究するのが楽しみです。
                </p>
                <p className="text-gray-600 leading-relaxed">
                  料理で培った「素材を活かす」という考え方は、
                  靴の素材の良さを最大限に引き出す商品選びにも通じています。
                </p>
              </div>
            </div>
          </motion.div>

          {/* ガーデニング */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="bg-white rounded-lg shadow-sm border border-gray-200 p-8"
          >
            <div className="flex flex-col md:flex-row-reverse gap-8">
              <div className="md:w-1/3">
                <div className="w-full h-48 bg-gray-200 rounded-lg flex items-center justify-center">
                  <span className="text-gray-500 text-sm">🌱 ガーデン</span>
                </div>
              </div>
              <div className="md:w-2/3">
                <h3 className="text-xl font-light text-gray-800 mb-4">🌱 ガーデニング</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  自宅の庭で季節の花や野菜を育てています。
                  特にバラの栽培に力を入れており、毎年美しい花を咲かせることを目標にしています。
                  土作りから始める丁寧な作業が好きです。
                </p>
                <p className="text-gray-600 leading-relaxed">
                  植物を育てる「継続的なケア」の大切さは、
                  お客様との長期的な信頼関係を築く接客姿勢にも反映されています。
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* メッセージ */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="bg-blue-50 rounded-lg p-8 mt-12 text-center"
        >
          <h3 className="text-xl font-light text-gray-800 mb-4">
            趣味から学ぶ、おもてなしの心
          </h3>
          <p className="text-gray-600 leading-relaxed max-w-2xl mx-auto">
            様々な趣味を通じて学んだ「丁寧さ」「継続性」「創造性」を、
            日々の接客やサービスに活かしています。
            お客様一人ひとりに合った最適な靴選びを、心を込めてサポートいたします。
          </p>
        </motion.div>
      </div>
    </div>
  );
}
