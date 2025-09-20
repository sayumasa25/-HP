import { motion } from "framer-motion";

export default function WebDevelopmentPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-16">
        {/* ヘッダー */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-light text-gray-800 mb-6 tracking-wider">
            ウェブ制作事業
          </h1>
          <p className="text-lg text-gray-600 font-light">Web Development Service</p>
        </div>

        {/* メインコンテンツ */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 mb-8">
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
            <h2 className="text-2xl font-light text-gray-800 mb-6">
              デジタル時代に対応したウェブサイト制作
            </h2>
            
            <p className="mb-6">
              橋本商店では、靴の販売事業で培ったお客様との信頼関係を基に、
              ウェブサイト制作事業も展開しております。
            </p>

            <h3 className="text-xl font-light text-gray-800 mb-4 mt-8">
              サービス内容
            </h3>
            
            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <span className="text-blue-600 mr-3">•</span>
                <span>企業サイト・コーポレートサイト制作</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-3">•</span>
                <span>ECサイト・オンラインショップ構築</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-3">•</span>
                <span>レスポンシブデザイン対応</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-3">•</span>
                <span>CMS導入・運用サポート</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-3">•</span>
                <span>SEO対策・アクセス解析</span>
              </li>
            </ul>

            <h3 className="text-xl font-light text-gray-800 mb-4 mt-8">
              制作の特徴
            </h3>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="font-medium text-gray-800 mb-3">お客様目線の設計</h4>
                <p className="text-sm text-gray-600">
                  長年の接客経験を活かし、ユーザーが使いやすいサイト設計を心がけています。
                </p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="font-medium text-gray-800 mb-3">地域密着型サポート</h4>
                <p className="text-sm text-gray-600">
                  広島を中心とした地域企業様への手厚いサポートを提供いたします。
                </p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="font-medium text-gray-800 mb-3">継続的な運用支援</h4>
                <p className="text-sm text-gray-600">
                  制作後も継続的なメンテナンスと改善提案を行います。
                </p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="font-medium text-gray-800 mb-3">適正価格での提供</h4>
                <p className="text-sm text-gray-600">
                  中小企業様にも導入しやすい価格設定でサービスを提供しています。
                </p>
              </div>
            </div>

            <h3 className="text-xl font-light text-gray-800 mb-4 mt-8">
              制作実績
            </h3>
            
            <p className="mb-4">
              これまでに地域の様々な業種のお客様のウェブサイトを制作させていただきました：
            </p>
            
            <ul className="space-y-2 mb-8">
              <li>• 飲食店・レストラン</li>
              <li>• 美容院・サロン</li>
              <li>• 小売店・専門店</li>
              <li>• 士業・コンサルティング</li>
              <li>• 製造業・建設業</li>
            </ul>

            <div className="bg-blue-50 p-6 rounded-lg mt-8">
              <h3 className="text-xl font-light text-gray-800 mb-4">
                お問い合わせ
              </h3>
              <p className="mb-4">
                ウェブサイト制作に関するご相談は、お気軽にお問い合わせください。
                初回相談は無料で承っております。
              </p>
              <div className="text-center">
                <a
                  href="/contact"
                  className="inline-block bg-blue-600 text-white px-8 py-3 font-light text-sm tracking-wide hover:bg-blue-700 transition-colors duration-300 rounded"
                >
                  お問い合わせはこちら
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
