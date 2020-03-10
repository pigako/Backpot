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
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-helmet */ "./node_modules/react-helmet/lib/Helmet.js");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_designs_Button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/designs/Button */ "./components/designs/Button.js");
/* harmony import */ var _components_CommentCard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/CommentCard */ "./components/CommentCard.js");
/* harmony import */ var _reducers_board__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../reducers/board */ "./reducers/board.js");

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;










var SBoard = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "detailboard__SBoard",
  componentId: "sc-18cmj5i-0"
})(["width:98%;margin-top:10px;"]);
var SDetailBoardTitle = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].h1.withConfig({
  displayName: "detailboard__SDetailBoardTitle",
  componentId: "sc-18cmj5i-1"
})(["display:inline-block;font-weight:bold;margin-left:10px;width:100%;"]);
var SBoardTop = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "detailboard__SBoardTop",
  componentId: "sc-18cmj5i-2"
})(["margin-top:1rem;padding-bottom:1rem;border-bottom:solid 2px #6441a5;"]);
var SBoardTitle = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "detailboard__SBoardTitle",
  componentId: "sc-18cmj5i-3"
})(["display:inline-block;"]);
var SBoardTitleLabel = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].label.withConfig({
  displayName: "detailboard__SBoardTitleLabel",
  componentId: "sc-18cmj5i-4"
})(["display:block;font-size:1.5rem;margin-bottom:1rem;"]);
var SBoardWriterLabel = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].label.withConfig({
  displayName: "detailboard__SBoardWriterLabel",
  componentId: "sc-18cmj5i-5"
})(["padding-right:1rem;border-right:solid 1px #495057;& > strong{font-weight:bold;}"]);
var SBoardCreateLabel = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].label.withConfig({
  displayName: "detailboard__SBoardCreateLabel",
  componentId: "sc-18cmj5i-6"
})(["padding-left:1rem;"]);
var SBoardTitleButtonDiv = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "detailboard__SBoardTitleButtonDiv",
  componentId: "sc-18cmj5i-7"
})(["float:right;"]);
var SBoardContent = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "detailboard__SBoardContent",
  componentId: "sc-18cmj5i-8"
})(["margin:1.5rem;& > div{font-size:1rem;line-height:1.5rem;}"]);
var SBoardComment = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "detailboard__SBoardComment",
  componentId: "sc-18cmj5i-9"
})(["border-top:solid 3px #6441a5;"]);
var SBoardCommentCountDiv = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "detailboard__SBoardCommentCountDiv",
  componentId: "sc-18cmj5i-10"
})(["height:2rem;background:#e7e7e7;display:flex;align-items:center;border-bottom:solid 3px #6441a5;& > label{font-size:1rem;font-weight:bold;margin-left:1rem;}"]);
var CommentDiv = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "detailboard__CommentDiv",
  componentId: "sc-18cmj5i-11"
})(["height:330px;"]);
var CommentButton = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])(_components_designs_Button__WEBPACK_IMPORTED_MODULE_7__["default"]).withConfig({
  displayName: "detailboard__CommentButton",
  componentId: "sc-18cmj5i-12"
})(["width:8rem;margin-right:1.5rem;float:right;"]);

