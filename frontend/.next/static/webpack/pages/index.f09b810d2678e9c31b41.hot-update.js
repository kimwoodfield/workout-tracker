webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Forms/LoginForm.js":
/*!***************************************!*\
  !*** ./components/Forms/LoginForm.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _SubmitBtn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SubmitBtn */ \"./components/Forms/SubmitBtn.js\");\n/* harmony import */ var _FormInput__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./FormInput */ \"./components/Forms/FormInput.js\");\n/* harmony import */ var _Common_ErrorMessage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Common/ErrorMessage */ \"./components/Common/ErrorMessage.js\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);\n\n\nvar _jsxFileName = \"/Users/kimwoodfield/Documents/GitHub/workout-tracker/frontend/components/Forms/LoginForm.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\nvar Form = styled_components__WEBPACK_IMPORTED_MODULE_5__[\"default\"].form.withConfig({\n  displayName: \"LoginForm__Form\",\n  componentId: \"sc-1udqss8-0\"\n})([\"display:flex;flex-direction:column;width:18rem;\"]);\n_c = Form;\n\nvar LoginForm = function LoginForm() {\n  _s();\n\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_6__[\"useRouter\"])(); // Setting the state\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(''),\n      username = _useState[0],\n      setUsername = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(''),\n      password = _useState2[0],\n      setPassword = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])({}),\n      usernameErr = _useState3[0],\n      setUsernameErr = _useState3[1];\n\n  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])({}),\n      passwordErr = _useState4[0],\n      setPasswordErr = _useState4[1];\n\n  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(\"\"),\n      invalidUser = _useState5[0],\n      setInvalidUser = _useState5[1];\n\n  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(\"\"),\n      invalidPass = _useState6[0],\n      setInvalidPass = _useState6[1];\n\n  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false),\n      submitting = _useState7[0],\n      setSubmitting = _useState7[1]; // Handles the form submission\n\n\n  var onSubmit = function onSubmit(e) {\n    e.preventDefault();\n    setSubmitting(true);\n    var isValid = formValidation(); // If the input data is valid -\n\n    if (isValid) {\n      // Send this data to the api\n      fetch('http://localhost:3000/login', {\n        method: 'POST',\n        headers: {\n          'Content-Type': 'application/json'\n        },\n        body: JSON.stringify({\n          username: username,\n          password: password\n        }) // credentials: \"include\"\n\n      }).then(function (res) {\n        return res.json();\n      }) // parse the response as JSON\n      .then(function (data) {\n        // Request sent.\n        console.log(data);\n\n        if (data.status == 400) {\n          console.log(data);\n          setInvalidUser(errors.msg);\n          setUsername('');\n          setPassword('');\n          e.preventDefault();\n        } // If username issue\n\n\n        if (data.status === 401 && data.issue === 'Username') {\n          setInvalidUser(data.msg);\n          setUsername('');\n          setPassword('');\n          e.preventDefault();\n        } // If password issue\n\n\n        if (data.status === 401 && data.issue === 'Password') {\n          setInvalidPass(data.msg);\n          setUsername('');\n          setPassword('');\n          e.preventDefault();\n        }\n\n        if (data.ok === false && data.issue === 'doesnt exist') {\n          // if the response is a 401, block the submission..\n          console.log(data);\n          console.log(data.msg);\n          setInvalidUser(data.msg);\n          setUsername('');\n          setPassword('');\n          e.preventDefault();\n        } else if (data.ok === false) {\n          // if the response is a 401, block the submission..\n          console.log(data);\n          console.log(data.msg);\n          setUsername('');\n          setPassword('');\n          e.preventDefault();\n        } else {\n          // if the response is not a 401, allow the submission.\n          console.log(data.msg);\n          alert(data.msg);\n          setUsername('');\n          setPassword('');\n          router.push('/log');\n        }\n      })[\"catch\"](function (err) {\n        // Fetch couldn't send the request.\n        console.log('fetch failed');\n      });\n    } else {\n      e.preventDefault();\n    }\n  };\n  /* Frontend form validation is handled here */\n\n\n  var formValidation = function formValidation() {\n    var usernameErr = {};\n    var passwordErr = {};\n    var isValid = true; // Update error objects\n\n    setUsernameErr(usernameErr);\n    setPasswordErr(passwordErr);\n    return isValid;\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Form, {\n    onSubmit: onSubmit,\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_FormInput__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n      type: \"text\",\n      placeholder: \"Username\",\n      value: username,\n      onChange: function onChange(e) {\n        setUsername(e.target.value);\n      }\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 125,\n      columnNumber: 13\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_Common_ErrorMessage__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n      children: invalidUser\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 129,\n      columnNumber: 21\n    }, _this), Object.keys(usernameErr).map(function (key) {\n      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_Common_ErrorMessage__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n        children: usernameErr[key]\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 131,\n        columnNumber: 31\n      }, _this);\n    }), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_FormInput__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n      type: \"password\",\n      placeholder: \"Password\",\n      value: password,\n      onChange: function onChange(e) {\n        setPassword(e.target.value);\n      }\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 134,\n      columnNumber: 13\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_Common_ErrorMessage__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n      children: invalidPass\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 138,\n      columnNumber: 21\n    }, _this), Object.keys(passwordErr).map(function (key) {\n      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_Common_ErrorMessage__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n        children: passwordErr[key]\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 140,\n        columnNumber: 31\n      }, _this);\n    }), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_SubmitBtn__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n      type: \"submit\",\n      children: \"Log In\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 142,\n      columnNumber: 13\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 123,\n    columnNumber: 9\n  }, _this);\n};\n\n_s(LoginForm, \"omEQ4loA30C7kp3P6//KxSXj8eo=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_6__[\"useRouter\"]];\n});\n\n_c2 = LoginForm;\n/* harmony default export */ __webpack_exports__[\"default\"] = (LoginForm);\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"Form\");\n$RefreshReg$(_c2, \"LoginForm\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Gb3Jtcy9Mb2dpbkZvcm0uanM/NzYwMCJdLCJuYW1lcyI6WyJGb3JtIiwic3R5bGVkIiwiZm9ybSIsIkxvZ2luRm9ybSIsInJvdXRlciIsInVzZVJvdXRlciIsInVzZVN0YXRlIiwidXNlcm5hbWUiLCJzZXRVc2VybmFtZSIsInBhc3N3b3JkIiwic2V0UGFzc3dvcmQiLCJ1c2VybmFtZUVyciIsInNldFVzZXJuYW1lRXJyIiwicGFzc3dvcmRFcnIiLCJzZXRQYXNzd29yZEVyciIsImludmFsaWRVc2VyIiwic2V0SW52YWxpZFVzZXIiLCJpbnZhbGlkUGFzcyIsInNldEludmFsaWRQYXNzIiwic3VibWl0dGluZyIsInNldFN1Ym1pdHRpbmciLCJvblN1Ym1pdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImlzVmFsaWQiLCJmb3JtVmFsaWRhdGlvbiIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwidGhlbiIsInJlcyIsImpzb24iLCJkYXRhIiwiY29uc29sZSIsImxvZyIsInN0YXR1cyIsImVycm9ycyIsIm1zZyIsImlzc3VlIiwib2siLCJhbGVydCIsInB1c2giLCJlcnIiLCJ0YXJnZXQiLCJ2YWx1ZSIsIk9iamVjdCIsImtleXMiLCJtYXAiLCJrZXkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsSUFBSSxHQUFHQyx5REFBTSxDQUFDQyxJQUFWO0FBQUE7QUFBQTtBQUFBLHVEQUFWO0tBQU1GLEk7O0FBTU4sSUFBTUcsU0FBUyxHQUFHLFNBQVpBLFNBQVksR0FBTTtBQUFBOztBQUVwQixNQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCLENBRm9CLENBSXBCOztBQUpvQixrQkFLWUMsc0RBQVEsQ0FBQyxFQUFELENBTHBCO0FBQUEsTUFLYkMsUUFMYTtBQUFBLE1BS0hDLFdB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LFFBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBbkJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKO0FBdUJILENBbklEOztHQUFNaEQsUztVQUVhRSxxRDs7O01BRmJGLFM7QUFxSVNBLHdFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9Gb3Jtcy9Mb2dpbkZvcm0uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBTdWJtaXRCdG4gZnJvbSAnLi9TdWJtaXRCdG4nXG5pbXBvcnQgSW5wdXQgZnJvbSAnLi9Gb3JtSW5wdXQnXG5pbXBvcnQgRXJyb3JNZXNzYWdlIGZyb20gJy4uL0NvbW1vbi9FcnJvck1lc3NhZ2UnXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXG5cbmNvbnN0IEZvcm0gPSBzdHlsZWQuZm9ybWBcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgd2lkdGg6IDE4cmVtO1xuYFxuXG5jb25zdCBMb2dpbkZvcm0gPSAoKSA9PiB7XG5cbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxuXG4gICAgLy8gU2V0dGluZyB0aGUgc3RhdGVcbiAgICBjb25zdCBbdXNlcm5hbWUsIHNldFVzZXJuYW1lXSA9IHVzZVN0YXRlKCcnKTtcbiAgICBjb25zdCBbcGFzc3dvcmQsIHNldFBhc3N3b3JkXSA9IHVzZVN0YXRlKCcnKTtcblxuICAgIGNvbnN0IFt1c2VybmFtZUVyciwgc2V0VXNlcm5hbWVFcnJdID0gdXNlU3RhdGUoe30pO1xuICAgIGNvbnN0IFtwYXNzd29yZEVyciwgc2V0UGFzc3dvcmRFcnJdID0gdXNlU3RhdGUoe30pO1xuXG4gICAgY29uc3QgW2ludmFsaWRVc2VyLCBzZXRJbnZhbGlkVXNlcl0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgICBjb25zdCBbaW52YWxpZFBhc3MsIHNldEludmFsaWRQYXNzXSA9IHVzZVN0YXRlKFwiXCIpO1xuXG5cblxuICAgIGNvbnN0IFsgc3VibWl0dGluZywgc2V0U3VibWl0dGluZyBdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gICAgLy8gSGFuZGxlcyB0aGUgZm9ybSBzdWJtaXNzaW9uXG4gICAgY29uc3Qgb25TdWJtaXQgPSAoZSkgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHNldFN1Ym1pdHRpbmcodHJ1ZSk7XG4gICAgICAgIGNvbnN0IGlzVmFsaWQgPSBmb3JtVmFsaWRhdGlvbigpO1xuICAgICAgICAvLyBJZiB0aGUgaW5wdXQgZGF0YSBpcyB2YWxpZCAtXG4gICAgICAgIGlmIChpc1ZhbGlkKSB7XG4gICAgICAgICAgICAvLyBTZW5kIHRoaXMgZGF0YSB0byB0aGUgYXBpXG4gICAgICAgICAgICBmZXRjaCgnaHR0cDovL2xvY2FsaG9zdDozMDAwL2xvZ2luJywge1xuICAgICAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyB1c2VybmFtZSwgcGFzc3dvcmQgfSlcbiAgICAgICAgICAgICAgICAvLyBjcmVkZW50aWFsczogXCJpbmNsdWRlXCJcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAudGhlbihyZXMgPT4gcmVzLmpzb24oKSkgLy8gcGFyc2UgdGhlIHJlc3BvbnNlIGFzIEpTT05cbiAgICAgICAgICAgIC50aGVuKGRhdGEgPT4ge1xuICAgICAgICAgICAgICAgIC8vIFJlcXVlc3Qgc2VudC5cblxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuXG4gICAgICAgICAgICAgICAgaWYgKGRhdGEuc3RhdHVzID09IDQwMCkge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgc2V0SW52YWxpZFVzZXIoZXJyb3JzLm1zZyk7XG4gICAgICAgICAgICAgICAgICAgIHNldFVzZXJuYW1lKCcnKTtcbiAgICAgICAgICAgICAgICAgICAgc2V0UGFzc3dvcmQoJycpO1xuICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gSWYgdXNlcm5hbWUgaXNzdWVcbiAgICAgICAgICAgICAgICBpZiAoZGF0YS5zdGF0dXMgPT09IDQwMSAmJiBkYXRhLmlzc3VlID09PSAnVXNlcm5hbWUnKSB7XG4gICAgICAgICAgICAgICAgICAgIHNldEludmFsaWRVc2VyKGRhdGEubXNnKTtcbiAgICAgICAgICAgICAgICAgICAgc2V0VXNlcm5hbWUoJycpO1xuICAgICAgICAgICAgICAgICAgICBzZXRQYXNzd29yZCgnJyk7XG4gICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gSWYgcGFzc3dvcmQgaXNzdWVcbiAgICAgICAgICAgICAgICBpZiAoZGF0YS5zdGF0dXMgPT09IDQwMSAmJiBkYXRhLmlzc3VlID09PSAnUGFzc3dvcmQnKSB7XG4gICAgICAgICAgICAgICAgICAgIHNldEludmFsaWRQYXNzKGRhdGEubXNnKTtcbiAgICAgICAgICAgICAgICAgICAgc2V0VXNlcm5hbWUoJycpO1xuICAgICAgICAgICAgICAgICAgICBzZXRQYXNzd29yZCgnJyk7XG4gICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGRhdGEub2sgPT09IGZhbHNlICYmIGRhdGEuaXNzdWUgPT09ICdkb2VzbnQgZXhpc3QnKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGlmIHRoZSByZXNwb25zZSBpcyBhIDQwMSwgYmxvY2sgdGhlIHN1Ym1pc3Npb24uLlxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YS5tc2cpO1xuICAgICAgICAgICAgICAgICAgICBzZXRJbnZhbGlkVXNlcihkYXRhLm1zZyk7XG4gICAgICAgICAgICAgICAgICAgIHNldFVzZXJuYW1lKCcnKTtcbiAgICAgICAgICAgICAgICAgICAgc2V0UGFzc3dvcmQoJycpO1xuICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChkYXRhLm9rID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgICAgICAvLyBpZiB0aGUgcmVzcG9uc2UgaXMgYSA0MDEsIGJsb2NrIHRoZSBzdWJtaXNzaW9uLi5cbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEubXNnKTtcbiAgICAgICAgICAgICAgICAgICAgc2V0VXNlcm5hbWUoJycpO1xuICAgICAgICAgICAgICAgICAgICBzZXRQYXNzd29yZCgnJyk7XG4gICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAvLyBpZiB0aGUgcmVzcG9uc2UgaXMgbm90IGEgNDAxLCBhbGxvdyB0aGUgc3VibWlzc2lvbi5cbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YS5tc2cpO1xuICAgICAgICAgICAgICAgICAgICBhbGVydChkYXRhLm1zZyk7XG4gICAgICAgICAgICAgICAgICAgIHNldFVzZXJuYW1lKCcnKTtcbiAgICAgICAgICAgICAgICAgICAgc2V0UGFzc3dvcmQoJycpO1xuICAgICAgICAgICAgICAgICAgICByb3V0ZXIucHVzaCgnL2xvZycpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgICAgICAgICAvLyBGZXRjaCBjb3VsZG4ndCBzZW5kIHRoZSByZXF1ZXN0LlxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdmZXRjaCBmYWlsZWQnKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKiBGcm9udGVuZCBmb3JtIHZhbGlkYXRpb24gaXMgaGFuZGxlZCBoZXJlICovXG4gICAgY29uc3QgZm9ybVZhbGlkYXRpb24gPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHVzZXJuYW1lRXJyID0ge307XG4gICAgICAgIGNvbnN0IHBhc3N3b3JkRXJyID0ge307XG4gICAgICAgIGxldCBpc1ZhbGlkID0gdHJ1ZTtcblxuXG4gICAgICAgIC8vIFVwZGF0ZSBlcnJvciBvYmplY3RzXG4gICAgICAgIHNldFVzZXJuYW1lRXJyKHVzZXJuYW1lRXJyKTtcbiAgICAgICAgc2V0UGFzc3dvcmRFcnIocGFzc3dvcmRFcnIpO1xuICAgICAgICByZXR1cm4gaXNWYWxpZDtcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8Rm9ybSBvblN1Ym1pdD17b25TdWJtaXR9PlxuICAgICAgICAgICAgey8qIDxsYWJlbCBmb3I9XCJ1c2VybmFtZVwiPlVzZXJuYW1lIDogPC9sYWJlbD4gKi99XG4gICAgICAgICAgICA8SW5wdXQgdHlwZT1cInRleHRcIiBcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJVc2VybmFtZVwiXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXt1c2VybmFtZX1cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7c2V0VXNlcm5hbWUoZS50YXJnZXQudmFsdWUpfX0vPlxuICAgICAgICAgICAgICAgICAgICA8RXJyb3JNZXNzYWdlPntpbnZhbGlkVXNlcn08L0Vycm9yTWVzc2FnZT5cbiAgICAgICAgICAgICAgICAgICAge09iamVjdC5rZXlzKHVzZXJuYW1lRXJyKS5tYXAoKGtleSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPEVycm9yTWVzc2FnZT57dXNlcm5hbWVFcnJba2V5XX08L0Vycm9yTWVzc2FnZT5cbiAgICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgIHsvKiA8bGFiZWwgZm9yPVwicGFzc3dvcmRcIj5QYXNzd29yZCA6IDwvbGFiZWw+ICovfVxuICAgICAgICAgICAgPElucHV0IHR5cGU9XCJwYXNzd29yZFwiIFxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3Bhc3N3b3JkfVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtzZXRQYXNzd29yZChlLnRhcmdldC52YWx1ZSl9fS8+XG4gICAgICAgICAgICAgICAgICAgIDxFcnJvck1lc3NhZ2U+e2ludmFsaWRQYXNzfTwvRXJyb3JNZXNzYWdlPlxuICAgICAgICAgICAgICAgICAgICB7T2JqZWN0LmtleXMocGFzc3dvcmRFcnIpLm1hcCgoa2V5KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8RXJyb3JNZXNzYWdlPntwYXNzd29yZEVycltrZXldfTwvRXJyb3JNZXNzYWdlPlxuICAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgPFN1Ym1pdEJ0biB0eXBlPVwic3VibWl0XCI+TG9nIEluPC9TdWJtaXRCdG4+XG4gICAgICAgIDwvRm9ybT5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IExvZ2luRm9ybVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Forms/LoginForm.js\n");

/***/ })

})