"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Zap, Filter } from "lucide-react";
import { Product } from "@/types/sanity";

interface FeaturedProductsListProps {
  products: Product[];
}

export default function FeaturedProductsList({ products }: FeaturedProductsListProps) {
  const [activeTab, setActiveTab] = useState("all");

  // Extract unique categories for the tabs
  const categories = useMemo(() => {
    if (!products) return ["all"];
    const cats = Array.from(new Set(products.map((p) => p.categorySlug)));
    return ["all", ...cats];
  }, [products]);

  // Filter products based on active tab
  const filteredProducts = useMemo(() => {
    if (!products) return [];
    if (activeTab === "all") return products;
    return products.filter((p) => p.categorySlug === activeTab);
  }, [activeTab, products]);

  if (!products || products.length === 0) return null;

  // Split products into two rows for the double marquee effect
  // If there's only 1 product, duplicate it to both rows to prevent empty space
  const row1Products = filteredProducts.length > 1 
    ? filteredProducts.slice(0, Math.ceil(filteredProducts.length / 2)) 
    : filteredProducts;
  const row2Products = filteredProducts.length > 1 
    ? filteredProducts.slice(Math.ceil(filteredProducts.length / 2)) 
    : filteredProducts;

  // Fallback to duplicate products if there are too few to look good in a continuous row
  const row1 = row1Products.length < 4 ? [...row1Products, ...row1Products, ...row1Products] : row1Products;
  const row2 = row2Products.length < 4 ? [...row2Products, ...row2Products, ...row2Products] : row2Products;

  const ProductCard = ({ product }: { product: Product }) => (
    <Link
      href={`/products/${product.categorySlug}/${product.slug.current}`}
      className="group flex flex-col justify-between w-[380px] h-[460px] shrink-0 p-8 rounded-[2rem] bg-white/5 border border-white/10 hover:bg-white/10 hover:border-orbin-teal/50 transition-all duration-500 overflow-hidden relative"
    >
      {/* Background Hover Effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-orbin-teal/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      {/* Top Content */}
      <div className="relative z-10">
        <div className="flex items-start justify-between mb-4">
          <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/70 text-xs font-semibold tracking-wider uppercase">
            {product.series || "Premium"}
          </span>
          <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-orbin-teal group-hover:border-orbin-teal transition-colors">
            <ArrowRight className="w-4 h-4 text-white/50 group-hover:text-white transition-colors" />
          </div>
        </div>
        <h3 className="text-2xl font-display font-medium text-white mb-2 group-hover:text-orbin-teal transition-colors">
          {product.title}
        </h3>
        <p className="text-white/40 text-sm font-medium">Model: {product.modelNumber}</p>
      </div>

      {/* Product Image */}
      <div className="relative z-10 w-full h-48 flex items-center justify-center mt-auto mb-4">
        <Image
          src={product.images?.[0]?.asset?._ref || "/images/home/orbin_hero_pump_1781466725181.png"}
          alt={product.title}
          fill
          sizes="(max-width: 768px) 100vw, 380px"
          className="object-contain p-4 group-hover:scale-110 group-hover:-rotate-2 transition-transform duration-700 ease-out drop-shadow-[0_20px_30px_rgba(0,0,0,0.5)]"
        />
      </div>

      {/* Bottom Content */}
      <div className="relative z-10 flex items-center justify-between border-t border-white/10 pt-4">
        <div className="flex items-center gap-2 text-white/60">
          <Zap className="w-4 h-4 text-orbin-gold" />
          <span className="text-sm font-medium">{product.hpRange ? `${product.hpRange} HP` : "High Efficiency"}</span>
        </div>
      </div>
    </Link>
  );

  return (
    <section className="py-24 sm:py-32 bg-[#050B14] relative overflow-hidden">
      {/* Subtle Glows */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-orbin-teal/20 to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-orbin-teal/5 blur-[150px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 mb-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="h-px w-8 bg-orbin-teal" />
              <span className="text-orbin-teal text-sm font-semibold tracking-[0.2em] uppercase">
                Product Showcase
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-medium text-white tracking-tight leading-[1.1]">
              Explore Our <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white/90 to-white/40 italic">Flagship Range</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Link
              href="/products"
              className="group inline-flex items-center gap-3 px-6 py-3 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 text-white transition-all duration-300"
            >
              View Full Catalog
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>

        {/* Filter Tabs */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap items-center gap-3"
        >
          <div className="flex items-center gap-2 mr-2 text-white/40">
            <Filter className="w-4 h-4" />
            <span className="text-sm font-medium uppercase tracking-wider">Filter:</span>
          </div>
          {categories.map((cat) => {
            const label = cat === "all" 
              ? "All Products" 
              : cat.split("-").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" ").replace(" Pumps", "");
            
            return (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 border ${
                  activeTab === cat 
                    ? "bg-orbin-teal text-white shadow-[0_0_20px_rgba(30,158,142,0.3)] border-transparent"
                    : "bg-transparent border-white/10 text-white/60 hover:bg-white/5 hover:text-white hover:border-white/20"
                }`}
              >
                {label}
              </button>
            );
          })}
        </motion.div>
      </div>

      {/* Marquee Container with key to force re-animation on tab change */}
      <AnimatePresence mode="wait">
        <motion.div 
          key={activeTab}
          initial={{ opacity: 0, filter: "blur(10px)" }}
          animate={{ opacity: 1, filter: "blur(0px)" }}
          exit={{ opacity: 0, filter: "blur(10px)" }}
          transition={{ duration: 0.4 }}
          className="relative z-10 flex flex-col gap-8 overflow-hidden w-full py-4"
        >
          {/* Row 1: Scrolling Left */}
          <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
            <div className="flex gap-8 px-4">
              {row1.map((product, i) => <ProductCard key={`row1-a-${product._id}-${i}`} product={product} />)}
            </div>
            <div className="flex gap-8 px-4" aria-hidden="true">
              {row1.map((product, i) => <ProductCard key={`row1-b-${product._id}-${i}`} product={product} />)}
            </div>
          </div>

          {/* Row 2: Scrolling Right */}
          <div className="flex w-max animate-marquee-reverse hover:[animation-play-state:paused]">
            <div className="flex gap-8 px-4">
              {row2.map((product, i) => <ProductCard key={`row2-a-${product._id}-${i}`} product={product} />)}
            </div>
            <div className="flex gap-8 px-4" aria-hidden="true">
              {row2.map((product, i) => <ProductCard key={`row2-b-${product._id}-${i}`} product={product} />)}
            </div>
          </div>

          {/* Left/Right Gradient Masks for smooth fade out */}
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#050B14] to-transparent pointer-events-none z-20" />
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#050B14] to-transparent pointer-events-none z-20" />
        </motion.div>
      </AnimatePresence>

    </section>
  );
}
