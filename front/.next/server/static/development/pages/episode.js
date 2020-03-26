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

/***/ "./components/EpisodeCommentCard.js":
/*!******************************************!*\
  !*** ./components/EpisodeCommentCard.js ***!
  \******************************************/
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
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _reducers_board__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../reducers/board */ "./reducers/board.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






const SCommentCard = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "EpisodeCommentCard__SCommentCard",
  componentId: "sc-1889k7p-0"
})(["margin:1.5rem;"]);
const CommentCardTop = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "EpisodeCommentCard__CommentCardTop",
  componentId: "sc-1889k7p-1"
})(["height:2rem;background:#f7f7f7;border-bottom:solid 1px #6441a5;display:inline-block;width:100%;font-size:1rem;& > label{line-height:2rem;}"]);
const CommentCardNickname = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.label.withConfig({
  displayName: "EpisodeCommentCard__CommentCardNickname",
  componentId: "sc-1889k7p-2"
})(["font-weight:bold;margin-left:1rem;"]);
const CommentCardCreateLabel = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.label.withConfig({
  displayName: "EpisodeCommentCard__CommentCardCreateLabel",
  componentId: "sc-1889k7p-3"
})(["display:block;float:right;"]);
const CommentUpDelButtonDiv = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "EpisodeCommentCard__CommentUpDelButtonDiv",
  componentId: "sc-1889k7p-4"
})(["font-size:1rem;display:inline-block;float:right;margin-right:1rem;line-height:2rem;& > a{margin-left:10px;margin-right:10px;cursor:pointer;&:hover{color:#148cff;}}"]);
const CommentCardContent = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "EpisodeCommentCard__CommentCardContent",
  componentId: "sc-1889k7p-5"
})(["margin:1.5rem;& > div{font-size:1rem;line-height:1.5rem;}"]);

