webpackHotUpdate_N_E("pages/CurrentWorkout",{

/***/ "./components/Forms/FormInput.js":
false,

/***/ "./components/Forms/WorkoutForm.js":
/*!*****************************************!*\
  !*** ./components/Forms/WorkoutForm.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return WorkoutForm; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_kimwoodfield_Documents_GitHub_workout_tracker_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ \"./node_modules/next/node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _Users_kimwoodfield_Documents_GitHub_workout_tracker_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_kimwoodfield_Documents_GitHub_workout_tracker_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Users_kimwoodfield_Documents_GitHub_workout_tracker_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _SubmitBtn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./SubmitBtn */ \"./components/Forms/SubmitBtn.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-hook-form */ \"./node_modules/react-hook-form/dist/index.esm.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);\n\n\n\n\nvar _jsxFileName = \"/Users/kimwoodfield/Documents/GitHub/workout-tracker/frontend/components/Forms/WorkoutForm.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\nvar Form = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].form.withConfig({\n  displayName: \"WorkoutForm__Form\",\n  componentId: \"yjzq5p-0\"\n})([\"display:flex;flex-direction:column;padding-bottom:1rem;width:90%;box-sizing:border-box;border:2px dashed salmon;margin:0 auto;align-items:center;\"]);\n_c = Form;\nvar Group = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div.withConfig({\n  displayName: \"WorkoutForm__Group\",\n  componentId: \"yjzq5p-1\"\n})([\"padding:0.5rem 0;margin:0.5rem 0;\"]);\n_c2 = Group;\nvar Input = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].input.withConfig({\n  displayName: \"WorkoutForm__Input\",\n  componentId: \"yjzq5p-2\"\n})([\"\"]);\nfunction WorkoutForm() {\n  _s();\n\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_7__[\"useRouter\"])();\n\n  var _useForm = Object(react_hook_form__WEBPACK_IMPORTED_MODULE_6__[\"useForm\"])(),\n      register = _useForm.register,\n      handleSubmit = _useForm.handleSubmit,\n      errors = _useForm.errors;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_5__[\"useState\"])([]),\n      routine = _useState[0],\n      setRoutine = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_5__[\"useState\"])([]),\n      exercise = _useState2[0],\n      setExercise = _useState2[1];\n\n  var urlValue = router.query; // { id: 34 }\n\n  var currentWorkoutID = urlValue.id; // 34\n\n  var onSubmit = function onSubmit(data) {\n    fetch('http://localhost:3000/currentWorkout/' + currentWorkoutID, {\n      method: 'POST',\n      headers: {\n        'Content-Type': 'application/json'\n      },\n      body: JSON.stringify(data),\n      credentials: 'include'\n    }).then(function (res) {\n      switch (res.status) {\n        case 400:\n          console.log('This is a 400 error.');\n          break;\n\n        case 429:\n          console.log('This is a 429 error. Rate limit exceeded');\n          break;\n\n        case 201:\n          res.json().then(function (data) {\n            // request sent\n            console.log('this worked');\n            alert('Workout complete!'); // router.push('/routines');\n          });\n      }\n    });\n  };\n\n  Object(react__WEBPACK_IMPORTED_MODULE_5__[\"useEffect\"])(function () {\n    function doFetch() {\n      return _doFetch.apply(this, arguments);\n    }\n\n    function _doFetch() {\n      _doFetch = Object(_Users_kimwoodfield_Documents_GitHub_workout_tracker_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__[\"default\"])( /*#__PURE__*/_Users_kimwoodfield_Documents_GitHub_workout_tracker_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {\n        var res, body;\n        return _Users_kimwoodfield_Documents_GitHub_workout_tracker_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                _context.next = 2;\n                return fetch('http://localhost:3000/currentWorkout/' + currentWorkoutID, {\n                  method: 'GET',\n                  headers: {\n                    'Content-Type': 'application/json'\n                  },\n                  credentials: 'include'\n                });\n\n              case 2:\n                res = _context.sent;\n                _context.next = 5;\n                return res.json();\n\n              case 5:\n                body = _context.sent;\n                console.log('body is ...', body);\n                setExercise(body.currentWorkout.RoutineExercises);\n                setRoutine(body.currentWorkout.RoutineName);\n\n              case 9:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee);\n      }));\n      return _doFetch.apply(this, arguments);\n    }\n\n    doFetch();\n  }, []);\n  var currentDate = new Date().toLocaleString();\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Form, {\n    onSubmit: handleSubmit(onSubmit),\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Group, {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n        children: routine\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 89,\n        columnNumber: 13\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n        children: currentDate\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 90,\n        columnNumber: 13\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 88,\n      columnNumber: 9\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Group, {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"label\", {\n        children: exercise[0]\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 94,\n        columnNumber: 13\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"br\", {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 94,\n        columnNumber: 41\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n        ref: register,\n        type: \"number\",\n        name: \"firstExercise_weight\",\n        placeholder: \"Enter weight in KG...\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 95,\n        columnNumber: 13\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"br\", {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 95,\n        columnNumber: 115\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n        ref: register,\n        type: \"number\",\n        name: \"firstExercise_sets\",\n        placeholder: \"Enter sets...\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 96,\n        columnNumber: 13\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"br\", {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 96,\n        columnNumber: 105\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n        ref: register,\n        type: \"number\",\n        name: \"firstExercise_reps\",\n        placeholder: \"Enter reps...\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 97,\n        columnNumber: 13\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 93,\n      columnNumber: 9\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Group, {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"label\", {\n        children: exercise[1]\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 100,\n        columnNumber: 13\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"br\", {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 100,\n        columnNumber: 41\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n        ref: register,\n        type: \"number\",\n        name: \"secondExercise_weight\",\n        placeholder: \"Enter weight in KG...\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 101,\n        columnNumber: 13\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"br\", {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 101,\n        columnNumber: 116\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n        ref: register,\n        type: \"number\",\n        name: \"secondExercise_sets\",\n        placeholder: \"Enter sets...\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 102,\n        columnNumber: 13\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"br\", {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 102,\n        columnNumber: 106\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n        ref: register,\n        type: \"number\",\n        name: \"secondExercise_reps\",\n        placeholder: \"Enter reps...\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 103,\n        columnNumber: 13\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 99,\n      columnNumber: 9\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Group, {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"label\", {\n        children: exercise[2]\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 106,\n        columnNumber: 13\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"br\", {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 106,\n        columnNumber: 41\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n        ref: register,\n        type: \"number\",\n        name: \"thirdExercise_weight\",\n        placeholder: \"Enter weight in KG...\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 107,\n        columnNumber: 13\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"br\", {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 107,\n        columnNumber: 115\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n        ref: register,\n        type: \"number\",\n        name: \"thirdExercise_sets\",\n        placeholder: \"Enter sets...\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 108,\n        columnNumber: 13\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"br\", {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 108,\n        columnNumber: 105\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n        ref: register,\n        type: \"number\",\n        name: \"thirdExercise_reps\",\n        placeholder: \"Enter reps...\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 109,\n        columnNumber: 13\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 105,\n      columnNumber: 9\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Group, {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"label\", {\n        children: exercise[3]\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 112,\n        columnNumber: 13\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"br\", {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 112,\n        columnNumber: 41\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n        ref: register,\n        type: \"number\",\n        name: \"fourthExercise_weight\",\n        placeholder: \"Enter weight in KG...\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 113,\n        columnNumber: 13\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"br\", {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 113,\n        columnNumber: 116\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n        ref: register,\n        type: \"number\",\n        name: \"fourthExercise_sets\",\n        placeholder: \"Enter sets...\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 114,\n        columnNumber: 13\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"br\", {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 114,\n        columnNumber: 106\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n        ref: register,\n        type: \"number\",\n        name: \"fourthExercise_reps\",\n        placeholder: \"Enter reps...\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 115,\n        columnNumber: 13\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 111,\n      columnNumber: 9\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Group, {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"label\", {\n        children: exercise[4]\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 118,\n        columnNumber: 13\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"br\", {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 118,\n        columnNumber: 41\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n        ref: register,\n        type: \"number\",\n        name: \"fifthExercise_weight\",\n        placeholder: \"Enter weight in KG...\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 119,\n        columnNumber: 13\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"br\", {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 119,\n        columnNumber: 115\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n        ref: register,\n        type: \"number\",\n        name: \"fifthExercise_sets\",\n        placeholder: \"Enter sets...\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 120,\n        columnNumber: 13\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"br\", {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 120,\n        columnNumber: 105\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n        ref: register,\n        type: \"number\",\n        name: \"fifthExercise_reps\",\n        placeholder: \"Enter reps...\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 121,\n        columnNumber: 13\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 117,\n      columnNumber: 9\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_SubmitBtn__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n      type: \"submit\",\n      children: \"Finish workout\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 155,\n      columnNumber: 13\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 86,\n    columnNumber: 9\n  }, this);\n}\n\n_s(WorkoutForm, \"Oqu2yXWnnefN04wJPGmTRMuHYMY=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_7__[\"useRouter\"], react_hook_form__WEBPACK_IMPORTED_MODULE_6__[\"useForm\"]];\n});\n\n_c3 = WorkoutForm;\n\nvar _c, _c2, _c3;\n\n$RefreshReg$(_c, \"Form\");\n$RefreshReg$(_c2, \"Group\");\n$RefreshReg$(_c3, \"WorkoutForm\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Gb3Jtcy9Xb3Jrb3V0Rm9ybS5qcz84NTc1Il0sIm5hbWVzIjpbIkZvcm0iLCJzdHlsZWQiLCJmb3JtIiwiR3JvdXAiLCJkaXYiLCJJbnB1dCIsImlucHV0IiwiV29ya291dEZvcm0iLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJ1c2VGb3JtIiwicmVnaXN0ZXIiLCJoYW5kbGVTdWJtaXQiLCJlcnJvcnMiLCJ1c2VTdGF0ZSIsInJvdXRpbmUiLCJzZXRSb3V0aW5lIiwiZXhlcmNpc2UiLCJzZXRFeGVyY2lzZSIsInVybFZhbHVlIiwicXVlcnkiLCJjdXJyZW50V29ya291dElEIiwiaWQiLCJvblN1Ym1pdCIsImRhdGEiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsImNyZWRlbnRpYWxzIiwidGhlbiIsInJlcyIsInN0YXR1cyIsImNvbnNvbGUiLCJsb2ciLCJqc29uIiwiYWxlcnQiLCJ1c2VFZmZlY3QiLCJkb0ZldGNoIiwiY3VycmVudFdvcmtvdXQiLCJSb3V0aW5lRXhlcmNpc2VzIiwiUm91dGluZU5hbWUiLCJjdXJyZW50RGF0ZSIsIkRhdGUiLCJ0b0xvY2FsZVN0cmluZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLElBQUksR0FBR0MseURBQU0sQ0FBQ0MsSUFBVjtBQUFBO0FBQUE7QUFBQSx5SkFBVjtLQUFNRixJO0FBV04sSUFBTUcsS0FBSyxHQUFHRix5REFBTSxDQUFDRyxHQUFWO0FBQUE7QUFBQTtBQUFBLHlDQUFYO01BQU1ELEs7QUFLTixJQUFNRSxLQUFLLEdBQUdKLHlEQUFNLENBQUNLLEtBQVY7QUFBQTtBQUFBO0FBQUEsUUFBWDtBQUdlLFNBQVNDLFdBQVQsR0FBdUI7QUFBQTs7QUFFbEMsTUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4Qjs7QUFGa0MsaUJB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WUFBSSxFQUFDLFFBQTNCO0FBQW9DLFlBQUksRUFBQyxvQkFBekM7QUFBOEQsbUJBQVcsRUFBQztBQUExRTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBL0JBLGVBcUVJLHFFQUFDLGtEQUFEO0FBQVcsVUFBSSxFQUFDLFFBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBckVKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBeUVIOztHQXBJdUJKLFc7VUFFTEUscUQsRUFFNEJDLHVEOzs7TUFKdkJILFciLCJmaWxlIjoiLi9jb21wb25lbnRzL0Zvcm1zL1dvcmtvdXRGb3JtLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcbmltcG9ydCBTdWJtaXRCdG4gZnJvbSAnLi9TdWJtaXRCdG4nXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgdXNlRm9ybSwgIH0gZnJvbSBcInJlYWN0LWhvb2stZm9ybVwiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXG5cbmNvbnN0IEZvcm0gPSBzdHlsZWQuZm9ybWBcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgcGFkZGluZy1ib3R0b206IDFyZW07XG4gICAgd2lkdGg6IDkwJTtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGJvcmRlcjogMnB4IGRhc2hlZCBzYWxtb247XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbmBcblxuY29uc3QgR3JvdXAgPSBzdHlsZWQuZGl2YFxuICAgIHBhZGRpbmc6IDAuNXJlbSAwO1xuICAgIG1hcmdpbjogMC41cmVtIDA7XG5gXG5cbmNvbnN0IElucHV0ID0gc3R5bGVkLmlucHV0YFxuYFxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBXb3Jrb3V0Rm9ybSgpIHtcblxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuXG4gICAgY29uc3QgeyByZWdpc3RlciwgaGFuZGxlU3VibWl0LCBlcnJvcnMgfSA9IHVzZUZvcm0oKTtcblxuICAgIGNvbnN0IFtyb3V0aW5lLCBzZXRSb3V0aW5lXSA9IHVzZVN0YXRlKFtdKTtcbiAgICBjb25zdCBbZXhlcmNpc2UsIHNldEV4ZXJjaXNlXSA9IHVzZVN0YXRlKFtdKTtcblxuICAgIGxldCB1cmxWYWx1ZSA9IHJvdXRlci5xdWVyeTsgLy8geyBpZDogMzQgfVxuICAgIGxldCBjdXJyZW50V29ya291dElEID0gdXJsVmFsdWUuaWQ7IC8vIDM0XG5cbiAgICBjb25zdCBvblN1Ym1pdCA9IChkYXRhKSA9PiB7XG4gICAgICAgIGZldGNoKCdodHRwOi8vbG9jYWxob3N0OjMwMDAvY3VycmVudFdvcmtvdXQvJyArIGN1cnJlbnRXb3Jrb3V0SUQsIHtcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShkYXRhKSxcbiAgICAgICAgICAgIGNyZWRlbnRpYWxzOiAnaW5jbHVkZScsXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAgICAgc3dpdGNoKHJlcy5zdGF0dXMpIHtcbiAgICAgICAgICAgICAgICBjYXNlIDQwMDpcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1RoaXMgaXMgYSA0MDAgZXJyb3IuJyk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgNDI5OlxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnVGhpcyBpcyBhIDQyOSBlcnJvci4gUmF0ZSBsaW1pdCBleGNlZWRlZCcpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIDIwMTpcbiAgICAgICAgICAgICAgICAgICAgcmVzLmpzb24oKS50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyByZXF1ZXN0IHNlbnRcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCd0aGlzIHdvcmtlZCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYWxlcnQoJ1dvcmtvdXQgY29tcGxldGUhJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyByb3V0ZXIucHVzaCgnL3JvdXRpbmVzJyk7XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9fSlcbiAgICB9XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBhc3luYyBmdW5jdGlvbiBkb0ZldGNoKCkge1xuICAgICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKCdodHRwOi8vbG9jYWxob3N0OjMwMDAvY3VycmVudFdvcmtvdXQvJyArIGN1cnJlbnRXb3Jrb3V0SUQsIHsgXG4gICAgICAgICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY3JlZGVudGlhbHM6ICdpbmNsdWRlJyxcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBjb25zdCBib2R5ID0gYXdhaXQgcmVzLmpzb24oKTtcbiAgICAgICAgICBjb25zb2xlLmxvZygnYm9keSBpcyAuLi4nLCBib2R5KTtcbiAgICAgICAgICBzZXRFeGVyY2lzZShib2R5LmN1cnJlbnRXb3Jrb3V0LlJvdXRpbmVFeGVyY2lzZXMpO1xuICAgICAgICAgIHNldFJvdXRpbmUoYm9keS5jdXJyZW50V29ya291dC5Sb3V0aW5lTmFtZSlcbiAgICAgICAgfVxuICAgIFxuICAgICAgICBkb0ZldGNoKCk7XG4gICAgICB9LCBbXSk7XG5cbiAgICAgIGxldCBjdXJyZW50RGF0ZSA9IG5ldyBEYXRlKCkudG9Mb2NhbGVTdHJpbmcoKTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxGb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXQob25TdWJtaXQpfT5cblxuICAgICAgICA8R3JvdXA+XG4gICAgICAgICAgICA8cD57cm91dGluZX08L3A+XG4gICAgICAgICAgICA8cD57Y3VycmVudERhdGV9PC9wPlxuICAgICAgICA8L0dyb3VwPlxuXG4gICAgICAgIDxHcm91cD5cbiAgICAgICAgICAgIDxsYWJlbD57ZXhlcmNpc2VbMF19PC9sYWJlbD48YnIgLz5cbiAgICAgICAgICAgIDxpbnB1dCByZWY9e3JlZ2lzdGVyfSB0eXBlPVwibnVtYmVyXCIgbmFtZT1cImZpcnN0RXhlcmNpc2Vfd2VpZ2h0XCIgcGxhY2Vob2xkZXI9XCJFbnRlciB3ZWlnaHQgaW4gS0cuLi5cIiAvPjxiciAvPlxuICAgICAgICAgICAgPGlucHV0IHJlZj17cmVnaXN0ZXJ9IHR5cGU9XCJudW1iZXJcIiBuYW1lPVwiZmlyc3RFeGVyY2lzZV9zZXRzXCIgcGxhY2Vob2xkZXI9XCJFbnRlciBzZXRzLi4uXCIgLz48YnIgLz5cbiAgICAgICAgICAgIDxpbnB1dCByZWY9e3JlZ2lzdGVyfSB0eXBlPVwibnVtYmVyXCIgbmFtZT1cImZpcnN0RXhlcmNpc2VfcmVwc1wiIHBsYWNlaG9sZGVyPVwiRW50ZXIgcmVwcy4uLlwiIC8+XG4gICAgICAgIDwvR3JvdXA+XG4gICAgICAgIDxHcm91cD5cbiAgICAgICAgICAgIDxsYWJlbD57ZXhlcmNpc2VbMV19PC9sYWJlbD48YnIgLz5cbiAgICAgICAgICAgIDxpbnB1dCByZWY9e3JlZ2lzdGVyfSB0eXBlPVwibnVtYmVyXCIgbmFtZT1cInNlY29uZEV4ZXJjaXNlX3dlaWdodFwiIHBsYWNlaG9sZGVyPVwiRW50ZXIgd2VpZ2h0IGluIEtHLi4uXCIgLz48YnIgLz5cbiAgICAgICAgICAgIDxpbnB1dCByZWY9e3JlZ2lzdGVyfSB0eXBlPVwibnVtYmVyXCIgbmFtZT1cInNlY29uZEV4ZXJjaXNlX3NldHNcIiBwbGFjZWhvbGRlcj1cIkVudGVyIHNldHMuLi5cIiAvPjxiciAvPlxuICAgICAgICAgICAgPGlucHV0IHJlZj17cmVnaXN0ZXJ9IHR5cGU9XCJudW1iZXJcIiBuYW1lPVwic2Vjb25kRXhlcmNpc2VfcmVwc1wiIHBsYWNlaG9sZGVyPVwiRW50ZXIgcmVwcy4uLlwiIC8+XG4gICAgICAgIDwvR3JvdXA+XG4gICAgICAgIDxHcm91cD5cbiAgICAgICAgICAgIDxsYWJlbD57ZXhlcmNpc2VbMl19PC9sYWJlbD48YnIgLz5cbiAgICAgICAgICAgIDxpbnB1dCByZWY9e3JlZ2lzdGVyfSB0eXBlPVwibnVtYmVyXCIgbmFtZT1cInRoaXJkRXhlcmNpc2Vfd2VpZ2h0XCIgcGxhY2Vob2xkZXI9XCJFbnRlciB3ZWlnaHQgaW4gS0cuLi5cIiAvPjxiciAvPlxuICAgICAgICAgICAgPGlucHV0IHJlZj17cmVnaXN0ZXJ9IHR5cGU9XCJudW1iZXJcIiBuYW1lPVwidGhpcmRFeGVyY2lzZV9zZXRzXCIgcGxhY2Vob2xkZXI9XCJFbnRlciBzZXRzLi4uXCIgLz48YnIgLz5cbiAgICAgICAgICAgIDxpbnB1dCByZWY9e3JlZ2lzdGVyfSB0eXBlPVwibnVtYmVyXCIgbmFtZT1cInRoaXJkRXhlcmNpc2VfcmVwc1wiIHBsYWNlaG9sZGVyPVwiRW50ZXIgcmVwcy4uLlwiIC8+XG4gICAgICAgIDwvR3JvdXA+XG4gICAgICAgIDxHcm91cD5cbiAgICAgICAgICAgIDxsYWJlbD57ZXhlcmNpc2VbM119PC9sYWJlbD48YnIgLz5cbiAgICAgICAgICAgIDxpbnB1dCByZWY9e3JlZ2lzdGVyfSB0eXBlPVwibnVtYmVyXCIgbmFtZT1cImZvdXJ0aEV4ZXJjaXNlX3dlaWdodFwiIHBsYWNlaG9sZGVyPVwiRW50ZXIgd2VpZ2h0IGluIEtHLi4uXCIgLz48YnIgLz5cbiAgICAgICAgICAgIDxpbnB1dCByZWY9e3JlZ2lzdGVyfSB0eXBlPVwibnVtYmVyXCIgbmFtZT1cImZvdXJ0aEV4ZXJjaXNlX3NldHNcIiBwbGFjZWhvbGRlcj1cIkVudGVyIHNldHMuLi5cIiAvPjxiciAvPlxuICAgICAgICAgICAgPGlucHV0IHJlZj17cmVnaXN0ZXJ9IHR5cGU9XCJudW1iZXJcIiBuYW1lPVwiZm91cnRoRXhlcmNpc2VfcmVwc1wiIHBsYWNlaG9sZGVyPVwiRW50ZXIgcmVwcy4uLlwiIC8+XG4gICAgICAgIDwvR3JvdXA+XG4gICAgICAgIDxHcm91cD5cbiAgICAgICAgICAgIDxsYWJlbD57ZXhlcmNpc2VbNF19PC9sYWJlbD48YnIgLz5cbiAgICAgICAgICAgIDxpbnB1dCByZWY9e3JlZ2lzdGVyfSB0eXBlPVwibnVtYmVyXCIgbmFtZT1cImZpZnRoRXhlcmNpc2Vfd2VpZ2h0XCIgcGxhY2Vob2xkZXI9XCJFbnRlciB3ZWlnaHQgaW4gS0cuLi5cIiAvPjxiciAvPlxuICAgICAgICAgICAgPGlucHV0IHJlZj17cmVnaXN0ZXJ9IHR5cGU9XCJudW1iZXJcIiBuYW1lPVwiZmlmdGhFeGVyY2lzZV9zZXRzXCIgcGxhY2Vob2xkZXI9XCJFbnRlciBzZXRzLi4uXCIgLz48YnIgLz5cbiAgICAgICAgICAgIDxpbnB1dCByZWY9e3JlZ2lzdGVyfSB0eXBlPVwibnVtYmVyXCIgbmFtZT1cImZpZnRoRXhlcmNpc2VfcmVwc1wiIHBsYWNlaG9sZGVyPVwiRW50ZXIgcmVwcy4uLlwiIC8+XG4gICAgICAgIDwvR3JvdXA+XG5cbnsvKiBcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAge3JvdXRpbmV9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPHA+U3RhcnQgVGltZTwvcD5cbiAgICAgICAgICAgICAgICA8aW5wdXQgcmVmPXtyZWdpc3Rlcn0gbmFtZT1cImN1cnJlbnREYXRlXCIgdmFsdWU9e2N1cnJlbnREYXRlfSBkaXNhYmxlZCAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIHtleGVyY2lzZS5tYXAoKGV4ZXJjaXNlLCBpZHgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPEdyb3VwIGtleT17aWR4fT5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHJlZj17cmVnaXN0ZXJ9IG5hbWU9XCJleGVyY2lzZV9uYW1lXCIgdmFsdWU9e2V4ZXJjaXNlfSBkaXNhYmxlZCAvPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPldlaWdodCA6IDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgcmVmPXtyZWdpc3Rlcn0gbmFtZT1cIndlaWdodFwiIHBsYWNlaG9sZGVyPVwiRW50ZXIgd2VpZ2h0Li4uXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+U2V0czogPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCByZWY9e3JlZ2lzdGVyfSBuYW1lPVwic2V0c1wiIHBsYWNlaG9sZGVyPVwiRW50ZXIgc2V0cy4uLlwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPlJlcHM6IDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgcmVmPXtyZWdpc3Rlcn0gbmFtZT1cInJlcHNcIiBwbGFjZWhvbGRlcj1cIkVudGVyIHJlcHMuLi5cIiAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L0dyb3VwPlxuICAgICAgICAgICAgKVxuICAgICAgICB9KX0gKi99XG5cbiAgICAgICAgICAgIDxTdWJtaXRCdG4gdHlwZT1cInN1Ym1pdFwiPkZpbmlzaCB3b3Jrb3V0PC9TdWJtaXRCdG4+XG4gICAgICAgIDwvRm9ybT5cbiAgICApXG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Forms/WorkoutForm.js\n");

/***/ })

})