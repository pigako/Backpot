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
/******/ 	return __webpack_require__(__webpack_require__.s = 9);
/******/ })
/************************************************************************/
/******/ ({

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

/***/ 9:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("z1+5");


/***/ }),

/***/ "As6A":
/***/ (function(module, exports) {

module.exports = require("@ckeditor/ckeditor5-build-classic");

/***/ }),

/***/ "Dtiu":
/***/ (function(module, exports) {

module.exports = require("styled-components");

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

/***/ "z1+5":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Dtiu");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("h74D");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("zIXN");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("4Q3z");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_designs_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("1BYw");
/* harmony import */ var _reducers_book__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("f5w3");
/* harmony import */ var _reducers_episode__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("I409");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;








const WriteEpisodeDiv = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "write__WriteEpisodeDiv",
  componentId: "sc-1w592s4-0"
})(["width:98%;margin:1rem 0rem 0rem 1rem;"]);
const WriteEpisodeTopDiv = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "write__WriteEpisodeTopDiv",
  componentId: "sc-1w592s4-1"
})(["position:relative;margin-bottom:2rem;"]);
const BookTitle = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.h1.withConfig({
  displayName: "write__BookTitle",
  componentId: "sc-1w592s4-2"
})(["font-weight:bold;font-size:1rem;margin-bottom:1rem;"]);
const TopButtonDiv = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "write__TopButtonDiv",
  componentId: "sc-1w592s4-3"
})(["display:flex;position:absolute;top:5%;right:1%;"]);
const EpisodeForm = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.form.withConfig({
  displayName: "write__EpisodeForm",
  componentId: "sc-1w592s4-4"
})([""]);
const WriteEpisodeContentDiv = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "write__WriteEpisodeContentDiv",
  componentId: "sc-1w592s4-5"
})(["margin:1.5rem;"]);
const DivCard = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "write__DivCard",
  componentId: "sc-1w592s4-6"
})(["display:flex;align-items:center;margin:1rem;width:100%;"]);
const DivCardLeft = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "write__DivCardLeft",
  componentId: "sc-1w592s4-7"
})(["flex:1;"]);
const DivCardRight = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "write__DivCardRight",
  componentId: "sc-1w592s4-8"
})(["flex:4;display:flex;& > input{width:calc(100% - 2rem);height:2rem;font-size:1rem;line-height:2rem;padding-left:10px;border:solid 2px #495057;border-radius:4px;transition:0.55s ease;&:hover{border:solid 2px #148cff;}&:focus{border:solid 2px #148cff;}}"]);
const CheckBox = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.input.withConfig({
  displayName: "write__CheckBox",
  componentId: "sc-1w592s4-9"
})(["width:1.5rem !important;height:1.5rem !important;"]);
const WriteEditorDiv = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "write__WriteEditorDiv",
  componentId: "sc-1w592s4-10"
})(["margin:1rem;& > label{width:100%;display:inline-block;margin-bottom:1rem;padding-bottom:1rem;border-bottom:solid 2px #495057;}"]);
const LoadingImg = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.img.withConfig({
  displayName: "write__LoadingImg",
  componentId: "sc-1w592s4-11"
})(["margin-top:4px;height:1.5rem;"]);

