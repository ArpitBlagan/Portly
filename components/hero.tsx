"use client";
import { motion } from "framer-motion";
import { ShootingStars } from "./ui/shooting-stars";
import Particles from "./ui/particles";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import Image from "next/image";
import { RainbowButton } from "./ui/rainbow-button";
import { BorderBeam } from "./ui/border-beam";
import Link from "next/link";
import { RiArrowRightLine } from "@remixicon/react";

const Hero = () => {
  const { theme } = useTheme();
  const [color, setColor] = useState("#ffffff");

  useEffect(() => {
    setColor(theme === "dark" ? "#ffffff" : "#000000");
  }, [theme]);
  return (
    <div className="w-full flex flex-col items-center justify-center relative justify-center gap-5">
      <Particles
        className="absolute inset-0"
        quantity={100}
        ease={80}
        color={color}
        refresh
      />
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ease: "easeIn", delay: 0.3, duration: 0.5 }}
        className=" my-10"
      >
        <RainbowButton className="text-[10px] md:text-lg">
          Easiest way to build your portfolio and share with other.
        </RainbowButton>
      </motion.div>
      <div className="flex font-another h-[35vh] flex-col gap-2 items-center jusitfy-center mb-10 md:mb-20">
        <motion.p
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ease: "easeIn", delay: 0.3, duration: 0.5 }}
          className={`text-[8vw] md:text-[6vw]  text-center tracking-tighter leading-[1]
              
            bg-gradient-to-r
              dark:from-white to-transparent
                from-black to-transparent
            bg-clip-text text-transparent`}
        >
          Craft Your Portfolio in Minutes.
          <br />
          Add Info, Choose a Template and Publish!
        </motion.p>
      </div>
      {/* <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ease: "backIn", delay: 0.7, duration: 0.6 }}
        className="pt-2 border-t rounded-xl px-2"
      >
        <p className="text-center font-medium text-gray-600">
          Don't judge it by its name. Give it a try and you gonna love it.
        </p>
      </motion.div> */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ease: "backIn", delay: 0.3, duration: 0.6 }}
        className=" md:block z-99  hidden h-[90vh] w-full flex  items-center justify-center rounded-xl  relative   mb-5"
      >
        <div className="h-full flex items-center justify-center rounded-xl border border-[1px] shodow-lg">
          <BorderBeam
            className="hidden md:block"
            size={340}
            delay={5}
            duration={130}
          />
          <div className="h-[90%] w-[90%] relative border border-[1px] rounded-xl ">
            {theme == "dark" ? (
              <Image
                src={"https://startup-template-sage.vercel.app/hero-dark.png"}
                alt="background image"
                layout="fill"
                objectFit="contain"
              />
            ) : (
              <Image
                src={"https://startup-template-sage.vercel.app/hero-light.png"}
                alt="background image"
                layout="fill"
                objectFit="contain"
              />
            )}
          </div>
        </div>
        <div
          className={`absolute inset-0 bg-gradient-to-b
            dark:from-transparent dark:to-black from-transparent to-gray-300
          opacity-100`}
        ></div>
      </motion.div>
      <ShootingStars />
    </div>
  );
};

export default Hero;
