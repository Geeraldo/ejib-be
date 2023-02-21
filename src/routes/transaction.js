const express = require('express');

const transactionController = require('../controllers/transaction.js');

const router = express.Router();



// READ - GET ALL GEREJA
router.get('/id', transactionController.getAllPengeluaranByGereja);
// READ - GET ALL pengeluaran
router.get('/', transactionController.getAllPengeluaran);
router.get('/result', transactionController.resultPengeluaran);

module.exports = router;