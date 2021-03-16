webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Forms/LoginForm.js":
/*!***************************************!*\
  !*** ./components/Forms/LoginForm.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _SubmitBtn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SubmitBtn */ \"./components/Forms/SubmitBtn.js\");\n/* harmony import */ var _FormInput__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./FormInput */ \"./components/Forms/FormInput.js\");\n/* harmony import */ var _Common_ErrorMessage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Common/ErrorMessage */ \"./components/Common/ErrorMessage.js\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);\n\n\nvar _jsxFileName = \"/Users/kimwoodfield/Documents/GitHub/workout-tracker/frontend/components/Forms/LoginForm.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\nvar Form = styled_components__WEBPACK_IMPORTED_MODULE_5__[\"default\"].form.withConfig({\n  displayName: \"LoginForm__Form\",\n  componentId: \"sc-1udqss8-0\"\n})([\"display:flex;flex-direction:column;width:18rem;\"]);\n_c = Form;\n\nvar LoginForm = function LoginForm() {\n  _s();\n\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_6__[\"useRouter\"])(); // Setting the state\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(''),\n      username = _useState[0],\n      setUsername = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(''),\n      password = _useState2[0],\n      setPassword = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])({}),\n      usernameErr = _useState3[0],\n      setUsernameErr = _useState3[1];\n\n  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])({}),\n      passwordErr = _useState4[0],\n      setPasswordErr = _useState4[1];\n\n  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(\"\"),\n      invalidUser = _useState5[0],\n      setInvalidUser = _useState5[1];\n\n  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(\"\"),\n      invalidPass = _useState6[0],\n      setInvalidPass = _useState6[1];\n\n  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false),\n      submitting = _useState7[0],\n      setSubmitting = _useState7[1]; // Handles the form submission\n\n\n  var onSubmit = function onSubmit(e) {\n    e.preventDefault();\n    setSubmitting(true);\n    var isValid = formValidation(); // If the input data is valid -\n\n    if (isValid) {\n      // Send this data to the api\n      fetch('http://localhost:3000/login', {\n        method: 'POST',\n        headers: {\n          'Content-Type': 'application/json'\n        },\n        body: JSON.stringify({\n          username: username,\n          password: password\n        }) // credentials: \"include\"\n\n      }).then(function (res) {\n        switch (res.status) {\n          case 400:\n            console.log('400 works');\n            break;\n\n          case 204: //             res.json().then((data) => {\n          //             // Request sent.\n          //             console.log(data);\n          //             console.log(data.status);\n          //             if (data.status == 400) {\n          //                 console.log(data);\n          //                 setInvalidUser(errors.msg);\n          //                 setUsername('');\n          //                 setPassword('');\n          //                 e.preventDefault();\n          //             }\n          //             // If username issue\n          //             if (data.status === 401 && data.issue === 'Username') {\n          //                 setInvalidUser(data.msg);\n          //                 setUsername('');\n          //                 setPassword('');\n          //                 e.preventDefault();\n          //             }\n          //             // If password issue\n          //             if (data.status === 401 && data.issue === 'Password') {\n          //                 setInvalidPass(data.msg);\n          //                 setUsername('');\n          //                 setPassword('');\n          //                 e.preventDefault();\n          //             }\n          //             if (data.ok === false && data.issue === 'doesnt exist') {\n          //                 // if the response is a 401, block the submission..\n          //                 console.log(data);\n          //                 console.log(data.msg);\n          //                 setInvalidUser(data.msg);\n          //                 setUsername('');\n          //                 setPassword('');\n          //                 e.preventDefault();\n          //             } else if (data.ok === false) {\n          //                 // if the response is a 401, block the submission..\n          //                 console.log(data);\n          //                 console.log(data.msg);\n          //                 setUsername('');\n          //                 setPassword('');\n          //                 e.preventDefault();\n          //             } else {\n          //                 // if the response is not a 401, allow the submission.\n          //                 console.log(data.msg);\n          //                 alert(data.msg);\n          //                 setUsername('');\n          //                 setPassword('');\n          //                 router.push('/log');\n          //             }\n          // })\n\n        }\n      })[\"catch\"](function (err) {\n        // Fetch couldn't send the request.\n        // 500 Error\n        console.log('fetch failed');\n      });\n    } else {\n      e.preventDefault();\n    }\n  };\n  /* Frontend form validation is handled here */\n\n\n  var formValidation = function formValidation() {\n    var usernameErr = {};\n    var passwordErr = {};\n    var isValid = true; // Update error objects\n\n    setUsernameErr(usernameErr);\n    setPasswordErr(passwordErr);\n    return isValid;\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Form, {\n    onSubmit: onSubmit,\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_FormInput__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n      type: \"text\",\n      placeholder: \"Username\",\n      value: username,\n      onChange: function onChange(e) {\n        setUsername(e.target.value);\n      }\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 134,\n      columnNumber: 13\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_Common_ErrorMessage__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n      children: invalidUser\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 138,\n      columnNumber: 21\n    }, _this), Object.keys(usernameErr).map(function (key) {\n      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_Common_ErrorMessage__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n        children: usernameErr[key]\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 140,\n        columnNumber: 31\n      }, _this);\n    }), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_FormInput__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n      type: \"password\",\n      placeholder: \"Password\",\n      value: password,\n      onChange: function onChange(e) {\n        setPassword(e.target.value);\n      }\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 143,\n      columnNumber: 13\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_Common_ErrorMessage__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n      children: invalidPass\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 147,\n      columnNumber: 21\n    }, _this), Object.keys(passwordErr).map(function (key) {\n      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_Common_ErrorMessage__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n        children: passwordErr[key]\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 149,\n        columnNumber: 31\n      }, _this);\n    }), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_SubmitBtn__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n      type: \"submit\",\n      children: \"Log In\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 151,\n      columnNumber: 13\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 132,\n    columnNumber: 9\n  }, _this);\n};\n\n_s(LoginForm, \"omEQ4loA30C7kp3P6//KxSXj8eo=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_6__[\"useRouter\"]];\n});\n\n_c2 = LoginForm;\n/* harmony default export */ __webpack_exports__[\"default\"] = (LoginForm);\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"Form\");\n$RefreshReg$(_c2, \"LoginForm\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Gb3Jtcy9Mb2dpbkZvcm0uanM/NzYwMCJdLCJuYW1lcyI6WyJGb3JtIiwic3R5bGVkIiwiZm9ybSIsIkxvZ2luRm9ybSIsInJvdXRlciIsInVzZVJvdXRlciIsInVzZVN0YXRlIiwidXNlcm5hbWUiLCJzZXRVc2VybmFtZSIsInBhc3N3b3JkIiwic2V0UGFzc3dvcmQiLCJ1c2VybmFtZUVyciIsInNldFVzZXJuYW1lRXJyIiwicGFzc3dvcmRFcnIiLCJzZXRQYXNzd29yZEVyciIsImludmFsaWRVc2VyIiwic2V0SW52YWxpZFVzZXIiLCJpbnZhbGlkUGFzcyIsInNldEludmFsaWRQYXNzIiwic3VibWl0dGluZyIsInNldFN1Ym1pdHRpbmciLCJvblN1Ym1pdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImlzVmFsaWQiLCJmb3JtVmFsaWRhdGlvbiIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwidGhlbiIsInJlcyIsInN0YXR1cyIsImNvbnNvbGUiLCJsb2ciLCJlcnIiLCJ0YXJnZXQiLCJ2YWx1ZSIsIk9iamVjdCIsImtleXMiLCJtYXAiLCJrZXkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsSUFBSSxHQUFHQyx5REFBTSxDQUFDQyxJQUFWO0FBQUE7QUFBQTtBQUFBLHVEQUFWO0tBQU1GLEk7O0FBTU4sSUFBTUcsU0FBUyxHQUFHLFNBQVpBLFNBQVksR0FBTTtBQUFBOztBQUVwQixNQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCLENBRm9CLENBSXBCOztBQUpvQixrQkFLWUMsc0RBQVEsQ0FBQyxFQUFELENBTHBCO0FBQUEsTUFLYkMsUUFMYTtBQUFBLE1BS0hDLFdBTEc7O0FBQUEsbUJBTVlGLHNEQUFRLENBQUMsRUFBRCxDQU5wQjtBQUFBLE1BTWJHLFFBTmE7QUFB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QUFBQTtBQUFBLGFBTlosRUFPYXlCLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZOUIsV0FBWixFQUF5QitCLEdBQXpCLENBQTZCLFVBQUNDLEdBQUQsRUFBUztBQUNwQywwQkFBTyxxRUFBQyw0REFBRDtBQUFBLGtCQUFlaEMsV0FBVyxDQUFDZ0MsR0FBRDtBQUExQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBQVA7QUFDSCxLQUZDLENBUGIsZUFXSSxxRUFBQyxrREFBRDtBQUFPLFVBQUksRUFBQyxVQUFaO0FBQ1EsaUJBQVcsRUFBQyxVQURwQjtBQUVRLFdBQUssRUFBRWxDLFFBRmY7QUFHUSxjQUFRLEVBQUUsa0JBQUNhLENBQUQsRUFBTztBQUFDWixtQkFBVyxDQUFDWSxDQUFDLENBQUNnQixNQUFGLENBQVNDLEtBQVYsQ0FBWDtBQUE0QjtBQUh0RDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBWEosZUFlWSxxRUFBQyw0REFBRDtBQUFBLGdCQUFldEI7QUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBZlosRUFnQmF1QixNQUFNLENBQUNDLElBQVAsQ0FBWTVCLFdBQVosRUFBeUI2QixHQUF6QixDQUE2QixVQUFDQyxHQUFELEVBQVM7QUFDcEMsMEJBQU8scUVBQUMsNERBQUQ7QUFBQSxrQkFBZTlCLFdBQVcsQ0FBQzhCLEdBQUQ7QUFBMUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUFQO0FBQ0gsS0FGQyxDQWhCYixlQW1CSSxxRUFBQyxrREFBRDtBQUFXLFVBQUksRUFBQyxRQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQW5CSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQXVCSCxDQTVJRDs7R0FBTXhDLFM7VUFFYUUscUQ7OztNQUZiRixTO0FBOElTQSx3RUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvRm9ybXMvTG9naW5Gb3JtLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgU3VibWl0QnRuIGZyb20gJy4vU3VibWl0QnRuJ1xuaW1wb3J0IElucHV0IGZyb20gJy4vRm9ybUlucHV0J1xuaW1wb3J0IEVycm9yTWVzc2FnZSBmcm9tICcuLi9Db21tb24vRXJyb3JNZXNzYWdlJ1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xuXG5jb25zdCBGb3JtID0gc3R5bGVkLmZvcm1gXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIHdpZHRoOiAxOHJlbTtcbmBcblxuY29uc3QgTG9naW5Gb3JtID0gKCkgPT4ge1xuXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcblxuICAgIC8vIFNldHRpbmcgdGhlIHN0YXRlXG4gICAgY29uc3QgW3VzZXJuYW1lLCBzZXRVc2VybmFtZV0gPSB1c2VTdGF0ZSgnJyk7XG4gICAgY29uc3QgW3Bhc3N3b3JkLCBzZXRQYXNzd29yZF0gPSB1c2VTdGF0ZSgnJyk7XG5cbiAgICBjb25zdCBbdXNlcm5hbWVFcnIsIHNldFVzZXJuYW1lRXJyXSA9IHVzZVN0YXRlKHt9KTtcbiAgICBjb25zdCBbcGFzc3dvcmRFcnIsIHNldFBhc3N3b3JkRXJyXSA9IHVzZVN0YXRlKHt9KTtcblxuICAgIGNvbnN0IFtpbnZhbGlkVXNlciwgc2V0SW52YWxpZFVzZXJdID0gdXNlU3RhdGUoXCJcIik7XG4gICAgY29uc3QgW2ludmFsaWRQYXNzLCBzZXRJbnZhbGlkUGFzc10gPSB1c2VTdGF0ZShcIlwiKTtcblxuXG5cbiAgICBjb25zdCBbIHN1Ym1pdHRpbmcsIHNldFN1Ym1pdHRpbmcgXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICAgIC8vIEhhbmRsZXMgdGhlIGZvcm0gc3VibWlzc2lvblxuICAgIGNvbnN0IG9uU3VibWl0ID0gKGUpID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBzZXRTdWJtaXR0aW5nKHRydWUpO1xuICAgICAgICBjb25zdCBpc1ZhbGlkID0gZm9ybVZhbGlkYXRpb24oKTtcbiAgICAgICAgLy8gSWYgdGhlIGlucHV0IGRhdGEgaXMgdmFsaWQgLVxuICAgICAgICBpZiAoaXNWYWxpZCkge1xuICAgICAgICAgICAgLy8gU2VuZCB0aGlzIGRhdGEgdG8gdGhlIGFwaVxuICAgICAgICAgICAgZmV0Y2goJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9sb2dpbicsIHtcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgdXNlcm5hbWUsIHBhc3N3b3JkIH0pXG4gICAgICAgICAgICAgICAgLy8gY3JlZGVudGlhbHM6IFwiaW5jbHVkZVwiXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAgICAgICAgIHN3aXRjaChyZXMuc3RhdHVzKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNDAwOlxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJzQwMCB3b3JrcycpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMjA0OlxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgcmVzLmpzb24oKS50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAvLyBSZXF1ZXN0IHNlbnQuXG4gICAgICAgIFxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XG4gICAgICAgIFxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YS5zdGF0dXMpO1xuICAgICAgICBcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgIGlmIChkYXRhLnN0YXR1cyA9PSA0MDApIHtcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICBzZXRJbnZhbGlkVXNlcihlcnJvcnMubXNnKTtcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICBzZXRVc2VybmFtZSgnJyk7XG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgc2V0UGFzc3dvcmQoJycpO1xuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAvLyBJZiB1c2VybmFtZSBpc3N1ZVxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgaWYgKGRhdGEuc3RhdHVzID09PSA0MDEgJiYgZGF0YS5pc3N1ZSA9PT0gJ1VzZXJuYW1lJykge1xuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgIHNldEludmFsaWRVc2VyKGRhdGEubXNnKTtcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICBzZXRVc2VybmFtZSgnJyk7XG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgc2V0UGFzc3dvcmQoJycpO1xuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vICAgICAgICAgICAgIC8vIElmIHBhc3N3b3JkIGlzc3VlXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICBpZiAoZGF0YS5zdGF0dXMgPT09IDQwMSAmJiBkYXRhLmlzc3VlID09PSAnUGFzc3dvcmQnKSB7XG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgc2V0SW52YWxpZFBhc3MoZGF0YS5tc2cpO1xuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgIHNldFVzZXJuYW1lKCcnKTtcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICBzZXRQYXNzd29yZCgnJyk7XG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgLy8gICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgaWYgKGRhdGEub2sgPT09IGZhbHNlICYmIGRhdGEuaXNzdWUgPT09ICdkb2VzbnQgZXhpc3QnKSB7XG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgLy8gaWYgdGhlIHJlc3BvbnNlIGlzIGEgNDAxLCBibG9jayB0aGUgc3VibWlzc2lvbi4uXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YS5tc2cpO1xuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgIHNldEludmFsaWRVc2VyKGRhdGEubXNnKTtcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICBzZXRVc2VybmFtZSgnJyk7XG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgc2V0UGFzc3dvcmQoJycpO1xuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgIH0gZWxzZSBpZiAoZGF0YS5vayA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAvLyBpZiB0aGUgcmVzcG9uc2UgaXMgYSA0MDEsIGJsb2NrIHRoZSBzdWJtaXNzaW9uLi5cbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhLm1zZyk7XG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgc2V0VXNlcm5hbWUoJycpO1xuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgIHNldFBhc3N3b3JkKCcnKTtcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAvLyAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgIC8vIGlmIHRoZSByZXNwb25zZSBpcyBub3QgYSA0MDEsIGFsbG93IHRoZSBzdWJtaXNzaW9uLlxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEubXNnKTtcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICBhbGVydChkYXRhLm1zZyk7XG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgc2V0VXNlcm5hbWUoJycpO1xuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgIHNldFBhc3N3b3JkKCcnKTtcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICByb3V0ZXIucHVzaCgnL2xvZycpO1xuICAgICAgICAgICAgLy8gICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gfSlcbiAgICAgICAgfX0pXG4gICAgICAgICAgICAuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgICAgICAgICAvLyBGZXRjaCBjb3VsZG4ndCBzZW5kIHRoZSByZXF1ZXN0LlxuICAgICAgICAgICAgICAgIC8vIDUwMCBFcnJvclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdmZXRjaCBmYWlsZWQnKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKiBGcm9udGVuZCBmb3JtIHZhbGlkYXRpb24gaXMgaGFuZGxlZCBoZXJlICovXG4gICAgY29uc3QgZm9ybVZhbGlkYXRpb24gPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHVzZXJuYW1lRXJyID0ge307XG4gICAgICAgIGNvbnN0IHBhc3N3b3JkRXJyID0ge307XG4gICAgICAgIGxldCBpc1ZhbGlkID0gdHJ1ZTtcblxuXG4gICAgICAgIC8vIFVwZGF0ZSBlcnJvciBvYmplY3RzXG4gICAgICAgIHNldFVzZXJuYW1lRXJyKHVzZXJuYW1lRXJyKTtcbiAgICAgICAgc2V0UGFzc3dvcmRFcnIocGFzc3dvcmRFcnIpO1xuICAgICAgICByZXR1cm4gaXNWYWxpZDtcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8Rm9ybSBvblN1Ym1pdD17b25TdWJtaXR9PlxuICAgICAgICAgICAgey8qIDxsYWJlbCBmb3I9XCJ1c2VybmFtZVwiPlVzZXJuYW1lIDogPC9sYWJlbD4gKi99XG4gICAgICAgICAgICA8SW5wdXQgdHlwZT1cInRleHRcIiBcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJVc2VybmFtZVwiXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXt1c2VybmFtZX1cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7c2V0VXNlcm5hbWUoZS50YXJnZXQudmFsdWUpfX0vPlxuICAgICAgICAgICAgICAgICAgICA8RXJyb3JNZXNzYWdlPntpbnZhbGlkVXNlcn08L0Vycm9yTWVzc2FnZT5cbiAgICAgICAgICAgICAgICAgICAge09iamVjdC5rZXlzKHVzZXJuYW1lRXJyKS5tYXAoKGtleSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPEVycm9yTWVzc2FnZT57dXNlcm5hbWVFcnJba2V5XX08L0Vycm9yTWVzc2FnZT5cbiAgICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgIHsvKiA8bGFiZWwgZm9yPVwicGFzc3dvcmRcIj5QYXNzd29yZCA6IDwvbGFiZWw+ICovfVxuICAgICAgICAgICAgPElucHV0IHR5cGU9XCJwYXNzd29yZFwiIFxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3Bhc3N3b3JkfVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtzZXRQYXNzd29yZChlLnRhcmdldC52YWx1ZSl9fS8+XG4gICAgICAgICAgICAgICAgICAgIDxFcnJvck1lc3NhZ2U+e2ludmFsaWRQYXNzfTwvRXJyb3JNZXNzYWdlPlxuICAgICAgICAgICAgICAgICAgICB7T2JqZWN0LmtleXMocGFzc3dvcmRFcnIpLm1hcCgoa2V5KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8RXJyb3JNZXNzYWdlPntwYXNzd29yZEVycltrZXldfTwvRXJyb3JNZXNzYWdlPlxuICAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgPFN1Ym1pdEJ0biB0eXBlPVwic3VibWl0XCI+TG9nIEluPC9TdWJtaXRCdG4+XG4gICAgICAgIDwvRm9ybT5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IExvZ2luRm9ybVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Forms/LoginForm.js\n");

/***/ })

})