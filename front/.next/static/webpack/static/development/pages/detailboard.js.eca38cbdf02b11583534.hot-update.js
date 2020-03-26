webpackHotUpdate("static\\development\\pages\\detailboard.js",{

/***/ "./components/CommentCard.js":
/*!***********************************!*\
  !*** ./components/CommentCard.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _reducers_board__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../reducers/board */ "./reducers/board.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






var SCommentCard = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "CommentCard__SCommentCard",
  componentId: "sc-1fhrn1i-0"
})(["margin:1.5rem;"]);
var CommentCardTop = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "CommentCard__CommentCardTop",
  componentId: "sc-1fhrn1i-1"
})(["height:2rem;background:#f7f7f7;border-bottom:solid 1px #6441a5;display:inline-block;width:100%;font-size:1rem;& > label{line-height:2rem;}"]);
var CommentCardNickname = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].label.withConfig({
  displayName: "CommentCard__CommentCardNickname",
  componentId: "sc-1fhrn1i-2"
})(["font-weight:bold;margin-left:1rem;"]);
var CommentCardCreateLabel = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].label.withConfig({
  displayName: "CommentCard__CommentCardCreateLabel",
  componentId: "sc-1fhrn1i-3"
})(["display:block;float:right;"]);
var CommentUpDelButtonDiv = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "CommentCard__CommentUpDelButtonDiv",
  componentId: "sc-1fhrn1i-4"
})(["font-size:1rem;display:inline-block;float:right;margin-right:1rem;line-height:2rem;& > a{margin-left:10px;margin-right:10px;cursor:pointer;&:hover{color:#148cff;}}"]);
var CommentCardContent = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "CommentCard__CommentCardContent",
  componentId: "sc-1fhrn1i-5"
})(["margin:1.5rem;& > div{font-size:1rem;line-height:1.5rem;}"]);

var CommentCard = function CommentCard(_ref) {
  var comment = _ref.comment,
      type = _ref.type;

  var _ref2 = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"])(function (state) {
    return state.user.me;
  }) || false,
      myId = _ref2.id;

  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useDispatch"])();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      isUpdatingComment = _useState[0],
      setIsUpdatingComment = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(''),
      updateCommentText = _useState2[0],
      setUpdateCommentText = _useState2[1];

  var editorRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();

  var _ref3 = editorRef.current || {},
      CKEditor = _ref3.CKEditor,
      ClassicEditor = _ref3.ClassicEditor;

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      editorLoded = _useState3[0],
      setEditorLoded = _useState3[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    editorRef.current = {
      CKEditor: __webpack_require__(/*! @ckeditor/ckeditor5-react */ "./node_modules/@ckeditor/ckeditor5-react/dist/ckeditor.js"),
      ClassicEditor: __webpack_require__(/*! @ckeditor/ckeditor5-build-classic */ "./node_modules/@ckeditor/ckeditor5-build-classic/build/ckeditor.js")
    };
    setEditorLoded(true);
  }, []);
  var onUpdateComment = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (e) {
    if (isUpdatingComment) {
      dispatch({
        type: _reducers_board__WEBPACK_IMPORTED_MODULE_5__["UPDATE_COMMENT_REQUEST"],
        data: {
          id: comment.id,
          content: updateCommentText
        }
      });
      setIsUpdatingComment(false);
    } else {
      setIsUpdatingComment(true);
    }
  }, [isUpdatingComment, comment && comment.id, updateCommentText]);
  var onUpdateCommentCancle = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (e) {
    setIsUpdatingComment(false);
    setUpdateCommentText(comment.content);
  }, [comment && comment.content]);
  var onDeleteComment = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (e) {
    console.log('CommentCard', comment.id);
    dispatch({
      type: _reducers_board__WEBPACK_IMPORTED_MODULE_5__["DELETE_COMMENT_REQUEST"],
      commentId: comment.id
    });
  }, [comment && comment.id]);
  return __jsx(SCommentCard, {
    key: +comment.id
  }, __jsx(CommentCardTop, null, __jsx(CommentCardNickname, null, comment.User.nickname), __jsx(CommentCardCreateLabel, null, moment__WEBPACK_IMPORTED_MODULE_3___default()(comment.createdAt).format('YY.MM.DD HH시 mm분')), myId === comment.User.id ? __jsx(CommentUpDelButtonDiv, null, isUpdatingComment ? __jsx("a", {
    onClick: onUpdateCommentCancle
  }, "\uCDE8\uC18C") : null, __jsx("a", {
    onClick: onUpdateComment
  }, "\uC218\uC815"), __jsx("a", {
    onClick: onDeleteComment
  }, "\uC0AD\uC81C")) : null), __jsx(CommentCardContent, null, isUpdatingComment ? editorLoded ? __jsx(CKEditor, {
    key: 'board',
    editor: ClassicEditor,
    data: comment && comment.content,
    onChange: function onChange(event, editor) {
      var data = editor.getData();
      setUpdateCommentText(data);
    }
  }) : __jsx("p", null, "Editor Loding") : __jsx("div", {
    dangerouslySetInnerHTML: {
      __html: comment.content
    }
  })));
};

CommentCard.propTypes = {
  comment: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
  type: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (CommentCard);

/***/ })

})
//# sourceMappingURL=detailboard.js.eca38cbdf02b11583534.hot-update.js.map