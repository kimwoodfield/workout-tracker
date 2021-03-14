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
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");


var _jsxFileName = "C:\\Users\\kimwoodfield\\Documents\\GitHub\\workout-tracker\\frontend\\components\\Forms\\RegisterForm.js",
    _this = undefined,
    _s = $RefreshSig$();






var Form = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].form.withConfig({
  displayName: "RegisterForm__Form",
  componentId: "ri5t6n-0"
})(["display:flex;flex-direction:column;width:18rem;"]);
_c = Form;

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
      setPasswordErr = _useState8[1];

  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      submitting = _useState9[0],
      setSubmitting = _useState9[1]; // Handles the form submission


  var onSubmit = function onSubmit(e) {
    e.preventDefault();
    setSubmitting(true);
    var isValid = formValidation(); // If the input data is valid - 

    if (isValid) {
      // Make a POST request to our api route with the input data
      fetch('http://localhost:3000/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: email,
          fullname: fullname,
          username: username,
          password: password
        })
      }).then(function (res) {
        return res.json();
      }) // parse the response as JSON
      .then(function (data) {
        // Request sent.
        console.log(data.msg);
        alert(data.msg);
        setEmail('');
        setFullname('');
        setUsername('');
        setPassword('');
      })["catch"](function (err) {
        // Fetch couldn't send the request.
        console.log('fetch failed');
      });
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
    } else if (!email.includes('@')) {
      emailErr.emailMissingSymb = "Invalid email. Email must have @";
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
    } else if (password.length < 4) {
      passwordErr.passwordShort = "Password needs to be 4 or more characters.";
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
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_FormInput__WEBPACK_IMPORTED_MODULE_3__["default"], {
      type: "text",
      placeholder: "Email",
      value: email,
      onChange: function onChange(e) {
        setEmail(e.target.value);
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 13
    }, _this), Object.keys(emailErr).map(function (key) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Common_ErrorMessage__WEBPACK_IMPORTED_MODULE_4__["default"], {
        children: emailErr[key]
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 123,
        columnNumber: 31
      }, _this);
    }), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_FormInput__WEBPACK_IMPORTED_MODULE_3__["default"], {
      type: "text",
      placeholder: "Full name",
      value: fullname,
      onChange: function onChange(e) {
        setFullname(e.target.value);
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 13
    }, _this), Object.keys(fullnameErr).map(function (key) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Common_ErrorMessage__WEBPACK_IMPORTED_MODULE_4__["default"], {
        children: fullnameErr[key]
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 131,
        columnNumber: 31
      }, _this);
    }), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_FormInput__WEBPACK_IMPORTED_MODULE_3__["default"], {
      type: "text",
      placeholder: "Username",
      value: username,
      onChange: function onChange(e) {
        setUsername(e.target.value);
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 13
    }, _this), Object.keys(usernameErr).map(function (key) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Common_ErrorMessage__WEBPACK_IMPORTED_MODULE_4__["default"], {
        children: usernameErr[key]
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 139,
        columnNumber: 31
      }, _this);
    }), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_FormInput__WEBPACK_IMPORTED_MODULE_3__["default"], {
      type: "password",
      placeholder: "Password",
      value: password,
      onChange: function onChange(e) {
        setPassword(e.target.value);
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 142,
      columnNumber: 13
    }, _this), Object.keys(passwordErr).map(function (key) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Common_ErrorMessage__WEBPACK_IMPORTED_MODULE_4__["default"], {
        children: passwordErr[key]
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 147,
        columnNumber: 31
      }, _this);
    }), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_SubmitBtn__WEBPACK_IMPORTED_MODULE_2__["default"], {
      type: "submit",
      children: "Sign up"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 149,
      columnNumber: 13
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 116,
    columnNumber: 9
  }, _this);
};

