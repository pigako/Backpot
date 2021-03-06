const express = require('express');
const db = require('../models');
const router = express.Router();

router.get('/', async (req, res, next) => {
  try {
    let where = { flag: { $not: 3 } };
    if (req.query.keyword) {
      where.name = {
        [db.Sequelize.Op.like]: '%' + req.query.keyword + '%',
      };
    }
    const books = await db.Book.findAll({
      where,
      include: [
        {
          model: db.User,
          attributes: ['id', 'nickname'],
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
      attributes: ['id', 'name', 'thumbnail', 'serialDay', 'likersCount', 'createdAt'],
      order: [[db.Episode, 'updatedAt', 'DESC']],
    });
    return res.json(books);
  } catch (e) {
    console.log(e);
    return next(e);
  }
});

module.exports = router;
