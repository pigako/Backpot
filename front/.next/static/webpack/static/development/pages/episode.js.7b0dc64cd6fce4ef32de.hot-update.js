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
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-helmet */ "./node_modules/react-helmet/lib/Helmet.js");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _reducers_episode__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../reducers/episode */ "./reducers/episode.js");
/* harmony import */ var _components_CommentCard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/CommentCard */ "./components/CommentCard.js");
/* harmony import */ var _components_designs_Button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/designs/Button */ "./components/designs/Button.js");

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;








var EpisodeDiv = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "episode__EpisodeDiv",
  componentId: "sc-8ty8pk-0"
})(["width:98%;margin:1rem 0rem 0rem 1rem;"]);
var EpisodeTopDiv = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "episode__EpisodeTopDiv",
  componentId: "sc-8ty8pk-1"
})(["border-bottom:solid 2px #495057;position:relative;"]);
var BookTitle = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].h1.withConfig({
  displayName: "episode__BookTitle",
  componentId: "sc-8ty8pk-2"
})(["font-weight:bold;font-size:1rem;margin-bottom:1rem;"]);
var EpisodeTitle = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].h1.withConfig({
  displayName: "episode__EpisodeTitle",
  componentId: "sc-8ty8pk-3"
})(["font-weight:bold;font-size:2rem;margin-bottom:1rem;"]);
var TopButtonDiv = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "episode__TopButtonDiv",
  componentId: "sc-8ty8pk-4"
})(["position:absolute;top:5%;right:1%;"]);
var EpisodeSummaryDataDiv = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "episode__EpisodeSummaryDataDiv",
  componentId: "sc-8ty8pk-5"
})(["border-bottom:solid 2px #495057;display:flex;align-items:center;justify-content:flex-end;"]);
var EpisodeSummaryContentDiv = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "episode__EpisodeSummaryContentDiv",
  componentId: "sc-8ty8pk-6"
})(["padding:1rem;font-size:1rem;"]);
var LeftLabel = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].label.withConfig({
  displayName: "episode__LeftLabel",
  componentId: "sc-8ty8pk-7"
})(["margin-right:1rem;"]);
var RightLabel = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].label.withConfig({
  displayName: "episode__RightLabel",
  componentId: "sc-8ty8pk-8"
})(["font-weight:bold;"]);
var EpisodeContentDiv = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "episode__EpisodeContentDiv",
  componentId: "sc-8ty8pk-9"
})(["margin:1.5rem;font-size:1rem;line-height:1.5rem;"]);
var EpisodeComment = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "episode__EpisodeComment",
  componentId: "sc-8ty8pk-10"
})(["border-top:solid 3px #495057;margin-bottom:2rem;"]);
var EpisodeCommentCountDiv = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "episode__EpisodeCommentCountDiv",
  componentId: "sc-8ty8pk-11"
})(["height:2rem;background:#e7e7e7;display:flex;align-items:center;border-bottom:solid 3px #495057;& > label{font-size:1rem;font-weight:bold;margin-left:1rem;}"]);

var Episode = function Episode() {
  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(function (state) {
    return state.episode;
  }),
      episode = _useSelector.episode;

  return __jsx(EpisodeDiv, null, __jsx(react_helmet__WEBPACK_IMPORTED_MODULE_5___default.a, null, __jsx("title", null, episode && episode.Book.name), __jsx("style", {
    type: "text/css"
  }, "\n            .ck-editor__editable { height: 200px;}\n            .ck.ck-reset.ck-editor.ck-rounded-corners {margin: 1.5rem;}\n          ")), __jsx(EpisodeTopDiv, null, __jsx(BookTitle, null, episode && episode.Book.name), __jsx(EpisodeTitle, null, episode && episode.title), __jsx(TopButtonDiv, null, __jsx(_components_designs_Button__WEBPACK_IMPORTED_MODULE_8__["default"], {
    onClick: location.href = '#comment'
  }, "\uBAA9\uB85D"), __jsx(_components_designs_Button__WEBPACK_IMPORTED_MODULE_8__["default"], null, __jsx("a", {
    href: "#comment"
  }, "\uB313\uAE00")))), __jsx(EpisodeSummaryDataDiv, null, __jsx(EpisodeSummaryContentDiv, null, __jsx(LeftLabel, null, "\uC791\uC131"), __jsx(RightLabel, null, episode && moment__WEBPACK_IMPORTED_MODULE_4___default()(episode.createdAt).format('YY.MM.DD HH:mm'))), __jsx(EpisodeSummaryContentDiv, null, __jsx(LeftLabel, null, "\uC870\uD68C"), __jsx(RightLabel, null, episode && episode.views)), __jsx(EpisodeSummaryContentDiv, null, __jsx(LeftLabel, null, "\uCD94\uCC9C"), __jsx(RightLabel, null, episode && episode.recommends)), __jsx(EpisodeSummaryContentDiv, null, __jsx(LeftLabel, null, "\uC791\uAC00"), __jsx(RightLabel, null, episode && episode.Book.User.nickname), ' 님')), __jsx(EpisodeContentDiv, {
    dangerouslySetInnerHTML: {
      __html: episode && episode.content
    }
  }), __jsx(EpisodeComment, {
    id: "comment"
  }, __jsx(EpisodeCommentCountDiv, null, __jsx("label", null, "\uB313\uAE00 ", episode && episode.Episode_Comments.length, "\uAC1C")), episode && episode.Episode_Comments.map(function (comment) {
    return __jsx(_components_CommentCard__WEBPACK_IMPORTED_MODULE_7__["default"], {
      key: +comment.id,
      comment: comment
    });
  })));
};

Episode.getInitialProps = function _callee(context) {
  var id;
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          id = context.query.id;
          context.store.dispatch({
            type: _reducers_episode__WEBPACK_IMPORTED_MODULE_6__["LOAD_EPISODE_REQUEST"],
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
//# sourceMappingURL=episode.js.7b0dc64cd6fce4ef32de.hot-update.js.map