webpackHotUpdate_N_E("pages/addroutine",{

/***/ "./pages/addroutine.js":
/*!*****************************!*\
  !*** ./pages/addroutine.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AddRoutine; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _components_Navigation_IconNavBar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Navigation/IconNavBar */ "./components/Navigation/IconNavBar.js");
/* harmony import */ var _components_Common_AddWorkoutHeader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Common/AddWorkoutHeader */ "./components/Common/AddWorkoutHeader.js");
/* harmony import */ var _components_PageTitle__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/PageTitle */ "./components/PageTitle.js");
/* harmony import */ var _components_Common_TextButton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Common/TextButton */ "./components/Common/TextButton.js");
/* harmony import */ var _components_Common_BackButton__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Common/BackButton */ "./components/Common/BackButton.js");
/* harmony import */ var _components_Common_Input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/Common/Input */ "./components/Common/Input.js");

var _jsxFileName = "C:\\Users\\kimwoodfield\\Documents\\GitHub\\workout-tracker\\frontend\\pages\\addroutine.js";









var Container = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "addroutine__Container",
  componentId: "sc-1k64mp0-0"
})(["min-height:100vh;background-color:#E0E0E0;display:flex;flex-direction:column;align-items:center;"]);
_c = Container;
var Padding = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "addroutine__Padding",
  componentId: "sc-1k64mp0-1"
})(["display:flex;align-items:center;padding:0.75rem 0.85rem;height:4rem;width:100%;box-sizing:border-box;"]);
_c2 = Padding;
var NewRoutineForm = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].form.withConfig({
  displayName: "addroutine__NewRoutineForm",
  componentId: "sc-1k64mp0-2"
})(["width:90%;padding-bottom:4rem;"]);
_c3 = NewRoutineForm;
var AddExerciseContainer = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "addroutine__AddExerciseContainer",
  componentId: "sc-1k64mp0-3"
})(["width:90%;"]);
_c4 = AddExerciseContainer;
var FormDivider = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "addroutine__FormDivider",
  componentId: "sc-1k64mp0-4"
})(["height:auto;padding:0;margin:0;"]);
_c5 = FormDivider;
function AddRoutine() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Container, {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
        className: "jsx-3379920139",
        children: "Add Routine"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
        rel: "icon",
        href: "/favicon.ico",
        className: "jsx-3379920139"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Padding, {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Common_BackButton__WEBPACK_IMPORTED_MODULE_8__["default"], {
        route: "routines",
        text: "Routines"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_PageTitle__WEBPACK_IMPORTED_MODULE_6__["default"], {
      name: "Unnamed routine"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(NewRoutineForm, {
      method: "POST",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Common_Input__WEBPACK_IMPORTED_MODULE_9__["default"], {
        placeholder: "Routine name"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Common_Input__WEBPACK_IMPORTED_MODULE_9__["default"], {
        placeholder: "Notes"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(FormDivider, {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Common_Input__WEBPACK_IMPORTED_MODULE_9__["default"], {
          placeholder: "Exercise name"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 63,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(AddExerciseContainer, {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Common_TextButton__WEBPACK_IMPORTED_MODULE_7__["default"], {
        text: "Add Exercise"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("main", {
      className: "jsx-3379920139",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "jsx-3379920139",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          className: "jsx-3379920139" + " " + "description"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 75,
          columnNumber: 9
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
      id: "3379920139",
      children: "html,body{padding:0;margin:0;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto, Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue, sans-serif;}*{box-sizing:border-box;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xca2ltd29vZGZpZWxkXFxEb2N1bWVudHNcXEdpdEh1Ylxcd29ya291dC10cmFja2VyXFxmcm9udGVuZFxccGFnZXNcXGFkZHJvdXRpbmUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBaUZ5QixBQUlxQixBQVFZLFVBUGIsU0FHRyxHQUtkLG1JQUpBIiwiZmlsZSI6IkM6XFxVc2Vyc1xca2ltd29vZGZpZWxkXFxEb2N1bWVudHNcXEdpdEh1Ylxcd29ya291dC10cmFja2VyXFxmcm9udGVuZFxccGFnZXNcXGFkZHJvdXRpbmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5pbXBvcnQgSWNvbk5hdkJhciBmcm9tICcuLi9jb21wb25lbnRzL05hdmlnYXRpb24vSWNvbk5hdkJhcic7XHJcbmltcG9ydCBBZGRXb3Jrb3V0SGVhZGVyIGZyb20gJy4uL2NvbXBvbmVudHMvQ29tbW9uL0FkZFdvcmtvdXRIZWFkZXInXHJcbmltcG9ydCBQYWdlVGl0bGUgZnJvbSAnLi4vY29tcG9uZW50cy9QYWdlVGl0bGUnXHJcbmltcG9ydCBUZXh0QnV0dG9uIGZyb20gJy4uL2NvbXBvbmVudHMvQ29tbW9uL1RleHRCdXR0b24nXHJcbmltcG9ydCBCYWNrQnV0dG9uIGZyb20gJy4uL2NvbXBvbmVudHMvQ29tbW9uL0JhY2tCdXR0b24nXHJcbmltcG9ydCBJbnB1dCBmcm9tICcuLi9jb21wb25lbnRzL0NvbW1vbi9JbnB1dCdcclxuXHJcbmNvbnN0IENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNFMEUwRTA7XHJcbiAgICAvLyBwYWRkaW5nOiAwIDAuNXJlbTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuYFxyXG5cclxuY29uc3QgUGFkZGluZyA9IHN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDAuNzVyZW0gMC44NXJlbTtcclxuICBoZWlnaHQ6IDRyZW07XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgLy8gYm9yZGVyOiAxcHggZGFzaGVkIHNhbG1vbjtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG5gXHJcblxyXG5jb25zdCBOZXdSb3V0aW5lRm9ybSA9IHN0eWxlZC5mb3JtYFxyXG4gIHdpZHRoOiA5MCU7XHJcbiAgcGFkZGluZy1ib3R0b206IDRyZW07XHJcbmBcclxuXHJcbmNvbnN0IEFkZEV4ZXJjaXNlQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxuICB3aWR0aDogOTAlO1xyXG5gXHJcblxyXG5jb25zdCBGb3JtRGl2aWRlciA9IHN0eWxlZC5kaXZgXHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgbWFyZ2luOiAwO1xyXG5gXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBZGRSb3V0aW5lKCkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8Q29udGFpbmVyPlxyXG4gICAgICA8SGVhZD5cclxuICAgICAgICA8dGl0bGU+QWRkIFJvdXRpbmU8L3RpdGxlPlxyXG4gICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2Zhdmljb24uaWNvXCIgLz5cclxuICAgICAgPC9IZWFkPlxyXG5cclxuICAgICAgPFBhZGRpbmc+XHJcbiAgICAgICAgPEJhY2tCdXR0b24gcm91dGU9XCJyb3V0aW5lc1wiIHRleHQ9XCJSb3V0aW5lc1wiLz5cclxuICAgICAgPC9QYWRkaW5nPlxyXG5cclxuICAgICAgPFBhZ2VUaXRsZSBuYW1lPVwiVW5uYW1lZCByb3V0aW5lXCIgLz5cclxuICAgICAgICBcclxuICAgICAgPE5ld1JvdXRpbmVGb3JtIG1ldGhvZD1cIlBPU1RcIj5cclxuICAgICAgICA8SW5wdXQgcGxhY2Vob2xkZXI9XCJSb3V0aW5lIG5hbWVcIi8+XHJcbiAgICAgICAgPElucHV0IHBsYWNlaG9sZGVyPVwiTm90ZXNcIi8+XHJcblxyXG4gICAgICAgIDxGb3JtRGl2aWRlcj5cclxuICAgICAgICAgIDxJbnB1dCBwbGFjZWhvbGRlcj1cIkV4ZXJjaXNlIG5hbWVcIi8+XHJcbiAgICAgICAgPC9Gb3JtRGl2aWRlcj5cclxuXHJcbiAgICAgIDwvTmV3Um91dGluZUZvcm0+XHJcblxyXG4gICAgICA8QWRkRXhlcmNpc2VDb250YWluZXI+XHJcbiAgICAgICAgPFRleHRCdXR0b24gdGV4dD1cIkFkZCBFeGVyY2lzZVwiLz5cclxuICAgICAgPC9BZGRFeGVyY2lzZUNvbnRhaW5lcj5cclxuXHJcbiAgICAgIDxtYWluPlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgXHJcbiAgICAgICAgPHAgY2xhc3NOYW1lPVwiZGVzY3JpcHRpb25cIj5cclxuICAgICAgICAgIHsvKiBZb3UgY3JlYXRlIGEgcm91dGluZSBoZXJlICovfVxyXG4gICAgICAgIDwvcD5cclxuXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvbWFpbj5cclxuXHJcbiAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXHJcbiAgICAgICAgaHRtbCxcclxuICAgICAgICBib2R5IHtcclxuICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBTZWdvZSBVSSwgUm9ib3RvLFxyXG4gICAgICAgICAgICBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCBGaXJhIFNhbnMsIERyb2lkIFNhbnMsIEhlbHZldGljYSBOZXVlLFxyXG4gICAgICAgICAgICBzYW5zLXNlcmlmO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgKiB7XHJcbiAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICAgIH1cclxuICAgICAgYH08L3N0eWxlPlxyXG4gICAgPC9Db250YWluZXI+XHJcbiAgKVxyXG59XHJcbiJdfQ== */\n/*@ sourceURL=C:\\\\Users\\\\kimwoodfield\\\\Documents\\\\GitHub\\\\workout-tracker\\\\frontend\\\\pages\\\\addroutine.js */"
    }, void 0, false, void 0, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 46,
    columnNumber: 5
  }, this);
}
_c6 = AddRoutine;

var _c, _c2, _c3, _c4, _c5, _c6;

$RefreshReg$(_c, "Container");
$RefreshReg$(_c2, "Padding");
$RefreshReg$(_c3, "NewRoutineForm");
$RefreshReg$(_c4, "AddExerciseContainer");
$RefreshReg$(_c5, "FormDivider");
$RefreshReg$(_c6, "AddRoutine");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYWRkcm91dGluZS5qcyJdLCJuYW1lcyI6WyJDb250YWluZXIiLCJzdHlsZWQiLCJkaXYiLCJQYWRkaW5nIiwiTmV3Um91dGluZUZvcm0iLCJmb3JtIiwiQWRkRXhlcmNpc2VDb250YWluZXIiLCJGb3JtRGl2aWRlciIsIkFkZFJvdXRpbmUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsU0FBUyxHQUFHQyx5REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLHdHQUFmO0tBQU1GLFM7QUFTTixJQUFNRyxPQUFPLEdBQUdGLHlEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEsNkdBQWI7TUFBTUMsTztBQVVOLElBQU1DLGNBQWMsR0FBR0gseURBQU0sQ0FBQ0ksSUFBVjtBQUFBO0FBQUE7QUFBQSxzQ0FBcEI7TUFBTUQsYztBQUtOLElBQU1FLG9CQUFvQixHQUFHTCx5REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLGtCQUExQjtNQUFNSSxvQjtBQUlOLElBQU1DLFdBQVcsR0FBR04seURBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSx1Q0FBakI7TUFBTUssVztBQU1TLFNBQVNDLFVBQVQsR0FBc0I7QUFDbkMsc0JBQ0UscUVBQUMsU0FBRDtBQUFBLDRCQUNFLHFFQUFDLGdEQUFEO0FBQUEsOEJBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBRUU7QUFBTSxXQUFHLEVBQUMsTUFBVjtBQUFpQixZQUFJLEVBQUMsY0FBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQU1FLHFFQUFDLE9BQUQ7QUFBQSw2QkFDRSxxRUFBQyxxRUFBRDtBQUFZLGFBQUssRUFBQyxVQUFsQjtBQUE2QixZQUFJLEVBQUM7QUFBbEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFORixlQVVFLHFFQUFDLDZEQUFEO0FBQVcsVUFBSSxFQUFDO0FBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFWRixlQVlFLHFFQUFDLGNBQUQ7QUFBZ0IsWUFBTSxFQUFDLE1BQXZCO0FBQUEsOEJBQ0UscUVBQUMsZ0VBQUQ7QUFBTyxtQkFBVyxFQUFDO0FBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQUVFLHFFQUFDLGdFQUFEO0FBQU8sbUJBQVcsRUFBQztBQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkYsZUFJRSxxRUFBQyxXQUFEO0FBQUEsK0JBQ0UscUVBQUMsZ0VBQUQ7QUFBTyxxQkFBVyxFQUFDO0FBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBWkYsZUFzQkUscUVBQUMsb0JBQUQ7QUFBQSw2QkFDRSxxRUFBQyxxRUFBRDtBQUFZLFlBQUksRUFBQztBQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQXRCRixlQTBCRTtBQUFBO0FBQUEsNkJBQ0U7QUFBQTtBQUFBLCtCQUVBO0FBQUEsOENBQWE7QUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUExQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFxREQ7TUF0RHVCQSxVIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2FkZHJvdXRpbmUuZjA4MDQ5MzIxNzliMTNmZTI1Y2YuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcbmltcG9ydCBJY29uTmF2QmFyIGZyb20gJy4uL2NvbXBvbmVudHMvTmF2aWdhdGlvbi9JY29uTmF2QmFyJztcclxuaW1wb3J0IEFkZFdvcmtvdXRIZWFkZXIgZnJvbSAnLi4vY29tcG9uZW50cy9Db21tb24vQWRkV29ya291dEhlYWRlcidcclxuaW1wb3J0IFBhZ2VUaXRsZSBmcm9tICcuLi9jb21wb25lbnRzL1BhZ2VUaXRsZSdcclxuaW1wb3J0IFRleHRCdXR0b24gZnJvbSAnLi4vY29tcG9uZW50cy9Db21tb24vVGV4dEJ1dHRvbidcclxuaW1wb3J0IEJhY2tCdXR0b24gZnJvbSAnLi4vY29tcG9uZW50cy9Db21tb24vQmFja0J1dHRvbidcclxuaW1wb3J0IElucHV0IGZyb20gJy4uL2NvbXBvbmVudHMvQ29tbW9uL0lucHV0J1xyXG5cclxuY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0UwRTBFMDtcclxuICAgIC8vIHBhZGRpbmc6IDAgMC41cmVtO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5gXHJcblxyXG5jb25zdCBQYWRkaW5nID0gc3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgcGFkZGluZzogMC43NXJlbSAwLjg1cmVtO1xyXG4gIGhlaWdodDogNHJlbTtcclxuICB3aWR0aDogMTAwJTtcclxuICAvLyBib3JkZXI6IDFweCBkYXNoZWQgc2FsbW9uO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbmBcclxuXHJcbmNvbnN0IE5ld1JvdXRpbmVGb3JtID0gc3R5bGVkLmZvcm1gXHJcbiAgd2lkdGg6IDkwJTtcclxuICBwYWRkaW5nLWJvdHRvbTogNHJlbTtcclxuYFxyXG5cclxuY29uc3QgQWRkRXhlcmNpc2VDb250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG4gIHdpZHRoOiA5MCU7XHJcbmBcclxuXHJcbmNvbnN0IEZvcm1EaXZpZGVyID0gc3R5bGVkLmRpdmBcclxuICBoZWlnaHQ6IGF1dG87XHJcbiAgcGFkZGluZzogMDtcclxuICBtYXJnaW46IDA7XHJcbmBcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFkZFJvdXRpbmUoKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxDb250YWluZXI+XHJcbiAgICAgIDxIZWFkPlxyXG4gICAgICAgIDx0aXRsZT5BZGQgUm91dGluZTwvdGl0bGU+XHJcbiAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5pY29cIiAvPlxyXG4gICAgICA8L0hlYWQ+XHJcblxyXG4gICAgICA8UGFkZGluZz5cclxuICAgICAgICA8QmFja0J1dHRvbiByb3V0ZT1cInJvdXRpbmVzXCIgdGV4dD1cIlJvdXRpbmVzXCIvPlxyXG4gICAgICA8L1BhZGRpbmc+XHJcblxyXG4gICAgICA8UGFnZVRpdGxlIG5hbWU9XCJVbm5hbWVkIHJvdXRpbmVcIiAvPlxyXG4gICAgICAgIFxyXG4gICAgICA8TmV3Um91dGluZUZvcm0gbWV0aG9kPVwiUE9TVFwiPlxyXG4gICAgICAgIDxJbnB1dCBwbGFjZWhvbGRlcj1cIlJvdXRpbmUgbmFtZVwiLz5cclxuICAgICAgICA8SW5wdXQgcGxhY2Vob2xkZXI9XCJOb3Rlc1wiLz5cclxuXHJcbiAgICAgICAgPEZvcm1EaXZpZGVyPlxyXG4gICAgICAgICAgPElucHV0IHBsYWNlaG9sZGVyPVwiRXhlcmNpc2UgbmFtZVwiLz5cclxuICAgICAgICA8L0Zvcm1EaXZpZGVyPlxyXG5cclxuICAgICAgPC9OZXdSb3V0aW5lRm9ybT5cclxuXHJcbiAgICAgIDxBZGRFeGVyY2lzZUNvbnRhaW5lcj5cclxuICAgICAgICA8VGV4dEJ1dHRvbiB0ZXh0PVwiQWRkIEV4ZXJjaXNlXCIvPlxyXG4gICAgICA8L0FkZEV4ZXJjaXNlQ29udGFpbmVyPlxyXG5cclxuICAgICAgPG1haW4+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICBcclxuICAgICAgICA8cCBjbGFzc05hbWU9XCJkZXNjcmlwdGlvblwiPlxyXG4gICAgICAgICAgey8qIFlvdSBjcmVhdGUgYSByb3V0aW5lIGhlcmUgKi99XHJcbiAgICAgICAgPC9wPlxyXG5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9tYWluPlxyXG5cclxuICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcclxuICAgICAgICBodG1sLFxyXG4gICAgICAgIGJvZHkge1xyXG4gICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFNlZ29lIFVJLCBSb2JvdG8sXHJcbiAgICAgICAgICAgIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsIEZpcmEgU2FucywgRHJvaWQgU2FucywgSGVsdmV0aWNhIE5ldWUsXHJcbiAgICAgICAgICAgIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAqIHtcclxuICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgICAgfVxyXG4gICAgICBgfTwvc3R5bGU+XHJcbiAgICA8L0NvbnRhaW5lcj5cclxuICApXHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==