webpackHotUpdate_N_E("pages/addroutine",{

/***/ "./components/Common/AddWorkoutHeader.js":
/*!***********************************************!*\
  !*** ./components/Common/AddWorkoutHeader.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AddWorkoutHeader; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _BackButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./BackButton */ "./components/Common/BackButton.js");

var _jsxFileName = "C:\\Users\\kimwoodfield\\Documents\\GitHub\\workout-tracker\\frontend\\components\\Common\\AddWorkoutHeader.js";



var Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "AddWorkoutHeader__Wrapper",
  componentId: "u8jhf9-0"
})(["background-color:white;height:4rem;display:flex;justify-content:space-between;width:100%;margin:0;padding:0.75rem 0.85rem;"]);
_c = Wrapper;
var Finish = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].p.withConfig({
  displayName: "AddWorkoutHeader__Finish",
  componentId: "u8jhf9-1"
})(["color:#6200EE;font-weight:500;margin:0;padding:0;"]);
_c2 = Finish;
var Date = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].p.withConfig({
  displayName: "AddWorkoutHeader__Date",
  componentId: "u8jhf9-2"
})(["margin:0;padding:0;font-weight:700;"]);
_c3 = Date;
function AddWorkoutHeader(props) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Wrapper, {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_BackButton__WEBPACK_IMPORTED_MODULE_3__["default"], {
      route: props.route
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Date, {
      children: props.date
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "log",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Finish, {
        children: Finish
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 33,
    columnNumber: 9
  }, this);
}
_c4 = AddWorkoutHeader;

var _c, _c2, _c3, _c4;

$RefreshReg$(_c, "Wrapper");
$RefreshReg$(_c2, "Finish");
$RefreshReg$(_c3, "Date");
$RefreshReg$(_c4, "AddWorkoutHeader");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Db21tb24vQWRkV29ya291dEhlYWRlci5qcyJdLCJuYW1lcyI6WyJXcmFwcGVyIiwic3R5bGVkIiwiZGl2IiwiRmluaXNoIiwicCIsIkRhdGUiLCJBZGRXb3Jrb3V0SGVhZGVyIiwicHJvcHMiLCJyb3V0ZSIsImRhdGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUVBO0FBRUEsSUFBTUEsT0FBTyxHQUFHQyx5REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLGtJQUFiO0tBQU1GLE87QUFXTixJQUFNRyxNQUFNLEdBQUdGLHlEQUFNLENBQUNHLENBQVY7QUFBQTtBQUFBO0FBQUEseURBQVo7TUFBTUQsTTtBQU9OLElBQU1FLElBQUksR0FBR0oseURBQU0sQ0FBQ0csQ0FBVjtBQUFBO0FBQUE7QUFBQSwyQ0FBVjtNQUFNQyxJO0FBTVMsU0FBU0MsZ0JBQVQsQ0FBMEJDLEtBQTFCLEVBQWlDO0FBQzVDLHNCQUNJLHFFQUFDLE9BQUQ7QUFBQSw0QkFDSSxxRUFBQyxtREFBRDtBQUFZLFdBQUssRUFBRUEsS0FBSyxDQUFDQztBQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREosZUFFSSxxRUFBQyxJQUFEO0FBQUEsZ0JBQU9ELEtBQUssQ0FBQ0U7QUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRkosZUFHSSxxRUFBQyxnREFBRDtBQUFNLFVBQUksRUFBQyxLQUFYO0FBQUEsNkJBQ0kscUVBQUMsTUFBRDtBQUFBLGtCQUFTTjtBQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBSEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUFTSDtNQVZ1QkcsZ0IiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYWRkcm91dGluZS5mZjczZmYwZGZlYzBkMmIxZGFjNC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5cclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcclxuXHJcbmltcG9ydCBCYWNrQnV0dG9uIGZyb20gJy4vQmFja0J1dHRvbidcclxuXHJcbmNvbnN0IFdyYXBwZXIgPSBzdHlsZWQuZGl2YFxyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBoZWlnaHQ6IDRyZW07XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwLjc1cmVtIDAuODVyZW07XHJcbiAgICAvLyBib3JkZXItYm90dG9tOiAwLjVweCBzb2xpZCAjQkRCREJEO1xyXG5gXHJcblxyXG5jb25zdCBGaW5pc2ggPSBzdHlsZWQucGBcclxuICAgIGNvbG9yOiAjNjIwMEVFO1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbmBcclxuXHJcbmNvbnN0IERhdGUgPSBzdHlsZWQucGBcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG5gXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBZGRXb3Jrb3V0SGVhZGVyKHByb3BzKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxXcmFwcGVyPlxyXG4gICAgICAgICAgICA8QmFja0J1dHRvbiByb3V0ZT17cHJvcHMucm91dGV9IC8+XHJcbiAgICAgICAgICAgIDxEYXRlPntwcm9wcy5kYXRlfTwvRGF0ZT5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj1cImxvZ1wiPlxyXG4gICAgICAgICAgICAgICAgPEZpbmlzaD57RmluaXNofTwvRmluaXNoPlxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgPC9XcmFwcGVyPlxyXG4gICAgKVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==