import {
  all,
  fork,
  takeEvery,
  takeLatest,
  call,
  put,
} from 'redux-saga/effects';
import axios from 'axios';
import {
  LOG_IN_REQUEST,
  LOG_IN_FAILURE,
  LOG_IN_SUCCESS,
  LOG_OUT_REQUEST,
  LOG_OUT_FAILURE,
  LOG_OUT_SUCCESS,
  SIGN_UP_REQUEST,
  SIGN_UP_FAILURE,
  SIGN_UP_SUCCESS,
  LOAD_USER_REQUEST,
  LOAD_USER_SUCCESS,
  LOAD_USER_FAILURE,
} from '../reducers/user';

// 로그인
function* watchLogin() {
  yield takeLatest(LOG_IN_REQUEST, function* login(action) {
    try {
      const result = yield call(loginData => {
        return axios.post('/user/login', loginData, {
          withCredentials: true,
        });
      }, action.data);
      yield put({
        type: LOG_IN_SUCCESS,
        data: result.data,
      });
    } catch (e) {
      console.log(e);
      yield put({
        type: LOG_IN_FAILURE,
        error: e,
      });
      alert('로그인에 실패했습니다.');
    }
  });
}

// 로그아웃
function* watchLogout() {
  yield takeLatest(LOG_OUT_REQUEST, function* logout() {
    try {
      yield call(() => {
        return axios.post(
          '/user/logout',
          {},
          {
            withCredentials: true,
          },
        );
      });
      yield put({
        type: LOG_OUT_SUCCESS,
      });
    } catch (e) {
      console.log(e);
      yield put({
        type: LOG_OUT_FAILURE,
        error: e,
      });
    }
  });
}

// 회원가입
function* watchSignUp() {
  yield takeLatest(SIGN_UP_REQUEST, function* signUp(action) {
    try {
      const result = yield call(signUpData => {
        return axios.post('/user/signup', signUpData);
      }, action.data);
      yield put({
        type: SIGN_UP_SUCCESS,
        data: result,
      });
    } catch (e) {
      console.log(e);
      yield put({
        type: SIGN_UP_FAILURE,
        error: e,
      });
    }
  });
}

function* watchLoadUser() {
  yield takeLatest(LOAD_USER_REQUEST, function* loadUser(action) {
    try {
      const result = yield call(userId => {
        return axios.get(userId ? `/user/${userId}` : `/user`, {
          withCredentials: true,
        });
      }, action.data);
      yield put({
        type: LOAD_USER_SUCCESS,
        data: result.data,
        me: !action.data,
      });
    } catch (e) {
      console.log(e);
      yield put({
        type: LOAD_USER_FAILURE,
        error: e,
      });
    }
  });
}
export default function* userSaga() {
  yield all([
    fork(watchSignUp),
    fork(watchLogin),
    fork(watchLogout),
    fork(watchLoadUser),
  ]);
}
