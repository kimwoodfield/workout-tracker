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

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_10__["useRouter"])();

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

                if (res.status === 403) {
                  console.log('403 error');
                  router.push('/');
                }

                _context.next = 7;
                return res.json();

              case 7:
                body = _context.sent;
                console.log('body is ...', body);
                setExercise(body.exercisesResults);

              case 10:
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
        lineNumber: 90,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
        rel: "icon",
        href: "/favicon.ico",
        className: "jsx-3489015941"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 91,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_NewExerciseLink__WEBPACK_IMPORTED_MODULE_7__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_PageTitle__WEBPACK_IMPORTED_MODULE_8__["default"], {
      name: "Exercises"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 95,
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
              lineNumber: 102,
              columnNumber: 20
            }, _this);
          })
        }, void 0, false)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 98,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Navigation_IconNavBar__WEBPACK_IMPORTED_MODULE_6__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a, {
      id: "573937095",
      children: ".container.jsx-3489015941{min-height:100vh;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}main.jsx-3489015941{width:100%;-webkit-flex:1;-ms-flex:1;flex:1;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}footer.jsx-3489015941{width:100%;height:100px;border-top:1px solid #eaeaea;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}footer.jsx-3489015941 img.jsx-3489015941{margin-left:0.5rem;}footer.jsx-3489015941 a.jsx-3489015941{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}a.jsx-3489015941{color:inherit;-webkit-text-decoration:none;text-decoration:none;}.title.jsx-3489015941 a.jsx-3489015941{color:#0070f3;-webkit-text-decoration:none;text-decoration:none;}.title.jsx-3489015941 a.jsx-3489015941:hover,.title.jsx-3489015941 a.jsx-3489015941:focus,.title.jsx-3489015941 a.jsx-3489015941:active{-webkit-text-decoration:underline;text-decoration:underline;}.title.jsx-3489015941{margin:0;line-height:1.15;font-size:4rem;}.title.jsx-3489015941,.description.jsx-3489015941{text-align:center;}.description.jsx-3489015941{line-height:1.5;font-size:1.5rem;}code.jsx-3489015941{background:#fafafa;border-radius:5px;padding:0.75rem;font-size:1.1rem;font-family:Menlo,Monaco,Lucida Console,Liberation Mono, DejaVu Sans Mono,Bitstream Vera Sans Mono,Courier New,monospace;}.grid.jsx-3489015941{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;max-width:800px;margin-top:3rem;}.card.jsx-3489015941{margin:1rem;-webkit-flex-basis:45%;-ms-flex-preferred-size:45%;flex-basis:45%;padding:1.5rem;text-align:left;color:inherit;-webkit-text-decoration:none;text-decoration:none;border:1px solid #eaeaea;border-radius:10px;-webkit-transition:color 0.15s ease,border-color 0.15s ease;transition:color 0.15s ease,border-color 0.15s ease;}.card.jsx-3489015941:hover,.card.jsx-3489015941:focus,.card.jsx-3489015941:active{color:#0070f3;border-color:#0070f3;}.card.jsx-3489015941 h3.jsx-3489015941{margin:0 0 1rem 0;font-size:1.5rem;}.card.jsx-3489015941 p.jsx-3489015941{margin:0;font-size:1.25rem;line-height:1.5;}.logo.jsx-3489015941{height:1em;}@media (max-width:600px){.grid.jsx-3489015941{width:100%;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xca2ltd29vZGZpZWxkXFxEb2N1bWVudHNcXEdpdEh1Ylxcd29ya291dC10cmFja2VyXFxmcm9udGVuZFxccGFnZXNcXGV4ZXJjaXNlcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFpSGtCLEFBRzRCLEFBWU4sQUFTQSxBQVNRLEFBSU4sQUFNQyxBQUtBLEFBT1ksQUFJakIsQUFPUyxBQUlGLEFBS0csQUFTTixBQVVELEFBY0UsQUFLSSxBQUtULEFBTUUsQUFLRSxTQXJFSSxBQTJEQyxFQXZHWCxBQVNNLEFBb0dmLEFBSzBCLENBbkNULEVBbkRNLEFBS0EsQUE0REEsRUF0Q0osQ0FsRUosQ0E4RGYsQUErQ21CLENBaEZuQixBQTBDb0IsS0FsRFcsRUFtQ2QsQ0EyREMsTUFoRGxCLEVBc0NBLEFBS0EsRUF0Q2tCLElBZmxCLEVBMkRBLENBeEdlLFNBVUEsQUFtREksT0F0Qm5CLElBWEEsQUFLQSxNQThCc0UsSUExQzdDLEFBK0NKLElBV0osV0FtQ2YsRUE3SHNCLEVBMkZOLGdCQUNGLFNBaEZRLEtBaUZELElBdkVFLHdDQTBEQSxFQS9FQSxJQWdDSixBQTZETSxrQkFuQjNCLEtBN0RxQixFQWlGQSxtQkFDa0MsU0F6RWxDLHdDQVdyQixBQStDaUIsRUEvRUkscUJBYXJCLDhCQVNBLElBMkRrQixNQWNsQixVQWJrQixnQkFDbEIsTUFsRkEiLCJmaWxlIjoiQzpcXFVzZXJzXFxraW13b29kZmllbGRcXERvY3VtZW50c1xcR2l0SHViXFx3b3Jrb3V0LXRyYWNrZXJcXGZyb250ZW5kXFxwYWdlc1xcZXhlcmNpc2VzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuaW1wb3J0IEljb25OYXZCYXIgZnJvbSAnLi4vY29tcG9uZW50cy9OYXZpZ2F0aW9uL0ljb25OYXZCYXInO1xyXG5pbXBvcnQgTmV3RXhlcmNpc2VMaW5rIGZyb20gJy4uL2NvbXBvbmVudHMvTmV3RXhlcmNpc2VMaW5rJztcclxuaW1wb3J0IFBhZ2VUaXRsZSBmcm9tICcuLi9jb21wb25lbnRzL1BhZ2VUaXRsZSdcclxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXHJcblxyXG5jb25zdCBQYWRkaW5nID0gc3R5bGVkLmRpdmBcclxuICBoZWlnaHQ6IDRyZW07XHJcbmBcclxuXHJcbmNvbnN0IEV4ZXJjaXNlc0NvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbiAgLy8gYm9yZGVyOiAxcHggZGFzaGVkIGJsdWU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcGFkZGluZy1sZWZ0OiAxLjI1cmVtO1xyXG4gIHBhZGRpbmctYm90dG9tOiA2LjVyZW07XHJcbiAgb3ZlcmZsb3c6IHNjcm9sbDtcclxuICBoZWlnaHQ6IDgwdmg7XHJcbmBcclxuXHJcbmNvbnN0IEV4ZXJjaXNlID0gc3R5bGVkLnBgXHJcbiAgZm9udC1zaXplOiAxLjE1cmVtO1xyXG4gIC8vIGJvcmRlci10b3A6IDAuNXB4IHNvbGlkIGxpZ2h0Z3JheTtcclxuICBib3JkZXItYm90dG9tOiAwLjVweCBzb2xpZCBsaWdodGdyYXk7XHJcbiAgLy8gcGFkZGluZzogMC44NXJlbSAwO1xyXG4gIHBhZGRpbmc6IDAuODVyZW0gMDtcclxuICBtYXJnaW46IDA7XHJcbmBcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEV4ZXJjaXNlcygpIHtcclxuXHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG4gIGNvbnN0IFtleGVyY2lzZSwgc2V0RXhlcmNpc2VdID0gdXNlU3RhdGUoW10pO1xyXG5cclxuICAvLyBmZXRjaCgnaHR0cDovL2xvY2FsaG9zdDozMDAwL2V4ZXJjaXNlcycsIHsgXHJcbiAgLy8gICBtZXRob2Q6ICdHRVQnLFxyXG4gIC8vICAgaGVhZGVyczoge1xyXG4gIC8vICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXHJcbiAgLy8gICB9LFxyXG4gIC8vICAgY3JlZGVudGlhbHM6ICdpbmNsdWRlJyxcclxuICAvLyB9KVxyXG4gIC8vIC50aGVuKChyZXMpID0+IHtcclxuICAvLyAgIHN3aXRjaChyZXMuc3RhdHVzKSB7XHJcbiAgLy8gICAgIGNhc2UgNDAzOlxyXG4gIC8vICAgICAgICAgY29uc29sZS5sb2coJzQwMyBlcnJvcicpO1xyXG4gIC8vICAgICAgICAgcm91dGVyLnB1c2goJy8nKTtcclxuICAvLyAgICAgICAgIGJyZWFrO1xyXG4gIC8vICAgICBjYXNlIDIwMDpcclxuICAvLyAgICAgICAgIHJlcy5qc29uKClcclxuICAvLyAgICAgICAgIC50aGVuKGRhdGEgPT4ge1xyXG4gIC8vICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhkYXRhLmV4ZXJjaXNlc1Jlc3VsdHMpO1xyXG4gIC8vICAgICAgICAgICAvLyBzZXRFeGVyY2lzZShkYXRhLmV4ZXJjaXNlc1Jlc3VsdHNbMF0uZXhlcmNpc2VfbmFtZSk7XHJcbiAgLy8gICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGRhdGEuZXhlcmNpc2VzUmVzdWx0c1swXS5leGVyY2lzZV9uYW1lKTtcclxuICAvLyAgICAgICAgIH0pO1xyXG4gIC8vICAgICAgICAgYnJlYWs7XHJcbiAgLy8gfVxyXG4gIC8vIH0pXHJcbiAgLy8gLmNhdGNoKGVyciA9PiB7XHJcbiAgLy8gICBjb25zb2xlLmxvZygnZmV0Y2ggZmFpbGVkJyk7XHJcbiAgLy8gfSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBhc3luYyBmdW5jdGlvbiBkb0ZldGNoKCkge1xyXG4gICAgICBsZXQgdXJsID0gJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9leGVyY2lzZXMnO1xyXG4gICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCgnaHR0cDovL2xvY2FsaG9zdDozMDAwL2V4ZXJjaXNlcycsIHsgXHJcbiAgICAgICAgbWV0aG9kOiAnR0VUJyxcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXHJcbiAgICAgICAgfSxcclxuICAgICAgICBjcmVkZW50aWFsczogJ2luY2x1ZGUnLFxyXG4gICAgICB9KTtcclxuICAgICAgaWYgKHJlcy5zdGF0dXMgPT09IDQwMykge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCc0MDMgZXJyb3InKTtcclxuICAgICAgICByb3V0ZXIucHVzaCgnLycpO1xyXG4gICAgICB9XHJcbiAgICAgIGNvbnN0IGJvZHkgPSBhd2FpdCByZXMuanNvbigpO1xyXG4gICAgICBjb25zb2xlLmxvZygnYm9keSBpcyAuLi4nLCBib2R5KTtcclxuICAgICAgc2V0RXhlcmNpc2UoYm9keS5leGVyY2lzZXNSZXN1bHRzKTtcclxuICAgIH1cclxuXHJcbiAgICBkb0ZldGNoKCk7XHJcbiAgfSwgW10pO1xyXG5cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgIDxIZWFkPlxyXG4gICAgICAgIDx0aXRsZT5FeGVyY2lzZXM8L3RpdGxlPlxyXG4gICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2Zhdmljb24uaWNvXCIgLz5cclxuICAgICAgPC9IZWFkPlxyXG5cclxuICAgICAgPE5ld0V4ZXJjaXNlTGluayAvPlxyXG4gICAgICA8UGFnZVRpdGxlIG5hbWU9XCJFeGVyY2lzZXNcIi8+XHJcblxyXG4gICAgICA8bWFpbj5cclxuICAgICAgICA8RXhlcmNpc2VzQ29udGFpbmVyPlxyXG5cclxuICAgICAgICA8PlxyXG4gICAgICAgICAge2V4ZXJjaXNlLm1hcCgoZXhlcmNpc2UsIGlkeCkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gPEV4ZXJjaXNlIGtleT17aWR4fT57ZXhlcmNpc2UuZXhlcmNpc2VfbmFtZX08L0V4ZXJjaXNlPlxyXG4gICAgICAgICAgfSl9XHJcbiAgICAgICAgPC8+XHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgIDwvRXhlcmNpc2VzQ29udGFpbmVyPlxyXG4gICAgICA8L21haW4+XHJcblxyXG4gICAgICA8SWNvbk5hdkJhciAvPlxyXG5cclxuICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgIC5jb250YWluZXIge1xyXG4gICAgICAgICAgbWluLWhlaWdodDogMTAwdmg7XHJcbiAgICAgICAgICAvLyBwYWRkaW5nOiAwIDAuNXJlbTtcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbWFpbiB7XHJcbiAgICAgICAgICAvLyBwYWRkaW5nOiA1cmVtIDA7XHJcbiAgICAgICAgICAvLyBwYWRkaW5nLWJvdHRvbTogNXJlbTtcclxuICAgICAgICAgIC8vIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgZmxleDogMTtcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgLy8ganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZm9vdGVyIHtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgaGVpZ2h0OiAxMDBweDtcclxuICAgICAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZWFlYWVhO1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZvb3RlciBpbWcge1xyXG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDAuNXJlbTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZvb3RlciBhIHtcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBhIHtcclxuICAgICAgICAgIGNvbG9yOiBpbmhlcml0O1xyXG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnRpdGxlIGEge1xyXG4gICAgICAgICAgY29sb3I6ICMwMDcwZjM7XHJcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAudGl0bGUgYTpob3ZlcixcclxuICAgICAgICAudGl0bGUgYTpmb2N1cyxcclxuICAgICAgICAudGl0bGUgYTphY3RpdmUge1xyXG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAudGl0bGUge1xyXG4gICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDEuMTU7XHJcbiAgICAgICAgICBmb250LXNpemU6IDRyZW07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAudGl0bGUsXHJcbiAgICAgICAgLmRlc2NyaXB0aW9uIHtcclxuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5kZXNjcmlwdGlvbiB7XHJcbiAgICAgICAgICBsaW5lLWhlaWdodDogMS41O1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb2RlIHtcclxuICAgICAgICAgIGJhY2tncm91bmQ6ICNmYWZhZmE7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgICBwYWRkaW5nOiAwLjc1cmVtO1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxLjFyZW07XHJcbiAgICAgICAgICBmb250LWZhbWlseTogTWVubG8sIE1vbmFjbywgTHVjaWRhIENvbnNvbGUsIExpYmVyYXRpb24gTW9ubyxcclxuICAgICAgICAgICAgRGVqYVZ1IFNhbnMgTW9ubywgQml0c3RyZWFtIFZlcmEgU2FucyBNb25vLCBDb3VyaWVyIE5ldywgbW9ub3NwYWNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmdyaWQge1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgIGZsZXgtd3JhcDogd3JhcDtcclxuXHJcbiAgICAgICAgICBtYXgtd2lkdGg6IDgwMHB4O1xyXG4gICAgICAgICAgbWFyZ2luLXRvcDogM3JlbTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5jYXJkIHtcclxuICAgICAgICAgIG1hcmdpbjogMXJlbTtcclxuICAgICAgICAgIGZsZXgtYmFzaXM6IDQ1JTtcclxuICAgICAgICAgIHBhZGRpbmc6IDEuNXJlbTtcclxuICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgICBjb2xvcjogaW5oZXJpdDtcclxuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNlYWVhZWE7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgICAgdHJhbnNpdGlvbjogY29sb3IgMC4xNXMgZWFzZSwgYm9yZGVyLWNvbG9yIDAuMTVzIGVhc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuY2FyZDpob3ZlcixcclxuICAgICAgICAuY2FyZDpmb2N1cyxcclxuICAgICAgICAuY2FyZDphY3RpdmUge1xyXG4gICAgICAgICAgY29sb3I6ICMwMDcwZjM7XHJcbiAgICAgICAgICBib3JkZXItY29sb3I6ICMwMDcwZjM7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuY2FyZCBoMyB7XHJcbiAgICAgICAgICBtYXJnaW46IDAgMCAxcmVtIDA7XHJcbiAgICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5jYXJkIHAge1xyXG4gICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxLjI1cmVtO1xyXG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDEuNTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5sb2dvIHtcclxuICAgICAgICAgIGhlaWdodDogMWVtO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XHJcbiAgICAgICAgICAuZ3JpZCB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgYH08L3N0eWxlPlxyXG5cclxuICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcclxuICAgICAgICBodG1sLFxyXG4gICAgICAgIGJvZHkge1xyXG4gICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFNlZ29lIFVJLCBSb2JvdG8sXHJcbiAgICAgICAgICAgIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsIEZpcmEgU2FucywgRHJvaWQgU2FucywgSGVsdmV0aWNhIE5ldWUsXHJcbiAgICAgICAgICAgIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAqIHtcclxuICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgICAgfVxyXG4gICAgICBgfTwvc3R5bGU+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuIl19 */\n/*@ sourceURL=C:\\\\Users\\\\kimwoodfield\\\\Documents\\\\GitHub\\\\workout-tracker\\\\frontend\\\\pages\\\\exercises.js */"
    }, void 0, false, void 0, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a, {
      id: "3379920139",
      children: "html,body{padding:0;margin:0;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto, Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue, sans-serif;}*{box-sizing:border-box;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xca2ltd29vZGZpZWxkXFxEb2N1bWVudHNcXEdpdEh1Ylxcd29ya291dC10cmFja2VyXFxmcm9udGVuZFxccGFnZXNcXGV4ZXJjaXNlcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF1UHlCLEFBSXFCLEFBUVksVUFQYixTQUdHLEdBS2QsbUlBSkEiLCJmaWxlIjoiQzpcXFVzZXJzXFxraW13b29kZmllbGRcXERvY3VtZW50c1xcR2l0SHViXFx3b3Jrb3V0LXRyYWNrZXJcXGZyb250ZW5kXFxwYWdlc1xcZXhlcmNpc2VzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuaW1wb3J0IEljb25OYXZCYXIgZnJvbSAnLi4vY29tcG9uZW50cy9OYXZpZ2F0aW9uL0ljb25OYXZCYXInO1xyXG5pbXBvcnQgTmV3RXhlcmNpc2VMaW5rIGZyb20gJy4uL2NvbXBvbmVudHMvTmV3RXhlcmNpc2VMaW5rJztcclxuaW1wb3J0IFBhZ2VUaXRsZSBmcm9tICcuLi9jb21wb25lbnRzL1BhZ2VUaXRsZSdcclxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXHJcblxyXG5jb25zdCBQYWRkaW5nID0gc3R5bGVkLmRpdmBcclxuICBoZWlnaHQ6IDRyZW07XHJcbmBcclxuXHJcbmNvbnN0IEV4ZXJjaXNlc0NvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbiAgLy8gYm9yZGVyOiAxcHggZGFzaGVkIGJsdWU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcGFkZGluZy1sZWZ0OiAxLjI1cmVtO1xyXG4gIHBhZGRpbmctYm90dG9tOiA2LjVyZW07XHJcbiAgb3ZlcmZsb3c6IHNjcm9sbDtcclxuICBoZWlnaHQ6IDgwdmg7XHJcbmBcclxuXHJcbmNvbnN0IEV4ZXJjaXNlID0gc3R5bGVkLnBgXHJcbiAgZm9udC1zaXplOiAxLjE1cmVtO1xyXG4gIC8vIGJvcmRlci10b3A6IDAuNXB4IHNvbGlkIGxpZ2h0Z3JheTtcclxuICBib3JkZXItYm90dG9tOiAwLjVweCBzb2xpZCBsaWdodGdyYXk7XHJcbiAgLy8gcGFkZGluZzogMC44NXJlbSAwO1xyXG4gIHBhZGRpbmc6IDAuODVyZW0gMDtcclxuICBtYXJnaW46IDA7XHJcbmBcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEV4ZXJjaXNlcygpIHtcclxuXHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG4gIGNvbnN0IFtleGVyY2lzZSwgc2V0RXhlcmNpc2VdID0gdXNlU3RhdGUoW10pO1xyXG5cclxuICAvLyBmZXRjaCgnaHR0cDovL2xvY2FsaG9zdDozMDAwL2V4ZXJjaXNlcycsIHsgXHJcbiAgLy8gICBtZXRob2Q6ICdHRVQnLFxyXG4gIC8vICAgaGVhZGVyczoge1xyXG4gIC8vICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXHJcbiAgLy8gICB9LFxyXG4gIC8vICAgY3JlZGVudGlhbHM6ICdpbmNsdWRlJyxcclxuICAvLyB9KVxyXG4gIC8vIC50aGVuKChyZXMpID0+IHtcclxuICAvLyAgIHN3aXRjaChyZXMuc3RhdHVzKSB7XHJcbiAgLy8gICAgIGNhc2UgNDAzOlxyXG4gIC8vICAgICAgICAgY29uc29sZS5sb2coJzQwMyBlcnJvcicpO1xyXG4gIC8vICAgICAgICAgcm91dGVyLnB1c2goJy8nKTtcclxuICAvLyAgICAgICAgIGJyZWFrO1xyXG4gIC8vICAgICBjYXNlIDIwMDpcclxuICAvLyAgICAgICAgIHJlcy5qc29uKClcclxuICAvLyAgICAgICAgIC50aGVuKGRhdGEgPT4ge1xyXG4gIC8vICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhkYXRhLmV4ZXJjaXNlc1Jlc3VsdHMpO1xyXG4gIC8vICAgICAgICAgICAvLyBzZXRFeGVyY2lzZShkYXRhLmV4ZXJjaXNlc1Jlc3VsdHNbMF0uZXhlcmNpc2VfbmFtZSk7XHJcbiAgLy8gICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGRhdGEuZXhlcmNpc2VzUmVzdWx0c1swXS5leGVyY2lzZV9uYW1lKTtcclxuICAvLyAgICAgICAgIH0pO1xyXG4gIC8vICAgICAgICAgYnJlYWs7XHJcbiAgLy8gfVxyXG4gIC8vIH0pXHJcbiAgLy8gLmNhdGNoKGVyciA9PiB7XHJcbiAgLy8gICBjb25zb2xlLmxvZygnZmV0Y2ggZmFpbGVkJyk7XHJcbiAgLy8gfSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBhc3luYyBmdW5jdGlvbiBkb0ZldGNoKCkge1xyXG4gICAgICBsZXQgdXJsID0gJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9leGVyY2lzZXMnO1xyXG4gICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCgnaHR0cDovL2xvY2FsaG9zdDozMDAwL2V4ZXJjaXNlcycsIHsgXHJcbiAgICAgICAgbWV0aG9kOiAnR0VUJyxcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXHJcbiAgICAgICAgfSxcclxuICAgICAgICBjcmVkZW50aWFsczogJ2luY2x1ZGUnLFxyXG4gICAgICB9KTtcclxuICAgICAgaWYgKHJlcy5zdGF0dXMgPT09IDQwMykge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCc0MDMgZXJyb3InKTtcclxuICAgICAgICByb3V0ZXIucHVzaCgnLycpO1xyXG4gICAgICB9XHJcbiAgICAgIGNvbnN0IGJvZHkgPSBhd2FpdCByZXMuanNvbigpO1xyXG4gICAgICBjb25zb2xlLmxvZygnYm9keSBpcyAuLi4nLCBib2R5KTtcclxuICAgICAgc2V0RXhlcmNpc2UoYm9keS5leGVyY2lzZXNSZXN1bHRzKTtcclxuICAgIH1cclxuXHJcbiAgICBkb0ZldGNoKCk7XHJcbiAgfSwgW10pO1xyXG5cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgIDxIZWFkPlxyXG4gICAgICAgIDx0aXRsZT5FeGVyY2lzZXM8L3RpdGxlPlxyXG4gICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2Zhdmljb24uaWNvXCIgLz5cclxuICAgICAgPC9IZWFkPlxyXG5cclxuICAgICAgPE5ld0V4ZXJjaXNlTGluayAvPlxyXG4gICAgICA8UGFnZVRpdGxlIG5hbWU9XCJFeGVyY2lzZXNcIi8+XHJcblxyXG4gICAgICA8bWFpbj5cclxuICAgICAgICA8RXhlcmNpc2VzQ29udGFpbmVyPlxyXG5cclxuICAgICAgICA8PlxyXG4gICAgICAgICAge2V4ZXJjaXNlLm1hcCgoZXhlcmNpc2UsIGlkeCkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gPEV4ZXJjaXNlIGtleT17aWR4fT57ZXhlcmNpc2UuZXhlcmNpc2VfbmFtZX08L0V4ZXJjaXNlPlxyXG4gICAgICAgICAgfSl9XHJcbiAgICAgICAgPC8+XHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgIDwvRXhlcmNpc2VzQ29udGFpbmVyPlxyXG4gICAgICA8L21haW4+XHJcblxyXG4gICAgICA8SWNvbk5hdkJhciAvPlxyXG5cclxuICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgIC5jb250YWluZXIge1xyXG4gICAgICAgICAgbWluLWhlaWdodDogMTAwdmg7XHJcbiAgICAgICAgICAvLyBwYWRkaW5nOiAwIDAuNXJlbTtcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbWFpbiB7XHJcbiAgICAgICAgICAvLyBwYWRkaW5nOiA1cmVtIDA7XHJcbiAgICAgICAgICAvLyBwYWRkaW5nLWJvdHRvbTogNXJlbTtcclxuICAgICAgICAgIC8vIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgZmxleDogMTtcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgLy8ganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZm9vdGVyIHtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgaGVpZ2h0OiAxMDBweDtcclxuICAgICAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZWFlYWVhO1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZvb3RlciBpbWcge1xyXG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDAuNXJlbTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZvb3RlciBhIHtcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBhIHtcclxuICAgICAgICAgIGNvbG9yOiBpbmhlcml0O1xyXG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnRpdGxlIGEge1xyXG4gICAgICAgICAgY29sb3I6ICMwMDcwZjM7XHJcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAudGl0bGUgYTpob3ZlcixcclxuICAgICAgICAudGl0bGUgYTpmb2N1cyxcclxuICAgICAgICAudGl0bGUgYTphY3RpdmUge1xyXG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAudGl0bGUge1xyXG4gICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDEuMTU7XHJcbiAgICAgICAgICBmb250LXNpemU6IDRyZW07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAudGl0bGUsXHJcbiAgICAgICAgLmRlc2NyaXB0aW9uIHtcclxuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5kZXNjcmlwdGlvbiB7XHJcbiAgICAgICAgICBsaW5lLWhlaWdodDogMS41O1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb2RlIHtcclxuICAgICAgICAgIGJhY2tncm91bmQ6ICNmYWZhZmE7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgICBwYWRkaW5nOiAwLjc1cmVtO1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxLjFyZW07XHJcbiAgICAgICAgICBmb250LWZhbWlseTogTWVubG8sIE1vbmFjbywgTHVjaWRhIENvbnNvbGUsIExpYmVyYXRpb24gTW9ubyxcclxuICAgICAgICAgICAgRGVqYVZ1IFNhbnMgTW9ubywgQml0c3RyZWFtIFZlcmEgU2FucyBNb25vLCBDb3VyaWVyIE5ldywgbW9ub3NwYWNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmdyaWQge1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgIGZsZXgtd3JhcDogd3JhcDtcclxuXHJcbiAgICAgICAgICBtYXgtd2lkdGg6IDgwMHB4O1xyXG4gICAgICAgICAgbWFyZ2luLXRvcDogM3JlbTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5jYXJkIHtcclxuICAgICAgICAgIG1hcmdpbjogMXJlbTtcclxuICAgICAgICAgIGZsZXgtYmFzaXM6IDQ1JTtcclxuICAgICAgICAgIHBhZGRpbmc6IDEuNXJlbTtcclxuICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgICBjb2xvcjogaW5oZXJpdDtcclxuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNlYWVhZWE7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgICAgdHJhbnNpdGlvbjogY29sb3IgMC4xNXMgZWFzZSwgYm9yZGVyLWNvbG9yIDAuMTVzIGVhc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuY2FyZDpob3ZlcixcclxuICAgICAgICAuY2FyZDpmb2N1cyxcclxuICAgICAgICAuY2FyZDphY3RpdmUge1xyXG4gICAgICAgICAgY29sb3I6ICMwMDcwZjM7XHJcbiAgICAgICAgICBib3JkZXItY29sb3I6ICMwMDcwZjM7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuY2FyZCBoMyB7XHJcbiAgICAgICAgICBtYXJnaW46IDAgMCAxcmVtIDA7XHJcbiAgICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5jYXJkIHAge1xyXG4gICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxLjI1cmVtO1xyXG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDEuNTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5sb2dvIHtcclxuICAgICAgICAgIGhlaWdodDogMWVtO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XHJcbiAgICAgICAgICAuZ3JpZCB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgYH08L3N0eWxlPlxyXG5cclxuICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcclxuICAgICAgICBodG1sLFxyXG4gICAgICAgIGJvZHkge1xyXG4gICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFNlZ29lIFVJLCBSb2JvdG8sXHJcbiAgICAgICAgICAgIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsIEZpcmEgU2FucywgRHJvaWQgU2FucywgSGVsdmV0aWNhIE5ldWUsXHJcbiAgICAgICAgICAgIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAqIHtcclxuICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgICAgfVxyXG4gICAgICBgfTwvc3R5bGU+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuIl19 */\n/*@ sourceURL=C:\\\\Users\\\\kimwoodfield\\\\Documents\\\\GitHub\\\\workout-tracker\\\\frontend\\\\pages\\\\exercises.js */"
    }, void 0, false, void 0, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 88,
    columnNumber: 5
  }, this);
}

