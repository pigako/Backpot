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
  isAddingComment: false,
  commentAdded: false,
  isUpdatingComment: false,
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

export const ADD_EPISODE_COMMENT_REQUEST = `ADD_EPISODE_COMMENT_REQUEST`;
export const ADD_EPISODE_COMMENT_SUCCESS = `ADD_EPISODE_COMMENT_SUCCESS`;
export const ADD_EPISODE_COMMENT_FAILURE = `ADD_EPISODE_COMMENT_FAILURE`;

export const UPDATE_EPISODE_COMMENT_REQUEST = `UPDATE_EPISODE_COMMENT_REQUEST`;
export const UPDATE_EPISODE_COMMENT_SUCCESS = `UPDATE_EPISODE_COMMENT_SUCCESS`;
export const UPDATE_EPISODE_COMMENT_FAILURE = `UPDATE_EPISODE_COMMENT_FAILURE`;

export const DELETE_EPISODE_COMMENT_REQUEST = `DELETE_EPISODE_COMMENT_REQUEST`;
export const DELETE_EPISODE_COMMENT_SUCCESS = `DELETE_EPISODE_COMMENT_SUCCESS`;
export const DELETE_EPISODE_COMMENT_FAILURE = `DELETE_EPISODE_COMMENT_FAILURE`;

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
      // 댓글 작성
      case ADD_EPISODE_COMMENT_REQUEST: {
        draft.isAddingComment = true;
        draft.commentAdded = false;
        break;
      }
      case ADD_EPISODE_COMMENT_SUCCESS: {
        draft.isAddingComment = false;
        draft.commentAdded = true;
        draft.episode.Episode_Comments.push(action.data);
        break;
      }
      case ADD_EPISODE_COMMENT_FAILURE: {
        break;
      }
      // 댓글 수정
      case UPDATE_EPISODE_COMMENT_REQUEST: {
        draft.isUpdatingBoard = true;
        break;
      }
      case UPDATE_EPISODE_COMMENT_SUCCESS: {
        draft.isUpdatingBoard = false;
        const commentIndex = draft.episode.Episode_Comments.findIndex(
          v => v.id === action.data.id,
        );
        draft.episode.Episode_Comments[commentIndex].content =
          action.data.content;
        break;
      }
      case UPDATE_EPISODE_COMMENT_FAILURE: {
        break;
      }
      // 댓글 삭제
      case DELETE_EPISODE_COMMENT_REQUEST: {
        break;
      }
      case DELETE_EPISODE_COMMENT_SUCCESS: {
        const commentIndex = draft.episode.Episode_Comments.findIndex(
          v => v.id === action.data,
        );
        draft.episode.Episode_Comments.splice(commentIndex, 1);
        break;
      }
      case DELETE_EPISODE_COMMENT_FAILURE: {
        break;
      }
      default: {
        break;
      }
    }
  });
};

export default reducer;
