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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "/jkW":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
}); // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

exports.isDynamicRoute = isDynamicRoute;

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("1TCz");


/***/ }),

/***/ "0Bsm":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("KI45");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router = __webpack_require__("nOHt");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return _react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (false) { var name; }

  return WithRouterWrapper;
}

/***/ }),

/***/ "1BYw":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Dtiu");
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
  } else if (props.size === 'middle') {
    return Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["css"])(["width:33%;"]);
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
  size: 'small'
};
/* harmony default export */ __webpack_exports__["a"] = (Button);

/***/ }),

/***/ "1TCz":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "redux"
var external_redux_ = __webpack_require__("rKB8");

// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__("h74D");

// EXTERNAL MODULE: external "redux-saga"
var external_redux_saga_ = __webpack_require__("1fKG");
var external_redux_saga_default = /*#__PURE__*/__webpack_require__.n(external_redux_saga_);

// EXTERNAL MODULE: external "next-redux-wrapper"
var external_next_redux_wrapper_ = __webpack_require__("JMOJ");
var external_next_redux_wrapper_default = /*#__PURE__*/__webpack_require__.n(external_next_redux_wrapper_);

// EXTERNAL MODULE: external "next-redux-saga"
var external_next_redux_saga_ = __webpack_require__("pEZS");
var external_next_redux_saga_default = /*#__PURE__*/__webpack_require__.n(external_next_redux_saga_);

// EXTERNAL MODULE: ./node_modules/next/app.js
var app = __webpack_require__("8Bbg");

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__("zr5I");
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// EXTERNAL MODULE: external "react-helmet"
var external_react_helmet_ = __webpack_require__("zIXN");
var external_react_helmet_default = /*#__PURE__*/__webpack_require__.n(external_react_helmet_);

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// EXTERNAL MODULE: external "styled-reset"
var external_styled_reset_ = __webpack_require__("x6ND");
var external_styled_reset_default = /*#__PURE__*/__webpack_require__.n(external_styled_reset_);

// CONCATENATED MODULE: ./components/designs/GlobalStyles.js


const globalStyles = external_styled_components_["createGlobalStyle"]`
    ${external_styled_reset_default.a};
    a{
        text-decoration : none;
        color : inherit;
    }
    *{
        box-sizing : border-box;
    }
    html {
        /* height:100%;  */
    }
    body {
        /* height:100%;  */
        min-width: 1200px;
        font-family : -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        font-size : 1.2rem;
    }
    strong {
        font-weight:bold;
    }
    hr {
        border: solid 3px #000;
        border-bottom:0px;
    }
    /* body::-webkit-scrollbar { 
        display: none; 
    } */
    /* #__next {
        height:100%;
    } */
`;
/* harmony default export */ var GlobalStyles = (globalStyles);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__("YFqc");
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");

// EXTERNAL MODULE: ./components/designs/Button.js
var Button = __webpack_require__("1BYw");

// EXTERNAL MODULE: ./reducers/book.js
var reducers_book = __webpack_require__("f5w3");

// CONCATENATED MODULE: ./components/Header.js
var __jsx = external_react_default.a.createElement;







const Menu = external_styled_components_default.a.header.withConfig({
  displayName: "Header__Menu",
  componentId: "i7gymj-0"
})(["position:fixed;top:0px;left:0px;width:100%;height:50px;display:flex;align-items:center;border-bottom:solid 2px #495057;padding:0px 10px;z-index:10;background-color:rgba(20,20,20,0.8);"]);
const List = external_styled_components_default.a.ul.withConfig({
  displayName: "Header__List",
  componentId: "i7gymj-1"
})(["display:flex;width:100%;"]);
const Item = external_styled_components_default.a.li.withConfig({
  displayName: "Header__Item",
  componentId: "i7gymj-2"
})(["width:10rem;height:3.2rem;text-align:center;margin-right:10px;border-bottom:solid 4px ", ";transition:border-bottom 0.5s ease-in-out;& a{color:white;width:100%;height:3.2rem;display:flex;align-items:center;justify-content:center;}"], props => props.current ? '#148cff' : 'transparent');
const SearchForm = external_styled_components_default.a.form.withConfig({
  displayName: "Header__SearchForm",
  componentId: "i7gymj-3"
})(["display:flex;justify-content:flex-end;align-items:center;padding:0px 10px;width:calc(100% - 210px);& a{color:white;height:50px;padding-right:10px;display:flex;align-items:center;justify-content:center;}"]);
const SearchInput = external_styled_components_default.a.input.withConfig({
  displayName: "Header__SearchInput",
  componentId: "i7gymj-4"
})(["margin-right:10px;outline:none;border:none;border-radius:4px;padding-left:10px;height:2.25rem;width:10rem;font-size:1.5rem;transition:0.55s ease;&:hover{width:30rem;}&:focus{width:30rem;}"]);

const Header = () => {
  const router = Object(router_["useRouter"])();
  const {
    pathname,
    query
  } = Object(router_["useRouter"])();
  const {
    0: searchText,
    1: setSearchText
  } = Object(external_react_["useState"])('');
  const {
    userId
  } = Object(external_react_redux_["useSelector"])(state => state.user.me) || false;
  const {
    keyword
  } = Object(external_react_redux_["useSelector"])(state => state.book);
  const dispatch = Object(external_react_redux_["useDispatch"])();
  const onChangeSearchText = Object(external_react_["useCallback"])(e => {
    setSearchText(e.target.value);
  }, []);
  const onSubmitSearch = Object(external_react_["useCallback"])(e => {
    e.preventDefault();
    dispatch({
      type: reducers_book["h" /* CHANGE_KEYWORD */],
      data: searchText
    });
    router.push('/booklist');
  }, [searchText]);
  return __jsx(Menu, null, __jsx(List, null, __jsx(Item, {
    key: "home",
    current: pathname === '/'
  }, __jsx(link_default.a, {
    href: "/"
  }, __jsx("a", null, "Backpot"))), __jsx(Item, {
    key: "booklist",
    current: pathname === '/booklist'
  }, __jsx(link_default.a, {
    href: "/booklist"
  }, __jsx("a", null, "\uC6F9\uC18C\uC124"))), userId && __jsx(Item, {
    key: "mydirectory",
    current: pathname === `/librery` && query.id === userId
  }, __jsx(link_default.a, {
    href: {
      pathname: '/librery',
      query: {
        id: userId
      }
    },
    as: `/librery/${userId}`
  }, __jsx("a", null, "\uB0B4 \uC11C\uC7AC"))), userId && __jsx(Item, {
    key: "profile",
    current: pathname === `/profile` && query.id === userId
  }, __jsx(link_default.a, {
    href: {
      pathname: '/profile',
      query: {
        id: userId
      }
    },
    as: `/profile/${userId}`
  }, __jsx("a", null, "\uB0B4 \uC815\uBCF4"))), __jsx(Item, {
    key: "board",
    current: pathname === '/board'
  }, __jsx(link_default.a, {
    href: "/board"
  }, __jsx("a", null, "\uCD94\uCC9C\uAC8C\uC2DC\uD310"))), __jsx(SearchForm, {
    onSubmit: onSubmitSearch
  }, __jsx("a", null, "Search"), __jsx(SearchInput, {
    value: searchText,
    onChange: onChangeSearchText
  }), __jsx(Button["a" /* default */], {
    type: "submit"
  }, "\uAC80\uC0C9"))));
};

/* harmony default export */ var components_Header = (Header);
// EXTERNAL MODULE: ./reducers/user.js
var user = __webpack_require__("LAVF");

// CONCATENATED MODULE: ./components/LoginForm.js
var LoginForm_jsx = external_react_default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







const Form = external_styled_components_default.a.form.withConfig({
  displayName: "LoginForm__Form",
  componentId: "sc-1xv52z9-0"
})(["width:100%;margin-top:10px;margin-left:10px;font-size:1rem;"]);
const Label = external_styled_components_default.a.label.withConfig({
  displayName: "LoginForm__Label",
  componentId: "sc-1xv52z9-1"
})(["display:inline-block;margin-bottom:10px;"]);
const Input = external_styled_components_default.a.input.withConfig({
  displayName: "LoginForm__Input",
  componentId: "sc-1xv52z9-2"
})(["border-radius:4px;padding-left:10px;margin-bottom:10px;width:90%;font-size:1.2rem;"]);
const LoginFormButtonDiv = external_styled_components_default.a.div.withConfig({
  displayName: "LoginForm__LoginFormButtonDiv",
  componentId: "sc-1xv52z9-3"
})(["display:flex;justify-content:flex-end;align-items:center;width:90%;& button{margin-left:10px;}"]);
const LoadingImg = external_styled_components_default.a.img.withConfig({
  displayName: "LoginForm__LoadingImg",
  componentId: "sc-1xv52z9-4"
})(["margin-top:4px;height:1.5rem;"]);

const LoginForm = () => {
  const {
    isLoggingIn
  } = Object(external_react_redux_["useSelector"])(state => state.user);
  const dispatch = Object(external_react_redux_["useDispatch"])();
  const {
    0: inputs,
    1: setInputs
  } = Object(external_react_["useState"])({
    userId: '',
    password: ''
  });
  const {
    userId,
    password
  } = inputs;
  const onChangeInputs = Object(external_react_["useCallback"])(e => {
    setInputs(_objectSpread({}, inputs, {
      [e.target.name]: e.target.value
    }));
  }, [inputs]);
  const onSubmitForm = Object(external_react_["useCallback"])(e => {
    e.preventDefault();
    dispatch({
      type: user["g" /* LOG_IN_REQUEST */],
      data: {
        userId,
        password
      }
    });
  }, [userId, password]);
  return LoginForm_jsx(Form, {
    onSubmit: onSubmitForm
  }, LoginForm_jsx("div", null, LoginForm_jsx(Label, {
    htmlFor: "user-id"
  }, "\uC544\uC774\uB514"), LoginForm_jsx("br", null), LoginForm_jsx(Input, {
    htmlFor: "user-id",
    name: "userId",
    value: userId,
    onChange: onChangeInputs,
    required: true
  })), LoginForm_jsx("div", null, LoginForm_jsx(Label, {
    htmlFor: "user-password"
  }, "\uBE44\uBC00\uBC88\uD638"), LoginForm_jsx("br", null), LoginForm_jsx(Input, {
    htmlFor: "user-password",
    name: "password",
    type: "password",
    value: password,
    onChange: onChangeInputs,
    required: true
  })), LoginForm_jsx(LoginFormButtonDiv, null, LoginForm_jsx(link_default.a, {
    href: "/signup"
  }, LoginForm_jsx("a", null, LoginForm_jsx(Button["a" /* default */], {
    type: "button",
    color: "pink"
  }, "\uD68C\uC6D0\uAC00\uC785"))), LoginForm_jsx(Button["a" /* default */], {
    type: "submit"
  }, isLoggingIn ? LoginForm_jsx(LoadingImg, {
    src: "/static/icons/loading_blue.gif"
  }) : `로그인`)));
};

/* harmony default export */ var components_LoginForm = (LoginForm);
// EXTERNAL MODULE: external "moment"
var external_moment_ = __webpack_require__("wy2R");
var external_moment_default = /*#__PURE__*/__webpack_require__.n(external_moment_);

// CONCATENATED MODULE: ./components/LikingBook.js
var LikingBook_jsx = external_react_default.a.createElement;




const LikingList = external_styled_components_default.a.li.withConfig({
  displayName: "LikingBook__LikingList",
  componentId: "sc-1befqkz-0"
})(["display:block;width:100%;height:2rem;text-align:left;border-radius:4px;border-bottom:solid 2px #495057;&:nth-child(2n){background:#495057;}&:hover{background:#148cff;}& + &{margin-top:10px;}"]);
const Writer = external_styled_components_default.a.label.withConfig({
  displayName: "LikingBook__Writer",
  componentId: "sc-1befqkz-1"
})(["display:block;width:35%;line-height:2rem;float:left;cursor:pointer;margin-left:5px;"]);
const Bookname = external_styled_components_default.a.label.withConfig({
  displayName: "LikingBook__Bookname",
  componentId: "sc-1befqkz-2"
})(["display:block;width:calc(50% -5px);line-height:2rem;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;cursor:pointer;& > p{color:red;display:contents;}"]);

