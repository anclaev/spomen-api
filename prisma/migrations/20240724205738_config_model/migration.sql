-- CreateTable
CREATE TABLE "Config" (
    "key" TEXT NOT NULL,
    "label" TEXT NOT NULL,
    "value" VARCHAR NOT NULL,

    CONSTRAINT "Config_pkey" PRIMARY KEY ("key")
);

-- CreateIndex
CREATE UNIQUE INDEX "Config_key_key" ON "Config"("key");

-- CreateIndex
CREATE UNIQUE INDEX "Config_label_key" ON "Config"("label");
