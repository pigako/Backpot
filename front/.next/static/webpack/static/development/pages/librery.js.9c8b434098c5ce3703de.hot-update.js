webpackHotUpdate("static\\development\\pages\\librery.js",{

/***/ "./pages/librery.js":
/*!**************************!*\
  !*** ./pages/librery.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../reducers/user */ "./reducers/user.js");
/* harmony import */ var _components_BookCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/BookCard */ "./components/BookCard.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;






var NovelList = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "librery__NovelList",
  componentId: "sc-1ufjrpz-0"
})(["display:flex;"]);
var MyBoard = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "librery__MyBoard",
  componentId: "sc-1ufjrpz-1"
})([""]);

var Librery = function Librery() {
  var user = Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["useSelector"])(function (state) {
    return state.user.otherUserInfo;
  }).length === 0 ? Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["useSelector"])(function (state) {
    return state.user.me;
  }) : Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["useSelector"])(function (state) {
    return state.user.otherUserInfo;
  });
  return __jsx("div", null, __jsx("h1", null, user.nickname, " \uB2D8\uC758 \uC11C\uC7AC\uC785\uB2C8\uB2E4."), __jsx(NovelList, null, user.Books.map(function (book) {
    return __jsx(_components_BookCard__WEBPACK_IMPORTED_MODULE_5__["default"], {
      key: +book.id,
      book: book,
      nickname: user.nickname
    });
  })), __jsx(MyBoard, null, " "));
};

Librery.getInitialProps = function _callee(context) {
  var id, state;
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          id = context.query.id;

          if (!id) {
            alert('잘못된 접근입니다.');
            next_router__WEBPACK_IMPORTED_MODULE_3___default.a.push('/');
          }

          state = context.store.getState();

          if (id !== (state.user.me && state.user.me.id)) {
            context.store.dispatch({
              type: _reducers_user__WEBPACK_IMPORTED_MODULE_4__["default"],
              data: id
            });
          }

        case 4:
        case "end":
          return _context.stop();
      }
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Librery);

/***/ })

})
//# sourceMappingURL=librery.js.9c8b434098c5ce3703de.hot-update.js.map