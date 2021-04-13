webpackHotUpdate_N_E("pages/CurrentWorkout",{

/***/ "./components/Forms/WorkoutForm.js":
/*!*****************************************!*\
  !*** ./components/Forms/WorkoutForm.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return WorkoutForm; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_kimwoodfield_Documents_GitHub_workout_tracker_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ \"./node_modules/next/node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _Users_kimwoodfield_Documents_GitHub_workout_tracker_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_kimwoodfield_Documents_GitHub_workout_tracker_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Users_kimwoodfield_Documents_GitHub_workout_tracker_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _SubmitBtn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./SubmitBtn */ \"./components/Forms/SubmitBtn.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-hook-form */ \"./node_modules/react-hook-form/dist/index.esm.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);\n\n\n\n\nvar _jsxFileName = \"/Users/kimwoodfield/Documents/GitHub/workout-tracker/frontend/components/Forms/WorkoutForm.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\nvar Form = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].form.withConfig({\n  displayName: \"WorkoutForm__Form\",\n  componentId: \"yjzq5p-0\"\n})([\"display:flex;flex-direction:column;padding-bottom:1rem;width:90%;box-sizing:border-box;border:2px dashed salmon;margin:0 auto;align-items:center;\"]);\n_c = Form;\nvar Group = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div.withConfig({\n  displayName: \"WorkoutForm__Group\",\n  componentId: \"yjzq5p-1\"\n})([\"padding:0.5rem 0;margin:0.5rem 0;\"]);\n_c2 = Group;\nvar Input = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].input.withConfig({\n  displayName: \"WorkoutForm__Input\",\n  componentId: \"yjzq5p-2\"\n})([\"width:100%;\"]);\n_c3 = Input;\nfunction WorkoutForm() {\n  _s();\n\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_7__[\"useRouter\"])();\n\n  var _useForm = Object(react_hook_form__WEBPACK_IMPORTED_MODULE_6__[\"useForm\"])(),\n      register = _useForm.register,\n      handleSubmit = _useForm.handleSubmit,\n      errors = _useForm.errors;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_5__[\"useState\"])([]),\n      routine = _useState[0],\n      setRoutine = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_5__[\"useState\"])([]),\n      exercise = _useState2[0],\n      setExercise = _useState2[1];\n\n  var urlValue = router.query; // { id: 34 }\n\n  var currentWorkoutID = urlValue.id; // 34\n\n  var onSubmit = function onSubmit(data) {\n    fetch('http://localhost:3000/currentWorkout/' + currentWorkoutID, {\n      method: 'POST',\n      headers: {\n        'Content-Type': 'application/json'\n      },\n      body: JSON.stringify(data),\n      credentials: 'include'\n    }).then(function (res) {\n      switch (res.status) {\n        case 400:\n          console.log('This is a 400 error.');\n          break;\n\n        case 429:\n          console.log('This is a 429 error. Rate limit exceeded');\n          break;\n\n        case 201:\n          res.json().then(function (data) {\n            // request sent\n            console.log('this worked');\n            alert('Workout complete!'); // router.push('/routines');\n          });\n      }\n    });\n  };\n\n  Object(react__WEBPACK_IMPORTED_MODULE_5__[\"useEffect\"])(function () {\n    function doFetch() {\n      return _doFetch.apply(this, arguments);\n    }\n\n    function _doFetch() {\n      _doFetch = Object(_Users_kimwoodfield_Documents_GitHub_workout_tracker_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__[\"default\"])( /*#__PURE__*/_Users_kimwoodfield_Documents_GitHub_workout_tracker_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {\n        var res, body;\n        return _Users_kimwoodfield_Documents_GitHub_workout_tracker_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                _context.next = 2;\n                return fetch('http://localhost:3000/currentWorkout/' + currentWorkoutID, {\n                  method: 'GET',\n                  headers: {\n                    'Content-Type': 'application/json'\n                  },\n                  credentials: 'include'\n                });\n\n              case 2:\n                res = _context.sent;\n                _context.next = 5;\n                return res.json();\n\n              case 5:\n                body = _context.sent;\n                console.log('body is ...', body);\n                setExercise(body.currentWorkout.RoutineExercises);\n                setRoutine(body.currentWorkout.RoutineName);\n\n              case 9:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee);\n      }));\n      return _doFetch.apply(this, arguments);\n    }\n\n    doFetch();\n  }, []);\n  var currentDate = new Date().toLocaleString();\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Form, {\n    onSubmit: handleSubmit(onSubmit),\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Group, {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n        children: routine\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 90,\n        columnNumber: 13\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n        children: currentDate\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 91,\n        columnNumber: 13\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 89,\n      columnNumber: 9\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Group, {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"label\", {\n        children: exercise[0]\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 95,\n        columnNumber: 13\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"br\", {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 95,\n        columnNumber: 41\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Input, {\n        ref: register,\n        type: \"number\",\n        name: \"firstExercise_weight\",\n        placeholder: \"Enter weight in KG...\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 96,\n        columnNumber: 13\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"br\", {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 96,\n        columnNumber: 115\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Input, {\n        ref: register,\n        type: \"number\",\n        name: \"firstExercise_sets\",\n        placeholder: \"Enter sets...\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 97,\n        columnNumber: 13\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"br\", {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 97,\n        columnNumber: 105\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n        ref: register,\n        type: \"number\",\n        name: \"firstExercise_reps\",\n        placeholder: \"Enter reps...\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 98,\n        columnNumber: 13\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 94,\n      columnNumber: 9\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Group, {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"label\", {\n        children: exercise[1]\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 101,\n        columnNumber: 13\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"br\", {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 101,\n        columnNumber: 41\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n        ref: register,\n        type: \"number\",\n        name: \"secondExercise_weight\",\n        placeholder: \"Enter weight in KG...\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 102,\n        columnNumber: 13\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"br\", {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 102,\n        columnNumber: 116\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n        ref: register,\n        type: \"number\",\n        name: \"secondExercise_sets\",\n        placeholder: \"Enter sets...\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 103,\n        columnNumber: 13\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"br\", {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 103,\n        columnNumber: 106\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n        ref: register,\n        type: \"number\",\n        name: \"secondExercise_reps\",\n        placeholder: \"Enter reps...\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 104,\n        columnNumber: 13\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 100,\n      columnNumber: 9\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Group, {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"label\", {\n        children: exercise[2]\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 107,\n        columnNumber: 13\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"br\", {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 107,\n        columnNumber: 41\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n        ref: register,\n        type: \"number\",\n        name: \"thirdExercise_weight\",\n        placeholder: \"Enter weight in KG...\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 108,\n        columnNumber: 13\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"br\", {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 108,\n        columnNumber: 115\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n        ref: register,\n        type: \"number\",\n        name: \"thirdExercise_sets\",\n        placeholder: \"Enter sets...\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 109,\n        columnNumber: 13\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"br\", {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 109,\n        columnNumber: 105\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n        ref: register,\n        type: \"number\",\n        name: \"thirdExercise_reps\",\n        placeholder: \"Enter reps...\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 110,\n        columnNumber: 13\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 106,\n      columnNumber: 9\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Group, {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"label\", {\n        children: exercise[3]\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 113,\n        columnNumber: 13\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"br\", {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 113,\n        columnNumber: 41\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n        ref: register,\n        type: \"number\",\n        name: \"fourthExercise_weight\",\n        placeholder: \"Enter weight in KG...\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 114,\n        columnNumber: 13\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"br\", {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 114,\n        columnNumber: 116\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n        ref: register,\n        type: \"number\",\n        name: \"fourthExercise_sets\",\n        placeholder: \"Enter sets...\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 115,\n        columnNumber: 13\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"br\", {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 115,\n        columnNumber: 106\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n        ref: register,\n        type: \"number\",\n        name: \"fourthExercise_reps\",\n        placeholder: \"Enter reps...\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 116,\n        columnNumber: 13\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 112,\n      columnNumber: 9\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Group, {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"label\", {\n        children: exercise[4]\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 119,\n        columnNumber: 13\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"br\", {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 119,\n        columnNumber: 41\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n        ref: register,\n        type: \"number\",\n        name: \"fifthExercise_weight\",\n        placeholder: \"Enter weight in KG...\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 120,\n        columnNumber: 13\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"br\", {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 120,\n        columnNumber: 115\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n        ref: register,\n        type: \"number\",\n        name: \"fifthExercise_sets\",\n        placeholder: \"Enter sets...\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 121,\n        columnNumber: 13\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"br\", {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 121,\n        columnNumber: 105\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n        ref: register,\n        type: \"number\",\n        name: \"fifthExercise_reps\",\n        placeholder: \"Enter reps...\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 122,\n        columnNumber: 13\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 118,\n      columnNumber: 9\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_SubmitBtn__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n      type: \"submit\",\n      children: \"Finish workout\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 156,\n      columnNumber: 13\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 87,\n    columnNumber: 9\n  }, this);\n}\n\n_s(WorkoutForm, \"Oqu2yXWnnefN04wJPGmTRMuHYMY=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_7__[\"useRouter\"], react_hook_form__WEBPACK_IMPORTED_MODULE_6__[\"useForm\"]];\n});\n\n_c4 = WorkoutForm;\n\nvar _c, _c2, _c3, _c4;\n\n$RefreshReg$(_c, \"Form\");\n$RefreshReg$(_c2, \"Group\");\n$RefreshReg$(_c3, \"Input\");\n$RefreshReg$(_c4, \"WorkoutForm\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Gb3Jtcy9Xb3Jrb3V0Rm9ybS5qcz84NTc1Il0sIm5hbWVzIjpbIkZvcm0iLCJzdHlsZWQiLCJmb3JtIiwiR3JvdXAiLCJkaXYiLCJJbnB1dCIsImlucHV0IiwiV29ya291dEZvcm0iLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJ1c2VGb3JtIiwicmVnaXN0ZXIiLCJoYW5kbGVTdWJtaXQiLCJlcnJvcnMiLCJ1c2VTdGF0ZSIsInJvdXRpbmUiLCJzZXRSb3V0aW5lIiwiZXhlcmNpc2UiLCJzZXRFeGVyY2lzZSIsInVybFZhbHVlIiwicXVlcnkiLCJjdXJyZW50V29ya291dElEIiwiaWQiLCJvblN1Ym1pdCIsImRhdGEiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsImNyZWRlbnRpYWxzIiwidGhlbiIsInJlcyIsInN0YXR1cyIsImNvbnNvbGUiLCJsb2ciLCJqc29uIiwiYWxlcnQiLCJ1c2VFZmZlY3QiLCJkb0ZldGNoIiwiY3VycmVudFdvcmtvdXQiLCJSb3V0aW5lRXhlcmNpc2VzIiwiUm91dGluZU5hbWUiLCJjdXJyZW50RGF0ZSIsIkRhdGUiLCJ0b0xvY2FsZVN0cmluZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLElBQUksR0FBR0MseURBQU0sQ0FBQ0MsSUFBVjtBQUFBO0FBQUE7QUFBQSx5SkFBVjtLQUFNRixJO0FBV04sSUFBTUcsS0FBSyxHQUFHRix5REFBTSxDQUFDRyxHQUFWO0FBQUE7QUFBQTtBQUFBLHlDQUFYO01BQU1ELEs7QUFLTixJQUFNRSxLQUFLLEdBQUdKLHlEQUFNLENBQUNLLEtBQVY7QUFBQTtBQUFBO0FBQUEsbUJBQVg7TUFBTUQsSztBQUlTLFNBQVNFLFdBQVQsR0FBdUI7QUFBQTs7QUFFbEMsTUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4Qjs7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QUlJO0FBQU8sV0FBRyxFQUFFQSxRQUFaO0FBQXNCLFlBQUksRUFBQyxRQUEzQjtBQUFvQyxZQUFJLEVBQUMsb0JBQXpDO0FBQThELG1CQUFXLEVBQUM7QUFBMUU7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUpKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQS9CQSxlQXFFSSxxRUFBQyxrREFBRDtBQUFXLFVBQUksRUFBQyxRQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQXJFSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQXlFSDs7R0FwSXVCSixXO1VBRUxFLHFELEVBRTRCQyx1RDs7O01BSnZCSCxXIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9Gb3Jtcy9Xb3Jrb3V0Rm9ybS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXG5pbXBvcnQgU3VibWl0QnRuIGZyb20gJy4vU3VibWl0QnRuJ1xuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHVzZUZvcm0sICB9IGZyb20gXCJyZWFjdC1ob29rLWZvcm1cIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xuXG5jb25zdCBGb3JtID0gc3R5bGVkLmZvcm1gXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIHBhZGRpbmctYm90dG9tOiAxcmVtO1xuICAgIHdpZHRoOiA5MCU7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBib3JkZXI6IDJweCBkYXNoZWQgc2FsbW9uO1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5gXG5cbmNvbnN0IEdyb3VwID0gc3R5bGVkLmRpdmBcbiAgICBwYWRkaW5nOiAwLjVyZW0gMDtcbiAgICBtYXJnaW46IDAuNXJlbSAwO1xuYFxuXG5jb25zdCBJbnB1dCA9IHN0eWxlZC5pbnB1dGBcbiAgICB3aWR0aDogMTAwJTtcbmBcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gV29ya291dEZvcm0oKSB7XG5cbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcblxuICAgIGNvbnN0IHsgcmVnaXN0ZXIsIGhhbmRsZVN1Ym1pdCwgZXJyb3JzIH0gPSB1c2VGb3JtKCk7XG5cbiAgICBjb25zdCBbcm91dGluZSwgc2V0Um91dGluZV0gPSB1c2VTdGF0ZShbXSk7XG4gICAgY29uc3QgW2V4ZXJjaXNlLCBzZXRFeGVyY2lzZV0gPSB1c2VTdGF0ZShbXSk7XG5cbiAgICBsZXQgdXJsVmFsdWUgPSByb3V0ZXIucXVlcnk7IC8vIHsgaWQ6IDM0IH1cbiAgICBsZXQgY3VycmVudFdvcmtvdXRJRCA9IHVybFZhbHVlLmlkOyAvLyAzNFxuXG4gICAgY29uc3Qgb25TdWJtaXQgPSAoZGF0YSkgPT4ge1xuICAgICAgICBmZXRjaCgnaHR0cDovL2xvY2FsaG9zdDozMDAwL2N1cnJlbnRXb3Jrb3V0LycgKyBjdXJyZW50V29ya291dElELCB7XG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoZGF0YSksXG4gICAgICAgICAgICBjcmVkZW50aWFsczogJ2luY2x1ZGUnLFxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC50aGVuKChyZXMpID0+IHtcbiAgICAgICAgICAgIHN3aXRjaChyZXMuc3RhdHVzKSB7XG4gICAgICAgICAgICAgICAgY2FzZSA0MDA6XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdUaGlzIGlzIGEgNDAwIGVycm9yLicpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIDQyOTpcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1RoaXMgaXMgYSA0MjkgZXJyb3IuIFJhdGUgbGltaXQgZXhjZWVkZWQnKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAyMDE6XG4gICAgICAgICAgICAgICAgICAgIHJlcy5qc29uKCkudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gcmVxdWVzdCBzZW50XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygndGhpcyB3b3JrZWQnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsZXJ0KCdXb3Jrb3V0IGNvbXBsZXRlIScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gcm91dGVyLnB1c2goJy9yb3V0aW5lcycpO1xuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfX0pXG4gICAgfVxuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgYXN5bmMgZnVuY3Rpb24gZG9GZXRjaCgpIHtcbiAgICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCgnaHR0cDovL2xvY2FsaG9zdDozMDAwL2N1cnJlbnRXb3Jrb3V0LycgKyBjdXJyZW50V29ya291dElELCB7IFxuICAgICAgICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNyZWRlbnRpYWxzOiAnaW5jbHVkZScsXG4gICAgICAgICAgfSk7XG4gICAgICAgICAgY29uc3QgYm9keSA9IGF3YWl0IHJlcy5qc29uKCk7XG4gICAgICAgICAgY29uc29sZS5sb2coJ2JvZHkgaXMgLi4uJywgYm9keSk7XG4gICAgICAgICAgc2V0RXhlcmNpc2UoYm9keS5jdXJyZW50V29ya291dC5Sb3V0aW5lRXhlcmNpc2VzKTtcbiAgICAgICAgICBzZXRSb3V0aW5lKGJvZHkuY3VycmVudFdvcmtvdXQuUm91dGluZU5hbWUpXG4gICAgICAgIH1cbiAgICBcbiAgICAgICAgZG9GZXRjaCgpO1xuICAgICAgfSwgW10pO1xuXG4gICAgICBsZXQgY3VycmVudERhdGUgPSBuZXcgRGF0ZSgpLnRvTG9jYWxlU3RyaW5nKCk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8Rm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0KG9uU3VibWl0KX0+XG5cbiAgICAgICAgPEdyb3VwPlxuICAgICAgICAgICAgPHA+e3JvdXRpbmV9PC9wPlxuICAgICAgICAgICAgPHA+e2N1cnJlbnREYXRlfTwvcD5cbiAgICAgICAgPC9Hcm91cD5cblxuICAgICAgICA8R3JvdXA+XG4gICAgICAgICAgICA8bGFiZWw+e2V4ZXJjaXNlWzBdfTwvbGFiZWw+PGJyIC8+XG4gICAgICAgICAgICA8SW5wdXQgcmVmPXtyZWdpc3Rlcn0gdHlwZT1cIm51bWJlclwiIG5hbWU9XCJmaXJzdEV4ZXJjaXNlX3dlaWdodFwiIHBsYWNlaG9sZGVyPVwiRW50ZXIgd2VpZ2h0IGluIEtHLi4uXCIgLz48YnIgLz5cbiAgICAgICAgICAgIDxJbnB1dCByZWY9e3JlZ2lzdGVyfSB0eXBlPVwibnVtYmVyXCIgbmFtZT1cImZpcnN0RXhlcmNpc2Vfc2V0c1wiIHBsYWNlaG9sZGVyPVwiRW50ZXIgc2V0cy4uLlwiIC8+PGJyIC8+XG4gICAgICAgICAgICA8aW5wdXQgcmVmPXtyZWdpc3Rlcn0gdHlwZT1cIm51bWJlclwiIG5hbWU9XCJmaXJzdEV4ZXJjaXNlX3JlcHNcIiBwbGFjZWhvbGRlcj1cIkVudGVyIHJlcHMuLi5cIiAvPlxuICAgICAgICA8L0dyb3VwPlxuICAgICAgICA8R3JvdXA+XG4gICAgICAgICAgICA8bGFiZWw+e2V4ZXJjaXNlWzFdfTwvbGFiZWw+PGJyIC8+XG4gICAgICAgICAgICA8aW5wdXQgcmVmPXtyZWdpc3Rlcn0gdHlwZT1cIm51bWJlclwiIG5hbWU9XCJzZWNvbmRFeGVyY2lzZV93ZWlnaHRcIiBwbGFjZWhvbGRlcj1cIkVudGVyIHdlaWdodCBpbiBLRy4uLlwiIC8+PGJyIC8+XG4gICAgICAgICAgICA8aW5wdXQgcmVmPXtyZWdpc3Rlcn0gdHlwZT1cIm51bWJlclwiIG5hbWU9XCJzZWNvbmRFeGVyY2lzZV9zZXRzXCIgcGxhY2Vob2xkZXI9XCJFbnRlciBzZXRzLi4uXCIgLz48YnIgLz5cbiAgICAgICAgICAgIDxpbnB1dCByZWY9e3JlZ2lzdGVyfSB0eXBlPVwibnVtYmVyXCIgbmFtZT1cInNlY29uZEV4ZXJjaXNlX3JlcHNcIiBwbGFjZWhvbGRlcj1cIkVudGVyIHJlcHMuLi5cIiAvPlxuICAgICAgICA8L0dyb3VwPlxuICAgICAgICA8R3JvdXA+XG4gICAgICAgICAgICA8bGFiZWw+e2V4ZXJjaXNlWzJdfTwvbGFiZWw+PGJyIC8+XG4gICAgICAgICAgICA8aW5wdXQgcmVmPXtyZWdpc3Rlcn0gdHlwZT1cIm51bWJlclwiIG5hbWU9XCJ0aGlyZEV4ZXJjaXNlX3dlaWdodFwiIHBsYWNlaG9sZGVyPVwiRW50ZXIgd2VpZ2h0IGluIEtHLi4uXCIgLz48YnIgLz5cbiAgICAgICAgICAgIDxpbnB1dCByZWY9e3JlZ2lzdGVyfSB0eXBlPVwibnVtYmVyXCIgbmFtZT1cInRoaXJkRXhlcmNpc2Vfc2V0c1wiIHBsYWNlaG9sZGVyPVwiRW50ZXIgc2V0cy4uLlwiIC8+PGJyIC8+XG4gICAgICAgICAgICA8aW5wdXQgcmVmPXtyZWdpc3Rlcn0gdHlwZT1cIm51bWJlclwiIG5hbWU9XCJ0aGlyZEV4ZXJjaXNlX3JlcHNcIiBwbGFjZWhvbGRlcj1cIkVudGVyIHJlcHMuLi5cIiAvPlxuICAgICAgICA8L0dyb3VwPlxuICAgICAgICA8R3JvdXA+XG4gICAgICAgICAgICA8bGFiZWw+e2V4ZXJjaXNlWzNdfTwvbGFiZWw+PGJyIC8+XG4gICAgICAgICAgICA8aW5wdXQgcmVmPXtyZWdpc3Rlcn0gdHlwZT1cIm51bWJlclwiIG5hbWU9XCJmb3VydGhFeGVyY2lzZV93ZWlnaHRcIiBwbGFjZWhvbGRlcj1cIkVudGVyIHdlaWdodCBpbiBLRy4uLlwiIC8+PGJyIC8+XG4gICAgICAgICAgICA8aW5wdXQgcmVmPXtyZWdpc3Rlcn0gdHlwZT1cIm51bWJlclwiIG5hbWU9XCJmb3VydGhFeGVyY2lzZV9zZXRzXCIgcGxhY2Vob2xkZXI9XCJFbnRlciBzZXRzLi4uXCIgLz48YnIgLz5cbiAgICAgICAgICAgIDxpbnB1dCByZWY9e3JlZ2lzdGVyfSB0eXBlPVwibnVtYmVyXCIgbmFtZT1cImZvdXJ0aEV4ZXJjaXNlX3JlcHNcIiBwbGFjZWhvbGRlcj1cIkVudGVyIHJlcHMuLi5cIiAvPlxuICAgICAgICA8L0dyb3VwPlxuICAgICAgICA8R3JvdXA+XG4gICAgICAgICAgICA8bGFiZWw+e2V4ZXJjaXNlWzRdfTwvbGFiZWw+PGJyIC8+XG4gICAgICAgICAgICA8aW5wdXQgcmVmPXtyZWdpc3Rlcn0gdHlwZT1cIm51bWJlclwiIG5hbWU9XCJmaWZ0aEV4ZXJjaXNlX3dlaWdodFwiIHBsYWNlaG9sZGVyPVwiRW50ZXIgd2VpZ2h0IGluIEtHLi4uXCIgLz48YnIgLz5cbiAgICAgICAgICAgIDxpbnB1dCByZWY9e3JlZ2lzdGVyfSB0eXBlPVwibnVtYmVyXCIgbmFtZT1cImZpZnRoRXhlcmNpc2Vfc2V0c1wiIHBsYWNlaG9sZGVyPVwiRW50ZXIgc2V0cy4uLlwiIC8+PGJyIC8+XG4gICAgICAgICAgICA8aW5wdXQgcmVmPXtyZWdpc3Rlcn0gdHlwZT1cIm51bWJlclwiIG5hbWU9XCJmaWZ0aEV4ZXJjaXNlX3JlcHNcIiBwbGFjZWhvbGRlcj1cIkVudGVyIHJlcHMuLi5cIiAvPlxuICAgICAgICA8L0dyb3VwPlxuXG57LyogXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIHtyb3V0aW5lfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxwPlN0YXJ0IFRpbWU8L3A+XG4gICAgICAgICAgICAgICAgPGlucHV0IHJlZj17cmVnaXN0ZXJ9IG5hbWU9XCJjdXJyZW50RGF0ZVwiIHZhbHVlPXtjdXJyZW50RGF0ZX0gZGlzYWJsZWQgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICB7ZXhlcmNpc2UubWFwKChleGVyY2lzZSwgaWR4KSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxHcm91cCBrZXk9e2lkeH0+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCByZWY9e3JlZ2lzdGVyfSBuYW1lPVwiZXhlcmNpc2VfbmFtZVwiIHZhbHVlPXtleGVyY2lzZX0gZGlzYWJsZWQgLz5cbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5XZWlnaHQgOiA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHJlZj17cmVnaXN0ZXJ9IG5hbWU9XCJ3ZWlnaHRcIiBwbGFjZWhvbGRlcj1cIkVudGVyIHdlaWdodC4uLlwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPlNldHM6IDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgcmVmPXtyZWdpc3Rlcn0gbmFtZT1cInNldHNcIiBwbGFjZWhvbGRlcj1cIkVudGVyIHNldHMuLi5cIiAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5SZXBzOiA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHJlZj17cmVnaXN0ZXJ9IG5hbWU9XCJyZXBzXCIgcGxhY2Vob2xkZXI9XCJFbnRlciByZXBzLi4uXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9Hcm91cD5cbiAgICAgICAgICAgIClcbiAgICAgICAgfSl9ICovfVxuXG4gICAgICAgICAgICA8U3VibWl0QnRuIHR5cGU9XCJzdWJtaXRcIj5GaW5pc2ggd29ya291dDwvU3VibWl0QnRuPlxuICAgICAgICA8L0Zvcm0+XG4gICAgKVxufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Forms/WorkoutForm.js\n");

/***/ })

})