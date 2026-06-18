import Link from "next/link";
import { Home, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <section className="min-h-[60vh] flex items-center justify-center py-20">
      <div className="text-center px-4">
        <div className="text-8xl font-display font-black gradient-text mb-6">
          404
        </div>
        <h1 className="text-3xl font-display font-bold text-orbin-gray-900 mb-4">
          Page Not Found
        </h1>
        <p className="text-orbin-gray-500 max-w-md mx-auto mb-8">
          The page you&apos;re looking for doesn&apos;t exist or has been moved. Let us
          help you find what you need.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-orbin-teal to-orbin-teal-dark text-white font-semibold shadow-lg shadow-orbin-teal/25 hover:shadow-orbin-teal/40 transition-all"
          >
            <Home className="w-4 h-4" />
            Go Home
          </Link>
          <Link
            href="/products"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border-2 border-orbin-teal text-orbin-teal font-semibold hover:bg-orbin-teal hover:text-white transition-all"
          >
            <ArrowLeft className="w-4 h-4" />
            Browse Products
          </Link>
        </div>
      </div>
    </section>
  );
}
