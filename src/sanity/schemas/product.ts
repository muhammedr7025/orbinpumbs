import { defineField, defineType } from "sanity";

export const product = defineType({
  name: "product",
  title: "Product",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Product Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "modelNumber",
      title: "Model Number",
      type: "string",
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title", maxLength: 96 },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "category",
      title: "Category",
      type: "reference",
      to: [{ type: "category" }],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "images",
      title: "Product Images",
      type: "array",
      of: [
        {
          type: "image",
          options: { hotspot: true },
          fields: [
            {
              name: "alt",
              title: "Alt Text",
              type: "string",
            },
          ],
        },
      ],
    }),
    defineField({
      name: "shortDescription",
      title: "Short Description",
      type: "text",
      rows: 2,
    }),
    defineField({
      name: "features",
      title: "Key Features",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "specifications",
      title: "Specifications",
      type: "array",
      of: [
        {
          type: "object",
          name: "spec",
          fields: [
            { name: "model", title: "Model", type: "string" },
            { name: "hp", title: "HP", type: "string" },
            { name: "kw", title: "KW", type: "string" },
            { name: "stages", title: "Stages", type: "string" },
            { name: "dischargeLpm", title: "Discharge (LPM)", type: "string" },
            { name: "headMeters", title: "Head (Meters)", type: "string" },
            { name: "price", title: "Price", type: "string" },
          ],
          preview: {
            select: {
              title: "model",
              subtitle: "hp",
            },
          },
        },
      ],
    }),
    defineField({
      name: "pdfDatasheet",
      title: "PDF Datasheet",
      type: "file",
      options: {
        accept: ".pdf",
      },
    }),
    defineField({
      name: "series",
      title: "Series",
      type: "string",
    }),
    defineField({
      name: "hpRange",
      title: "HP Range",
      type: "string",
      description: "e.g., 0.5 - 30",
    }),
    defineField({
      name: "seoTitle",
      title: "SEO Title",
      type: "string",
    }),
    defineField({
      name: "seoDescription",
      title: "SEO Description",
      type: "text",
      rows: 2,
    }),
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "modelNumber",
      media: "images.0",
    },
  },
});
