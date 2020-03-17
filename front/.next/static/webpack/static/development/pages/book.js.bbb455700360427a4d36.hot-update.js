webpackHotUpdate("static\\development\\pages\\book.js",{

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithHoles.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithHoles.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _arrayWithHoles; });
/* harmony import */ var _core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/array/is-array */ "./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js");
/* harmony import */ var _core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0__);

function _arrayWithHoles(arr) {
  if (_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0___default()(arr)) return arr;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArrayLimit.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArrayLimit.js ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _iterableToArrayLimit; });
/* harmony import */ var _core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/get-iterator */ "./node_modules/@babel/runtime-corejs2/core-js/get-iterator.js");
/* harmony import */ var _core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_is_iterable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/is-iterable */ "./node_modules/@babel/runtime-corejs2/core-js/is-iterable.js");
/* harmony import */ var _core_js_is_iterable__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_is_iterable__WEBPACK_IMPORTED_MODULE_1__);


function _iterableToArrayLimit(arr, i) {
  if (!(_core_js_is_iterable__WEBPACK_IMPORTED_MODULE_1___default()(Object(arr)) || Object.prototype.toString.call(arr) === "[object Arguments]")) {
    return;
  }

  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = _core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0___default()(arr), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableRest.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableRest.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _nonIterableRest; });
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _slicedToArray; });
/* harmony import */ var _arrayWithHoles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayWithHoles */ "./node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithHoles.js");
/* harmony import */ var _iterableToArrayLimit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iterableToArrayLimit */ "./node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArrayLimit.js");
/* harmony import */ var _nonIterableRest__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nonIterableRest */ "./node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableRest.js");



function _slicedToArray(arr, i) {
  return Object(_arrayWithHoles__WEBPACK_IMPORTED_MODULE_0__["default"])(arr) || Object(_iterableToArrayLimit__WEBPACK_IMPORTED_MODULE_1__["default"])(arr, i) || Object(_nonIterableRest__WEBPACK_IMPORTED_MODULE_2__["default"])();
}

/***/ }),

/***/ "./pages/book.js":
/*!***********************!*\
  !*** ./pages/book.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _reducers_book__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../reducers/book */ "./reducers/book.js");
/* harmony import */ var _components_BookTable__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/BookTable */ "./components/BookTable.js");
/* harmony import */ var _components_designs_Button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/designs/Button */ "./components/designs/Button.js");


var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;









var SBookDiv = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "book__SBookDiv",
  componentId: "sc-1azvhkf-0"
})(["width:98%;margin:30px 0px 0px 10px;"]);
var BookTopDiv = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "book__BookTopDiv",
  componentId: "sc-1azvhkf-1"
})(["display:inline-block;width:100%;height:16rem;border-bottom:solid 2px #495057;"]);
var BookTopLeftDiv = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "book__BookTopLeftDiv",
  componentId: "sc-1azvhkf-2"
})(["width:15%;float:left;"]);
var BookTopRightDiv = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "book__BookTopRightDiv",
  componentId: "sc-1azvhkf-3"
})(["width:80%;padding:1.5rem;float:right;border:solid 2px #495057;& > label{font-size:1rem;display:block;margin-top:1rem;& > a{cursor:pointer;}}& > div{display:flex;& > label{font-size:1rem;display:block;margin-top:1rem;flex:1;}}"]);
var Thumbnail = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].img.withConfig({
  displayName: "book__Thumbnail",
  componentId: "sc-1azvhkf-4"
})(["height:13rem;display:block;margin:1rem auto;"]);
var BookTitle = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].h1.withConfig({
  displayName: "book__BookTitle",
  componentId: "sc-1azvhkf-5"
})(["font-size:1.5rem;font-weight:bold;"]);
var BookSummaryDiv = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "book__BookSummaryDiv",
  componentId: "sc-1azvhkf-6"
})(["margin-top:1.5rem;margin-bottom:1.5rem;padding-left:1.5rem;padding-right:1.5rem;height:7rem;width:100%;border-bottom:solid 2px #495057;"]);
var BookButtonDiv = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "book__BookButtonDiv",
  componentId: "sc-1azvhkf-7"
})(["display:flex;align-items:center;justify-content:flex-end;height:2.25rem;& > button{width:8rem;}"]);

