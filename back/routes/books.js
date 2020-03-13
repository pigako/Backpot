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
    // const books = await db.Book.findAll({
    //   where,
    //   include: [{

    //   }],
    //   attributes: [],
    //   limit: parseInt(req.query.limit, 10);
    //   order: [['updatedAt', 'DESC']]
    // })
    // return res.json(books);
  } catch (e) {
    console.log(e);
    return next(e);
  }
});

module.exports = router;
