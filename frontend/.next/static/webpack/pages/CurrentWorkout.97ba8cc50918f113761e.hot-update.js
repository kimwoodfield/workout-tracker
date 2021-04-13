webpackHotUpdate_N_E("pages/CurrentWorkout",{

/***/ "./components/Forms/WorkoutForm.js":
/*!*****************************************!*\
  !*** ./components/Forms/WorkoutForm.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return WorkoutForm; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_kimwoodfield_Documents_GitHub_workout_tracker_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ \"./node_modules/next/node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _Users_kimwoodfield_Documents_GitHub_workout_tracker_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_kimwoodfield_Documents_GitHub_workout_tracker_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Users_kimwoodfield_Documents_GitHub_workout_tracker_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _FormInput__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./FormInput */ \"./components/Forms/FormInput.js\");\n/* harmony import */ var _SubmitBtn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./SubmitBtn */ \"./components/Forms/SubmitBtn.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-hook-form */ \"./node_modules/react-hook-form/dist/index.esm.js\");\n/* harmony import */ var _Common_ErrorMessage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Common/ErrorMessage */ \"./components/Common/ErrorMessage.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_9__);\n\n\n\n\nvar _jsxFileName = \"/Users/kimwoodfield/Documents/GitHub/workout-tracker/frontend/components/Forms/WorkoutForm.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nvar Form = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].form.withConfig({\n  displayName: \"WorkoutForm__Form\",\n  componentId: \"yjzq5p-0\"\n})([\"display:flex;flex-direction:column;width:18rem;padding-bottom:1rem;\"]);\n_c = Form;\nvar Group = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div.withConfig({\n  displayName: \"WorkoutForm__Group\",\n  componentId: \"yjzq5p-1\"\n})([\"padding:0.5rem 0;margin:0.5rem 0;\"]);\nfunction WorkoutForm() {\n  _s();\n\n  var _this = this;\n\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_9__[\"useRouter\"])();\n\n  var _useForm = Object(react_hook_form__WEBPACK_IMPORTED_MODULE_7__[\"useForm\"])(),\n      register = _useForm.register,\n      handleSubmit = _useForm.handleSubmit,\n      errors = _useForm.errors;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_6__[\"useState\"])([]),\n      routine = _useState[0],\n      setRoutine = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_6__[\"useState\"])([]),\n      exercise = _useState2[0],\n      setExercise = _useState2[1]; // Handles the form submission\n\n\n  var onSubmit = function onSubmit(data) {\n    // If the input data is valid - \n    // Make a POST request to our api route with the input data\n    fetch('http://localhost:3000/routines', {\n      method: 'POST',\n      headers: {\n        'Content-Type': 'application/json'\n      },\n      body: JSON.stringify(data),\n      credentials: 'include'\n    }).then(function (res) {\n      switch (res.status) {\n        case 400:\n          console.log('This is a 400 error.');\n          break;\n\n        case 429:\n          console.log('This is a 429 error. Rate limit exceeded');\n          break;\n\n        case 201:\n          res.json().then(function (data) {\n            // request sent\n            console.log('this worked');\n            alert('Workout complete!'); // router.push('/routines');\n          });\n      }\n    });\n  };\n\n  console.log(router.query);\n  var urlValue = router.query; // { id: 34 }\n\n  var currentWorkoutID = urlValue.id; // 34\n\n  console.log(currentWorkoutID);\n  Object(react__WEBPACK_IMPORTED_MODULE_6__[\"useEffect\"])(function () {\n    function doFetch() {\n      return _doFetch.apply(this, arguments);\n    }\n\n    function _doFetch() {\n      _doFetch = Object(_Users_kimwoodfield_Documents_GitHub_workout_tracker_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__[\"default\"])( /*#__PURE__*/_Users_kimwoodfield_Documents_GitHub_workout_tracker_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {\n        var res, body;\n        return _Users_kimwoodfield_Documents_GitHub_workout_tracker_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                _context.next = 2;\n                return fetch('http://localhost:3000/currentWorkout/' + currentWorkoutID, {\n                  method: 'GET',\n                  headers: {\n                    'Content-Type': 'application/json'\n                  },\n                  credentials: 'include'\n                });\n\n              case 2:\n                res = _context.sent;\n                _context.next = 5;\n                return res.json();\n\n              case 5:\n                body = _context.sent;\n                console.log('body is ...', body); //   setExercise(body.RoutineExercises);\n\n              case 7:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee);\n      }));\n      return _doFetch.apply(this, arguments);\n    }\n\n    doFetch();\n  }, []);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Form, {\n    onSubmit: handleSubmit(onSubmit),\n    children: [exercise.map(function (exercise, idx) {\n      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"label\", {\n          children: exercise.exercise_name\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 90,\n          columnNumber: 21\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n          type: \"number\",\n          name: \"Weight\",\n          placeholder: \"Weight\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 91,\n          columnNumber: 21\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"label\", {\n            children: \"Set 1\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 93,\n            columnNumber: 25\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n            type: \"number\",\n            placeholder: \"Reps\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 94,\n            columnNumber: 25\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 92,\n          columnNumber: 21\n        }, _this)]\n      }, idx, true, {\n        fileName: _jsxFileName,\n        lineNumber: 89,\n        columnNumber: 17\n      }, _this);\n    }), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_SubmitBtn__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n      type: \"submit\",\n      children: \"Finish workout\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 191,\n      columnNumber: 13\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 84,\n    columnNumber: 9\n  }, this);\n}\n\n_s(WorkoutForm, \"Oqu2yXWnnefN04wJPGmTRMuHYMY=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_9__[\"useRouter\"], react_hook_form__WEBPACK_IMPORTED_MODULE_7__[\"useForm\"]];\n});\n\n_c2 = WorkoutForm;\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"Form\");\n$RefreshReg$(_c2, \"WorkoutForm\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Gb3Jtcy9Xb3Jrb3V0Rm9ybS5qcz84NTc1Il0sIm5hbWVzIjpbIkZvcm0iLCJzdHlsZWQiLCJmb3JtIiwiR3JvdXAiLCJkaXYiLCJXb3Jrb3V0Rm9ybSIsInJvdXRlciIsInVzZVJvdXRlciIsInVzZUZvcm0iLCJyZWdpc3RlciIsImhhbmRsZVN1Ym1pdCIsImVycm9ycyIsInVzZVN0YXRlIiwicm91dGluZSIsInNldFJvdXRpbmUiLCJleGVyY2lzZSIsInNldEV4ZXJjaXNlIiwib25TdWJtaXQiLCJkYXRhIiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJjcmVkZW50aWFscyIsInRoZW4iLCJyZXMiLCJzdGF0dXMiLCJjb25zb2xlIiwibG9nIiwianNvbiIsImFsZXJ0IiwicXVlcnkiLCJ1cmxWYWx1ZSIsImN1cnJlbnRXb3Jrb3V0SUQiLCJpZCIsInVzZUVmZmVjdCIsImRvRmV0Y2giLCJtYXAiLCJpZHgiLCJleGVyY2lzZV9uYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsSUFBSSxHQUFHQyx5REFBTSxDQUFDQyxJQUFWO0FBQUE7QUFBQTtBQUFBLDJFQUFWO0tBQU1GLEk7QUFPTixJQUFNRyxLQUFLLEdBQUdGLHlEQUFNLENBQUNHLEdBQVY7QUFBQTtBQUFBO0FBQUEseUNBQVg7QUFNZSxTQUFTQyxXQUFULEdBQXVCO0FBQUE7O0FBQUE7O0FBRWxDLE1BQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7O0FBRmtDLGlCQUlTQywrREFBTyxFQUpoQjtBQUFBLE1BSTFCQyxRQUowQixZQUkxQkEsUUFKMEI7QUFBQSxNQUloQkMsWUFKZ0IsWUFJaEJBLFlBSmdCO0FBQUEsTUFJRkMsTUFKRSxZQUlGQSxNQUpFOztBQUFBLGtCQU1KQyxzREFBUSxD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QUEsbUJBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUhKO0FBQUEsU0FBVUQsR0FBVjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREo7QUFVSCxLQVhBLENBSEQsZUEyR0kscUVBQUMsa0RBQUQ7QUFBVyxVQUFJLEVBQUMsUUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUEzR0o7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUErR0g7O0dBNUt1Qm5DLFc7VUFFTEUscUQsRUFFNEJDLHVEOzs7TUFKdkJILFciLCJmaWxlIjoiLi9jb21wb25lbnRzL0Zvcm1zL1dvcmtvdXRGb3JtLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcbmltcG9ydCBJbnB1dCBmcm9tICcuL0Zvcm1JbnB1dCdcbmltcG9ydCBTdWJtaXRCdG4gZnJvbSAnLi9TdWJtaXRCdG4nXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgdXNlRm9ybSwgIH0gZnJvbSBcInJlYWN0LWhvb2stZm9ybVwiO1xuaW1wb3J0IEVycm9yTWVzc2FnZSBmcm9tICcuLi9Db21tb24vRXJyb3JNZXNzYWdlJ1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXG5cbmNvbnN0IEZvcm0gPSBzdHlsZWQuZm9ybWBcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgd2lkdGg6IDE4cmVtO1xuICAgIHBhZGRpbmctYm90dG9tOiAxcmVtO1xuYFxuXG5jb25zdCBHcm91cCA9IHN0eWxlZC5kaXZgXG4gICAgcGFkZGluZzogMC41cmVtIDA7XG4gICAgbWFyZ2luOiAwLjVyZW0gMDtcbiAgICAvLyBib3JkZXI6IDFweCBkYXNoZWQgZ3JleTtcbmBcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gV29ya291dEZvcm0oKSB7XG5cbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcblxuICAgIGNvbnN0IHsgcmVnaXN0ZXIsIGhhbmRsZVN1Ym1pdCwgZXJyb3JzIH0gPSB1c2VGb3JtKCk7XG5cbiAgICBjb25zdCBbcm91dGluZSwgc2V0Um91dGluZV0gPSB1c2VTdGF0ZShbXSk7XG4gICAgY29uc3QgW2V4ZXJjaXNlLCBzZXRFeGVyY2lzZV0gPSB1c2VTdGF0ZShbXSk7XG5cbiAgICAvLyBIYW5kbGVzIHRoZSBmb3JtIHN1Ym1pc3Npb25cbiAgICBjb25zdCBvblN1Ym1pdCA9IChkYXRhKSA9PiB7XG4gICAgICAgIC8vIElmIHRoZSBpbnB1dCBkYXRhIGlzIHZhbGlkIC0gXG4gICAgICAgIC8vIE1ha2UgYSBQT1NUIHJlcXVlc3QgdG8gb3VyIGFwaSByb3V0ZSB3aXRoIHRoZSBpbnB1dCBkYXRhXG4gICAgICAgIGZldGNoKCdodHRwOi8vbG9jYWxob3N0OjMwMDAvcm91dGluZXMnLCB7XG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoZGF0YSksXG4gICAgICAgICAgICBjcmVkZW50aWFsczogJ2luY2x1ZGUnLFxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC50aGVuKChyZXMpID0+IHtcbiAgICAgICAgICAgIHN3aXRjaChyZXMuc3RhdHVzKSB7XG4gICAgICAgICAgICAgICAgY2FzZSA0MDA6XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdUaGlzIGlzIGEgNDAwIGVycm9yLicpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIDQyOTpcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1RoaXMgaXMgYSA0MjkgZXJyb3IuIFJhdGUgbGltaXQgZXhjZWVkZWQnKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAyMDE6XG4gICAgICAgICAgICAgICAgICAgIHJlcy5qc29uKCkudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gcmVxdWVzdCBzZW50XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygndGhpcyB3b3JrZWQnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsZXJ0KCdXb3Jrb3V0IGNvbXBsZXRlIScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gcm91dGVyLnB1c2goJy9yb3V0aW5lcycpO1xuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfX0pXG4gICAgfVxuXG4gICAgY29uc29sZS5sb2cocm91dGVyLnF1ZXJ5KTtcbiAgICBsZXQgdXJsVmFsdWUgPSByb3V0ZXIucXVlcnk7IC8vIHsgaWQ6IDM0IH1cbiAgICBsZXQgY3VycmVudFdvcmtvdXRJRCA9IHVybFZhbHVlLmlkOyAvLyAzNFxuICAgIGNvbnNvbGUubG9nKGN1cnJlbnRXb3Jrb3V0SUQpO1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgYXN5bmMgZnVuY3Rpb24gZG9GZXRjaCgpIHtcbiAgICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCgnaHR0cDovL2xvY2FsaG9zdDozMDAwL2N1cnJlbnRXb3Jrb3V0LycgKyBjdXJyZW50V29ya291dElELCB7IFxuICAgICAgICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNyZWRlbnRpYWxzOiAnaW5jbHVkZScsXG4gICAgICAgICAgfSk7XG4gICAgICAgICAgY29uc3QgYm9keSA9IGF3YWl0IHJlcy5qc29uKCk7XG4gICAgICAgICAgY29uc29sZS5sb2coJ2JvZHkgaXMgLi4uJywgYm9keSk7XG4gICAgICAgIC8vICAgc2V0RXhlcmNpc2UoYm9keS5Sb3V0aW5lRXhlcmNpc2VzKTtcbiAgICAgICAgfVxuICAgIFxuICAgICAgICBkb0ZldGNoKCk7XG4gICAgICB9LCBbXSk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8Rm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0KG9uU3VibWl0KX0+XG5cblxuICAgICAgICB7ZXhlcmNpc2UubWFwKChleGVyY2lzZSwgaWR4KSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxkaXYga2V5PXtpZHh9PlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWw+e2V4ZXJjaXNlLmV4ZXJjaXNlX25hbWV9PC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJudW1iZXJcIiBuYW1lPVwiV2VpZ2h0XCIgcGxhY2Vob2xkZXI9XCJXZWlnaHRcIi8+XG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+U2V0IDE8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJudW1iZXJcIiBwbGFjZWhvbGRlcj1cIlJlcHNcIi8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKVxuICAgICAgICB9KX1cbnsvKiBcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGxhYmVsPlBsYWNlaG9sZGVyIEV4ZXJjaXNlIDE8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwibnVtYmVyXCIgbmFtZT1cInNldHNcIiBpZD1cIlwiIHBsYWNlaG9sZGVyPVwic2V0c1wiLz5cbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cIm51bWJlclwiIG5hbWU9XCJ3ZWlnaHRcIiBpZD1cIlwiIHBsYWNlaG9sZGVyPVwid2VpZ2h0XCIvPlxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwibnVtYmVyXCIgbmFtZT1cInJlcHNcIiBpZD1cIlwiIHBsYWNlaG9sZGVyPVwicmVwc1wiLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxsYWJlbD5QbGFjZWhvbGRlciBFeGVyY2lzZSAyPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cIm51bWJlclwiIG5hbWU9XCJzZXRzXCIgaWQ9XCJcIiBwbGFjZWhvbGRlcj1cInNldHNcIi8+XG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJudW1iZXJcIiBuYW1lPVwid2VpZ2h0XCIgaWQ9XCJcIiBwbGFjZWhvbGRlcj1cIndlaWdodFwiLz5cbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cIm51bWJlclwiIG5hbWU9XCJyZXBzXCIgaWQ9XCJcIiBwbGFjZWhvbGRlcj1cInJlcHNcIi8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8bGFiZWw+UGxhY2Vob2xkZXIgRXhlcmNpc2UgMzwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJudW1iZXJcIiBuYW1lPVwic2V0c1wiIGlkPVwiXCIgcGxhY2Vob2xkZXI9XCJzZXRzXCIvPlxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwibnVtYmVyXCIgbmFtZT1cIndlaWdodFwiIGlkPVwiXCIgcGxhY2Vob2xkZXI9XCJ3ZWlnaHRcIi8+XG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJudW1iZXJcIiBuYW1lPVwicmVwc1wiIGlkPVwiXCIgcGxhY2Vob2xkZXI9XCJyZXBzXCIvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGxhYmVsPlBsYWNlaG9sZGVyIEV4ZXJjaXNlIDQ8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwibnVtYmVyXCIgbmFtZT1cInNldHNcIiBpZD1cIlwiIHBsYWNlaG9sZGVyPVwic2V0c1wiLz5cbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cIm51bWJlclwiIG5hbWU9XCJ3ZWlnaHRcIiBpZD1cIlwiIHBsYWNlaG9sZGVyPVwid2VpZ2h0XCIvPlxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwibnVtYmVyXCIgbmFtZT1cInJlcHNcIiBpZD1cIlwiIHBsYWNlaG9sZGVyPVwicmVwc1wiLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICA8YnIgLz4gKi99XG4gICAgICAgICAgICB7LyogPGRpdj5cbiAgICAgICAgICAgIDxsYWJlbD4gUm91dGluZSBOYW1lIENIQU5HRSEgOiA8L2xhYmVsPlxuICAgICAgICAgICAgPElucHV0XG4gICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiV29ya291dCBmb3JtXCJcbiAgICAgICAgICAgICAgICBuYW1lPVwicm91dGluZV9uYW1lXCJcbiAgICAgICAgICAgICAgICByZWY9e3JlZ2lzdGVyfVxuICAgICAgICAgICAgLz5cblxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxHcm91cD5cbiAgICAgICAgICAgICAgICA8bGFiZWw+IEV4ZXJjaXNlIDEgOiA8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxzZWxlY3QgbmFtZT1cImZpcnN0X2V4ZXJjaXNlXCIgaWQ9XCJleGVyY2lzZV90eXBlXCIgcmVmPXtyZWdpc3Rlcn0+XG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gc2VsZWN0ZWQ9XCJzZWxlY3RlZFwiIGRpc2FibGVkPlNlbGVjdCBhbiBleGVyY2lzZTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAge2V4ZXJjaXNlLm1hcCgoZXhlcmNpc2UsIGlkeCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8b3B0aW9uIGtleT17aWR4fT57ZXhlcmNpc2UuZXhlcmNpc2VfbmFtZX08L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgICAgPC9Hcm91cD5cblxuICAgICAgICAgICAgPEdyb3VwPlxuICAgICAgICAgICAgICAgIDxsYWJlbD4gRXhlcmNpc2UgMiA6IDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPHNlbGVjdCBuYW1lPVwic2Vjb25kX2V4ZXJjaXNlXCIgaWQ9XCJleGVyY2lzZV90eXBlXCIgcmVmPXtyZWdpc3Rlcn0+XG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gc2VsZWN0ZWQ9XCJzZWxlY3RlZFwiIGRpc2FibGVkPlNlbGVjdCBhbiBleGVyY2lzZTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAge2V4ZXJjaXNlLm1hcCgoZXhlcmNpc2UsIGlkeCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8b3B0aW9uIGtleT17aWR4fT57ZXhlcmNpc2UuZXhlcmNpc2VfbmFtZX08L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgICAgPC9Hcm91cD5cblxuICAgICAgICAgICAgPEdyb3VwPlxuICAgICAgICAgICAgICAgIDxsYWJlbD4gRXhlcmNpc2UgMyA6IDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPHNlbGVjdCBuYW1lPVwidGhpcmRfZXhlcmNpc2VcIiBpZD1cImV4ZXJjaXNlX3R5cGVcIiByZWY9e3JlZ2lzdGVyfT5cbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiBzZWxlY3RlZD1cInNlbGVjdGVkXCIgZGlzYWJsZWQ+U2VsZWN0IGFuIGV4ZXJjaXNlPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICB7ZXhlcmNpc2UubWFwKChleGVyY2lzZSwgaWR4KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxvcHRpb24ga2V5PXtpZHh9PntleGVyY2lzZS5leGVyY2lzZV9uYW1lfTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgICA8L0dyb3VwPlxuXG4gICAgICAgICAgICA8R3JvdXA+XG4gICAgICAgICAgICAgICAgPGxhYmVsPiBFeGVyY2lzZSA0IDogPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8c2VsZWN0IG5hbWU9XCJmb3VydGhfZXhlcmNpc2VcIiBpZD1cImV4ZXJjaXNlX3R5cGVcIiByZWY9e3JlZ2lzdGVyfT5cbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiBzZWxlY3RlZD1cInNlbGVjdGVkXCIgZGlzYWJsZWQ+U2VsZWN0IGFuIGV4ZXJjaXNlPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICB7ZXhlcmNpc2UubWFwKChleGVyY2lzZSwgaWR4KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxvcHRpb24ga2V5PXtpZHh9PntleGVyY2lzZS5leGVyY2lzZV9uYW1lfTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgICA8L0dyb3VwPlxuXG4gICAgICAgICAgICA8R3JvdXA+XG4gICAgICAgICAgICAgICAgPGxhYmVsPiBFeGVyY2lzZSA1IDogPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8c2VsZWN0IG5hbWU9XCJmaWZ0aF9leGVyY2lzZVwiIGlkPVwiZXhlcmNpc2VfdHlwZVwiIHJlZj17cmVnaXN0ZXJ9PlxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHNlbGVjdGVkPVwic2VsZWN0ZWRcIiBkaXNhYmxlZD5TZWxlY3QgYW4gZXhlcmNpc2U8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtleGVyY2lzZS5tYXAoKGV4ZXJjaXNlLCBpZHgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPG9wdGlvbiBrZXk9e2lkeH0+e2V4ZXJjaXNlLmV4ZXJjaXNlX25hbWV9PC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICAgIDwvR3JvdXA+ICovfVxuXG5cbiAgICAgICAgICAgIDxTdWJtaXRCdG4gdHlwZT1cInN1Ym1pdFwiPkZpbmlzaCB3b3Jrb3V0PC9TdWJtaXRCdG4+XG4gICAgICAgIDwvRm9ybT5cbiAgICApXG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Forms/WorkoutForm.js\n");

/***/ })

})