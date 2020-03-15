webpackHotUpdate("static\\development\\pages\\book.js",{

/***/ "./pages/book.js":
/*!***********************!*\
  !*** ./pages/book.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _reducers_book__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../reducers/book */ "./reducers/book.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;






var SBookDiv = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "book__SBookDiv",
  componentId: "sc-1azvhkf-0"
})(["width:98%;margin:10px 0px 0px 10px;"]);
var BookTopDiv = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "book__BookTopDiv",
  componentId: "sc-1azvhkf-1"
})(["display:inline-block;width:100%;height:15rem;"]);
var BookTopLeftDiv = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "book__BookTopLeftDiv",
  componentId: "sc-1azvhkf-2"
})(["margin-top:1rem;width:25%;float:left;"]);
var BookTopRightDiv = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "book__BookTopRightDiv",
  componentId: "sc-1azvhkf-3"
})(["width:75%;padding:1.5rem;float:right;& > label{font-size:1rem;display:block;margin-top:0.5rem;}"]);
var Thumbnail = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].img.withConfig({
  displayName: "book__Thumbnail",
  componentId: "sc-1azvhkf-4"
})(["height:13rem;float:left;margin-top:1rem;margin-left:4%;"]);
var BookTitle = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].h1.withConfig({
  displayName: "book__BookTitle",
  componentId: "sc-1azvhkf-5"
})(["font-size:1.5rem;font-weight:bold;"]);
var BookSummaryDiv = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "book__BookSummaryDiv",
  componentId: "sc-1azvhkf-6"
})(["margin:2rem;"]);

var Book = function Book() {
  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["useSelector"])(function (state) {
    return state.book;
  }),
      book = _useSelector.book;

  return __jsx(SBookDiv, null, __jsx(BookTopDiv, null, __jsx(BookTopLeftDiv, null, __jsx(Thumbnail, {
    src: "http://localhost:5000/".concat(book && book.thumbnail)
  })), __jsx(BookTopRightDiv, null, __jsx(BookTitle, null, book && book.name), __jsx("label", null, book && book.BookGenre[0].name), __jsx("label", null, "\uC791\uAC00 ", book && book.User.nickname), __jsx("label", null, "\uC791\uD488\uB4F1\uB85D\uC77C", ' ', book && moment__WEBPACK_IMPORTED_MODULE_3___default()(book.createdAt).format('YY.MM.DD HH시 mm분')), __jsx("label", null, "\uCD5C\uADFC\uB4F1\uB85D\uC77C", ' ', book && (book.Episodes[book.Episodes.length - 1] ? moment__WEBPACK_IMPORTED_MODULE_3___default()(book.Episodes[book.Episodes.length - 1].createdAt).format('YY.MM.DD HH시 mm분') : moment__WEBPACK_IMPORTED_MODULE_3___default()(book.createdAt).format('YY.MM.DD HH시 mm분'))), __jsx("label", null, "\uC5F0\uC7AC\uC218 ", book && book.Episodes.length, " \uD654"), __jsx("label", null, "\uC870\uD68C\uC218"), __jsx("label", null, "\uCD94\uCC9C\uC218"), __jsx("label", null, "\uC120\uD638\uC791\uC218 ", book && book.likersCount))), __jsx(BookSummaryDiv, null, book && book.summary));
};

Book.getInitialProps = function _callee(context) {
  var bookId;
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          bookId = context.query.bookid;
          context.store.dispatch({
            type: _reducers_book__WEBPACK_IMPORTED_MODULE_5__["LOAD_BOOK_REQUEST"],
            id: bookId
          });

        case 2:
        case "end":
          return _context.stop();
      }
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Book);

/***/ })

})
//# sourceMappingURL=book.js.78ae3143cd62b12a2ef4.hot-update.js.map