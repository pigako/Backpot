import produce from 'immer';

export const initalState = {
  isLoggingIn: false,
  isLoggedIn: false,
  loginErrorReason: '',
  isLoggingOut: false,
  isSignedUp: false,
  isSigningUp: false,
  signUpErrorReason: '',
  me: null,
  LikedBookList: [],
  LikedWriterList: [],
  otherUserInfo: null,
};

export const LOG_IN_REQUEST = `LOG_IN_REQUEST`;
export const LOG_IN_SUCCESS = `LOG_IN_SUCCESS`;
export const LOG_IN_FAILURE = `LOG_IN_FAILURE`;

export const LOG_OUT_REQUEST = `LOG_OUT_REQUEST`;
export const LOG_OUT_SUCCESS = `LOG_OUT_SUCCESS`;
export const LOG_OUT_FAILURE = `LOG_OUT_FAILURE`;

export const SIGN_UP_REQUEST = `SIGN_UP_REQUEST`;
export const SIGN_UP_SUCCESS = `SIGN_UP_SUCCESS`;
export const SIGN_UP_FAILURE = `SIGN_UP_FAILURE`;

export const LOAD_USER_REQUEST = `LOAD_USER_REQUEST`;
export const LOAD_USER_SUCCESS = `LOAD_USER_SUCCESS`;
export const LOAD_USER_FAILURE = `LOAD_USER_FAILURE`;

export const ADD_LIKEBOOKLIST = `ADD_LIKEBOOKLIST`;
export const REMOVE_LIKEBOOKLIST = `REMOVE_LIKEBOOKLIST`;

const reducer = (state = initalState, action) => {
  return produce(state, draft => {
    switch (action.type) {
      // 로그인
      case LOG_IN_REQUEST: {
        draft.isLoggingIn = true;
        draft.isLoggedIn = false;
        draft.loginErrorReason = '';
        break;
      }
      case LOG_IN_SUCCESS: {
        draft.isLoggingIn = false;
        draft.isLoggedIn = true;
        draft.me = action.data;
        break;
      }
      case LOG_IN_FAILURE: {
        draft.isLoggingIn = false;
        draft.loginErrorReason = action.error;
        break;
      }
      // 로그아웃
      case LOG_OUT_REQUEST: {
        draft.isLoggingOut = true;
        break;
      }
      case LOG_OUT_SUCCESS: {
        draft.isLoggingOut = false;
        draft.isLoggedIn = false;
        draft.me = null;
        break;
      }
      case LOG_OUT_FAILURE: {
        draft.isLoggingOut = false;
        break;
      }
      // 회원가입
      case SIGN_UP_REQUEST: {
        draft.isSigningUp = true;
        draft.signUpErrorReason = '';
        break;
      }
      case SIGN_UP_SUCCESS: {
        draft.isSigningUp = false;
        draft.isSignedUp = true;
        break;
      }
      case SIGN_UP_FAILURE: {
        draft.isSigningUp = false;
        draft.signUpErrorReason = action.error;
        break;
      }
      // 유저 정보 불러오기
      case LOAD_USER_REQUEST: {
        if (action.data) {
          draft.otherUserInfo = null;
        }
        break;
      }
      case LOAD_USER_SUCCESS: {
        if (action.me) {
          draft.me = action.data;
        }
        if (!action.me) {
          draft.otherUserInfo = action.data;
        }
        break;
      }
      case LOAD_USER_FAILURE: {
        break;
      }
      // 선호작 리스트 추가
      case ADD_LIKEBOOKLIST: {
        draft.me.LikingBook.push({
          id: action.data.id,
          name: action.data.name,
          recentDay: action.data.recentDay,
          User: {
            userId: action.data.userId,
            nickname: action.data.userNickname,
          },
        });
        break;
      }
      case REMOVE_LIKEBOOKLIST: {
        const index = draft.me.LikingBook.findIndex(v => v.id === action.data);
        if (index !== -1) {
          draft.me.LikingBook.splice(index, 1);
        }
        break;
      }
      default: {
        break;
      }
    }
  });
};
export default reducer;
