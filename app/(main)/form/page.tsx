"use client";
import { DatePickerWithRange } from "@/components/range-date-picker";
import { BorderBeam } from "@/components/ui/border-beam";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { skillsOptions } from "@/constant";
import { Select } from "@/components/ui/select";
import {
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@radix-ui/react-select";
import { Button } from "react-day-picker";
import { RiArrowDownSFill, RiDropFill } from "@remixicon/react";

const page = () => {
  const [selectedOptions, setSelectedOptions] = useState([]);

  return (
    <div className="min-h-screen mx-5">
      <div className=" flex flex-col gap-2 my-2  md:mx-10">
        <p className="font-another text-3xl tracking-tighter font-medium">
          Fill your details
        </p>
        <p className="font-another font-gray-600">
          Make sure to fill out appropreiate details so that your portofilo
          looks more professional.
        </p>
      </div>
      <div className="flex items-center justify-center my-5 ">
        <form className="w-full md:w-1/2 grid md:grid-cols-2 gap-2 border rounded-xl p-3 bg-white/10 relative">
          <BorderBeam
            className="hidden md:block"
            size={250}
            duration={50}
            delay={9}
          />
          <div>
            <label className="font-another font-medium">Name</label>
            <Input
              placeholder="Arpit Blagan"
              className="font-another dark:border-zinc-600"
            />
          </div>
          <div>
            <label className="font-another font-medium">Email</label>
            <Input
              placeholder="arpitblagan27@gmail.com"
              className="font-another dark:border-zinc-600"
            />
          </div>
          <div>
            <label className="font-another font-medium">Github</label>
            <Input
              placeholder="github.com/asdfpi."
              className="font-another dark:border-zinc-600"
            />
          </div>
          <div>
            <label className="font-another font-medium">LinkedIn</label>
            <Input
              placeholder="linkedin.com/asdf/asf"
              className="font-another dark:border-zinc-600"
            />
          </div>
          <div>
            <label className="font-another font-medium">
              Discord{" "}
              <span className="text-gray-500 font-sm font-another">
                (optional)
              </span>
            </label>
            <Input
              placeholder="discord/asfas/f."
              className="font-another dark:border-zinc-600"
            />
          </div>
          <div>
            <label className="font-another font-medium">
              Twitter{" "}
              <span className="text-gray-500 font-sm font-another">
                (optional)
              </span>
            </label>
            <Input
              placeholder="twitter.com/asdf/asdf"
              className="font-another dark:border-zinc-600"
            />
          </div>
          <div>
            <label className="font-another font-medium">
              Codeforces{" "}
              <span className="text-gray-500 font-sm font-another">
                (optional)
              </span>
            </label>
            <Input
              placeholder="codeforces.com/asdf/asdf"
              className="font-another dark:border-zinc-600"
            />
          </div>
          <div>
            <label className="font-another font-medium">
              Leetcode{" "}
              <span className="text-gray-500 font-sm font-another">
                (optional)
              </span>
            </label>
            <Input
              placeholder="leetcode.com/asdf/asdf"
              className="font-another dark:border-zinc-600"
            />
          </div>
          <div>
            <label className="font-another font-medium">
              Codechef{" "}
              <span className="text-gray-500 font-sm font-another">
                (optional)
              </span>
            </label>
            <Input
              placeholder="codechef.com/asdf/asdf"
              className="font-another dark:border-zinc-600"
            />
          </div>
          <div></div>
          <div className="flex flex-col gap-2 col-span-2">
            <label className="font-another font-medium">Skills</label>
            <div className="flex items-center  flex-wrap gap-1">
              {selectedOptions.map((ele, index) => {
                return (
                  <p key={index} className="py-1 px-2 rounded-xl bg-white/10">
                    {ele}
                  </p>
                );
              })}
            </div>
            <div className=" flex items-center justify-center cols-span-2  ">
              <Select>
                <SelectTrigger className=" flex items-center justify-end border p-2">
                  <div>
                    <SelectValue placeholder="Select skills" />
                  </div>
                  <RiArrowDownSFill />
                </SelectTrigger>
                <SelectContent className="bg-background py-2 px-4 h-[350px] overflow-hidden overflow-y-scroll">
                  {skillsOptions.map((ele, index) => {
                    return (
                      <SelectItem
                        value={ele}
                        key={index}
                        className="font-another"
                      >
                        {ele}
                      </SelectItem>
                    );
                  })}
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="col-span-2">
            <label className="font-another font-medium">Quick intro</label>
            <Textarea
              className="font-another dark:border-zinc-600"
              placeholder="Hey, I am @23 undregraduate and I am into full stack developement with passion for devops and web3."
              rows={5}
            />
          </div>
          <div className="col-span-2 font-another font-medium flex items-center justify-center">
            <label className="font-another ">
              Projects{" "}
              <span className="font-another text-gray-500">
                (atmost and atleast 3 project)
              </span>
            </label>
          </div>
          <div className="col-span-2 flex flex-col gap-2">
            <label className="font-another font-medium">Project 1</label>
            <Input
              placeholder="Title"
              className="font-another dark:border-zinc-600"
            />
            <Textarea
              className="font-another dark:border-zinc-600"
              rows={5}
              placeholder="Description about your projects in detail"
            />
            <div className="flex items-center gap-2">
              <Input
                className="font-another dark:border-zinc-600"
                placeholder="code link"
              />
              <Input
                className="font-another dark:border-zinc-600"
                placeholder="deployed link"
              />
            </div>
          </div>
          <div className="col-span-2 flex flex-col gap-2">
            <label className="font-another font-medium">Project 2</label>
            <Input
              placeholder="Title"
              className="font-another dark:border-zinc-600"
            />
            <Textarea
              className="font-another dark:border-zinc-600"
              rows={5}
              placeholder="Description about your projects in detail"
            />
            <div className="flex items-center gap-2">
              <Input
                className="font-another dark:border-zinc-600"
                placeholder="code link"
              />
              <Input
                className="font-another dark:border-zinc-600"
                placeholder="deployed link"
              />
            </div>
          </div>
          <div className="col-span-2 flex flex-col gap-2">
            <label className="font-another font-medium">Project 3</label>
            <Input
              placeholder="Title"
              className="font-another dark:border-zinc-600"
            />
            <Textarea
              className="font-another dark:border-zinc-600"
              rows={5}
              placeholder="Description about your projects in detail"
            />
            <div className="flex items-center gap-2">
              <Input
                className="font-another dark:border-zinc-600"
                placeholder="code link"
              />
              <Input
                className="font-another dark:border-zinc-600"
                placeholder="deployed link"
              />
            </div>
          </div>
          <div className="col-span-2 font-another font-medium flex items-center justify-center">
            <label className="font-another">
              Experiences{" "}
              <span className="font-another text-gray-500">
                (atmost 3 and atleast 1)
              </span>
            </label>
          </div>
          <div className="col-span-2 flex flex-col gap-2">
            <label className="font-another font-medium">Experience 1</label>
            <div className="flex items-center gap-2">
              <Input
                placeholder="Company's Name"
                className="font-another dark:border-zinc-600"
              />
              <Input
                placeholder="Your Position"
                className="font-another dark:border-zinc-600"
              />
            </div>
            <Textarea
              className="font-another dark:border-zinc-600"
              rows={5}
              placeholder="Description about your role"
            />
            <div className="flex items-center gap-2">
              <DatePickerWithRange className="bg-transparent" />
              <Input
                className="font-another dark:border-zinc-600"
                placeholder="Company's website link"
              />
            </div>
          </div>
          <div className="col-span-2 flex flex-col gap-2">
            <label className="font-another font-medium">Experience 2</label>
            <div className="flex items-center gap-2">
              <Input
                placeholder="Company's Name"
                className="font-another dark:border-zinc-600"
              />
              <Input
                placeholder="Your Position"
                className="font-another dark:border-zinc-600"
              />
            </div>
            <Textarea
              className="font-another dark:border-zinc-600"
              rows={5}
              placeholder="Description about your role"
            />
            <div className="flex items-center gap-2">
              <DatePickerWithRange className="bg-transparent" />
              <Input
                className="font-another dark:border-zinc-600"
                placeholder="Company's website link"
              />
            </div>
          </div>
          <div className="col-span-2 flex flex-col gap-2">
            <label className="font-another font-medium">Degree</label>

            <div className="flex items-center gap-2">
              <Input
                placeholder="College/University name"
                className="font-another dark:border-zinc-600"
              />
              <Input
                placeholder="Course"
                className="font-another dark:border-zinc-600"
              />
            </div>
            <div className="flex items-center gap-2">
              <Input
                placeholder="CGPA"
                className="font-another dark:border-zinc-600"
              />
              <Input
                placeholder="Specialization"
                className="font-another dark:border-zinc-600"
              />
            </div>
            <Input
              placeholder="Related website link"
              className="font-another dark:border-zinc-600"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default page;
