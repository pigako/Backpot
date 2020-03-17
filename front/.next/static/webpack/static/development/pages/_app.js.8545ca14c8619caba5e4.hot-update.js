webpackHotUpdate("static\\development\\pages\\_app.js",{

/***/ "./components/LikingBook.js":
/*!**********************************!*\
  !*** ./components/LikingBook.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





var LikingList = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].li.withConfig({
  displayName: "LikingBook__LikingList",
  componentId: "sc-1befqkz-0"
})(["display:block;width:100%;height:2rem;text-align:left;border-radius:4px;border-bottom:solid 2px #495057;&:nth-child(2n){background:#495057;}&:hover{background:#148cff;}& + &{margin-top:10px;}"]);
var Writer = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].label.withConfig({
  displayName: "LikingBook__Writer",
  componentId: "sc-1befqkz-1"
})(["display:block;width:35%;line-height:2rem;float:left;cursor:pointer;margin-left:5px;"]);
var Bookname = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].label.withConfig({
  displayName: "LikingBook__Bookname",
  componentId: "sc-1befqkz-2"
})(["display:block;width:calc(55% -5px);line-height:2rem;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;cursor:pointer;"]);
var Time = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].label.withConfig({
  displayName: "LikingBook__Time",
  componentId: "sc-1befqkz-3"
})(["display:block;width:10%;line-height:2rem;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;color:red;"]);

var LikedBook = function LikedBook(_ref) {
  var book = _ref.book;
  return __jsx(LikingList, null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: {
      pathname: 'librery',
      query: {
        id: book.User.userId
      }
    },
    as: "/librery/".concat(book.User.userId)
  }, __jsx("a", null, __jsx(Writer, null, book.User.nickname))), __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: {
      pathname: '/book',
      query: {
        bookid: book.id
      }
    },
    as: "/book/".concat(book.id)
  }, __jsx("a", null, __jsx(Bookname, null, book.name))), __jsx(Time, null));
};

LikedBook.propTypes = {
  book: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object
};
/* harmony default export */ __webpack_exports__["default"] = (LikedBook);

/***/ })

})
//# sourceMappingURL=_app.js.8545ca14c8619caba5e4.hot-update.js.map