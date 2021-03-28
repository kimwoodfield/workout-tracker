webpackHotUpdate_N_E("pages/addroutine",{

/***/ "./components/Forms/RoutineForm.js":
/*!*****************************************!*\
  !*** ./components/Forms/RoutineForm.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Routine; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_kimwoodfield_Documents_GitHub_workout_tracker_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ "./node_modules/next/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_kimwoodfield_Documents_GitHub_workout_tracker_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(C_Users_kimwoodfield_Documents_GitHub_workout_tracker_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var C_Users_kimwoodfield_Documents_GitHub_workout_tracker_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _FormInput__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./FormInput */ "./components/Forms/FormInput.js");
/* harmony import */ var _SubmitBtn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./SubmitBtn */ "./components/Forms/SubmitBtn.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-hook-form */ "./node_modules/react-hook-form/dist/index.esm.js");
/* harmony import */ var _Common_ErrorMessage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Common/ErrorMessage */ "./components/Common/ErrorMessage.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_9__);




var _jsxFileName = "C:\\Users\\kimwoodfield\\Documents\\GitHub\\workout-tracker\\frontend\\components\\Forms\\RoutineForm.js",
    _s = $RefreshSig$();








var Form = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].form.withConfig({
  displayName: "RoutineForm__Form",
  componentId: "sc-1ufn8ur-0"
})(["display:flex;flex-direction:column;width:18rem;padding-bottom:1rem;"]);
_c = Form;
var Group = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "RoutineForm__Group",
  componentId: "sc-1ufn8ur-1"
})(["padding:0.5rem 0;margin:0.5rem 0;"]);
_c2 = Group;
function Routine() {
  _s();

  var _this = this;

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_9__["useRouter"])();

  var _useForm = Object(react_hook_form__WEBPACK_IMPORTED_MODULE_7__["useForm"])(),
      register = _useForm.register,
      handleSubmit = _useForm.handleSubmit,
      errors = _useForm.errors;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])([]),
      exercise = _useState[0],
      setExercise = _useState[1]; // Handles the form submission


  var onSubmit = function onSubmit(data) {
    // If the input data is valid - 
    // Make a POST request to our api route with the input data
    fetch('http://localhost:3000/addroutine', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data),
      credentials: 'include'
    }).then(function (res) {
      switch (res.status) {
        case 400:
          console.log('This is a 400 error.');
          break;

        case 429:
          console.log('This is a 429 error. Rate limit exceeded');
          break;

        case 201:
          res.json().then(function (data) {
            // request sent
            console.log('this worked');
            alert('Exercise added!');
            router.push('/exercises');
          });
      }
    });
  };

  Object(react__WEBPACK_IMPORTED_MODULE_6__["useEffect"])(function () {
    function doFetch() {
      return _doFetch.apply(this, arguments);
    }

    function _doFetch() {
      _doFetch = Object(C_Users_kimwoodfield_Documents_GitHub_workout_tracker_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/C_Users_kimwoodfield_Documents_GitHub_workout_tracker_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {
        var url, res, body;
        return C_Users_kimwoodfield_Documents_GitHub_workout_tracker_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                url = 'http://localhost:3000/exercises';
                _context.next = 3;
                return fetch('http://localhost:3000/exercises', {
                  method: 'GET',
                  headers: {
                    'Content-Type': 'application/json'
                  },
                  credentials: 'include'
                });

              case 3:
                res = _context.sent;
                _context.next = 6;
                return res.json();

              case 6:
                body = _context.sent;
                console.log('body is ...', body);
                setExercise(body.exercisesResults);

              case 9:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));
      return _doFetch.apply(this, arguments);
    }

    doFetch();
  }, []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Form, {
    onSubmit: handleSubmit(onSubmit),
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
        children: " Routine Name : "
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 81,
        columnNumber: 13
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_FormInput__WEBPACK_IMPORTED_MODULE_4__["default"], {
        type: "text",
        placeholder: "Routine name...",
        name: "routine_name",
        ref: register
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 82,
        columnNumber: 13
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Group, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
        children: " Exercise 1 : "
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 92,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("select", {
        name: "first_exercise",
        id: "exercise_type",
        ref: register,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
          selected: "selected",
          disabled: true,
          children: "Select an exercise"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 94,
          columnNumber: 21
        }, this), exercise.map(function (exercise, idx) {
          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
            children: exercise.exercise_name
          }, idx, false, {
            fileName: _jsxFileName,
            lineNumber: 96,
            columnNumber: 36
          }, _this);
        })]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 93,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Group, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
        children: " Exercise 2 : "
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 102,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("select", {
        name: "second_exercise",
        id: "exercise_type",
        ref: register,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
          selected: "selected",
          disabled: true,
          children: "Select an exercise"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 104,
          columnNumber: 21
        }, this), exercise.map(function (exercise, idx) {
          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
            children: exercise.exercise_name
          }, idx, false, {
            fileName: _jsxFileName,
            lineNumber: 106,
            columnNumber: 36
          }, _this);
        })]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 103,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Group, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
        children: " Exercise 3 : "
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 112,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("select", {
        name: "third_exercise",
        id: "exercise_type",
        ref: register,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
          selected: "selected",
          disabled: true,
          children: "Select an exercise"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 114,
          columnNumber: 21
        }, this), exercise.map(function (exercise, idx) {
          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
            children: exercise.exercise_name
          }, idx, false, {
            fileName: _jsxFileName,
            lineNumber: 116,
            columnNumber: 36
          }, _this);
        })]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 113,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Group, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
        children: " Exercise 4 : "
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 122,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("select", {
        name: "fourth_exercise",
        id: "exercise_type",
        ref: register,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
          selected: "selected",
          disabled: true,
          children: "Select an exercise"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 124,
          columnNumber: 21
        }, this), exercise.map(function (exercise, idx) {
          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
            children: exercise.exercise_name
          }, idx, false, {
            fileName: _jsxFileName,
            lineNumber: 126,
            columnNumber: 36
          }, _this);
        })]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 123,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Group, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
        children: " Exercise 5 : "
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 132,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("select", {
        name: "fifth_exercise",
        id: "exercise_type",
        ref: register,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
          selected: "selected",
          disabled: true,
          children: "Select an exercise"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 134,
          columnNumber: 21
        }, this), exercise.map(function (exercise, idx) {
          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
            children: exercise.exercise_name
          }, idx, false, {
            fileName: _jsxFileName,
            lineNumber: 136,
            columnNumber: 36
          }, _this);
        })]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 133,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_SubmitBtn__WEBPACK_IMPORTED_MODULE_5__["default"], {
      type: "submit",
      children: "Add routine"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 142,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 79,
    columnNumber: 9
  }, this);
}

