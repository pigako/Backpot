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
_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(watchAddBoard),
    _marked3 =
/*#__PURE__*/
_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(bookSaga);





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
                      var limit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 30;
                      return axios__WEBPACK_IMPORTED_MODULE_2___default.a.get("/boards?lastId=".concat(lastId, "&limit=").concat(limit));
                    }, action.lastId);

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
}

function watchAddBoard() {
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function watchAddBoard$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_board__WEBPACK_IMPORTED_MODULE_3__["ADD_BOARD_REQUEST"],
          /*#__PURE__*/
          _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function addBoard(action) {
            var result;
            return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function addBoard$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    _context3.prev = 0;
                    _context3.next = 3;
                    return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(function (boardData) {
                      return axios__WEBPACK_IMPORTED_MODULE_2___default.a.post("/board", boardData, {
                        withCredentials: true
                      });
                    }, action.data);

                  case 3:
                    result = _context3.sent;
                    _context3.next = 6;
                    return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
                      type: _reducers_board__WEBPACK_IMPORTED_MODULE_3__["ADD_BOARD_REQUEST"],
                      data: result.data
                    });

                  case 6:
                    _context3.next = 13;
                    break;

                  case 8:
                    _context3.prev = 8;
                    _context3.t0 = _context3["catch"](0);
                    console.log(_context3.t0);
                    _context3.next = 13;
                    return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
                      type: _reducers_board__WEBPACK_IMPORTED_MODULE_3__["ADD_BOARD_FAILURE"],
                      error: _context3.t0
                    });

                  case 13:
                  case "end":
                    return _context3.stop();
                }
              }
            }, addBoard, null, [[0, 8]]);
          }));

        case 2:
        case "end":
          return _context4.stop();
      }
    }
  }, _marked2);
}

function bookSaga() {
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function bookSaga$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _context5.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchLoadBords), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchAddBoard)]);

        case 2:
        case "end":
          return _context5.stop();
      }
    }
  }, _marked3);
}

/***/ })

})
//# sourceMappingURL=_app.js.6fdc6492486c38e28f3f.hot-update.js.map