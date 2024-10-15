"use client";
import Link from "next/link";
import { Button } from "./ui/button";
import { RiArrowRightFill, RiGithubFill, RiMenuFill } from "@remixicon/react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ModeToggle } from "./mode-toggle";
import { useEffect, useState } from "react";
import axios from "axios";
const Navbar = () => {
  const [stars, setStars] = useState(0);
  useEffect(() => {
    const getStars = async () => {
      try {
        const res = await axios.get(
          "https://api.github.com/repos/arpitblagan/Portly/stargazers"
        );
        console.log(res.data);
        setStars(res.data.length);
      } catch (err) {}
    };
    getStars();
  }, []);
  return (
    <div className="flex items-center justify-around mx-10 mt-5 py-5 px-3 border-b">
      <div className="w-full">
        <Link
          href="/"
          className="font-bold text-xl hover:text-gray-500 duration-300 ease-in-out "
        >
          पोर्टली
        </Link>
        <p className="text-sm text-gray-500">Quick and Easy</p>
      </div>
      <div className="hidden md:flex w-full  items-center justify-center gap-5 font-semibold">
        <Link
          href="/templates"
          className="hover:text-gray-500 duration-300 ease-in-out"
        >
          Templates
        </Link>
        <Link
          href="/ports"
          className="hover:text-gray-500 duration-300 ease-in-out"
        >
          Ports
        </Link>
        <Link
          href="https://github.com/ArpitBlagan/Portly"
          target="_blank"
          className="flex items-center hover:text-gray-500 duration-300 ease-in-out"
        >
          <RiGithubFill className="" />
          <p className="text-md font-another">({stars} ⭐️)</p>
          <RiArrowRightFill className="rotate-[-45deg] " />
        </Link>
      </div>
      <div className="hidden md:flex w-full  items-center justify-end gap-4 font-semibold">
        <Link
          href="/login"
          className="hover:text-gray-500 duration-300 ease-in-out"
        >
          Log in
        </Link>
        <Link href="/signup">
          <Button className="py-2 px-3 rounded-xl">Sign up</Button>
        </Link>
        <ModeToggle />
      </div>
      <div className="flex md:hidden items-center ">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <RiMenuFill />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>Portly</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <ModeToggle />
            </DropdownMenuItem>
            {[
              { link: "/templates", label: "Templates" },
              { link: "/ports", label: "Ports" },
              { link: "/signin", label: "Sign in" },
              { link: "/signup", label: "Get started" },
            ].map((ele, index) => {
              return (
                <DropdownMenuItem>
                  <Link href={ele.link}>{ele.label}</Link>
                </DropdownMenuItem>
              );
            })}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};
export default Navbar;
