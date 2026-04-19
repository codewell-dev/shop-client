import Hero from "./components/hero";
import FeaturedProducts from "./components/featured-products";
import CategoryStrip from "./components/category-strip";
import BrandStory from "./components/brand-story";
import Testimonials from "./components/testimonials";
import Newsletter from "./components/newsletter";

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedProducts />
      <CategoryStrip />
      <BrandStory />
      <Testimonials />
      <Newsletter />
    </>
  );
}
