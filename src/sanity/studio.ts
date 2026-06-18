"use client";

import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./schemas";
import { apiVersion, dataset, projectId } from "./env";

export default defineConfig({
  name: "orbin-studio",
  title: "ORBIN CMS",
  projectId,
  dataset,
  basePath: "/studio",
  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title("Content")
          .items([
            S.listItem()
              .title("Site Settings")
              .child(
                S.document()
                  .schemaType("siteSettings")
                  .documentId("siteSettings")
              ),
            S.divider(),
            S.listItem()
              .title("Hero Slides")
              .child(
                S.documentTypeList("heroSlide").title("Hero Slides")
              ),
            S.listItem()
              .title("Product Categories")
              .child(
                S.documentTypeList("category").title("Categories")
              ),
            S.listItem()
              .title("Products")
              .child(
                S.documentTypeList("product").title("Products")
              ),
            S.divider(),
            S.listItem()
              .title("Pages")
              .child(S.documentTypeList("page").title("Pages")),
            S.listItem()
              .title("Blog Posts")
              .child(S.documentTypeList("post").title("Blog Posts")),
            S.divider(),
            S.listItem()
              .title("Certifications")
              .child(
                S.documentTypeList("certification").title("Certifications")
              ),
            S.listItem()
              .title("Testimonials")
              .child(
                S.documentTypeList("testimonial").title("Testimonials")
              ),
          ]),
    }),
    visionTool({ defaultApiVersion: apiVersion }),
  ],
  schema: {
    types: schemaTypes,
  },
});
