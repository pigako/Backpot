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
/******/ 	return __webpack_require__(__webpack_require__.s = 16);
/******/ })
/************************************************************************/
/******/ ({

/***/ "0jrB":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Dtiu");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("h74D");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("4Q3z");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("zIXN");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_designs_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("1BYw");
/* harmony import */ var _reducers_book__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("f5w3");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








const SWriteBookDiv = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "writebook__SWriteBookDiv",
  componentId: "sc-1skj1bk-0"
})(["width:98%;margin:1rem 0rem 0rem 1rem;"]);
const SWriteBookTitle = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.h1.withConfig({
  displayName: "writebook__SWriteBookTitle",
  componentId: "sc-1skj1bk-1"
})(["display:inline-block;font-weight:bold;margin-left:10px;width:100%;"]);
const FormBook = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.form.withConfig({
  displayName: "writebook__FormBook",
  componentId: "sc-1skj1bk-2"
})([""]);
const ButtonDiv = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "writebook__ButtonDiv",
  componentId: "sc-1skj1bk-3"
})(["display:flex;align-items:center;justify-content:flex-end;"]);
const DivCard = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "writebook__DivCard",
  componentId: "sc-1skj1bk-4"
})(["display:flex;align-items:center;margin:1rem;width:80%;"]);
const DivCardLeft = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "writebook__DivCardLeft",
  componentId: "sc-1skj1bk-5"
})(["flex:1;"]);
const DivCardRight = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "writebook__DivCardRight",
  componentId: "sc-1skj1bk-6"
})(["flex:4;display:flex;& > input{width:100%;height:2rem;font-size:1rem;line-height:2rem;padding-left:10px;border:solid 2px #495057;border-radius:4px;transition:0.55s ease;&:hover{border:solid 2px #148cff;}&:focus{border:solid 2px #148cff;}}"]);
const GenreDiv = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "writebook__GenreDiv",
  componentId: "sc-1skj1bk-7"
})(["display:block;flex:4;"]);
const GenreButton = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_components_designs_Button__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"]).withConfig({
  displayName: "writebook__GenreButton",
  componentId: "sc-1skj1bk-8"
})(["display:block;width:7.5rem;float:left;color:black;background:white;border:solid 2px #148cff;&:hover{color:white;}&:active{color:white;}margin:10px 10px 0px 0px;& + &{margin-left:0px;}", ""], props => {
  if (props.check) {
    return Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["css"])(["color:white;background:#148cff;"]);
  }
});
const ThumbnailDiv = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "writebook__ThumbnailDiv",
  componentId: "sc-1skj1bk-9"
})(["display:inline-block;& > img{width:200px;}& > div{display:flex;justify-content:center;}"]);
const DayDiv = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "writebook__DayDiv",
  componentId: "sc-1skj1bk-10"
})([""]);
const DayButton = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_components_designs_Button__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"]).withConfig({
  displayName: "writebook__DayButton",
  componentId: "sc-1skj1bk-11"
})(["width:2rem;padding:0;color:black;background:#ffffff;border:solid 2px #148cff;transition:0.5s ease;&:hover{color:white;}&:active{color:white;}", ""], props => {
  if (props.check) {
    return Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["css"])(["color:white;background:#148cff;"]);
  }
});
const LoadingImg = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.img.withConfig({
  displayName: "writebook__LoadingImg",
  componentId: "sc-1skj1bk-12"
})(["margin-top:4px;height:1.5rem;"]);

