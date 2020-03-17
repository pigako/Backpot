webpackHotUpdate("static\\development\\pages\\writebook.js",{

/***/ "./pages/writebook.js":
/*!****************************!*\
  !*** ./pages/writebook.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-properties */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-descriptors */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptors.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-symbols */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-helmet */ "./node_modules/react-helmet/lib/Helmet.js");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _components_designs_Button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/designs/Button */ "./components/designs/Button.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");







var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default()(object); if (_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default.a) { var symbols = _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default()(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(target, key, source[key]); }); } else if (_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default.a) { _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default()(target, _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default()(source)); } else { ownKeys(Object(source)).forEach(function (key) { _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, key, _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(source, key)); }); } } return target; }







var SWriteBookDiv = styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].div.withConfig({
  displayName: "writebook__SWriteBookDiv",
  componentId: "sc-1skj1bk-0"
})(["width:98%;margin:1rem 0rem 0rem 1rem;"]);
var SWriteBookTitle = styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].h1.withConfig({
  displayName: "writebook__SWriteBookTitle",
  componentId: "sc-1skj1bk-1"
})(["display:inline-block;font-weight:bold;margin-left:10px;width:100%;"]);
var FormBook = styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].form.withConfig({
  displayName: "writebook__FormBook",
  componentId: "sc-1skj1bk-2"
})([""]);
var ButtonDiv = styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].div.withConfig({
  displayName: "writebook__ButtonDiv",
  componentId: "sc-1skj1bk-3"
})(["display:flex;align-items:center;justify-content:flex-end;"]);
var DivCard = styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].div.withConfig({
  displayName: "writebook__DivCard",
  componentId: "sc-1skj1bk-4"
})(["display:flex;align-items:center;margin:1rem;width:80%;"]);
var DivCardLeft = styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].div.withConfig({
  displayName: "writebook__DivCardLeft",
  componentId: "sc-1skj1bk-5"
})(["flex:1;"]);
var DivCardRight = styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].div.withConfig({
  displayName: "writebook__DivCardRight",
  componentId: "sc-1skj1bk-6"
})(["flex:4;display:flex;& > input{width:100%;height:2rem;font-size:1rem;line-height:2rem;padding-left:10px;border:solid 2px #495057;border-radius:4px;transition:0.55s ease;&:hover{border:solid 2px #148cff;}&:focus{border:solid 2px #148cff;}}"]);
var DayDiv = styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].div.withConfig({
  displayName: "writebook__DayDiv",
  componentId: "sc-1skj1bk-7"
})(["& > button{width:2rem;padding:0;}"]);

