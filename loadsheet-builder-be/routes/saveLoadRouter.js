const express = require('express');
const router = express.Router();
const {saveLoadController} = require('../controllers')

router.post('/', saveLoadController.saveLoad)

module.exports = router;