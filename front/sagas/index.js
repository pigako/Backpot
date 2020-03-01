import { all, call } from 'redux-saga/effects';
import axios from 'axios';
import user from './user';
import book from './book';

axios.defaults.baseURL = `http://localhost:5000/api`;

export default function* rootSaga() {
  yield all([call(user), call(book)]);
}
