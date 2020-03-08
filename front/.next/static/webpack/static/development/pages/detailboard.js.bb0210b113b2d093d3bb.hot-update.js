webpackHotUpdate("static\\development\\pages\\detailboard.js",{

/***/ "./pages/detailboard.js":
/*!******************************!*\
  !*** ./pages/detailboard.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/parse-int */ "./node_modules/@babel/runtime-corejs2/core-js/parse-int.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _components_designs_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/designs/Button */ "./components/designs/Button.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;






var SBoard = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "detailboard__SBoard",
  componentId: "sc-18cmj5i-0"
})([""]);
var SBoardTop = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "detailboard__SBoardTop",
  componentId: "sc-18cmj5i-1"
})([""]);
var SBoardTitle = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "detailboard__SBoardTitle",
  componentId: "sc-18cmj5i-2"
})([""]);
var SBoardTitleLabel = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].label.withConfig({
  displayName: "detailboard__SBoardTitleLabel",
  componentId: "sc-18cmj5i-3"
})([""]);
var SBoardWriterLabel = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].label.withConfig({
  displayName: "detailboard__SBoardWriterLabel",
  componentId: "sc-18cmj5i-4"
})([""]);
var SBoardCreateLabel = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].label.withConfig({
  displayName: "detailboard__SBoardCreateLabel",
  componentId: "sc-18cmj5i-5"
})([""]);
var SBoardTitleButtonDiv = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "detailboard__SBoardTitleButtonDiv",
  componentId: "sc-18cmj5i-6"
})([""]);
var SBoardContent = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "detailboard__SBoardContent",
  componentId: "sc-18cmj5i-7"
})([""]);
var SBoardComment = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "detailboard__SBoardComment",
  componentId: "sc-18cmj5i-8"
})([""]);

var DetailBoard = function DetailBoard(_ref) {
  var board = _ref.board;
  // const board = useSelector(state => state.board.boards).find(v => v.id === id);
  return __jsx(SBoard, null, __jsx(SBoardTop, null, __jsx(SBoardTitle, null, __jsx(SBoardTitleLabel, null, board.title), __jsx(SBoardWriterLabel, null, board.User.nickname), __jsx(SBoardCreateLabel, null, board.createdAt)), __jsx(SBoardTitleButtonDiv, null)), __jsx("p", null, board.content), __jsx(SBoardComment, null));
};

DetailBoard.propTypes = {
  board: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object.isRequired
};

DetailBoard.getInitialProps = function (context) {
  var id = _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default()(context.query.id, 10);

  var state = context.store.getState();
  var board = state.board && state.board.boards.find(function (v) {
    return v.id === id;
  });
  return {
    board: board
  };
};

/* harmony default export */ __webpack_exports__["default"] = (DetailBoard);

/***/ })

})
//# sourceMappingURL=detailboard.js.bb0210b113b2d093d3bb.hot-update.js.map