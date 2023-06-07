/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./Store/auth.js":
/*!***********************!*\
  !*** ./Store/auth.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"authActions\": () => (/* binding */ authActions),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"@reduxjs/toolkit\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);\n\nconst initialAuthState = {\n    isAuthenticated: \"\"\n};\nconst authSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({\n    name: \"authentication\",\n    initialState: initialAuthState,\n    reducers: {\n        loginAsDonor (state) {\n            state.isAuthenticated = \"Donor\";\n        },\n        loginAsHos (state) {\n            state.isAuthenticated = \"Hos\";\n        },\n        logout (state) {\n            state.isAuthenticated = \"No\";\n        }\n    }\n});\nconst authActions = authSlice.actions;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (authSlice.reducer);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9TdG9yZS9hdXRoLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBK0M7QUFFL0MsTUFBTUMsbUJBQW1CO0lBQ3ZCQyxpQkFBaUI7QUFDbkI7QUFFQSxNQUFNQyxZQUFZSCw2REFBV0EsQ0FBQztJQUM1QkksTUFBTTtJQUNOQyxjQUFjSjtJQUNkSyxVQUFVO1FBQ1JDLGNBQWFDLEtBQUssRUFBRTtZQUNsQkEsTUFBTU4sZUFBZSxHQUFHO1FBQzFCO1FBQ0FPLFlBQVdELEtBQUssRUFBRTtZQUNoQkEsTUFBTU4sZUFBZSxHQUFHO1FBQzFCO1FBQ0FRLFFBQU9GLEtBQUssRUFBRTtZQUNaQSxNQUFNTixlQUFlLEdBQUc7UUFDMUI7SUFDRjtBQUNGO0FBRU8sTUFBTVMsY0FBY1IsVUFBVVMsT0FBTyxDQUFDO0FBRTdDLGlFQUFlVCxVQUFVVSxPQUFPLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ncmFkdWF0aW9uX3Byb2plY3QvLi9TdG9yZS9hdXRoLmpzPzZiZWMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlU2xpY2UgfSBmcm9tICdAcmVkdXhqcy90b29sa2l0JztcclxuXHJcbmNvbnN0IGluaXRpYWxBdXRoU3RhdGUgPSB7XHJcbiAgaXNBdXRoZW50aWNhdGVkOiAnJyxcclxufTtcclxuXHJcbmNvbnN0IGF1dGhTbGljZSA9IGNyZWF0ZVNsaWNlKHtcclxuICBuYW1lOiAnYXV0aGVudGljYXRpb24nLFxyXG4gIGluaXRpYWxTdGF0ZTogaW5pdGlhbEF1dGhTdGF0ZSxcclxuICByZWR1Y2Vyczoge1xyXG4gICAgbG9naW5Bc0Rvbm9yKHN0YXRlKSB7XHJcbiAgICAgIHN0YXRlLmlzQXV0aGVudGljYXRlZCA9ICdEb25vcic7XHJcbiAgICB9LFxyXG4gICAgbG9naW5Bc0hvcyhzdGF0ZSkge1xyXG4gICAgICBzdGF0ZS5pc0F1dGhlbnRpY2F0ZWQgPSAnSG9zJztcclxuICAgIH0sXHJcbiAgICBsb2dvdXQoc3RhdGUpIHtcclxuICAgICAgc3RhdGUuaXNBdXRoZW50aWNhdGVkID0gJ05vJztcclxuICAgIH0sXHJcbiAgfSxcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgYXV0aEFjdGlvbnMgPSBhdXRoU2xpY2UuYWN0aW9ucztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGF1dGhTbGljZS5yZWR1Y2VyOyJdLCJuYW1lcyI6WyJjcmVhdGVTbGljZSIsImluaXRpYWxBdXRoU3RhdGUiLCJpc0F1dGhlbnRpY2F0ZWQiLCJhdXRoU2xpY2UiLCJuYW1lIiwiaW5pdGlhbFN0YXRlIiwicmVkdWNlcnMiLCJsb2dpbkFzRG9ub3IiLCJzdGF0ZSIsImxvZ2luQXNIb3MiLCJsb2dvdXQiLCJhdXRoQWN0aW9ucyIsImFjdGlvbnMiLCJyZWR1Y2VyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./Store/auth.js\n");