_s(Routine, "A2MTswYM7fnas0a0UwLfMyUrFCA=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_9__["useRouter"], react_hook_form__WEBPACK_IMPORTED_MODULE_7__["useForm"]];
});

_c3 = Routine;

var _c, _c2, _c3;

$RefreshReg$(_c, "Form");
$RefreshReg$(_c2, "Group");
$RefreshReg$(_c3, "Routine");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Gb3Jtcy9Sb3V0aW5lRm9ybS5qcyJdLCJuYW1lcyI6WyJGb3JtIiwic3R5bGVkIiwiZm9ybSIsIkdyb3VwIiwiZGl2IiwiUm91dGluZSIsInJvdXRlciIsInVzZVJvdXRlciIsInVzZUZvcm0iLCJyZWdpc3RlciIsImhhbmRsZVN1Ym1pdCIsImVycm9ycyIsInVzZVN0YXRlIiwiZXhlcmNpc2UiLCJzZXRFeGVyY2lzZSIsIm9uU3VibWl0IiwiZGF0YSIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwiY3JlZGVudGlhbHMiLCJ0aGVuIiwicmVzIiwic3RhdHVzIiwiY29uc29sZSIsImxvZyIsImpzb24iLCJhbGVydCIsInB1c2giLCJ1c2VFZmZlY3QiLCJkb0ZldGNoIiwidXJsIiwiZXhlcmNpc2VzUmVzdWx0cyIsIm1hcCIsImlkeCIsImV4ZXJjaXNlX25hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsSUFBSSxHQUFHQyx5REFBTSxDQUFDQyxJQUFWO0FBQUE7QUFBQTtBQUFBLDJFQUFWO0tBQU1GLEk7QUFPTixJQUFNRyxLQUFLLEdBQUdGLHlEQUFNLENBQUNHLEdBQVY7QUFBQTtBQUFBO0FBQUEseUNBQVg7TUFBTUQsSztBQU1TLFNBQVNFLE9BQVQsR0FBbUI7QUFBQTs7QUFBQTs7QUFFOUIsTUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4Qjs7QUFGOEIsaUJBSWFDLCtEQUFPLEVBSnBCO0FBQUEsTUFJdEJDLFFBSnNCLFlBSXRCQSxRQUpzQjtBQUFBLE1BSVpDLFlBSlksWUFJWkEsWUFKWTtBQUFBLE1BSUVDLE1BSkYsWUFJRUEsTUFKRjs7QUFBQSxrQkFNRUMsc0RBQVEsQ0FBQyxFQUFELENBTlY7QUFBQSxNQU12QkMsUUFO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O0FBQUEsWUFwREosZUErREkscUVBQUMsa0RBQUQ7QUFBVyxVQUFJLEVBQUMsUUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUEvREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUFtRUg7O0dBM0h1QmhDLE87VUFFTEUscUQsRUFFNEJDLHVEOzs7TUFKdkJILE8iLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYWRkcm91dGluZS42MDFiZWEzZWVkZjBkNjQ2OTlkMC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcclxuaW1wb3J0IElucHV0IGZyb20gJy4vRm9ybUlucHV0J1xyXG5pbXBvcnQgU3VibWl0QnRuIGZyb20gJy4vU3VibWl0QnRuJ1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyB1c2VGb3JtLCAgfSBmcm9tIFwicmVhY3QtaG9vay1mb3JtXCI7XHJcbmltcG9ydCBFcnJvck1lc3NhZ2UgZnJvbSAnLi4vQ29tbW9uL0Vycm9yTWVzc2FnZSdcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXHJcblxyXG5jb25zdCBGb3JtID0gc3R5bGVkLmZvcm1gXHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIHdpZHRoOiAxOHJlbTtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxcmVtO1xyXG5gXHJcblxyXG5jb25zdCBHcm91cCA9IHN0eWxlZC5kaXZgXHJcbiAgICBwYWRkaW5nOiAwLjVyZW0gMDtcclxuICAgIG1hcmdpbjogMC41cmVtIDA7XHJcbiAgICAvLyBib3JkZXI6IDFweCBkYXNoZWQgZ3JleTtcclxuYFxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUm91dGluZSgpIHtcclxuXHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiAgICBjb25zdCB7IHJlZ2lzdGVyLCBoYW5kbGVTdWJtaXQsIGVycm9ycyB9ID0gdXNlRm9ybSgpO1xyXG5cclxuICAgIGNvbnN0IFtleGVyY2lzZSwgc2V0RXhlcmNpc2VdID0gdXNlU3RhdGUoW10pO1xyXG5cclxuICAgIC8vIEhhbmRsZXMgdGhlIGZvcm0gc3VibWlzc2lvblxyXG4gICAgY29uc3Qgb25TdWJtaXQgPSAoZGF0YSkgPT4ge1xyXG4gICAgICAgIC8vIElmIHRoZSBpbnB1dCBkYXRhIGlzIHZhbGlkIC0gXHJcbiAgICAgICAgLy8gTWFrZSBhIFBPU1QgcmVxdWVzdCB0byBvdXIgYXBpIHJvdXRlIHdpdGggdGhlIGlucHV0IGRhdGFcclxuICAgICAgICBmZXRjaCgnaHR0cDovL2xvY2FsaG9zdDozMDAwL2FkZHJvdXRpbmUnLCB7XHJcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGRhdGEpLFxyXG4gICAgICAgICAgICBjcmVkZW50aWFsczogJ2luY2x1ZGUnLFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgICAgIHN3aXRjaChyZXMuc3RhdHVzKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDQwMDpcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnVGhpcyBpcyBhIDQwMCBlcnJvci4nKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgNDI5OlxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdUaGlzIGlzIGEgNDI5IGVycm9yLiBSYXRlIGxpbWl0IGV4Y2VlZGVkJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDIwMTpcclxuICAgICAgICAgICAgICAgICAgICByZXMuanNvbigpLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gcmVxdWVzdCBzZW50XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCd0aGlzIHdvcmtlZCcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbGVydCgnRXhlcmNpc2UgYWRkZWQhJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvdXRlci5wdXNoKCcvZXhlcmNpc2VzJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfX0pXHJcbiAgICB9XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBhc3luYyBmdW5jdGlvbiBkb0ZldGNoKCkge1xyXG4gICAgICAgICAgbGV0IHVybCA9ICdodHRwOi8vbG9jYWxob3N0OjMwMDAvZXhlcmNpc2VzJztcclxuICAgICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKCdodHRwOi8vbG9jYWxob3N0OjMwMDAvZXhlcmNpc2VzJywgeyBcclxuICAgICAgICAgICAgbWV0aG9kOiAnR0VUJyxcclxuICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgY3JlZGVudGlhbHM6ICdpbmNsdWRlJyxcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgY29uc3QgYm9keSA9IGF3YWl0IHJlcy5qc29uKCk7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZygnYm9keSBpcyAuLi4nLCBib2R5KTtcclxuICAgICAgICAgIHNldEV4ZXJjaXNlKGJvZHkuZXhlcmNpc2VzUmVzdWx0cyk7XHJcbiAgICAgICAgfVxyXG4gICAgXHJcbiAgICAgICAgZG9GZXRjaCgpO1xyXG4gICAgICB9LCBbXSk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8Rm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0KG9uU3VibWl0KX0+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxsYWJlbD4gUm91dGluZSBOYW1lIDogPC9sYWJlbD5cclxuICAgICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlJvdXRpbmUgbmFtZS4uLlwiXHJcbiAgICAgICAgICAgICAgICBuYW1lPVwicm91dGluZV9uYW1lXCJcclxuICAgICAgICAgICAgICAgIHJlZj17cmVnaXN0ZXJ9XHJcbiAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxHcm91cD5cclxuICAgICAgICAgICAgICAgIDxsYWJlbD4gRXhlcmNpc2UgMSA6IDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8c2VsZWN0IG5hbWU9XCJmaXJzdF9leGVyY2lzZVwiIGlkPVwiZXhlcmNpc2VfdHlwZVwiIHJlZj17cmVnaXN0ZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gc2VsZWN0ZWQ9XCJzZWxlY3RlZFwiIGRpc2FibGVkPlNlbGVjdCBhbiBleGVyY2lzZTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7ZXhlcmNpc2UubWFwKChleGVyY2lzZSwgaWR4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPG9wdGlvbiBrZXk9e2lkeH0+e2V4ZXJjaXNlLmV4ZXJjaXNlX25hbWV9PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgIDwvR3JvdXA+XHJcblxyXG4gICAgICAgICAgICA8R3JvdXA+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWw+IEV4ZXJjaXNlIDIgOiA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPHNlbGVjdCBuYW1lPVwic2Vjb25kX2V4ZXJjaXNlXCIgaWQ9XCJleGVyY2lzZV90eXBlXCIgcmVmPXtyZWdpc3Rlcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiBzZWxlY3RlZD1cInNlbGVjdGVkXCIgZGlzYWJsZWQ+U2VsZWN0IGFuIGV4ZXJjaXNlPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtleGVyY2lzZS5tYXAoKGV4ZXJjaXNlLCBpZHgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8b3B0aW9uIGtleT17aWR4fT57ZXhlcmNpc2UuZXhlcmNpc2VfbmFtZX08L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgPC9Hcm91cD5cclxuXHJcbiAgICAgICAgICAgIDxHcm91cD5cclxuICAgICAgICAgICAgICAgIDxsYWJlbD4gRXhlcmNpc2UgMyA6IDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8c2VsZWN0IG5hbWU9XCJ0aGlyZF9leGVyY2lzZVwiIGlkPVwiZXhlcmNpc2VfdHlwZVwiIHJlZj17cmVnaXN0ZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gc2VsZWN0ZWQ9XCJzZWxlY3RlZFwiIGRpc2FibGVkPlNlbGVjdCBhbiBleGVyY2lzZTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7ZXhlcmNpc2UubWFwKChleGVyY2lzZSwgaWR4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPG9wdGlvbiBrZXk9e2lkeH0+e2V4ZXJjaXNlLmV4ZXJjaXNlX25hbWV9PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgIDwvR3JvdXA+XHJcblxyXG4gICAgICAgICAgICA8R3JvdXA+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWw+IEV4ZXJjaXNlIDQgOiA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPHNlbGVjdCBuYW1lPVwiZm91cnRoX2V4ZXJjaXNlXCIgaWQ9XCJleGVyY2lzZV90eXBlXCIgcmVmPXtyZWdpc3Rlcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiBzZWxlY3RlZD1cInNlbGVjdGVkXCIgZGlzYWJsZWQ+U2VsZWN0IGFuIGV4ZXJjaXNlPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtleGVyY2lzZS5tYXAoKGV4ZXJjaXNlLCBpZHgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8b3B0aW9uIGtleT17aWR4fT57ZXhlcmNpc2UuZXhlcmNpc2VfbmFtZX08L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgPC9Hcm91cD5cclxuXHJcbiAgICAgICAgICAgIDxHcm91cD5cclxuICAgICAgICAgICAgICAgIDxsYWJlbD4gRXhlcmNpc2UgNSA6IDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8c2VsZWN0IG5hbWU9XCJmaWZ0aF9leGVyY2lzZVwiIGlkPVwiZXhlcmNpc2VfdHlwZVwiIHJlZj17cmVnaXN0ZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gc2VsZWN0ZWQ9XCJzZWxlY3RlZFwiIGRpc2FibGVkPlNlbGVjdCBhbiBleGVyY2lzZTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7ZXhlcmNpc2UubWFwKChleGVyY2lzZSwgaWR4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPG9wdGlvbiBrZXk9e2lkeH0+e2V4ZXJjaXNlLmV4ZXJjaXNlX25hbWV9PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgIDwvR3JvdXA+XHJcblxyXG5cclxuICAgICAgICAgICAgPFN1Ym1pdEJ0biB0eXBlPVwic3VibWl0XCI+QWRkIHJvdXRpbmU8L1N1Ym1pdEJ0bj5cclxuICAgICAgICA8L0Zvcm0+XHJcbiAgICApXHJcbn0iXSwic291cmNlUm9vdCI6IiJ9