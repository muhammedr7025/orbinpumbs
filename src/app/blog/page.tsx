import type { Metadata } from "next";
import Link from "next/link";
import { getPosts } from "@/lib/data";
import { PageHero, SectionHeading } from "@/components/ui/shared";
import { Calendar, ArrowRight, FileText } from "lucide-react";

export const metadata: Metadata = {
  title: "Blog & News",
  description:
    "Latest news, industry insights, and product updates from ORBIN Pumps. Stay informed about pump technology and water management.",
};

export const revalidate = 3600;

export default async function BlogPage() {
  const posts = await getPosts();

  return (
    <>
      <PageHero
        title="Blog & News"
        description="Latest insights, product updates, and industry news from ORBIN."
        breadcrumbs={[
          { name: "Home", href: "/" },
          { name: "Blog" },
        ]}
      />

      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {posts.length > 0 ? (
            <>
              <SectionHeading
                badge="Latest Posts"
                title="From Our"
                highlight="Blog"
              />
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {posts.map((post) => (
                  <Link
                    key={post._id}
                    href={`/blog/${post.slug.current}`}
                    className="group bg-white rounded-2xl border border-orbin-gray-100 overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                  >
                    <div className="h-48 bg-gradient-to-br from-orbin-teal-50 to-orbin-gray-100 flex items-center justify-center">
                      <FileText className="w-12 h-12 text-orbin-teal/30" />
                    </div>
                    <div className="p-5">
                      {post.publishedAt && (
                        <div className="flex items-center gap-1.5 text-xs text-orbin-gray-400 mb-2">
                          <Calendar className="w-3.5 h-3.5" />
                          {new Date(post.publishedAt).toLocaleDateString("en-IN", {
                            day: "numeric",
                            month: "short",
                            year: "numeric",
                          })}
                        </div>
                      )}
                      <h3 className="text-lg font-display font-semibold text-orbin-gray-900 mb-2 group-hover:text-orbin-teal transition-colors line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-sm text-orbin-gray-500 line-clamp-2 mb-4">
                        {post.excerpt}
                      </p>
                      <span className="inline-flex items-center gap-1 text-sm font-semibold text-orbin-teal group-hover:gap-2 transition-all">
                        Read More <ArrowRight className="w-4 h-4" />
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </>
          ) : (
            <div className="text-center py-20">
              <FileText className="w-16 h-16 text-orbin-gray-200 mx-auto mb-4" />
              <h3 className="text-xl font-display font-semibold text-orbin-gray-900 mb-2">
                Coming Soon
              </h3>
              <p className="text-orbin-gray-500 max-w-md mx-auto">
                We&apos;re working on insightful articles about pump technology,
                water management, and industry trends. Stay tuned!
              </p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
