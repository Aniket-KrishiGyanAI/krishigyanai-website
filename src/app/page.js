import Hero from "@/components/home/Hero";
import OurProducts from "@/components/home/OurProducts";
import TransformingFarmingSection from "@/components/home/TransformingFarmingSection";
import Market_Technology_Impact from "@/components/home/Market_Technology_Impact";
import Testimonials from "@/components/home/Testimonials";
import PricingSections from "@/components/home/PricingSections";
import Partners from "@/components/home/Partners";

export default function Home() {
  return (
    <>
      <Hero />
      <TransformingFarmingSection />
      <OurProducts />
      <PricingSections />
      <Partners />
      <Market_Technology_Impact />
      <Testimonials />
    </>
  );
}
