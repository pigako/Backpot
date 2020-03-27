webpackHotUpdate("static\\development\\pages\\_app.js",{

/***/ "./sagas/board.js":
/*!************************!*\
  !*** ./sagas/board.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return bookSaga; });
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-saga/effects */ "./node_modules/redux-saga/dist/redux-saga-effects-npm-proxy.esm.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _reducers_board__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../reducers/board */ "./reducers/board.js");


var _marked =
/*#__PURE__*/
_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(watchLoadBords),
    _marked2 =
/*#__PURE__*/
_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(watchLoadBoard),
    _marked3 =
/*#__PURE__*/
_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(watchAddBoard),
    _marked4 =
/*#__PURE__*/
_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(watchUpdateBoard),
    _marked5 =
/*#__PURE__*/
_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(watchDeleteBoard),
    _marked6 =
/*#__PURE__*/
_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(watchAddComment),
    _marked7 =
/*#__PURE__*/
_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(watchUpdateComment),
    _marked8 =
/*#__PURE__*/
_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(watchDeleteComment),
    _marked9 =
/*#__PURE__*/
_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(bookSaga);



 // 전체 게시글 가져오기

function watchLoadBords() {
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function watchLoadBords$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["throttle"])(1000, _reducers_board__WEBPACK_IMPORTED_MODULE_3__["LOAD_BOARDS_REQUEST"],
          /*#__PURE__*/
          _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function loadBoards(action) {
            var result;
            return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function loadBoards$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.prev = 0;
                    _context.next = 3;
                    return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(function () {
                      var lastId = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
                      var keyword = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
                      var limit = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 30;
                      return axios__WEBPACK_IMPORTED_MODULE_2___default.a.get("/boards?lastId=".concat(lastId, "&keyword=").concat(keyword, "&limit=").concat(limit));
                    }, action.lastId, action.keyword);

                  case 3:
                    result = _context.sent;
                    _context.next = 6;
                    return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
                      type: _reducers_board__WEBPACK_IMPORTED_MODULE_3__["LOAD_BOARDS_SUCCESS"],
                      data: result.data
                    });

                  case 6:
                    _context.next = 13;
                    break;

                  case 8:
                    _context.prev = 8;
                    _context.t0 = _context["catch"](0);
                    console.log(_context.t0);
                    _context.next = 13;
                    return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
                      type: _reducers_board__WEBPACK_IMPORTED_MODULE_3__["LOAD_BOARDS_FAILURE"],
                      error: _context.t0
                    });

                  case 13:
                  case "end":
                    return _context.stop();
                }
              }
            }, loadBoards, null, [[0, 8]]);
          }));

        case 2:
        case "end":
          return _context2.stop();
      }
    }
  }, _marked);
} // 게시글 가져오기


function watchLoadBoard() {
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function watchLoadBoard$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_board__WEBPACK_IMPORTED_MODULE_3__["LOAD_BOARD_REQUEST"],
          /*#__PURE__*/
          _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function loadBoard(action) {
            var result;
            return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function loadBoard$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    _context3.prev = 0;
                    _context3.next = 3;
                    return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(function (boardId) {
                      return axios__WEBPACK_IMPORTED_MODULE_2___default.a.get("/board/".concat(boardId));
                    }, action.boardId);

                  case 3:
                    result = _context3.sent;
                    _context3.next = 6;
                    return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
                      type: _reducers_board__WEBPACK_IMPORTED_MODULE_3__["LOAD_BOARD_SUCCESS"],
                      data: result.data
                    });

                  case 6:
                    _context3.next = 12;
                    break;

                  case 8:
                    _context3.prev = 8;
                    _context3.t0 = _context3["catch"](0);
                    console.log(_context3.t0);
                    Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
                      type: _reducers_board__WEBPACK_IMPORTED_MODULE_3__["LOAD_BOARD_FAILURE"],
                      error: _context3.t0
                    });

                  case 12:
                  case "end":
                    return _context3.stop();
                }
              }
            }, loadBoard, null, [[0, 8]]);
          }));

        case 2:
        case "end":
          return _context4.stop();
      }
    }
  }, _marked2);
} // 게시글 추가하기


