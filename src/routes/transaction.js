const express = require('express');

const transactionController = require('../controllers/transaction.js');

const router = express.Router();


// transaction - pengeluaran
router.get('/pengeluaran/:id', transactionController.getAllPengeluaranByGereja);
router.get('/pengeluaran', transactionController.getAllPengeluaran);
router.get('/result', transactionController.resultPengeluaran);
router.get('/result/pengeluaran/:gerejaId', transactionController.PengeluaranGerejaId);

// transaction - pemasukan
router.get('/pemasukan', transactionController.getAllPemasukan);
router.get('/pemasukan/:gerejaId', transactionController.getAllPemasukanByGerejaId);
router.get('/result/pemasukan/:gerejaId', transactionController.PemasukanGerejaId);


// result
module.exports = router;
router.get('/dashboard/result', transactionController.getPendapatanGereja);


// recent pengeluaran
router.get('/recent/pengeluaran', transactionController.getRecentTransaction);
router.get('/recent/pemasukan', transactionController.getRecentTransactionPemasukan);

// chart
router.get('/chart/pengeluaran/:gerejaId', transactionController.chartPengeluaran);
router.get('/chart/pemasukan/:gerejaId', transactionController.chartPemasukan);