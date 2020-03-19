webpackHotUpdate("static\\development\\pages\\book.js",{

/***/ "./reducers/book.js":
/*!**************************!*\
  !*** ./reducers/book.js ***!
  \**************************/
/*! exports provided: initalState, LOAD_BOOKS_REQUEST, LOAD_BOOKS_SUCCESS, LOAD_BOOKS_FAILURE, LOAD_BOOK_REQUEST, LOAD_BOOK_SUCCESS, LOAD_BOOK_FAILURE, ADD_LIKEBOOK_REQUEST, ADD_LIKEBOOK_SUCCESS, ADD_LIKEBOOK_FAILURE, REMOVE_LIKEBOOK_REQUEST, REMOVE_LIKEBOOK_SUCCESS, REMOVE_LIKEBOOK_FAILURE, ADD_BOOK_REQEUST, ADD_BOOK_SUCCESS, ADD_BOOK_FAILURE, LOAD_GENRE_REQUEST, LOAD_GENRE_SUCCESS, LOAD_GENRE_FAILURE, CHANGE_ADDEDBOOK, UPLOAD_IMAGE_REQEUST, UPLOAD_IMAGE_SUCCESS, UPLOAD_IMAGE_FAILURE, REMOVE_THUMBNAIL, REMOVE_IMAGE, UPDATE_BOOK_REQUEST, UPDATE_BOOK_SUCCESS, UPDATE_BOOK_FAILURE, CHANGE_UPDATEDBOOK, DELETE_BOOK_REQUEST, DELETE_BOOK_SUCCESS, DELETE_BOOK_FAILURE, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initalState", function() { return initalState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_BOOKS_REQUEST", function() { return LOAD_BOOKS_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_BOOKS_SUCCESS", function() { return LOAD_BOOKS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_BOOKS_FAILURE", function() { return LOAD_BOOKS_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_BOOK_REQUEST", function() { return LOAD_BOOK_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_BOOK_SUCCESS", function() { return LOAD_BOOK_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_BOOK_FAILURE", function() { return LOAD_BOOK_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_LIKEBOOK_REQUEST", function() { return ADD_LIKEBOOK_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_LIKEBOOK_SUCCESS", function() { return ADD_LIKEBOOK_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_LIKEBOOK_FAILURE", function() { return ADD_LIKEBOOK_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_LIKEBOOK_REQUEST", function() { return REMOVE_LIKEBOOK_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_LIKEBOOK_SUCCESS", function() { return REMOVE_LIKEBOOK_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_LIKEBOOK_FAILURE", function() { return REMOVE_LIKEBOOK_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_BOOK_REQEUST", function() { return ADD_BOOK_REQEUST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_BOOK_SUCCESS", function() { return ADD_BOOK_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_BOOK_FAILURE", function() { return ADD_BOOK_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_GENRE_REQUEST", function() { return LOAD_GENRE_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_GENRE_SUCCESS", function() { return LOAD_GENRE_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_GENRE_FAILURE", function() { return LOAD_GENRE_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHANGE_ADDEDBOOK", function() { return CHANGE_ADDEDBOOK; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPLOAD_IMAGE_REQEUST", function() { return UPLOAD_IMAGE_REQEUST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPLOAD_IMAGE_SUCCESS", function() { return UPLOAD_IMAGE_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPLOAD_IMAGE_FAILURE", function() { return UPLOAD_IMAGE_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_THUMBNAIL", function() { return REMOVE_THUMBNAIL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_IMAGE", function() { return REMOVE_IMAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_BOOK_REQUEST", function() { return UPDATE_BOOK_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_BOOK_SUCCESS", function() { return UPDATE_BOOK_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_BOOK_FAILURE", function() { return UPDATE_BOOK_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHANGE_UPDATEDBOOK", function() { return CHANGE_UPDATEDBOOK; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DELETE_BOOK_REQUEST", function() { return DELETE_BOOK_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DELETE_BOOK_SUCCESS", function() { return DELETE_BOOK_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DELETE_BOOK_FAILURE", function() { return DELETE_BOOK_FAILURE; });
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! immer */ "./node_modules/immer/dist/immer.module.js");

var initalState = {
  books: [],
  book: null,
  genre: [],
  isAddingLikeBook: false,
  isRemovingLikeBook: false,
  thumbnailPath: '',
  isAddingBook: false,
  isAddedBook: false,
  isUpdatingBook: false,
  isUpdatedBook: false
};
var LOAD_BOOKS_REQUEST = "LOAD_BOOKS_REQUEST";
var LOAD_BOOKS_SUCCESS = "LOAD_BOOKS_SUCCESS";
var LOAD_BOOKS_FAILURE = "LOAD_BOOKS_FAILURE";
var LOAD_BOOK_REQUEST = "LOAD_BOOK_REQUEST";
var LOAD_BOOK_SUCCESS = "LOAD_BOOK_SUCCESS";
var LOAD_BOOK_FAILURE = "LOAD_BOOK_FAILURE";
var ADD_LIKEBOOK_REQUEST = "ADD_LIKEBOOK_REQUEST";
var ADD_LIKEBOOK_SUCCESS = "ADD_LIKEBOOK_SUCCESS";
var ADD_LIKEBOOK_FAILURE = "ADD_LIKEBOOK_FAILURE";
var REMOVE_LIKEBOOK_REQUEST = "REMOVE_LIKEBOOK_REQUEST";
var REMOVE_LIKEBOOK_SUCCESS = "REMOVE_LIKEBOOK_SUCCESS";
var REMOVE_LIKEBOOK_FAILURE = "REMOVE_LIKEBOOK_FAILURE";
var ADD_BOOK_REQEUST = "ADD_BOOK_REQEUST";
var ADD_BOOK_SUCCESS = "ADD_BOOK_SUCCESS";
var ADD_BOOK_FAILURE = "ADD_BOOK_FAILURE";
var LOAD_GENRE_REQUEST = "LOAD_GENRE_REQUEST";
var LOAD_GENRE_SUCCESS = "LOAD_GENRE_SUCCESS";
var LOAD_GENRE_FAILURE = "LOAD_GENRE_FAILURE";
var CHANGE_ADDEDBOOK = "CHANGE_ADDEDBOOK";
var UPLOAD_IMAGE_REQEUST = "UPLOAD_IMAGE_REQEUST";
var UPLOAD_IMAGE_SUCCESS = "UPLOAD_IMAGE_SUCCESS";
var UPLOAD_IMAGE_FAILURE = "UPLOAD_IMAGE_FAILURE";
var REMOVE_THUMBNAIL = "REMOVE_THUMBNAIL";
var REMOVE_IMAGE = "REMOVE_IMAGE";
var UPDATE_BOOK_REQUEST = "UPDATE_BOOK_REQUEST";
var UPDATE_BOOK_SUCCESS = "UPDATE_BOOK_SUCCESS";
var UPDATE_BOOK_FAILURE = "UPDATE_BOOK_FAILURE";
var CHANGE_UPDATEDBOOK = "CHANGE_UPDATEDBOOK";
var DELETE_BOOK_REQUEST = "DELETE_BOOK_REQUEST";
var DELETE_BOOK_SUCCESS = "DELETE_BOOK_SUCCESS";
var DELETE_BOOK_FAILURE = "DELETE_BOOK_FAILURE";

var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initalState;
  var action = arguments.length > 1 ? arguments[1] : undefined;
  return Object(immer__WEBPACK_IMPORTED_MODULE_0__["default"])(state, function (draft) {
    switch (action.type) {
      // 전체 작품 조회
      case LOAD_BOOKS_REQUEST:
        {
          draft.books = !action.lastId ? [] : draft.books;
          draft.hasMoreBooks = action.lastId ? draft.hasMoreBooks : true;
          break;
        }

      case LOAD_BOOKS_SUCCESS:
        {
          action.data.forEach(function (d) {
            draft.books.push(d);
          });
          draft.hasMoreBooks = action.data.length === 20;
          break;
        }

      case LOAD_BOOKS_FAILURE:
        {
          break;
        }
      // 작품 한개 조회

      case LOAD_BOOK_REQUEST:
        {
          break;
        }

      case LOAD_BOOK_SUCCESS:
        {
          draft.book = action.data;
          break;
        }

      case LOAD_BOOK_FAILURE:
        {
          break;
        }
      // 선호작 등록

      case ADD_LIKEBOOK_REQUEST:
        {
          draft.isAddingLikeBook = true;
          break;
        }

      case ADD_LIKEBOOK_SUCCESS:
        {
          draft.isAddingLikeBook = false;
          draft.book.likersCount += 1;
          break;
        }

      case ADD_LIKEBOOK_FAILURE:
        {
          break;
        }
      // 선호작 제거

      case REMOVE_LIKEBOOK_REQUEST:
        {
          draft.isRemovingLikeBook = true;
          break;
        }

      case REMOVE_LIKEBOOK_SUCCESS:
        {
          draft.isRemovingLikeBook = false;
          draft.book.likersCount -= 1;
          break;
        }

      case REMOVE_LIKEBOOK_FAILURE:
        {
          break;
        }
      // 작품 만들기

      case ADD_BOOK_REQEUST:
        {
          draft.isAddingBook = true;
          draft.isAddedBook = false;
          break;
        }

      case ADD_BOOK_SUCCESS:
        {
          draft.isAddingBook = false;
          draft.isAddedBook = true;
          break;
        }

      case ADD_BOOK_FAILURE:
        {
          break;
        }
      //

      case CHANGE_ADDEDBOOK:
        {
          draft.isAddedBook = false;
          break;
        }

      case LOAD_GENRE_REQUEST:
        {
          draft.genre = [];
          break;
        }

      case LOAD_GENRE_SUCCESS:
        {
          draft.genre = action.data;
          break;
        }

      case LOAD_GENRE_FAILURE:
        {
          break;
        }
      // 작품 썸네일 등록

      case UPLOAD_IMAGE_REQEUST:
        {
          draft.thumbnailPath = '';
          break;
        }

      case UPLOAD_IMAGE_SUCCESS:
        {
          draft.thumbnailPath = action.data;
          break;
        }

      case UPLOAD_IMAGE_FAILURE:
        {
          break;
        }
      // 작품 썸네일 취소

      case REMOVE_IMAGE:
        {
          draft.thumbnailPath = '';
          break;
        }
      // 등록된 썸네일 삭제

      case REMOVE_THUMBNAIL:
        {
          draft.book.thumbnail = '';
          break;
        }
      // 작품 수정

      case UPDATE_BOOK_REQUEST:
        {
          draft.isUpdatingBook = true;
          draft.isUpdatedBook = false;
          break;
        }

      case UPDATE_BOOK_SUCCESS:
        {
          draft.isUpdatingBook = false;
          draft.isUpdatedBook = true;
          break;
        }

      case UPDATE_BOOK_FAILURE:
        {
          break;
        }

      case CHANGE_UPDATEDBOOK:
        {
          break;
        }

      case DELETE_BOOK_REQUEST:
        {
          break;
        }

      case DELETE_BOOK_SUCCESS:
        {
          break;
        }

      case DELETE_BOOK_FAILURE:
        {
          break;
        }

      default:
        {
          break;
        }
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (reducer);

/***/ })

})
//# sourceMappingURL=book.js.93bcd6c36f4b02339860.hot-update.js.map