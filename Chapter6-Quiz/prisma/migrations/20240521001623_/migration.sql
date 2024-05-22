/*
  Warnings:

  - Added the required column `id_transaksi` to the `detail_transaksi` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `detail_transaksi` ADD COLUMN `id_transaksi` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `detail_transaksi` ADD CONSTRAINT `detail_transaksi_id_transaksi_fkey` FOREIGN KEY (`id_transaksi`) REFERENCES `transaksi`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
