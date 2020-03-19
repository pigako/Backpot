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
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-properties */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-descriptors */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptors.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-symbols */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! redux-saga/effects */ "./node_modules/redux-saga/dist/redux-saga-effects-npm-proxy.esm.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _reducers_book__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../reducers/book */ "./reducers/book.js");
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../reducers/user */ "./reducers/user.js");









function ownKeys(object, enumerableOnly) { var keys = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default()(object); if (_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default.a) { var symbols = _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default()(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(target, key, source[key]); }); } else if (_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default.a) { _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default()(target, _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default()(source)); } else { ownKeys(Object(source)).forEach(function (key) { _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, key, _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(source, key)); }); } } return target; }

var _marked =
/*#__PURE__*/
_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_7___default.a.mark(watchLoadBooks),
    _marked2 =
/*#__PURE__*/
_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_7___default.a.mark(watchLoadBook),
    _marked3 =
/*#__PURE__*/
_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_7___default.a.mark(watchAddLikebook),
    _marked4 =
/*#__PURE__*/
_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_7___default.a.mark(watchRemoveLikebook),
    _marked5 =
/*#__PURE__*/
_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_7___default.a.mark(watchUploadImage),
    _marked6 =
/*#__PURE__*/
_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_7___default.a.mark(watchAddBook),
    _marked7 =
/*#__PURE__*/
_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_7___default.a.mark(watchLoadGenre),
    _marked8 =
/*#__PURE__*/
_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_7___default.a.mark(watchUpdateBook),
    _marked9 =
/*#__PURE__*/
_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_7___default.a.mark(bookSaga);




 // 전체 연재글 가져오기

function watchLoadBooks() {
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_7___default.a.wrap(function watchLoadBooks$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_8__["throttle"])(1000, _reducers_book__WEBPACK_IMPORTED_MODULE_10__["LOAD_BOOKS_REQUEST"],
          /*#__PURE__*/
          _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_7___default.a.mark(function loadBooks(action) {
            var result;
            return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_7___default.a.wrap(function loadBooks$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.prev = 0;
                    _context.next = 3;
                    return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_8__["call"])(function () {
                      var lastId = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
                      var limit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 20;
                      return axios__WEBPACK_IMPORTED_MODULE_9___default.a.get("/books?lastId=".concat(lastId, "&limit=").concat(limit));
                    }, action.lastId);

                  case 3:
                    result = _context.sent;
                    _context.next = 6;
                    return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_8__["put"])({
                      type: _reducers_book__WEBPACK_IMPORTED_MODULE_10__["LOAD_BOOKS_SUCCESS"],
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
                    return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_8__["put"])({
                      type: _reducers_book__WEBPACK_IMPORTED_MODULE_10__["LOAD_BOOKS_FAILURE"],
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
} // 게시글 하나 조회


function watchLoadBook() {
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_7___default.a.wrap(function watchLoadBook$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_8__["takeLatest"])(_reducers_book__WEBPACK_IMPORTED_MODULE_10__["LOAD_BOOK_REQUEST"],
          /*#__PURE__*/
          _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_7___default.a.mark(function loadBook(action) {
            var result;
            return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_7___default.a.wrap(function loadBook$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    _context3.prev = 0;
                    _context3.next = 3;
                    return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_8__["call"])(function (bookId) {
                      return axios__WEBPACK_IMPORTED_MODULE_9___default.a.get("/book/".concat(bookId));
                    }, action.id);

                  case 3:
                    result = _context3.sent;
                    _context3.next = 6;
                    return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_8__["put"])({
                      type: _reducers_book__WEBPACK_IMPORTED_MODULE_10__["LOAD_BOOK_SUCCESS"],
                      data: result.data
                    });

                  case 6:
                    _context3.next = 12;
                    break;

                  case 8:
                    _context3.prev = 8;
                    _context3.t0 = _context3["catch"](0);
                    console.log(_context3.t0);
                    Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_8__["put"])({
                      type: _reducers_book__WEBPACK_IMPORTED_MODULE_10__["LOAD_BOOK_FAILURE"],
                      error: _context3.t0
                    });

                  case 12:
                  case "end":
                    return _context3.stop();
                }
              }
            }, loadBook, null, [[0, 8]]);
          }));

        case 2:
        case "end":
          return _context4.stop();
      }
    }
  }, _marked2);
} // 선호작 추가


