"use client";
import { Input } from "@/components/ui/input";
import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { BorderBeam } from "@/components/ui/border-beam";
import SparklesText from "@/components/ui/sparkles-text";
import Particles from "@/components/ui/particles";
import { useTheme } from "next-themes";
import { signIn } from "next-auth/react";
import { RiGithubFill } from "@remixicon/react";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
const signinSchema = z.object({
  email: z.string().email("Please provide valid email address."),
  password: z.string().min(6, "Password should be atleast 6 characters long."),
});
type signin = z.infer<typeof signinSchema>;
const page = () => {
  const { theme } = useTheme();
  const [color, setColor] = useState("#ffffff");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<signin>({
    // defaultValues: {
    //   email: "blaganarpit@gmail.com",
    //   password: "Ab@123456",
    // },
    resolver: zodResolver(signinSchema),
  });
  useEffect(() => {
    setColor(theme === "dark" ? "#ffffff" : "#000000");
  }, [theme]);
  const onSubmit = async (data: { email: string; password: string }) => {
    const res = await signIn("credentials", {
      email: data.email,
      password: data.password,
      redirect: false,
    });
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
          className="z-9 relative flex flex-col font-another  gap-4 lg:w-1/2 w-full  p-10 md:m-0 mx-4 rounded-xl"
        >
          <BorderBeam duration={30} />

          <div className="border-b pb-3 flex flex-col gap-2">
            <SparklesText
              text="Welcome back to Porlty"
              className="text-4xl text-center"
            />
            <p className="text-sm font-medium text-center">Quick and Easy</p>
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
            <Input
              placeholder="Enter your password"
              className="h-[50px]"
              {...register("password")}
            />
            {errors.password && (
              <span className="text-red-500 text-sm">
                {errors.password.message}
              </span>
            )}
          </div>
          <Button className="bg-green-600 hover:bg-green-700" type="submit">
            Log in
          </Button>
          <Button
            className=" border "
            onClick={async (e) => {
              e.preventDefault();

              await signIn("github", { callbackUrl: "/profile" });
            }}
          >
            Log in using <RiGithubFill />
          </Button>
          <p className="text-center">
            Don't have an account{" "}
            <Link href="/signup" className="underline">
              Sign up
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default page;
