const express = require('express');

const MasterController = require('../controllers/master.js');

const router = express.Router();



// READ - GET ALL MASTER SAMPUL
router.get('/sampul', MasterController.getMasterSampul);
router.get('/keluarga', MasterController.getMasterSampul);
router.get('/kolom', MasterController.getMasterSampul);
module.exports = router;
