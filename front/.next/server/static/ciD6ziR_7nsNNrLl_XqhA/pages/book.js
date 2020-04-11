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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
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

/***/ 4:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("gKfl");


/***/ }),

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "Dtiu":
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),

/***/ "OcYQ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return backUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return frontUrl; });
const backUrl = true ? '' : undefined;
const frontUrl = true ? '' : undefined;


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

/***/ "gKfl":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// EXTERNAL MODULE: external "moment"
var external_moment_ = __webpack_require__("wy2R");
var external_moment_default = /*#__PURE__*/__webpack_require__.n(external_moment_);

// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__("h74D");

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");

// EXTERNAL MODULE: external "react-helmet"
var external_react_helmet_ = __webpack_require__("zIXN");
var external_react_helmet_default = /*#__PURE__*/__webpack_require__.n(external_react_helmet_);

// EXTERNAL MODULE: ./reducers/book.js
var reducers_book = __webpack_require__("f5w3");

// CONCATENATED MODULE: ./components/BookTable.js
var __jsx = external_react_default.a.createElement;




const Table = external_styled_components_default.a.table.withConfig({
  displayName: "BookTable__Table",
  componentId: "w7ujep-0"
})(["border-collapse:separate;border-spacing:1px;background:white;border-radius:12px;overflow:hidden;margin:1rem auto;width:98%;& th{padding:1rem;background:#148cff;color:white;}& td{padding:1rem;border-bottom:1px solid #7053c4;}& td:nth-child(1),td:nth-child(4),td:nth-child(5){width:10%;text-align:center;}& td:nth-child(3){width:12%;text-align:center;}& td:nth-child(2){text-align:left;}& tr:hover{background:#495057;color:white;cursor:pointer;}"]);

const BookTable = ({
  episode,
  isASC = true
}) => {
  const router = Object(router_["useRouter"])();
  const goEpisode = Object(external_react_["useCallback"])(episodeId => e => {
    router.push({
      pathname: '/episode',
      query: {
        id: episodeId
      }
    }, `/episode/${episodeId}`);
  }, []);
  Object(external_react_["useEffect"])(() => {
    console.log(episode);
  }, [episode]);
  const notice = episode.filter(v => v.isNotice === 1).slice().reverse();
  const ascEpisode = episode.filter(v => v.isNotice !== 1);
  const reverseEpisode = ascEpisode.slice().reverse(); // 번호 제목 날짜 조회 추천

  return __jsx(Table, null, __jsx("thead", null, __jsx("tr", null, __jsx("th", null, "\uBC88\uD638"), __jsx("th", null, "\uC81C\uBAA9"), __jsx("th", null, "\uB0A0\uC9DC"), __jsx("th", null, "\uC870\uD68C"), __jsx("th", null, "\uCD94\uCC9C"))), __jsx("tbody", null, notice && notice.map(v => {
    return __jsx("tr", {
      key: +v.id,
      onClick: goEpisode(+v.id)
    }, __jsx("td", null, "\uACF5\uC9C0"), __jsx("td", null, v.title), __jsx("td", null, external_moment_default()(v.createdAt).format('YYYY.MM.DD')), __jsx("td", null, v.views), __jsx("td", null, v.recommends));
  }), episode.length ? isASC ? ascEpisode.map((v, index) => {
    return __jsx("tr", {
      key: +v.id,
      onClick: goEpisode(+v.id)
    }, __jsx("td", null, index + 1), __jsx("td", null, v.title), __jsx("td", null, external_moment_default()(v.createdAt).format('YYYY.MM.DD')), __jsx("td", null, v.views), __jsx("td", null, v.recommends));
  }) : reverseEpisode.map((v, index) => {
    return __jsx("tr", {
      key: +v.id,
      onClick: goEpisode(+v.id)
    }, __jsx("td", null, reverseEpisode.length - index), __jsx("td", null, v.title), __jsx("td", null, external_moment_default()(v.createdAt).format('YYYY.MM.DD')), __jsx("td", null, v.views), __jsx("td", null, v.recommends));
  }) : __jsx("tr", null, __jsx("td", {
    colSpan: 5
  }, __jsx("a", null, "\uAC8C\uC2DC\uAE00\uC774 \uC874\uC7AC\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.")))));
};

/* harmony default export */ var components_BookTable = (BookTable);
// EXTERNAL MODULE: ./components/designs/Button.js
var Button = __webpack_require__("1BYw");

// EXTERNAL MODULE: ./config/config.js
var config = __webpack_require__("OcYQ");

// CONCATENATED MODULE: ./pages/book.js
var book_jsx = external_react_default.a.createElement;










