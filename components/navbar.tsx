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
import { useSession } from "next-auth/react";
import Image from "next/image";
const Navbar = () => {
  const { data: session, status } = useSession();
  console.log("dafd", session, status);
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
      <div className="">
        <Link
          href="/"
          className="font-bold text-xl hover:text-gray-500 duration-300 ease-in-out "
        >
          पोर्टली
        </Link>
        <p className="text-sm text-gray-500">Quick and Easy</p>
      </div>
      <div className="hidden md:flex flex-1  items-center justify-center gap-5 font-semibold">
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
      {status == "authenticated" ? (
        <div className="hidden md:flex">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button className="cursor-pointer  bg-transparent hover:bg-transparent">
                <RiMenuFill className="dark:text-white text-black" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>Portly</DropdownMenuLabel>
              <DropdownMenuSeparator />

              <DropdownMenuLabel>
                <Link href="/profile" className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full overflow-hidden relative">
                    <Image
                      src={session.user?.image || ""} // Replace with your image path
                      alt="Circular Image"
                      layout="fill" // Fills the container
                      objectFit="cover" // Ensures the image maintains its aspect ratio and covers the container
                      className="absolute inset-0"
                    />
                  </div>
                  <p>{session.user?.name}</p>
                </Link>
              </DropdownMenuLabel>
              <DropdownMenuItem>{session.user?.email}</DropdownMenuItem>
              <DropdownMenuSeparator />
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      ) : (
        <div className="hidden md:flex  items-center justify-end gap-4 font-semibold">
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
      )}
      <div className="flex md:hidden items-center ">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button className="cursor-pointer  bg-transparent hover:bg-transparent">
              <RiMenuFill className="dark:text-white text-black" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>Portly</DropdownMenuLabel>
            <DropdownMenuSeparator />
            {status == "authenticated" && (
              <div>
                <DropdownMenuLabel>
                  <Link href="/profile" className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full overflow-hidden relative">
                      <Image
                        src={session.user?.image || ""} // Replace with your image path
                        alt="Circular Image"
                        layout="fill" // Fills the container
                        objectFit="cover" // Ensures the image maintains its aspect ratio and covers the container
                        className="absolute inset-0"
                      />
                    </div>
                    <p>{session.user?.name}</p>
                  </Link>
                </DropdownMenuLabel>
                <DropdownMenuItem>{session.user?.email}</DropdownMenuItem>
              </div>
            )}
            {[
              { link: "/templates", label: "Templates" },
              { link: "/ports", label: "Ports" },
              { link: "/signin", label: "Sign in" },
              { link: "/signup", label: "Get started" },
            ].map((ele, index) => {
              if (
                (ele.label == "Sign in" || ele.label == "Get started") &&
                status == "authenticated"
              ) {
                return;
              }
              return (
                <DropdownMenuItem key={index}>
                  <Link href={ele.link} className="text-center">
                    {ele.label}
                  </Link>
                </DropdownMenuItem>
              );
            })}
            <DropdownMenuSeparator />
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};
export default Navbar;
