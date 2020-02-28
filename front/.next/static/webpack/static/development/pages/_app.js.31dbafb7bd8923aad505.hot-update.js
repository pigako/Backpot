webpackHotUpdate("static\\development\\pages\\_app.js",{

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! redux-saga */ "./node_modules/redux-saga/dist/redux-saga-core-npm-proxy.esm.js");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next-redux-wrapper */ "./node_modules/next-redux-wrapper/es6/index.js");
/* harmony import */ var next_redux_saga__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next-redux-saga */ "./node_modules/next-redux-saga/dist/next-redux-saga.es.js");
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/app */ "./node_modules/next/app.js");
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _components_designs_GlobalStyles__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/designs/GlobalStyles */ "./components/designs/GlobalStyles.js");
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../reducers */ "./reducers/index.js");
/* harmony import */ var _sagas__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../sagas */ "./sagas/index.js");
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../reducers/user */ "./reducers/user.js");

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;















var Backpot = function Backpot(_ref) {
  var Component = _ref.Component,
      store = _ref.store,
      pageProps = _ref.pageProps;
  return __jsx(next_app__WEBPACK_IMPORTED_MODULE_8__["Container"], null, __jsx(react_redux__WEBPACK_IMPORTED_MODULE_4__["Provider"], {
    store: store
  }, __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_11__["default"], null, __jsx(Component, pageProps)), __jsx(_components_designs_GlobalStyles__WEBPACK_IMPORTED_MODULE_10__["default"], null)));
};

Backpot.propTypes = {
  Component: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.elementType.isRequired,
  store: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object.isRequired,
  pageProps: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object.isRequired
};

Backpot.getInitialProps = function _callee(context) {
  var ctx, Component, pageProps, state, cookie;
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          ctx = context.ctx, Component = context.Component;
          pageProps = {};
          state = ctx.store.getState();
          cookie = ctx.isServer ? ctx.req.headers.cookie : '';
          axios__WEBPACK_IMPORTED_MODULE_9___default.a.defaults.headers.Cookie = '';

          if (ctx.isServer && cookie) {
            axios__WEBPACK_IMPORTED_MODULE_9___default.a.defaults.headers.Cookie = cookie;
          } // if (!state.user.me) {
          //   ctx.store.dispatch({
          //     type: LOAD_USER_REQUEST,
          //   });
          // }


          if (!Component.getInitialProps) {
            _context.next = 13;
            break;
          }

          _context.next = 9;
          return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(Component.getInitialProps(ctx));

        case 9:
          _context.t0 = _context.sent;

          if (_context.t0) {
            _context.next = 12;
            break;
          }

          _context.t0 = {};

        case 12:
          pageProps = _context.t0;

        case 13:
          return _context.abrupt("return", {
            pageProps: pageProps
          });

        case 14:
        case "end":
          return _context.stop();
      }
    }
  });
};

var configureStore = function configureStore(initialState, options) {
  var sagaMiddleware = Object(redux_saga__WEBPACK_IMPORTED_MODULE_5__["default"])();
  var middlewares = [sagaMiddleware, function (store) {
    return function (next) {
      return function (action) {
        // saga Loging
        console.log(action);
        next(action);
      };
    };
  }];
  var enhancer = false ? undefined : Object(redux__WEBPACK_IMPORTED_MODULE_3__["compose"])(redux__WEBPACK_IMPORTED_MODULE_3__["applyMiddleware"].apply(void 0, middlewares), !options.isServer && typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== 'undefined' ? window.__REDUX_DEVTOOLS_EXTENSION__() : function (f) {
    return f;
  });
  var store = Object(redux__WEBPACK_IMPORTED_MODULE_3__["createStore"])(_reducers__WEBPACK_IMPORTED_MODULE_12__["default"], initialState, enhancer);
  store.sagaTask = sagaMiddleware.run(_sagas__WEBPACK_IMPORTED_MODULE_13__["default"]);
  return store;
};

/* harmony default export */ __webpack_exports__["default"] = (Object(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_6__["default"])(configureStore)(Object(next_redux_saga__WEBPACK_IMPORTED_MODULE_7__["default"])(Backpot)));

/***/ })

})
//# sourceMappingURL=_app.js.31dbafb7bd8923aad505.hot-update.js.map