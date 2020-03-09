const express = require('express');
const db = require('../models');
const router = express.Router();
const { isLoggedIn } = require('./middleware');

router.get('/:id', async (req, res, next) => {
  try {
    const board = await db.Board.findOne({
      where: {
        id: req.params.id,
      },
      include: [
        {
          model: db.User,
          attributes: ['id', 'nickname'],
        },
        {
          model: db.Comment,
          attributes: ['id', 'content', 'createdAt'],
          include: [
            {
              model: db.User,
              attributes: ['id', 'nickname'],
            },
          ],
        },
      ],
      order: [[db.Comment, 'id', 'DESC']],
    });
    return res.json(board);
  } catch (e) {
    console.log(e);
    return next(e);
  }
});

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