_s(RegisterForm, "+lTLCCD+sBVKIW+LmujKw1nPhCs=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Gb3Jtcy9SZWdpc3RlckZvcm0uanMiXSwibmFtZXMiOlsiRm9ybSIsInN0eWxlZCIsImZvcm0iLCJSZWdpc3RlckZvcm0iLCJ1c2VTdGF0ZSIsImVtYWlsIiwic2V0RW1haWwiLCJmdWxsbmFtZSIsInNldEZ1bGxuYW1lIiwidXNlcm5hbWUiLCJzZXRVc2VybmFtZSIsInBhc3N3b3JkIiwic2V0UGFzc3dvcmQiLCJlbWFpbEVyciIsInNldEVtYWlsRXJyIiwiZnVsbG5hbWVFcnIiLCJzZXRGdWxsbmFtZUVyciIsInVzZXJuYW1lRXJyIiwic2V0VXNlcm5hbWVFcnIiLCJwYXNzd29yZEVyciIsInNldFBhc3N3b3JkRXJyIiwic3VibWl0dGluZyIsInNldFN1Ym1pdHRpbmciLCJvblN1Ym1pdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImlzVmFsaWQiLCJmb3JtVmFsaWRhdGlvbiIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwidGhlbiIsInJlcyIsImpzb24iLCJkYXRhIiwiY29uc29sZSIsImxvZyIsIm1zZyIsImFsZXJ0IiwiZXJyIiwicmVnZXhwIiwibGVuZ3RoIiwiZW1haWxFbXB0eSIsImluY2x1ZGVzIiwiZW1haWxNaXNzaW5nU3ltYiIsInRlc3QiLCJlbWFpbFdyb25nQ2hhcnMiLCJmdWxsbmFtZUVtcHR5IiwidG9VcHBlckNhc2UiLCJzdGFydHNMb3dlcmNhc2UiLCJ1c2VybmFtZUVtcHR5IiwidXNlcm5hbWVTaG9ydCIsInBhc3N3b3JkRW1wdHkiLCJwYXNzd29yZFNob3J0IiwidGFyZ2V0IiwidmFsdWUiLCJPYmplY3QiLCJrZXlzIiwibWFwIiwia2V5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLElBQUksR0FBR0MseURBQU0sQ0FBQ0MsSUFBVjtBQUFB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QmIsZUFpQ0kscUVBQUMsa0RBQUQ7QUFBVyxVQUFJLEVBQUMsUUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFqQ0o7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREo7QUFxQ0gsQ0EzSUQ7O0dBQU0zRCxZOztNQUFBQSxZO0FBNklTQSwyRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9yZWdpc3Rlci40YTJjOTgyNWZjOTRmZDVjYmFiOS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBTdWJtaXRCdG4gZnJvbSAnLi9TdWJtaXRCdG4nXHJcbmltcG9ydCBJbnB1dCBmcm9tICcuL0Zvcm1JbnB1dCdcclxuaW1wb3J0IEVycm9yTWVzc2FnZSBmcm9tICcuLi9Db21tb24vRXJyb3JNZXNzYWdlJ1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xyXG5cclxuY29uc3QgRm9ybSA9IHN0eWxlZC5mb3JtYFxyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICB3aWR0aDogMThyZW07XHJcbmBcclxuXHJcbmNvbnN0IFJlZ2lzdGVyRm9ybSA9ICgpID0+IHtcclxuXHJcblxyXG4gICAgLy8gU2V0dGluZyB0aGUgc3RhdGVcclxuICAgIGNvbnN0IFtlbWFpbCwgc2V0RW1haWxdID0gdXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgW2Z1bGxuYW1lLCBzZXRGdWxsbmFtZV0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCBbdXNlcm5hbWUsIHNldFVzZXJuYW1lXSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIGNvbnN0IFtwYXNzd29yZCwgc2V0UGFzc3dvcmRdID0gdXNlU3RhdGUoJycpO1xyXG5cclxuICAgIGNvbnN0IFtlbWFpbEVyciwgc2V0RW1haWxFcnJdID0gdXNlU3RhdGUoe30pO1xyXG4gICAgY29uc3QgW2Z1bGxuYW1lRXJyLCBzZXRGdWxsbmFtZUVycl0gPSB1c2VTdGF0ZSh7fSk7XHJcbiAgICBjb25zdCBbdXNlcm5hbWVFcnIsIHNldFVzZXJuYW1lRXJyXSA9IHVzZVN0YXRlKHt9KTtcclxuICAgIGNvbnN0IFtwYXNzd29yZEVyciwgc2V0UGFzc3dvcmRFcnJdID0gdXNlU3RhdGUoe30pO1xyXG5cclxuICAgIGNvbnN0IFsgc3VibWl0dGluZywgc2V0U3VibWl0dGluZyBdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuXHJcbiAgICAvLyBIYW5kbGVzIHRoZSBmb3JtIHN1Ym1pc3Npb25cclxuICAgIGNvbnN0IG9uU3VibWl0ID0gKGUpID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgc2V0U3VibWl0dGluZyh0cnVlKTtcclxuICAgICAgICBjb25zdCBpc1ZhbGlkID0gZm9ybVZhbGlkYXRpb24oKTtcclxuICAgICAgICAvLyBJZiB0aGUgaW5wdXQgZGF0YSBpcyB2YWxpZCAtIFxyXG4gICAgICAgIGlmIChpc1ZhbGlkKSB7XHJcbiAgICAgICAgICAgIC8vIE1ha2UgYSBQT1NUIHJlcXVlc3QgdG8gb3VyIGFwaSByb3V0ZSB3aXRoIHRoZSBpbnB1dCBkYXRhXHJcbiAgICAgICAgICAgIGZldGNoKCdodHRwOi8vbG9jYWxob3N0OjMwMDAvcmVnaXN0ZXInLCB7XHJcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgZW1haWwsIGZ1bGxuYW1lLCB1c2VybmFtZSwgcGFzc3dvcmQgfSksXHJcbiAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAudGhlbihyZXMgPT4gcmVzLmpzb24oKSkgLy8gcGFyc2UgdGhlIHJlc3BvbnNlIGFzIEpTT05cclxuICAgICAgICAgICAgICAudGhlbihkYXRhID0+IHtcclxuICAgICAgICAgICAgICAgIC8vIFJlcXVlc3Qgc2VudC5cclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEubXNnKTtcclxuICAgICAgICAgICAgICAgIGFsZXJ0KGRhdGEubXNnKTtcclxuICAgICAgICAgICAgICAgIHNldEVtYWlsKCcnKTtcclxuICAgICAgICAgICAgICAgIHNldEZ1bGxuYW1lKCcnKTtcclxuICAgICAgICAgICAgICAgIHNldFVzZXJuYW1lKCcnKTtcclxuICAgICAgICAgICAgICAgIHNldFBhc3N3b3JkKCcnKTtcclxuICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgIC5jYXRjaChlcnIgPT4ge1xyXG4gICAgICAgICAgICAgICAgLy8gRmV0Y2ggY291bGRuJ3Qgc2VuZCB0aGUgcmVxdWVzdC5cclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdmZXRjaCBmYWlsZWQnKTtcclxuICAgICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKiBGcm9udGVuZCBmb3JtIHZhbGlkYXRpb24gaXMgaGFuZGxlZCBoZXJlICovXHJcbiAgICBjb25zdCBmb3JtVmFsaWRhdGlvbiA9ICgpID0+IHtcclxuICAgICAgICBjb25zdCBlbWFpbEVyciA9IHt9O1xyXG4gICAgICAgIGNvbnN0IGZ1bGxuYW1lRXJyID0ge307XHJcbiAgICAgICAgY29uc3QgdXNlcm5hbWVFcnIgPSB7fTtcclxuICAgICAgICBjb25zdCBwYXNzd29yZEVyciA9IHt9O1xyXG4gICAgICAgIGxldCBpc1ZhbGlkID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgLy8gUmVnZXggdG8gdGVzdCBlbWFpbCBhZ2FpbnN0XHJcbiAgICAgICAgbGV0IHJlZ2V4cCA9IC9eKChbXjw+KClbXFxdXFxcXC4sOzpcXHNAXCJdKyhcXC5bXjw+KClbXFxdXFxcXC4sOzpcXHNAXCJdKykqKXwoXCIuK1wiKSlAKChcXFtbMC05XXsxLDN9XFwuWzAtOV17MSwzfVxcLlswLTldezEsM31cXC5bMC05XXsxLDN9XSl8KChbYS16QS1aXFwtMC05XStcXC4pK1thLXpBLVpdezIsfSkpJC87XHJcblxyXG4gICAgICAgIC8vIElmIGVtYWlsIGlzIGxlZnQgZW1wdHkgb3IgZG9lcyBub3QgbWF0Y2ggdGhlIHJlZ2V4IC1cclxuICAgICAgICBpZiAoZW1haWwubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgIGVtYWlsRXJyLmVtYWlsRW1wdHkgPSBcIllvdSBtdXN0IGVudGVyIGFuIGVtYWlsIGFkZHJlc3MuXCI7XHJcbiAgICAgICAgfSBlbHNlIGlmICghZW1haWwuaW5jbHVkZXMoJ0AnKSkge1xyXG4gICAgICAgICAgICBlbWFpbEVyci5lbWFpbE1pc3NpbmdTeW1iID0gXCJJbnZhbGlkIGVtYWlsLiBFbWFpbCBtdXN0IGhhdmUgQFwiO1xyXG4gICAgICAgIH0gZWxzZSBpZiAocmVnZXhwLnRlc3QoZW1haWwpID09PSBmYWxzZSkge1xyXG4gICAgICAgICAgICBlbWFpbEVyci5lbWFpbFdyb25nQ2hhcnMgPSBcIlRoaXMgaXMgbm90IGEgdmFsaWQgZW1haWwgYWRkcmVzcy5cIjtcclxuICAgICAgICAgICAgaXNWYWxpZCA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gSWYgZnVsbCBuYW1lIGlzIGxlZnQgZW1wdHkgb3IgZmlyc3QgbGV0dGVyIG9mIHRoZSBmdWxsIG5hbWUgaXNuJ3QgY2FwaXRhbGl6ZWQgLVxyXG4gICAgICAgIGlmIChmdWxsbmFtZS5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgZnVsbG5hbWVFcnIuZnVsbG5hbWVFbXB0eSA9IFwiWW91IG11c3QgZW50ZXIgYSBmdWxsIG5hbWUuXCI7XHJcbiAgICAgICAgfSBlbHNlIGlmIChmdWxsbmFtZVswXSAhPT0gZnVsbG5hbWVbMF0udG9VcHBlckNhc2UoKSkge1xyXG4gICAgICAgICAgICBmdWxsbmFtZUVyci5zdGFydHNMb3dlcmNhc2UgPSBcIkZpcnN0IGxldHRlciBvZiBmdWxsIG5hbWUgbmVlZHMgdG8gYmUgY2FwaXRhbGl6ZWQuXCI7XHJcbiAgICAgICAgICAgIGlzVmFsaWQgPSBmYWxzZTtcclxuICAgICAgICB9IFxyXG5cclxuICAgICAgICAvLyBJZiB1c2VybmFtZSBpcyBsZWZ0IGVtcHR5IG9yIGxlbmd0aCBvZiB0aGUgdXNlcm5hbWUgaXMgbGVzcyB0aGFuIGZpdmUgY2hhcmFjdGVycyAtXHJcbiAgICAgICAgaWYgKHVzZXJuYW1lLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICB1c2VybmFtZUVyci51c2VybmFtZUVtcHR5ID0gXCJZb3UgbXVzdCBlbnRlciBhIHVzZXJuYW1lLlwiO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodXNlcm5hbWUubGVuZ3RoIDwgNSkge1xyXG4gICAgICAgICAgICB1c2VybmFtZUVyci51c2VybmFtZVNob3J0ID0gXCJVc2VybmFtZSBuZWVkcyB0byBiZSA1IG9yIG1vcmUgY2hhcmFjdGVycy5cIjtcclxuICAgICAgICAgICAgaXNWYWxpZCA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gSWYgdGhlIGxlbmd0aCBvZiB0aGUgcGFzc3dvcmQgaXMgbGVzcyB0aGFuIHRocmVlIGNoYXJhY3RlcnMgLVxyXG4gICAgICAgIGlmIChwYXNzd29yZC5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgcGFzc3dvcmRFcnIucGFzc3dvcmRFbXB0eSA9IFwiWW91IG11c3QgZW50ZXIgYSBwYXNzd29yZC5cIjtcclxuICAgICAgICB9IGVsc2UgaWYgKHBhc3N3b3JkLmxlbmd0aCA8IDQpIHtcclxuICAgICAgICAgICAgcGFzc3dvcmRFcnIucGFzc3dvcmRTaG9ydCA9IFwiUGFzc3dvcmQgbmVlZHMgdG8gYmUgNCBvciBtb3JlIGNoYXJhY3RlcnMuXCI7XHJcbiAgICAgICAgICAgIGlzVmFsaWQgPSBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIFVwZGF0ZSBlcnJvciBvYmplY3RzXHJcbiAgICAgICAgc2V0RW1haWxFcnIoZW1haWxFcnIpO1xyXG4gICAgICAgIHNldEZ1bGxuYW1lRXJyKGZ1bGxuYW1lRXJyKTtcclxuICAgICAgICBzZXRVc2VybmFtZUVycih1c2VybmFtZUVycik7XHJcbiAgICAgICAgc2V0UGFzc3dvcmRFcnIocGFzc3dvcmRFcnIpO1xyXG4gICAgICAgIHJldHVybiBpc1ZhbGlkO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPEZvcm0gb25TdWJtaXQ9e29uU3VibWl0fT5cclxuICAgICAgICAgICAgey8qIDxsYWJlbCBmb3I9XCJlbWFpbFwiPkVtYWlsIDogPC9sYWJlbD4gKi99XHJcbiAgICAgICAgICAgIDxJbnB1dCB0eXBlPVwidGV4dFwiIFxyXG4gICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbWFpbFwiXHJcbiAgICAgICAgICAgICAgICAgICB2YWx1ZT17ZW1haWx9XHJcbiAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtzZXRFbWFpbChlLnRhcmdldC52YWx1ZSl9fS8+XHJcbiAgICAgICAgICAgICAgICAgICB7T2JqZWN0LmtleXMoZW1haWxFcnIpLm1hcCgoa2V5KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxFcnJvck1lc3NhZ2U+e2VtYWlsRXJyW2tleV19PC9FcnJvck1lc3NhZ2U+XHJcbiAgICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgey8qIDxsYWJlbCBmb3I9XCJmdWxsbmFtZVwiPkZ1bGwgbmFtZSA6IDwvbGFiZWw+ICovfVxyXG4gICAgICAgICAgICA8SW5wdXQgdHlwZT1cInRleHRcIiBcclxuICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRnVsbCBuYW1lXCJcclxuICAgICAgICAgICAgICAgICAgIHZhbHVlPXtmdWxsbmFtZX1cclxuICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge3NldEZ1bGxuYW1lKGUudGFyZ2V0LnZhbHVlKX19Lz5cclxuICAgICAgICAgICAgICAgICAgIHtPYmplY3Qua2V5cyhmdWxsbmFtZUVycikubWFwKChrZXkpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPEVycm9yTWVzc2FnZT57ZnVsbG5hbWVFcnJba2V5XX08L0Vycm9yTWVzc2FnZT5cclxuICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICB7LyogPGxhYmVsIGZvcj1cInVzZXJuYW1lXCI+VXNlcm5hbWUgOiA8L2xhYmVsPiAqL31cclxuICAgICAgICAgICAgPElucHV0IHR5cGU9XCJ0ZXh0XCIgXHJcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJVc2VybmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3VzZXJuYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge3NldFVzZXJuYW1lKGUudGFyZ2V0LnZhbHVlKX19Lz5cclxuICAgICAgICAgICAgICAgICAgICB7T2JqZWN0LmtleXModXNlcm5hbWVFcnIpLm1hcCgoa2V5KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxFcnJvck1lc3NhZ2U+e3VzZXJuYW1lRXJyW2tleV19PC9FcnJvck1lc3NhZ2U+XHJcbiAgICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgey8qIDxsYWJlbCBmb3I9XCJwYXNzd29yZFwiPlBhc3N3b3JkIDogPC9sYWJlbD4gKi99XHJcbiAgICAgICAgICAgIDxJbnB1dCB0eXBlPVwicGFzc3dvcmRcIiBcclxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17cGFzc3dvcmR9XHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7c2V0UGFzc3dvcmQoZS50YXJnZXQudmFsdWUpfX0vPlxyXG4gICAgICAgICAgICAgICAgICAgIHtPYmplY3Qua2V5cyhwYXNzd29yZEVycikubWFwKChrZXkpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPEVycm9yTWVzc2FnZT57cGFzc3dvcmRFcnJba2V5XX08L0Vycm9yTWVzc2FnZT5cclxuICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICA8U3VibWl0QnRuIHR5cGU9XCJzdWJtaXRcIj5TaWduIHVwPC9TdWJtaXRCdG4+XHJcbiAgICAgICAgPC9Gb3JtPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSZWdpc3RlckZvcm07Il0sInNvdXJjZVJvb3QiOiIifQ==