var WriteBook = function WriteBook() {
  var editorRef = Object(react__WEBPACK_IMPORTED_MODULE_7__["useRef"])();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_7__["useState"])(false),
      editorLoded = _useState[0],
      setEditorLoded = _useState[1];

  var _ref = editorRef.current || {},
      CKEditor = _ref.CKEditor,
      ClassicEditor = _ref.ClassicEditor;

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_7__["useState"])(''),
      bookName = _useState2[0],
      setBookName = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_7__["useState"])({
    sun: false,
    mon: false,
    tue: false,
    wed: false,
    thu: false,
    fri: false,
    sat: false
  }),
      serialDay = _useState3[0],
      setSerialDay = _useState3[1];

  var sun = serialDay.sun,
      mon = serialDay.mon,
      tue = serialDay.tue,
      wed = serialDay.wed,
      thu = serialDay.thu,
      fri = serialDay.fri,
      sat = serialDay.sat;

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_7__["useState"])(''),
      summaryText = _useState4[0],
      setSummaryText = _useState4[1];

  Object(react__WEBPACK_IMPORTED_MODULE_7__["useEffect"])(function () {
    editorRef.current = {
      CKEditor: __webpack_require__(/*! @ckeditor/ckeditor5-react */ "./node_modules/@ckeditor/ckeditor5-react/dist/ckeditor.js"),
      ClassicEditor: __webpack_require__(/*! @ckeditor/ckeditor5-build-classic */ "./node_modules/@ckeditor/ckeditor5-build-classic/build/ckeditor.js")
    };
    setEditorLoded(true);
  }, []);
  var onCancle = Object(react__WEBPACK_IMPORTED_MODULE_7__["useCallback"])(function (e) {
    next_router__WEBPACK_IMPORTED_MODULE_11___default.a.back();
  }, []);
  var onSubmitForm = Object(react__WEBPACK_IMPORTED_MODULE_7__["useCallback"])(function (e) {
    e.preventDefault();
  }, []);
  var onChangeDay = Object(react__WEBPACK_IMPORTED_MODULE_7__["useCallback"])(function (e) {
    setSerialDay(_objectSpread({}, serialDay, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])({}, e.target.name, !e.target.value)));
  }, [serialDay]);
  return __jsx(SWriteBookDiv, null, __jsx(react_helmet__WEBPACK_IMPORTED_MODULE_9___default.a, null, __jsx("title", null, "\uC0C8 \uC791\uD488"), __jsx("style", {
    type: "text/css"
  }, "\n            .ck-editor__editable { height: 500px;}\n          ")), __jsx(SWriteBookTitle, null, "\uC0C8 \uC5F0\uC7AC\uC791\uD488 \uB9CC\uB4E4\uAE30"), __jsx(FormBook, {
    onSubmit: onSubmitForm
  }, __jsx(ButtonDiv, null, __jsx(_components_designs_Button__WEBPACK_IMPORTED_MODULE_10__["default"], {
    color: "pink",
    onClick: onCancle
  }, "\uCDE8\uC18C"), __jsx(_components_designs_Button__WEBPACK_IMPORTED_MODULE_10__["default"], {
    type: "submit"
  }, "\uB9CC\uB4E4\uAE30")), __jsx(DivCard, null, __jsx(DivCardLeft, null, __jsx("label", null, "\uC81C\uBAA9")), __jsx(DivCardRight, null, __jsx("input", {
    type: "text"
  }))), __jsx(DivCard, null, __jsx(DivCardLeft, null, __jsx("label", null, "\uC378\uB124\uC77C")), __jsx(DivCardRight, null)), __jsx(DivCard, null, __jsx(DivCardLeft, null, __jsx("label", null, "\uC5F0\uC7AC\uC694\uC77C")), __jsx(DivCardRight, null, __jsx(DayDiv, null, __jsx(_components_designs_Button__WEBPACK_IMPORTED_MODULE_10__["default"], {
    name: "sun",
    value: sun,
    onChange: onChangeDay
  }, "\uC77C"), __jsx(_components_designs_Button__WEBPACK_IMPORTED_MODULE_10__["default"], {
    name: "mon",
    value: mon,
    onChange: onChangeDay
  }, "\uC6D4"), __jsx(_components_designs_Button__WEBPACK_IMPORTED_MODULE_10__["default"], {
    name: "tue",
    value: tue,
    onChange: onChangeDay
  }, "\uD654"), __jsx(_components_designs_Button__WEBPACK_IMPORTED_MODULE_10__["default"], {
    name: "wed",
    value: wed,
    onChange: onChangeDay
  }, "\uC218"), __jsx(_components_designs_Button__WEBPACK_IMPORTED_MODULE_10__["default"], {
    name: "thu",
    value: thu,
    onChange: onChangeDay
  }, "\uBAA9"), __jsx(_components_designs_Button__WEBPACK_IMPORTED_MODULE_10__["default"], {
    name: "fri",
    value: fri,
    onChange: onChangeDay
  }, "\uAE08"), __jsx(_components_designs_Button__WEBPACK_IMPORTED_MODULE_10__["default"], {
    name: "sat",
    value: sat,
    onChange: onChangeDay
  }, "\uD1A0")))), __jsx(DivCard, null, __jsx(DivCardLeft, null), __jsx(DivCardRight, null)), editorLoded ? __jsx(CKEditor, {
    editor: ClassicEditor,
    data: summaryText,
    onChange: function onChange(event, editor) {
      var data = editor.getData();
      setSummaryText(data);
    }
  }) : __jsx("p", null, "Editor Loding")));
};

/* harmony default export */ __webpack_exports__["default"] = (WriteBook); // arr.reduce((acc, cur) => acc.concat(cur), []).join(',')

/***/ })

})
//# sourceMappingURL=writebook.js.cf7bd204d6ca2f8f5ade.hot-update.js.map