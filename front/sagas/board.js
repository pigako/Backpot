import { all, call, fork, throttle, takeLatest, put } from 'redux-saga/effects';
import axios from 'axios';
import {
  LOAD_BOARDS_REQUEST,
  LOAD_BOARDS_SUCCESS,
  LOAD_BOARDS_FAILURE,
} from '../reducers/board';

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

export default function* bookSaga() {
  yield all([fork(watchLoadBords)]);
}
