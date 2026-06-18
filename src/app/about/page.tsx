import type { Metadata } from "next";
import { getCertifications } from "@/lib/data";
import { PageHero } from "@/components/ui/shared";
import AboutContent from "./AboutContent";

export const metadata: Metadata = {
  title: "About Us - Our Story Since 1989",
  description:
    "Learn about ORBIN's 40+ year journey in manufacturing submersible pumps, motors & solar systems. ISO 9001/14001/45001 certified with 16,815 sq.m manufacturing facility.",
};

export const revalidate = 3600;

export default async function AboutPage() {
  const certifications = await getCertifications();

  return (
    <>
      <PageHero
        title="About ORBIN"
        description="Four decades of engineering excellence — powering India's water infrastructure since 1989."
        breadcrumbs={[
          { name: "Home", href: "/" },
          { name: "About Us" },
        ]}
      />
      <AboutContent certifications={certifications} />
    </>
  );
}
