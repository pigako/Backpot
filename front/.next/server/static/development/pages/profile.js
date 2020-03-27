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
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/designs/Button.js":
/*!**************************************!*\
  !*** ./components/designs/Button.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
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
/* harmony default export */ __webpack_exports__["default"] = (Button);

/***/ }),

/***/ "./pages/profile.js":
/*!**************************!*\
  !*** ./pages/profile.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_designs_Button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/designs/Button */ "./components/designs/Button.js");
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../reducers/user */ "./reducers/user.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









const SProfileDiv = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "profile__SProfileDiv",
  componentId: "sc-1n71nmh-0"
})(["width:98%;margin-top:10px;"]);
const ProfileTitle = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.h1.withConfig({
  displayName: "profile__ProfileTitle",
  componentId: "sc-1n71nmh-1"
})(["display:inline-block;font-weight:bold;margin-left:10px;width:100%;"]);
const InfoCardWrap = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "profile__InfoCardWrap",
  componentId: "sc-1n71nmh-2"
})(["margin-top:2rem;margin-left:1.5rem;border:solid 1px #495057;border-radius:6px;width:70%;"]);
const InfoCardDiv = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "profile__InfoCardDiv",
  componentId: "sc-1n71nmh-3"
})(["display:flex;align-items:center;margin:1rem;height:4rem;"]);
const InfoLeftDiv = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "profile__InfoLeftDiv",
  componentId: "sc-1n71nmh-4"
})(["flex:1;"]);
const InfoRightDiv = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "profile__InfoRightDiv",
  componentId: "sc-1n71nmh-5"
})(["flex:3;display:flex;& > input{width:100%;height:2rem;font-size:1rem;line-height:2rem;padding-left:10px;border:solid 2px #495057;border-radius:4px;transition:0.55s ease;&:hover{border:solid 2px #148cff;}&:focus{border:solid 2px #148cff;}}"]);
const CheckButton = styled_components__WEBPACK_IMPORTED_MODULE_2___default()(_components_designs_Button__WEBPACK_IMPORTED_MODULE_6__["default"]).withConfig({
  displayName: "profile__CheckButton",
  componentId: "sc-1n71nmh-6"
})(["width:8rem;height:2rem;margin-left:10px;"]);
const ButtonDiv = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "profile__ButtonDiv",
  componentId: "sc-1n71nmh-7"
})(["margin:1rem;height:4rem;"]);
const SButton = styled_components__WEBPACK_IMPORTED_MODULE_2___default()(_components_designs_Button__WEBPACK_IMPORTED_MODULE_6__["default"]).withConfig({
  displayName: "profile__SButton",
  componentId: "sc-1n71nmh-8"
})(["display:block;width:8rem;margin-top:1rem;float:right;"]);

