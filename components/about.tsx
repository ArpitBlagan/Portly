import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import { RiGithubFill } from "@remixicon/react";
import FlickeringGrid from "./ui/flickering-grid";

const About = () => {
  return (
    <div
      className="h-[100vh] py-10 rounded-md"
      style={{
        width: "100%",
        height: "100%",
        backgroundImage: "conic-gradient(from 0deg, orange, orangered, orange)",
        backgroundSize: "100% 100%",
        backgroundRepeat: "no-repeat",
        backgroundColor: "orange",
      }}
    >
      <div className="flex flex-col items-center px-2 justify-center gap-4  w-full h-full ">
        <div className="flex flex-col gap-3">
          <p className="text-center text-[8vw] md:text-[4vw] text-black font-semibold tracking-tight leading-[0.6]">
            Build a New Portfolio
          </p>
          <p className="text-sm text-gray-600 text-center">
            (Three Easy Steps all you need)
          </p>
          <p className="text-center text-xl md:text-2xl font-semibold text-black">
            Try our unique templates for your portfolio, stand out from the
          </p>
          <p className="text-center text-xl md:text-2xl font-semibold text-black">
            crowd and get caught in the eyes of recruiters
          </p>
        </div>

        <div className="flex items-center gap-5 mt-5">
          <Link href="/templates">
            <Button className="bg-white text-black hover:bg-white/50 font-semibold shadow-lg">
              Get Started Now
            </Button>
          </Link>
          <Link href="https://github.com/ArpitBlagan/Portly" target="_blank">
            <Button className="flex items-center gap-3 font-semibold bg-black text-white hover:bg-gray-700 shadow-lg">
              Opensource
              <RiGithubFill />
            </Button>
          </Link>
        </div>
        <div className="flex flex-col items-center gap-4 text-xl border-t pt-2 rounded-md px-2">
          <p className="text-black">Are you a developer?</p>
          <Link
            href="https://refnet.arpitblagan.com"
            target="_blank"
            className="font-semibold border text-black text-sm border-zinc-300 py-2 px-4 rounded-md hover:bg-white/50 duration-300 ease-in-out shadow-lg"
          >
            Checkout Refnet
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
