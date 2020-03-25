import produce from 'immer';

export const initalState = {
  episode: null,
  isAddingEpisode: false,
  isAddedEpisode: false,
  isRecommending: false,
  isUpdatingEpisode: false,
  isUpdatedEpisode: false,
  isDeletingEpisode: false,
  isDeletedEpisode: false,
};

export const LOAD_EPISODE_REQUEST = `LOAD_EPISODE_REQUEST`;
export const LOAD_EPISODE_SUCCESS = `LOAD_EPISODE_SUCCESS`;
export const LOAD_EPISODE_FAILURE = `LOAD_EPISODE_FAILURE`;

export const ADD_EPISODE_REQUEST = `ADD_EPISODE_REQUEST`;
export const ADD_EPISODE_SUCCESS = `ADD_EPISODE_SUCCESS`;
export const ADD_EPISODE_FAILURE = `ADD_EPISODE_FAILURE`;

export const CHANGE_ADDEDEPISODE = `CHANGE_ADDEDEPISODE`;

export const ADD_RECOMMEND_REQUEST = `ADD_RECOMMEND_REQUEST`;
export const ADD_RECOMMEND_SUCCESS = `ADD_RECOMMEND_SUCCESS`;
export const ADD_RECOMMEND_FAILURE = `ADD_RECOMMEND_FAILURE`;

export const UPDATE_EPISODE_REQUEST = `UPDATE_EPISODE_REQUEST`;
export const UPDATE_EPISODE_SUCCESS = `UPDATE_EPISODE_SUCCESS`;
export const UPDATE_EPISODE_FAILURE = `UPDATE_EPISODE_FAILURE`;

export const CHANGE_UPDATEDEPISODE = `CHANGE_UPDATEDEPISODE`;

export const DELETE_EPISODE_REQUEST = `DELETE_EPISODE_REQUEST`;
export const DELETE_EPISODE_SUCCESS = `DELETE_EPISODE_SUCCESS`;
export const DELETE_EPISODE_FAILURE = `DELETE_EPISODE_FAILURE`;

export const CHANGE_DELETEDEPISODE = `CHANGE_DELETEDEPISODE`;

const reducer = (state = initalState, action) => {
  return produce(state, draft => {
    switch (action.type) {
      case LOAD_EPISODE_REQUEST: {
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
      case ADD_RECOMMEND_REQUEST: {
        draft.isRecommending = true;
        break;
      }
      case ADD_RECOMMEND_SUCCESS: {
        draft.isRecommending = false;
        draft.episode.recommends = action.data;
        break;
      }
      case ADD_RECOMMEND_FAILURE: {
        break;
      }
      case UPDATE_EPISODE_REQUEST: {
        draft.isUpdatedEpisode = false;
        draft.isUpdatingEpisode = true;
        break;
      }
      case UPDATE_EPISODE_SUCCESS: {
        draft.isUpdatedEpisode = true;
        draft.isUpdatingEpisode = false;
        break;
      }
      case UPDATE_EPISODE_FAILURE: {
        break;
      }
      case CHANGE_UPDATEDEPISODE: {
        draft.isUpdatedEpisode = false;
        break;
      }
      case DELETE_EPISODE_REQUEST: {
        draft.isDeletingEpisode = true;
        draft.isDeletedEpisode = false;
        break;
      }
      case DELETE_EPISODE_SUCCESS: {
        draft.isDeletingEpisode = false;
        draft.isDeletedEpisode = true;
        break;
      }
      case DELETE_EPISODE_FAILURE: {
        break;
      }
      case CHANGE_DELETEDEPISODE: {
        draft.isDeletedEpisode = false;
        break;
      }
      default: {
        break;
      }
    }
  });
};

export default reducer;
