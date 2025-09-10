"use client";
import { motion } from "framer-motion";

export function ShoppingSection() {
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
          <h2 className="text-4xl md:text-5xl font-light text-gray-800 mb-6 tracking-wider"
              style={{ fontFamily: "'Noto Serif JP', 'Yu Mincho', 'YuMincho', 'Hiragino Mincho Pro', serif" }}>
            SHOPPING
          </h2>
          <p className="text-lg text-gray-600 font-light">お買い物方法</p>
          <p className="text-gray-700 font-light mt-4 max-w-2xl mx-auto">
            橋本商店の商品は3つの方法でご購入いただけます。お客様のライフスタイルに合わせてお選びください。
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* ONLINE SHOP */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center bg-gray-50 p-8 border border-gray-200"
          >
            <div className="text-4xl mb-6">🛒</div>
            <h3 className="text-2xl font-light text-gray-800 mb-6 tracking-wide"
                style={{ fontFamily: "'Noto Serif JP', 'Yu Mincho', 'YuMincho', 'Hiragino Mincho Pro', serif" }}>
              1. ONLINE SHOP
            </h3>
            <p className="text-gray-700 font-light mb-6 leading-relaxed">
              24時間いつでもお買い物いただけます。豊富な商品ラインナップからお選びください。
            </p>
            
            <div className="space-y-4">
              <motion.a 
                href="https://www.rakuten.co.jp/hs928/"
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-red-600 text-white px-6 py-3 font-light text-sm tracking-wide hover:bg-red-700 transition-colors duration-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                楽天市場店
              </motion.a>
              
              <motion.a 
                href="https://hs928.base.shop/"
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-gray-800 text-white px-6 py-3 font-light text-sm tracking-wide hover:bg-gray-700 transition-colors duration-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                BASE店
              </motion.a>
            </div>
          </motion.div>

          {/* POPUP/催事イベント */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center bg-gray-50 p-8 border border-gray-200"
          >
            <div className="text-4xl mb-6">🏪</div>
            <h3 className="text-2xl font-light text-gray-800 mb-6 tracking-wide"
                style={{ fontFamily: "'Noto Serif JP', 'Yu Mincho', 'YuMincho', 'Hiragino Mincho Pro', serif" }}>
              2. POPUP・催事イベント
            </h3>
            <p className="text-gray-700 font-light mb-6 leading-relaxed">
              デパートや商業施設での期間限定販売。実際に商品を手に取ってお選びいただけます。
            </p>
            
            <p className="text-sm text-gray-600 font-light mb-6">
              不定期開催のため<br />お問い合わせください。
            </p>
            
            <motion.a 
              href="/contact"
              className="inline-block border border-gray-800 text-gray-800 px-6 py-3 font-light text-sm tracking-wide hover:bg-gray-800 hover:text-white transition-colors duration-300"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              CONTACT
            </motion.a>
          </motion.div>

          {/* 自社販売 */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-center bg-gray-50 p-8 border border-gray-200"
          >
            <div className="text-4xl mb-6">🏭</div>
            <h3 className="text-2xl font-light text-gray-800 mb-6 tracking-wide"
                style={{ fontFamily: "'Noto Serif JP', 'Yu Mincho', 'YuMincho', 'Hiragino Mincho Pro', serif" }}>
              3. 自社販売
            </h3>
            <p className="text-gray-700 font-light mb-6 leading-relaxed">
              4半期に一度開催の倉庫大開放市がオススメです。直販だからこその特別価格でご提供。
            </p>
            
            <p className="text-sm text-gray-600 font-light mb-6">
              広島在住の方限定<br />最安値でご購入いただけます
            </p>
            
            <motion.a 
              href="/hiroshima"
              className="inline-block bg-orange-600 text-white px-6 py-3 font-light text-sm tracking-wide hover:bg-orange-700 transition-colors duration-300"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              詳しくはこちら
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
