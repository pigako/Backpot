import produce from 'immer';

export const initalState = {
  boards: [],
  isAddingBoard: false,
  boardAdded: false,
};

export const LOAD_BOARDS_REQUEST = `LOAD_BOARDS_REQUEST`;
export const LOAD_BOARDS_SUCCESS = `LOAD_BOARDS_SUCCESS`;
export const LOAD_BOARDS_FAILURE = `LOAD_BOARDS_FAILURE`;

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
