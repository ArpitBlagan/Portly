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
    <div className="mx-10 h-[15vh] flex flex-col items-around py-5 gap-4 overflow-hidden border-t border-b pb-2  mb-4">
      <div className="flex-1 flex items-center justify-between  ">
        <div>
          <p className="text-2xl font-another font-semibold">पोर्टली 🇮🇳</p>
          <p className="text-gray-500">Quick and Easy</p>
        </div>
        <div className="flex items-center gap-5">
          <Link href="">
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
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center  flex-wrap gap-5">
          <p className="text-sm text-gray-500">© Copyright पोर्टली 2024</p>
          <p className="text-sm text-gray-500">Terms</p>
          <p className="text-sm text-gray-500">Privacy</p>
        </div>
        <div>
          <p className="font-semibold text-md font-another">BY: Arpit Blagan</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