function watchAddBoard() {
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function watchAddBoard$(_context6) {
    while (1) {
      switch (_context6.prev = _context6.next) {
        case 0:
          _context6.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_board__WEBPACK_IMPORTED_MODULE_3__["ADD_BOARD_REQUEST"],
          /*#__PURE__*/
          _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function addBoard(action) {
            var result;
            return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function addBoard$(_context5) {
              while (1) {
                switch (_context5.prev = _context5.next) {
                  case 0:
                    _context5.prev = 0;
                    _context5.next = 3;
                    return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(function (boardData) {
                      return axios__WEBPACK_IMPORTED_MODULE_2___default.a.post("/board", boardData, {
                        withCredentials: true
                      });
                    }, action.data);

                  case 3:
                    result = _context5.sent;
                    _context5.next = 6;
                    return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
                      type: _reducers_board__WEBPACK_IMPORTED_MODULE_3__["ADD_BOARD_SUCCESS"],
                      data: result.data
                    });

                  case 6:
                    _context5.next = 13;
                    break;

                  case 8:
                    _context5.prev = 8;
                    _context5.t0 = _context5["catch"](0);
                    console.log(_context5.t0);
                    _context5.next = 13;
                    return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
                      type: _reducers_board__WEBPACK_IMPORTED_MODULE_3__["ADD_BOARD_FAILURE"],
                      error: _context5.t0
                    });

                  case 13:
                  case "end":
                    return _context5.stop();
                }
              }
            }, addBoard, null, [[0, 8]]);
          }));

        case 2:
        case "end":
          return _context6.stop();
      }
    }
  }, _marked3);
} // 게시글 수정


function watchUpdateBoard() {
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function watchUpdateBoard$(_context8) {
    while (1) {
      switch (_context8.prev = _context8.next) {
        case 0:
          _context8.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_board__WEBPACK_IMPORTED_MODULE_3__["UPDATE_BOARD_REQUEST"],
          /*#__PURE__*/
          _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function updateBoard(action) {
            var result;
            return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function updateBoard$(_context7) {
              while (1) {
                switch (_context7.prev = _context7.next) {
                  case 0:
                    _context7.prev = 0;
                    _context7.next = 3;
                    return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(function (updateBoardData) {
                      return axios__WEBPACK_IMPORTED_MODULE_2___default.a.patch("/board", updateBoardData, {
                        withCredentials: true
                      });
                    }, action.data);

                  case 3:
                    result = _context7.sent;
                    _context7.next = 6;
                    return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
                      type: _reducers_board__WEBPACK_IMPORTED_MODULE_3__["UPDATE_BOARD_SUCCESS"],
                      data: result.data
                    });

                  case 6:
                    _context7.next = 13;
                    break;

                  case 8:
                    _context7.prev = 8;
                    _context7.t0 = _context7["catch"](0);
                    console.log(_context7.t0);
                    _context7.next = 13;
                    return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
                      type: _reducers_board__WEBPACK_IMPORTED_MODULE_3__["UPDATE_BOARD_FAILURE"],
                      error: _context7.t0
                    });

                  case 13:
                  case "end":
                    return _context7.stop();
                }
              }
            }, updateBoard, null, [[0, 8]]);
          }));

        case 2:
        case "end":
          return _context8.stop();
      }
    }
  }, _marked4);
} // 게시글 삭제


function watchDeleteBoard() {
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function watchDeleteBoard$(_context10) {
    while (1) {
      switch (_context10.prev = _context10.next) {
        case 0:
          _context10.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_board__WEBPACK_IMPORTED_MODULE_3__["DELETE_BOARD_REQUEST"],
          /*#__PURE__*/
          _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function deleteBoard(action) {
            var result;
            return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function deleteBoard$(_context9) {
              while (1) {
                switch (_context9.prev = _context9.next) {
                  case 0:
                    _context9.prev = 0;
                    _context9.next = 3;
                    return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(function (boardId) {
                      return axios__WEBPACK_IMPORTED_MODULE_2___default.a["delete"]("/board/".concat(boardId), {
                        withCredentials: true
                      });
                    }, action.boardId);

                  case 3:
                    result = _context9.sent;
                    _context9.next = 6;
                    return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
                      type: _reducers_board__WEBPACK_IMPORTED_MODULE_3__["DELETE_BOARD_SUCCESS"],
                      data: result.data
                    });

                  case 6:
                    _context9.next = 13;
                    break;

                  case 8:
                    _context9.prev = 8;
                    _context9.t0 = _context9["catch"](0);
                    console.log(_context9.t0);
                    _context9.next = 13;
                    return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
                      type: _reducers_board__WEBPACK_IMPORTED_MODULE_3__["DELETE_BOARD_FAILURE"],
                      error: _context9.t0
                    });

                  case 13:
                  case "end":
                    return _context9.stop();
                }
              }
            }, deleteBoard, null, [[0, 8]]);
          }));

        case 2:
        case "end":
          return _context10.stop();
      }
    }
  }, _marked5);
} // 댓글 추가


