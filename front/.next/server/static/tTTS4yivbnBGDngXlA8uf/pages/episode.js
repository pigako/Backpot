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

/***/ "/3uN":
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

// EXTERNAL MODULE: ./reducers/episode.js
var reducers_episode = __webpack_require__("I409");

// CONCATENATED MODULE: ./components/EpisodeCommentCard.js
var __jsx = external_react_default.a.createElement;





const SCommentCard = external_styled_components_default.a.div.withConfig({
  displayName: "EpisodeCommentCard__SCommentCard",
  componentId: "sc-1889k7p-0"
})(["margin:1.5rem;"]);
const CommentCardTop = external_styled_components_default.a.div.withConfig({
  displayName: "EpisodeCommentCard__CommentCardTop",
  componentId: "sc-1889k7p-1"
})(["height:2rem;background:#f7f7f7;border-bottom:solid 1px #6441a5;display:inline-block;width:100%;font-size:1rem;& > label{line-height:2rem;}"]);
const CommentCardNickname = external_styled_components_default.a.label.withConfig({
  displayName: "EpisodeCommentCard__CommentCardNickname",
  componentId: "sc-1889k7p-2"
})(["font-weight:bold;margin-left:1rem;"]);
const CommentCardCreateLabel = external_styled_components_default.a.label.withConfig({
  displayName: "EpisodeCommentCard__CommentCardCreateLabel",
  componentId: "sc-1889k7p-3"
})(["display:block;float:right;"]);
const CommentUpDelButtonDiv = external_styled_components_default.a.div.withConfig({
  displayName: "EpisodeCommentCard__CommentUpDelButtonDiv",
  componentId: "sc-1889k7p-4"
})(["font-size:1rem;display:inline-block;float:right;margin-right:1rem;line-height:2rem;& > a{margin-left:10px;margin-right:10px;cursor:pointer;&:hover{color:#148cff;}}"]);
const CommentCardContent = external_styled_components_default.a.div.withConfig({
  displayName: "EpisodeCommentCard__CommentCardContent",
  componentId: "sc-1889k7p-5"
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
        type: reducers_episode["w" /* UPDATE_EPISODE_COMMENT_REQUEST */],
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
      type: reducers_episode["n" /* DELETE_EPISODE_COMMENT_REQUEST */],
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

/* harmony default export */ var EpisodeCommentCard = (CommentCard);
// EXTERNAL MODULE: ./components/designs/Button.js
var Button = __webpack_require__("1BYw");

// CONCATENATED MODULE: ./pages/episode/index.js
var episode_jsx = external_react_default.a.createElement;









const EpisodeDiv = external_styled_components_default.a.div.withConfig({
  displayName: "episode__EpisodeDiv",
  componentId: "sc-1oaq4eh-0"
})(["width:98%;margin:1rem 0rem 0rem 1rem;"]);
const EpisodeTopDiv = external_styled_components_default.a.div.withConfig({
  displayName: "episode__EpisodeTopDiv",
  componentId: "sc-1oaq4eh-1"
})(["border-bottom:solid 2px #495057;position:relative;"]);
const BookTitle = external_styled_components_default.a.h1.withConfig({
  displayName: "episode__BookTitle",
  componentId: "sc-1oaq4eh-2"
})(["font-weight:bold;font-size:1rem;margin-bottom:1rem;"]);
const EpisodeTitle = external_styled_components_default.a.h1.withConfig({
  displayName: "episode__EpisodeTitle",
  componentId: "sc-1oaq4eh-3"
})(["font-weight:bold;font-size:2rem;margin-bottom:1rem;"]);
const TopButtonDiv = external_styled_components_default.a.div.withConfig({
  displayName: "episode__TopButtonDiv",
  componentId: "sc-1oaq4eh-4"
})(["display:flex;position:absolute;top:5%;right:1%;"]);
const EpisodeSummaryDataDiv = external_styled_components_default.a.div.withConfig({
  displayName: "episode__EpisodeSummaryDataDiv",
  componentId: "sc-1oaq4eh-5"
})(["border-bottom:solid 2px #495057;display:flex;align-items:center;justify-content:flex-end;"]);
const EpisodeSummaryContentDiv = external_styled_components_default.a.div.withConfig({
  displayName: "episode__EpisodeSummaryContentDiv",
  componentId: "sc-1oaq4eh-6"
})(["padding:1rem;font-size:1rem;"]);
const LeftLabel = external_styled_components_default.a.label.withConfig({
  displayName: "episode__LeftLabel",
  componentId: "sc-1oaq4eh-7"
})(["margin-right:1rem;"]);
const RightLabel = external_styled_components_default.a.label.withConfig({
  displayName: "episode__RightLabel",
  componentId: "sc-1oaq4eh-8"
})(["font-weight:bold;"]);
const EpisodeContentDiv = external_styled_components_default.a.div.withConfig({
  displayName: "episode__EpisodeContentDiv",
  componentId: "sc-1oaq4eh-9"
})(["margin:1.5rem;font-size:1rem;line-height:1.5rem;"]);
const EpisodeComment = external_styled_components_default.a.div.withConfig({
  displayName: "episode__EpisodeComment",
  componentId: "sc-1oaq4eh-10"
})(["border-top:solid 3px #495057;margin-bottom:2rem;"]);
const EpisodeCommentCountDiv = external_styled_components_default.a.div.withConfig({
  displayName: "episode__EpisodeCommentCountDiv",
  componentId: "sc-1oaq4eh-11"
})(["height:2rem;background:#e7e7e7;display:flex;align-items:center;border-bottom:solid 3px #495057;& > label{font-size:1rem;font-weight:bold;margin-left:1rem;}"]);
const EpisodePrevNextDiv = external_styled_components_default.a.div.withConfig({
  displayName: "episode__EpisodePrevNextDiv",
  componentId: "sc-1oaq4eh-12"
})(["height:8rem;width:100%;border-top:solid 2px #495057;padding-top:1rem;margin-bottom:2rem;"]);
const PrevEpisodeDiv = external_styled_components_default.a.div.withConfig({
  displayName: "episode__PrevEpisodeDiv",
  componentId: "sc-1oaq4eh-13"
})(["width:49.5%;display:inline-block;"]);
const PrevButton = external_styled_components_default()(Button["a" /* default */]).withConfig({
  displayName: "episode__PrevButton",
  componentId: "sc-1oaq4eh-14"
})(["height:8rem;display:inline-block;"]);
const PrveEpisodeTitle = external_styled_components_default.a.label.withConfig({
  displayName: "episode__PrveEpisodeTitle",
  componentId: "sc-1oaq4eh-15"
})(["margin-left:1rem;"]);
const NextEpisodeDiv = external_styled_components_default.a.div.withConfig({
  displayName: "episode__NextEpisodeDiv",
  componentId: "sc-1oaq4eh-16"
})(["width:49.5%;float:right;display:flex;align-items:center;justify-content:flex-end;"]);
const NextButton = external_styled_components_default()(Button["a" /* default */]).withConfig({
  displayName: "episode__NextButton",
  componentId: "sc-1oaq4eh-17"
})(["height:8rem;display:block;float:right;"]);
const NextEpisodeTitle = external_styled_components_default.a.label.withConfig({
  displayName: "episode__NextEpisodeTitle",
  componentId: "sc-1oaq4eh-18"
})(["margin-right:1rem;"]);
const LoadingImg = external_styled_components_default.a.img.withConfig({
  displayName: "episode__LoadingImg",
  componentId: "sc-1oaq4eh-19"
})(["margin-top:4px;height:1.5rem;"]);
const CommentDiv = external_styled_components_default.a.div.withConfig({
  displayName: "episode__CommentDiv",
  componentId: "sc-1oaq4eh-20"
})(["height:330px;"]);
const CommentButton = external_styled_components_default()(Button["a" /* default */]).withConfig({
  displayName: "episode__CommentButton",
  componentId: "sc-1oaq4eh-21"
})(["width:8rem;margin-right:1.5rem;float:right;"]);

const Episode = () => {
  const {
    episode,
    isDeletingEpisode,
    isDeletedEpisode,
    isRecommending,
    isAddingComment,
    commentAdded
  } = Object(external_react_redux_["useSelector"])(state => state.episode);
  const {
    id: myId
  } = Object(external_react_redux_["useSelector"])(state => state.user.me) || '';
  const {
    0: userComment,
    1: setUserComment
  } = Object(external_react_["useState"])('');
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
  Object(external_react_["useEffect"])(() => {
    editorRef.current = {
      CKEditor: __webpack_require__("fRMJ"),
      ClassicEditor: __webpack_require__("As6A")
    };
    setEditorLoded(true);
  }, []);
  const onGoList = Object(external_react_["useCallback"])(() => {
    router.push({
      pathname: `/book`,
      query: {
        bookid: episode.Book.id
      }
    }, `/book/${episode.Book.id}`);
  }, [episode && episode.Book]);
  const onUpdateEpisode = Object(external_react_["useCallback"])(() => {
    router.push({
      pathname: `/episode/update`,
      query: {
        episodeid: episode.id
      }
    }, `/episode/update/${episode.id}`);
  }, [episode && episode.id]);
  const onDeleteEpisode = Object(external_react_["useCallback"])(() => {
    dispatch({
      type: reducers_episode["q" /* DELETE_EPISODE_REQUEST */],
      id: episode.id
    });
  }, [episode && episode.id]);
  Object(external_react_["useEffect"])(() => {
    if (isDeletedEpisode) {
      dispatch({
        type: reducers_episode["k" /* CHANGE_DELETEDEPISODE */]
      });
      router.push({
        pathname: `/book`,
        query: {
          bookid: episode.Book.id
        }
      }, `/book/${episode.Book.id}`);
    }
  }, [isDeletedEpisode, episode && episode.Book]);
  const onRecommenmdEpisode = Object(external_react_["useCallback"])(() => {
    dispatch({
      type: reducers_episode["h" /* ADD_RECOMMEND_REQUEST */],
      id: episode.id
    });
  }, [episode && episode.id]);
  const onGoPrevEpisode = Object(external_react_["useCallback"])(() => {
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
  const onGoNextEpisode = Object(external_react_["useCallback"])(() => {
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
  const onCreateComment = Object(external_react_["useCallback"])(e => {
    if (!userComment.trim()) {
      return;
    }

    dispatch({
      type: reducers_episode["b" /* ADD_EPISODE_COMMENT_REQUEST */],
      data: {
        episodeId: episode.id,
        content: userComment
      }
    });
  }, [episode && episode.id, userComment]);
  Object(external_react_["useEffect"])(() => {
    if (commentAdded) {
      setUserComment('');
    }
  }, [commentAdded]);
  return episode_jsx(EpisodeDiv, null, episode_jsx(external_react_helmet_default.a, null, episode_jsx("title", null, episode && episode.Book.name), episode_jsx("style", {
    type: "text/css"
  }, `
            .ck-editor__editable { height: 200px;}
            .ck.ck-reset.ck-editor.ck-rounded-corners {margin: 1.5rem;}
          `)), episode_jsx(EpisodeTopDiv, null, episode_jsx(BookTitle, null, episode && episode.Book.name), episode_jsx(EpisodeTitle, null, episode && episode.title), episode_jsx(TopButtonDiv, null, episode && episode.Book.User.id === myId ? episode_jsx(Button["a" /* default */], {
    onClick: onUpdateEpisode
  }, "\uC218\uC815") : null, episode && episode.Book.User.id === myId ? episode_jsx(Button["a" /* default */], {
    color: "pink",
    onClick: onDeleteEpisode
  }, isDeletingEpisode ? episode_jsx(LoadingImg, {
    src: "/static/icons/loading_pink.gif"
  }) : '삭제') : null, myId ? episode_jsx(Button["a" /* default */], {
    onClick: onRecommenmdEpisode
  }, isRecommending ? episode_jsx(LoadingImg, {
    src: "/static/icons/loading_blue.gif"
  }) : '추천') : null, episode_jsx(Button["a" /* default */], {
    onClick: onGoList
  }, "\uBAA9\uB85D"), episode_jsx(Button["a" /* default */], null, episode_jsx("a", {
    href: "#comment"
  }, "\uB313\uAE00")))), episode_jsx(EpisodeSummaryDataDiv, null, episode_jsx(EpisodeSummaryContentDiv, null, episode_jsx(LeftLabel, null, "\uC791\uC131"), episode_jsx(RightLabel, null, episode && external_moment_default()(episode.createdAt).format('YY.MM.DD HH:mm'))), episode_jsx(EpisodeSummaryContentDiv, null, episode_jsx(LeftLabel, null, "\uC870\uD68C"), episode_jsx(RightLabel, null, episode && episode.views)), episode_jsx(EpisodeSummaryContentDiv, null, episode_jsx(LeftLabel, null, "\uCD94\uCC9C"), episode_jsx(RightLabel, null, episode && episode.recommends)), episode_jsx(EpisodeSummaryContentDiv, null, episode_jsx(LeftLabel, null, "\uC791\uAC00"), episode_jsx(RightLabel, null, episode && episode.Book.User.nickname), ' 님')), episode_jsx(EpisodeContentDiv, {
    dangerouslySetInnerHTML: {
      __html: episode && episode.content
    }
  }), episode_jsx(EpisodePrevNextDiv, null, episode_jsx(PrevEpisodeDiv, null, episode_jsx(PrevButton, {
    onClick: onGoPrevEpisode
  }, '< Prev'), episode_jsx(PrveEpisodeTitle, null, episode && episode.prev && episode.prev.title || '이전글이 존재하지 않습니다.')), episode_jsx(NextEpisodeDiv, null, episode_jsx(NextEpisodeTitle, null, episode && episode.next && episode.next.title || '다음글이 존재하지 않습니다.'), episode_jsx(NextButton, {
    onClick: onGoNextEpisode
  }, 'Next >'))), episode_jsx(EpisodeComment, {
    id: "comment"
  }, episode_jsx(EpisodeCommentCountDiv, null, episode_jsx("label", null, "\uB313\uAE00 ", episode && episode.Episode_Comments.length, "\uAC1C")), episode && episode.Episode_Comments.map(comment => {
    return episode_jsx(EpisodeCommentCard, {
      key: +comment.id,
      comment: comment
    });
  })), myId && episode_jsx(CommentDiv, null, editorLoded ? episode_jsx(CKEditor, {
    key: 'comment',
    editor: ClassicEditor,
    data: userComment,
    onChange: (event, editor) => {
      const data = editor.getData();
      setUserComment(data);
    }
  }) : episode_jsx("p", null, "Editor Loding"), episode_jsx(CommentButton, {
    onClick: onCreateComment
  }, isAddingComment ? episode_jsx(LoadingImg, {
    src: "/static/icons/loading_blue.gif"
  }) : `댓글쓰기`)));
};

Episode.getInitialProps = async context => {
  const id = context.query.id;
  context.store.dispatch({
    type: reducers_episode["t" /* LOAD_EPISODE_REQUEST */],
    id
  });
};

/* harmony default export */ var pages_episode = __webpack_exports__["default"] = (Episode);

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

/***/ 7:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("/3uN");


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

/***/ "fRMJ":
/***/ (function(module, exports) {

module.exports = require("@ckeditor/ckeditor5-react");

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