_s(Exercises, "OkafoJDh8deuALaqxLbNwpPuUBQ=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_10__["useRouter"]];
});

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZXhlcmNpc2VzLmpzIl0sIm5hbWVzIjpbIlBhZGRpbmciLCJzdHlsZWQiLCJkaXYiLCJFeGVyY2lzZXNDb250YWluZXIiLCJFeGVyY2lzZSIsInAiLCJFeGVyY2lzZXMiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJ1c2VTdGF0ZSIsImV4ZXJjaXNlIiwic2V0RXhlcmNpc2UiLCJ1c2VFZmZlY3QiLCJkb0ZldGNoIiwidXJsIiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiY3JlZGVudGlhbHMiLCJyZXMiLCJzdGF0dXMiLCJjb25zb2xlIiwibG9nIiwicHVzaCIsImpzb24iLCJib2R5IiwiZXhlcmNpc2VzUmVzdWx0cyIsIm1hcCIsImlkeCIsImV4ZXJjaXNlX25hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxPQUFPLEdBQUdDLHlEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEsb0JBQWI7QUFJQSxJQUFNQyxrQkFBa0IsR0FBR0YseURBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSwwRkFBeEI7S0FBTUMsa0I7QUFTTixJQUFNQyxRQUFRLEdBQUdILHlEQUFNLENBQUNJLENBQVY7QUFBQTtBQUFBO0FBQUEseUZBQWQ7TUFBTUQsUTtBQVNTLFNBQVNFLFNBQVQsR0FBcUI7QUFBQTs7QUFBQTs7QUFFbEMsTUFBTUMsTUFBTSxHQUFHQyw4REFBUyxFQUF4Qjs7QUFGa0Msa0JBSUZDLHNEQUFRLENBQUMsRUFBRCxDQUpOO0FBQUEsTUFJM0JDLFFBSjJCO0FBQUEsTUFJakJDLFdBSmlCLGlCQU1sQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQUMseURBQVMsQ0FBQyxZQUFNO0FBQUEsYUFDQ0MsT0FERDtBQUFBO0FBQUE7O0FBQUE7QUFBQSw0WEFDZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDTUMsbUJBRE4sR0FDWSxpQ0FEWjtBQUFBO0FBQUEsdUJBRW9CQyxLQUFLLENBQUMsaUNBQUQsRUFBb0M7QUFDekRDLHdCQUFNLEVBQUUsS0FEaUQ7QUFFekRDLHlCQUFPLEVBQUU7QUFDUCxvQ0FBZ0I7QUFEVCxtQkFGZ0Q7QUFLekRDLDZCQUFXLEVBQUU7QUFMNEMsaUJBQXBDLENBRnpCOztBQUFBO0FBRVFDLG1CQUZSOztBQVNFLG9CQUFJQSxHQUFHLENBQUNDLE1BQUosS0FBZSxHQUFuQixFQUF3QjtBQUN0QkMseUJBQU8sQ0FBQ0MsR0FBUixDQUFZLFdBQVo7QUFDQWYsd0JBQU0sQ0FBQ2dCLElBQVAsQ0FBWSxHQUFaO0FBQ0Q7O0FBWkg7QUFBQSx1QkFhcUJKLEdBQUcsQ0FBQ0ssSUFBSixFQWJyQjs7QUFBQTtBQWFRQyxvQkFiUjtBQWNFSix1QkFBTyxDQUFDQyxHQUFSLENBQVksYUFBWixFQUEyQkcsSUFBM0I7QUFDQWQsMkJBQVcsQ0FBQ2MsSUFBSSxDQUFDQyxnQkFBTixDQUFYOztBQWZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BRGM7QUFBQTtBQUFBOztBQW1CZGIsV0FBTztBQUNSLEdBcEJRLEVBb0JOLEVBcEJNLENBQVQ7QUF1QkEsc0JBQ0U7QUFBQSx3Q0FBZSxXQUFmO0FBQUEsNEJBQ0UscUVBQUMsZ0RBQUQ7QUFBQSw4QkFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFFRTtBQUFNLFdBQUcsRUFBQyxNQUFWO0FBQWlCLFlBQUksRUFBQyxjQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBTUUscUVBQUMsbUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQU5GLGVBT0UscUVBQUMsNkRBQUQ7QUFBVyxVQUFJLEVBQUM7QUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVBGLGVBU0U7QUFBQTtBQUFBLDZCQUNFLHFFQUFDLGtCQUFEO0FBQUEsK0JBRUE7QUFBQSxvQkFDR0gsUUFBUSxDQUFDaUIsR0FBVCxDQUFhLFVBQUNqQixRQUFELEVBQVdrQixHQUFYLEVBQW1CO0FBQy9CLGdDQUFPLHFFQUFDLFFBQUQ7QUFBQSx3QkFBcUJsQixRQUFRLENBQUNtQjtBQUE5QixlQUFlRCxHQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBQVA7QUFDRCxXQUZBO0FBREg7QUFGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVRGLGVBd0JFLHFFQUFDLHlFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUF4QkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFpTEQ7O0dBek91QnRCLFM7VUFFUEUsc0Q7OztNQUZPRixTIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2V4ZXJjaXNlcy4zNjEwOTIyNmI5NzE0YTIwMzBiZi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuaW1wb3J0IEljb25OYXZCYXIgZnJvbSAnLi4vY29tcG9uZW50cy9OYXZpZ2F0aW9uL0ljb25OYXZCYXInO1xyXG5pbXBvcnQgTmV3RXhlcmNpc2VMaW5rIGZyb20gJy4uL2NvbXBvbmVudHMvTmV3RXhlcmNpc2VMaW5rJztcclxuaW1wb3J0IFBhZ2VUaXRsZSBmcm9tICcuLi9jb21wb25lbnRzL1BhZ2VUaXRsZSdcclxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXHJcblxyXG5jb25zdCBQYWRkaW5nID0gc3R5bGVkLmRpdmBcclxuICBoZWlnaHQ6IDRyZW07XHJcbmBcclxuXHJcbmNvbnN0IEV4ZXJjaXNlc0NvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbiAgLy8gYm9yZGVyOiAxcHggZGFzaGVkIGJsdWU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcGFkZGluZy1sZWZ0OiAxLjI1cmVtO1xyXG4gIHBhZGRpbmctYm90dG9tOiA2LjVyZW07XHJcbiAgb3ZlcmZsb3c6IHNjcm9sbDtcclxuICBoZWlnaHQ6IDgwdmg7XHJcbmBcclxuXHJcbmNvbnN0IEV4ZXJjaXNlID0gc3R5bGVkLnBgXHJcbiAgZm9udC1zaXplOiAxLjE1cmVtO1xyXG4gIC8vIGJvcmRlci10b3A6IDAuNXB4IHNvbGlkIGxpZ2h0Z3JheTtcclxuICBib3JkZXItYm90dG9tOiAwLjVweCBzb2xpZCBsaWdodGdyYXk7XHJcbiAgLy8gcGFkZGluZzogMC44NXJlbSAwO1xyXG4gIHBhZGRpbmc6IDAuODVyZW0gMDtcclxuICBtYXJnaW46IDA7XHJcbmBcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEV4ZXJjaXNlcygpIHtcclxuXHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG4gIGNvbnN0IFtleGVyY2lzZSwgc2V0RXhlcmNpc2VdID0gdXNlU3RhdGUoW10pO1xyXG5cclxuICAvLyBmZXRjaCgnaHR0cDovL2xvY2FsaG9zdDozMDAwL2V4ZXJjaXNlcycsIHsgXHJcbiAgLy8gICBtZXRob2Q6ICdHRVQnLFxyXG4gIC8vICAgaGVhZGVyczoge1xyXG4gIC8vICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXHJcbiAgLy8gICB9LFxyXG4gIC8vICAgY3JlZGVudGlhbHM6ICdpbmNsdWRlJyxcclxuICAvLyB9KVxyXG4gIC8vIC50aGVuKChyZXMpID0+IHtcclxuICAvLyAgIHN3aXRjaChyZXMuc3RhdHVzKSB7XHJcbiAgLy8gICAgIGNhc2UgNDAzOlxyXG4gIC8vICAgICAgICAgY29uc29sZS5sb2coJzQwMyBlcnJvcicpO1xyXG4gIC8vICAgICAgICAgcm91dGVyLnB1c2goJy8nKTtcclxuICAvLyAgICAgICAgIGJyZWFrO1xyXG4gIC8vICAgICBjYXNlIDIwMDpcclxuICAvLyAgICAgICAgIHJlcy5qc29uKClcclxuICAvLyAgICAgICAgIC50aGVuKGRhdGEgPT4ge1xyXG4gIC8vICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhkYXRhLmV4ZXJjaXNlc1Jlc3VsdHMpO1xyXG4gIC8vICAgICAgICAgICAvLyBzZXRFeGVyY2lzZShkYXRhLmV4ZXJjaXNlc1Jlc3VsdHNbMF0uZXhlcmNpc2VfbmFtZSk7XHJcbiAgLy8gICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGRhdGEuZXhlcmNpc2VzUmVzdWx0c1swXS5leGVyY2lzZV9uYW1lKTtcclxuICAvLyAgICAgICAgIH0pO1xyXG4gIC8vICAgICAgICAgYnJlYWs7XHJcbiAgLy8gfVxyXG4gIC8vIH0pXHJcbiAgLy8gLmNhdGNoKGVyciA9PiB7XHJcbiAgLy8gICBjb25zb2xlLmxvZygnZmV0Y2ggZmFpbGVkJyk7XHJcbiAgLy8gfSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBhc3luYyBmdW5jdGlvbiBkb0ZldGNoKCkge1xyXG4gICAgICBsZXQgdXJsID0gJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9leGVyY2lzZXMnO1xyXG4gICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCgnaHR0cDovL2xvY2FsaG9zdDozMDAwL2V4ZXJjaXNlcycsIHsgXHJcbiAgICAgICAgbWV0aG9kOiAnR0VUJyxcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXHJcbiAgICAgICAgfSxcclxuICAgICAgICBjcmVkZW50aWFsczogJ2luY2x1ZGUnLFxyXG4gICAgICB9KTtcclxuICAgICAgaWYgKHJlcy5zdGF0dXMgPT09IDQwMykge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCc0MDMgZXJyb3InKTtcclxuICAgICAgICByb3V0ZXIucHVzaCgnLycpO1xyXG4gICAgICB9XHJcbiAgICAgIGNvbnN0IGJvZHkgPSBhd2FpdCByZXMuanNvbigpO1xyXG4gICAgICBjb25zb2xlLmxvZygnYm9keSBpcyAuLi4nLCBib2R5KTtcclxuICAgICAgc2V0RXhlcmNpc2UoYm9keS5leGVyY2lzZXNSZXN1bHRzKTtcclxuICAgIH1cclxuXHJcbiAgICBkb0ZldGNoKCk7XHJcbiAgfSwgW10pO1xyXG5cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgIDxIZWFkPlxyXG4gICAgICAgIDx0aXRsZT5FeGVyY2lzZXM8L3RpdGxlPlxyXG4gICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2Zhdmljb24uaWNvXCIgLz5cclxuICAgICAgPC9IZWFkPlxyXG5cclxuICAgICAgPE5ld0V4ZXJjaXNlTGluayAvPlxyXG4gICAgICA8UGFnZVRpdGxlIG5hbWU9XCJFeGVyY2lzZXNcIi8+XHJcblxyXG4gICAgICA8bWFpbj5cclxuICAgICAgICA8RXhlcmNpc2VzQ29udGFpbmVyPlxyXG5cclxuICAgICAgICA8PlxyXG4gICAgICAgICAge2V4ZXJjaXNlLm1hcCgoZXhlcmNpc2UsIGlkeCkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gPEV4ZXJjaXNlIGtleT17aWR4fT57ZXhlcmNpc2UuZXhlcmNpc2VfbmFtZX08L0V4ZXJjaXNlPlxyXG4gICAgICAgICAgfSl9XHJcbiAgICAgICAgPC8+XHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgIDwvRXhlcmNpc2VzQ29udGFpbmVyPlxyXG4gICAgICA8L21haW4+XHJcblxyXG4gICAgICA8SWNvbk5hdkJhciAvPlxyXG5cclxuICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgIC5jb250YWluZXIge1xyXG4gICAgICAgICAgbWluLWhlaWdodDogMTAwdmg7XHJcbiAgICAgICAgICAvLyBwYWRkaW5nOiAwIDAuNXJlbTtcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbWFpbiB7XHJcbiAgICAgICAgICAvLyBwYWRkaW5nOiA1cmVtIDA7XHJcbiAgICAgICAgICAvLyBwYWRkaW5nLWJvdHRvbTogNXJlbTtcclxuICAgICAgICAgIC8vIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgZmxleDogMTtcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgLy8ganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZm9vdGVyIHtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgaGVpZ2h0OiAxMDBweDtcclxuICAgICAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZWFlYWVhO1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZvb3RlciBpbWcge1xyXG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDAuNXJlbTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZvb3RlciBhIHtcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBhIHtcclxuICAgICAgICAgIGNvbG9yOiBpbmhlcml0O1xyXG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnRpdGxlIGEge1xyXG4gICAgICAgICAgY29sb3I6ICMwMDcwZjM7XHJcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAudGl0bGUgYTpob3ZlcixcclxuICAgICAgICAudGl0bGUgYTpmb2N1cyxcclxuICAgICAgICAudGl0bGUgYTphY3RpdmUge1xyXG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAudGl0bGUge1xyXG4gICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDEuMTU7XHJcbiAgICAgICAgICBmb250LXNpemU6IDRyZW07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAudGl0bGUsXHJcbiAgICAgICAgLmRlc2NyaXB0aW9uIHtcclxuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5kZXNjcmlwdGlvbiB7XHJcbiAgICAgICAgICBsaW5lLWhlaWdodDogMS41O1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb2RlIHtcclxuICAgICAgICAgIGJhY2tncm91bmQ6ICNmYWZhZmE7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgICBwYWRkaW5nOiAwLjc1cmVtO1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxLjFyZW07XHJcbiAgICAgICAgICBmb250LWZhbWlseTogTWVubG8sIE1vbmFjbywgTHVjaWRhIENvbnNvbGUsIExpYmVyYXRpb24gTW9ubyxcclxuICAgICAgICAgICAgRGVqYVZ1IFNhbnMgTW9ubywgQml0c3RyZWFtIFZlcmEgU2FucyBNb25vLCBDb3VyaWVyIE5ldywgbW9ub3NwYWNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmdyaWQge1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgIGZsZXgtd3JhcDogd3JhcDtcclxuXHJcbiAgICAgICAgICBtYXgtd2lkdGg6IDgwMHB4O1xyXG4gICAgICAgICAgbWFyZ2luLXRvcDogM3JlbTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5jYXJkIHtcclxuICAgICAgICAgIG1hcmdpbjogMXJlbTtcclxuICAgICAgICAgIGZsZXgtYmFzaXM6IDQ1JTtcclxuICAgICAgICAgIHBhZGRpbmc6IDEuNXJlbTtcclxuICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgICBjb2xvcjogaW5oZXJpdDtcclxuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNlYWVhZWE7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgICAgdHJhbnNpdGlvbjogY29sb3IgMC4xNXMgZWFzZSwgYm9yZGVyLWNvbG9yIDAuMTVzIGVhc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuY2FyZDpob3ZlcixcclxuICAgICAgICAuY2FyZDpmb2N1cyxcclxuICAgICAgICAuY2FyZDphY3RpdmUge1xyXG4gICAgICAgICAgY29sb3I6ICMwMDcwZjM7XHJcbiAgICAgICAgICBib3JkZXItY29sb3I6ICMwMDcwZjM7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuY2FyZCBoMyB7XHJcbiAgICAgICAgICBtYXJnaW46IDAgMCAxcmVtIDA7XHJcbiAgICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5jYXJkIHAge1xyXG4gICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxLjI1cmVtO1xyXG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDEuNTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5sb2dvIHtcclxuICAgICAgICAgIGhlaWdodDogMWVtO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XHJcbiAgICAgICAgICAuZ3JpZCB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgYH08L3N0eWxlPlxyXG5cclxuICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcclxuICAgICAgICBodG1sLFxyXG4gICAgICAgIGJvZHkge1xyXG4gICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFNlZ29lIFVJLCBSb2JvdG8sXHJcbiAgICAgICAgICAgIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsIEZpcmEgU2FucywgRHJvaWQgU2FucywgSGVsdmV0aWNhIE5ldWUsXHJcbiAgICAgICAgICAgIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAqIHtcclxuICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgICAgfVxyXG4gICAgICBgfTwvc3R5bGU+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==