"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

interface HeroSectionProps {
  videoSrc?: string;
  imageSrc?: string;
}

export function HeroSection({ videoSrc, imageSrc }: HeroSectionProps) {
  return (
    <section className="relative h-[70vh] w-full overflow-hidden">
      {videoSrc ? (
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src={videoSrc}
          autoPlay
          muted
          loop
          playsInline
        />
      ) : (
        imageSrc && (
          <Image
            src={imageSrc}
            alt="Hero background"
            fill
            className="object-cover"
          />
        )
      )}
      <div className="absolute inset-0 bg-black/30" />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4"
      >
        <h1 className="font-serif text-4xl md:text-5xl mb-6">
          広島から婦人靴を発信する専門商社
        </h1>
        <Link
          href="/contact"
          className="bg-brand-accent text-brand-beige px-6 py-3 rounded shadow-soft-xl hover:opacity-90 transition"
        >
          お問い合わせ
        </Link>
      </motion.div>
    </section>
  );
}
