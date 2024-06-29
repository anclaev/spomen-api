/*
  Warnings:

  - The `sex` column on the `Account` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `roles` column on the `Account` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- CreateEnum
CREATE TYPE "Role" AS ENUM ('Public', 'Administrator');

-- AlterTable
ALTER TABLE "Account" DROP COLUMN "sex",
ADD COLUMN     "sex" INTEGER NOT NULL DEFAULT 0,
DROP COLUMN "roles",
ADD COLUMN     "roles" "Role"[];

-- DropEnum
DROP TYPE "AccountRole";

-- DropEnum
DROP TYPE "Sex";
