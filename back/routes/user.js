const express = require('express');
const bcrypt = require('bcrypt');
const passport = require('passport');
const db = require('../models');
const { isLoggedIn } = require('./middleware');
const router = express.Router();

// 내정보 가져오기
router.get('/', isLoggedIn, (req, res, next) => {
  try {
    const user = Object.assign({}, req.user.toJSON());
    delete user.password;
    return res.json(user);
  } catch (e) {
    console.log(e);
    return next(e);
  }
});
// 다른 유저 정보 가져오기
router.get('/:id', async (req, res, next) => {
  try {
    const user = await db.User.findOne({
      where: { userId: req.params.id },
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
          include: [
            { model: db.Genre, as: 'BookGenre', attributes: ['name'] },
            {
              model: db.User,
              attributes: ['nickname'],
            },
          ],
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
    console.log('LoadUser', user);
    return res.json(user);
  } catch (e) {
    console.log(e);
    return next(e);
  }
});
// 로그인
router.post('/login', (req, res, next) => {
  passport.authenticate('local', (err, user, info) => {
    if (err) {
      console.log(err);
      return next(e);
    }
    if (info) {
      return res.status(401).send(info.reason);
    }
    return req.login(user, async loginErr => {
      try {
        if (loginErr) {
          console.log(loginErr);
          return next(loginErr);
        }
        // SequelizeEagerLoadingError: Book is associated to User multiple times. To identify the correct association, you must use the &#39;as&#39; keyword to specify the alias of the association you want to include.<br> &nbsp; &nbsp;at Function._getIncludedAssociation (C:\Document\Backpot\back\node_modules\sequelize\lib\model.js:732:13)<br> &nbsp; &nbsp;at Function._validateIncludedElement (C:\Document\Backpot\back\node_modules\sequelize\lib\model.js:619:53)<br> &nbsp; &nbsp;at C:\Document\Backpot\back\node_modules\sequelize\lib\model.js:516:37<br> &nbsp; &nbsp;at Array.map (&lt;anonymous&gt;)<br> &nbsp; &nbsp;at Function._validateIncludedElements (C:\Document\Backpot\back\node_modules\sequelize\lib\model.js:511:39)<br> &nbsp; &nbsp;at C:\Document\Backpot\back\node_modules\sequelize\lib\model.js:1726:14<br> &nbsp; &nbsp;at tryCatcher (C:\Document\Backpot\back\node_modules\bluebird\js\release\util.js:16:23)<br> &nbsp; &nbsp;at Promise._settlePromiseFromHandler (C:\Document\Backpot\back\node_modules\bluebird\js\release\promise.js:547:31)<br> &nbsp; &nbsp;at Promise._settlePromise (C:\Document\Backpot\back\node_modules\bluebird\js\release\promise.js:604:18)<br> &nbsp; &nbsp;at Promise._settlePromise0 (C:\Document\Backpot\back\node_modules\bluebird\js\release\promise.js:649:10)<br> &nbsp; &nbsp;at Promise._settlePromises (C:\Document\Backpot\back\node_modules\bluebird\js\release\promise.js:729:18)<br> &nbsp; &nbsp;at _drainQueueStep (C:\Document\Backpot\back\node_modules\bluebird\js\release\async.js:93:12)<br> &nbsp; &nbsp;at _drainQueue (C:\Document\Backpot\back\node_modules\bluebird\js\release\async.js:86:9)<br> &nbsp; &nbsp;at Async._drainQueues (C:\Document\Backpot\back\node_modules\bluebird\js\release\async.js:102:5)<br> &nbsp; &nbsp;at Immediate.Async.drainQueues [as _onImmediate] (C:\Document\Backpot\back\node_modules\bluebird\js\release\async.js:15:14)<br> &nbsp; &nbsp;at processImmediate (internal/timers.js:439:21)</pre>
        const fullUser = await db.User.findOne({
          where: { id: user.id },
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
              include: [{ model: db.Genre, as: 'BookGenre', attributes: ['name'] }],
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
        return res.json(fullUser);
      } catch (e) {
        console.log(e);
        return next(e);
      }
    });
  })(req, res, next);
});
// 로그아웃
router.post('/logout', isLoggedIn, (req, res, next) => {
  try {
    req.logout();
    req.session.destroy();
    return res.send('Logout 되었습니다.');
  } catch (e) {
    console.log(e);
    return next(e);
  }
});
// 회원가입
router.post('/signup', async (req, res, next) => {
  try {
    console.log('signUp', req.body);
    const existUser = await db.User.findOne({ where: { userId: req.body.userId } });
    if (existUser) {
      return res.status(403).send('이미 사용중인 아이디입니다.');
    }
    const hashPassword = await bcrypt.hash(req.body.password, 12);
    const newUser = await db.User.create({
      userId: req.body.userId,
      password: hashPassword,
      nickname: req.body.nickname,
    });
    return res.status(200).json(newUser);
  } catch (e) {
    console.log(e);
    return next(e);
  }
});
// 중복확인
router.post('/check', async (req, res, next) => {
  console.log(req.body);
  try {
    if (req.body.type === 'userId') {
      const existUserId = await db.User.findOne({ where: { userId: req.body.userId } });
      if (existUserId) {
        return res.send(false);
      }
      return res.send(true);
    } else if (req.body.type === 'nickname') {
      const existNickname = await db.User.findOne({ where: { nickname: req.body.nickname } });
      if (existNickname) {
        return res.send(false);
      }
      return res.send(true);
    }
    return res.status(403).send('잘못된 요청입니다.');
  } catch (e) {
    console.log(e);
    return next(e);
  }
  // const existUser = await db.User.findOne({ where: { userId: req.body.userId } });
  // if (existUser) {
  //   return res.status(403).send('이미 사용중인 아이디입니다.');
  // }
});
module.exports = router;
