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
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../reducers/user */ "./reducers/user.js");
/* harmony import */ var _components_BookCard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/BookCard */ "./components/BookCard.js");
/* harmony import */ var _components_designs_Button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/designs/Button */ "./components/designs/Button.js");
/* harmony import */ var _components_BoardTable__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/BoardTable */ "./components/BoardTable.js");

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;








var LibreryTitle = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].h1.withConfig({
  displayName: "librery__LibreryTitle",
  componentId: "sc-1ufjrpz-0"
})(["margin:10px 0px 10px 0px;font-weight:bold;"]);
var NovelList = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "librery__NovelList",
  componentId: "sc-1ufjrpz-1"
})(["width:98%;overflow:hidden;border:solid 2px #495057;& > p{font-weight:bold;margin:1rem 0rem 1rem 1rem;}"]);
var NovelButtonDiv = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "librery__NovelButtonDiv",
  componentId: "sc-1ufjrpz-2"
})(["width:100%;margin:1rem 0rem 1rem 0rem;display:flex;justify-content:center;align-items:center;& > p{text-align:center;margin-right:1rem;}"]);
var MyBoard = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "librery__MyBoard",
  componentId: "sc-1ufjrpz-3"
})(["width:98%;overflow:hidden;margin-top:1rem;border:solid 2px #495057;margin-bottom:3rem;& > p{font-weight:bold;margin:1rem 0rem 1rem 1rem;}"]);
var BoardButtonDiv = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "librery__BoardButtonDiv",
  componentId: "sc-1ufjrpz-4"
})(["width:100%;margin:1rem 0rem 1rem 0rem;display:flex;justify-content:center;align-items:center;& > p{text-align:center;margin-right:1rem;}& > button{width:7rem;}"]);

var Librery = function Librery() {
  var user = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"])(function (state) {
    return state.user.otherUserInfo;
  }) ? Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"])(function (state) {
    return state.user.otherUserInfo;
  }) : Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"])(function (state) {
    return state.user.me;
  });

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"])(function (state) {
    return state.user.me;
  }),
      myId = _useSelector.id;

  var onGoWriteBook = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function (e) {
    next_router__WEBPACK_IMPORTED_MODULE_3___default.a.push('/writebook');
  }, []);
  var onGoWriteBoard = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function (e) {
    next_router__WEBPACK_IMPORTED_MODULE_3___default.a.push('/writeboard');
  }, []);
  return __jsx("div", null, __jsx(LibreryTitle, null, user.nickname, " \uB2D8\uC758 \uC11C\uC7AC\uC785\uB2C8\uB2E4."), __jsx(NovelList, null, __jsx("p", null, "\uC5F0\uC7AC\uC18C\uC124\uBAA9\uB85D"), user && user.Books.map(function (book) {
    return __jsx(_components_BookCard__WEBPACK_IMPORTED_MODULE_6__["default"], {
      key: +book.id,
      book: book,
      nickname: user.nickname
    });
  }), __jsx(NovelButtonDiv, null, user && user.Books[0] ? null : __jsx("p", null, "\uC5F0\uC7AC\uC911\uC778 \uC18C\uC124\uC774 \uC874\uC7AC\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4."), user && user.id === myId ? __jsx(_components_designs_Button__WEBPACK_IMPORTED_MODULE_7__["default"], {
    onClick: onGoWriteBook
  }, "\uC0C8 \uC791\uD488") : null)));
};

Librery.getInitialProps = function _callee(context) {
  var id;
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          id = context.query.id;
          context.store.dispatch({
            type: _reducers_user__WEBPACK_IMPORTED_MODULE_5__["LOAD_USER_REQUEST"],
            data: id
          });

        case 2:
        case "end":
          return _context.stop();
      }
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Librery);

/***/ })

})
//# sourceMappingURL=librery.js.70d2ca45d50b39058f7c.hot-update.js.map