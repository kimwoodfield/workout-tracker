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
        lineNumber: 77,
        columnNumber: 13
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_FormInput__WEBPACK_IMPORTED_MODULE_4__["default"], {
        type: "text",
        placeholder: "Routine name...",
        name: "routine_name",
        ref: register
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 13
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Group, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
        children: " Exercise 1 : "
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 88,
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
          lineNumber: 90,
          columnNumber: 21
        }, this), exercise.map(function (exercise, idx) {
          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
            children: exercise.exercise_name
          }, idx, false, {
            fileName: _jsxFileName,
            lineNumber: 92,
            columnNumber: 36
          }, _this);
        })]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 89,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Group, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
        children: " Exercise 2 : "
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 98,
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
          lineNumber: 100,
          columnNumber: 21
        }, this), exercise.map(function (exercise, idx) {
          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
            children: exercise.exercise_name
          }, idx, false, {
            fileName: _jsxFileName,
            lineNumber: 102,
            columnNumber: 36
          }, _this);
        })]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 99,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Group, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
        children: " Exercise 3 : "
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 108,
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
          lineNumber: 110,
          columnNumber: 21
        }, this), exercise.map(function (exercise, idx) {
          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
            children: exercise.exercise_name
          }, idx, false, {
            fileName: _jsxFileName,
            lineNumber: 112,
            columnNumber: 36
          }, _this);
        })]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 109,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Group, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
        children: " Exercise 4 : "
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 118,
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
          lineNumber: 120,
          columnNumber: 21
        }, this), exercise.map(function (exercise, idx) {
          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
            children: exercise.exercise_name
          }, idx, false, {
            fileName: _jsxFileName,
            lineNumber: 122,
            columnNumber: 36
          }, _this);
        })]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 119,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Group, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
        children: " Exercise 5 : "
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 128,
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
          lineNumber: 130,
          columnNumber: 21
        }, this), exercise.map(function (exercise, idx) {
          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
            children: exercise.exercise_name
          }, idx, false, {
            fileName: _jsxFileName,
            lineNumber: 132,
            columnNumber: 36
          }, _this);
        })]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 129,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_SubmitBtn__WEBPACK_IMPORTED_MODULE_5__["default"], {
      type: "submit",
      children: "Add routine"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 75,
    columnNumber: 9
  }, this);
}

