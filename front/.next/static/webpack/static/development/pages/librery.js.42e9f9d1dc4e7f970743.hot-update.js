webpackHotUpdate("static\\development\\pages\\librery.js",{

/***/ "./components/BookCard.js":
/*!********************************!*\
  !*** ./components/BookCard.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





var Card = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "BookCard__Card",
  componentId: "lzuq87-0"
})(["border:solid 1px #495057;width:30rem;height:15rem;& + &{margin-left:20px;margin-bottom:20px;}"]);
var Thumbnail = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].img.withConfig({
  displayName: "BookCard__Thumbnail",
  componentId: "lzuq87-1"
})(["width:10rem;height:13rem;float:left;margin-top:1rem;margin-left:1rem;"]);
var CardContent = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "BookCard__CardContent",
  componentId: "lzuq87-2"
})(["width:16rem;height:9rem;float:right;margin-top:3rem;margin-right:1rem;display:flex;flex-direction:column;justify-content:space-between;"]);
var Title = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].label.withConfig({
  displayName: "BookCard__Title",
  componentId: "lzuq87-3"
})(["display:block;font-weight:bold;"]);
var Genre = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].label.withConfig({
  displayName: "BookCard__Genre",
  componentId: "lzuq87-4"
})(["display:block;"]);
var Writer = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].label.withConfig({
  displayName: "BookCard__Writer",
  componentId: "lzuq87-5"
})(["display:block;"]);
var CreatedDate = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].label.withConfig({
  displayName: "BookCard__CreatedDate",
  componentId: "lzuq87-6"
})(["display:block;"]);

var BookCard = function BookCard(_ref) {
  var book = _ref.book,
      nickname = _ref.nickname;
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useDispatch"])();
  return __jsx(Card, null, __jsx(Thumbnail, {
    src: book.thumbnail
  }), __jsx(CardContent, null, __jsx(Title, null, book.name), __jsx(Genre, null, book.BookGenre[0].name), __jsx(Writer, null, nickname), __jsx(CreatedDate, null, "\uB4F1\uB85D\uC77C ", moment__WEBPACK_IMPORTED_MODULE_4___default()(book.createdAt).format(yyyy.MM.dd))));
};

BookCard.propTypes = {
  book: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
  nickname: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (BookCard);

/***/ })

})
//# sourceMappingURL=librery.js.42e9f9d1dc4e7f970743.hot-update.js.map