function watchAddLikebook() {
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_7___default.a.wrap(function watchAddLikebook$(_context6) {
    while (1) {
      switch (_context6.prev = _context6.next) {
        case 0:
          _context6.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_8__["takeLatest"])(_reducers_book__WEBPACK_IMPORTED_MODULE_10__["ADD_LIKEBOOK_REQUEST"],
          /*#__PURE__*/
          _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_7___default.a.mark(function addLikebook(action) {
            var result;
            return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_7___default.a.wrap(function addLikebook$(_context5) {
              while (1) {
                switch (_context5.prev = _context5.next) {
                  case 0:
                    _context5.prev = 0;
                    _context5.next = 3;
                    return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_8__["call"])(function (bookId) {
                      return axios__WEBPACK_IMPORTED_MODULE_9___default.a.post("/book/".concat(bookId, "/like"), {}, {
                        withCredentials: true
                      });
                    }, action.bookId);

                  case 3:
                    result = _context5.sent;
                    _context5.next = 6;
                    return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_8__["put"])({
                      type: _reducers_book__WEBPACK_IMPORTED_MODULE_10__["ADD_LIKEBOOK_SUCCESS"],
                      data: result.data
                    });

                  case 6:
                    _context5.next = 8;
                    return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_8__["put"])({
                      type: _reducers_user__WEBPACK_IMPORTED_MODULE_11__["ADD_LIKEBOOKLIST"],
                      data: _objectSpread({
                        id: result.data
                      }, action.data)
                    });

                  case 8:
                    _context5.next = 15;
                    break;

                  case 10:
                    _context5.prev = 10;
                    _context5.t0 = _context5["catch"](0);
                    console.log(_context5.t0);
                    _context5.next = 15;
                    return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_8__["put"])({
                      type: _reducers_book__WEBPACK_IMPORTED_MODULE_10__["ADD_LIKEBOOK_FAILURE"],
                      error: _context5.t0
                    });

                  case 15:
                  case "end":
                    return _context5.stop();
                }
              }
            }, addLikebook, null, [[0, 10]]);
          }));

        case 2:
        case "end":
          return _context6.stop();
      }
    }
  }, _marked3);
} // 선호작 해제


function watchRemoveLikebook() {
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_7___default.a.wrap(function watchRemoveLikebook$(_context8) {
    while (1) {
      switch (_context8.prev = _context8.next) {
        case 0:
          _context8.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_8__["takeLatest"])(_reducers_book__WEBPACK_IMPORTED_MODULE_10__["REMOVE_LIKEBOOK_REQUEST"],
          /*#__PURE__*/
          _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_7___default.a.mark(function removeLikebook(action) {
            var result;
            return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_7___default.a.wrap(function removeLikebook$(_context7) {
              while (1) {
                switch (_context7.prev = _context7.next) {
                  case 0:
                    _context7.prev = 0;
                    _context7.next = 3;
                    return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_8__["call"])(function (bookId) {
                      return axios__WEBPACK_IMPORTED_MODULE_9___default.a["delete"]("/book/".concat(bookId, "/unlike"), {
                        withCredentials: true
                      });
                    }, action.bookId);

                  case 3:
                    result = _context7.sent;
                    _context7.next = 6;
                    return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_8__["put"])({
                      type: _reducers_book__WEBPACK_IMPORTED_MODULE_10__["REMOVE_LIKEBOOK_SUCCESS"],
                      data: result.data
                    });

                  case 6:
                    _context7.next = 8;
                    return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_8__["put"])({
                      type: _reducers_user__WEBPACK_IMPORTED_MODULE_11__["REMOVE_LIKEBOOKLIST"],
                      data: result.data
                    });

                  case 8:
                    _context7.next = 14;
                    break;

                  case 10:
                    _context7.prev = 10;
                    _context7.t0 = _context7["catch"](0);
                    console.log(_context7.t0);
                    Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_8__["put"])({
                      type: _reducers_book__WEBPACK_IMPORTED_MODULE_10__["REMOVE_LIKEBOOK_FAILURE"],
                      error: _context7.t0
                    });

                  case 14:
                  case "end":
                    return _context7.stop();
                }
              }
            }, removeLikebook, null, [[0, 10]]);
          }));

        case 2:
        case "end":
          return _context8.stop();
      }
    }
  }, _marked4);
} // 썸네일 이미지 업로드


