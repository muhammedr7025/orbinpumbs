"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { 
  ArrowRight, 
  Droplets, 
  Sun, 
  Waves, 
  Zap, 
  Home, 
  Recycle, 
  Cable, 
  Cpu, 
  Flame, 
  Wrench,
  Package
} from "lucide-react";
import { Category } from "@/types/sanity";

// Map slugs to sleek Lucide icons instead of emojis
const categoryIcons: Record<string, React.ElementType> = {
  "submersible-pumps": Droplets,
  "solar-pumps": Sun,
  "openwell-pumps": Waves,
  "submersible-motors": Zap,
  "domestic-series": Home,
  "sewage-waste-water-pumps": Recycle,
  "cables": Cable,
  "control-panels-starters": Cpu,
  "fire-fighting-systems": Flame,
  "ss-investment-casting-pumps": Wrench,
};

interface FeaturedCategoriesProps {
  categories: Category[];
}

export default function FeaturedCategories({ categories }: FeaturedCategoriesProps) {
  return (
    <section className="py-24 sm:py-32 bg-[#F8FAFC] relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-orbin-teal/[0.03] rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-orbin-gold/[0.03] rounded-full blur-[80px] translate-y-1/3 -translate-x-1/3 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-gray-200 text-sm font-semibold text-orbin-teal mb-6 shadow-sm"
          >
            <span className="w-2 h-2 rounded-full bg-orbin-teal animate-pulse" />
            Product Categories
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight text-orbin-gray-900 mb-6"
          >
            Explore Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-orbin-teal to-orbin-teal-light italic">Solutions</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-orbin-gray-500 font-medium"
          >
            From submersible pumps to complete solar systems — discover the right engineering solution for every water management need.
          </motion.p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {categories.map((cat, i) => {
            const Icon = categoryIcons[cat.slug.current] || Package;
            
            return (
              <motion.div
                key={cat._id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.5 }}
                className="h-full"
              >
                <Link
                  href={`/products/${cat.slug.current}`}
                  className="group block relative bg-white rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_50px_rgba(30,158,142,0.12)] hover:-translate-y-1 transition-all duration-500 overflow-hidden h-full flex flex-col border border-transparent hover:border-orbin-teal/10"
                >
                  {/* Premium Image Header */}
                  <div className="relative h-56 w-full bg-gray-100 overflow-hidden flex-shrink-0">
                    <Image 
                      src="/images/home/category-placeholder.png" 
                      alt={cat.title} 
                      fill 
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    
                    {/* Inner Shadow / Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    {/* Overlay Icon Container (Glassmorphism) */}
                    <div className="absolute bottom-5 left-6 w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center shadow-lg group-hover:bg-orbin-teal group-hover:border-orbin-teal transition-colors duration-500">
                      <Icon className="w-7 h-7 text-white" strokeWidth={1.5} />
                    </div>

                    {/* Overlay Arrow Container (Glassmorphism) */}
                    <div className="absolute top-5 right-5 w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center shadow-lg group-hover:bg-orbin-teal group-hover:border-orbin-teal transition-all duration-300">
                      <ArrowRight className="w-4 h-4 text-white group-hover:-rotate-45 transition-transform duration-300" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 md:p-8 flex flex-col flex-grow">
                    <h3 className="text-2xl font-display font-bold text-gray-900 mb-3 group-hover:text-orbin-teal transition-colors duration-300">
                      {cat.title}
                    </h3>
                    <p className="text-sm text-gray-500 leading-relaxed line-clamp-2 mb-6 font-medium">
                      {cat.description}
                    </p>

                    {/* Product Count Pill */}
                    <div className="mt-auto">
                      {cat.productCount !== undefined && cat.productCount > 0 ? (
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-gray-50 border border-gray-100 text-xs font-semibold text-gray-600 group-hover:bg-orbin-teal/10 group-hover:text-orbin-teal group-hover:border-orbin-teal/20 transition-all duration-300">
                          <span className="w-1.5 h-1.5 rounded-full bg-current opacity-60" />
                          {cat.productCount} Product{cat.productCount !== 1 ? "s" : ""}
                        </div>
                      ) : (
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-gray-50 border border-gray-100 text-xs font-semibold text-gray-400">
                          <span className="w-1.5 h-1.5 rounded-full bg-gray-300" />
                          Coming Soon
                        </div>
                      )}
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
