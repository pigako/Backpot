const passport = require('passport');
const db = require('../models');
const local = require('./local');

module.exports = () => {
  passport.serializeUser((user, done) => {
    return done(null, user.id);
  });

  passport.deserializeUser(async (id, done) => {
    try {
      const user = await db.User.findOne({
        where: { id },
        include: [
          {
            model: db.Board,
            include: [
              {
                model: db.User,
                attributes: ['nickname'],
              },
            ],
          },
          {
            model: db.Book,
            as: 'Books',
            where: { flag: { $not: 3 } },
            include: [{ model: db.Genre, as: 'BookGenre', attributes: ['name'] }],
            required: false,
          },
          {
            model: db.Book,
            as: 'LikingBook',
            where: { flag: { $not: 3 } },
            include: [
              {
                model: db.User,
                attributes: ['id', 'userId', 'nickname'],
              },
            ],
            attributes: ['id', 'name', 'recentDay'],
            required: false,
          },
          {
            model: db.User,
            as: 'LikingUser',
            attributes: ['id'],
          },
        ],
        order: [[{ model: db.Book, as: 'LikingBook' }, 'recentDay', 'DESC']],
        attributes: ['id', 'userId', 'nickname'],
      });
      return done(null, user); // req.user
    } catch (e) {
      console.error(e);
      return done(e);
    }
  });

  local();
};
