import { createClient } from "next-sanity";
import { createImageUrlBuilder } from "@sanity/image-url";
import { apiVersion, dataset, projectId, isSanityConfigured } from "./env";

export const client = isSanityConfigured
  ? createClient({
      projectId,
      dataset,
      apiVersion,
      useCdn: true,
      perspective: "published",
    })
  : null;

const builder = isSanityConfigured
  ? createImageUrlBuilder({ projectId, dataset })
  : null;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function urlFor(source: any) {
  if (!builder) return { url: () => "" };
  return builder.image(source);
}
