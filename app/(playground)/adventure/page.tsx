"use client";
import Card from "@/components/card";
import { ModeToggle } from "@/components/mode-toggle";
import IconCloud from "@/components/ui/icon-cloud";
import Particles from "@/components/ui/particles";
import Ripple from "@/components/ui/ripple";
import { projects } from "@/constant";
import {
  RiDiscordFill,
  RiGithubFill,
  RiHomeFill,
  RiLinkedinFill,
  RiTwitterXFill,
} from "@remixicon/react";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import Link from "next/link";
import { useEffect, useState } from "react";
import { SiCodechef, SiCodeforces } from "react-icons/si";
import { TbBrandLeetcode } from "react-icons/tb";
const slugs = [
  "typescript",
  "javascript",
  "dart",
  "java",
  "react",
  "flutter",
  "android",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "nextdotjs",
  "prisma",
  "amazonaws",
  "postgresql",
  "firebase",
  "nginx",
  "vercel",
  "testinglibrary",
  "jest",
  "cypress",
  "docker",
  "git",
  "jira",
  "github",
  "gitlab",
  "visualstudiocode",
  "androidstudio",
  "sonarqube",
  "figma",
];
const page = () => {
  const { theme } = useTheme();
  const [color, setColor] = useState("#ffffff");

  useEffect(() => {
    setColor(theme === "dark" ? "#ffffff" : "#000000");
  }, [theme]);
  return (
    <div className=" p-5">
      <div className=" flex items-center justify-center ">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4, ease: "easeIn" }}
          className="rounded-xl gap-5 border rounded-xl py-2 px-4 shadow-xl flex items-center gap-3"
        >
          <Link
            href=""
            className="font-bold text-xl text-gray-500 dark:hover:text-gray-200 hover:text-gray-700 duration-300 ease-in-out"
          >
            <RiHomeFill />
          </Link>
          <Link
            href=""
            className="font-bold font-another text-xl text-gray-500 dark:hover:text-gray-200 hover:text-gray-700 duration-300 ease-in-out"
          >
            About
          </Link>
          <Link
            href=""
            className="font-bold font-another text-xl text-gray-500 dark:hover:text-gray-200 hover:text-gray-700 duration-300 ease-in-out"
          >
            Projects
          </Link>
          <Link
            href=""
            className="font-bold font-another text-xl text-gray-500 dark:hover:text-gray-200 hover:text-gray-700 duration-300 ease-in-out"
          >
            Experience
          </Link>
          <ModeToggle />
        </motion.div>
      </div>
      <div className="relative flex h-[90vh] flex-col items-center justify-center">
        <Particles
          className="absolute inset-0"
          quantity={100}
          ease={80}
          color={color}
          refresh
        />
        <div className="flex flex-col gap-5 items-center z-10 ">
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6, ease: "easeIn" }}
            className="flex flex-col items-center gap-3  text-center font-another text-5xl font-medium tracking-tighter "
          >
            <img
              className="rounded-full"
              width="82"
              height="82"
              alt=""
              src="https://avatar.vercel.sh/jenny"
            />
            <span>Hey, I am Arpit Blagan 👋🏻</span>
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8, ease: "easeIn" }}
            className="font-semibold tracking-tighter font-another  text-lg md:w-8/12  text-center text-gray-500 "
          >
            I am an adaptable and versatile Software Developer with a passion
            for DevOps and a knack for quickly mastering new technologies. With
            a focus on delivering high-quality code and smooth coding
            experiences, I like to be in environments that challenge me to learn
            and grow.
          </motion.p>
        </div>
        <Ripple />
      </div>

      <div className="mt-5">
        <div className="flex items-center justify-center">
          <p className="font-another text-3xl tracking-tighter font-medium">
            Projects
          </p>
        </div>
        <div className=" grid  md:grid-cols-3 gap-6 py-10 ">
          {projects.map((ele, index) => {
            return <Card ele={ele} index={index} key={index} />;
          })}
        </div>
      </div>
      <div>
        <div className="flex items-center justify-center">
          <p className="font-another text-3xl tracking-tighter font-medium">
            Skills
          </p>
        </div>
        <div className="relative flex   items-center justify-center overflow-hidden pt-8 ">
          <IconCloud iconSlugs={slugs} />
        </div>
      </div>
      <div className="flex items-center justify-between md:flex-row flex-col border-b border-t py-4">
        <div className="flex flex-col gap-4 mb-3">
          <p className="text-2xl font-another font-medium tracking-tighter">
            Get in touch
          </p>
          <div className="flex items-center gap-2 md:flex-row flex-col">
            <p className="text-gray-500 font-another">
              Work inquiries, commission requeats, speaking inquiries, funny
              jokes, and just-saying-hi’s can be sent to:
            </p>
            <Link
              className="text-xl font-another tracking-tighter "
              href="mailto:arpitblagan27@email.com"
            >
              arpitblagan27@gmail.com
            </Link>
          </div>
        </div>
        <div className="flex items-center flex-wrap gap-3">
          <Link href="" target="_blank">
            <RiGithubFill
              className="text-gray-500 dark:hover:text-gray-200 hover:text-gray-700 duration-300 ease-in-out"
              size={30}
            />
          </Link>
          <Link href="" target="_blank">
            <RiTwitterXFill
              className="text-gray-500 dark:hover:text-gray-200 hover:text-gray-700 duration-300 ease-in-out"
              size={30}
            />
          </Link>
          <Link href="" target="_blank">
            <RiDiscordFill
              className="text-gray-500 dark:hover:text-gray-200 hover:text-gray-700 duration-300 ease-in-out"
              size={30}
            />
          </Link>
          <Link href="" target="_blank">
            <RiLinkedinFill
              className="text-gray-500 dark:hover:text-gray-200 hover:text-gray-700 duration-300 ease-in-out"
              size={30}
            />
          </Link>
          <Link href="" target="_blank">
            <TbBrandLeetcode
              className="text-gray-500 dark:hover:text-gray-200 hover:text-gray-700 duration-300 ease-in-out"
              size={30}
            />
          </Link>
          <Link href="" target="_blank">
            <SiCodeforces
              className="text-gray-500 dark:hover:text-gray-200 hover:text-gray-700 duration-300 ease-in-out"
              size={30}
            />
          </Link>
          <Link href="" target="_blank">
            <SiCodechef
              className="text-gray-500 dark:hover:text-gray-200 hover:text-gray-700 duration-300 ease-in-out"
              size={30}
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default page;
