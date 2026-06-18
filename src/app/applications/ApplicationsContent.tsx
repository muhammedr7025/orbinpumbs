"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/shared";
import {
  Wheat,
  Building2,
  Factory,
  Flame,
  Droplets,
  Home,
  ArrowRight,
} from "lucide-react";

const applications = [
  {
    icon: Wheat,
    title: "Agriculture & Irrigation",
    description:
      "Submersible and solar pumps for borewell irrigation, drip systems, and sprinkler networks. Powering India's agricultural backbone with reliable water supply.",
    products: ["Submersible Pumps", "Solar Pumps", "Openwell Pumps"],
    color: "from-emerald-500 to-emerald-700",
  },
  {
    icon: Home,
    title: "Residential",
    description:
      "Booster pumps and domestic water solutions for apartments, villas, and housing societies. Ensuring consistent water pressure at every floor.",
    products: ["Domestic Series", "Booster Pumps", "Hydro Pneumatic Systems"],
    color: "from-blue-500 to-blue-700",
  },
  {
    icon: Building2,
    title: "Commercial & High-Rise",
    description:
      "Hydro pneumatic and multistage booster systems for hotels, hospitals, malls, and commercial buildings.",
    products: ["Hydro Pneumatic Systems", "Multistage Boosters", "Control Panels"],
    color: "from-purple-500 to-purple-700",
  },
  {
    icon: Factory,
    title: "Industrial",
    description:
      "Heavy-duty pumps and motors for manufacturing plants, process industries, and coolant systems.",
    products: ["Hi-Pressure Washers", "Immersion Coolant", "Plunger Pumps"],
    color: "from-orbin-gray-600 to-orbin-gray-800",
  },
  {
    icon: Flame,
    title: "Fire Fighting",
    description:
      "Fire-fighting pump systems meeting safety regulations for commercial, industrial, and residential fire protection.",
    products: ["Fire Fighting Systems", "Control Panels", "Jockey Pumps"],
    color: "from-red-500 to-red-700",
  },
  {
    icon: Droplets,
    title: "Sewage & Waste Water",
    description:
      "Non-clog sewage pumps and waste water treatment pumps for municipal, industrial, and residential sewage handling.",
    products: ["Sewage Pumps", "Non-Clog Self Priming", "Slurry Pumps"],
    color: "from-amber-500 to-amber-700",
  },
];

export default function ApplicationsContent() {
  return (
    <section className="py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHeading
          badge="Industries We Serve"
          title="Pumping Solutions for"
          highlight="Every Sector"
          description="From farm fields to fire-fighting systems — ORBIN pumps are trusted across diverse applications."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {applications.map((app, i) => (
            <motion.div
              key={app.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group bg-white rounded-2xl border border-orbin-gray-100 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
            >
              {/* Icon header */}
              <div
                className={`h-32 bg-gradient-to-br ${app.color} flex items-center justify-center relative`}
              >
                <div className="absolute inset-0 pattern-grid opacity-20" />
                <app.icon className="w-16 h-16 text-white/80 relative" />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-display font-bold text-orbin-gray-900 mb-3">
                  {app.title}
                </h3>
                <p className="text-sm text-orbin-gray-500 leading-relaxed mb-4">
                  {app.description}
                </p>

                {/* Related products */}
                <div className="border-t border-orbin-gray-100 pt-4">
                  <p className="text-xs font-semibold text-orbin-gray-400 uppercase tracking-wider mb-2">
                    Related Products
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {app.products.map((prod) => (
                      <span
                        key={prod}
                        className="px-2 py-0.5 rounded-md bg-orbin-gray-50 text-orbin-gray-600 text-xs"
                      >
                        {prod}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-orbin-teal to-orbin-teal-dark text-white font-semibold shadow-lg shadow-orbin-teal/25 hover:shadow-orbin-teal/40 hover:scale-[1.02] transition-all group"
          >
            Discuss Your Requirements
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
