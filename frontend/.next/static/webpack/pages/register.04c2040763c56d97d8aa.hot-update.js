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
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
      "for": "email",
      children: "Email : "
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Gb3Jtcy9SZWdpc3RlckZvcm0uanMiXSwibmFtZXMiOlsiUmVnaXN0ZXJGb3JtIiwidXNlU3RhdGUiLCJlbWFpbCIsInNldEVtYWlsIiwiZnVsbG5hbWUiLCJzZXRGdWxsbmFtZSIsInVzZXJuYW1lIiwic2V0VXNlcm5hbWUiLCJwYXNzd29yZCIsInNldFBhc3N3b3JkIiwiZW1haWxFcnIiLCJzZXRFbWFpbEVyciIsImZ1bGxuYW1lRXJyIiwic2V0RnVsbG5hbWVFcnIiLCJ1c2VybmFtZUVyciIsInNldFVzZXJuYW1lRXJyIiwicGFzc3dvcmRFcnIiLCJzZXRQYXNzd29yZEVyciIsIm9uU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0IiwiaXNWYWxpZCIsImZvcm1WYWxpZGF0aW9uIiwicmVnZXhwIiwibGVuZ3RoIiwiZW1haWxFbXB0eSIsInRlc3QiLCJlbWFpbFdyb25nQ2hhcnMiLCJmdWxsbmFtZUVtcHR5IiwidG9VcHBlckNhc2UiLCJzdGFydHNMb3dlcmNhc2UiLCJ1c2VybmFtZUVtcHR5IiwidXNlcm5hbWVTaG9ydCIsInBhc3N3b3JkRW1wdHkiLCJwYXNzd29yZFNob3J0IiwidGFyZ2V0IiwidmFsdWUiLCJPYmplY3QiLCJrZXlzIiwibWFwIiwia2V5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxZQUFZLEdBQUcsU0FBZkEsWUFBZSxHQUFNO0FBQUE7O0FBRXZCO0FBRnVCLGtCQUdHQyxzREFBUSxDQUFDLEVBQUQsQ0FIWDtBQUFBLE1BR2hCQyxLQUhnQjtBQUFBLE1BR1RDLFFBSFM7O0FBQUEsbUJBSVNGLHNEQUFRLENBQUMsRUFBRCxDQUpqQjtBQUFBLE1BSWhCRyxRQUpnQjtBQUFBLE1BSU5DLFdBSk07O0FBQUEsbUJBS1NKLHNEQUFRLENBQUMsRUFBRCxDQUxqQjtBQUFBLE1BS2hCSyxRQUxnQjtBQUFBLE1B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Q2FDLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZdEIsV0FBWixFQUF5QnVCLEdBQXpCLENBQTZCLFVBQUNDLEdBQUQsRUFBUztBQUNwQywwQkFBTyxxRUFBQyw0REFBRDtBQUFBLGtCQUFleEIsV0FBVyxDQUFDd0IsR0FBRDtBQUExQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBQVA7QUFDSCxLQUZDLENBbENiLGVBcUNJLHFFQUFDLGtEQUFEO0FBQVcsVUFBSSxFQUFDLFFBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBckNKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKO0FBeUNILENBeEhEOztHQUFNeEMsWTs7S0FBQUEsWTtBQTBIU0EsMkVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcmVnaXN0ZXIuMDRjMjA0MDc2M2M1NmQ5N2Q4YWEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgU3VibWl0QnRuIGZyb20gJy4vU3VibWl0QnRuJ1xyXG5pbXBvcnQgSW5wdXQgZnJvbSAnLi9Gb3JtSW5wdXQnXHJcbmltcG9ydCBFcnJvck1lc3NhZ2UgZnJvbSAnLi4vQ29tbW9uL0Vycm9yTWVzc2FnZSdcclxuXHJcbmNvbnN0IFJlZ2lzdGVyRm9ybSA9ICgpID0+IHtcclxuXHJcbiAgICAvLyBTZXR0aW5nIHRoZSBzdGF0ZVxyXG4gICAgY29uc3QgW2VtYWlsLCBzZXRFbWFpbF0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCBbZnVsbG5hbWUsIHNldEZ1bGxuYW1lXSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIGNvbnN0IFt1c2VybmFtZSwgc2V0VXNlcm5hbWVdID0gdXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgW3Bhc3N3b3JkLCBzZXRQYXNzd29yZF0gPSB1c2VTdGF0ZSgnJyk7XHJcblxyXG4gICAgY29uc3QgW2VtYWlsRXJyLCBzZXRFbWFpbEVycl0gPSB1c2VTdGF0ZSh7fSk7XHJcbiAgICBjb25zdCBbZnVsbG5hbWVFcnIsIHNldEZ1bGxuYW1lRXJyXSA9IHVzZVN0YXRlKHt9KTtcclxuICAgIGNvbnN0IFt1c2VybmFtZUVyciwgc2V0VXNlcm5hbWVFcnJdID0gdXNlU3RhdGUoe30pO1xyXG4gICAgY29uc3QgW3Bhc3N3b3JkRXJyLCBzZXRQYXNzd29yZEVycl0gPSB1c2VTdGF0ZSh7fSk7XHJcblxyXG5cclxuICAgIC8vIFByZXZlbnRzIGZvcm0gZnJvbSBzdWJtaXR0aW5nIG5vcm1hbGx5IG9uIHN1Ym1pdFxyXG4gICAgY29uc3Qgb25TdWJtaXQgPSAoZSkgPT4ge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBjb25zdCBpc1ZhbGlkID0gZm9ybVZhbGlkYXRpb24oKTtcclxuICAgICAgICAvLyBJZiB0aGUgZGF0YSB0aGF0IGlzIGlucHV0IGlzIHZhbGlkIC1cclxuICAgICAgICBpZiAoaXNWYWxpZCkge1xyXG4gICAgICAgICAgICAvLyBTZW5kIHRoaXMgZGF0YSB0byB0aGUgYXBpXHJcbiAgICAgICAgICAgIHNldEVtYWlsKCcnKTtcclxuICAgICAgICAgICAgc2V0RnVsbG5hbWUoJycpO1xyXG4gICAgICAgICAgICBzZXRVc2VybmFtZSgnJyk7XHJcbiAgICAgICAgICAgIHNldFBhc3N3b3JkKCcnKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyogRnJvbnRlbmQgZm9ybSB2YWxpZGF0aW9uIGlzIGhhbmRsZWQgaGVyZSAqL1xyXG4gICAgY29uc3QgZm9ybVZhbGlkYXRpb24gPSAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgZW1haWxFcnIgPSB7fTtcclxuICAgICAgICBjb25zdCBmdWxsbmFtZUVyciA9IHt9O1xyXG4gICAgICAgIGNvbnN0IHVzZXJuYW1lRXJyID0ge307XHJcbiAgICAgICAgY29uc3QgcGFzc3dvcmRFcnIgPSB7fTtcclxuICAgICAgICBsZXQgaXNWYWxpZCA9IHRydWU7XHJcblxyXG4gICAgICAgIC8vIFJlZ2V4IHRvIHRlc3QgZW1haWwgYWdhaW5zdFxyXG4gICAgICAgIGxldCByZWdleHAgPSAvXigoW148PigpW1xcXVxcXFwuLDs6XFxzQFwiXSsoXFwuW148PigpW1xcXVxcXFwuLDs6XFxzQFwiXSspKil8KFwiLitcIikpQCgoXFxbWzAtOV17MSwzfVxcLlswLTldezEsM31cXC5bMC05XXsxLDN9XFwuWzAtOV17MSwzfV0pfCgoW2EtekEtWlxcLTAtOV0rXFwuKStbYS16QS1aXXsyLH0pKSQvO1xyXG5cclxuICAgICAgICAvLyBJZiBlbWFpbCBpcyBsZWZ0IGVtcHR5IG9yIGRvZXMgbm90IG1hdGNoIHRoZSByZWdleCAtXHJcbiAgICAgICAgaWYgKGVtYWlsLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICBlbWFpbEVyci5lbWFpbEVtcHR5ID0gXCJZb3UgbXVzdCBlbnRlciBhbiBlbWFpbCBhZGRyZXNzLlwiO1xyXG4gICAgICAgIH0gZWxzZSBpZiAocmVnZXhwLnRlc3QoZW1haWwpID09PSBmYWxzZSkge1xyXG4gICAgICAgICAgICBlbWFpbEVyci5lbWFpbFdyb25nQ2hhcnMgPSBcIlRoaXMgaXMgbm90IGEgdmFsaWQgZW1haWwgYWRkcmVzcy5cIjtcclxuICAgICAgICAgICAgaXNWYWxpZCA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gSWYgZnVsbCBuYW1lIGlzIGxlZnQgZW1wdHkgb3IgZmlyc3QgbGV0dGVyIG9mIHRoZSBmdWxsIG5hbWUgaXNuJ3QgY2FwaXRhbGl6ZWQgLVxyXG4gICAgICAgIGlmIChmdWxsbmFtZS5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgZnVsbG5hbWVFcnIuZnVsbG5hbWVFbXB0eSA9IFwiWW91IG11c3QgZW50ZXIgYSBmdWxsIG5hbWUuXCI7XHJcbiAgICAgICAgfSBlbHNlIGlmIChmdWxsbmFtZVswXSAhPT0gZnVsbG5hbWVbMF0udG9VcHBlckNhc2UoKSkge1xyXG4gICAgICAgICAgICBmdWxsbmFtZUVyci5zdGFydHNMb3dlcmNhc2UgPSBcIkZpcnN0IGxldHRlciBvZiBmdWxsIG5hbWUgbmVlZHMgdG8gYmUgY2FwaXRhbGl6ZWQuXCI7XHJcbiAgICAgICAgICAgIGlzVmFsaWQgPSBmYWxzZTtcclxuICAgICAgICB9IFxyXG5cclxuICAgICAgICAvLyBJZiB1c2VybmFtZSBpcyBsZWZ0IGVtcHR5IG9yIGxlbmd0aCBvZiB0aGUgdXNlcm5hbWUgaXMgbGVzcyB0aGFuIGZpdmUgY2hhcmFjdGVycyAtXHJcbiAgICAgICAgaWYgKHVzZXJuYW1lLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICB1c2VybmFtZUVyci51c2VybmFtZUVtcHR5ID0gXCJZb3UgbXVzdCBlbnRlciBhIHVzZXJuYW1lLlwiO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodXNlcm5hbWUubGVuZ3RoIDwgNSkge1xyXG4gICAgICAgICAgICB1c2VybmFtZUVyci51c2VybmFtZVNob3J0ID0gXCJVc2VybmFtZSBuZWVkcyB0byBiZSA1IG9yIG1vcmUgY2hhcmFjdGVycy5cIjtcclxuICAgICAgICAgICAgaXNWYWxpZCA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gSWYgdGhlIGxlbmd0aCBvZiB0aGUgcGFzc3dvcmQgaXMgbGVzcyB0aGFuIHRocmVlIGNoYXJhY3RlcnMgLVxyXG4gICAgICAgIGlmIChwYXNzd29yZC5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgcGFzc3dvcmRFcnIucGFzc3dvcmRFbXB0eSA9IFwiWW91IG11c3QgZW50ZXIgYSBwYXNzd29yZC5cIjtcclxuICAgICAgICB9IGVsc2UgaWYgKHBhc3N3b3JkLmxlbmd0aCA8IDMpIHtcclxuICAgICAgICAgICAgcGFzc3dvcmRFcnIucGFzc3dvcmRTaG9ydCA9IFwiUGFzc3dvcmQgbmVlZHMgdG8gYmUgMyBvciBtb3JlIGNoYXJhY3RlcnMuXCI7XHJcbiAgICAgICAgICAgIGlzVmFsaWQgPSBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIFVwZGF0ZSBlcnJvciBvYmplY3RzXHJcbiAgICAgICAgc2V0RW1haWxFcnIoZW1haWxFcnIpO1xyXG4gICAgICAgIHNldEZ1bGxuYW1lRXJyKGZ1bGxuYW1lRXJyKTtcclxuICAgICAgICBzZXRVc2VybmFtZUVycih1c2VybmFtZUVycik7XHJcbiAgICAgICAgc2V0UGFzc3dvcmRFcnIocGFzc3dvcmRFcnIpO1xyXG4gICAgICAgIHJldHVybiBpc1ZhbGlkO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGZvcm0gb25TdWJtaXQ9e29uU3VibWl0fT5cclxuICAgICAgICAgICAgPGxhYmVsIGZvcj1cImVtYWlsXCI+RW1haWwgOiA8L2xhYmVsPlxyXG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBcclxuICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW1haWxcIlxyXG4gICAgICAgICAgICAgICAgICAgdmFsdWU9e2VtYWlsfVxyXG4gICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7c2V0RW1haWwoZS50YXJnZXQudmFsdWUpfX0vPlxyXG4gICAgICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICB7T2JqZWN0LmtleXMoZW1haWxFcnIpLm1hcCgoa2V5KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxFcnJvck1lc3NhZ2U+e2VtYWlsRXJyW2tleV19PC9FcnJvck1lc3NhZ2U+XHJcbiAgICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgPGxhYmVsIGZvcj1cImZ1bGxuYW1lXCI+RnVsbCBuYW1lIDogPC9sYWJlbD5cclxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgXHJcbiAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkZ1bGwgbmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICB2YWx1ZT17ZnVsbG5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtzZXRGdWxsbmFtZShlLnRhcmdldC52YWx1ZSl9fS8+XHJcbiAgICAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgICAgIHtPYmplY3Qua2V5cyhmdWxsbmFtZUVycikubWFwKChrZXkpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPEVycm9yTWVzc2FnZT57ZnVsbG5hbWVFcnJba2V5XX08L0Vycm9yTWVzc2FnZT5cclxuICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICA8bGFiZWwgZm9yPVwidXNlcm5hbWVcIj5Vc2VybmFtZSA6IDwvbGFiZWw+XHJcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIFxyXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiVXNlcm5hbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXt1c2VybmFtZX1cclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtzZXRVc2VybmFtZShlLnRhcmdldC52YWx1ZSl9fS8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAge09iamVjdC5rZXlzKHVzZXJuYW1lRXJyKS5tYXAoKGtleSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8RXJyb3JNZXNzYWdlPnt1c2VybmFtZUVycltrZXldfTwvRXJyb3JNZXNzYWdlPlxyXG4gICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJwYXNzd29yZFwiPlBhc3N3b3JkIDogPC9sYWJlbD5cclxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJwYXNzd29yZFwiIFxyXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiUGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtwYXNzd29yZH1cclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtzZXRQYXNzd29yZChlLnRhcmdldC52YWx1ZSl9fS8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAge09iamVjdC5rZXlzKHBhc3N3b3JkRXJyKS5tYXAoKGtleSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8RXJyb3JNZXNzYWdlPntwYXNzd29yZEVycltrZXldfTwvRXJyb3JNZXNzYWdlPlxyXG4gICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgIDxTdWJtaXRCdG4gdHlwZT1cInN1Ym1pdFwiPlNpZ24gdXA8L1N1Ym1pdEJ0bj5cclxuICAgICAgICA8L2Zvcm0+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJlZ2lzdGVyRm9ybVxyXG4iXSwic291cmNlUm9vdCI6IiJ9