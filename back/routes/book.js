const express = require('express');
const multer = require('multer');
const path = require('path');
const AWS = require('aws-sdk');
const multerS3 = require('multer-s3');

const db = require('../models');
const { isLoggedIn } = require('./middleware');

const router = express.Router();

AWS.config.update({
  // 아마존 S3 설정
  region: 'ap-northeast-2', //서울
  accessKeyId: process.env.S3_ACCESS_KET_ID,
  secretAccessKeyt: process.env.S3_SECRET_ACCESS_KEY,
  credentials: new aws.SharedIniFileCredentials(),
});

const upload = multer({
  // S3 멀터 설정
  storage: multerS3({
    s3: new AWS.S3(),
    bucket: 'backpot',
    key(req, file, cb) {
      cb(null, `original/${+new Date()}${path.basename(file.originalname)}`);
    },
  }),
  limits: { fileSize: 20 * 1024 * 1024 },
});

// 멀터 설정
// const upload = multer({
//   storage: multer.diskStorage({
//     destination(req, file, cb) {
//       cb(null, 'uploads');
//     },
//     filename(req, file, cb) {
//       const ext = path.extname(file.originalname);
//       const basename = path.basename(file.originalname, ext);
//       cb(null, basename + new Date().valueOf() + ext);
//     },
//     limits: { fileSize: 20 * 1024 * 1024 },
//   }),
// });
// 책 정보 가져오기
router.get('/:id', async (req, res, next) => {
  try {
    const book = await db.Book.findOne({
      where: {
        id: parseInt(req.params.id, 10),
        flag: { $not: 3 },
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
      req.body.genre.map((g) => {
        newBook.addBookGenre(g);
      }),
    );
    return res.json(newBook);
  } catch (e) {
    console.log(e);
    return next(e);
  }
});
// 책 수정하기
router.patch('/', isLoggedIn, async (req, res, next) => {
  try {
    const book = await db.Book.findOne({
      where: { id: parseInt(req.body.id, 10), flag: { $not: 3 } },
      include: [
        {
          model: db.Genre,
          as: 'BookGenre',
        },
      ],
    });
    if (!book) {
      return res.status(404).send('존재하지 않는 작품입니다.');
    }
    if (book.UserId !== req.user.id) {
      return res.status(404).send('수정 권한이 없는 작품입니다.');
    }
    await db.Book.update(
      {
        name: req.body.name,
        thumbnail: req.body.thumbnail,
        serialDay: req.body.serialDay,
        summary: req.body.summary,
      },
      {
        where: { id: parseInt(req.body.id, 10) },
      },
    );
    await Promise.all(
      book.BookGenre.map((g) => {
        book.removeBookGenre(g.id);
      }),
    );
    await Promise.all(
      req.body.genre.map((g) => {
        book.addBookGenre(g);
      }),
    );
    return res.json(parseInt(req.body.id, 10));
  } catch (e) {
    console.log(e);
    return next(e);
  }
});
// 책 삭제
router.delete('/:id', isLoggedIn, async (req, res, next) => {
  try {
    await db.Book.update(
      {
        flag: 3,
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
    // res.json(req.file.filename);
    res.json(req.file.location);
  } catch (e) {
    console.log(e);
    return next(e);
  }
});

module.exports = router;
