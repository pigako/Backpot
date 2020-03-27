webpackHotUpdate("static\\development\\pages\\profile.js",{

/***/ "./pages/profile.js":
/*!**************************!*\
  !*** ./pages/profile.js ***!
  \**************************/
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
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _components_designs_Button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../components/designs/Button */ "./components/designs/Button.js");
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../reducers/user */ "./reducers/user.js");








var __jsx = react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default()(object); if (_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default.a) { var symbols = _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default()(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(target, key, source[key]); }); } else if (_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default.a) { _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default()(target, _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default()(source)); } else { ownKeys(Object(source)).forEach(function (key) { _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, key, _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(source, key)); }); } } return target; }









var SProfileDiv = styled_components__WEBPACK_IMPORTED_MODULE_10__["default"].div.withConfig({
  displayName: "profile__SProfileDiv",
  componentId: "sc-1n71nmh-0"
})(["width:98%;margin-top:10px;"]);
var ProfileTitle = styled_components__WEBPACK_IMPORTED_MODULE_10__["default"].h1.withConfig({
  displayName: "profile__ProfileTitle",
  componentId: "sc-1n71nmh-1"
})(["display:inline-block;font-weight:bold;margin-left:10px;width:100%;"]);
var InfoCardWrap = styled_components__WEBPACK_IMPORTED_MODULE_10__["default"].div.withConfig({
  displayName: "profile__InfoCardWrap",
  componentId: "sc-1n71nmh-2"
})(["margin-top:2rem;margin-left:1.5rem;border:solid 1px #495057;border-radius:6px;width:70%;"]);
var InfoCardDiv = styled_components__WEBPACK_IMPORTED_MODULE_10__["default"].div.withConfig({
  displayName: "profile__InfoCardDiv",
  componentId: "sc-1n71nmh-3"
})(["display:flex;align-items:center;margin:1rem;height:4rem;"]);
var InfoLeftDiv = styled_components__WEBPACK_IMPORTED_MODULE_10__["default"].div.withConfig({
  displayName: "profile__InfoLeftDiv",
  componentId: "sc-1n71nmh-4"
})(["flex:1;"]);
var InfoRightDiv = styled_components__WEBPACK_IMPORTED_MODULE_10__["default"].div.withConfig({
  displayName: "profile__InfoRightDiv",
  componentId: "sc-1n71nmh-5"
})(["flex:3;display:flex;& > input{width:100%;height:2rem;font-size:1rem;line-height:2rem;padding-left:10px;border:solid 2px #495057;border-radius:4px;transition:0.55s ease;&:hover{border:solid 2px #148cff;}&:focus{border:solid 2px #148cff;}}"]);
var CheckButton = Object(styled_components__WEBPACK_IMPORTED_MODULE_10__["default"])(_components_designs_Button__WEBPACK_IMPORTED_MODULE_14__["default"]).withConfig({
  displayName: "profile__CheckButton",
  componentId: "sc-1n71nmh-6"
})(["width:8rem;height:2rem;margin-left:10px;"]);
var ButtonDiv = styled_components__WEBPACK_IMPORTED_MODULE_10__["default"].div.withConfig({
  displayName: "profile__ButtonDiv",
  componentId: "sc-1n71nmh-7"
})(["margin:1rem;height:4rem;"]);
var SButton = Object(styled_components__WEBPACK_IMPORTED_MODULE_10__["default"])(_components_designs_Button__WEBPACK_IMPORTED_MODULE_14__["default"]).withConfig({
  displayName: "profile__SButton",
  componentId: "sc-1n71nmh-8"
})(["display:block;width:8rem;margin-top:1rem;float:right;"]);

