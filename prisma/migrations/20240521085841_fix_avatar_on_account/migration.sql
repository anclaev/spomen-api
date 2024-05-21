-- DropForeignKey
ALTER TABLE "Account" DROP CONSTRAINT "Account_avatarId_fkey";

-- AlterTable
ALTER TABLE "Account" ALTER COLUMN "avatarId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Account" ADD CONSTRAINT "Account_avatarId_fkey" FOREIGN KEY ("avatarId") REFERENCES "Upload"("id") ON DELETE SET NULL ON UPDATE CASCADE;