const LikedBook = ({
  book
}) => {
  return LikingBook_jsx(LikingList, null, LikingBook_jsx(link_default.a, {
    href: {
      pathname: 'librery',
      query: {
        id: book.User.userId
      }
    },
    as: `/librery/${book.User.userId}`
  }, LikingBook_jsx("a", null, LikingBook_jsx(Writer, null, book.User.nickname))), LikingBook_jsx(link_default.a, {
    href: {
      pathname: '/book',
      query: {
        bookid: book.id
      }
    },
    as: `/book/${book.id}`
  }, LikingBook_jsx("a", null, LikingBook_jsx(Bookname, null, external_moment_default.a.duration(external_moment_default()(book.recentDay, 'YYYY-MM-DD HH:mm').diff(external_moment_default()().format('YYYY-MM-DD HH:mm'))).asHours() > -24 ? LikingBook_jsx("p", null, "New") : null, book.name))));
};

// {moment
//   .duration(
//     moment('2020-03-17T02:26:58.000Z', 'YYYY-MM-DD HH:mm').diff(
//       moment().format('YYYY-MM-DD HH:mm'),
//     ),
//   )
//   .asHours()}
/* harmony default export */ var LikingBook = (LikedBook);
// CONCATENATED MODULE: ./components/UserProfile.js
var UserProfile_jsx = external_react_default.a.createElement;






const Profile = external_styled_components_default.a.div.withConfig({
  displayName: "UserProfile__Profile",
  componentId: "ny6ey5-0"
})(["width:90%;margin-top:10px;margin-left:10px;font-size:1rem;"]);
const TopProfile = external_styled_components_default.a.div.withConfig({
  displayName: "UserProfile__TopProfile",
  componentId: "ny6ey5-1"
})(["display:flex;align-items:center;border-bottom:solid 2px #495057;height:70px;"]);
const Nickname = external_styled_components_default.a.div.withConfig({
  displayName: "UserProfile__Nickname",
  componentId: "ny6ey5-2"
})(["flex:10;"]);
const MiddleProfile = external_styled_components_default.a.div.withConfig({
  displayName: "UserProfile__MiddleProfile",
  componentId: "ny6ey5-3"
})(["display:flex;align-items:center;justify-content:center;border-bottom:solid 2px #495057;height:100px;& > *{flex:1;}"]);
const Preference = external_styled_components_default.a.div.withConfig({
  displayName: "UserProfile__Preference",
  componentId: "ny6ey5-4"
})(["& label{text-align:center;}"]);
const UserProfile_Label = external_styled_components_default.a.label.withConfig({
  displayName: "UserProfile__Label",
  componentId: "ny6ey5-5"
})(["display:block;& + &{margin-top:10px;}"]);
const BottomProfile = external_styled_components_default.a.div.withConfig({
  displayName: "UserProfile__BottomProfile",
  componentId: "ny6ey5-6"
})(["width:100%;height:100%;min-height:20rem;max-height:calc(100vh - 300px);overflow:auto;& > *{margin-top:10px;}&::-webkit-scrollbar{width:10px;}::-webkit-scrollbar-track{box-shadow:inset 0 0 5px grey;border-radius:10px;}::-webkit-scrollbar-thumb{background:#148cff;border-radius:10px;}::-webkit-scrollbar-thumb:hover{background:#1e96ff;}::-webkit-scrollbar-thumb:active{background:#0a82ff;}"]);
const LikeBookList = external_styled_components_default.a.ul.withConfig({
  displayName: "UserProfile__LikeBookList",
  componentId: "ny6ey5-7"
})(["color:white;"]);
const UserProfile_LoadingImg = external_styled_components_default.a.img.withConfig({
  displayName: "UserProfile__LoadingImg",
  componentId: "ny6ey5-8"
})(["margin-top:4px;height:1.5rem;"]);

const UserProfile = () => {
  const {
    isLoggingOut
  } = Object(external_react_redux_["useSelector"])(state => state.user);
  const {
    LikingBook: likingBookList,
    LikingUser: likingWriter,
    nickname
  } = Object(external_react_redux_["useSelector"])(state => state.user.me); // const likingBookList = useSelector(state => state.user.me.LikingBook);
  // const likingWriter = useSelector(state => state.user.me.LikingUser);

  const dispatch = Object(external_react_redux_["useDispatch"])();
  const onLogout = Object(external_react_["useCallback"])(e => {
    dispatch({
      type: user["j" /* LOG_OUT_REQUEST */]
    });
  }, []);
  return UserProfile_jsx(Profile, null, UserProfile_jsx(TopProfile, null, UserProfile_jsx(Nickname, null, nickname, " \uB2D8"), UserProfile_jsx(Button["a" /* default */], {
    onClick: onLogout
  }, isLoggingOut ? UserProfile_jsx(UserProfile_LoadingImg, {
    src: "/static/icons/loading_blue.gif"
  }) : `로그아웃`)), UserProfile_jsx(MiddleProfile, null, UserProfile_jsx(Preference, {
    key: "LikedBook"
  }, UserProfile_jsx(UserProfile_Label, null, "\uC120\uD638\uC791\uD488"), UserProfile_jsx(UserProfile_Label, null, likingBookList.length || 0)), UserProfile_jsx(Preference, {
    key: "LikedWriter"
  }, UserProfile_jsx(UserProfile_Label, null, "\uC120\uD638\uC791\uAC00"), UserProfile_jsx(UserProfile_Label, null, likingWriter.length))), UserProfile_jsx(BottomProfile, null, UserProfile_jsx(UserProfile_Label, null, "\uC120\uD638\uC791 \uBAA9\uB85D"), UserProfile_jsx(LikeBookList, null, likingBookList ? likingBookList.map((v, i) => {
    return UserProfile_jsx(LikingBook, {
      key: i,
      book: v
    });
  }) : UserProfile_jsx(UserProfile_Label, null, "\uC120\uD638\uC791 \uBAA9\uB85D\uC774 \uC874\uC7AC\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4."))));
};

/* harmony default export */ var components_UserProfile = (UserProfile);
// CONCATENATED MODULE: ./components/Layout.js
var Layout_jsx = external_react_default.a.createElement;






const Screen = external_styled_components_default.a.div.withConfig({
  displayName: "Layout__Screen",
  componentId: "sc-17g3k6v-0"
})(["height:100%;"]);
const Contents = external_styled_components_default.a.div.withConfig({
  displayName: "Layout__Contents",
  componentId: "sc-17g3k6v-1"
})(["margin-top:50px;"]);
const LeftContent = external_styled_components_default.a.div.withConfig({
  displayName: "Layout__LeftContent",
  componentId: "sc-17g3k6v-2"
})(["position:fixed;width:23.333336%;min-width:300px;max-width:400px;height:100%;float:left;color:white;background-color:rgba(20,20,20,0.8);"]);
const RightContent = external_styled_components_default.a.div.withConfig({
  displayName: "Layout__RightContent",
  componentId: "sc-17g3k6v-3"
})(["width:75.666663%;overflow:auto;min-width:calc(100% - 410px);max-width:calc(100% - 310px);float:right;margin-top:0.5rem;&::-webkit-scrollbar{display:none;}"]);

const Layout = ({
  children
}) => {
  const {
    me
  } = Object(external_react_redux_["useSelector"])(state => state.user);
  return Layout_jsx(Screen, null, Layout_jsx(components_Header, null), Layout_jsx(Contents, null, Layout_jsx(LeftContent, null, me && me.userId ? Layout_jsx(components_UserProfile, null) : Layout_jsx(components_LoginForm, null)), Layout_jsx(RightContent, null, children)));
};

/* harmony default export */ var components_Layout = (Layout);
// EXTERNAL MODULE: ./reducers/board.js
var board = __webpack_require__("kWrt");

// EXTERNAL MODULE: ./reducers/episode.js
var episode = __webpack_require__("I409");

// CONCATENATED MODULE: ./reducers/index.js





const rootReducer = Object(external_redux_["combineReducers"])({
  user: user["s" /* default */],
  book: reducers_book["G" /* default */],
  board: board["z" /* default */],
  episode: episode["B" /* default */]
});
/* harmony default export */ var reducers = (rootReducer);
// EXTERNAL MODULE: external "redux-saga/effects"
var effects_ = __webpack_require__("RmXt");

// CONCATENATED MODULE: ./sagas/user.js


 // 로그인

function* watchLogin() {
  yield Object(effects_["takeLatest"])(user["g" /* LOG_IN_REQUEST */], function* login(action) {
    try {
      const result = yield Object(effects_["call"])(loginData => {
        return external_axios_default.a.post('/user/login', loginData, {
          withCredentials: true
        });
      }, action.data);
      yield Object(effects_["put"])({
        type: user["h" /* LOG_IN_SUCCESS */],
        data: result.data
      });
    } catch (e) {
      console.log(e);
      yield Object(effects_["put"])({
        type: user["f" /* LOG_IN_FAILURE */],
        error: e
      });
      alert('로그인에 실패했습니다.');
    }
  });
} // 로그아웃


function* watchLogout() {
  yield Object(effects_["takeLatest"])(user["j" /* LOG_OUT_REQUEST */], function* logout() {
    try {
      yield Object(effects_["call"])(() => {
        return external_axios_default.a.post('/user/logout', {}, {
          withCredentials: true
        });
      });
      yield Object(effects_["put"])({
        type: user["k" /* LOG_OUT_SUCCESS */]
      });
    } catch (e) {
      console.log(e);
      yield Object(effects_["put"])({
        type: user["i" /* LOG_OUT_FAILURE */],
        error: e
      });
    }
  });
} // 회원가입


function* watchSignUp() {
  yield Object(effects_["takeLatest"])(user["n" /* SIGN_UP_REQUEST */], function* signUp(action) {
    try {
      const result = yield Object(effects_["call"])(signUpData => {
        return external_axios_default.a.post('/user/signup', signUpData);
      }, action.data);
      yield Object(effects_["put"])({
        type: user["o" /* SIGN_UP_SUCCESS */],
        data: result
      });
    } catch (e) {
      console.log(e);
      yield Object(effects_["put"])({
        type: user["m" /* SIGN_UP_FAILURE */],
        error: e
      });
    }
  });
} // 유저 정보 가져오기


function loadUserAPI(userId) {
  return external_axios_default.a.get(userId ? `/user/${userId}` : `/user`, {
    withCredentials: true
  });
}

function* loadUser(action) {
  try {
    const result = yield Object(effects_["call"])(loadUserAPI, action.data);
    yield Object(effects_["put"])({
      type: user["e" /* LOAD_USER_SUCCESS */],
      data: result.data,
      me: !action.data
    });
  } catch (e) {
    console.log(e);
    yield Object(effects_["put"])({
      type: user["c" /* LOAD_USER_FAILURE */],
      error: e
    });
  }
}

function* watchLoadUser() {
  yield Object(effects_["takeEvery"])(user["d" /* LOAD_USER_REQUEST */], loadUser);
}

function* watchUpdateUser() {
  yield Object(effects_["takeLatest"])(user["q" /* UPDATE_USER_REQUEST */], function* (action) {
    try {
      const result = yield Object(effects_["call"])(updateData => {
        return external_axios_default.a.patch('/user', updateData, {
          withCredentials: true
        });
      }, action.data);
      yield Object(effects_["put"])({
        type: user["r" /* UPDATE_USER_SUCCESS */],
        data: result.data
      });
    } catch (e) {
      console.log(e);
      yield Object(effects_["put"])({
        type: user["p" /* UPDATE_USER_FAILURE */],
        error: e
      });
    }
  });
}

