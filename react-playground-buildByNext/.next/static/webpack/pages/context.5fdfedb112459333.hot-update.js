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

/***/ "./components/MyConsumer/index.tsx":
/*!*****************************************!*\
  !*** ./components/MyConsumer/index.tsx ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ MyConsumer; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _pages_context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../pages/context */ \"./pages/context.tsx\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nfunction _assertThisInitialized(self) {\n    if (self === void 0) {\n        throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\");\n    }\n    return self;\n}\nfunction _classCallCheck(instance, Constructor) {\n    if (!(instance instanceof Constructor)) {\n        throw new TypeError(\"Cannot call a class as a function\");\n    }\n}\nfunction _defineProperties(target, props) {\n    for(var i = 0; i < props.length; i++){\n        var descriptor = props[i];\n        descriptor.enumerable = descriptor.enumerable || false;\n        descriptor.configurable = true;\n        if (\"value\" in descriptor) descriptor.writable = true;\n        Object.defineProperty(target, descriptor.key, descriptor);\n    }\n}\nfunction _createClass(Constructor, protoProps, staticProps) {\n    if (protoProps) _defineProperties(Constructor.prototype, protoProps);\n    if (staticProps) _defineProperties(Constructor, staticProps);\n    return Constructor;\n}\nfunction _getPrototypeOf(o) {\n    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {\n        return o.__proto__ || Object.getPrototypeOf(o);\n    };\n    return _getPrototypeOf(o);\n}\nfunction _inherits(subClass, superClass) {\n    if (typeof superClass !== \"function\" && superClass !== null) {\n        throw new TypeError(\"Super expression must either be null or a function\");\n    }\n    subClass.prototype = Object.create(superClass && superClass.prototype, {\n        constructor: {\n            value: subClass,\n            writable: true,\n            configurable: true\n        }\n    });\n    if (superClass) _setPrototypeOf(subClass, superClass);\n}\nfunction _possibleConstructorReturn(self, call) {\n    if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) {\n        return call;\n    }\n    return _assertThisInitialized(self);\n}\nfunction _setPrototypeOf(o, p) {\n    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {\n        o.__proto__ = p;\n        return o;\n    };\n    return _setPrototypeOf(o, p);\n}\nvar _typeof = function(obj) {\n    return obj && typeof Symbol !== \"undefined\" && obj.constructor === Symbol ? \"symbol\" : typeof obj;\n};\nfunction _isNativeReflectConstruct() {\n    if (typeof Reflect === \"undefined\" || !Reflect.construct) return false;\n    if (Reflect.construct.sham) return false;\n    if (typeof Proxy === \"function\") return true;\n    try {\n        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {\n        }));\n        return true;\n    } catch (e) {\n        return false;\n    }\n}\nfunction _createSuper(Derived) {\n    var hasNativeReflectConstruct = _isNativeReflectConstruct();\n    return function _createSuperInternal() {\n        var Super = _getPrototypeOf(Derived), result;\n        if (hasNativeReflectConstruct) {\n            var NewTarget = _getPrototypeOf(this).constructor;\n            result = Reflect.construct(Super, arguments, NewTarget);\n        } else {\n            result = Super.apply(this, arguments);\n        }\n        return _possibleConstructorReturn(this, result);\n    };\n}\nvar MyConsumer = /*#__PURE__*/ function(_Component) {\n    \"use strict\";\n    _inherits(MyConsumer, _Component);\n    var _super = _createSuper(MyConsumer);\n    function MyConsumer(props) {\n        _classCallCheck(this, MyConsumer);\n        var _this;\n        _this = _super.call(this, props);\n        _this.state = {\n        };\n        _this.handleClick = _this.handleClick.bind(_assertThisInitialized(_this));\n        return _this;\n    }\n    _createClass(MyConsumer, [\n        {\n            key: \"handleClick\",\n            value: function handleClick(value, e) {\n                value.toggleTheme();\n            }\n        },\n        {\n            key: \"render\",\n            value: function render() {\n                var _this = this;\n                return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_pages_context__WEBPACK_IMPORTED_MODULE_2__.ThemeContext.Consumer, {\n                    __source: {\n                        fileName: \"/Users/hichho/Documents/work/react-playground/components/MyConsumer/index.tsx\",\n                        lineNumber: 17,\n                        columnNumber: 13\n                    },\n                    __self: this,\n                    children: function(value) {\n                        return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"button\", {\n                            onClick: _this.handleClick.bind(_this, value),\n                            __source: {\n                                fileName: \"/Users/hichho/Documents/work/react-playground/components/MyConsumer/index.tsx\",\n                                lineNumber: 19,\n                                columnNumber: 28\n                            },\n                            __self: _this,\n                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                                style: {\n                                    color: value.theme.color\n                                },\n                                __source: {\n                                    fileName: \"/Users/hichho/Documents/work/react-playground/components/MyConsumer/index.tsx\",\n                                    lineNumber: 20,\n                                    columnNumber: 25\n                                },\n                                __self: _this,\n                                children: \"i am a button\"\n                            })\n                        }));\n                    }\n                }));\n            }\n        }\n    ]);\n    return MyConsumer;\n}((react__WEBPACK_IMPORTED_MODULE_1___default().Component));\n\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL015Q29uc3VtZXIvaW5kZXgudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQXlCO0FBQ2lDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVyQ0UsVUFBVSxpQkFBaEIsUUFBUTs7Y0FBRkEsVUFBVTs4QkFBVkEsVUFBVTthQUFWQSxVQUFVLENBQ2ZDLEtBQVU7OEJBRExELFVBQVU7O2tDQUVqQkMsS0FBSztjQUNOQyxLQUFLLEdBQUcsQ0FBQztRQUFBLENBQUM7Y0FDVkMsV0FBVyxTQUFRQSxXQUFXLENBQUNDLElBQUk7OztpQkFKM0JKLFVBQVU7O1lBTzNCRyxHQUFXLEVBQVhBLENBQVc7bUJBQVhBLFFBQVEsQ0FBUkEsV0FBVyxDQUFDRSxLQUFlLEVBQUVDLENBQUssRUFBRSxDQUFDO2dCQUNqQ0QsS0FBSyxDQUFDRSxXQUFXO1lBQ3JCLENBQUM7OztZQUVEQyxHQUFNLEVBQU5BLENBQU07bUJBQU5BLFFBQVEsQ0FBUkEsTUFBTSxHQUFHLENBQUM7O2dCQUNOLE1BQU0sc0VBQ0RULGlFQUFxQjs7Ozs7Ozs4QkFDakJNLFFBQVEsQ0FBUkEsS0FBSyxFQUFJLENBQUM7d0JBQ1AsTUFBTSxzRUFBRUssQ0FBTTs0QkFBQ0MsT0FBTyxRQUFPUixXQUFXLENBQUNDLElBQUksUUFBT0MsS0FBSzs7Ozs7OzsyR0FDcERPLENBQUc7Z0NBQUNDLEtBQUssRUFBRSxDQUFDQztvQ0FBQUEsS0FBSyxFQUFFVCxLQUFLLENBQUNVLEtBQUssQ0FBQ0QsS0FBSztnQ0FBQSxDQUFDOzs7Ozs7OzBDQUFFLENBRXhDOzs7b0JBRVIsQ0FBQzs7WUFHYixDQUFDOzs7V0F2QmdCZCxVQUFVO0VBQVNGLHdEQUFlO0FBQXhCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvTXlDb25zdW1lci9pbmRleC50c3g/ZjkyYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge0lDb250ZXh0LCBUaGVtZUNvbnRleHR9IGZyb20gXCIuLi8uLi9wYWdlcy9jb250ZXh0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE15Q29uc3VtZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8YW55LCBhbnk+IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wczogYW55KSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHt9O1xuICAgICAgICB0aGlzLmhhbmRsZUNsaWNrID0gdGhpcy5oYW5kbGVDbGljay5iaW5kKHRoaXMpO1xuICAgIH1cblxuICAgIGhhbmRsZUNsaWNrKHZhbHVlOiBJQ29udGV4dCwgZTphbnkpIHtcbiAgICAgICAgdmFsdWUudG9nZ2xlVGhlbWUoKTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8VGhlbWVDb250ZXh0LkNvbnN1bWVyPlxuICAgICAgICAgICAgICAgIHt2YWx1ZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiA8YnV0dG9uIG9uQ2xpY2s9e3RoaXMuaGFuZGxlQ2xpY2suYmluZCh0aGlzLCB2YWx1ZSl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e2NvbG9yOiB2YWx1ZS50aGVtZS5jb2xvcn19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGkgYW0gYSBidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgPC9UaGVtZUNvbnRleHQuQ29uc3VtZXI+XG4gICAgICAgIClcbiAgICB9XG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJUaGVtZUNvbnRleHQiLCJNeUNvbnN1bWVyIiwicHJvcHMiLCJzdGF0ZSIsImhhbmRsZUNsaWNrIiwiYmluZCIsInZhbHVlIiwiZSIsInRvZ2dsZVRoZW1lIiwicmVuZGVyIiwiQ29uc3VtZXIiLCJidXR0b24iLCJvbkNsaWNrIiwiZGl2Iiwic3R5bGUiLCJjb2xvciIsInRoZW1lIiwiQ29tcG9uZW50Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/MyConsumer/index.tsx\n");

/***/ })

});