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
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_designs_Button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/designs/Button */ "./components/designs/Button.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _reducers_board__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../reducers/board */ "./reducers/board.js");

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;








var SBoard = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "detailboard__SBoard",
  componentId: "sc-18cmj5i-0"
})(["margin-top:10px;width:98%;"]);
var SDetailBoardTitle = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].h1.withConfig({
  displayName: "detailboard__SDetailBoardTitle",
  componentId: "sc-18cmj5i-1"
})(["display:inline-block;font-weight:bold;margin-left:10px;width:100%;"]);
var SBoardTop = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "detailboard__SBoardTop",
  componentId: "sc-18cmj5i-2"
})(["margin-top:1rem;padding-bottom:1rem;border-bottom:solid 2px #6441a5;"]);
var SBoardTitle = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "detailboard__SBoardTitle",
  componentId: "sc-18cmj5i-3"
})(["display:inline-block;"]);
var SBoardTitleLabel = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].label.withConfig({
  displayName: "detailboard__SBoardTitleLabel",
  componentId: "sc-18cmj5i-4"
})(["display:block;font-size:1.5rem;margin-bottom:1rem;"]);
var SBoardWriterLabel = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].label.withConfig({
  displayName: "detailboard__SBoardWriterLabel",
  componentId: "sc-18cmj5i-5"
})(["padding-right:1rem;border-right:solid 1px #495057;& > strong{font-weight:bold;}"]);
var SBoardCreateLabel = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].label.withConfig({
  displayName: "detailboard__SBoardCreateLabel",
  componentId: "sc-18cmj5i-6"
})(["padding-left:1rem;"]);
var SBoardTitleButtonDiv = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "detailboard__SBoardTitleButtonDiv",
  componentId: "sc-18cmj5i-7"
})(["float:right;"]);
var SBoardContent = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "detailboard__SBoardContent",
  componentId: "sc-18cmj5i-8"
})(["margin:1.5rem;& > p{font-size:1rem;}"]);
var SBoardComment = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "detailboard__SBoardComment",
  componentId: "sc-18cmj5i-9"
})(["border-top:solid 3px #6441a5;"]);
var SBoardCommentCountDiv = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "detailboard__SBoardCommentCountDiv",
  componentId: "sc-18cmj5i-10"
})(["height:2rem;background:#e7e7e7;display:flex;align-items:center;border-bottom:solid 3px #6441a5;& > label{font-size:1rem;font-weight:bold;margin-left:1rem;}"]);
var CommentCard = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "detailboard__CommentCard",
  componentId: "sc-18cmj5i-11"
})(["margin:1.5rem;"]);
var CommentCardTop = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "detailboard__CommentCardTop",
  componentId: "sc-18cmj5i-12"
})(["height:2rem;background:#f7f7f7;display:flex;align-items:center;border-bottom:solid 1px #6441a5;"]);
var CommentCardNickname = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].label.withConfig({
  displayName: "detailboard__CommentCardNickname",
  componentId: "sc-18cmj5i-13"
})(["font-size:1rem;font-weight:bold;margin-left:1rem;width:100%;"]);
var CommentCardCreateLabel = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].label.withConfig({
  displayName: "detailboard__CommentCardCreateLabel",
  componentId: "sc-18cmj5i-14"
})([""]);
var CommentCardContent = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "detailboard__CommentCardContent",
  componentId: "sc-18cmj5i-15"
})([""]);

var DetailBoard = function DetailBoard() {
  var board = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"])(function (state) {
    return state.board.board;
  });
  var onUpdateBoard = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function (e) {}, []);
  var onDeleteBoard = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function (e) {}, []);
  return __jsx(SBoard, null, __jsx(SDetailBoardTitle, null, "\uCD94\uCC9C\uAC8C\uC2DC\uAE00"), __jsx(SBoardTop, null, __jsx(SBoardTitle, null, __jsx(SBoardTitleLabel, null, board && board.title), __jsx(SBoardWriterLabel, null, __jsx("strong", null, board && board.User.nickname), " \uB2D8"), __jsx(SBoardCreateLabel, null, moment__WEBPACK_IMPORTED_MODULE_5___default()(board && board.createdAt).format('YY.MM.DD HH시 mm분'))), __jsx(SBoardTitleButtonDiv, null, __jsx(_components_designs_Button__WEBPACK_IMPORTED_MODULE_6__["default"], {
    onClick: onUpdateBoard
  }, "\uC218\uC815"), __jsx(_components_designs_Button__WEBPACK_IMPORTED_MODULE_6__["default"], {
    color: 'pink',
    onClick: onDeleteBoard
  }, "\uC0AD\uC81C"))), __jsx(SBoardContent, null, __jsx("p", {
    dangerouslySetInnerHTML: {
      __html: board && board.content
    }
  })), __jsx(SBoardComment, null, __jsx(SBoardCommentCountDiv, null, __jsx("label", null, "\uB313\uAE00 ", board && board.Comments.length, "\uAC1C")), board && board.Comments.map(function (comment) {
    __jsx(CommentCard, null, __jsx(CommentCardTop, null, __jsx(CommentCardNickname, null, comment.User.nickname), __jsx(CommentCardCreateLabel, null, moment__WEBPACK_IMPORTED_MODULE_5___default()(comment.createdAt).format('YY.MM.DD HH시 mm분'))), __jsx(CommentCardContent, null, __jsx("p", {
      dangerouslySetInnerHTML: {
        __html: comment.content
      }
    })));
  })));
};

DetailBoard.getInitialProps = function (context) {
  var id = _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default()(context.query.id, 10);

  context.store.dispatch({
    type: _reducers_board__WEBPACK_IMPORTED_MODULE_8__["LOAD_BOARD_REQUEST"],
    boardId: id
  });
};

/* harmony default export */ __webpack_exports__["default"] = (DetailBoard);

/***/ })

})
//# sourceMappingURL=detailboard.js.2443429cfe67b7445177.hot-update.js.map