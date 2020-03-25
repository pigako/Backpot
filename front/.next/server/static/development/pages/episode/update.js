module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
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

/***/ "./pages/episode/update.js":
/*!*********************************!*\
  !*** ./pages/episode/update.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-helmet */ "react-helmet");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_designs_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/designs/Button */ "./components/designs/Button.js");
/* harmony import */ var _reducers_episode__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../reducers/episode */ "./reducers/episode.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







const UpdateEpisodeDiv = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "update__UpdateEpisodeDiv",
  componentId: "nxzyol-0"
})(["width:98%;margin:1rem 0rem 0rem 1rem;"]);
const UpdateEpisodeTopDiv = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "update__UpdateEpisodeTopDiv",
  componentId: "nxzyol-1"
})(["position:relative;margin-bottom:2rem;"]);
const BookTitle = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.h1.withConfig({
  displayName: "update__BookTitle",
  componentId: "nxzyol-2"
})(["font-weight:bold;font-size:1rem;margin-bottom:1rem;"]);
const TopButtonDiv = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "update__TopButtonDiv",
  componentId: "nxzyol-3"
})(["display:flex;position:absolute;top:5%;right:1%;"]);
const EpisodeForm = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.form.withConfig({
  displayName: "update__EpisodeForm",
  componentId: "nxzyol-4"
})([""]);
const UpdateEpisodeContentDiv = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "update__UpdateEpisodeContentDiv",
  componentId: "nxzyol-5"
})(["margin:1.5rem;"]);
const DivCard = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "update__DivCard",
  componentId: "nxzyol-6"
})(["display:flex;align-items:center;margin:1rem;width:100%;"]);
const DivCardLeft = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "update__DivCardLeft",
  componentId: "nxzyol-7"
})(["flex:1;"]);
const DivCardRight = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "update__DivCardRight",
  componentId: "nxzyol-8"
})(["flex:4;display:flex;& > input{width:calc(100% - 2rem);height:2rem;font-size:1rem;line-height:2rem;padding-left:10px;border:solid 2px #495057;border-radius:4px;transition:0.55s ease;&:hover{border:solid 2px #148cff;}&:focus{border:solid 2px #148cff;}}"]);
const CheckBox = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.input.withConfig({
  displayName: "update__CheckBox",
  componentId: "nxzyol-9"
})(["width:1.5rem !important;height:1.5rem !important;"]);
const UpdateEditorDiv = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "update__UpdateEditorDiv",
  componentId: "nxzyol-10"
})(["margin:1rem;& > label{width:100%;display:inline-block;margin-bottom:1rem;padding-bottom:1rem;border-bottom:solid 2px #495057;}"]);
const LoadingImg = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.img.withConfig({
  displayName: "update__LoadingImg",
  componentId: "nxzyol-11"
})(["margin-top:4px;height:1.5rem;"]);

