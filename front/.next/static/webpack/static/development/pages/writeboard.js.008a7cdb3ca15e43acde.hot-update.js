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
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var WriteDiv = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "writeboard__WriteDiv",
  componentId: "sc-3uiybh-0"
})(["width:98%;"]);
var WriteBoardDivTop = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "writeboard__WriteBoardDivTop",
  componentId: "sc-3uiybh-1"
})(["margin-bottom:1rem;"]);
var SWriteBoardTitle = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].h1.withConfig({
  displayName: "writeboard__SWriteBoardTitle",
  componentId: "sc-3uiybh-2"
})(["display:inline-block;font-weight:bold;margin-left:10px;width:200px;"]);
var SButton = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(_components_designs_Button__WEBPACK_IMPORTED_MODULE_3__["default"]).withConfig({
  displayName: "writeboard__SButton",
  componentId: "sc-3uiybh-3"
})(["float:right;"]);

var WriteBoard = function WriteBoard() {
  var editorRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      editorLoded = _useState[0],
      setEditorLoded = _useState[1];

  var _ref = editorRef.current || {},
      CKEditor = _ref.CKEditor,
      ClassicEditor = _ref.ClassicEditor;

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    editorRef.current = {
      CKEditor: __webpack_require__(/*! @ckeditor/ckeditor5-react */ "./node_modules/@ckeditor/ckeditor5-react/dist/ckeditor.js"),
      ClassicEditor: __webpack_require__(/*! @ckeditor/ckeditor5-build-classic */ "./node_modules/@ckeditor/ckeditor5-build-classic/build/ckeditor.js")
    };
    setEditorLoded(true);
  }, []);
  return __jsx(WriteDiv, null, __jsx(react_helmet__WEBPACK_IMPORTED_MODULE_2___default.a, null, __jsx("title", null, "\uCD94\uCC9C\uAC8C\uC2DC\uAE00 \uC791\uC131"), __jsx("style", {
    type: "text/css"
  }, "\n            .ck-editor__editable {min-height: 500px;}\n          ")), __jsx(WriteBoardDivTop, null, __jsx(SWriteBoardTitle, null, "\uAC8C\uC2DC\uAE00 \uC791\uC131"), __jsx(SButton, null, "\uC791\uC131")), __jsx("br", null), editorLoded ? __jsx(CKEditor, {
    editor: ClassicEditor,
    data: "",
    onInit: function onInit(editor) {
      console.log('Editor is ready to use!', editor);
    },
    onChange: function onChange(event, editor) {
      var data = editor.getData();
      console.log({
        event: event,
        editor: editor,
        data: data
      });
    },
    onBlur: function onBlur(event, editor) {
      console.log('Blur', editor);
    },
    onFocus: function onFocus(event, editor) {
      console.log('Focus', editor);
    }
  }) : __jsx("p", null, "Editor Loding"));
};

WriteBoard.getInitialProps = function (context) {};

/* harmony default export */ __webpack_exports__["default"] = (WriteBoard);

/***/ })

})
//# sourceMappingURL=writeboard.js.008a7cdb3ca15e43acde.hot-update.js.map