webpackHotUpdate_N_E("pages/exercises",{

/***/ "./pages/exercises.js":
/*!****************************!*\
  !*** ./pages/exercises.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Exercises; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_kimwoodfield_Documents_GitHub_workout_tracker_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ "./node_modules/next/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_kimwoodfield_Documents_GitHub_workout_tracker_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(C_Users_kimwoodfield_Documents_GitHub_workout_tracker_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var C_Users_kimwoodfield_Documents_GitHub_workout_tracker_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _components_Navigation_IconNavBar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Navigation/IconNavBar */ "./components/Navigation/IconNavBar.js");
/* harmony import */ var _components_NewExerciseLink__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/NewExerciseLink */ "./components/NewExerciseLink.js");
/* harmony import */ var _components_PageTitle__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/PageTitle */ "./components/PageTitle.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_10__);





var _jsxFileName = "C:\\Users\\kimwoodfield\\Documents\\GitHub\\workout-tracker\\frontend\\pages\\exercises.js",
    _s = $RefreshSig$();









var Padding = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].div.withConfig({
  displayName: "exercises__Padding",
  componentId: "h8jm9w-0"
})(["height:4rem;"]);
var ExercisesContainer = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].div.withConfig({
  displayName: "exercises__ExercisesContainer",
  componentId: "h8jm9w-1"
})(["width:100%;padding-left:1.25rem;padding-bottom:6.5rem;overflow:scroll;height:80vh;"]);
_c = ExercisesContainer;
var Exercise = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].p.withConfig({
  displayName: "exercises__Exercise",
  componentId: "h8jm9w-2"
})(["font-size:1.15rem;border-bottom:0.5px solid lightgray;padding:0.85rem 0;margin:0;"]);
_c2 = Exercise;
function Exercises() {
  _s();

  var _this = this;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_9__["useState"])([]),
      exercise = _useState[0],
      setExercise = _useState[1]; // fetch('http://localhost:3000/exercises', { 
  //   method: 'GET',
  //   headers: {
  //     'Content-Type': 'application/json'
  //   },
  //   credentials: 'include',
  // })
  // .then((res) => {
  //   switch(res.status) {
  //     case 403:
  //         console.log('403 error');
  //         router.push('/');
  //         break;
  //     case 200:
  //         res.json()
  //         .then(data => {
  //           // console.log(data.exercisesResults);
  //           // setExercise(data.exercisesResults[0].exercise_name);
  //           // console.log(data.exercisesResults[0].exercise_name);
  //         });
  //         break;
  // }
  // })
  // .catch(err => {
  //   console.log('fetch failed');
  // });


  Object(react__WEBPACK_IMPORTED_MODULE_9__["useEffect"])(function () {
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
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "jsx-3489015941" + " " + "container",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_4___default.a, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
        className: "jsx-3489015941",
        children: "Exercises"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 84,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
        rel: "icon",
        href: "/favicon.ico",
        className: "jsx-3489015941"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 85,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_NewExerciseLink__WEBPACK_IMPORTED_MODULE_7__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_PageTitle__WEBPACK_IMPORTED_MODULE_8__["default"], {
      name: "Exercises"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("main", {
      className: "jsx-3489015941",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(ExercisesContainer, {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
          children: exercise.map(function (exercise, idx) {
            return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Exercise, {
              children: exercise.exercise_name
            }, idx, false, {
              fileName: _jsxFileName,
              lineNumber: 96,
              columnNumber: 20
            }, _this);
          })
        }, void 0, false)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 92,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Navigation_IconNavBar__WEBPACK_IMPORTED_MODULE_6__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a, {
      id: "573937095",
      children: ".container.jsx-3489015941{min-height:100vh;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}main.jsx-3489015941{width:100%;-webkit-flex:1;-ms-flex:1;flex:1;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}footer.jsx-3489015941{width:100%;height:100px;border-top:1px solid #eaeaea;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}footer.jsx-3489015941 img.jsx-3489015941{margin-left:0.5rem;}footer.jsx-3489015941 a.jsx-3489015941{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}a.jsx-3489015941{color:inherit;-webkit-text-decoration:none;text-decoration:none;}.title.jsx-3489015941 a.jsx-3489015941{color:#0070f3;-webkit-text-decoration:none;text-decoration:none;}.title.jsx-3489015941 a.jsx-3489015941:hover,.title.jsx-3489015941 a.jsx-3489015941:focus,.title.jsx-3489015941 a.jsx-3489015941:active{-webkit-text-decoration:underline;text-decoration:underline;}.title.jsx-3489015941{margin:0;line-height:1.15;font-size:4rem;}.title.jsx-3489015941,.description.jsx-3489015941{text-align:center;}.description.jsx-3489015941{line-height:1.5;font-size:1.5rem;}code.jsx-3489015941{background:#fafafa;border-radius:5px;padding:0.75rem;font-size:1.1rem;font-family:Menlo,Monaco,Lucida Console,Liberation Mono, DejaVu Sans Mono,Bitstream Vera Sans Mono,Courier New,monospace;}.grid.jsx-3489015941{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;max-width:800px;margin-top:3rem;}.card.jsx-3489015941{margin:1rem;-webkit-flex-basis:45%;-ms-flex-preferred-size:45%;flex-basis:45%;padding:1.5rem;text-align:left;color:inherit;-webkit-text-decoration:none;text-decoration:none;border:1px solid #eaeaea;border-radius:10px;-webkit-transition:color 0.15s ease,border-color 0.15s ease;transition:color 0.15s ease,border-color 0.15s ease;}.card.jsx-3489015941:hover,.card.jsx-3489015941:focus,.card.jsx-3489015941:active{color:#0070f3;border-color:#0070f3;}.card.jsx-3489015941 h3.jsx-3489015941{margin:0 0 1rem 0;font-size:1.5rem;}.card.jsx-3489015941 p.jsx-3489015941{margin:0;font-size:1.25rem;line-height:1.5;}.logo.jsx-3489015941{height:1em;}@media (max-width:600px){.grid.jsx-3489015941{width:100%;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xca2ltd29vZGZpZWxkXFxEb2N1bWVudHNcXEdpdEh1Ylxcd29ya291dC10cmFja2VyXFxmcm9udGVuZFxccGFnZXNcXGV4ZXJjaXNlcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEyR2tCLEFBRzRCLEFBWU4sQUFTQSxBQVNRLEFBSU4sQUFNQyxBQUtBLEFBT1ksQUFJakIsQUFPUyxBQUlGLEFBS0csQUFTTixBQVVELEFBY0UsQUFLSSxBQUtULEFBTUUsQUFLRSxTQXJFSSxBQTJEQyxFQXZHWCxBQVNNLEFBb0dmLEFBSzBCLENBbkNULEVBbkRNLEFBS0EsQUE0REEsRUF0Q0osQ0FsRUosQ0E4RGYsQUErQ21CLENBaEZuQixBQTBDb0IsS0FsRFcsRUFtQ2QsQ0EyREMsTUFoRGxCLEVBc0NBLEFBS0EsRUF0Q2tCLElBZmxCLEVBMkRBLENBeEdlLFNBVUEsQUFtREksT0F0Qm5CLElBWEEsQUFLQSxNQThCc0UsSUExQzdDLEFBK0NKLElBV0osV0FtQ2YsRUE3SHNCLEVBMkZOLGdCQUNGLFNBaEZRLEtBaUZELElBdkVFLHdDQTBEQSxFQS9FQSxJQWdDSixBQTZETSxrQkFuQjNCLEtBN0RxQixFQWlGQSxtQkFDa0MsU0F6RWxDLHdDQVdyQixBQStDaUIsRUEvRUkscUJBYXJCLDhCQVNBLElBMkRrQixNQWNsQixVQWJrQixnQkFDbEIsTUFsRkEiLCJmaWxlIjoiQzpcXFVzZXJzXFxraW13b29kZmllbGRcXERvY3VtZW50c1xcR2l0SHViXFx3b3Jrb3V0LXRyYWNrZXJcXGZyb250ZW5kXFxwYWdlc1xcZXhlcmNpc2VzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuaW1wb3J0IEljb25OYXZCYXIgZnJvbSAnLi4vY29tcG9uZW50cy9OYXZpZ2F0aW9uL0ljb25OYXZCYXInO1xyXG5pbXBvcnQgTmV3RXhlcmNpc2VMaW5rIGZyb20gJy4uL2NvbXBvbmVudHMvTmV3RXhlcmNpc2VMaW5rJztcclxuaW1wb3J0IFBhZ2VUaXRsZSBmcm9tICcuLi9jb21wb25lbnRzL1BhZ2VUaXRsZSdcclxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXHJcblxyXG5jb25zdCBQYWRkaW5nID0gc3R5bGVkLmRpdmBcclxuICBoZWlnaHQ6IDRyZW07XHJcbmBcclxuXHJcbmNvbnN0IEV4ZXJjaXNlc0NvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbiAgLy8gYm9yZGVyOiAxcHggZGFzaGVkIGJsdWU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcGFkZGluZy1sZWZ0OiAxLjI1cmVtO1xyXG4gIHBhZGRpbmctYm90dG9tOiA2LjVyZW07XHJcbiAgb3ZlcmZsb3c6IHNjcm9sbDtcclxuICBoZWlnaHQ6IDgwdmg7XHJcbmBcclxuXHJcbmNvbnN0IEV4ZXJjaXNlID0gc3R5bGVkLnBgXHJcbiAgZm9udC1zaXplOiAxLjE1cmVtO1xyXG4gIC8vIGJvcmRlci10b3A6IDAuNXB4IHNvbGlkIGxpZ2h0Z3JheTtcclxuICBib3JkZXItYm90dG9tOiAwLjVweCBzb2xpZCBsaWdodGdyYXk7XHJcbiAgLy8gcGFkZGluZzogMC44NXJlbSAwO1xyXG4gIHBhZGRpbmc6IDAuODVyZW0gMDtcclxuICBtYXJnaW46IDA7XHJcbmBcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEV4ZXJjaXNlcygpIHtcclxuXHJcbiAgY29uc3QgW2V4ZXJjaXNlLCBzZXRFeGVyY2lzZV0gPSB1c2VTdGF0ZShbXSk7XHJcblxyXG4gIC8vIGZldGNoKCdodHRwOi8vbG9jYWxob3N0OjMwMDAvZXhlcmNpc2VzJywgeyBcclxuICAvLyAgIG1ldGhvZDogJ0dFVCcsXHJcbiAgLy8gICBoZWFkZXJzOiB7XHJcbiAgLy8gICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcclxuICAvLyAgIH0sXHJcbiAgLy8gICBjcmVkZW50aWFsczogJ2luY2x1ZGUnLFxyXG4gIC8vIH0pXHJcbiAgLy8gLnRoZW4oKHJlcykgPT4ge1xyXG4gIC8vICAgc3dpdGNoKHJlcy5zdGF0dXMpIHtcclxuICAvLyAgICAgY2FzZSA0MDM6XHJcbiAgLy8gICAgICAgICBjb25zb2xlLmxvZygnNDAzIGVycm9yJyk7XHJcbiAgLy8gICAgICAgICByb3V0ZXIucHVzaCgnLycpO1xyXG4gIC8vICAgICAgICAgYnJlYWs7XHJcbiAgLy8gICAgIGNhc2UgMjAwOlxyXG4gIC8vICAgICAgICAgcmVzLmpzb24oKVxyXG4gIC8vICAgICAgICAgLnRoZW4oZGF0YSA9PiB7XHJcbiAgLy8gICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGRhdGEuZXhlcmNpc2VzUmVzdWx0cyk7XHJcbiAgLy8gICAgICAgICAgIC8vIHNldEV4ZXJjaXNlKGRhdGEuZXhlcmNpc2VzUmVzdWx0c1swXS5leGVyY2lzZV9uYW1lKTtcclxuICAvLyAgICAgICAgICAgLy8gY29uc29sZS5sb2coZGF0YS5leGVyY2lzZXNSZXN1bHRzWzBdLmV4ZXJjaXNlX25hbWUpO1xyXG4gIC8vICAgICAgICAgfSk7XHJcbiAgLy8gICAgICAgICBicmVhaztcclxuICAvLyB9XHJcbiAgLy8gfSlcclxuICAvLyAuY2F0Y2goZXJyID0+IHtcclxuICAvLyAgIGNvbnNvbGUubG9nKCdmZXRjaCBmYWlsZWQnKTtcclxuICAvLyB9KTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGFzeW5jIGZ1bmN0aW9uIGRvRmV0Y2goKSB7XHJcbiAgICAgIGxldCB1cmwgPSAnaHR0cDovL2xvY2FsaG9zdDozMDAwL2V4ZXJjaXNlcyc7XHJcbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKCdodHRwOi8vbG9jYWxob3N0OjMwMDAvZXhlcmNpc2VzJywgeyBcclxuICAgICAgICBtZXRob2Q6ICdHRVQnLFxyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcclxuICAgICAgICB9LFxyXG4gICAgICAgIGNyZWRlbnRpYWxzOiAnaW5jbHVkZScsXHJcbiAgICAgIH0pO1xyXG4gICAgICBjb25zdCBib2R5ID0gYXdhaXQgcmVzLmpzb24oKTtcclxuICAgICAgY29uc29sZS5sb2coJ2JvZHkgaXMgLi4uJywgYm9keSk7XHJcbiAgICAgIHNldEV4ZXJjaXNlKGJvZHkuZXhlcmNpc2VzUmVzdWx0cyk7XHJcbiAgICB9XHJcblxyXG4gICAgZG9GZXRjaCgpO1xyXG4gIH0sIFtdKTtcclxuXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICA8SGVhZD5cclxuICAgICAgICA8dGl0bGU+RXhlcmNpc2VzPC90aXRsZT5cclxuICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9mYXZpY29uLmljb1wiIC8+XHJcbiAgICAgIDwvSGVhZD5cclxuXHJcbiAgICAgIDxOZXdFeGVyY2lzZUxpbmsgLz5cclxuICAgICAgPFBhZ2VUaXRsZSBuYW1lPVwiRXhlcmNpc2VzXCIvPlxyXG5cclxuICAgICAgPG1haW4+XHJcbiAgICAgICAgPEV4ZXJjaXNlc0NvbnRhaW5lcj5cclxuXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgIHtleGVyY2lzZS5tYXAoKGV4ZXJjaXNlLCBpZHgpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIDxFeGVyY2lzZSBrZXk9e2lkeH0+e2V4ZXJjaXNlLmV4ZXJjaXNlX25hbWV9PC9FeGVyY2lzZT5cclxuICAgICAgICAgIH0pfVxyXG4gICAgICAgIDwvPlxyXG5cclxuXHJcblxyXG5cclxuICAgICAgICA8L0V4ZXJjaXNlc0NvbnRhaW5lcj5cclxuICAgICAgPC9tYWluPlxyXG5cclxuICAgICAgPEljb25OYXZCYXIgLz5cclxuXHJcbiAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAuY29udGFpbmVyIHtcclxuICAgICAgICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG4gICAgICAgICAgLy8gcGFkZGluZzogMCAwLjVyZW07XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIG1haW4ge1xyXG4gICAgICAgICAgLy8gcGFkZGluZzogNXJlbSAwO1xyXG4gICAgICAgICAgLy8gcGFkZGluZy1ib3R0b206IDVyZW07XHJcbiAgICAgICAgICAvLyBib3JkZXI6IDFweCBzb2xpZCByZWQ7XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIGZsZXg6IDE7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgIC8vIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZvb3RlciB7XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIGhlaWdodDogMTAwcHg7XHJcbiAgICAgICAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2VhZWFlYTtcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmb290ZXIgaW1nIHtcclxuICAgICAgICAgIG1hcmdpbi1sZWZ0OiAwLjVyZW07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmb290ZXIgYSB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgYSB7XHJcbiAgICAgICAgICBjb2xvcjogaW5oZXJpdDtcclxuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC50aXRsZSBhIHtcclxuICAgICAgICAgIGNvbG9yOiAjMDA3MGYzO1xyXG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnRpdGxlIGE6aG92ZXIsXHJcbiAgICAgICAgLnRpdGxlIGE6Zm9jdXMsXHJcbiAgICAgICAgLnRpdGxlIGE6YWN0aXZlIHtcclxuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnRpdGxlIHtcclxuICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjE1O1xyXG4gICAgICAgICAgZm9udC1zaXplOiA0cmVtO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnRpdGxlLFxyXG4gICAgICAgIC5kZXNjcmlwdGlvbiB7XHJcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuZGVzY3JpcHRpb24ge1xyXG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDEuNTtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29kZSB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmFmYWZhO1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgICAgcGFkZGluZzogMC43NXJlbTtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xyXG4gICAgICAgICAgZm9udC1mYW1pbHk6IE1lbmxvLCBNb25hY28sIEx1Y2lkYSBDb25zb2xlLCBMaWJlcmF0aW9uIE1vbm8sXHJcbiAgICAgICAgICAgIERlamFWdSBTYW5zIE1vbm8sIEJpdHN0cmVhbSBWZXJhIFNhbnMgTW9ubywgQ291cmllciBOZXcsIG1vbm9zcGFjZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5ncmlkIHtcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XHJcblxyXG4gICAgICAgICAgbWF4LXdpZHRoOiA4MDBweDtcclxuICAgICAgICAgIG1hcmdpbi10b3A6IDNyZW07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuY2FyZCB7XHJcbiAgICAgICAgICBtYXJnaW46IDFyZW07XHJcbiAgICAgICAgICBmbGV4LWJhc2lzOiA0NSU7XHJcbiAgICAgICAgICBwYWRkaW5nOiAxLjVyZW07XHJcbiAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgICAgY29sb3I6IGluaGVyaXQ7XHJcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZWFlYWVhO1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgICAgIHRyYW5zaXRpb246IGNvbG9yIDAuMTVzIGVhc2UsIGJvcmRlci1jb2xvciAwLjE1cyBlYXNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmNhcmQ6aG92ZXIsXHJcbiAgICAgICAgLmNhcmQ6Zm9jdXMsXHJcbiAgICAgICAgLmNhcmQ6YWN0aXZlIHtcclxuICAgICAgICAgIGNvbG9yOiAjMDA3MGYzO1xyXG4gICAgICAgICAgYm9yZGVyLWNvbG9yOiAjMDA3MGYzO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmNhcmQgaDMge1xyXG4gICAgICAgICAgbWFyZ2luOiAwIDAgMXJlbSAwO1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuY2FyZCBwIHtcclxuICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcclxuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAubG9nbyB7XHJcbiAgICAgICAgICBoZWlnaHQ6IDFlbTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xyXG4gICAgICAgICAgLmdyaWQge1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIGB9PC9zdHlsZT5cclxuXHJcbiAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXHJcbiAgICAgICAgaHRtbCxcclxuICAgICAgICBib2R5IHtcclxuICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBTZWdvZSBVSSwgUm9ib3RvLFxyXG4gICAgICAgICAgICBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCBGaXJhIFNhbnMsIERyb2lkIFNhbnMsIEhlbHZldGljYSBOZXVlLFxyXG4gICAgICAgICAgICBzYW5zLXNlcmlmO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgKiB7XHJcbiAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICAgIH1cclxuICAgICAgYH08L3N0eWxlPlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcbiJdfQ== */\n/*@ sourceURL=C:\\\\Users\\\\kimwoodfield\\\\Documents\\\\GitHub\\\\workout-tracker\\\\frontend\\\\pages\\\\exercises.js */"
    }, void 0, false, void 0, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a, {
      id: "3379920139",
      children: "html,body{padding:0;margin:0;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto, Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue, sans-serif;}*{box-sizing:border-box;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xca2ltd29vZGZpZWxkXFxEb2N1bWVudHNcXEdpdEh1Ylxcd29ya291dC10cmFja2VyXFxmcm9udGVuZFxccGFnZXNcXGV4ZXJjaXNlcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFpUHlCLEFBSXFCLEFBUVksVUFQYixTQUdHLEdBS2QsbUlBSkEiLCJmaWxlIjoiQzpcXFVzZXJzXFxraW13b29kZmllbGRcXERvY3VtZW50c1xcR2l0SHViXFx3b3Jrb3V0LXRyYWNrZXJcXGZyb250ZW5kXFxwYWdlc1xcZXhlcmNpc2VzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuaW1wb3J0IEljb25OYXZCYXIgZnJvbSAnLi4vY29tcG9uZW50cy9OYXZpZ2F0aW9uL0ljb25OYXZCYXInO1xyXG5pbXBvcnQgTmV3RXhlcmNpc2VMaW5rIGZyb20gJy4uL2NvbXBvbmVudHMvTmV3RXhlcmNpc2VMaW5rJztcclxuaW1wb3J0IFBhZ2VUaXRsZSBmcm9tICcuLi9jb21wb25lbnRzL1BhZ2VUaXRsZSdcclxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXHJcblxyXG5jb25zdCBQYWRkaW5nID0gc3R5bGVkLmRpdmBcclxuICBoZWlnaHQ6IDRyZW07XHJcbmBcclxuXHJcbmNvbnN0IEV4ZXJjaXNlc0NvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbiAgLy8gYm9yZGVyOiAxcHggZGFzaGVkIGJsdWU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcGFkZGluZy1sZWZ0OiAxLjI1cmVtO1xyXG4gIHBhZGRpbmctYm90dG9tOiA2LjVyZW07XHJcbiAgb3ZlcmZsb3c6IHNjcm9sbDtcclxuICBoZWlnaHQ6IDgwdmg7XHJcbmBcclxuXHJcbmNvbnN0IEV4ZXJjaXNlID0gc3R5bGVkLnBgXHJcbiAgZm9udC1zaXplOiAxLjE1cmVtO1xyXG4gIC8vIGJvcmRlci10b3A6IDAuNXB4IHNvbGlkIGxpZ2h0Z3JheTtcclxuICBib3JkZXItYm90dG9tOiAwLjVweCBzb2xpZCBsaWdodGdyYXk7XHJcbiAgLy8gcGFkZGluZzogMC44NXJlbSAwO1xyXG4gIHBhZGRpbmc6IDAuODVyZW0gMDtcclxuICBtYXJnaW46IDA7XHJcbmBcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEV4ZXJjaXNlcygpIHtcclxuXHJcbiAgY29uc3QgW2V4ZXJjaXNlLCBzZXRFeGVyY2lzZV0gPSB1c2VTdGF0ZShbXSk7XHJcblxyXG4gIC8vIGZldGNoKCdodHRwOi8vbG9jYWxob3N0OjMwMDAvZXhlcmNpc2VzJywgeyBcclxuICAvLyAgIG1ldGhvZDogJ0dFVCcsXHJcbiAgLy8gICBoZWFkZXJzOiB7XHJcbiAgLy8gICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcclxuICAvLyAgIH0sXHJcbiAgLy8gICBjcmVkZW50aWFsczogJ2luY2x1ZGUnLFxyXG4gIC8vIH0pXHJcbiAgLy8gLnRoZW4oKHJlcykgPT4ge1xyXG4gIC8vICAgc3dpdGNoKHJlcy5zdGF0dXMpIHtcclxuICAvLyAgICAgY2FzZSA0MDM6XHJcbiAgLy8gICAgICAgICBjb25zb2xlLmxvZygnNDAzIGVycm9yJyk7XHJcbiAgLy8gICAgICAgICByb3V0ZXIucHVzaCgnLycpO1xyXG4gIC8vICAgICAgICAgYnJlYWs7XHJcbiAgLy8gICAgIGNhc2UgMjAwOlxyXG4gIC8vICAgICAgICAgcmVzLmpzb24oKVxyXG4gIC8vICAgICAgICAgLnRoZW4oZGF0YSA9PiB7XHJcbiAgLy8gICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGRhdGEuZXhlcmNpc2VzUmVzdWx0cyk7XHJcbiAgLy8gICAgICAgICAgIC8vIHNldEV4ZXJjaXNlKGRhdGEuZXhlcmNpc2VzUmVzdWx0c1swXS5leGVyY2lzZV9uYW1lKTtcclxuICAvLyAgICAgICAgICAgLy8gY29uc29sZS5sb2coZGF0YS5leGVyY2lzZXNSZXN1bHRzWzBdLmV4ZXJjaXNlX25hbWUpO1xyXG4gIC8vICAgICAgICAgfSk7XHJcbiAgLy8gICAgICAgICBicmVhaztcclxuICAvLyB9XHJcbiAgLy8gfSlcclxuICAvLyAuY2F0Y2goZXJyID0+IHtcclxuICAvLyAgIGNvbnNvbGUubG9nKCdmZXRjaCBmYWlsZWQnKTtcclxuICAvLyB9KTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGFzeW5jIGZ1bmN0aW9uIGRvRmV0Y2goKSB7XHJcbiAgICAgIGxldCB1cmwgPSAnaHR0cDovL2xvY2FsaG9zdDozMDAwL2V4ZXJjaXNlcyc7XHJcbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKCdodHRwOi8vbG9jYWxob3N0OjMwMDAvZXhlcmNpc2VzJywgeyBcclxuICAgICAgICBtZXRob2Q6ICdHRVQnLFxyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcclxuICAgICAgICB9LFxyXG4gICAgICAgIGNyZWRlbnRpYWxzOiAnaW5jbHVkZScsXHJcbiAgICAgIH0pO1xyXG4gICAgICBjb25zdCBib2R5ID0gYXdhaXQgcmVzLmpzb24oKTtcclxuICAgICAgY29uc29sZS5sb2coJ2JvZHkgaXMgLi4uJywgYm9keSk7XHJcbiAgICAgIHNldEV4ZXJjaXNlKGJvZHkuZXhlcmNpc2VzUmVzdWx0cyk7XHJcbiAgICB9XHJcblxyXG4gICAgZG9GZXRjaCgpO1xyXG4gIH0sIFtdKTtcclxuXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICA8SGVhZD5cclxuICAgICAgICA8dGl0bGU+RXhlcmNpc2VzPC90aXRsZT5cclxuICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9mYXZpY29uLmljb1wiIC8+XHJcbiAgICAgIDwvSGVhZD5cclxuXHJcbiAgICAgIDxOZXdFeGVyY2lzZUxpbmsgLz5cclxuICAgICAgPFBhZ2VUaXRsZSBuYW1lPVwiRXhlcmNpc2VzXCIvPlxyXG5cclxuICAgICAgPG1haW4+XHJcbiAgICAgICAgPEV4ZXJjaXNlc0NvbnRhaW5lcj5cclxuXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgIHtleGVyY2lzZS5tYXAoKGV4ZXJjaXNlLCBpZHgpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIDxFeGVyY2lzZSBrZXk9e2lkeH0+e2V4ZXJjaXNlLmV4ZXJjaXNlX25hbWV9PC9FeGVyY2lzZT5cclxuICAgICAgICAgIH0pfVxyXG4gICAgICAgIDwvPlxyXG5cclxuXHJcblxyXG5cclxuICAgICAgICA8L0V4ZXJjaXNlc0NvbnRhaW5lcj5cclxuICAgICAgPC9tYWluPlxyXG5cclxuICAgICAgPEljb25OYXZCYXIgLz5cclxuXHJcbiAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAuY29udGFpbmVyIHtcclxuICAgICAgICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG4gICAgICAgICAgLy8gcGFkZGluZzogMCAwLjVyZW07XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIG1haW4ge1xyXG4gICAgICAgICAgLy8gcGFkZGluZzogNXJlbSAwO1xyXG4gICAgICAgICAgLy8gcGFkZGluZy1ib3R0b206IDVyZW07XHJcbiAgICAgICAgICAvLyBib3JkZXI6IDFweCBzb2xpZCByZWQ7XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIGZsZXg6IDE7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgIC8vIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZvb3RlciB7XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIGhlaWdodDogMTAwcHg7XHJcbiAgICAgICAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2VhZWFlYTtcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmb290ZXIgaW1nIHtcclxuICAgICAgICAgIG1hcmdpbi1sZWZ0OiAwLjVyZW07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmb290ZXIgYSB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgYSB7XHJcbiAgICAgICAgICBjb2xvcjogaW5oZXJpdDtcclxuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC50aXRsZSBhIHtcclxuICAgICAgICAgIGNvbG9yOiAjMDA3MGYzO1xyXG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnRpdGxlIGE6aG92ZXIsXHJcbiAgICAgICAgLnRpdGxlIGE6Zm9jdXMsXHJcbiAgICAgICAgLnRpdGxlIGE6YWN0aXZlIHtcclxuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnRpdGxlIHtcclxuICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjE1O1xyXG4gICAgICAgICAgZm9udC1zaXplOiA0cmVtO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnRpdGxlLFxyXG4gICAgICAgIC5kZXNjcmlwdGlvbiB7XHJcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuZGVzY3JpcHRpb24ge1xyXG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDEuNTtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29kZSB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmFmYWZhO1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgICAgcGFkZGluZzogMC43NXJlbTtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xyXG4gICAgICAgICAgZm9udC1mYW1pbHk6IE1lbmxvLCBNb25hY28sIEx1Y2lkYSBDb25zb2xlLCBMaWJlcmF0aW9uIE1vbm8sXHJcbiAgICAgICAgICAgIERlamFWdSBTYW5zIE1vbm8sIEJpdHN0cmVhbSBWZXJhIFNhbnMgTW9ubywgQ291cmllciBOZXcsIG1vbm9zcGFjZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5ncmlkIHtcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XHJcblxyXG4gICAgICAgICAgbWF4LXdpZHRoOiA4MDBweDtcclxuICAgICAgICAgIG1hcmdpbi10b3A6IDNyZW07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuY2FyZCB7XHJcbiAgICAgICAgICBtYXJnaW46IDFyZW07XHJcbiAgICAgICAgICBmbGV4LWJhc2lzOiA0NSU7XHJcbiAgICAgICAgICBwYWRkaW5nOiAxLjVyZW07XHJcbiAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgICAgY29sb3I6IGluaGVyaXQ7XHJcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZWFlYWVhO1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgICAgIHRyYW5zaXRpb246IGNvbG9yIDAuMTVzIGVhc2UsIGJvcmRlci1jb2xvciAwLjE1cyBlYXNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmNhcmQ6aG92ZXIsXHJcbiAgICAgICAgLmNhcmQ6Zm9jdXMsXHJcbiAgICAgICAgLmNhcmQ6YWN0aXZlIHtcclxuICAgICAgICAgIGNvbG9yOiAjMDA3MGYzO1xyXG4gICAgICAgICAgYm9yZGVyLWNvbG9yOiAjMDA3MGYzO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmNhcmQgaDMge1xyXG4gICAgICAgICAgbWFyZ2luOiAwIDAgMXJlbSAwO1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuY2FyZCBwIHtcclxuICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcclxuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAubG9nbyB7XHJcbiAgICAgICAgICBoZWlnaHQ6IDFlbTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xyXG4gICAgICAgICAgLmdyaWQge1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIGB9PC9zdHlsZT5cclxuXHJcbiAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXHJcbiAgICAgICAgaHRtbCxcclxuICAgICAgICBib2R5IHtcclxuICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBTZWdvZSBVSSwgUm9ib3RvLFxyXG4gICAgICAgICAgICBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCBGaXJhIFNhbnMsIERyb2lkIFNhbnMsIEhlbHZldGljYSBOZXVlLFxyXG4gICAgICAgICAgICBzYW5zLXNlcmlmO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgKiB7XHJcbiAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICAgIH1cclxuICAgICAgYH08L3N0eWxlPlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcbiJdfQ== */\n/*@ sourceURL=C:\\\\Users\\\\kimwoodfield\\\\Documents\\\\GitHub\\\\workout-tracker\\\\frontend\\\\pages\\\\exercises.js */"
    }, void 0, false, void 0, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 82,
    columnNumber: 5
  }, this);
}

_s(Exercises, "64Y98vCY1phrqJ2yFbNQ5lsraLY=");

_c3 = Exercises;

var _c, _c2, _c3;

$RefreshReg$(_c, "ExercisesContainer");
$RefreshReg$(_c2, "Exercise");
$RefreshReg$(_c3, "Exercises");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZXhlcmNpc2VzLmpzIl0sIm5hbWVzIjpbIlBhZGRpbmciLCJzdHlsZWQiLCJkaXYiLCJFeGVyY2lzZXNDb250YWluZXIiLCJFeGVyY2lzZSIsInAiLCJFeGVyY2lzZXMiLCJ1c2VTdGF0ZSIsImV4ZXJjaXNlIiwic2V0RXhlcmNpc2UiLCJ1c2VFZmZlY3QiLCJkb0ZldGNoIiwidXJsIiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiY3JlZGVudGlhbHMiLCJyZXMiLCJqc29uIiwiYm9keSIsImNvbnNvbGUiLCJsb2ciLCJleGVyY2lzZXNSZXN1bHRzIiwibWFwIiwiaWR4IiwiZXhlcmNpc2VfbmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLE9BQU8sR0FBR0MseURBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSxvQkFBYjtBQUlBLElBQU1DLGtCQUFrQixHQUFHRix5REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLDBGQUF4QjtLQUFNQyxrQjtBQVNOLElBQU1DLFFBQVEsR0FBR0gseURBQU0sQ0FBQ0ksQ0FBVjtBQUFBO0FBQUE7QUFBQSx5RkFBZDtNQUFNRCxRO0FBU1MsU0FBU0UsU0FBVCxHQUFxQjtBQUFBOztBQUFBOztBQUFBLGtCQUVGQyxzREFBUSxDQUFDLEVBQUQsQ0FGTjtBQUFBLE1BRTNCQyxRQUYyQjtBQUFBLE1BRWpCQyxXQUZpQixpQkFJbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUFDLHlEQUFTLENBQUMsWUFBTTtBQUFBLGFBQ0NDLE9BREQ7QUFBQTtBQUFBOztBQUFBO0FBQUEsNFhBQ2Q7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ01DLG1CQUROLEdBQ1ksaUNBRFo7QUFBQTtBQUFBLHVCQUVvQkMsS0FBSyxDQUFDLGlDQUFELEVBQW9DO0FBQ3pEQyx3QkFBTSxFQUFFLEtBRGlEO0FBRXpEQyx5QkFBTyxFQUFFO0FBQ1Asb0NBQWdCO0FBRFQsbUJBRmdEO0FBS3pEQyw2QkFBVyxFQUFFO0FBTDRDLGlCQUFwQyxDQUZ6Qjs7QUFBQTtBQUVRQyxtQkFGUjtBQUFBO0FBQUEsdUJBU3FCQSxHQUFHLENBQUNDLElBQUosRUFUckI7O0FBQUE7QUFTUUMsb0JBVFI7QUFVRUMsdUJBQU8sQ0FBQ0MsR0FBUixDQUFZLGFBQVosRUFBMkJGLElBQTNCO0FBQ0FWLDJCQUFXLENBQUNVLElBQUksQ0FBQ0csZ0JBQU4sQ0FBWDs7QUFYRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQURjO0FBQUE7QUFBQTs7QUFlZFgsV0FBTztBQUNSLEdBaEJRLEVBZ0JOLEVBaEJNLENBQVQ7QUFtQkEsc0JBQ0U7QUFBQSx3Q0FBZSxXQUFmO0FBQUEsNEJBQ0UscUVBQUMsZ0RBQUQ7QUFBQSw4QkFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFFRTtBQUFNLFdBQUcsRUFBQyxNQUFWO0FBQWlCLFlBQUksRUFBQyxjQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBTUUscUVBQUMsbUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQU5GLGVBT0UscUVBQUMsNkRBQUQ7QUFBVyxVQUFJLEVBQUM7QUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVBGLGVBU0U7QUFBQTtBQUFBLDZCQUNFLHFFQUFDLGtCQUFEO0FBQUEsK0JBRUE7QUFBQSxvQkFDR0gsUUFBUSxDQUFDZSxHQUFULENBQWEsVUFBQ2YsUUFBRCxFQUFXZ0IsR0FBWCxFQUFtQjtBQUMvQixnQ0FBTyxxRUFBQyxRQUFEO0FBQUEsd0JBQXFCaEIsUUFBUSxDQUFDaUI7QUFBOUIsZUFBZUQsR0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUFQO0FBQ0QsV0FGQTtBQURIO0FBRkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFURixlQXdCRSxxRUFBQyx5RUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBeEJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBaUxEOztHQW5PdUJsQixTOztNQUFBQSxTIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2V4ZXJjaXNlcy5iNWY0YjYwYjI0MTIzMmJkYjA2Ny5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuaW1wb3J0IEljb25OYXZCYXIgZnJvbSAnLi4vY29tcG9uZW50cy9OYXZpZ2F0aW9uL0ljb25OYXZCYXInO1xyXG5pbXBvcnQgTmV3RXhlcmNpc2VMaW5rIGZyb20gJy4uL2NvbXBvbmVudHMvTmV3RXhlcmNpc2VMaW5rJztcclxuaW1wb3J0IFBhZ2VUaXRsZSBmcm9tICcuLi9jb21wb25lbnRzL1BhZ2VUaXRsZSdcclxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXHJcblxyXG5jb25zdCBQYWRkaW5nID0gc3R5bGVkLmRpdmBcclxuICBoZWlnaHQ6IDRyZW07XHJcbmBcclxuXHJcbmNvbnN0IEV4ZXJjaXNlc0NvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbiAgLy8gYm9yZGVyOiAxcHggZGFzaGVkIGJsdWU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcGFkZGluZy1sZWZ0OiAxLjI1cmVtO1xyXG4gIHBhZGRpbmctYm90dG9tOiA2LjVyZW07XHJcbiAgb3ZlcmZsb3c6IHNjcm9sbDtcclxuICBoZWlnaHQ6IDgwdmg7XHJcbmBcclxuXHJcbmNvbnN0IEV4ZXJjaXNlID0gc3R5bGVkLnBgXHJcbiAgZm9udC1zaXplOiAxLjE1cmVtO1xyXG4gIC8vIGJvcmRlci10b3A6IDAuNXB4IHNvbGlkIGxpZ2h0Z3JheTtcclxuICBib3JkZXItYm90dG9tOiAwLjVweCBzb2xpZCBsaWdodGdyYXk7XHJcbiAgLy8gcGFkZGluZzogMC44NXJlbSAwO1xyXG4gIHBhZGRpbmc6IDAuODVyZW0gMDtcclxuICBtYXJnaW46IDA7XHJcbmBcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEV4ZXJjaXNlcygpIHtcclxuXHJcbiAgY29uc3QgW2V4ZXJjaXNlLCBzZXRFeGVyY2lzZV0gPSB1c2VTdGF0ZShbXSk7XHJcblxyXG4gIC8vIGZldGNoKCdodHRwOi8vbG9jYWxob3N0OjMwMDAvZXhlcmNpc2VzJywgeyBcclxuICAvLyAgIG1ldGhvZDogJ0dFVCcsXHJcbiAgLy8gICBoZWFkZXJzOiB7XHJcbiAgLy8gICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcclxuICAvLyAgIH0sXHJcbiAgLy8gICBjcmVkZW50aWFsczogJ2luY2x1ZGUnLFxyXG4gIC8vIH0pXHJcbiAgLy8gLnRoZW4oKHJlcykgPT4ge1xyXG4gIC8vICAgc3dpdGNoKHJlcy5zdGF0dXMpIHtcclxuICAvLyAgICAgY2FzZSA0MDM6XHJcbiAgLy8gICAgICAgICBjb25zb2xlLmxvZygnNDAzIGVycm9yJyk7XHJcbiAgLy8gICAgICAgICByb3V0ZXIucHVzaCgnLycpO1xyXG4gIC8vICAgICAgICAgYnJlYWs7XHJcbiAgLy8gICAgIGNhc2UgMjAwOlxyXG4gIC8vICAgICAgICAgcmVzLmpzb24oKVxyXG4gIC8vICAgICAgICAgLnRoZW4oZGF0YSA9PiB7XHJcbiAgLy8gICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGRhdGEuZXhlcmNpc2VzUmVzdWx0cyk7XHJcbiAgLy8gICAgICAgICAgIC8vIHNldEV4ZXJjaXNlKGRhdGEuZXhlcmNpc2VzUmVzdWx0c1swXS5leGVyY2lzZV9uYW1lKTtcclxuICAvLyAgICAgICAgICAgLy8gY29uc29sZS5sb2coZGF0YS5leGVyY2lzZXNSZXN1bHRzWzBdLmV4ZXJjaXNlX25hbWUpO1xyXG4gIC8vICAgICAgICAgfSk7XHJcbiAgLy8gICAgICAgICBicmVhaztcclxuICAvLyB9XHJcbiAgLy8gfSlcclxuICAvLyAuY2F0Y2goZXJyID0+IHtcclxuICAvLyAgIGNvbnNvbGUubG9nKCdmZXRjaCBmYWlsZWQnKTtcclxuICAvLyB9KTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGFzeW5jIGZ1bmN0aW9uIGRvRmV0Y2goKSB7XHJcbiAgICAgIGxldCB1cmwgPSAnaHR0cDovL2xvY2FsaG9zdDozMDAwL2V4ZXJjaXNlcyc7XHJcbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKCdodHRwOi8vbG9jYWxob3N0OjMwMDAvZXhlcmNpc2VzJywgeyBcclxuICAgICAgICBtZXRob2Q6ICdHRVQnLFxyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcclxuICAgICAgICB9LFxyXG4gICAgICAgIGNyZWRlbnRpYWxzOiAnaW5jbHVkZScsXHJcbiAgICAgIH0pO1xyXG4gICAgICBjb25zdCBib2R5ID0gYXdhaXQgcmVzLmpzb24oKTtcclxuICAgICAgY29uc29sZS5sb2coJ2JvZHkgaXMgLi4uJywgYm9keSk7XHJcbiAgICAgIHNldEV4ZXJjaXNlKGJvZHkuZXhlcmNpc2VzUmVzdWx0cyk7XHJcbiAgICB9XHJcblxyXG4gICAgZG9GZXRjaCgpO1xyXG4gIH0sIFtdKTtcclxuXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICA8SGVhZD5cclxuICAgICAgICA8dGl0bGU+RXhlcmNpc2VzPC90aXRsZT5cclxuICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9mYXZpY29uLmljb1wiIC8+XHJcbiAgICAgIDwvSGVhZD5cclxuXHJcbiAgICAgIDxOZXdFeGVyY2lzZUxpbmsgLz5cclxuICAgICAgPFBhZ2VUaXRsZSBuYW1lPVwiRXhlcmNpc2VzXCIvPlxyXG5cclxuICAgICAgPG1haW4+XHJcbiAgICAgICAgPEV4ZXJjaXNlc0NvbnRhaW5lcj5cclxuXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgIHtleGVyY2lzZS5tYXAoKGV4ZXJjaXNlLCBpZHgpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIDxFeGVyY2lzZSBrZXk9e2lkeH0+e2V4ZXJjaXNlLmV4ZXJjaXNlX25hbWV9PC9FeGVyY2lzZT5cclxuICAgICAgICAgIH0pfVxyXG4gICAgICAgIDwvPlxyXG5cclxuXHJcblxyXG5cclxuICAgICAgICA8L0V4ZXJjaXNlc0NvbnRhaW5lcj5cclxuICAgICAgPC9tYWluPlxyXG5cclxuICAgICAgPEljb25OYXZCYXIgLz5cclxuXHJcbiAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAuY29udGFpbmVyIHtcclxuICAgICAgICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG4gICAgICAgICAgLy8gcGFkZGluZzogMCAwLjVyZW07XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIG1haW4ge1xyXG4gICAgICAgICAgLy8gcGFkZGluZzogNXJlbSAwO1xyXG4gICAgICAgICAgLy8gcGFkZGluZy1ib3R0b206IDVyZW07XHJcbiAgICAgICAgICAvLyBib3JkZXI6IDFweCBzb2xpZCByZWQ7XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIGZsZXg6IDE7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgIC8vIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZvb3RlciB7XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIGhlaWdodDogMTAwcHg7XHJcbiAgICAgICAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2VhZWFlYTtcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmb290ZXIgaW1nIHtcclxuICAgICAgICAgIG1hcmdpbi1sZWZ0OiAwLjVyZW07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmb290ZXIgYSB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgYSB7XHJcbiAgICAgICAgICBjb2xvcjogaW5oZXJpdDtcclxuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC50aXRsZSBhIHtcclxuICAgICAgICAgIGNvbG9yOiAjMDA3MGYzO1xyXG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnRpdGxlIGE6aG92ZXIsXHJcbiAgICAgICAgLnRpdGxlIGE6Zm9jdXMsXHJcbiAgICAgICAgLnRpdGxlIGE6YWN0aXZlIHtcclxuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnRpdGxlIHtcclxuICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjE1O1xyXG4gICAgICAgICAgZm9udC1zaXplOiA0cmVtO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnRpdGxlLFxyXG4gICAgICAgIC5kZXNjcmlwdGlvbiB7XHJcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuZGVzY3JpcHRpb24ge1xyXG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDEuNTtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29kZSB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmFmYWZhO1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgICAgcGFkZGluZzogMC43NXJlbTtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xyXG4gICAgICAgICAgZm9udC1mYW1pbHk6IE1lbmxvLCBNb25hY28sIEx1Y2lkYSBDb25zb2xlLCBMaWJlcmF0aW9uIE1vbm8sXHJcbiAgICAgICAgICAgIERlamFWdSBTYW5zIE1vbm8sIEJpdHN0cmVhbSBWZXJhIFNhbnMgTW9ubywgQ291cmllciBOZXcsIG1vbm9zcGFjZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5ncmlkIHtcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XHJcblxyXG4gICAgICAgICAgbWF4LXdpZHRoOiA4MDBweDtcclxuICAgICAgICAgIG1hcmdpbi10b3A6IDNyZW07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuY2FyZCB7XHJcbiAgICAgICAgICBtYXJnaW46IDFyZW07XHJcbiAgICAgICAgICBmbGV4LWJhc2lzOiA0NSU7XHJcbiAgICAgICAgICBwYWRkaW5nOiAxLjVyZW07XHJcbiAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgICAgY29sb3I6IGluaGVyaXQ7XHJcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZWFlYWVhO1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgICAgIHRyYW5zaXRpb246IGNvbG9yIDAuMTVzIGVhc2UsIGJvcmRlci1jb2xvciAwLjE1cyBlYXNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmNhcmQ6aG92ZXIsXHJcbiAgICAgICAgLmNhcmQ6Zm9jdXMsXHJcbiAgICAgICAgLmNhcmQ6YWN0aXZlIHtcclxuICAgICAgICAgIGNvbG9yOiAjMDA3MGYzO1xyXG4gICAgICAgICAgYm9yZGVyLWNvbG9yOiAjMDA3MGYzO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmNhcmQgaDMge1xyXG4gICAgICAgICAgbWFyZ2luOiAwIDAgMXJlbSAwO1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuY2FyZCBwIHtcclxuICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcclxuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAubG9nbyB7XHJcbiAgICAgICAgICBoZWlnaHQ6IDFlbTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xyXG4gICAgICAgICAgLmdyaWQge1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIGB9PC9zdHlsZT5cclxuXHJcbiAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXHJcbiAgICAgICAgaHRtbCxcclxuICAgICAgICBib2R5IHtcclxuICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBTZWdvZSBVSSwgUm9ib3RvLFxyXG4gICAgICAgICAgICBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCBGaXJhIFNhbnMsIERyb2lkIFNhbnMsIEhlbHZldGljYSBOZXVlLFxyXG4gICAgICAgICAgICBzYW5zLXNlcmlmO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgKiB7XHJcbiAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICAgIH1cclxuICAgICAgYH08L3N0eWxlPlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=