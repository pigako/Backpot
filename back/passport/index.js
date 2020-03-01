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
            attributes: ['id'],
          },
          {
            model: db.Book,
            as: 'Books',
            attributes: ['id'],
          },
          {
            model: db.Book,
            as: 'LikingBook',
            include: [
              {
                model: db.User,
                attributes: ['nickname'],
              },
            ],
          },
          {
            model: db.User,
            as: 'LikingUser',
            attributes: ['id'],
          },
        ],
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
