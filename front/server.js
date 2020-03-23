const express = require('express');
const next = require('next');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const expressSession = require('express-session');
const dotenv = require('dotenv');

const dev = process.env.NODE_ENV !== 'production'; // 개발모드

const app = next({ dev });
const handle = app.getRequestHandler(); // get 처리기
dotenv.config();

app.prepare().then(() => {
  const server = express();

  server.use(morgan('dev'));
  server.use(express.json());
  server.use(express.urlencoded({ extended: true }));
  server.use(cookieParser(process.env.COOKIE_SECRET));
  server.use(
    expressSession({
      resave: false,
      saveUninitialized: false,
      secret: process.env.COOKIE_SECRET,
      cookie: {
        httpOnly: true,
        secure: false,
      },
    }),
  );

  server.get('/book/:bookid', (req, res) => {
    return app.render(req, res, '/book', { bookid: req.params.bookid });
  });

  server.get('/updatebook/:bookid', (req, res) => {
    return app.render(req, res, '/updatebook', { bookid: req.params.bookid });
  });

  server.get('/episode/:id', (req, res) => {
    return app.render(req, res, '/episode', { id: req.params.id });
  });

  server.get('/librery/:id', (req, res) => {
    return app.render(req, res, '/librery', { id: req.params.id });
  });

  server.get('/profile/:id', (req, res) => {
    return app.render(req, res, '/profile', { id: req.params.id });
  });

  server.get('/detailboard/:id', (req, res) => {
    return app.render(req, res, '/detailboard', { id: req.params.id });
  });

  server.get('*', (req, res) => {
    return handle(req, res);
  });

  server.listen(8080, err => {
    console.log('next-express running on port 8080');
  });
});
