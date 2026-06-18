import { defineField, defineType } from "sanity";

export const certification = defineType({
  name: "certification",
  title: "Certification",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Certification Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "image",
      title: "Certification Image/Badge",
      type: "image",
      options: { hotspot: true },
      fields: [
        { name: "alt", title: "Alt Text", type: "string" },
      ],
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 2,
    }),
    defineField({
      name: "order",
      title: "Display Order",
      type: "number",
    }),
  ],
  orderings: [
    {
      title: "Display Order",
      name: "orderAsc",
      by: [{ field: "order", direction: "asc" }],
    },
  ],
  preview: {
    select: {
      title: "name",
      media: "image",
    },
  },
});
