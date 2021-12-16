"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/context",{

/***/ "./pages/context.tsx":
/*!***************************!*\
  !*** ./pages/context.tsx ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"themes\": function() { return /* binding */ themes; },\n/* harmony export */   \"ThemeContext\": function() { return /* binding */ ThemeContext; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_MyConsumer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/MyConsumer */ \"./components/MyConsumer/index.tsx\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nfunction _assertThisInitialized(self) {\n    if (self === void 0) {\n        throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\");\n    }\n    return self;\n}\nfunction _classCallCheck(instance, Constructor) {\n    if (!(instance instanceof Constructor)) {\n        throw new TypeError(\"Cannot call a class as a function\");\n    }\n}\nfunction _defineProperties(target, props) {\n    for(var i = 0; i < props.length; i++){\n        var descriptor = props[i];\n        descriptor.enumerable = descriptor.enumerable || false;\n        descriptor.configurable = true;\n        if (\"value\" in descriptor) descriptor.writable = true;\n        Object.defineProperty(target, descriptor.key, descriptor);\n    }\n}\nfunction _createClass(Constructor, protoProps, staticProps) {\n    if (protoProps) _defineProperties(Constructor.prototype, protoProps);\n    if (staticProps) _defineProperties(Constructor, staticProps);\n    return Constructor;\n}\nfunction _getPrototypeOf(o) {\n    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {\n        return o.__proto__ || Object.getPrototypeOf(o);\n    };\n    return _getPrototypeOf(o);\n}\nfunction _inherits(subClass, superClass) {\n    if (typeof superClass !== \"function\" && superClass !== null) {\n        throw new TypeError(\"Super expression must either be null or a function\");\n    }\n    subClass.prototype = Object.create(superClass && superClass.prototype, {\n        constructor: {\n            value: subClass,\n            writable: true,\n            configurable: true\n        }\n    });\n    if (superClass) _setPrototypeOf(subClass, superClass);\n}\nfunction _possibleConstructorReturn(self, call) {\n    if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) {\n        return call;\n    }\n    return _assertThisInitialized(self);\n}\nfunction _setPrototypeOf(o, p) {\n    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {\n        o.__proto__ = p;\n        return o;\n    };\n    return _setPrototypeOf(o, p);\n}\nvar _typeof = function(obj) {\n    return obj && typeof Symbol !== \"undefined\" && obj.constructor === Symbol ? \"symbol\" : typeof obj;\n};\nfunction _isNativeReflectConstruct() {\n    if (typeof Reflect === \"undefined\" || !Reflect.construct) return false;\n    if (Reflect.construct.sham) return false;\n    if (typeof Proxy === \"function\") return true;\n    try {\n        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {\n        }));\n        return true;\n    } catch (e) {\n        return false;\n    }\n}\nfunction _createSuper(Derived) {\n    var hasNativeReflectConstruct = _isNativeReflectConstruct();\n    return function _createSuperInternal() {\n        var Super = _getPrototypeOf(Derived), result;\n        if (hasNativeReflectConstruct) {\n            var NewTarget = _getPrototypeOf(this).constructor;\n            result = Reflect.construct(Super, arguments, NewTarget);\n        } else {\n            result = Super.apply(this, arguments);\n        }\n        return _possibleConstructorReturn(this, result);\n    };\n}\nvar themes = {\n    light: {\n        color: 'red'\n    },\n    dark: {\n        color: 'blue'\n    }\n};\nvar ThemeContext = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().createContext({\n    theme: themes.light,\n    toggleTheme: undefined\n});\nvar Playground = /*#__PURE__*/ function(_Component) {\n    \"use strict\";\n    _inherits(Playground, _Component);\n    var _super = _createSuper(Playground);\n    function Playground() {\n        _classCallCheck(this, Playground);\n        var _this;\n        _this = _super.apply(this, arguments);\n        _this.state = {\n            theme: themes.light\n        };\n        _this.toggleTheme = function() {\n            _this.setState(function(state) {\n                return {\n                    theme: state.theme === themes.dark ? themes.light : themes.dark\n                };\n            });\n        };\n        return _this;\n    }\n    _createClass(Playground, [\n        {\n            key: \"render\",\n            value: function render() {\n                return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                    __source: {\n                        fileName: \"/Users/hichho/Documents/work/react-playground/pages/context.tsx\",\n                        lineNumber: 52,\n                        columnNumber: 13\n                    },\n                    __self: this,\n                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ThemeContext.Provider, {\n                        value: {\n                            theme: this.state.theme,\n                            toggleTheme: this.toggleTheme\n                        },\n                        __source: {\n                            fileName: \"/Users/hichho/Documents/work/react-playground/pages/context.tsx\",\n                            lineNumber: 53,\n                            columnNumber: 17\n                        },\n                        __self: this,\n                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_MyConsumer__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                            __source: {\n                                fileName: \"/Users/hichho/Documents/work/react-playground/pages/context.tsx\",\n                                lineNumber: 54,\n                                columnNumber: 21\n                            },\n                            __self: this\n                        })\n                    })\n                }));\n            }\n        }\n    ]);\n    return Playground;\n}((react__WEBPACK_IMPORTED_MODULE_1___default().Component));\n/* harmony default export */ __webpack_exports__[\"default\"] = (Playground);\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jb250ZXh0LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFFeUI7QUFDd0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBVzFDLEdBQUssQ0FBQ0UsTUFBTSxHQUFXLENBQUM7SUFDM0JDLEtBQUssRUFBRSxDQUFDO1FBQ0pDLEtBQUssRUFBRSxDQUFLO0lBQ2hCLENBQUM7SUFDREMsSUFBSSxFQUFFLENBQUM7UUFDSEQsS0FBSyxFQUFFLENBQU07SUFDakIsQ0FBQztBQUNMLENBQUM7QUFXTSxHQUFLLENBQUNFLFlBQVksaUJBQUdOLDBEQUFtQixDQUFDLENBQUM7SUFDN0NRLEtBQUssRUFBRU4sTUFBTSxDQUFDQyxLQUFLO0lBQ25CTSxXQUFXLEVBQUVDLFNBQVM7QUFDMUIsQ0FBQztJQUVLQyxVQUFVLGlCQUFoQixRQUFROztjQUFGQSxVQUFVOzhCQUFWQSxVQUFVO2FBQVZBLFVBQVU7OEJBQVZBLFVBQVU7OztjQUNaQyxLQUFLLEdBQVcsQ0FBQztZQUNiSixLQUFLLEVBQUVOLE1BQU0sQ0FBQ0MsS0FBSztRQUN2QixDQUFDO2NBQ0RNLFdBQVcsR0FBRyxRQUNsQixHQUR3QixDQUFDO2tCQUNaSSxRQUFRLENBQUMsUUFBUSxDQUFQRCxLQUFLO2dCQUFLLE1BQzdCLENBQVEsQ0FBQztvQkFDR0osS0FBSyxFQUFFSSxLQUFLLENBQUNKLEtBQUssS0FBS04sTUFBTSxDQUFDRyxJQUFJLEdBQUdILE1BQU0sQ0FBQ0MsS0FBSyxHQUFHRCxNQUFNLENBQUNHLElBQUk7Z0JBQ25FLENBQUM7O1FBRVQsQ0FBQzs7O2lCQVZDTSxVQUFVOztZQVlaRyxHQUFNLEVBQU5BLENBQU07bUJBQU5BLFFBQVEsQ0FBUkEsTUFBTSxHQUFHLENBQUM7Z0JBQ04sTUFBTSxzRUFDREMsQ0FBRzs7Ozs7OzttR0FDQ1QsWUFBWSxDQUFDVSxRQUFRO3dCQUFDQyxLQUFLLEVBQUUsQ0FBQ1Q7NEJBQUFBLEtBQUssRUFBRSxJQUFJLENBQUNJLEtBQUssQ0FBQ0osS0FBSzs0QkFBRUMsV0FBVyxFQUFFLElBQUksQ0FBQ0EsV0FBVzt3QkFBQSxDQUFDOzs7Ozs7O3VHQUNqRlIsOERBQVU7Ozs7Ozs7Ozs7WUFJM0IsQ0FBQzs7O1dBcEJDVSxVQUFVO0VBQVNYLHdEQUFlO0FBdUJ4QywrREFBZVcsVUFBVSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2NvbnRleHQudHN4P2JiYzQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtOZXh0UGFnZX0gZnJvbSBcIm5leHRcIjtcbmltcG9ydCB7UmVhY3RFbGVtZW50fSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTXlDb25zdW1lciBmcm9tIFwiLi4vY29tcG9uZW50cy9NeUNvbnN1bWVyXCI7XG5cbmludGVyZmFjZSBJVGhlbWUge1xuICAgIGxpZ2h0OiB7XG4gICAgICAgIGNvbG9yOiBzdHJpbmc7XG4gICAgfSxcbiAgICBkYXJrOiB7XG4gICAgICAgIGNvbG9yOiBzdHJpbmc7XG4gICAgfVxufVxuXG5leHBvcnQgY29uc3QgdGhlbWVzOiBJVGhlbWUgPSB7XG4gICAgbGlnaHQ6IHtcbiAgICAgICAgY29sb3I6ICdyZWQnXG4gICAgfSxcbiAgICBkYXJrOiB7XG4gICAgICAgIGNvbG9yOiAnYmx1ZSdcbiAgICB9XG59O1xuXG5leHBvcnQgaW50ZXJmYWNlIElDb250ZXh0IHtcbiAgICB0aGVtZTogYW55O1xuICAgIHRvZ2dsZVRoZW1lOiAoKSA9PiB2b2lkO1xufVxuXG5pbnRlcmZhY2UgSVN0YXRlIHtcbiAgICB0aGVtZTogeyBjb2xvcjogc3RyaW5nIH07XG59XG5cbmV4cG9ydCBjb25zdCBUaGVtZUNvbnRleHQgPSBSZWFjdC5jcmVhdGVDb250ZXh0KHtcbiAgICB0aGVtZTogdGhlbWVzLmxpZ2h0LFxuICAgIHRvZ2dsZVRoZW1lOiB1bmRlZmluZWQsXG59KVxuXG5jbGFzcyBQbGF5Z3JvdW5kIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PGFueSwgSVN0YXRlPiB7XG4gICAgc3RhdGU6IElTdGF0ZSA9IHtcbiAgICAgICAgdGhlbWU6IHRoZW1lcy5saWdodCxcbiAgICB9O1xuICAgIHRvZ2dsZVRoZW1lID0gKCkgPT4ge1xuICAgICAgICB0aGlzLnNldFN0YXRlKChzdGF0ZSkgPT4gKFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRoZW1lOiBzdGF0ZS50aGVtZSA9PT0gdGhlbWVzLmRhcmsgPyB0aGVtZXMubGlnaHQgOiB0aGVtZXMuZGFya1xuICAgICAgICAgICAgfVxuICAgICAgICApKVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPFRoZW1lQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17e3RoZW1lOiB0aGlzLnN0YXRlLnRoZW1lLCB0b2dnbGVUaGVtZTogdGhpcy50b2dnbGVUaGVtZX19PlxuICAgICAgICAgICAgICAgICAgICA8TXlDb25zdW1lci8+XG4gICAgICAgICAgICAgICAgPC9UaGVtZUNvbnRleHQuUHJvdmlkZXI+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFBsYXlncm91bmQ7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJNeUNvbnN1bWVyIiwidGhlbWVzIiwibGlnaHQiLCJjb2xvciIsImRhcmsiLCJUaGVtZUNvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwidGhlbWUiLCJ0b2dnbGVUaGVtZSIsInVuZGVmaW5lZCIsIlBsYXlncm91bmQiLCJzdGF0ZSIsInNldFN0YXRlIiwicmVuZGVyIiwiZGl2IiwiUHJvdmlkZXIiLCJ2YWx1ZSIsIkNvbXBvbmVudCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/context.tsx\n");

/***/ })

});