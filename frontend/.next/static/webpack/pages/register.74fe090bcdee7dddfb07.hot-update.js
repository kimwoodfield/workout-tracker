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
      lineNumber: 117,
      columnNumber: 13
    }, _this), Object.keys(emailErr).map(function (key) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Common_ErrorMessage__WEBPACK_IMPORTED_MODULE_4__["default"], {
        children: emailErr[key]
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 122,
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
      lineNumber: 125,
      columnNumber: 13
    }, _this), Object.keys(fullnameErr).map(function (key) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Common_ErrorMessage__WEBPACK_IMPORTED_MODULE_4__["default"], {
        children: fullnameErr[key]
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 130,
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
      lineNumber: 133,
      columnNumber: 13
    }, _this), Object.keys(usernameErr).map(function (key) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Common_ErrorMessage__WEBPACK_IMPORTED_MODULE_4__["default"], {
        children: usernameErr[key]
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 138,
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
      lineNumber: 141,
      columnNumber: 13
    }, _this), Object.keys(passwordErr).map(function (key) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Common_ErrorMessage__WEBPACK_IMPORTED_MODULE_4__["default"], {
        children: passwordErr[key]
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 146,
        columnNumber: 31
      }, _this);
    }), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_SubmitBtn__WEBPACK_IMPORTED_MODULE_2__["default"], {
      type: "submit",
      children: "Sign up"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 148,
      columnNumber: 13
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 115,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Gb3Jtcy9SZWdpc3RlckZvcm0uanMiXSwibmFtZXMiOlsiRm9ybSIsInN0eWxlZCIsImZvcm0iLCJSZWdpc3RlckZvcm0iLCJ1c2VTdGF0ZSIsImVtYWlsIiwic2V0RW1haWwiLCJmdWxsbmFtZSIsInNldEZ1bGxuYW1lIiwidXNlcm5hbWUiLCJzZXRVc2VybmFtZSIsInBhc3N3b3JkIiwic2V0UGFzc3dvcmQiLCJlbWFpbEVyciIsInNldEVtYWlsRXJyIiwiZnVsbG5hbWVFcnIiLCJzZXRGdWxsbmFtZUVyciIsInVzZXJuYW1lRXJyIiwic2V0VXNlcm5hbWVFcnIiLCJwYXNzd29yZEVyciIsInNldFBhc3N3b3JkRXJyIiwic3VibWl0dGluZyIsInNldFN1Ym1pdHRpbmciLCJvblN1Ym1pdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImlzVmFsaWQiLCJmb3JtVmFsaWRhdGlvbiIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwidGhlbiIsInJlcyIsImpzb24iLCJkYXRhIiwiY29uc29sZSIsImxvZyIsIm1zZyIsImFsZXJ0IiwiZXJyIiwicmVnZXhwIiwibGVuZ3RoIiwiZW1haWxFbXB0eSIsImluY2x1ZGVzIiwiZW1haWxNaXNzaW5nU3ltYiIsInRlc3QiLCJlbWFpbFdyb25nQ2hhcnMiLCJmdWxsbmFtZUVtcHR5IiwidG9VcHBlckNhc2UiLCJzdGFydHNMb3dlcmNhc2UiLCJ1c2VybmFtZUVtcHR5IiwidXNlcm5hbWVTaG9ydCIsInBhc3N3b3JkRW1wdHkiLCJwYXNzd29yZFNob3J0IiwidGFyZ2V0IiwidmFsdWUiLCJPYmplY3QiLCJrZXlzIiwibWFwIiwia2V5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLElBQUksR0FBR0MseURBQU0sQ0FBQ0MsSUFBVjtBQUFBO0FBQUE7QUFBQSx1REFBVjtLQUFNRixJOztBQU1OLElBQU1HLFlBQVksR0FBRyxTQUFmQSxZQUFlLEdBQU07QUFBQTs7QUFFdkI7QUFGdUIsa0JBR0dDLHNEQUFRLENBQUMsRUFBRCxDQUhYO0FBQUEsTUFHaEJDLEtBSGdCO0FBQUEsTUFHVEMsUUFIUzs7QUFBQSxtQkFJU0Ysc0RBQVEsQ0FBQyxFQUFELENBSmpCO0FBQUEsTUFJaEJHLFFBSmdCO0FBQUEsTUFJTkMsV0FKTTs7QUFBQSxtQkFLU0osc0RBQVEsQ0FBQyxFQUFELENBTGpCO0FBQUEsTUFLaEJLLFFBTGdCO0FBQUEsTUFLTkMsV0FMTTs7QUFBQSxtQkFNU04sc0RBQVEsQ0FBQyxFQUFELENBTmpCO0FBQUEsTUFNaEJPLFFBTmdCO0FBQUEsTUFNTkMsV0FOTTs7QUFBQSxtQkFRU1Isc0RBQVEsQ0FBQyxFQUFELENBUmpCO0FBQUEsTUFRaEJTLFFBUmdCO0FBQUEsTUFRTkMsV0FSTTs7QUFBQSxtQkFTZVYsc0RBQVEsQ0FBQyxFQUFELENBVHZCO0FBQUEsTUFTaEJXLFdBVGdCO0FBQUEsTUFTSEMsY0FURzs7QUFBQSxtQkFVZVosc0RBQVEsQ0FBQyxFQUFELENBVnZCO0FBQUEsTUFVaEJhLFdBVmdCO0FBQUEsTUFVSEMsY0FWRzs7QUFBQSxtQkFXZWQsc0RBQVEsQ0FBQyxFQUFELENBWHZCO0FBQUEsTUFXaEJlLFdBWGdCO0FBQUEsTUFXSEMsY0FYRzs7QUFBQSxtQkFhZWhCLHNEQUFRLENBQUMsS0FBRCxDQWJ2QjtBQUFBLE1BYWZpQixVQWJlO0FBQUEsTUFhSEMsYUFiRyxrQkFnQnZCOzs7QUFDQSxNQUFNQyxRQUFRLEdBQUcsU0FBWEEsUUFBVyxDQUFDQyxDQUFELEVBQU87QUFDcEJBLEtBQUMsQ0FBQ0MsY0FBRjtBQUNBSCxpQkFBYSxDQUFDLElBQUQsQ0FBYjtBQUNBLFFBQU1JLE9BQU8sR0FBR0MsY0FBYyxFQUE5QixDQUhvQixDQUlwQjs7QUFDQSxRQUFJRCxPQUFKLEVBQWE7QUFDVDtBQUNBRSxXQUFLLENBQUMsZ0NBQUQsRUFBbUM7QUFDcENDLGNBQU0sRUFBRSxNQUQ0QjtBQUVwQ0MsZUFBTyxFQUFFO0FBQ1AsMEJBQWdCO0FBRFQsU0FGMkI7QUFLcENDLFlBQUksRUFBRUMsSUFBSSxDQUFDQyxTQUFMLENBQWU7QUFBRTVCLGVBQUssRUFBTEEsS0FBRjtBQUFTRSxrQkFBUSxFQUFSQSxRQUFUO0FBQW1CRSxrQkFBUSxFQUFSQSxRQUFuQjtBQUE2QkUsa0JBQVEsRUFBUkE7QUFBN0IsU0FBZjtBQUw4QixPQUFuQyxDQUFMLENBT0d1QixJQVBILENBT1EsVUFBQUMsR0FBRztBQUFBLGVBQUlBLEdBQUcsQ0FBQ0MsSUFBSixFQUFKO0FBQUEsT0FQWCxFQU8yQjtBQVAzQixPQVFHRixJQVJILENBUVEsVUFBQUcsSUFBSSxFQUFJO0FBQ1o7QUFDQUMsZUFBTyxDQUFDQyxHQUFSLENBQVlGLElBQUksQ0FBQ0csR0FBakI7QUFDQUMsYUFBSyxDQUFDSixJQUFJLENBQUNHLEdBQU4sQ0FBTDtBQUNBbEMsZ0JBQVEsQ0FBQyxFQUFELENBQVI7QUFDQUUsbUJBQVcsQ0FBQyxFQUFELENBQVg7QUFDQUUsbUJBQVcsQ0FBQyxFQUFELENBQVg7QUFDQUUsbUJBQVcsQ0FBQyxFQUFELENBQVg7QUFDRCxPQWhCSCxXQWlCUyxVQUFBOEIsR0FBRyxFQUFJO0FBQ1o7QUFDQUosZUFBTyxDQUFDQyxHQUFSLENBQVksY0FBWjtBQUNELE9BcEJIO0FBcUJIO0FBQ0osR0E3QkQ7QUErQkE7OztBQUNBLE1BQU1aLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUIsR0FBTTtBQUN6QixRQUFNZCxRQUFRLEdBQUcsRUFBakI7QUFDQSxRQUFNRSxXQUFXLEdBQUcsRUFBcEI7QUFDQSxRQUFNRSxXQUFXLEdBQUcsRUFBcEI7QUFDQSxRQUFNRSxXQUFXLEdBQUcsRUFBcEI7QUFDQSxRQUFJTyxPQUFPLEdBQUcsSUFBZCxDQUx5QixDQU96Qjs7QUFDQSxRQUFJaUIsTUFBTSxHQUFHLHNKQUFiLENBUnlCLENBVXpCOztBQUNBLFFBQUl0QyxLQUFLLENBQUN1QyxNQUFOLEtBQWlCLENBQXJCLEVBQXdCO0FBQ3BCL0IsY0FBUSxDQUFDZ0MsVUFBVCxHQUFzQixrQ0FBdEI7QUFDSCxLQUZELE1BRU8sSUFBSSxDQUFDeEMsS0FBSyxDQUFDeUMsUUFBTixDQUFlLEdBQWYsQ0FBTCxFQUEwQjtBQUM3QmpDLGNBQVEsQ0FBQ2tDLGdCQUFULEdBQTRCLGtDQUE1QjtBQUNILEtBRk0sTUFFQSxJQUFJSixNQUFNLENBQUNLLElBQVAsQ0FBWTNDLEtBQVosTUFBdUIsS0FBM0IsRUFBa0M7QUFDckNRLGNBQVEsQ0FBQ29DLGVBQVQsR0FBMkIsb0NBQTNCO0FBQ0F2QixhQUFPLEdBQUcsS0FBVjtBQUNILEtBbEJ3QixDQW9CekI7OztBQUNBLFFBQUluQixRQUFRLENBQUNxQyxNQUFULEtBQW9CLENBQXhCLEVBQTJCO0FBQ3ZCN0IsaUJBQVcsQ0FBQ21DLGFBQVosR0FBNEIsNkJBQTVCO0FBQ0gsS0FGRCxNQUVPLElBQUkzQyxRQUFRLENBQUMsQ0FBRCxDQUFSLEtBQWdCQSxRQUFRLENBQUMsQ0FBRCxDQUFSLENBQVk0QyxXQUFaLEVBQXBCLEVBQStDO0FBQ2xEcEMsaUJBQVcsQ0FBQ3FDLGVBQVosR0FBOEIsb0RBQTlCO0FBQ0ExQixhQUFPLEdBQUcsS0FBVjtBQUNILEtBMUJ3QixDQTRCekI7OztBQUNBLFFBQUlqQixRQUFRLENBQUNtQyxNQUFULEtBQW9CLENBQXhCLEVBQTJCO0FBQ3ZCM0IsaUJBQVcsQ0FBQ29DLGFBQVosR0FBNEIsNEJBQTVCO0FBQ0gsS0FGRCxNQUVPLElBQUk1QyxRQUFRLENBQUNtQyxNQUFULEdBQWtCLENBQXRCLEVBQXlCO0FBQzVCM0IsaUJBQVcsQ0FBQ3FDLGFBQVosR0FBNEIsNENBQTVCO0FBQ0E1QixhQUFPLEdBQUcsS0FBVjtBQUNILEtBbEN3QixDQW9DekI7OztBQUNBLFFBQUlmLFFBQVEsQ0FBQ2lDLE1BQVQsS0FBb0IsQ0FBeEIsRUFBMkI7QUFDdkJ6QixpQkFBVyxDQUFDb0MsYUFBWixHQUE0Qiw0QkFBNUI7QUFDSCxLQUZELE1BRU8sSUFBSTVDLFFBQVEsQ0FBQ2lDLE1BQVQsR0FBa0IsQ0FBdEIsRUFBeUI7QUFDNUJ6QixpQkFBVyxDQUFDcUMsYUFBWixHQUE0Qiw0Q0FBNUI7QUFDQTlCLGFBQU8sR0FBRyxLQUFWO0FBQ0gsS0ExQ3dCLENBNEN6Qjs7O0FBQ0FaLGVBQVcsQ0FBQ0QsUUFBRCxDQUFYO0FBQ0FHLGtCQUFjLENBQUNELFdBQUQsQ0FBZDtBQUNBRyxrQkFBYyxDQUFDRCxXQUFELENBQWQ7QUFDQUcsa0JBQWMsQ0FBQ0QsV0FBRCxDQUFkO0FBQ0EsV0FBT08sT0FBUDtBQUNILEdBbEREOztBQW9EQSxzQkFDSSxxRUFBQyxJQUFEO0FBQU0sWUFBUSxFQUFFSCxRQUFoQjtBQUFBLDRCQUVJLHFFQUFDLGtEQUFEO0FBQU8sVUFBSSxFQUFDLE1BQVo7QUFDTyxpQkFBVyxFQUFDLE9BRG5CO0FBRU8sV0FBSyxFQUFFbEIsS0FGZDtBQUdPLGNBQVEsRUFBRSxrQkFBQ21CLENBQUQsRUFBTztBQUFDbEIsZ0JBQVEsQ0FBQ2tCLENBQUMsQ0FBQ2lDLE1BQUYsQ0FBU0MsS0FBVixDQUFSO0FBQXlCO0FBSGxEO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFGSixFQU1ZQyxNQUFNLENBQUNDLElBQVAsQ0FBWS9DLFFBQVosRUFBc0JnRCxHQUF0QixDQUEwQixVQUFDQyxHQUFELEVBQVM7QUFDaEMsMEJBQU8scUVBQUMsNERBQUQ7QUFBQSxrQkFBZWpELFFBQVEsQ0FBQ2lELEdBQUQ7QUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUFQO0FBQ0gsS0FGQSxDQU5aLGVBVUkscUVBQUMsa0RBQUQ7QUFBTyxVQUFJLEVBQUMsTUFBWjtBQUNPLGlCQUFXLEVBQUMsV0FEbkI7QUFFTyxXQUFLLEVBQUV2RCxRQUZkO0FBR08sY0FBUSxFQUFFLGtCQUFDaUIsQ0FBRCxFQUFPO0FBQUNoQixtQkFBVyxDQUFDZ0IsQ0FBQyxDQUFDaUMsTUFBRixDQUFTQyxLQUFWLENBQVg7QUFBNEI7QUFIckQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQVZKLEVBY1lDLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZN0MsV0FBWixFQUF5QjhDLEdBQXpCLENBQTZCLFVBQUNDLEdBQUQsRUFBUztBQUNuQywwQkFBTyxxRUFBQyw0REFBRDtBQUFBLGtCQUFlL0MsV0FBVyxDQUFDK0MsR0FBRDtBQUExQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBQVA7QUFDSCxLQUZBLENBZFosZUFrQkkscUVBQUMsa0RBQUQ7QUFBTyxVQUFJLEVBQUMsTUFBWjtBQUNRLGlCQUFXLEVBQUMsVUFEcEI7QUFFUSxXQUFLLEVBQUVyRCxRQUZmO0FBR1EsY0FBUSxFQUFFLGtCQUFDZSxDQUFELEVBQU87QUFBQ2QsbUJBQVcsQ0FBQ2MsQ0FBQyxDQUFDaUMsTUFBRixDQUFTQyxLQUFWLENBQVg7QUFBNEI7QUFIdEQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQWxCSixFQXNCYUMsTUFBTSxDQUFDQyxJQUFQLENBQVkzQyxXQUFaLEVBQXlCNEMsR0FBekIsQ0FBNkIsVUFBQ0MsR0FBRCxFQUFTO0FBQ3BDLDBCQUFPLHFFQUFDLDREQUFEO0FBQUEsa0JBQWU3QyxXQUFXLENBQUM2QyxHQUFEO0FBQTFCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFBUDtBQUNILEtBRkMsQ0F0QmIsZUEwQkkscUVBQUMsa0RBQUQ7QUFBTyxVQUFJLEVBQUMsVUFBWjtBQUNRLGlCQUFXLEVBQUMsVUFEcEI7QUFFUSxXQUFLLEVBQUVuRCxRQUZmO0FBR1EsY0FBUSxFQUFFLGtCQUFDYSxDQUFELEVBQU87QUFBQ1osbUJBQVcsQ0FBQ1ksQ0FBQyxDQUFDaUMsTUFBRixDQUFTQyxLQUFWLENBQVg7QUFBNEI7QUFIdEQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQTFCSixFQThCYUMsTUFBTSxDQUFDQyxJQUFQLENBQVl6QyxXQUFaLEVBQXlCMEMsR0FBekIsQ0FBNkIsVUFBQ0MsR0FBRCxFQUFTO0FBQ3BDLDBCQUFPLHFFQUFDLDREQUFEO0FBQUEsa0JBQWUzQyxXQUFXLENBQUMyQyxHQUFEO0FBQTFCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFBUDtBQUNILEtBRkMsQ0E5QmIsZUFpQ0kscUVBQUMsa0RBQUQ7QUFBVyxVQUFJLEVBQUMsUUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFqQ0o7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREo7QUFxQ0gsQ0ExSUQ7O0dBQU0zRCxZOztNQUFBQSxZO0FBNElTQSwyRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9yZWdpc3Rlci43NGZlMDkwYmNkZWU3ZGRkZmIwNy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBTdWJtaXRCdG4gZnJvbSAnLi9TdWJtaXRCdG4nXHJcbmltcG9ydCBJbnB1dCBmcm9tICcuL0Zvcm1JbnB1dCdcclxuaW1wb3J0IEVycm9yTWVzc2FnZSBmcm9tICcuLi9Db21tb24vRXJyb3JNZXNzYWdlJ1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xyXG5cclxuY29uc3QgRm9ybSA9IHN0eWxlZC5mb3JtYFxyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICB3aWR0aDogMThyZW07XHJcbmBcclxuXHJcbmNvbnN0IFJlZ2lzdGVyRm9ybSA9ICgpID0+IHtcclxuXHJcbiAgICAvLyBTZXR0aW5nIHRoZSBzdGF0ZVxyXG4gICAgY29uc3QgW2VtYWlsLCBzZXRFbWFpbF0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCBbZnVsbG5hbWUsIHNldEZ1bGxuYW1lXSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIGNvbnN0IFt1c2VybmFtZSwgc2V0VXNlcm5hbWVdID0gdXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgW3Bhc3N3b3JkLCBzZXRQYXNzd29yZF0gPSB1c2VTdGF0ZSgnJyk7XHJcblxyXG4gICAgY29uc3QgW2VtYWlsRXJyLCBzZXRFbWFpbEVycl0gPSB1c2VTdGF0ZSh7fSk7XHJcbiAgICBjb25zdCBbZnVsbG5hbWVFcnIsIHNldEZ1bGxuYW1lRXJyXSA9IHVzZVN0YXRlKHt9KTtcclxuICAgIGNvbnN0IFt1c2VybmFtZUVyciwgc2V0VXNlcm5hbWVFcnJdID0gdXNlU3RhdGUoe30pO1xyXG4gICAgY29uc3QgW3Bhc3N3b3JkRXJyLCBzZXRQYXNzd29yZEVycl0gPSB1c2VTdGF0ZSh7fSk7XHJcblxyXG4gICAgY29uc3QgWyBzdWJtaXR0aW5nLCBzZXRTdWJtaXR0aW5nIF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG5cclxuICAgIC8vIEhhbmRsZXMgdGhlIGZvcm0gc3VibWlzc2lvblxyXG4gICAgY29uc3Qgb25TdWJtaXQgPSAoZSkgPT4ge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBzZXRTdWJtaXR0aW5nKHRydWUpO1xyXG4gICAgICAgIGNvbnN0IGlzVmFsaWQgPSBmb3JtVmFsaWRhdGlvbigpO1xyXG4gICAgICAgIC8vIElmIHRoZSBpbnB1dCBkYXRhIGlzIHZhbGlkIC0gXHJcbiAgICAgICAgaWYgKGlzVmFsaWQpIHtcclxuICAgICAgICAgICAgLy8gTWFrZSBhIFBPU1QgcmVxdWVzdCB0byBvdXIgYXBpIHJvdXRlIHdpdGggdGhlIGlucHV0IGRhdGFcclxuICAgICAgICAgICAgZmV0Y2goJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9yZWdpc3RlcicsIHtcclxuICAgICAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyBlbWFpbCwgZnVsbG5hbWUsIHVzZXJuYW1lLCBwYXNzd29yZCB9KSxcclxuICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgIC50aGVuKHJlcyA9PiByZXMuanNvbigpKSAvLyBwYXJzZSB0aGUgcmVzcG9uc2UgYXMgSlNPTlxyXG4gICAgICAgICAgICAgIC50aGVuKGRhdGEgPT4ge1xyXG4gICAgICAgICAgICAgICAgLy8gUmVxdWVzdCBzZW50LlxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YS5tc2cpO1xyXG4gICAgICAgICAgICAgICAgYWxlcnQoZGF0YS5tc2cpO1xyXG4gICAgICAgICAgICAgICAgc2V0RW1haWwoJycpO1xyXG4gICAgICAgICAgICAgICAgc2V0RnVsbG5hbWUoJycpO1xyXG4gICAgICAgICAgICAgICAgc2V0VXNlcm5hbWUoJycpO1xyXG4gICAgICAgICAgICAgICAgc2V0UGFzc3dvcmQoJycpO1xyXG4gICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgLmNhdGNoKGVyciA9PiB7XHJcbiAgICAgICAgICAgICAgICAvLyBGZXRjaCBjb3VsZG4ndCBzZW5kIHRoZSByZXF1ZXN0LlxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2ZldGNoIGZhaWxlZCcpO1xyXG4gICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qIEZyb250ZW5kIGZvcm0gdmFsaWRhdGlvbiBpcyBoYW5kbGVkIGhlcmUgKi9cclxuICAgIGNvbnN0IGZvcm1WYWxpZGF0aW9uID0gKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGVtYWlsRXJyID0ge307XHJcbiAgICAgICAgY29uc3QgZnVsbG5hbWVFcnIgPSB7fTtcclxuICAgICAgICBjb25zdCB1c2VybmFtZUVyciA9IHt9O1xyXG4gICAgICAgIGNvbnN0IHBhc3N3b3JkRXJyID0ge307XHJcbiAgICAgICAgbGV0IGlzVmFsaWQgPSB0cnVlO1xyXG5cclxuICAgICAgICAvLyBSZWdleCB0byB0ZXN0IGVtYWlsIGFnYWluc3RcclxuICAgICAgICBsZXQgcmVnZXhwID0gL14oKFtePD4oKVtcXF1cXFxcLiw7Olxcc0BcIl0rKFxcLltePD4oKVtcXF1cXFxcLiw7Olxcc0BcIl0rKSopfChcIi4rXCIpKUAoKFxcW1swLTldezEsM31cXC5bMC05XXsxLDN9XFwuWzAtOV17MSwzfVxcLlswLTldezEsM31dKXwoKFthLXpBLVpcXC0wLTldK1xcLikrW2EtekEtWl17Mix9KSkkLztcclxuXHJcbiAgICAgICAgLy8gSWYgZW1haWwgaXMgbGVmdCBlbXB0eSBvciBkb2VzIG5vdCBtYXRjaCB0aGUgcmVnZXggLVxyXG4gICAgICAgIGlmIChlbWFpbC5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgZW1haWxFcnIuZW1haWxFbXB0eSA9IFwiWW91IG11c3QgZW50ZXIgYW4gZW1haWwgYWRkcmVzcy5cIjtcclxuICAgICAgICB9IGVsc2UgaWYgKCFlbWFpbC5pbmNsdWRlcygnQCcpKSB7XHJcbiAgICAgICAgICAgIGVtYWlsRXJyLmVtYWlsTWlzc2luZ1N5bWIgPSBcIkludmFsaWQgZW1haWwuIEVtYWlsIG11c3QgaGF2ZSBAXCI7XHJcbiAgICAgICAgfSBlbHNlIGlmIChyZWdleHAudGVzdChlbWFpbCkgPT09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgIGVtYWlsRXJyLmVtYWlsV3JvbmdDaGFycyA9IFwiVGhpcyBpcyBub3QgYSB2YWxpZCBlbWFpbCBhZGRyZXNzLlwiO1xyXG4gICAgICAgICAgICBpc1ZhbGlkID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBJZiBmdWxsIG5hbWUgaXMgbGVmdCBlbXB0eSBvciBmaXJzdCBsZXR0ZXIgb2YgdGhlIGZ1bGwgbmFtZSBpc24ndCBjYXBpdGFsaXplZCAtXHJcbiAgICAgICAgaWYgKGZ1bGxuYW1lLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICBmdWxsbmFtZUVyci5mdWxsbmFtZUVtcHR5ID0gXCJZb3UgbXVzdCBlbnRlciBhIGZ1bGwgbmFtZS5cIjtcclxuICAgICAgICB9IGVsc2UgaWYgKGZ1bGxuYW1lWzBdICE9PSBmdWxsbmFtZVswXS50b1VwcGVyQ2FzZSgpKSB7XHJcbiAgICAgICAgICAgIGZ1bGxuYW1lRXJyLnN0YXJ0c0xvd2VyY2FzZSA9IFwiRmlyc3QgbGV0dGVyIG9mIGZ1bGwgbmFtZSBuZWVkcyB0byBiZSBjYXBpdGFsaXplZC5cIjtcclxuICAgICAgICAgICAgaXNWYWxpZCA9IGZhbHNlO1xyXG4gICAgICAgIH0gXHJcblxyXG4gICAgICAgIC8vIElmIHVzZXJuYW1lIGlzIGxlZnQgZW1wdHkgb3IgbGVuZ3RoIG9mIHRoZSB1c2VybmFtZSBpcyBsZXNzIHRoYW4gZml2ZSBjaGFyYWN0ZXJzIC1cclxuICAgICAgICBpZiAodXNlcm5hbWUubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgIHVzZXJuYW1lRXJyLnVzZXJuYW1lRW1wdHkgPSBcIllvdSBtdXN0IGVudGVyIGEgdXNlcm5hbWUuXCI7XHJcbiAgICAgICAgfSBlbHNlIGlmICh1c2VybmFtZS5sZW5ndGggPCA1KSB7XHJcbiAgICAgICAgICAgIHVzZXJuYW1lRXJyLnVzZXJuYW1lU2hvcnQgPSBcIlVzZXJuYW1lIG5lZWRzIHRvIGJlIDUgb3IgbW9yZSBjaGFyYWN0ZXJzLlwiO1xyXG4gICAgICAgICAgICBpc1ZhbGlkID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBJZiB0aGUgbGVuZ3RoIG9mIHRoZSBwYXNzd29yZCBpcyBsZXNzIHRoYW4gdGhyZWUgY2hhcmFjdGVycyAtXHJcbiAgICAgICAgaWYgKHBhc3N3b3JkLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICBwYXNzd29yZEVyci5wYXNzd29yZEVtcHR5ID0gXCJZb3UgbXVzdCBlbnRlciBhIHBhc3N3b3JkLlwiO1xyXG4gICAgICAgIH0gZWxzZSBpZiAocGFzc3dvcmQubGVuZ3RoIDwgNCkge1xyXG4gICAgICAgICAgICBwYXNzd29yZEVyci5wYXNzd29yZFNob3J0ID0gXCJQYXNzd29yZCBuZWVkcyB0byBiZSA0IG9yIG1vcmUgY2hhcmFjdGVycy5cIjtcclxuICAgICAgICAgICAgaXNWYWxpZCA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gVXBkYXRlIGVycm9yIG9iamVjdHNcclxuICAgICAgICBzZXRFbWFpbEVycihlbWFpbEVycik7XHJcbiAgICAgICAgc2V0RnVsbG5hbWVFcnIoZnVsbG5hbWVFcnIpO1xyXG4gICAgICAgIHNldFVzZXJuYW1lRXJyKHVzZXJuYW1lRXJyKTtcclxuICAgICAgICBzZXRQYXNzd29yZEVycihwYXNzd29yZEVycik7XHJcbiAgICAgICAgcmV0dXJuIGlzVmFsaWQ7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8Rm9ybSBvblN1Ym1pdD17b25TdWJtaXR9PlxyXG4gICAgICAgICAgICB7LyogPGxhYmVsIGZvcj1cImVtYWlsXCI+RW1haWwgOiA8L2xhYmVsPiAqL31cclxuICAgICAgICAgICAgPElucHV0IHR5cGU9XCJ0ZXh0XCIgXHJcbiAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVtYWlsXCJcclxuICAgICAgICAgICAgICAgICAgIHZhbHVlPXtlbWFpbH1cclxuICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge3NldEVtYWlsKGUudGFyZ2V0LnZhbHVlKX19Lz5cclxuICAgICAgICAgICAgICAgICAgIHtPYmplY3Qua2V5cyhlbWFpbEVycikubWFwKChrZXkpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPEVycm9yTWVzc2FnZT57ZW1haWxFcnJba2V5XX08L0Vycm9yTWVzc2FnZT5cclxuICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICB7LyogPGxhYmVsIGZvcj1cImZ1bGxuYW1lXCI+RnVsbCBuYW1lIDogPC9sYWJlbD4gKi99XHJcbiAgICAgICAgICAgIDxJbnB1dCB0eXBlPVwidGV4dFwiIFxyXG4gICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJGdWxsIG5hbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgdmFsdWU9e2Z1bGxuYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7c2V0RnVsbG5hbWUoZS50YXJnZXQudmFsdWUpfX0vPlxyXG4gICAgICAgICAgICAgICAgICAge09iamVjdC5rZXlzKGZ1bGxuYW1lRXJyKS5tYXAoKGtleSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8RXJyb3JNZXNzYWdlPntmdWxsbmFtZUVycltrZXldfTwvRXJyb3JNZXNzYWdlPlxyXG4gICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgIHsvKiA8bGFiZWwgZm9yPVwidXNlcm5hbWVcIj5Vc2VybmFtZSA6IDwvbGFiZWw+ICovfVxyXG4gICAgICAgICAgICA8SW5wdXQgdHlwZT1cInRleHRcIiBcclxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlVzZXJuYW1lXCJcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dXNlcm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7c2V0VXNlcm5hbWUoZS50YXJnZXQudmFsdWUpfX0vPlxyXG4gICAgICAgICAgICAgICAgICAgIHtPYmplY3Qua2V5cyh1c2VybmFtZUVycikubWFwKChrZXkpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPEVycm9yTWVzc2FnZT57dXNlcm5hbWVFcnJba2V5XX08L0Vycm9yTWVzc2FnZT5cclxuICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICB7LyogPGxhYmVsIGZvcj1cInBhc3N3b3JkXCI+UGFzc3dvcmQgOiA8L2xhYmVsPiAqL31cclxuICAgICAgICAgICAgPElucHV0IHR5cGU9XCJwYXNzd29yZFwiIFxyXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiUGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtwYXNzd29yZH1cclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtzZXRQYXNzd29yZChlLnRhcmdldC52YWx1ZSl9fS8+XHJcbiAgICAgICAgICAgICAgICAgICAge09iamVjdC5rZXlzKHBhc3N3b3JkRXJyKS5tYXAoKGtleSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8RXJyb3JNZXNzYWdlPntwYXNzd29yZEVycltrZXldfTwvRXJyb3JNZXNzYWdlPlxyXG4gICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgIDxTdWJtaXRCdG4gdHlwZT1cInN1Ym1pdFwiPlNpZ24gdXA8L1N1Ym1pdEJ0bj5cclxuICAgICAgICA8L0Zvcm0+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJlZ2lzdGVyRm9ybTsiXSwic291cmNlUm9vdCI6IiJ9