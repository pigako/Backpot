webpackHotUpdate("static\\development\\pages\\board.js",{

/***/ "./pages/board.js":
/*!************************!*\
  !*** ./pages/board.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _reducers_board__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../reducers/board */ "./reducers/board.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _components_BoardTable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/BoardTable */ "./components/BoardTable.js");
/* harmony import */ var _components_designs_Button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/designs/Button */ "./components/designs/Button.js");


var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;







var SBoard = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "board__SBoard",
  componentId: "sc-1jsbbr3-0"
})(["margin-top:10px;"]);
var BoardDivTop = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "board__BoardDivTop",
  componentId: "sc-1jsbbr3-1"
})(["display:flex;align-items:center;"]);
var SBoardTitle = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].h1.withConfig({
  displayName: "board__SBoardTitle",
  componentId: "sc-1jsbbr3-2"
})(["display:inline-block;font-weight:bold;margin-left:10px;width:200px;"]);
var SearchForm = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].form.withConfig({
  displayName: "board__SearchForm",
  componentId: "sc-1jsbbr3-3"
})(["display:flex;justify-content:flex-end;align-items:center;padding:0px 10px;width:99%;& a{color:white;height:50px;padding-right:10px;display:flex;align-items:center;justify-content:center;}"]);
var SearchInput = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].input.withConfig({
  displayName: "board__SearchInput",
  componentId: "sc-1jsbbr3-4"
})(["margin-right:10px;border:solid 2px #000000;border-radius:4px;padding-left:10px;height:2.25rem;width:10rem;font-size:1.5rem;transition:0.55s ease;&:hover{width:30rem;}&:focus{width:30rem;}"]);
var PageButtonDiv = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "board__PageButtonDiv",
  componentId: "sc-1jsbbr3-5"
})([""]);

var Board = function Board() {
  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["useSelector"])(function (state) {
    return state.board;
  }),
      boards = _useSelector.boards,
      hasMoreBoards = _useSelector.hasMoreBoards;

  var _useSelector2 = Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["useSelector"])(function (state) {
    return state.user;
  }),
      me = _useSelector2.me;

  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["useDispatch"])();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([]),
      lastIdArray = _useState[0],
      setLastIdArray = _useState[1];

  var onScroll = Object(react__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(function (e) {
    if (window.scrollY + document.documentElement.clientHeight > document.documentElement.scrollHeight - 300) {
      if (hasMoreBoards) {
        var lastId = boards[boards.length - 1].id;

        if (!lastIdArray.includes(lastId)) {
          dispatch({
            type: _reducers_board__WEBPACK_IMPORTED_MODULE_5__["LOAD_BOARDS_REQUEST"],
            lastId: lastId
          });
          setLastIdArray([].concat(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(lastIdArray), [lastId]));
        }
      }
    }
  }, [hasMoreBoards, boards.length]);
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    window.addEventListener('scroll', onScroll);

    if (lastIdArray) {
      setLastIdArray([]);
    }

    return function () {
      window.removeEventListener('scroll', onScroll);
    };
  }, [boards.length]);
  var onCreateBoard = Object(react__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(function (e) {
    next_router__WEBPACK_IMPORTED_MODULE_4___default.a.push('/writeboard');
  }, []);
  var onSearchBoard = Object(react__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(function (e) {}, []);
  return __jsx(SBoard, null, __jsx(BoardDivTop, null, __jsx(SBoardTitle, null, "\uCD94\uCC9C \uAC8C\uC2DC\uD310"), me && __jsx(_components_designs_Button__WEBPACK_IMPORTED_MODULE_8__["default"], {
    onClick: onCreateBoard
  }, "\uAE00\uC4F0\uAE30"), __jsx(SearchForm, null, __jsx(SearchInput, null), __jsx(_components_designs_Button__WEBPACK_IMPORTED_MODULE_8__["default"], {
    onClick: onSearchBoard
  }, "\uAC80\uC0C9"))), boards && __jsx(_components_BoardTable__WEBPACK_IMPORTED_MODULE_7__["default"], {
    board: boards
  }), boards && __jsx(PageButtonDiv, null));
};

Board.getInitialProps = function _callee(context) {
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          context.store.dispatch({
            type: _reducers_board__WEBPACK_IMPORTED_MODULE_5__["LOAD_BOARDS_REQUEST"]
          });

        case 1:
        case "end":
          return _context.stop();
      }
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Board);

/***/ })

})
//# sourceMappingURL=board.js.52249b294c537e12db0e.hot-update.js.map