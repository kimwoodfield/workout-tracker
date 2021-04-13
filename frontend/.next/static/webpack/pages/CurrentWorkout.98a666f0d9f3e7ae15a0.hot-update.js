webpackHotUpdate_N_E("pages/CurrentWorkout",{

/***/ "./components/Forms/WorkoutForm.js":
/*!*****************************************!*\
  !*** ./components/Forms/WorkoutForm.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return WorkoutForm; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_kimwoodfield_Documents_GitHub_workout_tracker_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ \"./node_modules/next/node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _Users_kimwoodfield_Documents_GitHub_workout_tracker_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_kimwoodfield_Documents_GitHub_workout_tracker_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Users_kimwoodfield_Documents_GitHub_workout_tracker_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _FormInput__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./FormInput */ \"./components/Forms/FormInput.js\");\n/* harmony import */ var _SubmitBtn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./SubmitBtn */ \"./components/Forms/SubmitBtn.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-hook-form */ \"./node_modules/react-hook-form/dist/index.esm.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_8__);\n\n\n\n\nvar _jsxFileName = \"/Users/kimwoodfield/Documents/GitHub/workout-tracker/frontend/components/Forms/WorkoutForm.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\nvar Form = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].form.withConfig({\n  displayName: \"WorkoutForm__Form\",\n  componentId: \"yjzq5p-0\"\n})([\"display:flex;flex-direction:column;padding-bottom:1rem;width:100%;box-sizing:border-box;border:2px dashed salmon;\"]);\n_c = Form;\nvar Group = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div.withConfig({\n  displayName: \"WorkoutForm__Group\",\n  componentId: \"yjzq5p-1\"\n})([\"padding:0.5rem 0;margin:0.5rem 0;\"]);\n_c2 = Group;\nfunction WorkoutForm() {\n  _s();\n\n  var _this = this;\n\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_8__[\"useRouter\"])();\n\n  var _useForm = Object(react_hook_form__WEBPACK_IMPORTED_MODULE_7__[\"useForm\"])(),\n      register = _useForm.register,\n      handleSubmit = _useForm.handleSubmit,\n      errors = _useForm.errors;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_6__[\"useState\"])([]),\n      routine = _useState[0],\n      setRoutine = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_6__[\"useState\"])([]),\n      exercise = _useState2[0],\n      setExercise = _useState2[1];\n\n  var urlValue = router.query; // { id: 34 }\n\n  var currentWorkoutID = urlValue.id; // 34\n\n  var onSubmit = function onSubmit(data) {\n    fetch('http://localhost:3000/currentWorkout/' + currentWorkoutID, {\n      method: 'POST',\n      headers: {\n        'Content-Type': 'application/json'\n      },\n      body: JSON.stringify(data),\n      credentials: 'include'\n    }).then(function (res) {\n      switch (res.status) {\n        case 400:\n          console.log('This is a 400 error.');\n          break;\n\n        case 429:\n          console.log('This is a 429 error. Rate limit exceeded');\n          break;\n\n        case 201:\n          res.json().then(function (data) {\n            // request sent\n            console.log('this worked');\n            alert('Workout complete!'); // router.push('/routines');\n          });\n      }\n    });\n  };\n\n  Object(react__WEBPACK_IMPORTED_MODULE_6__[\"useEffect\"])(function () {\n    function doFetch() {\n      return _doFetch.apply(this, arguments);\n    }\n\n    function _doFetch() {\n      _doFetch = Object(_Users_kimwoodfield_Documents_GitHub_workout_tracker_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__[\"default\"])( /*#__PURE__*/_Users_kimwoodfield_Documents_GitHub_workout_tracker_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {\n        var res, body;\n        return _Users_kimwoodfield_Documents_GitHub_workout_tracker_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                _context.next = 2;\n                return fetch('http://localhost:3000/currentWorkout/' + currentWorkoutID, {\n                  method: 'GET',\n                  headers: {\n                    'Content-Type': 'application/json'\n                  },\n                  credentials: 'include'\n                });\n\n              case 2:\n                res = _context.sent;\n                _context.next = 5;\n                return res.json();\n\n              case 5:\n                body = _context.sent;\n                console.log('body is ...', body);\n                setExercise(body.currentWorkout.RoutineExercises);\n                setRoutine(body.currentWorkout.RoutineName);\n\n              case 9:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee);\n      }));\n      return _doFetch.apply(this, arguments);\n    }\n\n    doFetch();\n  }, []);\n  var currentDate = new Date().toLocaleString();\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Form, {\n    onSubmit: handleSubmit(onSubmit),\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        children: routine\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 85,\n        columnNumber: 13\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n          children: \"Start Time\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 89,\n          columnNumber: 17\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n          ref: register,\n          children: currentDate\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 90,\n          columnNumber: 17\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 88,\n        columnNumber: 13\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 84,\n      columnNumber: 9\n    }, this), exercise.map(function (exercise, idx) {\n      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Group, {\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n          children: exercise\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 97,\n          columnNumber: 21\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"label\", {\n            children: \"Weight : \"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 99,\n            columnNumber: 25\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n            type: \"number\",\n            name: \"Weight\",\n            placeholder: \"Enter weight...\",\n            ref: register\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 100,\n            columnNumber: 25\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 98,\n          columnNumber: 21\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"label\", {\n            children: \"Sets: \"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 103,\n            columnNumber: 25\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n            type: \"number\",\n            name: \"Sets\",\n            placeholder: \"Enter sets...\",\n            ref: register\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 104,\n            columnNumber: 25\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 102,\n          columnNumber: 21\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"label\", {\n            children: \"Reps: \"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 107,\n            columnNumber: 25\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n            type: \"number\",\n            name: \"Reps\",\n            placeholder: \"Enter reps...\",\n            ref: register\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 108,\n            columnNumber: 25\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 106,\n          columnNumber: 21\n        }, _this)]\n      }, idx, true, {\n        fileName: _jsxFileName,\n        lineNumber: 96,\n        columnNumber: 17\n      }, _this);\n    }), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_SubmitBtn__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n      type: \"submit\",\n      children: \"Finish workout\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 114,\n      columnNumber: 13\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 82,\n    columnNumber: 9\n  }, this);\n}\n\n_s(WorkoutForm, \"Oqu2yXWnnefN04wJPGmTRMuHYMY=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_8__[\"useRouter\"], react_hook_form__WEBPACK_IMPORTED_MODULE_7__[\"useForm\"]];\n});\n\n_c3 = WorkoutForm;\n\nvar _c, _c2, _c3;\n\n$RefreshReg$(_c, \"Form\");\n$RefreshReg$(_c2, \"Group\");\n$RefreshReg$(_c3, \"WorkoutForm\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Gb3Jtcy9Xb3Jrb3V0Rm9ybS5qcz84NTc1Il0sIm5hbWVzIjpbIkZvcm0iLCJzdHlsZWQiLCJmb3JtIiwiR3JvdXAiLCJkaXYiLCJXb3Jrb3V0Rm9ybSIsInJvdXRlciIsInVzZVJvdXRlciIsInVzZUZvcm0iLCJyZWdpc3RlciIsImhhbmRsZVN1Ym1pdCIsImVycm9ycyIsInVzZVN0YXRlIiwicm91dGluZSIsInNldFJvdXRpbmUiLCJleGVyY2lzZSIsInNldEV4ZXJjaXNlIiwidXJsVmFsdWUiLCJxdWVyeSIsImN1cnJlbnRXb3Jrb3V0SUQiLCJpZCIsIm9uU3VibWl0IiwiZGF0YSIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwiY3JlZGVudGlhbHMiLCJ0aGVuIiwicmVzIiwic3RhdHVzIiwiY29uc29sZSIsImxvZyIsImpzb24iLCJhbGVydCIsInVzZUVmZmVjdCIsImRvRmV0Y2giLCJjdXJyZW50V29ya291dCIsIlJvdXRpbmVFeGVyY2lzZXMiLCJSb3V0aW5lTmFtZSIsImN1cnJlbnREYXRlIiwiRGF0ZSIsInRvTG9jYWxlU3RyaW5nIiwibWFwIiwiaWR4Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsSUFBSSxHQUFHQyx5REFBTSxDQUFDQyxJQUFWO0FBQUE7QUFBQTtBQUFBLHlIQUFWO0tBQU1GLEk7QUFTTixJQUFNRyxLQUFLLEdBQUdGLHlEQUFNLENBQUNHLEdBQVY7QUFBQTtBQUFBO0FBQUEseUNBQVg7TUFBTUQsSztBQUtTLFNBQVNFLFdBQVQsR0FBdUI7QUFBQTs7QUFBQTs7QUFFbEMsTUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4Qjs7QUFGa0MsaUJBSVNDLCtEQUFPLEVBSmhCO0FBQUEsTUFJMUJDLFFBSjBCLFlBSTFCQSxRQUowQjtBQUFBLE1BSWhCQyxZQUpnQixZQUloQkEsWUFKZ0I7QUFBQSxNQUlGQyxNQUpFLFlBSUZBLE1BSkU7O0FBQUEsa0JBTUpDLHNEQUFRLENBQUMsRUFBRCxDQU5KO0FBQUEsTUFNM0JDLE9BTjJCO0FBQUEsTUFNbEJDLFVBTmtCOztBQUFBLG1CQU9GRixzREFBUSxDQUFDLEVBQUQsQ0FQTjtBQUFBLE1BTzNCRyxRQVAyQjtBQUFBLE1BT2pCQyxXQVBpQjs7QUFTbEMsTUFBSUMsUUFBUSxHQUFHWCxNQUFNLENBQUNZLEtBQXRCLENBVGtDLENBU0w7O0FBQzdCLE1BQUlDLGdCQUFnQixHQUFHRixRQUFRLENBQUNHLEVBQWhDLENBVmtDLENBVUU7O0FBRXBDLE1BQU1DLFFBQVEsR0FBRyxTQUFYQSxRQUFXLENBQUNDLElBQUQsRUFBVTtBQUN2QkMsU0FBSyxDQUFDLDBDQUEwQ0osZ0JBQTNDLEVBQTZEO0FBQzlESyxZQUFNLEVBQUUsTUFEc0Q7QUFFOURDLGFBQU8sRUFBRTtBQUNMLHdCQUFnQjtBQURYLE9BRnFEO0FBSzlEQyxVQUFJLEVBQUVDLElBQUksQ0FBQ0MsU0FBTCxDQUFlTixJQUFmLENBTHdEO0FBTTlETyxpQkFBVyxFQUFFO0FBTmlELEtBQTdELENBQUwsQ0FRS0MsSUFSTCxDQVFVLFVBQUNDLEdBQUQsRUFBUztBQUNmLGNBQU9BLEdBQUcsQ0FBQ0MsTUFBWDtBQUNJLGFBQUssR0FBTDtBQUNJQyxpQkFBTyxDQUFDQyxHQUFSLENBQVksc0JBQVo7QUFDQTs7QUFDSixhQUFLLEdBQUw7QUFDSUQsaUJBQU8sQ0FBQ0MsR0FBUixDQUFZLDBDQUFaO0FBQ0E7O0FBQ0osYUFBSyxHQUFMO0FBQ0lILGFBQUcsQ0FBQ0ksSUFBSixHQUFXTCxJQUFYLENBQWdCLFVBQUNSLElBQUQsRUFBVTtBQUN0QjtBQUNBVyxtQkFBTyxDQUFDQyxHQUFSLENBQVksYUFBWjtBQUNBRSxpQkFBSyxDQUFDLG1CQUFELENBQUwsQ0FIc0IsQ0FJdEI7QUFDSCxXQUxEO0FBUlI7QUFjRSxLQXZCTjtBQXdCSCxHQXpCRDs7QUEyQkFDLHlEQUFTLENBQUMsWUFBTTtBQUFBLGFBQ0dDLE9BREg7QUFBQTtBQUFBOztBQUFBO0FBQUEsMFhBQ1o7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFDb0JmLEtBQUssQ0FBQywwQ0FBMENKLGdCQUEzQyxFQUE2RDtBQUNsRkssd0JBQU0sRUFBRSxLQUQwRTtBQUVsRkMseUJBQU8sRUFBRTtBQUNQLG9DQUFnQjtBQURULG1CQUZ5RTtBQUtsRkksNkJBQVcsRUFBRTtBQUxxRSxpQkFBN0QsQ0FEekI7O0FBQUE7QUFDUUUsbUJBRFI7QUFBQTtBQUFBLHVCQVFxQkEsR0FBRyxDQUFDSSxJQUFKLEVBUnJCOztBQUFBO0FBUVFULG9CQVJSO0FBU0VPLHVCQUFPLENBQUNDLEdBQVIsQ0FBWSxhQUFaLEVBQTJCUixJQUEzQjtBQUNBViwyQkFBVyxDQUFDVSxJQUFJLENBQUNhLGNBQUwsQ0FBb0JDLGdCQUFyQixDQUFYO0FBQ0ExQiwwQkFBVSxDQUFDWSxJQUFJLENBQUNhLGNBQUwsQ0FBb0JFLFdBQXJCLENBQVY7O0FBWEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FEWTtBQUFBO0FBQUE7O0FBZVpILFdBQU87QUFDUixHQWhCTSxFQWdCSixFQWhCSSxDQUFUO0FBa0JFLE1BQUlJLFdBQVcsR0FBRyxJQUFJQyxJQUFKLEdBQVdDLGNBQVgsRUFBbEI7QUFFRixzQkFDSSxxRUFBQyxJQUFEO0FBQU0sWUFBUSxFQUFFbEMsWUFBWSxDQUFDVyxRQUFELENBQTVCO0FBQUEsNEJBRUE7QUFBQSw4QkFDSTtBQUFBLGtCQUNLUjtBQURMO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FESixlQUlJO0FBQUEsZ0NBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREosZUFFSTtBQUFHLGFBQUcsRUFBRUosUUFBUjtBQUFBLG9CQUFtQmlDO0FBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRkEsRUFZQzNCLFFBQVEsQ0FBQzhCLEdBQVQsQ0FBYSxVQUFDOUIsUUFBRCxFQUFXK0IsR0FBWCxFQUFtQjtBQUM3QiwwQkFDSSxxRUFBQyxLQUFEO0FBQUEsZ0NBQ0k7QUFBQSxvQkFBSS9CO0FBQUo7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFESixlQUVJO0FBQUEsa0NBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREosZUFFSTtBQUFPLGdCQUFJLEVBQUMsUUFBWjtBQUFxQixnQkFBSSxFQUFDLFFBQTFCO0FBQW1DLHVCQUFXLEVBQUMsaUJBQS9DO0FBQWlFLGVBQUcsRUFBRU47QUFBdEU7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRkosZUFNSTtBQUFBLGtDQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURKLGVBRUk7QUFBTyxnQkFBSSxFQUFDLFFBQVo7QUFBcUIsZ0JBQUksRUFBQyxNQUExQjtBQUFpQyx1QkFBVyxFQUFDLGVBQTdDO0FBQTZELGVBQUcsRUFBRUE7QUFBbEU7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBTkosZUFVSTtBQUFBLGtDQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURKLGVBRUk7QUFBTyxnQkFBSSxFQUFDLFFBQVo7QUFBcUIsZ0JBQUksRUFBQyxNQUExQjtBQUFpQyx1QkFBVyxFQUFDLGVBQTdDO0FBQTZELGVBQUcsRUFBRUE7QUFBbEU7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBVko7QUFBQSxTQUFZcUMsR0FBWjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREo7QUFpQkgsS0FsQkEsQ0FaRCxlQWdDSSxxRUFBQyxrREFBRDtBQUFXLFVBQUksRUFBQyxRQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQWhDSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQW9DSDs7R0EvRnVCekMsVztVQUVMRSxxRCxFQUU0QkMsdUQ7OztNQUp2QkgsVyIsImZpbGUiOiIuL2NvbXBvbmVudHMvRm9ybXMvV29ya291dEZvcm0uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xuaW1wb3J0IElucHV0IGZyb20gJy4vRm9ybUlucHV0J1xuaW1wb3J0IFN1Ym1pdEJ0biBmcm9tICcuL1N1Ym1pdEJ0bidcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyB1c2VGb3JtLCAgfSBmcm9tIFwicmVhY3QtaG9vay1mb3JtXCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcblxuY29uc3QgRm9ybSA9IHN0eWxlZC5mb3JtYFxuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBwYWRkaW5nLWJvdHRvbTogMXJlbTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGJvcmRlcjogMnB4IGRhc2hlZCBzYWxtb247XG5gXG5cbmNvbnN0IEdyb3VwID0gc3R5bGVkLmRpdmBcbiAgICBwYWRkaW5nOiAwLjVyZW0gMDtcbiAgICBtYXJnaW46IDAuNXJlbSAwO1xuYFxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBXb3Jrb3V0Rm9ybSgpIHtcblxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuXG4gICAgY29uc3QgeyByZWdpc3RlciwgaGFuZGxlU3VibWl0LCBlcnJvcnMgfSA9IHVzZUZvcm0oKTtcblxuICAgIGNvbnN0IFtyb3V0aW5lLCBzZXRSb3V0aW5lXSA9IHVzZVN0YXRlKFtdKTtcbiAgICBjb25zdCBbZXhlcmNpc2UsIHNldEV4ZXJjaXNlXSA9IHVzZVN0YXRlKFtdKTtcblxuICAgIGxldCB1cmxWYWx1ZSA9IHJvdXRlci5xdWVyeTsgLy8geyBpZDogMzQgfVxuICAgIGxldCBjdXJyZW50V29ya291dElEID0gdXJsVmFsdWUuaWQ7IC8vIDM0XG5cbiAgICBjb25zdCBvblN1Ym1pdCA9IChkYXRhKSA9PiB7XG4gICAgICAgIGZldGNoKCdodHRwOi8vbG9jYWxob3N0OjMwMDAvY3VycmVudFdvcmtvdXQvJyArIGN1cnJlbnRXb3Jrb3V0SUQsIHtcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShkYXRhKSxcbiAgICAgICAgICAgIGNyZWRlbnRpYWxzOiAnaW5jbHVkZScsXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAgICAgc3dpdGNoKHJlcy5zdGF0dXMpIHtcbiAgICAgICAgICAgICAgICBjYXNlIDQwMDpcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1RoaXMgaXMgYSA0MDAgZXJyb3IuJyk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgNDI5OlxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnVGhpcyBpcyBhIDQyOSBlcnJvci4gUmF0ZSBsaW1pdCBleGNlZWRlZCcpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIDIwMTpcbiAgICAgICAgICAgICAgICAgICAgcmVzLmpzb24oKS50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyByZXF1ZXN0IHNlbnRcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCd0aGlzIHdvcmtlZCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYWxlcnQoJ1dvcmtvdXQgY29tcGxldGUhJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyByb3V0ZXIucHVzaCgnL3JvdXRpbmVzJyk7XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9fSlcbiAgICB9XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBhc3luYyBmdW5jdGlvbiBkb0ZldGNoKCkge1xuICAgICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKCdodHRwOi8vbG9jYWxob3N0OjMwMDAvY3VycmVudFdvcmtvdXQvJyArIGN1cnJlbnRXb3Jrb3V0SUQsIHsgXG4gICAgICAgICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY3JlZGVudGlhbHM6ICdpbmNsdWRlJyxcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBjb25zdCBib2R5ID0gYXdhaXQgcmVzLmpzb24oKTtcbiAgICAgICAgICBjb25zb2xlLmxvZygnYm9keSBpcyAuLi4nLCBib2R5KTtcbiAgICAgICAgICBzZXRFeGVyY2lzZShib2R5LmN1cnJlbnRXb3Jrb3V0LlJvdXRpbmVFeGVyY2lzZXMpO1xuICAgICAgICAgIHNldFJvdXRpbmUoYm9keS5jdXJyZW50V29ya291dC5Sb3V0aW5lTmFtZSlcbiAgICAgICAgfVxuICAgIFxuICAgICAgICBkb0ZldGNoKCk7XG4gICAgICB9LCBbXSk7XG5cbiAgICAgIGxldCBjdXJyZW50RGF0ZSA9IG5ldyBEYXRlKCkudG9Mb2NhbGVTdHJpbmcoKTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxGb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXQob25TdWJtaXQpfT5cblxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICB7cm91dGluZX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8cD5TdGFydCBUaW1lPC9wPlxuICAgICAgICAgICAgICAgIDxwIHJlZj17cmVnaXN0ZXJ9PntjdXJyZW50RGF0ZX08L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAge2V4ZXJjaXNlLm1hcCgoZXhlcmNpc2UsIGlkeCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8R3JvdXAga2V5PXtpZHh9PlxuICAgICAgICAgICAgICAgICAgICA8cD57ZXhlcmNpc2V9PC9wPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPldlaWdodCA6IDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cIm51bWJlclwiIG5hbWU9XCJXZWlnaHRcIiBwbGFjZWhvbGRlcj1cIkVudGVyIHdlaWdodC4uLlwiIHJlZj17cmVnaXN0ZXJ9Lz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+U2V0czogPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwibnVtYmVyXCIgbmFtZT1cIlNldHNcIiBwbGFjZWhvbGRlcj1cIkVudGVyIHNldHMuLi5cIiByZWY9e3JlZ2lzdGVyfS8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPlJlcHM6IDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cIm51bWJlclwiIG5hbWU9XCJSZXBzXCIgcGxhY2Vob2xkZXI9XCJFbnRlciByZXBzLi4uXCIgcmVmPXtyZWdpc3Rlcn0vPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L0dyb3VwPlxuICAgICAgICAgICAgKVxuICAgICAgICB9KX1cblxuICAgICAgICAgICAgPFN1Ym1pdEJ0biB0eXBlPVwic3VibWl0XCI+RmluaXNoIHdvcmtvdXQ8L1N1Ym1pdEJ0bj5cbiAgICAgICAgPC9Gb3JtPlxuICAgIClcbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Forms/WorkoutForm.js\n");

/***/ })

})