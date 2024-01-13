-- CreateTable
CREATE TABLE "point" (
    "id" SERIAL NOT NULL,
    "lat" TEXT NOT NULL,
    "lng" TEXT NOT NULL,

    CONSTRAINT "point_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "location" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "pointId" INTEGER NOT NULL,

    CONSTRAINT "location_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "point_id_key" ON "point"("id");

-- CreateIndex
CREATE UNIQUE INDEX "location_id_key" ON "location"("id");

-- AddForeignKey
ALTER TABLE "location" ADD CONSTRAINT "location_pointId_fkey" FOREIGN KEY ("pointId") REFERENCES "point"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
