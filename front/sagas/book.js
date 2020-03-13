import { all, call, fork, throttle, takeLatest, put } from 'redux-saga/effects';
import axios from 'axios';
import {
  LOAD_BOOKS_REQUEST,
  LOAD_BOOKS_SUCCESS,
  LOAD_BOOKS_FAILURE,
} from '../reducers/book';

// 전체 연재글 가져오기
function* watchLoadBooks() {
  yield throttle(1000, LOAD_BOOKS_REQUEST, function* loadBooks(action) {
    try {
      const result = yield call((lastId = 0, limit = 20) => {
        return axios.get(`/books?lastId=${lastId}&limit=${limit}`);
      }, action.lastId);
      yield put({
        type: LOAD_BOARDS_SUCCESS,
        data: result.data,
      });
    } catch (e) {
      console.log(e);
      yield put({
        type: LOAD_BOOKS_FAILURE,
        error: e,
      });
    }
  });
}

export default function* bookSaga() {
  yield all([fork(watchLoadBooks)]);
}
