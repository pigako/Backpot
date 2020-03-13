webpackHotUpdate("static\\development\\pages\\_app.js",{

/***/ "./reducers/book.js":
/*!**************************!*\
  !*** ./reducers/book.js ***!
  \**************************/
/*! exports provided: initalState, LOAD_BOOKS_REQUEST, LOAD_BOOKS_SUCCESS, LOAD_BOOKS_FAILURE, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initalState", function() { return initalState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_BOOKS_REQUEST", function() { return LOAD_BOOKS_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_BOOKS_SUCCESS", function() { return LOAD_BOOKS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_BOOKS_FAILURE", function() { return LOAD_BOOKS_FAILURE; });
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! immer */ "./node_modules/immer/dist/immer.module.js");

var initalState = {
  books: [],
  book: null
};
var LOAD_BOOKS_REQUEST = "LOAD_BOOKS_REQUEST";
var LOAD_BOOKS_SUCCESS = "LOAD_BOOKS_SUCCESS";
var LOAD_BOOKS_FAILURE = "LOAD_BOOKS_FAILURE";

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
//# sourceMappingURL=_app.js.474434e8e637fa924262.hot-update.js.map