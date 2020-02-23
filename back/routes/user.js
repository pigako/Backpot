const express = require('express');

const router = express.Router();

router.get('/', (req, res, next) => {
  try {
    return res.send('user');
  } catch (e) {
    console.log(e);
    return next(e);
  }
});

module.exports = router;
