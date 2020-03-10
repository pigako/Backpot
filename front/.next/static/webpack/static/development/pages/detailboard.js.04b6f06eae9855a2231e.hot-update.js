webpackHotUpdate("static\\development\\pages\\detailboard.js",{

/***/ "./reducers/board.js":
/*!***************************!*\
  !*** ./reducers/board.js ***!
  \***************************/
/*! exports provided: initalState, LOAD_BOARDS_REQUEST, LOAD_BOARDS_SUCCESS, LOAD_BOARDS_FAILURE, LOAD_BOARD_REQUEST, LOAD_BOARD_SUCCESS, LOAD_BOARD_FAILURE, ADD_BOARD_REQUEST, ADD_BOARD_SUCCESS, ADD_BOARD_FAILURE, UPDATE_BOARD_REQUEST, UPDATE_BOARD_SUCCESS, UPDATE_BOARD_FAILURE, DELETE_BOARD_REQUEST, DELETE_BOARD_SUCCESS, DELETE_BOARD_FAILURE, ADD_COMMENT_REQUEST, ADD_COMMENT_SUCCESS, ADD_COMMENT_FAILURE, UPDATE_COMMENT_REQUEST, UPDATE_COMMENT_SUCCESS, UPDATE_COMMENT_FAILURE, DELETE_COMMENT_REQUEST, DELETE_COMMENT_SUCCESS, DELETE_COMMENT_FAILURE, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initalState", function() { return initalState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_BOARDS_REQUEST", function() { return LOAD_BOARDS_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_BOARDS_SUCCESS", function() { return LOAD_BOARDS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_BOARDS_FAILURE", function() { return LOAD_BOARDS_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_BOARD_REQUEST", function() { return LOAD_BOARD_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_BOARD_SUCCESS", function() { return LOAD_BOARD_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_BOARD_FAILURE", function() { return LOAD_BOARD_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_BOARD_REQUEST", function() { return ADD_BOARD_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_BOARD_SUCCESS", function() { return ADD_BOARD_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_BOARD_FAILURE", function() { return ADD_BOARD_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_BOARD_REQUEST", function() { return UPDATE_BOARD_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_BOARD_SUCCESS", function() { return UPDATE_BOARD_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_BOARD_FAILURE", function() { return UPDATE_BOARD_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DELETE_BOARD_REQUEST", function() { return DELETE_BOARD_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DELETE_BOARD_SUCCESS", function() { return DELETE_BOARD_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DELETE_BOARD_FAILURE", function() { return DELETE_BOARD_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_COMMENT_REQUEST", function() { return ADD_COMMENT_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_COMMENT_SUCCESS", function() { return ADD_COMMENT_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_COMMENT_FAILURE", function() { return ADD_COMMENT_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_COMMENT_REQUEST", function() { return UPDATE_COMMENT_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_COMMENT_SUCCESS", function() { return UPDATE_COMMENT_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_COMMENT_FAILURE", function() { return UPDATE_COMMENT_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DELETE_COMMENT_REQUEST", function() { return DELETE_COMMENT_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DELETE_COMMENT_SUCCESS", function() { return DELETE_COMMENT_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DELETE_COMMENT_FAILURE", function() { return DELETE_COMMENT_FAILURE; });
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! immer */ "./node_modules/immer/dist/immer.module.js");

var initalState = {
  boards: [],
  hasMoreBoards: false,
  board: null,
  isAddingBoard: false,
  boardAdded: false,
  boardDeleted: false,
  isUpdatingBoard: false,
  isAddingComment: false,
  commentAdded: false
};
var LOAD_BOARDS_REQUEST = "LOAD_BOARDS_REQUEST";
var LOAD_BOARDS_SUCCESS = "LOAD_BOARDS_SUCCESS";
var LOAD_BOARDS_FAILURE = "LOAD_BOARDS_FAILURE";
var LOAD_BOARD_REQUEST = "LOAD_BOARD_REQUEST";
var LOAD_BOARD_SUCCESS = "LOAD_BOARD_SUCCESS";
var LOAD_BOARD_FAILURE = "LOAD_BOARD_FAILURE";
var ADD_BOARD_REQUEST = "ADD_BOARD_REQUEST";
var ADD_BOARD_SUCCESS = "ADD_BOARD_SUCCESS";
var ADD_BOARD_FAILURE = "ADD_BOARD_FAILURE";
var UPDATE_BOARD_REQUEST = "UPDATE_BOARD_REQUEST";
var UPDATE_BOARD_SUCCESS = "UPDATE_BOARD_SUCCESS";
var UPDATE_BOARD_FAILURE = "UPDATE_BOARD_FAILURE";
var DELETE_BOARD_REQUEST = "DELETE_BOARD_REQUEST";
var DELETE_BOARD_SUCCESS = "DELETE_BOARD_SUCCESS";
var DELETE_BOARD_FAILURE = "DELETE_BOARD_FAILURE";
var ADD_COMMENT_REQUEST = "ADD_COMMENT_REQUEST";
var ADD_COMMENT_SUCCESS = "ADD_COMMENT_SUCCESS";
var ADD_COMMENT_FAILURE = "ADD_COMMENT_FAILURE";
var UPDATE_COMMENT_REQUEST = "UPDATE_COMMENT_REQUEST";
var UPDATE_COMMENT_SUCCESS = "UPDATE_COMMENT_SUCCESS";
var UPDATE_COMMENT_FAILURE = "UPDATE_COMMENT_FAILURE";
var DELETE_COMMENT_REQUEST = "DELETE_COMMENT_REQUEST";
var DELETE_COMMENT_SUCCESS = "DELETE_COMMENT_SUCCESS";
var DELETE_COMMENT_FAILURE = "DELETE_COMMENT_FAILURE";

var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initalState;
  var action = arguments.length > 1 ? arguments[1] : undefined;
  return Object(immer__WEBPACK_IMPORTED_MODULE_0__["default"])(state, function (draft) {
    switch (action.type) {
      // 전체 게시글 조회
      case LOAD_BOARDS_REQUEST:
        draft.boards = !action.lastId ? [] : draft.boards; // draft.hasMoreBoards = ;
        // action.lastId ? draft.hasMoreBoards : true;

        break;

      case LOAD_BOARDS_SUCCESS:
        draft.boards = draft.boards.concat(action.data);
        draft.hasMoreBoards = action.data.length === 30;
        break;

      case LOAD_BOARDS_FAILURE:
        break;
      // 게시글 조회

      case LOAD_BOARD_REQUEST:
        draft.boardDeleted = false;
        draft.board = null;
        break;

      case LOAD_BOARD_SUCCESS:
        draft.board = action.data;
        break;

      case LOAD_BOARD_FAILURE:
        break;
      // 게시글 작성

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
      // 게시글 수정

      case UPDATE_BOARD_REQUEST:
        draft.isUpdatingBoard = true;
        break;

      case UPDATE_BOARD_SUCCESS:
        draft.isUpdatingBoard = false;
        draft.board.content = action.data;
        break;

      case UPDATE_BOARD_FAILURE:
        break;
      // 게시글 삭제

      case DELETE_BOARD_REQUEST:
        draft.boardDeleted = false;
        break;

      case DELETE_BOARD_SUCCESS:
        var boardIndex = draft.boards.findIndex(function (v) {
          return v.id === action.data;
        });
        draft.boards.splice(boardIndex, 1);
        draft.boardDeleted = true;
        break;

      case DELETE_BOARD_FAILURE:
        break;
      // 댓글 작성

      case ADD_COMMENT_REQUEST:
        draft.isAddingComment = true;
        draft.commentAdded = false;
        break;

      case ADD_COMMENT_SUCCESS:
        draft.isAddingComment = false;
        draft.commentAdded = true;
        draft.board.Comments.push(action.data);
        break;

      case ADD_COMMENT_FAILURE:
        break;
      // 댓글 수정

      case UPDATE_COMMENT_REQUEST:
        break;

      case UPDATE_COMMENT_SUCCESS:
        break;

      case UPDATE_COMMENT_FAILURE:
        break;
      // 댓글 삭제

      case DELETE_COMMENT_REQUEST:
        break;

      case DELETE_COMMENT_SUCCESS:
        var commentIndex = draft.board.Comments.findIndex(function (v) {
          return v.id === action.data;
        });
        draft.board.Comments.splice(commentIndex, 1); // draft.board.Comments = draft.board.Comments.filter(c => c.id !== action.data);

        break;

      case DELETE_COMMENT_FAILURE:
        break;

      default:
        break;
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (reducer);

/***/ })

})
//# sourceMappingURL=detailboard.js.04b6f06eae9855a2231e.hot-update.js.map