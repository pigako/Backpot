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
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
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

/***/ 6:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("bgSf");


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

/***/ "bgSf":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__("h74D");

// EXTERNAL MODULE: external "moment"
var external_moment_ = __webpack_require__("wy2R");
var external_moment_default = /*#__PURE__*/__webpack_require__.n(external_moment_);

// EXTERNAL MODULE: external "react-helmet"
var external_react_helmet_ = __webpack_require__("zIXN");
var external_react_helmet_default = /*#__PURE__*/__webpack_require__.n(external_react_helmet_);

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");

// EXTERNAL MODULE: ./components/designs/Button.js
var Button = __webpack_require__("1BYw");

// EXTERNAL MODULE: ./reducers/board.js
var reducers_board = __webpack_require__("kWrt");

// CONCATENATED MODULE: ./components/CommentCard.js
var __jsx = external_react_default.a.createElement;





const SCommentCard = external_styled_components_default.a.div.withConfig({
  displayName: "CommentCard__SCommentCard",
  componentId: "sc-1fhrn1i-0"
})(["margin:1.5rem;"]);
const CommentCardTop = external_styled_components_default.a.div.withConfig({
  displayName: "CommentCard__CommentCardTop",
  componentId: "sc-1fhrn1i-1"
})(["height:2rem;background:#f7f7f7;border-bottom:solid 1px #6441a5;display:inline-block;width:100%;font-size:1rem;& > label{line-height:2rem;}"]);
const CommentCardNickname = external_styled_components_default.a.label.withConfig({
  displayName: "CommentCard__CommentCardNickname",
  componentId: "sc-1fhrn1i-2"
})(["font-weight:bold;margin-left:1rem;"]);
const CommentCardCreateLabel = external_styled_components_default.a.label.withConfig({
  displayName: "CommentCard__CommentCardCreateLabel",
  componentId: "sc-1fhrn1i-3"
})(["display:block;float:right;"]);
const CommentUpDelButtonDiv = external_styled_components_default.a.div.withConfig({
  displayName: "CommentCard__CommentUpDelButtonDiv",
  componentId: "sc-1fhrn1i-4"
})(["font-size:1rem;display:inline-block;float:right;margin-right:1rem;line-height:2rem;& > a{margin-left:10px;margin-right:10px;cursor:pointer;&:hover{color:#148cff;}}"]);
const CommentCardContent = external_styled_components_default.a.div.withConfig({
  displayName: "CommentCard__CommentCardContent",
  componentId: "sc-1fhrn1i-5"
})(["margin:1.5rem;& > div{font-size:1rem;line-height:1.5rem;}"]);

