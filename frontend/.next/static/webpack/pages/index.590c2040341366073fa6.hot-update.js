webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Forms/LoginForm.js":
/*!***************************************!*\
  !*** ./components/Forms/LoginForm.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _SubmitBtn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SubmitBtn */ \"./components/Forms/SubmitBtn.js\");\n/* harmony import */ var _FormInput__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./FormInput */ \"./components/Forms/FormInput.js\");\n/* harmony import */ var _Common_ErrorMessage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Common/ErrorMessage */ \"./components/Common/ErrorMessage.js\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);\n\n\nvar _jsxFileName = \"/Users/kimwoodfield/Documents/GitHub/workout-tracker/frontend/components/Forms/LoginForm.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\nvar Form = styled_components__WEBPACK_IMPORTED_MODULE_5__[\"default\"].form.withConfig({\n  displayName: \"LoginForm__Form\",\n  componentId: \"sc-1udqss8-0\"\n})([\"display:flex;flex-direction:column;width:18rem;\"]);\n_c = Form;\n\nvar LoginForm = function LoginForm() {\n  _s();\n\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_6__[\"useRouter\"])(); // Setting the state\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(''),\n      username = _useState[0],\n      setUsername = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(''),\n      password = _useState2[0],\n      setPassword = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])({}),\n      usernameErr = _useState3[0],\n      setUsernameErr = _useState3[1];\n\n  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])({}),\n      passwordErr = _useState4[0],\n      setPasswordErr = _useState4[1];\n\n  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(\"\"),\n      invalidUser = _useState5[0],\n      setInvalidUser = _useState5[1];\n\n  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false),\n      submitting = _useState6[0],\n      setSubmitting = _useState6[1]; // Handles the form submission\n\n\n  var onSubmit = function onSubmit(e) {\n    e.preventDefault();\n    setSubmitting(true);\n    var isValid = formValidation(); // If the input data is valid -\n\n    if (isValid) {\n      // Send this data to the api\n      fetch('http://localhost:3000/login', {\n        method: 'POST',\n        headers: {\n          'Content-Type': 'application/json'\n        },\n        body: JSON.stringify({\n          username: username,\n          password: password\n        }) // credentials: \"include\"\n\n      }).then(function (res) {\n        return res.json();\n      }) // parse the response as JSON\n      .then(function (data) {\n        // Request sent.\n        // If username issue\n        if (data.status === 401) {\n          setInvalidUser(data.msg);\n          e.preventDefault();\n        } // If password issue\n\n\n        if (data.ok === false) {\n          // if the response is a 401, block the submission..\n          console.log(data);\n          console.log(data.msg);\n          e.preventDefault();\n        } else {\n          // if the response is not a 401, allow the submission.\n          console.log(data.msg);\n          alert(data.msg);\n          setUsername('');\n          setPassword('');\n          router.push('/log');\n        }\n      })[\"catch\"](function (err) {\n        // Fetch couldn't send the request.\n        console.log('fetch failed');\n      });\n    } else {\n      e.preventDefault();\n    }\n  };\n  /* Frontend form validation is handled here */\n\n\n  var formValidation = function formValidation() {\n    var usernameErr = {};\n    var passwordErr = {};\n    var isValid = true; // If username is left empty or length of the username is less than five characters -\n\n    if (username.length === 0) {\n      usernameErr.usernameEmpty = \"You must enter a username.\";\n    } else if (username.length < 5) {\n      usernameErr.usernameShort = \"Username needs to be 5 or more characters.\";\n      isValid = false;\n    } // If the length of the password is less than three characters -\n\n\n    if (password.length === 0) {\n      passwordErr.passwordEmpty = \"You must enter a password.\";\n    } else if (password.length < 4) {\n      passwordErr.passwordShort = \"Password needs to be 4 or more characters.\";\n      isValid = false;\n    } // Update error objects\n\n\n    setUsernameErr(usernameErr);\n    setPasswordErr(passwordErr);\n    return isValid;\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Form, {\n    onSubmit: onSubmit,\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_FormInput__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n      type: \"text\",\n      placeholder: \"Username\",\n      value: username,\n      onChange: function onChange(e) {\n        setUsername(e.target.value);\n      }\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 112,\n      columnNumber: 13\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_Common_ErrorMessage__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n      children: invalidUser\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 116,\n      columnNumber: 21\n    }, _this), Object.keys(usernameErr).map(function (key) {\n      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_Common_ErrorMessage__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n        children: usernameErr[key]\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 118,\n        columnNumber: 31\n      }, _this);\n    }), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_FormInput__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n      type: \"password\",\n      placeholder: \"Password\",\n      value: password,\n      onChange: function onChange(e) {\n        setPassword(e.target.value);\n      }\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 121,\n      columnNumber: 13\n    }, _this), Object.keys(passwordErr).map(function (key) {\n      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_Common_ErrorMessage__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n        children: passwordErr[key]\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 126,\n        columnNumber: 31\n      }, _this);\n    }), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_SubmitBtn__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n      type: \"submit\",\n      children: \"Log In\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 128,\n      columnNumber: 13\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 110,\n    columnNumber: 9\n  }, _this);\n};\n\n_s(LoginForm, \"KU0cH1VCDVckF8Xyu/NL0GlBUhM=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_6__[\"useRouter\"]];\n});\n\n_c2 = LoginForm;\n/* harmony default export */ __webpack_exports__[\"default\"] = (LoginForm);\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"Form\");\n$RefreshReg$(_c2, \"LoginForm\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Gb3Jtcy9Mb2dpbkZvcm0uanM/NzYwMCJdLCJuYW1lcyI6WyJGb3JtIiwic3R5bGVkIiwiZm9ybSIsIkxvZ2luRm9ybSIsInJvdXRlciIsInVzZVJvdXRlciIsInVzZVN0YXRlIiwidXNlcm5hbWUiLCJzZXRVc2VybmFtZSIsInBhc3N3b3JkIiwic2V0UGFzc3dvcmQiLCJ1c2VybmFtZUVyciIsInNldFVzZXJuYW1lRXJyIiwicGFzc3dvcmRFcnIiLCJzZXRQYXNzd29yZEVyciIsImludmFsaWRVc2VyIiwic2V0SW52YWxpZFVzZXIiLCJzdWJtaXR0aW5nIiwic2V0U3VibWl0dGluZyIsIm9uU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0IiwiaXNWYWxpZCIsImZvcm1WYWxpZGF0aW9uIiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJ0aGVuIiwicmVzIiwianNvbiIsImRhdGEiLCJzdGF0dXMiLCJtc2ciLCJvayIsImNvbnNvbGUiLCJsb2ciLCJhbGVydCIsInB1c2giLCJlcnIiLCJsZW5ndGgiLCJ1c2VybmFtZUVtcHR5IiwidXNlcm5hbWVTaG9ydCIsInBhc3N3b3JkRW1wdHkiLCJwYXNzd29yZFNob3J0IiwidGFyZ2V0IiwidmFsdWUiLCJPYmplY3QiLCJrZXlzIiwibWFwIiwia2V5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLElBQUksR0FBR0MseURBQU0sQ0FBQ0MsSUFBVjtBQUFBO0FBQUE7QUFBQSx1REFBVjtLQUFNRixJOztBQU1OLElBQU1HLFNBQVMsR0FBRyxTQUFaQSxTQUFZLEdBQU07QUFBQTs7QUFFcEIsTUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4QixDQUZvQixDQUlwQjs7QUFKb0Isa0JBS1lDLHNEQUFRLENBQUMsRUFBRCxDQUxwQjtBQUFB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QUFDLFVBRHBCO0FBRVEsV0FBSyxFQUFFM0MsUUFGZjtBQUdRLGNBQVEsRUFBRSxrQkFBQ1csQ0FBRCxFQUFPO0FBQUNWLG1CQUFXLENBQUNVLENBQUMsQ0FBQzJCLE1BQUYsQ0FBU0MsS0FBVixDQUFYO0FBQTRCO0FBSHREO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFYSixFQWVhQyxNQUFNLENBQUNDLElBQVAsQ0FBWXJDLFdBQVosRUFBeUJzQyxHQUF6QixDQUE2QixVQUFDQyxHQUFELEVBQVM7QUFDcEMsMEJBQU8scUVBQUMsNERBQUQ7QUFBQSxrQkFBZXZDLFdBQVcsQ0FBQ3VDLEdBQUQ7QUFBMUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUFQO0FBQ0gsS0FGQyxDQWZiLGVBa0JJLHFFQUFDLGtEQUFEO0FBQVcsVUFBSSxFQUFDLFFBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBbEJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKO0FBc0JILENBckhEOztHQUFNakQsUztVQUVhRSxxRDs7O01BRmJGLFM7QUF1SFNBLHdFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9Gb3Jtcy9Mb2dpbkZvcm0uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBTdWJtaXRCdG4gZnJvbSAnLi9TdWJtaXRCdG4nXG5pbXBvcnQgSW5wdXQgZnJvbSAnLi9Gb3JtSW5wdXQnXG5pbXBvcnQgRXJyb3JNZXNzYWdlIGZyb20gJy4uL0NvbW1vbi9FcnJvck1lc3NhZ2UnXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXG5cbmNvbnN0IEZvcm0gPSBzdHlsZWQuZm9ybWBcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgd2lkdGg6IDE4cmVtO1xuYFxuXG5jb25zdCBMb2dpbkZvcm0gPSAoKSA9PiB7XG5cbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxuXG4gICAgLy8gU2V0dGluZyB0aGUgc3RhdGVcbiAgICBjb25zdCBbdXNlcm5hbWUsIHNldFVzZXJuYW1lXSA9IHVzZVN0YXRlKCcnKTtcbiAgICBjb25zdCBbcGFzc3dvcmQsIHNldFBhc3N3b3JkXSA9IHVzZVN0YXRlKCcnKTtcblxuICAgIGNvbnN0IFt1c2VybmFtZUVyciwgc2V0VXNlcm5hbWVFcnJdID0gdXNlU3RhdGUoe30pO1xuICAgIGNvbnN0IFtwYXNzd29yZEVyciwgc2V0UGFzc3dvcmRFcnJdID0gdXNlU3RhdGUoe30pO1xuXG4gICAgY29uc3QgW2ludmFsaWRVc2VyLCBzZXRJbnZhbGlkVXNlcl0gPSB1c2VTdGF0ZShcIlwiKTtcblxuXG5cbiAgICBjb25zdCBbIHN1Ym1pdHRpbmcsIHNldFN1Ym1pdHRpbmcgXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICAgIC8vIEhhbmRsZXMgdGhlIGZvcm0gc3VibWlzc2lvblxuICAgIGNvbnN0IG9uU3VibWl0ID0gKGUpID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBzZXRTdWJtaXR0aW5nKHRydWUpO1xuICAgICAgICBjb25zdCBpc1ZhbGlkID0gZm9ybVZhbGlkYXRpb24oKTtcbiAgICAgICAgLy8gSWYgdGhlIGlucHV0IGRhdGEgaXMgdmFsaWQgLVxuICAgICAgICBpZiAoaXNWYWxpZCkge1xuICAgICAgICAgICAgLy8gU2VuZCB0aGlzIGRhdGEgdG8gdGhlIGFwaVxuICAgICAgICAgICAgZmV0Y2goJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9sb2dpbicsIHtcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgdXNlcm5hbWUsIHBhc3N3b3JkIH0pXG4gICAgICAgICAgICAgICAgLy8gY3JlZGVudGlhbHM6IFwiaW5jbHVkZVwiXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpIC8vIHBhcnNlIHRoZSByZXNwb25zZSBhcyBKU09OXG4gICAgICAgICAgICAudGhlbihkYXRhID0+IHtcbiAgICAgICAgICAgICAgICAvLyBSZXF1ZXN0IHNlbnQuXG5cbiAgICAgICAgICAgICAgICAvLyBJZiB1c2VybmFtZSBpc3N1ZVxuICAgICAgICAgICAgICAgIGlmIChkYXRhLnN0YXR1cyA9PT0gNDAxKSB7XG4gICAgICAgICAgICAgICAgICAgIHNldEludmFsaWRVc2VyKGRhdGEubXNnKTtcbiAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBJZiBwYXNzd29yZCBpc3N1ZVxuXG4gICAgICAgICAgICAgICAgaWYgKGRhdGEub2sgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGlmIHRoZSByZXNwb25zZSBpcyBhIDQwMSwgYmxvY2sgdGhlIHN1Ym1pc3Npb24uLlxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YS5tc2cpO1xuICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gaWYgdGhlIHJlc3BvbnNlIGlzIG5vdCBhIDQwMSwgYWxsb3cgdGhlIHN1Ym1pc3Npb24uXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEubXNnKTtcbiAgICAgICAgICAgICAgICAgICAgYWxlcnQoZGF0YS5tc2cpO1xuICAgICAgICAgICAgICAgICAgICBzZXRVc2VybmFtZSgnJyk7XG4gICAgICAgICAgICAgICAgICAgIHNldFBhc3N3b3JkKCcnKTtcbiAgICAgICAgICAgICAgICAgICAgcm91dGVyLnB1c2goJy9sb2cnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKGVyciA9PiB7XG4gICAgICAgICAgICAgICAgLy8gRmV0Y2ggY291bGRuJ3Qgc2VuZCB0aGUgcmVxdWVzdC5cbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnZmV0Y2ggZmFpbGVkJyk7XG4gICAgICAgICAgICB9KVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyogRnJvbnRlbmQgZm9ybSB2YWxpZGF0aW9uIGlzIGhhbmRsZWQgaGVyZSAqL1xuICAgIGNvbnN0IGZvcm1WYWxpZGF0aW9uID0gKCkgPT4ge1xuICAgICAgICBjb25zdCB1c2VybmFtZUVyciA9IHt9O1xuICAgICAgICBjb25zdCBwYXNzd29yZEVyciA9IHt9O1xuICAgICAgICBsZXQgaXNWYWxpZCA9IHRydWU7XG5cbiAgICAgICAgLy8gSWYgdXNlcm5hbWUgaXMgbGVmdCBlbXB0eSBvciBsZW5ndGggb2YgdGhlIHVzZXJuYW1lIGlzIGxlc3MgdGhhbiBmaXZlIGNoYXJhY3RlcnMgLVxuICAgICAgICBpZiAodXNlcm5hbWUubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICB1c2VybmFtZUVyci51c2VybmFtZUVtcHR5ID0gXCJZb3UgbXVzdCBlbnRlciBhIHVzZXJuYW1lLlwiO1xuICAgICAgICB9IGVsc2UgaWYgKHVzZXJuYW1lLmxlbmd0aCA8IDUpIHtcbiAgICAgICAgICAgIHVzZXJuYW1lRXJyLnVzZXJuYW1lU2hvcnQgPSBcIlVzZXJuYW1lIG5lZWRzIHRvIGJlIDUgb3IgbW9yZSBjaGFyYWN0ZXJzLlwiO1xuICAgICAgICAgICAgaXNWYWxpZCA9IGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gSWYgdGhlIGxlbmd0aCBvZiB0aGUgcGFzc3dvcmQgaXMgbGVzcyB0aGFuIHRocmVlIGNoYXJhY3RlcnMgLVxuICAgICAgICBpZiAocGFzc3dvcmQubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICBwYXNzd29yZEVyci5wYXNzd29yZEVtcHR5ID0gXCJZb3UgbXVzdCBlbnRlciBhIHBhc3N3b3JkLlwiO1xuICAgICAgICB9IGVsc2UgaWYgKHBhc3N3b3JkLmxlbmd0aCA8IDQpIHtcbiAgICAgICAgICAgIHBhc3N3b3JkRXJyLnBhc3N3b3JkU2hvcnQgPSBcIlBhc3N3b3JkIG5lZWRzIHRvIGJlIDQgb3IgbW9yZSBjaGFyYWN0ZXJzLlwiO1xuICAgICAgICAgICAgaXNWYWxpZCA9IGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gVXBkYXRlIGVycm9yIG9iamVjdHNcbiAgICAgICAgc2V0VXNlcm5hbWVFcnIodXNlcm5hbWVFcnIpO1xuICAgICAgICBzZXRQYXNzd29yZEVycihwYXNzd29yZEVycik7XG4gICAgICAgIHJldHVybiBpc1ZhbGlkO1xuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxGb3JtIG9uU3VibWl0PXtvblN1Ym1pdH0+XG4gICAgICAgICAgICB7LyogPGxhYmVsIGZvcj1cInVzZXJuYW1lXCI+VXNlcm5hbWUgOiA8L2xhYmVsPiAqL31cbiAgICAgICAgICAgIDxJbnB1dCB0eXBlPVwidGV4dFwiIFxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlVzZXJuYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3VzZXJuYW1lfVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtzZXRVc2VybmFtZShlLnRhcmdldC52YWx1ZSl9fS8+XG4gICAgICAgICAgICAgICAgICAgIDxFcnJvck1lc3NhZ2U+e2ludmFsaWRVc2VyfTwvRXJyb3JNZXNzYWdlPlxuICAgICAgICAgICAgICAgICAgICB7T2JqZWN0LmtleXModXNlcm5hbWVFcnIpLm1hcCgoa2V5KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8RXJyb3JNZXNzYWdlPnt1c2VybmFtZUVycltrZXldfTwvRXJyb3JNZXNzYWdlPlxuICAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgey8qIDxsYWJlbCBmb3I9XCJwYXNzd29yZFwiPlBhc3N3b3JkIDogPC9sYWJlbD4gKi99XG4gICAgICAgICAgICA8SW5wdXQgdHlwZT1cInBhc3N3b3JkXCIgXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiUGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17cGFzc3dvcmR9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge3NldFBhc3N3b3JkKGUudGFyZ2V0LnZhbHVlKX19Lz5cbiAgICAgICAgICAgICAgICAgICAge09iamVjdC5rZXlzKHBhc3N3b3JkRXJyKS5tYXAoKGtleSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPEVycm9yTWVzc2FnZT57cGFzc3dvcmRFcnJba2V5XX08L0Vycm9yTWVzc2FnZT5cbiAgICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgIDxTdWJtaXRCdG4gdHlwZT1cInN1Ym1pdFwiPkxvZyBJbjwvU3VibWl0QnRuPlxuICAgICAgICA8L0Zvcm0+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBMb2dpbkZvcm1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Forms/LoginForm.js\n");

/***/ })

})