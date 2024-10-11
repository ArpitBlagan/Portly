"use client";
import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import { education, expreiences, projects, skills } from "@/constant";
import {
  RiCodeFill,
  RiDiscordFill,
  RiExternalLinkFill,
  RiGithubFill,
  RiLinkedinFill,
  RiTwitterXFill,
} from "@remixicon/react";
import Link from "next/link";
import { SiCodechef, SiCodeforces } from "react-icons/si";
import { TbBrandLeetcode } from "react-icons/tb";

const Broken = () => {
  return (
    <div className="relative w-full flex justify-center p-5 overflow-hidden overflow-y-scroll">
      <div className="absolute top-5 right-10 ">
        <ModeToggle />
      </div>
      <div className="h-full mt-4 bg-white/10  w-full md:w-[600px] flex flex-col gap-2 border py-2 px-4 rounded-xl">
        <div className="flex items-center gap-4 ">
          <img
            className="rounded-full"
            width="82"
            height="82"
            alt=""
            src={"https://avatar.vercel.sh/jane"}
          />
          <div className="flex flex-col gap-2">
            <p className="font-bold md:text-xl flex md:flex-row flex-col md:items-center">
              Hi 👋🏻, I am Arpit Blagan{" "}
              <span className="text-sm text-gray-500">
                (arpitblagan27@gmail.com)
              </span>
            </p>

            <p className="font-semibold text-sm dark:text-gray-300 text-start">
              <span className="font-semibold underline ">About me: </span>I am
              an adaptable and versatile Software Developer with a passion for
              DevOps and a knack for quickly mastering new technologies. With a
              focus on delivering high-quality code and smooth coding
              experiences, I like to be in environments that challenge me to
              learn and grow.
            </p>
          </div>
        </div>
        <div className="flex items-center justify-end flex-wrap gap-5 border-b pb-2">
          <Link href="" target="_blank">
            <RiGithubFill
              className="text-gray-500 dark:hover:text-gray-200 hover:text-gray-700 duration-300 ease-in-out"
              size={20}
            />
          </Link>
          <Link href="" target="_blank">
            <RiTwitterXFill
              className="text-gray-500 dark:hover:text-gray-200 hover:text-gray-700 duration-300 ease-in-out"
              size={20}
            />
          </Link>
          <Link href="" target="_blank">
            <RiDiscordFill
              className="text-gray-500 dark:hover:text-gray-200 hover:text-gray-700 duration-300 ease-in-out"
              size={20}
            />
          </Link>
          <Link href="" target="_blank">
            <RiLinkedinFill
              className="text-gray-500 dark:hover:text-gray-200 hover:text-gray-700 duration-300 ease-in-out"
              size={20}
            />
          </Link>
          <Link href="" target="_blank">
            <TbBrandLeetcode
              className="text-gray-500 dark:hover:text-gray-200 hover:text-gray-700 duration-300 ease-in-out"
              size={20}
            />
          </Link>
          <Link href="" target="_blank">
            <SiCodeforces
              className="text-gray-500 dark:hover:text-gray-200 hover:text-gray-700 duration-300 ease-in-out"
              size={20}
            />
          </Link>
          <Link href="" target="_blank">
            <SiCodechef
              className="text-gray-500 dark:hover:text-gray-200 hover:text-gray-700 duration-300 ease-in-out"
              size={20}
            />
          </Link>
        </div>
        <div className="py-2 border-b flex flex-col gap-2 py-2">
          <div className="flex items-center justify-center font-bold text-lg">
            <p>Skills</p>
          </div>
          <div className="flex items-center flex-wrap gap-2">
            {skills.map((ele, index) => {
              return (
                <p
                  key={index}
                  className="py-1 px-4 font-semibold rounded-xl border text-sm bg-white/30"
                >
                  {ele}
                </p>
              );
            })}
          </div>
        </div>
        <div className=" border-b flex flex-col gap-2 py-2">
          <div>
            <p className="flex items-center justify-center font-bold text-lg">
              Experience
            </p>
          </div>
          <div className="flex flex-col gap-4">
            {expreiences.map((ele, index) => {
              return (
                <div key={index} className="flex flex-col gap-2">
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex flex-col gap-2">
                      <p className="text-xl font-semibold flex items-center gap-2">
                        {ele.name}{" "}
                        <Link href={ele.link} target="_blank">
                          <RiExternalLinkFill className="text-gray-500 hover:text-gray-100 duration-300 ease-in-out" />
                        </Link>
                      </p>
                      <p className="font-semibold text-sm dark:text-gray-300 text-start">
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
                </div>
              );
            })}
          </div>
        </div>
        <div className="border-b flex flex-col gap-2 py-2">
          <div>
            <p className="flex items-center justify-center font-bold text-lg">
              Projects
            </p>
          </div>
          {projects.map((ele, index) => {
            return (
              <div className="flex flex-col gap-2" key={index}>
                <div>
                  <p className="text-xl font-semibold">{ele.title}</p>
                  <p className="font-semibold text-sm dark:text-gray-300 text-start">
                    {ele.description}
                  </p>
                </div>
                <div className="flex items-center justify-end gap-2">
                  <Link href={ele.code} target="_blank">
                    <RiCodeFill className="text-gray-500 dark:hover:text-gray-200 hover:text-gray-700 duration-300 ease-in-out" />
                  </Link>
                  <Link href={ele.live} target="_blank">
                    <RiExternalLinkFill className="text-gray-500 dark:hover:text-gray-200 hover:text-gray-700 duration-300 ease-in-out" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
        <div>
          <div className=" flex flex-col gap-2 py-2">
            <p className="flex items-center justify-center font-bold text-lg">
              Education
            </p>
          </div>
          <div className="flex flex-col gap-2 mb-4">
            {education.map((ele, index) => {
              return (
                <div key={index}>
                  <div className="flex items-center gap-2 justify-between">
                    <div>
                      <p className="font-semibold">{ele.name}</p>
                      <p className="text-[10px] text-gray-500">
                        ({ele.location})
                      </p>
                    </div>
                    <div>
                      <p className="dark:text-gray-300 font-semibold">
                        {ele.cgpa}
                      </p>
                      <p>
                        {ele.startDate} {ele.endDate}
                      </p>
                    </div>
                  </div>
                  <p className="text-gray-500 text-sm">
                    {ele.course} {ele.specilization}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Broken;
