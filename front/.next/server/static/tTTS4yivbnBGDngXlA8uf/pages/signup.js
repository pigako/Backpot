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
/******/ 	return __webpack_require__(__webpack_require__.s = 13);
/******/ })
/************************************************************************/
/******/ ({

/***/ 13:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("vL9u");


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

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "Dtiu":
/***/ (function(module, exports) {

module.exports = require("styled-components");

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

/***/ "T5ka":
/***/ (function(module, exports) {

module.exports = require("immer");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "h74D":
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "vL9u":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Dtiu");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("h74D");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("zr5I");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("4Q3z");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_designs_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("1BYw");
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("LAVF");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








const SignUpDesign = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "signup__SignUpDesign",
  componentId: "sc-1lgc2z-0"
})(["height:100%;"]);
const Subject = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.h1.withConfig({
  displayName: "signup__Subject",
  componentId: "sc-1lgc2z-1"
})(["font-size:2rem;margin-top:10px;"]);
const SignUpForm = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.form.withConfig({
  displayName: "signup__SignUpForm",
  componentId: "sc-1lgc2z-2"
})(["margin-top:20px;height:100%;width:90%;"]);
const SDiv = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "signup__SDiv",
  componentId: "sc-1lgc2z-3"
})(["width:100%;height:2rem;display:flex;align-items:center;margin-bottom:10px;& > label{flex:10;margin-bottom:0px;}& > button{}"]);
const Label = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.label.withConfig({
  displayName: "signup__Label",
  componentId: "sc-1lgc2z-4"
})(["display:inline-block;margin-bottom:10px;"]);
const Input = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.input.withConfig({
  displayName: "signup__Input",
  componentId: "sc-1lgc2z-5"
})(["outline:none;border:solid 1px #339af0;border-radius:4px;padding-left:10px;margin-bottom:10px;width:100%;height:2rem;font-size:1.2rem;"]);
const ErrorLabel = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.label.withConfig({
  displayName: "signup__ErrorLabel",
  componentId: "sc-1lgc2z-6"
})(["display:inline-block;color:red;"]);
const LoginFormButtonDiv = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "signup__LoginFormButtonDiv",
  componentId: "sc-1lgc2z-7"
})(["display:flex;justify-content:flex-end;align-items:center;width:100%;& button{margin-left:10px;}"]);
const LoadingImg = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.img.withConfig({
  displayName: "signup__LoadingImg",
  componentId: "sc-1lgc2z-8"
})(["margin-top:4px;height:1.5rem;"]);

