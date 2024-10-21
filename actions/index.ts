"use server";
import { Bucket, extractDataFromData, s3 } from "@/common";
import prisma from "@/db";
import { PutObjectCommand } from "@aws-sdk/client-s3";
import bcrypt from "bcryptjs";
import { EnumValues } from "zod";

export const registerUser = async (formData: FormData) => {
  const email: any = formData.get("email");
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
  const hash = await bcrypt.hash(password, 10);
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
    console.log(err);
    return { error: "not able to register user." };
  }
};
enum Type {
  FREE,
  PREMIUM,
}
export const registerTemplate = async (formdata: FormData) => {
  const name: any = formdata.get("name");
  const description: any = formdata.get("email");
  const file: any = formdata.get("file");
  const type: any = formdata.get("type");
  try {
    const Body = (await file.arrayBuffer()) as Buffer;
    const key = `${file.name}`;

    // Upload the file to S3
    await s3.send(new PutObjectCommand({ Bucket, Key: key, Body }));

    // Construct the URL for the uploaded file
    const url = `https://d3e230op9b6du5.cloudfront.net/${key}`;

    await prisma.template.create({
      data: {
        name: name as string,
        description: description as string,
        cover_image: url,
        by: "Arpit Blagan",
        type: type,
        views: 0,
      },
    });
    return { message: "template registered successfully." };
  } catch (err) {
    return { error: "not able to register user." };
  }
};

export const getTemplates = async () => {
  try {
    const data = await prisma.template.findMany();
    return { message: "successfully fetched", data };
  } catch (err) {
    return { error: "not able to fetch the templates" };
  }
};

export const addPort = async (userId: string, templateId: string) => {
  try {
    const port = await prisma.port.findUnique({
      where: {
        //@ts-ignore
        userId_templateId: { userId, templateId },
      },
    });
    if (port) {
      return { error: "there was already a port with this template." };
    }
    await prisma.port.create({
      data: {
        userId,
        templateId,
      },
    });
    return { message: "successfully created." };
  } catch (err) {
    return { error: "something went wrong please try again later." };
  }
};

export const getPorts = async (userId: string) => {
  try {
    const data = await prisma.port.findMany({ where: { id: userId } });
    return { message: "successfully fetched", data };
  } catch (err) {
    return { error: "not able to get ports related to you" };
  }
};

export const getFormData = async (userId: string) => {
  try {
    const user = await prisma.user.findUnique({ where: { id: userId } });
    if (!user) {
      return { error: "First register yourself on the site" };
    }
    const data = await prisma.formdata.findUnique({ where: { userId } });
    return { message: "successfully fetched", data };
  } catch (err) {
    return {
      error: "not able to fetch form data for you please try again later",
    };
  }
};

export const submitFormdata = async (formdata: FormData) => {
  const data = extractDataFromData(formdata);
  try {
    await prisma.formdata.create({
      data,
    });
    return { message: "succsessfully saved your information" };
  } catch (err) {
    return {
      error:
        "Something went wrong while uploading the data please try again later",
    };
  }
};
export const updateFormdata = async (formdata: FormData, userId: string) => {
  const data = extractDataFromData(formdata);

  try {
    await prisma.formdata.update({ where: { userId }, data });
    return { message: "update successfully congratulation" };
  } catch (err) {
    return {
      error:
        "Something went wrong while updating the data please try again later",
    };
  }
};
