import { all, call, fork, throttle, takeLatest, put } from 'redux-saga/effects';
import axios from 'axios';
import {
  LOAD_BOOKS_REQUEST,
  LOAD_BOOKS_SUCCESS,
  LOAD_BOOKS_FAILURE,
  LOAD_BOOK_REQUEST,
  LOAD_BOOK_SUCCESS,
  LOAD_BOOK_FAILURE,
  ADD_LIKEBOOK_REQUEST,
  ADD_LIKEBOOK_SUCCESS,
  ADD_LIKEBOOK_FAILURE,
  REMOVE_LIKEBOOK_REQUEST,
  REMOVE_LIKEBOOK_SUCCESS,
  REMOVE_LIKEBOOK_FAILURE,
} from '../reducers/book';
import { ADD_LIKEBOOKLIST, REMOVE_LIKEBOOKLIST } from '../reducers/user';

// 전체 연재글 가져오기
function* watchLoadBooks() {
  yield throttle(1000, LOAD_BOOKS_REQUEST, function* loadBooks(action) {
    try {
      const result = yield call((lastId = 0, limit = 20) => {
        return axios.get(`/books?lastId=${lastId}&limit=${limit}`);
      }, action.lastId);
      yield put({
        type: LOAD_BOOKS_SUCCESS,
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
// 게시글 하나 조회
function* watchLoadBook() {
  yield takeLatest(LOAD_BOOK_REQUEST, function* loadBook(action) {
    try {
      const result = yield call(bookId => {
        return axios.get(`/book/${bookId}`);
      }, action.id);
      yield put({
        type: LOAD_BOOK_SUCCESS,
        data: result.data,
      });
    } catch (e) {
      console.log(e);
      put({
        type: LOAD_BOOK_FAILURE,
        error: e,
      });
    }
  });
}
// 선호작 추가
function* watchAddLikebook() {
  yield takeLatest(ADD_LIKEBOOK_REQUEST, function* addLikebook(action) {
    try {
      const result = yield call(bookId => {
        return axios.post(
          `/book/${bookId}/like`,
          {},
          {
            withCredentials: true,
          },
        );
      }, action.bookId);
      yield put({
        type: ADD_LIKEBOOK_SUCCESS,
        data: result.data,
      });
      yield put({
        type: ADD_LIKEBOOKLIST,
        data: {
          id: result.data,
          ...action.data,
        },
      });
    } catch (e) {
      console.log(e);
      yield put({
        type: ADD_LIKEBOOK_FAILURE,
        error: e,
      });
    }
  });
}
// 선호작 해제
function* watchRemoveLikebook() {
  yield takeLatest(REMOVE_LIKEBOOK_REQUEST, function* removeLikebook(action) {
    try {
      const result = yield call(bookId => {
        return axios.delete(`/book/${bookId}/unlike`, {
          withCredentials: true,
        });
      }, action.bookId);
      yield put({
        type: REMOVE_LIKEBOOK_SUCCESS,
        data: result.data,
      });
      yield put({
        type: REMOVE_LIKEBOOKLIST,
        data: result.data,
      });
    } catch (e) {
      console.log(e);
      put({
        type: REMOVE_LIKEBOOK_FAILURE,
        error: e,
      });
    }
  });
}
export default function* bookSaga() {
  yield all([
    fork(watchLoadBooks),
    fork(watchLoadBook),
    fork(watchAddLikebook),
    fork(watchRemoveLikebook),
  ]);
}
