"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/shared";
import {
  Sun,
  Zap,
  IndianRupee,
  Leaf,
  Shield,
  Smartphone,
  CheckCircle,
} from "lucide-react";

const benefits = [
  {
    icon: Sun,
    title: "Zero Electricity Cost",
    description: "Run your pump entirely on solar power with no electricity bills.",
  },
  {
    icon: IndianRupee,
    title: "Government Subsidy",
    description: "Eligible under PM-KUSUM and state subsidy schemes — up to 90% subsidy.",
  },
  {
    icon: Leaf,
    title: "Eco-Friendly",
    description: "Clean, green energy reducing carbon footprint for sustainable farming.",
  },
  {
    icon: Shield,
    title: "5-Year Warranty",
    description: "Comprehensive warranty on solar panels and pump controller systems.",
  },
  {
    icon: Smartphone,
    title: "Remote Monitoring",
    description: "Track pump performance and water output via mobile app from anywhere.",
  },
  {
    icon: Zap,
    title: "MPPT Technology",
    description: "Maximum Power Point Tracking for optimal energy harvesting efficiency.",
  },
];

const solarRange = [
  { name: "DC Solar Pumps", hp: "1 - 5 HP", desc: "For off-grid locations" },
  { name: "AC Solar Pumps", hp: "3 - 25 HP", desc: "Dual power: solar + grid" },
  { name: "Surface Solar Pumps", hp: "1 - 10 HP", desc: "For open wells and tanks" },
  { name: "Solar Controllers", hp: "-", desc: "MPPT & VFD controllers" },
];

export default function SolarContent() {
  return (
    <>
      {/* Benefits */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <SectionHeading
            badge="Why Solar?"
            title="Benefits of"
            highlight="Solar Pumping"
            description="Solar pumps provide a reliable, cost-effective, and sustainable water supply solution."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, i) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-2xl p-6 border border-orbin-gray-100 shadow-sm hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center mb-4">
                  <benefit.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-display font-semibold text-orbin-gray-900 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-sm text-orbin-gray-500">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Solar Range */}
      <section className="py-16 sm:py-24 bg-orbin-dark text-white relative overflow-hidden">
        <div className="absolute inset-0 pattern-grid opacity-20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-white/80 text-xs font-semibold uppercase tracking-wider mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-orbin-gold" />
              Product Range
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-bold">
              Our Solar <span className="gradient-text">Product Line</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {solarRange.map((item, i) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass rounded-2xl p-6"
              >
                <Sun className="w-8 h-8 text-orbin-gold mb-4" />
                <h3 className="font-display font-semibold text-white mb-1">
                  {item.name}
                </h3>
                {item.hp !== "-" && (
                  <p className="text-orbin-teal text-sm font-medium mb-2">
                    {item.hp}
                  </p>
                )}
                <p className="text-sm text-white/50">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <SectionHeading
            badge="How It Works"
            title="Simple"
            highlight="Solar Setup"
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Solar Panels", desc: "Capture sunlight and convert to DC power" },
              { step: "02", title: "Controller", desc: "MPPT/VFD controller optimizes power delivery" },
              { step: "03", title: "Pump Motor", desc: "Submersible pump extracts water efficiently" },
              { step: "04", title: "Water Delivery", desc: "Reliable water supply for irrigation & use" },
            ].map((item, i) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="text-center"
              >
                <div className="w-16 h-16 rounded-2xl bg-orbin-teal-50 flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-display font-bold text-orbin-teal">
                    {item.step}
                  </span>
                </div>
                <h3 className="text-lg font-display font-semibold text-orbin-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-orbin-gray-500">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Subsidy Info */}
      <section className="py-16 sm:py-24 bg-orbin-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <SectionHeading
            badge="Government Scheme"
            title="PM-KUSUM"
            highlight="Subsidy"
            description="The Government of India provides significant subsidies for solar pump installations under the PM-KUSUM scheme."
          />
          <div className="bg-white rounded-2xl p-8 border border-orbin-gray-100 shadow-sm">
            <ul className="space-y-4">
              {[
                "Up to 90% subsidy for farmers (60% from central + 30% from state government)",
                "Available for pumps up to 10 HP capacity",
                "Applicable for both new installations and replacement of existing diesel/electric pumps",
                "ORBIN solar pumps are MNRE approved and eligible under the scheme",
                "Our team assists with complete documentation and application process",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                  <span className="text-orbin-gray-600">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
