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
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _designs_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./designs/Button */ "./components/designs/Button.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _reducers_book__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../reducers/book */ "./reducers/book.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







var Menu = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].header.withConfig({
  displayName: "Header__Menu",
  componentId: "i7gymj-0"
})(["position:fixed;top:0px;left:0px;width:100%;height:50px;display:flex;align-items:center;border-bottom:solid 2px #495057;padding:0px 10px;z-index:10;background-color:rgba(20,20,20,0.8);"]);
var List = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].ul.withConfig({
  displayName: "Header__List",
  componentId: "i7gymj-1"
})(["display:flex;width:100%;"]);
var Item = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].li.withConfig({
  displayName: "Header__Item",
  componentId: "i7gymj-2"
})(["width:10rem;height:3.2rem;text-align:center;margin-right:10px;border-bottom:solid 4px ", ";transition:border-bottom 0.5s ease-in-out;& a{color:white;width:100%;height:3.2rem;display:flex;align-items:center;justify-content:center;}"], function (props) {
  return props.current ? '#148cff' : 'transparent';
});
var SearchForm = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].form.withConfig({
  displayName: "Header__SearchForm",
  componentId: "i7gymj-3"
})(["display:flex;justify-content:flex-end;align-items:center;padding:0px 10px;width:calc(100% - 210px);& a{color:white;height:50px;padding-right:10px;display:flex;align-items:center;justify-content:center;}"]);
var SearchInput = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].input.withConfig({
  displayName: "Header__SearchInput",
  componentId: "i7gymj-4"
})(["margin-right:10px;outline:none;border:none;border-radius:4px;padding-left:10px;height:2.25rem;width:10rem;font-size:1.5rem;transition:0.55s ease;&:hover{width:30rem;}&:focus{width:30rem;}"]);

var Header = function Header() {
  var _useRouter = Object(next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"])(),
      pathname = _useRouter.pathname,
      query = _useRouter.query;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(''),
      searchText = _useState[0],
      setSearchText = _useState[1];

  var _ref = Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["useSelector"])(function (state) {
    return state.user.me;
  }) || false,
      userId = _ref.userId;

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["useSelector"])(function (state) {
    return state.book;
  }),
      keyword = _useSelector.keyword;

  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["useDispatch"])();
  var onChangeSearchText = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (e) {
    setSearchText(e.target.value);
  }, []);
  var onSubmitSearch = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (e) {
    e.preventDefault();
    dispatch({
      type: _reducers_book__WEBPACK_IMPORTED_MODULE_6__["CHANGE_KEYWORD"],
      data: searchText
    });
  }, [searchText]);
  return __jsx(Menu, null, __jsx(List, null, __jsx(Item, {
    key: "home",
    current: pathname === '/'
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/"
  }, __jsx("a", null, "Backpot"))), __jsx(Item, {
    key: "booklist",
    current: pathname === '/booklist'
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/booklist"
  }, __jsx("a", null, "\uC6F9\uC18C\uC124"))), userId && __jsx(Item, {
    key: "mydirectory",
    current: pathname === "/librery" && query.id === userId
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: {
      pathname: '/librery',
      query: {
        id: userId
      }
    },
    as: "/librery/".concat(userId)
  }, __jsx("a", null, "\uB0B4 \uC11C\uC7AC"))), userId && __jsx(Item, {
    key: "profile",
    current: pathname === "/profile" && query.id === userId
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: {
      pathname: '/profile',
      query: {
        id: userId
      }
    },
    as: "/profile/".concat(userId)
  }, __jsx("a", null, "\uB0B4 \uC815\uBCF4"))), __jsx(Item, {
    key: "board",
    current: pathname === '/board'
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/board"
  }, __jsx("a", null, "\uCD94\uCC9C\uAC8C\uC2DC\uD310"))), __jsx(SearchForm, {
    onSubmit: onSubmitSearch
  }, __jsx("a", null, "Search"), __jsx(SearchInput, {
    value: searchText,
    onChange: onChangeSearchText
  }), __jsx(_designs_Button__WEBPACK_IMPORTED_MODULE_4__["default"], {
    type: "submit"
  }, "\uAC80\uC0C9"))));
};

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ })

})
//# sourceMappingURL=_app.js.ffbe36774a8c1671be83.hot-update.js.map