function watchUploadImage() {
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_7___default.a.wrap(function watchUploadImage$(_context10) {
    while (1) {
      switch (_context10.prev = _context10.next) {
        case 0:
          _context10.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_8__["takeLatest"])(_reducers_book__WEBPACK_IMPORTED_MODULE_10__["UPLOAD_IMAGE_REQEUST"],
          /*#__PURE__*/
          _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_7___default.a.mark(function uploadImage(action) {
            var result;
            return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_7___default.a.wrap(function uploadImage$(_context9) {
              while (1) {
                switch (_context9.prev = _context9.next) {
                  case 0:
                    _context9.prev = 0;
                    _context9.next = 3;
                    return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_8__["call"])(function (formData) {
                      return axios__WEBPACK_IMPORTED_MODULE_9___default.a.post('/book/thumbnail', formData, {
                        withCredentials: true
                      });
                    }, action.data);

                  case 3:
                    result = _context9.sent;
                    _context9.next = 6;
                    return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_8__["put"])({
                      type: _reducers_book__WEBPACK_IMPORTED_MODULE_10__["UPLOAD_IMAGE_SUCCESS"],
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
                    return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_8__["put"])({
                      type: _reducers_book__WEBPACK_IMPORTED_MODULE_10__["UPLOAD_IMAGE_FAILURE"],
                      error: _context9.t0
                    });

                  case 13:
                  case "end":
                    return _context9.stop();
                }
              }
            }, uploadImage, null, [[0, 8]]);
          }));

        case 2:
        case "end":
          return _context10.stop();
      }
    }
  }, _marked5);
} // 작품 만들기


function watchAddBook() {
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_7___default.a.wrap(function watchAddBook$(_context12) {
    while (1) {
      switch (_context12.prev = _context12.next) {
        case 0:
          _context12.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_8__["takeLatest"])(_reducers_book__WEBPACK_IMPORTED_MODULE_10__["ADD_BOOK_REQEUST"],
          /*#__PURE__*/
          _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_7___default.a.mark(function addBook(action) {
            var result;
            return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_7___default.a.wrap(function addBook$(_context11) {
              while (1) {
                switch (_context11.prev = _context11.next) {
                  case 0:
                    _context11.prev = 0;
                    _context11.next = 3;
                    return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_8__["call"])(function (bookData) {
                      return axios__WEBPACK_IMPORTED_MODULE_9___default.a.post('/book', bookData, {
                        withCredentials: true
                      });
                    }, action.data);

                  case 3:
                    result = _context11.sent;
                    _context11.next = 6;
                    return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_8__["put"])({
                      type: _reducers_book__WEBPACK_IMPORTED_MODULE_10__["ADD_BOOK_SUCCESS"],
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
                    return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_8__["put"])({
                      type: _reducers_book__WEBPACK_IMPORTED_MODULE_10__["ADD_BOOK_FAILURE"],
                      error: _context11.t0
                    });

                  case 13:
                  case "end":
                    return _context11.stop();
                }
              }
            }, addBook, null, [[0, 8]]);
          }));

        case 2:
        case "end":
          return _context12.stop();
      }
    }
  }, _marked6);
} // 장르 조회


