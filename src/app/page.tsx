import { GradientBackground } from "@/components/gradient-bg";
import { CustomCursor } from "@/components/custom-cursor";
import { Nav } from "@/components/nav";
import { Hero } from "@/components/hero";
import { Problem } from "@/components/problem";
import { AiShift } from "@/components/ai-shift";
import { Services } from "@/components/services";
import { Tools } from "@/components/tools";
import { Process } from "@/components/process";
import { Results } from "@/components/results";
import { Authority } from "@/components/authority";
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
        <Problem />
        <AiShift />
        <Services />
        <Tools />
        <Process />
        <Results />
        <Authority />
        <CtaBanner />
        <QualificationForm />
      </main>
      <Footer />
    </>
  );
}