const SBookDiv = external_styled_components_default.a.div.withConfig({
  displayName: "book__SBookDiv",
  componentId: "sc-1azvhkf-0"
})(["width:98%;margin:30px 0px 0px 10px;"]);
const BookTopDiv = external_styled_components_default.a.div.withConfig({
  displayName: "book__BookTopDiv",
  componentId: "sc-1azvhkf-1"
})(["display:inline-block;width:100%;height:16rem;border-bottom:solid 2px #495057;"]);
const BookTopLeftDiv = external_styled_components_default.a.div.withConfig({
  displayName: "book__BookTopLeftDiv",
  componentId: "sc-1azvhkf-2"
})(["width:15%;float:left;"]);
const BookTopRightDiv = external_styled_components_default.a.div.withConfig({
  displayName: "book__BookTopRightDiv",
  componentId: "sc-1azvhkf-3"
})(["width:80%;padding:1.5rem;float:right;border:solid 2px #495057;position:relative;& > label{font-size:1rem;display:block;margin-top:1rem;}& > div{display:flex;& > label{font-size:1rem;display:block;margin-top:1rem;flex:1;& > a{cursor:pointer;}}}"]);
const WriterButtonDiv = external_styled_components_default.a.div.withConfig({
  displayName: "book__WriterButtonDiv",
  componentId: "sc-1azvhkf-4"
})(["display:flex;position:absolute;top:5%;right:1%;"]);
const UpdateButton = external_styled_components_default()(Button["a" /* default */]).withConfig({
  displayName: "book__UpdateButton",
  componentId: "sc-1azvhkf-5"
})([""]);
const DeleteButton = external_styled_components_default()(Button["a" /* default */]).withConfig({
  displayName: "book__DeleteButton",
  componentId: "sc-1azvhkf-6"
})([""]);
const Thumbnail = external_styled_components_default.a.img.withConfig({
  displayName: "book__Thumbnail",
  componentId: "sc-1azvhkf-7"
})(["height:13rem;display:block;margin:1rem auto;"]);
const BookTitle = external_styled_components_default.a.h1.withConfig({
  displayName: "book__BookTitle",
  componentId: "sc-1azvhkf-8"
})(["font-size:1.5rem;font-weight:bold;"]);
const BookSummaryDiv = external_styled_components_default.a.div.withConfig({
  displayName: "book__BookSummaryDiv",
  componentId: "sc-1azvhkf-9"
})(["margin-top:1.5rem;margin-bottom:1.5rem;padding-left:1.5rem;padding-right:1.5rem;height:7rem;width:100%;border-bottom:solid 2px #495057;"]);
const BookButtonDiv = external_styled_components_default.a.div.withConfig({
  displayName: "book__BookButtonDiv",
  componentId: "sc-1azvhkf-10"
})(["display:flex;align-items:center;justify-content:flex-end;height:2.25rem;& > button{width:8rem;}"]);
const LoadingImg = external_styled_components_default.a.img.withConfig({
  displayName: "book__LoadingImg",
  componentId: "sc-1azvhkf-11"
})(["margin-top:4px;height:1.5rem;"]);

