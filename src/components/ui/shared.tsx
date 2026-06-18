"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SectionHeadingProps {
  badge?: string;
  title: string;
  highlight?: string;
  description?: string;
  centered?: boolean;
  children?: ReactNode;
}

export function SectionHeading({
  badge,
  title,
  highlight,
  description,
  centered = true,
  children,
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
      className={`max-w-3xl ${centered ? "mx-auto text-center" : ""} mb-12 sm:mb-16`}
    >
      {badge && (
        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orbin-teal-50 text-orbin-teal text-xs font-semibold uppercase tracking-wider mb-4">
          <span className="w-1.5 h-1.5 rounded-full bg-orbin-teal" />
          {badge}
        </span>
      )}
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-orbin-gray-900 leading-tight">
        {title}{" "}
        {highlight && <span className="gradient-text">{highlight}</span>}
      </h2>
      {description && (
        <p className="mt-4 text-lg text-orbin-gray-500 leading-relaxed">
          {description}
        </p>
      )}
      {children}
    </motion.div>
  );
}

interface PageHeroProps {
  title: string;
  description?: string;
  breadcrumbs?: { name: string; href?: string }[];
}

export function PageHero({ title, description, breadcrumbs }: PageHeroProps) {
  return (
    <section className="relative bg-orbin-dark overflow-hidden">
      <div className="absolute inset-0 pattern-grid opacity-30" />
      <div className="absolute inset-0 bg-gradient-to-br from-orbin-dark via-orbin-dark-800 to-orbin-teal/20" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
        {breadcrumbs && (
          <nav className="flex items-center gap-2 text-sm text-white/50 mb-6">
            {breadcrumbs.map((crumb, i) => (
              <span key={i} className="flex items-center gap-2">
                {i > 0 && <span>/</span>}
                {crumb.href ? (
                  <a
                    href={crumb.href}
                    className="hover:text-orbin-teal transition-colors"
                  >
                    {crumb.name}
                  </a>
                ) : (
                  <span className="text-white/80">{crumb.name}</span>
                )}
              </span>
            ))}
          </nav>
        )}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white"
        >
          {title}
        </motion.h1>
        {description && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-lg text-white/60 max-w-2xl"
          >
            {description}
          </motion.p>
        )}
      </div>
    </section>
  );
}

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export function Card({ children, className = "", hover = true }: CardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      whileHover={hover ? { y: -4 } : undefined}
      transition={{ duration: 0.3 }}
      className={`bg-white rounded-2xl border border-orbin-gray-100 shadow-sm hover:shadow-xl hover:shadow-orbin-teal/5 transition-shadow duration-300 ${className}`}
    >
      {children}
    </motion.div>
  );
}
