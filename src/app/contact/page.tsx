import type { Metadata } from "next";
import { PageHero } from "@/components/ui/shared";
import ContactForm from "@/components/ContactForm";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact ORBIN Pumps for product inquiries, quotes, dealer information, and support. Call +91 2827 252 230 or email info@orbinpumps.com.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Contact Us"
        description="Have questions? Need a quote? We'd love to hear from you."
        breadcrumbs={[
          { name: "Home", href: "/" },
          { name: "Contact" },
        ]}
      />

      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-display font-bold text-orbin-gray-900 mb-6">
                Get in Touch
              </h2>
              <p className="text-orbin-gray-500 leading-relaxed mb-8">
                Our team is ready to help you find the perfect pumping solution.
                Reach out to us through any of the channels below.
              </p>

              <div className="space-y-5 mb-10">
                <a
                  href="tel:+912827252230"
                  className="flex items-start gap-4 group"
                >
                  <div className="w-11 h-11 rounded-xl bg-orbin-teal-50 flex items-center justify-center flex-shrink-0 group-hover:bg-orbin-teal/10 transition-colors">
                    <Phone className="w-5 h-5 text-orbin-teal" />
                  </div>
                  <div>
                    <p className="text-xs font-medium text-orbin-gray-400 uppercase tracking-wider">
                      Phone
                    </p>
                    <p className="text-orbin-gray-900 font-medium group-hover:text-orbin-teal transition-colors">
                      +91 2827 252 230
                    </p>
                  </div>
                </a>

                <a
                  href="mailto:info@orbinpumps.com"
                  className="flex items-start gap-4 group"
                >
                  <div className="w-11 h-11 rounded-xl bg-orbin-teal-50 flex items-center justify-center flex-shrink-0 group-hover:bg-orbin-teal/10 transition-colors">
                    <Mail className="w-5 h-5 text-orbin-teal" />
                  </div>
                  <div>
                    <p className="text-xs font-medium text-orbin-gray-400 uppercase tracking-wider">
                      Email
                    </p>
                    <p className="text-orbin-gray-900 font-medium group-hover:text-orbin-teal transition-colors">
                      info@orbinpumps.com
                    </p>
                  </div>
                </a>

                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-orbin-teal-50 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-orbin-teal" />
                  </div>
                  <div>
                    <p className="text-xs font-medium text-orbin-gray-400 uppercase tracking-wider">
                      Address
                    </p>
                    <p className="text-orbin-gray-900 font-medium">
                      ORBIN Pumps Pvt. Ltd.
                    </p>
                    <p className="text-sm text-orbin-gray-500">
                      Industrial Area, Rajkot - 360003,
                      <br />
                      Gujarat, India
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-orbin-teal-50 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-orbin-teal" />
                  </div>
                  <div>
                    <p className="text-xs font-medium text-orbin-gray-400 uppercase tracking-wider">
                      Business Hours
                    </p>
                    <p className="text-orbin-gray-900 font-medium">
                      Mon - Sat: 9:00 AM - 6:00 PM
                    </p>
                    <p className="text-sm text-orbin-gray-500">
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="rounded-2xl overflow-hidden border border-orbin-gray-100 h-64 bg-orbin-gray-100 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-8 h-8 text-orbin-gray-300 mx-auto mb-2" />
                  <p className="text-sm text-orbin-gray-400">
                    Google Maps embed
                    <br />
                    <span className="text-xs">(Configure in Sanity CMS)</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
