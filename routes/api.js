const express = require('express');

const Payment = require('../models/payment');
const Data = require('../config/data');

const pay = require('./pay');

const router = express.Router();

router.use('/pay', pay);

module.exports = router;
