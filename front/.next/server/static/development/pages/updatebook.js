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
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
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

/***/ "./pages/updatebook.js":
/*!*****************************!*\
  !*** ./pages/updatebook.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-helmet */ "react-helmet");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_designs_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/designs/Button */ "./components/designs/Button.js");
/* harmony import */ var _reducers_book__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../reducers/book */ "./reducers/book.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








const SUpdateBookDiv = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "updatebook__SUpdateBookDiv",
  componentId: "sc-1dwygpe-0"
})(["width:98%;margin:1rem 0rem 0rem 1rem;"]);
const SUpdateBookTitle = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.h1.withConfig({
  displayName: "updatebook__SUpdateBookTitle",
  componentId: "sc-1dwygpe-1"
})(["display:inline-block;font-weight:bold;margin-left:10px;width:100%;"]);
const FormBook = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.form.withConfig({
  displayName: "updatebook__FormBook",
  componentId: "sc-1dwygpe-2"
})([""]);
const ButtonDiv = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "updatebook__ButtonDiv",
  componentId: "sc-1dwygpe-3"
})(["display:flex;align-items:center;justify-content:flex-end;"]);
const DivCard = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "updatebook__DivCard",
  componentId: "sc-1dwygpe-4"
})(["display:flex;align-items:center;margin:1rem;width:80%;"]);
const DivCardLeft = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "updatebook__DivCardLeft",
  componentId: "sc-1dwygpe-5"
})(["flex:1;"]);
const DivCardRight = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "updatebook__DivCardRight",
  componentId: "sc-1dwygpe-6"
})(["flex:4;display:flex;& > input{width:100%;height:2rem;font-size:1rem;line-height:2rem;padding-left:10px;border:solid 2px #495057;border-radius:4px;transition:0.55s ease;&:hover{border:solid 2px #148cff;}&:focus{border:solid 2px #148cff;}}"]);
const GenreDiv = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "updatebook__GenreDiv",
  componentId: "sc-1dwygpe-7"
})(["display:block;flex:4;"]);
const GenreButton = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_components_designs_Button__WEBPACK_IMPORTED_MODULE_5__["default"]).withConfig({
  displayName: "updatebook__GenreButton",
  componentId: "sc-1dwygpe-8"
})(["display:block;width:7.5rem;float:left;color:black;background:white;border:solid 2px #148cff;&:hover{color:white;}&:active{color:white;}margin:10px 10px 0px 0px;& + &{margin-left:0px;}", ""], props => {
  if (props.check) {
    return Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["css"])(["color:white;background:#148cff;"]);
  }
});
const ThumbnailDiv = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "updatebook__ThumbnailDiv",
  componentId: "sc-1dwygpe-9"
})(["display:inline-block;& > img{width:200px;}& > div{display:flex;justify-content:center;}"]);
const DayDiv = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "updatebook__DayDiv",
  componentId: "sc-1dwygpe-10"
})([""]);
const DayButton = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_components_designs_Button__WEBPACK_IMPORTED_MODULE_5__["default"]).withConfig({
  displayName: "updatebook__DayButton",
  componentId: "sc-1dwygpe-11"
})(["width:2rem;padding:0;color:black;background:#ffffff;border:solid 2px #148cff;transition:0.5s ease;&:hover{color:white;}&:active{color:white;}", ""], props => {
  if (props.check) {
    return Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["css"])(["color:white;background:#148cff;"]);
  }
});
const LoadingImg = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.img.withConfig({
  displayName: "updatebook__LoadingImg",
  componentId: "sc-1dwygpe-12"
})(["margin-top:4px;height:1.5rem;"]);

