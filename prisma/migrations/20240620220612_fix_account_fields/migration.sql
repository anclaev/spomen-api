/*
  Warnings:

  - You are about to drop the column `refresh_tokens` on the `Account` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Account" DROP COLUMN "refresh_tokens",
ADD COLUMN     "@unique" TEXT[];
