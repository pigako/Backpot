webpackHotUpdate("static\\development\\pages\\_app.js",{

/***/ "./reducers/book.js":
/*!**************************!*\
  !*** ./reducers/book.js ***!
  \**************************/
/*! exports provided: initalState, LOAD_BOOKS_REQUEST, LOAD_BOOKS_SUCCESS, LOAD_BOOKS_FAILURE, LOAD_BOOK_REQUEST, LOAD_BOOK_SUCCESS, LOAD_BOOK_FAILURE, ADD_LIKEBOOK_REQUEST, ADD_LIKEBOOK_SUCCESS, ADD_LIKEBOOK_FAILURE, REMOVE_LIKEBOOK_REQUEST, REMOVE_LIKEBOOK_SUCCESS, REMOVE_LIKEBOOK_FAILURE, ADD_BOOK_REQEUST, ADD_BOOK_SUCCESS, ADD_BOOK_FAILURE, UPLOAD_IMAGE_REQEUST, UPLOAD_IMAGE_SUCCESS, UPLOAD_IMAGE_FAILURE, REMOVE_IMAGE, default */
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPLOAD_IMAGE_REQEUST", function() { return UPLOAD_IMAGE_REQEUST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPLOAD_IMAGE_SUCCESS", function() { return UPLOAD_IMAGE_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPLOAD_IMAGE_FAILURE", function() { return UPLOAD_IMAGE_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_IMAGE", function() { return REMOVE_IMAGE; });
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! immer */ "./node_modules/immer/dist/immer.module.js");

var initalState = {
  books: [],
  book: null,
  isAddingLikeBook: false,
  isRemovingLikeBook: false,
  thumbnailPath: ''
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
var UPLOAD_IMAGE_REQEUST = "UPLOAD_IMAGE_REQEUST";
var UPLOAD_IMAGE_SUCCESS = "UPLOAD_IMAGE_SUCCESS";
var UPLOAD_IMAGE_FAILURE = "UPLOAD_IMAGE_FAILURE";
var REMOVE_IMAGE = "REMOVE_IMAGE";

var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initalState;
  var action = arguments.length > 1 ? arguments[1] : undefined;
  return Object(immer__WEBPACK_IMPORTED_MODULE_0__["default"])(state, function (draft) {
    switch (action.type) {
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
//# sourceMappingURL=_app.js.dc4dfa3014e8271a25c7.hot-update.js.map