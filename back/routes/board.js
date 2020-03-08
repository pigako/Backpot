const express = require('express');
const db = require('../models');
const router = express.Router();
const { isLoggedIn } = require('./middleware');

router.post('/', isLoggedIn, async (req, res, next) => {
  try {
    const newBoard = await db.Board.create({
      title: req.body.title,
      content: req.body.text,
      UserId: req.user.id,
    });

    const fullBoard = await db.Board.findOne({
      where: {
        id: newBoard.id,
      },
      include: [
        {
          model: db.User,
          attributes: ['id', 'nickname'],
        },
      ],
    });

    return res.json(fullBoard);
  } catch (e) {
    console.log(e);
    return next(e);
  }
});

module.exports = router;