const SignUp = () => {
  const {
    isSignedUp,
    isSigningUp,
    me
  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(state => state.user);
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"])();
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"])();
  const {
    0: userId,
    1: setUserId
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const {
    0: password,
    1: setPassword
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const {
    0: passwordCheck,
    1: setPasswordCheck
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const {
    0: nickname,
    1: setNickname
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const {
    0: errorReason,
    1: setErrorReason
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    userIdCheck: false,
    passwordError: '',
    passwordCheckError: '',
    nicknameCheck: false
  });
  const {
    userIdCheck,
    passwordError,
    passwordCheckError,
    nicknameCheck
  } = errorReason;
  const onChangeUserId = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(e => {
    setUserId(e.target.value);
  }, []);
  const onChangePassword = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(e => {
    setPassword(e.target.value);
  }, []);
  const onChangeNickname = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(e => {
    setNickname(e.target.value);
  }, []);
  const onChangePasswordCheck = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(e => {
    if (e.target.value !== password) {
      setErrorReason(_objectSpread({}, errorReason, {
        passwordCheckError: '비밀번호가 일치하지 않습니다.'
      }));
    } else {
      setErrorReason(_objectSpread({}, errorReason, {
        passwordCheckError: ''
      }));
    }

    setPasswordCheck(e.target.value);
  }, [password, errorReason, passwordCheckError]);
  const onCheckUserId = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(async e => {
    if (userId.trim() === '') {
      return alert('아이디를 입력해주세요');
    }

    const result = await axios__WEBPACK_IMPORTED_MODULE_3___default.a.post(`/user/check`, {
      type: 'userId',
      userId
    });

    if (result.data) {
      setErrorReason(_objectSpread({}, errorReason, {
        userIdCheck: true
      }));
      alert('사용 가능한 아이디입니다.');
    } else {
      alert('이미 사용중인 아이디입니다.');
    }
  }, [errorReason, userId]);
  const onCheckNickname = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(async e => {
    if (nickname.trim() === '') {
      return alert('닉네임을 입력해주세요');
    }

    const result = await axios__WEBPACK_IMPORTED_MODULE_3___default.a.post(`/user/check`, {
      type: 'nickname',
      nickname
    });

    if (result.data) {
      setErrorReason(_objectSpread({}, errorReason, {
        nicknameCheck: true
      }));
      alert('사용 가능한 닉네임입니다.');
    } else {
      alert('이미 사용중인 닉네임입니다.');
    }
  }, [errorReason, nickname]);
  const onSubmitForm = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(e => {
    e.preventDefault();

    if (!userIdCheck) {
      return alert('아이디 중복확인을 해주세요.!');
    }

    if (!nicknameCheck) {
      return alert('닉네임 중복확인을 해주세요.!');
    }

    dispatch({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_6__[/* SIGN_UP_REQUEST */ "n"],
      data: {
        userId,
        password,
        nickname
      }
    });
  }, [userIdCheck, nicknameCheck, userId, password, nickname]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (me && me.userId) {
      alert('로그인한 사용자는 접근할 수 없습니다.');
      router.push('/');
    }

    if (isSignedUp) {
      alert('회원가입 완료');
      router.push('/');
    }
  }, [isSignedUp, me && me.userId]);
  return __jsx(SignUpDesign, null, __jsx(Subject, null, "\uD68C\uC6D0\uAC00\uC785"), __jsx(SignUpForm, {
    onSubmit: onSubmitForm
  }, __jsx("div", null, __jsx(SDiv, null, __jsx(Label, {
    htmlFor: "user-id"
  }, "\uC544\uC774\uB514"), userIdCheck || __jsx(_components_designs_Button__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], {
    type: "button",
    onClick: onCheckUserId
  }, "\uC911\uBCF5\uD655\uC778")), __jsx(Input, {
    htmlFor: "user-id",
    name: "userId",
    value: userId,
    onChange: onChangeUserId,
    required: true
  })), __jsx("div", null, __jsx(Label, {
    htmlFor: "user-password"
  }, "\uBE44\uBC00\uBC88\uD638"), __jsx("br", null), __jsx(Input, {
    htmlFor: "user-password",
    name: "password",
    type: "password",
    value: password,
    onChange: onChangePassword,
    required: true
  })), __jsx("div", null, __jsx(Label, {
    htmlFor: "user-password-Check"
  }, "\uBE44\uBC00\uBC88\uD638\uCCB4\uD06C"), __jsx("br", null), __jsx(Input, {
    htmlFor: "user-password-Check",
    name: "passwordCheck",
    type: "password",
    value: passwordCheck,
    onChange: onChangePasswordCheck,
    required: true
  })), __jsx("div", null, __jsx(SDiv, null, __jsx(Label, {
    htmlFor: "user-nickname"
  }, "\uB2C9\uB124\uC784"), nicknameCheck || __jsx(_components_designs_Button__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], {
    type: "button",
    onClick: onCheckNickname
  }, "\uC911\uBCF5\uD655\uC778")), __jsx(Input, {
    htmlFor: "user-nickname",
    name: "nickname",
    value: nickname,
    onChange: onChangeNickname,
    required: true
  })), __jsx(LoginFormButtonDiv, null, __jsx(_components_designs_Button__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], {
    type: "submit",
    color: "pink"
  }, isSigningUp ? __jsx(LoadingImg, {
    src: "/static/icons/loading_pink.gif"
  }) : `가입하기`)), __jsx(ErrorLabel, null, passwordCheckError)));
};

/* harmony default export */ __webpack_exports__["default"] = (SignUp);

/***/ }),

/***/ "zr5I":
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ })

/******/ });