function* userSaga() {
  yield Object(effects_["all"])([Object(effects_["fork"])(watchSignUp), Object(effects_["fork"])(watchLogin), Object(effects_["fork"])(watchLogout), Object(effects_["fork"])(watchLoadUser), Object(effects_["fork"])(watchUpdateUser)]);
}
// CONCATENATED MODULE: ./sagas/book.js
function book_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function book_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { book_ownKeys(Object(source), true).forEach(function (key) { book_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { book_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function book_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




 // 전체 연재글 가져오기

function* watchLoadBooks() {
  yield Object(effects_["throttle"])(1000, reducers_book["n" /* LOAD_BOOKS_REQUEST */], function* loadBooks(action) {
    try {
      const result = yield Object(effects_["call"])((keyword = '') => {
        return external_axios_default.a.get(`/books?keyword=${keyword}`);
      }, action.keyword);
      yield Object(effects_["put"])({
        type: reducers_book["o" /* LOAD_BOOKS_SUCCESS */],
        data: result.data
      });
    } catch (e) {
      console.log(e);
      yield Object(effects_["put"])({
        type: reducers_book["m" /* LOAD_BOOKS_FAILURE */],
        error: e
      });
    }
  });
} // 게시글 하나 조회


function* watchLoadBook() {
  yield Object(effects_["takeLatest"])(reducers_book["q" /* LOAD_BOOK_REQUEST */], function* loadBook(action) {
    try {
      const result = yield Object(effects_["call"])(bookId => {
        return external_axios_default.a.get(`/book/${bookId}`);
      }, action.id);
      yield Object(effects_["put"])({
        type: reducers_book["r" /* LOAD_BOOK_SUCCESS */],
        data: result.data
      });
    } catch (e) {
      console.log(e);
      Object(effects_["put"])({
        type: reducers_book["p" /* LOAD_BOOK_FAILURE */],
        error: e
      });
    }
  });
} // 선호작 추가


function* watchAddLikebook() {
  yield Object(effects_["takeLatest"])(reducers_book["e" /* ADD_LIKEBOOK_REQUEST */], function* addLikebook(action) {
    try {
      const result = yield Object(effects_["call"])(bookId => {
        return external_axios_default.a.post(`/book/${bookId}/like`, {}, {
          withCredentials: true
        });
      }, action.bookId);
      yield Object(effects_["put"])({
        type: reducers_book["f" /* ADD_LIKEBOOK_SUCCESS */],
        data: result.data
      });
      yield Object(effects_["put"])({
        type: user["a" /* ADD_LIKEBOOKLIST */],
        data: book_objectSpread({
          id: result.data
        }, action.data)
      });
    } catch (e) {
      console.log(e);
      yield Object(effects_["put"])({
        type: reducers_book["d" /* ADD_LIKEBOOK_FAILURE */],
        error: e
      });
    }
  });
} // 선호작 해제


function* watchRemoveLikebook() {
  yield Object(effects_["takeLatest"])(reducers_book["x" /* REMOVE_LIKEBOOK_REQUEST */], function* removeLikebook(action) {
    try {
      const result = yield Object(effects_["call"])(bookId => {
        return external_axios_default.a.delete(`/book/${bookId}/unlike`, {
          withCredentials: true
        });
      }, action.bookId);
      yield Object(effects_["put"])({
        type: reducers_book["y" /* REMOVE_LIKEBOOK_SUCCESS */],
        data: result.data
      });
      yield Object(effects_["put"])({
        type: user["l" /* REMOVE_LIKEBOOKLIST */],
        data: result.data
      });
    } catch (e) {
      console.log(e);
      Object(effects_["put"])({
        type: reducers_book["w" /* REMOVE_LIKEBOOK_FAILURE */],
        error: e
      });
    }
  });
} // 썸네일 이미지 업로드


function* watchUploadImage() {
  yield Object(effects_["takeLatest"])(reducers_book["E" /* UPLOAD_IMAGE_REQUEST */], function* uploadImage(action) {
    try {
      const result = yield Object(effects_["call"])(formData => {
        return external_axios_default.a.post('/book/thumbnail', formData, {
          withCredentials: true
        });
      }, action.data);
      yield Object(effects_["put"])({
        type: reducers_book["F" /* UPLOAD_IMAGE_SUCCESS */],
        data: result.data
      });
    } catch (e) {
      console.log(e);
      yield Object(effects_["put"])({
        type: reducers_book["D" /* UPLOAD_IMAGE_FAILURE */],
        error: e
      });
    }
  });
} // 작품 만들기


function* watchAddBook() {
  yield Object(effects_["takeLatest"])(reducers_book["b" /* ADD_BOOK_REQUEST */], function* addBook(action) {
    try {
      const result = yield Object(effects_["call"])(bookData => {
        return external_axios_default.a.post('/book', bookData, {
          withCredentials: true
        });
      }, action.data);
      yield Object(effects_["put"])({
        type: reducers_book["c" /* ADD_BOOK_SUCCESS */],
        data: result.data
      });
    } catch (e) {
      console.log(e);
      yield Object(effects_["put"])({
        type: reducers_book["a" /* ADD_BOOK_FAILURE */],
        error: e
      });
    }
  });
} // 장르 조회


function* watchLoadGenre() {
  yield Object(effects_["takeLatest"])(reducers_book["t" /* LOAD_GENRE_REQUEST */], function* loadGenre() {
    try {
      const result = yield Object(effects_["call"])(() => {
        return external_axios_default.a.get('/genres');
      });
      yield Object(effects_["put"])({
        type: reducers_book["u" /* LOAD_GENRE_SUCCESS */],
        data: result.data
      });
    } catch (e) {
      console.log(e);
      yield Object(effects_["put"])({
        type: reducers_book["s" /* LOAD_GENRE_FAILURE */],
        error: e
      });
    }
  });
} // 작품 수정


function* watchUpdateBook() {
  yield Object(effects_["takeLatest"])(reducers_book["B" /* UPDATE_BOOK_REQUEST */], function* updateBook(action) {
    try {
      const result = yield Object(effects_["call"])(bookData => {
        return external_axios_default.a.patch(`/book`, bookData, {
          withCredentials: true
        });
      }, action.data);
      yield Object(effects_["put"])({
        type: reducers_book["C" /* UPDATE_BOOK_SUCCESS */],
        data: result.data
      });
    } catch (e) {
      console.log(e);
      yield Object(effects_["put"])({
        type: reducers_book["A" /* UPDATE_BOOK_FAILURE */],
        error: e
      });
    }
  });
}

function* watchDeleteBook() {
  yield Object(effects_["takeLatest"])(reducers_book["k" /* DELETE_BOOK_REQUEST */], function* deleteBook(action) {
    try {
      const result = yield Object(effects_["call"])(bookId => {
        return external_axios_default.a.delete(`/book/${bookId}`, {
          withCredentials: true
        });
      }, action.id);
      yield Object(effects_["put"])({
        type: reducers_book["l" /* DELETE_BOOK_SUCCESS */],
        data: result.data
      });
      yield Object(effects_["put"])({
        type: user["l" /* REMOVE_LIKEBOOKLIST */],
        data: action.id
      });
    } catch (e) {
      console.log(e);
      yield Object(effects_["put"])({
        type: reducers_book["j" /* DELETE_BOOK_FAILURE */],
        error: e
      });
    }
  });
}

function* bookSaga() {
  yield Object(effects_["all"])([Object(effects_["fork"])(watchLoadBooks), Object(effects_["fork"])(watchLoadBook), Object(effects_["fork"])(watchAddLikebook), Object(effects_["fork"])(watchRemoveLikebook), Object(effects_["fork"])(watchUploadImage), Object(effects_["fork"])(watchAddBook), Object(effects_["fork"])(watchLoadGenre), Object(effects_["fork"])(watchUpdateBook), Object(effects_["fork"])(watchDeleteBook)]);
}
// CONCATENATED MODULE: ./sagas/board.js


 // 전체 게시글 가져오기

function* watchLoadBords() {
  yield Object(effects_["throttle"])(1000, board["o" /* LOAD_BOARDS_REQUEST */], function* loadBoards(action) {
    try {
      const result = yield Object(effects_["call"])((lastId = 0, keyword = '', limit = 30) => {
        return external_axios_default.a.get(`/boards?lastId=${lastId}&keyword=${keyword}&limit=${limit}`);
      }, action.lastId, action.keyword);
      yield Object(effects_["put"])({
        type: board["p" /* LOAD_BOARDS_SUCCESS */],
        data: result.data
      });
    } catch (e) {
      console.log(e);
      yield Object(effects_["put"])({
        type: board["n" /* LOAD_BOARDS_FAILURE */],
        error: e
      });
    }
  });
} // 게시글 가져오기


function* watchLoadBoard() {
  yield Object(effects_["takeLatest"])(board["r" /* LOAD_BOARD_REQUEST */], function* loadBoard(action) {
    try {
      const result = yield Object(effects_["call"])(boardId => {
        return external_axios_default.a.get(`/board/${boardId}`);
      }, action.boardId);
      yield Object(effects_["put"])({
        type: board["s" /* LOAD_BOARD_SUCCESS */],
        data: result.data
      });
    } catch (e) {
      console.log(e);
      Object(effects_["put"])({
        type: board["q" /* LOAD_BOARD_FAILURE */],
        error: e
      });
    }
  });
} // 게시글 추가하기


function* watchAddBoard() {
  yield Object(effects_["takeLatest"])(board["b" /* ADD_BOARD_REQUEST */], function* addBoard(action) {
    try {
      const result = yield Object(effects_["call"])(boardData => {
        return external_axios_default.a.post(`/board`, boardData, {
          withCredentials: true
        });
      }, action.data);
      yield Object(effects_["put"])({
        type: board["c" /* ADD_BOARD_SUCCESS */],
        data: result.data
      });
    } catch (e) {
      console.log(e);
      yield Object(effects_["put"])({
        type: board["a" /* ADD_BOARD_FAILURE */],
        error: e
      });
    }
  });
} // 게시글 수정


function* watchUpdateBoard() {
  yield Object(effects_["takeLatest"])(board["u" /* UPDATE_BOARD_REQUEST */], function* updateBoard(action) {
    try {
      const result = yield Object(effects_["call"])(updateBoardData => {
        return external_axios_default.a.patch(`/board`, updateBoardData, {
          withCredentials: true
        });
      }, action.data);
      yield Object(effects_["put"])({
        type: board["v" /* UPDATE_BOARD_SUCCESS */],
        data: result.data
      });
    } catch (e) {
      console.log(e);
      yield Object(effects_["put"])({
        type: board["t" /* UPDATE_BOARD_FAILURE */],
        error: e
      });
    }
  });
} // 게시글 삭제


function* watchDeleteBoard() {
  yield Object(effects_["takeLatest"])(board["i" /* DELETE_BOARD_REQUEST */], function* deleteBoard(action) {
    try {
      const result = yield Object(effects_["call"])(boardId => {
        return external_axios_default.a.delete(`/board/${boardId}`, {
          withCredentials: true
        });
      }, action.boardId);
      yield Object(effects_["put"])({
        type: board["j" /* DELETE_BOARD_SUCCESS */],
        data: result.data
      });
    } catch (e) {
      console.log(e);
      yield Object(effects_["put"])({
        type: board["h" /* DELETE_BOARD_FAILURE */],
        error: e
      });
    }
  });
} // 댓글 추가


function* watchAddComment() {
  yield Object(effects_["takeLatest"])(board["e" /* ADD_COMMENT_REQUEST */], function* addComment(action) {
    try {
      const result = yield Object(effects_["call"])(boardData => {
        return external_axios_default.a.post(`/board/comment`, boardData, {
          withCredentials: true
        });
      }, action.data);
      yield Object(effects_["put"])({
        type: board["f" /* ADD_COMMENT_SUCCESS */],
        data: result.data
      });
    } catch (e) {
      console.log(e);
      yield Object(effects_["put"])({
        type: board["d" /* ADD_COMMENT_FAILURE */],
        error: e
      });
    }
  });
} // 댓글 수정


function* watchUpdateComment() {
  yield Object(effects_["takeLatest"])(board["x" /* UPDATE_COMMENT_REQUEST */], function* updateComment(action) {
    try {
      const result = yield Object(effects_["call"])(updateCommentData => {
        return external_axios_default.a.patch(`/board/comment`, updateCommentData, {
          withCredentials: true
        });
      }, action.data);
      yield Object(effects_["put"])({
        type: board["y" /* UPDATE_COMMENT_SUCCESS */],
        data: result.data
      });
    } catch (e) {
      console.log(e);
      yield Object(effects_["put"])({
        type: board["w" /* UPDATE_COMMENT_FAILURE */],
        error: e
      });
    }
  });
} // 댓글 삭제


function* watchDeleteComment() {
  yield Object(effects_["takeLatest"])(board["l" /* DELETE_COMMENT_REQUEST */], function* deleteBoard(action) {
    try {
      const result = yield Object(effects_["call"])(commentId => {
        return external_axios_default.a.delete(`/board/comment/${commentId}`, {
          withCredentials: true
        });
      }, action.commentId);
      yield Object(effects_["put"])({
        type: board["m" /* DELETE_COMMENT_SUCCESS */],
        data: result.data
      });
    } catch (e) {
      console.log(e);
      yield Object(effects_["put"])({
        type: board["k" /* DELETE_COMMENT_FAILURE */],
        error: e
      });
    }
  });
}

function* board_bookSaga() {
  yield Object(effects_["all"])([Object(effects_["fork"])(watchLoadBords), Object(effects_["fork"])(watchLoadBoard), Object(effects_["fork"])(watchAddBoard), Object(effects_["fork"])(watchUpdateBoard), Object(effects_["fork"])(watchDeleteBoard), Object(effects_["fork"])(watchAddComment), Object(effects_["fork"])(watchUpdateComment), Object(effects_["fork"])(watchDeleteComment)]);
}
// CONCATENATED MODULE: ./sagas/episode.js


 // 글 조회

function* watchLoadEpisode() {
  yield Object(effects_["takeLatest"])(episode["t" /* LOAD_EPISODE_REQUEST */], function* (action) {
    try {
      const result = yield Object(effects_["call"])(episodeId => {
        return external_axios_default.a.get(`/episode/${episodeId}`);
      }, action.id);
      yield Object(effects_["put"])({
        type: episode["u" /* LOAD_EPISODE_SUCCESS */],
        data: result.data
      });
    } catch (e) {
      console.log(e);
      yield Object(effects_["put"])({
        type: episode["s" /* LOAD_EPISODE_FAILURE */],
        error: e
      });
    }
  });
} // 글 작성


function* watchAddEpisode() {
  yield Object(effects_["takeLatest"])(episode["e" /* ADD_EPISODE_REQUEST */], function* (action) {
    try {
      const result = yield Object(effects_["call"])(episodeData => {
        return external_axios_default.a.post(`/episode`, episodeData, {
          withCredentials: true
        });
      }, action.data);
      yield Object(effects_["put"])({
        type: episode["f" /* ADD_EPISODE_SUCCESS */],
        data: result.data
      });
    } catch (e) {
      console.log(e);
      yield Object(effects_["put"])({
        type: episode["d" /* ADD_EPISODE_FAILURE */],
        error: e
      });
    }
  });
} // 추천


function* watchAddRecommend() {
  yield Object(effects_["takeLatest"])(episode["h" /* ADD_RECOMMEND_REQUEST */], function* (action) {
    try {
      const result = yield Object(effects_["call"])(episodeId => {
        return external_axios_default.a.post(`/episode/${episodeId}`, {}, {
          withCredentials: true
        });
      }, action.id);
      yield Object(effects_["put"])({
        type: episode["i" /* ADD_RECOMMEND_SUCCESS */],
        data: result.data
      });
    } catch (e) {
      console.log(e);
      yield Object(effects_["put"])({
        type: episode["g" /* ADD_RECOMMEND_FAILURE */],
        error: e
      });
    }
  });
} // 수정


function* watchUpdateEpisode() {
  yield Object(effects_["takeLatest"])(episode["z" /* UPDATE_EPISODE_REQUEST */], function* (action) {
    try {
      yield Object(effects_["call"])(updateData => {
        return external_axios_default.a.patch(`/episode/${updateData.id}`, updateData, {
          withCredentials: true
        });
      }, action.data);
      yield Object(effects_["put"])({
        type: episode["A" /* UPDATE_EPISODE_SUCCESS */]
      });
    } catch (e) {
      console.log(e);
      yield Object(effects_["put"])({
        type: episode["y" /* UPDATE_EPISODE_FAILURE */],
        error: e
      });
    }
  });
} // 삭제


function* watchDeleteEpisode() {
  yield Object(effects_["takeLatest"])(episode["q" /* DELETE_EPISODE_REQUEST */], function* (action) {
    try {
      yield Object(effects_["call"])(episodeId => {
        return external_axios_default.a.delete(`/episode/${episodeId}`, {
          withCredentials: true
        });
      }, action.id);
      yield Object(effects_["put"])({
        type: episode["r" /* DELETE_EPISODE_SUCCESS */]
      });
    } catch (e) {
      console.log(e);
      yield Object(effects_["put"])({
        type: episode["p" /* DELETE_EPISODE_FAILURE */],
        error: e
      });
    }
  });
} // 댓글 작성


function* episode_watchAddComment() {
  yield Object(effects_["takeLatest"])(episode["b" /* ADD_EPISODE_COMMENT_REQUEST */], function* (action) {
    try {
      const result = yield Object(effects_["call"])(commentData => {
        return external_axios_default.a.post('/episode/comment', commentData, {
          withCredentials: true
        });
      }, action.data);
      yield Object(effects_["put"])({
        type: episode["c" /* ADD_EPISODE_COMMENT_SUCCESS */],
        data: result.data
      });
    } catch (e) {
      console.log(e);
      yield Object(effects_["put"])({
        type: episode["a" /* ADD_EPISODE_COMMENT_FAILURE */],
        error: e
      });
    }
  });
} // 댓글 수정


function* episode_watchUpdateComment() {
  yield Object(effects_["takeLatest"])(episode["w" /* UPDATE_EPISODE_COMMENT_REQUEST */], function* updateComment(action) {
    try {
      const result = yield Object(effects_["call"])(updateCommentData => {
        return external_axios_default.a.patch('/episode/comment', updateCommentData, {
          withCredentials: true
        });
      }, action.data);
      yield Object(effects_["put"])({
        type: episode["x" /* UPDATE_EPISODE_COMMENT_SUCCESS */],
        data: result.data
      });
    } catch (e) {
      console.log(e);
      yield Object(effects_["put"])({
        type: episode["v" /* UPDATE_EPISODE_COMMENT_FAILURE */],
        error: e
      });
    }
  });
} // 댓글 삭제


function* episode_watchDeleteComment() {
  yield Object(effects_["takeLatest"])(episode["n" /* DELETE_EPISODE_COMMENT_REQUEST */], function* deleteBoard(action) {
    try {
      const result = yield Object(effects_["call"])(commentId => {
        return external_axios_default.a.delete(`/episode/comment/${commentId}`, {
          withCredentials: true
        });
      }, action.commentId);
      yield Object(effects_["put"])({
        type: episode["o" /* DELETE_EPISODE_COMMENT_SUCCESS */],
        data: result.data
      });
    } catch (e) {
      console.log(e);
      yield Object(effects_["put"])({
        type: episode["m" /* DELETE_EPISODE_COMMENT_FAILURE */],
        error: e
      });
    }
  });
}

function* episodeSaga() {
  yield Object(effects_["all"])([Object(effects_["fork"])(watchLoadEpisode), Object(effects_["fork"])(watchAddEpisode), Object(effects_["fork"])(watchAddRecommend), Object(effects_["fork"])(watchUpdateEpisode), Object(effects_["fork"])(watchDeleteEpisode), Object(effects_["fork"])(episode_watchAddComment), Object(effects_["fork"])(episode_watchUpdateComment), Object(effects_["fork"])(episode_watchDeleteComment)]);
}
// EXTERNAL MODULE: ./config/config.js
var config = __webpack_require__("OcYQ");

// CONCATENATED MODULE: ./sagas/index.js







external_axios_default.a.defaults.baseURL = `${config["a" /* backUrl */]}/api`;
function* rootSaga() {
  yield Object(effects_["all"])([Object(effects_["call"])(userSaga), Object(effects_["call"])(bookSaga), Object(effects_["call"])(board_bookSaga), Object(effects_["call"])(episodeSaga)]);
}
// CONCATENATED MODULE: ./pages/_app.js
var _app_jsx = external_react_default.a.createElement;
















const Backpot = ({
  Component,
  store,
  pageProps
}) => {
  return _app_jsx(app["Container"], null, _app_jsx(external_react_redux_["Provider"], {
    store: store
  }, _app_jsx(external_react_helmet_default.a, {
    title: "BackPot",
    htmlAttributes: {
      lang: 'ko'
    },
    meta: [{
      charSet: 'UTF-8'
    }, {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1.0,minumum-scale=1.0, maximum-scale=1.0, user-scaleable=yes, viewport-fit=cover'
    }, {
      'http-equiv': 'X-UA-Compatible',
      content: 'IE=edge'
    }, {
      name: 'description',
      content: '웹소설 플랫폼 Backpot'
    }, {
      name: 'og:title',
      content: 'Backpot'
    }, {
      name: 'og:description',
      content: '웹소설 플랫폼 Backpot'
    }, {
      property: 'og:type',
      content: 'website'
    }, {
      property: 'og:image',
      content: `${config["b" /* frontUrl */]}/favicon`
    }],
    link: [{
      rel: 'shortcut icon',
      href: '/favicon'
    }]
  }), _app_jsx(components_Layout, null, _app_jsx(Component, pageProps)), _app_jsx(GlobalStyles, null)));
};

Backpot.getInitialProps = async context => {
  const {
    ctx,
    Component
  } = context;
  let pageProps = {};
  const state = ctx.store.getState();
  const cookie = ctx.isServer ? ctx.req.headers.cookie : ''; // axios.defaults.headers.Cookie = '';

  if (ctx.isServer && cookie) {
    external_axios_default.a.defaults.headers.Cookie = cookie;
  }

  if (!state.user.me) {
    ctx.store.dispatch({
      type: user["d" /* LOAD_USER_REQUEST */]
    });
  }

  if (Component.getInitialProps) {
    pageProps = (await Component.getInitialProps(ctx)) || {};
  }

  return {
    pageProps
  };
};

const configureStore = (initialState, options) => {
  const sagaMiddleware = external_redux_saga_default()();
  const middlewares = [sagaMiddleware, store => next => action => {
    // saga Loging
    console.log(action);
    next(action);
  }];
  const enhancer = true ? Object(external_redux_["compose"])(Object(external_redux_["applyMiddleware"])(...middlewares)) : undefined;
  const store = Object(external_redux_["createStore"])(reducers, initialState, enhancer);
  store.sagaTask = sagaMiddleware.run(rootSaga);
  return store;
};

/* harmony default export */ var _app = __webpack_exports__["default"] = (external_next_redux_wrapper_default()(configureStore)(external_next_redux_saga_default()(Backpot)));

/***/ }),

/***/ "1fKG":
/***/ (function(module, exports) {

module.exports = require("redux-saga");

/***/ }),

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "5Uuq":
/***/ (function(module, exports, __webpack_require__) {

var _Object$getOwnPropertyDescriptor = __webpack_require__("Jo+v");

var _Object$defineProperty = __webpack_require__("hfKm");

var _typeof = __webpack_require__("iZP3");

var _WeakMap = __webpack_require__("G4HQ");

function _getRequireWildcardCache() {
  if (typeof _WeakMap !== "function") return null;
  var cache = new _WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = _Object$defineProperty && _Object$getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? _Object$getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        _Object$defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "8Bbg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("B5Ud")


/***/ }),

/***/ "B5Ud":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("KI45");

exports.__esModule = true;
exports.Container = Container;
exports.createUrl = createUrl;
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _utils = __webpack_require__("g/15");

exports.AppInitialProps = _utils.AppInitialProps;
/**
* `App` component is used for initialize of pages. It allows for overwriting and full control of the `page` initialization.
* This allows for keeping state between navigation, custom error handling, injecting additional data.
*/

async function appGetInitialProps(_ref) {
  var {
    Component,
    ctx
  } = _ref;
  var pageProps = await (0, _utils.loadGetInitialProps)(Component, ctx);
  return {
    pageProps
  };
}

class App extends _react.default.Component {
  // Kept here for backwards compatibility.
  // When someone ended App they could call `super.componentDidCatch`.
  // @deprecated This method is no longer needed. Errors are caught at the top level
  componentDidCatch(error, _errorInfo) {
    throw error;
  }

  render() {
    var {
      router,
      Component,
      pageProps
    } = this.props;
    var url = createUrl(router);
    return _react.default.createElement(Component, Object.assign({}, pageProps, {
      url: url
    }));
  }

}

exports.default = App;
App.origGetInitialProps = appGetInitialProps;
App.getInitialProps = appGetInitialProps;
var warnContainer;
var warnUrl;

if (false) {} // @deprecated noop for now until removal


function Container(p) {
  if (false) {}
  return p.children;
}

function createUrl(router) {
  // This is to make sure we don't references the router object at call time
  var {
    pathname,
    asPath,
    query
  } = router;
  return {
    get query() {
      if (false) {}
      return query;
    },

    get pathname() {
      if (false) {}
      return pathname;
    },

    get asPath() {
      if (false) {}
      return asPath;
    },

    back: () => {
      if (false) {}
      router.back();
    },
    push: (url, as) => {
      if (false) {}
      return router.push(url, as);
    },
    pushTo: (href, as) => {
      if (false) {}
      var pushRoute = as ? href : '';
      var pushUrl = as || href;
      return router.push(pushRoute, pushUrl);
    },
    replace: (url, as) => {
      if (false) {}
      return router.replace(url, as);
    },
    replaceTo: (href, as) => {
      if (false) {}
      var replaceRoute = as ? href : '';
      var replaceUrl = as || href;
      return router.replace(replaceRoute, replaceUrl);
    }
  };
}

/***/ }),

/***/ "Dtiu":
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),

