"use client";
import { RiEyeFill, RiHeartFill, RiSearchEyeFill } from "@remixicon/react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";

import Image from "next/image";
const TemplateCard = ({
  src,
  text,
  textType,
  textColor,
  link,
}: {
  src: any;
  text: any;
  textType: string;
  textColor: string;
  link: string;
}) => {
  return (
    <motion.div whileHover={{ scale: 1.02 }} className="relative">
      <div className="h-[30vh] w-full border rounded-xl">
        <Image
          src={src}
          alt="bg image"
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
        />
      </div>
      <div className="w-full flex items-center justify-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <p className={` text-3xl font-custom font-semibold text-${textColor} `}>
          {text}
        </p>
      </div>
      <AnimatePresence>
        <div className="flex items-center justify-end w-full gap-2 p-4 bottom-0 absolute right-0 ">
          <div className="w-full flex items-center justify-start gap-1">
            <div className="flex items-center gap-2">
              <RiEyeFill className={` text-${textColor}`} size={30} />
              <p className={`text-${textColor} font-semibold`}>20</p>
            </div>
            <div className="flex items-center gap-2">
              <RiHeartFill className={` text-red-600`} size={30} />
              <p className={`text-${textColor} font-semibold`}>33</p>
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            whileHover={{ scale: 1.1 }}
          >
            <Link href={link}>
              <RiSearchEyeFill
                className={`cursor-pointer text-gray-300`}
                size={30}
              />
            </Link>
          </motion.div>
        </div>
      </AnimatePresence>
    </motion.div>
  );
};

export default TemplateCard;
