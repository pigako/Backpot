const express = require('express');
const db = require('../models');
const router = express.Router();
const { isLoggedIn } = require('./middleware');

// 글 조회
router.get('/:id', async (req, res, next) => {
  try {
    const episode = await db.Episode.findOne({
      where: {
        id: parseInt(req.params.id, 10),
      },
      include: [
        {
          model: db.Book,
          attributes: ['id', 'name'],
          include: [
            {
              model: db.User,
              attributes: ['id', 'nickname'],
            },
          ],
        },
        {
          model: db.EpisodeComment,
          include: [
            {
              model: db.User,
              attributes: ['id', 'nickname'],
            },
          ],
        },
      ],
    });
    if (!episode) {
      return res.status(404).send('존재하지 않는 글입니다.');
    }
    const jsonEpisode = episode.toJSON();
    await db.Episode.increment(
      {
        views: 1,
      },
      {
        where: { id: parseInt(episode.id, 10) },
      },
    );
    jsonEpisode.prev = await db.Episode.findOne({
      where: {
        id: {
          [db.Sequelize.Op.lt]: parseInt(jsonEpisode.id, 10),
        },
        isNotice: { $not: 1 },
        BookId: jsonEpisode.Book.id,
      },
      attributes: ['id', 'title'],
      limit: 1,
      order: [['id', 'DESC']],
      required: false,
    });
    jsonEpisode.next = await db.Episode.findOne({
      where: {
        id: {
          [db.Sequelize.Op.gt]: parseInt(jsonEpisode.id, 10),
        },
        isNotice: { $not: 1 },
        BookId: jsonEpisode.Book.id,
      },
      attributes: ['id', 'title'],
      limit: 1,
      order: [['id', 'ASC']],
      required: false,
    });
    jsonEpisode.views += 1;
    res.json(jsonEpisode);
  } catch (e) {
    console.log(e);
    return next(e);
  }
});
// 글 작성
router.post('/', isLoggedIn, async (req, res, next) => {
  try {
    const book = await db.Book.findOne({
      where: { id: parseInt(req.body.bookId, 10) },
    });
    if (!book) {
      return res.status(404).send('존재하지 않는 책입니다.');
    }
    if (book.UserId !== req.user.id) {
      return res.status(404).send('작성 권한이 없는 책입니다.');
    }
    const newEpisode = await db.Episode.create({
      title: req.body.title,
      content: req.body.content,
      isNotice: req.body.notice,
      BookId: parseInt(req.body.bookId, 10),
    });
    await book.update({
      recentDay: db.sequelize.literal('CURRENT_TIMESTAMP'),
    });
    return res.json(newEpisode);
  } catch (e) {
    console.log(e);
    return next(e);
  }
});
// 글 수정
router.patch('/:id', isLoggedIn, async (req, res, next) => {
  try {
    const episode = await db.Episode.findOne({
      where: {
        id: parseInt(req.params.id, 10),
      },
    });
    if (!episode) {
      return res.status(404).send('수정할수 없는 글입니다.');
    }
    await episode.update({
      title: req.body.title,
      content: req.body.content,
      isNotice: req.body.notice,
    });
    return res.send('');
  } catch (e) {
    console.log(e);
    return next(e);
  }
});
router.delete('/:id', isLoggedIn, async (req, res, next) => {
  try {
    const episode = await db.Episode.findOne({
      where: { id: parseInt(req.params.id, 10) },
    });
    if (!episode) {
      return res.status(404).send('존재하지 않는 글입니다.');
    }
    await episode.destroy();
    return res.send('');
  } catch (e) {
    console.log(e);
    return next(e);
  }
});
// 추천
router.post('/:id', isLoggedIn, async (req, res, next) => {
  try {
    const episode = await db.Episode.findOne({
      where: { id: parseInt(req.params.id, 10) },
    });
    if (!episode) {
      return res.status(404).send('존재하지 않는 글입니다.');
    }
    await db.Episode.increment(
      {
        recommends: 1,
      },
      {
        where: { id: parseInt(req.params.id, 10) },
      },
    );
    const recommendCount = episode.recommends + 1;
    return res.send(recommendCount.toString());
  } catch (e) {
    console.log(e);
    return next(e);
  }
});

module.exports = router;
