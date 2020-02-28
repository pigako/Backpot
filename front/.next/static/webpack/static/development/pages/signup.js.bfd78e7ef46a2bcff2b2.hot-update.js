webpackHotUpdate("static\\development\\pages\\signup.js",{

/***/ "./pages/signup.js":
/*!*************************!*\
  !*** ./pages/signup.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _components_designs_Button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/designs/Button */ "./components/designs/Button.js");
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../reducers/user */ "./reducers/user.js");








var __jsx = react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default()(object); if (_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default.a) { var symbols = _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default()(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(target, key, source[key]); }); } else if (_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default.a) { _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default()(target, _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default()(source)); } else { ownKeys(Object(source)).forEach(function (key) { _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, key, _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(source, key)); }); } } return target; }








var SignUpDesign = styled_components__WEBPACK_IMPORTED_MODULE_9__["default"].div.withConfig({
  displayName: "signup__SignUpDesign",
  componentId: "sc-1lgc2z-0"
})(["height:100%;"]);
var Subject = styled_components__WEBPACK_IMPORTED_MODULE_9__["default"].h1.withConfig({
  displayName: "signup__Subject",
  componentId: "sc-1lgc2z-1"
})(["font-size:2rem;margin-top:10px;"]);
var SignUpForm = styled_components__WEBPACK_IMPORTED_MODULE_9__["default"].form.withConfig({
  displayName: "signup__SignUpForm",
  componentId: "sc-1lgc2z-2"
})(["margin-top:20px;height:100%;width:90%;"]);
var SDiv = styled_components__WEBPACK_IMPORTED_MODULE_9__["default"].div.withConfig({
  displayName: "signup__SDiv",
  componentId: "sc-1lgc2z-3"
})(["width:100%;height:2rem;display:flex;align-items:center;margin-bottom:10px;& > label{flex:10;margin-bottom:0px;}& > button{}"]);
var Label = styled_components__WEBPACK_IMPORTED_MODULE_9__["default"].label.withConfig({
  displayName: "signup__Label",
  componentId: "sc-1lgc2z-4"
})(["display:inline-block;margin-bottom:10px;"]);
var Input = styled_components__WEBPACK_IMPORTED_MODULE_9__["default"].input.withConfig({
  displayName: "signup__Input",
  componentId: "sc-1lgc2z-5"
})(["outline:none;border:solid 1px #339af0;border-radius:4px;padding-left:10px;margin-bottom:10px;width:100%;height:2rem;font-size:1.2rem;"]);
var ErrorLabel = styled_components__WEBPACK_IMPORTED_MODULE_9__["default"].label.withConfig({
  displayName: "signup__ErrorLabel",
  componentId: "sc-1lgc2z-6"
})(["display:inline-block;color:red;"]);
var LoginFormButtonDiv = styled_components__WEBPACK_IMPORTED_MODULE_9__["default"].div.withConfig({
  displayName: "signup__LoginFormButtonDiv",
  componentId: "sc-1lgc2z-7"
})(["display:flex;justify-content:flex-end;align-items:center;width:100%;& button{margin-left:10px;}"]);
var LoadingImg = styled_components__WEBPACK_IMPORTED_MODULE_9__["default"].img.withConfig({
  displayName: "signup__LoadingImg",
  componentId: "sc-1lgc2z-8"
})(["margin-top:4px;height:1.5rem;"]);

