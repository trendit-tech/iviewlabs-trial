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

/***/ "./redux/actions/actions.js":
/*!**********************************!*\
  !*** ./redux/actions/actions.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ADD_FILTER\": () => (/* binding */ ADD_FILTER),\n/* harmony export */   \"EMPTY_ARRAY\": () => (/* binding */ EMPTY_ARRAY),\n/* harmony export */   \"addFilter\": () => (/* binding */ addFilter),\n/* harmony export */   \"emptyArray\": () => (/* binding */ emptyArray)\n/* harmony export */ });\nconst ADD_FILTER = \"ADD_FILTER\";\nconst EMPTY_ARRAY = \"EMPTY_ARRAY\";\nconst addFilter = (filterValue)=>({\n        type: ADD_FILTER,\n        payload: filterValue\n    });\nconst emptyArray = ()=>({\n        type: EMPTY_ARRAY\n    });\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZWR1eC9hY3Rpb25zL2FjdGlvbnMuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFPLE1BQU1BLGFBQWEsYUFBYTtBQUNoQyxNQUFNQyxjQUFjLGNBQWM7QUFFbEMsTUFBTUMsWUFBWSxDQUFDQyxjQUFpQjtRQUN6Q0MsTUFBTUo7UUFDTkssU0FBU0Y7SUFDWCxHQUFHO0FBRUksTUFBTUcsYUFBYSxJQUFPO1FBQy9CRixNQUFNSDtJQUNSLEdBQUciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pdmlld2xhYnMtdHJpYWwvLi9yZWR1eC9hY3Rpb25zL2FjdGlvbnMuanM/NzM5OSJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgQUREX0ZJTFRFUiA9ICdBRERfRklMVEVSJztcclxuZXhwb3J0IGNvbnN0IEVNUFRZX0FSUkFZID0gJ0VNUFRZX0FSUkFZJztcclxuXHJcbmV4cG9ydCBjb25zdCBhZGRGaWx0ZXIgPSAoZmlsdGVyVmFsdWUpID0+ICh7XHJcbiAgdHlwZTogQUREX0ZJTFRFUixcclxuICBwYXlsb2FkOiBmaWx0ZXJWYWx1ZVxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCBlbXB0eUFycmF5ID0gKCkgPT4gKHtcclxuICB0eXBlOiBFTVBUWV9BUlJBWSxcclxufSk7Il0sIm5hbWVzIjpbIkFERF9GSUxURVIiLCJFTVBUWV9BUlJBWSIsImFkZEZpbHRlciIsImZpbHRlclZhbHVlIiwidHlwZSIsInBheWxvYWQiLCJlbXB0eUFycmF5Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./redux/actions/actions.js\n");

/***/ }),

/***/ "./redux/contentfulReducer.js":
/*!************************************!*\
  !*** ./redux/contentfulReducer.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst initialState = {\n    entries: []\n};\nconst contentfulReducer = (state = initialState, action)=>{\n    switch(action.type){\n        case \"FETCH_CONTENTFUL_DATA_SUCCESS\":\n            return {\n                ...state,\n                entries: action.payload\n            };\n        default:\n            return state;\n    }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (contentfulReducer);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZWR1eC9jb250ZW50ZnVsUmVkdWNlci5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUEsTUFBTUEsZUFBZTtJQUNqQkMsU0FBUyxFQUFFO0FBQ2I7QUFFQSxNQUFNQyxvQkFBb0IsQ0FBQ0MsUUFBUUgsWUFBWSxFQUFFSSxTQUFXO0lBQzFELE9BQVFBLE9BQU9DLElBQUk7UUFDakIsS0FBSztZQUNILE9BQU87Z0JBQUUsR0FBR0YsS0FBSztnQkFBRUYsU0FBU0csT0FBT0UsT0FBTztZQUFDO1FBQzdDO1lBQ0UsT0FBT0g7SUFDWDtBQUNGO0FBRUEsaUVBQWVELGlCQUFpQkEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2l2aWV3bGFicy10cmlhbC8uL3JlZHV4L2NvbnRlbnRmdWxSZWR1Y2VyLmpzPzYzMjUiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG4gICAgZW50cmllczogW11cclxuICB9O1xyXG4gIFxyXG4gIGNvbnN0IGNvbnRlbnRmdWxSZWR1Y2VyID0gKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pID0+IHtcclxuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgICAgY2FzZSAnRkVUQ0hfQ09OVEVOVEZVTF9EQVRBX1NVQ0NFU1MnOlxyXG4gICAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBlbnRyaWVzOiBhY3Rpb24ucGF5bG9hZCB9O1xyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgICAgIHJldHVybiBzdGF0ZTtcclxuICAgIH1cclxuICB9O1xyXG4gIFxyXG4gIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnRmdWxSZWR1Y2VyOyJdLCJuYW1lcyI6WyJpbml0aWFsU3RhdGUiLCJlbnRyaWVzIiwiY29udGVudGZ1bFJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsInR5cGUiLCJwYXlsb2FkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./redux/contentfulReducer.js\n");

/***/ }),

