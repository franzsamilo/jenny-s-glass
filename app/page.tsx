import { Hero } from "@/components/sections/Hero";
import { TrustBar } from "@/components/sections/TrustBar";
import { Categories } from "@/components/sections/Categories";
import { Difference } from "@/components/sections/Difference";
import { Specs } from "@/components/sections/Specs";
import { Projects } from "@/components/sections/Projects";
import { Process } from "@/components/sections/Process";
import { Stats } from "@/components/sections/Stats";
import { Testimonial } from "@/components/sections/Testimonial";
import { QuoteForm } from "@/components/sections/QuoteForm";
import { CTABand } from "@/components/sections/CTABand";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      <Categories />
      <Difference />
      <Specs />
      <Projects />
      <Process />
      <Stats />
      <Testimonial />
      <CTABand />
      <QuoteForm />
    </>
  );
}
