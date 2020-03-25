webpackHotUpdate("static\\development\\pages\\episode\\update.js",{

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
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! immer */ "./node_modules/immer/dist/immer.module.js");

var initalState = {
  episode: null,
  isAddingEpisode: false,
  isAddedEpisode: false,
  isRecommending: false,
  isUpdatingEpisode: false,
  isUpdatedEpisode: false,
  isDeletingEpisode: false,
  isDeletedEpisode: false
};
var LOAD_EPISODE_REQUEST = "LOAD_EPISODE_REQUEST";
var LOAD_EPISODE_SUCCESS = "LOAD_EPISODE_SUCCESS";
var LOAD_EPISODE_FAILURE = "LOAD_EPISODE_FAILURE";
var ADD_EPISODE_REQUEST = "ADD_EPISODE_REQUEST";
var ADD_EPISODE_SUCCESS = "ADD_EPISODE_SUCCESS";
var ADD_EPISODE_FAILURE = "ADD_EPISODE_FAILURE";
var CHANGE_ADDEDEPISODE = "CHANGE_ADDEDEPISODE";
var ADD_RECOMMEND_REQUEST = "ADD_RECOMMEND_REQUEST";
var ADD_RECOMMEND_SUCCESS = "ADD_RECOMMEND_SUCCESS";
var ADD_RECOMMEND_FAILURE = "ADD_RECOMMEND_FAILURE";
var UPDATE_EPISODE_REQUEST = "UPDATE_EPISODE_REQUEST";
var UPDATE_EPISODE_SUCCESS = "UPDATE_EPISODE_SUCCESS";
var UPDATE_EPISODE_FAILURE = "UPDATE_EPISODE_FAILURE";
var CHANGE_UPDATEDEPISODE = "CHANGE_UPDATEDEPISODE";
var DELETE_EPISODE_REQUEST = "DELETE_EPISODE_REQUEST";
var DELETE_EPISODE_SUCCESS = "DELETE_EPISODE_SUCCESS";
var DELETE_EPISODE_FAILURE = "DELETE_EPISODE_FAILURE";
var CHANGE_DELETEDEPISODE = "CHANGE_DELETEDEPISODE";

var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initalState;
  var action = arguments.length > 1 ? arguments[1] : undefined;
  return Object(immer__WEBPACK_IMPORTED_MODULE_0__["default"])(state, function (draft) {
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

      case DELETE_EPISODE_REQUEST:
        {
          draft.isDeletedEpisode = true;
          draft.isDeletingEpisode = false;
          break;
        }

      case DELETE_EPISODE_REQUEST:
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

/***/ })

})
//# sourceMappingURL=update.js.cd5d6b7bac836a060f6f.hot-update.js.map