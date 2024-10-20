/*
  Warnings:

  - You are about to drop the `temp_user` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "temp_user" DROP CONSTRAINT "temp_user_templateId_fkey";

-- DropForeignKey
ALTER TABLE "temp_user" DROP CONSTRAINT "temp_user_userId_fkey";

-- DropTable
DROP TABLE "temp_user";

-- CreateTable
CREATE TABLE "Port" (
    "id" TEXT NOT NULL,
    "templateId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "Port_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Port_userId_templateId_key" ON "Port"("userId", "templateId");

-- AddForeignKey
ALTER TABLE "Port" ADD CONSTRAINT "Port_templateId_fkey" FOREIGN KEY ("templateId") REFERENCES "Template"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Port" ADD CONSTRAINT "Port_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
