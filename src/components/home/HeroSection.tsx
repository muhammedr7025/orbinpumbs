"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { HeroSlide } from "@/types/sanity";

interface HeroSectionProps {
  slides: HeroSlide[];
}

export default function HeroSection({ slides }: HeroSectionProps) {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    if (!slides || slides.length === 0) return;
    setCurrent((prev) => (prev + 1) % slides.length);
  }, [slides]);

  const prev = useCallback(() => {
    if (!slides || slides.length === 0) return;
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  }, [slides]);

  useEffect(() => {
    if (!slides || slides.length <= 1) return;
    const timer = setInterval(next, 8000);
    return () => clearInterval(timer);
  }, [next, slides]);

  const slide = slides?.[current];

  if (!slide) return null;

  return (
    <section className="relative h-[85vh] min-h-[700px] flex items-center bg-[#050B14] overflow-hidden">
      {/* Sleek, Minimalist Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(ellipse_80%_80%_at_70%_20%,rgba(30,158,142,0.1),transparent_100%)]" />
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-[radial-gradient(ellipse_60%_60%_at_30%_100%,rgba(168,131,80,0.05),transparent_100%)]" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left: Premium Typography (7 columns) */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="max-w-3xl"
              >
                {/* Minimalist Top Label */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.8 }}
                  className="flex items-center gap-3 mb-6"
                >
                  <div className="h-px w-8 bg-orbin-gold/50" />
                  <span className="text-orbin-gold text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase">
                    Premium Industrial Systems
                  </span>
                </motion.div>

                {/* Massive Hero Headline */}
                <h1 className="text-5xl sm:text-7xl lg:text-[5.5rem] font-display font-medium text-white leading-[1.05] tracking-tight mb-8">
                  {slide.title.split(" ").map((word, i) => {
                    const highlightWords = ["Excellence", "Power", "Solar"];
                    return highlightWords.includes(word) ? (
                      <span key={i} className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/50 italic pr-2">
                        {word}{" "}
                      </span>
                    ) : (
                      <span key={i}>{word} </span>
                    );
                  })}
                </h1>

                {/* Refined Subtitle */}
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4, duration: 0.8 }}
                  className="text-lg sm:text-2xl text-white/50 leading-relaxed font-light max-w-xl mb-12"
                >
                  {slide.subtitle}
                </motion.p>

                {/* Ultra-Clean CTAs */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                  className="flex flex-col sm:flex-row gap-5"
                >
                  <Link
                    href={slide.ctaLink || "/products"}
                    className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-orbin-teal text-white font-medium text-lg rounded-full hover:bg-teal-500 transition-colors"
                  >
                    <span>{slide.ctaText || "View Catalog"}</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center px-8 py-4 bg-transparent text-white border border-white/20 font-medium text-lg rounded-full hover:bg-white hover:text-black transition-colors"
                  >
                    Find a Dealer
                  </Link>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right: Unboxed Product Showcase (5 columns) */}
          <div className="lg:col-span-5 h-[500px] lg:h-[700px] flex items-center justify-center relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
                animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                exit={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="relative w-full h-full flex items-center justify-center"
              >
                {/* Subtle soft backdrop for the product */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] aspect-square bg-gradient-to-b from-white/5 to-transparent rounded-full blur-3xl pointer-events-none" />

                <Image
                  src="/images/home/orbin_hero_pump_1781466725181.png"
                  alt="ORBIN Premium Pump"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-contain object-center drop-shadow-[0_20px_40px_rgba(0,0,0,0.8)]"
                  priority
                />
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>

      {/* Elegant Slide Controls */}
      {slides && slides.length > 1 && (
        <div className="absolute bottom-12 right-12 z-20 flex items-center gap-6">
          <button
            onClick={prev}
            className="w-12 h-12 flex items-center justify-center rounded-full border border-white/10 text-white/50 hover:text-white hover:border-white/30 transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          
          <div className="flex gap-4">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className="group relative py-4 flex items-center justify-center"
              >
                <span className={`block h-1 transition-all duration-500 rounded-full ${
                  i === current ? "w-12 bg-orbin-gold" : "w-6 bg-white/20 group-hover:bg-white/40"
                }`} />
              </button>
            ))}
          </div>

          <button
            onClick={next}
            className="w-12 h-12 flex items-center justify-center rounded-full border border-white/10 text-white/50 hover:text-white hover:border-white/30 transition-colors"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      )}
    </section>
  );
}
