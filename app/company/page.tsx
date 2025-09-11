"use client";
import { motion } from "framer-motion";

export default function CompanyPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-white">
        <div className="max-w-screen-xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl font-light text-gray-800 mb-6 tracking-wider"
                style={{ fontFamily: "'Noto Serif JP', 'Yu Mincho', 'YuMincho', 'Hiragino Mincho Pro', serif" }}>
              COMPANY
            </h1>
            <p className="text-lg text-gray-600 font-light">会社情報</p>
          </motion.div>
        </div>
      </section>

      {/* 会社概要セクション */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-screen-xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-light text-gray-800 mb-8 text-center tracking-wide"
                style={{ fontFamily: "'Noto Serif JP', 'Yu Mincho', 'YuMincho', 'Hiragino Mincho Pro', serif" }}>
              COMPANY PROFILE
            </h2>
            <p className="text-center text-gray-600 font-light mb-12">会社概要</p>
            
            <div className="bg-white p-8 md:p-12 border border-gray-200">
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div>
                  <h3 className="text-xl font-light text-gray-800 mb-6 tracking-wide"
                      style={{ fontFamily: "'Noto Serif JP', 'Yu Mincho', 'YuMincho', 'Hiragino Mincho Pro', serif" }}>
                    会社情報
                  </h3>
                  <div className="space-y-4 text-gray-700 font-light">
                    <div className="flex justify-between border-b border-gray-100 pb-2">
                      <span>会社名</span>
                      <span>くつの橋本商店</span>
                    </div>
                    <div className="flex justify-between border-b border-gray-100 pb-2">
                      <span>創業</span>
                      <span>1922年</span>
                    </div>
                    <div className="flex justify-between border-b border-gray-100 pb-2">
                      <span>所在地</span>
                      <span>〒733-0833<br />広島市西区商工センター2-9-32</span>
                    </div>
                    <div className="flex justify-between border-b border-gray-100 pb-2">
                      <span>電話番号</span>
                      <span>082-277-2671</span>
                    </div>
                    <div className="flex justify-between border-b border-gray-100 pb-2">
                      <span>事業内容</span>
                      <span>レディースシューズの製造・販売</span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-light text-gray-800 mb-6 tracking-wide"
                      style={{ fontFamily: "'Noto Serif JP', 'Yu Mincho', 'YuMincho', 'Hiragino Mincho Pro', serif" }}>
                    事業展開
                  </h3>
                  <div className="space-y-4 text-gray-700 font-light">
                    <div className="flex items-start">
                      <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>オンラインストア（BASE・楽天市場）</span>
                    </div>
                    <div className="flex items-start">
                      <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>百貨店・商業施設でのPOPUP・催事イベント</span>
                    </div>
                    <div className="flex items-start">
                      <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>広島での直販イベント（倉庫大開放市）</span>
                    </div>
                    <div className="flex items-start">
                      <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>全国への配送サービス</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="text-center">
                <p className="text-gray-700 font-light leading-relaxed max-w-4xl mx-auto">
                  くつの橋本商店は、1922年の創業以来、広島を拠点とするレディースシューズの専門店として、
                  お客様一人ひとりの歩みを大切に考え、快適で美しい靴づくりに情熱を注いでまいりました。
                  時代の流れに柔軟に対応しつつも、「お客様に寄り添う靴づくり」を変わらぬ信念として貫いています。
                </p>
              </div>
            </div>
          </motion.div>

          {/* 沿革セクション */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-light text-gray-800 mb-8 text-center tracking-wide"
                style={{ fontFamily: "'Noto Serif JP', 'Yu Mincho', 'YuMincho', 'Hiragino Mincho Pro', serif" }}>
              HISTORY
            </h2>
            <p className="text-center text-gray-600 font-light mb-12">沿革</p>
            
            <div className="bg-white p-8 md:p-12 border border-gray-200">
              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="w-20 flex-shrink-0">
                    <span className="text-lg font-light text-gray-800">1922年</span>
                  </div>
                  <div className="w-4 h-4 bg-gray-400 rounded-full mt-1 mx-6 flex-shrink-0"></div>
                  <div className="flex-1">
                    <p className="text-gray-700 font-light">広島にて「橋本商店」として創業。地域密着型の靴店としてスタート。</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-20 flex-shrink-0">
                    <span className="text-lg font-light text-gray-800">1950年</span>
                  </div>
                  <div className="w-4 h-4 bg-gray-400 rounded-full mt-1 mx-6 flex-shrink-0"></div>
                  <div className="flex-1">
                    <p className="text-gray-700 font-light">戦後復興とともに事業を拡大。レディースシューズ専門店として方向性を確立。</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-20 flex-shrink-0">
                    <span className="text-lg font-light text-gray-800">1980年</span>
                  </div>
                  <div className="w-4 h-4 bg-gray-400 rounded-full mt-1 mx-6 flex-shrink-0"></div>
                  <div className="flex-1">
                    <p className="text-gray-700 font-light">百貨店への出店を開始。品質とデザインにこだわった商品で評価を得る。</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-20 flex-shrink-0">
                    <span className="text-lg font-light text-gray-800">2000年</span>
                  </div>
                  <div className="w-4 h-4 bg-gray-400 rounded-full mt-1 mx-6 flex-shrink-0"></div>
                  <div className="flex-1">
                    <p className="text-gray-700 font-light">インターネット時代の到来に合わせ、オンライン販売を開始。</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-20 flex-shrink-0">
                    <span className="text-lg font-light text-gray-800">2010年</span>
                  </div>
                  <div className="w-4 h-4 bg-gray-400 rounded-full mt-1 mx-6 flex-shrink-0"></div>
                  <div className="flex-1">
                    <p className="text-gray-700 font-light">楽天市場に出店。全国のお客様への販売網を拡大。</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-20 flex-shrink-0">
                    <span className="text-lg font-light text-gray-800">2018年</span>
                  </div>
                  <div className="w-4 h-4 bg-gray-400 rounded-full mt-1 mx-6 flex-shrink-0"></div>
                  <div className="flex-1">
                    <p className="text-gray-700 font-light">BASEでの販売を開始。より多様な販売チャネルを確立。</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-20 flex-shrink-0">
                    <span className="text-lg font-light text-gray-800">2020年</span>
                  </div>
                  <div className="w-4 h-4 bg-gray-400 rounded-full mt-1 mx-6 flex-shrink-0"></div>
                  <div className="flex-1">
                    <p className="text-gray-700 font-light">コロナ禍を機にオンライン販売を強化。デジタル化を推進。</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-20 flex-shrink-0">
                    <span className="text-lg font-light text-gray-800">2022年</span>
                  </div>
                  <div className="w-4 h-4 bg-orange-500 rounded-full mt-1 mx-6 flex-shrink-0"></div>
                  <div className="flex-1">
                    <p className="text-gray-700 font-light">創業100周年を迎える。次の100年に向けた新たな挑戦を開始。</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
