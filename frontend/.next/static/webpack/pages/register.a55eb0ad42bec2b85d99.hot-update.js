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
_c = Form;

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
    } else if (!email) {// do this
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

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Form, {
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
      lineNumber: 97,
      columnNumber: 13
    }, _this), Object.keys(emailErr).map(function (key) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Common_ErrorMessage__WEBPACK_IMPORTED_MODULE_5__["default"], {
        children: emailErr[key]
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 102,
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
      lineNumber: 105,
      columnNumber: 13
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
    }, _this), Object.keys(usernameErr).map(function (key) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Common_ErrorMessage__WEBPACK_IMPORTED_MODULE_5__["default"], {
        children: usernameErr[key]
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 118,
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
      lineNumber: 121,
      columnNumber: 13
    }, _this), Object.keys(passwordErr).map(function (key) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Common_ErrorMessage__WEBPACK_IMPORTED_MODULE_5__["default"], {
        children: passwordErr[key]
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 126,
        columnNumber: 31
      }, _this);
    }), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_SubmitBtn__WEBPACK_IMPORTED_MODULE_3__["default"], {
      type: "submit",
      children: "Sign up"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 13
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 95,
    columnNumber: 9
  }, _this);
};

_s(RegisterForm, "XNb9uxBLtTF0PFOzJhJivmDnwVA=");

_c2 = RegisterForm;
/* harmony default export */ __webpack_exports__["default"] = (RegisterForm);

var _c, _c2;

