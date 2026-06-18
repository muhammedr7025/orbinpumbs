import { groq } from "next-sanity";

// Site Settings
export const siteSettingsQuery = groq`
  *[_type == "siteSettings"][0] {
    title,
    tagline,
    description,
    logo,
    ogImage,
    phone,
    email,
    address,
    mapEmbedUrl,
    businessHours,
    socialLinks
  }
`;

// Hero Slides
export const heroSlidesQuery = groq`
  *[_type == "heroSlide"] | order(order asc) {
    _id,
    title,
    subtitle,
    image,
    ctaText,
    ctaLink
  }
`;

// Categories
export const categoriesQuery = groq`
  *[_type == "category"] | order(order asc) {
    _id,
    title,
    slug,
    description,
    image,
    featured,
    "productCount": count(*[_type == "product" && references(^._id)])
  }
`;

export const featuredCategoriesQuery = groq`
  *[_type == "category" && featured == true] | order(order asc) {
    _id,
    title,
    slug,
    description,
    image,
    "productCount": count(*[_type == "product" && references(^._id)])
  }
`;

export const categoryBySlugQuery = groq`
  *[_type == "category" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    description,
    image
  }
`;

// Products
export const productsByCategoryQuery = groq`
  *[_type == "product" && category->slug.current == $categorySlug] | order(title asc) {
    _id,
    title,
    modelNumber,
    slug,
    shortDescription,
    series,
    hpRange,
    images,
    "categorySlug": category->slug.current
  }
`;

export const productBySlugQuery = groq`
  *[_type == "product" && slug.current == $slug && category->slug.current == $categorySlug][0] {
    _id,
    title,
    modelNumber,
    slug,
    shortDescription,
    features,
    specifications,
    images,
    pdfDatasheet,
    series,
    hpRange,
    seoTitle,
    seoDescription,
    "categoryTitle": category->title,
    "categorySlug": category->slug.current
  }
`;

export const allProductsQuery = groq`
  *[_type == "product"] | order(title asc) {
    _id,
    slug,
    "categorySlug": category->slug.current
  }
`;

// Pages
export const pageBySlugQuery = groq`
  *[_type == "page" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    body,
    heroImage,
    seoTitle,
    seoDescription
  }
`;

// Blog Posts
export const postsQuery = groq`
  *[_type == "post"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    excerpt,
    coverImage,
    publishedAt
  }
`;

export const postBySlugQuery = groq`
  *[_type == "post" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    body,
    coverImage,
    excerpt,
    publishedAt,
    seoTitle,
    seoDescription
  }
`;

// Certifications
export const certificationsQuery = groq`
  *[_type == "certification"] | order(order asc) {
    _id,
    name,
    image,
    description
  }
`;

// Testimonials
export const testimonialsQuery = groq`
  *[_type == "testimonial"] {
    _id,
    name,
    role,
    quote,
    rating,
    image
  }
`;
