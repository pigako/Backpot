webpackHotUpdate("static\\development\\pages\\booklist.js",{

/***/ "./pages/booklist.js":
/*!***************************!*\
  !*** ./pages/booklist.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _components_BookCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/BookCard */ "./components/BookCard.js");
/* harmony import */ var _reducers_book__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../reducers/book */ "./reducers/book.js");

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;






var BookListTitle = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].h1.withConfig({
  displayName: "booklist__BookListTitle",
  componentId: "sc-1s39sfx-0"
})(["margin:10px 0px 10px 0px;font-weight:bold;"]);
var NovelList = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "booklist__NovelList",
  componentId: "sc-1s39sfx-1"
})(["width:98%;overflow:hidden;"]);

var BookList = function BookList() {
  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"])(function (state) {
    return state.book;
  }),
      books = _useSelector.books;

  return __jsx("div", null, __jsx(BookListTitle, null, "\uC5F0\uC7AC\uC18C\uC124 \uBAA9\uB85D"), __jsx(NovelList, null, books && books.map(function (book) {
    return __jsx(_components_BookCard__WEBPACK_IMPORTED_MODULE_5__["default"], {
      key: +book.id,
      book: book,
      nickname: book.User.nickname
    });
  })));
};

BookList.getInitialProps = function _callee(context) {
  var state;
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          state = context.store.getState();
          context.store.dispatch({
            type: _reducers_book__WEBPACK_IMPORTED_MODULE_6__["LOAD_BOOKS_REQUEST"],
            lastId: 0,
            keyword: state.book.keyword
          });

        case 2:
        case "end":
          return _context.stop();
      }
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (BookList);

/***/ })

})
//# sourceMappingURL=booklist.js.cb27eb45522599370539.hot-update.js.map