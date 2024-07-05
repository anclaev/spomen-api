/*
  Warnings:

  - You are about to drop the column `avatar_id` on the `Upload` table. All the data in the column will be lost.
  - You are about to drop the `Avatar` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Avatar" DROP CONSTRAINT "Avatar_owner_id_fkey";

-- DropForeignKey
ALTER TABLE "Upload" DROP CONSTRAINT "Upload_avatar_id_fkey";

-- AlterTable
ALTER TABLE "Account" ADD COLUMN     "avatarId" TEXT;

-- AlterTable
ALTER TABLE "Upload" DROP COLUMN "avatar_id";

-- DropTable
DROP TABLE "Avatar";

-- AddForeignKey
ALTER TABLE "Account" ADD CONSTRAINT "Account_avatarId_fkey" FOREIGN KEY ("avatarId") REFERENCES "Upload"("id") ON DELETE SET NULL ON UPDATE CASCADE;
