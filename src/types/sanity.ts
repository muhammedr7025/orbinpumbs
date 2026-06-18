import { PortableTextBlock } from "@portabletext/react";

export interface SanityImage {
  _type: "image";
  asset: {
    _ref: string;
    _type: "reference";
  };
  alt?: string;
  caption?: string;
  hotspot?: {
    x: number;
    y: number;
    height: number;
    width: number;
  };
}

export interface SiteSettings {
  title: string;
  tagline: string;
  description: string;
  logo: SanityImage;
  ogImage: SanityImage;
  phone: string;
  email: string;
  address: string;
  mapEmbedUrl: string;
  businessHours: string;
  socialLinks: {
    facebook?: string;
    instagram?: string;
    linkedin?: string;
    youtube?: string;
    twitter?: string;
  };
}

export interface HeroSlide {
  _id: string;
  title: string;
  subtitle: string;
  image: SanityImage;
  ctaText: string;
  ctaLink: string;
}

export interface Category {
  _id: string;
  title: string;
  slug: { current: string };
  description: string;
  image: SanityImage;
  featured?: boolean;
  productCount?: number;
}

export interface ProductSpec {
  model: string;
  hp: string;
  kw: string;
  stages: string;
  dischargeLpm: string;
  headMeters: string;
  price?: string;
}

export interface Product {
  _id: string;
  title: string;
  modelNumber: string;
  slug: { current: string };
  shortDescription: string;
  features: string[];
  specifications: ProductSpec[];
  images: SanityImage[];
  pdfDatasheet?: {
    asset: {
      _ref: string;
      url: string;
    };
  };
  series: string;
  hpRange: string;
  seoTitle?: string;
  seoDescription?: string;
  categoryTitle?: string;
  categorySlug?: string;
}

export interface Page {
  _id: string;
  title: string;
  slug: { current: string };
  body: PortableTextBlock[];
  heroImage: SanityImage;
  seoTitle?: string;
  seoDescription?: string;
}

export interface Post {
  _id: string;
  title: string;
  slug: { current: string };
  body?: PortableTextBlock[];
  coverImage: SanityImage;
  excerpt: string;
  publishedAt: string;
  seoTitle?: string;
  seoDescription?: string;
}

export interface Certification {
  _id: string;
  name: string;
  image: SanityImage;
  description: string;
}

export interface Testimonial {
  _id: string;
  name: string;
  role: string;
  quote: string;
  rating: number;
  image: SanityImage;
}
