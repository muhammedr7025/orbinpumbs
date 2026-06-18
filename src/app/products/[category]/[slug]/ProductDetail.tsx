"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Product } from "@/types/sanity";
import { SectionHeading } from "@/components/ui/shared";
import ContactForm from "@/components/ContactForm";
import {
  CheckCircle,
  Download,
  Settings,
  Phone,
  ArrowLeft,
} from "lucide-react";

interface ProductDetailProps {
  product: Product;
  categorySlug: string;
}

export default function ProductDetail({
  product,
  categorySlug,
}: ProductDetailProps) {
  return (
    <>
      {/* Product Info */}
      <section className="py-12 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <Link
            href={`/products/${categorySlug}`}
            className="inline-flex items-center gap-2 text-sm text-orbin-gray-500 hover:text-orbin-teal mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to {product.categoryTitle || "Category"}
          </Link>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-gradient-to-br from-orbin-teal-50 to-orbin-gray-100 rounded-2xl aspect-square flex items-center justify-center"
            >
              <div className="w-40 h-40 rounded-3xl bg-white/80 flex items-center justify-center shadow-lg">
                <Settings className="w-20 h-20 text-orbin-teal/30" />
              </div>
            </motion.div>

            {/* Details */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              {product.modelNumber && (
                <span className="inline-flex items-center px-3 py-1 rounded-lg bg-orbin-teal-50 text-orbin-teal text-sm font-medium mb-4">
                  Model: {product.modelNumber}
                </span>
              )}

              <h1 className="text-2xl sm:text-3xl font-display font-bold text-orbin-gray-900 mb-4">
                {product.title}
              </h1>

              <p className="text-orbin-gray-500 leading-relaxed mb-8">
                {product.shortDescription}
              </p>

              {/* Features */}
              {product.features && product.features.length > 0 && (
                <div className="mb-8">
                  <h3 className="text-lg font-display font-semibold text-orbin-gray-900 mb-4">
                    Key Features
                  </h3>
                  <ul className="space-y-3">
                    {product.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-orbin-teal flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-orbin-gray-600">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="#enquiry"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-orbin-teal to-orbin-teal-dark text-white font-semibold shadow-lg shadow-orbin-teal/25 hover:shadow-orbin-teal/40 hover:scale-[1.02] transition-all"
                >
                  <Phone className="w-4 h-4" />
                  Enquire Now
                </a>
                {product.pdfDatasheet && (
                  <button className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl border-2 border-orbin-teal text-orbin-teal font-semibold hover:bg-orbin-teal hover:text-white transition-all">
                    <Download className="w-4 h-4" />
                    Download Datasheet
                  </button>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Specifications Table */}
      {product.specifications && product.specifications.length > 0 && (
        <section className="py-12 sm:py-20 bg-orbin-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <SectionHeading
              badge="Technical Data"
              title="Product"
              highlight="Specifications"
            />
            <div className="bg-white rounded-2xl border border-orbin-gray-100 overflow-hidden shadow-sm">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-orbin-dark text-white">
                      <th className="px-4 py-3 text-left font-semibold">Model</th>
                      <th className="px-4 py-3 text-center font-semibold">HP</th>
                      <th className="px-4 py-3 text-center font-semibold">KW</th>
                      <th className="px-4 py-3 text-center font-semibold">Stages</th>
                      <th className="px-4 py-3 text-center font-semibold">
                        Discharge (LPM)
                      </th>
                      <th className="px-4 py-3 text-center font-semibold">
                        Head (m)
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {product.specifications.map((spec, i) => (
                      <tr
                        key={i}
                        className={`border-t border-orbin-gray-100 ${
                          i % 2 === 0 ? "bg-white" : "bg-orbin-gray-50/50"
                        } hover:bg-orbin-teal-50/30 transition-colors`}
                      >
                        <td className="px-4 py-3 font-medium text-orbin-gray-900">
                          {spec.model}
                        </td>
                        <td className="px-4 py-3 text-center text-orbin-gray-600">
                          {spec.hp}
                        </td>
                        <td className="px-4 py-3 text-center text-orbin-gray-600">
                          {spec.kw}
                        </td>
                        <td className="px-4 py-3 text-center text-orbin-gray-600">
                          {spec.stages}
                        </td>
                        <td className="px-4 py-3 text-center text-orbin-gray-600">
                          {spec.dischargeLpm}
                        </td>
                        <td className="px-4 py-3 text-center text-orbin-gray-600">
                          {spec.headMeters}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Enquiry Section */}
      <section id="enquiry" className="py-12 sm:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <SectionHeading
            badge="Get in Touch"
            title="Enquire About"
            highlight="This Product"
            description={`Interested in ${product.title}? Fill out the form below and our team will get back to you within 24 hours.`}
          />
          <ContactForm />
        </div>
      </section>
    </>
  );
}
