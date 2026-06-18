import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getProductBySlug, getAllProducts } from "@/lib/data";
import { PageHero } from "@/components/ui/shared";
import ProductDetail from "./ProductDetail";

interface Props {
  params: Promise<{ category: string; slug: string }>;
}

export async function generateStaticParams() {
  const products = await getAllProducts();
  return products.map((p) => ({
    category: p.categorySlug,
    slug: p.slug.current,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category, slug } = await params;
  const product = await getProductBySlug(category, slug);
  if (!product) return {};

  const title = product.seoTitle || `${product.title} - ORBIN`;
  const description =
    product.seoDescription ||
    product.shortDescription ||
    `${product.title} by ORBIN. High-quality ${product.categoryTitle}. ISO certified.`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "website",
    },
    other: {
      "product:brand": "ORBIN",
      "product:condition": "new",
    },
  };
}

export const revalidate = 3600;

export default async function ProductPage({ params }: Props) {
  const { category, slug } = await params;
  const product = await getProductBySlug(category, slug);

  if (!product) notFound();

  return (
    <>
      <PageHero
        title={product.title}
        description={product.shortDescription}
        breadcrumbs={[
          { name: "Home", href: "/" },
          { name: "Products", href: "/products" },
          {
            name: product.categoryTitle || "Category",
            href: `/products/${category}`,
          },
          { name: product.title },
        ]}
      />
      <ProductDetail product={product} categorySlug={category} />

      {/* JSON-LD Product Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            name: product.title,
            description: product.shortDescription,
            brand: {
              "@type": "Brand",
              name: "ORBIN",
            },
            manufacturer: {
              "@type": "Organization",
              name: "ORBIN Pumps Pvt. Ltd.",
            },
            model: product.modelNumber,
            category: product.categoryTitle,
          }),
        }}
      />
    </>
  );
}
