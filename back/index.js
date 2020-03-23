const express = require('express');
const morgan = require('morgan'); // 로그
const cors = require('cors'); // CORS
const cookieParser = require('cookie-parser');
const expressSession = require('express-session');
const dotenv = require('dotenv');
const passport = require('passport');

const passportConfig = require('./passport');
const db = require('./models'); // DB model
const userAPIRouter = require('./routes/user'); // Router 등록
const boardAPIRouter = require('./routes/board');
const boardsAPIRouter = require('./routes/boards');
const bookAPIRouter = require('./routes/book');
const booksAPIRouter = require('./routes/books');
const genresAPIRouter = require('./routes/genres');
const episodeAPIRouter = require('./routes/episode');

dotenv.config(); // dotenv 실행
const app = express();
db.sequelize.sync(); // 시퀄라이즈 실행
passportConfig(); // passport start

app.use(morgan('dev')); // Log
app.use('/', express.static('uploads')); // Image 파일 다른서버에서 가져갈수 있도록 등록
app.use(express.json()); // JSON 형식 본문 처리
app.use(express.urlencoded({ extended: true })); // form으로 넘어온 Data 처리
app.use(
  cors({
    origin: true,
    credentials: true, // 쿠키 교환
  }),
);
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(
  expressSession({
    resave: false, // 매번 세션 강제저장 false
    saveUninitialized: false, // 빈 값도 저장 false
    secret: process.env.COOKIE_SECRET, // 암호화 문자열
    cookie: {
      httpOnly: true, //자바스크립트로 쿠키 접근 x
      secure: false, // https 설정
    },
    name: 'ADSFOPK',
  }),
);
app.use(passport.initialize()); // 로그인 미들웨어
app.use(passport.session()); // express session

app.use('/api/user', userAPIRouter);
app.use('/api/board', boardAPIRouter);
app.use('/api/boards', boardsAPIRouter);
app.use('/api/book', bookAPIRouter);
app.use('/api/books', booksAPIRouter);
app.use('/api/genres', genresAPIRouter);
app.use('/api/episode', episodeAPIRouter);

// 서버시작
app.listen(5000, () => {
  console.log(`server is running on http://localhost:5000`);
});
