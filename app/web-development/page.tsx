"use client";
import { motion } from "framer-motion";

export default function WebDevelopmentPage() {
  return (
    <main className="min-h-screen bg-white pt-20">
      {/* Hero Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-light text-gray-800 mb-8">
            <span className="text-blue-600 font-bold">AI</span>を駆使した高品質な<br />
            ウェブページを<span className="text-red-600 font-bold">格安</span>で制作します！
          </h1>
          <p className="text-xl text-gray-700 mb-12 leading-relaxed">
            くつの橋本商店では、靴のネット通販事業で培ったウェブ制作の知識を基に、<br />
            お客様のウェブサイト制作事業も展開しております。
          </p>
        </div>
      </section>

      {/* お悩み共有ゾーン */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-light text-gray-800 mb-12 text-center">
            こんなお悩みありませんか？
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-4xl mb-4 text-center">💸</div>
              <h3 className="text-lg font-medium text-gray-800 mb-3">高額な制作費</h3>
              <p className="text-gray-600 text-sm">
                見栄えの良いホームページを作ろうとすると数百万円の見積もりがかかってしまう
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-4xl mb-4 text-center">📈</div>
              <h3 className="text-lg font-medium text-gray-800 mb-3">毎月の維持費</h3>
              <p className="text-gray-600 text-sm">
                制作費0円で作ってもらったサイトが毎月費用が発生してコスト負担が大きい
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-4xl mb-4 text-center">⏰</div>
              <h3 className="text-lg font-medium text-gray-800 mb-3">短納期の要望</h3>
              <p className="text-gray-600 text-sm">
                短納期で見栄えよく、ローコストでウェブサイトを作ってほしい
              </p>
            </div>
          </div>

          <div className="bg-blue-600 text-white py-6 px-8 rounded-lg text-center">
            <h3 className="text-2xl font-bold">そのお悩み、当社が解決します！</h3>
          </div>
        </div>
      </section>

      {/* オススメポイント */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-light text-gray-800 mb-12 text-center">
            当社の3つの強み
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-blue-50 p-8 rounded-lg text-center">
              <div className="text-5xl mb-4">⚡</div>
              <h3 className="text-xl font-bold text-blue-600 mb-4">短納期</h3>
              <p className="text-gray-700">
                内容にもよりますが<span className="font-bold text-blue-600">おおよそ1週間</span>、
                短いものだと<span className="font-bold text-blue-600">3日間程度</span>で第一弾を制作します。
              </p>
            </div>

            <div className="bg-green-50 p-8 rounded-lg text-center">
              <div className="text-5xl mb-4">🤖</div>
              <h3 className="text-xl font-bold text-green-600 mb-4">高品質</h3>
              <p className="text-gray-700">
                <span className="font-bold text-green-600">AIを駆使した最新プログラミング</span>で
                視覚的にわかりやすいページを作ります。
              </p>
            </div>

            <div className="bg-red-50 p-8 rounded-lg text-center">
              <div className="text-5xl mb-4">💰</div>
              <h3 className="text-xl font-bold text-red-600 mb-4">ローコスト</h3>
              <p className="text-gray-700">
                <span className="font-bold text-red-600 text-xl">1件あたり5万円～10万円</span>で
                HPやウェブサイトを制作いたします。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 最大の特徴 */}
      <section className="py-20 bg-purple-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-light text-gray-800 mb-8 text-center">
            🌟 最大の特徴
          </h2>

          <div className="bg-white p-12 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-purple-600 mb-6 text-center">
              ご自身でマイナーチェンジ可能な状態で納品
            </h3>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                せっかく作ったウェブサイトも自身で更新を簡単にかけられないと運用しづらいですよね。
              </p>
              <p>
                当社が納品するウェブサイトは<span className="font-bold text-purple-600">お客様がご自身で更新をかけたいと考えるセクション</span>を
                <span className="font-bold text-blue-600">無料のCMS機能（microCMS）</span>を実装した状態でお渡しします。
              </p>
              <p>
                美しいウェブサイトをお客様ご自身で更新をかけられるので、
                <span className="font-bold text-green-600">その後の当社へのコストもかかりません。</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 制作実績 */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-light text-gray-800 mb-12 text-center">
            これまでの制作実績
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-800 mb-4">サバイバレー</h3>
              <p className="text-gray-600 mb-4">アウトドア・サバイバル用品の専門サイト</p>
              <a 
                href="https://luxury-cannoli-ee64d6.netlify.app/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 font-medium"
              >
                サイトを見る →
              </a>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-800 mb-4">ケアステーションソラナ広島</h3>
              <p className="text-gray-600 mb-4">介護・ケアサービスの専門サイト</p>
              <a 
                href="https://68cec67a21e9b86e73efe141--zingy-zuccutto-d23b50.netlify.app/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 font-medium"
              >
                サイトを見る →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* キャンペーン */}
      <section className="py-20 bg-yellow-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-light text-gray-800 mb-8">
            🎉 お試しキャンペーン実施中！
          </h2>
          <div className="bg-yellow-200 p-8 rounded-lg">
            <p className="text-lg text-gray-800 leading-relaxed">
              <span className="font-bold text-red-600">約1日で作業できる範囲内の内容であれば無料</span>で一度制作させていただき、
              それから正式なご注文を検討いただくお試しキャンペーンを実施いたします。
            </p>
          </div>
        </div>
      </section>

      {/* お問い合わせ */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-light mb-8">
            まずはご相談だけでもお気軽に
          </h2>
          <p className="text-xl mb-8 leading-relaxed">
            納品して終わりではなく、ご不明点はいつでもご連絡いただければ対応いたします。<br />
            まずはご相談だけでもお問い合わせくださいませ。
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-blue-600 px-12 py-4 text-lg font-bold rounded-lg hover:bg-gray-100 transition-colors"
          >
            お問い合わせはこちら
          </a>
        </div>
      </section>
    </main>
  );
}
