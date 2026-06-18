import type { Metadata } from "next";
import Link from "next/link";
import { getCategories } from "@/lib/data";
import { PageHero } from "@/components/ui/shared";
import { SectionHeading } from "@/components/ui/shared";
import { ArrowUpRight, Package } from "lucide-react";

export const metadata: Metadata = {
  title: "Products - Complete Range of Pumps & Motors",
  description:
    "Explore ORBIN's complete range of submersible pumps, solar pumps, openwell pumps, motors, cables, and control panels. Find the perfect pumping solution.",
};

export const revalidate = 3600;

const categoryIcons: Record<string, string> = {
  "submersible-pumps": "💧",
  "solar-pumps": "☀️",
  "openwell-pumps": "🌊",
  "submersible-motors": "⚡",
  "domestic-series": "🏠",
  "sewage-waste-water-pumps": "♻️",
  "cables": "🔌",
  "control-panels-starters": "🎛️",
  "fire-fighting-systems": "🔥",
  "ss-investment-casting-pumps": "🔩",
  "hydro-pneumatic-systems": "🚰",
  "motor-protectors": "🛡️",
  "hi-pressure-washer-pumps": "💨",
  "plunger-pumps": "⚙️",
  "mud-monoblock-pumps": "🏗️",
  "non-clog-self-priming-pumps": "🔧",
  "immersion-coolant-pumps": "❄️",
  "ss-submersible-pumps": "🔬",
  "ss-casted-pumps": "🏭",
};

export default async function ProductsPage() {
  const categories = await getCategories();

  return (
    <>
      <PageHero
        title="Our Products"
        description="Comprehensive range of pumps, motors, and water management solutions for every application."
        breadcrumbs={[
          { name: "Home", href: "/" },
          { name: "Products" },
        ]}
      />

      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <SectionHeading
            badge="Full Catalog"
            title="Browse by"
            highlight="Category"
            description="Select a category to explore our complete product lineup."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {categories.map((cat) => (
              <Link
                key={cat._id}
                href={`/products/${cat.slug.current}`}
                className="group relative bg-white rounded-2xl border border-orbin-gray-100 p-5 shadow-sm hover:shadow-xl hover:shadow-orbin-teal/5 hover:-translate-y-1 transition-all duration-300 overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-orbin-teal/5 to-transparent rounded-bl-[40px] group-hover:from-orbin-teal/10 transition-colors" />
                <div className="relative">
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-12 h-12 rounded-xl bg-orbin-teal-50 flex items-center justify-center text-xl group-hover:bg-orbin-teal/10 transition-colors">
                      {categoryIcons[cat.slug.current] || (
                        <Package className="w-5 h-5 text-orbin-teal" />
                      )}
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-orbin-gray-300 group-hover:text-orbin-teal group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </div>
                  <h3 className="text-base font-display font-semibold text-orbin-gray-900 mb-1.5 group-hover:text-orbin-teal transition-colors">
                    {cat.title}
                  </h3>
                  <p className="text-sm text-orbin-gray-500 leading-relaxed line-clamp-2">
                    {cat.description}
                  </p>
                  {cat.productCount !== undefined && cat.productCount > 0 && (
                    <div className="mt-3 pt-3 border-t border-orbin-gray-100">
                      <span className="text-xs font-medium text-orbin-gray-400">
                        {cat.productCount} product{cat.productCount !== 1 ? "s" : ""}
                      </span>
                    </div>
                  )}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
