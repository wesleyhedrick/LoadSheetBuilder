const express = require('express')
const router = express.Router()
const { savedLoadsController } = require('../controllers')

router.get('/', savedLoadsController.getSavedLoads)
      .get('/get-load/:id', savedLoadsController.getRequested)

module.exports = router 



