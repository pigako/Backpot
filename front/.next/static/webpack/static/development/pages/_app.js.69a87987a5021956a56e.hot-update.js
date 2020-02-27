webpackHotUpdate("static\\development\\pages\\_app.js",{

/***/ "./components/LikedBook.js":
/*!*********************************!*\
  !*** ./components/LikedBook.js ***!
  \*********************************/
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
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var LikedList = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].li.withConfig({
  displayName: "LikedBook__LikedList",
  componentId: "gxwyjk-0"
})(["display:block;width:100%;height:2rem;text-align:left;border-radius:4px;border-bottom:solid 2px #495057;&:nth-child(2n){background:#495057;}&:hover{background:#148cff;}& + &{margin-top:10px;}"]);
var Writer = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].label.withConfig({
  displayName: "LikedBook__Writer",
  componentId: "gxwyjk-1"
})(["display:block;width:35%;line-height:2rem;float:left;cursor:pointer;margin-left:5px;"]);
var Bookname = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].label.withConfig({
  displayName: "LikedBook__Bookname",
  componentId: "gxwyjk-2"
})(["display:block;width:calc(65% -5px);line-height:2rem;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;cursor:pointer;"]);

var LikedBook = function LikedBook(_ref) {
  var likedBook = _ref.likedBook;
  return __jsx(LikedList, null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/writer"
  }, __jsx("a", null, __jsx(Writer, null, likedBook.writer))), __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: {
      pathname: '/book',
      query: {
        id: likedBook.bookname
      }
    },
    as: "/book/".concat(likedBook.bookname)
  }, __jsx("a", null, __jsx(Bookname, null, likedBook.bookname))));
};

LikedBook.propTypes = {
  likedBook: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.shape({
    writer: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
    bookname: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string
  })
};
/* harmony default export */ __webpack_exports__["default"] = (LikedBook);

/***/ })

})
//# sourceMappingURL=_app.js.69a87987a5021956a56e.hot-update.js.map