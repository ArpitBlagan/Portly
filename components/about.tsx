import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import { RiGithubFill } from "@remixicon/react";
import FlickeringGrid from "./ui/flickering-grid";

const About = () => {
  return (
    <div className="h-[90vh] py-10">
      <div className="flex flex-col items-center px-2 justify-center gap-4 bg-yellow-200 w-full h-full rounded-md">
        <div className="flex flex-col gap-3">
          <p className="text-center text-[8vw] md:text-[4vw] text-gray-800 font-bold leading-[0.6]">
            Build a New Portfolio
          </p>
          <p className="text-sm text-gray-600 text-center">
            (Three Easy Steps all you need)
          </p>
          <p className="text-center text-xl md:text-2xl font-semibold text-gray-800">
            Try our unique templates for your portfolio, stand out from the
          </p>
          <p className="text-center text-xl md:text-2xl font-semibold text-gray-800">
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
