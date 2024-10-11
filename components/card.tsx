import { RiExternalLinkFill, RiGithubFill } from "@remixicon/react";
import { motion } from "framer-motion";
import Link from "next/link";
import { BorderBeam } from "./ui/border-beam";
import SparklesText from "./ui/sparkles-text";

const Card = ({ ele, index }: any) => {
  return (
    <motion.div
      className="relative flex flex-col shadow-lg items-center justify-center  px-5  py-10 rounded-3xl border gap-2"
      key={index}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.5,
        delay: index * 0.3,
        ease: "easeInOut",
      }}
    >
      <BorderBeam size={250} duration={12} delay={9} />
      <motion.div className="flex flex-col items-center gap-4 relative">
        <SparklesText
          className=" font-another text-3xl tracking-tighter font-medium mb-5"
          text={ele.title}
        />

        <p className="font-another text-base font-medium  mb-4 relative z-50 text-gray-600">
          {ele.description}
        </p>

        <div className=" font-another flex items-end justify-end gap-3">
          <Link href={ele.code}>
            <RiGithubFill className="text-gray-500 dark:hover:text-gray-200 hover:text-gray-700 duration-300 ease-in-out" />
          </Link>
          <Link href={ele.live}>
            <RiExternalLinkFill className="text-gray-500 dark:hover:text-gray-200 hover:text-gray-700 duration-300 ease-in-out" />
          </Link>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Card;
