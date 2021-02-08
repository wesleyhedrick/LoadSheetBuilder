const express = require('express');
const router = express.Router();

const {cAndVController} = require('../controllers')

router.get('/', cAndVController.getCandVs)

module.exports = router
