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
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var WriteDiv = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "writeboard__WriteDiv",
  componentId: "sc-3uiybh-0"
})(["width:98%;"]);

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
  return __jsx(WriteDiv, null, __jsx("h1", null, "WriteBoard"), editorLoded ? __jsx(CKEditor, {
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
//# sourceMappingURL=writeboard.js.9790e9c63e09579ee54f.hot-update.js.map