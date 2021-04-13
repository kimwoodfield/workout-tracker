webpackHotUpdate_N_E("pages/CurrentWorkout",{

/***/ "./components/Forms/WorkoutForm.js":
/*!*****************************************!*\
  !*** ./components/Forms/WorkoutForm.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return WorkoutForm; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_kimwoodfield_Documents_GitHub_workout_tracker_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ \"./node_modules/next/node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _Users_kimwoodfield_Documents_GitHub_workout_tracker_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_kimwoodfield_Documents_GitHub_workout_tracker_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Users_kimwoodfield_Documents_GitHub_workout_tracker_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _FormInput__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./FormInput */ \"./components/Forms/FormInput.js\");\n/* harmony import */ var _SubmitBtn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./SubmitBtn */ \"./components/Forms/SubmitBtn.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-hook-form */ \"./node_modules/react-hook-form/dist/index.esm.js\");\n/* harmony import */ var _Common_ErrorMessage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Common/ErrorMessage */ \"./components/Common/ErrorMessage.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_9__);\n\n\n\n\nvar _jsxFileName = \"/Users/kimwoodfield/Documents/GitHub/workout-tracker/frontend/components/Forms/WorkoutForm.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nvar Form = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].form.withConfig({\n  displayName: \"WorkoutForm__Form\",\n  componentId: \"yjzq5p-0\"\n})([\"display:flex;flex-direction:column;padding-bottom:1rem;width:100%;box-sizing:border-box;border:2px dashed salmon;\"]);\n_c = Form;\nvar Group = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div.withConfig({\n  displayName: \"WorkoutForm__Group\",\n  componentId: \"yjzq5p-1\"\n})([\"padding:0.5rem 0;margin:0.5rem 0;\"]);\n_c2 = Group;\nfunction WorkoutForm() {\n  _s();\n\n  var _this = this;\n\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_9__[\"useRouter\"])();\n\n  var _useForm = Object(react_hook_form__WEBPACK_IMPORTED_MODULE_7__[\"useForm\"])(),\n      WorkoutExercise = _useForm.WorkoutExercise,\n      handleSubmit = _useForm.handleSubmit,\n      errors = _useForm.errors;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_6__[\"useState\"])([]),\n      routine = _useState[0],\n      setRoutine = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_6__[\"useState\"])([]),\n      exercise = _useState2[0],\n      setExercise = _useState2[1]; // Handles the form submission\n\n\n  var onSubmit = function onSubmit(data) {\n    // If the input data is valid - \n    // Make a POST request to our api route with the input data\n    fetch('http://localhost:3000/routines', {\n      method: 'POST',\n      headers: {\n        'Content-Type': 'application/json'\n      },\n      body: JSON.stringify(data),\n      credentials: 'include'\n    }).then(function (res) {\n      switch (res.status) {\n        case 400:\n          console.log('This is a 400 error.');\n          break;\n\n        case 429:\n          console.log('This is a 429 error. Rate limit exceeded');\n          break;\n\n        case 201:\n          res.json().then(function (data) {\n            // request sent\n            console.log('this worked');\n            alert('Workout complete!'); // router.push('/routines');\n          });\n      }\n    });\n  };\n\n  var urlValue = router.query; // { id: 34 }\n\n  var currentWorkoutID = urlValue.id; // 34\n\n  Object(react__WEBPACK_IMPORTED_MODULE_6__[\"useEffect\"])(function () {\n    function doFetch() {\n      return _doFetch.apply(this, arguments);\n    }\n\n    function _doFetch() {\n      _doFetch = Object(_Users_kimwoodfield_Documents_GitHub_workout_tracker_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__[\"default\"])( /*#__PURE__*/_Users_kimwoodfield_Documents_GitHub_workout_tracker_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {\n        var res, body;\n        return _Users_kimwoodfield_Documents_GitHub_workout_tracker_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                _context.next = 2;\n                return fetch('http://localhost:3000/currentWorkout/' + currentWorkoutID, {\n                  method: 'GET',\n                  headers: {\n                    'Content-Type': 'application/json'\n                  },\n                  credentials: 'include'\n                });\n\n              case 2:\n                res = _context.sent;\n                _context.next = 5;\n                return res.json();\n\n              case 5:\n                body = _context.sent;\n                console.log('body is ...', body);\n                setExercise(body.currentWorkout.RoutineExercises);\n                setRoutine(body.currentWorkout.RoutineName);\n\n              case 9:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee);\n      }));\n      return _doFetch.apply(this, arguments);\n    }\n\n    doFetch();\n  }, []);\n  var currentDate = new Date().toLocaleString();\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Form, {\n    onSubmit: handleSubmit(onSubmit),\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        children: routine\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 89,\n        columnNumber: 13\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n          children: \"Start Time\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 93,\n          columnNumber: 17\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n          children: currentDate\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 94,\n          columnNumber: 17\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 92,\n        columnNumber: 13\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 88,\n      columnNumber: 9\n    }, this), exercise.map(function (exercise, idx) {\n      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Group, {\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"label\", {\n          children: exercise\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 101,\n          columnNumber: 21\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"br\", {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 101,\n          columnNumber: 46\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"label\", {\n            children: \"Weight : \"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 103,\n            columnNumber: 25\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_FormInput__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n            type: \"number\",\n            name: \"Weight\",\n            placeholder: \"Enter weight...\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 104,\n            columnNumber: 25\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 102,\n          columnNumber: 21\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"label\", {\n            children: \"Set 1 : \"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 107,\n            columnNumber: 25\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n            type: \"number\",\n            name: \"Reps\",\n            placeholder: \"Reps\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 108,\n            columnNumber: 25\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 106,\n          columnNumber: 21\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"label\", {\n            children: \"Set 2 : \"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 111,\n            columnNumber: 25\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n            type: \"number\",\n            name: \"Reps\",\n            placeholder: \"Reps\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 112,\n            columnNumber: 25\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 110,\n          columnNumber: 21\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"label\", {\n            children: \"Set 3 : \"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 115,\n            columnNumber: 25\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n            type: \"number\",\n            name: \"Reps\",\n            placeholder: \"Reps\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 116,\n            columnNumber: 25\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 114,\n          columnNumber: 21\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"label\", {\n            children: \"Set 4 : \"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 119,\n            columnNumber: 25\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n            type: \"number\",\n            name: \"Reps\",\n            placeholder: \"Reps\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 120,\n            columnNumber: 25\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 118,\n          columnNumber: 21\n        }, _this)]\n      }, idx, true, {\n        fileName: _jsxFileName,\n        lineNumber: 100,\n        columnNumber: 17\n      }, _this);\n    }), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_SubmitBtn__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n      type: \"submit\",\n      children: \"Finish workout\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 126,\n      columnNumber: 13\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 86,\n    columnNumber: 9\n  }, this);\n}\n\n_s(WorkoutForm, \"hqZ/AZOJKjnFYe62KJjwc2lq3Rc=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_9__[\"useRouter\"], react_hook_form__WEBPACK_IMPORTED_MODULE_7__[\"useForm\"]];\n});\n\n_c3 = WorkoutForm;\n\nvar _c, _c2, _c3;\n\n$RefreshReg$(_c, \"Form\");\n$RefreshReg$(_c2, \"Group\");\n$RefreshReg$(_c3, \"WorkoutForm\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Gb3Jtcy9Xb3Jrb3V0Rm9ybS5qcz84NTc1Il0sIm5hbWVzIjpbIkZvcm0iLCJzdHlsZWQiLCJmb3JtIiwiR3JvdXAiLCJkaXYiLCJXb3Jrb3V0Rm9ybSIsInJvdXRlciIsInVzZVJvdXRlciIsInVzZUZvcm0iLCJXb3Jrb3V0RXhlcmNpc2UiLCJoYW5kbGVTdWJtaXQiLCJlcnJvcnMiLCJ1c2VTdGF0ZSIsInJvdXRpbmUiLCJzZXRSb3V0aW5lIiwiZXhlcmNpc2UiLCJzZXRFeGVyY2lzZSIsIm9uU3VibWl0IiwiZGF0YSIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwiY3JlZGVudGlhbHMiLCJ0aGVuIiwicmVzIiwic3RhdHVzIiwiY29uc29sZSIsImxvZyIsImpzb24iLCJhbGVydCIsInVybFZhbHVlIiwicXVlcnkiLCJjdXJyZW50V29ya291dElEIiwiaWQiLCJ1c2VFZmZlY3QiLCJkb0ZldGNoIiwiY3VycmVudFdvcmtvdXQiLCJSb3V0aW5lRXhlcmNpc2VzIiwiUm91dGluZU5hbWUiLCJjdXJyZW50RGF0ZSIsIkRhdGUiLCJ0b0xvY2FsZVN0cmluZyIsIm1hcCIsImlkeCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLElBQUksR0FBR0MseURBQU0sQ0FBQ0MsSUFBVjtBQUFBO0FBQUE7QUFBQSx5SEFBVjtLQUFNRixJO0FBU04sSUFBTUcsS0FBSyxHQUFHRix5REFBTSxDQUFDRyxHQUFWO0FBQUE7QUFBQTtBQUFBLHlDQUFYO01BQU1ELEs7QUFLUyxTQUFTRSxXQUFULEdBQXVCO0FBQUE7O0FBQUE7O0FBRWxDLE1BQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7O0FBRmtDLGlCQUlnQkMsK0RBQU8sRUFKdkI7QUFBQSxNQUkxQkMsZUFKMEIsWUFJ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QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFkSixlQWtCSTtBQUFBLGtDQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURKLGVBRUk7QUFBTyxnQkFBSSxFQUFDLFFBQVo7QUFBcUIsZ0JBQUksRUFBQyxNQUExQjtBQUFpQyx1QkFBVyxFQUFDO0FBQTdDO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQWxCSjtBQUFBLFNBQVkrQixHQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFESjtBQXlCSCxLQTFCQSxDQVpELGVBd0NJLHFFQUFDLGtEQUFEO0FBQVcsVUFBSSxFQUFDLFFBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBeENKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBNENIOztHQTFHdUJ6QyxXO1VBRUxFLHFELEVBRW1DQyx1RDs7O01BSjlCSCxXIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9Gb3Jtcy9Xb3Jrb3V0Rm9ybS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXG5pbXBvcnQgSW5wdXQgZnJvbSAnLi9Gb3JtSW5wdXQnXG5pbXBvcnQgU3VibWl0QnRuIGZyb20gJy4vU3VibWl0QnRuJ1xuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHVzZUZvcm0sICB9IGZyb20gXCJyZWFjdC1ob29rLWZvcm1cIjtcbmltcG9ydCBFcnJvck1lc3NhZ2UgZnJvbSAnLi4vQ29tbW9uL0Vycm9yTWVzc2FnZSdcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xuXG5jb25zdCBGb3JtID0gc3R5bGVkLmZvcm1gXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIHBhZGRpbmctYm90dG9tOiAxcmVtO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgYm9yZGVyOiAycHggZGFzaGVkIHNhbG1vbjtcbmBcblxuY29uc3QgR3JvdXAgPSBzdHlsZWQuZGl2YFxuICAgIHBhZGRpbmc6IDAuNXJlbSAwO1xuICAgIG1hcmdpbjogMC41cmVtIDA7XG5gXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFdvcmtvdXRGb3JtKCkge1xuXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG5cbiAgICBjb25zdCB7IFdvcmtvdXRFeGVyY2lzZSwgaGFuZGxlU3VibWl0LCBlcnJvcnMgfSA9IHVzZUZvcm0oKTtcblxuICAgIGNvbnN0IFtyb3V0aW5lLCBzZXRSb3V0aW5lXSA9IHVzZVN0YXRlKFtdKTtcbiAgICBjb25zdCBbZXhlcmNpc2UsIHNldEV4ZXJjaXNlXSA9IHVzZVN0YXRlKFtdKTtcblxuICAgIC8vIEhhbmRsZXMgdGhlIGZvcm0gc3VibWlzc2lvblxuICAgIGNvbnN0IG9uU3VibWl0ID0gKGRhdGEpID0+IHtcbiAgICAgICAgLy8gSWYgdGhlIGlucHV0IGRhdGEgaXMgdmFsaWQgLSBcbiAgICAgICAgLy8gTWFrZSBhIFBPU1QgcmVxdWVzdCB0byBvdXIgYXBpIHJvdXRlIHdpdGggdGhlIGlucHV0IGRhdGFcbiAgICAgICAgZmV0Y2goJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9yb3V0aW5lcycsIHtcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShkYXRhKSxcbiAgICAgICAgICAgIGNyZWRlbnRpYWxzOiAnaW5jbHVkZScsXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAgICAgc3dpdGNoKHJlcy5zdGF0dXMpIHtcbiAgICAgICAgICAgICAgICBjYXNlIDQwMDpcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1RoaXMgaXMgYSA0MDAgZXJyb3IuJyk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgNDI5OlxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnVGhpcyBpcyBhIDQyOSBlcnJvci4gUmF0ZSBsaW1pdCBleGNlZWRlZCcpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIDIwMTpcbiAgICAgICAgICAgICAgICAgICAgcmVzLmpzb24oKS50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyByZXF1ZXN0IHNlbnRcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCd0aGlzIHdvcmtlZCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYWxlcnQoJ1dvcmtvdXQgY29tcGxldGUhJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyByb3V0ZXIucHVzaCgnL3JvdXRpbmVzJyk7XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9fSlcbiAgICB9XG5cbiAgICBsZXQgdXJsVmFsdWUgPSByb3V0ZXIucXVlcnk7IC8vIHsgaWQ6IDM0IH1cbiAgICBsZXQgY3VycmVudFdvcmtvdXRJRCA9IHVybFZhbHVlLmlkOyAvLyAzNFxuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgYXN5bmMgZnVuY3Rpb24gZG9GZXRjaCgpIHtcbiAgICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCgnaHR0cDovL2xvY2FsaG9zdDozMDAwL2N1cnJlbnRXb3Jrb3V0LycgKyBjdXJyZW50V29ya291dElELCB7IFxuICAgICAgICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNyZWRlbnRpYWxzOiAnaW5jbHVkZScsXG4gICAgICAgICAgfSk7XG4gICAgICAgICAgY29uc3QgYm9keSA9IGF3YWl0IHJlcy5qc29uKCk7XG4gICAgICAgICAgY29uc29sZS5sb2coJ2JvZHkgaXMgLi4uJywgYm9keSk7XG4gICAgICAgICAgc2V0RXhlcmNpc2UoYm9keS5jdXJyZW50V29ya291dC5Sb3V0aW5lRXhlcmNpc2VzKTtcbiAgICAgICAgICBzZXRSb3V0aW5lKGJvZHkuY3VycmVudFdvcmtvdXQuUm91dGluZU5hbWUpXG4gICAgICAgIH1cbiAgICBcbiAgICAgICAgZG9GZXRjaCgpO1xuICAgICAgfSwgW10pO1xuXG4gICAgICBsZXQgY3VycmVudERhdGUgPSBuZXcgRGF0ZSgpLnRvTG9jYWxlU3RyaW5nKCk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8Rm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0KG9uU3VibWl0KX0+XG5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAge3JvdXRpbmV9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPHA+U3RhcnQgVGltZTwvcD5cbiAgICAgICAgICAgICAgICA8cD57Y3VycmVudERhdGV9PC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIHtleGVyY2lzZS5tYXAoKGV4ZXJjaXNlLCBpZHgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPEdyb3VwIGtleT17aWR4fT5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsPntleGVyY2lzZX08L2xhYmVsPjxiciAvPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPldlaWdodCA6IDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXQgdHlwZT1cIm51bWJlclwiIG5hbWU9XCJXZWlnaHRcIiBwbGFjZWhvbGRlcj1cIkVudGVyIHdlaWdodC4uLlwiLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+U2V0IDEgOiA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJudW1iZXJcIiBuYW1lPVwiUmVwc1wiIHBsYWNlaG9sZGVyPVwiUmVwc1wiLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+U2V0IDIgOiA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJudW1iZXJcIiBuYW1lPVwiUmVwc1wiIHBsYWNlaG9sZGVyPVwiUmVwc1wiLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+U2V0IDMgOiA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJudW1iZXJcIiBuYW1lPVwiUmVwc1wiIHBsYWNlaG9sZGVyPVwiUmVwc1wiLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+U2V0IDQgOiA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJudW1iZXJcIiBuYW1lPVwiUmVwc1wiIHBsYWNlaG9sZGVyPVwiUmVwc1wiLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9Hcm91cD5cbiAgICAgICAgICAgIClcbiAgICAgICAgfSl9XG5cbiAgICAgICAgICAgIDxTdWJtaXRCdG4gdHlwZT1cInN1Ym1pdFwiPkZpbmlzaCB3b3Jrb3V0PC9TdWJtaXRCdG4+XG4gICAgICAgIDwvRm9ybT5cbiAgICApXG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Forms/WorkoutForm.js\n");

/***/ })

})