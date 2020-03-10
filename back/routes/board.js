const express = require('express');
const db = require('../models');
const router = express.Router();
const { isLoggedIn } = require('./middleware');

// 게시글 조회
router.get('/:id', async (req, res, next) => {
  try {
    const board = await db.Board.findOne({
      where: {
        id: req.params.id,
      },
      include: [
        {
          model: db.User,
          attributes: ['id', 'nickname'],
        },
        {
          model: db.Comment,
          attributes: ['id', 'content', 'createdAt'],
          include: [
            {
              model: db.User,
              attributes: ['id', 'nickname'],
            },
          ],
        },
      ],
      order: [[db.Comment, 'id', 'ASC']],
    });
    return res.json(board);
  } catch (e) {
    console.log(e);
    return next(e);
  }
});
// 게시글 작성
router.post('/', isLoggedIn, async (req, res, next) => {
  try {
    const newBoard = await db.Board.create({
      title: req.body.title,
      content: req.body.text,
      UserId: req.user.id,
    });

    const fullBoard = await db.Board.findOne({
      where: {
        id: newBoard.id,
      },
      include: [
        {
          model: db.User,
          attributes: ['id', 'nickname'],
        },
      ],
    });

    return res.json(fullBoard);
  } catch (e) {
    console.log(e);
    return next(e);
  }
});

// 게시글 수정
router.patch('/', isLoggedIn, async (req, res, next) => {
  try {
    const board = await db.Board.findOne({ where: { id: parseInt(req.body.id, 10) } });
    if (!board) {
      return res.status(404).send('게시글이 존재하지 않습니다.');
    }
    if (board.UserId !== req.user.id) {
      return res.status(404).send('수정할 수 없는 게시글입니다.');
    }
    await db.Board.update(
      {
        content: req.body.content,
      },
      {
        where: { id: parseInt(req.body.id, 10) },
      },
    );
    return res.send(req.body.content);
  } catch (e) {
    console.log(e);
    return next(e);
  }
});
// 게시글 삭제
router.delete('/:id', isLoggedIn, async (req, res, next) => {
  try {
    const board = await db.Board.findOne({ where: { id: parseInt(req.params.id, 10) } });
    if (!board) {
      return res.status(404).send('게시글이 존재하지 않습니다.');
    }
    if (board.UserId !== req.user.id) {
      return res.status(404).send('지울수 없는 게시글입니다.');
    }
    await db.Board.destroy({ where: { id: parseInt(req.params.id, 10) } });
    res.send(req.params.id);
  } catch (e) {
    console.log(e);
    return next(e);
  }
});
// 댓글 작성
router.post('/comment', isLoggedIn, async (req, res, next) => {
  try {
    const newComment = await db.Comment.create({
      BoardId: parseInt(req.body.boardId, 10),
      UserId: req.user.id,
      content: req.body.content,
    });

    const fullComment = await db.Comment.findOne({
      where: { id: newComment.id },
      attributes: ['id', 'content', 'createdAt'],
      include: [
        {
          model: db.User,
          attributes: ['id', 'nickname'],
        },
      ],
    });

    return res.json(fullComment);
  } catch (e) {
    console.log(e);
    return next(e);
  }
});
// 댓글 수정
router.patch('/comment', isLoggedIn, async (req, res, next) => {
  try {
    const comment = db.Comment.findOne({ where: { id: parseInt(req.body.id, 10) } });
    if (!comment) {
      return res.status(404).send('댓글이 존재하지 않습니다.');
    }
    await db.Comment.update(
      {
        content: req.body.content,
      },
      {
        where: { id: parseInt(req.body.id, 10) },
      },
    );
    return res.json({ id: parseInt(req.body.id, 10), content: req.body.content });
  } catch (e) {
    console.log(e);
    return next(e);
  }
});
// 댓글 삭제
router.delete('/comment/:id', isLoggedIn, async (req, res, next) => {
  try {
    const comment = await db.Comment.findOne({ where: { id: parseInt(req.params.id, 10) } });
    if (!comment) {
      return res.status(404).send('댓글이 존재하지 않습니다.');
    }
    await db.Comment.destroy({ where: { id: parseInt(req.params.id, 10) } });
    res.send(req.params.id);
  } catch (e) {
    console.log(e);
    return next(e);
  }
});

module.exports = router;
