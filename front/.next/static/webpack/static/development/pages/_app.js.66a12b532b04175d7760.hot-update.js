webpackHotUpdate("static\\development\\pages\\_app.js",{

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var Menu = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].header.withConfig({
  displayName: "Header__Menu",
  componentId: "i7gymj-0"
})(["position:flexd;top:0px;left:0px;width:100%;height:50px;display:flex;align-items:center;padding:0px 10px;z-index:10;background-color:rgba(20,20,20,0.8);box-shadow:0px 1px 2px 5px rgba(0,0,0,0.8);margin-bottom:10px;"]);
var List = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].ul.withConfig({
  displayName: "Header__List",
  componentId: "i7gymj-1"
})(["display:flex;"]);
var Item = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].li.withConfig({
  displayName: "Header__Item",
  componentId: "i7gymj-2"
})(["width:70px;height:50px;text-align:center;& > a{color:white;height:50px;display:flex;align-items:center;justify-content:center;}"]);
var SearchForm = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].form.withConfig({
  displayName: "Header__SearchForm",
  componentId: "i7gymj-3"
})(["display:flex;justify-content:center;align-items:center;padding:0px 10px;"]);
var SearchInput = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].input.withConfig({
  displayName: "Header__SearchInput",
  componentId: "i7gymj-4"
})(["margin-right:10px;"]);
var SearchButton = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].button.withConfig({
  displayName: "Header__SearchButton",
  componentId: "i7gymj-5"
})([""]);

var Header = function Header() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(''),
      searchText = _useState[0],
      setSearchText = _useState[1];

  var onChangeSearchText = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (e) {
    setSearchText(e.target.value);
  }, []);
  var onSubmitSearch = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (e) {
    e.preventDefault();
  }, []);
  return __jsx(Menu, null, __jsx(List, null, __jsx(Item, {
    key: "home"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/"
  }, __jsx("a", null, "Backpot"))), __jsx(Item, {
    key: "mydirectory"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/mylibrery"
  }, __jsx("a", null, "\uB0B4 \uC11C\uC7AC"))), __jsx(Item, {
    key: "profile"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/profile"
  }, __jsx("a", null, "\uB0B4 \uC815\uBCF4"))), __jsx(Item, null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/search"
  }, __jsx("a", null, "Search"))), __jsx(SearchForm, {
    onSubmit: onSubmitSearch
  }, __jsx(SearchInput, {
    value: searchText,
    onChange: onChangeSearchText
  }), __jsx(SearchButton, {
    type: "submit"
  }, "\uAC80\uC0C9"))));
};

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ })

})
//# sourceMappingURL=_app.js.66a12b532b04175d7760.hot-update.js.map