/***/ "G4HQ":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("lhFH");

/***/ }),

/***/ "I409":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export initalState */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return LOAD_EPISODE_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "u", function() { return LOAD_EPISODE_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return LOAD_EPISODE_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return ADD_EPISODE_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return ADD_EPISODE_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return ADD_EPISODE_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return CHANGE_ADDEDEPISODE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return ADD_RECOMMEND_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return ADD_RECOMMEND_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return ADD_RECOMMEND_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "z", function() { return UPDATE_EPISODE_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "A", function() { return UPDATE_EPISODE_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "y", function() { return UPDATE_EPISODE_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return CHANGE_UPDATEDEPISODE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return DELETE_EPISODE_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return DELETE_EPISODE_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return DELETE_EPISODE_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return CHANGE_DELETEDEPISODE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ADD_EPISODE_COMMENT_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return ADD_EPISODE_COMMENT_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ADD_EPISODE_COMMENT_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "w", function() { return UPDATE_EPISODE_COMMENT_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "x", function() { return UPDATE_EPISODE_COMMENT_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "v", function() { return UPDATE_EPISODE_COMMENT_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return DELETE_EPISODE_COMMENT_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return DELETE_EPISODE_COMMENT_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return DELETE_EPISODE_COMMENT_FAILURE; });
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("T5ka");
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(immer__WEBPACK_IMPORTED_MODULE_0__);

const initalState = {
  episode: null,
  isAddingEpisode: false,
  isAddedEpisode: false,
  isRecommending: false,
  isUpdatingEpisode: false,
  isUpdatedEpisode: false,
  isDeletingEpisode: false,
  isDeletedEpisode: false,
  isAddingComment: false,
  commentAdded: false,
  isUpdatingComment: false
};
const LOAD_EPISODE_REQUEST = `LOAD_EPISODE_REQUEST`;
const LOAD_EPISODE_SUCCESS = `LOAD_EPISODE_SUCCESS`;
const LOAD_EPISODE_FAILURE = `LOAD_EPISODE_FAILURE`;
const ADD_EPISODE_REQUEST = `ADD_EPISODE_REQUEST`;
const ADD_EPISODE_SUCCESS = `ADD_EPISODE_SUCCESS`;
const ADD_EPISODE_FAILURE = `ADD_EPISODE_FAILURE`;
const CHANGE_ADDEDEPISODE = `CHANGE_ADDEDEPISODE`;
const ADD_RECOMMEND_REQUEST = `ADD_RECOMMEND_REQUEST`;
const ADD_RECOMMEND_SUCCESS = `ADD_RECOMMEND_SUCCESS`;
const ADD_RECOMMEND_FAILURE = `ADD_RECOMMEND_FAILURE`;
const UPDATE_EPISODE_REQUEST = `UPDATE_EPISODE_REQUEST`;
const UPDATE_EPISODE_SUCCESS = `UPDATE_EPISODE_SUCCESS`;
const UPDATE_EPISODE_FAILURE = `UPDATE_EPISODE_FAILURE`;
const CHANGE_UPDATEDEPISODE = `CHANGE_UPDATEDEPISODE`;
const DELETE_EPISODE_REQUEST = `DELETE_EPISODE_REQUEST`;
const DELETE_EPISODE_SUCCESS = `DELETE_EPISODE_SUCCESS`;
const DELETE_EPISODE_FAILURE = `DELETE_EPISODE_FAILURE`;
const CHANGE_DELETEDEPISODE = `CHANGE_DELETEDEPISODE`;
const ADD_EPISODE_COMMENT_REQUEST = `ADD_EPISODE_COMMENT_REQUEST`;
const ADD_EPISODE_COMMENT_SUCCESS = `ADD_EPISODE_COMMENT_SUCCESS`;
const ADD_EPISODE_COMMENT_FAILURE = `ADD_EPISODE_COMMENT_FAILURE`;
const UPDATE_EPISODE_COMMENT_REQUEST = `UPDATE_EPISODE_COMMENT_REQUEST`;
const UPDATE_EPISODE_COMMENT_SUCCESS = `UPDATE_EPISODE_COMMENT_SUCCESS`;
const UPDATE_EPISODE_COMMENT_FAILURE = `UPDATE_EPISODE_COMMENT_FAILURE`;
const DELETE_EPISODE_COMMENT_REQUEST = `DELETE_EPISODE_COMMENT_REQUEST`;
const DELETE_EPISODE_COMMENT_SUCCESS = `DELETE_EPISODE_COMMENT_SUCCESS`;
const DELETE_EPISODE_COMMENT_FAILURE = `DELETE_EPISODE_COMMENT_FAILURE`;

const reducer = (state = initalState, action) => {
  return immer__WEBPACK_IMPORTED_MODULE_0___default()(state, draft => {
    switch (action.type) {
      case LOAD_EPISODE_REQUEST:
        {
          break;
        }

      case LOAD_EPISODE_SUCCESS:
        {
          draft.episode = action.data;
          break;
        }

      case LOAD_EPISODE_FAILURE:
        {
          break;
        }

      case ADD_EPISODE_REQUEST:
        {
          draft.isAddingEpisode = true;
          draft.isAddedEpisode = false;
          break;
        }

      case ADD_EPISODE_SUCCESS:
        {
          draft.isAddingEpisode = false;
          draft.isAddedEpisode = true;
          break;
        }

      case ADD_EPISODE_FAILURE:
        {
          break;
        }

      case CHANGE_ADDEDEPISODE:
        {
          draft.isAddedEpisode = false;
          break;
        }

      case ADD_RECOMMEND_REQUEST:
        {
          draft.isRecommending = true;
          break;
        }

      case ADD_RECOMMEND_SUCCESS:
        {
          draft.isRecommending = false;
          draft.episode.recommends = action.data;
          break;
        }

      case ADD_RECOMMEND_FAILURE:
        {
          break;
        }

      case UPDATE_EPISODE_REQUEST:
        {
          draft.isUpdatedEpisode = false;
          draft.isUpdatingEpisode = true;
          break;
        }

      case UPDATE_EPISODE_SUCCESS:
        {
          draft.isUpdatedEpisode = true;
          draft.isUpdatingEpisode = false;
          break;
        }

      case UPDATE_EPISODE_FAILURE:
        {
          break;
        }

      case CHANGE_UPDATEDEPISODE:
        {
          draft.isUpdatedEpisode = false;
          break;
        }

      case DELETE_EPISODE_REQUEST:
        {
          draft.isDeletingEpisode = true;
          draft.isDeletedEpisode = false;
          break;
        }

      case DELETE_EPISODE_SUCCESS:
        {
          draft.isDeletingEpisode = false;
          draft.isDeletedEpisode = true;
          break;
        }

      case DELETE_EPISODE_FAILURE:
        {
          break;
        }

      case CHANGE_DELETEDEPISODE:
        {
          draft.isDeletedEpisode = false;
          break;
        }
      // 댓글 작성

      case ADD_EPISODE_COMMENT_REQUEST:
        {
          draft.isAddingComment = true;
          draft.commentAdded = false;
          break;
        }

      case ADD_EPISODE_COMMENT_SUCCESS:
        {
          draft.isAddingComment = false;
          draft.commentAdded = true;
          draft.episode.Episode_Comments.push(action.data);
          break;
        }

      case ADD_EPISODE_COMMENT_FAILURE:
        {
          break;
        }
      // 댓글 수정

      case UPDATE_EPISODE_COMMENT_REQUEST:
        {
          draft.isUpdatingBoard = true;
          break;
        }

      case UPDATE_EPISODE_COMMENT_SUCCESS:
        {
          draft.isUpdatingBoard = false;
          const commentIndex = draft.episode.Episode_Comments.findIndex(v => v.id === action.data.id);
          draft.episode.Episode_Comments[commentIndex].content = action.data.content;
          break;
        }

      case UPDATE_EPISODE_COMMENT_FAILURE:
        {
          break;
        }
      // 댓글 삭제

      case DELETE_EPISODE_COMMENT_REQUEST:
        {
          break;
        }

      case DELETE_EPISODE_COMMENT_SUCCESS:
        {
          const commentIndex = draft.episode.Episode_Comments.findIndex(v => v.id === action.data);
          draft.episode.Episode_Comments.splice(commentIndex, 1);
          break;
        }

      case DELETE_EPISODE_COMMENT_FAILURE:
        {
          break;
        }

      default:
        {
          break;
        }
    }
  });
};

/* harmony default export */ __webpack_exports__["B"] = (reducer);

/***/ }),

/***/ "JMOJ":
/***/ (function(module, exports) {

module.exports = require("next-redux-wrapper");

/***/ }),

/***/ "Jo+v":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Z6Kq");

/***/ }),

/***/ "KI45":
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "LAVF":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export initalState */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return LOG_IN_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return LOG_IN_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return LOG_IN_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return LOG_OUT_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return LOG_OUT_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return LOG_OUT_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return SIGN_UP_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return SIGN_UP_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return SIGN_UP_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return LOAD_USER_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return LOAD_USER_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return LOAD_USER_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return UPDATE_USER_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return UPDATE_USER_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return UPDATE_USER_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return CHANGE_UPDATED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ADD_LIKEBOOKLIST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return REMOVE_LIKEBOOKLIST; });
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("T5ka");
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(immer__WEBPACK_IMPORTED_MODULE_0__);

