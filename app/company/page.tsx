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
            <h1
              className="text-4xl md:text-5xl font-light text-gray-800 mb-6 tracking-wider"
              style={{
                fontFamily:
                  "'Noto Serif JP', 'Yu Mincho', 'YuMincho', 'Hiragino Mincho Pro', serif",
              }}
            >
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
            <h2
              className="text-3xl md:text-4xl font-light text-gray-800 mb-8 text-center tracking-wide"
              style={{
                fontFamily:
                  "'Noto Serif JP', 'Yu Mincho', 'YuMincho', 'Hiragino Mincho Pro', serif",
              }}
            >
              COMPANY PROFILE
            </h2>
            <p className="text-center text-gray-600 font-light mb-12">
              会社概要
            </p>

            <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
              <div className="grid md:grid-cols-2 gap-0">
                {/* 会社情報 */}
                <div className="p-8 md:p-12">
                  <div className="space-y-4 text-gray-700 font-light">
                    <motion.div 
                      initial={{ opacity: 0, x: -50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.1 }}
                      className="flex flex-col md:flex-row md:justify-between border-b border-gray-100 pb-3"
                    >
                      <span className="font-medium mb-1 md:mb-0">会社名</span>
                      <span>株式会社橋本商店</span>
                    </motion.div>
                    <motion.div 
                      initial={{ opacity: 0, x: -50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                      className="flex flex-col md:flex-row md:justify-between border-b border-gray-100 pb-3"
                    >
                      <span className="font-medium mb-1 md:mb-0">インボイス登録番号</span>
                      <span>T6240001008896</span>
                    </motion.div>
                    <motion.div 
                      initial={{ opacity: 0, x: -50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.3 }}
                      className="flex flex-col md:flex-row md:justify-between border-b border-gray-100 pb-3"
                    >
                      <span className="font-medium mb-1 md:mb-0">代表者</span>
                      <span>代表取締役社長　橋本良裕</span>
                    </motion.div>
                    <motion.div 
                      initial={{ opacity: 0, x: -50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                      className="flex flex-col md:flex-row md:justify-between border-b border-gray-100 pb-3"
                    >
                      <span className="font-medium mb-1 md:mb-0">住所</span>
                      <span className="md:text-right">広島県 広島市西区商工センター2丁目9-32</span>
                    </motion.div>
                    <motion.div 
                      initial={{ opacity: 0, x: -50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.5 }}
                      className="flex flex-col md:flex-row md:justify-between border-b border-gray-100 pb-3"
                    >
                      <span className="font-medium mb-1 md:mb-0">アクセス</span>
                      <span className="md:text-right">JR新井口駅より徒歩14分。エクセル様の斜め向かいです。駐車場ご利用いただけます。</span>
                    </motion.div>
                    <motion.div 
                      initial={{ opacity: 0, x: -50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.6 }}
                      className="flex flex-col md:flex-row md:justify-between border-b border-gray-100 pb-3"
                    >
                      <span className="font-medium mb-1 md:mb-0">創立</span>
                      <span>1922年11月</span>
                    </motion.div>
                    <motion.div 
                      initial={{ opacity: 0, x: -50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.7 }}
                      className="flex flex-col md:flex-row md:justify-between border-b border-gray-100 pb-3"
                    >
                      <span className="font-medium mb-1 md:mb-0">設立</span>
                      <span>1952年1月</span>
                    </motion.div>
                    <motion.div 
                      initial={{ opacity: 0, x: -50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.8 }}
                      className="flex flex-col md:flex-row md:justify-between border-b border-gray-100 pb-3"
                    >
                      <span className="font-medium mb-1 md:mb-0">電話番号</span>
                      <span>082-277-2671</span>
                    </motion.div>
                    <motion.div 
                      initial={{ opacity: 0, x: -50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.9 }}
                      className="flex flex-col md:flex-row md:justify-between border-b border-gray-100 pb-3"
                    >
                      <span className="font-medium mb-1 md:mb-0">事業内容</span>
                      <span className="md:text-right">婦人靴の卸売り販売、ウェブ制作</span>
                    </motion.div>
                  </div>
                </div>

                {/* Googleマップ */}
                <motion.div 
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="relative h-96 md:h-full min-h-[400px]"
                >
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3272.8!2d132.4!3d34.4!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2z5bqD5bO25biC6KW_5Yy65ZWG5bel44K744Oz44K_44O8MuS4geebrjktMzI!5e0!3m2!1sja!2sjp!4v1640000000000!5m2!1sja!2sjp"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="absolute inset-0"
                  ></iframe>
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-2 rounded-lg shadow-sm">
                    <p className="text-sm font-medium text-gray-800">📍 株式会社橋本商店</p>
                    <p className="text-xs text-gray-600">広島市西区商工センター2-9-32</p>
                  </div>
                </motion.div>
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
            <h2
              className="text-3xl md:text-4xl font-light text-gray-800 mb-8 text-center tracking-wide"
              style={{
                fontFamily:
                  "'Noto Serif JP', 'Yu Mincho', 'YuMincho', 'Hiragino Mincho Pro', serif",
              }}
            >
              HISTORY
            </h2>
            <p className="text-center text-gray-600 font-light mb-12">沿革</p>

            <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
              {/* タイムライン */}
              <div className="relative">
                {/* 縦線（デスクトップ用） */}
                <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-200 via-blue-400 to-orange-400 transform -translate-x-1/2"></div>
                
                <div className="space-y-0">
                  {/* 1922年 */}
                  <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="relative"
                  >
                    <div className="md:flex md:items-center">
                      <div className="md:w-1/2 md:pr-8 p-6 md:p-8">
                        <div className="bg-blue-50 rounded-lg p-6 relative">
                          <div className="flex items-center mb-4">
                            <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm mr-4">
                              1922
                            </div>
                            <h3 className="text-lg font-medium text-gray-800">創業</h3>
                          </div>
                          <p className="text-gray-700 leading-relaxed">
                            初代 橋本登が広島市安佐北区中深川にて、履物卸商を創業。
                          </p>
                          {/* デスクトップ用矢印 */}
                          <div className="hidden md:block absolute top-1/2 -right-3 w-0 h-0 border-l-6 border-l-blue-50 border-t-6 border-t-transparent border-b-6 border-b-transparent transform -translate-y-1/2"></div>
                        </div>
                      </div>
                      <div className="hidden md:block md:w-1/2 md:pl-8 p-6">
                        <div className="w-full h-48 bg-gradient-to-br from-amber-100 to-amber-200 rounded-lg overflow-hidden relative">
                          <img
                            src="/初代.jpg"
                            alt="初代 橋本登"
                            className="w-full h-full object-contain"
                            style={{ objectPosition: 'center center' }}
                          />
                          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3">
                            <p className="text-white text-sm font-medium text-center">初代 橋本登</p>
                          </div>
                        </div>
                      </div>
                      {/* 中央のドット */}
                      <div className="hidden md:block absolute left-1/2 top-1/2 w-4 h-4 bg-blue-600 rounded-full transform -translate-x-1/2 -translate-y-1/2 border-4 border-white shadow-lg"></div>
                    </div>
                  </motion.div>

                  {/* 1924年 */}
                  <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="relative"
                  >
                    <div className="md:flex md:items-center md:flex-row-reverse">
                      <div className="md:w-1/2 md:pl-8 p-6 md:p-8">
                        <div className="bg-green-50 rounded-lg p-6 relative">
                          <div className="flex items-center mb-4">
                            <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white font-bold text-sm mr-4">
                              1924
                            </div>
                            <h3 className="text-lg font-medium text-gray-800">移転</h3>
                          </div>
                          <p className="text-gray-700 leading-relaxed">
                            広島市中区本川町2丁目に移転
                          </p>
                          {/* デスクトップ用矢印 */}
                          <div className="hidden md:block absolute top-1/2 -left-3 w-0 h-0 border-r-6 border-r-green-50 border-t-6 border-t-transparent border-b-6 border-b-transparent transform -translate-y-1/2"></div>
                        </div>
                      </div>
                      <div className="hidden md:block md:w-1/2 md:pr-8 p-6">
                        <div className="w-full h-48 bg-gradient-to-br from-green-100 to-green-200 rounded-lg flex items-center justify-center">
                          <div className="text-center text-green-800">
                            <div className="text-4xl mb-2">🏢</div>
                            <p className="text-sm font-medium">本川町への移転</p>
                          </div>
                        </div>
                      </div>
                      {/* 中央のドット */}
                      <div className="hidden md:block absolute left-1/2 top-1/2 w-4 h-4 bg-green-600 rounded-full transform -translate-x-1/2 -translate-y-1/2 border-4 border-white shadow-lg"></div>
                    </div>
                  </motion.div>

                  {/* 1952年 */}
                  <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="relative"
                  >
                    <div className="md:flex md:items-center">
                      <div className="md:w-1/2 md:pr-8 p-6 md:p-8">
                        <div className="bg-purple-50 rounded-lg p-6 relative">
                          <div className="flex items-center mb-4">
                            <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold text-sm mr-4">
                              1952
                            </div>
                            <h3 className="text-lg font-medium text-gray-800">法人化</h3>
                          </div>
                          <p className="text-gray-700 leading-relaxed">
                            株式会社組織に変更。資本金500万円。2代目 橋本栄一が代表取締役に就任。
                          </p>
                          {/* デスクトップ用矢印 */}
                          <div className="hidden md:block absolute top-1/2 -right-3 w-0 h-0 border-l-6 border-l-purple-50 border-t-6 border-t-transparent border-b-6 border-b-transparent transform -translate-y-1/2"></div>
                        </div>
                      </div>
                      <div className="hidden md:block md:w-1/2 md:pl-8 p-6">
                        <div className="w-full h-48 bg-gradient-to-br from-purple-100 to-purple-200 rounded-lg overflow-hidden relative">
                          <img
                            src="/2代目.jpg"
                            alt="2代目 橋本栄一"
                            className="w-full h-full object-contain"
                            style={{ objectPosition: 'center center' }}
                          />
                          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3">
                            <p className="text-white text-sm font-medium text-center">2代目 橋本栄一</p>
                          </div>
                        </div>
                      </div>
                      {/* 中央のドット */}
                      <div className="hidden md:block absolute left-1/2 top-1/2 w-4 h-4 bg-purple-600 rounded-full transform -translate-x-1/2 -translate-y-1/2 border-4 border-white shadow-lg"></div>
                    </div>
                  </motion.div>

                  {/* 1980年 */}
                  <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="relative"
                  >
                    <div className="md:flex md:items-center md:flex-row-reverse">
                      <div className="md:w-1/2 md:pl-8 p-6 md:p-8">
                        <div className="bg-indigo-50 rounded-lg p-6 relative">
                          <div className="flex items-center mb-4">
                            <div className="w-12 h-12 bg-indigo-600 rounded-full flex items-center justify-center text-white font-bold text-sm mr-4">
                              1980
                            </div>
                            <h3 className="text-lg font-medium text-gray-800">拡張</h3>
                          </div>
                          <p className="text-gray-700 leading-relaxed">
                            業務拡張の為、西区商工センターに移転。同時に資本金を1500万に増資。
                          </p>
                          {/* デスクトップ用矢印 */}
                          <div className="hidden md:block absolute top-1/2 -left-3 w-0 h-0 border-r-6 border-r-indigo-50 border-t-6 border-t-transparent border-b-6 border-b-transparent transform -translate-y-1/2"></div>
                        </div>
                      </div>
                      <div className="hidden md:block md:w-1/2 md:pr-8 p-6">
                        <div className="w-full h-48 bg-gradient-to-br from-indigo-100 to-indigo-200 rounded-lg flex items-center justify-center">
                          <div className="text-center text-indigo-800">
                            <div className="text-4xl mb-2">🏭</div>
                            <p className="text-sm font-medium">商工センター移転</p>
                          </div>
                        </div>
                      </div>
                      {/* 中央のドット */}
                      <div className="hidden md:block absolute left-1/2 top-1/2 w-4 h-4 bg-indigo-600 rounded-full transform -translate-x-1/2 -translate-y-1/2 border-4 border-white shadow-lg"></div>
                    </div>
                  </motion.div>

                  {/* 2001年 */}
                  <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="relative"
                  >
                    <div className="md:flex md:items-center">
                      <div className="md:w-1/2 md:pr-8 p-6 md:p-8">
                        <div className="bg-teal-50 rounded-lg p-6 relative">
                          <div className="flex items-center mb-4">
                            <div className="w-12 h-12 bg-teal-600 rounded-full flex items-center justify-center text-white font-bold text-sm mr-4">
                              2001
                            </div>
                            <h3 className="text-lg font-medium text-gray-800">世代交代</h3>
                          </div>
                          <p className="text-gray-700 leading-relaxed">
                            3代目 橋本良裕が代表取締役に就任。デパートでレディースシューズ販売を本格化させる。
                          </p>
                          {/* デスクトップ用矢印 */}
                          <div className="hidden md:block absolute top-1/2 -right-3 w-0 h-0 border-l-6 border-l-teal-50 border-t-6 border-t-transparent border-b-6 border-b-transparent transform -translate-y-1/2"></div>
                        </div>
                      </div>
                      <div className="hidden md:block md:w-1/2 md:pl-8 p-6">
                        <div className="w-full h-48 bg-gradient-to-br from-teal-100 to-teal-200 rounded-lg overflow-hidden relative">
                          <img
                            src="/3代目.png"
                            alt="3代目 橋本良裕"
                            className="w-full h-full object-contain"
                            style={{ objectPosition: 'center center' }}
                          />
                          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3">
                            <p className="text-white text-sm font-medium text-center">3代目 橋本良裕</p>
                          </div>
                        </div>
                      </div>
                      {/* 中央のドット */}
                      <div className="hidden md:block absolute left-1/2 top-1/2 w-4 h-4 bg-teal-600 rounded-full transform -translate-x-1/2 -translate-y-1/2 border-4 border-white shadow-lg"></div>
                    </div>
                  </motion.div>

                  {/* 2022年 */}
                  <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="relative"
                  >
                    <div className="md:flex md:items-center md:flex-row-reverse">
                      <div className="md:w-1/2 md:pl-8 p-6 md:p-8">
                        <div className="bg-orange-50 rounded-lg p-6 relative border-2 border-orange-200">
                          <div className="flex items-center mb-4">
                            <div className="w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center text-white font-bold text-sm mr-4">
                              2022
                            </div>
                            <h3 className="text-lg font-medium text-gray-800">100周年</h3>
                          </div>
                          <p className="text-gray-700 leading-relaxed font-medium">
                            創業100周年を迎える。
                          </p>
                          {/* デスクトップ用矢印 */}
                          <div className="hidden md:block absolute top-1/2 -left-3 w-0 h-0 border-r-6 border-r-orange-50 border-t-6 border-t-transparent border-b-6 border-b-transparent transform -translate-y-1/2"></div>
                        </div>
                      </div>
                      <div className="hidden md:block md:w-1/2 md:pr-8 p-6">
                        <div className="w-full h-48 bg-gradient-to-br from-orange-100 to-orange-200 rounded-lg flex items-center justify-center border-2 border-orange-200">
                          <div className="text-center text-orange-800">
                            <div className="text-4xl mb-2">🎉</div>
                            <p className="text-sm font-medium">創業100周年記念</p>
                          </div>
                        </div>
                      </div>
                      {/* 中央のドット */}
                      <div className="hidden md:block absolute left-1/2 top-1/2 w-6 h-6 bg-orange-600 rounded-full transform -translate-x-1/2 -translate-y-1/2 border-4 border-white shadow-lg flex items-center justify-center">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                    </div>
                  </motion.div>

                  {/* 2026年 */}
                  <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="relative"
                  >
                    <div className="md:flex md:items-center">
                      <div className="md:w-1/2 md:pr-8 p-6 md:p-8">
                        <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg p-6 relative border-2 border-dashed border-blue-300">
                          <div className="flex items-center mb-4">
                            <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-sm mr-4">
                              2026
                            </div>
                            <h3 className="text-lg font-medium text-gray-800">新時代へ</h3>
                          </div>
                          <p className="text-gray-700 leading-relaxed">
                            4代目 橋本昌幸が代表取締役に就任（予定）。
                          </p>
                          <div className="mt-3 inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-medium">
                            予定
                          </div>
                          {/* デスクトップ用矢印 */}
                          <div className="hidden md:block absolute top-1/2 -right-3 w-0 h-0 border-l-6 border-l-blue-50 border-t-6 border-t-transparent border-b-6 border-b-transparent transform -translate-y-1/2"></div>
                        </div>
                      </div>
                      <div className="hidden md:block md:w-1/2 md:pl-8 p-6">
                        <div className="w-full h-48 bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 rounded-lg overflow-hidden relative border-2 border-dashed border-blue-300">
                          <img
                            src="/4代目.jpg"
                            alt="4代目 橋本昌幸"
                            className="w-full h-full object-contain"
                            style={{ objectPosition: 'center center' }}
                          />
                          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3">
                            <p className="text-white text-sm font-medium text-center">4代目 橋本昌幸</p>
                          </div>
                          <div className="absolute top-3 right-3 bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-medium border border-blue-300">
                            予定
                          </div>
                        </div>
                      </div>
                      {/* 中央のドット */}
                      <div className="hidden md:block absolute left-1/2 top-1/2 w-4 h-4 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full transform -translate-x-1/2 -translate-y-1/2 border-4 border-white shadow-lg"></div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
