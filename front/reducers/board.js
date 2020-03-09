import produce from 'immer';

export const initalState = {
  boards: [],
  board: null,
  isAddingBoard: false,
  boardAdded: false,
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

const reducer = (state = initalState, action) => {
  return produce(state, draft => {
    switch (action.type) {
      case LOAD_BOARDS_REQUEST:
        draft.boards = !action.lastId ? [] : draft.boards;
        draft.hasMoreBoards = action.lastId ? draft.hasMoreBoards : true;
        break;
      case LOAD_BOARDS_SUCCESS:
        draft.boards = draft.boards.concat(action.data);
        draft.hasMoreBoards = action.data.length === 30;
        break;
      case LOAD_BOARDS_FAILURE:
        break;
      case LOAD_BOARD_REQUEST:
        draft.board = null;
        break;
      case LOAD_BOARD_SUCCESS:
        draft.board = action.data;
        break;
      case LOAD_BOARD_FAILURE:
        break;
      case ADD_BOARD_REQUEST:
        draft.isAddingBoard = true;
        draft.boardAdded = false;
        break;
      case ADD_BOARD_SUCCESS:
        draft.isAddingBoard = false;
        draft.boardAdded = true;
        draft.boards.unshift(action.data);
        break;
      case ADD_BOARD_FAILURE:
        break;
      default:
        break;
    }
  });
};

export default reducer;
