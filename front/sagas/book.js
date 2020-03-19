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
  UPLOAD_IMAGE_REQEUST,
  UPLOAD_IMAGE_SUCCESS,
  UPLOAD_IMAGE_FAILURE,
  ADD_BOOK_REQEUST,
  ADD_BOOK_FAILURE,
  ADD_BOOK_SUCCESS,
  LOAD_GENRE_REQUEST,
  LOAD_GENRE_SUCCESS,
  LOAD_GENRE_FAILURE,
  UPDATE_BOOK_REQUEST,
  UPDATE_BOOK_SUCCESS,
  UPDATE_BOOK_FAILURE,
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

// 썸네일 이미지 업로드
function* watchUploadImage() {
  yield takeLatest(UPLOAD_IMAGE_REQEUST, function* uploadImage(action) {
    try {
      const result = yield call(formData => {
        return axios.post('/book/thumbnail', formData, {
          withCredentials: true,
        });
      }, action.data);
      yield put({
        type: UPLOAD_IMAGE_SUCCESS,
        data: result.data,
      });
    } catch (e) {
      console.log(e);
      yield put({
        type: UPLOAD_IMAGE_FAILURE,
        error: e,
      });
    }
  });
}
// 작품 만들기
function* watchAddBook() {
  yield takeLatest(ADD_BOOK_REQEUST, function* addBook(action) {
    try {
      const result = yield call(bookData => {
        return axios.post('/book', bookData, {
          withCredentials: true,
        });
      }, action.data);
      yield put({
        type: ADD_BOOK_SUCCESS,
        data: result.data,
      });
    } catch (e) {
      console.log(e);
      yield put({
        type: ADD_BOOK_FAILURE,
        error: e,
      });
    }
  });
}
// 장르 조회
function* watchLoadGenre() {
  yield takeLatest(LOAD_GENRE_REQUEST, function* loadGenre() {
    try {
      const result = yield call(() => {
        return axios.get('/genres');
      });
      yield put({
        type: LOAD_GENRE_SUCCESS,
        data: result.data,
      });
    } catch (e) {
      console.log(e);
      yield put({
        type: LOAD_GENRE_FAILURE,
        error: e,
      });
    }
  });
}
// 작품 수정
function* watchUpdateBook() {
  yield takeLatest(UPDATE_BOOK_REQUEST, function* updateBook(action) {
    try {
      const result = yield call(bookData => {
        return axios.patch(`/book`, bookData, {
          withCredentials: true,
        });
      }, action.data);
      yield put({
        type: UPDATE_BOOK_SUCCESS,
        data: result.data,
      });
    } catch (e) {
      console.log(e);
      yield put({
        type: UPDATE_BOOK_FAILURE,
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
    fork(watchUploadImage),
    fork(watchAddBook),
    fork(watchLoadGenre),
    fork(watchUpdateBook),
  ]);
}
