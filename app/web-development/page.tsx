"use client";
import { motion } from "framer-motion";
import { useState } from "react";

export default function WebDevelopmentPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <main className="min-h-screen bg-white pt-20">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden bg-gradient-to-br from-blue-100 via-indigo-200 to-purple-100">
        {/* キラキラ背景エフェクト */}
        <div className="absolute inset-0">
          {/* メイングラデーション */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 via-indigo-500/15 to-purple-400/20"></div>
          
          {/* キラキラパターン */}
          <div 
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage: `radial-gradient(circle at 25% 25%, rgba(59, 130, 246, 0.3) 0%, transparent 50%), 
                               radial-gradient(circle at 75% 75%, rgba(99, 102, 241, 0.3) 0%, transparent 50%),
                               radial-gradient(circle at 50% 50%, rgba(147, 51, 234, 0.2) 0%, transparent 50%)`,
              backgroundSize: '100px 100px, 150px 150px, 200px 200px',
              animation: 'sparkle 8s ease-in-out infinite'
            }}
          ></div>
          
          {/* 動的な光の点 */}
          <div className="absolute inset-0">
            <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400 rounded-full opacity-60 animate-pulse"></div>
            <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-indigo-300 rounded-full opacity-80 animate-ping"></div>
            <div className="absolute bottom-1/4 left-1/3 w-3 h-3 bg-purple-300 rounded-full opacity-40 animate-pulse"></div>
            <div className="absolute top-2/3 right-1/4 w-1 h-1 bg-blue-300 rounded-full opacity-70 animate-ping"></div>
            <div className="absolute bottom-1/3 right-2/3 w-2 h-2 bg-indigo-400 rounded-full opacity-50 animate-pulse"></div>
          </div>
        </div>
        
        {/* 装飾的なアイコン（より控えめに） */}
        <div className="absolute top-10 left-10 opacity-20 animate-float">
          <div className="text-6xl text-blue-600">💻</div>
        </div>
        <div className="absolute top-20 right-20 opacity-20 animate-float-delayed">
          <div className="text-5xl text-indigo-600">🚀</div>
        </div>
        <div className="absolute bottom-20 left-20 opacity-20 animate-float">
          <div className="text-4xl text-blue-500">⚡</div>
        </div>
        <div className="absolute bottom-10 right-10 opacity-20 animate-float-delayed">
          <div className="text-5xl text-indigo-500">🎨</div>
        </div>
        
        {/* コンテンツ */}
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
              <span className="text-blue-600 font-bold">AI</span>を駆使した高品質な<br />
              ウェブページを<span className="text-red-600 font-bold">格安</span>で制作します！
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl text-gray-700 mb-12 leading-relaxed font-light max-w-4xl mx-auto"
            >
              くつの橋本商店では、靴のネット通販事業で培ったウェブ制作の知識を基に、<br />
              お客様のウェブサイト制作事業も展開しております。
            </motion.p>
          </div>
        </div>
      </section>

      {/* お悩み共有ゾーン */}
      <section className="py-20 bg-red-50">
        <div className="max-w-screen-xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2
              className="text-3xl md:text-4xl font-light text-gray-800 mb-8 tracking-wider"
              style={{
                fontFamily:
                  "'Noto Serif JP', 'Yu Mincho', 'YuMincho', 'Hiragino Mincho Pro', serif",
              }}
            >
              こんなお悩みありませんか？
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="bg-white p-8 rounded-lg shadow-sm border border-red-200"
              >
                <div className="text-red-500 text-4xl mb-4">💸</div>
                <h3 className="text-lg font-medium text-gray-800 mb-4">高額な制作費</h3>
                <p className="text-gray-600 leading-relaxed">
                  見栄えの良いHPを作ろうとすると<span className="text-red-600 font-bold">数百万円</span>の見積もりがかかる
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="bg-white p-8 rounded-lg shadow-sm border border-red-200"
              >
                <div className="text-red-500 text-4xl mb-4">📈</div>
                <h3 className="text-lg font-medium text-gray-800 mb-4">継続的なコスト</h3>
                <p className="text-gray-600 leading-relaxed">
                  制作費0円でも<span className="text-red-600 font-bold">毎月の費用</span>が発生してコスト負担が大きい
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="bg-white p-8 rounded-lg shadow-sm border border-red-200"
              >
                <div className="text-red-500 text-4xl mb-4">⏰</div>
                <h3 className="text-lg font-medium text-gray-800 mb-4">時間がない</h3>
                <p className="text-gray-600 leading-relaxed">
                  <span className="text-red-600 font-bold">短納期</span>で見栄えよく、ローコストでウェブサイトを作ってほしい
                </p>
              </motion.div>
            </div>

            <div className="bg-blue-600 text-white p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">そのお悩み、当社が解決します！</h3>
              <p className="text-xl">最新AI技術 × 豊富な実績 × 地域密着サポート</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* オススメポイント */}
      <section className="py-20 bg-white">
        <div className="max-w-screen-xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2
              className="text-3xl md:text-4xl font-light text-gray-800 mb-16 tracking-wider"
              style={{
                fontFamily:
                  "'Noto Serif JP', 'Yu Mincho', 'YuMincho', 'Hiragino Mincho Pro', serif",
              }}
            >
              当社の3つの強み
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="bg-blue-50 p-8 rounded-lg border border-blue-200"
              >
                <div className="text-blue-600 text-5xl mb-6">⚡</div>
                <h3 className="text-xl font-bold text-blue-600 mb-4">短納期</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  内容にもよりますが<span className="font-bold text-blue-600">おおよそ1週間</span>、
                  短いものだと<span className="font-bold text-blue-600">3日間程度</span>で第一弾を制作します。
                </p>
                <div className="text-sm text-gray-600">
                  ※ お急ぎの案件もお気軽にご相談ください
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="bg-green-50 p-8 rounded-lg border border-green-200"
              >
                <div className="text-green-600 text-5xl mb-6">🤖</div>
                <h3 className="text-xl font-bold text-green-600 mb-4">高品質</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  <span className="font-bold text-green-600">AIを駆使した最新プログラミング</span>で
                  視覚的にわかりやすいページを作ります。
                </p>
                <div className="text-sm text-gray-600">
                  ※ レスポンシブ対応・SEO対策も標準装備
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="bg-red-50 p-8 rounded-lg border border-red-200"
              >
                <div className="text-red-600 text-5xl mb-6">💰</div>
                <h3 className="text-xl font-bold text-red-600 mb-4">ローコスト</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  1件あたり<span className="font-bold text-red-600 text-2xl">5万円～10万円</span>で
                  HPやウェブサイトを制作いたします。
                </p>
                <div className="text-sm text-gray-600">
                  ※ 内容により変動します。まずはお見積りを
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 最大の特徴 */}
      <section className="py-20 bg-gradient-to-r from-purple-50 to-pink-50">
        <div className="max-w-screen-xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2
              className="text-3xl md:text-4xl font-light text-gray-800 mb-8 tracking-wider"
              style={{
                fontFamily:
                  "'Noto Serif JP', 'Yu Mincho', 'YuMincho', 'Hiragino Mincho Pro', serif",
              }}
            >
              🌟 最大の特徴
            </h2>
            
            <div className="bg-white p-12 rounded-lg shadow-lg border border-purple-200 max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-purple-600 mb-6">
                ご自身でマイナーチェンジ可能な状態で納品
              </h3>
              
              <div className="text-left space-y-6">
                <p className="text-gray-700 leading-relaxed text-lg">
                  せっかく作ったウェブサイトも<span className="font-bold text-red-600">自身で更新を簡単にかけられないと運用しづらい</span>ですよね。
                </p>
                
                <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
                  <p className="text-gray-700 leading-relaxed">
                    当社が納品するウェブサイトは、お客様がご自身で更新をかけたいと考えるセクションに
                    <span className="font-bold text-blue-600">無料のCMS機能（microCMS）</span>を実装した状態でお渡しします。
                  </p>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6 mt-8">
                  <div className="bg-green-50 p-6 rounded-lg">
                    <h4 className="font-bold text-green-600 mb-3">✅ できること</h4>
                    <ul className="text-sm text-gray-700 space-y-2">
                      <li>• ニュース・お知らせの追加・編集</li>
                      <li>• 商品・サービス情報の更新</li>
                      <li>• 画像の差し替え</li>
                      <li>• 営業時間・連絡先の変更</li>
                    </ul>
                  </div>
                  
                  <div className="bg-yellow-50 p-6 rounded-lg">
                    <h4 className="font-bold text-yellow-600 mb-3">💡 メリット</h4>
                    <ul className="text-sm text-gray-700 space-y-2">
                      <li>• 更新のたびに業者に依頼不要</li>
                      <li>• 継続的なコストが発生しない</li>
                      <li>• リアルタイムで情報更新可能</li>
                      <li>• 専門知識不要で簡単操作</li>
                    </ul>
                  </div>
                </div>
                
                <div className="text-center mt-8">
                  <p className="text-xl font-bold text-purple-600">
                    美しいウェブサイトをお客様ご自身で更新できるので、<br />
                    その後の当社へのコストもかかりません！
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 制作の流れ */}
      <section className="py-20 bg-white">
        <div className="max-w-screen-xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2
              className="text-3xl md:text-4xl font-light text-gray-800 mb-16 tracking-wider"
              style={{
                fontFamily:
                  "'Noto Serif JP', 'Yu Mincho', 'YuMincho', 'Hiragino Mincho Pro', serif",
              }}
            >
              制作の流れ
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="relative"
              >
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-blue-600">1</span>
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-4">お打合せ</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  どんな内容にしたいのか参考URLを共有いただく。お電話やZoom等で事前お打合せ実施。
                  <br />
                  <span className="text-blue-600 font-medium">（アイデアが湧かない場合はこちらでたたき台を作成）</span>
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="relative"
              >
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-green-600">2</span>
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-4">制作・修正</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  たたき台をベースに修正を加える。
                  <br />
                  お客様のご要望に合わせて細かく調整いたします。
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="relative"
              >
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-purple-600">3</span>
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-4">CMS実装</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  お客様がご自身で更新をかけたい部分にCMS機能を実装する。
                  <br />
                  <span className="text-purple-600 font-medium">簡単操作で更新可能に！</span>
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="relative"
              >
                <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-red-600">4</span>
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-4">納品</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Netlifyというアドレス経由で納品いたします。
                  <br />
                  <span className="text-red-600 font-medium">（ドメインの新規作成やお引越しは別途対応可能）</span>
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 制作実績 */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-screen-xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2
              className="text-3xl md:text-4xl font-light text-gray-800 mb-16 tracking-wider"
              style={{
                fontFamily:
                  "'Noto Serif JP', 'Yu Mincho', 'YuMincho', 'Hiragino Mincho Pro', serif",
              }}
            >
              これまでの制作実績
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="bg-white p-8 rounded-lg shadow-sm border border-gray-200"
              >
                <div className="mb-6">
                  <div className="w-full h-48 bg-gradient-to-br from-green-100 to-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <span className="text-gray-500 text-sm">サイトプレビュー</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">サバイバレー</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  アウトドア用品・サバイバルグッズの専門サイト。
                  商品カタログとブログ機能を実装。
                </p>
                <a
                  href="https://luxury-cannoli-ee64d6.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
                >
                  サイトを見る →
                </a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="bg-white p-8 rounded-lg shadow-sm border border-gray-200"
              >
                <div className="mb-6">
                  <div className="w-full h-48 bg-gradient-to-br from-pink-100 to-purple-100 rounded-lg flex items-center justify-center mb-4">
                    <span className="text-gray-500 text-sm">サイトプレビュー</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">ケアステーションソラナ広島</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  介護サービス事業所のコーポレートサイト。
                  サービス紹介とお問い合わせ機能を実装。
                </p>
                <a
                  href="https://68cec67a21e9b86e73efe141--zingy-zuccutto-d23b50.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-purple-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-purple-700 transition-colors"
                >
                  サイトを見る →
                </a>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* キャンペーン */}
      <section className="py-20 bg-gradient-to-r from-yellow-50 to-orange-50">
        <div className="max-w-screen-xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2
              className="text-3xl md:text-4xl font-light text-gray-800 mb-8 tracking-wider"
              style={{
                fontFamily:
                  "'Noto Serif JP', 'Yu Mincho', 'YuMincho', 'Hiragino Mincho Pro', serif",
              }}
            >
              🎉 お試しキャンペーン
            </h2>
            
            <div className="bg-white p-12 rounded-lg shadow-lg border-4 border-yellow-300 max-w-4xl mx-auto">
              <div className="bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full inline-block mb-6">
                <span className="font-bold">期間限定！</span>
              </div>
              
              <h3 className="text-2xl font-bold text-orange-600 mb-6">
                約1日で作業できる範囲内の内容であれば<br />
                <span className="text-3xl text-red-600">無料</span>で一度制作いたします！
              </h3>
              
              <div className="text-left space-y-4 mb-8">
                <div className="flex items-start">
                  <span className="text-green-600 text-xl mr-3">✓</span>
                  <p className="text-gray-700">まずは無料でサンプルサイトを制作</p>
                </div>
                <div className="flex items-start">
                  <span className="text-green-600 text-xl mr-3">✓</span>
                  <p className="text-gray-700">気に入っていただけたら正式なご注文を検討</p>
                </div>
                <div className="flex items-start">
                  <span className="text-green-600 text-xl mr-3">✓</span>
                  <p className="text-gray-700">完全無料・ノーリスクでお試し可能</p>
                </div>
              </div>
              
              <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
                <p className="text-gray-700 font-medium">
                  「どんな仕上がりになるか不安...」という方も安心！<br />
                  まずは実際の制作物をご確認いただけます。
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* まとめ・お問い合わせ */}
      <section className="py-20 bg-gray-800 text-white">
        <div className="max-w-screen-xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2
              className="text-3xl md:text-4xl font-light mb-12 tracking-wider"
              style={{
                fontFamily:
                  "'Noto Serif JP', 'Yu Mincho', 'YuMincho', 'Hiragino Mincho Pro', serif",
              }}
            >
              お気軽にご相談ください
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="text-4xl mb-4">🤝</div>
                <h3 className="text-xl font-bold mb-3">継続サポート</h3>
                <p className="text-gray-300 leading-relaxed">
                  納品して終わりではなく、ご不明点はいつでもご連絡いただければ対応いたします。
                </p>
              </div>
              
              <div className="text-center">
                <div className="text-4xl mb-4">💬</div>
                <h3 className="text-xl font-bold mb-3">無料相談</h3>
                <p className="text-gray-300 leading-relaxed">
                  まずはご相談だけでもお問い合わせくださいませ。
                  お見積りも無料で承ります。
                </p>
              </div>
              
              <div className="text-center">
                <div className="text-4xl mb-4">📞</div>
                <h3 className="text-xl font-bold mb-3">地域密着</h3>
                <p className="text-gray-300 leading-relaxed">
                  広島を中心とした地域企業様への手厚いサポートを提供いたします。
                </p>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="bg-white text-gray-800 p-8 rounded-lg max-w-2xl mx-auto">
                <h3 className="text-xl font-bold mb-4">お問い合わせ方法</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-center">
                    <span className="text-blue-600 text-2xl mr-3">📧</span>
                    <span>お問い合わせフォーム: 詳細な相談に</span>
                  </div>
                  <div className="flex items-center justify-center">
                    <span className="text-red-600 text-2xl mr-3">📞</span>
                    <span>お電話: 082-277-2671</span>
                  </div>
                </div>
              </div>
              
              <div className="flex justify-center">
                <a
                  href="/contact"
                  className="bg-blue-600 text-white px-12 py-4 rounded-lg font-bold text-lg hover:bg-blue-700 transition-colors shadow-lg"
                >
                  お問い合わせフォーム
                </a>
              </div>
              
              <p className="text-gray-400 text-sm">
                ※ 初回相談・お見積りは完全無料です
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
