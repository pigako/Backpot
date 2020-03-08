webpackHotUpdate("static\\development\\pages\\detailboard.js",{

/***/ "./pages/detailboard.js":
/*!******************************!*\
  !*** ./pages/detailboard.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





var DetailBoard = function DetailBoard(_ref) {
  var id = _ref.id;
  var board = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(function (state) {
    return state.boards;
  }).find(function (v) {
    return v.id === id;
  });
  return __jsx("div", null, __jsx("h1", null, id), __jsx("p", null, board));
};

DetailBoard.propTypes = {
  id: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired
};

DetailBoard.getInitialProps = function (context) {
  var id = context.query.id;
  return {
    id: id
  };
};

/* harmony default export */ __webpack_exports__["default"] = (DetailBoard);

/***/ })

})
//# sourceMappingURL=detailboard.js.9749e5f6715a5e2587f4.hot-update.js.map