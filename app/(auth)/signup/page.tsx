"use client";
import { Input } from "@/components/ui/input";
import React, { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Particles from "@/components/ui/particles";
import { useTheme } from "next-themes";
import SparklesText from "@/components/ui/sparkles-text";
import {
  RiCloseLine,
  RiEyeCloseFill,
  RiEyeFill,
  RiGithubFill,
} from "@remixicon/react";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
const signupSchema = z.object({
  name: z.string().min(5, "Name should be atleast have 5 character"),
  email: z.string().email("Please provide valid and active email address."),
  password: z.string().min(6, "Password should be atleast 6 characters long."),
});
type signup = z.infer<typeof signupSchema>;
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { registerUser } from "@/actions";
import Image from "next/image";
export type MediaFile = {
  file: File;
  preview: string;
  type: string;
};

const page = () => {
  const { theme } = useTheme();
  const [color, setColor] = useState("#ffffff");
  const [mediaFile, setMediaFile] = useState<MediaFile | null>(null);
  const [loading, setLoading] = useState(false);
  const inpRef = useRef(null);
  const [type, setType] = useState("password");
  const [icon, setIcon] = useState("show");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<signup>({ resolver: zodResolver(signupSchema) });

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
    if (inpRef.current) {
      //@ts-ignore
      inpRef.current.value = null;
    }
  };
  useEffect(() => {
    setColor(theme === "dark" ? "#ffffff" : "#000000");
  }, [theme]);
  const router = useRouter();
  const onSubmit: SubmitHandler<signup> = async (data) => {
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("email", data.email);
    formData.append("password", data.password);
    if (mediaFile) {
      formData.append("file", mediaFile.file);
    }
    toast.promise(
      async () => {
        setLoading(true);
        const res = await registerUser(formData);
        if (res.message) {
          return res;
        }
        throw new Error(res.error);
      },
      {
        loading: "Loading...",
        success: (res) => {
          setLoading(false);
          router.push("/signin");
          return `${res.message}`;
        },
        error: (error) => {
          setLoading(false);
          return `${error}`;
        },
      }
    );
  };
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
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="relative flex flex-col font-another gap-4  lg:w-1/2 w-full  p-10 md:m-0 mx-4 rounded-xl"
        >
          {/* <BorderBeam duration={30} /> */}
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
              ref={inpRef}
              type="file"
              placeholder="Select your profile image"
              onChange={handleMediaChange}
            />
            {mediaFile && (
              <div className="relative">
                <div className="flex items-center justify-center bg-white/10">
                  <div className="w-40 h-40 rounded-full overflow-hidden relative ">
                    <Image
                      src={mediaFile.preview} // Replace with your image path
                      alt="Circular Image"
                      layout="fill" // Fills the container
                      objectFit="cover" // Ensures the image maintains its aspect ratio and covers the container
                      className="absolute inset-0"
                    />
                  </div>
                </div>
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
            <Input
              placeholder="Enter your username"
              className="h-[50px]"
              {...register("name")}
            />
            {errors.name && (
              <span className="text-red-500 text-sm">
                {errors.name.message}
              </span>
            )}
          </div>
          <div className="flex flex-col gap-2">
            <label>Email</label>
            <Input
              placeholder="Enter your email"
              className="h-[50px]"
              {...register("email")}
            />
            {errors.email && (
              <span className="text-red-500 text-sm">
                {errors.email.message}
              </span>
            )}
          </div>
          <div className="flex flex-col gap-2 border-b pb-4">
            <label>Password</label>
            <div className="flex relative h-[50px] ">
              <Input
                placeholder="Enter your password"
                type={type}
                className="h-full w-full"
                {...register("password")}
              />
              <div className="absolute px-2 right-0 top-50% transform translate-y-[50%]">
                {icon == "show" ? (
                  <RiEyeFill
                    className="cursor-pointer"
                    onClick={() => {
                      setIcon("close");
                      setType("text");
                    }}
                  />
                ) : (
                  <RiEyeCloseFill
                    className="cursor-pointer"
                    onClick={() => {
                      setIcon("show");
                      setType("password");
                    }}
                  />
                )}
              </div>
            </div>
            {errors.password && (
              <span className="text-red-500 text-sm">
                {errors.password.message}
              </span>
            )}
          </div>
          <Button
            className="bg-green-600 hover:bg-green-700"
            disabled={loading}
            type="submit"
          >
            Sign up
          </Button>
          <Button className=" border" disabled={loading}>
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