const CommentCard = ({
  comment
}) => {
  const {
    id: myId
  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"])(state => state.user.me) || false;
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useDispatch"])();
  const {
    0: isUpdatingComment,
    1: setIsUpdatingComment
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: updateCommentText,
    1: setUpdateCommentText
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const editorRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
  const {
    CKEditor,
    ClassicEditor
  } = editorRef.current || {};
  const {
    0: editorLoded,
    1: setEditorLoded
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    editorRef.current = {
      CKEditor: __webpack_require__(/*! @ckeditor/ckeditor5-react */ "@ckeditor/ckeditor5-react"),
      ClassicEditor: __webpack_require__(/*! @ckeditor/ckeditor5-build-classic */ "@ckeditor/ckeditor5-build-classic")
    };
    setEditorLoded(true);
  }, []);
  const onUpdateComment = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(e => {
    if (isUpdatingComment) {
      dispatch({
        type: _reducers_board__WEBPACK_IMPORTED_MODULE_5__["UPDATE_COMMENT_REQUEST"],
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
  const onUpdateCommentCancle = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(e => {
    setIsUpdatingComment(false);
    setUpdateCommentText(comment.content);
  }, [comment && comment.content]);
  const onDeleteComment = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(e => {
    console.log('CommentCard', comment.id);
    dispatch({
      type: _reducers_board__WEBPACK_IMPORTED_MODULE_5__["DELETE_COMMENT_REQUEST"],
      commentId: comment.id
    });
  }, [comment && comment.id]);
  return __jsx(SCommentCard, {
    key: +comment.id
  }, __jsx(CommentCardTop, null, __jsx(CommentCardNickname, null, comment.User.nickname), __jsx(CommentCardCreateLabel, null, moment__WEBPACK_IMPORTED_MODULE_3___default()(comment.createdAt).format('YY.MM.DD HH시 mm분')), myId === comment.User.id ? __jsx(CommentUpDelButtonDiv, null, isUpdatingComment ? __jsx("a", {
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

CommentCard.propTypes = {
  comment: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (CommentCard);

/***/ }),

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

/***/ "./pages/episode/index.js":
/*!********************************!*\
  !*** ./pages/episode/index.js ***!
  \********************************/
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
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-helmet */ "react-helmet");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _reducers_episode__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../reducers/episode */ "./reducers/episode.js");
/* harmony import */ var _components_EpisodeCommentCard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/EpisodeCommentCard */ "./components/EpisodeCommentCard.js");
/* harmony import */ var _components_designs_Button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/designs/Button */ "./components/designs/Button.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;









const EpisodeDiv = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "episode__EpisodeDiv",
  componentId: "sc-1oaq4eh-0"
})(["width:98%;margin:1rem 0rem 0rem 1rem;"]);
const EpisodeTopDiv = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "episode__EpisodeTopDiv",
  componentId: "sc-1oaq4eh-1"
})(["border-bottom:solid 2px #495057;position:relative;"]);
const BookTitle = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.h1.withConfig({
  displayName: "episode__BookTitle",
  componentId: "sc-1oaq4eh-2"
})(["font-weight:bold;font-size:1rem;margin-bottom:1rem;"]);
const EpisodeTitle = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.h1.withConfig({
  displayName: "episode__EpisodeTitle",
  componentId: "sc-1oaq4eh-3"
})(["font-weight:bold;font-size:2rem;margin-bottom:1rem;"]);
const TopButtonDiv = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "episode__TopButtonDiv",
  componentId: "sc-1oaq4eh-4"
})(["display:flex;position:absolute;top:5%;right:1%;"]);
const EpisodeSummaryDataDiv = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "episode__EpisodeSummaryDataDiv",
  componentId: "sc-1oaq4eh-5"
})(["border-bottom:solid 2px #495057;display:flex;align-items:center;justify-content:flex-end;"]);
const EpisodeSummaryContentDiv = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "episode__EpisodeSummaryContentDiv",
  componentId: "sc-1oaq4eh-6"
})(["padding:1rem;font-size:1rem;"]);
const LeftLabel = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.label.withConfig({
  displayName: "episode__LeftLabel",
  componentId: "sc-1oaq4eh-7"
})(["margin-right:1rem;"]);
const RightLabel = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.label.withConfig({
  displayName: "episode__RightLabel",
  componentId: "sc-1oaq4eh-8"
})(["font-weight:bold;"]);
const EpisodeContentDiv = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "episode__EpisodeContentDiv",
  componentId: "sc-1oaq4eh-9"
})(["margin:1.5rem;font-size:1rem;line-height:1.5rem;"]);
const EpisodeComment = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "episode__EpisodeComment",
  componentId: "sc-1oaq4eh-10"
})(["border-top:solid 3px #495057;margin-bottom:2rem;"]);
const EpisodeCommentCountDiv = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "episode__EpisodeCommentCountDiv",
  componentId: "sc-1oaq4eh-11"
})(["height:2rem;background:#e7e7e7;display:flex;align-items:center;border-bottom:solid 3px #495057;& > label{font-size:1rem;font-weight:bold;margin-left:1rem;}"]);
const EpisodePrevNextDiv = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "episode__EpisodePrevNextDiv",
  componentId: "sc-1oaq4eh-12"
})(["height:8rem;width:100%;border-top:solid 2px #495057;padding-top:1rem;margin-bottom:2rem;"]);
const PrevEpisodeDiv = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "episode__PrevEpisodeDiv",
  componentId: "sc-1oaq4eh-13"
})(["width:49.5%;display:inline-block;"]);
const PrevButton = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_components_designs_Button__WEBPACK_IMPORTED_MODULE_8__["default"]).withConfig({
  displayName: "episode__PrevButton",
  componentId: "sc-1oaq4eh-14"
})(["height:8rem;display:inline-block;"]);
const PrveEpisodeTitle = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.label.withConfig({
  displayName: "episode__PrveEpisodeTitle",
  componentId: "sc-1oaq4eh-15"
})(["margin-left:1rem;"]);
const NextEpisodeDiv = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "episode__NextEpisodeDiv",
  componentId: "sc-1oaq4eh-16"
})(["width:49.5%;float:right;display:flex;align-items:center;justify-content:flex-end;"]);
const NextButton = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_components_designs_Button__WEBPACK_IMPORTED_MODULE_8__["default"]).withConfig({
  displayName: "episode__NextButton",
  componentId: "sc-1oaq4eh-17"
})(["height:8rem;display:block;float:right;"]);
const NextEpisodeTitle = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.label.withConfig({
  displayName: "episode__NextEpisodeTitle",
  componentId: "sc-1oaq4eh-18"
})(["margin-right:1rem;"]);
const LoadingImg = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.img.withConfig({
  displayName: "episode__LoadingImg",
  componentId: "sc-1oaq4eh-19"
})(["margin-top:4px;height:1.5rem;"]);

