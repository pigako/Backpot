import { all, call, fork, throttle, takeLatest, put } from 'redux-saga/effects';
import axios from 'axios';
import {
  LOAD_BOARDS_REQUEST,
  LOAD_BOARDS_SUCCESS,
  LOAD_BOARDS_FAILURE,
  LOAD_BOARD_REQUEST,
  LOAD_BOARD_SUCCESS,
  LOAD_BOARD_FAILURE,
  ADD_BOARD_REQUEST,
  ADD_BOARD_SUCCESS,
  ADD_BOARD_FAILURE,
} from '../reducers/board';

// 전체 게시글 가져오기
function* watchLoadBords() {
  yield throttle(1000, LOAD_BOARDS_REQUEST, function* loadBoards(action) {
    try {
      const result = yield call((lastId = 0, limit = 30) => {
        return axios.get(`/boards?lastId=${lastId}&limit=${limit}`);
      }, action.lastId);
      yield put({
        type: LOAD_BOARDS_SUCCESS,
        data: result.data,
      });
    } catch (e) {
      console.log(e);
      yield put({
        type: LOAD_BOARDS_FAILURE,
        error: e,
      });
    }
  });
}
// 게시글 가져오기
function* watchLoadBoard() {
  yield takeLatest(LOAD_BOARD_REQUEST, function* loadBoard(action) {
    try {
      const result = yield call(boardId => {
        return axios.get(`/board/${boardId}`);
      }, action.boardId);
      yield put({
        type: LOAD_BOARD_SUCCESS,
        data: result.data,
      });
    } catch (e) {
      console.log(e);
      put({
        type: LOAD_BOARD_FAILURE,
        error: e,
      });
    }
  });
}
// 게시글 추가하기
function* watchAddBoard() {
  yield takeLatest(ADD_BOARD_REQUEST, function* addBoard(action) {
    try {
      const result = yield call(boardData => {
        return axios.post(`/board`, boardData, {
          withCredentials: true,
        });
      }, action.data);
      yield put({
        type: ADD_BOARD_SUCCESS,
        data: result.data,
      });
    } catch (e) {
      console.log(e);
      yield put({
        type: ADD_BOARD_FAILURE,
        error: e,
      });
    }
  });
}

export default function* bookSaga() {
  yield all([fork(watchLoadBords), fork(watchAddBoard), fork(watchLoadBoard)]);
}
