const express = require('express');
const db = require('../models');
const router = express.Router();

router.get('/', async (req, res, next) => {
  try {
  } catch (e) {
    console.log(e);
    return next(e);
  }
});

module.exports = router;
