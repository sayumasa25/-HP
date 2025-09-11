"use client";
import { motion } from "framer-motion";
import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({
          name: "",
          email: "",
          company: "",
          phone: "",
          subject: "",
          message: ""
        });
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

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
              CONTACT
            </h1>
            <p className="text-lg text-gray-600 font-light">お問い合わせ</p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white p-8 md:p-12 border border-gray-200"
          >
            <div className="grid md:grid-cols-2 gap-12">
              {/* Contact Information */}
              <div>
                <h2 className="text-2xl font-light text-gray-800 mb-8 tracking-wide"
                    style={{ fontFamily: "'Noto Serif JP', 'Yu Mincho', 'YuMincho', 'Hiragino Mincho Pro', serif" }}>
                  お問い合わせ先
                </h2>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-light text-gray-800 mb-2">店舗情報</h3>
                    <p className="text-gray-600 font-light leading-relaxed">
                      くつの橋本商店<br />
                      〒733-0833<br />
                      広島市西区商工センター2-9-32<br />
                      TEL: 082-277-2671
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-light text-gray-800 mb-2">営業時間</h3>
                    <p className="text-gray-600 font-light">
                      平日 9:00 - 18:00<br />
                      土曜 9:00 - 17:00<br />
                      日曜・祝日 定休日
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-light text-gray-800 mb-2">お問い合わせについて</h3>
                    <p className="text-gray-600 font-light leading-relaxed">
                      商品に関するご質問、催事イベントの開催予定、
                      その他ご不明な点がございましたら、
                      お気軽にお問い合わせください。
                    </p>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div>
                <h2 className="text-2xl font-light text-gray-800 mb-8 tracking-wide"
                    style={{ fontFamily: "'Noto Serif JP', 'Yu Mincho', 'YuMincho', 'Hiragino Mincho Pro', serif" }}>
                  お問い合わせフォーム
                </h2>

                {submitStatus === "success" && (
                  <div className="mb-6 p-4 bg-green-50 border border-green-200 text-green-800 font-light">
                    お問い合わせありがとうございます。内容を確認の上、ご連絡いたします。
                  </div>
                )}

                {submitStatus === "error" && (
                  <div className="mb-6 p-4 bg-red-50 border border-red-200 text-red-800 font-light">
                    送信に失敗しました。お手数ですが、もう一度お試しください。
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-light text-gray-700 mb-2">
                      お名前 <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 focus:border-gray-500 focus:outline-none transition-colors font-light"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-light text-gray-700 mb-2">
                      メールアドレス <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 focus:border-gray-500 focus:outline-none transition-colors font-light"
                    />
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm font-light text-gray-700 mb-2">
                      会社名・団体名
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 focus:border-gray-500 focus:outline-none transition-colors font-light"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-light text-gray-700 mb-2">
                      電話番号
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 focus:border-gray-500 focus:outline-none transition-colors font-light"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-light text-gray-700 mb-2">
                      お問い合わせ種別 <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 focus:border-gray-500 focus:outline-none transition-colors font-light"
                    >
                      <option value="">選択してください</option>
                      <option value="商品について">商品について</option>
                      <option value="催事イベントについて">催事イベントについて</option>
                      <option value="倉庫大開放市について">倉庫大開放市について</option>
                      <option value="オンラインショップについて">オンラインショップについて</option>
                      <option value="その他">その他</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-light text-gray-700 mb-2">
                      お問い合わせ内容 <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 focus:border-gray-500 focus:outline-none transition-colors font-light resize-vertical"
                      placeholder="お問い合わせ内容をご記入ください"
                    />
                  </div>

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gray-800 text-white px-8 py-4 font-light text-lg tracking-wide hover:bg-gray-700 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                    whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                    whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                  >
                    {isSubmitting ? "送信中..." : "送信する"}
                  </motion.button>
                </form>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
