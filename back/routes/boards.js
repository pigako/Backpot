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
    const boards = await db.Board.findAll({
      where,
      include: [
        {
          model: db.User,
          attributes: ['id', 'nickname'],
        },
      ],
      attributes: ['id', 'title', 'createdAt'],
      limit: parseInt(req.query.limit, 10),
      order: [['id', 'DESC']],
    });
    return res.json(boards);
  } catch (e) {
    console.log(e);
    return next(e);
  }
});

module.exports = router;
