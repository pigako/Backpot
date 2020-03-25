webpackHotUpdate("static\\development\\pages\\_app.js",{

/***/ "./sagas/episode.js":
/*!**************************!*\
  !*** ./sagas/episode.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return episodeSaga; });
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-saga/effects */ "./node_modules/redux-saga/dist/redux-saga-effects-npm-proxy.esm.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _reducers_episode__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../reducers/episode */ "./reducers/episode.js");


var _marked =
/*#__PURE__*/
_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(watchLoadEpisode),
    _marked2 =
/*#__PURE__*/
_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(watchAddEpisode),
    _marked3 =
/*#__PURE__*/
_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(watchAddRecommend),
    _marked4 =
/*#__PURE__*/
_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(watchUpdateEpisode),
    _marked5 =
/*#__PURE__*/
_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(watchDeleteEpisode),
    _marked6 =
/*#__PURE__*/
_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(episodeSaga);



 // 글 조회

function watchLoadEpisode() {
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function watchLoadEpisode$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_episode__WEBPACK_IMPORTED_MODULE_3__["LOAD_EPISODE_REQUEST"],
          /*#__PURE__*/
          _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(action) {
            var result;
            return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.prev = 0;
                    _context.next = 3;
                    return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(function (episodeId) {
                      return axios__WEBPACK_IMPORTED_MODULE_2___default.a.get("/episode/".concat(episodeId));
                    }, action.id);

                  case 3:
                    result = _context.sent;
                    _context.next = 6;
                    return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
                      type: _reducers_episode__WEBPACK_IMPORTED_MODULE_3__["LOAD_EPISODE_SUCCESS"],
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
                      type: _reducers_episode__WEBPACK_IMPORTED_MODULE_3__["LOAD_EPISODE_FAILURE"],
                      error: _context.t0
                    });

                  case 13:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, null, [[0, 8]]);
          }));

        case 2:
        case "end":
          return _context2.stop();
      }
    }
  }, _marked);
} // 글 작성


function watchAddEpisode() {
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function watchAddEpisode$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_episode__WEBPACK_IMPORTED_MODULE_3__["ADD_EPISODE_REQUEST"],
          /*#__PURE__*/
          _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(action) {
            var result;
            return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    _context3.prev = 0;
                    _context3.next = 3;
                    return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(function (episodeData) {
                      return axios__WEBPACK_IMPORTED_MODULE_2___default.a.post("/episode", episodeData, {
                        withCredentials: true
                      });
                    }, action.data);

                  case 3:
                    result = _context3.sent;
                    _context3.next = 6;
                    return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
                      type: _reducers_episode__WEBPACK_IMPORTED_MODULE_3__["ADD_EPISODE_SUCCESS"],
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
                      type: _reducers_episode__WEBPACK_IMPORTED_MODULE_3__["ADD_EPISODE_FAILURE"],
                      error: _context3.t0
                    });

                  case 13:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee2, null, [[0, 8]]);
          }));

        case 2:
        case "end":
          return _context4.stop();
      }
    }
  }, _marked2);
} // 추천


function watchAddRecommend() {
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function watchAddRecommend$(_context6) {
    while (1) {
      switch (_context6.prev = _context6.next) {
        case 0:
          _context6.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_episode__WEBPACK_IMPORTED_MODULE_3__["ADD_RECOMMEND_REQUEST"],
          /*#__PURE__*/
          _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(action) {
            var result;
            return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context5) {
              while (1) {
                switch (_context5.prev = _context5.next) {
                  case 0:
                    _context5.prev = 0;
                    _context5.next = 3;
                    return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(function (episodeId) {
                      return axios__WEBPACK_IMPORTED_MODULE_2___default.a.post("/episode/".concat(episodeId), {}, {
                        withCredentials: true
                      });
                    }, action.id);

                  case 3:
                    result = _context5.sent;
                    _context5.next = 6;
                    return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
                      type: _reducers_episode__WEBPACK_IMPORTED_MODULE_3__["ADD_RECOMMEND_SUCCESS"],
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
                      type: _reducers_episode__WEBPACK_IMPORTED_MODULE_3__["ADD_RECOMMEND_FAILURE"],
                      error: _context5.t0
                    });

                  case 13:
                  case "end":
                    return _context5.stop();
                }
              }
            }, _callee3, null, [[0, 8]]);
          }));

        case 2:
        case "end":
          return _context6.stop();
      }
    }
  }, _marked3);
} // 수정