/***/ }),

/***/ "./Store/index.js":
/*!************************!*\
  !*** ./Store/index.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"@reduxjs/toolkit\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth */ \"./Store/auth.js\");\n\n\nconst store = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.configureStore)({\n    reducer: {\n        auth: _auth__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n    }\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (store);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9TdG9yZS9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQWtEO0FBRWpCO0FBR2pDLE1BQU1FLFFBQVFGLGdFQUFjQSxDQUFDO0lBQzNCRyxTQUFTO1FBQUVDLE1BQU1ILDZDQUFXQTtJQUFDO0FBQy9CO0FBRUEsaUVBQWVDLEtBQUtBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ncmFkdWF0aW9uX3Byb2plY3QvLi9TdG9yZS9pbmRleC5qcz9mMDdmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNvbmZpZ3VyZVN0b3JlIH0gZnJvbSAnQHJlZHV4anMvdG9vbGtpdCc7XHJcblxyXG5pbXBvcnQgYXV0aFJlZHVjZXIgZnJvbSAnLi9hdXRoJztcclxuXHJcblxyXG5jb25zdCBzdG9yZSA9IGNvbmZpZ3VyZVN0b3JlKHtcclxuICByZWR1Y2VyOiB7IGF1dGg6IGF1dGhSZWR1Y2VyIH0sXHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgc3RvcmU7Il0sIm5hbWVzIjpbImNvbmZpZ3VyZVN0b3JlIiwiYXV0aFJlZHVjZXIiLCJzdG9yZSIsInJlZHVjZXIiLCJhdXRoIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./Store/index.js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Store_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Store/index */ \"./Store/index.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\nfunction MyApp({ Component , pageProps  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_4___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"script\", {\n                        src: \"/assets/js/jquery.min.js\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\مواد الفصل\\\\مشروع تخرج\\\\graduation_project\\\\pages\\\\_app.js\",\n                        lineNumber: 10,\n                        columnNumber: 3\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"script\", {\n                        src: \"/assets/js/jquery.scrolly.min.js\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\مواد الفصل\\\\مشروع تخرج\\\\graduation_project\\\\pages\\\\_app.js\",\n                        lineNumber: 11,\n                        columnNumber: 3\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"script\", {\n                        src: \"/assets/js/jquery.scrollex.min.js\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\مواد الفصل\\\\مشروع تخرج\\\\graduation_project\\\\pages\\\\_app.js\",\n                        lineNumber: 12,\n                        columnNumber: 3\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"script\", {\n                        src: \"/assets/js/browser.min.js\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\مواد الفصل\\\\مشروع تخرج\\\\graduation_project\\\\pages\\\\_app.js\",\n                        lineNumber: 13,\n                        columnNumber: 3\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"script\", {\n                        src: \"/assets/js/breakpoints.min.js\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\مواد الفصل\\\\مشروع تخرج\\\\graduation_project\\\\pages\\\\_app.js\",\n                        lineNumber: 14,\n                        columnNumber: 3\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"script\", {\n                        src: \"/assets/js/util.js\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\مواد الفصل\\\\مشروع تخرج\\\\graduation_project\\\\pages\\\\_app.js\",\n                        lineNumber: 15,\n                        columnNumber: 3\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"script\", {\n                        src: \"/assets/js/main.js\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\مواد الفصل\\\\مشروع تخرج\\\\graduation_project\\\\pages\\\\_app.js\",\n                        lineNumber: 16,\n                        columnNumber: 3\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\مواد الفصل\\\\مشروع تخرج\\\\graduation_project\\\\pages\\\\_app.js\",\n                lineNumber: 9,\n                columnNumber: 3\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_redux__WEBPACK_IMPORTED_MODULE_2__.Provider, {\n                store: _Store_index__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                    ...pageProps\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\مواد الفصل\\\\مشروع تخرج\\\\graduation_project\\\\pages\\\\_app.js\",\n                    lineNumber: 18,\n                    columnNumber: 28\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\مواد الفصل\\\\مشروع تخرج\\\\graduation_project\\\\pages\\\\_app.js\",\n                lineNumber: 18,\n                columnNumber: 4\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\مواد الفصل\\\\مشروع تخرج\\\\graduation_project\\\\pages\\\\_app.js\",\n        lineNumber: 8,\n        columnNumber: 10\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQThCO0FBQ1M7QUFDSjtBQUNOO0FBRTdCLFNBQVNHLE1BQU0sRUFBRUMsVUFBUyxFQUFFQyxVQUFTLEVBQUUsRUFBRTtJQUV2QyxxQkFBTyw4REFBQ0M7OzBCQUNSLDhEQUFDSixrREFBSUE7O2tDQUNMLDhEQUFDSzt3QkFBT0MsS0FBSTs7Ozs7O2tDQUNaLDhEQUFDRDt3QkFBT0MsS0FBSTs7Ozs7O2tDQUNaLDhEQUFDRDt3QkFBT0MsS0FBSTs7Ozs7O2tDQUNaLDhEQUFDRDt3QkFBT0MsS0FBSTs7Ozs7O2tDQUNaLDhEQUFDRDt3QkFBT0MsS0FBSTs7Ozs7O2tDQUNaLDhEQUFDRDt3QkFBT0MsS0FBSTs7Ozs7O2tDQUNaLDhEQUFDRDt3QkFBT0MsS0FBSTs7Ozs7Ozs7Ozs7OzBCQUVYLDhEQUFDUixpREFBUUE7Z0JBQUNDLE9BQU9BLG9EQUFLQTswQkFBRSw0RUFBQ0c7b0JBQVcsR0FBR0MsU0FBUzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHbkQ7QUFFQSxpRUFBZUYsS0FBS0EsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL2dyYWR1YXRpb25fcHJvamVjdC8uL3BhZ2VzL19hcHAuanM/ZTBhZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJy4uL3N0eWxlcy9nbG9iYWxzLmNzcydcbmltcG9ydCB7IFByb3ZpZGVyIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHN0b3JlIGZyb20gJy4uL1N0b3JlL2luZGV4JztcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5cbmZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkge1xuIFxuICByZXR1cm4oPGRpdj5cbiAgPEhlYWQ+XG4gIDxzY3JpcHQgc3JjPVwiL2Fzc2V0cy9qcy9qcXVlcnkubWluLmpzXCI+PC9zY3JpcHQ+XG4gIDxzY3JpcHQgc3JjPVwiL2Fzc2V0cy9qcy9qcXVlcnkuc2Nyb2xseS5taW4uanNcIj48L3NjcmlwdD5cbiAgPHNjcmlwdCBzcmM9XCIvYXNzZXRzL2pzL2pxdWVyeS5zY3JvbGxleC5taW4uanNcIj48L3NjcmlwdD5cbiAgPHNjcmlwdCBzcmM9XCIvYXNzZXRzL2pzL2Jyb3dzZXIubWluLmpzXCI+PC9zY3JpcHQ+XG4gIDxzY3JpcHQgc3JjPVwiL2Fzc2V0cy9qcy9icmVha3BvaW50cy5taW4uanNcIj48L3NjcmlwdD5cbiAgPHNjcmlwdCBzcmM9XCIvYXNzZXRzL2pzL3V0aWwuanNcIj48L3NjcmlwdD5cbiAgPHNjcmlwdCBzcmM9XCIvYXNzZXRzL2pzL21haW4uanNcIj48L3NjcmlwdD5cbjwvSGVhZD4gXG4gICA8UHJvdmlkZXIgc3RvcmU9e3N0b3JlfT48Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+PC9Qcm92aWRlcj5cbiAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IE15QXBwXG4iXSwibmFtZXMiOlsiUHJvdmlkZXIiLCJzdG9yZSIsIkhlYWQiLCJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsImRpdiIsInNjcmlwdCIsInNyYyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "@reduxjs/toolkit":
/*!***********************************!*\
  !*** external "@reduxjs/toolkit" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = require("@reduxjs/toolkit");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-redux");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();