var DetailBoard = function DetailBoard() {
  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(function (state) {
    return state.board;
  }),
      boardDeleted = _useSelector.boardDeleted,
      board = _useSelector.board;

  var _ref = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(function (state) {
    return state.user.me;
  }) || false,
      myId = _ref.id;

  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useDispatch"])();
  var editorRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      editorLoded = _useState[0],
      setEditorLoded = _useState[1];

  var _ref2 = editorRef.current || {},
      CKEditor = _ref2.CKEditor,
      ClassicEditor = _ref2.ClassicEditor;

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(''),
      userComment = _useState2[0],
      setUserComment = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(board && board.content),
      updateText = _useState3[0],
      setUpdateText = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      isUpdating = _useState4[0],
      setIsUpdating = _useState4[1];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    editorRef.current = {
      CKEditor: __webpack_require__(/*! @ckeditor/ckeditor5-react */ "./node_modules/@ckeditor/ckeditor5-react/dist/ckeditor.js"),
      ClassicEditor: __webpack_require__(/*! @ckeditor/ckeditor5-build-classic */ "./node_modules/@ckeditor/ckeditor5-build-classic/build/ckeditor.js")
    };
    setEditorLoded(true);
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if (boardDeleted) {
      next_router__WEBPACK_IMPORTED_MODULE_6___default.a.push('/board');
    }
  }, [boardDeleted]);
  var onUpdateBoard = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function (e) {
    if (isUpdating) {
      dispatch({
        type: _reducers_board__WEBPACK_IMPORTED_MODULE_9__["UPDATE_BOARD_REQUEST"],
        data: {
          id: board.id,
          content: updateText
        }
      });
      setIsUpdating(false);
    } else {
      setIsUpdating(true);
    }
  }, [isUpdating, board && board.id, updateText]);
  var onDeleteBoard = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function (e) {
    dispatch({
      type: _reducers_board__WEBPACK_IMPORTED_MODULE_9__["DELETE_BOARD_REQUEST"],
      boardId: board.id
    });
  }, [board && board.id]);
  return __jsx(SBoard, null, __jsx(react_helmet__WEBPACK_IMPORTED_MODULE_5___default.a, null, __jsx("title", null, board && board.title), __jsx("style", {
    type: "text/css"
  }, "\n            .ck-editor__editable { height: 200px;}\n            .ck.ck-reset.ck-editor.ck-rounded-corners {margin: 1.5rem;}\n          ")), __jsx(SDetailBoardTitle, null, "\uCD94\uCC9C\uAC8C\uC2DC\uAE00"), __jsx(SBoardTop, null, __jsx(SBoardTitle, null, __jsx(SBoardTitleLabel, null, board && board.title), __jsx(SBoardWriterLabel, null, __jsx("strong", null, board && board.User.nickname), " \uB2D8"), __jsx(SBoardCreateLabel, null, moment__WEBPACK_IMPORTED_MODULE_4___default()(board && board.createdAt).format('YY.MM.DD HH시 mm분'))), myId === (board && board.User.id) ? __jsx(SBoardTitleButtonDiv, null, __jsx(_components_designs_Button__WEBPACK_IMPORTED_MODULE_7__["default"], {
    onClick: onUpdateBoard
  }, "\uC218\uC815"), __jsx(_components_designs_Button__WEBPACK_IMPORTED_MODULE_7__["default"], {
    color: 'pink',
    onClick: onDeleteBoard
  }, "\uC0AD\uC81C")) : null), __jsx(SBoardContent, null, isUpdating ? __jsx(CKEditor, {
    key: 'board',
    editor: ClassicEditor,
    data: updateText,
    onChange: function onChange(event, editor) {
      var data = editor.getData();
      setUpdateText(data);
    }
  }) : __jsx("div", {
    dangerouslySetInnerHTML: {
      __html: board && board.content
    }
  })), __jsx(SBoardComment, null, __jsx(SBoardCommentCountDiv, null, __jsx("label", null, "\uB313\uAE00 ", board && board.Comments.length, "\uAC1C")), board && board.Comments.map(function (comment) {
    return __jsx(_components_CommentCard__WEBPACK_IMPORTED_MODULE_8__["default"], {
      key: +comment.id,
      comment: comment
    });
  })), myId && __jsx(CommentDiv, null, editorLoded ? __jsx(CKEditor, {
    key: 'comment',
    editor: ClassicEditor,
    data: userComment,
    onChange: function onChange(event, editor) {
      var data = editor.getData();
      setUserComment(data);
    }
  }) : __jsx("p", null, "Editor Loding"), __jsx(CommentButton, null, "\uB313\uAE00 \uC4F0\uAE30")));
};

DetailBoard.getInitialProps = function (context) {
  var id = _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default()(context.query.id, 10);

  context.store.dispatch({
    type: _reducers_board__WEBPACK_IMPORTED_MODULE_9__["LOAD_BOARD_REQUEST"],
    boardId: id
  });
};

/* harmony default export */ __webpack_exports__["default"] = (DetailBoard);

/***/ })

})
//# sourceMappingURL=detailboard.js.634c345aabcb3fcd064e.hot-update.js.map