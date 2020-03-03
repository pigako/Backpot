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
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var Table = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].table.withConfig({
  displayName: "BoardTable__Table",
  componentId: "afczii-0"
})([""]);
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
  return __jsx(Table, null, __jsx("tr", null, __jsx("th", null, "\uBC88\uD638 "), __jsx("th", null, "\uC81C\uBAA9"), __jsx("th", null, "\uC791\uC131\uC77C\uC2DC")), __jsx("tbody", null, board.map(function (v) {
    __jsx("tr", {
      key: +v.id
    }, __jsx("td", null, v.id), __jsx("td", null, v.title), __jsx("td", null, v.createdAt));
  })));
};

BoardTable.propTypes = {
  board: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (BoardTable);

/***/ })

})
//# sourceMappingURL=librery.js.08936cdb3c55325a27f8.hot-update.js.map