"use client";
import Card from "@/components/card";
import { ModeToggle } from "@/components/mode-toggle";
import { BorderBeam } from "@/components/ui/border-beam";
import IconCloud from "@/components/ui/icon-cloud";
import Particles from "@/components/ui/particles";
import Ripple from "@/components/ui/ripple";
import ShimmerButton from "@/components/ui/shimmer-button";
import SparklesText from "@/components/ui/sparkles-text";
import { expreiences, projects } from "@/constant";
import {
  RiDiscordFill,
  RiExternalLinkFill,
  RiGithubFill,
  RiHomeFill,
  RiHomeSmileFill,
  RiLinkedinFill,
  RiTwitterXFill,
} from "@remixicon/react";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import Image from "next/image";
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
    <div className="mx-5 md:mx-10 flex flex-col gap-5">
      <div className=" flex items-center justify-start">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4, ease: "easeIn" }}
          className=" gap-5 border mt-3  rounded-3xl py-2 px-4 shadow-xl flex items-center gap-3 dark:bg-white/10 bg-white/30"
        >
          <Link
            href=""
            className="font-bold md:text-xl text-gray-500 dark:hover:text-gray-200 hover:text-gray-700 duration-300 ease-in-out"
          >
            <RiHomeSmileFill />
          </Link>
          <Link
            href=""
            className="font-bold font-another md:text-xl text-gray-500 dark:hover:text-gray-200 hover:text-gray-700 duration-300 ease-in-out"
          >
            Skills
          </Link>
          <Link
            href="#projects"
            className="font-bold font-another md:text-xl text-gray-500 dark:hover:text-gray-200 hover:text-gray-700 duration-300 ease-in-out"
          >
            Projects
          </Link>
          <Link
            href="#experience"
            className="font-bold font-another md:text-xl text-gray-500 dark:hover:text-gray-200 hover:text-gray-700 duration-300 ease-in-out"
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
          <div className="flex flex-col items-center gap-3  text-center font-another text-5xl font-medium tracking-tighter ">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6, ease: "easeIn" }}
              className="w-[250px] h-[250px] border-zinc-400 dark:border-zinc-700 border flex items-center justify-center"
              style={{ borderRadius: "73% 25% 25% 75% / 25% 17% 76% 75%" }}
            >
              <motion.div
                whileHover={{ scale: 1.2 }}
                transition={{ ease: "backInOut" }}
                className="w-[200px] h-[200px] bg-red-300 overflow-hidden relative"
                style={{ borderRadius: "73% 25% 25% 75% / 25% 17% 76% 75%" }}
              >
                <Image
                  alt="media image"
                  layout="fill"
                  objectFit="cover"
                  src="https://avatars.githubusercontent.com/u/114584343?v=4"
                />
              </motion.div>
            </motion.div>
            <motion.span
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8, ease: "easeIn" }}
            >
              Hey, I am Arpit Blagan 👋🏻
            </motion.span>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1, ease: "easeIn" }}
            className="font-semibold tracking-tighter font-another  text-lg md:w-8/12  text-center text-gray-500 "
          >
            I am an adaptable and versatile Software Developer with a passion
            for DevOps and a knack for quickly mastering new technologies. With
            a focus on delivering high-quality code and smooth coding
            experiences, I like to be in environments that challenge me to learn
            and grow.
          </motion.p>
          <ShimmerButton className="shadow-2xl">
            <span className="whitespace-pre-wrap text-center text-sm font-another font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
              Glad to see you here
            </span>
          </ShimmerButton>
        </div>
        <Ripple />
      </div>
      <div id="experience" className="mt-5">
        <div className="flex items-center justify-center">
          <p className="font-another text-3xl tracking-tighter font-medium">
            Experience
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-5 py-10">
          {expreiences.map((ele, index) => {
            return (
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ ease: "backInOut" }}
                key={index}
                className="flex flex-col gap-2 border p-4 rounded-xl shadow-lg relative"
              >
                <BorderBeam
                  className="hidden md:block"
                  size={250}
                  duration={12}
                  delay={9}
                />
                <div className="flex items-center justify-between gap-2">
                  <div className="flex flex-col gap-2">
                    <div className=" flex  gap-2">
                      <SparklesText
                        text={ele.name}
                        className="hidden md:block font-another text-3xl tracking-tighter font-medium mb-5"
                      />
                      <Link href={ele.link} target="_blank">
                        <RiExternalLinkFill className="text-gray-500 dark:hover:text-gray-200 hover:text-gray-700 duration-300 ease-in-out" />
                      </Link>
                    </div>
                    <p className=" text-start font-another text-base font-medium  mb-4 relative z-50 text-gray-600 tracking-tighter">
                      {ele.description}
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-400 font-semibold">
                      {ele.location}
                    </p>
                  </div>
                </div>
                <div>
                  <p className="text-gray-500 font-semibold text-sm">
                    StartDate-endDate (4 months)
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
      <div id="projects" className="mt-5">
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
      <div id="skills p-2 overflow-hidden">
        <div className="flex items-center justify-center">
          <p className="font-another text-3xl tracking-tighter font-medium">
            Skills
          </p>
        </div>
        <div className="relative flex   items-center justify-center overflow-hidden pt-8 ">
          <IconCloud iconSlugs={slugs} />
        </div>
      </div>
      <div
        id="footer"
        className="flex items-center justify-between md:flex-row flex-col border-b border-t py-4"
      >
        <div className="flex flex-col gap-4 mb-3">
          <div className="flex items-center gap-2">
            <ModeToggle />{" "}
            <p className="text-2xl font-another font-medium tracking-tighter">
              Get in touch
            </p>
          </div>
          <div className="flex items-center gap-2 md:flex-row flex-col">
            <p className="text-gray-500 font-another tracking-tight">
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
