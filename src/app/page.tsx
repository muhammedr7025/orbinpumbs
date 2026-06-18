import { getHeroSlides, getFeaturedCategories, getTopProducts } from "@/lib/data";
import HeroSection from "@/components/home/HeroSection";
import TrustBadges from "@/components/home/TrustBadges";
import FeaturedCategories from "@/components/home/FeaturedCategories";
import FeaturedProductsList from "@/components/home/FeaturedProductsList";
import BrandStory from "@/components/home/BrandStory";
import CTASection from "@/components/home/CTASection";

export const revalidate = 3600; // ISR: revalidate every hour

export default async function HomePage() {
  const [heroSlides, featuredCategories, topProducts] = await Promise.all([
    getHeroSlides(),
    getFeaturedCategories(),
    getTopProducts(),
  ]);

  return (
    <>
      <HeroSection slides={heroSlides} />
      <TrustBadges />
      <FeaturedCategories categories={featuredCategories} />
      <FeaturedProductsList products={topProducts} />
      <BrandStory />
      <CTASection />
    </>
  );
}
