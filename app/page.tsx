import Image from "next/image";
import { HeroSection } from "./_components/heroSection";
import { Section2 } from "./_components/section2";
import { Section3 } from "./_components/section3";

export default function Home() {
  return (
    <main className="">
      <HeroSection />
      <Section2 />
      <Section3 />
    </main>
  );
}
