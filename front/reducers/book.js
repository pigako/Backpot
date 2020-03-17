import produce from 'immer';

export const initalState = {
  books: [],
  book: null,
  genre: [],
  isAddingLikeBook: false,
  isRemovingLikeBook: false,
  thumbnailPath: '',
  isAddingBook: false,
  isAddedBook: false,
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

export const ADD_BOOK_REQEUST = `ADD_BOOK_REQEUST`;
export const ADD_BOOK_SUCCESS = `ADD_BOOK_SUCCESS`;
export const ADD_BOOK_FAILURE = `ADD_BOOK_FAILURE`;

export const LOAD_GENRE_REQUEST = `LOAD_GENRE_REQUEST`;
export const LOAD_GENRE_SUCCESS = `LOAD_GENRE_SUCCESS`;
export const LOAD_GENRE_FAILURE = `LOAD_GENRE_FAILURE`;

export const CHANGE_ADDEDBOOK = `CHANGE_ADDEDBOOK`;

export const UPLOAD_IMAGE_REQEUST = `UPLOAD_IMAGE_REQEUST`;
export const UPLOAD_IMAGE_SUCCESS = `UPLOAD_IMAGE_SUCCESS`;
export const UPLOAD_IMAGE_FAILURE = `UPLOAD_IMAGE_FAILURE`;

export const REMOVE_IMAGE = `REMOVE_IMAGE`;

const reducer = (state = initalState, action) => {
  return produce(state, draft => {
    switch (action.type) {
      // 전체 작품 조회
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
      // 작품 한개 조회
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
      // 선호작 등록
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
      // 선호작 제거
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
      // 작품 만들기
      case ADD_BOOK_REQEUST: {
        draft.isAddingBook = true;
        draft.isAddedBook = false;
        break;
      }
      case ADD_BOOK_SUCCESS: {
        draft.isAddingBook = false;
        draft.isAddedBook = true;
        break;
      }
      case ADD_BOOK_FAILURE: {
        break;
      }
      //
      case CHANGE_ADDEDBOOK: {
        draft.isAddedBook = false;
        break;
      }
      case LOAD_GENRE_REQUEST: {
        draft.genre = [];
        break;
      }
      case LOAD_GENRE_SUCCESS: {
        draft.genre = action.data;
        break;
      }
      case LOAD_GENRE_FAILURE: {
        break;
      }
      // 작품 썸네일 등록
      case UPLOAD_IMAGE_REQEUST: {
        draft.thumbnailPath = '';
        break;
      }
      case UPLOAD_IMAGE_SUCCESS: {
        draft.thumbnailPath = action.data;
        break;
      }
      case UPLOAD_IMAGE_FAILURE: {
        break;
      }
      // 작품 썸네일 취소
      case REMOVE_IMAGE: {
        draft.thumbnailPath = '';
        break;
      }
      default: {
        break;
      }
    }
  });
};

export default reducer;
