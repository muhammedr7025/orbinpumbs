"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Zap } from "lucide-react";
import { Product } from "@/types/sanity";

interface FeaturedProductsListProps {
  products: Product[];
}

export default function FeaturedProductsList({ products }: FeaturedProductsListProps) {
  if (!products || products.length === 0) return null;

  // Split products into two rows for the double marquee effect
  const midPoint = Math.ceil(products.length / 2);
  const row1Products = products.slice(0, midPoint);
  const row2Products = products.slice(midPoint);

  // Fallback to duplicate products if there are too few to look good in a row
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 mb-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
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
      </div>

      {/* Marquee Container */}
      <div className="relative z-10 flex flex-col gap-8 overflow-hidden w-full py-8">
        
        {/* Row 1: Scrolling Left */}
        <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
          <div className="flex gap-8 px-4">
            {row1.map((product, i) => <ProductCard key={`row1-a-${i}`} product={product} />)}
          </div>
          <div className="flex gap-8 px-4" aria-hidden="true">
            {row1.map((product, i) => <ProductCard key={`row1-b-${i}`} product={product} />)}
          </div>
        </div>

        {/* Row 2: Scrolling Right */}
        <div className="flex w-max animate-marquee-reverse hover:[animation-play-state:paused]">
          <div className="flex gap-8 px-4">
            {row2.map((product, i) => <ProductCard key={`row2-a-${i}`} product={product} />)}
          </div>
          <div className="flex gap-8 px-4" aria-hidden="true">
            {row2.map((product, i) => <ProductCard key={`row2-b-${i}`} product={product} />)}
          </div>
        </div>

        {/* Left/Right Gradient Masks for smooth fade out */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#050B14] to-transparent pointer-events-none z-20" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#050B14] to-transparent pointer-events-none z-20" />
      </div>

    </section>
  );
}
