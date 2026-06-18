import type { Metadata } from "next";
import Link from "next/link";
import { PageHero, SectionHeading } from "@/components/ui/shared";
import SolarContent from "./SolarContent";

export const metadata: Metadata = {
  title: "Solar Pump Solutions - Sustainable Water Management",
  description:
    "ORBIN Solar Pumps — DC and AC solar submersible pumps with MPPT/VFD controllers. Government subsidy eligible. MNRE approved. PM-KUSUM compatible.",
};

export default function SolarPage() {
  return (
    <>
      <PageHero
        title="Solar Pump Solutions"
        description="Harness the power of the sun — energy-efficient, cost-effective, and sustainable water pumping for agriculture and rural India."
        breadcrumbs={[
          { name: "Home", href: "/" },
          { name: "Solar Pumps" },
        ]}
      />
      <SolarContent />

      {/* CTA */}
      <section className="py-16 sm:py-24 bg-orbin-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <SectionHeading
            badge="Get Started"
            title="Switch to Solar"
            highlight="Today"
            description="Contact our team for a free site assessment and quote. Our experts will help you choose the right solar pump system."
          />
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-orbin-teal to-orbin-teal-dark text-white font-semibold shadow-lg shadow-orbin-teal/25 hover:shadow-orbin-teal/40 hover:scale-[1.02] transition-all"
            >
              Get Solar Quote
            </Link>
            <Link
              href="/products/solar-pumps"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl border-2 border-orbin-teal text-orbin-teal font-semibold hover:bg-orbin-teal hover:text-white transition-all"
            >
              View Solar Products
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
