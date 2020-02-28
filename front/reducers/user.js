import produce from 'immer';

export const initalState = {
  isLoggingIn: false,
  loginErrorReason: '',
  isSignedUp: false,
  isSigningUp: false,
  signUpErrorReason: '',
  me: [],
  LikedBookList: [],
  LikedWriterList: [],
  otherUserInfo: [],
};

export const SIGN_UP_REQUEST = `SIGN_UP_REQUEST`;
export const SIGN_UP_SUCCESS = `SIGN_UP_SUCCESS`;
export const SIGN_UP_FAILURE = `SIGN_UP_FAILURE`;

const reducer = (state = initalState, action) => {
  return produce(state, draft => {
    switch (action.type) {
      case SIGN_UP_REQUEST:
        draft.isSigningUp = true;
        break;
      case SIGN_UP_SUCCESS:
        draft.isSigningUp = false;
        draft.isSignedUp = true;
        break;
      case SIGN_UP_FAILURE:
        draft.isSigningUp = false;
        draft.signUpErrorReason = action.error;
        break;
      default:
        break;
    }
  });
};
export default reducer;
