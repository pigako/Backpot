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
  DELETE_COMMENT_REQUEST,
  DELETE_COMMENT_SUCCESS,
  DELETE_COMMENT_FAILURE,
  DELETE_BOARD_REQUEST,
  DELETE_BOARD_FAILURE,
  DELETE_BOARD_SUCCESS,
  UPDATE_BOARD_REQUEST,
  UPDATE_BOARD_SUCCESS,
  UPDATE_BOARD_FAILURE,
  ADD_COMMENT_REQUEST,
  ADD_COMMENT_FAILURE,
  ADD_COMMENT_SUCCESS,
  UPDATE_COMMENT_REQUEST,
  UPDATE_COMMENT_FAILURE,
  UPDATE_COMMENT_SUCCESS,
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
// 게시글 수정
function* watchUpdateBoard() {
  yield takeLatest(UPDATE_BOARD_REQUEST, function* updateBoard(action) {
    try {
      const result = yield call(updateBoardData => {
        return axios.patch(`/board`, updateBoardData, {
          withCredentials: true,
        });
      }, action.data);
      yield put({
        type: UPDATE_BOARD_SUCCESS,
        data: result.data,
      });
    } catch (e) {
      console.log(e);
      yield put({
        type: UPDATE_BOARD_FAILURE,
        error: e,
      });
    }
  });
}
// 게시글 삭제
function* watchDeleteBoard() {
  yield takeLatest(DELETE_BOARD_REQUEST, function* deleteBoard(action) {
    try {
      const result = yield call(boardId => {
        return axios.delete(`/board/${boardId}`, {
          withCredentials: true,
        });
      }, action.boardId);
      yield put({
        type: DELETE_BOARD_SUCCESS,
        data: result.data,
      });
    } catch (e) {
      console.log(e);
      yield put({
        type: DELETE_BOARD_FAILURE,
        error: e,
      });
    }
  });
}
// 댓글 추가
function* watchAddComment() {
  yield takeLatest(ADD_COMMENT_REQUEST, function* addComment(action) {
    try {
      const result = yield call(boardData => {
        return axios.post(`/board/comment`, boardData, {
          withCredentials: true,
        });
      }, action.data);
      yield put({
        type: ADD_COMMENT_SUCCESS,
        data: result.data,
      });
    } catch (e) {
      console.log(e);
      yield put({
        type: ADD_COMMENT_FAILURE,
        error: e,
      });
    }
  });
}
// 댓글 수정
function* watchUpdateComment() {
  yield takeLatest(UPDATE_COMMENT_REQUEST, function* updateComment(action) {
    try {
      const result = yield call(updateCommentData => {
        return axios.patch(`/board/comment`, updateCommentData, {
          withCredentials: true,
        });
      }, action.data);
      yield put({
        type: UPDATE_COMMENT_SUCCESS,
        data: result.data,
      });
    } catch (e) {
      console.log(e);
      yield put({
        type: UPDATE_COMMENT_FAILURE,
        error: e,
      });
    }
  });
}
// 댓글 삭제
function* watchDeleteComment() {
  yield takeLatest(DELETE_COMMENT_REQUEST, function* deleteBoard(action) {
    try {
      const result = yield call(commentId => {
        return axios.delete(`/board/comment/${commentId}`, {
          withCredentials: true,
        });
      }, action.commentId);
      yield put({
        type: DELETE_COMMENT_SUCCESS,
        data: result.data,
      });
    } catch (e) {
      console.log(e);
      yield put({
        type: DELETE_COMMENT_FAILURE,
        error: e,
      });
    }
  });
}

export default function* bookSaga() {
  yield all([
    fork(watchLoadBords),
    fork(watchLoadBoard),
    fork(watchAddBoard),
    fork(watchUpdateBoard),
    fork(watchDeleteBoard),
    fork(watchAddComment),
    fork(watchUpdateComment),
    fork(watchDeleteComment),
  ]);
}
