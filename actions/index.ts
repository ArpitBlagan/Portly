import prisma from "@/db";

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