const initalState = {
  isLoggingIn: false,
  isLoggedIn: false,
  loginErrorReason: '',
  isLoggingOut: false,
  isSignedUp: false,
  isSigningUp: false,
  signUpErrorReason: '',
  me: null,
  LikedBookList: [],
  LikedWriterList: [],
  otherUserInfo: null,
  isUpdating: false,
  isUpdated: false
};
const LOG_IN_REQUEST = `LOG_IN_REQUEST`;
const LOG_IN_SUCCESS = `LOG_IN_SUCCESS`;
const LOG_IN_FAILURE = `LOG_IN_FAILURE`;
const LOG_OUT_REQUEST = `LOG_OUT_REQUEST`;
const LOG_OUT_SUCCESS = `LOG_OUT_SUCCESS`;
const LOG_OUT_FAILURE = `LOG_OUT_FAILURE`;
const SIGN_UP_REQUEST = `SIGN_UP_REQUEST`;
const SIGN_UP_SUCCESS = `SIGN_UP_SUCCESS`;
const SIGN_UP_FAILURE = `SIGN_UP_FAILURE`;
const LOAD_USER_REQUEST = `LOAD_USER_REQUEST`;
const LOAD_USER_SUCCESS = `LOAD_USER_SUCCESS`;
const LOAD_USER_FAILURE = `LOAD_USER_FAILURE`;
const UPDATE_USER_REQUEST = `UPDATE_USER_REQUEST`;
const UPDATE_USER_SUCCESS = `UPDATE_USER_SUCCESS`;
const UPDATE_USER_FAILURE = `UPDATE_USER_FAILURE`;
const CHANGE_UPDATED = `CHANGE_UPDATED`;
const ADD_LIKEBOOKLIST = `ADD_LIKEBOOKLIST`;
const REMOVE_LIKEBOOKLIST = `REMOVE_LIKEBOOKLIST`;

const reducer = (state = initalState, action) => {
  return immer__WEBPACK_IMPORTED_MODULE_0___default()(state, draft => {
    switch (action.type) {
      // 로그인
      case LOG_IN_REQUEST:
        {
          draft.isLoggingIn = true;
          draft.isLoggedIn = false;
          draft.loginErrorReason = '';
          break;
        }

      case LOG_IN_SUCCESS:
        {
          draft.isLoggingIn = false;
          draft.isLoggedIn = true;
          draft.me = action.data;
          break;
        }

      case LOG_IN_FAILURE:
        {
          draft.isLoggingIn = false;
          draft.loginErrorReason = action.error;
          break;
        }
      // 로그아웃

      case LOG_OUT_REQUEST:
        {
          draft.isLoggingOut = true;
          break;
        }

      case LOG_OUT_SUCCESS:
        {
          draft.isLoggingOut = false;
          draft.isLoggedIn = false;
          draft.me = null;
          break;
        }

      case LOG_OUT_FAILURE:
        {
          draft.isLoggingOut = false;
          break;
        }
      // 회원가입

      case SIGN_UP_REQUEST:
        {
          draft.isSigningUp = true;
          draft.signUpErrorReason = '';
          break;
        }

      case SIGN_UP_SUCCESS:
        {
          draft.isSigningUp = false;
          draft.isSignedUp = true;
          break;
        }

      case SIGN_UP_FAILURE:
        {
          draft.isSigningUp = false;
          draft.signUpErrorReason = action.error;
          break;
        }
      // 유저 정보 불러오기

      case LOAD_USER_REQUEST:
        {
          if (action.data) {
            draft.otherUserInfo = null;
          }

          break;
        }

      case LOAD_USER_SUCCESS:
        {
          if (action.me) {
            draft.me = action.data;
          }

          if (!action.me) {
            draft.otherUserInfo = action.data;
          }

          break;
        }

      case LOAD_USER_FAILURE:
        {
          break;
        }
      // 선호작 리스트 추가

      case ADD_LIKEBOOKLIST:
        {
          draft.me.LikingBook.push({
            id: action.data.id,
            name: action.data.name,
            recentDay: action.data.recentDay,
            User: {
              userId: action.data.userId,
              nickname: action.data.userNickname
            }
          });
          break;
        }

      case REMOVE_LIKEBOOKLIST:
        {
          const index = draft.me.LikingBook.findIndex(v => v.id === action.data);

          if (index !== -1) {
            draft.me.LikingBook.splice(index, 1);
          }

          break;
        }

      case UPDATE_USER_REQUEST:
        {
          draft.isUpdating = true;
          draft.isUpdated = false;
          break;
        }

      case UPDATE_USER_SUCCESS:
        {
          draft.isUpdating = false;
          draft.isUpdated = true;

          if (action.data.userId) {
            draft.me.userId = action.data.userId;
          }

          if (action.data.nickname) {
            draft.me.nickname = action.data.nickname;
          }

          break;
        }

      case UPDATE_USER_FAILURE:
        {
          break;
        }

      case CHANGE_UPDATED:
        {
          draft.isUpdated = false;
          break;
        }

      default:
        {
          break;
        }
    }
  });
};

