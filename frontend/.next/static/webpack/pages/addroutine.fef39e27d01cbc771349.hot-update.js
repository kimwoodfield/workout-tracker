webpackHotUpdate_N_E("pages/addroutine",{

/***/ "./components/Forms/RoutineForm.js":
/*!*****************************************!*\
  !*** ./components/Forms/RoutineForm.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Routine; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _FormInput__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FormInput */ \"./components/Forms/FormInput.js\");\n/* harmony import */ var _SubmitBtn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SubmitBtn */ \"./components/Forms/SubmitBtn.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-hook-form */ \"./node_modules/react-hook-form/dist/index.esm.js\");\n/* harmony import */ var _Common_ErrorMessage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Common/ErrorMessage */ \"./components/Common/ErrorMessage.js\");\n\n\nvar _jsxFileName = \"/Users/kimwoodfield/Documents/GitHub/workout-tracker/frontend/components/Forms/RoutineForm.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\nvar Form = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].form.withConfig({\n  displayName: \"RoutineForm__Form\",\n  componentId: \"sc-1ufn8ur-0\"\n})([\"display:flex;flex-direction:column;width:18rem;padding-bottom:1rem;\"]);\n_c = Form;\nvar Group = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div.withConfig({\n  displayName: \"RoutineForm__Group\",\n  componentId: \"sc-1ufn8ur-1\"\n})([\"padding:0.5rem 0;margin:0.5rem 0;\"]);\n_c2 = Group;\nfunction Routine() {\n  _s();\n\n  var _useForm = Object(react_hook_form__WEBPACK_IMPORTED_MODULE_5__[\"useForm\"])(),\n      register = _useForm.register,\n      handleSubmit = _useForm.handleSubmit,\n      errors = _useForm.errors; // Handles the form submission\n\n\n  var onSubmit = function onSubmit(e) {\n    // If the input data is valid - \n    // Make a POST request to our api route with the input data\n    fetch('http://localhost:3000/addroutine', {\n      method: 'POST',\n      headers: {\n        'Content-Type': 'application/json'\n      },\n      body: JSON.stringify({\n        data: data\n      })\n    }).then(function (res) {\n      switch (res.status) {\n        case 400:\n          console.log('This is a 400 error.');\n          break;\n\n        case 429:\n          console.log('This is a 429 error. Rate limit exceeded');\n          break;\n\n        case 201:\n          res.json().then(function (data) {\n            // request sent\n            console.log('this worked');\n          });\n      }\n    });\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Form, {\n    onSubmit: handleSubmit(onSubmit),\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"label\", {\n        children: \" Routine Name : \"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 55,\n        columnNumber: 13\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_FormInput__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        type: \"text\",\n        placeholder: \"Routine name...\",\n        name: \"routine_name\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 56,\n        columnNumber: 13\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 54,\n      columnNumber: 13\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Group, {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"label\", {\n        children: \" Exercise 1 : \"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 65,\n        columnNumber: 17\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_FormInput__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        type: \"text\",\n        placeholder: \"Exercise name...\",\n        name: \"firstExerciseName\",\n        ref: register({\n          required: true,\n          minLength: 5,\n          maxLength: 15\n        })\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 66,\n        columnNumber: 17\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_Common_ErrorMessage__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n        children: errors.firstExerciseName && 'This is incorrect'\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 72,\n        columnNumber: 17\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"select\", {\n        name: \"firstExerciseType\",\n        id: \"exercise_type\",\n        ref: register,\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"option\", {\n          selected: \"selected\",\n          disabled: true,\n          children: \"Exercise Type\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 76,\n          columnNumber: 21\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"option\", {\n          value: \"Chest\",\n          children: \"Chest\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 77,\n          columnNumber: 21\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"option\", {\n          value: \"Shoulders\",\n          children: \"Shoulders\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 78,\n          columnNumber: 21\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"option\", {\n          value: \"Back\",\n          children: \"Back\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 79,\n          columnNumber: 21\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"option\", {\n          value: \"Legs\",\n          children: \"Legs\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 80,\n          columnNumber: 21\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"option\", {\n          value: \"Arms\",\n          children: \"Arms\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 81,\n          columnNumber: 21\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 75,\n        columnNumber: 17\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 64,\n      columnNumber: 13\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Group, {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"label\", {\n        children: \" Exercise 2 : \"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 86,\n        columnNumber: 17\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_FormInput__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        type: \"text\",\n        placeholder: \"Exercise name...\",\n        name: \"secondExerciseName\",\n        ref: register\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 87,\n        columnNumber: 17\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"select\", {\n        name: \"secondExerciseType\",\n        id: \"exercise_type\",\n        ref: register,\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"option\", {\n          selected: \"selected\",\n          disabled: true,\n          children: \"Exercise Type\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 94,\n          columnNumber: 21\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"option\", {\n          value: \"Chest\",\n          children: \"Chest\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 95,\n          columnNumber: 21\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"option\", {\n          value: \"Shoulders\",\n          children: \"Shoulders\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 96,\n          columnNumber: 21\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"option\", {\n          value: \"Back\",\n          children: \"Back\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 97,\n          columnNumber: 21\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"option\", {\n          value: \"Legs\",\n          children: \"Legs\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 98,\n          columnNumber: 21\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"option\", {\n          value: \"Arms\",\n          children: \"Arms\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 99,\n          columnNumber: 21\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 93,\n        columnNumber: 17\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 85,\n      columnNumber: 13\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Group, {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"label\", {\n        children: \" Exercise 3 : \"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 104,\n        columnNumber: 17\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_FormInput__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        type: \"text\",\n        placeholder: \"Exercise name...\",\n        name: \"thirdExerciseName\",\n        ref: register\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 105,\n        columnNumber: 17\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"select\", {\n        name: \"thirdExerciseType\",\n        id: \"exercise_type\",\n        ref: register,\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"option\", {\n          selected: \"selected\",\n          disabled: true,\n          children: \"Exercise Type\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 112,\n          columnNumber: 21\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"option\", {\n          value: \"Chest\",\n          children: \"Chest\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 113,\n          columnNumber: 21\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"option\", {\n          value: \"Shoulders\",\n          children: \"Shoulders\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 114,\n          columnNumber: 21\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"option\", {\n          value: \"Back\",\n          children: \"Back\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 115,\n          columnNumber: 21\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"option\", {\n          value: \"Legs\",\n          children: \"Legs\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 116,\n          columnNumber: 21\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"option\", {\n          value: \"Arms\",\n          children: \"Arms\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 117,\n          columnNumber: 21\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 111,\n        columnNumber: 17\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 103,\n      columnNumber: 13\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Group, {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"label\", {\n        children: \" Exercise 4 : \"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 122,\n        columnNumber: 17\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_FormInput__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        type: \"text\",\n        placeholder: \"Exercise name...\",\n        name: \"fourthExerciseName\",\n        ref: register\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 123,\n        columnNumber: 17\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"select\", {\n        name: \"fourthExerciseType\",\n        id: \"exercise_type\",\n        ref: register,\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"option\", {\n          selected: \"selected\",\n          disabled: true,\n          children: \"Exercise Type\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 130,\n          columnNumber: 21\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"option\", {\n          value: \"Chest\",\n          children: \"Chest\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 131,\n          columnNumber: 21\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"option\", {\n          value: \"Shoulders\",\n          children: \"Shoulders\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 132,\n          columnNumber: 21\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"option\", {\n          value: \"Back\",\n          children: \"Back\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 133,\n          columnNumber: 21\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"option\", {\n          value: \"Legs\",\n          children: \"Legs\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 134,\n          columnNumber: 21\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"option\", {\n          value: \"Arms\",\n          children: \"Arms\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 135,\n          columnNumber: 21\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 129,\n        columnNumber: 17\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 121,\n      columnNumber: 13\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Group, {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"label\", {\n        children: \" Exercise 5 : \"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 140,\n        columnNumber: 17\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_FormInput__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        type: \"text\",\n        placeholder: \"Exercise name...\",\n        name: \"fifthExerciseName\",\n        ref: register\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 141,\n        columnNumber: 17\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"select\", {\n        name: \"fifthExerciseType\",\n        id: \"exercise_type\",\n        ref: register,\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"option\", {\n          selected: \"selected\",\n          disabled: true,\n          children: \"Exercise Type\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 148,\n          columnNumber: 21\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"option\", {\n          value: \"Chest\",\n          children: \"Chest\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 149,\n          columnNumber: 21\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"option\", {\n          value: \"Shoulders\",\n          children: \"Shoulders\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 150,\n          columnNumber: 21\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"option\", {\n          value: \"Back\",\n          children: \"Back\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 151,\n          columnNumber: 21\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"option\", {\n          value: \"Legs\",\n          children: \"Legs\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 152,\n          columnNumber: 21\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"option\", {\n          value: \"Arms\",\n          children: \"Arms\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 153,\n          columnNumber: 21\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 147,\n        columnNumber: 17\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 139,\n      columnNumber: 13\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_SubmitBtn__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n      type: \"submit\",\n      children: \"Add routine\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 158,\n      columnNumber: 13\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 53,\n    columnNumber: 9\n  }, this);\n}\n\n_s(Routine, \"iyH731LTjAbxnbpM16EGorBPneQ=\", false, function () {\n  return [react_hook_form__WEBPACK_IMPORTED_MODULE_5__[\"useForm\"]];\n});\n\n_c3 = Routine;\n\nvar _c, _c2, _c3;\n\n$RefreshReg$(_c, \"Form\");\n$RefreshReg$(_c2, \"Group\");\n$RefreshReg$(_c3, \"Routine\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Gb3Jtcy9Sb3V0aW5lRm9ybS5qcz80YTM2Il0sIm5hbWVzIjpbIkZvcm0iLCJzdHlsZWQiLCJmb3JtIiwiR3JvdXAiLCJkaXYiLCJSb3V0aW5lIiwidXNlRm9ybSIsInJlZ2lzdGVyIiwiaGFuZGxlU3VibWl0IiwiZXJyb3JzIiwib25TdWJtaXQiLCJlIiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJkYXRhIiwidGhlbiIsInJlcyIsInN0YXR1cyIsImNvbnNvbGUiLCJsb2ciLCJqc29uIiwicmVxdWlyZWQiLCJtaW5MZW5ndGgiLCJtYXhMZW5ndGgiLCJmaXJzdEV4ZXJjaXNlTmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLElBQUksR0FBR0MseURBQU0sQ0FBQ0MsSUFBVjtBQUFBO0FBQUE7QUFBQSwyRUFBVjtLQUFNRixJO0FBT04sSUFBTUcsS0FBSyxHQUFHRix5REFBTSxDQUFDRyxHQUFWO0FBQUE7QUFBQTtBQUFBLHlDQUFYO01BQU1ELEs7QUFNUyxTQUFTRSxPQUFULEdBQW1CO0FBQUE7O0FBQUEsaUJBRWFDLCtEQUFPLEVBRnBCO0FBQUEsTUFFdEJDLFFBRnNCLFlBRXRCQSxRQUZzQjtBQUFBLE1BRVpDLFlBRlksWUFFWkEsWUFGWTtBQUFBLE1BRUVDLE1BRkYsWUFFRUEsTUFGRixFQUk5Qjs7O0FBQ0EsTUFBTUMsUUFBUSxHQUFHLFNBQVhBLFFBQVcsQ0FBQ0MsQ0FBRCxFQUFPO0FBQ3BCO0FBQ0E7QUFDQUMsU0FBSyxDQUFDLGtDQUFELEVBQXFDO0FBQ3RDQyxZQUFNLEVBQUUsTUFEOEI7QUFFdENDLGFBQU8sRUFBRTtBQUNMLHdCQUFnQjtBQURYLE9BRjZCO0FBS3RDQyxVQUFJLEVBQUVDLElBQUksQ0FBQ0MsU0FBTCxDQUFlO0FBQUNDLFlBQUksRUFB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bmVudHMvRm9ybXMvUm91dGluZUZvcm0uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xuaW1wb3J0IElucHV0IGZyb20gJy4vRm9ybUlucHV0J1xuaW1wb3J0IFN1Ym1pdEJ0biBmcm9tICcuL1N1Ym1pdEJ0bidcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyB1c2VGb3JtLCAgfSBmcm9tIFwicmVhY3QtaG9vay1mb3JtXCI7XG5pbXBvcnQgRXJyb3JNZXNzYWdlIGZyb20gJy4uL0NvbW1vbi9FcnJvck1lc3NhZ2UnXG5cbmNvbnN0IEZvcm0gPSBzdHlsZWQuZm9ybWBcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgd2lkdGg6IDE4cmVtO1xuICAgIHBhZGRpbmctYm90dG9tOiAxcmVtO1xuYFxuXG5jb25zdCBHcm91cCA9IHN0eWxlZC5kaXZgXG4gICAgcGFkZGluZzogMC41cmVtIDA7XG4gICAgbWFyZ2luOiAwLjVyZW0gMDtcbiAgICAvLyBib3JkZXI6IDFweCBkYXNoZWQgZ3JleTtcbmBcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUm91dGluZSgpIHtcblxuICAgIGNvbnN0IHsgcmVnaXN0ZXIsIGhhbmRsZVN1Ym1pdCwgZXJyb3JzIH0gPSB1c2VGb3JtKCk7XG5cbiAgICAvLyBIYW5kbGVzIHRoZSBmb3JtIHN1Ym1pc3Npb25cbiAgICBjb25zdCBvblN1Ym1pdCA9IChlKSA9PiB7XG4gICAgICAgIC8vIElmIHRoZSBpbnB1dCBkYXRhIGlzIHZhbGlkIC0gXG4gICAgICAgIC8vIE1ha2UgYSBQT1NUIHJlcXVlc3QgdG8gb3VyIGFwaSByb3V0ZSB3aXRoIHRoZSBpbnB1dCBkYXRhXG4gICAgICAgIGZldGNoKCdodHRwOi8vbG9jYWxob3N0OjMwMDAvYWRkcm91dGluZScsIHtcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7ZGF0YX0pLFxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC50aGVuKChyZXMpID0+IHtcbiAgICAgICAgICAgIHN3aXRjaChyZXMuc3RhdHVzKSB7XG4gICAgICAgICAgICAgICAgY2FzZSA0MDA6XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdUaGlzIGlzIGEgNDAwIGVycm9yLicpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIDQyOTpcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1RoaXMgaXMgYSA0MjkgZXJyb3IuIFJhdGUgbGltaXQgZXhjZWVkZWQnKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAyMDE6XG4gICAgICAgICAgICAgICAgICAgIHJlcy5qc29uKCkudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gcmVxdWVzdCBzZW50XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygndGhpcyB3b3JrZWQnKVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfX0pXG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPEZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdChvblN1Ym1pdCl9PlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxsYWJlbD4gUm91dGluZSBOYW1lIDogPC9sYWJlbD5cbiAgICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlJvdXRpbmUgbmFtZS4uLlwiXG4gICAgICAgICAgICAgICAgbmFtZT1cInJvdXRpbmVfbmFtZVwiXG4gICAgICAgICAgICAvPlxuXG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPEdyb3VwPlxuICAgICAgICAgICAgICAgIDxsYWJlbD4gRXhlcmNpc2UgMSA6IDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPElucHV0XG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFeGVyY2lzZSBuYW1lLi4uXCJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cImZpcnN0RXhlcmNpc2VOYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgcmVmPXtyZWdpc3Rlcih7IHJlcXVpcmVkOiB0cnVlLCBtaW5MZW5ndGg6IDUsIG1heExlbmd0aDogMTUgfSl9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8RXJyb3JNZXNzYWdlPlxuICAgICAgICAgICAgICAgICAgICB7ZXJyb3JzLmZpcnN0RXhlcmNpc2VOYW1lICYmICdUaGlzIGlzIGluY29ycmVjdCd9XG4gICAgICAgICAgICAgICAgPC9FcnJvck1lc3NhZ2U+XG4gICAgICAgICAgICAgICAgPHNlbGVjdCBuYW1lPVwiZmlyc3RFeGVyY2lzZVR5cGVcIiBpZD1cImV4ZXJjaXNlX3R5cGVcIiByZWY9e3JlZ2lzdGVyfT5cbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiBzZWxlY3RlZD1cInNlbGVjdGVkXCIgZGlzYWJsZWQ+RXhlcmNpc2UgVHlwZTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiQ2hlc3RcIj5DaGVzdDwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiU2hvdWxkZXJzXCI+U2hvdWxkZXJzPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJCYWNrXCI+QmFjazwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiTGVnc1wiPkxlZ3M8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIkFybXNcIj5Bcm1zPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgICA8L0dyb3VwPlxuXG4gICAgICAgICAgICA8R3JvdXA+XG4gICAgICAgICAgICAgICAgPGxhYmVsPiBFeGVyY2lzZSAyIDogPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkV4ZXJjaXNlIG5hbWUuLi5cIlxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwic2Vjb25kRXhlcmNpc2VOYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgcmVmPXtyZWdpc3Rlcn1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxzZWxlY3QgbmFtZT1cInNlY29uZEV4ZXJjaXNlVHlwZVwiIGlkPVwiZXhlcmNpc2VfdHlwZVwiIHJlZj17cmVnaXN0ZXJ9PlxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHNlbGVjdGVkPVwic2VsZWN0ZWRcIiBkaXNhYmxlZD5FeGVyY2lzZSBUeXBlPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJDaGVzdFwiPkNoZXN0PC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJTaG91bGRlcnNcIj5TaG91bGRlcnM8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIkJhY2tcIj5CYWNrPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJMZWdzXCI+TGVnczwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiQXJtc1wiPkFybXM8L29wdGlvbj5cbiAgICAgICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICAgIDwvR3JvdXA+XG5cbiAgICAgICAgICAgIDxHcm91cD5cbiAgICAgICAgICAgICAgICA8bGFiZWw+IEV4ZXJjaXNlIDMgOiA8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRXhlcmNpc2UgbmFtZS4uLlwiXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJ0aGlyZEV4ZXJjaXNlTmFtZVwiXG4gICAgICAgICAgICAgICAgICAgIHJlZj17cmVnaXN0ZXJ9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8c2VsZWN0IG5hbWU9XCJ0aGlyZEV4ZXJjaXNlVHlwZVwiIGlkPVwiZXhlcmNpc2VfdHlwZVwiIHJlZj17cmVnaXN0ZXJ9PlxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHNlbGVjdGVkPVwic2VsZWN0ZWRcIiBkaXNhYmxlZD5FeGVyY2lzZSBUeXBlPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJDaGVzdFwiPkNoZXN0PC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJTaG91bGRlcnNcIj5TaG91bGRlcnM8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIkJhY2tcIj5CYWNrPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJMZWdzXCI+TGVnczwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiQXJtc1wiPkFybXM8L29wdGlvbj5cbiAgICAgICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICAgIDwvR3JvdXA+XG5cbiAgICAgICAgICAgIDxHcm91cD5cbiAgICAgICAgICAgICAgICA8bGFiZWw+IEV4ZXJjaXNlIDQgOiA8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRXhlcmNpc2UgbmFtZS4uLlwiXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJmb3VydGhFeGVyY2lzZU5hbWVcIlxuICAgICAgICAgICAgICAgICAgICByZWY9e3JlZ2lzdGVyfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPHNlbGVjdCBuYW1lPVwiZm91cnRoRXhlcmNpc2VUeXBlXCIgaWQ9XCJleGVyY2lzZV90eXBlXCIgcmVmPXtyZWdpc3Rlcn0+XG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gc2VsZWN0ZWQ9XCJzZWxlY3RlZFwiIGRpc2FibGVkPkV4ZXJjaXNlIFR5cGU8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIkNoZXN0XCI+Q2hlc3Q8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlNob3VsZGVyc1wiPlNob3VsZGVyczwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiQmFja1wiPkJhY2s8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIkxlZ3NcIj5MZWdzPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJBcm1zXCI+QXJtczwvb3B0aW9uPlxuICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgICAgPC9Hcm91cD5cblxuICAgICAgICAgICAgPEdyb3VwPlxuICAgICAgICAgICAgICAgIDxsYWJlbD4gRXhlcmNpc2UgNSA6IDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPElucHV0XG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFeGVyY2lzZSBuYW1lLi4uXCJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cImZpZnRoRXhlcmNpc2VOYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgcmVmPXtyZWdpc3Rlcn1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxzZWxlY3QgbmFtZT1cImZpZnRoRXhlcmNpc2VUeXBlXCIgaWQ9XCJleGVyY2lzZV90eXBlXCIgcmVmPXtyZWdpc3Rlcn0+XG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gc2VsZWN0ZWQ9XCJzZWxlY3RlZFwiIGRpc2FibGVkPkV4ZXJjaXNlIFR5cGU8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIkNoZXN0XCI+Q2hlc3Q8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlNob3VsZGVyc1wiPlNob3VsZGVyczwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiQmFja1wiPkJhY2s8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIkxlZ3NcIj5MZWdzPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJBcm1zXCI+QXJtczwvb3B0aW9uPlxuICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgICAgPC9Hcm91cD5cblxuXG4gICAgICAgICAgICA8U3VibWl0QnRuIHR5cGU9XCJzdWJtaXRcIj5BZGQgcm91dGluZTwvU3VibWl0QnRuPlxuICAgICAgICA8L0Zvcm0+XG4gICAgKVxufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Forms/RoutineForm.js\n");

/***/ })

})