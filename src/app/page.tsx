import { GradientBackground } from "@/components/gradient-bg";
import { CustomCursor } from "@/components/custom-cursor";
import { Nav } from "@/components/nav";
import { Hero } from "@/components/hero";
import { TrustedBy } from "@/components/trusted-by";
import { Results } from "@/components/results";
import { Problem } from "@/components/problem";
import { AiShift } from "@/components/ai-shift";
import { Services } from "@/components/services";
import { Testimonial } from "@/components/testimonial";
import { Process } from "@/components/process";
import { Tools } from "@/components/tools";
import { CtaBanner } from "@/components/cta-banner";
import { QualificationForm } from "@/components/qualification-form";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <GradientBackground />
      <CustomCursor />
      <Nav />
      <main>
        <Hero />
        <TrustedBy />
        <Results />
        <Problem />
        <AiShift />
        <Services />
        <Testimonial />
        <Process />
        <Tools />
        <CtaBanner />
        <QualificationForm />
      </main>
      <Footer />
    </>
  );
}