const Episode = () => {
  const {
    episode,
    isDeletingEpisode,
    isDeletedEpisode,
    isRecommending
  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(state => state.episode);
  const {
    id: myId
  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(state => state.user.me) || '';
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"])();
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_5__["useRouter"])();
  const onGoList = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(() => {
    router.push({
      pathname: `/book`,
      query: {
        bookid: episode.Book.id
      }
    }, `/book/${episode.Book.id}`);
  }, [episode && episode.Book]);
  const onUpdateEpisode = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(() => {
    router.push({
      pathname: `/episode/update`,
      query: {
        episodeid: episode.id
      }
    }, `/episode/update/${episode.id}`);
  }, [episode && episode.id]);
  const onDeleteEpisode = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(() => {
    dispatch({
      type: _reducers_episode__WEBPACK_IMPORTED_MODULE_6__["DELETE_EPISODE_REQUEST"],
      id: episode.id
    });
  }, [episode && episode.id]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (isDeletedEpisode) {
      dispatch({
        type: _reducers_episode__WEBPACK_IMPORTED_MODULE_6__["CHANGE_DELETEDEPISODE"]
      });
      router.push({
        pathname: `/book`,
        query: {
          bookid: episode.Book.id
        }
      }, `/book/${episode.Book.id}`);
    }
  }, [isDeletedEpisode, episode && episode.Book]);
  const onRecommenmdEpisode = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(() => {
    dispatch({
      type: _reducers_episode__WEBPACK_IMPORTED_MODULE_6__["ADD_RECOMMEND_REQUEST"],
      id: episode.id
    });
  }, [episode && episode.id]);
  const onGoPrevEpisode = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(() => {
    if (!episode.prev) {
      return alert('이전글이 존재하지 않습니다.');
    }

    router.push({
      pathname: '/episode',
      query: {
        id: episode.prev.id
      }
    }, `/episode/${episode.prev.id}`);
  }, [episode && episode.prev && episode.prev.id]);
  const onGoNextEpisode = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(() => {
    if (!episode.next) {
      return alert('다음글이 존재하지 않습니다.');
    }

    router.push({
      pathname: '/episode',
      query: {
        id: episode.next.id
      }
    }, `/episode/${episode.next.id}`);
  }, [episode && episode.next && episode.next.id]);
  return __jsx(EpisodeDiv, null, __jsx(react_helmet__WEBPACK_IMPORTED_MODULE_4___default.a, null, __jsx("title", null, episode && episode.Book.name), __jsx("style", {
    type: "text/css"
  }, `
            .ck-editor__editable { height: 200px;}
            .ck.ck-reset.ck-editor.ck-rounded-corners {margin: 1.5rem;}
          `)), __jsx(EpisodeTopDiv, null, __jsx(BookTitle, null, episode && episode.Book.name), __jsx(EpisodeTitle, null, episode && episode.title), __jsx(TopButtonDiv, null, episode && episode.Book.User.id === myId ? __jsx(_components_designs_Button__WEBPACK_IMPORTED_MODULE_8__["default"], {
    onClick: onUpdateEpisode
  }, "\uC218\uC815") : null, episode && episode.Book.User.id === myId ? __jsx(_components_designs_Button__WEBPACK_IMPORTED_MODULE_8__["default"], {
    color: "pink",
    onClick: onDeleteEpisode
  }, isDeletingEpisode ? __jsx(LoadingImg, {
    src: "/static/icons/loading_pink.gif"
  }) : '삭제') : null, myId ? __jsx(_components_designs_Button__WEBPACK_IMPORTED_MODULE_8__["default"], {
    onClick: onRecommenmdEpisode
  }, isRecommending ? __jsx(LoadingImg, {
    src: "/static/icons/loading_blue.gif"
  }) : '추천') : null, __jsx(_components_designs_Button__WEBPACK_IMPORTED_MODULE_8__["default"], {
    onClick: onGoList
  }, "\uBAA9\uB85D"), __jsx(_components_designs_Button__WEBPACK_IMPORTED_MODULE_8__["default"], null, __jsx("a", {
    href: "#comment"
  }, "\uB313\uAE00")))), __jsx(EpisodeSummaryDataDiv, null, __jsx(EpisodeSummaryContentDiv, null, __jsx(LeftLabel, null, "\uC791\uC131"), __jsx(RightLabel, null, episode && moment__WEBPACK_IMPORTED_MODULE_3___default()(episode.createdAt).format('YY.MM.DD HH:mm'))), __jsx(EpisodeSummaryContentDiv, null, __jsx(LeftLabel, null, "\uC870\uD68C"), __jsx(RightLabel, null, episode && episode.views)), __jsx(EpisodeSummaryContentDiv, null, __jsx(LeftLabel, null, "\uCD94\uCC9C"), __jsx(RightLabel, null, episode && episode.recommends)), __jsx(EpisodeSummaryContentDiv, null, __jsx(LeftLabel, null, "\uC791\uAC00"), __jsx(RightLabel, null, episode && episode.Book.User.nickname), ' 님')), __jsx(EpisodeContentDiv, {
    dangerouslySetInnerHTML: {
      __html: episode && episode.content
    }
  }), __jsx(EpisodePrevNextDiv, null, __jsx(PrevEpisodeDiv, null, __jsx(PrevButton, {
    onClick: onGoPrevEpisode
  }, '< Prev'), __jsx(PrveEpisodeTitle, null, episode && episode.prev && episode.prev.title || '이전글이 존재하지 않습니다.')), __jsx(NextEpisodeDiv, null, __jsx(NextEpisodeTitle, null, episode && episode.next && episode.next.title || '다음글이 존재하지 않습니다.'), __jsx(NextButton, {
    onClick: onGoNextEpisode
  }, 'Next >'))), __jsx(EpisodeComment, {
    id: "comment"
  }, __jsx(EpisodeCommentCountDiv, null, __jsx("label", null, "\uB313\uAE00 ", episode && episode.Episode_Comments.length, "\uAC1C")), episode && episode.Episode_Comments.map(comment => {
    return __jsx(_components_EpisodeCommentCard__WEBPACK_IMPORTED_MODULE_7__["default"], {
      key: +comment.id,
      comment: comment
    });
  })));
};