function watchAddComment() {
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function watchAddComment$(_context12) {
    while (1) {
      switch (_context12.prev = _context12.next) {
        case 0:
          _context12.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_board__WEBPACK_IMPORTED_MODULE_3__["ADD_COMMENT_REQUEST"],
          /*#__PURE__*/
          _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function addComment(action) {
            var result;
            return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function addComment$(_context11) {
              while (1) {
                switch (_context11.prev = _context11.next) {
                  case 0:
                    _context11.prev = 0;
                    _context11.next = 3;
                    return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(function (boardData) {
                      return axios__WEBPACK_IMPORTED_MODULE_2___default.a.post("/board/comment", boardData, {
                        withCredentials: true
                      });
                    }, action.data);

                  case 3:
                    result = _context11.sent;
                    _context11.next = 6;
                    return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
                      type: _reducers_board__WEBPACK_IMPORTED_MODULE_3__["ADD_COMMENT_SUCCESS"],
                      data: result.data
                    });

                  case 6:
                    _context11.next = 13;
                    break;

                  case 8:
                    _context11.prev = 8;
                    _context11.t0 = _context11["catch"](0);
                    console.log(_context11.t0);
                    _context11.next = 13;
                    return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
                      type: _reducers_board__WEBPACK_IMPORTED_MODULE_3__["ADD_COMMENT_FAILURE"],
                      error: _context11.t0
                    });

                  case 13:
                  case "end":
                    return _context11.stop();
                }
              }
            }, addComment, null, [[0, 8]]);
          }));

        case 2:
        case "end":
          return _context12.stop();
      }
    }
  }, _marked6);
} // 댓글 수정


function watchUpdateComment() {
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function watchUpdateComment$(_context14) {
    while (1) {
      switch (_context14.prev = _context14.next) {
        case 0:
          _context14.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_board__WEBPACK_IMPORTED_MODULE_3__["UPDATE_COMMENT_REQUEST"],
          /*#__PURE__*/
          _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function updateComment(action) {
            var result;
            return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function updateComment$(_context13) {
              while (1) {
                switch (_context13.prev = _context13.next) {
                  case 0:
                    _context13.prev = 0;
                    _context13.next = 3;
                    return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(function (updateCommentData) {
                      return axios__WEBPACK_IMPORTED_MODULE_2___default.a.patch("/board/comment", updateCommentData, {
                        withCredentials: true
                      });
                    }, action.data);

                  case 3:
                    result = _context13.sent;
                    _context13.next = 6;
                    return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
                      type: _reducers_board__WEBPACK_IMPORTED_MODULE_3__["UPDATE_COMMENT_SUCCESS"],
                      data: result.data
                    });

                  case 6:
                    _context13.next = 13;
                    break;

                  case 8:
                    _context13.prev = 8;
                    _context13.t0 = _context13["catch"](0);
                    console.log(_context13.t0);
                    _context13.next = 13;
                    return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
                      type: _reducers_board__WEBPACK_IMPORTED_MODULE_3__["UPDATE_COMMENT_FAILURE"],
                      error: _context13.t0
                    });

                  case 13:
                  case "end":
                    return _context13.stop();
                }
              }
            }, updateComment, null, [[0, 8]]);
          }));

        case 2:
        case "end":
          return _context14.stop();
      }
    }
  }, _marked7);
} // 댓글 삭제


function watchDeleteComment() {
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function watchDeleteComment$(_context16) {
    while (1) {
      switch (_context16.prev = _context16.next) {
        case 0:
          _context16.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_board__WEBPACK_IMPORTED_MODULE_3__["DELETE_COMMENT_REQUEST"],
          /*#__PURE__*/
          _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function deleteBoard(action) {
            var result;
            return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function deleteBoard$(_context15) {
              while (1) {
                switch (_context15.prev = _context15.next) {
                  case 0:
                    _context15.prev = 0;
                    _context15.next = 3;
                    return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(function (commentId) {
                      return axios__WEBPACK_IMPORTED_MODULE_2___default.a["delete"]("/board/comment/".concat(commentId), {
                        withCredentials: true
                      });
                    }, action.commentId);

                  case 3:
                    result = _context15.sent;
                    _context15.next = 6;
                    return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
                      type: _reducers_board__WEBPACK_IMPORTED_MODULE_3__["DELETE_COMMENT_SUCCESS"],
                      data: result.data
                    });

                  case 6:
                    _context15.next = 13;
                    break;

                  case 8:
                    _context15.prev = 8;
                    _context15.t0 = _context15["catch"](0);
                    console.log(_context15.t0);
                    _context15.next = 13;
                    return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
                      type: _reducers_board__WEBPACK_IMPORTED_MODULE_3__["DELETE_COMMENT_FAILURE"],
                      error: _context15.t0
                    });

                  case 13:
                  case "end":
                    return _context15.stop();
                }
              }
            }, deleteBoard, null, [[0, 8]]);
          }));

        case 2:
        case "end":
          return _context16.stop();
      }
    }
  }, _marked8);
}

function bookSaga() {
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function bookSaga$(_context17) {
    while (1) {
      switch (_context17.prev = _context17.next) {
        case 0:
          _context17.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchLoadBords), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchLoadBoard), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchAddBoard), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchUpdateBoard), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchDeleteBoard), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchAddComment), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchUpdateComment), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchDeleteComment)]);

        case 2:
        case "end":
          return _context17.stop();
      }
    }
  }, _marked9);
}

/***/ })

})
//# sourceMappingURL=_app.js.239d944f2c0afa36ddba.hot-update.js.map