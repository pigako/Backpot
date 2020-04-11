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
/******/ 	return __webpack_require__(__webpack_require__.s = 15);
/******/ })
/************************************************************************/
/******/ ({

/***/ 15:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("OYaH");


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

/***/ "OYaH":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Dtiu");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("zIXN");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_designs_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("1BYw");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("4Q3z");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("h74D");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _reducers_board__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("kWrt");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







const WriteDiv = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "writeboard__WriteDiv",
  componentId: "sc-3uiybh-0"
})(["margin-top:10px;width:98%;"]);
const WriteBoardDivTop = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "writeboard__WriteBoardDivTop",
  componentId: "sc-3uiybh-1"
})(["display:flex;align-items:center;margin-bottom:1rem;"]);
const SWriteBoardTitle = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.h1.withConfig({
  displayName: "writeboard__SWriteBoardTitle",
  componentId: "sc-3uiybh-2"
})(["display:inline-block;font-weight:bold;margin-left:10px;width:100%;"]);
const BoardTitleInput = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.input.withConfig({
  displayName: "writeboard__BoardTitleInput",
  componentId: "sc-3uiybh-3"
})(["margin-right:10px;border:solid 1px #495057;border-radius:4px;padding-left:10px;margin-bottom:1rem;height:2.25rem;width:100%;font-size:1.5rem;transition:0.55s ease;&:hover{border:solid 2px #148cff;}&:focus{border:solid 2px #148cff;}"]);
const LoadingImg = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.img.withConfig({
  displayName: "writeboard__LoadingImg",
  componentId: "sc-3uiybh-4"
})(["margin-top:4px;height:1.5rem;"]);

const WriteBoard = () => {
  const editorRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
  const {
    0: editorLoded,
    1: setEditorLoded
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    CKEditor,
    ClassicEditor
  } = editorRef.current || {};
  const {
    0: text,
    1: setText
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const {
    0: title,
    1: setTitle
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const {
    isAddingBoard,
    boardAdded
  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["useSelector"])(state => state.board);
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["useDispatch"])();
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"])();
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    editorRef.current = {
      CKEditor: __webpack_require__("fRMJ"),
      ClassicEditor: __webpack_require__("As6A")
    };
    setEditorLoded(true);
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (boardAdded) {
      router.push('/board');
    }
  }, [boardAdded]);
  const onCancle = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(e => {
    router.back();
  }, []);
  const onChangeTitle = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(e => {
    setTitle(e.target.value);
  });
  const onCreateBoard = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(e => {
    dispatch({
      type: _reducers_board__WEBPACK_IMPORTED_MODULE_6__[/* ADD_BOARD_REQUEST */ "b"],
      data: {
        title,
        text
      }
    });
  }, [title, text]);
  return __jsx(WriteDiv, null, __jsx(react_helmet__WEBPACK_IMPORTED_MODULE_2___default.a, null, __jsx("title", null, "\uCD94\uCC9C\uAC8C\uC2DC\uAE00 \uC791\uC131"), __jsx("style", {
    type: "text/css"
  }, `
            .ck-editor__editable { height: 500px;}
          `)), __jsx(WriteBoardDivTop, null, __jsx(SWriteBoardTitle, null, "\uCD94\uCC9C\uAC8C\uC2DC\uAE00 \uC791\uC131"), __jsx(_components_designs_Button__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], {
    color: 'pink',
    onClick: onCancle
  }, "\uCDE8\uC18C"), __jsx(_components_designs_Button__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], {
    onClick: onCreateBoard
  }, isAddingBoard ? __jsx(LoadingImg, {
    src: "/static/icons/loading_blue.gif"
  }) : `작성`)), __jsx(BoardTitleInput, {
    value: title,
    onChange: onChangeTitle,
    placeholder: "\uC81C\uBAA9"
  }), editorLoded ? __jsx(CKEditor, {
    editor: ClassicEditor,
    data: text,
    onChange: (event, editor) => {
      const data = editor.getData();
      setText(data);
    }
  }) : __jsx("p", null, "Editor Loding"));
};

WriteBoard.getInitialProps = context => {};

/* harmony default export */ __webpack_exports__["default"] = (WriteBoard);

/***/ }),

/***/ "T5ka":
/***/ (function(module, exports) {

module.exports = require("immer");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "fRMJ":
/***/ (function(module, exports) {

module.exports = require("@ckeditor/ckeditor5-react");

/***/ }),

/***/ "h74D":
/***/ (function(module, exports) {

module.exports = require("react-redux");

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

/***/ "zIXN":
/***/ (function(module, exports) {

module.exports = require("react-helmet");

/***/ })

/******/ });