webpackHotUpdate("static\\development\\pages\\book.js",{

/***/ "./components/BookTable.js":
/*!*********************************!*\
  !*** ./components/BookTable.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





var Table = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].table.withConfig({
  displayName: "BookTable__Table",
  componentId: "w7ujep-0"
})(["border-collapse:separate;border-spacing:1px;background:white;border-radius:12px;overflow:hidden;margin:1rem auto;width:98%;& th{padding:1rem;background:#148cff;color:white;}& td{padding:1rem;border-bottom:1px solid #7053c4;cursor:pointer;}& td:nth-child(1),td:nth-child(4),td:nth-child(5){width:10%;text-align:center;}& td:nth-child(3){width:12%;text-align:center;}& td:nth-child(2){text-align:left;}& tr:hover{background:#495057;color:white;}"]);

var BookTable = function BookTable(_ref) {
  var episode = _ref.episode;
  var goEpisode = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (episodeId) {
    return function (e) {
      next_router__WEBPACK_IMPORTED_MODULE_3___default.a.push({
        pathname: '/episode',
        query: {
          id: episodeId
        }
      }, "/episode/".concat(episodeId));
    };
  }, []); // 번호 제목 날짜 조회 추천

  return __jsx(Table, null, __jsx("thead", null, __jsx("tr", null, __jsx("th", null, "\uBC88\uD638"), __jsx("th", null, "\uC81C\uBAA9"), __jsx("th", null, "\uB0A0\uC9DC"), __jsx("th", null, "\uC870\uD68C"), __jsx("th", null, "\uCD94\uCC9C"))), __jsx("tbody", null, episode.length ? episode.map(function (v) {
    return __jsx("tr", {
      key: +v.id,
      onClick: goEpisode(+v.id)
    }, __jsx("td", null, v.id), __jsx("td", null, v.title), __jsx("td", null, moment__WEBPACK_IMPORTED_MODULE_4___default()(v.createdAt).format('YYYY.MM.DD')), __jsx("td", null, v.views), __jsx("td", null, v.recommends));
  }) : __jsx("p", null, "\uAC8C\uC2DC\uAE00\uC774 \uC874\uC7AC\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.")));
};

BookTable.propTypes = {
  episode: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.array.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (BookTable);

/***/ })

})
//# sourceMappingURL=book.js.d5dfb4d8a6125fb7e7d1.hot-update.js.map