/* harmony default export */ __webpack_exports__["s"] = (reducer);

/***/ }),

/***/ "OcYQ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return backUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return frontUrl; });
const backUrl = true ? '' : undefined;
const frontUrl = true ? '' : undefined;


/***/ }),

/***/ "RmXt":
/***/ (function(module, exports) {

module.exports = require("redux-saga/effects");

/***/ }),

/***/ "T5ka":
/***/ (function(module, exports) {

module.exports = require("immer");

/***/ }),

/***/ "TUA0":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "XVgq":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("gHn/");

/***/ }),

/***/ "YFqc":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("cTJO")


/***/ }),

/***/ "YTqd":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function getRouteRegex(normalizedRoute) {
  // Escape all characters that could be considered RegEx
  const escapedRoute = (normalizedRoute.replace(/\/$/, '') || '/').replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = escapedRoute.replace(/\/\\\[([^/]+?)\\\](?=\/|$)/g, (_, $1) => {
    const isCatchAll = /^(\\\.){3}/.test($1);
    groups[$1 // Un-escape key
    .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1').replace(/^\.{3}/, '') // eslint-disable-next-line no-sequences
    ] = {
      pos: groupIndex++,
      repeat: isCatchAll
    };
    return isCatchAll ? '/(.+?)' : '/([^/]+?)';
  });
  return {
    re: new RegExp('^' + parameterizedRoute + '(?:/)?$', 'i'),
    groups
  };
}

exports.getRouteRegex = getRouteRegex;

/***/ }),

/***/ "Z6Kq":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "Z7t5":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("vqFK");

/***/ }),

/***/ "bzos":
/***/ (function(module, exports) {

module.exports = require("url");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "cTJO":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("KI45");

var _interopRequireWildcard = __webpack_require__("5Uuq");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__("cDcd"));

var _url = __webpack_require__("bzos");

var _utils = __webpack_require__("g/15");

var _router = _interopRequireDefault(__webpack_require__("nOHt"));

function isLocal(href) {
  var url = (0, _url.parse)(href, false, true);
  var origin = (0, _url.parse)((0, _utils.getLocationOrigin)(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  var lastHref = null;
  var lastAs = null;
  var lastResult = null;
  return (href, as) => {
    if (lastResult && href === lastHref && as === lastAs) {
      return lastResult;
    }

    var result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? (0, _utils.formatWithValidation)(url) : url;
}

var observer;
var listeners = new Map();
var IntersectionObserver = false ? undefined : null;
var prefetched = {};

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (observer) {
    return observer;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      var cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        observer.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

var listenToIntersections = (el, cb) => {
  var observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners.delete(el);
  };
};

class Link extends _react.Component {
  constructor(props) {
    super(props);
    this.p = void 0;

    this.cleanUpListeners = () => {};

    this.formatUrls = memoizedFormatUrl((href, asHref) => {
      return {
        href: formatUrl(href),
        as: asHref ? formatUrl(asHref) : asHref
      };
    });

    this.linkClicked = e => {
      var {
        nodeName,
        target
      } = e.currentTarget;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      var {
        href,
        as
      } = this.formatUrls(this.props.href, this.props.as);

      if (!isLocal(href)) {
        // ignore click if it's outside our scope (e.g. https://google.com)
        return;
      }

      var {
        pathname
      } = window.location;
      href = (0, _url.resolve)(pathname, href);
      as = as ? (0, _url.resolve)(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      var {
        scroll
      } = this.props;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      _router.default[this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: this.props.shallow
      }).then(success => {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      });
    };

    if (false) {}

    this.p = props.prefetch !== false;
  }

  componentWillUnmount() {
    this.cleanUpListeners();
  }

  getPaths() {
    var {
      pathname
    } = window.location;
    var {
      href: parsedHref,
      as: parsedAs
    } = this.formatUrls(this.props.href, this.props.as);
    var resolvedHref = (0, _url.resolve)(pathname, parsedHref);
    return [resolvedHref, parsedAs ? (0, _url.resolve)(pathname, parsedAs) : resolvedHref];
  }

  handleRef(ref) {
    var isPrefetched = prefetched[this.getPaths()[0]];

    if (this.p && IntersectionObserver && ref && ref.tagName) {
      this.cleanUpListeners();

      if (!isPrefetched) {
        this.cleanUpListeners = listenToIntersections(ref, () => {
          this.prefetch();
        });
      }
    }
  } // The function is memoized so that no extra lifecycles are needed
  // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html


  prefetch(options) {
    if (!this.p || true) return; // Prefetch the JSON page if asked (only in the client)

    var [href, asPath] = this.getPaths();

    _router.default.prefetch(href, asPath, options);

    prefetched[href] = true;
  }

  render() {
    var {
      children
    } = this.props;
    var {
      href,
      as
    } = this.formatUrls(this.props.href, this.props.as); // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

    if (typeof children === 'string') {
      children = _react.default.createElement("a", null, children);
    } // This will return the first child, if multiple are provided it will throw an error


    var child = _react.Children.only(children);

    var props = {
      ref: el => {
        this.handleRef(el);

        if (child && typeof child === 'object' && child.ref) {
          if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
            child.ref.current = el;
          }
        }
      },
      onMouseEnter: e => {
        if (child.props && typeof child.props.onMouseEnter === 'function') {
          child.props.onMouseEnter(e);
        }

        this.prefetch({
          priority: true
        });
      },
      onClick: e => {
        if (child.props && typeof child.props.onClick === 'function') {
          child.props.onClick(e);
        }

        if (!e.defaultPrevented) {
          this.linkClicked(e);
        }
      }
    }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
    // defined, we specify the current 'href', so that repetition is not needed by the user

    if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
      props.href = as || href;
    } // Add the ending slash to the paths. So, we can serve the
    // "<page>/index.html" directly.


    if (false) { var rewriteUrlForNextExport; }

    return _react.default.cloneElement(child, props);
  }

}

if (false) { var exact, PropTypes, warn; }

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "dZ6Y":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
MIT License

Copyright (c) Jason Miller (https://jasonformat.com/)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

Object.defineProperty(exports, "__esModule", {
  value: true
});

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        // tslint:disable-next-line:no-bitwise
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

exports.default = mitt;

/***/ }),

/***/ "elyg":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__("bzos");

const mitt_1 = __importDefault(__webpack_require__("dZ6Y"));

const utils_1 = __webpack_require__("g/15");

const is_dynamic_1 = __webpack_require__("/jkW");

const route_matcher_1 = __webpack_require__("gguc");

const route_regex_1 = __webpack_require__("YTqd");

function addBasePath(path) {
  // variable is always a string
  const p = "";
  return path.indexOf(p) !== 0 ? p + path : path;
}

function toRoute(path) {
  return path.replace(/\/$/, '') || '/';
}

const prepareRoute = path => toRoute(!path || path === '/' ? '/index' : path);

function fetchNextData(pathname, query, isServerRender, cb) {
  let attempts = isServerRender ? 3 : 1;

  function getResponse() {
    return fetch(utils_1.formatWithValidation({
      // @ts-ignore __NEXT_DATA__
      pathname: `/_next/data/${__NEXT_DATA__.buildId}${pathname}.json`,
      query
    })).then(res => {
      if (!res.ok) {
        if (--attempts > 0 && res.status >= 500) {
          return getResponse();
        }

        throw new Error(`Failed to load static props`);
      }

      return res.json();
    });
  }

  return getResponse().then(data => {
    return cb ? cb(data) : data;
  }).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      ;
      err.code = 'PAGE_LOAD_ERROR';
    }

    throw err;
  });
}