/***/ "./redux/index.js":
/*!************************!*\
  !*** ./redux/index.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-thunk */ \"redux-thunk\");\n/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_thunk__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _contentfulReducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contentfulReducer */ \"./redux/contentfulReducer.js\");\n/* harmony import */ var _reducers_reducers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reducers/reducers */ \"./redux/reducers/reducers.js\");\n\n\n\n\nconst rootReducer = (0,redux__WEBPACK_IMPORTED_MODULE_0__.combineReducers)({\n    contentful: _contentfulReducer__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n    filters: _reducers_reducers__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n});\nconst store = (0,redux__WEBPACK_IMPORTED_MODULE_0__.createStore)(rootReducer, (0,redux__WEBPACK_IMPORTED_MODULE_0__.applyMiddleware)((redux_thunk__WEBPACK_IMPORTED_MODULE_1___default())));\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (store);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZWR1eC9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQXNFO0FBQ3RDO0FBQ29CO0FBQ0o7QUFFaEQsTUFBTU0sY0FBY0osc0RBQWVBLENBQUM7SUFDbENLLFlBQVlILDBEQUFpQkE7SUFDN0JJLFNBQVNILDBEQUFhQTtBQUN4QjtBQUVBLE1BQU1JLFFBQVFULGtEQUFXQSxDQUFDTSxhQUFhTCxzREFBZUEsQ0FBQ0Usb0RBQUtBO0FBRTVELGlFQUFlTSxLQUFLQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaXZpZXdsYWJzLXRyaWFsLy4vcmVkdXgvaW5kZXguanM/NDdiNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVTdG9yZSwgYXBwbHlNaWRkbGV3YXJlLCBjb21iaW5lUmVkdWNlcnMgfSBmcm9tICdyZWR1eCc7XHJcbmltcG9ydCB0aHVuayBmcm9tICdyZWR1eC10aHVuayc7XHJcbmltcG9ydCBjb250ZW50ZnVsUmVkdWNlciBmcm9tICcuL2NvbnRlbnRmdWxSZWR1Y2VyJztcclxuaW1wb3J0IGZpbHRlclJlZHVjZXIgZnJvbSAnLi9yZWR1Y2Vycy9yZWR1Y2Vycyc7XHJcblxyXG5jb25zdCByb290UmVkdWNlciA9IGNvbWJpbmVSZWR1Y2Vycyh7XHJcbiAgY29udGVudGZ1bDogY29udGVudGZ1bFJlZHVjZXIsXHJcbiAgZmlsdGVyczogZmlsdGVyUmVkdWNlclxyXG59KTtcclxuXHJcbmNvbnN0IHN0b3JlID0gY3JlYXRlU3RvcmUocm9vdFJlZHVjZXIsIGFwcGx5TWlkZGxld2FyZSh0aHVuaykpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgc3RvcmU7Il0sIm5hbWVzIjpbImNyZWF0ZVN0b3JlIiwiYXBwbHlNaWRkbGV3YXJlIiwiY29tYmluZVJlZHVjZXJzIiwidGh1bmsiLCJjb250ZW50ZnVsUmVkdWNlciIsImZpbHRlclJlZHVjZXIiLCJyb290UmVkdWNlciIsImNvbnRlbnRmdWwiLCJmaWx0ZXJzIiwic3RvcmUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./redux/index.js\n");

/***/ }),

