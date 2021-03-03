webpackHotUpdate_N_E("pages/addroutine",{

/***/ "./components/Common/BackButton.js":
/*!*****************************************!*\
  !*** ./components/Common/BackButton.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return BackButton; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/io */ "./node_modules/react-icons/io/index.esm.js");

var _jsxFileName = "C:\\Users\\kimwoodfield\\Documents\\GitHub\\workout-tracker\\frontend\\components\\Common\\BackButton.js";



var ButtonWrap = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].span.withConfig({
  displayName: "BackButton__ButtonWrap",
  componentId: "oype7t-0"
})(["display:flex;align-items:center;padding:0;margin:0;color:#6200EE;width:auto;"]);
_c = ButtonWrap;
var Icon = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "BackButton__Icon",
  componentId: "oype7t-1"
})(["height:auto;width:auto;display:flex;align-items:center;"]);
_c2 = Icon;
var Text = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].p.withConfig({
  displayName: "BackButton__Text",
  componentId: "oype7t-2"
})(["font-size:0.9rem;display:flex;align-items:center;padding-bottom:0.1rem;padding-left:0.25rem;"]);
_c3 = Text;
function BackButton(props) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: props.route,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(ButtonWrap, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Icon, {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_io__WEBPACK_IMPORTED_MODULE_3__["IoIosArrowBack"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 23
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Text, {
        children: props.text
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 38,
    columnNumber: 9
  }, this);
}
_c4 = BackButton;

var _c, _c2, _c3, _c4;

$RefreshReg$(_c, "ButtonWrap");
$RefreshReg$(_c2, "Icon");
$RefreshReg$(_c3, "Text");
$RefreshReg$(_c4, "BackButton");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Db21tb24vQmFja0J1dHRvbi5qcyJdLCJuYW1lcyI6WyJCdXR0b25XcmFwIiwic3R5bGVkIiwic3BhbiIsIkljb24iLCJkaXYiLCJUZXh0IiwicCIsIkJhY2tCdXR0b24iLCJwcm9wcyIsInJvdXRlIiwidGV4dCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBRUE7QUFFQSxJQUFNQSxVQUFVLEdBQUdDLHlEQUFNLENBQUNDLElBQVY7QUFBQTtBQUFBO0FBQUEsb0ZBQWhCO0tBQU1GLFU7QUFVTixJQUFNRyxJQUFJLEdBQUdGLHlEQUFNLENBQUNHLEdBQVY7QUFBQTtBQUFBO0FBQUEsK0RBQVY7TUFBTUQsSTtBQVNOLElBQU1FLElBQUksR0FBR0oseURBQU0sQ0FBQ0ssQ0FBVjtBQUFBO0FBQUE7QUFBQSxvR0FBVjtNQUFNRCxJO0FBVVMsU0FBU0UsVUFBVCxDQUFvQkMsS0FBcEIsRUFBMkI7QUFDdEMsc0JBQ0kscUVBQUMsZ0RBQUQ7QUFBTSxRQUFJLEVBQUVBLEtBQUssQ0FBQ0MsS0FBbEI7QUFBQSwyQkFDSSxxRUFBQyxVQUFEO0FBQUEsOEJBQ0kscUVBQUMsSUFBRDtBQUFBLCtCQUFNLHFFQUFDLDZEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBTjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREosZUFFSSxxRUFBQyxJQUFEO0FBQUEsa0JBQU9ELEtBQUssQ0FBQ0U7QUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBUUg7TUFUdUJILFUiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYWRkcm91dGluZS5jOTZjZWUwODI1MGM4NTU5OTg0MC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5cclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcclxuXHJcbmltcG9ydCB7IElvSW9zQXJyb3dCYWNrIH0gZnJvbSBcInJlYWN0LWljb25zL2lvXCI7XHJcblxyXG5jb25zdCBCdXR0b25XcmFwID0gc3R5bGVkLnNwYW5gXHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBjb2xvcjogIzYyMDBFRTtcclxuICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgLy8gZm9udC1zaXplOiAxLjI1cmVtO1xyXG5gXHJcblxyXG5jb25zdCBJY29uID0gc3R5bGVkLmRpdmBcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgLy8gYm9yZGVyOiAxcHggZGFzaGVkIHNhbG1vbjtcclxuICAgIC8vIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuYFxyXG5cclxuY29uc3QgVGV4dCA9IHN0eWxlZC5wYFxyXG4gICAgZm9udC1zaXplOiAwLjlyZW07XHJcbiAgICAvLyBib3JkZXI6IDFweCBkYXNoZWQgc2FsbW9uO1xyXG4gICAgLy8gYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDAuMXJlbTtcclxuICAgIHBhZGRpbmctbGVmdDogMC4yNXJlbTtcclxuYFxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQmFja0J1dHRvbihwcm9wcykge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8TGluayBocmVmPXtwcm9wcy5yb3V0ZX0+XHJcbiAgICAgICAgICAgIDxCdXR0b25XcmFwPlxyXG4gICAgICAgICAgICAgICAgPEljb24+PElvSW9zQXJyb3dCYWNrIC8+PC9JY29uPlxyXG4gICAgICAgICAgICAgICAgPFRleHQ+e3Byb3BzLnRleHR9PC9UZXh0PlxyXG4gICAgICAgICAgICA8L0J1dHRvbldyYXA+XHJcbiAgICAgICAgPC9MaW5rPlxyXG4gICAgKVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==