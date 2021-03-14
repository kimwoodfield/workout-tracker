webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Forms/LoginForm.js":
/*!***************************************!*\
  !*** ./components/Forms/LoginForm.js ***!
  \***************************************/
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


var _jsxFileName = "C:\\Users\\kimwoodfield\\Documents\\GitHub\\workout-tracker\\frontend\\components\\Forms\\LoginForm.js",
    _this = undefined,
    _s = $RefreshSig$();






var Form = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].form.withConfig({
  displayName: "LoginForm__Form",
  componentId: "sc-1udqss8-0"
})(["display:flex;flex-direction:column;width:18rem;"]);
_c = Form;

var LoginForm = function LoginForm() {
  _s();

  // Setting the state
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(''),
      username = _useState[0],
      setUsername = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(''),
      password = _useState2[0],
      setPassword = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({}),
      usernameErr = _useState3[0],
      setUsernameErr = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({}),
      passwordErr = _useState4[0],
      setPasswordErr = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      submitting = _useState5[0],
      setSubmitting = _useState5[1]; // Handles the form submission


  var onSubmit = function onSubmit(e) {
    e.preventDefault();
    setSubmitting(true);
    var isValid = formValidation(); // If the input data is valid -

    if (isValid) {
      // Send this data to the api
      fetch('http://localhost:3000/login', {
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
      .setUsername('');
      setPassword('');
    }
  };
  /* Frontend form validation is handled here */


  var formValidation = function formValidation() {
    var usernameErr = {};
    var passwordErr = {};
    var isValid = true; // If username is left empty or length of the username is less than five characters -

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


    setUsernameErr(usernameErr);
    setPasswordErr(passwordErr);
    return isValid;
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Form, {
    onSubmit: onSubmit,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_FormInput__WEBPACK_IMPORTED_MODULE_3__["default"], {
      type: "text",
      placeholder: "Username",
      value: username,
      onChange: function onChange(e) {
        setUsername(e.target.value);
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 13
    }, _this), Object.keys(usernameErr).map(function (key) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Common_ErrorMessage__WEBPACK_IMPORTED_MODULE_4__["default"], {
        children: usernameErr[key]
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 82,
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
      lineNumber: 85,
      columnNumber: 13
    }, _this), Object.keys(passwordErr).map(function (key) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Common_ErrorMessage__WEBPACK_IMPORTED_MODULE_4__["default"], {
        children: passwordErr[key]
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 90,
        columnNumber: 31
      }, _this);
    }), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_SubmitBtn__WEBPACK_IMPORTED_MODULE_2__["default"], {
      type: "submit",
      children: "Log In"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 13
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 75,
    columnNumber: 9
  }, _this);
};

_s(LoginForm, "QEJGvB6xLiXaNBw9M7ytXLREF7w=");

_c2 = LoginForm;
/* harmony default export */ __webpack_exports__["default"] = (LoginForm);

var _c, _c2;

$RefreshReg$(_c, "Form");
$RefreshReg$(_c2, "LoginForm");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Gb3Jtcy9Mb2dpbkZvcm0uanMiXSwibmFtZXMiOlsiRm9ybSIsInN0eWxlZCIsImZvcm0iLCJMb2dpbkZvcm0iLCJ1c2VTdGF0ZSIsInVzZXJuYW1lIiwic2V0VXNlcm5hbWUiLCJwYXNzd29yZCIsInNldFBhc3N3b3JkIiwidXNlcm5hbWVFcnIiLCJzZXRVc2VybmFtZUVyciIsInBhc3N3b3JkRXJyIiwic2V0UGFzc3dvcmRFcnIiLCJzdWJtaXR0aW5nIiwic2V0U3VibWl0dGluZyIsIm9uU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0IiwiaXNWYWxpZCIsImZvcm1WYWxpZGF0aW9uIiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJlbWFpbCIsImZ1bGxuYW1lIiwidGhlbiIsInJlcyIsImpzb24iLCJsZW5ndGgiLCJ1c2VybmFtZUVtcHR5IiwidXNlcm5hbWVTaG9ydCIsInBhc3N3b3JkRW1wdHkiLCJwYXNzd29yZFNob3J0IiwidGFyZ2V0IiwidmFsdWUiLCJPYmplY3QiLCJrZXlzIiwibWFwIiwia2V5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLElBQUksR0FBR0MseURBQU0sQ0FBQ0MsSUFBVjtBQUFBO0FBQUE7QUFBQSx1REFBVjtLQUFNRixJOztBQU1OLElBQU1HLFNBQVMsR0FBRyxTQUFaQSxTQUFZLEdBQU07QUFBQTs7QUFFcEI7QUFGb0Isa0JBR1lDLHNEQUFRLENBQUMsRUFBRCxDQUhwQjtBQUFBLE1BR2JDLFFBSGE7QUFBQSxNQUdIQyxXQUhHOztBQUFBLG1CQUlZRixzREFBUSxDQUFDLEVBQUQsQ0FKcEI7QUFBQSxNQUliRyxRQUphO0FBQUEsTUFJSEMsV0FKRzs7QUFBQSxtQkFNa0JKLHNEQUFRLENBQUMsRUFBRCxDQU4xQjtBQUFBLE1BTWJL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QUEsZUFBUDtBQUNILEtBRkMsQ0FOYixlQVVJLHFFQUFDLGtEQUFEO0FBQU8sVUFBSSxFQUFDLFVBQVo7QUFDUSxpQkFBVyxFQUFDLFVBRHBCO0FBRVEsV0FBSyxFQUFFbEMsUUFGZjtBQUdRLGNBQVEsRUFBRSxrQkFBQ1MsQ0FBRCxFQUFPO0FBQUNSLG1CQUFXLENBQUNRLENBQUMsQ0FBQ29CLE1BQUYsQ0FBU0MsS0FBVixDQUFYO0FBQTRCO0FBSHREO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFWSixFQWNhQyxNQUFNLENBQUNDLElBQVAsQ0FBWTVCLFdBQVosRUFBeUI2QixHQUF6QixDQUE2QixVQUFDQyxHQUFELEVBQVM7QUFDcEMsMEJBQU8scUVBQUMsNERBQUQ7QUFBQSxrQkFBZTlCLFdBQVcsQ0FBQzhCLEdBQUQ7QUFBMUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUFQO0FBQ0gsS0FGQyxDQWRiLGVBaUJJLHFFQUFDLGtEQUFEO0FBQVcsVUFBSSxFQUFDLFFBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBakJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKO0FBcUJILENBbEZEOztHQUFNdEMsUzs7TUFBQUEsUztBQW9GU0Esd0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYmY3ZDVjMWQwYTkyYTg2MjI1MTcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgU3VibWl0QnRuIGZyb20gJy4vU3VibWl0QnRuJ1xyXG5pbXBvcnQgSW5wdXQgZnJvbSAnLi9Gb3JtSW5wdXQnXHJcbmltcG9ydCBFcnJvck1lc3NhZ2UgZnJvbSAnLi4vQ29tbW9uL0Vycm9yTWVzc2FnZSdcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcclxuXHJcbmNvbnN0IEZvcm0gPSBzdHlsZWQuZm9ybWBcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgd2lkdGg6IDE4cmVtO1xyXG5gXHJcblxyXG5jb25zdCBMb2dpbkZvcm0gPSAoKSA9PiB7XHJcblxyXG4gICAgLy8gU2V0dGluZyB0aGUgc3RhdGVcclxuICAgIGNvbnN0IFt1c2VybmFtZSwgc2V0VXNlcm5hbWVdID0gdXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgW3Bhc3N3b3JkLCBzZXRQYXNzd29yZF0gPSB1c2VTdGF0ZSgnJyk7XHJcblxyXG4gICAgY29uc3QgW3VzZXJuYW1lRXJyLCBzZXRVc2VybmFtZUVycl0gPSB1c2VTdGF0ZSh7fSk7XHJcbiAgICBjb25zdCBbcGFzc3dvcmRFcnIsIHNldFBhc3N3b3JkRXJyXSA9IHVzZVN0YXRlKHt9KTtcclxuXHJcbiAgICBjb25zdCBbIHN1Ym1pdHRpbmcsIHNldFN1Ym1pdHRpbmcgXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgICAvLyBIYW5kbGVzIHRoZSBmb3JtIHN1Ym1pc3Npb25cclxuICAgIGNvbnN0IG9uU3VibWl0ID0gKGUpID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgc2V0U3VibWl0dGluZyh0cnVlKTtcclxuICAgICAgICBjb25zdCBpc1ZhbGlkID0gZm9ybVZhbGlkYXRpb24oKTtcclxuICAgICAgICAvLyBJZiB0aGUgaW5wdXQgZGF0YSBpcyB2YWxpZCAtXHJcbiAgICAgICAgaWYgKGlzVmFsaWQpIHtcclxuICAgICAgICAgICAgLy8gU2VuZCB0aGlzIGRhdGEgdG8gdGhlIGFwaVxyXG4gICAgICAgICAgICBmZXRjaCgnaHR0cDovL2xvY2FsaG9zdDozMDAwL2xvZ2luJywge1xyXG4gICAgICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgZW1haWwsIGZ1bGxuYW1lLCB1c2VybmFtZSwgcGFzc3dvcmQgfSksXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC50aGVuKHJlcyA9PiByZXMuanNvbigpKSAvLyBwYXJzZSB0aGUgcmVzcG9uc2UgYXMgSlNPTlxyXG4gICAgICAgICAgICAuXHJcbiAgICAgICAgICAgIHNldFVzZXJuYW1lKCcnKTtcclxuICAgICAgICAgICAgc2V0UGFzc3dvcmQoJycpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKiBGcm9udGVuZCBmb3JtIHZhbGlkYXRpb24gaXMgaGFuZGxlZCBoZXJlICovXHJcbiAgICBjb25zdCBmb3JtVmFsaWRhdGlvbiA9ICgpID0+IHtcclxuICAgICAgICBjb25zdCB1c2VybmFtZUVyciA9IHt9O1xyXG4gICAgICAgIGNvbnN0IHBhc3N3b3JkRXJyID0ge307XHJcbiAgICAgICAgbGV0IGlzVmFsaWQgPSB0cnVlO1xyXG5cclxuICAgICAgICAvLyBJZiB1c2VybmFtZSBpcyBsZWZ0IGVtcHR5IG9yIGxlbmd0aCBvZiB0aGUgdXNlcm5hbWUgaXMgbGVzcyB0aGFuIGZpdmUgY2hhcmFjdGVycyAtXHJcbiAgICAgICAgaWYgKHVzZXJuYW1lLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICB1c2VybmFtZUVyci51c2VybmFtZUVtcHR5ID0gXCJZb3UgbXVzdCBlbnRlciBhIHVzZXJuYW1lLlwiO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodXNlcm5hbWUubGVuZ3RoIDwgNSkge1xyXG4gICAgICAgICAgICB1c2VybmFtZUVyci51c2VybmFtZVNob3J0ID0gXCJVc2VybmFtZSBuZWVkcyB0byBiZSA1IG9yIG1vcmUgY2hhcmFjdGVycy5cIjtcclxuICAgICAgICAgICAgaXNWYWxpZCA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gSWYgdGhlIGxlbmd0aCBvZiB0aGUgcGFzc3dvcmQgaXMgbGVzcyB0aGFuIHRocmVlIGNoYXJhY3RlcnMgLVxyXG4gICAgICAgIGlmIChwYXNzd29yZC5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgcGFzc3dvcmRFcnIucGFzc3dvcmRFbXB0eSA9IFwiWW91IG11c3QgZW50ZXIgYSBwYXNzd29yZC5cIjtcclxuICAgICAgICB9IGVsc2UgaWYgKHBhc3N3b3JkLmxlbmd0aCA8IDQpIHtcclxuICAgICAgICAgICAgcGFzc3dvcmRFcnIucGFzc3dvcmRTaG9ydCA9IFwiUGFzc3dvcmQgbmVlZHMgdG8gYmUgNCBvciBtb3JlIGNoYXJhY3RlcnMuXCI7XHJcbiAgICAgICAgICAgIGlzVmFsaWQgPSBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIFVwZGF0ZSBlcnJvciBvYmplY3RzXHJcbiAgICAgICAgc2V0VXNlcm5hbWVFcnIodXNlcm5hbWVFcnIpO1xyXG4gICAgICAgIHNldFBhc3N3b3JkRXJyKHBhc3N3b3JkRXJyKTtcclxuICAgICAgICByZXR1cm4gaXNWYWxpZDtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxGb3JtIG9uU3VibWl0PXtvblN1Ym1pdH0+XHJcbiAgICAgICAgICAgIHsvKiA8bGFiZWwgZm9yPVwidXNlcm5hbWVcIj5Vc2VybmFtZSA6IDwvbGFiZWw+ICovfVxyXG4gICAgICAgICAgICA8SW5wdXQgdHlwZT1cInRleHRcIiBcclxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlVzZXJuYW1lXCJcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dXNlcm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7c2V0VXNlcm5hbWUoZS50YXJnZXQudmFsdWUpfX0vPlxyXG4gICAgICAgICAgICAgICAgICAgIHtPYmplY3Qua2V5cyh1c2VybmFtZUVycikubWFwKChrZXkpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPEVycm9yTWVzc2FnZT57dXNlcm5hbWVFcnJba2V5XX08L0Vycm9yTWVzc2FnZT5cclxuICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICB7LyogPGxhYmVsIGZvcj1cInBhc3N3b3JkXCI+UGFzc3dvcmQgOiA8L2xhYmVsPiAqL31cclxuICAgICAgICAgICAgPElucHV0IHR5cGU9XCJwYXNzd29yZFwiIFxyXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiUGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtwYXNzd29yZH1cclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtzZXRQYXNzd29yZChlLnRhcmdldC52YWx1ZSl9fS8+XHJcbiAgICAgICAgICAgICAgICAgICAge09iamVjdC5rZXlzKHBhc3N3b3JkRXJyKS5tYXAoKGtleSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8RXJyb3JNZXNzYWdlPntwYXNzd29yZEVycltrZXldfTwvRXJyb3JNZXNzYWdlPlxyXG4gICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgIDxTdWJtaXRCdG4gdHlwZT1cInN1Ym1pdFwiPkxvZyBJbjwvU3VibWl0QnRuPlxyXG4gICAgICAgIDwvRm9ybT5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTG9naW5Gb3JtXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=