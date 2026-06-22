import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { Accountability } from "@/components/sections/Accountability";
import { Story } from "@/components/sections/Story";
import { Proof } from "@/components/sections/Proof";
import { Buying } from "@/components/sections/Buying";
import { CTABand } from "@/components/sections/CTABand";
import { QuoteForm } from "@/components/sections/QuoteForm";
import { FindUs } from "@/components/sections/FindUs";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Accountability />
      <Story />
      <Proof />
      <Buying />
      <CTABand />
      <QuoteForm />
      <FindUs />
    </>
  );
}