const UpdateBook = () => {
  const editorRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
  const {
    0: editorLoded,
    1: setEditorLoded
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    CKEditor,
    ClassicEditor
  } = editorRef.current || {};
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useDispatch"])();
  const {
    thumbnailPath,
    isUpdatedBook,
    book
  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"])(state => state.book);
  const {
    0: bookName,
    1: setBookName
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(book && book.name);
  const {
    genre
  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"])(state => state.book);
  const {
    0: genreArr,
    1: setGenreArr
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(book && book.BookGenre.reduce((acc, cur) => acc.concat(cur.id), []));
  const checkDay = book && book.serialDay.split(',');
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
    0: serialDay,
    1: setSerialDay
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    sun: checkDay.includes(dayName.sun),
    mon: checkDay.includes(dayName.mon),
    tue: checkDay.includes(dayName.tue),
    wed: checkDay.includes(dayName.wed),
    thu: checkDay.includes(dayName.thu),
    fri: checkDay.includes(dayName.fri),
    sat: checkDay.includes(dayName.sat)
  });
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
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(book && book.summary);
  const imageInput = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
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
      type: _reducers_book__WEBPACK_IMPORTED_MODULE_6__["UPLOAD_IMAGE_REQEUST"],
      data: imageFormData
    });
  }, []);
  const onRemoveThumbnail = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(() => {
    if (book && book.thumbnail) {
      dispatch({
        type: _reducers_book__WEBPACK_IMPORTED_MODULE_6__["REMOVE_THUMBNAIL"]
      });
    } else {
      dispatch({
        type: _reducers_book__WEBPACK_IMPORTED_MODULE_6__["REMOVE_IMAGE"]
      });
      imageInput.current.value = null;
    }
  }, [book && book.thumbnail, imageInput.current]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    editorRef.current = {
      CKEditor: __webpack_require__(/*! @ckeditor/ckeditor5-react */ "@ckeditor/ckeditor5-react"),
      ClassicEditor: __webpack_require__(/*! @ckeditor/ckeditor5-build-classic */ "@ckeditor/ckeditor5-build-classic")
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
    next_router__WEBPACK_IMPORTED_MODULE_3___default.a.back();
  }, []);
  const onSubmitForm = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(e => {
    e.preventDefault();
    const serialDayJoin = Object.keys(serialDay).reduce((acc, cur) => serialDay[cur] ? acc.concat(dayName[cur]) : acc, []).join(','); // dispatch({
    //   type: ADD_BOOK_REQEUST,
    //   data: {
    //     name: bookName,
    //     thumbnail: thumbnailPath,
    //     serialDay: serialDayJoin,
    //     summary: summaryText,
    //     genre: genreArr,
    //   },
    // });
  }, [bookName, thumbnailPath, serialDay, summaryText]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (isUpdatedBook) {
      dispatch({
        type: CHANGE_UPDATEDBOOK
      });
      next_router__WEBPACK_IMPORTED_MODULE_3___default.a.push('/booklist');
    }
  }, [isUpdatedBook]);
  const onChangeDay = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(e => {
    setSerialDay(_objectSpread({}, serialDay, {
      [e.target.name]: !serialDay[e.target.name]
    }));
  }, [serialDay]);
  return __jsx(SUpdateBookDiv, null, __jsx(react_helmet__WEBPACK_IMPORTED_MODULE_2___default.a, null, __jsx("title", null, "\uC5F0\uC7AC\uC791\uD488 \uC218\uC815"), __jsx("style", {
    type: "text/css"
  }, `
            .ck.ck-editor {width:100%;}
            .ck-editor__editable { height: 500px;}
          `)), __jsx(SUpdateBookTitle, null, "\uC5F0\uC7AC\uC791\uD488 \uC218\uC815"), __jsx(FormBook, {
    onSubmit: onSubmitForm
  }, __jsx(ButtonDiv, null, __jsx(_components_designs_Button__WEBPACK_IMPORTED_MODULE_5__["default"], {
    type: "button",
    color: "pink",
    onClick: onCancle
  }, "\uCDE8\uC18C"), __jsx(_components_designs_Button__WEBPACK_IMPORTED_MODULE_5__["default"], {
    type: "submit"
  }, isUpdatingBook ? __jsx(LoadingImg, {
    src: "/static/icons/loading_blue.gif"
  }) : `수정`)), __jsx(DivCard, null, __jsx(DivCardLeft, null, __jsx("label", null, "\uC81C\uBAA9")), __jsx(DivCardRight, null, __jsx("input", {
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
  }), book && book.thumbnail ? __jsx(ThumbnailDiv, null, __jsx("img", {
    src: `http://localhost:5000/${book.thumbnail}`
  }), __jsx("div", null, __jsx(_components_designs_Button__WEBPACK_IMPORTED_MODULE_5__["default"], {
    type: "button",
    onClick: onRemoveThumbnail
  }, "\uC81C\uAC70"))) : thumbnailPath ? __jsx(ThumbnailDiv, null, __jsx("img", {
    src: `http://localhost:5000/${thumbnailPath}`
  }), __jsx("div", null, __jsx(_components_designs_Button__WEBPACK_IMPORTED_MODULE_5__["default"], {
    type: "button",
    onClick: onRemoveThumbnail
  }, "\uC81C\uAC70"))) : __jsx(_components_designs_Button__WEBPACK_IMPORTED_MODULE_5__["default"], {
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

UpdateBook.getInitialProps = async context => {
  context.store.dispatch({
    type: _reducers_book__WEBPACK_IMPORTED_MODULE_6__["LOAD_GENRE_REQUEST"]
  });
  context.store.dispatch({
    type: _reducers_book__WEBPACK_IMPORTED_MODULE_6__["LOAD_BOOK_REQUEST"],
    id: context.query.bookid
  });
};

/* harmony default export */ __webpack_exports__["default"] = (UpdateBook);

/***/ }),

/***/ "./reducers/book.js":
/*!**************************!*\
  !*** ./reducers/book.js ***!
  \**************************/
/*! exports provided: initalState, LOAD_BOOKS_REQUEST, LOAD_BOOKS_SUCCESS, LOAD_BOOKS_FAILURE, LOAD_BOOK_REQUEST, LOAD_BOOK_SUCCESS, LOAD_BOOK_FAILURE, ADD_LIKEBOOK_REQUEST, ADD_LIKEBOOK_SUCCESS, ADD_LIKEBOOK_FAILURE, REMOVE_LIKEBOOK_REQUEST, REMOVE_LIKEBOOK_SUCCESS, REMOVE_LIKEBOOK_FAILURE, ADD_BOOK_REQEUST, ADD_BOOK_SUCCESS, ADD_BOOK_FAILURE, LOAD_GENRE_REQUEST, LOAD_GENRE_SUCCESS, LOAD_GENRE_FAILURE, CHANGE_ADDEDBOOK, UPLOAD_IMAGE_REQEUST, UPLOAD_IMAGE_SUCCESS, UPLOAD_IMAGE_FAILURE, REMOVE_THUMBNAIL, REMOVE_IMAGE, UPDATE_BOOK_REQUEST, UPDATE_BOOK_SUCCESS, UPDATE_BOOK_FAILURE, CHANGE_UPDATEDBOOK, DELETE_BOOK_REQUEST, DELETE_BOOK_SUCCESS, DELETE_BOOK_FAILURE, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initalState", function() { return initalState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_BOOKS_REQUEST", function() { return LOAD_BOOKS_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_BOOKS_SUCCESS", function() { return LOAD_BOOKS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_BOOKS_FAILURE", function() { return LOAD_BOOKS_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_BOOK_REQUEST", function() { return LOAD_BOOK_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_BOOK_SUCCESS", function() { return LOAD_BOOK_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_BOOK_FAILURE", function() { return LOAD_BOOK_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_LIKEBOOK_REQUEST", function() { return ADD_LIKEBOOK_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_LIKEBOOK_SUCCESS", function() { return ADD_LIKEBOOK_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_LIKEBOOK_FAILURE", function() { return ADD_LIKEBOOK_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_LIKEBOOK_REQUEST", function() { return REMOVE_LIKEBOOK_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_LIKEBOOK_SUCCESS", function() { return REMOVE_LIKEBOOK_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_LIKEBOOK_FAILURE", function() { return REMOVE_LIKEBOOK_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_BOOK_REQEUST", function() { return ADD_BOOK_REQEUST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_BOOK_SUCCESS", function() { return ADD_BOOK_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_BOOK_FAILURE", function() { return ADD_BOOK_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_GENRE_REQUEST", function() { return LOAD_GENRE_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_GENRE_SUCCESS", function() { return LOAD_GENRE_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_GENRE_FAILURE", function() { return LOAD_GENRE_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHANGE_ADDEDBOOK", function() { return CHANGE_ADDEDBOOK; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPLOAD_IMAGE_REQEUST", function() { return UPLOAD_IMAGE_REQEUST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPLOAD_IMAGE_SUCCESS", function() { return UPLOAD_IMAGE_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPLOAD_IMAGE_FAILURE", function() { return UPLOAD_IMAGE_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_THUMBNAIL", function() { return REMOVE_THUMBNAIL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_IMAGE", function() { return REMOVE_IMAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_BOOK_REQUEST", function() { return UPDATE_BOOK_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_BOOK_SUCCESS", function() { return UPDATE_BOOK_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_BOOK_FAILURE", function() { return UPDATE_BOOK_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHANGE_UPDATEDBOOK", function() { return CHANGE_UPDATEDBOOK; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DELETE_BOOK_REQUEST", function() { return DELETE_BOOK_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DELETE_BOOK_SUCCESS", function() { return DELETE_BOOK_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DELETE_BOOK_FAILURE", function() { return DELETE_BOOK_FAILURE; });
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! immer */ "immer");
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(immer__WEBPACK_IMPORTED_MODULE_0__);

const initalState = {
  books: [],
  book: null,
  genre: [],
  isAddingLikeBook: false,
  isRemovingLikeBook: false,
  thumbnailPath: '',
  isAddingBook: false,
  isAddedBook: false,
  isUpdatingBook: false,
  isUpdatedBook: false
};
const LOAD_BOOKS_REQUEST = `LOAD_BOOKS_REQUEST`;
const LOAD_BOOKS_SUCCESS = `LOAD_BOOKS_SUCCESS`;
const LOAD_BOOKS_FAILURE = `LOAD_BOOKS_FAILURE`;
const LOAD_BOOK_REQUEST = `LOAD_BOOK_REQUEST`;
const LOAD_BOOK_SUCCESS = `LOAD_BOOK_SUCCESS`;
const LOAD_BOOK_FAILURE = `LOAD_BOOK_FAILURE`;
const ADD_LIKEBOOK_REQUEST = `ADD_LIKEBOOK_REQUEST`;
const ADD_LIKEBOOK_SUCCESS = `ADD_LIKEBOOK_SUCCESS`;
const ADD_LIKEBOOK_FAILURE = `ADD_LIKEBOOK_FAILURE`;
const REMOVE_LIKEBOOK_REQUEST = `REMOVE_LIKEBOOK_REQUEST`;
const REMOVE_LIKEBOOK_SUCCESS = `REMOVE_LIKEBOOK_SUCCESS`;
const REMOVE_LIKEBOOK_FAILURE = `REMOVE_LIKEBOOK_FAILURE`;
const ADD_BOOK_REQEUST = `ADD_BOOK_REQEUST`;
const ADD_BOOK_SUCCESS = `ADD_BOOK_SUCCESS`;
const ADD_BOOK_FAILURE = `ADD_BOOK_FAILURE`;
const LOAD_GENRE_REQUEST = `LOAD_GENRE_REQUEST`;
const LOAD_GENRE_SUCCESS = `LOAD_GENRE_SUCCESS`;
const LOAD_GENRE_FAILURE = `LOAD_GENRE_FAILURE`;
const CHANGE_ADDEDBOOK = `CHANGE_ADDEDBOOK`;
const UPLOAD_IMAGE_REQEUST = `UPLOAD_IMAGE_REQEUST`;
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

const reducer = (state = initalState, action) => {
  return immer__WEBPACK_IMPORTED_MODULE_0___default()(state, draft => {
    switch (action.type) {
      // 전체 작품 조회
      case LOAD_BOOKS_REQUEST:
        {
          draft.books = !action.lastId ? [] : draft.books;
          draft.hasMoreBooks = action.lastId ? draft.hasMoreBooks : true;
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

      case ADD_BOOK_REQEUST:
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

      case UPLOAD_IMAGE_REQEUST:
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
          break;
        }

      case DELETE_BOOK_REQUEST:
        {
          break;
        }

      case DELETE_BOOK_SUCCESS:
        {
          break;
        }

      case DELETE_BOOK_FAILURE:
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

/* harmony default export */ __webpack_exports__["default"] = (reducer);

/***/ }),

/***/ 7:
/*!***********************************!*\
  !*** multi ./pages/updatebook.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Document\Backpot\front\pages\updatebook.js */"./pages/updatebook.js");


/***/ }),

/***/ "@ckeditor/ckeditor5-build-classic":
/*!****************************************************!*\
  !*** external "@ckeditor/ckeditor5-build-classic" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@ckeditor/ckeditor5-build-classic");

/***/ }),

/***/ "@ckeditor/ckeditor5-react":
/*!********************************************!*\
  !*** external "@ckeditor/ckeditor5-react" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@ckeditor/ckeditor5-react");

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

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-helmet":
/*!*******************************!*\
  !*** external "react-helmet" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-helmet");

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
//# sourceMappingURL=updatebook.js.map