Episode.getInitialProps = async context => {
  const id = context.query.id;
  context.store.dispatch({
    type: _reducers_episode__WEBPACK_IMPORTED_MODULE_6__["LOAD_EPISODE_REQUEST"],
    id
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Episode);

/***/ }),

/***/ "./reducers/board.js":
/*!***************************!*\
  !*** ./reducers/board.js ***!
  \***************************/
/*! exports provided: initalState, LOAD_BOARDS_REQUEST, LOAD_BOARDS_SUCCESS, LOAD_BOARDS_FAILURE, LOAD_BOARD_REQUEST, LOAD_BOARD_SUCCESS, LOAD_BOARD_FAILURE, ADD_BOARD_REQUEST, ADD_BOARD_SUCCESS, ADD_BOARD_FAILURE, UPDATE_BOARD_REQUEST, UPDATE_BOARD_SUCCESS, UPDATE_BOARD_FAILURE, DELETE_BOARD_REQUEST, DELETE_BOARD_SUCCESS, DELETE_BOARD_FAILURE, ADD_COMMENT_REQUEST, ADD_COMMENT_SUCCESS, ADD_COMMENT_FAILURE, UPDATE_COMMENT_REQUEST, UPDATE_COMMENT_SUCCESS, UPDATE_COMMENT_FAILURE, DELETE_COMMENT_REQUEST, DELETE_COMMENT_SUCCESS, DELETE_COMMENT_FAILURE, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initalState", function() { return initalState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_BOARDS_REQUEST", function() { return LOAD_BOARDS_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_BOARDS_SUCCESS", function() { return LOAD_BOARDS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_BOARDS_FAILURE", function() { return LOAD_BOARDS_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_BOARD_REQUEST", function() { return LOAD_BOARD_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_BOARD_SUCCESS", function() { return LOAD_BOARD_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_BOARD_FAILURE", function() { return LOAD_BOARD_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_BOARD_REQUEST", function() { return ADD_BOARD_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_BOARD_SUCCESS", function() { return ADD_BOARD_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_BOARD_FAILURE", function() { return ADD_BOARD_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_BOARD_REQUEST", function() { return UPDATE_BOARD_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_BOARD_SUCCESS", function() { return UPDATE_BOARD_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_BOARD_FAILURE", function() { return UPDATE_BOARD_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DELETE_BOARD_REQUEST", function() { return DELETE_BOARD_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DELETE_BOARD_SUCCESS", function() { return DELETE_BOARD_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DELETE_BOARD_FAILURE", function() { return DELETE_BOARD_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_COMMENT_REQUEST", function() { return ADD_COMMENT_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_COMMENT_SUCCESS", function() { return ADD_COMMENT_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_COMMENT_FAILURE", function() { return ADD_COMMENT_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_COMMENT_REQUEST", function() { return UPDATE_COMMENT_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_COMMENT_SUCCESS", function() { return UPDATE_COMMENT_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_COMMENT_FAILURE", function() { return UPDATE_COMMENT_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DELETE_COMMENT_REQUEST", function() { return DELETE_COMMENT_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DELETE_COMMENT_SUCCESS", function() { return DELETE_COMMENT_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DELETE_COMMENT_FAILURE", function() { return DELETE_COMMENT_FAILURE; });
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! immer */ "immer");
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(immer__WEBPACK_IMPORTED_MODULE_0__);

const initalState = {
  boards: [],
  hasMoreBoards: false,
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

      default:
        {
          break;
        }
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (reducer);

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

/***/ 5:
/*!**************************************!*\
  !*** multi ./pages/episode/index.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Document\Backpot\front\pages\episode\index.js */"./pages/episode/index.js");


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

/***/ "moment":
/*!*************************!*\
  !*** external "moment" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("moment");

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
//# sourceMappingURL=episode.js.map