import About from "@/components/about";
import Hero from "@/components/hero";
import { MarqueeDemo } from "@/components/marquee";
import { IconCloudDemo } from "@/components/stack";
import Templates from "@/components/templates";
import { BorderBeam } from "@/components/ui/border-beam";
import Image from "next/image";
import bg from "@/image/Screenshot 2024-10-20 at 11.48.21 AM.png";
//https://startup-template-sage.vercel.app/hero-dark.png
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
