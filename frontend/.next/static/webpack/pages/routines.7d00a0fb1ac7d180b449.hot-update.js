webpackHotUpdate_N_E("pages/routines",{

/***/ "./components/Navigation/IconNavBar.js":
/*!*********************************************!*\
  !*** ./components/Navigation/IconNavBar.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return IconNavBar; });
/* harmony import */ var C_Users_kimwoodfield_Documents_GitHub_workout_tracker_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons/ai */ "./node_modules/react-icons/ai/index.esm.js");
/* harmony import */ var react_icons_bi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/bi */ "./node_modules/react-icons/bi/index.esm.js");
/* harmony import */ var react_icons_cg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/cg */ "./node_modules/react-icons/cg/index.esm.js");
/* harmony import */ var react_icons_io5__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-icons/io5 */ "./node_modules/react-icons/io5/index.esm.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _NavIcon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./NavIcon */ "./components/Navigation/NavIcon.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_8__);



var _jsxFileName = "C:\\Users\\kimwoodfield\\Documents\\GitHub\\workout-tracker\\frontend\\components\\Navigation\\IconNavBar.js",
    _s = $RefreshSig$();

function _templateObject2() {
  var data = Object(C_Users_kimwoodfield_Documents_GitHub_workout_tracker_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  padding: 0;\n  margin: 0;\n  width: 25%;\n  height: 100%;\n  box-sizing: border-box;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(C_Users_kimwoodfield_Documents_GitHub_workout_tracker_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    height: 7rem;\n    width: 100%;\n    box-sizing: border-box;\n    display: flex;\n    position: fixed;\n    bottom: 0;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}









var Clock = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(react_icons_ai__WEBPACK_IMPORTED_MODULE_2__["AiOutlineClockCircle"], {}, void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 12,
  columnNumber: 15
}, undefined);

var Dumbbell = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(react_icons_bi__WEBPACK_IMPORTED_MODULE_3__["BiDumbbell"], {}, void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 13,
  columnNumber: 18
}, undefined);

var Profile = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(react_icons_cg__WEBPACK_IMPORTED_MODULE_4__["CgProfile"], {}, void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 14,
  columnNumber: 17
}, undefined);

var Settings = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(react_icons_io5__WEBPACK_IMPORTED_MODULE_5__["IoSettingsOutline"], {}, void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 15,
  columnNumber: 18
}, undefined);

