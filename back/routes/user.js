const express = require('express');
const bcrypt = require('bcrypt');
const passport = require('passport');
const db = require('../models');
const router = express.Router();

// 내정보 가져오기
router.get('/', (req, res, next) => {
  try {
    return res.send('user');
  } catch (e) {
    console.log(e);
    return next(e);
  }
});
// 로그인
router.post('/login', (req, res, next) => {
  try {
    passport.authenticate('local', (err, user, info) => {
      if (err) {
        console.log(err);
        return next(e);
      }
      if (info) {
        return req.status(401).send(info.reason);
      }
      return req.login(user, async loginErr => {
        try {
          if (loginErr) {
            console.log(loginErr);
            return next(loginErr);
          }
          const fullUser = await db.User.findOne({
            where: { id: user.id },
            include: [{}],
            attributes: ['id', 'userId', 'nickname'],
          });
          return res.json(fullUser);
        } catch (e) {}
      });
    });
  } catch (e) {
    console.log(e);
    return next(e);
  }
});
// 로그아웃
router.post('/logout', (req, res, next) => {
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
    const existUser = await db.User.findOne({ where: { id: req.body.userId } });
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

module.exports = router;
