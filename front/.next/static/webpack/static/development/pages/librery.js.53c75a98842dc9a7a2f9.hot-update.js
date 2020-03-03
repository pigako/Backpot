webpackHotUpdate("static\\development\\pages\\librery.js",{

/***/ "./components/BoardTable.js":
/*!**********************************!*\
  !*** ./components/BoardTable.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var Table = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].table.withConfig({
  displayName: "BoardTable__Table",
  componentId: "afczii-0"
})(["width:100%;border-collapse:separate;border-spacing:1px;border-radius:4px;line-height:1.5;& th{padding:10px;font-weight:bold;vertical-align:top;color:#fff;background:#1278ed;}& td{padding:10px;vertical-align:top;border-bottom:1px solid #ccc;background:#eee;}& th:nth-child(1){width:10%;text-align:center;}& td:nth-child(1){text-align:center;}& th:nth-child(3),th:nth-child(4){width:12%;}& td:nth-child(3),td:nth-child(4){text-align:center;}"]);
var TableHead = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].th.withConfig({
  displayName: "BoardTable__TableHead",
  componentId: "afczii-1"
})([""]);
var TableRow = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].tr.withConfig({
  displayName: "BoardTable__TableRow",
  componentId: "afczii-2"
})([""]);

var BoardTable = function BoardTable(_ref) {
  var board = _ref.board;
  console.log('board~', board);
  return __jsx(Table, null, __jsx("thead", null, __jsx("tr", null, __jsx("th", null, "\uBC88\uD638 "), __jsx("th", null, "\uC81C\uBAA9"), __jsx("th", null, "\uC791\uC131\uC790"), __jsx("th", null, "\uC791\uC131\uC77C\uC2DC"))), __jsx("tbody", null, board.map(function (v) {
    return __jsx("tr", {
      key: +v.id
    }, __jsx("td", null, v.id), __jsx("td", null, v.title), __jsx("td", null, v.User.nickname), __jsx("td", null, moment__WEBPACK_IMPORTED_MODULE_3___default()(v.createdAt).format('YYYY.MM.DD')));
  })));
};

BoardTable.propTypes = {
  board: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.array.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (BoardTable);

/***/ })

})
//# sourceMappingURL=librery.js.53c75a98842dc9a7a2f9.hot-update.js.map