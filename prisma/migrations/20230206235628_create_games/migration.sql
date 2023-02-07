-- CreateTable
CREATE TABLE "Jogos" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "bar_code" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Jogos_bar_code_key" ON "Jogos"("bar_code");