class Router {
  constructor(pathname, query, as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription,
    isFallback
  }) {
    // Static Data Cache
    this.sdc = {};

    this.onPopState = e => {
      if (!e.state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', utils_1.formatWithValidation({
          pathname,
          query
        }), utils_1.getURL());
        return;
      } // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site


      if (e.state && this.isSsr && e.state.url === this.pathname && e.state.as === this.asPath) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(e.state)) {
        return;
      }

      const {
        url,
        as,
        options
      } = e.state;

      if (false) {}

      this.replace(url, as, options);
    };

    this._getStaticData = asPath => {
      const pathname = prepareRoute(url_1.parse(asPath).pathname);
      return  true && this.sdc[pathname] ? Promise.resolve(this.sdc[pathname]) : fetchNextData(pathname, null, this.isSsr, data => this.sdc[pathname] = data);
    };

    this._getServerData = asPath => {
      let {
        pathname,
        query
      } = url_1.parse(asPath, true);
      pathname = prepareRoute(pathname);
      return fetchNextData(pathname, query, this.isSsr);
    }; // represents the current component key


    this.route = toRoute(pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        props: initialProps,
        err
      };
    }

    this.components['/_app'] = {
      Component: App
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = pathname;
    this.query = query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    is_dynamic_1.isDynamicRoute(pathname) && __NEXT_DATA__.autoExport ? pathname : as;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;

    if (false) {}
  } // @deprecated backwards compatibility even though it's a private method.


  static _rewriteUrlForNextExport(url) {
    if (false) {} else {
      return url;
    }
  }

  update(route, mod) {
    const Component = mod.default || mod;
    const data = this.components[route];

    if (!data) {
      throw new Error(`Cannot update unavailable route: ${route}`);
    }

    const newData = Object.assign(Object.assign({}, data), {
      Component
    });
    this.components[route] = newData; // pages/_app.js updated

    if (route === '/_app') {
      this.notify(this.components[this.route]);
      return;
    }

    if (route === this.route) {
      this.notify(newData);
    }
  }

  reload() {
    window.location.reload();
  }
  /**
   * Go back in history
   */


  back() {
    window.history.back();
  }
  /**
   * Performs a `pushState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  push(url, as = url, options = {}) {
    return this.change('pushState', url, as, options);
  }
  /**
   * Performs a `replaceState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  replace(url, as = url, options = {}) {
    return this.change('replaceState', url, as, options);
  }

  change(method, _url, _as, options) {
    return new Promise((resolve, reject) => {
      if (!options._h) {
        this.isSsr = false;
      } // marking route changes as a navigation start entry


      if (utils_1.ST) {
        performance.mark('routeChange');
      } // If url and as provided as an object representation,
      // we'll format them into the string version here.


      const url = typeof _url === 'object' ? utils_1.formatWithValidation(_url) : _url;
      let as = typeof _as === 'object' ? utils_1.formatWithValidation(_as) : _as; // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly for the SSR page.

      if (false) {}

      this.abortComponentLoad(as); // If the url change is only related to a hash change
      // We should not proceed. We should only change the state.
      // WARNING: `_h` is an internal option for handing Next.js client-side
      // hydration. Your app should _never_ use this property. It may change at
      // any time without notice.

      if (!options._h && this.onlyAHashChange(as)) {
        this.asPath = as;
        Router.events.emit('hashChangeStart', as);
        this.changeState(method, url, addBasePath(as), options);
        this.scrollToHash(as);
        Router.events.emit('hashChangeComplete', as);
        return resolve(true);
      }

      const {
        pathname,
        query,
        protocol
      } = url_1.parse(url, true);

      if (!pathname || protocol) {
        if (false) {}

        return resolve(false);
      } // If asked to change the current URL we should reload the current page
      // (not location.reload() but reload getInitialProps and other Next.js stuffs)
      // We also need to set the method = replaceState always
      // as this should not go into the history (That's how browsers work)
      // We should compare the new asPath to the current asPath, not the url


      if (!this.urlIsNew(as)) {
        method = 'replaceState';
      }

      const route = toRoute(pathname);
      const {
        shallow = false
      } = options;

      if (is_dynamic_1.isDynamicRoute(route)) {
        const {
          pathname: asPathname
        } = url_1.parse(as);
        const routeRegex = route_regex_1.getRouteRegex(route);
        const routeMatch = route_matcher_1.getRouteMatcher(routeRegex)(asPathname);

        if (!routeMatch) {
          const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

          if (missingParams.length > 0) {
            if (false) {}

            return reject(new Error(`The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). ` + `Read more: https://err.sh/zeit/next.js/incompatible-href-as`));
          }
        } else {
          // Merge params into `query`, overwriting any specified in search
          Object.assign(query, routeMatch);
        }
      }

      Router.events.emit('routeChangeStart', as); // If shallow is true and the route exists in the router cache we reuse the previous result

      this.getRouteInfo(route, pathname, query, as, shallow).then(routeInfo => {
        const {
          error
        } = routeInfo;

        if (error && error.cancelled) {
          return resolve(false);
        }

        Router.events.emit('beforeHistoryChange', as);
        this.changeState(method, url, addBasePath(as), options);

        if (false) {}

        this.set(route, pathname, query, as, routeInfo);

        if (error) {
          Router.events.emit('routeChangeError', error, as);
          throw error;
        }

        Router.events.emit('routeChangeComplete', as);
        return resolve(true);
      }, reject);
    });
  }

  changeState(method, url, as, options = {}) {
    if (false) {}

    if (method !== 'pushState' || utils_1.getURL() !== as) {
      window.history[method]({
        url,
        as,
        options
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  getRouteInfo(route, pathname, query, as, shallow = false) {
    const cachedRouteInfo = this.components[route]; // If there is a shallow route transition possible
    // If the route is already rendered on the screen.

    if (shallow && cachedRouteInfo && this.route === route) {
      return Promise.resolve(cachedRouteInfo);
    }

    return new Promise((resolve, reject) => {
      if (cachedRouteInfo) {
        return resolve(cachedRouteInfo);
      }

      this.fetchComponent(route).then(Component => resolve({
        Component
      }), reject);
    }).then(routeInfo => {
      const {
        Component
      } = routeInfo;

      if (false) {}

      return this._getData(() => Component.__N_SSG ? this._getStaticData(as) : Component.__N_SSP ? this._getServerData(as) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      })).then(props => {
        routeInfo.props = props;
        this.components[route] = routeInfo;
        return routeInfo;
      });
    }).catch(err => {
      return new Promise(resolve => {
        if (err.code === 'PAGE_LOAD_ERROR') {
          // If we can't load the page it could be one of following reasons
          //  1. Page doesn't exists
          //  2. Page does exist in a different zone
          //  3. Internal error while loading the page
          // So, doing a hard reload is the proper way to deal with this.
          window.location.href = as; // Changing the URL doesn't block executing the current code path.
          // So, we need to mark it as a cancelled error and stop the routing logic.

          err.cancelled = true; // @ts-ignore TODO: fix the control flow here

          return resolve({
            error: err
          });
        }

        if (err.cancelled) {
          // @ts-ignore TODO: fix the control flow here
          return resolve({
            error: err
          });
        }

        resolve(this.fetchComponent('/_error').then(Component => {
          const routeInfo = {
            Component,
            err
          };
          return new Promise(resolve => {
            this.getInitialProps(Component, {
              err,
              pathname,
              query
            }).then(props => {
              routeInfo.props = props;
              routeInfo.error = err;
              resolve(routeInfo);
            }, gipErr => {
              console.error('Error in error page `getInitialProps`: ', gipErr);
              routeInfo.error = err;
              routeInfo.props = {};
              resolve(routeInfo);
            });
          });
        }));
      });
    });
  }

  set(route, pathname, query, as, data) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    this.notify(data);
  }
  /**
   * Callback to execute before replacing router state
   * @param cb callback to be executed
   */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
   * Prefetch page code, you may wait for the data during page rendering.
   * This feature only works in production!
   * @param url the href of prefetched page
   * @param asPath the as path of the prefetched page
   */


  prefetch(url, asPath = url, options = {}) {
    return new Promise((resolve, reject) => {
      const {
        pathname,
        protocol
      } = url_1.parse(url);

      if (!pathname || protocol) {
        if (false) {}

        return;
      } // Prefetch is not supported in development mode because it would trigger on-demand-entries


      if (false) {}

      this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](toRoute(pathname)).then(() => resolve(), reject);
    });
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const Component = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return Component;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return utils_1.loadGetInitialProps(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as) {
    if (this.clc) {
      const e = new Error('Route Cancelled');
      e.cancelled = true;
      Router.events.emit('routeChangeError', e, as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    this.sub(data, this.components['/_app'].Component);
  }

}

exports.default = Router;
Router.events = mitt_1.default();

/***/ }),

/***/ "f5w3":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export initalState */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return LOAD_BOOKS_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return LOAD_BOOKS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return LOAD_BOOKS_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return CHANGE_KEYWORD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return LOAD_BOOK_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return LOAD_BOOK_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return LOAD_BOOK_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return ADD_LIKEBOOK_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return ADD_LIKEBOOK_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return ADD_LIKEBOOK_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "x", function() { return REMOVE_LIKEBOOK_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "y", function() { return REMOVE_LIKEBOOK_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "w", function() { return REMOVE_LIKEBOOK_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ADD_BOOK_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return ADD_BOOK_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ADD_BOOK_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return LOAD_GENRE_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "u", function() { return LOAD_GENRE_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return LOAD_GENRE_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return CHANGE_ADDEDBOOK; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "E", function() { return UPLOAD_IMAGE_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "F", function() { return UPLOAD_IMAGE_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "D", function() { return UPLOAD_IMAGE_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "z", function() { return REMOVE_THUMBNAIL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "v", function() { return REMOVE_IMAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "B", function() { return UPDATE_BOOK_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "C", function() { return UPDATE_BOOK_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "A", function() { return UPDATE_BOOK_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return CHANGE_UPDATEDBOOK; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return DELETE_BOOK_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return DELETE_BOOK_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return DELETE_BOOK_FAILURE; });
/* unused harmony export CHANGE_DELETEDBOOK */
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("T5ka");
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(immer__WEBPACK_IMPORTED_MODULE_0__);

const initalState = {
  books: [],
  book: null,
  keyword: '',
  hasMoreBooks: false,
  genre: [],
  isAddingLikeBook: false,
  isRemovingLikeBook: false,
  thumbnailPath: '',
  isAddingBook: false,
  isAddedBook: false,
  isUpdatingBook: false,
  isUpdatedBook: false,
  isDeletingBook: false,
  isDeletedBook: false
};
const LOAD_BOOKS_REQUEST = `LOAD_BOOKS_REQUEST`;
const LOAD_BOOKS_SUCCESS = `LOAD_BOOKS_SUCCESS`;
const LOAD_BOOKS_FAILURE = `LOAD_BOOKS_FAILURE`;
const CHANGE_KEYWORD = `CHANGE_KEYWORD`;
const LOAD_BOOK_REQUEST = `LOAD_BOOK_REQUEST`;
const LOAD_BOOK_SUCCESS = `LOAD_BOOK_SUCCESS`;
const LOAD_BOOK_FAILURE = `LOAD_BOOK_FAILURE`;
const ADD_LIKEBOOK_REQUEST = `ADD_LIKEBOOK_REQUEST`;
const ADD_LIKEBOOK_SUCCESS = `ADD_LIKEBOOK_SUCCESS`;
const ADD_LIKEBOOK_FAILURE = `ADD_LIKEBOOK_FAILURE`;
const REMOVE_LIKEBOOK_REQUEST = `REMOVE_LIKEBOOK_REQUEST`;
const REMOVE_LIKEBOOK_SUCCESS = `REMOVE_LIKEBOOK_SUCCESS`;
const REMOVE_LIKEBOOK_FAILURE = `REMOVE_LIKEBOOK_FAILURE`;
const ADD_BOOK_REQUEST = `ADD_BOOK_REQUEST`;
const ADD_BOOK_SUCCESS = `ADD_BOOK_SUCCESS`;
const ADD_BOOK_FAILURE = `ADD_BOOK_FAILURE`;
const LOAD_GENRE_REQUEST = `LOAD_GENRE_REQUEST`;
const LOAD_GENRE_SUCCESS = `LOAD_GENRE_SUCCESS`;
const LOAD_GENRE_FAILURE = `LOAD_GENRE_FAILURE`;
const CHANGE_ADDEDBOOK = `CHANGE_ADDEDBOOK`;
const UPLOAD_IMAGE_REQUEST = `UPLOAD_IMAGE_REQUEST`;
const UPLOAD_IMAGE_SUCCESS = `UPLOAD_IMAGE_SUCCESS`;
const UPLOAD_IMAGE_FAILURE = `UPLOAD_IMAGE_FAILURE`;
const REMOVE_THUMBNAIL = `REMOVE_THUMBNAIL`;
const REMOVE_IMAGE = `REMOVE_IMAGE`;
const UPDATE_BOOK_REQUEST = `UPDATE_BOOK_REQUEST`;
const UPDATE_BOOK_SUCCESS = `UPDATE_BOOK_SUCCESS`;
const UPDATE_BOOK_FAILURE = `UPDATE_BOOK_FAILURE`;
const CHANGE_UPDATEDBOOK = `CHANGE_UPDATEDBOOK`;
const DELETE_BOOK_REQUEST = `DELETE_BOOK_REQUEST`;
const DELETE_BOOK_SUCCESS = `DELETE_BOOK_SUCCESS`;
const DELETE_BOOK_FAILURE = `DELETE_BOOK_FAILURE`;
const CHANGE_DELETEDBOOK = `CHANGE_DELETEDBOOK`;

const reducer = (state = initalState, action) => {
  return immer__WEBPACK_IMPORTED_MODULE_0___default()(state, draft => {
    switch (action.type) {
      // 전체 작품 조회
      case LOAD_BOOKS_REQUEST:
        {
          draft.books = !action.lastId ? [] : draft.books; // draft.hasMoreBooks = action.lastId ? draft.hasMoreBooks : true;

          if (draft.hasMoreBooks) {
            draft.hasMoreBooks = action.lastId ? draft.hasMoreBooks : false;
          }

          break;
        }

      case LOAD_BOOKS_SUCCESS:
        {
          action.data.forEach(d => {
            draft.books.push(d);
          });
          draft.hasMoreBooks = action.data.length === 20;
          break;
        }

      case LOAD_BOOKS_FAILURE:
        {
          break;
        }
      // 검색어 설정

      case CHANGE_KEYWORD:
        {
          draft.keyword = action.data;
          break;
        }
      // 작품 한개 조회

      case LOAD_BOOK_REQUEST:
        {
          break;
        }

      case LOAD_BOOK_SUCCESS:
        {
          draft.book = action.data;
          break;
        }

      case LOAD_BOOK_FAILURE:
        {
          break;
        }
      // 선호작 등록

      case ADD_LIKEBOOK_REQUEST:
        {
          draft.isAddingLikeBook = true;
          break;
        }

      case ADD_LIKEBOOK_SUCCESS:
        {
          draft.isAddingLikeBook = false;
          draft.book.likersCount += 1;
          break;
        }

      case ADD_LIKEBOOK_FAILURE:
        {
          break;
        }
      // 선호작 제거

      case REMOVE_LIKEBOOK_REQUEST:
        {
          draft.isRemovingLikeBook = true;
          break;
        }

      case REMOVE_LIKEBOOK_SUCCESS:
        {
          draft.isRemovingLikeBook = false;
          draft.book.likersCount -= 1;
          break;
        }

      case REMOVE_LIKEBOOK_FAILURE:
        {
          break;
        }
      // 작품 만들기

      case ADD_BOOK_REQUEST:
        {
          draft.isAddingBook = true;
          draft.isAddedBook = false;
          break;
        }

      case ADD_BOOK_SUCCESS:
        {
          draft.isAddingBook = false;
          draft.isAddedBook = true;
          break;
        }

      case ADD_BOOK_FAILURE:
        {
          break;
        }
      //

      case CHANGE_ADDEDBOOK:
        {
          draft.isAddedBook = false;
          break;
        }

      case LOAD_GENRE_REQUEST:
        {
          draft.genre = [];
          break;
        }

      case LOAD_GENRE_SUCCESS:
        {
          draft.genre = action.data;
          break;
        }

      case LOAD_GENRE_FAILURE:
        {
          break;
        }
      // 작품 썸네일 등록

      case UPLOAD_IMAGE_REQUEST:
        {
          draft.thumbnailPath = '';
          break;
        }

      case UPLOAD_IMAGE_SUCCESS:
        {
          draft.thumbnailPath = action.data;
          break;
        }

      case UPLOAD_IMAGE_FAILURE:
        {
          break;
        }
      // 작품 썸네일 취소

      case REMOVE_IMAGE:
        {
          draft.thumbnailPath = '';
          break;
        }
      // 등록된 썸네일 삭제

      case REMOVE_THUMBNAIL:
        {
          draft.book.thumbnail = '';
          break;
        }
      // 작품 수정

      case UPDATE_BOOK_REQUEST:
        {
          draft.isUpdatingBook = true;
          draft.isUpdatedBook = false;
          break;
        }

      case UPDATE_BOOK_SUCCESS:
        {
          draft.isUpdatingBook = false;
          draft.isUpdatedBook = true;
          break;
        }

      case UPDATE_BOOK_FAILURE:
        {
          break;
        }

      case CHANGE_UPDATEDBOOK:
        {
          draft.isUpdatedBook = false;
          break;
        }

      case DELETE_BOOK_REQUEST:
        {
          draft.isDeletingBook = true;
          draft.isDeletedBook = false;
          break;
        }

      case DELETE_BOOK_SUCCESS:
        {
          draft.isDeletedBook = true;
          draft.isDeletingBook = false;
          break;
        }

      case DELETE_BOOK_FAILURE:
        {
          break;
        }

      case CHANGE_DELETEDBOOK:
        {
          draft.isDeletedBook = false;
          break;
        }

      default:
        {
          break;
        }
    }
  });
};

/* harmony default export */ __webpack_exports__["G"] = (reducer);

/***/ }),

/***/ "g/15":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__("bzos");
/**
 * Utils
 */


function execOnce(fn) {
  let used = false;
  let result = null;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn.apply(this, args);
    }

    return result;
  };
}

exports.execOnce = execOnce;

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

exports.getLocationOrigin = getLocationOrigin;

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

exports.getURL = getURL;

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

exports.getDisplayName = getDisplayName;

function isResSent(res) {
  return res.finished || res.headersSent;
}

exports.isResSent = isResSent;

async function loadGetInitialProps(App, ctx) {
  var _a;

  if (false) {} // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (false) {}

  return props;
}

exports.loadGetInitialProps = loadGetInitialProps;
exports.urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];

function formatWithValidation(url, options) {
  if (false) {}

  return url_1.format(url, options);
}

exports.formatWithValidation = formatWithValidation;
exports.SP = typeof performance !== 'undefined';
exports.ST = exports.SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';

/***/ }),

/***/ "gHn/":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "gguc":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = decodeURIComponent;
    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

exports.getRouteMatcher = getRouteMatcher;

/***/ }),

/***/ "h74D":
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "hfKm":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("TUA0");

/***/ }),

