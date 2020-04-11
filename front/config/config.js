const backUrl =
  process.env.NODE_ENV === 'production'
    ? process.env.BACK_URL
    : 'http://loaclhost:5000';
const frontUrl =
  process.env.NODE_ENV === 'production'
    ? process.env.FRONT_URL
    : 'http://localhost:8080';

export { backUrl, frontUrl };
