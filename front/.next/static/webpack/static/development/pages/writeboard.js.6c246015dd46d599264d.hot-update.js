webpackHotUpdate("static\\development\\pages\\writeboard.js",{

/***/ "./pages/writeboard.js":
/*!*****************************!*\
  !*** ./pages/writeboard.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-helmet */ "./node_modules/react-helmet/lib/Helmet.js");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_designs_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/designs/Button */ "./components/designs/Button.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





var WriteDiv = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "writeboard__WriteDiv",
  componentId: "sc-3uiybh-0"
})(["margin-top:10px;width:98%;"]);
var WriteBoardDivTop = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "writeboard__WriteBoardDivTop",
  componentId: "sc-3uiybh-1"
})(["display:flex;align-items:center;margin-bottom:1rem;"]);
var SWriteBoardTitle = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].h1.withConfig({
  displayName: "writeboard__SWriteBoardTitle",
  componentId: "sc-3uiybh-2"
})(["display:inline-block;font-weight:bold;margin-left:10px;width:100%;"]);
var BoardTitleInput = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].input.withConfig({
  displayName: "writeboard__BoardTitleInput",
  componentId: "sc-3uiybh-3"
})(["margin-right:10px;border:solid 1px #495057;border-radius:4px;padding-left:10px;margin-bottom:1rem;height:2.25rem;width:100%;font-size:1.5rem;transition:0.55s ease;&:hover{border:solid 2px #148cff;}&:focus{border:solid 2px #148cff;}"]);

var WriteBoard = function WriteBoard() {
  var editorRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      editorLoded = _useState[0],
      setEditorLoded = _useState[1];

  var _ref = editorRef.current || {},
      CKEditor = _ref.CKEditor,
      ClassicEditor = _ref.ClassicEditor;

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(''),
      text = _useState2[0],
      setText = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(''),
      title = _useState3[0],
      setTitle = _useState3[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    editorRef.current = {
      CKEditor: __webpack_require__(/*! @ckeditor/ckeditor5-react */ "./node_modules/@ckeditor/ckeditor5-react/dist/ckeditor.js"),
      ClassicEditor: __webpack_require__(/*! @ckeditor/ckeditor5-build-classic */ "./node_modules/@ckeditor/ckeditor5-build-classic/build/ckeditor.js")
    };
    setEditorLoded(true);
  }, []);
  var onCancle = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (e) {
    next_router__WEBPACK_IMPORTED_MODULE_4___default.a.back();
  }, []);
  var onChangeTitle = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (e) {
    setTitle(e.target.value);
  });
  var onSubmit = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (e) {
    console.log(text);
  }, [text]);
  return __jsx(WriteDiv, null, __jsx(react_helmet__WEBPACK_IMPORTED_MODULE_2___default.a, null, __jsx("title", null, "\uCD94\uCC9C\uAC8C\uC2DC\uAE00 \uC791\uC131"), __jsx("style", {
    type: "text/css"
  }, "\n            .ck-editor__editable { height: 500px;}\n          ")), __jsx(WriteBoardDivTop, null, __jsx(SWriteBoardTitle, null, "\uCD94\uCC9C\uAC8C\uC2DC\uAE00 \uC791\uC131"), __jsx(_components_designs_Button__WEBPACK_IMPORTED_MODULE_3__["default"], {
    color: 'pink',
    onClick: onCancle
  }, "\uCDE8\uC18C"), __jsx(_components_designs_Button__WEBPACK_IMPORTED_MODULE_3__["default"], {
    onClick: onSubmit
  }, "\uC791\uC131")), __jsx(BoardTitleInput, {
    value: title,
    onChange: onChangeTitle
  }), editorLoded ? __jsx(CKEditor, {
    editor: ClassicEditor,
    data: text,
    onChange: function onChange(event, editor) {
      var data = editor.getData();
      setText(data);
    }
  }) : __jsx("p", null, "Editor Loding"));
};

WriteBoard.getInitialProps = function (context) {};

/* harmony default export */ __webpack_exports__["default"] = (WriteBoard);

/***/ })

})
//# sourceMappingURL=writeboard.js.6c246015dd46d599264d.hot-update.js.map