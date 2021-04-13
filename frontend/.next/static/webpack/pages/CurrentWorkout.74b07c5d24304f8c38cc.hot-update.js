webpackHotUpdate_N_E("pages/CurrentWorkout",{

/***/ "./components/Forms/WorkoutForm.js":
/*!*****************************************!*\
  !*** ./components/Forms/WorkoutForm.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return WorkoutForm; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_kimwoodfield_Documents_GitHub_workout_tracker_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ \"./node_modules/next/node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _Users_kimwoodfield_Documents_GitHub_workout_tracker_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_kimwoodfield_Documents_GitHub_workout_tracker_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Users_kimwoodfield_Documents_GitHub_workout_tracker_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _SubmitBtn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./SubmitBtn */ \"./components/Forms/SubmitBtn.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-hook-form */ \"./node_modules/react-hook-form/dist/index.esm.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);\n\n\n\n\nvar _jsxFileName = \"/Users/kimwoodfield/Documents/GitHub/workout-tracker/frontend/components/Forms/WorkoutForm.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\nvar Form = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].form.withConfig({\n  displayName: \"WorkoutForm__Form\",\n  componentId: \"yjzq5p-0\"\n})([\"display:flex;flex-direction:column;padding-bottom:1rem;width:90%;box-sizing:border-box;border:2px dashed salmon;margin:0 auto;align-items:center;\"]);\n_c = Form;\nvar Group = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div.withConfig({\n  displayName: \"WorkoutForm__Group\",\n  componentId: \"yjzq5p-1\"\n})([\"padding:0.5rem 0;margin:0.5rem 0;width:100%;\"]);\n_c2 = Group;\nfunction WorkoutForm() {\n  _s();\n\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_7__[\"useRouter\"])();\n\n  var _useForm = Object(react_hook_form__WEBPACK_IMPORTED_MODULE_6__[\"useForm\"])(),\n      register = _useForm.register,\n      handleSubmit = _useForm.handleSubmit,\n      errors = _useForm.errors;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_5__[\"useState\"])([]),\n      routine = _useState[0],\n      setRoutine = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_5__[\"useState\"])([]),\n      exercise = _useState2[0],\n      setExercise = _useState2[1];\n\n  var urlValue = router.query; // { id: 34 }\n\n  var currentWorkoutID = urlValue.id; // 34\n\n  var onSubmit = function onSubmit(data) {\n    fetch('http://localhost:3000/currentWorkout/' + currentWorkoutID, {\n      method: 'POST',\n      headers: {\n        'Content-Type': 'application/json'\n      },\n      body: JSON.stringify(data),\n      credentials: 'include'\n    }).then(function (res) {\n      switch (res.status) {\n        case 400:\n          console.log('This is a 400 error.');\n          break;\n\n        case 429:\n          console.log('This is a 429 error. Rate limit exceeded');\n          break;\n\n        case 201:\n          res.json().then(function (data) {\n            // request sent\n            console.log('this worked');\n            alert('Workout complete!'); // router.push('/routines');\n          });\n      }\n    });\n  };\n\n  Object(react__WEBPACK_IMPORTED_MODULE_5__[\"useEffect\"])(function () {\n    function doFetch() {\n      return _doFetch.apply(this, arguments);\n    }\n\n    function _doFetch() {\n      _doFetch = Object(_Users_kimwoodfield_Documents_GitHub_workout_tracker_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__[\"default\"])( /*#__PURE__*/_Users_kimwoodfield_Documents_GitHub_workout_tracker_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {\n        var res, body;\n        return _Users_kimwoodfield_Documents_GitHub_workout_tracker_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                _context.next = 2;\n                return fetch('http://localhost:3000/currentWorkout/' + currentWorkoutID, {\n                  method: 'GET',\n                  headers: {\n                    'Content-Type': 'application/json'\n                  },\n                  credentials: 'include'\n                });\n\n              case 2:\n                res = _context.sent;\n                _context.next = 5;\n                return res.json();\n\n              case 5:\n                body = _context.sent;\n                console.log('body is ...', body);\n                setExercise(body.currentWorkout.RoutineExercises);\n                setRoutine(body.currentWorkout.RoutineName);\n\n              case 9:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee);\n      }));\n      return _doFetch.apply(this, arguments);\n    }\n\n    doFetch();\n  }, []);\n  var currentDate = new Date().toLocaleString();\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Form, {\n    onSubmit: handleSubmit(onSubmit),\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Group, {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n        children: routine\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 87,\n        columnNumber: 13\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n        children: currentDate\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 88,\n        columnNumber: 13\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 86,\n      columnNumber: 9\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Group, {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"label\", {\n        children: exercise[0]\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 92,\n        columnNumber: 13\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"br\", {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 92,\n        columnNumber: 41\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n        ref: register({\n          required: true,\n          maxLength: 6,\n          pattern: /^[A-Za-z]+$/i\n        }),\n        type: \"number\",\n        name: \"firstExercise_weight\",\n        placeholder: \"Enter weight in KG...\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 93,\n        columnNumber: 13\n      }, this), errors.firstExercise_weight && \"This input is required\", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"br\", {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 94,\n        columnNumber: 70\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n        ref: register({\n          required: true,\n          max: 4\n        }),\n        type: \"number\",\n        name: \"firstExercise_sets\",\n        placeholder: \"Enter sets...\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 96,\n        columnNumber: 13\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"br\", {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 96,\n        columnNumber: 133\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n        ref: register({\n          required: true,\n          max: 40\n        }),\n        type: \"number\",\n        name: \"firstExercise_reps\",\n        placeholder: \"Enter reps...\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 97,\n        columnNumber: 13\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 91,\n      columnNumber: 9\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Group, {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"label\", {\n        children: exercise[1]\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 100,\n        columnNumber: 13\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"br\", {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 100,\n        columnNumber: 41\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n        ref: register,\n        type: \"number\",\n        name: \"secondExercise_weight\",\n        placeholder: \"Enter weight in KG...\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 101,\n        columnNumber: 13\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"br\", {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 101,\n        columnNumber: 116\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n        ref: register,\n        type: \"number\",\n        name: \"secondExercise_sets\",\n        placeholder: \"Enter sets...\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 102,\n        columnNumber: 13\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"br\", {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 102,\n        columnNumber: 106\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n        ref: register,\n        type: \"number\",\n        name: \"secondExercise_reps\",\n        placeholder: \"Enter reps...\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 103,\n        columnNumber: 13\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 99,\n      columnNumber: 9\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Group, {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"label\", {\n        children: exercise[2]\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 106,\n        columnNumber: 13\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"br\", {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 106,\n        columnNumber: 41\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n        ref: register,\n        type: \"number\",\n        name: \"thirdExercise_weight\",\n        placeholder: \"Enter weight in KG...\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 107,\n        columnNumber: 13\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"br\", {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 107,\n        columnNumber: 115\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n        ref: register,\n        type: \"number\",\n        name: \"thirdExercise_sets\",\n        placeholder: \"Enter sets...\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 108,\n        columnNumber: 13\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"br\", {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 108,\n        columnNumber: 105\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n        ref: register,\n        type: \"number\",\n        name: \"thirdExercise_reps\",\n        placeholder: \"Enter reps...\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 109,\n        columnNumber: 13\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 105,\n      columnNumber: 9\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Group, {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"label\", {\n        children: exercise[3]\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 112,\n        columnNumber: 13\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"br\", {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 112,\n        columnNumber: 41\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n        ref: register,\n        type: \"number\",\n        name: \"fourthExercise_weight\",\n        placeholder: \"Enter weight in KG...\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 113,\n        columnNumber: 13\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"br\", {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 113,\n        columnNumber: 116\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n        ref: register,\n        type: \"number\",\n        name: \"fourthExercise_sets\",\n        placeholder: \"Enter sets...\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 114,\n        columnNumber: 13\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"br\", {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 114,\n        columnNumber: 106\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n        ref: register,\n        type: \"number\",\n        name: \"fourthExercise_reps\",\n        placeholder: \"Enter reps...\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 115,\n        columnNumber: 13\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 111,\n      columnNumber: 9\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Group, {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"label\", {\n        children: exercise[4]\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 118,\n        columnNumber: 13\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"br\", {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 118,\n        columnNumber: 41\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n        ref: register,\n        type: \"number\",\n        name: \"fifthExercise_weight\",\n        placeholder: \"Enter weight in KG...\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 119,\n        columnNumber: 13\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"br\", {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 119,\n        columnNumber: 115\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n        ref: register,\n        type: \"number\",\n        name: \"fifthExercise_sets\",\n        placeholder: \"Enter sets...\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 120,\n        columnNumber: 13\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"br\", {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 120,\n        columnNumber: 105\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n        ref: register,\n        type: \"number\",\n        name: \"fifthExercise_reps\",\n        placeholder: \"Enter reps...\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 121,\n        columnNumber: 13\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 117,\n      columnNumber: 9\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_SubmitBtn__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n      type: \"submit\",\n      children: \"Finish workout\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 155,\n      columnNumber: 13\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 84,\n    columnNumber: 9\n  }, this);\n}\n\n_s(WorkoutForm, \"Oqu2yXWnnefN04wJPGmTRMuHYMY=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_7__[\"useRouter\"], react_hook_form__WEBPACK_IMPORTED_MODULE_6__[\"useForm\"]];\n});\n\n_c3 = WorkoutForm;\n\nvar _c, _c2, _c3;\n\n$RefreshReg$(_c, \"Form\");\n$RefreshReg$(_c2, \"Group\");\n$RefreshReg$(_c3, \"WorkoutForm\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Gb3Jtcy9Xb3Jrb3V0Rm9ybS5qcz84NTc1Il0sIm5hbWVzIjpbIkZvcm0iLCJzdHlsZWQiLCJmb3JtIiwiR3JvdXAiLCJkaXYiLCJXb3Jrb3V0Rm9ybSIsInJvdXRlciIsInVzZVJvdXRlciIsInVzZUZvcm0iLCJyZWdpc3RlciIsImhhbmRsZVN1Ym1pdCIsImVycm9ycyIsInVzZVN0YXRlIiwicm91dGluZSIsInNldFJvdXRpbmUiLCJleGVyY2lzZSIsInNldEV4ZXJjaXNlIiwidXJsVmFsdWUiLCJxdWVyeSIsImN1cnJlbnRXb3Jrb3V0SUQiLCJpZCIsIm9uU3VibWl0IiwiZGF0YSIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwiY3JlZGVudGlhbHMiLCJ0aGVuIiwicmVzIiwic3RhdHVzIiwiY29uc29sZSIsImxvZyIsImpzb24iLCJhbGVydCIsInVzZUVmZmVjdCIsImRvRmV0Y2giLCJjdXJyZW50V29ya291dCIsIlJvdXRpbmVFeGVyY2lzZXMiLCJSb3V0aW5lTmFtZSIsImN1cnJlbnREYXRlIiwiRGF0ZSIsInRvTG9jYWxlU3RyaW5nIiwicmVxdWlyZWQiLCJtYXhMZW5ndGgiLCJwYXR0ZXJuIiwiZmlyc3RFeGVyY2lzZV93ZWlnaHQiLCJtYXgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxJQUFJLEdBQUdDLHlEQUFNLENBQUNDLElBQVY7QUFBQTtBQUFBO0FBQUEseUpBQVY7S0FBTUYsSTtBQVdOLElBQU1HLEtBQUssR0FBR0YseURBQU0sQ0FBQ0csR0FBVjtBQUFBO0FBQUE7QUFBQSxvREFBWDtNQUFNRCxLO0FBTVMsU0FBU0UsV0FBVCxHQUF1QjtBQUFBOztBQUVsQyxNQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCOztBQUZrQyxpQkFJU0MsK0RBQU8sRUFKaEI7QUFBQSxNQUkxQkMsUUFKMEIsWUFJMUJBLFFBSjBCO0FBQUEsTUFJaEJDLFlBSmdCLFlBSWhCQSxZQUpnQjtBQUFBLE1BSUZDLE1BSkUsWUFJRkEsTUFKRTs7QUFBQSxrQkFNSkMsc0RBQVEsQ0FBQyxFQUFELENBTko7QUFBQSxNQU0zQkMsT0FOMkI7QUFBQSxNQU1sQkMsVUFOa0I7O0FBQUEsbUJBT0ZGLHNEQUFRLENBQUMsRUFBRCxDQVBOO0FBQUEsTUFPM0JHLFFBUDJCO0FBQUEsTUFPakJDLFdBUGlCOztBQVNsQyxNQUFJQyxRQUFRLEdBQUdYLE1BQU0sQ0FBQ1ksS0FBdEIsQ0FUa0MsQ0FTTDs7QUFDN0IsTUFBSUMsZ0JBQWdCLEdBQUdGLFFBQVEsQ0FBQ0csRUFBaEMsQ0FWa0MsQ0FVRTs7QUFFcEMsTUFBTUMsUUFBUSxHQUFHLFNBQVhBLFFBQVcsQ0FBQ0MsSUFBRCxFQUFVO0FBQ3ZCQyxTQUFLLENBQUMsMENBQTBDSixnQkFBM0MsRUFBNkQ7QUFDOURLLFlBQU0sRUFBRSxNQURzRDtBQUU5REMsYUFBTyxFQUFFO0FBQ0wsd0JBQWdCO0FBRFgsT0FGcUQ7QUFLOURDLFVBQUksRUFBRUMsSUFBSSxDQUFDQyxTQUFMLENBQWVOLElBQWYsQ0FMd0Q7QUFNOURPLGlCQUFXLEVBQUU7QUFOaUQsS0FBN0QsQ0FBTCxDQVFLQyxJQVJMLENBUVUsVUFBQ0MsR0FBRCxFQUFTO0FBQ2YsY0FBT0EsR0FBRyxDQUFDQyxNQUFYO0FBQ0ksYUFBSyxHQUFMO0FBQ0lDLGlCQUFPLENBQUNDLEdBQVIsQ0FBWSxzQkFBWjtBQUNBOztBQUNKLGFBQUssR0FBTDtBQUNJRCxpQkFBTyxDQUFDQyxHQUFSLENBQVksMENBQVo7QUFDQTs7QUFDSixhQUFLLEdBQUw7QUFDSUgsYUFBRyxDQUFDSSxJQUFKLEdBQVdMLElBQVgsQ0FBZ0IsVUFBQ1IsSUFBRCxFQUFVO0FBQ3RCO0FBQ0FXLG1CQUFPLENBQUNDLEdBQVIsQ0FBWSxhQUFaO0FBQ0FFLGlCQUFLLENBQUMsbUJBQUQsQ0FBTCxDQUhzQixDQUl0QjtBQUNILFdBTEQ7QUFSUjtBQWNFLEtBdkJOO0FBd0JILEdBekJEOztBQTJCQUMseURBQVMsQ0FBQyxZQUFNO0FBQUEsYUFDR0MsT0FESDtBQUFBO0FBQUE7O0FBQUE7QUFBQSwwWEFDWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUNvQmYsS0FBSyxDQUFDLDBDQUEwQ0osZ0JBQTNDLEVBQTZEO0FBQ2xGSyx3QkFBTSxFQUFFLEtBRDBFO0FBRWxGQyx5QkFBTyxFQUFFO0FBQ1Asb0NBQWdCO0FBRFQsbUJBRnlFO0FBS2xGSSw2QkFBVyxFQUFFO0FBTHFFLGlCQUE3RCxDQUR6Qjs7QUFBQTtBQUNRRSxtQkFEUjtBQUFBO0FBQUEsdUJBUXFCQSxHQUFHLENBQUNJLElBQUosRUFSckI7O0FBQUE7QUFRUVQsb0JBUlI7QUFTRU8sdUJBQU8sQ0FBQ0MsR0FBUixDQUFZLGFBQVosRUFBMkJSLElBQTNCO0FBQ0FWLDJCQUFXLENBQUNVLElBQUksQ0FBQ2EsY0FBTCxDQUFvQkMsZ0JBQXJCLENBQVg7QUFDQTFCLDBCQUFVLENBQUNZLElBQUksQ0FBQ2EsY0FBTCxDQUFvQkUsV0FBckIsQ0FBVjs7QUFYRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQURZO0FBQUE7QUFBQTs7QUFlWkgsV0FBTztBQUNSLEdBaEJNLEVBZ0JKLEVBaEJJLENBQVQ7QUFrQkUsTUFBSUksV0FBVyxHQUFHLElBQUlDLElBQUosR0FBV0MsY0FBWCxFQUFsQjtBQUVGLHNCQUNJLHFFQUFDLElBQUQ7QUFBTSxZQUFRLEVBQUVsQyxZQUFZLENBQUNXLFFBQUQsQ0FBNUI7QUFBQSw0QkFFQSxxRUFBQyxLQUFEO0FBQUEsOEJBQ0k7QUFBQSxrQkFBSVI7QUFBSjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREosZUFFSTtBQUFBLGtCQUFJNkI7QUFBSjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRkEsZUFPQSxxRUFBQyxLQUFEO0FBQUEsOEJBQ0k7QUFBQSxrQkFBUTNCLFFBQVEsQ0FBQyxDQUFEO0FBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FESixlQUNnQztBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRGhDLGVBRUk7QUFBTyxXQUFHLEVBQUVOLFFBQVEsQ0FBQztBQUFFb0Msa0JBQVEsRUFBRSxJQUFaO0FBQWtCQyxtQkFBUyxFQUFFLENBQTdCO0FBQWdDQyxpQkFBTyxFQUFFO0FBQXpDLFNBQUQsQ0FBcEI7QUFBaUYsWUFBSSxFQUFDLFFBQXRGO0FBQStGLFlBQUksRUFBQyxzQkFBcEc7QUFBMkgsbUJBQVcsRUFBQztBQUF2STtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkosRUFHS3BDLE1BQU0sQ0FBQ3FDLG9CQUFQLElBQStCLHdCQUhwQyxlQUc2RDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSDdELGVBS0k7QUFBTyxXQUFHLEVBQUV2QyxRQUFRLENBQUM7QUFBRW9DLGtCQUFRLEVBQUUsSUFBWjtBQUFrQkksYUFBRyxFQUFFO0FBQXZCLFNBQUQsQ0FBcEI7QUFBa0QsWUFBSSxFQUFDLFFBQXZEO0FBQWdFLFlBQUksRUFBQyxvQkFBckU7QUFBMEYsbUJBQVcsRUFBQztBQUF0RztBQUFBO0FBQUE7QUFBQTtBQUFBLGNBTEosZUFLNEg7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUw1SCxlQU1JO0FBQU8sV0FBRyxFQUFFeEMsUUFBUSxDQUFDO0FBQUVvQyxrQkFBUSxFQUFFLElBQVo7QUFBa0JJLGFBQUcsRUFBRTtBQUF2QixTQUFELENBQXBCO0FBQW1ELFlBQUksRUFBQyxRQUF4RDtBQUFpRSxZQUFJLEVBQUMsb0JBQXRFO0FBQTJGLG1CQUFXLEVBQUM7QUFBdkc7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQU5KO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVBBLGVBZUEscUVBQUMsS0FBRDtBQUFBLDhCQUNJO0FBQUEsa0JBQVFsQyxRQUFRLENBQUMsQ0FBRDtBQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREosZUFDZ0M7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURoQyxlQUVJO0FBQU8sV0FBRyxFQUFFTixRQUFaO0FBQXNCLFlBQUksRUFBQyxRQUEzQjtBQUFvQyxZQUFJLEVBQUMsdUJBQXpDO0FBQWlFLG1CQUFXLEVBQUM7QUFBN0U7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZKLGVBRTJHO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGM0csZUFHSTtBQUFPLFdBQUcsRUFBRUEsUUFBWjtBQUFzQixZQUFJLEVBQUMsUUFBM0I7QUFBb0MsWUFBSSxFQUFDLHFCQUF6QztBQUErRCxtQkFBVyxFQUFDO0FBQTNFO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FISixlQUdpRztBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSGpHLGVBSUk7QUFBTyxXQUFHLEVBQUVBLFFBQVo7QUFBc0IsWUFBSSxFQUFDLFFBQTNCO0FBQW9DLFlBQUksRUFBQyxxQkFBekM7QUFBK0QsbUJBQVcsRUFBQztBQUEzRTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBZkEsZUFxQkEscUVBQUMsS0FBRDtBQUFBLDhCQUNJO0FBQUEsa0JBQVFNLFFBQVEsQ0FBQyxDQUFEO0FBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FESixlQUNnQztBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRGhDLGVBRUk7QUFBTyxXQUFHLEVBQUVOLFFBQVo7QUFBc0IsWUFBSSxFQUFDLFFBQTNCO0FBQW9DLFlBQUksRUFBQyxzQkFBekM7QUFBZ0UsbUJBQVcsRUFBQztBQUE1RTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkosZUFFMEc7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUYxRyxlQUdJO0FBQU8sV0FBRyxFQUFFQSxRQUFaO0FBQXNCLFlBQUksRUFBQyxRQUEzQjtBQUFvQyxZQUFJLEVBQUMsb0JBQXpDO0FBQThELG1CQUFXLEVBQUM7QUFBMUU7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUhKLGVBR2dHO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FIaEcsZUFJSTtBQUFPLFdBQUcsRUFBRUEsUUFBWjtBQUFzQixZQUFJLEVBQUMsUUFBM0I7QUFBb0MsWUFBSSxFQUFDLG9CQUF6QztBQUE4RCxtQkFBVyxFQUFDO0FBQTFFO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FKSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFyQkEsZUEyQkEscUVBQUMsS0FBRDtBQUFBLDhCQUNJO0FBQUEsa0JBQVFNLFFBQVEsQ0FBQyxDQUFEO0FBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FESixlQUNnQztBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRGhDLGVBRUk7QUFBTyxXQUFHLEVBQUVOLFFBQVo7QUFBc0IsWUFBSSxFQUFDLFFBQTNCO0FBQW9DLFlBQUksRUFBQyx1QkFBekM7QUFBaUUsbUJBQVcsRUFBQztBQUE3RTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkosZUFFMkc7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUYzRyxlQUdJO0FBQU8sV0FBRyxFQUFFQSxRQUFaO0FBQXNCLFlBQUksRUFBQyxRQUEzQjtBQUFvQyxZQUFJLEVBQUMscUJBQXpDO0FBQStELG1CQUFXLEVBQUM7QUFBM0U7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUhKLGVBR2lHO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FIakcsZUFJSTtBQUFPLFdBQUcsRUFBRUEsUUFBWjtBQUFzQixZQUFJLEVBQUMsUUFBM0I7QUFBb0MsWUFBSSxFQUFDLHFCQUF6QztBQUErRCxtQkFBVyxFQUFDO0FBQTNFO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FKSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUEzQkEsZUFpQ0EscUVBQUMsS0FBRDtBQUFBLDhCQUNJO0FBQUEsa0JBQVFNLFFBQVEsQ0FBQyxDQUFEO0FBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FESixlQUNnQztBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRGhDLGVBRUk7QUFBTyxXQUFHLEVBQUVOLFFBQVo7QUFBc0IsWUFBSSxFQUFDLFFBQTNCO0FBQW9DLFlBQUksRUFBQyxzQkFBekM7QUFBZ0UsbUJBQVcsRUFBQztBQUE1RTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkosZUFFMEc7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUYxRyxlQUdJO0FBQU8sV0FBRyxFQUFFQSxRQUFaO0FBQXNCLFlBQUksRUFBQyxRQUEzQjtBQUFvQyxZQUFJLEVBQUMsb0JBQXpDO0FBQThELG1CQUFXLEVBQUM7QUFBMUU7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUhKLGVBR2dHO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FIaEcsZUFJSTtBQUFPLFdBQUcsRUFBRUEsUUFBWjtBQUFzQixZQUFJLEVBQUMsUUFBM0I7QUFBb0MsWUFBSSxFQUFDLG9CQUF6QztBQUE4RCxtQkFBVyxFQUFDO0FBQTFFO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FKSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFqQ0EsZUF1RUkscUVBQUMsa0RBQUQ7QUFBVyxVQUFJLEVBQUMsUUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUF2RUo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUEyRUg7O0dBdEl1QkosVztVQUVMRSxxRCxFQUU0QkMsdUQ7OztNQUp2QkgsVyIsImZpbGUiOiIuL2NvbXBvbmVudHMvRm9ybXMvV29ya291dEZvcm0uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xuaW1wb3J0IFN1Ym1pdEJ0biBmcm9tICcuL1N1Ym1pdEJ0bidcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyB1c2VGb3JtLCAgfSBmcm9tIFwicmVhY3QtaG9vay1mb3JtXCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcblxuY29uc3QgRm9ybSA9IHN0eWxlZC5mb3JtYFxuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBwYWRkaW5nLWJvdHRvbTogMXJlbTtcbiAgICB3aWR0aDogOTAlO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgYm9yZGVyOiAycHggZGFzaGVkIHNhbG1vbjtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuYFxuXG5jb25zdCBHcm91cCA9IHN0eWxlZC5kaXZgXG4gICAgcGFkZGluZzogMC41cmVtIDA7XG4gICAgbWFyZ2luOiAwLjVyZW0gMDtcbiAgICB3aWR0aDogMTAwJTtcbmBcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gV29ya291dEZvcm0oKSB7XG5cbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcblxuICAgIGNvbnN0IHsgcmVnaXN0ZXIsIGhhbmRsZVN1Ym1pdCwgZXJyb3JzIH0gPSB1c2VGb3JtKCk7XG5cbiAgICBjb25zdCBbcm91dGluZSwgc2V0Um91dGluZV0gPSB1c2VTdGF0ZShbXSk7XG4gICAgY29uc3QgW2V4ZXJjaXNlLCBzZXRFeGVyY2lzZV0gPSB1c2VTdGF0ZShbXSk7XG5cbiAgICBsZXQgdXJsVmFsdWUgPSByb3V0ZXIucXVlcnk7IC8vIHsgaWQ6IDM0IH1cbiAgICBsZXQgY3VycmVudFdvcmtvdXRJRCA9IHVybFZhbHVlLmlkOyAvLyAzNFxuXG4gICAgY29uc3Qgb25TdWJtaXQgPSAoZGF0YSkgPT4ge1xuICAgICAgICBmZXRjaCgnaHR0cDovL2xvY2FsaG9zdDozMDAwL2N1cnJlbnRXb3Jrb3V0LycgKyBjdXJyZW50V29ya291dElELCB7XG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoZGF0YSksXG4gICAgICAgICAgICBjcmVkZW50aWFsczogJ2luY2x1ZGUnLFxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC50aGVuKChyZXMpID0+IHtcbiAgICAgICAgICAgIHN3aXRjaChyZXMuc3RhdHVzKSB7XG4gICAgICAgICAgICAgICAgY2FzZSA0MDA6XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdUaGlzIGlzIGEgNDAwIGVycm9yLicpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIDQyOTpcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1RoaXMgaXMgYSA0MjkgZXJyb3IuIFJhdGUgbGltaXQgZXhjZWVkZWQnKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAyMDE6XG4gICAgICAgICAgICAgICAgICAgIHJlcy5qc29uKCkudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gcmVxdWVzdCBzZW50XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygndGhpcyB3b3JrZWQnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsZXJ0KCdXb3Jrb3V0IGNvbXBsZXRlIScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gcm91dGVyLnB1c2goJy9yb3V0aW5lcycpO1xuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfX0pXG4gICAgfVxuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgYXN5bmMgZnVuY3Rpb24gZG9GZXRjaCgpIHtcbiAgICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCgnaHR0cDovL2xvY2FsaG9zdDozMDAwL2N1cnJlbnRXb3Jrb3V0LycgKyBjdXJyZW50V29ya291dElELCB7IFxuICAgICAgICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNyZWRlbnRpYWxzOiAnaW5jbHVkZScsXG4gICAgICAgICAgfSk7XG4gICAgICAgICAgY29uc3QgYm9keSA9IGF3YWl0IHJlcy5qc29uKCk7XG4gICAgICAgICAgY29uc29sZS5sb2coJ2JvZHkgaXMgLi4uJywgYm9keSk7XG4gICAgICAgICAgc2V0RXhlcmNpc2UoYm9keS5jdXJyZW50V29ya291dC5Sb3V0aW5lRXhlcmNpc2VzKTtcbiAgICAgICAgICBzZXRSb3V0aW5lKGJvZHkuY3VycmVudFdvcmtvdXQuUm91dGluZU5hbWUpXG4gICAgICAgIH1cbiAgICBcbiAgICAgICAgZG9GZXRjaCgpO1xuICAgICAgfSwgW10pO1xuXG4gICAgICBsZXQgY3VycmVudERhdGUgPSBuZXcgRGF0ZSgpLnRvTG9jYWxlU3RyaW5nKCk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8Rm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0KG9uU3VibWl0KX0+XG5cbiAgICAgICAgPEdyb3VwPlxuICAgICAgICAgICAgPHA+e3JvdXRpbmV9PC9wPlxuICAgICAgICAgICAgPHA+e2N1cnJlbnREYXRlfTwvcD5cbiAgICAgICAgPC9Hcm91cD5cblxuICAgICAgICA8R3JvdXA+XG4gICAgICAgICAgICA8bGFiZWw+e2V4ZXJjaXNlWzBdfTwvbGFiZWw+PGJyIC8+XG4gICAgICAgICAgICA8aW5wdXQgcmVmPXtyZWdpc3Rlcih7IHJlcXVpcmVkOiB0cnVlLCBtYXhMZW5ndGg6IDYsIHBhdHRlcm46IC9eW0EtWmEtel0rJC9pIH0pfSB0eXBlPVwibnVtYmVyXCIgbmFtZT1cImZpcnN0RXhlcmNpc2Vfd2VpZ2h0XCIgcGxhY2Vob2xkZXI9XCJFbnRlciB3ZWlnaHQgaW4gS0cuLi5cIiAvPlxuICAgICAgICAgICAge2Vycm9ycy5maXJzdEV4ZXJjaXNlX3dlaWdodCAmJiBcIlRoaXMgaW5wdXQgaXMgcmVxdWlyZWRcIn08YnIgLz5cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgPGlucHV0IHJlZj17cmVnaXN0ZXIoeyByZXF1aXJlZDogdHJ1ZSwgbWF4OiA0IH0pfSB0eXBlPVwibnVtYmVyXCIgbmFtZT1cImZpcnN0RXhlcmNpc2Vfc2V0c1wiIHBsYWNlaG9sZGVyPVwiRW50ZXIgc2V0cy4uLlwiIC8+PGJyIC8+XG4gICAgICAgICAgICA8aW5wdXQgcmVmPXtyZWdpc3Rlcih7IHJlcXVpcmVkOiB0cnVlLCBtYXg6IDQwIH0pfSB0eXBlPVwibnVtYmVyXCIgbmFtZT1cImZpcnN0RXhlcmNpc2VfcmVwc1wiIHBsYWNlaG9sZGVyPVwiRW50ZXIgcmVwcy4uLlwiIC8+XG4gICAgICAgIDwvR3JvdXA+XG4gICAgICAgIDxHcm91cD5cbiAgICAgICAgICAgIDxsYWJlbD57ZXhlcmNpc2VbMV19PC9sYWJlbD48YnIgLz5cbiAgICAgICAgICAgIDxpbnB1dCByZWY9e3JlZ2lzdGVyfSB0eXBlPVwibnVtYmVyXCIgbmFtZT1cInNlY29uZEV4ZXJjaXNlX3dlaWdodFwiIHBsYWNlaG9sZGVyPVwiRW50ZXIgd2VpZ2h0IGluIEtHLi4uXCIgLz48YnIgLz5cbiAgICAgICAgICAgIDxpbnB1dCByZWY9e3JlZ2lzdGVyfSB0eXBlPVwibnVtYmVyXCIgbmFtZT1cInNlY29uZEV4ZXJjaXNlX3NldHNcIiBwbGFjZWhvbGRlcj1cIkVudGVyIHNldHMuLi5cIiAvPjxiciAvPlxuICAgICAgICAgICAgPGlucHV0IHJlZj17cmVnaXN0ZXJ9IHR5cGU9XCJudW1iZXJcIiBuYW1lPVwic2Vjb25kRXhlcmNpc2VfcmVwc1wiIHBsYWNlaG9sZGVyPVwiRW50ZXIgcmVwcy4uLlwiIC8+XG4gICAgICAgIDwvR3JvdXA+XG4gICAgICAgIDxHcm91cD5cbiAgICAgICAgICAgIDxsYWJlbD57ZXhlcmNpc2VbMl19PC9sYWJlbD48YnIgLz5cbiAgICAgICAgICAgIDxpbnB1dCByZWY9e3JlZ2lzdGVyfSB0eXBlPVwibnVtYmVyXCIgbmFtZT1cInRoaXJkRXhlcmNpc2Vfd2VpZ2h0XCIgcGxhY2Vob2xkZXI9XCJFbnRlciB3ZWlnaHQgaW4gS0cuLi5cIiAvPjxiciAvPlxuICAgICAgICAgICAgPGlucHV0IHJlZj17cmVnaXN0ZXJ9IHR5cGU9XCJudW1iZXJcIiBuYW1lPVwidGhpcmRFeGVyY2lzZV9zZXRzXCIgcGxhY2Vob2xkZXI9XCJFbnRlciBzZXRzLi4uXCIgLz48YnIgLz5cbiAgICAgICAgICAgIDxpbnB1dCByZWY9e3JlZ2lzdGVyfSB0eXBlPVwibnVtYmVyXCIgbmFtZT1cInRoaXJkRXhlcmNpc2VfcmVwc1wiIHBsYWNlaG9sZGVyPVwiRW50ZXIgcmVwcy4uLlwiIC8+XG4gICAgICAgIDwvR3JvdXA+XG4gICAgICAgIDxHcm91cD5cbiAgICAgICAgICAgIDxsYWJlbD57ZXhlcmNpc2VbM119PC9sYWJlbD48YnIgLz5cbiAgICAgICAgICAgIDxpbnB1dCByZWY9e3JlZ2lzdGVyfSB0eXBlPVwibnVtYmVyXCIgbmFtZT1cImZvdXJ0aEV4ZXJjaXNlX3dlaWdodFwiIHBsYWNlaG9sZGVyPVwiRW50ZXIgd2VpZ2h0IGluIEtHLi4uXCIgLz48YnIgLz5cbiAgICAgICAgICAgIDxpbnB1dCByZWY9e3JlZ2lzdGVyfSB0eXBlPVwibnVtYmVyXCIgbmFtZT1cImZvdXJ0aEV4ZXJjaXNlX3NldHNcIiBwbGFjZWhvbGRlcj1cIkVudGVyIHNldHMuLi5cIiAvPjxiciAvPlxuICAgICAgICAgICAgPGlucHV0IHJlZj17cmVnaXN0ZXJ9IHR5cGU9XCJudW1iZXJcIiBuYW1lPVwiZm91cnRoRXhlcmNpc2VfcmVwc1wiIHBsYWNlaG9sZGVyPVwiRW50ZXIgcmVwcy4uLlwiIC8+XG4gICAgICAgIDwvR3JvdXA+XG4gICAgICAgIDxHcm91cD5cbiAgICAgICAgICAgIDxsYWJlbD57ZXhlcmNpc2VbNF19PC9sYWJlbD48YnIgLz5cbiAgICAgICAgICAgIDxpbnB1dCByZWY9e3JlZ2lzdGVyfSB0eXBlPVwibnVtYmVyXCIgbmFtZT1cImZpZnRoRXhlcmNpc2Vfd2VpZ2h0XCIgcGxhY2Vob2xkZXI9XCJFbnRlciB3ZWlnaHQgaW4gS0cuLi5cIiAvPjxiciAvPlxuICAgICAgICAgICAgPGlucHV0IHJlZj17cmVnaXN0ZXJ9IHR5cGU9XCJudW1iZXJcIiBuYW1lPVwiZmlmdGhFeGVyY2lzZV9zZXRzXCIgcGxhY2Vob2xkZXI9XCJFbnRlciBzZXRzLi4uXCIgLz48YnIgLz5cbiAgICAgICAgICAgIDxpbnB1dCByZWY9e3JlZ2lzdGVyfSB0eXBlPVwibnVtYmVyXCIgbmFtZT1cImZpZnRoRXhlcmNpc2VfcmVwc1wiIHBsYWNlaG9sZGVyPVwiRW50ZXIgcmVwcy4uLlwiIC8+XG4gICAgICAgIDwvR3JvdXA+XG5cbnsvKiBcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAge3JvdXRpbmV9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPHA+U3RhcnQgVGltZTwvcD5cbiAgICAgICAgICAgICAgICA8aW5wdXQgcmVmPXtyZWdpc3Rlcn0gbmFtZT1cImN1cnJlbnREYXRlXCIgdmFsdWU9e2N1cnJlbnREYXRlfSBkaXNhYmxlZCAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIHtleGVyY2lzZS5tYXAoKGV4ZXJjaXNlLCBpZHgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPEdyb3VwIGtleT17aWR4fT5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHJlZj17cmVnaXN0ZXJ9IG5hbWU9XCJleGVyY2lzZV9uYW1lXCIgdmFsdWU9e2V4ZXJjaXNlfSBkaXNhYmxlZCAvPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPldlaWdodCA6IDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgcmVmPXtyZWdpc3Rlcn0gbmFtZT1cIndlaWdodFwiIHBsYWNlaG9sZGVyPVwiRW50ZXIgd2VpZ2h0Li4uXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+U2V0czogPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCByZWY9e3JlZ2lzdGVyfSBuYW1lPVwic2V0c1wiIHBsYWNlaG9sZGVyPVwiRW50ZXIgc2V0cy4uLlwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPlJlcHM6IDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgcmVmPXtyZWdpc3Rlcn0gbmFtZT1cInJlcHNcIiBwbGFjZWhvbGRlcj1cIkVudGVyIHJlcHMuLi5cIiAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L0dyb3VwPlxuICAgICAgICAgICAgKVxuICAgICAgICB9KX0gKi99XG5cbiAgICAgICAgICAgIDxTdWJtaXRCdG4gdHlwZT1cInN1Ym1pdFwiPkZpbmlzaCB3b3Jrb3V0PC9TdWJtaXRCdG4+XG4gICAgICAgIDwvRm9ybT5cbiAgICApXG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Forms/WorkoutForm.js\n");

/***/ })

})