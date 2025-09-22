"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function HobbyPage() {
  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-4xl mx-auto px-4 py-16">
        {/* ヘッダー */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-light text-gray-800 mb-6 tracking-wider">
            OTHER CONTENTS
          </h1>
          <p className="text-lg text-gray-600 font-light">スタッフの自己紹介と趣味の世界</p>
        </motion.div>

        {/* 店長プロフィール */}
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
                店長・橋本昌幸（はしもとまさゆき）
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                大学卒業後サラリーマンとして6年間務め、色々考えた結果、家業の世界に飛び込む。
                レディースシューズという未知の世界だったが、自分で考えた商品やサービスがお客様に喜んでいただけることが何よりも幸福と知る。
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                <span className="font-medium">趣味:</span> バドミントン、AI
              </p>
              <p className="text-gray-600 leading-relaxed">
                <span className="font-medium">欠点:</span> 記憶力がかなり悪い
              </p>
            </div>
          </div>
        </motion.div>

        {/* 代表取締役プロフィール */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 mb-12"
        >
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/3">
              <div className="w-48 h-48 mx-auto bg-gray-200 rounded-full flex items-center justify-center">
                <span className="text-gray-500 text-sm">代表の写真</span>
              </div>
            </div>
            <div className="md:w-2/3">
              <h2 className="text-2xl font-light text-gray-800 mb-4">
                代表取締役・橋本良裕（はしもとよしひろ）
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                橋本商店の社長の看板を背負って24年。幾多の困難を乗り越え今に至る。
                商品の目利き力はピカイチ！
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                <span className="font-medium">趣味:</span> ジャズレコード
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                様々な公民館でレコード演奏会を開き毎回満員御礼の大好評イベント。
              </p>
              <p className="text-gray-600 leading-relaxed">
                <span className="font-medium">欠点:</span> 整理整頓がかなり苦手
              </p>
            </div>
          </div>
        </motion.div>

        {/* 趣味の世界セクション */}
        <div className="space-y-8">
          <h2 className="text-3xl font-light text-gray-800 mb-8 text-center">趣味の世界</h2>
          
          {/* 店長の趣味の世界 */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-lg shadow-sm border border-gray-200 p-8"
          >
            <h3 className="text-2xl font-light text-gray-800 mb-6 text-center">店長・橋本の趣味の世界</h3>
            
            <div className="grid md:grid-cols-2 gap-8">
              {/* 音楽生成AI */}
              <div className="text-center">
                <a
                  href="https://www.youtube.com/@%E3%81%9F%E3%82%8D%E3%81%86%E3%81%BE%E3%83%BC-v7w"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block hover:opacity-80 transition-opacity"
                >
                  <div className="mb-4">
                    <Image
                      src="/image-218-1536x768.png"
                      alt="音楽生成AIを使った音楽配信"
                      width={400}
                      height={200}
                      className="w-full h-48 object-cover rounded-lg border border-gray-200"
                    />
                  </div>
                  <h4 className="text-lg font-medium text-gray-800 mb-2">🎵 音楽生成AI</h4>
                  <p className="text-gray-600 text-sm">音楽生成AIを使った音楽配信</p>
                </a>
              </div>

              {/* 公式キャラクター */}
              <div className="text-center">
                <a
                  href="https://x.com/neko_pumps"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block hover:opacity-80 transition-opacity"
                >
                  <div className="mb-4">
                    <Image
                      src="/⑫.jpg"
                      alt="くつの橋本商店の公式キャラクター"
                      width={400}
                      height={200}
                      className="w-full h-48 object-cover rounded-lg border border-gray-200"
                    />
                  </div>
                  <h4 className="text-lg font-medium text-gray-800 mb-2">🐱 公式キャラクター</h4>
                  <p className="text-gray-600 text-sm">くつの橋本商店の公式キャラクター運用</p>
                </a>
              </div>
            </div>
          </motion.div>

          {/* 代表取締役の趣味の世界 */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white rounded-lg shadow-sm border border-gray-200 p-8"
          >
            <h3 className="text-2xl font-light text-gray-800 mb-6 text-center">代表取締役・橋本の趣味の世界</h3>
            
            <div className="text-center">
              <div className="mb-6">
                <Image
                  src="/ジャズ.jpg"
                  alt="ジャズレコードコレクション"
                  width={600}
                  height={300}
                  className="w-full max-w-2xl mx-auto h-64 object-cover rounded-lg border border-gray-200"
                />
              </div>
              <h4 className="text-xl font-medium text-gray-800 mb-4">🎷 ジャズレコードの世界</h4>
              <div className="max-w-2xl mx-auto text-left space-y-4">
                <p className="text-gray-600 leading-relaxed">
                  レコードのコレクションは数千枚！それが高じて公民館でジャズのレコード演奏会を実施したら大盛況。
                </p>
                <p className="text-gray-600 leading-relaxed">
                  毎回満員御礼の大好評イベントとなり、地域の皆様にジャズの魅力をお伝えしています。
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
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-blue-50 rounded-lg p-8 mt-12 text-center"
        >
          <h3 className="text-xl font-light text-gray-800 mb-4">
            個性豊かなスタッフがお待ちしています
          </h3>
          <p className="text-gray-600 leading-relaxed max-w-2xl mx-auto">
            それぞれ異なる個性と趣味を持つスタッフが、
            お客様に最適な靴選びと心のこもったサービスを提供いたします。
            ぜひお気軽にお声かけください。
          </p>
        </motion.div>
      </div>
    </div>
  );
}
