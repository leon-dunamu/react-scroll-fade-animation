self["webpackHotUpdatefrontend"]("main",{

/***/ "./src/observe/ObserveAnimation.tsx":
/*!******************************************!*\
  !*** ./src/observe/ObserveAnimation.tsx ***!
  \******************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ScrollAnimationItem)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _styles_index_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/index.css */ "./src/styles/index.css");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _utils_functions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/functions */ "./src/utils/functions.ts");
/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/constants */ "./src/utils/constants.ts");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.id);





var _s = __webpack_require__.$Refresh$.signature();

// import './Scroll.css';




function ScrollAnimationItem(_ref) {
  _s();

  var children = _ref.children,
      _ref$delay = _ref.delay,
      delay = _ref$delay === void 0 ? 0 : _ref$delay,
      _ref$duration = _ref.duration,
      duration = _ref$duration === void 0 ? 1200 : _ref$duration,
      className = _ref.className,
      _ref$offset = _ref.offset,
      offset = _ref$offset === void 0 ? {
    x: 0,
    y: 0,
    z: 0
  } : _ref$offset,
      _ref$threshold = _ref.threshold,
      threshold = _ref$threshold === void 0 ? 0.7 : _ref$threshold,
      _ref$reAnimate = _ref.reAnimate,
      reAnimate = _ref$reAnimate === void 0 ? false : _ref$reAnimate,
      rest = (0,_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__.default)(_ref, ["children", "delay", "duration", "className", "offset", "threshold", "reAnimate"]);

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_4__.useState(false),
      _React$useState2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__.default)(_React$useState, 2),
      showed = _React$useState2[0],
      setShowed = _React$useState2[1];

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_4__.useState({
    y: 1,
    ratio: -1
  }),
      _React$useState4 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__.default)(_React$useState3, 2),
      previous = _React$useState4[0],
      setPrevious = _React$useState4[1];

  var ref = react__WEBPACK_IMPORTED_MODULE_4__.useRef(null);
  var style = useStyles(offset);
  var hashClassName = (0,_utils_functions__WEBPACK_IMPORTED_MODULE_5__.generateHashStringByLength)(5);
  var newClassName = "".concat(className || _utils_constants__WEBPACK_IMPORTED_MODULE_6__.basicClassName, " ssa-").concat(hashClassName);
  var handleScroll = react__WEBPACK_IMPORTED_MODULE_4__.useCallback(function (_ref2) {
    var _ref3 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__.default)(_ref2, 1),
        entry = _ref3[0];

    var element = ref.current;
    var currentY = entry.boundingClientRect.y;
    var currentRatio = entry.intersectionRatio;
    var isIntersecting = entry.isIntersecting; // Scrolling down/up

    if (currentY < previous.y) {
      if (currentRatio > previous.ratio && isIntersecting && !showed) {
        (0,_utils_functions__WEBPACK_IMPORTED_MODULE_5__.setShowObserveAnimation)(element, duration, delay);
        setTimeout(function () {
          setShowed(true);
        }, duration / 2);
      }
    } else if (currentY > previous.y && !isIntersecting && showed && reAnimate) {
      if (currentRatio < previous.ratio) {
        (0,_utils_functions__WEBPACK_IMPORTED_MODULE_5__.setHideObserveAnimation)(element, duration, delay, offset);
        setTimeout(function () {
          setShowed(false);
        }, duration / 2);
      }
    }

    if (previous.y != currentY && previous.ratio != currentRatio) {
      setPrevious({
        y: currentY,
        ratio: currentRatio
      });
    }
  }, [previous, showed]); // React.useEffect(function () {
  //   createKeyframes();
  // }, []);

  react__WEBPACK_IMPORTED_MODULE_4__.useEffect(function () {
    var current = ref.current;

    if (current) {
      var observer = new IntersectionObserver(handleScroll, {
        threshold: threshold
      });
      observer.observe(current);
      return function () {
        return observer && observer.disconnect();
      };
    }

    return;
  }, [handleScroll]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("div", (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__.default)({
    className: newClassName,
    style: style,
    ref: ref
  }, rest), children);
}

_s(ScrollAnimationItem, "rioTVVDZM1IIcNnnjNe/xl/gsm4=", false, function () {
  return [useStyles];
});

_c = ScrollAnimationItem;

