import produce from 'immer';

export const initalState = {
  books: [],
  book: null,
};

export const LOAD_BOOKS_REQUEST = `LOAD_BOOKS_REQUEST`;
export const LOAD_BOOKS_SUCCESS = `LOAD_BOOKS_SUCCESS`;
export const LOAD_BOOKS_FAILURE = `LOAD_BOOKS_FAILURE`;

const reducer = (state = initalState, action) => {
  return produce(state, draft => {
    switch (action.type) {
      case LOAD_BOOKS_REQUEST: {
        draft.books = !action.lastId ? [] : draft.books;
        draft.hasMoreBooks = action.lastId ? draft.hasMoreBooks : true;
        break;
      }
      case LOAD_BOOKS_SUCCESS: {
        action.data.forEach(d => {
          draft.books.push(d);
        });
        draft.hasMoreBooks = action.data.length === 20;
        break;
      }
      case LOAD_BOOKS_FAILURE: {
        break;
      }
      default: {
        break;
      }
    }
  });
};

export default reducer;