function watchLoadGenre() {
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_7___default.a.wrap(function watchLoadGenre$(_context14) {
    while (1) {
      switch (_context14.prev = _context14.next) {
        case 0:
          _context14.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_8__["takeLatest"])(_reducers_book__WEBPACK_IMPORTED_MODULE_10__["LOAD_GENRE_REQUEST"],
          /*#__PURE__*/
          _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_7___default.a.mark(function loadGenre() {
            var result;
            return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_7___default.a.wrap(function loadGenre$(_context13) {
              while (1) {
                switch (_context13.prev = _context13.next) {
                  case 0:
                    _context13.prev = 0;
                    _context13.next = 3;
                    return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_8__["call"])(function () {
                      return axios__WEBPACK_IMPORTED_MODULE_9___default.a.get('/genres');
                    });

                  case 3:
                    result = _context13.sent;
                    _context13.next = 6;
                    return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_8__["put"])({
                      type: _reducers_book__WEBPACK_IMPORTED_MODULE_10__["LOAD_GENRE_SUCCESS"],
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
                    return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_8__["put"])({
                      type: _reducers_book__WEBPACK_IMPORTED_MODULE_10__["LOAD_GENRE_FAILURE"],
                      error: _context13.t0
                    });

                  case 13:
                  case "end":
                    return _context13.stop();
                }
              }
            }, loadGenre, null, [[0, 8]]);
          }));

        case 2:
        case "end":
          return _context14.stop();
      }
    }
  }, _marked7);
} // 작품 수정


function watchUpdateBook() {
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_7___default.a.wrap(function watchUpdateBook$(_context16) {
    while (1) {
      switch (_context16.prev = _context16.next) {
        case 0:
          _context16.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_8__["takeLatest"])(_reducers_book__WEBPACK_IMPORTED_MODULE_10__["UPDATE_BOOK_REQUEST"],
          /*#__PURE__*/
          _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_7___default.a.mark(function updateBook(action) {
            var result;
            return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_7___default.a.wrap(function updateBook$(_context15) {
              while (1) {
                switch (_context15.prev = _context15.next) {
                  case 0:
                    _context15.prev = 0;
                    _context15.next = 3;
                    return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_8__["call"])(function (bookData) {
                      return axios__WEBPACK_IMPORTED_MODULE_9___default.a.patch("/book", bookData, {
                        withCredentials: true
                      });
                    }, action.data);

                  case 3:
                    result = _context15.sent;
                    _context15.next = 6;
                    return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_8__["put"])({
                      type: _reducers_book__WEBPACK_IMPORTED_MODULE_10__["UPDATE_BOOK_SUCCESS"],
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
                    return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_8__["put"])({
                      type: _reducers_book__WEBPACK_IMPORTED_MODULE_10__["UPDATE_BOOK_FAILURE"],
                      error: _context15.t0
                    });

                  case 13:
                  case "end":
                    return _context15.stop();
                }
              }
            }, updateBook, null, [[0, 8]]);
          }));

        case 2:
        case "end":
          return _context16.stop();
      }
    }
  }, _marked8);
}

function bookSaga() {
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_7___default.a.wrap(function bookSaga$(_context17) {
    while (1) {
      switch (_context17.prev = _context17.next) {
        case 0:
          _context17.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_8__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_8__["fork"])(watchLoadBooks), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_8__["fork"])(watchLoadBook), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_8__["fork"])(watchAddLikebook), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_8__["fork"])(watchRemoveLikebook), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_8__["fork"])(watchUploadImage), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_8__["fork"])(watchAddBook), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_8__["fork"])(watchLoadGenre), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_8__["fork"])(watchUpdateBook)]);

        case 2:
        case "end":
          return _context17.stop();
      }
    }
  }, _marked9);
}

/***/ })

})
//# sourceMappingURL=_app.js.3041a9d5be67e0d66dde.hot-update.js.map