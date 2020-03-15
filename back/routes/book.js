const express = require('express');
const db = require('../models');
const router = express.Router();
const { isLoggedIn } = require('./middleware');

router.get('/:id', async (req, res, next) => {
  try {
    const book = await db.Book.findOne({
      where: {
        id: parseInt(req.params.id, 10),
      },
      include: [
        {
          model: db.User,
          attributes: ['id', 'userId', 'nickname'],
        },
        {
          model: db.User,
          as: 'LikersBook',
        },
        {
          model: db.Episode,
        },
        {
          model: db.Genre,
          as: 'BookGenre',
          attributes: ['name'],
        },
      ],
    });
    return res.json(book);
  } catch (e) {
    console.log(e);
    return next(e);
  }
});

router.post('/:id/like', isLoggedIn, async (req, res, next) => {
  try {
    const me = await db.User.findOne({
      where: { id: req.user.id },
    });
    await me.addLikingBook(parseInt(req.params.id, 10));
    await db.Book.increment(
      {
        likersCount: 1,
      },
      {
        where: { id: parseInt(req.params.id, 10) },
      },
    );
    return res.send(req.params.id);
  } catch (e) {
    console.log(e);
    return next(e);
  }
});

router.delete('/:id/unlike', isLoggedIn, async (req, res, next) => {
  try {
    const me = await db.User.findOne({
      where: { id: req.user.id },
    });
    await me.removeLikingBook(parseInt(req.params.id, 10));
    await db.Book.increment(
      {
        likersCount: -1,
      },
      {
        where: { id: parseInt(req.params.id, 10) },
      },
    );
    res.send(req.params.id);
  } catch (e) {
    console.log(e);
    return next(e);
  }
});

module.exports = router;
