self["webpackHotUpdatefrontend"]("main",{

/***/ "./src/components/functions.ts":
/*!*************************************!*\
  !*** ./src/components/functions.ts ***!
  \*************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "removeClassName": () => (/* binding */ removeClassName),
/* harmony export */   "addClassNameAtElement": () => (/* binding */ addClassNameAtElement),
/* harmony export */   "scrollToItemById": () => (/* binding */ scrollToItemById)
/* harmony export */ });
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.id);

var removeClassName = function removeClassName(className) {
  var element = document.querySelector(".".concat(className));
  element === null || element === void 0 ? void 0 : element.classList.remove(className);
};
var addClassNameAtElement = function addClassNameAtElement(element, className) {
  element.classList.add(className);
};
var scrollToItemById = function scrollToItemById(id) {
  var element = document.querySelector("#".concat(id));
  element.scrollIntoView({
    behavior: 'smooth'
  });
};

const currentExports = __react_refresh_utils__.getModuleExports(module.id);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.id);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.id].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("e75dd4a15e0268e13b99")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udGVuZC8uL3NyYy9jb21wb25lbnRzL2Z1bmN0aW9ucy50cyIsIndlYnBhY2s6Ly9mcm9udGVuZC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwibmFtZXMiOlsicmVtb3ZlQ2xhc3NOYW1lIiwiY2xhc3NOYW1lIiwiZWxlbWVudCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImNsYXNzTGlzdCIsInJlbW92ZSIsImFkZENsYXNzTmFtZUF0RWxlbWVudCIsImFkZCIsInNjcm9sbFRvSXRlbUJ5SWQiLCJpZCIsInNjcm9sbEludG9WaWV3IiwiYmVoYXZpb3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU8sSUFBTUEsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixDQUFDQyxTQUFELEVBQXVCO0FBQ3BELE1BQU1DLE9BQU8sR0FBR0MsUUFBUSxDQUFDQyxhQUFULFlBQTJCSCxTQUEzQixFQUFoQjtBQUVBQyxTQUFPLFNBQVAsSUFBQUEsT0FBTyxXQUFQLFlBQUFBLE9BQU8sQ0FBRUcsU0FBVCxDQUFtQkMsTUFBbkIsQ0FBMEJMLFNBQTFCO0FBQ0QsQ0FKTTtBQU1BLElBQU1NLHFCQUFxQixHQUFHLFNBQXhCQSxxQkFBd0IsQ0FDbkNMLE9BRG1DLEVBRW5DRCxTQUZtQyxFQUdoQztBQUNIQyxTQUFPLENBQUNHLFNBQVIsQ0FBa0JHLEdBQWxCLENBQXNCUCxTQUF0QjtBQUNELENBTE07QUFPQSxJQUFNUSxnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQW1CLENBQUNDLEVBQUQsRUFBZ0I7QUFDOUMsTUFBTVIsT0FBTyxHQUFHQyxRQUFRLENBQUNDLGFBQVQsWUFBMkJNLEVBQTNCLEVBQWhCO0FBRUFSLFNBQU8sQ0FBQ1MsY0FBUixDQUF1QjtBQUNyQkMsWUFBUSxFQUFFO0FBRFcsR0FBdkI7QUFHRCxDQU5NLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQ2JQLHNEIiwiZmlsZSI6Im1haW4uYjQxYzlmMjNlZTdhYWE0MDQ0YzcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCByZW1vdmVDbGFzc05hbWUgPSAoY2xhc3NOYW1lOiBzdHJpbmcpID0+IHtcbiAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC4ke2NsYXNzTmFtZX1gKSBhcyBIVE1MRWxlbWVudDtcblxuICBlbGVtZW50Py5jbGFzc0xpc3QucmVtb3ZlKGNsYXNzTmFtZSk7XG59O1xuXG5leHBvcnQgY29uc3QgYWRkQ2xhc3NOYW1lQXRFbGVtZW50ID0gKFxuICBlbGVtZW50OiBIVE1MRWxlbWVudCxcbiAgY2xhc3NOYW1lOiBzdHJpbmcsXG4pID0+IHtcbiAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XG59O1xuXG5leHBvcnQgY29uc3Qgc2Nyb2xsVG9JdGVtQnlJZCA9IChpZDogc3RyaW5nKSA9PiB7XG4gIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjJHtpZH1gKSBhcyBIVE1MRWxlbWVudDtcblxuICBlbGVtZW50LnNjcm9sbEludG9WaWV3KHtcbiAgICBiZWhhdmlvcjogJ3Ntb290aCcsXG4gIH0pO1xufTtcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcImU3NWRkNGExNWUwMjY4ZTEzYjk5XCIpIl0sInNvdXJjZVJvb3QiOiIifQ==