webpackHotUpdate_N_E("pages/AddWorkout",{

/***/ "./components/Forms/ChooseRoutineForm.js":
/*!***********************************************!*\
  !*** ./components/Forms/ChooseRoutineForm.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return ChooseRoutineForm; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_kimwoodfield_Documents_GitHub_workout_tracker_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ \"./node_modules/next/node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _Users_kimwoodfield_Documents_GitHub_workout_tracker_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_kimwoodfield_Documents_GitHub_workout_tracker_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Users_kimwoodfield_Documents_GitHub_workout_tracker_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _FormInput__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./FormInput */ \"./components/Forms/FormInput.js\");\n/* harmony import */ var _SubmitBtn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./SubmitBtn */ \"./components/Forms/SubmitBtn.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-hook-form */ \"./node_modules/react-hook-form/dist/index.esm.js\");\n/* harmony import */ var _Common_ErrorMessage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Common/ErrorMessage */ \"./components/Common/ErrorMessage.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_9__);\n\n\n\n\nvar _jsxFileName = \"/Users/kimwoodfield/Documents/GitHub/workout-tracker/frontend/components/Forms/ChooseRoutineForm.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nvar Form = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].form.withConfig({\n  displayName: \"ChooseRoutineForm__Form\",\n  componentId: \"sc-1esi9s1-0\"\n})([\"display:flex;flex-direction:column;width:18rem;padding-bottom:1rem;\"]);\n_c = Form;\nvar Group = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div.withConfig({\n  displayName: \"ChooseRoutineForm__Group\",\n  componentId: \"sc-1esi9s1-1\"\n})([\"padding:0.5rem 0;margin:0.5rem 0;\"]);\n_c2 = Group;\nfunction ChooseRoutineForm() {\n  _s();\n\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_9__[\"useRouter\"])();\n\n  var _useForm = Object(react_hook_form__WEBPACK_IMPORTED_MODULE_7__[\"useForm\"])(),\n      register = _useForm.register,\n      handleSubmit = _useForm.handleSubmit,\n      errors = _useForm.errors;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_6__[\"useState\"])([]),\n      exercise = _useState[0],\n      setExercise = _useState[1]; // Handles the form submission\n\n\n  var onSubmit = function onSubmit(data) {\n    // If the input data is valid - \n    // Make a POST request to our api route with the input data\n    fetch('http://localhost:3000/routines', {\n      method: 'POST',\n      headers: {\n        'Content-Type': 'application/json'\n      },\n      body: JSON.stringify(data),\n      credentials: 'include'\n    }).then(function (res) {\n      switch (res.status) {\n        case 400:\n          console.log('This is a 400 error.');\n          break;\n\n        case 429:\n          console.log('This is a 429 error. Rate limit exceeded');\n          break;\n\n        case 201:\n          res.json().then(function (data) {\n            // request sent\n            console.log('this worked');\n            alert('Routine added!');\n            router.push('/routines');\n          });\n      }\n    });\n  };\n\n  Object(react__WEBPACK_IMPORTED_MODULE_6__[\"useEffect\"])(function () {\n    function doFetch() {\n      return _doFetch.apply(this, arguments);\n    }\n\n    function _doFetch() {\n      _doFetch = Object(_Users_kimwoodfield_Documents_GitHub_workout_tracker_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__[\"default\"])( /*#__PURE__*/_Users_kimwoodfield_Documents_GitHub_workout_tracker_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {\n        var url, res, body;\n        return _Users_kimwoodfield_Documents_GitHub_workout_tracker_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                url = 'http://localhost:3000/exercises';\n                _context.next = 3;\n                return fetch('http://localhost:3000/exercises', {\n                  method: 'GET',\n                  headers: {\n                    'Content-Type': 'application/json'\n                  },\n                  credentials: 'include'\n                });\n\n              case 3:\n                res = _context.sent;\n                _context.next = 6;\n                return res.json();\n\n              case 6:\n                body = _context.sent;\n                console.log('body is ...', body); //   setExercise(body.exercisesResults);\n\n              case 8:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee);\n      }));\n      return _doFetch.apply(this, arguments);\n    }\n\n    doFetch();\n  }, []);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Form, {\n    onSubmit: handleSubmit(onSubmit),\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"label\", {\n        children: \" Routine Name : \"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 81,\n        columnNumber: 13\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_FormInput__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n        type: \"text\",\n        placeholder: \"Routine name...\",\n        name: \"routine_name\",\n        ref: register\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 82,\n        columnNumber: 13\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 80,\n      columnNumber: 13\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Group, {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"label\", {\n        children: \" Choose a routine : \"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 92,\n        columnNumber: 17\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"select\", {\n        name: \"first_exercise\",\n        id: \"exercise_type\",\n        ref: register,\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"option\", {\n          selected: \"selected\",\n          disabled: true,\n          children: \"Select an exercise\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 94,\n          columnNumber: 21\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 93,\n        columnNumber: 17\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 91,\n      columnNumber: 13\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_SubmitBtn__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n      type: \"submit\",\n      children: \"Begin Workout\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 102,\n      columnNumber: 13\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 79,\n    columnNumber: 9\n  }, this);\n}\n\n_s(ChooseRoutineForm, \"A2MTswYM7fnas0a0UwLfMyUrFCA=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_9__[\"useRouter\"], react_hook_form__WEBPACK_IMPORTED_MODULE_7__[\"useForm\"]];\n});\n\n_c3 = ChooseRoutineForm;\n\nvar _c, _c2, _c3;\n\n$RefreshReg$(_c, \"Form\");\n$RefreshReg$(_c2, \"Group\");\n$RefreshReg$(_c3, \"ChooseRoutineForm\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Gb3Jtcy9DaG9vc2VSb3V0aW5lRm9ybS5qcz82NmI2Il0sIm5hbWVzIjpbIkZvcm0iLCJzdHlsZWQiLCJmb3JtIiwiR3JvdXAiLCJkaXYiLCJDaG9vc2VSb3V0aW5lRm9ybSIsInJvdXRlciIsInVzZVJvdXRlciIsInVzZUZvcm0iLCJyZWdpc3RlciIsImhhbmRsZVN1Ym1pdCIsImVycm9ycyIsInVzZVN0YXRlIiwiZXhlcmNpc2UiLCJzZXRFeGVyY2lzZSIsIm9uU3VibWl0IiwiZGF0YSIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwiY3JlZGVudGlhbHMiLCJ0aGVuIiwicmVzIiwic3RhdHVzIiwiY29uc29sZSIsImxvZyIsImpzb24iLCJhbGVydCIsInB1c2giLCJ1c2VFZmZlY3QiLCJkb0ZldGNoIiwidXJsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsSUFBSSxHQUFHQyx5REFBTSxDQUFDQyxJQUFWO0FBQUE7QUFBQTtBQUFBLDJFQUFWO0tBQU1GLEk7QUFPTixJQUFNRyxLQUFLLEdBQUdGLHlEQUFNLENBQUNHLEdBQVY7QUFBQTtBQUFBO0FBQUEseUNBQVg7TUFBTUQsSztBQU1TLFNBQVNFLGlCQUFULEdBQTZCO0FBQUE7O0FBRXhDLE1BQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7O0FBRndDLGlCQUlHQywrREFBTyxFQUpWO0FBQUEsTUFJaENDLFFBSmdDLFlBSWhDQSxRQUpnQztBQUFBLE1BSXRCQyxZQUpzQixZQUl0QkEsWUFKc0I7QUFBQSxNQUlSQyxNQUpRLFlBSVJBLE1BSlE7O0FBQUEsa0JBTVJDLHNEQUFRLENBQUMsRUFBRCxDQU5BO0FBQUEsTUFNakNDLFFBTmlDO0FBQUEsTUFNdkJDLFdBTnVCLGlCQVF4Qzs7O0FBQ0EsTUFB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Ii4vY29tcG9uZW50cy9Gb3Jtcy9DaG9vc2VSb3V0aW5lRm9ybS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXG5pbXBvcnQgSW5wdXQgZnJvbSAnLi9Gb3JtSW5wdXQnXG5pbXBvcnQgU3VibWl0QnRuIGZyb20gJy4vU3VibWl0QnRuJ1xuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHVzZUZvcm0sICB9IGZyb20gXCJyZWFjdC1ob29rLWZvcm1cIjtcbmltcG9ydCBFcnJvck1lc3NhZ2UgZnJvbSAnLi4vQ29tbW9uL0Vycm9yTWVzc2FnZSdcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xuXG5jb25zdCBGb3JtID0gc3R5bGVkLmZvcm1gXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIHdpZHRoOiAxOHJlbTtcbiAgICBwYWRkaW5nLWJvdHRvbTogMXJlbTtcbmBcblxuY29uc3QgR3JvdXAgPSBzdHlsZWQuZGl2YFxuICAgIHBhZGRpbmc6IDAuNXJlbSAwO1xuICAgIG1hcmdpbjogMC41cmVtIDA7XG4gICAgLy8gYm9yZGVyOiAxcHggZGFzaGVkIGdyZXk7XG5gXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENob29zZVJvdXRpbmVGb3JtKCkge1xuXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG5cbiAgICBjb25zdCB7IHJlZ2lzdGVyLCBoYW5kbGVTdWJtaXQsIGVycm9ycyB9ID0gdXNlRm9ybSgpO1xuXG4gICAgY29uc3QgW2V4ZXJjaXNlLCBzZXRFeGVyY2lzZV0gPSB1c2VTdGF0ZShbXSk7XG5cbiAgICAvLyBIYW5kbGVzIHRoZSBmb3JtIHN1Ym1pc3Npb25cbiAgICBjb25zdCBvblN1Ym1pdCA9IChkYXRhKSA9PiB7XG4gICAgICAgIC8vIElmIHRoZSBpbnB1dCBkYXRhIGlzIHZhbGlkIC0gXG4gICAgICAgIC8vIE1ha2UgYSBQT1NUIHJlcXVlc3QgdG8gb3VyIGFwaSByb3V0ZSB3aXRoIHRoZSBpbnB1dCBkYXRhXG4gICAgICAgIGZldGNoKCdodHRwOi8vbG9jYWxob3N0OjMwMDAvcm91dGluZXMnLCB7XG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoZGF0YSksXG4gICAgICAgICAgICBjcmVkZW50aWFsczogJ2luY2x1ZGUnLFxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC50aGVuKChyZXMpID0+IHtcbiAgICAgICAgICAgIHN3aXRjaChyZXMuc3RhdHVzKSB7XG4gICAgICAgICAgICAgICAgY2FzZSA0MDA6XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdUaGlzIGlzIGEgNDAwIGVycm9yLicpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIDQyOTpcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1RoaXMgaXMgYSA0MjkgZXJyb3IuIFJhdGUgbGltaXQgZXhjZWVkZWQnKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAyMDE6XG4gICAgICAgICAgICAgICAgICAgIHJlcy5qc29uKCkudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gcmVxdWVzdCBzZW50XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygndGhpcyB3b3JrZWQnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsZXJ0KCdSb3V0aW5lIGFkZGVkIScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcm91dGVyLnB1c2goJy9yb3V0aW5lcycpO1xuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfX0pXG4gICAgfVxuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgYXN5bmMgZnVuY3Rpb24gZG9GZXRjaCgpIHtcbiAgICAgICAgICBsZXQgdXJsID0gJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9leGVyY2lzZXMnO1xuICAgICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKCdodHRwOi8vbG9jYWxob3N0OjMwMDAvZXhlcmNpc2VzJywgeyBcbiAgICAgICAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjcmVkZW50aWFsczogJ2luY2x1ZGUnLFxuICAgICAgICAgIH0pO1xuICAgICAgICAgIGNvbnN0IGJvZHkgPSBhd2FpdCByZXMuanNvbigpO1xuICAgICAgICAgIGNvbnNvbGUubG9nKCdib2R5IGlzIC4uLicsIGJvZHkpO1xuICAgICAgICAvLyAgIHNldEV4ZXJjaXNlKGJvZHkuZXhlcmNpc2VzUmVzdWx0cyk7XG4gICAgICAgIH1cbiAgICBcbiAgICAgICAgZG9GZXRjaCgpO1xuICAgICAgfSwgW10pO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPEZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdChvblN1Ym1pdCl9PlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxsYWJlbD4gUm91dGluZSBOYW1lIDogPC9sYWJlbD5cbiAgICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlJvdXRpbmUgbmFtZS4uLlwiXG4gICAgICAgICAgICAgICAgbmFtZT1cInJvdXRpbmVfbmFtZVwiXG4gICAgICAgICAgICAgICAgcmVmPXtyZWdpc3Rlcn1cbiAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8R3JvdXA+XG4gICAgICAgICAgICAgICAgPGxhYmVsPiBDaG9vc2UgYSByb3V0aW5lIDogPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8c2VsZWN0IG5hbWU9XCJmaXJzdF9leGVyY2lzZVwiIGlkPVwiZXhlcmNpc2VfdHlwZVwiIHJlZj17cmVnaXN0ZXJ9PlxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHNlbGVjdGVkPVwic2VsZWN0ZWRcIiBkaXNhYmxlZD5TZWxlY3QgYW4gZXhlcmNpc2U8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKiB7ZXhlcmNpc2UubWFwKChleGVyY2lzZSwgaWR4KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxvcHRpb24ga2V5PXtpZHh9PntleGVyY2lzZS5leGVyY2lzZV9uYW1lfTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgfSl9ICovfVxuICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgICAgPC9Hcm91cD5cblxuXG4gICAgICAgICAgICA8U3VibWl0QnRuIHR5cGU9XCJzdWJtaXRcIj5CZWdpbiBXb3Jrb3V0PC9TdWJtaXRCdG4+XG4gICAgICAgIDwvRm9ybT5cbiAgICApXG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Forms/ChooseRoutineForm.js\n");

/***/ })

})