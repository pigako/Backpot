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
  SIGN_UP_REQUEST,
  SIGN_UP_FAILURE,
  SIGN_UP_SUCCESS,
} from '../reducers/user';

// 회원가입
// // function signUpApi(signUpData)

// // function* signUp(action) {
// //   try {
// //     const result = yield call(signUpData => {
// //       return axios.post('/user/signup', { signUpData });
// //     }, action.data);
// //     yield put({
// //       type: SIGN_UP_SUCCESS,
// //       data: result,
// //     });
// //   } catch (e) {
// //     console.log(e);
// //     yield put({
// //       type: SIGN_UP_FAILURE,
// //       error: e,
// //     });
// //   }
// // }

// function* watchSignUp() {
//   yield takeLatest(SIGN_UP_REQUEST, signUp);
// }
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

export default function* userSaga() {
  yield all([fork(watchSignUp)]);
}
