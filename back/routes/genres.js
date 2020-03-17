const express = require('express');
const db = require('../models');

const router = express.Router();

// 장르 조회
router.get('/', async (req, res, next) => {
  try {
    const fullGenre = await db.Genre.findAll({
      attributes: ['id', 'name'],
    });
    return res.json(fullGenre);
  } catch (e) {
    console.log(e);
    return next(e);
  }
});

module.exports = router;
