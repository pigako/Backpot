import { all, call, fork, throttle, takeLatest, put } from 'redux-saga/effects';
import axios from 'axios';
import {
  LOAD_EPISODE_REQUEST,
  LOAD_EPISODE_SUCCESS,
  LOAD_EPISODE_FAILURE,
} from '../reducers/episode';

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

export default function* episodeSaga() {
  yield all([fork(watchLoadEpisode)]);
}
