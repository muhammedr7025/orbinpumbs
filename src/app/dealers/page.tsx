import type { Metadata } from "next";
import { PageHero } from "@/components/ui/shared";
import ContactForm from "@/components/ContactForm";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Find a Dealer",
  description:
    "Find an authorized ORBIN pump dealer or distributor near you. Contact us to become a dealer.",
};

export default function DealersPage() {
  return (
    <>
      <PageHero
        title="Dealers & Distributors"
        description="Find an authorized ORBIN dealer near you or become part of our growing network."
        breadcrumbs={[
          { name: "Home", href: "/" },
          { name: "Dealers" },
        ]}
      />

      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Info */}
            <div>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orbin-teal-50 text-orbin-teal text-xs font-semibold uppercase tracking-wider mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-orbin-teal" />
                Dealer Network
              </span>
              <h2 className="text-3xl sm:text-4xl font-display font-bold text-orbin-gray-900 mb-6">
                1,000+ Authorized <span className="gradient-text">Dealers</span>{" "}
                Across India
              </h2>
              <p className="text-orbin-gray-500 leading-relaxed mb-8">
                ORBIN products are available through our extensive network of
                authorized dealers and distributors across India. Contact us to
                find the nearest dealer in your area, or if you&apos;re interested in
                becoming an authorized ORBIN dealer.
              </p>

              <div className="space-y-4 mb-8">
                {[
                  {
                    icon: Phone,
                    label: "Call us",
                    value: "+91 2827 252 230",
                    href: "tel:+912827252230",
                  },
                  {
                    icon: Mail,
                    label: "Email us",
                    value: "dealers@orbinpumps.com",
                    href: "mailto:dealers@orbinpumps.com",
                  },
                  {
                    icon: MapPin,
                    label: "Head Office",
                    value: "Industrial Area, Rajkot - 360003, Gujarat",
                  },
                  {
                    icon: Clock,
                    label: "Business Hours",
                    value: "Mon - Sat: 9:00 AM - 6:00 PM",
                  },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-orbin-teal-50 flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-5 h-5 text-orbin-teal" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-orbin-gray-400">
                        {item.label}
                      </p>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="text-orbin-gray-900 font-medium hover:text-orbin-teal transition-colors"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-orbin-gray-900 font-medium">
                          {item.value}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-orbin-teal-50 rounded-2xl p-6">
                <h3 className="font-display font-semibold text-orbin-gray-900 mb-2">
                  Become a Dealer
                </h3>
                <p className="text-sm text-orbin-gray-500">
                  Join India&apos;s fastest-growing pump distribution network. We offer
                  competitive margins, marketing support, and technical training
                  to all our authorized dealers.
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
