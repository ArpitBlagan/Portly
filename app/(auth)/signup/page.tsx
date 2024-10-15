"use client";
import { Input } from "@/components/ui/input";
import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { BorderBeam } from "@/components/ui/border-beam";
import Particles from "@/components/ui/particles";
import { useTheme } from "next-themes";
import SparklesText from "@/components/ui/sparkles-text";
import { RiCloseLine, RiGithubFill } from "@remixicon/react";
export type MediaFile = {
  file: File;
  preview: string;
  type: string;
};
const page = () => {
  const { theme } = useTheme();
  const [color, setColor] = useState("#ffffff");
  const [mediaFile, setMediaFile] = useState<MediaFile | null>(null);

  const handleMediaChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      let file = e.target.files[0];
      const newMediaFile = {
        file,
        preview: URL.createObjectURL(file),
        type: "image",
      };
      setMediaFile(newMediaFile);
    }
  };

  const handleRemoveMedia = () => {
    setMediaFile(null);
  };
  useEffect(() => {
    setColor(theme === "dark" ? "#ffffff" : "#000000");
  }, [theme]);
  return (
    <div className="h-screen flex items-center ">
      <div className="w-[400px] h-full hidden md:block relative">
        <div className="absolute p-10">
          <p className="font-custom font-semibold text-black rotate-[-45deg]">
            Portly
          </p>
        </div>
        <video
          loop
          autoPlay
          muted
          src="https://cdn.dribbble.com/uploads/48292/original/30fd1f7b63806eff4db0d4276eb1ac45.mp4?1689187515"
          style={{ width: "100%", objectFit: "cover", height: "100%" }}
        />
      </div>
      <div className="relative h-full flex-1  flex items-center justify-center">
        <Particles
          className="absolute inset-0 z-0"
          quantity={100}
          ease={80}
          color={color}
          refresh
        />
        <form className="relative flex flex-col font-another gap-4  lg:w-1/2 w-full  p-10 md:m-0 mx-4 rounded-xl">
          <BorderBeam duration={30} />
          <div className="border-b pb-3 flex flex-col gap-2">
            <SparklesText
              text="Sign up on Porlty"
              className="text-4xl text-center"
            />
            <p className="text-sm font-medium text-center">Quick and Easy</p>
          </div>
          <div className="flex flex-col gap-2">
            <label>Profile Image</label>
            <Input
              type="file"
              placeholder="Select your profile image"
              onChange={handleMediaChange}
            />
            {mediaFile && (
              <div className="relative">
                <img
                  src={mediaFile.preview}
                  alt="profile image"
                  className="w-full h-40 object-cover rounded"
                />

                <Button
                  variant="destructive"
                  size="icon"
                  className="absolute top-1 right-1"
                  onClick={() => handleRemoveMedia()}
                >
                  <RiCloseLine className="h-4 w-4" />
                </Button>
              </div>
            )}
          </div>
          <div className="flex flex-col gap-2">
            <label>Username</label>
            <Input placeholder="Enter your username" className="h-[50px]" />
          </div>
          <div className="flex flex-col gap-2">
            <label>Email</label>
            <Input placeholder="Enter your email" className="h-[50px]" />
          </div>
          <div className="flex flex-col gap-2 border-b pb-4">
            <label>Password</label>
            <Input placeholder="Enter your password" className="h-[50px]" />
          </div>
          <Button className="bg-green-600 hover:bg-green-700">Sign up</Button>
          <Button className=" border ">
            Sign up with <RiGithubFill />
          </Button>
          <p className="text-center">
            Already have an account{" "}
            <Link href="/login" className="underline">
              Log in
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default page;
