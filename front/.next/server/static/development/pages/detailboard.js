module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/designs/Button.js":
/*!**************************************!*\
  !*** ./components/designs/Button.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



const StyledButton = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.button.withConfig({
  displayName: "Button__StyledButton",
  componentId: "nqeedc-0"
})(["display:inline-block;outline:none;border:none;border-radius:4px;color:white;font-weight:bold;cursor:pointer;padding-left:1rem;padding-right:1rem;height:2.25rem;width:6rem;font-size:1rem;", " ", " & + &{margin-left:1rem;}"], props => {
  if (props.size === 'large') {
    return Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["css"])(["width:100%;"]);
  }
}, props => {
  if (props.color === 'blue') {
    return Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["css"])(["background:#148cff;&:hover{background:#1e96ff;}&:active{background:#0a82ff;}"]);
  } else if (props.color === 'pink') {
    return Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["css"])(["background:#ff7493;&:hover{background:#ff7e9d;}&:active{background:#ff6a89;}"]);
  }
});

const Button = (_ref) => {
  let {
    children
  } = _ref,
      rest = _objectWithoutProperties(_ref, ["children"]);

  return __jsx(StyledButton, rest, children);
};

Button.defaultProps = {
  color: 'blue',
  size: 'middle'
};
/* harmony default export */ __webpack_exports__["default"] = (Button);

/***/ }),

/***/ "./pages/detailboard.js":
/*!******************************!*\
  !*** ./pages/detailboard.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_designs_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/designs/Button */ "./components/designs/Button.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







const SBoard = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "detailboard__SBoard",
  componentId: "sc-18cmj5i-0"
})(["margin-top:10px;width:98%;"]);
const SDetailBoardTitle = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.h1.withConfig({
  displayName: "detailboard__SDetailBoardTitle",
  componentId: "sc-18cmj5i-1"
})(["display:inline-block;font-weight:bold;margin-left:10px;width:100%;"]);
const SBoardTop = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "detailboard__SBoardTop",
  componentId: "sc-18cmj5i-2"
})(["margin-top:1rem;padding-bottom:1rem;border-bottom:solid 2px #6441a5;"]);
const SBoardTitle = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "detailboard__SBoardTitle",
  componentId: "sc-18cmj5i-3"
})(["display:inline-block;"]);
const SBoardTitleLabel = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.label.withConfig({
  displayName: "detailboard__SBoardTitleLabel",
  componentId: "sc-18cmj5i-4"
})(["display:block;font-size:1.5rem;margin-bottom:1rem;"]);
const SBoardWriterLabel = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.label.withConfig({
  displayName: "detailboard__SBoardWriterLabel",
  componentId: "sc-18cmj5i-5"
})(["padding-right:1rem;border-right:solid 1px #495057;& > strong{font-weight:bold;}"]);
const SBoardCreateLabel = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.label.withConfig({
  displayName: "detailboard__SBoardCreateLabel",
  componentId: "sc-18cmj5i-6"
})(["padding-left:1rem;"]);
const SBoardTitleButtonDiv = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "detailboard__SBoardTitleButtonDiv",
  componentId: "sc-18cmj5i-7"
})(["float:right;"]);
const SBoardContent = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "detailboard__SBoardContent",
  componentId: "sc-18cmj5i-8"
})(["margin:1.5rem;"]);
const SBoardComment = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "detailboard__SBoardComment",
  componentId: "sc-18cmj5i-9"
})(["border-top:solid 3px #6441a5;"]);

const DetailBoard = ({
  board
}) => {
  const onUpdateBoard = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(e => {}, []);
  const onDeleteBoard = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(e => {}, []);
  return __jsx(SBoard, null, __jsx(SDetailBoardTitle, null, "\uCD94\uCC9C\uAC8C\uC2DC\uAE00"), __jsx(SBoardTop, null, __jsx(SBoardTitle, null, __jsx(SBoardTitleLabel, null, board.title), __jsx(SBoardWriterLabel, null, __jsx("strong", null, board.User.nickname), " \uB2D8"), __jsx(SBoardCreateLabel, null, moment__WEBPACK_IMPORTED_MODULE_4___default()(board.createdAt).format('YY.MM.DD HH시 mm분'))), __jsx(SBoardTitleButtonDiv, null, __jsx(_components_designs_Button__WEBPACK_IMPORTED_MODULE_5__["default"], {
    onClick: onUpdateBoard
  }, "\uC218\uC815"), __jsx(_components_designs_Button__WEBPACK_IMPORTED_MODULE_5__["default"], {
    color: 'pink',
    onClick: onDeleteBoard
  }, "\uC0AD\uC81C"))), __jsx(SBoardContent, null, __jsx("p", {
    dangerouslySetInnerHTML: {
      __html: board.content
    }
  })), __jsx(SBoardComment, null));
};

DetailBoard.propTypes = {
  board: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired
};

DetailBoard.getInitialProps = context => {
  const id = parseInt(context.query.id, 10);
  const state = context.store.getState();
  const board = state.board && state.board.boards.find(v => v.id === id);
  return {
    board
  };
};

/* harmony default export */ __webpack_exports__["default"] = (DetailBoard);

/***/ }),

/***/ 6:
/*!************************************!*\
  !*** multi ./pages/detailboard.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Document\Backpot\front\pages\detailboard.js */"./pages/detailboard.js");


/***/ }),

/***/ "moment":
/*!*************************!*\
  !*** external "moment" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("moment");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ })

/******/ });
//# sourceMappingURL=detailboard.js.map