var SignUp = function SignUp() {
  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_10__["useSelector"])(function (state) {
    return state.user;
  }),
      isSignedUp = _useSelector.isSignedUp,
      isSigningUp = _useSelector.isSigningUp;

  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_10__["useDispatch"])();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_8__["useState"])(''),
      userId = _useState[0],
      setUserId = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_8__["useState"])(''),
      password = _useState2[0],
      setPassword = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_8__["useState"])(''),
      passwordCheck = _useState3[0],
      setPasswordCheck = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_8__["useState"])(''),
      nickname = _useState4[0],
      setNickname = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_8__["useState"])({
    userIdCheck: false,
    passwordError: '',
    passwordCheckError: '',
    nicknameCheck: false
  }),
      errorReason = _useState5[0],
      setErrorReason = _useState5[1];

  var userIdCheck = errorReason.userIdCheck,
      passwordError = errorReason.passwordError,
      passwordCheckError = errorReason.passwordCheckError,
      nicknameCheck = errorReason.nicknameCheck;
  var onChangeUserId = Object(react__WEBPACK_IMPORTED_MODULE_8__["useCallback"])(function (e) {
    setUserId(e.target.value);
  }, []);
  var onChangePassword = Object(react__WEBPACK_IMPORTED_MODULE_8__["useCallback"])(function (e) {
    setPassword(e.target.value);
  }, []);
  var onChangeNickname = Object(react__WEBPACK_IMPORTED_MODULE_8__["useCallback"])(function (e) {
    setNickname(e.target.value);
  }, []);
  var onChangePasswordCheck = Object(react__WEBPACK_IMPORTED_MODULE_8__["useCallback"])(function (e) {
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
  var onCheckUserId = Object(react__WEBPACK_IMPORTED_MODULE_8__["useCallback"])(function _callee(e) {
    var result;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_6___default.a.async(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (!(userId.trim() === '')) {
              _context.next = 2;
              break;
            }

            return _context.abrupt("return", alert('아이디를 입력해주세요'));

          case 2:
            _context.next = 4;
            return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_6___default.a.awrap(axios__WEBPACK_IMPORTED_MODULE_11___default.a.post("/user/check", {
              type: 'userId',
              userId: userId
            }));

          case 4:
            result = _context.sent;

            if (result.data) {
              setErrorReason(_objectSpread({}, errorReason, {
                userIdCheck: true
              }));
              alert('사용 가능한 아이디입니다.');
            } else {
              alert('이미 사용중인 아이디입니다.');
            }

          case 6:
          case "end":
            return _context.stop();
        }
      }
    });
  }, [errorReason, userId]);
  var onCheckNickname = Object(react__WEBPACK_IMPORTED_MODULE_8__["useCallback"])(function _callee2(e) {
    var result;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_6___default.a.async(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            if (!(nickname.trim() === '')) {
              _context2.next = 2;
              break;
            }

            return _context2.abrupt("return", alert('닉네임을 입력해주세요'));

          case 2:
            _context2.next = 4;
            return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_6___default.a.awrap(axios__WEBPACK_IMPORTED_MODULE_11___default.a.post("/user/check", {
              type: 'nickname',
              nickname: nickname
            }));

          case 4:
            result = _context2.sent;

            if (result.data) {
              setErrorReason(_objectSpread({}, errorReason, {
                nicknameCheck: true
              }));
              alert('사용 가능한 닉네임입니다.');
            } else {
              alert('이미 사용중인 닉네임입니다.');
            }

          case 6:
          case "end":
            return _context2.stop();
        }
      }
    });
  }, [errorReason, nickname]);
  var onSubmitForm = Object(react__WEBPACK_IMPORTED_MODULE_8__["useCallback"])(function (e) {
    e.preventDefault();

    if (!userIdCheck) {
      return alert('아이디 중복확인을 해주세요.!');
    }

    if (!nicknameCheck) {
      return alert('닉네임 중복확인을 해주세요.!');
    }

    dispatch({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_14__["SIGN_UP_REQUEST"],
      data: {
        userId: userId,
        password: password,
        nickname: nickname
      }
    });
  }, [userIdCheck, nicknameCheck, userId, password, nickname]);
  Object(react__WEBPACK_IMPORTED_MODULE_8__["useEffect"])(function () {
    if (isSignedUp) {
      next_router__WEBPACK_IMPORTED_MODULE_12___default.a.push('/');
    }
  }, [isSignedUp]);
  return __jsx(SignUpDesign, null, __jsx(Subject, null, "\uD68C\uC6D0\uAC00\uC785"), __jsx(SignUpForm, {
    onSubmit: onSubmitForm
  }, __jsx("div", null, __jsx(SDiv, null, __jsx(Label, {
    htmlFor: "user-id"
  }, "\uC544\uC774\uB514"), userIdCheck || __jsx(_components_designs_Button__WEBPACK_IMPORTED_MODULE_13__["default"], {
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
  }, "\uB2C9\uB124\uC784"), nicknameCheck || __jsx(_components_designs_Button__WEBPACK_IMPORTED_MODULE_13__["default"], {
    type: "button",
    onClick: onCheckNickname
  }, "\uC911\uBCF5\uD655\uC778")), __jsx(Input, {
    htmlFor: "user-nickname",
    name: "nickname",
    value: nickname,
    onChange: onChangeNickname,
    required: true
  })), __jsx(LoginFormButtonDiv, null, __jsx(_components_designs_Button__WEBPACK_IMPORTED_MODULE_13__["default"], {
    type: "submit",
    color: "pink"
  }, isSigningUp ? __jsx(LoadingImg, {
    src: "/static/icons/loading_pink.gif"
  }) : "\uAC00\uC785\uD558\uAE30")), __jsx(ErrorLabel, null, passwordCheckError)));
};

/* harmony default export */ __webpack_exports__["default"] = (SignUp);

/***/ })

})
//# sourceMappingURL=signup.js.bfd78e7ef46a2bcff2b2.hot-update.js.map