$RefreshReg$(_c, "Form");
$RefreshReg$(_c2, "RegisterForm");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Gb3Jtcy9SZWdpc3RlckZvcm0uanMiXSwibmFtZXMiOlsiRm9ybSIsInN0eWxlZCIsImZvcm0iLCJSZWdpc3RlckZvcm0iLCJ1c2VTdGF0ZSIsImVtYWlsIiwic2V0RW1haWwiLCJmdWxsbmFtZSIsInNldEZ1bGxuYW1lIiwidXNlcm5hbWUiLCJzZXRVc2VybmFtZSIsInBhc3N3b3JkIiwic2V0UGFzc3dvcmQiLCJlbWFpbEVyciIsInNldEVtYWlsRXJyIiwiZnVsbG5hbWVFcnIiLCJzZXRGdWxsbmFtZUVyciIsInVzZXJuYW1lRXJyIiwic2V0VXNlcm5hbWVFcnIiLCJwYXNzd29yZEVyciIsInNldFBhc3N3b3JkRXJyIiwib25TdWJtaXQiLCJlIiwicHJldmVudERlZmF1bHQiLCJpc1ZhbGlkIiwiZm9ybVZhbGlkYXRpb24iLCJyZWdleHAiLCJsZW5ndGgiLCJlbWFpbEVtcHR5IiwidGVzdCIsImVtYWlsV3JvbmdDaGFycyIsImZ1bGxuYW1lRW1wdHkiLCJ0b1VwcGVyQ2FzZSIsInN0YXJ0c0xvd2VyY2FzZSIsInVzZXJuYW1lRW1wdHkiLCJ1c2VybmFtZVNob3J0IiwicGFzc3dvcmRFbXB0eSIsInBhc3N3b3JkU2hvcnQiLCJ0YXJnZXQiLCJ2YWx1ZSIsIk9iamVjdCIsImtleXMiLCJtYXAiLCJrZXkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsSUFBSSxHQUFHQyx5REFBTSxDQUFDQyxJQUFWLG1CQUFWO0tBQU1GLEk7O0FBTU4sSUFBTUcsWUFBWSxHQUFHLFNBQWZBLFlBQWUsR0FBTTtBQUFBOztBQUV2QjtBQUZ1QixrQkFHR0Msc0RBQVEsQ0FBQyxFQUFELENBSFg7QUFBQSxNQUdoQkMsS0FIZ0I7QUFBQSxNQUdUQyxRQUhTOztBQUFBLG1CQUlTRixzREFBUSxDQUFDLEVBQUQsQ0FKakI7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QUNILEtBRkMsQ0E5QmIsZUFpQ0kscUVBQUMsa0RBQUQ7QUFBVyxVQUFJLEVBQUMsUUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFqQ0o7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREo7QUFxQ0gsQ0F0SEQ7O0dBQU14QyxZOztNQUFBQSxZO0FBd0hTQSwyRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9yZWdpc3Rlci5hNTVlYjBhZDQyYmVjMmI4NWQ5OS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBTdWJtaXRCdG4gZnJvbSAnLi9TdWJtaXRCdG4nXHJcbmltcG9ydCBJbnB1dCBmcm9tICcuL0Zvcm1JbnB1dCdcclxuaW1wb3J0IEVycm9yTWVzc2FnZSBmcm9tICcuLi9Db21tb24vRXJyb3JNZXNzYWdlJ1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xyXG5cclxuY29uc3QgRm9ybSA9IHN0eWxlZC5mb3JtYFxyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICB3aWR0aDogMThyZW07XHJcbmBcclxuXHJcbmNvbnN0IFJlZ2lzdGVyRm9ybSA9ICgpID0+IHtcclxuXHJcbiAgICAvLyBTZXR0aW5nIHRoZSBzdGF0ZVxyXG4gICAgY29uc3QgW2VtYWlsLCBzZXRFbWFpbF0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCBbZnVsbG5hbWUsIHNldEZ1bGxuYW1lXSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIGNvbnN0IFt1c2VybmFtZSwgc2V0VXNlcm5hbWVdID0gdXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgW3Bhc3N3b3JkLCBzZXRQYXNzd29yZF0gPSB1c2VTdGF0ZSgnJyk7XHJcblxyXG4gICAgY29uc3QgW2VtYWlsRXJyLCBzZXRFbWFpbEVycl0gPSB1c2VTdGF0ZSh7fSk7XHJcbiAgICBjb25zdCBbZnVsbG5hbWVFcnIsIHNldEZ1bGxuYW1lRXJyXSA9IHVzZVN0YXRlKHt9KTtcclxuICAgIGNvbnN0IFt1c2VybmFtZUVyciwgc2V0VXNlcm5hbWVFcnJdID0gdXNlU3RhdGUoe30pO1xyXG4gICAgY29uc3QgW3Bhc3N3b3JkRXJyLCBzZXRQYXNzd29yZEVycl0gPSB1c2VTdGF0ZSh7fSk7XHJcblxyXG5cclxuICAgIC8vIFByZXZlbnRzIGZvcm0gZnJvbSBzdWJtaXR0aW5nIG5vcm1hbGx5IG9uIHN1Ym1pdFxyXG4gICAgY29uc3Qgb25TdWJtaXQgPSAoZSkgPT4ge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBjb25zdCBpc1ZhbGlkID0gZm9ybVZhbGlkYXRpb24oKTtcclxuICAgICAgICAvLyBJZiB0aGUgZGF0YSB0aGF0IGlzIGlucHV0IGlzIHZhbGlkIC1cclxuICAgICAgICBpZiAoaXNWYWxpZCkge1xyXG4gICAgICAgICAgICAvLyBTZW5kIHRoaXMgZGF0YSB0byB0aGUgYXBpXHJcbiAgICAgICAgICAgIHNldEVtYWlsKCcnKTtcclxuICAgICAgICAgICAgc2V0RnVsbG5hbWUoJycpO1xyXG4gICAgICAgICAgICBzZXRVc2VybmFtZSgnJyk7XHJcbiAgICAgICAgICAgIHNldFBhc3N3b3JkKCcnKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyogRnJvbnRlbmQgZm9ybSB2YWxpZGF0aW9uIGlzIGhhbmRsZWQgaGVyZSAqL1xyXG4gICAgY29uc3QgZm9ybVZhbGlkYXRpb24gPSAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgZW1haWxFcnIgPSB7fTtcclxuICAgICAgICBjb25zdCBmdWxsbmFtZUVyciA9IHt9O1xyXG4gICAgICAgIGNvbnN0IHVzZXJuYW1lRXJyID0ge307XHJcbiAgICAgICAgY29uc3QgcGFzc3dvcmRFcnIgPSB7fTtcclxuICAgICAgICBsZXQgaXNWYWxpZCA9IHRydWU7XHJcblxyXG4gICAgICAgIC8vIFJlZ2V4IHRvIHRlc3QgZW1haWwgYWdhaW5zdFxyXG4gICAgICAgIGxldCByZWdleHAgPSAvXigoW148PigpW1xcXVxcXFwuLDs6XFxzQFwiXSsoXFwuW148PigpW1xcXVxcXFwuLDs6XFxzQFwiXSspKil8KFwiLitcIikpQCgoXFxbWzAtOV17MSwzfVxcLlswLTldezEsM31cXC5bMC05XXsxLDN9XFwuWzAtOV17MSwzfV0pfCgoW2EtekEtWlxcLTAtOV0rXFwuKStbYS16QS1aXXsyLH0pKSQvO1xyXG5cclxuICAgICAgICAvLyBJZiBlbWFpbCBpcyBsZWZ0IGVtcHR5IG9yIGRvZXMgbm90IG1hdGNoIHRoZSByZWdleCAtXHJcbiAgICAgICAgaWYgKGVtYWlsLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICBlbWFpbEVyci5lbWFpbEVtcHR5ID0gXCJZb3UgbXVzdCBlbnRlciBhbiBlbWFpbCBhZGRyZXNzLlwiO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoIWVtYWlsKSB7XHJcbiAgICAgICAgICAgIC8vIGRvIHRoaXNcclxuICAgICAgICB9IGVsc2UgaWYgKHJlZ2V4cC50ZXN0KGVtYWlsKSA9PT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgZW1haWxFcnIuZW1haWxXcm9uZ0NoYXJzID0gXCJUaGlzIGlzIG5vdCBhIHZhbGlkIGVtYWlsIGFkZHJlc3MuXCI7XHJcbiAgICAgICAgICAgIGlzVmFsaWQgPSBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIElmIGZ1bGwgbmFtZSBpcyBsZWZ0IGVtcHR5IG9yIGZpcnN0IGxldHRlciBvZiB0aGUgZnVsbCBuYW1lIGlzbid0IGNhcGl0YWxpemVkIC1cclxuICAgICAgICBpZiAoZnVsbG5hbWUubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgIGZ1bGxuYW1lRXJyLmZ1bGxuYW1lRW1wdHkgPSBcIllvdSBtdXN0IGVudGVyIGEgZnVsbCBuYW1lLlwiO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoZnVsbG5hbWVbMF0gIT09IGZ1bGxuYW1lWzBdLnRvVXBwZXJDYXNlKCkpIHtcclxuICAgICAgICAgICAgZnVsbG5hbWVFcnIuc3RhcnRzTG93ZXJjYXNlID0gXCJGaXJzdCBsZXR0ZXIgb2YgZnVsbCBuYW1lIG5lZWRzIHRvIGJlIGNhcGl0YWxpemVkLlwiO1xyXG4gICAgICAgICAgICBpc1ZhbGlkID0gZmFsc2U7XHJcbiAgICAgICAgfSBcclxuXHJcbiAgICAgICAgLy8gSWYgdXNlcm5hbWUgaXMgbGVmdCBlbXB0eSBvciBsZW5ndGggb2YgdGhlIHVzZXJuYW1lIGlzIGxlc3MgdGhhbiBmaXZlIGNoYXJhY3RlcnMgLVxyXG4gICAgICAgIGlmICh1c2VybmFtZS5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgdXNlcm5hbWVFcnIudXNlcm5hbWVFbXB0eSA9IFwiWW91IG11c3QgZW50ZXIgYSB1c2VybmFtZS5cIjtcclxuICAgICAgICB9IGVsc2UgaWYgKHVzZXJuYW1lLmxlbmd0aCA8IDUpIHtcclxuICAgICAgICAgICAgdXNlcm5hbWVFcnIudXNlcm5hbWVTaG9ydCA9IFwiVXNlcm5hbWUgbmVlZHMgdG8gYmUgNSBvciBtb3JlIGNoYXJhY3RlcnMuXCI7XHJcbiAgICAgICAgICAgIGlzVmFsaWQgPSBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIElmIHRoZSBsZW5ndGggb2YgdGhlIHBhc3N3b3JkIGlzIGxlc3MgdGhhbiB0aHJlZSBjaGFyYWN0ZXJzIC1cclxuICAgICAgICBpZiAocGFzc3dvcmQubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgIHBhc3N3b3JkRXJyLnBhc3N3b3JkRW1wdHkgPSBcIllvdSBtdXN0IGVudGVyIGEgcGFzc3dvcmQuXCI7XHJcbiAgICAgICAgfSBlbHNlIGlmIChwYXNzd29yZC5sZW5ndGggPCAzKSB7XHJcbiAgICAgICAgICAgIHBhc3N3b3JkRXJyLnBhc3N3b3JkU2hvcnQgPSBcIlBhc3N3b3JkIG5lZWRzIHRvIGJlIDMgb3IgbW9yZSBjaGFyYWN0ZXJzLlwiO1xyXG4gICAgICAgICAgICBpc1ZhbGlkID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBVcGRhdGUgZXJyb3Igb2JqZWN0c1xyXG4gICAgICAgIHNldEVtYWlsRXJyKGVtYWlsRXJyKTtcclxuICAgICAgICBzZXRGdWxsbmFtZUVycihmdWxsbmFtZUVycik7XHJcbiAgICAgICAgc2V0VXNlcm5hbWVFcnIodXNlcm5hbWVFcnIpO1xyXG4gICAgICAgIHNldFBhc3N3b3JkRXJyKHBhc3N3b3JkRXJyKTtcclxuICAgICAgICByZXR1cm4gaXNWYWxpZDtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxGb3JtIG9uU3VibWl0PXtvblN1Ym1pdH0+XHJcbiAgICAgICAgICAgIHsvKiA8bGFiZWwgZm9yPVwiZW1haWxcIj5FbWFpbCA6IDwvbGFiZWw+ICovfVxyXG4gICAgICAgICAgICA8SW5wdXQgdHlwZT1cInRleHRcIiBcclxuICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW1haWxcIlxyXG4gICAgICAgICAgICAgICAgICAgdmFsdWU9e2VtYWlsfVxyXG4gICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7c2V0RW1haWwoZS50YXJnZXQudmFsdWUpfX0vPlxyXG4gICAgICAgICAgICAgICAgICAge09iamVjdC5rZXlzKGVtYWlsRXJyKS5tYXAoKGtleSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8RXJyb3JNZXNzYWdlPntlbWFpbEVycltrZXldfTwvRXJyb3JNZXNzYWdlPlxyXG4gICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgIHsvKiA8bGFiZWwgZm9yPVwiZnVsbG5hbWVcIj5GdWxsIG5hbWUgOiA8L2xhYmVsPiAqL31cclxuICAgICAgICAgICAgPElucHV0IHR5cGU9XCJ0ZXh0XCIgXHJcbiAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkZ1bGwgbmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICB2YWx1ZT17ZnVsbG5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtzZXRGdWxsbmFtZShlLnRhcmdldC52YWx1ZSl9fS8+XHJcbiAgICAgICAgICAgICAgICAgICB7T2JqZWN0LmtleXMoZnVsbG5hbWVFcnIpLm1hcCgoa2V5KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxFcnJvck1lc3NhZ2U+e2Z1bGxuYW1lRXJyW2tleV19PC9FcnJvck1lc3NhZ2U+XHJcbiAgICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgey8qIDxsYWJlbCBmb3I9XCJ1c2VybmFtZVwiPlVzZXJuYW1lIDogPC9sYWJlbD4gKi99XHJcbiAgICAgICAgICAgIDxJbnB1dCB0eXBlPVwidGV4dFwiIFxyXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiVXNlcm5hbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXt1c2VybmFtZX1cclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtzZXRVc2VybmFtZShlLnRhcmdldC52YWx1ZSl9fS8+XHJcbiAgICAgICAgICAgICAgICAgICAge09iamVjdC5rZXlzKHVzZXJuYW1lRXJyKS5tYXAoKGtleSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8RXJyb3JNZXNzYWdlPnt1c2VybmFtZUVycltrZXldfTwvRXJyb3JNZXNzYWdlPlxyXG4gICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgIHsvKiA8bGFiZWwgZm9yPVwicGFzc3dvcmRcIj5QYXNzd29yZCA6IDwvbGFiZWw+ICovfVxyXG4gICAgICAgICAgICA8SW5wdXQgdHlwZT1cInBhc3N3b3JkXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJQYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3Bhc3N3b3JkfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge3NldFBhc3N3b3JkKGUudGFyZ2V0LnZhbHVlKX19Lz5cclxuICAgICAgICAgICAgICAgICAgICB7T2JqZWN0LmtleXMocGFzc3dvcmRFcnIpLm1hcCgoa2V5KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxFcnJvck1lc3NhZ2U+e3Bhc3N3b3JkRXJyW2tleV19PC9FcnJvck1lc3NhZ2U+XHJcbiAgICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgPFN1Ym1pdEJ0biB0eXBlPVwic3VibWl0XCI+U2lnbiB1cDwvU3VibWl0QnRuPlxyXG4gICAgICAgIDwvRm9ybT5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmVnaXN0ZXJGb3JtXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=