import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  getCategoryBySlug,
  getProductsByCategory,
  getCategories,
} from "@/lib/data";
import { PageHero } from "@/components/ui/shared";
import { ArrowRight, Settings, Zap } from "lucide-react";

interface Props {
  params: Promise<{ category: string }>;
}

export async function generateStaticParams() {
  const categories = await getCategories();
  return categories.map((cat) => ({ category: cat.slug.current }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category: slug } = await params;
  const category = await getCategoryBySlug(slug);
  if (!category) return {};
  return {
    title: `${category.title} - ORBIN Products`,
    description:
      category.description ||
      `Explore ORBIN's range of ${category.title}. High-quality, ISO certified products.`,
  };
}

export const revalidate = 3600;

export default async function CategoryPage({ params }: Props) {
  const { category: slug } = await params;
  const [category, products] = await Promise.all([
    getCategoryBySlug(slug),
    getProductsByCategory(slug),
  ]);

  if (!category) notFound();

  return (
    <>
      <PageHero
        title={category.title}
        description={category.description}
        breadcrumbs={[
          { name: "Home", href: "/" },
          { name: "Products", href: "/products" },
          { name: category.title },
        ]}
      />

      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {products.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((product) => (
                <Link
                  key={product._id}
                  href={`/products/${slug}/${product.slug.current}`}
                  className="group bg-white rounded-2xl border border-orbin-gray-100 overflow-hidden shadow-sm hover:shadow-xl hover:shadow-orbin-teal/5 hover:-translate-y-1 transition-all duration-300"
                >
                  {/* Image placeholder */}
                  <div className="h-48 bg-gradient-to-br from-orbin-teal-50 to-orbin-gray-100 flex items-center justify-center">
                    <div className="w-20 h-20 rounded-2xl bg-white/80 flex items-center justify-center shadow-sm">
                      <Settings className="w-10 h-10 text-orbin-teal/40" />
                    </div>
                  </div>

                  <div className="p-5">
                    {/* Model number badge */}
                    {product.modelNumber && (
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-md bg-orbin-teal-50 text-orbin-teal text-xs font-medium mb-2">
                        {product.modelNumber}
                      </span>
                    )}

                    <h3 className="text-lg font-display font-semibold text-orbin-gray-900 mb-2 group-hover:text-orbin-teal transition-colors">
                      {product.title}
                    </h3>

                    <p className="text-sm text-orbin-gray-500 line-clamp-2 mb-4">
                      {product.shortDescription}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {product.series && (
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-orbin-gray-50 text-orbin-gray-500 text-xs">
                          <Zap className="w-3 h-3" />
                          {product.series}
                        </span>
                      )}
                      {product.hpRange && (
                        <span className="inline-flex items-center px-2 py-0.5 rounded-md bg-orbin-gray-50 text-orbin-gray-500 text-xs">
                          {product.hpRange} HP
                        </span>
                      )}
                    </div>

                    <div className="flex items-center gap-1 text-sm font-semibold text-orbin-teal group-hover:gap-2 transition-all">
                      View Details
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <Settings className="w-16 h-16 text-orbin-gray-200 mx-auto mb-4" />
              <h3 className="text-xl font-display font-semibold text-orbin-gray-900 mb-2">
                Coming Soon
              </h3>
              <p className="text-orbin-gray-500">
                Products in this category will be listed shortly. Contact us for
                more information.
              </p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
