import produce from 'immer';

export const initalState = {
  books: [],
  book: null,
  isAddingLikeBook: false,
  isRemovingLikeBook: false,
};

export const LOAD_BOOKS_REQUEST = `LOAD_BOOKS_REQUEST`;
export const LOAD_BOOKS_SUCCESS = `LOAD_BOOKS_SUCCESS`;
export const LOAD_BOOKS_FAILURE = `LOAD_BOOKS_FAILURE`;

export const LOAD_BOOK_REQUEST = `LOAD_BOOK_REQUEST`;
export const LOAD_BOOK_SUCCESS = `LOAD_BOOK_SUCCESS`;
export const LOAD_BOOK_FAILURE = `LOAD_BOOK_FAILURE`;

export const ADD_LIKEBOOK_REQUEST = `ADD_LIKEBOOK_REQUEST`;
export const ADD_LIKEBOOK_SUCCESS = `ADD_LIKEBOOK_SUCCESS`;
export const ADD_LIKEBOOK_FAILURE = `ADD_LIKEBOOK_FAILURE`;

export const REMOVE_LIKEBOOK_REQUEST = `REMOVE_LIKEBOOK_REQUEST`;
export const REMOVE_LIKEBOOK_SUCCESS = `REMOVE_LIKEBOOK_SUCCESS`;
export const REMOVE_LIKEBOOK_FAILURE = `REMOVE_LIKEBOOK_FAILURE`;

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
      case LOAD_BOOK_REQUEST: {
        break;
      }
      case LOAD_BOOK_SUCCESS: {
        draft.book = action.data;
        break;
      }
      case LOAD_BOOK_FAILURE: {
        break;
      }
      case ADD_LIKEBOOK_REQUEST: {
        draft.isAddingLikeBook = true;
        break;
      }
      case ADD_LIKEBOOK_SUCCESS: {
        draft.isAddingLikeBook = false;
        draft.book.likersCount += 1;
        break;
      }
      case ADD_LIKEBOOK_FAILURE: {
        break;
      }
      case REMOVE_LIKEBOOK_REQUEST: {
        draft.isRemovingLikeBook = true;
        break;
      }
      case REMOVE_LIKEBOOK_SUCCESS: {
        draft.isRemovingLikeBook = false;
        draft.book.likersCount -= 1;
        break;
      }
      case REMOVE_LIKEBOOK_FAILURE: {
        break;
      }
      default: {
        break;
      }
    }
  });
};

export default reducer;
