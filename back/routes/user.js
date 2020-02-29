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
        const fullUser = await db.User.findOne({
          where: { id: user.id },
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
