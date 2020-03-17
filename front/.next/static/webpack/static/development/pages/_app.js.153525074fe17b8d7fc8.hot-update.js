webpackHotUpdate("static\\development\\pages\\_app.js",{

/***/ "./components/UserProfile.js":
/*!***********************************!*\
  !*** ./components/UserProfile.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _designs_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./designs/Button */ "./components/designs/Button.js");
/* harmony import */ var _LikingBook__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./LikingBook */ "./components/LikingBook.js");
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../reducers/user */ "./reducers/user.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






var Profile = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "UserProfile__Profile",
  componentId: "ny6ey5-0"
})(["width:90%;margin-top:10px;margin-left:10px;font-size:1rem;"]);
var TopProfile = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "UserProfile__TopProfile",
  componentId: "ny6ey5-1"
})(["display:flex;align-items:center;border-bottom:solid 2px #495057;height:70px;"]);
var Nickname = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "UserProfile__Nickname",
  componentId: "ny6ey5-2"
})(["flex:10;"]);
var MiddleProfile = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "UserProfile__MiddleProfile",
  componentId: "ny6ey5-3"
})(["display:flex;align-items:center;justify-content:center;border-bottom:solid 2px #495057;height:100px;& > *{flex:1;}"]);
var Preference = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "UserProfile__Preference",
  componentId: "ny6ey5-4"
})(["& label{text-align:center;}"]);
var Label = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].label.withConfig({
  displayName: "UserProfile__Label",
  componentId: "ny6ey5-5"
})(["display:block;& + &{margin-top:10px;}"]);
var BottomProfile = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "UserProfile__BottomProfile",
  componentId: "ny6ey5-6"
})(["width:100%;height:100%;min-height:20rem;max-height:calc(100vh - 300px);overflow:auto;& > *{margin-top:10px;}&::-webkit-scrollbar{width:10px;}::-webkit-scrollbar-track{box-shadow:inset 0 0 5px grey;border-radius:10px;}::-webkit-scrollbar-thumb{background:#148cff;border-radius:10px;}::-webkit-scrollbar-thumb:hover{background:#1e96ff;}::-webkit-scrollbar-thumb:active{background:#0a82ff;}"]);
var LikeBookList = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].ul.withConfig({
  displayName: "UserProfile__LikeBookList",
  componentId: "ny6ey5-7"
})(["color:white;"]);
var LoadingImg = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].img.withConfig({
  displayName: "UserProfile__LoadingImg",
  componentId: "ny6ey5-8"
})(["margin-top:4px;height:1.5rem;"]);

var UserProfile = function UserProfile() {
  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(function (state) {
    return state.user;
  }),
      isLoggingOut = _useSelector.isLoggingOut;

  var _useSelector2 = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(function (state) {
    return state.user.me;
  }),
      likingBookList = _useSelector2.LikingBook,
      likingWriter = _useSelector2.LikingUser,
      nickname = _useSelector2.nickname; // const likingBookList = useSelector(state => state.user.me.LikingBook);
  // const likingWriter = useSelector(state => state.user.me.LikingUser);


  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"])();
  var onLogout = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (e) {
    dispatch({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_5__["LOG_OUT_REQUEST"]
    });
  }, []);
  return __jsx(Profile, null, __jsx(TopProfile, null, __jsx(Nickname, null, nickname, " \uB2D8"), __jsx(_designs_Button__WEBPACK_IMPORTED_MODULE_3__["default"], {
    onClick: onLogout
  }, isLoggingOut ? __jsx(LoadingImg, {
    src: "/static/icons/loading_blue.gif"
  }) : "\uB85C\uADF8\uC544\uC6C3")), __jsx(MiddleProfile, null, __jsx(Preference, {
    key: "LikedBook"
  }, __jsx(Label, null, "\uC120\uD638\uC791\uD488"), __jsx(Label, null, likingBookList.length || 0)), __jsx(Preference, {
    key: "LikedWriter"
  }, __jsx(Label, null, "\uC120\uD638\uC791\uAC00"), __jsx(Label, null, likingWriter.length))), __jsx(BottomProfile, null, __jsx(Label, null, "\uC120\uD638\uC791 \uBAA9\uB85D"), __jsx(LikeBookList, null, likingBookList ? likingBookList.map(function (v, i) {
    return __jsx(_LikingBook__WEBPACK_IMPORTED_MODULE_4__["default"], {
      key: i,
      book: v
    });
  }) : __jsx(Label, null, "\uC120\uD638\uC791 \uBAA9\uB85D\uC774 \uC874\uC7AC\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4."))));
};

/* harmony default export */ __webpack_exports__["default"] = (UserProfile);

/***/ })

})
//# sourceMappingURL=_app.js.153525074fe17b8d7fc8.hot-update.js.map