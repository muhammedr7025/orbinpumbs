"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Phone, MapPin } from "lucide-react";

export default function CTASection() {
  return (
    <section className="py-20 sm:py-32 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="relative rounded-[2.5rem] overflow-hidden bg-orbin-dark shadow-[0_30px_60px_rgba(0,0,0,0.3)]">
          {/* Advanced Background */}
          <div className="absolute inset-0">
            {/* Base dark background */}
            <div className="absolute inset-0 bg-orbin-dark" />

            {/* High-fidelity Image Background */}
            <div className="absolute inset-0 opacity-40 mix-blend-screen mix-blend-luminosity">
              <Image
                src="/images/home/orbin_water_splash_1781466762612.png"
                alt="Water Splash"
                fill
                sizes="100vw"
                className="object-cover object-center"
              />
            </div>
            
            {/* Gradients to blend the image */}
            <div className="absolute inset-0 bg-gradient-to-r from-orbin-dark via-orbin-dark/90 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-orbin-dark via-transparent to-orbin-dark/50" />
            
            {/* Grid pattern with mask */}
            <div className="absolute inset-0 pattern-grid opacity-20" style={{ maskImage: 'radial-gradient(ellipse at center, black, transparent 80%)', WebkitMaskImage: 'radial-gradient(ellipse at center, black, transparent 80%)' }} />
            
            {/* Glowing orbs */}
            <motion.div
              animate={{ 
                scale: [1, 1.2, 1], 
                opacity: [0.3, 0.5, 0.3],
                x: [0, 50, 0],
                y: [0, -30, 0]
              }}
              transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-0 right-0 w-[500px] h-[500px] bg-orbin-teal rounded-full blur-[150px] mix-blend-screen pointer-events-none"
            />
            <motion.div
              animate={{ 
                scale: [1, 1.3, 1], 
                opacity: [0.2, 0.4, 0.2],
                x: [0, -50, 0],
                y: [0, 40, 0]
              }}
              transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-orbin-gold rounded-full blur-[130px] mix-blend-screen pointer-events-none"
            />
            
            {/* Inner border glass effect */}
            <div className="absolute inset-0 rounded-[2.5rem] border border-white/10 pointer-events-none" />
          </div>

          {/* Content */}
          <div className="relative z-10 px-6 sm:px-12 py-20 sm:py-28 text-center flex flex-col items-center justify-center min-h-[450px]">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="max-w-3xl mx-auto"
            >
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold text-white leading-[1.15] tracking-tight mb-6">
                Ready to Find Your <br className="hidden sm:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orbin-teal via-teal-300 to-orbin-gold drop-shadow-sm">
                  Perfect Pump Solution?
                </span>
              </h2>
              <p className="text-xl text-white/70 mb-12 font-medium leading-relaxed">
                Whether you need a submersible pump for agriculture, a solar
                solution for rural water supply, or a booster pump for your
                building — we have the right product for you.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <Link
                  href="/contact"
                  className="relative overflow-hidden inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-orbin-teal text-white font-bold text-lg shadow-[0_0_30px_rgba(30,158,142,0.4)] hover:shadow-[0_0_40px_rgba(30,158,142,0.6)] hover:-translate-y-1 transition-all duration-300 group w-full sm:w-auto"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
                  <Phone className="w-5 h-5" />
                  Get a Quote
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/dealers"
                  className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl border border-white/20 bg-white/5 backdrop-blur-sm text-white font-bold text-lg hover:bg-white/10 hover:border-white/30 hover:-translate-y-1 transition-all duration-300 group w-full sm:w-auto"
                >
                  <MapPin className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  Find a Dealer
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
