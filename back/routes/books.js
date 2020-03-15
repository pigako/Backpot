const express = require('express');
const db = require('../models');
const router = express.Router();

router.get('/', async (req, res, next) => {
  try {
    let where = {};
    if (parseInt(req.query.lastId, 10)) {
      where = {
        id: {
          [db.Sequelize.Op.lt]: parseInt(req.query.lastId, 10),
        },
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
      limit: parseInt(req.query.limit, 10),
      order: [[db.Episode, 'updatedAt', 'DESC']],
    });
    return res.json(books);
  } catch (e) {
    console.log(e);
    return next(e);
  }
});

module.exports = router;
