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
/* harmony import */ var _reducers_book__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../reducers/book */ "./reducers/book.js");

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



var SBookDiv = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "book__SBookDiv",
  componentId: "sc-1azvhkf-0"
})(["width:98%;margin:10px 0px 0px 10px;"]);
var BookTopDiv = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "book__BookTopDiv",
  componentId: "sc-1azvhkf-1"
})([""]);
var BookTitle = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].h1.withConfig({
  displayName: "book__BookTitle",
  componentId: "sc-1azvhkf-2"
})(["margin:10px 0px 10px 0px;font-weight:bold;"]);

var Book = function Book() {
  return __jsx(SBookDiv, null, __jsx(BookTopDiv, null, __jsx(BookTitle, null, "Book")));
};

Book.getInitialProps = function _callee(context) {
  var bookId;
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          bookId = context.query.bookid;
          context.store.dispatch({
            type: _reducers_book__WEBPACK_IMPORTED_MODULE_3__["LOAD_BOOK_REQUEST"],
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
//# sourceMappingURL=book.js.3ee9ee2ce5bace2baa0e.hot-update.js.map