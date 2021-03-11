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
    } else if (!email.includes('@')) {
      emailErr.email = "Email must have @";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Gb3Jtcy9SZWdpc3RlckZvcm0uanMiXSwibmFtZXMiOlsiRm9ybSIsInN0eWxlZCIsImZvcm0iLCJSZWdpc3RlckZvcm0iLCJ1c2VTdGF0ZSIsImVtYWlsIiwic2V0RW1haWwiLCJmdWxsbmFtZSIsInNldEZ1bGxuYW1lIiwidXNlcm5hbWUiLCJzZXRVc2VybmFtZSIsInBhc3N3b3JkIiwic2V0UGFzc3dvcmQiLCJlbWFpbEVyciIsInNldEVtYWlsRXJyIiwiZnVsbG5hbWVFcnIiLCJzZXRGdWxsbmFtZUVyciIsInVzZXJuYW1lRXJyIiwic2V0VXNlcm5hbWVFcnIiLCJwYXNzd29yZEVyciIsInNldFBhc3N3b3JkRXJyIiwib25TdWJtaXQiLCJlIiwicHJldmVudERlZmF1bHQiLCJpc1ZhbGlkIiwiZm9ybVZhbGlkYXRpb24iLCJyZWdleHAiLCJsZW5ndGgiLCJlbWFpbEVtcHR5IiwiaW5jbHVkZXMiLCJ0ZXN0IiwiZW1haWxXcm9uZ0NoYXJzIiwiZnVsbG5hbWVFbXB0eSIsInRvVXBwZXJDYXNlIiwic3RhcnRzTG93ZXJjYXNlIiwidXNlcm5hbWVFbXB0eSIsInVzZXJuYW1lU2hvcnQiLCJwYXNzd29yZEVtcHR5IiwicGFzc3dvcmRTaG9ydCIsInRhcmdldCIsInZhbHVlIiwiT2JqZWN0Iiwia2V5cyIsIm1hcCIsImtleSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxJQUFJLEdBQUdDLHlEQUFNLENBQUNDLElBQVYsbUJBQVY7S0FBTUYsSTs7QUFNTixJQUFNRyxZQUFZLEdBQUcsU0FBZkEsWUFBZSxHQUFNO0FBQUE7O0FBRXZCO0FBRnVCLGtCQUdHQyxzREFBUSxDQUFDLEVBQUQsQ0FIWDtBQUFBLE1BR2hCQyxLQUhnQjtBQUFBLE1BR1RDLFFBSFM7O0FBQUEsbUJBSVNGLHNEQUFRLENBQUMsRUFBRCxDQUpqQjtBQUFBLE1BSWhCRyxRQUpnQjtBQUFBLE1BSU5DLFdBSk07O0FBQUEsbUJBS1NKLHNEQUFRLENBQUMsRUFBRCxDQUxqQjtBQUFBLE1BS2hCSyxRQUxnQjtBQUFBLE1BS05DLFdBTE07O0FBQUEsbUJBTVNOLHNEQUFRLENBQUMsRUFBRCxDQU5qQjtBQUFBLE1BTWhCTyxRQU5nQjtBQUFBLE1BTU5DLFdBTk07O0FBQUEsbUJBUVNSLHNEQUFRLENBQUMsRUFBRCxDQVJqQjtBQUFBLE1BUWhCUyxRQVJnQjtBQUFBLE1BUU5DLFdBUk07O0FBQUEsbUJBU2VWLHNEQUFRLENBQUMsRUFBRCxDQVR2QjtBQUFBLE1BU2hCVyxXQVRnQjtBQUFBLE1BU0hDLGNBVEc7O0FBQUEsbUJBVWVaLHNEQUFRLENBQUMsRUFBRCxDQVZ2QjtBQUFBLE1BVWhCYSxXQVZnQjtBQUFBLE1BVUhDLGNBVkc7O0FBQUEsbUJBV2VkLHNEQUFRLENBQUMsRUFBRCxDQVh2QjtBQUFBLE1BV2hCZSxXQVhnQjtBQUFBLE1BV0hDLGNBWEcsa0JBY3ZCOzs7QUFDQSxNQUFNQyxRQUFRLEdBQUcsU0FBWEEsUUFBVyxDQUFDQyxDQUFELEVBQU87QUFDcEJBLEtBQUMsQ0FBQ0MsY0FBRjtBQUNBLFFBQU1DLE9BQU8sR0FBR0MsY0FBYyxFQUE5QixDQUZvQixDQUdwQjs7QUFDQSxRQUFJRCxPQUFKLEVBQWE7QUFDVDtBQUNBbEIsY0FBUSxDQUFDLEVBQUQsQ0FBUjtBQUNBRSxpQkFBVyxDQUFDLEVBQUQsQ0FBWDtBQUNBRSxpQkFBVyxDQUFDLEVBQUQsQ0FBWDtBQUNBRSxpQkFBVyxDQUFDLEVBQUQsQ0FBWDtBQUNIO0FBQ0osR0FYRDtBQWFBOzs7QUFDQSxNQUFNYSxjQUFjLEdBQUcsU0FBakJBLGNBQWlCLEdBQU07QUFDekIsUUFBTVosUUFBUSxHQUFHLEVBQWpCO0FBQ0EsUUFBTUUsV0FBVyxHQUFHLEVBQXBCO0FBQ0EsUUFBTUUsV0FBVyxHQUFHLEVBQXBCO0FBQ0EsUUFBTUUsV0FBVyxHQUFHLEVBQXBCO0FBQ0EsUUFBSUssT0FBTyxHQUFHLElBQWQsQ0FMeUIsQ0FPekI7O0FBQ0EsUUFBSUUsTUFBTSxHQUFHLHNKQUFiLENBUnlCLENBVXpCOztBQUNBLFFBQUlyQixLQUFLLENBQUNzQixNQUFOLEtBQWlCLENBQXJCLEVBQXdCO0FBQ3BCZCxjQUFRLENBQUNlLFVBQVQsR0FBc0Isa0NBQXRCO0FBQ0gsS0FGRCxNQUVPLElBQUksQ0FBQ3ZCLEtBQUssQ0FBQ3dCLFFBQU4sQ0FBZSxHQUFmLENBQUwsRUFBMEI7QUFDN0JoQixjQUFRLENBQUNSLEtBQVQsR0FBaUIsbUJBQWpCO0FBQ0gsS0FGTSxNQUVBLElBQUlxQixNQUFNLENBQUNJLElBQVAsQ0FBWXpCLEtBQVosTUFBdUIsS0FBM0IsRUFBa0M7QUFDckNRLGNBQVEsQ0FBQ2tCLGVBQVQsR0FBMkIsb0NBQTNCO0FBQ0FQLGFBQU8sR0FBRyxLQUFWO0FBQ0gsS0FsQndCLENBb0J6Qjs7O0FBQ0EsUUFBSWpCLFFBQVEsQ0FBQ29CLE1BQVQsS0FBb0IsQ0FBeEIsRUFBMkI7QUFDdkJaLGlCQUFXLENBQUNpQixhQUFaLEdBQTRCLDZCQUE1QjtBQUNILEtBRkQsTUFFTyxJQUFJekIsUUFBUSxDQUFDLENBQUQsQ0FBUixLQUFnQkEsUUFBUSxDQUFDLENBQUQsQ0FBUixDQUFZMEIsV0FBWixFQUFwQixFQUErQztBQUNsRGxCLGlCQUFXLENBQUNtQixlQUFaLEdBQThCLG9EQUE5QjtBQUNBVixhQUFPLEdBQUcsS0FBVjtBQUNILEtBMUJ3QixDQTRCekI7OztBQUNBLFFBQUlmLFFBQVEsQ0FBQ2tCLE1BQVQsS0FBb0IsQ0FBeEIsRUFBMkI7QUFDdkJWLGlCQUFXLENBQUNrQixhQUFaLEdBQTRCLDRCQUE1QjtBQUNILEtBRkQsTUFFTyxJQUFJMUIsUUFBUSxDQUFDa0IsTUFBVCxHQUFrQixDQUF0QixFQUF5QjtBQUM1QlYsaUJBQVcsQ0FBQ21CLGFBQVosR0FBNEIsNENBQTVCO0FBQ0FaLGFBQU8sR0FBRyxLQUFWO0FBQ0gsS0FsQ3dCLENBb0N6Qjs7O0FBQ0EsUUFBSWIsUUFBUSxDQUFDZ0IsTUFBVCxLQUFvQixDQUF4QixFQUEyQjtBQUN2QlIsaUJBQVcsQ0FBQ2tCLGFBQVosR0FBNEIsNEJBQTVCO0FBQ0gsS0FGRCxNQUVPLElBQUkxQixRQUFRLENBQUNnQixNQUFULEdBQWtCLENBQXRCLEVBQXlCO0FBQzVCUixpQkFBVyxDQUFDbUIsYUFBWixHQUE0Qiw0Q0FBNUI7QUFDQWQsYUFBTyxHQUFHLEtBQVY7QUFDSCxLQTFDd0IsQ0E0Q3pCOzs7QUFDQVYsZUFBVyxDQUFDRCxRQUFELENBQVg7QUFDQUcsa0JBQWMsQ0FBQ0QsV0FBRCxDQUFkO0FBQ0FHLGtCQUFjLENBQUNELFdBQUQsQ0FBZDtBQUNBRyxrQkFBYyxDQUFDRCxXQUFELENBQWQ7QUFDQSxXQUFPSyxPQUFQO0FBQ0gsR0FsREQ7O0FBb0RBLHNCQUNJLHFFQUFDLElBQUQ7QUFBTSxZQUFRLEVBQUVILFFBQWhCO0FBQUEsNEJBRUkscUVBQUMsa0RBQUQ7QUFBTyxVQUFJLEVBQUMsTUFBWjtBQUNPLGlCQUFXLEVBQUMsT0FEbkI7QUFFTyxXQUFLLEVBQUVoQixLQUZkO0FBR08sY0FBUSxFQUFFLGtCQUFDaUIsQ0FBRCxFQUFPO0FBQUNoQixnQkFBUSxDQUFDZ0IsQ0FBQyxDQUFDaUIsTUFBRixDQUFTQyxLQUFWLENBQVI7QUFBeUI7QUFIbEQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUZKLEVBTVlDLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZN0IsUUFBWixFQUFzQjhCLEdBQXRCLENBQTBCLFVBQUNDLEdBQUQsRUFBUztBQUNoQywwQkFBTyxxRUFBQyw0REFBRDtBQUFBLGtCQUFlL0IsUUFBUSxDQUFDK0IsR0FBRDtBQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBQVA7QUFDSCxLQUZBLENBTlosZUFVSSxxRUFBQyxrREFBRDtBQUFPLFVBQUksRUFBQyxNQUFaO0FBQ08saUJBQVcsRUFBQyxXQURuQjtBQUVPLFdBQUssRUFBRXJDLFFBRmQ7QUFHTyxjQUFRLEVBQUUsa0JBQUNlLENBQUQsRUFBTztBQUFDZCxtQkFBVyxDQUFDYyxDQUFDLENBQUNpQixNQUFGLENBQVNDLEtBQVYsQ0FBWDtBQUE0QjtBQUhyRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBVkosRUFjWUMsTUFBTSxDQUFDQyxJQUFQLENBQVkzQixXQUFaLEVBQXlCNEIsR0FBekIsQ0FBNkIsVUFBQ0MsR0FBRCxFQUFTO0FBQ25DLDBCQUFPLHFFQUFDLDREQUFEO0FBQUEsa0JBQWU3QixXQUFXLENBQUM2QixHQUFEO0FBQTFCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFBUDtBQUNILEtBRkEsQ0FkWixlQWtCSSxxRUFBQyxrREFBRDtBQUFPLFVBQUksRUFBQyxNQUFaO0FBQ1EsaUJBQVcsRUFBQyxVQURwQjtBQUVRLFdBQUssRUFBRW5DLFFBRmY7QUFHUSxjQUFRLEVBQUUsa0JBQUNhLENBQUQsRUFBTztBQUFDWixtQkFBVyxDQUFDWSxDQUFDLENBQUNpQixNQUFGLENBQVNDLEtBQVYsQ0FBWDtBQUE0QjtBQUh0RDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBbEJKLEVBc0JhQyxNQUFNLENBQUNDLElBQVAsQ0FBWXpCLFdBQVosRUFBeUIwQixHQUF6QixDQUE2QixVQUFDQyxHQUFELEVBQVM7QUFDcEMsMEJBQU8scUVBQUMsNERBQUQ7QUFBQSxrQkFBZTNCLFdBQVcsQ0FBQzJCLEdBQUQ7QUFBMUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUFQO0FBQ0gsS0FGQyxDQXRCYixlQTBCSSxxRUFBQyxrREFBRDtBQUFPLFVBQUksRUFBQyxVQUFaO0FBQ1EsaUJBQVcsRUFBQyxVQURwQjtBQUVRLFdBQUssRUFBRWpDLFFBRmY7QUFHUSxjQUFRLEVBQUUsa0JBQUNXLENBQUQsRUFBTztBQUFDVixtQkFBVyxDQUFDVSxDQUFDLENBQUNpQixNQUFGLENBQVNDLEtBQVYsQ0FBWDtBQUE0QjtBQUh0RDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBMUJKLEVBOEJhQyxNQUFNLENBQUNDLElBQVAsQ0FBWXZCLFdBQVosRUFBeUJ3QixHQUF6QixDQUE2QixVQUFDQyxHQUFELEVBQVM7QUFDcEMsMEJBQU8scUVBQUMsNERBQUQ7QUFBQSxrQkFBZXpCLFdBQVcsQ0FBQ3lCLEdBQUQ7QUFBMUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUFQO0FBQ0gsS0FGQyxDQTlCYixlQWlDSSxxRUFBQyxrREFBRDtBQUFXLFVBQUksRUFBQyxRQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQWpDSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQXFDSCxDQXRIRDs7R0FBTXpDLFk7O01BQUFBLFk7QUF3SFNBLDJFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3JlZ2lzdGVyLmI5ZjcyN2E4ODVjYzVkYTI1Y2NiLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IFN1Ym1pdEJ0biBmcm9tICcuL1N1Ym1pdEJ0bidcclxuaW1wb3J0IElucHV0IGZyb20gJy4vRm9ybUlucHV0J1xyXG5pbXBvcnQgRXJyb3JNZXNzYWdlIGZyb20gJy4uL0NvbW1vbi9FcnJvck1lc3NhZ2UnXHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXHJcblxyXG5jb25zdCBGb3JtID0gc3R5bGVkLmZvcm1gXHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIHdpZHRoOiAxOHJlbTtcclxuYFxyXG5cclxuY29uc3QgUmVnaXN0ZXJGb3JtID0gKCkgPT4ge1xyXG5cclxuICAgIC8vIFNldHRpbmcgdGhlIHN0YXRlXHJcbiAgICBjb25zdCBbZW1haWwsIHNldEVtYWlsXSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIGNvbnN0IFtmdWxsbmFtZSwgc2V0RnVsbG5hbWVdID0gdXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgW3VzZXJuYW1lLCBzZXRVc2VybmFtZV0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCBbcGFzc3dvcmQsIHNldFBhc3N3b3JkXSA9IHVzZVN0YXRlKCcnKTtcclxuXHJcbiAgICBjb25zdCBbZW1haWxFcnIsIHNldEVtYWlsRXJyXSA9IHVzZVN0YXRlKHt9KTtcclxuICAgIGNvbnN0IFtmdWxsbmFtZUVyciwgc2V0RnVsbG5hbWVFcnJdID0gdXNlU3RhdGUoe30pO1xyXG4gICAgY29uc3QgW3VzZXJuYW1lRXJyLCBzZXRVc2VybmFtZUVycl0gPSB1c2VTdGF0ZSh7fSk7XHJcbiAgICBjb25zdCBbcGFzc3dvcmRFcnIsIHNldFBhc3N3b3JkRXJyXSA9IHVzZVN0YXRlKHt9KTtcclxuXHJcblxyXG4gICAgLy8gUHJldmVudHMgZm9ybSBmcm9tIHN1Ym1pdHRpbmcgbm9ybWFsbHkgb24gc3VibWl0XHJcbiAgICBjb25zdCBvblN1Ym1pdCA9IChlKSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGNvbnN0IGlzVmFsaWQgPSBmb3JtVmFsaWRhdGlvbigpO1xyXG4gICAgICAgIC8vIElmIHRoZSBkYXRhIHRoYXQgaXMgaW5wdXQgaXMgdmFsaWQgLVxyXG4gICAgICAgIGlmIChpc1ZhbGlkKSB7XHJcbiAgICAgICAgICAgIC8vIFNlbmQgdGhpcyBkYXRhIHRvIHRoZSBhcGlcclxuICAgICAgICAgICAgc2V0RW1haWwoJycpO1xyXG4gICAgICAgICAgICBzZXRGdWxsbmFtZSgnJyk7XHJcbiAgICAgICAgICAgIHNldFVzZXJuYW1lKCcnKTtcclxuICAgICAgICAgICAgc2V0UGFzc3dvcmQoJycpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKiBGcm9udGVuZCBmb3JtIHZhbGlkYXRpb24gaXMgaGFuZGxlZCBoZXJlICovXHJcbiAgICBjb25zdCBmb3JtVmFsaWRhdGlvbiA9ICgpID0+IHtcclxuICAgICAgICBjb25zdCBlbWFpbEVyciA9IHt9O1xyXG4gICAgICAgIGNvbnN0IGZ1bGxuYW1lRXJyID0ge307XHJcbiAgICAgICAgY29uc3QgdXNlcm5hbWVFcnIgPSB7fTtcclxuICAgICAgICBjb25zdCBwYXNzd29yZEVyciA9IHt9O1xyXG4gICAgICAgIGxldCBpc1ZhbGlkID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgLy8gUmVnZXggdG8gdGVzdCBlbWFpbCBhZ2FpbnN0XHJcbiAgICAgICAgbGV0IHJlZ2V4cCA9IC9eKChbXjw+KClbXFxdXFxcXC4sOzpcXHNAXCJdKyhcXC5bXjw+KClbXFxdXFxcXC4sOzpcXHNAXCJdKykqKXwoXCIuK1wiKSlAKChcXFtbMC05XXsxLDN9XFwuWzAtOV17MSwzfVxcLlswLTldezEsM31cXC5bMC05XXsxLDN9XSl8KChbYS16QS1aXFwtMC05XStcXC4pK1thLXpBLVpdezIsfSkpJC87XHJcblxyXG4gICAgICAgIC8vIElmIGVtYWlsIGlzIGxlZnQgZW1wdHkgb3IgZG9lcyBub3QgbWF0Y2ggdGhlIHJlZ2V4IC1cclxuICAgICAgICBpZiAoZW1haWwubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgIGVtYWlsRXJyLmVtYWlsRW1wdHkgPSBcIllvdSBtdXN0IGVudGVyIGFuIGVtYWlsIGFkZHJlc3MuXCI7XHJcbiAgICAgICAgfSBlbHNlIGlmICghZW1haWwuaW5jbHVkZXMoJ0AnKSkge1xyXG4gICAgICAgICAgICBlbWFpbEVyci5lbWFpbCA9IFwiRW1haWwgbXVzdCBoYXZlIEBcIjtcclxuICAgICAgICB9IGVsc2UgaWYgKHJlZ2V4cC50ZXN0KGVtYWlsKSA9PT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgZW1haWxFcnIuZW1haWxXcm9uZ0NoYXJzID0gXCJUaGlzIGlzIG5vdCBhIHZhbGlkIGVtYWlsIGFkZHJlc3MuXCI7XHJcbiAgICAgICAgICAgIGlzVmFsaWQgPSBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIElmIGZ1bGwgbmFtZSBpcyBsZWZ0IGVtcHR5IG9yIGZpcnN0IGxldHRlciBvZiB0aGUgZnVsbCBuYW1lIGlzbid0IGNhcGl0YWxpemVkIC1cclxuICAgICAgICBpZiAoZnVsbG5hbWUubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgIGZ1bGxuYW1lRXJyLmZ1bGxuYW1lRW1wdHkgPSBcIllvdSBtdXN0IGVudGVyIGEgZnVsbCBuYW1lLlwiO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoZnVsbG5hbWVbMF0gIT09IGZ1bGxuYW1lWzBdLnRvVXBwZXJDYXNlKCkpIHtcclxuICAgICAgICAgICAgZnVsbG5hbWVFcnIuc3RhcnRzTG93ZXJjYXNlID0gXCJGaXJzdCBsZXR0ZXIgb2YgZnVsbCBuYW1lIG5lZWRzIHRvIGJlIGNhcGl0YWxpemVkLlwiO1xyXG4gICAgICAgICAgICBpc1ZhbGlkID0gZmFsc2U7XHJcbiAgICAgICAgfSBcclxuXHJcbiAgICAgICAgLy8gSWYgdXNlcm5hbWUgaXMgbGVmdCBlbXB0eSBvciBsZW5ndGggb2YgdGhlIHVzZXJuYW1lIGlzIGxlc3MgdGhhbiBmaXZlIGNoYXJhY3RlcnMgLVxyXG4gICAgICAgIGlmICh1c2VybmFtZS5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgdXNlcm5hbWVFcnIudXNlcm5hbWVFbXB0eSA9IFwiWW91IG11c3QgZW50ZXIgYSB1c2VybmFtZS5cIjtcclxuICAgICAgICB9IGVsc2UgaWYgKHVzZXJuYW1lLmxlbmd0aCA8IDUpIHtcclxuICAgICAgICAgICAgdXNlcm5hbWVFcnIudXNlcm5hbWVTaG9ydCA9IFwiVXNlcm5hbWUgbmVlZHMgdG8gYmUgNSBvciBtb3JlIGNoYXJhY3RlcnMuXCI7XHJcbiAgICAgICAgICAgIGlzVmFsaWQgPSBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIElmIHRoZSBsZW5ndGggb2YgdGhlIHBhc3N3b3JkIGlzIGxlc3MgdGhhbiB0aHJlZSBjaGFyYWN0ZXJzIC1cclxuICAgICAgICBpZiAocGFzc3dvcmQubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgIHBhc3N3b3JkRXJyLnBhc3N3b3JkRW1wdHkgPSBcIllvdSBtdXN0IGVudGVyIGEgcGFzc3dvcmQuXCI7XHJcbiAgICAgICAgfSBlbHNlIGlmIChwYXNzd29yZC5sZW5ndGggPCAzKSB7XHJcbiAgICAgICAgICAgIHBhc3N3b3JkRXJyLnBhc3N3b3JkU2hvcnQgPSBcIlBhc3N3b3JkIG5lZWRzIHRvIGJlIDMgb3IgbW9yZSBjaGFyYWN0ZXJzLlwiO1xyXG4gICAgICAgICAgICBpc1ZhbGlkID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBVcGRhdGUgZXJyb3Igb2JqZWN0c1xyXG4gICAgICAgIHNldEVtYWlsRXJyKGVtYWlsRXJyKTtcclxuICAgICAgICBzZXRGdWxsbmFtZUVycihmdWxsbmFtZUVycik7XHJcbiAgICAgICAgc2V0VXNlcm5hbWVFcnIodXNlcm5hbWVFcnIpO1xyXG4gICAgICAgIHNldFBhc3N3b3JkRXJyKHBhc3N3b3JkRXJyKTtcclxuICAgICAgICByZXR1cm4gaXNWYWxpZDtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxGb3JtIG9uU3VibWl0PXtvblN1Ym1pdH0+XHJcbiAgICAgICAgICAgIHsvKiA8bGFiZWwgZm9yPVwiZW1haWxcIj5FbWFpbCA6IDwvbGFiZWw+ICovfVxyXG4gICAgICAgICAgICA8SW5wdXQgdHlwZT1cInRleHRcIiBcclxuICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW1haWxcIlxyXG4gICAgICAgICAgICAgICAgICAgdmFsdWU9e2VtYWlsfVxyXG4gICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7c2V0RW1haWwoZS50YXJnZXQudmFsdWUpfX0vPlxyXG4gICAgICAgICAgICAgICAgICAge09iamVjdC5rZXlzKGVtYWlsRXJyKS5tYXAoKGtleSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8RXJyb3JNZXNzYWdlPntlbWFpbEVycltrZXldfTwvRXJyb3JNZXNzYWdlPlxyXG4gICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgIHsvKiA8bGFiZWwgZm9yPVwiZnVsbG5hbWVcIj5GdWxsIG5hbWUgOiA8L2xhYmVsPiAqL31cclxuICAgICAgICAgICAgPElucHV0IHR5cGU9XCJ0ZXh0XCIgXHJcbiAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkZ1bGwgbmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICB2YWx1ZT17ZnVsbG5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtzZXRGdWxsbmFtZShlLnRhcmdldC52YWx1ZSl9fS8+XHJcbiAgICAgICAgICAgICAgICAgICB7T2JqZWN0LmtleXMoZnVsbG5hbWVFcnIpLm1hcCgoa2V5KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxFcnJvck1lc3NhZ2U+e2Z1bGxuYW1lRXJyW2tleV19PC9FcnJvck1lc3NhZ2U+XHJcbiAgICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgey8qIDxsYWJlbCBmb3I9XCJ1c2VybmFtZVwiPlVzZXJuYW1lIDogPC9sYWJlbD4gKi99XHJcbiAgICAgICAgICAgIDxJbnB1dCB0eXBlPVwidGV4dFwiIFxyXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiVXNlcm5hbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXt1c2VybmFtZX1cclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtzZXRVc2VybmFtZShlLnRhcmdldC52YWx1ZSl9fS8+XHJcbiAgICAgICAgICAgICAgICAgICAge09iamVjdC5rZXlzKHVzZXJuYW1lRXJyKS5tYXAoKGtleSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8RXJyb3JNZXNzYWdlPnt1c2VybmFtZUVycltrZXldfTwvRXJyb3JNZXNzYWdlPlxyXG4gICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgIHsvKiA8bGFiZWwgZm9yPVwicGFzc3dvcmRcIj5QYXNzd29yZCA6IDwvbGFiZWw+ICovfVxyXG4gICAgICAgICAgICA8SW5wdXQgdHlwZT1cInBhc3N3b3JkXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJQYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3Bhc3N3b3JkfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge3NldFBhc3N3b3JkKGUudGFyZ2V0LnZhbHVlKX19Lz5cclxuICAgICAgICAgICAgICAgICAgICB7T2JqZWN0LmtleXMocGFzc3dvcmRFcnIpLm1hcCgoa2V5KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxFcnJvck1lc3NhZ2U+e3Bhc3N3b3JkRXJyW2tleV19PC9FcnJvck1lc3NhZ2U+XHJcbiAgICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgPFN1Ym1pdEJ0biB0eXBlPVwic3VibWl0XCI+U2lnbiB1cDwvU3VibWl0QnRuPlxyXG4gICAgICAgIDwvRm9ybT5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmVnaXN0ZXJGb3JtXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=