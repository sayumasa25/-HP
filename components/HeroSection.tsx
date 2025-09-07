"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export function HeroSection() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 flex items-center justify-center overflow-hidden">
      {/* Dynamic background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-72 h-72 bg-gradient-to-r from-pink-500 to-yellow-500 rounded-full blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full blur-3xl opacity-25 animate-bounce"></div>
        <div className="absolute top-1/3 right-1/4 w-48 h-48 bg-gradient-to-r from-green-400 to-blue-500 rounded-full blur-2xl opacity-30"></div>
        <div className="absolute bottom-1/3 left-1/4 w-64 h-64 bg-gradient-to-r from-red-400 to-pink-500 rounded-full blur-2xl opacity-20"></div>
      </div>

      {/* Animated particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white rounded-full opacity-30"
            animate={{
              x: [0, 100, 0],
              y: [0, -100, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-screen-xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, type: "spring", bounce: 0.4 }}
        >
          <motion.h1 
            className="font-bold text-5xl md:text-7xl lg:text-8xl text-white mb-8 leading-tight"
            animate={{ 
              textShadow: [
                "0 0 20px rgba(255,255,255,0.5)",
                "0 0 40px rgba(255,0,255,0.8)",
                "0 0 20px rgba(255,255,255,0.5)"
              ]
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              橋本靴店
            </span>
            <br />
            <span className="text-4xl md:text-5xl lg:text-6xl">
              革新的な婦人靴
            </span>
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-gray-200 mb-12 max-w-3xl mx-auto leading-relaxed font-medium"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            🚀 デベロッパー向けPOPUPイベント出展中！<br />
            👥 一般のお客様はBASE・楽天市場でお買い物を<br />
            🏪 広島在住の方は倉庫大開放市で最安値購入可能
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <motion.button 
              className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-10 py-5 rounded-full font-bold text-lg shadow-2xl transform hover:scale-105 transition-all duration-300"
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(255,0,255,0.3)" }}
              whileTap={{ scale: 0.95 }}
            >
              🎯 デベロッパーイベント詳細
            </motion.button>
            <motion.button 
              className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-10 py-5 rounded-full font-bold text-lg shadow-2xl transform hover:scale-105 transition-all duration-300"
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(0,255,255,0.3)" }}
              whileTap={{ scale: 0.95 }}
            >
              🛒 オンラインストア
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Enhanced scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.6 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div 
            className="flex flex-col items-center text-white/80"
            animate={{ y: [0, 15, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <span className="text-lg mb-3 font-medium">SCROLL DOWN</span>
            <div className="w-8 h-12 border-3 border-white/60 rounded-full flex justify-center relative overflow-hidden">
              <motion.div
                className="w-2 h-4 bg-gradient-to-b from-pink-400 to-purple-400 rounded-full mt-2"
                animate={{ y: [0, 16, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
              ></motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
