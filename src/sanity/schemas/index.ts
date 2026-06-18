import { type SchemaTypeDefinition } from "sanity";
import { siteSettings } from "./siteSettings";
import { category } from "./category";
import { product } from "./product";
import { page } from "./page";
import { post } from "./post";
import { certification } from "./certification";
import { testimonial } from "./testimonial";
import { heroSlide } from "./heroSlide";

export const schemaTypes: SchemaTypeDefinition[] = [
  siteSettings,
  heroSlide,
  category,
  product,
  page,
  post,
  certification,
  testimonial,
];
