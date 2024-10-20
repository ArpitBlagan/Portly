/*
  Warnings:

  - You are about to drop the `Port` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Port" DROP CONSTRAINT "Port_templateId_fkey";

-- DropForeignKey
ALTER TABLE "Port" DROP CONSTRAINT "Port_userId_fkey";

-- DropTable
DROP TABLE "Port";

-- CreateTable
CREATE TABLE "temp_user" (
    "id" TEXT NOT NULL,
    "templateId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "temp_user_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "temp_user" ADD CONSTRAINT "temp_user_templateId_fkey" FOREIGN KEY ("templateId") REFERENCES "Template"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "temp_user" ADD CONSTRAINT "temp_user_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
