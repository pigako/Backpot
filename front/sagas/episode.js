import { all, call, fork, throttle, takeLatest, put } from 'redux-saga/effects';
import axios from 'axios';
import {
  LOAD_EPISODE_REQUEST,
  LOAD_EPISODE_SUCCESS,
  LOAD_EPISODE_FAILURE,
  ADD_EPISODE_REQUEST,
  ADD_EPISODE_SUCCESS,
  ADD_EPISODE_FAILURE,
  ADD_RECOMMEND_REQUEST,
  ADD_RECOMMEND_SUCCESS,
  ADD_RECOMMEND_FAILURE,
  UPDATE_EPISODE_REQUEST,
  UPDATE_EPISODE_SUCCESS,
  UPDATE_EPISODE_FAILURE,
  DELETE_EPISODE_REQUEST,
  DELETE_EPISODE_SUCCESS,
  DELETE_EPISODE_FAILURE,
  ADD_EPISODE_COMMENT_REQUEST,
  ADD_EPISODE_COMMENT_SUCCESS,
  ADD_EPISODE_COMMENT_FAILURE,
  UPDATE_EPISODE_COMMENT_REQUEST,
  UPDATE_EPISODE_COMMENT_SUCCESS,
  UPDATE_EPISODE_COMMENT_FAILURE,
  DELETE_EPISODE_COMMENT_REQUEST,
  DELETE_EPISODE_COMMENT_SUCCESS,
  DELETE_EPISODE_COMMENT_FAILURE,
} from '../reducers/episode';

// 글 조회
function* watchLoadEpisode() {
  yield takeLatest(LOAD_EPISODE_REQUEST, function*(action) {
    try {
      const result = yield call(episodeId => {
        return axios.get(`/episode/${episodeId}`);
      }, action.id);
      yield put({
        type: LOAD_EPISODE_SUCCESS,
        data: result.data,
      });
    } catch (e) {
      console.log(e);
      yield put({
        type: LOAD_EPISODE_FAILURE,
        error: e,
      });
    }
  });
}
// 글 작성
function* watchAddEpisode() {
  yield takeLatest(ADD_EPISODE_REQUEST, function*(action) {
    try {
      const result = yield call(episodeData => {
        return axios.post(`/episode`, episodeData, {
          withCredentials: true,
        });
      }, action.data);
      yield put({
        type: ADD_EPISODE_SUCCESS,
        data: result.data,
      });
    } catch (e) {
      console.log(e);
      yield put({
        type: ADD_EPISODE_FAILURE,
        error: e,
      });
    }
  });
}
// 추천
function* watchAddRecommend() {
  yield takeLatest(ADD_RECOMMEND_REQUEST, function*(action) {
    try {
      const result = yield call(episodeId => {
        return axios.post(
          `/episode/${episodeId}`,
          {},
          {
            withCredentials: true,
          },
        );
      }, action.id);
      yield put({
        type: ADD_RECOMMEND_SUCCESS,
        data: result.data,
      });
    } catch (e) {
      console.log(e);
      yield put({
        type: ADD_RECOMMEND_FAILURE,
        error: e,
      });
    }
  });
}
// 수정
function* watchUpdateEpisode() {
  yield takeLatest(UPDATE_EPISODE_REQUEST, function*(action) {
    try {
      yield call(updateData => {
        return axios.patch(`/episode/${updateData.id}`, updateData, {
          withCredentials: true,
        });
      }, action.data);
      yield put({
        type: UPDATE_EPISODE_SUCCESS,
      });
    } catch (e) {
      console.log(e);
      yield put({
        type: UPDATE_EPISODE_FAILURE,
        error: e,
      });
    }
  });
}
// 삭제
function* watchDeleteEpisode() {
  yield takeLatest(DELETE_EPISODE_REQUEST, function*(action) {
    try {
      yield call(episodeId => {
        return axios.delete(`/episode/${episodeId}`, {
          withCredentials: true,
        });
      }, action.id);
      yield put({
        type: DELETE_EPISODE_SUCCESS,
      });
    } catch (e) {
      console.log(e);
      yield put({
        type: DELETE_EPISODE_FAILURE,
        error: e,
      });
    }
  });
}
// 댓글 작성
function* watchAddComment() {
  yield takeLatest(ADD_EPISODE_COMMENT_REQUEST, function*(action) {
    try {
      const result = yield call(commentData => {
        return axios.post('/episode/comment', commentData, {
          withCredentials: true,
        });
      }, action.data);
      yield put({
        type: ADD_EPISODE_COMMENT_SUCCESS,
        data: result.data,
      });
    } catch (e) {
      console.log(e);
      yield put({
        type: ADD_EPISODE_COMMENT_FAILURE,
        error: e,
      });
    }
  });
}
// 댓글 수정
function* watchUpdateComment() {
  yield takeLatest(UPDATE_EPISODE_COMMENT_REQUEST, function* updateComment(
    action,
  ) {
    try {
      const result = yield call(updateCommentData => {
        return axios.patch('/episode/comment', updateCommentData, {
          withCredentials: true,
        });
      }, action.data);
      yield put({
        type: UPDATE_EPISODE_COMMENT_SUCCESS,
        data: result.data,
      });
    } catch (e) {
      console.log(e);
      yield put({
        type: UPDATE_EPISODE_COMMENT_FAILURE,
        error: e,
      });
    }
  });
}
// 댓글 삭제
function* watchDeleteComment() {
  yield takeLatest(DELETE_EPISODE_COMMENT_REQUEST, function* deleteBoard(
    action,
  ) {
    try {
      const result = yield call(commentId => {
        return axios.delete(`/episode/comment/${commentId}`, {
          withCredentials: true,
        });
      }, action.commentId);
      yield put({
        type: DELETE_EPISODE_COMMENT_SUCCESS,
        data: result.data,
      });
    } catch (e) {
      console.log(e);
      yield put({
        type: DELETE_EPISODE_COMMENT_FAILURE,
        error: e,
      });
    }
  });
}

export default function* episodeSaga() {
  yield all([
    fork(watchLoadEpisode),
    fork(watchAddEpisode),
    fork(watchAddRecommend),
    fork(watchUpdateEpisode),
    fork(watchDeleteEpisode),
    fork(watchAddComment),
    fork(watchUpdateComment),
    fork(watchDeleteComment),
  ]);
}
