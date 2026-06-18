import type { Metadata } from "next";
import { PageHero } from "@/components/ui/shared";
import ApplicationsContent from "./ApplicationsContent";

export const metadata: Metadata = {
  title: "Applications & Industries",
  description:
    "ORBIN pumps serve agriculture, residential, industrial, fire fighting, and sewage/waste water treatment applications across India.",
};

export default function ApplicationsPage() {
  return (
    <>
      <PageHero
        title="Applications & Industries"
        description="Our pumping solutions serve diverse sectors — from farming fields to high-rise buildings."
        breadcrumbs={[
          { name: "Home", href: "/" },
          { name: "Applications" },
        ]}
      />
      <ApplicationsContent />
    </>
  );
}