const CommentCard = ({
  comment
}) => {
  const {
    id: myId
  } = Object(external_react_redux_["useSelector"])(state => state.user.me) || false;
  const dispatch = Object(external_react_redux_["useDispatch"])();
  const {
    0: isUpdatingComment,
    1: setIsUpdatingComment
  } = Object(external_react_["useState"])(false);
  const {
    0: updateCommentText,
    1: setUpdateCommentText
  } = Object(external_react_["useState"])('');
  const editorRef = Object(external_react_["useRef"])();
  const {
    CKEditor,
    ClassicEditor
  } = editorRef.current || {};
  const {
    0: editorLoded,
    1: setEditorLoded
  } = Object(external_react_["useState"])(false);
  Object(external_react_["useEffect"])(() => {
    editorRef.current = {
      CKEditor: __webpack_require__("fRMJ"),
      ClassicEditor: __webpack_require__("As6A")
    };
    setEditorLoded(true);
  }, []);
  const onUpdateComment = Object(external_react_["useCallback"])(e => {
    if (isUpdatingComment) {
      dispatch({
        type: reducers_board["x" /* UPDATE_COMMENT_REQUEST */],
        data: {
          id: comment.id,
          content: updateCommentText
        }
      });
      setIsUpdatingComment(false);
    } else {
      setIsUpdatingComment(true);
    }
  }, [isUpdatingComment, comment && comment.id, updateCommentText]);
  const onUpdateCommentCancle = Object(external_react_["useCallback"])(e => {
    setIsUpdatingComment(false);
    setUpdateCommentText(comment.content);
  }, [comment && comment.content]);
  const onDeleteComment = Object(external_react_["useCallback"])(e => {
    console.log('CommentCard', comment.id);
    dispatch({
      type: reducers_board["l" /* DELETE_COMMENT_REQUEST */],
      commentId: comment.id
    });
  }, [comment && comment.id]);
  return __jsx(SCommentCard, {
    key: +comment.id
  }, __jsx(CommentCardTop, null, __jsx(CommentCardNickname, null, comment.User.nickname), __jsx(CommentCardCreateLabel, null, external_moment_default()(comment.createdAt).format('YY.MM.DD HH시 mm분')), myId === comment.User.id ? __jsx(CommentUpDelButtonDiv, null, isUpdatingComment ? __jsx("a", {
    onClick: onUpdateCommentCancle
  }, "\uCDE8\uC18C") : null, __jsx("a", {
    onClick: onUpdateComment
  }, "\uC218\uC815"), __jsx("a", {
    onClick: onDeleteComment
  }, "\uC0AD\uC81C")) : null), __jsx(CommentCardContent, null, isUpdatingComment ? editorLoded ? __jsx(CKEditor, {
    key: 'board',
    editor: ClassicEditor,
    data: comment && comment.content,
    onChange: (event, editor) => {
      const data = editor.getData();
      setUpdateCommentText(data);
    }
  }) : __jsx("p", null, "Editor Loding") : __jsx("div", {
    dangerouslySetInnerHTML: {
      __html: comment.content
    }
  })));
};

/* harmony default export */ var components_CommentCard = (CommentCard);
// CONCATENATED MODULE: ./pages/detailboard.js
var detailboard_jsx = external_react_default.a.createElement;









const SBoard = external_styled_components_default.a.div.withConfig({
  displayName: "detailboard__SBoard",
  componentId: "sc-18cmj5i-0"
})(["width:98%;margin-top:10px;"]);
const SDetailBoardTitle = external_styled_components_default.a.h1.withConfig({
  displayName: "detailboard__SDetailBoardTitle",
  componentId: "sc-18cmj5i-1"
})(["display:inline-block;font-weight:bold;margin-left:10px;width:100%;"]);
const SBoardTop = external_styled_components_default.a.div.withConfig({
  displayName: "detailboard__SBoardTop",
  componentId: "sc-18cmj5i-2"
})(["margin-top:1rem;padding-bottom:1rem;border-bottom:solid 2px #6441a5;"]);
const SBoardTitle = external_styled_components_default.a.div.withConfig({
  displayName: "detailboard__SBoardTitle",
  componentId: "sc-18cmj5i-3"
})(["display:inline-block;"]);
const SBoardTitleLabel = external_styled_components_default.a.label.withConfig({
  displayName: "detailboard__SBoardTitleLabel",
  componentId: "sc-18cmj5i-4"
})(["display:block;font-size:1.5rem;margin-bottom:1rem;"]);
const SBoardWriterLabel = external_styled_components_default.a.label.withConfig({
  displayName: "detailboard__SBoardWriterLabel",
  componentId: "sc-18cmj5i-5"
})(["padding-right:1rem;border-right:solid 1px #495057;& > strong{font-weight:bold;}"]);
const SBoardCreateLabel = external_styled_components_default.a.label.withConfig({
  displayName: "detailboard__SBoardCreateLabel",
  componentId: "sc-18cmj5i-6"
})(["padding-left:1rem;"]);
const SBoardTitleButtonDiv = external_styled_components_default.a.div.withConfig({
  displayName: "detailboard__SBoardTitleButtonDiv",
  componentId: "sc-18cmj5i-7"
})(["float:right;"]);
const SBoardContent = external_styled_components_default.a.div.withConfig({
  displayName: "detailboard__SBoardContent",
  componentId: "sc-18cmj5i-8"
})(["margin:1.5rem;& > div{font-size:1rem;line-height:1.5rem;}"]);
const SBoardComment = external_styled_components_default.a.div.withConfig({
  displayName: "detailboard__SBoardComment",
  componentId: "sc-18cmj5i-9"
})(["border-top:solid 3px #6441a5;"]);
const SBoardCommentCountDiv = external_styled_components_default.a.div.withConfig({
  displayName: "detailboard__SBoardCommentCountDiv",
  componentId: "sc-18cmj5i-10"
})(["height:2rem;background:#e7e7e7;display:flex;align-items:center;border-bottom:solid 3px #6441a5;& > label{font-size:1rem;font-weight:bold;margin-left:1rem;}"]);
const CommentDiv = external_styled_components_default.a.div.withConfig({
  displayName: "detailboard__CommentDiv",
  componentId: "sc-18cmj5i-11"
})(["height:330px;"]);
const CommentButton = external_styled_components_default()(Button["a" /* default */]).withConfig({
  displayName: "detailboard__CommentButton",
  componentId: "sc-18cmj5i-12"
})(["width:8rem;margin-right:1.5rem;float:right;"]);
const LoadingImg = external_styled_components_default.a.img.withConfig({
  displayName: "detailboard__LoadingImg",
  componentId: "sc-18cmj5i-13"
})(["margin-top:4px;height:1.5rem;"]);

