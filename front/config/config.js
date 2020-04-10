const backUrl =
  process.env.NODE_ENV === 'production' ? '' : 'http://loaclhost:5000';
const frontUrl =
  process.env.NODE_ENV === 'production' ? '' : 'http://localhost:8080';

export { backUrl, frontUrl };
