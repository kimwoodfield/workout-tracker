webpackHotUpdate_N_E("pages/register",{

/***/ "./components/Forms/RegisterForm.js":
/*!******************************************!*\
  !*** ./components/Forms/RegisterForm.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_kimwoodfield_Documents_GitHub_workout_tracker_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _SubmitBtn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SubmitBtn */ "./components/Forms/SubmitBtn.js");
/* harmony import */ var _FormInput__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./FormInput */ "./components/Forms/FormInput.js");
/* harmony import */ var _Common_ErrorMessage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Common/ErrorMessage */ "./components/Common/ErrorMessage.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");



var _jsxFileName = "C:\\Users\\kimwoodfield\\Documents\\GitHub\\workout-tracker\\frontend\\components\\Forms\\RegisterForm.js",
    _this = undefined,
    _s = $RefreshSig$();

function _templateObject() {
  var data = Object(C_Users_kimwoodfield_Documents_GitHub_workout_tracker_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n    display: flex;\n    flex-direction: column;\n    width: 18rem;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}






var Form = styled_components__WEBPACK_IMPORTED_MODULE_6__["default"].form(_templateObject());

var RegisterForm = function RegisterForm() {
  _s();

  // Setting the state
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(''),
      email = _useState[0],
      setEmail = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(''),
      fullname = _useState2[0],
      setFullname = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(''),
      username = _useState3[0],
      setUsername = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(''),
      password = _useState4[0],
      setPassword = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])({}),
      emailErr = _useState5[0],
      setEmailErr = _useState5[1];

  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])({}),
      fullnameErr = _useState6[0],
      setFullnameErr = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])({}),
      usernameErr = _useState7[0],
      setUsernameErr = _useState7[1];

  var _useState8 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])({}),
      passwordErr = _useState8[0],
      setPasswordErr = _useState8[1]; // Prevents form from submitting normally on submit


  var onSubmit = function onSubmit(e) {
    e.preventDefault();
    var isValid = formValidation(); // If the data that is input is valid -

    if (isValid) {
      // Send this data to the api
      setEmail('');
      setFullname('');
      setUsername('');
      setPassword('');
    }
  };
  /* Frontend form validation is handled here */


  var formValidation = function formValidation() {
    var emailErr = {};
    var fullnameErr = {};
    var usernameErr = {};
    var passwordErr = {};
    var isValid = true; // Regex to test email against

    var regexp = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/; // If email is left empty or does not match the regex -

    if (email.length === 0) {
      emailErr.emailEmpty = "You must enter an email address.";
    } else if (regexp.test(email) === false) {
      emailErr.emailWrongChars = "This is not a valid email address.";
      isValid = false;
    } // If full name is left empty or first letter of the full name isn't capitalized -


    if (fullname.length === 0) {
      fullnameErr.fullnameEmpty = "You must enter a full name.";
    } else if (fullname[0] !== fullname[0].toUpperCase()) {
      fullnameErr.startsLowercase = "First letter of full name needs to be capitalized.";
      isValid = false;
    } // If username is left empty or length of the username is less than five characters -


    if (username.length === 0) {
      usernameErr.usernameEmpty = "You must enter a username.";
    } else if (username.length < 5) {
      usernameErr.usernameShort = "Username needs to be 5 or more characters.";
      isValid = false;
    } // If the length of the password is less than three characters -


    if (password.length === 0) {
      passwordErr.passwordEmpty = "You must enter a password.";
    } else if (password.length < 3) {
      passwordErr.passwordShort = "Password needs to be 3 or more characters.";
      isValid = false;
    } // Update error objects


    setEmailErr(emailErr);
    setFullnameErr(fullnameErr);
    setUsernameErr(usernameErr);
    setPasswordErr(passwordErr);
    return isValid;
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("form", {
    onSubmit: onSubmit,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_FormInput__WEBPACK_IMPORTED_MODULE_4__["default"], {
      type: "text",
      placeholder: "Email",
      value: email,
      onChange: function onChange(e) {
        setEmail(e.target.value);
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 20
    }, _this), Object.keys(emailErr).map(function (key) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Common_ErrorMessage__WEBPACK_IMPORTED_MODULE_5__["default"], {
        children: emailErr[key]
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 101,
        columnNumber: 31
      }, _this);
    }), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_FormInput__WEBPACK_IMPORTED_MODULE_4__["default"], {
      type: "text",
      placeholder: "Full name",
      value: fullname,
      onChange: function onChange(e) {
        setFullname(e.target.value);
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 20
    }, _this), Object.keys(fullnameErr).map(function (key) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Common_ErrorMessage__WEBPACK_IMPORTED_MODULE_5__["default"], {
        children: fullnameErr[key]
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 110,
        columnNumber: 31
      }, _this);
    }), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_FormInput__WEBPACK_IMPORTED_MODULE_4__["default"], {
      type: "text",
      placeholder: "Username",
      value: username,
      onChange: function onChange(e) {
        setUsername(e.target.value);
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 21
    }, _this), Object.keys(usernameErr).map(function (key) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Common_ErrorMessage__WEBPACK_IMPORTED_MODULE_5__["default"], {
        children: usernameErr[key]
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 119,
        columnNumber: 31
      }, _this);
    }), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_FormInput__WEBPACK_IMPORTED_MODULE_4__["default"], {
      type: "password",
      placeholder: "Password",
      value: password,
      onChange: function onChange(e) {
        setPassword(e.target.value);
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 21
    }, _this), Object.keys(passwordErr).map(function (key) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Common_ErrorMessage__WEBPACK_IMPORTED_MODULE_5__["default"], {
        children: passwordErr[key]
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 128,
        columnNumber: 31
      }, _this);
    }), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_SubmitBtn__WEBPACK_IMPORTED_MODULE_3__["default"], {
      type: "submit",
      children: "Sign up"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 13
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 93,
    columnNumber: 9
  }, _this);
};