const DetailBoard = () => {
  const {
    boardDeleted,
    board,
    isUpdatingBoard,
    isAddingComment,
    commentAdded
  } = Object(external_react_redux_["useSelector"])(state => state.board);
  const {
    id: myId
  } = Object(external_react_redux_["useSelector"])(state => state.user.me) || false;
  const dispatch = Object(external_react_redux_["useDispatch"])();
  const router = Object(router_["useRouter"])();
  const editorRef = Object(external_react_["useRef"])();
  const {
    CKEditor,
    ClassicEditor
  } = editorRef.current || {};
  const {
    0: editorLoded,
    1: setEditorLoded
  } = Object(external_react_["useState"])(false);
  const {
    0: userComment,
    1: setUserComment
  } = Object(external_react_["useState"])('');
  const {
    0: updateText,
    1: setUpdateText
  } = Object(external_react_["useState"])('');
  const {
    0: isUpdating,
    1: setIsUpdating
  } = Object(external_react_["useState"])(false);
  Object(external_react_["useEffect"])(() => {
    editorRef.current = {
      CKEditor: __webpack_require__("fRMJ"),
      ClassicEditor: __webpack_require__("As6A")
    };
    setEditorLoded(true);
  }, []);
  Object(external_react_["useEffect"])(() => {
    if (boardDeleted) {
      router.push('/board');
    }
  }, [boardDeleted]);
  Object(external_react_["useEffect"])(() => {
    if (commentAdded) {
      setUserComment('');
    }
  }, [commentAdded]);
  const onUpdateBoard = Object(external_react_["useCallback"])(e => {
    if (isUpdating) {
      dispatch({
        type: reducers_board["u" /* UPDATE_BOARD_REQUEST */],
        data: {
          id: board.id,
          content: updateText
        }
      });
      setIsUpdating(false);
    } else {
      setIsUpdating(true);
    }
  }, [isUpdating, board && board.id, updateText]);
  const onUpdateBoardCancle = Object(external_react_["useCallback"])(e => {
    setIsUpdating(false);
    setUpdateText(board && board.content);
  }, [isUpdating]);
  const onDeleteBoard = Object(external_react_["useCallback"])(e => {
    dispatch({
      type: reducers_board["i" /* DELETE_BOARD_REQUEST */],
      boardId: board.id
    });
  }, [board && board.id]);
  const onCreateComment = Object(external_react_["useCallback"])(e => {
    if (!userComment.trim()) {
      return;
    }

    dispatch({
      type: reducers_board["e" /* ADD_COMMENT_REQUEST */],
      data: {
        boardId: board.id,
        content: userComment
      }
    });
  }, [board && board.id, userComment]);
  return detailboard_jsx(SBoard, null, detailboard_jsx(external_react_helmet_default.a, null, detailboard_jsx("title", null, board && board.title), detailboard_jsx("style", {
    type: "text/css"
  }, `
            .ck-editor__editable { height: 200px;}
            .ck.ck-reset.ck-editor.ck-rounded-corners {margin: 1.5rem;}
          `)), detailboard_jsx(SDetailBoardTitle, null, "\uCD94\uCC9C\uAC8C\uC2DC\uAE00"), detailboard_jsx(SBoardTop, null, detailboard_jsx(SBoardTitle, null, detailboard_jsx(SBoardTitleLabel, null, board && board.title), detailboard_jsx(SBoardWriterLabel, null, detailboard_jsx("strong", null, board && board.User.nickname), " \uB2D8"), detailboard_jsx(SBoardCreateLabel, null, external_moment_default()(board && board.createdAt).format('YY.MM.DD HH시 mm분'))), myId === (board && board.User.id) ? detailboard_jsx(SBoardTitleButtonDiv, null, isUpdating ? detailboard_jsx(Button["a" /* default */], {
    onClick: onUpdateBoardCancle
  }, "\uCDE8\uC18C") : null, detailboard_jsx(Button["a" /* default */], {
    onClick: onUpdateBoard
  }, isUpdatingBoard ? detailboard_jsx(LoadingImg, {
    src: "/static/icons/loading_blue.gif"
  }) : `수정`), detailboard_jsx(Button["a" /* default */], {
    color: 'pink',
    onClick: onDeleteBoard
  }, "\uC0AD\uC81C")) : null), detailboard_jsx(SBoardContent, null, isUpdating ? editorLoded ? detailboard_jsx(CKEditor, {
    key: 'board',
    editor: ClassicEditor,
    data: board && board.content,
    onChange: (event, editor) => {
      const data = editor.getData();
      setUpdateText(data);
    }
  }) : detailboard_jsx("p", null, "Editor Loding") : detailboard_jsx("div", {
    dangerouslySetInnerHTML: {
      __html: board && board.content
    }
  })), detailboard_jsx(SBoardComment, null, detailboard_jsx(SBoardCommentCountDiv, null, detailboard_jsx("label", null, "\uB313\uAE00 ", board && board.Comments.length, "\uAC1C")), board && board.Comments.map(comment => {
    return detailboard_jsx(components_CommentCard, {
      key: +comment.id,
      comment: comment
    });
  })), myId && detailboard_jsx(CommentDiv, null, editorLoded ? detailboard_jsx(CKEditor, {
    key: 'comment',
    editor: ClassicEditor,
    data: userComment,
    onChange: (event, editor) => {
      const data = editor.getData();
      setUserComment(data);
    }
  }) : detailboard_jsx("p", null, "Editor Loding"), detailboard_jsx(CommentButton, {
    onClick: onCreateComment
  }, isAddingComment ? detailboard_jsx(LoadingImg, {
    src: "/static/icons/loading_blue.gif"
  }) : `댓글쓰기`)));
};

DetailBoard.getInitialProps = context => {
  const id = parseInt(context.query.id, 10);
  context.store.dispatch({
    type: reducers_board["r" /* LOAD_BOARD_REQUEST */],
    boardId: id
  });
};

/* harmony default export */ var detailboard = __webpack_exports__["default"] = (DetailBoard);

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

/***/ "wy2R":
/***/ (function(module, exports) {

module.exports = require("moment");

/***/ }),

/***/ "zIXN":
/***/ (function(module, exports) {

module.exports = require("react-helmet");

/***/ })

/******/ });