/*
  Warnings:

  - Added the required column `jumlah` to the `detail_transaksi` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `detail_transaksi` ADD COLUMN `jumlah` INTEGER NOT NULL;