var BottomNavBar = styled_components__WEBPACK_IMPORTED_MODULE_6__["default"].div(_templateObject());
_c = BottomNavBar;
var NavIconWrapper = styled_components__WEBPACK_IMPORTED_MODULE_6__["default"].div(_templateObject2());
_c2 = NavIconWrapper;
function IconNavBar() {
  _s();

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_8__["useRouter"])();
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(BottomNavBar, {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(NavIconWrapper, {
      active: router.pathname === "/log",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_NavIcon__WEBPACK_IMPORTED_MODULE_7__["default"], {
        route: "log",
        icon: Clock,
        page: "Log",
        active: router.pathname === '/log'
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(NavIconWrapper, {
      active: router.pathname === "/routines",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_NavIcon__WEBPACK_IMPORTED_MODULE_7__["default"], {
        route: "routines",
        icon: Dumbbell,
        page: "Routines",
        active: router.pathname === "/routines"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(NavIconWrapper, {
      active: router.pathname === "/profile",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_NavIcon__WEBPACK_IMPORTED_MODULE_7__["default"], {
        route: "profile",
        icon: Profile,
        page: "Profile",
        active: router.pathname === "/profile"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(NavIconWrapper, {
      active: router.pathname === "/settings",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_NavIcon__WEBPACK_IMPORTED_MODULE_7__["default"], {
        route: "settings",
        icon: Settings,
        page: "Settings",
        active: router.pathname === "/settings"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 40,
    columnNumber: 9
  }, this);
}

_s(IconNavBar, "fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_8__["useRouter"]];
});

_c3 = IconNavBar;

var _c, _c2, _c3;

$RefreshReg$(_c, "BottomNavBar");
$RefreshReg$(_c2, "NavIconWrapper");
$RefreshReg$(_c3, "IconNavBar");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9OYXZpZ2F0aW9uL0ljb25OYXZCYXIuanMiXSwibmFtZXMiOlsiQ2xvY2siLCJEdW1iYmVsbCIsIlByb2ZpbGUiLCJTZXR0aW5ncyIsIkJvdHRvbU5hdkJhciIsInN0eWxlZCIsImRpdiIsIk5hdkljb25XcmFwcGVyIiwiSWNvbk5hdkJhciIsInJvdXRlciIsInVzZVJvdXRlciIsInBhdGhuYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBRUE7O0FBRUEsSUFBTUEsS0FBSyxnQkFBRyxxRUFBQyxtRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBQWQ7O0FBQ0EsSUFBTUMsUUFBUSxnQkFBRyxxRUFBQyx5REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBQWpCOztBQUNBLElBQU1DLE9BQU8sZ0JBQUcscUVBQUMsd0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUFoQjs7QUFDQSxJQUFNQyxRQUFRLGdCQUFHLHFFQUFDLGlFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFBakI7O0FBR0EsSUFBTUMsWUFBWSxHQUFHQyx5REFBTSxDQUFDQyxHQUFWLG1CQUFsQjtLQUFNRixZO0FBU04sSUFBTUcsY0FBYyxHQUFHRix5REFBTSxDQUFDQyxHQUFWLG9CQUFwQjtNQUFNQyxjO0FBU1MsU0FBU0MsVUFBVCxHQUFzQjtBQUFBOztBQUNqQyxNQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCO0FBRUEsc0JBQ0kscUVBQUMsWUFBRDtBQUFBLDRCQUNJLHFFQUFDLGNBQUQ7QUFBZ0IsWUFBTSxFQUFFRCxNQUFNLENBQUNFLFFBQVAsS0FBb0IsTUFBNUM7QUFBQSw2QkFDSSxxRUFBQyxnREFBRDtBQUFTLGFBQUssRUFBQyxLQUFmO0FBQXFCLFlBQUksRUFBRVgsS0FBM0I7QUFBa0MsWUFBSSxFQUFDLEtBQXZDO0FBQTZDLGNBQU0sRUFBRVMsTUFBTSxDQUFDRSxRQUFQLEtBQW9CO0FBQXpFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREosZUFJSSxxRUFBQyxjQUFEO0FBQWdCLFlBQU0sRUFBRUYsTUFBTSxDQUFDRSxRQUFQLEtBQW9CLFdBQTVDO0FBQUEsNkJBQ0kscUVBQUMsZ0RBQUQ7QUFBUyxhQUFLLEVBQUMsVUFBZjtBQUEwQixZQUFJLEVBQUVWLFFBQWhDO0FBQTBDLFlBQUksRUFBQyxVQUEvQztBQUEwRCxjQUFNLEVBQUVRLE1BQU0sQ0FBQ0UsUUFBUCxLQUFvQjtBQUF0RjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUpKLGVBT0kscUVBQUMsY0FBRDtBQUFnQixZQUFNLEVBQUVGLE1BQU0sQ0FBQ0UsUUFBUCxLQUFvQixVQUE1QztBQUFBLDZCQUNJLHFFQUFDLGdEQUFEO0FBQVMsYUFBSyxFQUFDLFNBQWY7QUFBeUIsWUFBSSxFQUFFVCxPQUEvQjtBQUF3QyxZQUFJLEVBQUMsU0FBN0M7QUFBdUQsY0FBTSxFQUFFTyxNQUFNLENBQUNFLFFBQVAsS0FBb0I7QUFBbkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFQSixlQVVJLHFFQUFDLGNBQUQ7QUFBZ0IsWUFBTSxFQUFFRixNQUFNLENBQUNFLFFBQVAsS0FBb0IsV0FBNUM7QUFBQSw2QkFDSSxxRUFBQyxnREFBRDtBQUFTLGFBQUssRUFBQyxVQUFmO0FBQTBCLFlBQUksRUFBRVIsUUFBaEM7QUFBMEMsWUFBSSxFQUFDLFVBQS9DO0FBQTBELGNBQU0sRUFBRU0sTUFBTSxDQUFDRSxRQUFQLEtBQW9CO0FBQXRGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBVko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUFnQkg7O0dBbkJ1QkgsVTtVQUNMRSxxRDs7O01BREtGLFUiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcm91dGluZXMuN2QwMGEwZmIxYWM3ZDE4MGI0NDkuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFpT3V0bGluZUNsb2NrQ2lyY2xlIH0gZnJvbSBcInJlYWN0LWljb25zL2FpXCI7XHJcbmltcG9ydCB7IEJpRHVtYmJlbGwgfSBmcm9tICdyZWFjdC1pY29ucy9iaSdcclxuaW1wb3J0IHsgQ2dQcm9maWxlIH0gZnJvbSAncmVhY3QtaWNvbnMvY2cnXHJcbmltcG9ydCB7IElvU2V0dGluZ3NPdXRsaW5lIH0gZnJvbSAncmVhY3QtaWNvbnMvaW81J1xyXG5cclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcclxuXHJcbmltcG9ydCBOYXZJY29uIGZyb20gJy4vTmF2SWNvbidcclxuXHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuXHJcbmNvbnN0IENsb2NrID0gPEFpT3V0bGluZUNsb2NrQ2lyY2xlIC8+XHJcbmNvbnN0IER1bWJiZWxsID0gPEJpRHVtYmJlbGwgLz5cclxuY29uc3QgUHJvZmlsZSA9IDxDZ1Byb2ZpbGUgLz5cclxuY29uc3QgU2V0dGluZ3MgPSA8SW9TZXR0aW5nc091dGxpbmUgLz5cclxuXHJcblxyXG5jb25zdCBCb3R0b21OYXZCYXIgPSBzdHlsZWQuZGl2YFxyXG4gICAgaGVpZ2h0OiA3cmVtO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIGJvdHRvbTogMDtcclxuYFxyXG5cclxuY29uc3QgTmF2SWNvbldyYXBwZXIgPSBzdHlsZWQuZGl2YFxyXG4gIHBhZGRpbmc6IDA7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHdpZHRoOiAyNSU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbmBcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJY29uTmF2QmFyKCkge1xyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxCb3R0b21OYXZCYXI+XHJcbiAgICAgICAgICAgIDxOYXZJY29uV3JhcHBlciBhY3RpdmU9e3JvdXRlci5wYXRobmFtZSA9PT0gXCIvbG9nXCJ9PlxyXG4gICAgICAgICAgICAgICAgPE5hdkljb24gcm91dGU9XCJsb2dcIiBpY29uPXtDbG9ja30gcGFnZT1cIkxvZ1wiIGFjdGl2ZT17cm91dGVyLnBhdGhuYW1lID09PSAnL2xvZyd9Lz5cclxuICAgICAgICAgICAgPC9OYXZJY29uV3JhcHBlcj5cclxuICAgICAgICAgICAgPE5hdkljb25XcmFwcGVyIGFjdGl2ZT17cm91dGVyLnBhdGhuYW1lID09PSBcIi9yb3V0aW5lc1wifT5cclxuICAgICAgICAgICAgICAgIDxOYXZJY29uIHJvdXRlPVwicm91dGluZXNcIiBpY29uPXtEdW1iYmVsbH0gcGFnZT1cIlJvdXRpbmVzXCIgYWN0aXZlPXtyb3V0ZXIucGF0aG5hbWUgPT09IFwiL3JvdXRpbmVzXCJ9Lz5cclxuICAgICAgICAgICAgPC9OYXZJY29uV3JhcHBlcj5cclxuICAgICAgICAgICAgPE5hdkljb25XcmFwcGVyIGFjdGl2ZT17cm91dGVyLnBhdGhuYW1lID09PSBcIi9wcm9maWxlXCJ9PlxyXG4gICAgICAgICAgICAgICAgPE5hdkljb24gcm91dGU9XCJwcm9maWxlXCIgaWNvbj17UHJvZmlsZX0gcGFnZT1cIlByb2ZpbGVcIiBhY3RpdmU9e3JvdXRlci5wYXRobmFtZSA9PT0gXCIvcHJvZmlsZVwifSAvPlxyXG4gICAgICAgICAgICA8L05hdkljb25XcmFwcGVyPlxyXG4gICAgICAgICAgICA8TmF2SWNvbldyYXBwZXIgYWN0aXZlPXtyb3V0ZXIucGF0aG5hbWUgPT09IFwiL3NldHRpbmdzXCJ9PlxyXG4gICAgICAgICAgICAgICAgPE5hdkljb24gcm91dGU9XCJzZXR0aW5nc1wiIGljb249e1NldHRpbmdzfSBwYWdlPVwiU2V0dGluZ3NcIiBhY3RpdmU9e3JvdXRlci5wYXRobmFtZSA9PT0gXCIvc2V0dGluZ3NcIn0gLz5cclxuICAgICAgICAgICAgPC9OYXZJY29uV3JhcHBlcj5cclxuICAgICAgICA8L0JvdHRvbU5hdkJhcj5cclxuICAgIClcclxufSJdLCJzb3VyY2VSb290IjoiIn0=