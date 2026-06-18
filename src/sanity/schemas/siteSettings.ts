import { defineField, defineType } from "sanity";

export const siteSettings = defineType({
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Site Title",
      type: "string",
      initialValue: "ORBIN - Experience the Excellence",
    }),
    defineField({
      name: "tagline",
      title: "Tagline",
      type: "string",
      initialValue: "Experience the Excellence",
    }),
    defineField({
      name: "description",
      title: "Default Meta Description",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "logo",
      title: "Logo",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "ogImage",
      title: "Default OG Image",
      type: "image",
    }),
    defineField({
      name: "phone",
      title: "Phone Number",
      type: "string",
    }),
    defineField({
      name: "email",
      title: "Email",
      type: "string",
    }),
    defineField({
      name: "address",
      title: "Address",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "mapEmbedUrl",
      title: "Google Maps Embed URL",
      type: "url",
    }),
    defineField({
      name: "businessHours",
      title: "Business Hours",
      type: "string",
    }),
    defineField({
      name: "socialLinks",
      title: "Social Media Links",
      type: "object",
      fields: [
        { name: "facebook", title: "Facebook", type: "url" },
        { name: "instagram", title: "Instagram", type: "url" },
        { name: "linkedin", title: "LinkedIn", type: "url" },
        { name: "youtube", title: "YouTube", type: "url" },
        { name: "twitter", title: "Twitter/X", type: "url" },
      ],
    }),
  ],
  preview: {
    select: { title: "title" },
  },
});
