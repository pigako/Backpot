webpackHotUpdate("static\\development\\pages\\episode\\update.js",{

/***/ "./pages/episode/update.js":
/*!*********************************!*\
  !*** ./pages/episode/update.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-helmet */ "./node_modules/react-helmet/lib/Helmet.js");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_designs_Button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/designs/Button */ "./components/designs/Button.js");
/* harmony import */ var _reducers_episode__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../reducers/episode */ "./reducers/episode.js");

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;







var UpdateEpisodeDiv = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "update__UpdateEpisodeDiv",
  componentId: "nxzyol-0"
})(["width:98%;margin:1rem 0rem 0rem 1rem;"]);
var UpdateEpisodeTopDiv = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "update__UpdateEpisodeTopDiv",
  componentId: "nxzyol-1"
})(["position:relative;margin-bottom:2rem;"]);
var BookTitle = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].h1.withConfig({
  displayName: "update__BookTitle",
  componentId: "nxzyol-2"
})(["font-weight:bold;font-size:1rem;margin-bottom:1rem;"]);
var TopButtonDiv = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "update__TopButtonDiv",
  componentId: "nxzyol-3"
})(["display:flex;position:absolute;top:5%;right:1%;"]);
var EpisodeForm = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].form.withConfig({
  displayName: "update__EpisodeForm",
  componentId: "nxzyol-4"
})([""]);
var UpdateEpisodeContentDiv = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "update__UpdateEpisodeContentDiv",
  componentId: "nxzyol-5"
})(["margin:1.5rem;"]);
var DivCard = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "update__DivCard",
  componentId: "nxzyol-6"
})(["display:flex;align-items:center;margin:1rem;width:100%;"]);
var DivCardLeft = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "update__DivCardLeft",
  componentId: "nxzyol-7"
})(["flex:1;"]);
var DivCardRight = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "update__DivCardRight",
  componentId: "nxzyol-8"
})(["flex:4;display:flex;& > input{width:calc(100% - 2rem);height:2rem;font-size:1rem;line-height:2rem;padding-left:10px;border:solid 2px #495057;border-radius:4px;transition:0.55s ease;&:hover{border:solid 2px #148cff;}&:focus{border:solid 2px #148cff;}}"]);
var CheckBox = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].input.withConfig({
  displayName: "update__CheckBox",
  componentId: "nxzyol-9"
})(["width:1.5rem !important;height:1.5rem !important;"]);
var UpdateEditorDiv = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "update__UpdateEditorDiv",
  componentId: "nxzyol-10"
})(["margin:1rem;& > label{width:100%;display:inline-block;margin-bottom:1rem;padding-bottom:1rem;border-bottom:solid 2px #495057;}"]);
var LoadingImg = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].img.withConfig({
  displayName: "update__LoadingImg",
  componentId: "nxzyol-11"
})(["margin-top:4px;height:1.5rem;"]);

var Update = function Update() {
  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(function (state) {
    return state.episode;
  }),
      episode = _useSelector.episode,
      isUpdatingEpisode = _useSelector.isUpdatingEpisode,
      isUpdatedEpisode = _useSelector.isUpdatedEpisode;

  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useDispatch"])();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(episode && episode.isNotice === 1 ? true : false),
      checkNotice = _useState[0],
      setCheckNotice = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(episode && episode.title),
      title = _useState2[0],
      setTitle = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(episode && episode.content.split('<br/><br/><p><strong>작가의 말</strong><hr><br/>')[0]),
      text = _useState3[0],
      setText = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(episode && episode.content.split('<br/><br/><p><strong>작가의 말</strong><hr><br/>')[1] || ''),
      writerComment = _useState4[0],
      setWriterComment = _useState4[1];

  var onChangeCheckNotice = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function () {
    setCheckNotice(!checkNotice);
  }, [checkNotice]);
  var onChangeTitle = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function (e) {
    setTitle(e.target.value);
  }, []);
  var editorRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])();

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      editorLoded = _useState5[0],
      setEditorLoded = _useState5[1];

  var _ref = editorRef.current || {},
      CKEditor = _ref.CKEditor,
      ClassicEditor = _ref.ClassicEditor;

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    editorRef.current = {
      CKEditor: __webpack_require__(/*! @ckeditor/ckeditor5-react */ "./node_modules/@ckeditor/ckeditor5-react/dist/ckeditor.js"),
      ClassicEditor: __webpack_require__(/*! @ckeditor/ckeditor5-build-classic */ "./node_modules/@ckeditor/ckeditor5-build-classic/build/ckeditor.js")
    };
    setEditorLoded(true);
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if (isUpdatedEpisode) {
      dispatch({
        type: _reducers_episode__WEBPACK_IMPORTED_MODULE_7__["CHANGE_UPDATEDEPISODE"]
      });
      next_router__WEBPACK_IMPORTED_MODULE_5___default.a.push({
        pathname: "/episode",
        query: {
          id: episode.id
        }
      }, "/episode/".concat(episode.id));
    }
  }, [isUpdatedEpisode, episode && episode.id]);
  var onCancleUpdate = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function () {
    next_router__WEBPACK_IMPORTED_MODULE_5___default.a.back();
  }, []); //

  var onWriteEpisode = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function (e) {
    e.preventDefault();
    var episodeContent = text + '<br/><br/><p><strong>작가의 말</strong><hr><br/>' + writerComment;
    dispatch({
      type: _reducers_episode__WEBPACK_IMPORTED_MODULE_7__["UPDATE_EPISODE_REQUEST"],
      data: {
        id: episode && episode.id,
        title: title,
        content: episodeContent,
        notice: checkNotice ? 1 : 0
      }
    });
  }, [episode && episode.id, checkNotice, title, text, writerComment]);
  return __jsx(UpdateEpisodeDiv, null, __jsx(react_helmet__WEBPACK_IMPORTED_MODULE_4___default.a, null, __jsx("title", null, episode && episode.title), __jsx("style", {
    type: "text/css"
  }, "\n            .ck.ck-editor {width:100%;}\n            .ck-editor__editable { height: 500px;}\n          ")), __jsx(EpisodeForm, {
    onSubmit: onWriteEpisode
  }, __jsx(UpdateEpisodeTopDiv, null, __jsx(BookTitle, null, episode && episode.title), __jsx(TopButtonDiv, null, __jsx(_components_designs_Button__WEBPACK_IMPORTED_MODULE_6__["default"], {
    color: "pink",
    type: "button",
    onClick: onCancleUpdate
  }, "\uCDE8\uC18C"), __jsx(_components_designs_Button__WEBPACK_IMPORTED_MODULE_6__["default"], {
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
    onChange: function onChange(event, editor) {
      var data = editor.getData();
      setText(data);
    }
  }) : __jsx("p", null, "Editor Loding")), __jsx(UpdateEditorDiv, null, __jsx("label", null, "\uC791\uAC00\uC758 \uB9D0"), editorLoded ? __jsx(CKEditor, {
    editor: ClassicEditor,
    data: writerComment,
    onChange: function onChange(event, editor) {
      var data = editor.getData();
      setWriterComment(data);
    }
  }) : __jsx("p", null, "Editor Loding")))));
};

Update.getInitialProps = function _callee(context) {
  var episodeId;
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          episodeId = context.query.episodeid;
          context.store.dispatch({
            type: _reducers_episode__WEBPACK_IMPORTED_MODULE_7__["LOAD_EPISODE_REQUEST"],
            id: episodeId
          });

        case 2:
        case "end":
          return _context.stop();
      }
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Update);

/***/ })

})
//# sourceMappingURL=update.js.d030d861e31df4489dbf.hot-update.js.map