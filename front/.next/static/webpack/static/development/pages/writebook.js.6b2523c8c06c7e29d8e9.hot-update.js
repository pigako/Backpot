webpackHotUpdate("static\\development\\pages\\writebook.js",{

/***/ "./pages/writebook.js":
/*!****************************!*\
  !*** ./pages/writebook.js ***!
  \****************************/
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
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






var SWriteBookDiv = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "writebook__SWriteBookDiv",
  componentId: "sc-1skj1bk-0"
})(["width:98%;margin:1rem 0rem 0rem 1rem;"]);
var SWriteBookTitle = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].h1.withConfig({
  displayName: "writebook__SWriteBookTitle",
  componentId: "sc-1skj1bk-1"
})(["display:inline-block;font-weight:bold;margin-left:10px;width:100%;"]);
var FormBook = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].form.withConfig({
  displayName: "writebook__FormBook",
  componentId: "sc-1skj1bk-2"
})([""]);
var ButtonDiv = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "writebook__ButtonDiv",
  componentId: "sc-1skj1bk-3"
})(["display:flex;align-items:center;justify-content:flex-end;"]);
var DivCard = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "writebook__DivCard",
  componentId: "sc-1skj1bk-4"
})(["display:flex;align-items:center;margin:1rem;width:80%;"]);
var DivCardLeft = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "writebook__DivCardLeft",
  componentId: "sc-1skj1bk-5"
})(["flex:1;"]);
var DivCardRight = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "writebook__DivCardRight",
  componentId: "sc-1skj1bk-6"
})(["flex:4;display:flex;& > input{width:100%;height:2rem;font-size:1rem;line-height:2rem;padding-left:10px;border:solid 2px #495057;border-radius:4px;transition:0.55s ease;&:hover{border:solid 2px #148cff;}&:focus{border:solid 2px #148cff;}}"]);

var WriteBook = function WriteBook() {
  var editorRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      editorLoded = _useState[0],
      setEditorLoded = _useState[1];

  var _ref = editorRef.current || {},
      CKEditor = _ref.CKEditor,
      ClassicEditor = _ref.ClassicEditor;

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(''),
      summaryText = _useState2[0],
      setSummaryText = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    editorRef.current = {
      CKEditor: __webpack_require__(/*! @ckeditor/ckeditor5-react */ "./node_modules/@ckeditor/ckeditor5-react/dist/ckeditor.js"),
      ClassicEditor: __webpack_require__(/*! @ckeditor/ckeditor5-build-classic */ "./node_modules/@ckeditor/ckeditor5-build-classic/build/ckeditor.js")
    };
    setEditorLoded(true);
  }, []);
  return __jsx(SWriteBookDiv, null, __jsx(react_helmet__WEBPACK_IMPORTED_MODULE_2___default.a, null, __jsx("title", null, "\uC0C8 \uC791\uD488"), __jsx("style", {
    type: "text/css"
  }, "\n            .ck-editor__editable { height: 500px;}\n          ")), __jsx(SWriteBookTitle, null, "\uC0C8 \uC5F0\uC7AC\uC791\uD488 \uB9CC\uB4E4\uAE30"), __jsx(FormBook, null, __jsx(ButtonDiv, null, __jsx(_components_designs_Button__WEBPACK_IMPORTED_MODULE_3__["default"], {
    color: "pink"
  }, "\uCDE8\uC18C"), __jsx(_components_designs_Button__WEBPACK_IMPORTED_MODULE_3__["default"], null, "\uB9CC\uB4E4\uAE30")), __jsx(DivCard, null, __jsx(DivCardLeft, null, __jsx("label", null, "\uC81C\uBAA9")), __jsx(DivCardRight, null, __jsx("input", {
    type: "text"
  }))), editorLoded ? __jsx(CKEditor, {
    editor: ClassicEditor,
    data: summaryText,
    onChange: function onChange(event, editor) {
      var data = editor.getData();
      setSummaryText(data);
    }
  }) : __jsx("p", null, "Editor Loding")));
};

/* harmony default export */ __webpack_exports__["default"] = (WriteBook);

/***/ })

})
//# sourceMappingURL=writebook.js.6b2523c8c06c7e29d8e9.hot-update.js.map