const Profile = ({
  id
}) => {
  const {
    me,
    isUpdating,
    isUpdated
  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["useSelector"])(state => state.user);
  const {
    0: inputs,
    1: setInputs
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    userId: '',
    userNickname: '',
    newUserPassword: '',
    newUserPasswordCheck: ''
  });
  const {
    0: checkUserId,
    1: setCheckUserId
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: checkUserNickname,
    1: setCheckUserNickname
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: checkUserPassword,
    1: setCheckUserPassword
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: passwordErrorReason,
    1: setPasswordErrorReason
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const {
    userId,
    userNickname,
    newUserPassword,
    newUserPasswordCheck
  } = inputs;
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["useDispatch"])();
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"])();
  const onChangeInputs = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(e => {
    if (e.target.name === 'newUserPasswordCheck') {
      if (e.target.value !== newUserPassword) {
        setPasswordErrorReason('비밀번호가 일치하지 않습니다.');
      } else {
        setPasswordErrorReason('');
      }
    }

    setInputs(_objectSpread({}, inputs, {
      [e.target.name]: e.target.value
    }));
  }, [inputs]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(e => {
    if (isUpdated) {
      dispatch({
        type: _reducers_user__WEBPACK_IMPORTED_MODULE_7__["CHANGE_UPDATED"]
      });
      setCheckUserPassword(false);
      setInputs({
        userId: '',
        userNickname: '',
        newUserPassword: '',
        newUserPasswordCheck: ''
      });
    }

    if (!(me && me.id)) {
      alert('로그인 하지 않은 사용자는 접근 할 수 없습니다.');
      router.push('/');
      return;
    }

    if ((me && me.userId) !== id) {
      router.push({
        pathname: '/pofile',
        query: {
          id: me.userId
        }
      }, `/profile/${me.userId}`);
      return;
    }
  }, [isUpdated, me && me.userId, id]);
  const onCheck = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(async e => {
    if (e.target.name === 'checkUserId') {
      if (!userId.trim()) {
        alert('수정 사항이 없습니다.');
        return;
      }

      const result = await axios__WEBPACK_IMPORTED_MODULE_4___default.a.post(`/user/check`, {
        type: 'userId',
        userId
      });

      if (result.data) {
        setCheckUserId(true);
        alert('사용 가능한 아이디입니다.');
      } else {
        alert('이미 사용중인 아이디입니다.');
      }
    } else if (e.target.name === 'checkUserNickname') {
      if (!userNickname.trim()) {
        alert('수정 사항이 없습니다.');
      }

      const result = await axios__WEBPACK_IMPORTED_MODULE_4___default.a.post(`/user/check`, {
        type: 'userNickname',
        userNickname
      });

      if (result.data) {
        setCheckUserNickname(true);
        alert('사용 가능한 닉네임입니다.');
      } else {
        alert('이미 사용중인 닉네임입니다.');
      }
    }
  }, [userId, userNickname]);
  const onUpdatePassword = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(e => {
    if (!checkUserPassword) {
      setCheckUserPassword(true);
    }
  }, [checkUserPassword]);
  const onUpdateProfile = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(e => {
    if (!(userId || newUserPassword || userNickname)) {
      alert('수정 사항이 없습니다.');
      return;
    }

    if (passwordErrorReason !== '') {
      alert('패스워드가 일치하지 않습니다.');
      return;
    }

    if (userId && !checkUserId) {
      alert('아이디 중복확인을 해주세요.');
      return;
    }

    if (userNickname && !checkUserNickname) {
      alert('닉네임 중복확인을 해주세요.');
      return;
    }

    dispatch({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_7__["UPDATE_USER_REQUEST"],
      data: {
        userId,
        newUserPassword,
        userNickname
      }
    });
  }, [userId, newUserPassword, userNickname, passwordErrorReason, checkUserId, checkUserNickname]);
  return __jsx(SProfileDiv, null, __jsx(ProfileTitle, null, me && me.nickname, " \uB2D8 \uD504\uB85C\uD544 \uC218\uC815"), __jsx(InfoCardWrap, null, __jsx(InfoCardDiv, null, __jsx(InfoLeftDiv, null, __jsx("label", null, "\uC544\uC774\uB514")), __jsx(InfoRightDiv, null, __jsx("input", {
    type: "text",
    name: "userId",
    value: userId,
    placeholder: me && me.userId,
    onChange: onChangeInputs
  }), checkUserId || __jsx(CheckButton, {
    name: "checkUserId",
    onClick: onCheck
  }, "\uC911\uBCF5\uD655\uC778"))), __jsx(InfoCardDiv, null, __jsx(InfoLeftDiv, null, __jsx("label", null, "\uBE44\uBC00\uBC88\uD638")), checkUserPassword ? __jsx(InfoRightDiv, null, __jsx("input", {
    type: "password",
    name: "newUserPassword",
    value: newUserPassword,
    placeholder: "New Password",
    onChange: onChangeInputs
  }), __jsx("input", {
    type: "password",
    name: "newUserPasswordCheck",
    value: newUserPasswordCheck,
    placeholder: "Repeat New Password",
    onChange: onChangeInputs
  })) : __jsx(InfoRightDiv, null, __jsx(_components_designs_Button__WEBPACK_IMPORTED_MODULE_6__["default"], {
    size: 'middle',
    onClick: onUpdatePassword
  }, "\uBE44\uBC00\uBC88\uD638 \uBCC0\uACBD"))), __jsx(InfoCardDiv, null, __jsx(InfoLeftDiv, null, __jsx("label", null, "\uB2C9\uB124\uC784")), __jsx(InfoRightDiv, null, __jsx("input", {
    type: "text",
    name: "userNickname",
    value: userNickname,
    placeholder: me && me.nickname,
    onChange: onChangeInputs
  }), checkUserNickname || __jsx(CheckButton, {
    name: "checkUserNickname",
    onClick: onCheck
  }, "\uC911\uBCF5\uD655\uC778"))), __jsx(ButtonDiv, null, __jsx(SButton, {
    onClick: onUpdateProfile
  }, "\uC218\uC815\uD558\uAE30"))));
};

Profile.propTypes = {
  id: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired
};

Profile.getInitialProps = async context => {
  const id = context.query.id;
  return {
    id
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Profile);

/***/ }),

/***/ "./reducers/user.js":
/*!**************************!*\
  !*** ./reducers/user.js ***!
  \**************************/
/*! exports provided: initalState, LOG_IN_REQUEST, LOG_IN_SUCCESS, LOG_IN_FAILURE, LOG_OUT_REQUEST, LOG_OUT_SUCCESS, LOG_OUT_FAILURE, SIGN_UP_REQUEST, SIGN_UP_SUCCESS, SIGN_UP_FAILURE, LOAD_USER_REQUEST, LOAD_USER_SUCCESS, LOAD_USER_FAILURE, UPDATE_USER_REQUEST, UPDATE_USER_SUCCESS, UPDATE_USER_FAILURE, CHANGE_UPDATED, ADD_LIKEBOOKLIST, REMOVE_LIKEBOOKLIST, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initalState", function() { return initalState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_IN_REQUEST", function() { return LOG_IN_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_IN_SUCCESS", function() { return LOG_IN_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_IN_FAILURE", function() { return LOG_IN_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_OUT_REQUEST", function() { return LOG_OUT_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_OUT_SUCCESS", function() { return LOG_OUT_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_OUT_FAILURE", function() { return LOG_OUT_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGN_UP_REQUEST", function() { return SIGN_UP_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGN_UP_SUCCESS", function() { return SIGN_UP_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGN_UP_FAILURE", function() { return SIGN_UP_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_USER_REQUEST", function() { return LOAD_USER_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_USER_SUCCESS", function() { return LOAD_USER_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_USER_FAILURE", function() { return LOAD_USER_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_USER_REQUEST", function() { return UPDATE_USER_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_USER_SUCCESS", function() { return UPDATE_USER_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_USER_FAILURE", function() { return UPDATE_USER_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHANGE_UPDATED", function() { return CHANGE_UPDATED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_LIKEBOOKLIST", function() { return ADD_LIKEBOOKLIST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_LIKEBOOKLIST", function() { return REMOVE_LIKEBOOKLIST; });
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! immer */ "immer");
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

/* harmony default export */ __webpack_exports__["default"] = (reducer);

/***/ }),

/***/ 5:
/*!********************************!*\
  !*** multi ./pages/profile.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Document\Backpot\front\pages\profile.js */"./pages/profile.js");


/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "immer":
/*!************************!*\
  !*** external "immer" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("immer");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ })

/******/ });
//# sourceMappingURL=profile.js.map