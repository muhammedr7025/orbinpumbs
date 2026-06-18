import Link from "next/link";
import Image from "next/image";
import {
  Phone,
  Mail,
  MapPin,
  ArrowUpRight,
} from "lucide-react";

const socialIcons = [
  { label: "Facebook", href: "#", path: "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" },
  { label: "Instagram", href: "#", path: "M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37zM17.5 6.5h.01M7.5 2h9A5.5 5.5 0 0 1 22 7.5v9a5.5 5.5 0 0 1-5.5 5.5h-9A5.5 5.5 0 0 1 2 16.5v-9A5.5 5.5 0 0 1 7.5 2z", multi: true },
  { label: "LinkedIn", href: "#", path: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2zM4 2a2 2 0 1 1 0 4 2 2 0 0 1 0-4z", multi: true },
  { label: "YouTube", href: "#", path: "M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19.1c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33zM9.75 15.02V8.48l5.75 3.27-5.75 3.27z" },
];

const footerLinks = {
  products: [
    { name: "Submersible Pumps", href: "/products/submersible-pumps" },
    { name: "Solar Pumps", href: "/products/solar-pumps" },
    { name: "Openwell Pumps", href: "/products/openwell-pumps" },
    { name: "Submersible Motors", href: "/products/submersible-motors" },
    { name: "Domestic Series", href: "/products/domestic-series" },
    { name: "All Products", href: "/products" },
  ],
  company: [
    { name: "About Us", href: "/about" },
    { name: "Applications", href: "/applications" },
    { name: "Blog", href: "/blog" },
    { name: "Find a Dealer", href: "/dealers" },
    { name: "Contact Us", href: "/contact" },
  ],
  resources: [
    { name: "Product Catalogs", href: "/contact" },
    { name: "Certifications", href: "/about#certifications" },
    { name: "Solar Solutions", href: "/solar" },
    { name: "Warranty Info", href: "/contact" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-orbin-dark text-white relative overflow-hidden">
      {/* Pattern */}
      <div className="absolute inset-0 pattern-grid opacity-30" />

      {/* CTA Banner */}
      <div className="relative border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl sm:text-3xl font-display font-bold">
                Ready to{" "}
                <span className="gradient-text">Experience Excellence?</span>
              </h2>
              <p className="text-white/60 mt-2 max-w-lg">
                Contact us today for a quote or to find a dealer near you. Over
                40 years of trust backs every product.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-orbin-teal to-orbin-teal-dark text-white font-semibold shadow-lg shadow-orbin-teal/25 hover:shadow-orbin-teal/40 hover:scale-[1.02] transition-all"
              >
                Get a Quote
                <ArrowUpRight className="w-4 h-4" />
              </Link>
              <Link
                href="/dealers"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-white/20 text-white font-semibold hover:bg-white/5 transition-all"
              >
                Find a Dealer
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-flex mb-6">
              <div className="bg-white rounded-lg px-4 py-3">
                <Image
                  src="/orbin-logo-v2.png"
                  alt="ORBIN — Experience the Excellence"
                  width={160}
                  height={40}
                  className="h-10 w-auto object-contain"
                />
              </div>
            </Link>
            <p className="text-white/50 text-sm leading-relaxed max-w-sm mb-6">
              India&apos;s premier manufacturer of submersible pumps, motors, cables
              & solar pump systems. Delivering excellence since 1989 with ISO
              9001, 14001 & 45001 certifications.
            </p>
            <div className="space-y-3">
              <a
                href="tel:+912827252230"
                className="flex items-center gap-3 text-sm text-white/60 hover:text-orbin-teal transition-colors"
              >
                <Phone className="w-4 h-4 text-orbin-teal" />
                +91 2827 252 230
              </a>
              <a
                href="mailto:info@orbinpumps.com"
                className="flex items-center gap-3 text-sm text-white/60 hover:text-orbin-teal transition-colors"
              >
                <Mail className="w-4 h-4 text-orbin-teal" />
                info@orbinpumps.com
              </a>
              <div className="flex items-start gap-3 text-sm text-white/60">
                <MapPin className="w-4 h-4 text-orbin-teal mt-0.5 flex-shrink-0" />
                <span>
                  Industrial Area, Rajkot - 360003,
                  <br />
                  Gujarat, India
                </span>
              </div>
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Products
            </h3>
            <ul className="space-y-3">
              {footerLinks.products.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/50 hover:text-orbin-teal transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Company
            </h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/50 hover:text-orbin-teal transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Resources
            </h3>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/50 hover:text-orbin-teal transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-white/40">
            © {new Date().getFullYear()} ORBIN Pumps Pvt. Ltd. All rights
            reserved.
          </p>
          <div className="flex items-center gap-4">
            {socialIcons.map((social) => (
              <a
                key={social.label}
                href={social.href}
                className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center text-white/40 hover:bg-orbin-teal hover:text-white transition-all"
                aria-label={social.label}
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <path d={social.path} />
                </svg>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
