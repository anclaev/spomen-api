/*
  Warnings:

  - Added the required column `bucket` to the `Upload` table without a default value. This is not possible if the table is not empty.
  - Added the required column `path` to the `Upload` table without a default value. This is not possible if the table is not empty.
  - Made the column `name` on table `Upload` required. This step will fail if there are existing NULL values in that column.
  - Made the column `ext` on table `Upload` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Upload" ADD COLUMN     "bucket" TEXT NOT NULL,
ADD COLUMN     "path" TEXT NOT NULL,
ALTER COLUMN "name" SET NOT NULL,
ALTER COLUMN "ext" SET NOT NULL;
