/*
  Warnings:

  - You are about to drop the column `firstname` on the `Account` table. All the data in the column will be lost.
  - You are about to drop the column `lastname` on the `Account` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Account" DROP COLUMN "firstname",
DROP COLUMN "lastname",
ADD COLUMN     "first_name" TEXT,
ADD COLUMN     "last_name" TEXT;
