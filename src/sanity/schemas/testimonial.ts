import { defineField, defineType } from "sanity";

export const testimonial = defineType({
  name: "testimonial",
  title: "Testimonial",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Customer Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "role",
      title: "Role / Company",
      type: "string",
    }),
    defineField({
      name: "quote",
      title: "Testimonial Quote",
      type: "text",
      rows: 4,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "rating",
      title: "Rating (1-5)",
      type: "number",
      validation: (Rule) => Rule.min(1).max(5),
    }),
    defineField({
      name: "image",
      title: "Customer Photo",
      type: "image",
      options: { hotspot: true },
    }),
  ],
  preview: {
    select: {
      title: "name",
      subtitle: "role",
      media: "image",
    },
  },
});