_s(RegisterForm, "XNb9uxBLtTF0PFOzJhJivmDnwVA=");

_c = RegisterForm;
/* harmony default export */ __webpack_exports__["default"] = (RegisterForm);

var _c;

$RefreshReg$(_c, "RegisterForm");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Gb3Jtcy9SZWdpc3RlckZvcm0uanMiXSwibmFtZXMiOlsiRm9ybSIsInN0eWxlZCIsImZvcm0iLCJSZWdpc3RlckZvcm0iLCJ1c2VTdGF0ZSIsImVtYWlsIiwic2V0RW1haWwiLCJmdWxsbmFtZSIsInNldEZ1bGxuYW1lIiwidXNlcm5hbWUiLCJzZXRVc2VybmFtZSIsInBhc3N3b3JkIiwic2V0UGFzc3dvcmQiLCJlbWFpbEVyciIsInNldEVtYWlsRXJyIiwiZnVsbG5hbWVFcnIiLCJzZXRGdWxsbmFtZUVyciIsInVzZXJuYW1lRXJyIiwic2V0VXNlcm5hbWVFcnIiLCJwYXNzd29yZEVyciIsInNldFBhc3N3b3JkRXJyIiwib25TdWJtaXQiLCJlIiwicHJldmVudERlZmF1bHQiLCJpc1ZhbGlkIiwiZm9ybVZhbGlkYXRpb24iLCJyZWdleHAiLCJsZW5ndGgiLCJlbWFpbEVtcHR5IiwidGVzdCIsImVtYWlsV3JvbmdDaGFycyIsImZ1bGxuYW1lRW1wdHkiLCJ0b1VwcGVyQ2FzZSIsInN0YXJ0c0xvd2VyY2FzZSIsInVzZXJuYW1lRW1wdHkiLCJ1c2VybmFtZVNob3J0IiwicGFzc3dvcmRFbXB0eSIsInBhc3N3b3JkU2hvcnQiLCJ0YXJnZXQiLCJ2YWx1ZSIsIk9iamVjdCIsImtleXMiLCJtYXAiLCJrZXkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsSUFBSSxHQUFHQyx5REFBTSxDQUFDQyxJQUFWLG1CQUFWOztBQU1BLElBQU1DLFlBQVksR0FBRyxTQUFmQSxZQUFlLEdBQU07QUFBQTs7QUFFdkI7QUFGdUIsa0JBR0dDLHNEQUFRLENBQUMsRUFBRCxDQUhYO0FBQUEsTUFHaEJDLEtBSGdCO0FBQUEsTUFHVEMsUUFIUzs7QUFBQSxtQkFJU0Ysc0RBQVEsQ0FBQyxFQUFELENBSmpCO0FBQUEsTUFJ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RDtBQUFBLGtCQUFleEIsV0FBVyxDQUFDd0IsR0FBRDtBQUExQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBQVA7QUFDSCxLQUZDLENBbENiLGVBcUNJLHFFQUFDLGtEQUFEO0FBQVcsVUFBSSxFQUFDLFFBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBckNKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKO0FBeUNILENBeEhEOztHQUFNeEMsWTs7S0FBQUEsWTtBQTBIU0EsMkVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcmVnaXN0ZXIuMmYzZDYyMGQ2ZTJlMzFhMDcxZjMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgU3VibWl0QnRuIGZyb20gJy4vU3VibWl0QnRuJ1xyXG5pbXBvcnQgSW5wdXQgZnJvbSAnLi9Gb3JtSW5wdXQnXHJcbmltcG9ydCBFcnJvck1lc3NhZ2UgZnJvbSAnLi4vQ29tbW9uL0Vycm9yTWVzc2FnZSdcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcclxuXHJcbmNvbnN0IEZvcm0gPSBzdHlsZWQuZm9ybWBcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgd2lkdGg6IDE4cmVtO1xyXG5gXHJcblxyXG5jb25zdCBSZWdpc3RlckZvcm0gPSAoKSA9PiB7XHJcblxyXG4gICAgLy8gU2V0dGluZyB0aGUgc3RhdGVcclxuICAgIGNvbnN0IFtlbWFpbCwgc2V0RW1haWxdID0gdXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgW2Z1bGxuYW1lLCBzZXRGdWxsbmFtZV0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCBbdXNlcm5hbWUsIHNldFVzZXJuYW1lXSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIGNvbnN0IFtwYXNzd29yZCwgc2V0UGFzc3dvcmRdID0gdXNlU3RhdGUoJycpO1xyXG5cclxuICAgIGNvbnN0IFtlbWFpbEVyciwgc2V0RW1haWxFcnJdID0gdXNlU3RhdGUoe30pO1xyXG4gICAgY29uc3QgW2Z1bGxuYW1lRXJyLCBzZXRGdWxsbmFtZUVycl0gPSB1c2VTdGF0ZSh7fSk7XHJcbiAgICBjb25zdCBbdXNlcm5hbWVFcnIsIHNldFVzZXJuYW1lRXJyXSA9IHVzZVN0YXRlKHt9KTtcclxuICAgIGNvbnN0IFtwYXNzd29yZEVyciwgc2V0UGFzc3dvcmRFcnJdID0gdXNlU3RhdGUoe30pO1xyXG5cclxuXHJcbiAgICAvLyBQcmV2ZW50cyBmb3JtIGZyb20gc3VibWl0dGluZyBub3JtYWxseSBvbiBzdWJtaXRcclxuICAgIGNvbnN0IG9uU3VibWl0ID0gKGUpID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgY29uc3QgaXNWYWxpZCA9IGZvcm1WYWxpZGF0aW9uKCk7XHJcbiAgICAgICAgLy8gSWYgdGhlIGRhdGEgdGhhdCBpcyBpbnB1dCBpcyB2YWxpZCAtXHJcbiAgICAgICAgaWYgKGlzVmFsaWQpIHtcclxuICAgICAgICAgICAgLy8gU2VuZCB0aGlzIGRhdGEgdG8gdGhlIGFwaVxyXG4gICAgICAgICAgICBzZXRFbWFpbCgnJyk7XHJcbiAgICAgICAgICAgIHNldEZ1bGxuYW1lKCcnKTtcclxuICAgICAgICAgICAgc2V0VXNlcm5hbWUoJycpO1xyXG4gICAgICAgICAgICBzZXRQYXNzd29yZCgnJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qIEZyb250ZW5kIGZvcm0gdmFsaWRhdGlvbiBpcyBoYW5kbGVkIGhlcmUgKi9cclxuICAgIGNvbnN0IGZvcm1WYWxpZGF0aW9uID0gKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGVtYWlsRXJyID0ge307XHJcbiAgICAgICAgY29uc3QgZnVsbG5hbWVFcnIgPSB7fTtcclxuICAgICAgICBjb25zdCB1c2VybmFtZUVyciA9IHt9O1xyXG4gICAgICAgIGNvbnN0IHBhc3N3b3JkRXJyID0ge307XHJcbiAgICAgICAgbGV0IGlzVmFsaWQgPSB0cnVlO1xyXG5cclxuICAgICAgICAvLyBSZWdleCB0byB0ZXN0IGVtYWlsIGFnYWluc3RcclxuICAgICAgICBsZXQgcmVnZXhwID0gL14oKFtePD4oKVtcXF1cXFxcLiw7Olxcc0BcIl0rKFxcLltePD4oKVtcXF1cXFxcLiw7Olxcc0BcIl0rKSopfChcIi4rXCIpKUAoKFxcW1swLTldezEsM31cXC5bMC05XXsxLDN9XFwuWzAtOV17MSwzfVxcLlswLTldezEsM31dKXwoKFthLXpBLVpcXC0wLTldK1xcLikrW2EtekEtWl17Mix9KSkkLztcclxuXHJcbiAgICAgICAgLy8gSWYgZW1haWwgaXMgbGVmdCBlbXB0eSBvciBkb2VzIG5vdCBtYXRjaCB0aGUgcmVnZXggLVxyXG4gICAgICAgIGlmIChlbWFpbC5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgZW1haWxFcnIuZW1haWxFbXB0eSA9IFwiWW91IG11c3QgZW50ZXIgYW4gZW1haWwgYWRkcmVzcy5cIjtcclxuICAgICAgICB9IGVsc2UgaWYgKHJlZ2V4cC50ZXN0KGVtYWlsKSA9PT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgZW1haWxFcnIuZW1haWxXcm9uZ0NoYXJzID0gXCJUaGlzIGlzIG5vdCBhIHZhbGlkIGVtYWlsIGFkZHJlc3MuXCI7XHJcbiAgICAgICAgICAgIGlzVmFsaWQgPSBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIElmIGZ1bGwgbmFtZSBpcyBsZWZ0IGVtcHR5IG9yIGZpcnN0IGxldHRlciBvZiB0aGUgZnVsbCBuYW1lIGlzbid0IGNhcGl0YWxpemVkIC1cclxuICAgICAgICBpZiAoZnVsbG5hbWUubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgIGZ1bGxuYW1lRXJyLmZ1bGxuYW1lRW1wdHkgPSBcIllvdSBtdXN0IGVudGVyIGEgZnVsbCBuYW1lLlwiO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoZnVsbG5hbWVbMF0gIT09IGZ1bGxuYW1lWzBdLnRvVXBwZXJDYXNlKCkpIHtcclxuICAgICAgICAgICAgZnVsbG5hbWVFcnIuc3RhcnRzTG93ZXJjYXNlID0gXCJGaXJzdCBsZXR0ZXIgb2YgZnVsbCBuYW1lIG5lZWRzIHRvIGJlIGNhcGl0YWxpemVkLlwiO1xyXG4gICAgICAgICAgICBpc1ZhbGlkID0gZmFsc2U7XHJcbiAgICAgICAgfSBcclxuXHJcbiAgICAgICAgLy8gSWYgdXNlcm5hbWUgaXMgbGVmdCBlbXB0eSBvciBsZW5ndGggb2YgdGhlIHVzZXJuYW1lIGlzIGxlc3MgdGhhbiBmaXZlIGNoYXJhY3RlcnMgLVxyXG4gICAgICAgIGlmICh1c2VybmFtZS5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgdXNlcm5hbWVFcnIudXNlcm5hbWVFbXB0eSA9IFwiWW91IG11c3QgZW50ZXIgYSB1c2VybmFtZS5cIjtcclxuICAgICAgICB9IGVsc2UgaWYgKHVzZXJuYW1lLmxlbmd0aCA8IDUpIHtcclxuICAgICAgICAgICAgdXNlcm5hbWVFcnIudXNlcm5hbWVTaG9ydCA9IFwiVXNlcm5hbWUgbmVlZHMgdG8gYmUgNSBvciBtb3JlIGNoYXJhY3RlcnMuXCI7XHJcbiAgICAgICAgICAgIGlzVmFsaWQgPSBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIElmIHRoZSBsZW5ndGggb2YgdGhlIHBhc3N3b3JkIGlzIGxlc3MgdGhhbiB0aHJlZSBjaGFyYWN0ZXJzIC1cclxuICAgICAgICBpZiAocGFzc3dvcmQubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgIHBhc3N3b3JkRXJyLnBhc3N3b3JkRW1wdHkgPSBcIllvdSBtdXN0IGVudGVyIGEgcGFzc3dvcmQuXCI7XHJcbiAgICAgICAgfSBlbHNlIGlmIChwYXNzd29yZC5sZW5ndGggPCAzKSB7XHJcbiAgICAgICAgICAgIHBhc3N3b3JkRXJyLnBhc3N3b3JkU2hvcnQgPSBcIlBhc3N3b3JkIG5lZWRzIHRvIGJlIDMgb3IgbW9yZSBjaGFyYWN0ZXJzLlwiO1xyXG4gICAgICAgICAgICBpc1ZhbGlkID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBVcGRhdGUgZXJyb3Igb2JqZWN0c1xyXG4gICAgICAgIHNldEVtYWlsRXJyKGVtYWlsRXJyKTtcclxuICAgICAgICBzZXRGdWxsbmFtZUVycihmdWxsbmFtZUVycik7XHJcbiAgICAgICAgc2V0VXNlcm5hbWVFcnIodXNlcm5hbWVFcnIpO1xyXG4gICAgICAgIHNldFBhc3N3b3JkRXJyKHBhc3N3b3JkRXJyKTtcclxuICAgICAgICByZXR1cm4gaXNWYWxpZDtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxmb3JtIG9uU3VibWl0PXtvblN1Ym1pdH0+XHJcbiAgICAgICAgICAgIHsvKiA8bGFiZWwgZm9yPVwiZW1haWxcIj5FbWFpbCA6IDwvbGFiZWw+ICovfVxyXG4gICAgICAgICAgICA8SW5wdXQgdHlwZT1cInRleHRcIiBcclxuICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW1haWxcIlxyXG4gICAgICAgICAgICAgICAgICAgdmFsdWU9e2VtYWlsfVxyXG4gICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7c2V0RW1haWwoZS50YXJnZXQudmFsdWUpfX0vPlxyXG4gICAgICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICB7T2JqZWN0LmtleXMoZW1haWxFcnIpLm1hcCgoa2V5KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxFcnJvck1lc3NhZ2U+e2VtYWlsRXJyW2tleV19PC9FcnJvck1lc3NhZ2U+XHJcbiAgICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgey8qIDxsYWJlbCBmb3I9XCJmdWxsbmFtZVwiPkZ1bGwgbmFtZSA6IDwvbGFiZWw+ICovfVxyXG4gICAgICAgICAgICA8SW5wdXQgdHlwZT1cInRleHRcIiBcclxuICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRnVsbCBuYW1lXCJcclxuICAgICAgICAgICAgICAgICAgIHZhbHVlPXtmdWxsbmFtZX1cclxuICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge3NldEZ1bGxuYW1lKGUudGFyZ2V0LnZhbHVlKX19Lz5cclxuICAgICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAge09iamVjdC5rZXlzKGZ1bGxuYW1lRXJyKS5tYXAoKGtleSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8RXJyb3JNZXNzYWdlPntmdWxsbmFtZUVycltrZXldfTwvRXJyb3JNZXNzYWdlPlxyXG4gICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgIHsvKiA8bGFiZWwgZm9yPVwidXNlcm5hbWVcIj5Vc2VybmFtZSA6IDwvbGFiZWw+ICovfVxyXG4gICAgICAgICAgICA8SW5wdXQgdHlwZT1cInRleHRcIiBcclxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlVzZXJuYW1lXCJcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dXNlcm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7c2V0VXNlcm5hbWUoZS50YXJnZXQudmFsdWUpfX0vPlxyXG4gICAgICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgIHtPYmplY3Qua2V5cyh1c2VybmFtZUVycikubWFwKChrZXkpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPEVycm9yTWVzc2FnZT57dXNlcm5hbWVFcnJba2V5XX08L0Vycm9yTWVzc2FnZT5cclxuICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICB7LyogPGxhYmVsIGZvcj1cInBhc3N3b3JkXCI+UGFzc3dvcmQgOiA8L2xhYmVsPiAqL31cclxuICAgICAgICAgICAgPElucHV0IHR5cGU9XCJwYXNzd29yZFwiIFxyXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiUGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtwYXNzd29yZH1cclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtzZXRQYXNzd29yZChlLnRhcmdldC52YWx1ZSl9fS8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAge09iamVjdC5rZXlzKHBhc3N3b3JkRXJyKS5tYXAoKGtleSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8RXJyb3JNZXNzYWdlPntwYXNzd29yZEVycltrZXldfTwvRXJyb3JNZXNzYWdlPlxyXG4gICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgIDxTdWJtaXRCdG4gdHlwZT1cInN1Ym1pdFwiPlNpZ24gdXA8L1N1Ym1pdEJ0bj5cclxuICAgICAgICA8L2Zvcm0+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJlZ2lzdGVyRm9ybVxyXG4iXSwic291cmNlUm9vdCI6IiJ9