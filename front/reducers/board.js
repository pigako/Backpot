import produce from 'immer';

export const initalState = {
  boards: [],
  hasMoreBoards: false,
  keyword: '',
  board: null,
  isAddingBoard: false,
  boardAdded: false,
  boardDeleted: false,
  isUpdatingBoard: false,
  isAddingComment: false,
  commentAdded: false,
  isUpdatingComment: false,
};

export const LOAD_BOARDS_REQUEST = `LOAD_BOARDS_REQUEST`;
export const LOAD_BOARDS_SUCCESS = `LOAD_BOARDS_SUCCESS`;
export const LOAD_BOARDS_FAILURE = `LOAD_BOARDS_FAILURE`;

export const LOAD_BOARD_REQUEST = `LOAD_BOARD_REQUEST`;
export const LOAD_BOARD_SUCCESS = `LOAD_BOARD_SUCCESS`;
export const LOAD_BOARD_FAILURE = `LOAD_BOARD_FAILURE`;

export const ADD_BOARD_REQUEST = `ADD_BOARD_REQUEST`;
export const ADD_BOARD_SUCCESS = `ADD_BOARD_SUCCESS`;
export const ADD_BOARD_FAILURE = `ADD_BOARD_FAILURE`;

export const UPDATE_BOARD_REQUEST = `UPDATE_BOARD_REQUEST`;
export const UPDATE_BOARD_SUCCESS = `UPDATE_BOARD_SUCCESS`;
export const UPDATE_BOARD_FAILURE = `UPDATE_BOARD_FAILURE`;

export const DELETE_BOARD_REQUEST = `DELETE_BOARD_REQUEST`;
export const DELETE_BOARD_SUCCESS = `DELETE_BOARD_SUCCESS`;
export const DELETE_BOARD_FAILURE = `DELETE_BOARD_FAILURE`;

export const ADD_COMMENT_REQUEST = `ADD_COMMENT_REQUEST`;
export const ADD_COMMENT_SUCCESS = `ADD_COMMENT_SUCCESS`;
export const ADD_COMMENT_FAILURE = `ADD_COMMENT_FAILURE`;

export const UPDATE_COMMENT_REQUEST = `UPDATE_COMMENT_REQUEST`;
export const UPDATE_COMMENT_SUCCESS = `UPDATE_COMMENT_SUCCESS`;
export const UPDATE_COMMENT_FAILURE = `UPDATE_COMMENT_FAILURE`;

export const DELETE_COMMENT_REQUEST = `DELETE_COMMENT_REQUEST`;
export const DELETE_COMMENT_SUCCESS = `DELETE_COMMENT_SUCCESS`;
export const DELETE_COMMENT_FAILURE = `DELETE_COMMENT_FAILURE`;

export const CHANGE_BOARD_KEYWORD = `CHANGE_BOARD_KEYWORD`;

const reducer = (state = initalState, action) => {
  return produce(state, draft => {
    switch (action.type) {
      // 전체 게시글 조회
      case LOAD_BOARDS_REQUEST: {
        draft.boards = !action.lastId ? [] : draft.boards;
        if (draft.hasMoreBoards) {
          draft.hasMoreBoards = action.lastId ? draft.hasMoreBoards : false;
        }
        break;
      }
      case LOAD_BOARDS_SUCCESS: {
        draft.boards = draft.boards.concat(action.data);
        draft.hasMoreBoards = action.data.length === 30;
        break;
      }
      case LOAD_BOARDS_FAILURE: {
        break;
      }
      // 게시글 조회
      case LOAD_BOARD_REQUEST: {
        draft.boardDeleted = false;
        draft.board = null;
        break;
      }
      case LOAD_BOARD_SUCCESS: {
        draft.board = action.data;
        break;
      }
      case LOAD_BOARD_FAILURE: {
        break;
      }
      // 게시글 작성
      case ADD_BOARD_REQUEST: {
        draft.isAddingBoard = true;
        draft.boardAdded = false;
        break;
      }
      case ADD_BOARD_SUCCESS: {
        draft.isAddingBoard = false;
        draft.boardAdded = true;
        draft.boards.unshift(action.data);
        break;
      }
      case ADD_BOARD_FAILURE: {
        break;
      }
      // 게시글 수정
      case UPDATE_BOARD_REQUEST: {
        draft.isUpdatingBoard = true;
        break;
      }
      case UPDATE_BOARD_SUCCESS: {
        draft.isUpdatingBoard = false;
        draft.board.content = action.data;
        break;
      }
      case UPDATE_BOARD_FAILURE: {
        break;
      }
      // 게시글 삭제
      case DELETE_BOARD_REQUEST: {
        draft.boardDeleted = false;
        break;
      }
      case DELETE_BOARD_SUCCESS: {
        const boardIndex = draft.boards.findIndex(v => v.id === action.data);
        draft.boards.splice(boardIndex, 1);
        draft.boardDeleted = true;
        break;
      }
      case DELETE_BOARD_FAILURE: {
        break;
      }
      // 댓글 작성
      case ADD_COMMENT_REQUEST: {
        draft.isAddingComment = true;
        draft.commentAdded = false;
        break;
      }
      case ADD_COMMENT_SUCCESS: {
        draft.isAddingComment = false;
        draft.commentAdded = true;
        draft.board.Comments.push(action.data);
        break;
      }
      case ADD_COMMENT_FAILURE: {
        break;
      }
      // 댓글 수정
      case UPDATE_COMMENT_REQUEST: {
        draft.isUpdatingBoard = true;
        break;
      }
      case UPDATE_COMMENT_SUCCESS: {
        draft.isUpdatingBoard = false;
        const commentIndex = draft.board.Comments.findIndex(
          v => v.id === action.data.id,
        );
        draft.board.Comments[commentIndex].content = action.data.content;
        break;
      }
      case UPDATE_COMMENT_FAILURE: {
        break;
      }
      // 댓글 삭제
      case DELETE_COMMENT_REQUEST: {
        break;
      }
      case DELETE_COMMENT_SUCCESS: {
        const commentIndex = draft.board.Comments.findIndex(
          v => v.id === action.data,
        );
        draft.board.Comments.splice(commentIndex, 1);
        // draft.board.Comments = draft.board.Comments.filter(c => c.id !== action.data);
        break;
      }
      case DELETE_COMMENT_FAILURE: {
        break;
      }
      case CHANGE_BOARD_KEYWORD: {
        draft.keyword = action.data;
        break;
      }
      default: {
        break;
      }
    }
  });
};

export default reducer;