const Update = () => {
  const {
    episode,
    isUpdatingEpisode,
    isUpdatedEpisode
  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(state => state.episode);
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"])();
  const {
    0: checkNotice,
    1: setCheckNotice
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(episode && episode.isNotice === 1 ? true : false);
  const {
    0: title,
    1: setTitle
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(episode && episode.title);
  const {
    0: text,
    1: setText
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(episode && episode.content.split('<br/><br/><p><strong>작가의 말</strong><hr><br/>')[0]);
  const {
    0: writerComment,
    1: setWriterComment
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(episode && episode.content.split('<br/><br/><p><strong>작가의 말</strong><hr><br/>')[1] || '');
  const onChangeCheckNotice = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(() => {
    setCheckNotice(!checkNotice);
  }, [checkNotice]);
  const onChangeTitle = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(e => {
    setTitle(e.target.value);
  }, []);
  const editorRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
  const {
    0: editorLoded,
    1: setEditorLoded
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    CKEditor,
    ClassicEditor
  } = editorRef.current || {};
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    editorRef.current = {
      CKEditor: __webpack_require__(/*! @ckeditor/ckeditor5-react */ "@ckeditor/ckeditor5-react"),
      ClassicEditor: __webpack_require__(/*! @ckeditor/ckeditor5-build-classic */ "@ckeditor/ckeditor5-build-classic")
    };
    setEditorLoded(true);
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (isUpdatedEpisode) {
      dispatch({
        type: _reducers_episode__WEBPACK_IMPORTED_MODULE_6__["CHANGE_UPDATEDEPISODE"]
      });
      next_router__WEBPACK_IMPORTED_MODULE_4___default.a.push({
        pathname: `/episode`,
        query: {
          id: episode.id
        }
      }, `/episode/${episode.id}`);
    }
  }, [isUpdatedEpisode, episode && episode.id]);
  const onCancleUpdate = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(() => {
    next_router__WEBPACK_IMPORTED_MODULE_4___default.a.back();
  }, []); //

  const onWriteEpisode = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(e => {
    e.preventDefault();
    const episodeContent = text + '<br/><br/><p><strong>작가의 말</strong><hr><br/>' + writerComment;
    dispatch({
      type: _reducers_episode__WEBPACK_IMPORTED_MODULE_6__["UPDATE_EPISODE_REQUEST"],
      data: {
        id: episode && episode.id,
        title: title,
        content: episodeContent,
        notice: checkNotice ? 1 : 0
      }
    });
  }, [episode && episode.id, checkNotice, title, text, writerComment]);
  return __jsx(UpdateEpisodeDiv, null, __jsx(react_helmet__WEBPACK_IMPORTED_MODULE_3___default.a, null, __jsx("title", null, episode && episode.title), __jsx("style", {
    type: "text/css"
  }, `
            .ck.ck-editor {width:100%;}
            .ck-editor__editable { height: 500px;}
          `)), __jsx(EpisodeForm, {
    onSubmit: onWriteEpisode
  }, __jsx(UpdateEpisodeTopDiv, null, __jsx(BookTitle, null, episode && episode.title), __jsx(TopButtonDiv, null, __jsx(_components_designs_Button__WEBPACK_IMPORTED_MODULE_5__["default"], {
    color: "pink",
    type: "button",
    onClick: onCancleUpdate
  }, "\uCDE8\uC18C"), __jsx(_components_designs_Button__WEBPACK_IMPORTED_MODULE_5__["default"], {
    type: "submit"
  }, isUpdatingEpisode ? __jsx(LoadingImg, {
    src: "/static/icons/loading_blue.gif"
  }) : '수정'))), __jsx(UpdateEpisodeContentDiv, null, __jsx(DivCard, null, __jsx(DivCardLeft, null, __jsx("label", null, "\uC774 \uAE00\uC744 \uACF5\uC9C0\uB85C \uC791\uC131")), __jsx(DivCardRight, null, __jsx(CheckBox, {
    type: "checkbox",
    value: checkNotice,
    onChange: onChangeCheckNotice
  }))), __jsx(DivCard, null, __jsx(DivCardLeft, null, __jsx("label", null, "\uC81C\uBAA9")), __jsx(DivCardRight, null, __jsx("input", {
    type: "text",
    value: title,
    onChange: onChangeTitle
  }))), __jsx(UpdateEditorDiv, null, __jsx("label", null, "\uBCF8\uBB38"), editorLoded ? __jsx(CKEditor, {
    editor: ClassicEditor,
    data: text,
    onChange: (event, editor) => {
      const data = editor.getData();
      setText(data);
    }
  }) : __jsx("p", null, "Editor Loding")), __jsx(UpdateEditorDiv, null, __jsx("label", null, "\uC791\uAC00\uC758 \uB9D0"), editorLoded ? __jsx(CKEditor, {
    editor: ClassicEditor,
    data: writerComment,
    onChange: (event, editor) => {
      const data = editor.getData();
      setWriterComment(data);
    }
  }) : __jsx("p", null, "Editor Loding")))));
};

Update.getInitialProps = async context => {
  const episodeId = context.query.episodeid;
  context.store.dispatch({
    type: _reducers_episode__WEBPACK_IMPORTED_MODULE_6__["LOAD_EPISODE_REQUEST"],
    id: episodeId
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Update);

/***/ }),

/***/ "./reducers/episode.js":
/*!*****************************!*\
  !*** ./reducers/episode.js ***!
  \*****************************/
/*! exports provided: initalState, LOAD_EPISODE_REQUEST, LOAD_EPISODE_SUCCESS, LOAD_EPISODE_FAILURE, ADD_EPISODE_REQUEST, ADD_EPISODE_SUCCESS, ADD_EPISODE_FAILURE, CHANGE_ADDEDEPISODE, ADD_RECOMMEND_REQUEST, ADD_RECOMMEND_SUCCESS, ADD_RECOMMEND_FAILURE, UPDATE_EPISODE_REQUEST, UPDATE_EPISODE_SUCCESS, UPDATE_EPISODE_FAILURE, CHANGE_UPDATEDEPISODE, DELETE_EPISODE_REQUEST, DELETE_EPISODE_SUCCESS, DELETE_EPISODE_FAILURE, CHANGE_DELETEDEPISODE, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initalState", function() { return initalState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_EPISODE_REQUEST", function() { return LOAD_EPISODE_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_EPISODE_SUCCESS", function() { return LOAD_EPISODE_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_EPISODE_FAILURE", function() { return LOAD_EPISODE_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_EPISODE_REQUEST", function() { return ADD_EPISODE_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_EPISODE_SUCCESS", function() { return ADD_EPISODE_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_EPISODE_FAILURE", function() { return ADD_EPISODE_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHANGE_ADDEDEPISODE", function() { return CHANGE_ADDEDEPISODE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_RECOMMEND_REQUEST", function() { return ADD_RECOMMEND_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_RECOMMEND_SUCCESS", function() { return ADD_RECOMMEND_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_RECOMMEND_FAILURE", function() { return ADD_RECOMMEND_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_EPISODE_REQUEST", function() { return UPDATE_EPISODE_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_EPISODE_SUCCESS", function() { return UPDATE_EPISODE_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_EPISODE_FAILURE", function() { return UPDATE_EPISODE_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHANGE_UPDATEDEPISODE", function() { return CHANGE_UPDATEDEPISODE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DELETE_EPISODE_REQUEST", function() { return DELETE_EPISODE_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DELETE_EPISODE_SUCCESS", function() { return DELETE_EPISODE_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DELETE_EPISODE_FAILURE", function() { return DELETE_EPISODE_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHANGE_DELETEDEPISODE", function() { return CHANGE_DELETEDEPISODE; });
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! immer */ "immer");
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(immer__WEBPACK_IMPORTED_MODULE_0__);

const initalState = {
  episode: null,
  isAddingEpisode: false,
  isAddedEpisode: false,
  isRecommending: false,
  isUpdatingEpisode: false,
  isUpdatedEpisode: false,
  isDeletingEpisode: false,
  isDeletedEpisode: false
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

      default:
        {
          break;
        }
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (reducer);

/***/ }),

/***/ 8:
/*!***************************************!*\
  !*** multi ./pages/episode/update.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Document\Backpot\front\pages\episode\update.js */"./pages/episode/update.js");


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
//# sourceMappingURL=update.js.map