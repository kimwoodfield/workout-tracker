webpackHotUpdate_N_E("pages/profile",{

/***/ "./components/Navigation/NavIcon.js":
/*!******************************************!*\
  !*** ./components/Navigation/NavIcon.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return NavIcon; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "C:\\Users\\kimwoodfield\\Documents\\GitHub\\workout-tracker\\frontend\\components\\Navigation\\NavIcon.js";


var IconContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "NavIcon__IconContainer",
  componentId: "pn1m2z-0"
})(["height:100%;width:100%;display:flex;"]);
_c = IconContainer;
var IconButton = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].button.withConfig({
  displayName: "NavIcon__IconButton",
  componentId: "pn1m2z-1"
})(["height:100%;width:100%;background-color:#E0E0E0;color:", ";outline:none;border:none;font-size:2.25rem;display:flex;flex-direction:column;align-items:center;padding-top:0.75rem;"], function (props) {
  return props.active ? '#6200EE;' : '';
});
_c2 = IconButton;
var IconDesc = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].p.withConfig({
  displayName: "NavIcon__IconDesc",
  componentId: "pn1m2z-2"
})(["font-size:0.8rem;padding:0.5rem 0 0 0;margin:0;"]);
_c3 = IconDesc;
function NavIcon(props) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: props.route,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(IconContainer, {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(IconButton, {
        active: props.active,
        children: [props.icon, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(IconDesc, {
          active: props.active,
          children: props.page
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 33,
    columnNumber: 9
  }, this);
}
_c4 = NavIcon;

var _c, _c2, _c3, _c4;

$RefreshReg$(_c, "IconContainer");
$RefreshReg$(_c2, "IconButton");
$RefreshReg$(_c3, "IconDesc");
$RefreshReg$(_c4, "NavIcon");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9OYXZpZ2F0aW9uL05hdkljb24uanMiXSwibmFtZXMiOlsiSWNvbkNvbnRhaW5lciIsInN0eWxlZCIsImRpdiIsIkljb25CdXR0b24iLCJidXR0b24iLCJwcm9wcyIsImFjdGl2ZSIsIkljb25EZXNjIiwicCIsIk5hdkljb24iLCJyb3V0ZSIsImljb24iLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUVBLElBQU1BLGFBQWEsR0FBR0MseURBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSw0Q0FBbkI7S0FBTUYsYTtBQU1OLElBQU1HLFVBQVUsR0FBR0YseURBQU0sQ0FBQ0csTUFBVjtBQUFBO0FBQUE7QUFBQSx5TEFJSCxVQUFBQyxLQUFLO0FBQUEsU0FBSUEsS0FBSyxDQUFDQyxNQUFOLEdBQWUsVUFBZixHQUE0QixFQUFoQztBQUFBLENBSkYsQ0FBaEI7TUFBTUgsVTtBQWNOLElBQU1JLFFBQVEsR0FBR04seURBQU0sQ0FBQ08sQ0FBVjtBQUFBO0FBQUE7QUFBQSx1REFBZDtNQUFNRCxRO0FBTVMsU0FBU0UsT0FBVCxDQUFpQkosS0FBakIsRUFBd0I7QUFDbkMsc0JBQ0kscUVBQUMsZ0RBQUQ7QUFBTSxRQUFJLEVBQUVBLEtBQUssQ0FBQ0ssS0FBbEI7QUFBQSwyQkFDSSxxRUFBQyxhQUFEO0FBQUEsNkJBQ0kscUVBQUMsVUFBRDtBQUFZLGNBQU0sRUFBRUwsS0FBSyxDQUFDQyxNQUExQjtBQUFBLG1CQUNLRCxLQUFLLENBQUNNLElBRFgsZUFFSSxxRUFBQyxRQUFEO0FBQVUsZ0JBQU0sRUFBRU4sS0FBSyxDQUFDQyxNQUF4QjtBQUFBLG9CQUFpQ0QsS0FBSyxDQUFDTztBQUF2QztBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUFVSDtNQVh1QkgsTyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wcm9maWxlLmQ1Y2EzZmIzMjRiZTBkMmUyMzliLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xyXG5cclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5cclxuY29uc3QgSWNvbkNvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbmBcclxuXHJcbmNvbnN0IEljb25CdXR0b24gPSBzdHlsZWQuYnV0dG9uYFxyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRTBFMEUwO1xyXG4gICAgY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMuYWN0aXZlID8gJyM2MjAwRUU7JyA6ICcnfTtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBmb250LXNpemU6IDIuMjVyZW07XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nLXRvcDogMC43NXJlbTtcclxuYFxyXG5cclxuY29uc3QgSWNvbkRlc2MgPSBzdHlsZWQucGBcclxuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xyXG4gICAgcGFkZGluZzogMC41cmVtIDAgMCAwO1xyXG4gICAgbWFyZ2luOiAwO1xyXG5gXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBOYXZJY29uKHByb3BzKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxMaW5rIGhyZWY9e3Byb3BzLnJvdXRlfT5cclxuICAgICAgICAgICAgPEljb25Db250YWluZXI+XHJcbiAgICAgICAgICAgICAgICA8SWNvbkJ1dHRvbiBhY3RpdmU9e3Byb3BzLmFjdGl2ZX0+XHJcbiAgICAgICAgICAgICAgICAgICAge3Byb3BzLmljb259XHJcbiAgICAgICAgICAgICAgICAgICAgPEljb25EZXNjIGFjdGl2ZT17cHJvcHMuYWN0aXZlfT57cHJvcHMucGFnZX08L0ljb25EZXNjPlxyXG4gICAgICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgICA8L0ljb25Db250YWluZXI+XHJcbiAgICAgICAgPC9MaW5rPlxyXG4gICAgKVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==