_s(Routine, "WgZO9VVb7uP23z+NQWcabB4X1mI=", false, function () {
  return [react_hook_form__WEBPACK_IMPORTED_MODULE_7__["useForm"]];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Gb3Jtcy9Sb3V0aW5lRm9ybS5qcyJdLCJuYW1lcyI6WyJGb3JtIiwic3R5bGVkIiwiZm9ybSIsIkdyb3VwIiwiZGl2IiwiUm91dGluZSIsInVzZUZvcm0iLCJyZWdpc3RlciIsImhhbmRsZVN1Ym1pdCIsImVycm9ycyIsInVzZVN0YXRlIiwiZXhlcmNpc2UiLCJzZXRFeGVyY2lzZSIsIm9uU3VibWl0IiwiZGF0YSIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwiY3JlZGVudGlhbHMiLCJ0aGVuIiwicmVzIiwic3RhdHVzIiwiY29uc29sZSIsImxvZyIsImpzb24iLCJ1c2VFZmZlY3QiLCJkb0ZldGNoIiwidXJsIiwiZXhlcmNpc2VzUmVzdWx0cyIsIm1hcCIsImlkeCIsImV4ZXJjaXNlX25hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsSUFBSSxHQUFHQyx5REFBTSxDQUFDQyxJQUFWO0FBQUE7QUFBQTtBQUFBLDJFQUFWO0tBQU1GLEk7QUFPTixJQUFNRyxLQUFLLEdBQUdGLHlEQUFNLENBQUNHLEdBQVY7QUFBQTtBQUFBO0FBQUEseUNBQVg7TUFBTUQsSztBQU1TLFNBQVNFLE9BQVQsR0FBbUI7QUFBQTs7QUFBQTs7QUFBQSxpQkFFYUMsK0RBQU8sRUFGcEI7QUFBQSxNQUV0QkMsUUFGc0IsWUFFdEJBLFFBRnNCO0FBQUEsTUFFWkMsWUFGWSxZQUVaQSxZQUZZO0FBQUEsTUFFRUMsTUFGRixZQUVFQSxNQUZGOztBQUFBLGtCQUlFQyxzREFBUSxDQUFDLEVBQUQsQ0FKVjtBQUFBLE1BSXZCQyxRQUp1QjtBQUFBLE1BSWJDLFdBSmEsaUJBTTlCOzs7QUFDQSxNQUFNQyxRQUFRLEdBQUcsU0FBWEEsUUFBVyxDQUFDQyxJQUFELEVB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RXVCQyx1RDs7O01BRnZCRCxPIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2FkZHJvdXRpbmUuZWNjNGNlOGMwOGVhOWU3YjNmN2YuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXHJcbmltcG9ydCBJbnB1dCBmcm9tICcuL0Zvcm1JbnB1dCdcclxuaW1wb3J0IFN1Ym1pdEJ0biBmcm9tICcuL1N1Ym1pdEJ0bidcclxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgdXNlRm9ybSwgIH0gZnJvbSBcInJlYWN0LWhvb2stZm9ybVwiO1xyXG5pbXBvcnQgRXJyb3JNZXNzYWdlIGZyb20gJy4uL0NvbW1vbi9FcnJvck1lc3NhZ2UnXHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xyXG5cclxuY29uc3QgRm9ybSA9IHN0eWxlZC5mb3JtYFxyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICB3aWR0aDogMThyZW07XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMXJlbTtcclxuYFxyXG5cclxuY29uc3QgR3JvdXAgPSBzdHlsZWQuZGl2YFxyXG4gICAgcGFkZGluZzogMC41cmVtIDA7XHJcbiAgICBtYXJnaW46IDAuNXJlbSAwO1xyXG4gICAgLy8gYm9yZGVyOiAxcHggZGFzaGVkIGdyZXk7XHJcbmBcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFJvdXRpbmUoKSB7XHJcblxyXG4gICAgY29uc3QgeyByZWdpc3RlciwgaGFuZGxlU3VibWl0LCBlcnJvcnMgfSA9IHVzZUZvcm0oKTtcclxuXHJcbiAgICBjb25zdCBbZXhlcmNpc2UsIHNldEV4ZXJjaXNlXSA9IHVzZVN0YXRlKFtdKTtcclxuXHJcbiAgICAvLyBIYW5kbGVzIHRoZSBmb3JtIHN1Ym1pc3Npb25cclxuICAgIGNvbnN0IG9uU3VibWl0ID0gKGRhdGEpID0+IHtcclxuICAgICAgICAvLyBJZiB0aGUgaW5wdXQgZGF0YSBpcyB2YWxpZCAtIFxyXG4gICAgICAgIC8vIE1ha2UgYSBQT1NUIHJlcXVlc3QgdG8gb3VyIGFwaSByb3V0ZSB3aXRoIHRoZSBpbnB1dCBkYXRhXHJcbiAgICAgICAgZmV0Y2goJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hZGRyb3V0aW5lJywge1xyXG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShkYXRhKSxcclxuICAgICAgICAgICAgY3JlZGVudGlhbHM6ICdpbmNsdWRlJyxcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgICAgICBzd2l0Y2gocmVzLnN0YXR1cykge1xyXG4gICAgICAgICAgICAgICAgY2FzZSA0MDA6XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1RoaXMgaXMgYSA0MDAgZXJyb3IuJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDQyOTpcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnVGhpcyBpcyBhIDQyOSBlcnJvci4gUmF0ZSBsaW1pdCBleGNlZWRlZCcpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAyMDE6XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzLmpzb24oKS50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHJlcXVlc3Qgc2VudFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygndGhpcyB3b3JrZWQnKTtcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9fSlcclxuICAgIH1cclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGFzeW5jIGZ1bmN0aW9uIGRvRmV0Y2goKSB7XHJcbiAgICAgICAgICBsZXQgdXJsID0gJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9leGVyY2lzZXMnO1xyXG4gICAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9leGVyY2lzZXMnLCB7IFxyXG4gICAgICAgICAgICBtZXRob2Q6ICdHRVQnLFxyXG4gICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBjcmVkZW50aWFsczogJ2luY2x1ZGUnLFxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgICBjb25zdCBib2R5ID0gYXdhaXQgcmVzLmpzb24oKTtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKCdib2R5IGlzIC4uLicsIGJvZHkpO1xyXG4gICAgICAgICAgc2V0RXhlcmNpc2UoYm9keS5leGVyY2lzZXNSZXN1bHRzKTtcclxuICAgICAgICB9XHJcbiAgICBcclxuICAgICAgICBkb0ZldGNoKCk7XHJcbiAgICAgIH0sIFtdKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxGb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXQob25TdWJtaXQpfT5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGxhYmVsPiBSb3V0aW5lIE5hbWUgOiA8L2xhYmVsPlxyXG4gICAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiUm91dGluZSBuYW1lLi4uXCJcclxuICAgICAgICAgICAgICAgIG5hbWU9XCJyb3V0aW5lX25hbWVcIlxyXG4gICAgICAgICAgICAgICAgcmVmPXtyZWdpc3Rlcn1cclxuICAgICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPEdyb3VwPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsPiBFeGVyY2lzZSAxIDogPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDxzZWxlY3QgbmFtZT1cImZpcnN0X2V4ZXJjaXNlXCIgaWQ9XCJleGVyY2lzZV90eXBlXCIgcmVmPXtyZWdpc3Rlcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiBzZWxlY3RlZD1cInNlbGVjdGVkXCIgZGlzYWJsZWQ+U2VsZWN0IGFuIGV4ZXJjaXNlPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtleGVyY2lzZS5tYXAoKGV4ZXJjaXNlLCBpZHgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8b3B0aW9uIGtleT17aWR4fT57ZXhlcmNpc2UuZXhlcmNpc2VfbmFtZX08L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgPC9Hcm91cD5cclxuXHJcbiAgICAgICAgICAgIDxHcm91cD5cclxuICAgICAgICAgICAgICAgIDxsYWJlbD4gRXhlcmNpc2UgMiA6IDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8c2VsZWN0IG5hbWU9XCJzZWNvbmRfZXhlcmNpc2VcIiBpZD1cImV4ZXJjaXNlX3R5cGVcIiByZWY9e3JlZ2lzdGVyfT5cclxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHNlbGVjdGVkPVwic2VsZWN0ZWRcIiBkaXNhYmxlZD5TZWxlY3QgYW4gZXhlcmNpc2U8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2V4ZXJjaXNlLm1hcCgoZXhlcmNpc2UsIGlkeCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxvcHRpb24ga2V5PXtpZHh9PntleGVyY2lzZS5leGVyY2lzZV9uYW1lfTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICA8L0dyb3VwPlxyXG5cclxuICAgICAgICAgICAgPEdyb3VwPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsPiBFeGVyY2lzZSAzIDogPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDxzZWxlY3QgbmFtZT1cInRoaXJkX2V4ZXJjaXNlXCIgaWQ9XCJleGVyY2lzZV90eXBlXCIgcmVmPXtyZWdpc3Rlcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiBzZWxlY3RlZD1cInNlbGVjdGVkXCIgZGlzYWJsZWQ+U2VsZWN0IGFuIGV4ZXJjaXNlPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtleGVyY2lzZS5tYXAoKGV4ZXJjaXNlLCBpZHgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8b3B0aW9uIGtleT17aWR4fT57ZXhlcmNpc2UuZXhlcmNpc2VfbmFtZX08L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgPC9Hcm91cD5cclxuXHJcbiAgICAgICAgICAgIDxHcm91cD5cclxuICAgICAgICAgICAgICAgIDxsYWJlbD4gRXhlcmNpc2UgNCA6IDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8c2VsZWN0IG5hbWU9XCJmb3VydGhfZXhlcmNpc2VcIiBpZD1cImV4ZXJjaXNlX3R5cGVcIiByZWY9e3JlZ2lzdGVyfT5cclxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHNlbGVjdGVkPVwic2VsZWN0ZWRcIiBkaXNhYmxlZD5TZWxlY3QgYW4gZXhlcmNpc2U8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2V4ZXJjaXNlLm1hcCgoZXhlcmNpc2UsIGlkeCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxvcHRpb24ga2V5PXtpZHh9PntleGVyY2lzZS5leGVyY2lzZV9uYW1lfTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICA8L0dyb3VwPlxyXG5cclxuICAgICAgICAgICAgPEdyb3VwPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsPiBFeGVyY2lzZSA1IDogPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDxzZWxlY3QgbmFtZT1cImZpZnRoX2V4ZXJjaXNlXCIgaWQ9XCJleGVyY2lzZV90eXBlXCIgcmVmPXtyZWdpc3Rlcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiBzZWxlY3RlZD1cInNlbGVjdGVkXCIgZGlzYWJsZWQ+U2VsZWN0IGFuIGV4ZXJjaXNlPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtleGVyY2lzZS5tYXAoKGV4ZXJjaXNlLCBpZHgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8b3B0aW9uIGtleT17aWR4fT57ZXhlcmNpc2UuZXhlcmNpc2VfbmFtZX08L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgPC9Hcm91cD5cclxuXHJcblxyXG4gICAgICAgICAgICA8U3VibWl0QnRuIHR5cGU9XCJzdWJtaXRcIj5BZGQgcm91dGluZTwvU3VibWl0QnRuPlxyXG4gICAgICAgIDwvRm9ybT5cclxuICAgIClcclxufSJdLCJzb3VyY2VSb290IjoiIn0=