/***/ "iZP3":
/***/ (function(module, exports, __webpack_require__) {

var _Symbol$iterator = __webpack_require__("XVgq");

var _Symbol = __webpack_require__("Z7t5");

function _typeof2(obj) { if (typeof _Symbol === "function" && typeof _Symbol$iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof _Symbol === "function" && _typeof2(_Symbol$iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "kWrt":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export initalState */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return LOAD_BOARDS_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return LOAD_BOARDS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return LOAD_BOARDS_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return LOAD_BOARD_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return LOAD_BOARD_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return LOAD_BOARD_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ADD_BOARD_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return ADD_BOARD_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ADD_BOARD_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "u", function() { return UPDATE_BOARD_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "v", function() { return UPDATE_BOARD_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return UPDATE_BOARD_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return DELETE_BOARD_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return DELETE_BOARD_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return DELETE_BOARD_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return ADD_COMMENT_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return ADD_COMMENT_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return ADD_COMMENT_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "x", function() { return UPDATE_COMMENT_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "y", function() { return UPDATE_COMMENT_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "w", function() { return UPDATE_COMMENT_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return DELETE_COMMENT_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return DELETE_COMMENT_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return DELETE_COMMENT_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return CHANGE_BOARD_KEYWORD; });
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("T5ka");
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(immer__WEBPACK_IMPORTED_MODULE_0__);

const initalState = {
  boards: [],
  hasMoreBoards: false,
  keyword: '',
  board: null,
  isAddingBoard: false,
  boardAdded: false,
  boardDeleted: false,
  isUpdatingBoard: false,
  isAddingComment: false,
  commentAdded: false,
  isUpdatingComment: false
};
const LOAD_BOARDS_REQUEST = `LOAD_BOARDS_REQUEST`;
const LOAD_BOARDS_SUCCESS = `LOAD_BOARDS_SUCCESS`;
const LOAD_BOARDS_FAILURE = `LOAD_BOARDS_FAILURE`;
const LOAD_BOARD_REQUEST = `LOAD_BOARD_REQUEST`;
const LOAD_BOARD_SUCCESS = `LOAD_BOARD_SUCCESS`;
const LOAD_BOARD_FAILURE = `LOAD_BOARD_FAILURE`;
const ADD_BOARD_REQUEST = `ADD_BOARD_REQUEST`;
const ADD_BOARD_SUCCESS = `ADD_BOARD_SUCCESS`;
const ADD_BOARD_FAILURE = `ADD_BOARD_FAILURE`;
const UPDATE_BOARD_REQUEST = `UPDATE_BOARD_REQUEST`;
const UPDATE_BOARD_SUCCESS = `UPDATE_BOARD_SUCCESS`;
const UPDATE_BOARD_FAILURE = `UPDATE_BOARD_FAILURE`;
const DELETE_BOARD_REQUEST = `DELETE_BOARD_REQUEST`;
const DELETE_BOARD_SUCCESS = `DELETE_BOARD_SUCCESS`;
const DELETE_BOARD_FAILURE = `DELETE_BOARD_FAILURE`;
const ADD_COMMENT_REQUEST = `ADD_COMMENT_REQUEST`;
const ADD_COMMENT_SUCCESS = `ADD_COMMENT_SUCCESS`;
const ADD_COMMENT_FAILURE = `ADD_COMMENT_FAILURE`;
const UPDATE_COMMENT_REQUEST = `UPDATE_COMMENT_REQUEST`;
const UPDATE_COMMENT_SUCCESS = `UPDATE_COMMENT_SUCCESS`;
const UPDATE_COMMENT_FAILURE = `UPDATE_COMMENT_FAILURE`;
const DELETE_COMMENT_REQUEST = `DELETE_COMMENT_REQUEST`;
const DELETE_COMMENT_SUCCESS = `DELETE_COMMENT_SUCCESS`;
const DELETE_COMMENT_FAILURE = `DELETE_COMMENT_FAILURE`;
const CHANGE_BOARD_KEYWORD = `CHANGE_BOARD_KEYWORD`;

const reducer = (state = initalState, action) => {
  return immer__WEBPACK_IMPORTED_MODULE_0___default()(state, draft => {
    switch (action.type) {
      // 전체 게시글 조회
      case LOAD_BOARDS_REQUEST:
        {
          draft.boards = !action.lastId ? [] : draft.boards;

          if (draft.hasMoreBoards) {
            draft.hasMoreBoards = action.lastId ? draft.hasMoreBoards : false;
          }

          break;
        }

      case LOAD_BOARDS_SUCCESS:
        {
          draft.boards = draft.boards.concat(action.data);
          draft.hasMoreBoards = action.data.length === 30;
          break;
        }

      case LOAD_BOARDS_FAILURE:
        {
          break;
        }
      // 게시글 조회

      case LOAD_BOARD_REQUEST:
        {
          draft.boardDeleted = false;
          draft.board = null;
          break;
        }

      case LOAD_BOARD_SUCCESS:
        {
          draft.board = action.data;
          break;
        }

      case LOAD_BOARD_FAILURE:
        {
          break;
        }
      // 게시글 작성

      case ADD_BOARD_REQUEST:
        {
          draft.isAddingBoard = true;
          draft.boardAdded = false;
          break;
        }

      case ADD_BOARD_SUCCESS:
        {
          draft.isAddingBoard = false;
          draft.boardAdded = true;
          draft.boards.unshift(action.data);
          break;
        }

      case ADD_BOARD_FAILURE:
        {
          break;
        }
      // 게시글 수정

      case UPDATE_BOARD_REQUEST:
        {
          draft.isUpdatingBoard = true;
          break;
        }

      case UPDATE_BOARD_SUCCESS:
        {
          draft.isUpdatingBoard = false;
          draft.board.content = action.data;
          break;
        }

      case UPDATE_BOARD_FAILURE:
        {
          break;
        }
      // 게시글 삭제

      case DELETE_BOARD_REQUEST:
        {
          draft.boardDeleted = false;
          break;
        }

      case DELETE_BOARD_SUCCESS:
        {
          const boardIndex = draft.boards.findIndex(v => v.id === action.data);
          draft.boards.splice(boardIndex, 1);
          draft.boardDeleted = true;
          break;
        }

      case DELETE_BOARD_FAILURE:
        {
          break;
        }
      // 댓글 작성

      case ADD_COMMENT_REQUEST:
        {
          draft.isAddingComment = true;
          draft.commentAdded = false;
          break;
        }

      case ADD_COMMENT_SUCCESS:
        {
          draft.isAddingComment = false;
          draft.commentAdded = true;
          draft.board.Comments.push(action.data);
          break;
        }

      case ADD_COMMENT_FAILURE:
        {
          break;
        }
      // 댓글 수정

      case UPDATE_COMMENT_REQUEST:
        {
          draft.isUpdatingBoard = true;
          break;
        }

      case UPDATE_COMMENT_SUCCESS:
        {
          draft.isUpdatingBoard = false;
          const commentIndex = draft.board.Comments.findIndex(v => v.id === action.data.id);
          draft.board.Comments[commentIndex].content = action.data.content;
          break;
        }

      case UPDATE_COMMENT_FAILURE:
        {
          break;
        }
      // 댓글 삭제

      case DELETE_COMMENT_REQUEST:
        {
          break;
        }

      case DELETE_COMMENT_SUCCESS:
        {
          const commentIndex = draft.board.Comments.findIndex(v => v.id === action.data);
          draft.board.Comments.splice(commentIndex, 1); // draft.board.Comments = draft.board.Comments.filter(c => c.id !== action.data);

          break;
        }

      case DELETE_COMMENT_FAILURE:
        {
          break;
        }

      case CHANGE_BOARD_KEYWORD:
        {
          draft.keyword = action.data;
          break;
        }

      default:
        {
          break;
        }
    }
  });
};

/* harmony default export */ __webpack_exports__["z"] = (reducer);

/***/ }),

/***/ "lhFH":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/weak-map");

/***/ }),

/***/ "nOHt":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("5Uuq");

var _interopRequireDefault = __webpack_require__("KI45");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router2 = _interopRequireWildcard(__webpack_require__("elyg"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__("qOIg");

var _withRouter = _interopRequireDefault(__webpack_require__("0Bsm"));

exports.withRouter = _withRouter.default;
/* global window */

var singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

var urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback'];
var routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
var coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      var router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = function () {
    var router = getRouter();
    return router[field](...arguments);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, function () {
      var eventField = "on" + event.charAt(0).toUpperCase() + event.substring(1);
      var _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...arguments);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error("Error when running the Router event: " + eventField); // tslint:disable-next-line:no-console

          console.error(err.message + "\n" + err.stack);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    var message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


var createRouter = function createRouter() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  var _router = router;
  var instance = {};

  for (var property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = function () {
      return _router[field](...arguments);
    };
  });
  return instance;
}

/***/ }),

/***/ "pEZS":
/***/ (function(module, exports) {

module.exports = require("next-redux-saga");

/***/ }),

/***/ "qOIg":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  result["default"] = mod;
  return result;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

const React = __importStar(__webpack_require__("cDcd"));

exports.RouterContext = React.createContext(null);

/***/ }),

/***/ "rKB8":
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "vqFK":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol");

/***/ }),

/***/ "wy2R":
/***/ (function(module, exports) {

module.exports = require("moment");

/***/ }),

/***/ "x6ND":
/***/ (function(module, exports) {

module.exports = require("styled-reset");

/***/ }),

/***/ "zIXN":
/***/ (function(module, exports) {

module.exports = require("react-helmet");

/***/ }),

/***/ "zr5I":
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ })

/******/ });