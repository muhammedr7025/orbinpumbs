"use client";

import { motion } from "framer-motion";
import { Shield, Award, Zap, Clock, Star, BadgeCheck } from "lucide-react";

export default function TrustBadges() {
  return (
    <section className="py-24 sm:py-32 bg-[#050B14] relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-orbin-teal/5 rounded-[100%] blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center text-center mb-20"
        >
          <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orbin-teal opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-orbin-teal"></span>
            </span>
            <span className="text-white/80 text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase">
              The Orbin Standard
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-[4rem] font-display font-medium text-white tracking-tight leading-[1.1]">
            Built on a Foundation of <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orbin-teal via-teal-200 to-white italic">
              Trust & Quality
            </span>
          </h2>
        </motion.div>

        {/* Spectacular Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-[240px]">
          
          {/* Card 1: 40+ Years (Large Feature) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-2 lg:col-span-2 row-span-2 group relative p-8 md:p-12 rounded-[2rem] bg-gradient-to-br from-[#0A1120] to-[#0D1629] border border-white/10 hover:border-orbin-teal/30 transition-all duration-500 overflow-hidden flex flex-col justify-end"
          >
            {/* Massive Background Graphic */}
            <div className="absolute top-0 right-0 -mr-10 -mt-10 pointer-events-none">
              <span className="text-[16rem] font-display font-black text-white/[0.02] leading-none tracking-tighter group-hover:text-orbin-teal/[0.05] transition-colors duration-700">
                40
              </span>
            </div>
            
            <div className="relative z-10">
              <div className="w-14 h-14 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center mb-6 group-hover:bg-orbin-teal group-hover:border-orbin-teal/50 transition-all duration-500">
                <Clock className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-3xl md:text-4xl font-display font-semibold text-white mb-4">40+ Years of Trust</h3>
              <p className="text-lg text-white/60 font-light max-w-sm">
                Since 1989, we&apos;ve been pioneering industrial excellence, setting benchmarks in manufacturing quality and engineering precision.
              </p>
            </div>
          </motion.div>

          {/* Card 2: ISO Certified */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="md:col-span-1 lg:col-span-2 relative p-8 rounded-[2rem] bg-[#0A1120] border border-white/10 hover:bg-[#0D1629] transition-colors duration-500 overflow-hidden group"
          >
            {/* Inner Shield Graphic */}
            <div className="absolute right-0 bottom-0 translate-x-1/4 translate-y-1/4 opacity-10 group-hover:opacity-20 transition-opacity duration-500">
              <Shield className="w-64 h-64 text-blue-500" />
            </div>
            
            <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-6">
              <Shield className="w-5 h-5 text-blue-400" />
            </div>
            <h3 className="text-2xl font-display font-semibold text-white mb-2">ISO Certified</h3>
            <p className="text-white/50 font-light">Triple certified: 9001, 14001, and 45001 ensuring ultimate global compliance.</p>
          </motion.div>

          {/* Card 3: Energy Efficient */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:col-span-1 lg:col-span-1 relative p-8 rounded-[2rem] bg-[#0A1120] border border-white/10 hover:border-orbin-gold/30 transition-all duration-500 overflow-hidden group flex flex-col justify-between"
          >
            {/* Glowing Orb */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-orbin-gold/20 blur-3xl rounded-full group-hover:bg-orbin-gold/40 transition-colors duration-500" />
            
            <div className="w-12 h-12 rounded-xl bg-orbin-gold/10 border border-orbin-gold/20 flex items-center justify-center">
              <Zap className="w-5 h-5 text-orbin-gold" />
            </div>
            <div>
              <h3 className="text-xl font-display font-semibold text-white mb-2">Energy Efficient</h3>
              <p className="text-sm text-white/50 font-light">IE3 motors with unmatched star-rated efficiency.</p>
            </div>
          </motion.div>

          {/* Card 4: Value for Money */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="md:col-span-1 lg:col-span-1 relative p-8 rounded-[2rem] bg-[#0A1120] border border-white/10 hover:bg-[#0D1629] transition-colors duration-500 overflow-hidden flex flex-col justify-between"
          >
            <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center">
              <Award className="w-5 h-5 text-purple-400" />
            </div>
            <div>
              <h3 className="text-xl font-display font-semibold text-white mb-2">Value for Money</h3>
              <p className="text-sm text-white/50 font-light">Premium build quality at highly competitive pricing.</p>
            </div>
          </motion.div>

          {/* Card 5: Proven Reliability (Wide) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="md:col-span-2 lg:col-span-2 relative p-8 rounded-[2rem] bg-[#0A1120] border border-white/10 hover:border-white/20 transition-all duration-500 overflow-hidden group flex items-center gap-8"
          >
            <div className="flex-1">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mb-4 group-hover:bg-emerald-500 group-hover:text-white transition-all duration-500">
                <BadgeCheck className="w-5 h-5 text-emerald-400 group-hover:text-white" />
              </div>
              <h3 className="text-2xl font-display font-semibold text-white mb-2">Proven Reliability</h3>
              <p className="text-white/50 font-light max-w-xs">Rigorously tested for 10,000+ hours of continuous, flawless operation.</p>
            </div>
            {/* Visual element representing a timeline/graph */}
            <div className="hidden sm:flex flex-1 items-end justify-center gap-2 h-full opacity-50 group-hover:opacity-100 transition-opacity duration-500">
              {[40, 60, 45, 80, 55, 90, 100].map((h, i) => (
                <motion.div 
                  key={i}
                  initial={{ height: 0 }}
                  whileInView={{ height: `${h}%` }}
                  transition={{ delay: 0.5 + (i * 0.1), duration: 0.5 }}
                  className="w-4 rounded-t-sm bg-emerald-500/20 border-t border-emerald-500/50"
                />
              ))}
            </div>
          </motion.div>

          {/* Card 6: ISI Marked */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="md:col-span-1 lg:col-span-2 relative p-8 rounded-[2rem] bg-gradient-to-br from-orbin-teal/10 to-[#0A1120] border border-orbin-teal/20 hover:border-orbin-teal/40 transition-colors duration-500 flex items-center gap-6 group"
          >
            <div className="w-16 h-16 shrink-0 rounded-2xl bg-white border border-white/20 flex items-center justify-center shadow-[0_0_20px_rgba(30,158,142,0.3)] group-hover:scale-110 transition-transform duration-500">
              <Star className="w-8 h-8 text-orbin-dark fill-orbin-dark" />
            </div>
            <div>
              <h3 className="text-2xl font-display font-semibold text-white mb-2">ISI Marked Standards</h3>
              <p className="text-white/60 font-light">BIS certified to uncompromising IS:8034 standards for absolute safety and compliance.</p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