var Book = function Book() {
  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["useSelector"])(function (state) {
    return state.book;
  }),
      book = _useSelector.book;

  var _useSelector2 = Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["useSelector"])(function (state) {
    return state.user;
  }),
      me = _useSelector2.me;

  var _useState = useState(false),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState, 2),
      isASC = _useState2[0],
      setIsASC = _useState2[1];

  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["useDispatch"])();
  var onGoWriter = Object(react__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(function (e) {
    next_router__WEBPACK_IMPORTED_MODULE_7___default.a.push({
      pathname: '/librery',
      query: {
        id: book.User.userId
      }
    }, "/librery/".concat(book.User.userId));
  }, [book && book.User.id]);
  var onAddLikeBook = Object(react__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(function (e) {
    dispatch({
      type: _reducers_book__WEBPACK_IMPORTED_MODULE_8__["ADD_LIKEBOOK_REQUEST"],
      bookId: book.id,
      data: {
        name: book.name,
        userId: book.User.userId,
        userNickname: book.User.nickname
      }
    });
  }, [book && book.id, book && book.name, book && book.User.userId, book && book.User.nickname]);
  var onRemoveLikeBook = Object(react__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(function (e) {
    dispatch({
      type: _reducers_book__WEBPACK_IMPORTED_MODULE_8__["REMOVE_LIKEBOOK_REQUEST"],
      bookId: book.id
    });
  }, [book && book.id]);
  var onIsASC = Object(react__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(function (e) {
    setIsASC(!isASC);
  }, [isASC]);
  return __jsx(SBookDiv, null, __jsx(BookTopDiv, null, __jsx(BookTopLeftDiv, null, __jsx(Thumbnail, {
    src: "http://localhost:5000/".concat(book && book.thumbnail)
  })), __jsx(BookTopRightDiv, null, __jsx(BookTitle, null, book && book.name), __jsx("label", null, book && book.BookGenre.map(function (v) {
    return v.name + ' ';
  })), __jsx("div", null, __jsx("label", null, "\uC791\uAC00 ", __jsx("a", {
    onClick: onGoWriter
  }, book && book.User.nickname), " \uB2D8"), __jsx("label", null, "\uC5F0\uC7AC\uC8FC\uAE30 ", book && book.serialDay.split(',').map(function (v) {
    return v + ' ';
  }))), __jsx("div", null, __jsx("label", null, "\uC791\uD488\uB4F1\uB85D\uC77C", ' ', book && moment__WEBPACK_IMPORTED_MODULE_4___default()(book.createdAt).format('YY.MM.DD HH시 mm분')), __jsx("label", null, "\uCD5C\uADFC\uB4F1\uB85D\uC77C", ' ', book && (book.Episodes[book.Episodes.length - 1] ? moment__WEBPACK_IMPORTED_MODULE_4___default()(book.Episodes[book.Episodes.length - 1].createdAt).format('YY.MM.DD HH시 mm분') : moment__WEBPACK_IMPORTED_MODULE_4___default()(book.createdAt).format('YY.MM.DD HH시 mm분')))), __jsx("div", null, __jsx("label", null, "\uC5F0\uC7AC\uC218 ", book && book.Episodes.length, " \uD654"), __jsx("label", null, "\uC870\uD68C\uC218", ' ', book && book.Episodes.reduce(function (acc, val) {
    return acc + val.views;
  }, 0))), __jsx("div", null, __jsx("label", null, "\uCD94\uCC9C\uC218", ' ', book && book.Episodes.reduce(function (acc, val) {
    return acc + val.recommends;
  }, 0)), __jsx("label", null, "\uC120\uD638\uC791\uC218 ", book && book.likersCount)))), __jsx(BookSummaryDiv, {
    dangerouslySetInnerHTML: {
      __html: book && book.summary
    }
  }), __jsx(BookButtonDiv, null, (me && me.id) === (book && book.User.id) ? __jsx(_components_designs_Button__WEBPACK_IMPORTED_MODULE_10__["default"], null, "\uAE00\uC4F0\uB7EC\uAC00\uAE30") : null, me ? me.LikingBook.find(function (v) {
    return v.id === (book && book.id);
  }) ? __jsx(_components_designs_Button__WEBPACK_IMPORTED_MODULE_10__["default"], {
    color: "pink",
    onClick: onRemoveLikeBook
  }, "\uC120\uD638\uC791\uD574\uC81C") : __jsx(_components_designs_Button__WEBPACK_IMPORTED_MODULE_10__["default"], {
    onClick: onAddLikeBook
  }, "\uC120\uD638\uC791\uCD94\uAC00") : null, __jsx(_components_designs_Button__WEBPACK_IMPORTED_MODULE_10__["default"], {
    onClick: onIsASC
  }, "\uC815\uB82C:", onIsASC ? "\uC624\uB984" : "\uB0B4\uB9BC")), book && __jsx(_components_BookTable__WEBPACK_IMPORTED_MODULE_9__["default"], {
    episode: book.Episodes
  }));
};

Book.getInitialProps = function _callee(context) {
  var bookId;
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          bookId = context.query.bookid;
          context.store.dispatch({
            type: _reducers_book__WEBPACK_IMPORTED_MODULE_8__["LOAD_BOOK_REQUEST"],
            id: bookId
          });

        case 2:
        case "end":
          return _context.stop();
      }
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Book);

/***/ })

})
//# sourceMappingURL=book.js.bbb455700360427a4d36.hot-update.js.map