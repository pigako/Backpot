const express = require('express');
const multer = require('multer');
const path = require('path');
const db = require('../models');
const { isLoggedIn } = require('./middleware');

const router = express.Router();

// 멀터 설정
const upload = multer({
  storage: multer.diskStorage({
    destination(req, file, cb) {
      cb(null, 'uploads');
    },
    filename(req, file, cb) {
      const ext = path.extname(file.originalname);
      const basename = path.basename(file.originalname, ext);
      cb(null, basename + new Date().valueOf() + ext);
    },
    limits: { fileSize: 20 * 1024 * 1024 },
  }),
});
// 책 정보 가져오기
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
          attributes: ['id', 'name'],
        },
      ],
    });
    return res.json(book);
  } catch (e) {
    console.log(e);
    return next(e);
  }
});
// 책 만들기
router.post('/', isLoggedIn, async (req, res, next) => {
  try {
    const newBook = await db.Book.create({
      name: req.body.name,
      thumbnail: req.body.thumbnail,
      serialDay: req.body.serialDay,
      summary: req.body.summary,
      UserId: req.user.id,
    });
    await Promise.all(
      req.body.genre.map(g => {
        newBook.addBookGenre(g);
      }),
    );
    return res.json(newBook);
  } catch (e) {
    console.log(e);
    return next(e);
  }
});
// 선호작 등록
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
// 선호작 취소
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
// 썸네일 이미지 업로드
router.post('/thumbnail', isLoggedIn, upload.single('image'), (req, res, next) => {
  try {
    console.log('req.file', req.file);
    res.json(req.file.filename);
  } catch (e) {
    console.log(e);
    return next(e);
  }
});

module.exports = router;
