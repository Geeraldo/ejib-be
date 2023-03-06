const express = require('express');

const transactionController = require('../controllers/transaction.js');

const router = express.Router();


// transaction - pengeluaran
router.get('/pengeluaran/:id', transactionController.getAllPengeluaranByGereja);
router.get('/pengeluaranAll', transactionController.getAllPengeluaran);
router.get('/result', transactionController.resultPengeluaran);
router.get('/result/pengeluaran/:gerejaId', transactionController.resultPengeluaranByGerejaId);

// transaction - pemasukan
router.get('/pemasukan', transactionController.getAllPemasukan);

module.exports = router;