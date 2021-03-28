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
        lineNumber: 79,
        columnNumber: 13
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_FormInput__WEBPACK_IMPORTED_MODULE_4__["default"], {
        type: "text",
        placeholder: "Routine name...",
        name: "routine_name",
        ref: register
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 80,
        columnNumber: 13
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Group, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
        children: " Exercise 1 : "
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 90,
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
          lineNumber: 92,
          columnNumber: 21
        }, this), exercise.map(function (exercise, idx) {
          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
            children: exercise.exercise_name
          }, idx, false, {
            fileName: _jsxFileName,
            lineNumber: 94,
            columnNumber: 36
          }, _this);
        })]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 91,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Group, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
        children: " Exercise 2 : "
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 100,
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
          lineNumber: 102,
          columnNumber: 21
        }, this), exercise.map(function (exercise, idx) {
          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
            children: exercise.exercise_name
          }, idx, false, {
            fileName: _jsxFileName,
            lineNumber: 104,
            columnNumber: 36
          }, _this);
        })]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 101,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Group, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
        children: " Exercise 3 : "
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 110,
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
          lineNumber: 112,
          columnNumber: 21
        }, this), exercise.map(function (exercise, idx) {
          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
            children: exercise.exercise_name
          }, idx, false, {
            fileName: _jsxFileName,
            lineNumber: 114,
            columnNumber: 36
          }, _this);
        })]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 111,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Group, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
        children: " Exercise 4 : "
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 120,
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
          lineNumber: 122,
          columnNumber: 21
        }, this), exercise.map(function (exercise, idx) {
          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
            children: exercise.exercise_name
          }, idx, false, {
            fileName: _jsxFileName,
            lineNumber: 124,
            columnNumber: 36
          }, _this);
        })]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 121,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Group, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
        children: " Exercise 5 : "
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 130,
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
          lineNumber: 132,
          columnNumber: 21
        }, this), exercise.map(function (exercise, idx) {
          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
            children: exercise.exercise_name
          }, idx, false, {
            fileName: _jsxFileName,
            lineNumber: 134,
            columnNumber: 36
          }, _this);
        })]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 131,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_SubmitBtn__WEBPACK_IMPORTED_MODULE_5__["default"], {
      type: "submit",
      children: "Add routine"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 140,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 77,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Gb3Jtcy9Sb3V0aW5lRm9ybS5qcyJdLCJuYW1lcyI6WyJGb3JtIiwic3R5bGVkIiwiZm9ybSIsIkdyb3VwIiwiZGl2IiwiUm91dGluZSIsInJvdXRlciIsInVzZVJvdXRlciIsInVzZUZvcm0iLCJyZWdpc3RlciIsImhhbmRsZVN1Ym1pdCIsImVycm9ycyIsInVzZVN0YXRlIiwiZXhlcmNpc2UiLCJzZXRFeGVyY2lzZSIsIm9uU3VibWl0IiwiZGF0YSIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwiY3JlZGVudGlhbHMiLCJ0aGVuIiwicmVzIiwic3RhdHVzIiwiY29uc29sZSIsImxvZyIsImpzb24iLCJ1c2VFZmZlY3QiLCJkb0ZldGNoIiwidXJsIiwiZXhlcmNpc2VzUmVzdWx0cyIsIm1hcCIsImlkeCIsImV4ZXJjaXNlX25hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsSUFBSSxHQUFHQyx5REFBTSxDQUFDQyxJQUFWO0FBQUE7QUFBQTtBQUFBLDJFQUFWO0tBQU1GLEk7QUFPTixJQUFNRyxLQUFLLEdBQUdGLHlEQUFNLENBQUNHLEdBQVY7QUFBQTtBQUFBO0FBQUEseUNBQVg7TUFBTUQsSztBQU1TLFNBQVNFLE9BQVQsR0FBbUI7QUFBQTs7QUFBQTs7QUFFOUIsTUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4Qjs7QUFGOEIsaUJBSWFDLCtEQUFPLEVBSnBCO0FBQUEsTUFJdEJDLFFBSnNCLFlBSXRCQSxRQUpzQjtBQUFBLE1BSVpDLFlBSlksWUFJWkEsWUFKWTtBQUFBLE1BSUVDLE1BSkYsWUFJRUEsTUFKRjs7QUFBQSxrQkFNRUMsc0RBQVEsQ0FBQyxFQUFELENBTlY7QUFBQSxNQU12QkMsUUFOdUI7QUFBQSxNQU1iQyxXQU5hLGlCQVE5Qjs7O0FBQ0EsTUFBTUMsUUFBUSxHQUFHLFNBQVhBLFFBQVcsQ0FBQ0MsSUFBRCxFQUFVO0FBQ3ZCO0FBQ0E7QUFDQUMsU0FBSyxDQUFDLGtDQUFELEVBQXFDO0FBQ3RDQyxZQUFNLEVBQUUsTUFEOEI7QUFFdENDLGFBQU8sRUFBRTtBQUNMLHdCQUFnQjtBQURYLE9BRjZCO0FBS3RDQyxVQUFJLEVBQUVDLElBQUksQ0FBQ0MsU0FBTCxDQUFlTixJQUFmLENBTGdDO0FBTXRDTyxpQkFBVyxFQUFFO0FBTnlCLEtBQXJDLENBQUwsQ0FRS0MsSUFSTCxDQVFVLFVBQUNDLEdBQUQsRUFBUztBQUNmLGNBQU9BLEdBQUcsQ0FBQ0MsTUFBWDtBQUNJLGFBQUssR0FBTDtBQUNJQyxpQkFBTyxDQUFDQyxHQUFSLENBQVksc0JBQVo7QUFDQTs7QUFDSixhQUFLLEdBQUw7QUFDSUQsaUJBQU8sQ0FBQ0MsR0FBUixDQUFZLDBDQUFaO0FBQ0E7O0FBQ0osYUFBSyxHQUFMO0FBQ0lILGFBQUcsQ0FBQ0ksSUFBSixHQUFXTCxJQUFYLENBQWdCLFVBQUNSLElBQUQsRUFBVTtBQUN0QjtBQUNBVyxtQkFBTyxDQUFDQyxHQUFSLENBQVksYUFBWjtBQUNILFdBSEQ7QUFSUjtBQVlFLEtBckJOO0FBc0JILEdBekJEOztBQTJCQUUseURBQVMsQ0FBQyxZQUFNO0FBQUEsYUFDR0MsT0FESDtBQUFBO0FBQUE7O0FBQUE7QUFBQSw0WEFDWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDTUMsbUJBRE4sR0FDWSxpQ0FEWjtBQUFBO0FBQUEsdUJBRW9CZixLQUFLLENBQUMsaUNBQUQsRUFBb0M7QUFDekRDLHdCQUFNLEVBQUUsS0FEaUQ7QUFFekRDLHlCQUFPLEVBQUU7QUFDUCxvQ0FBZ0I7QUFEVCxtQkFGZ0Q7QUFLekRJLDZCQUFXLEVBQUU7QUFMNEMsaUJBQXBDLENBRnpCOztBQUFBO0FBRVFFLG1CQUZSO0FBQUE7QUFBQSx1QkFTcUJBLEdBQUcsQ0FBQ0ksSUFBSixFQVRyQjs7QUFBQTtBQVNRVCxvQkFUUjtBQVVFTyx1QkFBTyxDQUFDQyxHQUFSLENBQVksYUFBWixFQUEyQlIsSUFBM0I7QUFDQU4sMkJBQVcsQ0FBQ00sSUFBSSxDQUFDYSxnQkFBTixDQUFYOztBQVhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BRFk7QUFBQTtBQUFBOztBQWVaRixXQUFPO0FBQ1IsR0FoQk0sRUFnQkosRUFoQkksQ0FBVDtBQWtCQSxzQkFDSSxxRUFBQyxJQUFEO0FBQU0sWUFBUSxFQUFFckIsWUFBWSxDQUFDSyxRQUFELENBQTVCO0FBQUEsNEJBQ0k7QUFBQSw4QkFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURBLGVBRUEscUVBQUMsa0RBQUQ7QUFDSSxZQUFJLEVBQUMsTUFEVDtBQUVJLG1CQUFXLEVBQUMsaUJBRmhCO0FBR0ksWUFBSSxFQUFDLGNBSFQ7QUFJSSxXQUFHLEVBQUVOO0FBSlQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURKLGVBWUkscUVBQUMsS0FBRDtBQUFBLDhCQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREosZUFFSTtBQUFRLFlBQUksRUFBQyxnQkFBYjtBQUE4QixVQUFFLEVBQUMsZUFBakM7QUFBaUQsV0FBRyxFQUFFQSxRQUF0RDtBQUFBLGdDQUNJO0FBQVEsa0JBQVEsRUFBQyxVQUFqQjtBQUE0QixrQkFBUSxNQUFwQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFESixFQUVTSSxRQUFRLENBQUNxQixHQUFULENBQWEsVUFBQ3JCLFFBQUQsRUFBV3NCLEdBQVgsRUFBbUI7QUFDN0IsOEJBQU87QUFBQSxzQkFBbUJ0QixRQUFRLENBQUN1QjtBQUE1QixhQUFhRCxHQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBQVA7QUFDSCxTQUZBLENBRlQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBWkosZUFzQkkscUVBQUMsS0FBRDtBQUFBLDhCQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREosZUFFSTtBQUFRLFlBQUksRUFBQyxpQkFBYjtBQUErQixVQUFFLEVBQUMsZUFBbEM7QUFBa0QsV0FBRyxFQUFFMUIsUUFBdkQ7QUFBQSxnQ0FDSTtBQUFRLGtCQUFRLEVBQUMsVUFBakI7QUFBNEIsa0JBQVEsTUFBcEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREosRUFFU0ksUUFBUSxDQUFDcUIsR0FBVCxDQUFhLFVBQUNyQixRQUFELEVBQVdzQixHQUFYLEVBQW1CO0FBQzdCLDhCQUFPO0FBQUEsc0JBQW1CdEIsUUFBUSxDQUFDdUI7QUFBNUIsYUFBYUQsR0FBYjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUFQO0FBQ0gsU0FGQSxDQUZUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQXRCSixlQWdDSSxxRUFBQyxLQUFEO0FBQUEsOEJBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FESixlQUVJO0FBQVEsWUFBSSxFQUFDLGdCQUFiO0FBQThCLFVBQUUsRUFBQyxlQUFqQztBQUFpRCxXQUFHLEVBQUUxQixRQUF0RDtBQUFBLGdDQUNJO0FBQVEsa0JBQVEsRUFBQyxVQUFqQjtBQUE0QixrQkFBUSxNQUFwQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFESixFQUVTSSxRQUFRLENBQUNxQixHQUFULENBQWEsVUFBQ3JCLFFBQUQsRUFBV3NCLEdBQVgsRUFBbUI7QUFDN0IsOEJBQU87QUFBQSxzQkFBbUJ0QixRQUFRLENBQUN1QjtBQUE1QixhQUFhRCxHQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBQVA7QUFDSCxTQUZBLENBRlQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBaENKLGVBMENJLHFFQUFDLEtBQUQ7QUFBQSw4QkFDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURKLGVBRUk7QUFBUSxZQUFJLEVBQUMsaUJBQWI7QUFBK0IsVUFBRSxFQUFDLGVBQWxDO0FBQWtELFdBQUcsRUFBRTFCLFFBQXZEO0FBQUEsZ0NBQ0k7QUFBUSxrQkFBUSxFQUFDLFVBQWpCO0FBQTRCLGtCQUFRLE1BQXBDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURKLEVBRVNJLFFBQVEsQ0FBQ3FCLEdBQVQsQ0FBYSxVQUFDckIsUUFBRCxFQUFXc0IsR0FBWCxFQUFtQjtBQUM3Qiw4QkFBTztBQUFBLHNCQUFtQnRCLFFBQVEsQ0FBQ3VCO0FBQTVCLGFBQWFELEdBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFBUDtBQUNILFNBRkEsQ0FGVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUExQ0osZUFvREkscUVBQUMsS0FBRDtBQUFBLDhCQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREosZUFFSTtBQUFRLFlBQUksRUFBQyxnQkFBYjtBQUE4QixVQUFFLEVBQUMsZUFBakM7QUFBaUQsV0FBRyxFQUFFMUIsUUFBdEQ7QUFBQSxnQ0FDSTtBQUFRLGtCQUFRLEVBQUMsVUFBakI7QUFBNEIsa0JBQVEsTUFBcEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREosRUFFU0ksUUFBUSxDQUFDcUIsR0FBVCxDQUFhLFVBQUNyQixRQUFELEVBQVdzQixHQUFYLEVBQW1CO0FBQzdCLDhCQUFPO0FBQUEsc0JBQW1CdEIsUUFBUSxDQUFDdUI7QUFBNUIsYUFBYUQsR0FBYjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUFQO0FBQ0gsU0FGQSxDQUZUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQXBESixlQStESSxxRUFBQyxrREFBRDtBQUFXLFVBQUksRUFBQyxRQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQS9ESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQW1FSDs7R0F6SHVCOUIsTztVQUVMRSxxRCxFQUU0QkMsdUQ7OztNQUp2QkgsTyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9hZGRyb3V0aW5lLjg1MTRkZGZhOGE2ZjQ5YmFhMjJmLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xyXG5pbXBvcnQgSW5wdXQgZnJvbSAnLi9Gb3JtSW5wdXQnXHJcbmltcG9ydCBTdWJtaXRCdG4gZnJvbSAnLi9TdWJtaXRCdG4nXHJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IHVzZUZvcm0sICB9IGZyb20gXCJyZWFjdC1ob29rLWZvcm1cIjtcclxuaW1wb3J0IEVycm9yTWVzc2FnZSBmcm9tICcuLi9Db21tb24vRXJyb3JNZXNzYWdlJ1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcclxuXHJcbmNvbnN0IEZvcm0gPSBzdHlsZWQuZm9ybWBcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgd2lkdGg6IDE4cmVtO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDFyZW07XHJcbmBcclxuXHJcbmNvbnN0IEdyb3VwID0gc3R5bGVkLmRpdmBcclxuICAgIHBhZGRpbmc6IDAuNXJlbSAwO1xyXG4gICAgbWFyZ2luOiAwLjVyZW0gMDtcclxuICAgIC8vIGJvcmRlcjogMXB4IGRhc2hlZCBncmV5O1xyXG5gXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBSb3V0aW5lKCkge1xyXG5cclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuICAgIGNvbnN0IHsgcmVnaXN0ZXIsIGhhbmRsZVN1Ym1pdCwgZXJyb3JzIH0gPSB1c2VGb3JtKCk7XHJcblxyXG4gICAgY29uc3QgW2V4ZXJjaXNlLCBzZXRFeGVyY2lzZV0gPSB1c2VTdGF0ZShbXSk7XHJcblxyXG4gICAgLy8gSGFuZGxlcyB0aGUgZm9ybSBzdWJtaXNzaW9uXHJcbiAgICBjb25zdCBvblN1Ym1pdCA9IChkYXRhKSA9PiB7XHJcbiAgICAgICAgLy8gSWYgdGhlIGlucHV0IGRhdGEgaXMgdmFsaWQgLSBcclxuICAgICAgICAvLyBNYWtlIGEgUE9TVCByZXF1ZXN0IHRvIG91ciBhcGkgcm91dGUgd2l0aCB0aGUgaW5wdXQgZGF0YVxyXG4gICAgICAgIGZldGNoKCdodHRwOi8vbG9jYWxob3N0OjMwMDAvYWRkcm91dGluZScsIHtcclxuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoZGF0YSksXHJcbiAgICAgICAgICAgIGNyZWRlbnRpYWxzOiAnaW5jbHVkZScsXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC50aGVuKChyZXMpID0+IHtcclxuICAgICAgICAgICAgc3dpdGNoKHJlcy5zdGF0dXMpIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgNDAwOlxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdUaGlzIGlzIGEgNDAwIGVycm9yLicpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA0Mjk6XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1RoaXMgaXMgYSA0MjkgZXJyb3IuIFJhdGUgbGltaXQgZXhjZWVkZWQnKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgMjAxOlxyXG4gICAgICAgICAgICAgICAgICAgIHJlcy5qc29uKCkudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyByZXF1ZXN0IHNlbnRcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3RoaXMgd29ya2VkJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfX0pXHJcbiAgICB9XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBhc3luYyBmdW5jdGlvbiBkb0ZldGNoKCkge1xyXG4gICAgICAgICAgbGV0IHVybCA9ICdodHRwOi8vbG9jYWxob3N0OjMwMDAvZXhlcmNpc2VzJztcclxuICAgICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKCdodHRwOi8vbG9jYWxob3N0OjMwMDAvZXhlcmNpc2VzJywgeyBcclxuICAgICAgICAgICAgbWV0aG9kOiAnR0VUJyxcclxuICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgY3JlZGVudGlhbHM6ICdpbmNsdWRlJyxcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgY29uc3QgYm9keSA9IGF3YWl0IHJlcy5qc29uKCk7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZygnYm9keSBpcyAuLi4nLCBib2R5KTtcclxuICAgICAgICAgIHNldEV4ZXJjaXNlKGJvZHkuZXhlcmNpc2VzUmVzdWx0cyk7XHJcbiAgICAgICAgfVxyXG4gICAgXHJcbiAgICAgICAgZG9GZXRjaCgpO1xyXG4gICAgICB9LCBbXSk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8Rm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0KG9uU3VibWl0KX0+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxsYWJlbD4gUm91dGluZSBOYW1lIDogPC9sYWJlbD5cclxuICAgICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlJvdXRpbmUgbmFtZS4uLlwiXHJcbiAgICAgICAgICAgICAgICBuYW1lPVwicm91dGluZV9uYW1lXCJcclxuICAgICAgICAgICAgICAgIHJlZj17cmVnaXN0ZXJ9XHJcbiAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxHcm91cD5cclxuICAgICAgICAgICAgICAgIDxsYWJlbD4gRXhlcmNpc2UgMSA6IDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8c2VsZWN0IG5hbWU9XCJmaXJzdF9leGVyY2lzZVwiIGlkPVwiZXhlcmNpc2VfdHlwZVwiIHJlZj17cmVnaXN0ZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gc2VsZWN0ZWQ9XCJzZWxlY3RlZFwiIGRpc2FibGVkPlNlbGVjdCBhbiBleGVyY2lzZTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7ZXhlcmNpc2UubWFwKChleGVyY2lzZSwgaWR4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPG9wdGlvbiBrZXk9e2lkeH0+e2V4ZXJjaXNlLmV4ZXJjaXNlX25hbWV9PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgIDwvR3JvdXA+XHJcblxyXG4gICAgICAgICAgICA8R3JvdXA+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWw+IEV4ZXJjaXNlIDIgOiA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPHNlbGVjdCBuYW1lPVwic2Vjb25kX2V4ZXJjaXNlXCIgaWQ9XCJleGVyY2lzZV90eXBlXCIgcmVmPXtyZWdpc3Rlcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiBzZWxlY3RlZD1cInNlbGVjdGVkXCIgZGlzYWJsZWQ+U2VsZWN0IGFuIGV4ZXJjaXNlPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtleGVyY2lzZS5tYXAoKGV4ZXJjaXNlLCBpZHgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8b3B0aW9uIGtleT17aWR4fT57ZXhlcmNpc2UuZXhlcmNpc2VfbmFtZX08L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgPC9Hcm91cD5cclxuXHJcbiAgICAgICAgICAgIDxHcm91cD5cclxuICAgICAgICAgICAgICAgIDxsYWJlbD4gRXhlcmNpc2UgMyA6IDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8c2VsZWN0IG5hbWU9XCJ0aGlyZF9leGVyY2lzZVwiIGlkPVwiZXhlcmNpc2VfdHlwZVwiIHJlZj17cmVnaXN0ZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gc2VsZWN0ZWQ9XCJzZWxlY3RlZFwiIGRpc2FibGVkPlNlbGVjdCBhbiBleGVyY2lzZTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7ZXhlcmNpc2UubWFwKChleGVyY2lzZSwgaWR4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPG9wdGlvbiBrZXk9e2lkeH0+e2V4ZXJjaXNlLmV4ZXJjaXNlX25hbWV9PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgIDwvR3JvdXA+XHJcblxyXG4gICAgICAgICAgICA8R3JvdXA+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWw+IEV4ZXJjaXNlIDQgOiA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPHNlbGVjdCBuYW1lPVwiZm91cnRoX2V4ZXJjaXNlXCIgaWQ9XCJleGVyY2lzZV90eXBlXCIgcmVmPXtyZWdpc3Rlcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiBzZWxlY3RlZD1cInNlbGVjdGVkXCIgZGlzYWJsZWQ+U2VsZWN0IGFuIGV4ZXJjaXNlPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtleGVyY2lzZS5tYXAoKGV4ZXJjaXNlLCBpZHgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8b3B0aW9uIGtleT17aWR4fT57ZXhlcmNpc2UuZXhlcmNpc2VfbmFtZX08L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgPC9Hcm91cD5cclxuXHJcbiAgICAgICAgICAgIDxHcm91cD5cclxuICAgICAgICAgICAgICAgIDxsYWJlbD4gRXhlcmNpc2UgNSA6IDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8c2VsZWN0IG5hbWU9XCJmaWZ0aF9leGVyY2lzZVwiIGlkPVwiZXhlcmNpc2VfdHlwZVwiIHJlZj17cmVnaXN0ZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gc2VsZWN0ZWQ9XCJzZWxlY3RlZFwiIGRpc2FibGVkPlNlbGVjdCBhbiBleGVyY2lzZTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7ZXhlcmNpc2UubWFwKChleGVyY2lzZSwgaWR4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPG9wdGlvbiBrZXk9e2lkeH0+e2V4ZXJjaXNlLmV4ZXJjaXNlX25hbWV9PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgIDwvR3JvdXA+XHJcblxyXG5cclxuICAgICAgICAgICAgPFN1Ym1pdEJ0biB0eXBlPVwic3VibWl0XCI+QWRkIHJvdXRpbmU8L1N1Ym1pdEJ0bj5cclxuICAgICAgICA8L0Zvcm0+XHJcbiAgICApXHJcbn0iXSwic291cmNlUm9vdCI6IiJ9