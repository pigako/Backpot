import { all, call, fork, throttle, takeLatest, put } from 'redux-saga/effects';
import axios from 'axios';
import {
  LOAD_EPISODE_REQUEST,
  LOAD_EPISODE_SUCCESS,
  LOAD_EPISODE_FAILURE,
  ADD_EPISODE_REQUEST,
  ADD_EPISODE_SUCCESS,
  ADD_EPISODE_FAILURE,
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

export default function* episodeSaga() {
  yield all([fork(watchLoadEpisode), fork(watchAddEpisode)]);
}
