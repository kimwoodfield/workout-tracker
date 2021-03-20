webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Forms/LoginForm.js":
/*!***************************************!*\
  !*** ./components/Forms/LoginForm.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _SubmitBtn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SubmitBtn */ \"./components/Forms/SubmitBtn.js\");\n/* harmony import */ var _FormInput__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./FormInput */ \"./components/Forms/FormInput.js\");\n/* harmony import */ var _Common_ErrorMessage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Common/ErrorMessage */ \"./components/Common/ErrorMessage.js\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);\n\n\nvar _jsxFileName = \"/Users/kimwoodfield/Documents/GitHub/workout-tracker/frontend/components/Forms/LoginForm.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\nvar Form = styled_components__WEBPACK_IMPORTED_MODULE_5__[\"default\"].form.withConfig({\n  displayName: \"LoginForm__Form\",\n  componentId: \"sc-1udqss8-0\"\n})([\"display:flex;flex-direction:column;width:18rem;\"]);\n_c = Form;\n\nvar LoginForm = function LoginForm() {\n  _s();\n\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_6__[\"useRouter\"])(); // Setting the state\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(''),\n      username = _useState[0],\n      setUsername = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(''),\n      password = _useState2[0],\n      setPassword = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])({}),\n      usernameErr = _useState3[0],\n      setUsernameErr = _useState3[1];\n\n  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])({}),\n      passwordErr = _useState4[0],\n      setPasswordErr = _useState4[1];\n\n  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(\"\"),\n      invalidUser = _useState5[0],\n      setInvalidUser = _useState5[1];\n\n  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(\"\"),\n      invalidPass = _useState6[0],\n      setInvalidPass = _useState6[1];\n\n  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false),\n      submitting = _useState7[0],\n      setSubmitting = _useState7[1]; // Handles the form submission\n\n\n  var onSubmit = function onSubmit(e) {\n    e.preventDefault();\n    setSubmitting(true);\n    var isValid = formValidation(); // If the input data is valid -\n\n    if (isValid) {\n      // Send this data to the api\n      fetch('http://localhost:3000/login', {\n        method: 'POST',\n        headers: {\n          'Content-Type': 'application/json'\n        },\n        credentials: 'include',\n        body: JSON.stringify({\n          username: username,\n          password: password\n        })\n      }).then(function (res) {\n        switch (res.status) {\n          case 400:\n            console.log('400 works');\n            setInvalidPass('There was an error. Please try again later.');\n            break;\n\n          case 401:\n            console.log('401 works');\n            setInvalidPass('Invalid username and password.');\n            break;\n\n          case 429:\n            console.log('429 error');\n            setInvalidPass('Login limit exceeded. Please try again later');\n            break;\n\n          case 201:\n            router.push('/log');\n            break;\n        }\n      })[\"catch\"](function (err) {\n        // Fetch couldn't send the request.\n        // 500 Error\n        console.log('fetch failed');\n      });\n    } else {\n      e.preventDefault();\n    }\n  };\n  /* Frontend form validation is handled here */\n\n\n  var formValidation = function formValidation() {\n    var usernameErr = {};\n    var passwordErr = {};\n    var isValid = true; // Update error objects\n\n    setUsernameErr(usernameErr);\n    setPasswordErr(passwordErr);\n    return isValid;\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Form, {\n    onSubmit: onSubmit,\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_FormInput__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n      type: \"text\",\n      placeholder: \"Username\",\n      value: username,\n      onChange: function onChange(e) {\n        setUsername(e.target.value);\n      }\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 93,\n      columnNumber: 13\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_Common_ErrorMessage__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n      children: invalidUser\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 97,\n      columnNumber: 21\n    }, _this), Object.keys(usernameErr).map(function (key) {\n      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_Common_ErrorMessage__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n        children: usernameErr[key]\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 99,\n        columnNumber: 31\n      }, _this);\n    }), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_FormInput__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n      type: \"password\",\n      placeholder: \"Password\",\n      value: password,\n      onChange: function onChange(e) {\n        setPassword(e.target.value);\n      }\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 102,\n      columnNumber: 13\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_Common_ErrorMessage__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n      children: invalidPass\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 106,\n      columnNumber: 21\n    }, _this), Object.keys(passwordErr).map(function (key) {\n      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_Common_ErrorMessage__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n        children: passwordErr[key]\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 108,\n        columnNumber: 31\n      }, _this);\n    }), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_SubmitBtn__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n      type: \"submit\",\n      children: \"Log In\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 110,\n      columnNumber: 13\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 91,\n    columnNumber: 9\n  }, _this);\n};\n\n_s(LoginForm, \"omEQ4loA30C7kp3P6//KxSXj8eo=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_6__[\"useRouter\"]];\n});\n\n_c2 = LoginForm;\n/* harmony default export */ __webpack_exports__[\"default\"] = (LoginForm);\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"Form\");\n$RefreshReg$(_c2, \"LoginForm\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Gb3Jtcy9Mb2dpbkZvcm0uanM/NzYwMCJdLCJuYW1lcyI6WyJGb3JtIiwic3R5bGVkIiwiZm9ybSIsIkxvZ2luRm9ybSIsInJvdXRlciIsInVzZVJvdXRlciIsInVzZVN0YXRlIiwidXNlcm5hbWUiLCJzZXRVc2VybmFtZSIsInBhc3N3b3JkIiwic2V0UGFzc3dvcmQiLCJ1c2VybmFtZUVyciIsInNldFVzZXJuYW1lRXJyIiwicGFzc3dvcmRFcnIiLCJzZXRQYXNzd29yZEVyciIsImludmFsaWRVc2VyIiwic2V0SW52YWxpZFVzZXIiLCJpbnZhbGlkUGFzcyIsInNldEludmFsaWRQYXNzIiwic3VibWl0dGluZyIsInNldFN1Ym1pdHRpbmciLCJvblN1Ym1pdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImlzVmFsaWQiLCJmb3JtVmFsaWRhdGlvbiIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsImNyZWRlbnRpYWxzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJ0aGVuIiwicmVzIiwic3RhdHVzIiwiY29uc29sZSIsImxvZyIsInB1c2giLCJlcnIiLCJ0YXJnZXQiLCJ2YWx1ZSIsIk9iamVjdCIsImtleXMiLCJtYXAiLCJrZXkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsSUFBSSxHQUFHQyx5REFBTSxDQUFDQyxJQUFWO0FBQUE7QUFBQTtBQUFBLHVEQUFWO0tBQU1GLEk7O0FBTU4sSUFBTUcsU0FBUyxHQUFHLFNBQVpBLFNBQVksR0FBTTtBQUFBOztBQUVwQixNQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCLENBRm9CLENBSXBCOztBQUpvQixrQkFLWUMsc0RBQVEsQ0FBQyxFQUFELENBTHBCO0FBQUEsTUFLYkMsUUFMYTtBQUFBLE1BS0hDLFdBTEc7O0FBQUEsbUJBTVlGLHNEQUFRLENBQUMsRUFBRCxDQU5w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O0FBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQU5aLEVBT2EyQixNQUFNLENBQUNDLElBQVAsQ0FBWWhDLFdBQVosRUFBeUJpQyxHQUF6QixDQUE2QixVQUFDQyxHQUFELEVBQVM7QUFDcEMsMEJBQU8scUVBQUMsNERBQUQ7QUFBQSxrQkFBZWxDLFdBQVcsQ0FBQ2tDLEdBQUQ7QUFBMUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUFQO0FBQ0gsS0FGQyxDQVBiLGVBV0kscUVBQUMsa0RBQUQ7QUFBTyxVQUFJLEVBQUMsVUFBWjtBQUNRLGlCQUFXLEVBQUMsVUFEcEI7QUFFUSxXQUFLLEVBQUVwQyxRQUZmO0FBR1EsY0FBUSxFQUFFLGtCQUFDYSxDQUFELEVBQU87QUFBQ1osbUJBQVcsQ0FBQ1ksQ0FBQyxDQUFDa0IsTUFBRixDQUFTQyxLQUFWLENBQVg7QUFBNEI7QUFIdEQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQVhKLGVBZVkscUVBQUMsNERBQUQ7QUFBQSxnQkFBZXhCO0FBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQWZaLEVBZ0JheUIsTUFBTSxDQUFDQyxJQUFQLENBQVk5QixXQUFaLEVBQXlCK0IsR0FBekIsQ0FBNkIsVUFBQ0MsR0FBRCxFQUFTO0FBQ3BDLDBCQUFPLHFFQUFDLDREQUFEO0FBQUEsa0JBQWVoQyxXQUFXLENBQUNnQyxHQUFEO0FBQTFCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFBUDtBQUNILEtBRkMsQ0FoQmIsZUFtQkkscUVBQUMsa0RBQUQ7QUFBVyxVQUFJLEVBQUMsUUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFuQko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREo7QUF1QkgsQ0FuR0Q7O0dBQU0xQyxTO1VBRWFFLHFEOzs7TUFGYkYsUztBQXFHU0Esd0VBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL0Zvcm1zL0xvZ2luRm9ybS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFN1Ym1pdEJ0biBmcm9tICcuL1N1Ym1pdEJ0bidcbmltcG9ydCBJbnB1dCBmcm9tICcuL0Zvcm1JbnB1dCdcbmltcG9ydCBFcnJvck1lc3NhZ2UgZnJvbSAnLi4vQ29tbW9uL0Vycm9yTWVzc2FnZSdcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcblxuY29uc3QgRm9ybSA9IHN0eWxlZC5mb3JtYFxuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICB3aWR0aDogMThyZW07XG5gXG5cbmNvbnN0IExvZ2luRm9ybSA9ICgpID0+IHtcblxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG5cbiAgICAvLyBTZXR0aW5nIHRoZSBzdGF0ZVxuICAgIGNvbnN0IFt1c2VybmFtZSwgc2V0VXNlcm5hbWVdID0gdXNlU3RhdGUoJycpO1xuICAgIGNvbnN0IFtwYXNzd29yZCwgc2V0UGFzc3dvcmRdID0gdXNlU3RhdGUoJycpO1xuXG4gICAgY29uc3QgW3VzZXJuYW1lRXJyLCBzZXRVc2VybmFtZUVycl0gPSB1c2VTdGF0ZSh7fSk7XG4gICAgY29uc3QgW3Bhc3N3b3JkRXJyLCBzZXRQYXNzd29yZEVycl0gPSB1c2VTdGF0ZSh7fSk7XG5cbiAgICBjb25zdCBbaW52YWxpZFVzZXIsIHNldEludmFsaWRVc2VyXSA9IHVzZVN0YXRlKFwiXCIpO1xuICAgIGNvbnN0IFtpbnZhbGlkUGFzcywgc2V0SW52YWxpZFBhc3NdID0gdXNlU3RhdGUoXCJcIik7XG5cblxuXG4gICAgY29uc3QgWyBzdWJtaXR0aW5nLCBzZXRTdWJtaXR0aW5nIF0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgICAvLyBIYW5kbGVzIHRoZSBmb3JtIHN1Ym1pc3Npb25cbiAgICBjb25zdCBvblN1Ym1pdCA9IChlKSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgc2V0U3VibWl0dGluZyh0cnVlKTtcbiAgICAgICAgY29uc3QgaXNWYWxpZCA9IGZvcm1WYWxpZGF0aW9uKCk7XG4gICAgICAgIC8vIElmIHRoZSBpbnB1dCBkYXRhIGlzIHZhbGlkIC1cbiAgICAgICAgaWYgKGlzVmFsaWQpIHtcbiAgICAgICAgICAgIC8vIFNlbmQgdGhpcyBkYXRhIHRvIHRoZSBhcGlcbiAgICAgICAgICAgIGZldGNoKCdodHRwOi8vbG9jYWxob3N0OjMwMDAvbG9naW4nLCB7XG4gICAgICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBjcmVkZW50aWFsczogJ2luY2x1ZGUnLFxuICAgICAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgdXNlcm5hbWUsIHBhc3N3b3JkIH0pXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAgICAgICAgIHN3aXRjaChyZXMuc3RhdHVzKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNDAwOlxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJzQwMCB3b3JrcycpO1xuICAgICAgICAgICAgICAgICAgICAgICAgc2V0SW52YWxpZFBhc3MoJ1RoZXJlIHdhcyBhbiBlcnJvci4gUGxlYXNlIHRyeSBhZ2FpbiBsYXRlci4nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDQwMTpcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCc0MDEgd29ya3MnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldEludmFsaWRQYXNzKCdJbnZhbGlkIHVzZXJuYW1lIGFuZCBwYXNzd29yZC4nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDQyOTpcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCc0MjkgZXJyb3InKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldEludmFsaWRQYXNzKCdMb2dpbiBsaW1pdCBleGNlZWRlZC4gUGxlYXNlIHRyeSBhZ2FpbiBsYXRlcicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMjAxOlxuICAgICAgICAgICAgICAgICAgICAgICAgcm91dGVyLnB1c2goJy9sb2cnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIH19KVxuICAgICAgICAgICAgLmNhdGNoKGVyciA9PiB7XG4gICAgICAgICAgICAgICAgLy8gRmV0Y2ggY291bGRuJ3Qgc2VuZCB0aGUgcmVxdWVzdC5cbiAgICAgICAgICAgICAgICAvLyA1MDAgRXJyb3JcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnZmV0Y2ggZmFpbGVkJyk7XG4gICAgICAgICAgICB9KVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyogRnJvbnRlbmQgZm9ybSB2YWxpZGF0aW9uIGlzIGhhbmRsZWQgaGVyZSAqL1xuICAgIGNvbnN0IGZvcm1WYWxpZGF0aW9uID0gKCkgPT4ge1xuICAgICAgICBjb25zdCB1c2VybmFtZUVyciA9IHt9O1xuICAgICAgICBjb25zdCBwYXNzd29yZEVyciA9IHt9O1xuICAgICAgICBsZXQgaXNWYWxpZCA9IHRydWU7XG5cblxuICAgICAgICAvLyBVcGRhdGUgZXJyb3Igb2JqZWN0c1xuICAgICAgICBzZXRVc2VybmFtZUVycih1c2VybmFtZUVycik7XG4gICAgICAgIHNldFBhc3N3b3JkRXJyKHBhc3N3b3JkRXJyKTtcbiAgICAgICAgcmV0dXJuIGlzVmFsaWQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPEZvcm0gb25TdWJtaXQ9e29uU3VibWl0fT5cbiAgICAgICAgICAgIHsvKiA8bGFiZWwgZm9yPVwidXNlcm5hbWVcIj5Vc2VybmFtZSA6IDwvbGFiZWw+ICovfVxuICAgICAgICAgICAgPElucHV0IHR5cGU9XCJ0ZXh0XCIgXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiVXNlcm5hbWVcIlxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dXNlcm5hbWV9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge3NldFVzZXJuYW1lKGUudGFyZ2V0LnZhbHVlKX19Lz5cbiAgICAgICAgICAgICAgICAgICAgPEVycm9yTWVzc2FnZT57aW52YWxpZFVzZXJ9PC9FcnJvck1lc3NhZ2U+XG4gICAgICAgICAgICAgICAgICAgIHtPYmplY3Qua2V5cyh1c2VybmFtZUVycikubWFwKChrZXkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxFcnJvck1lc3NhZ2U+e3VzZXJuYW1lRXJyW2tleV19PC9FcnJvck1lc3NhZ2U+XG4gICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICB7LyogPGxhYmVsIGZvcj1cInBhc3N3b3JkXCI+UGFzc3dvcmQgOiA8L2xhYmVsPiAqL31cbiAgICAgICAgICAgIDxJbnB1dCB0eXBlPVwicGFzc3dvcmRcIiBcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJQYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtwYXNzd29yZH1cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7c2V0UGFzc3dvcmQoZS50YXJnZXQudmFsdWUpfX0vPlxuICAgICAgICAgICAgICAgICAgICA8RXJyb3JNZXNzYWdlPntpbnZhbGlkUGFzc308L0Vycm9yTWVzc2FnZT5cbiAgICAgICAgICAgICAgICAgICAge09iamVjdC5rZXlzKHBhc3N3b3JkRXJyKS5tYXAoKGtleSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPEVycm9yTWVzc2FnZT57cGFzc3dvcmRFcnJba2V5XX08L0Vycm9yTWVzc2FnZT5cbiAgICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgIDxTdWJtaXRCdG4gdHlwZT1cInN1Ym1pdFwiPkxvZyBJbjwvU3VibWl0QnRuPlxuICAgICAgICA8L0Zvcm0+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBMb2dpbkZvcm1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Forms/LoginForm.js\n");

/***/ })

})