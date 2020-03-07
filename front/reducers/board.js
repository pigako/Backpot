import produce from 'immer';

export const initalState = {
  boards: [],
};

export const LOAD_BOARDS_REQUEST = `LOAD_BOARDS_REQUEST`;
export const LOAD_BOARDS_SUCCESS = `LOAD_BOARDS_SUCCESS`;
export const LOAD_BOARDS_FAILURE = `LOAD_BOARDS_FAILURE`;

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
      default:
        break;
    }
  });
};

export default reducer;
