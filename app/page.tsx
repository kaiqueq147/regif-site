import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Stats } from "@/components/Stats";
import { Versus } from "@/components/Versus";
import { FlowDemo } from "@/components/FlowDemo";
import { CaptionDemo } from "@/components/CaptionDemo";
import { Features } from "@/components/Features";
import { Formats } from "@/components/Formats";
import { Pricing } from "@/components/Pricing";
import { Faq } from "@/components/Faq";
import { DownloadCta } from "@/components/DownloadCta";
import { StickyCta } from "@/components/StickyCta";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Stats />
        <CaptionDemo />
        <Versus />
        <FlowDemo />
        <Features />
        <Formats />
        <Pricing />
        <Faq />
        <DownloadCta />
      </main>
      <StickyCta />
      <Footer />
    </>
  );
}
