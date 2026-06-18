import type { MetadataRoute } from "next";
import { getCategories, getAllProducts, getPosts } from "@/lib/data";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://orbin.in";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${SITE_URL}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/products`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/solar`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/applications`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/dealers`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/contact`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.6,
    },
  ];

  // Category pages
  const categories = await getCategories();
  const categoryPages: MetadataRoute.Sitemap = categories.map((cat) => ({
    url: `${SITE_URL}/products/${cat.slug.current}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  // Product pages
  const products = await getAllProducts();
  const productPages: MetadataRoute.Sitemap = products.map((prod) => ({
    url: `${SITE_URL}/products/${prod.categorySlug}/${prod.slug.current}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  // Blog pages
  const posts = await getPosts();
  const blogPages: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${SITE_URL}/blog/${post.slug.current}`,
    lastModified: post.publishedAt ? new Date(post.publishedAt) : new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.5,
  }));

  return [...staticPages, ...categoryPages, ...productPages, ...blogPages];
}
