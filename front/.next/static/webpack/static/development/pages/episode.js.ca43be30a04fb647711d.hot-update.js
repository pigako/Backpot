webpackHotUpdate("static\\development\\pages\\episode.js",{

/***/ "./pages/episode.js":
/*!**************************!*\
  !*** ./pages/episode.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _reducers_episode__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../reducers/episode */ "./reducers/episode.js");

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




var EpisodeDiv = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "episode__EpisodeDiv",
  componentId: "sc-8ty8pk-0"
})(["width:98%;margin:1rem 0rem 0rem 1rem;"]);
var EpisodeTitle = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].h1.withConfig({
  displayName: "episode__EpisodeTitle",
  componentId: "sc-8ty8pk-1"
})(["font-weight:bold;margin:0px;"]);

var Episode = function Episode() {
  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(function (state) {
    return state.episode;
  }),
      episode = _useSelector.episode;

  return __jsx(EpisodeDiv, null, __jsx(EpisodeTitle, null, episode && episode.title));
};

Episode.getInitialProps = function _callee(context) {
  var id;
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          id = context.query.id;
          context.store.dispatch({
            type: _reducers_episode__WEBPACK_IMPORTED_MODULE_4__["LOAD_EPISODE_REQUEST"],
            id: id
          });

        case 2:
        case "end":
          return _context.stop();
      }
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Episode);

/***/ })

})
//# sourceMappingURL=episode.js.ca43be30a04fb647711d.hot-update.js.map