function useStyles(_ref4) {
  var _ref4$x = _ref4.x,
      x = _ref4$x === void 0 ? 0 : _ref4$x,
      _ref4$y = _ref4.y,
      y = _ref4$y === void 0 ? 0 : _ref4$y,
      _ref4$z = _ref4.z,
      z = _ref4$z === void 0 ? 0 : _ref4$z;
  return {
    opacity: 0,
    transform: "translate3d(".concat(-x, "px, ").concat(-y, "px, ").concat(-z, "px)")
  };
}

var _c;

__webpack_require__.$Refresh$.register(_c, "ScrollAnimationItem");

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

/***/ }),

/***/ "./src/observe/index.ts":
/*!******************************!*\
  !*** ./src/observe/index.ts ***!
  \******************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _ObserveAnimation__WEBPACK_IMPORTED_MODULE_0__.default)
/* harmony export */ });
/* harmony import */ var _ObserveAnimation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ObserveAnimation */ "./src/observe/ObserveAnimation.tsx");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.id);



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

/***/ }),

/***/ "./src/views/Body/BodyContent.tsx":
/*!****************************************!*\
  !*** ./src/views/Body/BodyContent.tsx ***!
  \****************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ BodyContent)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var src_components_PrismCode__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/components/PrismCode */ "./src/components/PrismCode.tsx");
/* harmony import */ var src_observe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/observe */ "./src/observe/index.ts");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.id);


// import ScrollFadeAnimationItem from 'react-scroll-fade-animation';


function BodyContent(_ref) {
  var title = _ref.title,
      description = _ref.description,
      code = _ref.code,
      id = _ref.id,
      type = _ref.type;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: 'body-content'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(src_observe__WEBPACK_IMPORTED_MODULE_2__.default // path={id === 'init' ? 'right' : id}
  , {
    id: "rsfa-".concat(id),
    className: 'body-scroll-content',
    offset: {
      y: 100
    },
    reAnimate: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h1", null, title), description.map(function (desc) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      key: desc,
      className: 'body-content-desc'
    }, desc);
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(src_components_PrismCode__WEBPACK_IMPORTED_MODULE_1__.default, {
    code: code,
    type: type
  })));
}
_c = BodyContent;

var _c;

