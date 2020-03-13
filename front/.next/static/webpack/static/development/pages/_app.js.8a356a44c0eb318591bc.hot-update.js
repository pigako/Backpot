webpackHotUpdate("static\\development\\pages\\_app.js",{

/***/ "./sagas/book.js":
/*!***********************!*\
  !*** ./sagas/book.js ***!
  \***********************/
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
/* harmony import */ var _reducers_book__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../reducers/book */ "./reducers/book.js");


var _marked =
/*#__PURE__*/
_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(watchLoadBooks),
    _marked2 =
/*#__PURE__*/
_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(bookSaga);



 // 전체 연재글 가져오기

function watchLoadBooks() {
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function watchLoadBooks$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["throttle"])(1000, _reducers_book__WEBPACK_IMPORTED_MODULE_3__["LOAD_BOOKS_REQUEST"],
          /*#__PURE__*/
          _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function loadBooks(action) {
            var result;
            return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function loadBooks$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.prev = 0;
                    _context.next = 3;
                    return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(function () {
                      var lastId = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
                      var limit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 20;
                      return axios__WEBPACK_IMPORTED_MODULE_2___default.a.get("/books?lastId=".concat(lastId, "&limit=").concat(limit));
                    }, action.lastId);

                  case 3:
                    result = _context.sent;
                    _context.next = 6;
                    return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
                      type: LOAD_BOARDS_SUCCESS,
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
                      type: _reducers_book__WEBPACK_IMPORTED_MODULE_3__["LOAD_BOOKS_FAILURE"],
                      error: _context.t0
                    });

                  case 13:
                  case "end":
                    return _context.stop();
                }
              }
            }, loadBooks, null, [[0, 8]]);
          }));

        case 2:
        case "end":
          return _context2.stop();
      }
    }
  }, _marked);
}

function bookSaga() {
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function bookSaga$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchLoadBooks)]);

        case 2:
        case "end":
          return _context3.stop();
      }
    }
  }, _marked2);
}

/***/ })

})
//# sourceMappingURL=_app.js.8a356a44c0eb318591bc.hot-update.js.map