/***/ "./redux/reducers/reducers.js":
/*!************************************!*\
  !*** ./redux/reducers/reducers.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _actions_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/actions */ \"./redux/actions/actions.js\");\n\nconst initialState = {\n    selectedFilters: []\n};\nconst filterReducer = (state = initialState, action)=>{\n    switch(action.type){\n        case _actions_actions__WEBPACK_IMPORTED_MODULE_0__.ADD_FILTER:\n            return {\n                ...state,\n                selectedFilters: [\n                    ...state.selectedFilters,\n                    action.payload\n                ]\n            };\n        case _actions_actions__WEBPACK_IMPORTED_MODULE_0__.EMPTY_ARRAY:\n            return {\n                ...state,\n                selectedFilters: []\n            };\n        default:\n            return state;\n    }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (filterReducer);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZWR1eC9yZWR1Y2Vycy9yZWR1Y2Vycy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUE2RDtBQUU3RCxNQUFNRSxlQUFlO0lBQ25CQyxpQkFBaUIsRUFBRTtBQUNyQjtBQUVBLE1BQU1DLGdCQUFnQixDQUFDQyxRQUFRSCxZQUFZLEVBQUVJLFNBQVc7SUFDdEQsT0FBUUEsT0FBT0MsSUFBSTtRQUNqQixLQUFLUCx3REFBVUE7WUFDYixPQUFPO2dCQUNMLEdBQUdLLEtBQUs7Z0JBQ1JGLGlCQUFpQjt1QkFBSUUsTUFBTUYsZUFBZTtvQkFBRUcsT0FBT0UsT0FBTztpQkFBQztZQUM3RDtRQUNBLEtBQUtQLHlEQUFXQTtZQUNoQixPQUFPO2dCQUNMLEdBQUdJLEtBQUs7Z0JBQ1JGLGlCQUFpQixFQUFFO1lBQ3JCO1FBQ0Y7WUFDRSxPQUFPRTtJQUNYO0FBQ0Y7QUFFQSxpRUFBZUQsYUFBYUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2l2aWV3bGFicy10cmlhbC8uL3JlZHV4L3JlZHVjZXJzL3JlZHVjZXJzLmpzPzY4ODkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQUREX0ZJTFRFUiAsIEVNUFRZX0FSUkFZfSBmcm9tICcuLi9hY3Rpb25zL2FjdGlvbnMnO1xyXG5cclxuY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG4gIHNlbGVjdGVkRmlsdGVyczogW11cclxufTtcclxuXHJcbmNvbnN0IGZpbHRlclJlZHVjZXIgPSAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgIGNhc2UgQUREX0ZJTFRFUjpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBzZWxlY3RlZEZpbHRlcnM6IFsuLi5zdGF0ZS5zZWxlY3RlZEZpbHRlcnMsIGFjdGlvbi5wYXlsb2FkXVxyXG4gICAgICB9O1xyXG4gICAgICBjYXNlIEVNUFRZX0FSUkFZOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIHNlbGVjdGVkRmlsdGVyczogW11cclxuICAgICAgfTtcclxuICAgIGRlZmF1bHQ6XHJcbiAgICAgIHJldHVybiBzdGF0ZTtcclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmaWx0ZXJSZWR1Y2VyO1xyXG4iXSwibmFtZXMiOlsiQUREX0ZJTFRFUiIsIkVNUFRZX0FSUkFZIiwiaW5pdGlhbFN0YXRlIiwic2VsZWN0ZWRGaWx0ZXJzIiwiZmlsdGVyUmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwidHlwZSIsInBheWxvYWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./redux/reducers/reducers.js\n");

/***/ }),

/***/ "./src/pages/_app.js":
/*!***************************!*\
  !*** ./src/pages/_app.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../redux */ \"./redux/index.js\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nfunction MyApp({ Component , pageProps  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_redux__WEBPACK_IMPORTED_MODULE_1__.Provider, {\n            store: _redux__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\LENOVO\\\\Desktop\\\\iviewlabs-trial\\\\src\\\\pages\\\\_app.js\",\n                lineNumber: 9,\n                columnNumber: 7\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\LENOVO\\\\Desktop\\\\iviewlabs-trial\\\\src\\\\pages\\\\_app.js\",\n            lineNumber: 8,\n            columnNumber: 5\n        }, this)\n    }, void 0, false);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2FwcC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBdUM7QUFDUDtBQUNFO0FBRWxDLFNBQVNFLE1BQU0sRUFBRUMsVUFBUyxFQUFFQyxVQUFTLEVBQUUsRUFBRTtJQUN2QyxxQkFDQTtrQkFDRSw0RUFBQ0osaURBQVFBO1lBQUNDLE9BQU9BLDhDQUFLQTtzQkFDcEIsNEVBQUNFO2dCQUFXLEdBQUdDLFNBQVM7Ozs7Ozs7Ozs7OztBQUk5QjtBQUVBLGlFQUFlRixLQUFLQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaXZpZXdsYWJzLXRyaWFsLy4vc3JjL3BhZ2VzL19hcHAuanM/OGZkYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQcm92aWRlciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgc3RvcmUgZnJvbSBcIi4uLy4uL3JlZHV4XCI7XHJcbmltcG9ydCBcIi4uLy4uL3N0eWxlcy9nbG9iYWxzLmNzc1wiO1xyXG5cclxuZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSB7XHJcbiAgcmV0dXJuKFxyXG4gIDw+XHJcbiAgICA8UHJvdmlkZXIgc3RvcmU9e3N0b3JlfT5cclxuICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxyXG4gICAgPC9Qcm92aWRlcj5cclxuICA8Lz5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE15QXBwOyJdLCJuYW1lcyI6WyJQcm92aWRlciIsInN0b3JlIiwiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/_app.js\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



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

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("redux");

/***/ }),

/***/ "redux-thunk":
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("redux-thunk");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/_app.js"));
module.exports = __webpack_exports__;

})();