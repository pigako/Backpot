const express = require('express');
const db = require('../models');
const router = express.Router();

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
        id: jsonEpisode.id - 1,
        BookId: jsonEpisode.Book.id,
      },
      attributes: ['id', 'title'],
    });
    jsonEpisode.next = await db.Episode.findOne({
      where: {
        id: jsonEpisode.id + 1,
        BookId: jsonEpisode.Book.id,
      },
      attributes: ['id', 'title'],
    });
    jsonEpisode.views += 1;
    res.json(jsonEpisode);
  } catch (e) {
    console.log(e);
    return next(e);
  }
});

module.exports = router;
