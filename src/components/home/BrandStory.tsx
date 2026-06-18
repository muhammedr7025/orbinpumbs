"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Factory } from "lucide-react";

export default function BrandStory() {
  return (
    <section className="py-20 sm:py-32 bg-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-orbin-teal/5 rounded-full blur-[120px] pointer-events-none translate-x-1/3 -translate-y-1/3" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-orbin-gold/5 rounded-full blur-[100px] pointer-events-none -translate-x-1/3 translate-y-1/3" />
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 pattern-grid opacity-[0.03] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left - Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orbin-gray-50 border border-orbin-gray-200 text-orbin-teal text-xs font-bold uppercase tracking-widest mb-8 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-orbin-teal" />
              Since 1989
            </span>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold text-orbin-gray-900 leading-[1.1] tracking-tight mb-8">
              A Legacy of <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orbin-teal to-orbin-teal-dark">Engineering Excellence</span>
            </h2>

            <p className="text-xl text-orbin-gray-600 leading-relaxed mb-6 font-medium">
              For over four decades, ORBIN has been at the forefront of water
              management technology. From our state-of-the-art 16,815 sq.m
              manufacturing facility, we engineer, test, and deliver pumping
              solutions that power agriculture, industry, and homes across India.
            </p>

            <p className="text-lg text-orbin-gray-500 leading-relaxed mb-10">
              Our commitment to quality is validated by ISO 9001, ISO 14001, and
              ISO 45001 certifications. Every product undergoes rigorous testing
              to ensure it meets the highest standards of performance,
              durability, and energy efficiency.
            </p>

            <div className="flex flex-col sm:flex-row gap-5">
              <Link
                href="/about"
                className="relative overflow-hidden inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-orbin-teal text-white font-bold text-lg shadow-[0_10px_30px_rgba(30,158,142,0.3)] hover:shadow-[0_15px_40px_rgba(30,158,142,0.4)] hover:-translate-y-1 transition-all duration-300 group"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
                Our Story
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>

          {/* Right - Image & Stats */}
          <div className="relative">
            {/* Center glow behind image */}
            <div className="absolute inset-0 bg-gradient-to-tr from-orbin-teal/20 to-orbin-gold/20 blur-[80px] -z-10 translate-x-10" />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, x: 40 }}
              whileInView={{ opacity: 1, scale: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="relative rounded-[2.5rem] overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.15)] aspect-[4/5] sm:aspect-square lg:aspect-[4/5]"
            >
              <Image
                src="/images/home/orbin_manufacturing_1781466744233.png"
                alt="ORBIN State-of-the-art Manufacturing Facility"
                fill
                className="object-cover object-center hover:scale-105 transition-transform duration-1000 ease-out"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-orbin-dark/80 via-transparent to-transparent mix-blend-overlay"></div>
            </motion.div>

            {/* Floating Stat Cards */}
            <div className="absolute -bottom-10 -left-6 sm:-left-12 grid grid-cols-2 gap-4 sm:gap-6 w-[110%] sm:w-auto">
              {[
                {
                  icon: Factory,
                  value: "16,815",
                  unit: "sq.m",
                  label: "Facility",
                  color: "from-orbin-teal to-orbin-teal-dark",
                },
                {
                  value: "40+",
                  unit: "Years",
                  label: "Trust",
                  color: "from-orbin-gold to-orbin-gold-dark",
                },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: 0.4 + (i * 0.15), duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  whileHover={{ y: -5 }}
                  className="bg-white/90 backdrop-blur-xl rounded-3xl p-5 sm:p-6 border border-white shadow-[0_10px_40px_rgba(0,0,0,0.1)] transition-transform duration-300"
                >
                  <div className="flex items-baseline gap-1 mb-1">
                    <span className={`text-2xl sm:text-3xl font-display font-extrabold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent drop-shadow-sm`}>
                      {stat.value}
                    </span>
                  </div>
                  <p className="text-sm sm:text-base text-orbin-gray-600 font-semibold">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
