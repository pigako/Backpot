import produce from 'immer';

export const initalState = {
  episode: null,
};

export const LOAD_EPISODE_REQUEST = `LOAD_EPISODE_REQUEST`;
export const LOAD_EPISODE_SUCCESS = `LOAD_EPISODE_SUCCESS`;
export const LOAD_EPISODE_FAILURE = `LOAD_EPISODE_FAILURE`;

const reducer = (state = initalState, action) => {
  return produce(state, draft => {
    switch (action.type) {
      case LOAD_EPISODE_REQUEST: {
        draft.episode = null;
        break;
      }
      case LOAD_EPISODE_SUCCESS: {
        draft.episode = action.data;
        break;
      }
      case LOAD_EPISODE_FAILURE: {
        break;
      }
      default: {
        break;
      }
    }
  });
};

export default reducer;
