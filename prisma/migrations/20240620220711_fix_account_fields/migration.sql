/*
  Warnings:

  - You are about to drop the column `@unique` on the `Account` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Account" DROP COLUMN "@unique",
ADD COLUMN     "refresh_tokens" TEXT[];
