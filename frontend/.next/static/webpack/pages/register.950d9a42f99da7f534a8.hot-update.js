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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _SubmitBtn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SubmitBtn */ "./components/Forms/SubmitBtn.js");
/* harmony import */ var _FormInput__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./FormInput */ "./components/Forms/FormInput.js");
/* harmony import */ var _Common_ErrorMessage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Common/ErrorMessage */ "./components/Common/ErrorMessage.js");


var _jsxFileName = "C:\\Users\\kimwoodfield\\Documents\\GitHub\\workout-tracker\\frontend\\components\\Forms\\RegisterForm.js",
    _this = undefined,
    _s = $RefreshSig$();






var RegisterForm = function RegisterForm() {
  _s();

  // Setting the state
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(''),
      email = _useState[0],
      setEmail = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(''),
      fullname = _useState2[0],
      setFullname = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(''),
      username = _useState3[0],
      setUsername = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(''),
      password = _useState4[0],
      setPassword = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({}),
      emailErr = _useState5[0],
      setEmailErr = _useState5[1];

  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({}),
      fullnameErr = _useState6[0],
      setFullnameErr = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({}),
      usernameErr = _useState7[0],
      setUsernameErr = _useState7[1];

  var _useState8 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({}),
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
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_FormInput__WEBPACK_IMPORTED_MODULE_3__["default"], {
      type: "text",
      placeholder: "Email",
      value: email,
      onChange: function onChange(e) {
        setEmail(e.target.value);
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 20
    }, _this), Object.keys(emailErr).map(function (key) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Common_ErrorMessage__WEBPACK_IMPORTED_MODULE_4__["default"], {
        children: emailErr[key]
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 94,
        columnNumber: 31
      }, _this);
    }), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
      "for": "fullname",
      children: "Full name : "
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
      type: "text",
      placeholder: "Full name",
      value: fullname,
      onChange: function onChange(e) {
        setFullname(e.target.value);
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 20
    }, _this), Object.keys(fullnameErr).map(function (key) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Common_ErrorMessage__WEBPACK_IMPORTED_MODULE_4__["default"], {
        children: fullnameErr[key]
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 103,
        columnNumber: 31
      }, _this);
    }), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
      "for": "username",
      children: "Username : "
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
      type: "text",
      placeholder: "Username",
      value: username,
      onChange: function onChange(e) {
        setUsername(e.target.value);
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 21
    }, _this), Object.keys(usernameErr).map(function (key) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Common_ErrorMessage__WEBPACK_IMPORTED_MODULE_4__["default"], {
        children: usernameErr[key]
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 112,
        columnNumber: 31
      }, _this);
    }), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
      "for": "password",
      children: "Password : "
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
      type: "password",
      placeholder: "Password",
      value: password,
      onChange: function onChange(e) {
        setPassword(e.target.value);
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 21
    }, _this), Object.keys(passwordErr).map(function (key) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Common_ErrorMessage__WEBPACK_IMPORTED_MODULE_4__["default"], {
        children: passwordErr[key]
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 121,
        columnNumber: 31
      }, _this);
    }), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_SubmitBtn__WEBPACK_IMPORTED_MODULE_2__["default"], {
      type: "submit",
      children: "Sign up"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 13
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 86,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Gb3Jtcy9SZWdpc3RlckZvcm0uanMiXSwibmFtZXMiOlsiUmVnaXN0ZXJGb3JtIiwidXNlU3RhdGUiLCJlbWFpbCIsInNldEVtYWlsIiwiZnVsbG5hbWUiLCJzZXRGdWxsbmFtZSIsInVzZXJuYW1lIiwic2V0VXNlcm5hbWUiLCJwYXNzd29yZCIsInNldFBhc3N3b3JkIiwiZW1haWxFcnIiLCJzZXRFbWFpbEVyciIsImZ1bGxuYW1lRXJyIiwic2V0RnVsbG5hbWVFcnIiLCJ1c2VybmFtZUVyciIsInNldFVzZXJuYW1lRXJyIiwicGFzc3dvcmRFcnIiLCJzZXRQYXNzd29yZEVyciIsIm9uU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0IiwiaXNWYWxpZCIsImZvcm1WYWxpZGF0aW9uIiwicmVnZXhwIiwibGVuZ3RoIiwiZW1haWxFbXB0eSIsInRlc3QiLCJlbWFpbFdyb25nQ2hhcnMiLCJmdWxsbmFtZUVtcHR5IiwidG9VcHBlckNhc2UiLCJzdGFydHNMb3dlcmNhc2UiLCJ1c2VybmFtZUVtcHR5IiwidXNlcm5hbWVTaG9ydCIsInBhc3N3b3JkRW1wdHkiLCJwYXNzd29yZFNob3J0IiwidGFyZ2V0IiwidmFsdWUiLCJPYmplY3QiLCJrZXlzIiwibWFwIiwia2V5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxZQUFZLEdBQUcsU0FBZkEsWUFBZSxHQUFNO0FBQUE7O0FBRXZCO0FBRnVCLGtCQUdHQyxzREFBUSxDQUFDLEVBQUQsQ0FIWDtBQUFBLE1BR2hCQyxLQUhnQjtBQUFBLE1BR1RDLFFBSFM7O0FBQUEsbUJBSVNGLHNEQUFRLENBQUMsRUFBRCxDQUpqQjtBQUFBLE1BSWhCRyxRQUpnQjtBQUFBLE1BSU5DLFdBSk07O0FBQUEsbUJBS1NKLHNEQUFRLENBQUMsRUFBRCxDQUxqQjtBQUFBLE1BS2hCSyxRQUxnQjtBQUFBLE1B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ekIsQ0FBNkIsVUFBQ0MsR0FBRCxFQUFTO0FBQ3BDLDBCQUFPLHFFQUFDLDREQUFEO0FBQUEsa0JBQWV4QixXQUFXLENBQUN3QixHQUFEO0FBQTFCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFBUDtBQUNILEtBRkMsQ0FsQ2IsZUFxQ0kscUVBQUMsa0RBQUQ7QUFBVyxVQUFJLEVBQUMsUUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFyQ0o7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREo7QUF5Q0gsQ0F4SEQ7O0dBQU14QyxZOztLQUFBQSxZO0FBMEhTQSwyRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9yZWdpc3Rlci45NTBkOWE0MmY5OWRhN2Y1MzRhOC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBTdWJtaXRCdG4gZnJvbSAnLi9TdWJtaXRCdG4nXHJcbmltcG9ydCBJbnB1dCBmcm9tICcuL0Zvcm1JbnB1dCdcclxuaW1wb3J0IEVycm9yTWVzc2FnZSBmcm9tICcuLi9Db21tb24vRXJyb3JNZXNzYWdlJ1xyXG5cclxuY29uc3QgUmVnaXN0ZXJGb3JtID0gKCkgPT4ge1xyXG5cclxuICAgIC8vIFNldHRpbmcgdGhlIHN0YXRlXHJcbiAgICBjb25zdCBbZW1haWwsIHNldEVtYWlsXSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIGNvbnN0IFtmdWxsbmFtZSwgc2V0RnVsbG5hbWVdID0gdXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgW3VzZXJuYW1lLCBzZXRVc2VybmFtZV0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCBbcGFzc3dvcmQsIHNldFBhc3N3b3JkXSA9IHVzZVN0YXRlKCcnKTtcclxuXHJcbiAgICBjb25zdCBbZW1haWxFcnIsIHNldEVtYWlsRXJyXSA9IHVzZVN0YXRlKHt9KTtcclxuICAgIGNvbnN0IFtmdWxsbmFtZUVyciwgc2V0RnVsbG5hbWVFcnJdID0gdXNlU3RhdGUoe30pO1xyXG4gICAgY29uc3QgW3VzZXJuYW1lRXJyLCBzZXRVc2VybmFtZUVycl0gPSB1c2VTdGF0ZSh7fSk7XHJcbiAgICBjb25zdCBbcGFzc3dvcmRFcnIsIHNldFBhc3N3b3JkRXJyXSA9IHVzZVN0YXRlKHt9KTtcclxuXHJcblxyXG4gICAgLy8gUHJldmVudHMgZm9ybSBmcm9tIHN1Ym1pdHRpbmcgbm9ybWFsbHkgb24gc3VibWl0XHJcbiAgICBjb25zdCBvblN1Ym1pdCA9IChlKSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGNvbnN0IGlzVmFsaWQgPSBmb3JtVmFsaWRhdGlvbigpO1xyXG4gICAgICAgIC8vIElmIHRoZSBkYXRhIHRoYXQgaXMgaW5wdXQgaXMgdmFsaWQgLVxyXG4gICAgICAgIGlmIChpc1ZhbGlkKSB7XHJcbiAgICAgICAgICAgIC8vIFNlbmQgdGhpcyBkYXRhIHRvIHRoZSBhcGlcclxuICAgICAgICAgICAgc2V0RW1haWwoJycpO1xyXG4gICAgICAgICAgICBzZXRGdWxsbmFtZSgnJyk7XHJcbiAgICAgICAgICAgIHNldFVzZXJuYW1lKCcnKTtcclxuICAgICAgICAgICAgc2V0UGFzc3dvcmQoJycpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKiBGcm9udGVuZCBmb3JtIHZhbGlkYXRpb24gaXMgaGFuZGxlZCBoZXJlICovXHJcbiAgICBjb25zdCBmb3JtVmFsaWRhdGlvbiA9ICgpID0+IHtcclxuICAgICAgICBjb25zdCBlbWFpbEVyciA9IHt9O1xyXG4gICAgICAgIGNvbnN0IGZ1bGxuYW1lRXJyID0ge307XHJcbiAgICAgICAgY29uc3QgdXNlcm5hbWVFcnIgPSB7fTtcclxuICAgICAgICBjb25zdCBwYXNzd29yZEVyciA9IHt9O1xyXG4gICAgICAgIGxldCBpc1ZhbGlkID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgLy8gUmVnZXggdG8gdGVzdCBlbWFpbCBhZ2FpbnN0XHJcbiAgICAgICAgbGV0IHJlZ2V4cCA9IC9eKChbXjw+KClbXFxdXFxcXC4sOzpcXHNAXCJdKyhcXC5bXjw+KClbXFxdXFxcXC4sOzpcXHNAXCJdKykqKXwoXCIuK1wiKSlAKChcXFtbMC05XXsxLDN9XFwuWzAtOV17MSwzfVxcLlswLTldezEsM31cXC5bMC05XXsxLDN9XSl8KChbYS16QS1aXFwtMC05XStcXC4pK1thLXpBLVpdezIsfSkpJC87XHJcblxyXG4gICAgICAgIC8vIElmIGVtYWlsIGlzIGxlZnQgZW1wdHkgb3IgZG9lcyBub3QgbWF0Y2ggdGhlIHJlZ2V4IC1cclxuICAgICAgICBpZiAoZW1haWwubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgIGVtYWlsRXJyLmVtYWlsRW1wdHkgPSBcIllvdSBtdXN0IGVudGVyIGFuIGVtYWlsIGFkZHJlc3MuXCI7XHJcbiAgICAgICAgfSBlbHNlIGlmIChyZWdleHAudGVzdChlbWFpbCkgPT09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgIGVtYWlsRXJyLmVtYWlsV3JvbmdDaGFycyA9IFwiVGhpcyBpcyBub3QgYSB2YWxpZCBlbWFpbCBhZGRyZXNzLlwiO1xyXG4gICAgICAgICAgICBpc1ZhbGlkID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBJZiBmdWxsIG5hbWUgaXMgbGVmdCBlbXB0eSBvciBmaXJzdCBsZXR0ZXIgb2YgdGhlIGZ1bGwgbmFtZSBpc24ndCBjYXBpdGFsaXplZCAtXHJcbiAgICAgICAgaWYgKGZ1bGxuYW1lLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICBmdWxsbmFtZUVyci5mdWxsbmFtZUVtcHR5ID0gXCJZb3UgbXVzdCBlbnRlciBhIGZ1bGwgbmFtZS5cIjtcclxuICAgICAgICB9IGVsc2UgaWYgKGZ1bGxuYW1lWzBdICE9PSBmdWxsbmFtZVswXS50b1VwcGVyQ2FzZSgpKSB7XHJcbiAgICAgICAgICAgIGZ1bGxuYW1lRXJyLnN0YXJ0c0xvd2VyY2FzZSA9IFwiRmlyc3QgbGV0dGVyIG9mIGZ1bGwgbmFtZSBuZWVkcyB0byBiZSBjYXBpdGFsaXplZC5cIjtcclxuICAgICAgICAgICAgaXNWYWxpZCA9IGZhbHNlO1xyXG4gICAgICAgIH0gXHJcblxyXG4gICAgICAgIC8vIElmIHVzZXJuYW1lIGlzIGxlZnQgZW1wdHkgb3IgbGVuZ3RoIG9mIHRoZSB1c2VybmFtZSBpcyBsZXNzIHRoYW4gZml2ZSBjaGFyYWN0ZXJzIC1cclxuICAgICAgICBpZiAodXNlcm5hbWUubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgIHVzZXJuYW1lRXJyLnVzZXJuYW1lRW1wdHkgPSBcIllvdSBtdXN0IGVudGVyIGEgdXNlcm5hbWUuXCI7XHJcbiAgICAgICAgfSBlbHNlIGlmICh1c2VybmFtZS5sZW5ndGggPCA1KSB7XHJcbiAgICAgICAgICAgIHVzZXJuYW1lRXJyLnVzZXJuYW1lU2hvcnQgPSBcIlVzZXJuYW1lIG5lZWRzIHRvIGJlIDUgb3IgbW9yZSBjaGFyYWN0ZXJzLlwiO1xyXG4gICAgICAgICAgICBpc1ZhbGlkID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBJZiB0aGUgbGVuZ3RoIG9mIHRoZSBwYXNzd29yZCBpcyBsZXNzIHRoYW4gdGhyZWUgY2hhcmFjdGVycyAtXHJcbiAgICAgICAgaWYgKHBhc3N3b3JkLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICBwYXNzd29yZEVyci5wYXNzd29yZEVtcHR5ID0gXCJZb3UgbXVzdCBlbnRlciBhIHBhc3N3b3JkLlwiO1xyXG4gICAgICAgIH0gZWxzZSBpZiAocGFzc3dvcmQubGVuZ3RoIDwgMykge1xyXG4gICAgICAgICAgICBwYXNzd29yZEVyci5wYXNzd29yZFNob3J0ID0gXCJQYXNzd29yZCBuZWVkcyB0byBiZSAzIG9yIG1vcmUgY2hhcmFjdGVycy5cIjtcclxuICAgICAgICAgICAgaXNWYWxpZCA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gVXBkYXRlIGVycm9yIG9iamVjdHNcclxuICAgICAgICBzZXRFbWFpbEVycihlbWFpbEVycik7XHJcbiAgICAgICAgc2V0RnVsbG5hbWVFcnIoZnVsbG5hbWVFcnIpO1xyXG4gICAgICAgIHNldFVzZXJuYW1lRXJyKHVzZXJuYW1lRXJyKTtcclxuICAgICAgICBzZXRQYXNzd29yZEVycihwYXNzd29yZEVycik7XHJcbiAgICAgICAgcmV0dXJuIGlzVmFsaWQ7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8Zm9ybSBvblN1Ym1pdD17b25TdWJtaXR9PlxyXG4gICAgICAgICAgICB7LyogPGxhYmVsIGZvcj1cImVtYWlsXCI+RW1haWwgOiA8L2xhYmVsPiAqL31cclxuICAgICAgICAgICAgPElucHV0IHR5cGU9XCJ0ZXh0XCIgXHJcbiAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVtYWlsXCJcclxuICAgICAgICAgICAgICAgICAgIHZhbHVlPXtlbWFpbH1cclxuICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge3NldEVtYWlsKGUudGFyZ2V0LnZhbHVlKX19Lz5cclxuICAgICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAge09iamVjdC5rZXlzKGVtYWlsRXJyKS5tYXAoKGtleSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8RXJyb3JNZXNzYWdlPntlbWFpbEVycltrZXldfTwvRXJyb3JNZXNzYWdlPlxyXG4gICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJmdWxsbmFtZVwiPkZ1bGwgbmFtZSA6IDwvbGFiZWw+XHJcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIFxyXG4gICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJGdWxsIG5hbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgdmFsdWU9e2Z1bGxuYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7c2V0RnVsbG5hbWUoZS50YXJnZXQudmFsdWUpfX0vPlxyXG4gICAgICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICB7T2JqZWN0LmtleXMoZnVsbG5hbWVFcnIpLm1hcCgoa2V5KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxFcnJvck1lc3NhZ2U+e2Z1bGxuYW1lRXJyW2tleV19PC9FcnJvck1lc3NhZ2U+XHJcbiAgICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgPGxhYmVsIGZvcj1cInVzZXJuYW1lXCI+VXNlcm5hbWUgOiA8L2xhYmVsPlxyXG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBcclxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlVzZXJuYW1lXCJcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dXNlcm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7c2V0VXNlcm5hbWUoZS50YXJnZXQudmFsdWUpfX0vPlxyXG4gICAgICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgIHtPYmplY3Qua2V5cyh1c2VybmFtZUVycikubWFwKChrZXkpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPEVycm9yTWVzc2FnZT57dXNlcm5hbWVFcnJba2V5XX08L0Vycm9yTWVzc2FnZT5cclxuICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICA8bGFiZWwgZm9yPVwicGFzc3dvcmRcIj5QYXNzd29yZCA6IDwvbGFiZWw+XHJcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicGFzc3dvcmRcIiBcclxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17cGFzc3dvcmR9XHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7c2V0UGFzc3dvcmQoZS50YXJnZXQudmFsdWUpfX0vPlxyXG4gICAgICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgIHtPYmplY3Qua2V5cyhwYXNzd29yZEVycikubWFwKChrZXkpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPEVycm9yTWVzc2FnZT57cGFzc3dvcmRFcnJba2V5XX08L0Vycm9yTWVzc2FnZT5cclxuICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICA8U3VibWl0QnRuIHR5cGU9XCJzdWJtaXRcIj5TaWduIHVwPC9TdWJtaXRCdG4+XHJcbiAgICAgICAgPC9mb3JtPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSZWdpc3RlckZvcm1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==