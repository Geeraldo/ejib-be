const express = require('express');

const UserController = require('../controllers/gereja.js');

const router = express.Router();



// READ - GET ALL GEREJA
router.get('/', UserController.getAllUsers);
module.exports = router;


