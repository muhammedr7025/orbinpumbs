"use client";

import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle, Loader2 } from "lucide-react";

const productInterests = [
  "Submersible Pumps",
  "Solar Pumps",
  "Openwell Pumps",
  "Submersible Motors",
  "Domestic Series",
  "Sewage & Waste Water Pumps",
  "Hi-Pressure Washer Pumps",
  "Cables",
  "Control Panels & Starters",
  "Motor Protectors",
  "Hydro Pneumatic Systems",
  "Fire Fighting Systems",
  "Other",
];

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    product: "",
    message: "",
  });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setStatus("sent");
    console.log("Form submitted:", formData);
  };

  if (status === "sent") {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white rounded-2xl border border-orbin-gray-100 p-8 sm:p-12 text-center"
      >
        <div className="w-16 h-16 rounded-full bg-emerald-50 flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="w-8 h-8 text-emerald-500" />
        </div>
        <h3 className="text-2xl font-display font-bold text-orbin-gray-900 mb-2">
          Thank You!
        </h3>
        <p className="text-orbin-gray-500 mb-6">
          Your inquiry has been received. Our team will contact you within 24
          hours.
        </p>
        <button
          onClick={() => {
            setStatus("idle");
            setFormData({ name: "", email: "", phone: "", product: "", message: "" });
          }}
          className="text-orbin-teal font-semibold hover:underline"
        >
          Send another inquiry
        </button>
      </motion.div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-2xl border border-orbin-gray-100 p-6 sm:p-8 shadow-sm"
    >
      <h3 className="text-xl font-display font-bold text-orbin-gray-900 mb-6">
        Send Us a Message
      </h3>

      <div className="space-y-5">
        {/* Name */}
        <div>
          <label
            htmlFor="contact-name"
            className="block text-sm font-medium text-orbin-gray-700 mb-1.5"
          >
            Full Name *
          </label>
          <input
            id="contact-name"
            type="text"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full px-4 py-3 rounded-xl border border-orbin-gray-200 focus:border-orbin-teal focus:ring-2 focus:ring-orbin-teal/20 outline-none transition-all text-sm"
            placeholder="Your full name"
          />
        </div>

        {/* Email & Phone */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="contact-email"
              className="block text-sm font-medium text-orbin-gray-700 mb-1.5"
            >
              Email Address *
            </label>
            <input
              id="contact-email"
              type="email"
              required
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              className="w-full px-4 py-3 rounded-xl border border-orbin-gray-200 focus:border-orbin-teal focus:ring-2 focus:ring-orbin-teal/20 outline-none transition-all text-sm"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label
              htmlFor="contact-phone"
              className="block text-sm font-medium text-orbin-gray-700 mb-1.5"
            >
              Phone Number *
            </label>
            <input
              id="contact-phone"
              type="tel"
              required
              value={formData.phone}
              onChange={(e) =>
                setFormData({ ...formData, phone: e.target.value })
              }
              className="w-full px-4 py-3 rounded-xl border border-orbin-gray-200 focus:border-orbin-teal focus:ring-2 focus:ring-orbin-teal/20 outline-none transition-all text-sm"
              placeholder="+91 98765 43210"
            />
          </div>
        </div>

        {/* Product Interest */}
        <div>
          <label
            htmlFor="contact-product"
            className="block text-sm font-medium text-orbin-gray-700 mb-1.5"
          >
            Product Interest
          </label>
          <select
            id="contact-product"
            value={formData.product}
            onChange={(e) =>
              setFormData({ ...formData, product: e.target.value })
            }
            className="w-full px-4 py-3 rounded-xl border border-orbin-gray-200 focus:border-orbin-teal focus:ring-2 focus:ring-orbin-teal/20 outline-none transition-all text-sm bg-white"
          >
            <option value="">Select a product category</option>
            {productInterests.map((p) => (
              <option key={p} value={p}>
                {p}
              </option>
            ))}
          </select>
        </div>

        {/* Message */}
        <div>
          <label
            htmlFor="contact-message"
            className="block text-sm font-medium text-orbin-gray-700 mb-1.5"
          >
            Message *
          </label>
          <textarea
            id="contact-message"
            required
            rows={4}
            value={formData.message}
            onChange={(e) =>
              setFormData({ ...formData, message: e.target.value })
            }
            className="w-full px-4 py-3 rounded-xl border border-orbin-gray-200 focus:border-orbin-teal focus:ring-2 focus:ring-orbin-teal/20 outline-none transition-all text-sm resize-none"
            placeholder="Tell us about your requirements..."
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={status === "sending"}
          className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-orbin-teal to-orbin-teal-dark text-white font-semibold shadow-lg shadow-orbin-teal/25 hover:shadow-orbin-teal/40 hover:scale-[1.01] transition-all disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {status === "sending" ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              Sending...
            </>
          ) : (
            <>
              <Send className="w-4 h-4" />
              Send Inquiry
            </>
          )}
        </button>
      </div>
    </form>
  );
}
