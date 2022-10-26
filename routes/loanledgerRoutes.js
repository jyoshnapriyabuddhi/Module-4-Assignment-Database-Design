const express = require('express');
const loanledgerController = require('../controllers/loanledgerController');
const router = express.Router();

router
  .route('/')
  .get(loanledgerController.getAllloanledgers)
  .post(loanledgerController.createloanledger);

router
  .route('/:id')
  .put(loanledgerController.updateloanledger)
  .delete(loanledgerController.deleteloanledger)

module.exports = router;