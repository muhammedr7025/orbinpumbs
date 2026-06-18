import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getPostBySlug, getPosts } from "@/lib/data";
import { PageHero } from "@/components/ui/shared";
import { PortableText } from "@portabletext/react";
import { Calendar } from "lucide-react";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = await getPosts();
  return posts.map((post) => ({ slug: post.slug.current }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) return {};
  return {
    title: post.seoTitle || post.title,
    description: post.seoDescription || post.excerpt,
  };
}

export const revalidate = 3600;

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) notFound();

  return (
    <>
      <PageHero
        title={post.title}
        breadcrumbs={[
          { name: "Home", href: "/" },
          { name: "Blog", href: "/blog" },
          { name: post.title },
        ]}
      />

      <article className="py-16 sm:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          {post.publishedAt && (
            <div className="flex items-center gap-2 text-sm text-orbin-gray-400 mb-8">
              <Calendar className="w-4 h-4" />
              {new Date(post.publishedAt).toLocaleDateString("en-IN", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </div>
          )}

          {post.body && (
            <div className="prose prose-lg max-w-none prose-headings:font-display prose-headings:text-orbin-gray-900 prose-p:text-orbin-gray-600 prose-a:text-orbin-teal">
              <PortableText value={post.body} />
            </div>
          )}
        </div>
      </article>
    </>
  );
}
