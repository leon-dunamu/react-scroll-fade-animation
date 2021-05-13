self["webpackHotUpdatefrontend"]("main",{

/***/ "./src/constants/bodyContentList.ts":
/*!******************************************!*\
  !*** ./src/constants/bodyContentList.ts ***!
  \******************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "bodyContentList": () => (/* binding */ bodyContentList)
/* harmony export */ });
/* harmony import */ var react_scroll_fade_animation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-scroll-fade-animation */ "./node_modules/react-scroll-fade-animation/index.js");
/* harmony import */ var react_scroll_fade_animation__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_scroll_fade_animation__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_scroll_fade_animation_observe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-scroll-fade-animation/observe */ "./node_modules/react-scroll-fade-animation/observe/index.js");
/* harmony import */ var react_scroll_fade_animation_observe__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_scroll_fade_animation_observe__WEBPACK_IMPORTED_MODULE_1__);
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.id);

// import ScrollAnimate from 'src/scroll';
// import ObserveAnimate from 'src/observe';


var bodyContentList = [{
  title: 'REACT SCROLL FADE ANIMATION',
  description: ['Use on Scroll Animation Item in ReactJS.', 'If Item exists in Viewport, it will be displayed!'],
  code: "\n      npm install react-scroll-fade-animation\n    ",
  type: 'bash',
  id: 'init',
  WrapperComponent: (react_scroll_fade_animation_observe__WEBPACK_IMPORTED_MODULE_1___default()),
  options: {
    offset: {
      y: 0
    }
  }
}, {
  title: 'top',
  description: ['Appear from bottom to top'],
  code: "\nimport ScrollAnimationItem from 'react-scroll-fade-animation';\n\nexport default function Item() {\n  return <ScrollAnimationItem\n    path={'top'}\n    offsetHeight={-400}\n  >\n    Its top\n  </ScrollAnimationItem>\n}\n    ",
  id: 'top',
  WrapperComponent: (react_scroll_fade_animation__WEBPACK_IMPORTED_MODULE_0___default()),
  options: {
    path: 'top'
  }
}, {
  title: 'bottom',
  description: ['Appear from top to bottom'],
  code: "\nimport ScrollAnimationItem from 'react-scroll-fade-animation';\n\nexport default function Item() {\n  return <ScrollAnimationItem\n    path={'bottom'}\n    offsetHeight={-400}\n  >\n    Its bottom\n  </ScrollAnimationItem>\n}\n    ",
  id: 'bottom',
  WrapperComponent: (react_scroll_fade_animation__WEBPACK_IMPORTED_MODULE_0___default()),
  options: {
    path: 'bottom'
  }
}, {
  title: 'left',
  description: ['Appear from right to left'],
  code: "\nimport ScrollAnimationItem from 'react-scroll-fade-animation';\n\nexport default function Item() {\n  return <ScrollAnimationItem\n    path={'left'}\n    offsetHeight={-400}\n  >\n    Its left\n  </ScrollAnimationItem>\n}\n    ",
  id: 'left',
  WrapperComponent: (react_scroll_fade_animation__WEBPACK_IMPORTED_MODULE_0___default()),
  options: {
    path: 'left'
  }
}, {
  title: 'right',
  description: ['Appear from left to right'],
  code: "\nimport ScrollAnimationItem from 'react-scroll-fade-animation';\n\nexport default function Item() {\n  return <ScrollAnimationItem\n    path={'right'}\n    offsetHeight={-400}\n  >\n    Its right\n  </ScrollAnimationItem>\n}\n    ",
  id: 'right',
  WrapperComponent: (react_scroll_fade_animation__WEBPACK_IMPORTED_MODULE_0___default()),
  options: {
    path: 'right'
  }
}, {
  title: 'top-bounce',
  description: ['Bounce from bottom to top'],
  code: "\nimport ScrollAnimationItem from 'react-scroll-fade-animation';\n\nexport default function Item() {\n  return <ScrollAnimationItem\n    path={'top-bounce'}\n    offsetHeight={-400}\n  >\n    Its top-bounce\n  </ScrollAnimationItem>\n}\n    ",
  id: 'top-bounce',
  WrapperComponent: (react_scroll_fade_animation__WEBPACK_IMPORTED_MODULE_0___default()),
  options: {
    path: 'top-bounce'
  }
}, {
  title: 'bottom-bounce',
  description: ['Bounce from top to bottom'],
  code: "\nimport ScrollAnimationItem from 'react-scroll-fade-animation';\n\nexport default function Item() {\n  return <ScrollAnimationItem\n    path={'bottom'}\n    offsetHeight={-400}\n  >\n    Its bottom-bounce\n  </ScrollAnimationItem>\n}\n    ",
  id: 'bottom-bounce',
  WrapperComponent: (react_scroll_fade_animation__WEBPACK_IMPORTED_MODULE_0___default()),
  options: {
    path: 'bottom-bounce'
  }
}, {
  title: 'left-bounce',
  description: ['Bounce from right to left'],
  code: "\nimport ScrollAnimationItem from 'react-scroll-fade-animation';\n\nexport default function Item() {\n  return <ScrollAnimationItem\n    path={'left'}\n    offsetHeight={-400}\n  >\n    Its left-bounce\n  </ScrollAnimationItem>\n}\n    ",
  id: 'left-bounce',
  WrapperComponent: (react_scroll_fade_animation__WEBPACK_IMPORTED_MODULE_0___default()),
  options: {
    path: 'left-bounce'
  }
}, {
  title: 'right-bounce',
  description: ['Bounce from left to right'],
  code: "\nimport ScrollAnimationItem from 'react-scroll-fade-animation';\n\nexport default function Item() {\n  return <ScrollAnimationItem\n    path={'right'}\n    offsetHeight={-400}\n  >\n    Its right-bounce\n  </ScrollAnimationItem>\n}\n    ",
  id: 'right-bounce',
  WrapperComponent: (react_scroll_fade_animation__WEBPACK_IMPORTED_MODULE_0___default()),
  options: {
    path: 'right-bounce'
  }
}, {
  title: 'Observe - offset',
  description: ['Appear from bottom to top'],
  code: "\nimport ObserveAnimationItem from 'react-scroll-fade-animation/observe';\n\nexport default function Item() {\n  return <ObserveAnimationItem\n    offset={{ x:200, y:0 }}\n  >\n    Its from left\n  </ObserveAnimationItem>\n}\n    ",
  id: 'offset',
  WrapperComponent: (react_scroll_fade_animation_observe__WEBPACK_IMPORTED_MODULE_1___default()),
  options: {
    offset: {
      x: 200,
      y: 0
    }
  }
}, {
  title: 'Observe - reAnimate',
  description: ['Appear from top to bottom'],
  code: "\nimport ObserveAnimationItem from 'react-scroll-fade-animation/observe';\n\nexport default function Item() {\n  return <ObserveAnimationItem\n    reAnimate={true}\n  >\n    Its re-Animate by scroll\n  </ObserveAnimationItem>\n}\n    ",
  id: 'reAnimate',
  WrapperComponent: (react_scroll_fade_animation_observe__WEBPACK_IMPORTED_MODULE_1___default()),
  options: {
    reAnimate: true
  }
}, {
  title: 'Observe - offset X, Y & duration',
  description: ['Appear from right to left'],
  code: "\nimport ObserveAnimationItem from 'react-scroll-fade-animation/observe';\n\nexport default function Item() {\n  return <ScrollAnimationItem\n    offset={{ x:-200, y:200 }}\n    duration={500}\n  >\n    Its from right-top\n  </ScrollAnimationItem>\n}\n    ",
  id: 'duration',
  WrapperComponent: (react_scroll_fade_animation_observe__WEBPACK_IMPORTED_MODULE_1___default()),
  options: {
    offset: {
      x: -200,
      y: 200
    },
    duration: 500
  }
}, {
  title: 'Enjoy Your custom Animation',
  description: ['Observe supports you for free displaying direction'],
  code: "\nimport ObserveAnimationItem from 'react-scroll-fade-animation/observe';\n\nexport default function Item() {\n  return <ScrollAnimationItem\n    offset={{ x:200, y:200, z: -300 }}\n    duration={5000}\n    threshold={0.1}\n  >\n    Its from left-bottom\n  </ScrollAnimationItem>\n}\n    ",
  id: 'custom',
  WrapperComponent: (react_scroll_fade_animation_observe__WEBPACK_IMPORTED_MODULE_1___default()),
  options: {
    offset: {
      x: 200,
      y: 200,
      z: -300
    },
    duration: 5000,
    threshold: 0.1
  }
}];

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
/******/ 	__webpack_require__.h = () => ("1e6164e46c754bf25351")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udGVuZC8uL3NyYy9jb25zdGFudHMvYm9keUNvbnRlbnRMaXN0LnRzIiwid2VicGFjazovL2Zyb250ZW5kL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJuYW1lcyI6WyJib2R5Q29udGVudExpc3QiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiY29kZSIsInR5cGUiLCJpZCIsIldyYXBwZXJDb21wb25lbnQiLCJPYnNlcnZlQW5pbWF0ZSIsIm9wdGlvbnMiLCJvZmZzZXQiLCJ5IiwiU2Nyb2xsQW5pbWF0ZSIsInBhdGgiLCJ4IiwicmVBbmltYXRlIiwiZHVyYXRpb24iLCJ6IiwidGhyZXNob2xkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFFTyxJQUFNQSxlQUFlLEdBQUcsQ0FDN0I7QUFDRUMsT0FBSyxFQUFFLDZCQURUO0FBRUVDLGFBQVcsRUFBRSxDQUNYLDBDQURXLEVBRVgsbURBRlcsQ0FGZjtBQU1FQyxNQUFJLHlEQU5OO0FBU0VDLE1BQUksRUFBRSxNQVRSO0FBVUVDLElBQUUsRUFBRSxNQVZOO0FBV0VDLGtCQUFnQixFQUFFQyw0RUFYcEI7QUFZRUMsU0FBTyxFQUFFO0FBQ1BDLFVBQU0sRUFBRTtBQUNOQyxPQUFDLEVBQUU7QUFERztBQUREO0FBWlgsQ0FENkIsRUFtQjdCO0FBQ0VULE9BQUssRUFBRSxLQURUO0FBRUVDLGFBQVcsRUFBRSxDQUFDLDJCQUFELENBRmY7QUFHRUMsTUFBSSx1T0FITjtBQWVFRSxJQUFFLEVBQUUsS0FmTjtBQWdCRUMsa0JBQWdCLEVBQUVLLG9FQWhCcEI7QUFpQkVILFNBQU8sRUFBRTtBQUNQSSxRQUFJLEVBQUU7QUFEQztBQWpCWCxDQW5CNkIsRUF3QzdCO0FBQ0VYLE9BQUssRUFBRSxRQURUO0FBRUVDLGFBQVcsRUFBRSxDQUFDLDJCQUFELENBRmY7QUFHRUMsTUFBSSw2T0FITjtBQWVFRSxJQUFFLEVBQUUsUUFmTjtBQWdCRUMsa0JBQWdCLEVBQUVLLG9FQWhCcEI7QUFpQkVILFNBQU8sRUFBRTtBQUNQSSxRQUFJLEVBQUU7QUFEQztBQWpCWCxDQXhDNkIsRUE2RDdCO0FBQ0VYLE9BQUssRUFBRSxNQURUO0FBRUVDLGFBQVcsRUFBRSxDQUFDLDJCQUFELENBRmY7QUFHRUMsTUFBSSx5T0FITjtBQWVFRSxJQUFFLEVBQUUsTUFmTjtBQWdCRUMsa0JBQWdCLEVBQUVLLG9FQWhCcEI7QUFpQkVILFNBQU8sRUFBRTtBQUNQSSxRQUFJLEVBQUU7QUFEQztBQWpCWCxDQTdENkIsRUFrRjdCO0FBQ0VYLE9BQUssRUFBRSxPQURUO0FBRUVDLGFBQVcsRUFBRSxDQUFDLDJCQUFELENBRmY7QUFHRUMsTUFBSSwyT0FITjtBQWVFRSxJQUFFLEVBQUUsT0FmTjtBQWdCRUMsa0JBQWdCLEVBQUVLLG9FQWhCcEI7QUFpQkVILFNBQU8sRUFBRTtBQUNQSSxRQUFJLEVBQUU7QUFEQztBQWpCWCxDQWxGNkIsRUF1RzdCO0FBQ0VYLE9BQUssRUFBRSxZQURUO0FBRUVDLGFBQVcsRUFBRSxDQUFDLDJCQUFELENBRmY7QUFHRUMsTUFBSSxxUEFITjtBQWVFRSxJQUFFLEVBQUUsWUFmTjtBQWdCRUMsa0JBQWdCLEVBQUVLLG9FQWhCcEI7QUFpQkVILFNBQU8sRUFBRTtBQUNQSSxRQUFJLEVBQUU7QUFEQztBQWpCWCxDQXZHNkIsRUE0SDdCO0FBQ0VYLE9BQUssRUFBRSxlQURUO0FBRUVDLGFBQVcsRUFBRSxDQUFDLDJCQUFELENBRmY7QUFHRUMsTUFBSSxvUEFITjtBQWVFRSxJQUFFLEVBQUUsZUFmTjtBQWdCRUMsa0JBQWdCLEVBQUVLLG9FQWhCcEI7QUFpQkVILFNBQU8sRUFBRTtBQUNQSSxRQUFJLEVBQUU7QUFEQztBQWpCWCxDQTVINkIsRUFpSjdCO0FBQ0VYLE9BQUssRUFBRSxhQURUO0FBRUVDLGFBQVcsRUFBRSxDQUFDLDJCQUFELENBRmY7QUFHRUMsTUFBSSxnUEFITjtBQWVFRSxJQUFFLEVBQUUsYUFmTjtBQWdCRUMsa0JBQWdCLEVBQUVLLG9FQWhCcEI7QUFpQkVILFNBQU8sRUFBRTtBQUNQSSxRQUFJLEVBQUU7QUFEQztBQWpCWCxDQWpKNkIsRUFzSzdCO0FBQ0VYLE9BQUssRUFBRSxjQURUO0FBRUVDLGFBQVcsRUFBRSxDQUFDLDJCQUFELENBRmY7QUFHRUMsTUFBSSxrUEFITjtBQWVFRSxJQUFFLEVBQUUsY0FmTjtBQWdCRUMsa0JBQWdCLEVBQUVLLG9FQWhCcEI7QUFpQkVILFNBQU8sRUFBRTtBQUNQSSxRQUFJLEVBQUU7QUFEQztBQWpCWCxDQXRLNkIsRUEyTDdCO0FBQ0VYLE9BQUssRUFBRSxrQkFEVDtBQUVFQyxhQUFXLEVBQUUsQ0FBQywyQkFBRCxDQUZmO0FBR0VDLE1BQUksME9BSE47QUFjRUUsSUFBRSxFQUFFLFFBZE47QUFlRUMsa0JBQWdCLEVBQUVDLDRFQWZwQjtBQWdCRUMsU0FBTyxFQUFFO0FBQ1BDLFVBQU0sRUFBRTtBQUNOSSxPQUFDLEVBQUUsR0FERztBQUVOSCxPQUFDLEVBQUU7QUFGRztBQUREO0FBaEJYLENBM0w2QixFQWtON0I7QUFDRVQsT0FBSyxFQUFFLHFCQURUO0FBRUVDLGFBQVcsRUFBRSxDQUFDLDJCQUFELENBRmY7QUFHRUMsTUFBSSw4T0FITjtBQWNFRSxJQUFFLEVBQUUsV0FkTjtBQWVFQyxrQkFBZ0IsRUFBRUMsNEVBZnBCO0FBZ0JFQyxTQUFPLEVBQUU7QUFDUE0sYUFBUyxFQUFFO0FBREo7QUFoQlgsQ0FsTjZCLEVBc083QjtBQUNFYixPQUFLLEVBQUUsa0NBRFQ7QUFFRUMsYUFBVyxFQUFFLENBQUMsMkJBQUQsQ0FGZjtBQUdFQyxNQUFJLG9RQUhOO0FBZUVFLElBQUUsRUFBRSxVQWZOO0FBZ0JFQyxrQkFBZ0IsRUFBRUMsNEVBaEJwQjtBQWlCRUMsU0FBTyxFQUFFO0FBQ1BDLFVBQU0sRUFBRTtBQUNOSSxPQUFDLEVBQUUsQ0FBQyxHQURFO0FBRU5ILE9BQUMsRUFBRTtBQUZHLEtBREQ7QUFLUEssWUFBUSxFQUFFO0FBTEg7QUFqQlgsQ0F0TzZCLEVBK1A3QjtBQUNFZCxPQUFLLEVBQUUsNkJBRFQ7QUFFRUMsYUFBVyxFQUFFLENBQUMsb0RBQUQsQ0FGZjtBQUdFQyxNQUFJLG9TQUhOO0FBZ0JFRSxJQUFFLEVBQUUsUUFoQk47QUFpQkVDLGtCQUFnQixFQUFFQyw0RUFqQnBCO0FBa0JFQyxTQUFPLEVBQUU7QUFDUEMsVUFBTSxFQUFFO0FBQ05JLE9BQUMsRUFBRSxHQURHO0FBRU5ILE9BQUMsRUFBRSxHQUZHO0FBR05NLE9BQUMsRUFBRSxDQUFDO0FBSEUsS0FERDtBQU1QRCxZQUFRLEVBQUUsSUFOSDtBQU9QRSxhQUFTLEVBQUU7QUFQSjtBQWxCWCxDQS9QNkIsQ0FBeEIsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDTlAsc0QiLCJmaWxlIjoibWFpbi5kYTkyNGU0ZjcxYmNlOTZlMjMwMy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0IFNjcm9sbEFuaW1hdGUgZnJvbSAnc3JjL3Njcm9sbCc7XG4vLyBpbXBvcnQgT2JzZXJ2ZUFuaW1hdGUgZnJvbSAnc3JjL29ic2VydmUnO1xuXG5pbXBvcnQgU2Nyb2xsQW5pbWF0ZSBmcm9tICdyZWFjdC1zY3JvbGwtZmFkZS1hbmltYXRpb24nO1xuaW1wb3J0IE9ic2VydmVBbmltYXRlIGZyb20gJ3JlYWN0LXNjcm9sbC1mYWRlLWFuaW1hdGlvbi9vYnNlcnZlJztcblxuZXhwb3J0IGNvbnN0IGJvZHlDb250ZW50TGlzdCA9IFtcbiAge1xuICAgIHRpdGxlOiAnUkVBQ1QgU0NST0xMIEZBREUgQU5JTUFUSU9OJyxcbiAgICBkZXNjcmlwdGlvbjogW1xuICAgICAgJ1VzZSBvbiBTY3JvbGwgQW5pbWF0aW9uIEl0ZW0gaW4gUmVhY3RKUy4nLFxuICAgICAgJ0lmIEl0ZW0gZXhpc3RzIGluIFZpZXdwb3J0LCBpdCB3aWxsIGJlIGRpc3BsYXllZCEnLFxuICAgIF0sXG4gICAgY29kZTogYFxuICAgICAgbnBtIGluc3RhbGwgcmVhY3Qtc2Nyb2xsLWZhZGUtYW5pbWF0aW9uXG4gICAgYCxcbiAgICB0eXBlOiAnYmFzaCcsXG4gICAgaWQ6ICdpbml0JyxcbiAgICBXcmFwcGVyQ29tcG9uZW50OiBPYnNlcnZlQW5pbWF0ZSxcbiAgICBvcHRpb25zOiB7XG4gICAgICBvZmZzZXQ6IHtcbiAgICAgICAgeTogMCxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSxcbiAge1xuICAgIHRpdGxlOiAndG9wJyxcbiAgICBkZXNjcmlwdGlvbjogWydBcHBlYXIgZnJvbSBib3R0b20gdG8gdG9wJ10sXG4gICAgY29kZTogYFxuaW1wb3J0IFNjcm9sbEFuaW1hdGlvbkl0ZW0gZnJvbSAncmVhY3Qtc2Nyb2xsLWZhZGUtYW5pbWF0aW9uJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSXRlbSgpIHtcbiAgcmV0dXJuIDxTY3JvbGxBbmltYXRpb25JdGVtXG4gICAgcGF0aD17J3RvcCd9XG4gICAgb2Zmc2V0SGVpZ2h0PXstNDAwfVxuICA+XG4gICAgSXRzIHRvcFxuICA8L1Njcm9sbEFuaW1hdGlvbkl0ZW0+XG59XG4gICAgYCxcbiAgICBpZDogJ3RvcCcsXG4gICAgV3JhcHBlckNvbXBvbmVudDogU2Nyb2xsQW5pbWF0ZSxcbiAgICBvcHRpb25zOiB7XG4gICAgICBwYXRoOiAndG9wJyxcbiAgICB9LFxuICB9LFxuICB7XG4gICAgdGl0bGU6ICdib3R0b20nLFxuICAgIGRlc2NyaXB0aW9uOiBbJ0FwcGVhciBmcm9tIHRvcCB0byBib3R0b20nXSxcbiAgICBjb2RlOiBgXG5pbXBvcnQgU2Nyb2xsQW5pbWF0aW9uSXRlbSBmcm9tICdyZWFjdC1zY3JvbGwtZmFkZS1hbmltYXRpb24nO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJdGVtKCkge1xuICByZXR1cm4gPFNjcm9sbEFuaW1hdGlvbkl0ZW1cbiAgICBwYXRoPXsnYm90dG9tJ31cbiAgICBvZmZzZXRIZWlnaHQ9ey00MDB9XG4gID5cbiAgICBJdHMgYm90dG9tXG4gIDwvU2Nyb2xsQW5pbWF0aW9uSXRlbT5cbn1cbiAgICBgLFxuICAgIGlkOiAnYm90dG9tJyxcbiAgICBXcmFwcGVyQ29tcG9uZW50OiBTY3JvbGxBbmltYXRlLFxuICAgIG9wdGlvbnM6IHtcbiAgICAgIHBhdGg6ICdib3R0b20nLFxuICAgIH0sXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogJ2xlZnQnLFxuICAgIGRlc2NyaXB0aW9uOiBbJ0FwcGVhciBmcm9tIHJpZ2h0IHRvIGxlZnQnXSxcbiAgICBjb2RlOiBgXG5pbXBvcnQgU2Nyb2xsQW5pbWF0aW9uSXRlbSBmcm9tICdyZWFjdC1zY3JvbGwtZmFkZS1hbmltYXRpb24nO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJdGVtKCkge1xuICByZXR1cm4gPFNjcm9sbEFuaW1hdGlvbkl0ZW1cbiAgICBwYXRoPXsnbGVmdCd9XG4gICAgb2Zmc2V0SGVpZ2h0PXstNDAwfVxuICA+XG4gICAgSXRzIGxlZnRcbiAgPC9TY3JvbGxBbmltYXRpb25JdGVtPlxufVxuICAgIGAsXG4gICAgaWQ6ICdsZWZ0JyxcbiAgICBXcmFwcGVyQ29tcG9uZW50OiBTY3JvbGxBbmltYXRlLFxuICAgIG9wdGlvbnM6IHtcbiAgICAgIHBhdGg6ICdsZWZ0JyxcbiAgICB9LFxuICB9LFxuICB7XG4gICAgdGl0bGU6ICdyaWdodCcsXG4gICAgZGVzY3JpcHRpb246IFsnQXBwZWFyIGZyb20gbGVmdCB0byByaWdodCddLFxuICAgIGNvZGU6IGBcbmltcG9ydCBTY3JvbGxBbmltYXRpb25JdGVtIGZyb20gJ3JlYWN0LXNjcm9sbC1mYWRlLWFuaW1hdGlvbic7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEl0ZW0oKSB7XG4gIHJldHVybiA8U2Nyb2xsQW5pbWF0aW9uSXRlbVxuICAgIHBhdGg9eydyaWdodCd9XG4gICAgb2Zmc2V0SGVpZ2h0PXstNDAwfVxuICA+XG4gICAgSXRzIHJpZ2h0XG4gIDwvU2Nyb2xsQW5pbWF0aW9uSXRlbT5cbn1cbiAgICBgLFxuICAgIGlkOiAncmlnaHQnLFxuICAgIFdyYXBwZXJDb21wb25lbnQ6IFNjcm9sbEFuaW1hdGUsXG4gICAgb3B0aW9uczoge1xuICAgICAgcGF0aDogJ3JpZ2h0JyxcbiAgICB9LFxuICB9LFxuICB7XG4gICAgdGl0bGU6ICd0b3AtYm91bmNlJyxcbiAgICBkZXNjcmlwdGlvbjogWydCb3VuY2UgZnJvbSBib3R0b20gdG8gdG9wJ10sXG4gICAgY29kZTogYFxuaW1wb3J0IFNjcm9sbEFuaW1hdGlvbkl0ZW0gZnJvbSAncmVhY3Qtc2Nyb2xsLWZhZGUtYW5pbWF0aW9uJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSXRlbSgpIHtcbiAgcmV0dXJuIDxTY3JvbGxBbmltYXRpb25JdGVtXG4gICAgcGF0aD17J3RvcC1ib3VuY2UnfVxuICAgIG9mZnNldEhlaWdodD17LTQwMH1cbiAgPlxuICAgIEl0cyB0b3AtYm91bmNlXG4gIDwvU2Nyb2xsQW5pbWF0aW9uSXRlbT5cbn1cbiAgICBgLFxuICAgIGlkOiAndG9wLWJvdW5jZScsXG4gICAgV3JhcHBlckNvbXBvbmVudDogU2Nyb2xsQW5pbWF0ZSxcbiAgICBvcHRpb25zOiB7XG4gICAgICBwYXRoOiAndG9wLWJvdW5jZScsXG4gICAgfSxcbiAgfSxcbiAge1xuICAgIHRpdGxlOiAnYm90dG9tLWJvdW5jZScsXG4gICAgZGVzY3JpcHRpb246IFsnQm91bmNlIGZyb20gdG9wIHRvIGJvdHRvbSddLFxuICAgIGNvZGU6IGBcbmltcG9ydCBTY3JvbGxBbmltYXRpb25JdGVtIGZyb20gJ3JlYWN0LXNjcm9sbC1mYWRlLWFuaW1hdGlvbic7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEl0ZW0oKSB7XG4gIHJldHVybiA8U2Nyb2xsQW5pbWF0aW9uSXRlbVxuICAgIHBhdGg9eydib3R0b20nfVxuICAgIG9mZnNldEhlaWdodD17LTQwMH1cbiAgPlxuICAgIEl0cyBib3R0b20tYm91bmNlXG4gIDwvU2Nyb2xsQW5pbWF0aW9uSXRlbT5cbn1cbiAgICBgLFxuICAgIGlkOiAnYm90dG9tLWJvdW5jZScsXG4gICAgV3JhcHBlckNvbXBvbmVudDogU2Nyb2xsQW5pbWF0ZSxcbiAgICBvcHRpb25zOiB7XG4gICAgICBwYXRoOiAnYm90dG9tLWJvdW5jZScsXG4gICAgfSxcbiAgfSxcbiAge1xuICAgIHRpdGxlOiAnbGVmdC1ib3VuY2UnLFxuICAgIGRlc2NyaXB0aW9uOiBbJ0JvdW5jZSBmcm9tIHJpZ2h0IHRvIGxlZnQnXSxcbiAgICBjb2RlOiBgXG5pbXBvcnQgU2Nyb2xsQW5pbWF0aW9uSXRlbSBmcm9tICdyZWFjdC1zY3JvbGwtZmFkZS1hbmltYXRpb24nO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJdGVtKCkge1xuICByZXR1cm4gPFNjcm9sbEFuaW1hdGlvbkl0ZW1cbiAgICBwYXRoPXsnbGVmdCd9XG4gICAgb2Zmc2V0SGVpZ2h0PXstNDAwfVxuICA+XG4gICAgSXRzIGxlZnQtYm91bmNlXG4gIDwvU2Nyb2xsQW5pbWF0aW9uSXRlbT5cbn1cbiAgICBgLFxuICAgIGlkOiAnbGVmdC1ib3VuY2UnLFxuICAgIFdyYXBwZXJDb21wb25lbnQ6IFNjcm9sbEFuaW1hdGUsXG4gICAgb3B0aW9uczoge1xuICAgICAgcGF0aDogJ2xlZnQtYm91bmNlJyxcbiAgICB9LFxuICB9LFxuICB7XG4gICAgdGl0bGU6ICdyaWdodC1ib3VuY2UnLFxuICAgIGRlc2NyaXB0aW9uOiBbJ0JvdW5jZSBmcm9tIGxlZnQgdG8gcmlnaHQnXSxcbiAgICBjb2RlOiBgXG5pbXBvcnQgU2Nyb2xsQW5pbWF0aW9uSXRlbSBmcm9tICdyZWFjdC1zY3JvbGwtZmFkZS1hbmltYXRpb24nO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJdGVtKCkge1xuICByZXR1cm4gPFNjcm9sbEFuaW1hdGlvbkl0ZW1cbiAgICBwYXRoPXsncmlnaHQnfVxuICAgIG9mZnNldEhlaWdodD17LTQwMH1cbiAgPlxuICAgIEl0cyByaWdodC1ib3VuY2VcbiAgPC9TY3JvbGxBbmltYXRpb25JdGVtPlxufVxuICAgIGAsXG4gICAgaWQ6ICdyaWdodC1ib3VuY2UnLFxuICAgIFdyYXBwZXJDb21wb25lbnQ6IFNjcm9sbEFuaW1hdGUsXG4gICAgb3B0aW9uczoge1xuICAgICAgcGF0aDogJ3JpZ2h0LWJvdW5jZScsXG4gICAgfSxcbiAgfSxcbiAge1xuICAgIHRpdGxlOiAnT2JzZXJ2ZSAtIG9mZnNldCcsXG4gICAgZGVzY3JpcHRpb246IFsnQXBwZWFyIGZyb20gYm90dG9tIHRvIHRvcCddLFxuICAgIGNvZGU6IGBcbmltcG9ydCBPYnNlcnZlQW5pbWF0aW9uSXRlbSBmcm9tICdyZWFjdC1zY3JvbGwtZmFkZS1hbmltYXRpb24vb2JzZXJ2ZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEl0ZW0oKSB7XG4gIHJldHVybiA8T2JzZXJ2ZUFuaW1hdGlvbkl0ZW1cbiAgICBvZmZzZXQ9e3sgeDoyMDAsIHk6MCB9fVxuICA+XG4gICAgSXRzIGZyb20gbGVmdFxuICA8L09ic2VydmVBbmltYXRpb25JdGVtPlxufVxuICAgIGAsXG4gICAgaWQ6ICdvZmZzZXQnLFxuICAgIFdyYXBwZXJDb21wb25lbnQ6IE9ic2VydmVBbmltYXRlLFxuICAgIG9wdGlvbnM6IHtcbiAgICAgIG9mZnNldDoge1xuICAgICAgICB4OiAyMDAsXG4gICAgICAgIHk6IDAsXG4gICAgICB9LFxuICAgIH0sXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogJ09ic2VydmUgLSByZUFuaW1hdGUnLFxuICAgIGRlc2NyaXB0aW9uOiBbJ0FwcGVhciBmcm9tIHRvcCB0byBib3R0b20nXSxcbiAgICBjb2RlOiBgXG5pbXBvcnQgT2JzZXJ2ZUFuaW1hdGlvbkl0ZW0gZnJvbSAncmVhY3Qtc2Nyb2xsLWZhZGUtYW5pbWF0aW9uL29ic2VydmUnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJdGVtKCkge1xuICByZXR1cm4gPE9ic2VydmVBbmltYXRpb25JdGVtXG4gICAgcmVBbmltYXRlPXt0cnVlfVxuICA+XG4gICAgSXRzIHJlLUFuaW1hdGUgYnkgc2Nyb2xsXG4gIDwvT2JzZXJ2ZUFuaW1hdGlvbkl0ZW0+XG59XG4gICAgYCxcbiAgICBpZDogJ3JlQW5pbWF0ZScsXG4gICAgV3JhcHBlckNvbXBvbmVudDogT2JzZXJ2ZUFuaW1hdGUsXG4gICAgb3B0aW9uczoge1xuICAgICAgcmVBbmltYXRlOiB0cnVlLFxuICAgIH0sXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogJ09ic2VydmUgLSBvZmZzZXQgWCwgWSAmIGR1cmF0aW9uJyxcbiAgICBkZXNjcmlwdGlvbjogWydBcHBlYXIgZnJvbSByaWdodCB0byBsZWZ0J10sXG4gICAgY29kZTogYFxuaW1wb3J0IE9ic2VydmVBbmltYXRpb25JdGVtIGZyb20gJ3JlYWN0LXNjcm9sbC1mYWRlLWFuaW1hdGlvbi9vYnNlcnZlJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSXRlbSgpIHtcbiAgcmV0dXJuIDxTY3JvbGxBbmltYXRpb25JdGVtXG4gICAgb2Zmc2V0PXt7IHg6LTIwMCwgeToyMDAgfX1cbiAgICBkdXJhdGlvbj17NTAwfVxuICA+XG4gICAgSXRzIGZyb20gcmlnaHQtdG9wXG4gIDwvU2Nyb2xsQW5pbWF0aW9uSXRlbT5cbn1cbiAgICBgLFxuICAgIGlkOiAnZHVyYXRpb24nLFxuICAgIFdyYXBwZXJDb21wb25lbnQ6IE9ic2VydmVBbmltYXRlLFxuICAgIG9wdGlvbnM6IHtcbiAgICAgIG9mZnNldDoge1xuICAgICAgICB4OiAtMjAwLFxuICAgICAgICB5OiAyMDAsXG4gICAgICB9LFxuICAgICAgZHVyYXRpb246IDUwMCxcbiAgICB9LFxuICB9LFxuICB7XG4gICAgdGl0bGU6ICdFbmpveSBZb3VyIGN1c3RvbSBBbmltYXRpb24nLFxuICAgIGRlc2NyaXB0aW9uOiBbJ09ic2VydmUgc3VwcG9ydHMgeW91IGZvciBmcmVlIGRpc3BsYXlpbmcgZGlyZWN0aW9uJ10sXG4gICAgY29kZTogYFxuaW1wb3J0IE9ic2VydmVBbmltYXRpb25JdGVtIGZyb20gJ3JlYWN0LXNjcm9sbC1mYWRlLWFuaW1hdGlvbi9vYnNlcnZlJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSXRlbSgpIHtcbiAgcmV0dXJuIDxTY3JvbGxBbmltYXRpb25JdGVtXG4gICAgb2Zmc2V0PXt7IHg6MjAwLCB5OjIwMCwgejogLTMwMCB9fVxuICAgIGR1cmF0aW9uPXs1MDAwfVxuICAgIHRocmVzaG9sZD17MC4xfVxuICA+XG4gICAgSXRzIGZyb20gbGVmdC1ib3R0b21cbiAgPC9TY3JvbGxBbmltYXRpb25JdGVtPlxufVxuICAgIGAsXG4gICAgaWQ6ICdjdXN0b20nLFxuICAgIFdyYXBwZXJDb21wb25lbnQ6IE9ic2VydmVBbmltYXRlLFxuICAgIG9wdGlvbnM6IHtcbiAgICAgIG9mZnNldDoge1xuICAgICAgICB4OiAyMDAsXG4gICAgICAgIHk6IDIwMCxcbiAgICAgICAgejogLTMwMCxcbiAgICAgIH0sXG4gICAgICBkdXJhdGlvbjogNTAwMCxcbiAgICAgIHRocmVzaG9sZDogMC4xLFxuICAgIH0sXG4gIH0sXG5dO1xuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiMWU2MTY0ZTQ2Yzc1NGJmMjUzNTFcIikiXSwic291cmNlUm9vdCI6IiJ9