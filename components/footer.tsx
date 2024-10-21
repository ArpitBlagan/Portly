import {
  RiGithubFill,
  RiLinkedinBoxLine,
  RiTwitterXFill,
} from "@remixicon/react";
import Link from "next/link";
import React from "react";
import { ModeToggle } from "./mode-toggle";

const Footer = () => {
  return (
    <div className="mx-10 min-h-[15vh] flex flex-col items-around py-5 gap-4 overflow-hidden border-t border-b   mb-4">
      <div className="flex-1 flex items-center justify-between flex-wrap">
        <div>
          <p className="text-2xl font-another font-semibold">पोर्टली 🇮🇳</p>
          <p className="text-gray-500">Quick and Easy</p>
        </div>
        <div>
          <div className="flex items-center md:justify-end gap-5">
            <Link href="https://github.com/ArpitBlagan/Portly">
              <RiGithubFill
                size={30}
                className="hover:text-gray-500 duration-300 ease-in-out"
              />
            </Link>
            <Link href="">
              <RiLinkedinBoxLine
                size={30}
                className="hover:text-gray-500 duration-300 ease-in-out"
              />
            </Link>
            <Link href="">
              <RiTwitterXFill
                size={30}
                className="hover:text-gray-500 duration-300 ease-in-out"
              />
            </Link>
            <ModeToggle />
          </div>
          <p className="text-sm text-gray-500">
            Follow and if you like Portly consider giving a ⭐️ on{" "}
            <Link
              href="https://github.com/ArpitBlagan/Portly"
              target="_blank"
              className="text-blue-600"
            >
              Github
            </Link>{" "}
            it would be really appreciated.
          </p>
        </div>
      </div>
      <div className="flex flex-wrap items-center justify-between">
        <div className="flex items-center  flex-wrap gap-5">
          <p className="text-sm text-gray-500">© Copyright पोर्टली 2024</p>
          <p className="text-sm text-gray-500">Terms</p>
          <p className="text-sm text-gray-500">Privacy</p>
        </div>
        <div>
          <p className="font-semibold text-md font-another">BY: Arpit Blagan</p>
          <Link
            href="mailto:arpitblagan27@gmail.com"
            target="_blank"
            className="text-sm text-blue-600"
          >
            arpitblagan27@gmail.com
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