const Write = () => {
  const {
    book
  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(state => state.book);
  const {
    isAddingEpisode,
    isAddedEpisode
  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(state => state.episode);
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
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"])();
  const {
    0: checkNotice,
    1: setCheckNotice
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: title,
    1: setTitle
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const {
    0: text,
    1: setText
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const {
    0: writerComment,
    1: setWriterComment
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const onChangeCheckNotice = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(() => {
    setCheckNotice(!checkNotice);
  }, [checkNotice]);
  const onChangeTitle = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(e => {
    setTitle(e.target.value);
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    editorRef.current = {
      CKEditor: __webpack_require__("fRMJ"),
      ClassicEditor: __webpack_require__("As6A")
    };
    setEditorLoded(true);
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (isAddedEpisode) {
      dispatch({
        type: _reducers_episode__WEBPACK_IMPORTED_MODULE_7__[/* CHANGE_ADDEDEPISODE */ "j"]
      });
      router.push({
        pathname: `/book`,
        query: {
          bookid: book.id
        }
      }, `/book/${book.id}`);
    }
  }, [isAddedEpisode]);
  const onCancleWrite = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(() => {
    router.back();
  }, []);
  const onWriteEpisode = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(e => {
    e.preventDefault();
    const episodeContent = text + '<br/><br/><p><strong>작가의 말</strong><hr><br/>' + writerComment;
    dispatch({
      type: _reducers_episode__WEBPACK_IMPORTED_MODULE_7__[/* ADD_EPISODE_REQUEST */ "e"],
      data: {
        title: title,
        content: episodeContent,
        notice: checkNotice ? 1 : 0,
        bookId: book && book.id
      }
    });
  }, [checkNotice, title, text, writerComment, book && book.id]);
  return __jsx(WriteEpisodeDiv, null, __jsx(react_helmet__WEBPACK_IMPORTED_MODULE_3___default.a, null, __jsx("title", null, book && book.name), __jsx("style", {
    type: "text/css"
  }, `
            .ck.ck-editor {width:100%;}
            .ck-editor__editable { height: 500px;}
          `)), __jsx(EpisodeForm, {
    onSubmit: onWriteEpisode
  }, __jsx(WriteEpisodeTopDiv, null, __jsx(BookTitle, null, book && book.name + '  ' + (book.Episodes.filter(v => v.isNotice !== 1).length + 1) + '번째 글'), __jsx(TopButtonDiv, null, __jsx(_components_designs_Button__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], {
    color: "pink",
    type: "button",
    onClick: onCancleWrite
  }, "\uCDE8\uC18C"), __jsx(_components_designs_Button__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], {
    type: "submit"
  }, isAddingEpisode ? __jsx(LoadingImg, {
    src: "/static/icons/loading_blue.gif"
  }) : '작성'))), __jsx(WriteEpisodeContentDiv, null, __jsx(DivCard, null, __jsx(DivCardLeft, null, __jsx("label", null, "\uC774 \uAE00\uC744 \uACF5\uC9C0\uB85C \uC791\uC131")), __jsx(DivCardRight, null, __jsx(CheckBox, {
    type: "checkbox",
    value: checkNotice,
    onChange: onChangeCheckNotice
  }))), __jsx(DivCard, null, __jsx(DivCardLeft, null, __jsx("label", null, "\uC81C\uBAA9")), __jsx(DivCardRight, null, __jsx("input", {
    type: "text",
    value: title,
    onChange: onChangeTitle
  }))), __jsx(WriteEditorDiv, null, __jsx("label", null, "\uBCF8\uBB38"), editorLoded ? __jsx(CKEditor, {
    editor: ClassicEditor,
    data: text,
    onChange: (event, editor) => {
      const data = editor.getData();
      setText(data);
    }
  }) : __jsx("p", null, "Editor Loding")), __jsx(WriteEditorDiv, null, __jsx("label", null, "\uC791\uAC00\uC758 \uB9D0"), editorLoded ? __jsx(CKEditor, {
    editor: ClassicEditor,
    data: writerComment,
    onChange: (event, editor) => {
      const data = editor.getData();
      setWriterComment(data);
    }
  }) : __jsx("p", null, "Editor Loding")))));
};

Write.getInitialProps = async context => {
  const bookId = context.query.bookid;
  context.store.dispatch({
    type: _reducers_book__WEBPACK_IMPORTED_MODULE_6__[/* LOAD_BOOK_REQUEST */ "q"],
    id: bookId
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Write);

/***/ }),

/***/ "zIXN":
/***/ (function(module, exports) {

module.exports = require("react-helmet");

/***/ })

/******/ });