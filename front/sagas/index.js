import { all, call } from 'redux-saga/effects';
import axios from 'axios';
import user from './user';
import book from './book';
import board from './board';
import episode from './episode';
import { backUrl } from '../config/config';

axios.defaults.baseURL = `${backUrl}/api`;

export default function* rootSaga() {
  yield all([call(user), call(book), call(board), call(episode)]);
}
