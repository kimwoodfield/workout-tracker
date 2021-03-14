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
          username: username,
          password: password
        })
      }).then(function (res) {
        return res.json();
      }) // parse the response as JSON
      .then(function (data) {
        // Request sent.
        if (data.ok === false) {
          // if the response is a 201, let the user login.
          console.log(data.msg);
          alert(data.msg);
        } else {// if the response is a 401, block the submission.
        }

        console.log(data.msg);
        alert(data.msg);
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
      lineNumber: 92,
      columnNumber: 13
    }, _this), Object.keys(usernameErr).map(function (key) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Common_ErrorMessage__WEBPACK_IMPORTED_MODULE_4__["default"], {
        children: usernameErr[key]
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 97,
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
      lineNumber: 100,
      columnNumber: 13
    }, _this), Object.keys(passwordErr).map(function (key) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Common_ErrorMessage__WEBPACK_IMPORTED_MODULE_4__["default"], {
        children: passwordErr[key]
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 105,
        columnNumber: 31
      }, _this);
    }), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_SubmitBtn__WEBPACK_IMPORTED_MODULE_2__["default"], {
      type: "submit",
      children: "Log In"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 13
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 90,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Gb3Jtcy9Mb2dpbkZvcm0uanMiXSwibmFtZXMiOlsiRm9ybSIsInN0eWxlZCIsImZvcm0iLCJMb2dpbkZvcm0iLCJ1c2VTdGF0ZSIsInVzZXJuYW1lIiwic2V0VXNlcm5hbWUiLCJwYXNzd29yZCIsInNldFBhc3N3b3JkIiwidXNlcm5hbWVFcnIiLCJzZXRVc2VybmFtZUVyciIsInBhc3N3b3JkRXJyIiwic2V0UGFzc3dvcmRFcnIiLCJzdWJtaXR0aW5nIiwic2V0U3VibWl0dGluZyIsIm9uU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0IiwiaXNWYWxpZCIsImZvcm1WYWxpZGF0aW9uIiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJ0aGVuIiwicmVzIiwianNvbiIsImRhdGEiLCJvayIsImNvbnNvbGUiLCJsb2ciLCJtc2ciLCJhbGVydCIsImVyciIsImxlbmd0aCIsInVzZXJuYW1lRW1wdHkiLCJ1c2VybmFtZVNob3J0IiwicGFzc3dvcmRFbXB0eSIsInBhc3N3b3JkU2hvcnQiLCJ0YXJnZXQiLCJ2YWx1ZSIsIk9iamVjdCIsImtleXMiLCJtYXAiLCJrZXkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsSUFBSSxHQUFHQyx5REFBTSxDQUFDQyxJQUFWO0FBQUE7QUFBQTtBQUFBLHVEQUFWO0tBQU1GLEk7O0FBTU4sSUFBTUcsU0FBUyxHQUFHLFNBQVpBLFNBQVksR0FBTTtBQUFBOztBQUVwQjtBQUZvQixrQkFHWUMsc0RBQVEsQ0FBQyxFQUFELENBSHBCO0FBQUEsTUFHYkMsUUFIYTtBQUFBLE1BR0hDLFdBSEc7O0FBQUEsbUJBSVlGLHNEQUFRLENBQUMsRUFBRCxDQUpwQjtBQUFBLE1BSWJHLFFBSmE7QUFBQSxNQUlIQyxXQUpHOztBQUFBLG1CQU1rQkosc0RB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OiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4xNGNmMzczNmVmYmZmMzAxY2M5Ny5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBTdWJtaXRCdG4gZnJvbSAnLi9TdWJtaXRCdG4nXHJcbmltcG9ydCBJbnB1dCBmcm9tICcuL0Zvcm1JbnB1dCdcclxuaW1wb3J0IEVycm9yTWVzc2FnZSBmcm9tICcuLi9Db21tb24vRXJyb3JNZXNzYWdlJ1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xyXG5cclxuY29uc3QgRm9ybSA9IHN0eWxlZC5mb3JtYFxyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICB3aWR0aDogMThyZW07XHJcbmBcclxuXHJcbmNvbnN0IExvZ2luRm9ybSA9ICgpID0+IHtcclxuXHJcbiAgICAvLyBTZXR0aW5nIHRoZSBzdGF0ZVxyXG4gICAgY29uc3QgW3VzZXJuYW1lLCBzZXRVc2VybmFtZV0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCBbcGFzc3dvcmQsIHNldFBhc3N3b3JkXSA9IHVzZVN0YXRlKCcnKTtcclxuXHJcbiAgICBjb25zdCBbdXNlcm5hbWVFcnIsIHNldFVzZXJuYW1lRXJyXSA9IHVzZVN0YXRlKHt9KTtcclxuICAgIGNvbnN0IFtwYXNzd29yZEVyciwgc2V0UGFzc3dvcmRFcnJdID0gdXNlU3RhdGUoe30pO1xyXG5cclxuICAgIGNvbnN0IFsgc3VibWl0dGluZywgc2V0U3VibWl0dGluZyBdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICAgIC8vIEhhbmRsZXMgdGhlIGZvcm0gc3VibWlzc2lvblxyXG4gICAgY29uc3Qgb25TdWJtaXQgPSAoZSkgPT4ge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBzZXRTdWJtaXR0aW5nKHRydWUpO1xyXG4gICAgICAgIGNvbnN0IGlzVmFsaWQgPSBmb3JtVmFsaWRhdGlvbigpO1xyXG4gICAgICAgIC8vIElmIHRoZSBpbnB1dCBkYXRhIGlzIHZhbGlkIC1cclxuICAgICAgICBpZiAoaXNWYWxpZCkge1xyXG4gICAgICAgICAgICAvLyBTZW5kIHRoaXMgZGF0YSB0byB0aGUgYXBpXHJcbiAgICAgICAgICAgIGZldGNoKCdodHRwOi8vbG9jYWxob3N0OjMwMDAvbG9naW4nLCB7XHJcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyB1c2VybmFtZSwgcGFzc3dvcmQgfSksXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC50aGVuKHJlcyA9PiByZXMuanNvbigpKSAvLyBwYXJzZSB0aGUgcmVzcG9uc2UgYXMgSlNPTlxyXG4gICAgICAgICAgICAudGhlbihkYXRhID0+IHtcclxuICAgICAgICAgICAgICAgIC8vIFJlcXVlc3Qgc2VudC5cclxuICAgICAgICAgICAgICAgIGlmIChkYXRhLm9rID09PSBmYWxzZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGlmIHRoZSByZXNwb25zZSBpcyBhIDIwMSwgbGV0IHRoZSB1c2VyIGxvZ2luLlxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEubXNnKTtcclxuICAgICAgICAgICAgICAgICAgICBhbGVydChkYXRhLm1zZylcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gaWYgdGhlIHJlc3BvbnNlIGlzIGEgNDAxLCBibG9jayB0aGUgc3VibWlzc2lvbi5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEubXNnKTtcclxuICAgICAgICAgICAgICAgIGFsZXJ0KGRhdGEubXNnKTtcclxuICAgICAgICAgICAgICAgIHNldFVzZXJuYW1lKCcnKTtcclxuICAgICAgICAgICAgICAgIHNldFBhc3N3b3JkKCcnKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKGVyciA9PiB7XHJcbiAgICAgICAgICAgICAgICAvLyBGZXRjaCBjb3VsZG4ndCBzZW5kIHRoZSByZXF1ZXN0LlxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2ZldGNoIGZhaWxlZCcpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0gXHJcbiAgICB9XHJcblxyXG4gICAgLyogRnJvbnRlbmQgZm9ybSB2YWxpZGF0aW9uIGlzIGhhbmRsZWQgaGVyZSAqL1xyXG4gICAgY29uc3QgZm9ybVZhbGlkYXRpb24gPSAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgdXNlcm5hbWVFcnIgPSB7fTtcclxuICAgICAgICBjb25zdCBwYXNzd29yZEVyciA9IHt9O1xyXG4gICAgICAgIGxldCBpc1ZhbGlkID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgLy8gSWYgdXNlcm5hbWUgaXMgbGVmdCBlbXB0eSBvciBsZW5ndGggb2YgdGhlIHVzZXJuYW1lIGlzIGxlc3MgdGhhbiBmaXZlIGNoYXJhY3RlcnMgLVxyXG4gICAgICAgIGlmICh1c2VybmFtZS5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgdXNlcm5hbWVFcnIudXNlcm5hbWVFbXB0eSA9IFwiWW91IG11c3QgZW50ZXIgYSB1c2VybmFtZS5cIjtcclxuICAgICAgICB9IGVsc2UgaWYgKHVzZXJuYW1lLmxlbmd0aCA8IDUpIHtcclxuICAgICAgICAgICAgdXNlcm5hbWVFcnIudXNlcm5hbWVTaG9ydCA9IFwiVXNlcm5hbWUgbmVlZHMgdG8gYmUgNSBvciBtb3JlIGNoYXJhY3RlcnMuXCI7XHJcbiAgICAgICAgICAgIGlzVmFsaWQgPSBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIElmIHRoZSBsZW5ndGggb2YgdGhlIHBhc3N3b3JkIGlzIGxlc3MgdGhhbiB0aHJlZSBjaGFyYWN0ZXJzIC1cclxuICAgICAgICBpZiAocGFzc3dvcmQubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgIHBhc3N3b3JkRXJyLnBhc3N3b3JkRW1wdHkgPSBcIllvdSBtdXN0IGVudGVyIGEgcGFzc3dvcmQuXCI7XHJcbiAgICAgICAgfSBlbHNlIGlmIChwYXNzd29yZC5sZW5ndGggPCA0KSB7XHJcbiAgICAgICAgICAgIHBhc3N3b3JkRXJyLnBhc3N3b3JkU2hvcnQgPSBcIlBhc3N3b3JkIG5lZWRzIHRvIGJlIDQgb3IgbW9yZSBjaGFyYWN0ZXJzLlwiO1xyXG4gICAgICAgICAgICBpc1ZhbGlkID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBVcGRhdGUgZXJyb3Igb2JqZWN0c1xyXG4gICAgICAgIHNldFVzZXJuYW1lRXJyKHVzZXJuYW1lRXJyKTtcclxuICAgICAgICBzZXRQYXNzd29yZEVycihwYXNzd29yZEVycik7XHJcbiAgICAgICAgcmV0dXJuIGlzVmFsaWQ7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8Rm9ybSBvblN1Ym1pdD17b25TdWJtaXR9PlxyXG4gICAgICAgICAgICB7LyogPGxhYmVsIGZvcj1cInVzZXJuYW1lXCI+VXNlcm5hbWUgOiA8L2xhYmVsPiAqL31cclxuICAgICAgICAgICAgPElucHV0IHR5cGU9XCJ0ZXh0XCIgXHJcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJVc2VybmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3VzZXJuYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge3NldFVzZXJuYW1lKGUudGFyZ2V0LnZhbHVlKX19Lz5cclxuICAgICAgICAgICAgICAgICAgICB7T2JqZWN0LmtleXModXNlcm5hbWVFcnIpLm1hcCgoa2V5KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxFcnJvck1lc3NhZ2U+e3VzZXJuYW1lRXJyW2tleV19PC9FcnJvck1lc3NhZ2U+XHJcbiAgICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgey8qIDxsYWJlbCBmb3I9XCJwYXNzd29yZFwiPlBhc3N3b3JkIDogPC9sYWJlbD4gKi99XHJcbiAgICAgICAgICAgIDxJbnB1dCB0eXBlPVwicGFzc3dvcmRcIiBcclxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17cGFzc3dvcmR9XHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7c2V0UGFzc3dvcmQoZS50YXJnZXQudmFsdWUpfX0vPlxyXG4gICAgICAgICAgICAgICAgICAgIHtPYmplY3Qua2V5cyhwYXNzd29yZEVycikubWFwKChrZXkpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPEVycm9yTWVzc2FnZT57cGFzc3dvcmRFcnJba2V5XX08L0Vycm9yTWVzc2FnZT5cclxuICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICA8U3VibWl0QnRuIHR5cGU9XCJzdWJtaXRcIj5Mb2cgSW48L1N1Ym1pdEJ0bj5cclxuICAgICAgICA8L0Zvcm0+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IExvZ2luRm9ybVxyXG4iXSwic291cmNlUm9vdCI6IiJ9