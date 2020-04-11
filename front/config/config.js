const backUrl =
  process.env.NODE_ENV === 'production'
    ? 'http://3.12.86.179'
    : 'http://loaclhost:5000';
const frontUrl =
  process.env.NODE_ENV === 'production'
    ? 'http://3.12.127.74'
    : 'http://localhost:8080';

export { backUrl, frontUrl };
