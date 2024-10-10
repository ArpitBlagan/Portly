"use client";
import { motion } from "framer-motion";
import { ShootingStars } from "./ui/shooting-stars";
import Particles from "./ui/particles";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const Hero = () => {
  const { theme } = useTheme();
  const [color, setColor] = useState("#ffffff");

  useEffect(() => {
    setColor(theme === "dark" ? "#ffffff" : "#000000");
  }, [theme]);
  return (
    <div className="h-[70vh] md:h-[90vh] flex flex-col items-center relative justify-center gap-5">
      <Particles
        className="absolute inset-0"
        quantity={100}
        ease={80}
        color={color}
        refresh
      />
      <motion.div
        initial={{ opacity: 0.3, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ease: "easeIn", delay: 0.3, duration: 0.6 }}
      >
        <p className="py-2 px-4 bg-yellow-400 z-0 rounded-md text-center font-semibold text-black tracking-tight">
          Easiest way to build your portfolio and share with other.
        </p>
      </motion.div>
      <div className="flex flex-col  md:gap-0 font-another">
        <motion.p
          initial={{ opacity: 0.2, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ease: "easeIn", delay: 0.5, duration: 0.4 }}
          className="text-[8vw] md:text-[6vw] font-lg text-center tracking-tighter"
        >
          Craft Your Portfolio in Minutes.{" "}
        </motion.p>
        <motion.p
          initial={{ opacity: 0.1, y: 70 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ease: "easeIn", delay: 0.7, duration: 0.4 }}
          className="text-[8vw] md:text-[6vw] font-lg text-center tracking-tighter "
        >
          Add Info, Choose a Template, and Publish!
        </motion.p>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ ease: "backIn", delay: 1, duration: 0.6 }}
      >
        <p className="text-center font-semibold">
          Don't judge it by its name. Give it a try and you gonna love it.
        </p>
      </motion.div>
      <ShootingStars />
    </div>
  );
};

export default Hero;