__webpack_require__.$Refresh$.register(_c, "BodyContent");

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
/******/ 	__webpack_require__.h = () => ("317cc6c6fb8bf10c8cb4")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udGVuZC8uL3NyYy9vYnNlcnZlL09ic2VydmVBbmltYXRpb24udHN4Iiwid2VicGFjazovL2Zyb250ZW5kLy4vc3JjL3ZpZXdzL0JvZHkvQm9keUNvbnRlbnQudHN4Iiwid2VicGFjazovL2Zyb250ZW5kL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJuYW1lcyI6WyJTY3JvbGxBbmltYXRpb25JdGVtIiwiY2hpbGRyZW4iLCJkZWxheSIsImR1cmF0aW9uIiwiY2xhc3NOYW1lIiwib2Zmc2V0IiwieCIsInkiLCJ6IiwidGhyZXNob2xkIiwicmVBbmltYXRlIiwicmVzdCIsIlJlYWN0Iiwic2hvd2VkIiwic2V0U2hvd2VkIiwicmF0aW8iLCJwcmV2aW91cyIsInNldFByZXZpb3VzIiwicmVmIiwic3R5bGUiLCJ1c2VTdHlsZXMiLCJoYXNoQ2xhc3NOYW1lIiwiZ2VuZXJhdGVIYXNoU3RyaW5nQnlMZW5ndGgiLCJuZXdDbGFzc05hbWUiLCJiYXNpY0NsYXNzTmFtZSIsImhhbmRsZVNjcm9sbCIsImVudHJ5IiwiZWxlbWVudCIsImN1cnJlbnQiLCJjdXJyZW50WSIsImJvdW5kaW5nQ2xpZW50UmVjdCIsImN1cnJlbnRSYXRpbyIsImludGVyc2VjdGlvblJhdGlvIiwiaXNJbnRlcnNlY3RpbmciLCJzZXRTaG93T2JzZXJ2ZUFuaW1hdGlvbiIsInNldFRpbWVvdXQiLCJzZXRIaWRlT2JzZXJ2ZUFuaW1hdGlvbiIsIm9ic2VydmVyIiwiSW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCJvYnNlcnZlIiwiZGlzY29ubmVjdCIsIm9wYWNpdHkiLCJ0cmFuc2Zvcm0iLCJCb2R5Q29udGVudCIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJjb2RlIiwiaWQiLCJ0eXBlIiwibWFwIiwiZGVzYyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBTUE7QUFHZSxTQUFTQSxtQkFBVCxPQVVjO0FBQUE7O0FBQUEsTUFUM0JDLFFBUzJCLFFBVDNCQSxRQVMyQjtBQUFBLHdCQVIzQkMsS0FRMkI7QUFBQSxNQVIzQkEsS0FRMkIsMkJBUm5CLENBUW1CO0FBQUEsMkJBUDNCQyxRQU8yQjtBQUFBLE1BUDNCQSxRQU8yQiw4QkFQaEIsSUFPZ0I7QUFBQSxNQUwzQkMsU0FLMkIsUUFMM0JBLFNBSzJCO0FBQUEseUJBSjNCQyxNQUkyQjtBQUFBLE1BSjNCQSxNQUkyQiw0QkFKbEI7QUFBQ0MsS0FBQyxFQUFHLENBQUw7QUFBUUMsS0FBQyxFQUFHLENBQVo7QUFBZUMsS0FBQyxFQUFHO0FBQW5CLEdBSWtCO0FBQUEsNEJBSDNCQyxTQUcyQjtBQUFBLE1BSDNCQSxTQUcyQiwrQkFIZixHQUdlO0FBQUEsNEJBRjNCQyxTQUUyQjtBQUFBLE1BRjNCQSxTQUUyQiwrQkFGZixLQUVlO0FBQUEsTUFEeEJDLElBQ3dCOztBQUMzQix3QkFBNEJDLDJDQUFBLENBQWUsS0FBZixDQUE1QjtBQUFBO0FBQUEsTUFBT0MsTUFBUDtBQUFBLE1BQWVDLFNBQWY7O0FBQ0EseUJBQWdDRiwyQ0FBQSxDQUFlO0FBQzdDTCxLQUFDLEVBQUcsQ0FEeUM7QUFFN0NRLFNBQUssRUFBRyxDQUFDO0FBRm9DLEdBQWYsQ0FBaEM7QUFBQTtBQUFBLE1BQU9DLFFBQVA7QUFBQSxNQUFpQkMsV0FBakI7O0FBSUEsTUFBTUMsR0FBRyxHQUFHTix5Q0FBQSxDQUE2QixJQUE3QixDQUFaO0FBQ0EsTUFBTU8sS0FBSyxHQUFHQyxTQUFTLENBQUNmLE1BQUQsQ0FBdkI7QUFFQSxNQUFNZ0IsYUFBYSxHQUFHQyw0RUFBMEIsQ0FBQyxDQUFELENBQWhEO0FBQ0EsTUFBTUMsWUFBWSxhQUFNbkIsU0FBUyxJQUFJb0IsNERBQW5CLGtCQUF5Q0gsYUFBekMsQ0FBbEI7QUFHQSxNQUFNSSxZQUEyQyxHQUFFYiw4Q0FBQSxDQUFrQixpQkFBaUI7QUFBQTtBQUFBLFFBQVBjLEtBQU87O0FBQ3BGLFFBQU1DLE9BQU8sR0FBSVQsR0FBRyxDQUFDVSxPQUFyQjtBQUNBLFFBQU1DLFFBQVEsR0FBR0gsS0FBSyxDQUFDSSxrQkFBTixDQUF5QnZCLENBQTFDO0FBQ0EsUUFBTXdCLFlBQVksR0FBR0wsS0FBSyxDQUFDTSxpQkFBM0I7QUFDQSxRQUFNQyxjQUFjLEdBQUdQLEtBQUssQ0FBQ08sY0FBN0IsQ0FKb0YsQ0FNcEY7O0FBQ0EsUUFBSUosUUFBUSxHQUFHYixRQUFRLENBQUNULENBQXhCLEVBQTRCO0FBQzFCLFVBQUl3QixZQUFZLEdBQUdmLFFBQVEsQ0FBQ0QsS0FBeEIsSUFBaUNrQixjQUFqQyxJQUFtRCxDQUFDcEIsTUFBeEQsRUFBZ0U7QUFDOURxQixpRkFBdUIsQ0FBQ1AsT0FBRCxFQUFVeEIsUUFBVixFQUFvQkQsS0FBcEIsQ0FBdkI7QUFDQWlDLGtCQUFVLENBQUMsWUFBTTtBQUNmckIsbUJBQVMsQ0FBQyxJQUFELENBQVQ7QUFDRCxTQUZTLEVBRVBYLFFBQVEsR0FBRyxDQUZKLENBQVY7QUFHRDtBQUNGLEtBUEQsTUFPTyxJQUFJMEIsUUFBUSxHQUFHYixRQUFRLENBQUNULENBQXBCLElBQXlCLENBQUMwQixjQUExQixJQUE0Q3BCLE1BQTVDLElBQXNESCxTQUExRCxFQUFxRTtBQUMxRSxVQUFJcUIsWUFBWSxHQUFHZixRQUFRLENBQUNELEtBQTVCLEVBQW1DO0FBQ2pDcUIsaUZBQXVCLENBQUNULE9BQUQsRUFBVXhCLFFBQVYsRUFBb0JELEtBQXBCLEVBQTJCRyxNQUEzQixDQUF2QjtBQUNBOEIsa0JBQVUsQ0FBQyxZQUFNO0FBQ2ZyQixtQkFBUyxDQUFDLEtBQUQsQ0FBVDtBQUNELFNBRlMsRUFFUFgsUUFBUSxHQUFHLENBRkosQ0FBVjtBQUdEO0FBQ0Y7O0FBRUQsUUFBR2EsUUFBUSxDQUFDVCxDQUFULElBQWNzQixRQUFkLElBQTBCYixRQUFRLENBQUNELEtBQVQsSUFBa0JnQixZQUEvQyxFQUE2RDtBQUMzRGQsaUJBQVcsQ0FBQztBQUNWVixTQUFDLEVBQUNzQixRQURRO0FBRVZkLGFBQUssRUFBR2dCO0FBRkUsT0FBRCxDQUFYO0FBSUQ7QUFDRixHQTdCa0QsRUE2QmpELENBQUNmLFFBQUQsRUFBV0gsTUFBWCxDQTdCaUQsQ0FBbkQsQ0FiMkIsQ0E0QzNCO0FBQ0E7QUFDQTs7QUFFQUQsOENBQUEsQ0FBZ0IsWUFBTTtBQUNwQixRQUFPZ0IsT0FBUCxHQUFrQlYsR0FBbEIsQ0FBT1UsT0FBUDs7QUFFQSxRQUFJQSxPQUFKLEVBQWE7QUFDWCxVQUFNUyxRQUFRLEdBQUcsSUFBSUMsb0JBQUosQ0FBeUJiLFlBQXpCLEVBQXVDO0FBQUNoQixpQkFBUyxFQUFUQTtBQUFELE9BQXZDLENBQWpCO0FBQ0E0QixjQUFRLENBQUNFLE9BQVQsQ0FBaUJYLE9BQWpCO0FBRUEsYUFBTztBQUFBLGVBQU1TLFFBQVEsSUFBSUEsUUFBUSxDQUFDRyxVQUFULEVBQWxCO0FBQUEsT0FBUDtBQUNEOztBQUVEO0FBQ0QsR0FYRCxFQVdHLENBQUNmLFlBQUQsQ0FYSDtBQWFBLHNCQUNFO0FBQUssYUFBUyxFQUFFRixZQUFoQjtBQUE4QixTQUFLLEVBQUVKLEtBQXJDO0FBQTRDLE9BQUcsRUFBRUQ7QUFBakQsS0FBMERQLElBQTFELEdBQ0dWLFFBREgsQ0FERjtBQUtEOztHQTVFdUJELG1CO1VBaUJSb0IsUzs7O0tBakJRcEIsbUI7O0FBOEV4QixTQUFTb0IsU0FBVCxRQUFvRztBQUFBLHNCQUEvRWQsQ0FBK0U7QUFBQSxNQUEvRUEsQ0FBK0Usd0JBQTNFLENBQTJFO0FBQUEsc0JBQXpFQyxDQUF5RTtBQUFBLE1BQXpFQSxDQUF5RSx3QkFBckUsQ0FBcUU7QUFBQSxzQkFBbkVDLENBQW1FO0FBQUEsTUFBbkVBLENBQW1FLHdCQUEvRCxDQUErRDtBQUNsRyxTQUFPO0FBQ0xpQyxXQUFPLEVBQUcsQ0FETDtBQUVMQyxhQUFTLHdCQUFrQixDQUFDcEMsQ0FBbkIsaUJBQTJCLENBQUNDLENBQTVCLGlCQUFvQyxDQUFDQyxDQUFyQztBQUZKLEdBQVA7QUFJRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQy9GRDtBQUdBO0FBQ0E7QUFDQTtBQUVlLFNBQVNtQyxXQUFULE9BTVU7QUFBQSxNQUx2QkMsS0FLdUIsUUFMdkJBLEtBS3VCO0FBQUEsTUFKdkJDLFdBSXVCLFFBSnZCQSxXQUl1QjtBQUFBLE1BSHZCQyxJQUd1QixRQUh2QkEsSUFHdUI7QUFBQSxNQUZ2QkMsRUFFdUIsUUFGdkJBLEVBRXVCO0FBQUEsTUFEdkJDLElBQ3VCLFFBRHZCQSxJQUN1QjtBQUN2QixzQkFDRTtBQUFLLGFBQVMsRUFBRTtBQUFoQixrQkFDRSxpREFBQyxnREFBRCxDQUNFO0FBREY7QUFFRSxNQUFFLGlCQUFVRCxFQUFWLENBRko7QUFHRSxhQUFTLEVBQUUscUJBSGI7QUFJRSxVQUFNLEVBQUU7QUFBQ3hDLE9BQUMsRUFBQztBQUFILEtBSlY7QUFLRSxhQUFTLEVBQUU7QUFMYixrQkFPRSw2REFBS3FDLEtBQUwsQ0FQRixFQVFHQyxXQUFXLENBQUNJLEdBQVosQ0FBZ0IsVUFBQ0MsSUFBRDtBQUFBLHdCQUNmO0FBQUssU0FBRyxFQUFFQSxJQUFWO0FBQWdCLGVBQVMsRUFBRTtBQUEzQixPQUNHQSxJQURILENBRGU7QUFBQSxHQUFoQixDQVJILGVBYUUsaURBQUMsNkRBQUQ7QUFBVyxRQUFJLEVBQUVKLElBQWpCO0FBQXVCLFFBQUksRUFBRUU7QUFBN0IsSUFiRixDQURGLENBREY7QUFtQkQ7S0ExQnVCTCxXOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDUHhCLHNEIiwiZmlsZSI6Im1haW4uNmZkYmMxOTEzMjg4OGU0MTc5YTguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCAnLi9TY3JvbGwuY3NzJztcclxuaW1wb3J0ICcuLi9zdHlsZXMvaW5kZXguY3NzJztcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHtcclxuICAvLyBjcmVhdGVLZXlmcmFtZXMsXHJcbiAgZ2VuZXJhdGVIYXNoU3RyaW5nQnlMZW5ndGgsXHJcbiAgc2V0SGlkZU9ic2VydmVBbmltYXRpb24sXHJcbiAgc2V0U2hvd09ic2VydmVBbmltYXRpb24sXHJcbn0gZnJvbSAnLi4vdXRpbHMvZnVuY3Rpb25zJztcclxuaW1wb3J0IHsgYmFzaWNDbGFzc05hbWUgfSBmcm9tICcuLi91dGlscy9jb25zdGFudHMnO1xyXG5pbXBvcnQgeyBTY3JvbGxBbmltYXRpb25JdGVtUHJvcHMgfSBmcm9tICcuLi91dGlscy9pbnRlcmZhY2VzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNjcm9sbEFuaW1hdGlvbkl0ZW0oe1xyXG4gIGNoaWxkcmVuLFxyXG4gIGRlbGF5ID0gMCxcclxuICBkdXJhdGlvbiA9IDEyMDAsXHJcbiAgLy8gcGF0aCA9ICd0b3AnLFxyXG4gIGNsYXNzTmFtZSxcclxuICBvZmZzZXQgPSB7eCA6IDAsIHkgOiAwLCB6IDogMH0sXHJcbiAgdGhyZXNob2xkID0gMC43LFxyXG4gIHJlQW5pbWF0ZSA9IGZhbHNlLFxyXG4gIC4uLnJlc3RcclxufTogU2Nyb2xsQW5pbWF0aW9uSXRlbVByb3BzKSB7XHJcbiAgY29uc3QgW3Nob3dlZCwgc2V0U2hvd2VkXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbcHJldmlvdXMsIHNldFByZXZpb3VzXSA9IFJlYWN0LnVzZVN0YXRlKHtcclxuICAgIHkgOiAxLFxyXG4gICAgcmF0aW8gOiAtMVxyXG4gIH0pXHJcbiAgY29uc3QgcmVmID0gUmVhY3QudXNlUmVmPEhUTUxEaXZFbGVtZW50PihudWxsKTtcclxuICBjb25zdCBzdHlsZSA9IHVzZVN0eWxlcyhvZmZzZXQpO1xyXG5cclxuICBjb25zdCBoYXNoQ2xhc3NOYW1lID0gZ2VuZXJhdGVIYXNoU3RyaW5nQnlMZW5ndGgoNSk7XHJcbiAgY29uc3QgbmV3Q2xhc3NOYW1lID0gYCR7Y2xhc3NOYW1lIHx8IGJhc2ljQ2xhc3NOYW1lfSBzc2EtJHtoYXNoQ2xhc3NOYW1lfWA7XHJcblxyXG5cclxuICBjb25zdCBoYW5kbGVTY3JvbGwgOiBJbnRlcnNlY3Rpb25PYnNlcnZlckNhbGxiYWNrPSBSZWFjdC51c2VDYWxsYmFjayhmdW5jdGlvbihbZW50cnldKXtcclxuICAgIGNvbnN0IGVsZW1lbnQgPSAocmVmLmN1cnJlbnQpIGFzIEhUTUxEaXZFbGVtZW50O1xyXG4gICAgY29uc3QgY3VycmVudFkgPSBlbnRyeS5ib3VuZGluZ0NsaWVudFJlY3QueVxyXG4gICAgY29uc3QgY3VycmVudFJhdGlvID0gZW50cnkuaW50ZXJzZWN0aW9uUmF0aW9cclxuICAgIGNvbnN0IGlzSW50ZXJzZWN0aW5nID0gZW50cnkuaXNJbnRlcnNlY3RpbmdcclxuXHJcbiAgICAvLyBTY3JvbGxpbmcgZG93bi91cFxyXG4gICAgaWYgKGN1cnJlbnRZIDwgcHJldmlvdXMueSApIHtcclxuICAgICAgaWYgKGN1cnJlbnRSYXRpbyA+IHByZXZpb3VzLnJhdGlvICYmIGlzSW50ZXJzZWN0aW5nICYmICFzaG93ZWQpIHtcclxuICAgICAgICBzZXRTaG93T2JzZXJ2ZUFuaW1hdGlvbihlbGVtZW50LCBkdXJhdGlvbiwgZGVsYXkpXHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICBzZXRTaG93ZWQodHJ1ZSlcclxuICAgICAgICB9LCBkdXJhdGlvbiAvIDIpO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2UgaWYgKGN1cnJlbnRZID4gcHJldmlvdXMueSAmJiAhaXNJbnRlcnNlY3RpbmcgJiYgc2hvd2VkICYmIHJlQW5pbWF0ZSkge1xyXG4gICAgICBpZiAoY3VycmVudFJhdGlvIDwgcHJldmlvdXMucmF0aW8pIHtcclxuICAgICAgICBzZXRIaWRlT2JzZXJ2ZUFuaW1hdGlvbihlbGVtZW50LCBkdXJhdGlvbiwgZGVsYXksIG9mZnNldClcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgIHNldFNob3dlZChmYWxzZSlcclxuICAgICAgICB9LCBkdXJhdGlvbiAvIDIpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGlmKHByZXZpb3VzLnkgIT0gY3VycmVudFkgJiYgcHJldmlvdXMucmF0aW8gIT0gY3VycmVudFJhdGlvKSB7XHJcbiAgICAgIHNldFByZXZpb3VzKHtcclxuICAgICAgICB5OmN1cnJlbnRZLFxyXG4gICAgICAgIHJhdGlvIDogY3VycmVudFJhdGlvXHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgfSxbcHJldmlvdXMsIHNob3dlZF0pXHJcblxyXG4gIC8vIFJlYWN0LnVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XHJcbiAgLy8gICBjcmVhdGVLZXlmcmFtZXMoKTtcclxuICAvLyB9LCBbXSk7XHJcblxyXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCB7Y3VycmVudH0gPSByZWY7XHJcblxyXG4gICAgaWYgKGN1cnJlbnQpIHtcclxuICAgICAgY29uc3Qgb2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoaGFuZGxlU2Nyb2xsLCB7dGhyZXNob2xkfSk7XHJcbiAgICAgIG9ic2VydmVyLm9ic2VydmUoY3VycmVudCk7XHJcblxyXG4gICAgICByZXR1cm4gKCkgPT4gb2JzZXJ2ZXIgJiYgb2JzZXJ2ZXIuZGlzY29ubmVjdCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiA7XHJcbiAgfSwgW2hhbmRsZVNjcm9sbF0pXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17bmV3Q2xhc3NOYW1lfSBzdHlsZT17c3R5bGV9IHJlZj17cmVmfSB7Li4ucmVzdH0+XHJcbiAgICAgIHtjaGlsZHJlbn1cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHVzZVN0eWxlcyAoe3ggPSAwLHkgPSAwLHogPSAwfSA6IHt4PzpudW1iZXIsIHk/OiBudW1iZXIsIHo/Om51bWJlcn0pIDogUmVhY3QuQ1NTUHJvcGVydGllcyB7XHJcbiAgcmV0dXJuIHtcclxuICAgIG9wYWNpdHkgOiAwLFxyXG4gICAgdHJhbnNmb3JtIDogYHRyYW5zbGF0ZTNkKCR7LXh9cHgsICR7LXl9cHgsICR7LXp9cHgpYFxyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuaW1wb3J0IHsgQm9keUNvbnRlbnRJdGVtUHJvcHMgfSBmcm9tICcuL0JvZHknO1xyXG4vLyBpbXBvcnQgU2Nyb2xsRmFkZUFuaW1hdGlvbkl0ZW0gZnJvbSAncmVhY3Qtc2Nyb2xsLWZhZGUtYW5pbWF0aW9uJztcclxuaW1wb3J0IFByaXNtQ29kZSBmcm9tICdzcmMvY29tcG9uZW50cy9QcmlzbUNvZGUnO1xyXG5pbXBvcnQgU2Nyb2xsRmFkZUFuaW1hdGlvbkl0ZW0gZnJvbSAnc3JjL29ic2VydmUnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBCb2R5Q29udGVudCh7XHJcbiAgdGl0bGUsXHJcbiAgZGVzY3JpcHRpb24sXHJcbiAgY29kZSxcclxuICBpZCxcclxuICB0eXBlLFxyXG59OiBCb2R5Q29udGVudEl0ZW1Qcm9wcykge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17J2JvZHktY29udGVudCd9PlxyXG4gICAgICA8U2Nyb2xsRmFkZUFuaW1hdGlvbkl0ZW1cclxuICAgICAgICAvLyBwYXRoPXtpZCA9PT0gJ2luaXQnID8gJ3JpZ2h0JyA6IGlkfVxyXG4gICAgICAgIGlkPXtgcnNmYS0ke2lkfWB9XHJcbiAgICAgICAgY2xhc3NOYW1lPXsnYm9keS1zY3JvbGwtY29udGVudCd9XHJcbiAgICAgICAgb2Zmc2V0PXt7eToxMDB9fVxyXG4gICAgICAgIHJlQW5pbWF0ZT17dHJ1ZX1cclxuICAgICAgPlxyXG4gICAgICAgIDxoMT57dGl0bGV9PC9oMT5cclxuICAgICAgICB7ZGVzY3JpcHRpb24ubWFwKChkZXNjOiBzdHJpbmcpID0+IChcclxuICAgICAgICAgIDxkaXYga2V5PXtkZXNjfSBjbGFzc05hbWU9eydib2R5LWNvbnRlbnQtZGVzYyd9PlxyXG4gICAgICAgICAgICB7ZGVzY31cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICkpfVxyXG4gICAgICAgIDxQcmlzbUNvZGUgY29kZT17Y29kZX0gdHlwZT17dHlwZX0gLz5cclxuICAgICAgPC9TY3JvbGxGYWRlQW5pbWF0aW9uSXRlbT5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiMzE3Y2M2YzZmYjhiZjEwYzhjYjRcIikiXSwic291cmNlUm9vdCI6IiJ9