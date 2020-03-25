import produce from 'immer';

export const initalState = {
  episode: null,
  isAddingEpisode: false,
  isAddedEpisode: false,
};

export const LOAD_EPISODE_REQUEST = `LOAD_EPISODE_REQUEST`;
export const LOAD_EPISODE_SUCCESS = `LOAD_EPISODE_SUCCESS`;
export const LOAD_EPISODE_FAILURE = `LOAD_EPISODE_FAILURE`;

export const ADD_EPISODE_REQUEST = `ADD_EPISODE_REQUEST`;
export const ADD_EPISODE_SUCCESS = `ADD_EPISODE_SUCCESS`;
export const ADD_EPISODE_FAILURE = `ADD_EPISODE_FAILURE`;

export const CHANGE_ADDEDEPISODE = `CHANGE_ADDEDEPISODE`;

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
      case ADD_EPISODE_REQUEST: {
        draft.isAddingEpisode = true;
        draft.isAddedEpisode = false;
        break;
      }
      case ADD_EPISODE_SUCCESS: {
        draft.isAddingEpisode = false;
        draft.isAddedEpisode = true;
        break;
      }
      case ADD_EPISODE_FAILURE: {
        break;
      }
      case CHANGE_ADDEDEPISODE: {
        draft.isAddedEpisode = false;
        break;
      }
      default: {
        break;
      }
    }
  });
};

export default reducer;