const WriteBook = () => {
  const editorRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
  const {
    0: editorLoded,
    1: setEditorLoded
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    CKEditor,
    ClassicEditor
  } = editorRef.current || {};
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"])();
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"])();
  const {
    thumbnailPath,
    isAddingBook,
    isAddedBook
  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(state => state.book);
  const {
    0: bookName,
    1: setBookName
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const {
    genre
  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(state => state.book);
  const {
    0: genreArr,
    1: setGenreArr
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const {
    0: serialDay,
    1: setSerialDay
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    sun: false,
    mon: false,
    tue: false,
    wed: false,
    thu: false,
    fri: false,
    sat: false
  });
  const dayName = {
    sun: '일',
    mon: '월',
    tue: '화',
    wed: '수',
    thu: '목',
    fri: '금',
    sat: '토'
  };
  const {
    sun,
    mon,
    tue,
    wed,
    thu,
    fri,
    sat
  } = serialDay;
  const {
    0: summaryText,
    1: setSummaryText
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const imageInput = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    console.log('====');
    console.log(imageInput.current.value);
    console.log('===');
  }, [imageInput.current]);
  const onClickImageUpload = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(() => {
    imageInput.current.click();
  }, [imageInput.current]);
  const onChagneImage = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(e => {
    console.log(e.target.files);
    const imageFormData = new FormData();
    [].forEach.call(e.target.files, f => {
      imageFormData.append('image', f);
    });
    console.log(imageFormData);
    dispatch({
      type: _reducers_book__WEBPACK_IMPORTED_MODULE_6__[/* UPLOAD_IMAGE_REQUEST */ "E"],
      data: imageFormData
    });
  }, []);
  const onRemoveThumbnail = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(() => {
    dispatch({
      type: _reducers_book__WEBPACK_IMPORTED_MODULE_6__[/* REMOVE_IMAGE */ "v"]
    });
    imageInput.current.value = null;
  }, [imageInput.current]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    editorRef.current = {
      CKEditor: __webpack_require__("fRMJ"),
      ClassicEditor: __webpack_require__("As6A")
    };
    setEditorLoded(true);
  }, []);
  const onChangeBookName = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(e => {
    setBookName(e.target.value);
  }, []);
  const onClickGenreButton = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(id => e => {
    if (genreArr.includes(id)) {
      setGenreArr(genreArr.filter(g => g !== id));
    } else {
      setGenreArr([...genreArr, id]);
    }
  }, [genreArr]);
  const onCancle = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(() => {
    router.back();
  }, []);
  const onSubmitForm = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(e => {
    e.preventDefault();
    const serialDayJoin = Object.keys(serialDay).reduce((acc, cur) => serialDay[cur] ? acc.concat(dayName[cur]) : acc, []).join(',');
    dispatch({
      type: _reducers_book__WEBPACK_IMPORTED_MODULE_6__[/* ADD_BOOK_REQUEST */ "b"],
      data: {
        name: bookName,
        thumbnail: thumbnailPath,
        serialDay: serialDayJoin,
        summary: summaryText,
        genre: genreArr
      }
    });
  }, [bookName, thumbnailPath, serialDay, summaryText, genreArr]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (isAddedBook) {
      console.log(imageInput);
      console.log(imageInput.current);
      console.log(imageInput.current.value);
      imageInput.current.value = null;
      console.log(imageInput.current.value);
      dispatch({
        type: _reducers_book__WEBPACK_IMPORTED_MODULE_6__[/* CHANGE_ADDEDBOOK */ "g"]
      });
      router.back();
    }
  }, [imageInput.current, isAddedBook]);
  const onChangeDay = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(e => {
    setSerialDay(_objectSpread({}, serialDay, {
      [e.target.name]: !serialDay[e.target.name]
    }));
  }, [serialDay]);
  return __jsx(SWriteBookDiv, null, __jsx(react_helmet__WEBPACK_IMPORTED_MODULE_4___default.a, null, __jsx("title", null, "\uC0C8 \uC791\uD488"), __jsx("style", {
    type: "text/css"
  }, `
            .ck.ck-editor {width:100%;}
            .ck-editor__editable { height: 500px;}
          `)), __jsx(SWriteBookTitle, null, "\uC0C8 \uC5F0\uC7AC\uC791\uD488 \uB9CC\uB4E4\uAE30"), __jsx(FormBook, {
    onSubmit: onSubmitForm
  }, __jsx(ButtonDiv, null, __jsx(_components_designs_Button__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], {
    type: "button",
    color: "pink",
    onClick: onCancle
  }, "\uCDE8\uC18C"), __jsx(_components_designs_Button__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], {
    type: "submit"
  }, isAddingBook ? __jsx(LoadingImg, {
    src: "/static/icons/loading_blue.gif"
  }) : `만들기`)), __jsx(DivCard, null, __jsx(DivCardLeft, null, __jsx("label", null, "\uC81C\uBAA9")), __jsx(DivCardRight, null, __jsx("input", {
    type: "text",
    value: bookName,
    onChange: onChangeBookName
  }))), __jsx(DivCard, null, __jsx(DivCardLeft, null, __jsx("label", null, "\uC7A5\uB974")), __jsx(GenreDiv, null, genre.map(g => {
    return __jsx(GenreButton, {
      key: +g.id,
      type: "button",
      onClick: onClickGenreButton(+g.id),
      check: genreArr.includes(+g.id)
    }, g.name);
  }))), __jsx(DivCard, null, __jsx(DivCardLeft, null, __jsx("label", null, "\uC378\uB124\uC77C")), __jsx(DivCardRight, null, __jsx("input", {
    type: "file",
    hidden: true,
    ref: imageInput,
    onChange: onChagneImage
  }), thumbnailPath ? __jsx(ThumbnailDiv, null, __jsx("img", {
    src: `http://localhost:5000/${thumbnailPath}`
  }), __jsx("div", null, __jsx(_components_designs_Button__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], {
    type: "button",
    onClick: onRemoveThumbnail
  }, "\uC81C\uAC70"))) : __jsx(_components_designs_Button__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], {
    type: "button",
    onClick: onClickImageUpload
  }, "\uC5C5\uB85C\uB4DC"))), __jsx(DivCard, null, __jsx(DivCardLeft, null, __jsx("label", null, "\uC5F0\uC7AC\uC694\uC77C")), __jsx(DivCardRight, null, __jsx(DayDiv, null, __jsx(DayButton, {
    name: "sun",
    type: "button",
    value: sun,
    onClick: onChangeDay,
    check: sun
  }, "\uC77C"), __jsx(DayButton, {
    name: "mon",
    type: "button",
    value: mon,
    onClick: onChangeDay,
    check: mon
  }, "\uC6D4"), __jsx(DayButton, {
    name: "tue",
    type: "button",
    value: tue,
    onClick: onChangeDay,
    check: tue
  }, "\uD654"), __jsx(DayButton, {
    name: "wed",
    type: "button",
    value: wed,
    onClick: onChangeDay,
    check: wed
  }, "\uC218"), __jsx(DayButton, {
    name: "thu",
    type: "button",
    value: thu,
    onClick: onChangeDay,
    check: thu
  }, "\uBAA9"), __jsx(DayButton, {
    name: "fri",
    type: "button",
    value: fri,
    onClick: onChangeDay,
    check: fri
  }, "\uAE08"), __jsx(DayButton, {
    name: "sat",
    type: "button",
    value: sat,
    onClick: onChangeDay,
    check: sat
  }, "\uD1A0")))), __jsx(DivCard, null, __jsx(DivCardLeft, null, __jsx("label", null, "\uC791\uD488\uC124\uBA85")), __jsx(DivCardRight, null, editorLoded ? __jsx(CKEditor, {
    editor: ClassicEditor,
    data: summaryText,
    onChange: (event, editor) => {
      const data = editor.getData();
      setSummaryText(data);
    }
  }) : __jsx("p", null, "Editor Loding")))));
};

WriteBook.getInitialProps = async context => {
  context.store.dispatch({
    type: _reducers_book__WEBPACK_IMPORTED_MODULE_6__[/* LOAD_GENRE_REQUEST */ "t"]
  });
};

/* harmony default export */ __webpack_exports__["default"] = (WriteBook);

/***/ }),

/***/ 16:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("0jrB");


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

/***/ "As6A":
/***/ (function(module, exports) {

module.exports = require("@ckeditor/ckeditor5-build-classic");

/***/ }),

/***/ "Dtiu":
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),

/***/ "T5ka":
/***/ (function(module, exports) {

module.exports = require("immer");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

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

/***/ "fRMJ":
/***/ (function(module, exports) {

module.exports = require("@ckeditor/ckeditor5-react");

/***/ }),

/***/ "h74D":
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "zIXN":
/***/ (function(module, exports) {

module.exports = require("react-helmet");

/***/ })

/******/ });