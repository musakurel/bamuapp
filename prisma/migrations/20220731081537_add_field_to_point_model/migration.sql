/*
  Warnings:

  - Added the required column `city` to the `Point` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Point" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "adress" TEXT NOT NULL,
    "tel" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
INSERT INTO "new_Point" ("adress", "createdAt", "id", "name", "tel", "updatedAt") SELECT "adress", "createdAt", "id", "name", "tel", "updatedAt" FROM "Point";
DROP TABLE "Point";
ALTER TABLE "new_Point" RENAME TO "Point";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
