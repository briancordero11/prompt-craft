/*
  Warnings:

  - You are about to drop the column `images` on the `GameSession` table. All the data in the column will be lost.
  - You are about to drop the column `scores` on the `GameSession` table. All the data in the column will be lost.
  - Added the required column `gameSessionId` to the `Score` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "GameSession" DROP COLUMN "images",
DROP COLUMN "scores";

-- AlterTable
ALTER TABLE "Score" ADD COLUMN     "gameSessionId" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "GameSessionImage" (
    "id" TEXT NOT NULL,
    "gameSessionId" TEXT NOT NULL,
    "imageId" TEXT NOT NULL,

    CONSTRAINT "GameSessionImage_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "playing_with_neon" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "value" REAL,

    CONSTRAINT "playing_with_neon_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "GameSessionImage_gameSessionId_imageId_key" ON "GameSessionImage"("gameSessionId", "imageId");

-- AddForeignKey
ALTER TABLE "Score" ADD CONSTRAINT "Score_gameSessionId_fkey" FOREIGN KEY ("gameSessionId") REFERENCES "GameSession"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "GameSessionImage" ADD CONSTRAINT "GameSessionImage_gameSessionId_fkey" FOREIGN KEY ("gameSessionId") REFERENCES "GameSession"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "GameSessionImage" ADD CONSTRAINT "GameSessionImage_imageId_fkey" FOREIGN KEY ("imageId") REFERENCES "Image"("id") ON DELETE CASCADE ON UPDATE CASCADE;
