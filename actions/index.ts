"use server";
import { Bucket, s3 } from "@/common";
import prisma from "@/db";
import { PutObjectCommand } from "@aws-sdk/client-s3";
import bcrypt from "bcryptjs";

export const checkUserInfo = (id: string, templateName: string) => {
  const user = prisma.user.find({
    where: {
      id,
    },
  });
  if (user.templates.includes(templateName)) {
    return true;
  }
  return false;
};

export const registerUser = async (formData: FormData) => {
  const email = formData.get("email");
  const password: any = formData.get("password");
  const name = formData.get("name");
  const file: any = formData.get("file");
  if (!email || !name || !password) {
    return { error: "This email is already registered:(" };
  }
  const user = await prisma.user.findFirst({ where: { email } });
  if (user) {
    return { error: "This email is already registered:(" };
  }
  const hash = bcrypt.hash(password, 10);
  const data: any = {
    name,
    email,
    password: hash,
  };
  if (file) {
    const Body = (await file.arrayBuffer()) as Buffer;
    const key = `${file.name}`;

    // Upload the file to S3
    await s3.send(new PutObjectCommand({ Bucket, Key: key, Body }));

    // Construct the URL for the uploaded file
    const url = `https://d3e230op9b6du5.cloudfront.net/${key}`;

    data.image = url;
  }
  try {
    await prisma.user.create({
      data,
    });
    return { message: "user signuped successfully :)" };
  } catch (err) {
    return { error: "not able to register user." };
  }
};
