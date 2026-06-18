import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://orbin.in"
  ),
  title: {
    default: "ORBIN - Experience the Excellence | Submersible Pumps & Motors",
    template: "%s | ORBIN Pumps",
  },
  description:
    "India's premier manufacturer of submersible pumps, motors, cables & solar pump systems. 40+ years of trust, ISO 9001/14001/45001 certified. Experience the Excellence.",
  keywords: [
    "submersible pumps",
    "solar pumps India",
    "borewell pumps",
    "openwell pumps",
    "submersible motors",
    "ORBIN pumps",
    "water pumps manufacturer India",
    "irrigation pumps",
    "pump manufacturer Gujarat",
  ],
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "ORBIN Pumps",
    title: "ORBIN - Experience the Excellence",
    description:
      "India's premier manufacturer of submersible pumps, motors, cables & solar pump systems. 40+ years of trust.",
  },
  twitter: {
    card: "summary_large_image",
    title: "ORBIN - Experience the Excellence",
    description:
      "India's premier manufacturer of submersible pumps, motors, cables & solar pump systems.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        {/* JSON-LD Organization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "ORBIN Pumps Pvt. Ltd.",
              url: "https://orbin.in",
              logo: "https://orbin.in/logo.png",
              description:
                "India's premier manufacturer of submersible pumps, motors, cables & solar pump systems since 1989.",
              foundingDate: "1989",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Industrial Area",
                addressLocality: "Rajkot",
                addressRegion: "Gujarat",
                postalCode: "360003",
                addressCountry: "IN",
              },
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+91-2827-252-230",
                contactType: "customer service",
                availableLanguage: ["en", "hi", "gu"],
              },
              sameAs: [],
            }),
          }}
        />
      </head>
      <body className="antialiased">
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
