"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/shared";
import { Certification } from "@/types/sanity";
import {
  Factory,
  Award,
  Target,
  Eye,
  Shield,
  Users,
  Wrench,
  Globe,
} from "lucide-react";

interface AboutContentProps {
  certifications: Certification[];
}

export default function AboutContent({ certifications }: AboutContentProps) {
  return (
    <>
      {/* History */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orbin-teal-50 text-orbin-teal text-xs font-semibold uppercase tracking-wider mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-orbin-teal" />
                Our History
              </span>
              <h2 className="text-3xl sm:text-4xl font-display font-bold text-orbin-gray-900 mb-6">
                A Journey of{" "}
                <span className="gradient-text">Four Decades</span>
              </h2>
              <div className="space-y-4 text-orbin-gray-500 leading-relaxed">
                <p>
                  Founded in 1989, ORBIN began as a small workshop in Rajkot,
                  Gujarat, with a vision to provide reliable water pumping
                  solutions to India&apos;s agricultural heartland. What started with
                  a handful of passionate engineers has grown into one of
                  India&apos;s most trusted pump manufacturers.
                </p>
                <p>
                  Over four decades, we have expanded our manufacturing facility
                  to a sprawling 16,815 sq.m campus equipped with state-of-the-art
                  CNC machines, automated winding lines, and comprehensive
                  testing laboratories. Every product that leaves our facility
                  undergoes rigorous quality testing.
                </p>
                <p>
                  Today, ORBIN serves thousands of customers across India through
                  a network of 1,000+ authorized dealers, offering over 500
                  product variants across submersible pumps, motors, solar
                  systems, and more.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-orbin-teal/10 to-orbin-gold/10 rounded-3xl p-8 sm:p-12">
                <div className="grid grid-cols-2 gap-6">
                  {[
                    { icon: Factory, value: "1989", label: "Founded" },
                    { icon: Globe, value: "16,815 sq.m", label: "Facility" },
                    { icon: Users, value: "1,000+", label: "Dealers" },
                    { icon: Wrench, value: "500+", label: "Products" },
                  ].map((stat, i) => (
                    <div key={i} className="text-center">
                      <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center mx-auto mb-3">
                        <stat.icon className="w-6 h-6 text-orbin-teal" />
                      </div>
                      <div className="text-2xl font-display font-bold text-orbin-gray-900">
                        {stat.value}
                      </div>
                      <div className="text-sm text-orbin-gray-500">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 sm:py-24 bg-orbin-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <SectionHeading
            badge="Our Purpose"
            title="Mission &"
            highlight="Vision"
          />
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 border border-orbin-gray-100 shadow-sm"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orbin-teal to-orbin-teal-dark flex items-center justify-center mb-6">
                <Target className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-display font-bold text-orbin-gray-900 mb-4">
                Our Mission
              </h3>
              <p className="text-orbin-gray-500 leading-relaxed">
                To deliver world-class water management solutions that empower
                farmers, industries, and communities. We are committed to
                innovation, quality, and sustainability in every product we
                manufacture — ensuring reliable water access for all.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-2xl p-8 border border-orbin-gray-100 shadow-sm"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orbin-gold to-orbin-gold-dark flex items-center justify-center mb-6">
                <Eye className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-display font-bold text-orbin-gray-900 mb-4">
                Our Vision
              </h3>
              <p className="text-orbin-gray-500 leading-relaxed">
                To be India&apos;s most trusted name in pumping technology — leading
                the transition to energy-efficient, solar-powered water systems.
                We envision a future where every farm and home has access to
                reliable, affordable, and sustainable water solutions.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section id="certifications" className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <SectionHeading
            badge="Quality Assurance"
            title="Certifications &"
            highlight="Standards"
            description="Our commitment to quality is backed by internationally recognized certifications."
          />
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
            {certifications.map((cert, i) => (
              <motion.div
                key={cert._id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-2xl p-6 border border-orbin-gray-100 shadow-sm text-center hover:shadow-lg transition-shadow"
              >
                <div className="w-16 h-16 rounded-xl bg-orbin-teal-50 flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-orbin-teal" />
                </div>
                <h3 className="font-display font-semibold text-orbin-gray-900 text-sm">
                  {cert.name}
                </h3>
                <p className="text-xs text-orbin-gray-500 mt-1">
                  {cert.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Manufacturing */}
      <section className="py-16 sm:py-24 bg-orbin-dark text-white relative overflow-hidden">
        <div className="absolute inset-0 pattern-grid opacity-20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-white/80 text-xs font-semibold uppercase tracking-wider mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-orbin-teal" />
              Infrastructure
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-bold mb-6">
              State-of-the-Art{" "}
              <span className="gradient-text">Manufacturing</span>
            </h2>
            <p className="text-lg text-white/60 max-w-2xl mx-auto mb-12">
              Our 16,815 sq.m facility houses advanced CNC machining centers,
              automated winding lines, precision balancing machines, and
              comprehensive testing laboratories — ensuring every product meets
              the highest quality standards.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Award, label: "CNC Machining", desc: "Precision engineering" },
              { icon: Factory, label: "Auto Winding", desc: "Automated production" },
              { icon: Shield, label: "Quality Lab", desc: "100% testing" },
              { icon: Wrench, label: "R&D Center", desc: "Continuous innovation" },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass rounded-2xl p-6 text-center"
              >
                <div className="w-12 h-12 rounded-xl bg-orbin-teal/20 flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-6 h-6 text-orbin-teal" />
                </div>
                <h3 className="font-display font-semibold text-white mb-1">
                  {item.label}
                </h3>
                <p className="text-sm text-white/50">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
