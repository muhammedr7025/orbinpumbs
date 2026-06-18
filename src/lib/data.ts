import { client } from "@/sanity/client";
import { isSanityConfigured } from "@/sanity/env";
import {
  siteSettingsQuery,
  heroSlidesQuery,
  categoriesQuery,
  featuredCategoriesQuery,
  categoryBySlugQuery,
  productsByCategoryQuery,
  productBySlugQuery,
  allProductsQuery,
  certificationsQuery,
  testimonialsQuery,
  postsQuery,
  postBySlugQuery,
} from "@/sanity/queries";
import {
  SiteSettings,
  HeroSlide,
  Category,
  Product,
  Certification,
  Testimonial,
  Post,
} from "@/types/sanity";
import {
  fallbackHeroSlides,
  fallbackCategories,
  fallbackProducts,
  fallbackCertifications,
} from "./fallback-data";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
async function safeFetch<T>(query: string, params?: Record<string, any>): Promise<T | null> {
  if (!isSanityConfigured || !client) return null;
  try {
    return await client.fetch<T>(query, params ?? {});
  } catch {
    console.warn("Sanity fetch failed, using fallback data");
    return null;
  }
}

// Site Settings
export async function getSiteSettings(): Promise<SiteSettings> {
  const data = await safeFetch<SiteSettings>(siteSettingsQuery);
  return (
    data ?? {
      title: "ORBIN - Experience the Excellence",
      tagline: "Experience the Excellence",
      description:
        "ORBIN — India's premier manufacturer of submersible pumps, motors, cables & solar pump systems. 40+ years of trust, ISO certified, delivering excellence since 1989.",
      logo: {} as SiteSettings["logo"],
      ogImage: {} as SiteSettings["ogImage"],
      phone: "+91 2827 252 230",
      email: "info@orbinpumps.com",
      address:
        "ORBIN Pumps Pvt. Ltd., Survey No. 123, Industrial Area, Rajkot - 360003, Gujarat, India",
      mapEmbedUrl: "",
      businessHours: "Mon - Sat: 9:00 AM - 6:00 PM",
      socialLinks: {},
    }
  );
}

// Hero Slides
export async function getHeroSlides(): Promise<HeroSlide[]> {
  const data = await safeFetch<HeroSlide[]>(heroSlidesQuery);
  return data?.length ? data : fallbackHeroSlides;
}

// Categories
export async function getCategories(): Promise<Category[]> {
  const data = await safeFetch<Category[]>(categoriesQuery);
  return data?.length ? data : fallbackCategories;
}

export async function getFeaturedCategories(): Promise<Category[]> {
  const data = await safeFetch<Category[]>(featuredCategoriesQuery);
  return data?.length
    ? data
    : fallbackCategories.filter((c) => c.featured);
}

export async function getCategoryBySlug(
  slug: string
): Promise<Category | null> {
  const data = await safeFetch<Category>(categoryBySlugQuery, { slug });
  return (
    data ?? fallbackCategories.find((c) => c.slug.current === slug) ?? null
  );
}

// Products
export async function getProductsByCategory(
  categorySlug: string
): Promise<Product[]> {
  const data = await safeFetch<Product[]>(productsByCategoryQuery, {
    categorySlug,
  });
  return data?.length ? data : fallbackProducts[categorySlug] ?? [];
}

export async function getProductBySlug(
  categorySlug: string,
  slug: string
): Promise<Product | null> {
  const data = await safeFetch<Product>(productBySlugQuery, {
    categorySlug,
    slug,
  });
  if (data) return data;
  const products = fallbackProducts[categorySlug] ?? [];
  return products.find((p) => p.slug.current === slug) ?? null;
}

export async function getAllProducts(): Promise<
  { slug: { current: string }; categorySlug: string }[]
> {
  const data = await safeFetch<
    { slug: { current: string }; categorySlug: string }[]
  >(allProductsQuery);
  if (data?.length) return data;
  // Build from fallback
  return Object.entries(fallbackProducts).flatMap(([catSlug, products]) =>
    products.map((p) => ({
      slug: p.slug,
      categorySlug: catSlug,
    }))
  );
}

// Get top products for the homepage carousel
export async function getTopProducts(): Promise<Product[]> {
  // Try to fetch featured products if such a query existed, but for now we'll just pull a mix
  const [submersible, solar, openwell, domestic] = await Promise.all([
    getProductsByCategory("submersible-pumps"),
    getProductsByCategory("solar-pumps"),
    getProductsByCategory("openwell-pumps"),
    getProductsByCategory("domestic-series"),
  ]);

  // Return a combined list of products for the infinite carousel
  return [...submersible, ...solar, ...openwell, ...domestic];
}

// Certifications
export async function getCertifications(): Promise<Certification[]> {
  const data = await safeFetch<Certification[]>(certificationsQuery);
  return data?.length ? data : fallbackCertifications;
}

// Testimonials
export async function getTestimonials(): Promise<Testimonial[]> {
  const data = await safeFetch<Testimonial[]>(testimonialsQuery);
  return data ?? [];
}

// Blog Posts
export async function getPosts(): Promise<Post[]> {
  const data = await safeFetch<Post[]>(postsQuery);
  return data ?? [];
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  return safeFetch<Post>(postBySlugQuery, { slug });
}
