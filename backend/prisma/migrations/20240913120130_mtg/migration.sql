/*
  Warnings:

  - You are about to drop the column `picture` on the `Deck` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Deck" DROP COLUMN "picture",
ADD COLUMN     "iamge" TEXT;

-- AlterTable
ALTER TABLE "Tournament" ALTER COLUMN "date" DROP NOT NULL,
ALTER COLUMN "description" DROP NOT NULL,
ALTER COLUMN "image" DROP NOT NULL;

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "image" TEXT;

-- CreateTable
CREATE TABLE "TournamentRules" (
    "id" TEXT NOT NULL,
    "tournamentId" TEXT NOT NULL,
    "rulesId" TEXT NOT NULL,

    CONSTRAINT "TournamentRules_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "TournamentRules" ADD CONSTRAINT "TournamentRules_tournamentId_fkey" FOREIGN KEY ("tournamentId") REFERENCES "Tournament"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TournamentRules" ADD CONSTRAINT "TournamentRules_rulesId_fkey" FOREIGN KEY ("rulesId") REFERENCES "Rules"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
