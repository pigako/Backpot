webpackHotUpdate("static\\development\\pages\\board.js",{

/***/ "./reducers/board.js":
/*!***************************!*\
  !*** ./reducers/board.js ***!
  \***************************/
/*! exports provided: initalState, LOAD_BOARDS_REQUEST, LOAD_BOARDS_SUCCESS, LOAD_BOARDS_FAILURE, ADD_BOARD_REQUEST, ADD_BOARD_SUCCESS, ADD_BOARD_FAILURE, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initalState", function() { return initalState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_BOARDS_REQUEST", function() { return LOAD_BOARDS_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_BOARDS_SUCCESS", function() { return LOAD_BOARDS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_BOARDS_FAILURE", function() { return LOAD_BOARDS_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_BOARD_REQUEST", function() { return ADD_BOARD_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_BOARD_SUCCESS", function() { return ADD_BOARD_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_BOARD_FAILURE", function() { return ADD_BOARD_FAILURE; });
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! immer */ "./node_modules/immer/dist/immer.module.js");

var initalState = {
  boards: [],
  isAddingBoard: false,
  boardAdded: false
};
var LOAD_BOARDS_REQUEST = "LOAD_BOARDS_REQUEST";
var LOAD_BOARDS_SUCCESS = "LOAD_BOARDS_SUCCESS";
var LOAD_BOARDS_FAILURE = "LOAD_BOARDS_FAILURE";
var ADD_BOARD_REQUEST = "ADD_BOARD_REQUEST";
var ADD_BOARD_SUCCESS = "ADD_BOARD_SUCCESS";
var ADD_BOARD_FAILURE = "ADD_BOARD_FAILURE";

var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initalState;
  var action = arguments.length > 1 ? arguments[1] : undefined;
  return Object(immer__WEBPACK_IMPORTED_MODULE_0__["default"])(state, function (draft) {
    switch (action.type) {
      case LOAD_BOARDS_REQUEST:
        draft.boards = !action.lastId ? [] : draft.boards;
        draft.hasMoreBoards = action.lastId ? draft.hasMoreBoards : true;
        break;

      case LOAD_BOARDS_SUCCESS:
        draft.boards = draft.boards.concat(action.data);
        draft.hasMoreBoards = action.data.length === 30;
        break;

      case LOAD_BOARDS_FAILURE:
        break;

      case ADD_BOARD_REQUEST:
        draft.isAddingBoard = true;
        draft.boardAdded = false;
        break;

      case ADD_BOARD_SUCCESS:
        draft.isAddingBoard = false;
        draft.boardAdded = true;
        draft.boards.unshift(action.data);
        break;

      case ADD_BOARD_FAILURE:
        break;

      default:
        break;
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (reducer);

/***/ })

})
//# sourceMappingURL=board.js.a54bb37ebe7751572fc1.hot-update.js.map