"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  Phone,
  Mail,
  ChevronDown,
} from "lucide-react";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  {
    name: "Products",
    href: "/products",
    children: [
      { name: "Submersible Pumps", href: "/products/submersible-pumps" },
      { name: "Solar Pumps", href: "/products/solar-pumps" },
      { name: "Openwell Pumps", href: "/products/openwell-pumps" },
      { name: "Submersible Motors", href: "/products/submersible-motors" },
      { name: "Domestic Series", href: "/products/domestic-series" },
      { name: "View All →", href: "/products" },
    ],
  },
  { name: "Solar", href: "/solar" },
  { name: "Applications", href: "/applications" },
  { name: "Dealers", href: "/dealers" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMobileOpen(false);
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setDropdownOpen(null);
  }, [pathname]);

  return (
    <>
      {/* Top Bar */}
      <div className="bg-orbin-dark text-white/80 text-sm hidden lg:block">
        <div className="max-w-7xl mx-auto px-6 py-2 flex justify-between items-center">
          <div className="flex items-center gap-6">
            <a
              href="tel:+912827252230"
              className="flex items-center gap-2 hover:text-orbin-gold transition-colors"
            >
              <Phone className="w-3.5 h-3.5" />
              +91 2827 252 230
            </a>
            <a
              href="mailto:info@orbinpumps.com"
              className="flex items-center gap-2 hover:text-orbin-gold transition-colors"
            >
              <Mail className="w-3.5 h-3.5" />
              info@orbinpumps.com
            </a>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-white/50">|</span>
            <span>40+ Years of Trust</span>
            <span className="text-white/50">|</span>
            <span>ISO 9001 | 14001 | 45001</span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-xl shadow-lg shadow-black/5"
            : "bg-white"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-18 lg:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center group">
              <Image
                src="/orbin-logo-v2.png"
                alt="ORBIN — Experience the Excellence"
                width={180}
                height={44}
                className="h-10 sm:h-11 w-auto object-contain group-hover:opacity-90 transition-opacity"
                priority
              />
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {navigation.map((item) => (
                <div
                  key={item.name}
                  className="relative"
                  onMouseEnter={() =>
                    item.children && setDropdownOpen(item.name)
                  }
                  onMouseLeave={() => setDropdownOpen(null)}
                >
                  <Link
                    href={item.href}
                    className={`flex items-center gap-1 px-3.5 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                      pathname === item.href ||
                      pathname.startsWith(item.href + "/")
                        ? "text-orbin-teal bg-orbin-teal-50"
                        : "text-orbin-gray-700 hover:text-orbin-teal hover:bg-orbin-teal-50/50"
                    }`}
                  >
                    {item.name}
                    {item.children && (
                      <ChevronDown
                        className={`w-3.5 h-3.5 transition-transform ${
                          dropdownOpen === item.name ? "rotate-180" : ""
                        }`}
                      />
                    )}
                  </Link>
                  {/* Dropdown */}
                  <AnimatePresence>
                    {item.children && dropdownOpen === item.name && (
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        transition={{ duration: 0.15 }}
                        className="absolute top-full left-0 mt-1 w-60 bg-white rounded-xl shadow-xl shadow-black/10 border border-orbin-gray-100 overflow-hidden py-2 z-50"
                      >
                        {item.children.map((child) => (
                          <Link
                            key={child.name}
                            href={child.href}
                            className="block px-4 py-2.5 text-sm text-orbin-gray-600 hover:text-orbin-teal hover:bg-orbin-teal-50 transition-colors"
                          >
                            {child.name}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </nav>

            {/* CTA + Mobile Toggle */}
            <div className="flex items-center gap-3">
              <Link
                href="/contact"
                className="hidden md:inline-flex items-center px-5 py-2.5 rounded-xl bg-gradient-to-r from-orbin-teal to-orbin-teal-dark text-white text-sm font-semibold shadow-lg shadow-orbin-teal/25 hover:shadow-orbin-teal/40 hover:scale-[1.02] transition-all duration-200"
              >
                Get a Quote
              </Link>
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="lg:hidden p-2 rounded-lg text-orbin-gray-700 hover:bg-orbin-gray-100 transition-colors"
                aria-label="Toggle menu"
              >
                {mobileOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="lg:hidden overflow-hidden border-t border-orbin-gray-100"
            >
              <div className="bg-white px-4 py-4 space-y-1">
                {navigation.map((item) => (
                  <div key={item.name}>
                    <Link
                      href={item.href}
                      className={`block px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                        pathname === item.href
                          ? "text-orbin-teal bg-orbin-teal-50"
                          : "text-orbin-gray-700 hover:bg-orbin-gray-50"
                      }`}
                    >
                      {item.name}
                    </Link>
                    {item.children && (
                      <div className="ml-4 mt-1 space-y-1">
                        {item.children.map((child) => (
                          <Link
                            key={child.name}
                            href={child.href}
                            className="block px-4 py-2 rounded-lg text-sm text-orbin-gray-500 hover:text-orbin-teal hover:bg-orbin-teal-50/50"
                          >
                            {child.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                <div className="pt-3 border-t border-orbin-gray-100">
                  <Link
                    href="/contact"
                    className="block w-full text-center px-5 py-3 rounded-xl bg-gradient-to-r from-orbin-teal to-orbin-teal-dark text-white text-sm font-semibold"
                  >
                    Get a Quote
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
