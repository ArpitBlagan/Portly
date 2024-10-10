import About from "@/components/about";
import Hero from "@/components/hero";
import { MarqueeDemo } from "@/components/marquee";
import { IconCloudDemo } from "@/components/stack";
import Templates from "@/components/templates";

export default function Home() {
  return (
    <div className="mx-5 md:mx-10 flex flex-col gap-5">
      <Hero />
      <Templates />
      <IconCloudDemo />
      <About />
      <MarqueeDemo />
    </div>
  );
}