function watchUpdateEpisode() {
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function watchUpdateEpisode$(_context8) {
    while (1) {
      switch (_context8.prev = _context8.next) {
        case 0:
          _context8.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_episode__WEBPACK_IMPORTED_MODULE_3__["UPDATE_EPISODE_REQUEST"],
          /*#__PURE__*/
          _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4(action) {
            return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context7) {
              while (1) {
                switch (_context7.prev = _context7.next) {
                  case 0:
                    _context7.prev = 0;
                    _context7.next = 3;
                    return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(function (updateData) {
                      return axios__WEBPACK_IMPORTED_MODULE_2___default.a.patch("/episode/".concat(updateData.id), updateData, {
                        withCredentials: true
                      });
                    }, action.data);

                  case 3:
                    _context7.next = 5;
                    return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
                      type: _reducers_episode__WEBPACK_IMPORTED_MODULE_3__["UPDATE_EPISODE_SUCCESS"]
                    });

                  case 5:
                    _context7.next = 12;
                    break;

                  case 7:
                    _context7.prev = 7;
                    _context7.t0 = _context7["catch"](0);
                    console.log(_context7.t0);
                    _context7.next = 12;
                    return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
                      type: _reducers_episode__WEBPACK_IMPORTED_MODULE_3__["UPDATE_EPISODE_FAILURE"],
                      error: _context7.t0
                    });

                  case 12:
                  case "end":
                    return _context7.stop();
                }
              }
            }, _callee4, null, [[0, 7]]);
          }));

        case 2:
        case "end":
          return _context8.stop();
      }
    }
  }, _marked4);
} // 삭제


function watchDeleteEpisode() {
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function watchDeleteEpisode$(_context10) {
    while (1) {
      switch (_context10.prev = _context10.next) {
        case 0:
          _context10.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_episode__WEBPACK_IMPORTED_MODULE_3__["DELETE_EPISODE_REQUEST"],
          /*#__PURE__*/
          _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee5(action) {
            return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee5$(_context9) {
              while (1) {
                switch (_context9.prev = _context9.next) {
                  case 0:
                    _context9.prev = 0;
                    _context9.next = 3;
                    return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(function (episodeId) {
                      return axios__WEBPACK_IMPORTED_MODULE_2___default.a["delete"]("/episode/".concat(episodeId), {
                        withCredentials: true
                      });
                    }, action.id);

                  case 3:
                    _context9.next = 10;
                    break;

                  case 5:
                    _context9.prev = 5;
                    _context9.t0 = _context9["catch"](0);
                    console.log(_context9.t0);
                    _context9.next = 10;
                    return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
                      type: _reducers_episode__WEBPACK_IMPORTED_MODULE_3__["DELETE_EPISODE_FAILURE"],
                      error: _context9.t0
                    });

                  case 10:
                  case "end":
                    return _context9.stop();
                }
              }
            }, _callee5, null, [[0, 5]]);
          }));

        case 2:
        case "end":
          return _context10.stop();
      }
    }
  }, _marked5);
}

function episodeSaga() {
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function episodeSaga$(_context11) {
    while (1) {
      switch (_context11.prev = _context11.next) {
        case 0:
          _context11.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchLoadEpisode), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchAddEpisode), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchAddRecommend), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchUpdateEpisode), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchDeleteEpisode)]);

        case 2:
        case "end":
          return _context11.stop();
      }
    }
  }, _marked6);
}

/***/ })

})
//# sourceMappingURL=_app.js.2c8e558d6992bfd536b5.hot-update.js.map