const Book = () => {
  const {
    book,
    isDeletingBook,
    isDeletedBook
  } = Object(external_react_redux_["useSelector"])(state => state.book);
  const {
    me
  } = Object(external_react_redux_["useSelector"])(state => state.user);
  const {
    0: isASC,
    1: setIsASC
  } = Object(external_react_["useState"])(true);
  const dispatch = Object(external_react_redux_["useDispatch"])();
  const router = Object(router_["useRouter"])();
  const onGoWriter = Object(external_react_["useCallback"])(() => {
    router.push({
      pathname: '/librery',
      query: {
        id: book.User.userId
      }
    }, `/librery/${book.User.userId}`);
  }, [book && book.User.id]);
  const onGoUpdateBook = Object(external_react_["useCallback"])(() => {
    router.push({
      pathname: '/updatebook',
      query: {
        bookid: book.id
      }
    }, `/updatebook/${book.id}`);
  }, [book && book.id]);
  const onGoWriteEpisode = Object(external_react_["useCallback"])(() => {
    router.push({
      pathname: '/episode/write',
      query: {
        bookid: book.id
      }
    }, `/episode/write/${book.id}`);
  });
  const onGoDeleteBook = Object(external_react_["useCallback"])(() => {
    dispatch({
      type: reducers_book["k" /* DELETE_BOOK_REQUEST */],
      id: book && book.id
    });
  }, [book && book.id]);
  Object(external_react_["useEffect"])(() => {
    if (isDeletedBook) {
      dispatch({
        type: CHANGE_DELETEDBOOK
      });
      router.push('/booklist');
    }
  }, [isDeletedBook]);
  const onAddLikeBook = Object(external_react_["useCallback"])(e => {
    dispatch({
      type: reducers_book["e" /* ADD_LIKEBOOK_REQUEST */],
      bookId: book.id,
      data: {
        name: book.name,
        userId: book.User.userId,
        userNickname: book.User.nickname,
        recentDay: book.recentDay
      }
    });
  }, [book && book.id, book && book.name, book && book.User.userId, book && book.User.nickname, book && book.recentDay]);
  const onRemoveLikeBook = Object(external_react_["useCallback"])(e => {
    dispatch({
      type: reducers_book["x" /* REMOVE_LIKEBOOK_REQUEST */],
      bookId: book.id
    });
  }, [book && book.id]);
  const onIsASC = Object(external_react_["useCallback"])(e => {
    setIsASC(!isASC);
  }, [isASC]);
  return book_jsx(SBookDiv, null, book_jsx(external_react_helmet_default.a, {
    title: book && book.name,
    description: book && book.summary,
    meta: [{
      name: 'description',
      content: book && book.summary
    }, {
      property: 'og:title',
      content: `${book && book.name}`
    }, {
      property: 'og:description',
      content: `${book && book.summary}`
    }, {
      property: 'og:image',
      content: book && book.thumbnail ? `${book && book.thumbnail}` : `${config["b" /* frontUrl */]}/favicon`
    }, {
      property: 'og:url',
      content: `${config["b" /* frontUrl */]}/book/${book && book.id}`
    }]
  }), book_jsx(BookTopDiv, null, book_jsx(BookTopLeftDiv, null, book_jsx(Thumbnail, {
    src: `${book && book.thumbnail}`
  })), book_jsx(BookTopRightDiv, null, book_jsx(BookTitle, null, book && book.name), (me && me.id) === (book && book.User.id) ? book_jsx(WriterButtonDiv, null, book_jsx(UpdateButton, {
    onClick: onGoUpdateBook
  }, "\uC218\uC815"), book_jsx(DeleteButton, {
    color: "pink",
    onClick: onGoDeleteBook
  }, isDeletingBook ? book_jsx(LoadingImg, {
    src: "/static/icons/loading_pink.gif"
  }) : `삭제`)) : null, book_jsx("label", null, book && book.BookGenre.map(v => v.name + ' ')), book_jsx("div", null, book_jsx("label", null, "\uC791\uAC00 ", book_jsx("a", {
    onClick: onGoWriter
  }, book && book.User.nickname), " \uB2D8"), book_jsx("label", null, "\uC5F0\uC7AC\uC8FC\uAE30 ", book && book.serialDay.split(',').map(v => v + ' '))), book_jsx("div", null, book_jsx("label", null, "\uC791\uD488\uB4F1\uB85D\uC77C", ' ', book && external_moment_default()(book.createdAt).format('YY.MM.DD HH시 mm분')), book_jsx("label", null, "\uCD5C\uADFC\uB4F1\uB85D\uC77C", ' ', book && (book.Episodes[book.Episodes.length - 1] ? external_moment_default()(book.Episodes[book.Episodes.length - 1].createdAt).format('YY.MM.DD HH시 mm분') : external_moment_default()(book.createdAt).format('YY.MM.DD HH시 mm분')))), book_jsx("div", null, book_jsx("label", null, "\uC5F0\uC7AC\uC218 ", book && book.Episodes.length, " \uD654"), book_jsx("label", null, "\uC870\uD68C\uC218", ' ', book && book.Episodes.reduce((acc, val) => acc + val.views, 0))), book_jsx("div", null, book_jsx("label", null, "\uCD94\uCC9C\uC218", ' ', book && book.Episodes.reduce((acc, val) => acc + val.recommends, 0)), book_jsx("label", null, "\uC120\uD638\uC791\uC218 ", book && book.likersCount)))), book_jsx(BookSummaryDiv, {
    dangerouslySetInnerHTML: {
      __html: book && book.summary
    }
  }), book_jsx(BookButtonDiv, null, (me && me.id) === (book && book.User.id) ? book_jsx(Button["a" /* default */], {
    onClick: onGoWriteEpisode
  }, "\uAE00\uC4F0\uB7EC\uAC00\uAE30") : null, me ? me.LikingBook.find(v => v.id === (book && book.id)) ? book_jsx(Button["a" /* default */], {
    color: "pink",
    onClick: onRemoveLikeBook
  }, "\uC120\uD638\uC791\uD574\uC81C") : book_jsx(Button["a" /* default */], {
    onClick: onAddLikeBook
  }, "\uC120\uD638\uC791\uCD94\uAC00") : null, book_jsx(Button["a" /* default */], {
    onClick: onIsASC
  }, isASC ? `오름차순정렬` : `내림차순정렬`)), book && book_jsx(components_BookTable, {
    episode: book.Episodes,
    isASC: isASC
  }));
};

Book.getInitialProps = async context => {
  const bookId = context.query.bookid;
  context.store.dispatch({
    type: reducers_book["q" /* LOAD_BOOK_REQUEST */],
    id: bookId
  });
};

/* harmony default export */ var pages_book = __webpack_exports__["default"] = (Book);

/***/ }),

/***/ "h74D":
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "wy2R":
/***/ (function(module, exports) {

module.exports = require("moment");

/***/ }),

/***/ "zIXN":
/***/ (function(module, exports) {

module.exports = require("react-helmet");

/***/ })

/******/ });