var Profile = function Profile(_ref) {
  var id = _ref.id;

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_13__["useSelector"])(function (state) {
    return state.user;
  }),
      me = _useSelector.me,
      isUpdating = _useSelector.isUpdating,
      isUpdated = _useSelector.isUpdated;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_8__["useState"])({
    userId: '',
    userNickname: '',
    newUserPassword: '',
    newUserPasswordCheck: ''
  }),
      inputs = _useState[0],
      setInputs = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_8__["useState"])(false),
      checkUserId = _useState2[0],
      setCheckUserId = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_8__["useState"])(false),
      checkUserNickname = _useState3[0],
      setCheckUserNickname = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_8__["useState"])(false),
      checkUserPassword = _useState4[0],
      setCheckUserPassword = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_8__["useState"])(''),
      passwordErrorReason = _useState5[0],
      setPasswordErrorReason = _useState5[1];

  var userId = inputs.userId,
      userNickname = inputs.userNickname,
      newUserPassword = inputs.newUserPassword,
      newUserPasswordCheck = inputs.newUserPasswordCheck;
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_13__["useDispatch"])();
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_11__["useRouter"])();
  var onChangeInputs = Object(react__WEBPACK_IMPORTED_MODULE_8__["useCallback"])(function (e) {
    if (e.target.name === 'newUserPasswordCheck') {
      if (e.target.value !== newUserPassword) {
        setPasswordErrorReason('비밀번호가 일치하지 않습니다.');
      } else {
        setPasswordErrorReason('');
      }
    }

    setInputs(_objectSpread({}, inputs, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])({}, e.target.name, e.target.value)));
  }, [inputs]);
  Object(react__WEBPACK_IMPORTED_MODULE_8__["useEffect"])(function (e) {
    if (isUpdated) {
      dispatch({
        type: _reducers_user__WEBPACK_IMPORTED_MODULE_15__["CHANGE_UPDATED"]
      });
      setCheckUserPassword(false);
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
      }, "/profile/".concat(me.userId));
      return;
    }
  }, [isUpdated, me && me.userId, id]);
  var onCheck = Object(react__WEBPACK_IMPORTED_MODULE_8__["useCallback"])(function _callee(e) {
    var result, _result;

    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_6___default.a.async(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (!(e.target.name === 'checkUserId')) {
              _context.next = 10;
              break;
            }

            if (userId.trim()) {
              _context.next = 4;
              break;
            }

            alert('수정 사항이 없습니다.');
            return _context.abrupt("return");

          case 4:
            _context.next = 6;
            return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_6___default.a.awrap(axios__WEBPACK_IMPORTED_MODULE_12___default.a.post("/user/check", {
              type: 'userId',
              userId: userId
            }));

          case 6:
            result = _context.sent;

            if (result.data) {
              setCheckUserId(true);
              alert('사용 가능한 아이디입니다.');
            } else {
              alert('이미 사용중인 아이디입니다.');
            }

            _context.next = 16;
            break;

          case 10:
            if (!(e.target.name === 'checkUserNickname')) {
              _context.next = 16;
              break;
            }

            if (!userNickname.trim()) {
              alert('수정 사항이 없습니다.');
            }

            _context.next = 14;
            return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_6___default.a.awrap(axios__WEBPACK_IMPORTED_MODULE_12___default.a.post("/user/check", {
              type: 'userNickname',
              userNickname: userNickname
            }));

          case 14:
            _result = _context.sent;

            if (_result.data) {
              setCheckUserNickname(true);
              alert('사용 가능한 닉네임입니다.');
            } else {
              alert('이미 사용중인 닉네임입니다.');
            }

          case 16:
          case "end":
            return _context.stop();
        }
      }
    });
  }, [userId, userNickname]);
  var onUpdatePassword = Object(react__WEBPACK_IMPORTED_MODULE_8__["useCallback"])(function (e) {
    if (!checkUserPassword) {
      setCheckUserPassword(true);
    }
  }, [checkUserPassword]);
  var onUpdateProfile = Object(react__WEBPACK_IMPORTED_MODULE_8__["useCallback"])(function (e) {
    if (!(userId || userNickname)) {
      alert('수정 사항이 없습니다.');
      return;
    }

    if (passwordErrorReason !== '') {
      alert('패스워드가 일치하지 않습니다.');
    }

    if (userId && !checkUserId) {
      alert('아이디 중복확인을 해주세요.');
    }

    if (userNickname && !checkUserNickname) {
      alert('닉네임 중복확인을 해주세요.');
    }

    dispatch({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_15__["UPDATE_USER_REQUEST"],
      data: {
        userId: userId,
        newUserPassword: newUserPassword,
        userNickname: userNickname
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
  })) : __jsx(InfoRightDiv, null, __jsx(_components_designs_Button__WEBPACK_IMPORTED_MODULE_14__["default"], {
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
  id: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.string.isRequired
};

Profile.getInitialProps = function _callee2(context) {
  var id;
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_6___default.a.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          id = context.query.id;
          return _context2.abrupt("return", {
            id: id
          });

        case 2:
        case "end":
          return _context2.stop();
      }
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Profile);

/***/ })

})
//# sourceMappingURL=profile.js.5d92575f373bfa6c290d.hot-update.js.map