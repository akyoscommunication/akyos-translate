/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./assets/css/main.scss":
/*!******************************!*\
  !*** ./assets/css/main.scss ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hc3NldHMvY3NzL21haW4uc2NzcyIsIm1hcHBpbmdzIjoiO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ha3lvcy10cmFuc2xhdGUvLi9hc3NldHMvY3NzL21haW4uc2Nzcz81YWYyIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./assets/css/main.scss\n");

/***/ }),

/***/ "./assets/js/app.js":
/*!**************************!*\
  !*** ./assets/js/app.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utils_sidebar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/sidebar */ \"./assets/js/utils/sidebar.js\");\n/* harmony import */ var _utils_selection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/selection */ \"./assets/js/utils/selection.js\");\n\n\nwindow.onload = function () {\n  new _utils_sidebar__WEBPACK_IMPORTED_MODULE_0__.Sidebar();\n  new _utils_selection__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hc3NldHMvanMvYXBwLmpzIiwibWFwcGluZ3MiOiI7OztBQUF3QztBQUNFO0FBRTFDRSxNQUFNLENBQUNDLE1BQU0sR0FBRyxZQUFZO0VBQzNCLElBQUlILG1EQUFPLENBQUMsQ0FBQztFQUNiLElBQUlDLHdEQUFTLENBQUMsQ0FBQztBQUNoQixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYWt5b3MtdHJhbnNsYXRlLy4vYXNzZXRzL2pzL2FwcC5qcz8yNWZjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7U2lkZWJhcn0gZnJvbSBcIi4vdXRpbHMvc2lkZWJhclwiO1xuaW1wb3J0IFNlbGVjdGlvbiBmcm9tIFwiLi91dGlscy9zZWxlY3Rpb25cIjtcblxud2luZG93Lm9ubG9hZCA9IGZ1bmN0aW9uICgpIHtcblx0bmV3IFNpZGViYXIoKTtcblx0bmV3IFNlbGVjdGlvbigpO1xufVxuIl0sIm5hbWVzIjpbIlNpZGViYXIiLCJTZWxlY3Rpb24iLCJ3aW5kb3ciLCJvbmxvYWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./assets/js/app.js\n");

/***/ }),

/***/ "./assets/js/utils/selection.js":
/*!**************************************!*\
  !*** ./assets/js/utils/selection.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Selection)\n/* harmony export */ });\nfunction _typeof(o) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o; }, _typeof(o); }\nfunction _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError(\"Cannot call a class as a function\"); }\nfunction _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, \"value\" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }\nfunction _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, \"prototype\", { writable: !1 }), e; }\nfunction _toPropertyKey(t) { var i = _toPrimitive(t, \"string\"); return \"symbol\" == _typeof(i) ? i : i + \"\"; }\nfunction _toPrimitive(t, r) { if (\"object\" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || \"default\"); if (\"object\" != _typeof(i)) return i; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (\"string\" === r ? String : Number)(t); }\nvar Selection = /*#__PURE__*/function () {\n  function Selection() {\n    _classCallCheck(this, Selection);\n    this._table = document.querySelector('table');\n    this._checkboxes = this._table.querySelectorAll('input[type=\"checkbox\"]');\n    this._formTranslate = document.querySelector('.translate-selected-btn');\n    this._selectAll = document.getElementById('select-all-btn');\n    if (this._checkboxes.length > 0) {\n      this._btnTranslate = this._formTranslate.querySelector('.btn');\n      this.init();\n    }\n  }\n  return _createClass(Selection, [{\n    key: \"init\",\n    value: function init() {\n      var _this = this;\n      this.selectAll();\n\n      //on change any checkbox get all checkboxes checked\n      this._checkboxes.forEach(function (checkbox) {\n        checkbox.addEventListener('change', function () {\n          var cbs = [];\n          _this._checkboxes.forEach(function (cb) {\n            if (cb.checked) {\n              cbs.push(cb);\n            }\n          });\n          _this.updateBtnTranslate(cbs);\n          _this.updateInputHidden(cbs);\n        });\n      });\n    }\n  }, {\n    key: \"updateBtnTranslate\",\n    value: function updateBtnTranslate(cbs) {\n      if (cbs.length > 0) {\n        this._btnTranslate.removeAttribute('disabled');\n      } else {\n        this._btnTranslate.setAttribute('disabled', 'disabled');\n      }\n    }\n  }, {\n    key: \"updateInputHidden\",\n    value: function updateInputHidden(cbs) {\n      var _this2 = this;\n      var inputHidden = this._formTranslate.querySelector('[name=\"original\"]');\n      var clonedHidden = this._formTranslate.querySelectorAll('[name=\"original[]\"]');\n      clonedHidden.forEach(function (cloned) {\n        cloned.remove();\n      });\n      cbs.forEach(function (cb) {\n        var clone = null;\n        var value = null;\n        var tr = cb.parentNode.parentNode;\n        value = tr.getAttribute('data-word');\n        clone = inputHidden.cloneNode(true);\n        clone.setAttribute('name', 'original[]');\n        clone.value = value;\n        _this2._formTranslate.appendChild(clone);\n      });\n    }\n  }, {\n    key: \"selectAll\",\n    value: function selectAll() {\n      var _this3 = this;\n      this._selectAll.addEventListener('click', function () {\n        //check all checkboxes and trigger change event\n        _this3._checkboxes.forEach(function (checkbox) {\n          checkbox.checked = true;\n          checkbox.dispatchEvent(new Event('change'));\n        });\n      });\n    }\n  }]);\n}();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDLFdBQVcsQ0FBQztRQUVwQ0gsS0FBSyxHQUFHSixXQUFXLENBQUNRLFNBQVMsQ0FBQyxJQUFJLENBQUM7UUFFbkNKLEtBQUssQ0FBQ04sWUFBWSxDQUFDLE1BQU0sRUFBRSxZQUFZLENBQUM7UUFDeENNLEtBQUssQ0FBQ25CLEtBQUssR0FBR0EsS0FBSztRQUNuQmMsTUFBSSxDQUFDdEIsY0FBYyxDQUFDZ0MsV0FBVyxDQUFDTCxLQUFLLENBQUM7TUFDdkMsQ0FBQyxDQUFDO0lBQ0g7RUFBQztJQUFBcEIsR0FBQTtJQUFBQyxLQUFBLEVBRUQsU0FBQUUsU0FBU0EsQ0FBQSxFQUFHO01BQUEsSUFBQXVCLE1BQUE7TUFDWCxJQUFJLENBQUNoQyxVQUFVLENBQUNZLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxZQUFNO1FBQy9DO1FBQ0FvQixNQUFJLENBQUNuQyxXQUFXLENBQUNhLE9BQU8sQ0FBQyxVQUFDQyxRQUFRLEVBQUs7VUFDdENBLFFBQVEsQ0FBQ0ksT0FBTyxHQUFHLElBQUk7VUFDdkJKLFFBQVEsQ0FBQ3NCLGFBQWEsQ0FBQyxJQUFJQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDNUMsQ0FBQyxDQUFDO01BQ0gsQ0FBQyxDQUFDO0lBQ0g7RUFBQztBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYWt5b3MtdHJhbnNsYXRlLy4vYXNzZXRzL2pzL3V0aWxzL3NlbGVjdGlvbi5qcz9iYjUwIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGNsYXNzIFNlbGVjdGlvbiB7XG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHRoaXMuX3RhYmxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcigndGFibGUnKTtcblx0XHR0aGlzLl9jaGVja2JveGVzID0gdGhpcy5fdGFibGUucXVlcnlTZWxlY3RvckFsbCgnaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdJyk7XG5cdFx0dGhpcy5fZm9ybVRyYW5zbGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50cmFuc2xhdGUtc2VsZWN0ZWQtYnRuJyk7XG5cdFx0dGhpcy5fc2VsZWN0QWxsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlbGVjdC1hbGwtYnRuJyk7XG5cblx0XHRpZiAodGhpcy5fY2hlY2tib3hlcy5sZW5ndGggPiAwKSB7XG5cdFx0XHR0aGlzLl9idG5UcmFuc2xhdGUgPSB0aGlzLl9mb3JtVHJhbnNsYXRlLnF1ZXJ5U2VsZWN0b3IoJy5idG4nKTtcblxuXHRcdFx0dGhpcy5pbml0KCk7XG5cdFx0fVxuXHR9XG5cblx0aW5pdCgpIHtcblx0XHR0aGlzLnNlbGVjdEFsbCgpO1xuXG5cdFx0Ly9vbiBjaGFuZ2UgYW55IGNoZWNrYm94IGdldCBhbGwgY2hlY2tib3hlcyBjaGVja2VkXG5cdFx0dGhpcy5fY2hlY2tib3hlcy5mb3JFYWNoKChjaGVja2JveCkgPT4ge1xuXHRcdFx0Y2hlY2tib3guYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuXHRcdFx0XHRsZXQgY2JzID0gW107XG5cblx0XHRcdFx0dGhpcy5fY2hlY2tib3hlcy5mb3JFYWNoKChjYikgPT4ge1xuXHRcdFx0XHRcdGlmIChjYi5jaGVja2VkKSB7XG5cdFx0XHRcdFx0XHRjYnMucHVzaChjYik7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KTtcblxuXHRcdFx0XHR0aGlzLnVwZGF0ZUJ0blRyYW5zbGF0ZShjYnMpO1xuXHRcdFx0XHR0aGlzLnVwZGF0ZUlucHV0SGlkZGVuKGNicylcblx0XHRcdH0pO1xuXHRcdH0pO1xuXHR9XG5cblx0dXBkYXRlQnRuVHJhbnNsYXRlKGNicykge1xuXHRcdGlmIChjYnMubGVuZ3RoID4gMCkge1xuXHRcdFx0dGhpcy5fYnRuVHJhbnNsYXRlLnJlbW92ZUF0dHJpYnV0ZSgnZGlzYWJsZWQnKVxuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLl9idG5UcmFuc2xhdGUuc2V0QXR0cmlidXRlKCdkaXNhYmxlZCcsICdkaXNhYmxlZCcpXG5cdFx0fVxuXHR9XG5cblx0dXBkYXRlSW5wdXRIaWRkZW4oY2JzKSB7XG5cdFx0bGV0IGlucHV0SGlkZGVuID0gdGhpcy5fZm9ybVRyYW5zbGF0ZS5xdWVyeVNlbGVjdG9yKCdbbmFtZT1cIm9yaWdpbmFsXCJdJylcblxuXHRcdGxldCBjbG9uZWRIaWRkZW4gPSB0aGlzLl9mb3JtVHJhbnNsYXRlLnF1ZXJ5U2VsZWN0b3JBbGwoJ1tuYW1lPVwib3JpZ2luYWxbXVwiXScpXG5cblx0XHRjbG9uZWRIaWRkZW4uZm9yRWFjaCgoY2xvbmVkKSA9PiB7XG5cdFx0XHRjbG9uZWQucmVtb3ZlKCk7XG5cdFx0fSlcblxuXHRcdGNicy5mb3JFYWNoKChjYikgPT4ge1xuXHRcdFx0bGV0IGNsb25lID0gbnVsbDtcblx0XHRcdGxldCB2YWx1ZSA9IG51bGw7XG5cdFx0XHRsZXQgdHIgPSBjYi5wYXJlbnROb2RlLnBhcmVudE5vZGU7XG5cblx0XHRcdHZhbHVlID0gdHIuZ2V0QXR0cmlidXRlKCdkYXRhLXdvcmQnKTtcblxuXHRcdFx0Y2xvbmUgPSBpbnB1dEhpZGRlbi5jbG9uZU5vZGUodHJ1ZSk7XG5cblx0XHRcdGNsb25lLnNldEF0dHJpYnV0ZSgnbmFtZScsICdvcmlnaW5hbFtdJylcblx0XHRcdGNsb25lLnZhbHVlID0gdmFsdWU7XG5cdFx0XHR0aGlzLl9mb3JtVHJhbnNsYXRlLmFwcGVuZENoaWxkKGNsb25lKVxuXHRcdH0pXG5cdH1cblxuXHRzZWxlY3RBbGwoKSB7XG5cdFx0dGhpcy5fc2VsZWN0QWxsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuXHRcdFx0Ly9jaGVjayBhbGwgY2hlY2tib3hlcyBhbmQgdHJpZ2dlciBjaGFuZ2UgZXZlbnRcblx0XHRcdHRoaXMuX2NoZWNrYm94ZXMuZm9yRWFjaCgoY2hlY2tib3gpID0+IHtcblx0XHRcdFx0Y2hlY2tib3guY2hlY2tlZCA9IHRydWU7XG5cdFx0XHRcdGNoZWNrYm94LmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KCdjaGFuZ2UnKSk7XG5cdFx0XHR9KVxuXHRcdH0pXG5cdH1cbn1cbiJdLCJuYW1lcyI6WyJTZWxlY3Rpb24iLCJfY2xhc3NDYWxsQ2hlY2siLCJfdGFibGUiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJfY2hlY2tib3hlcyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJfZm9ybVRyYW5zbGF0ZSIsIl9zZWxlY3RBbGwiLCJnZXRFbGVtZW50QnlJZCIsImxlbmd0aCIsIl9idG5UcmFuc2xhdGUiLCJpbml0IiwiX2NyZWF0ZUNsYXNzIiwia2V5IiwidmFsdWUiLCJfdGhpcyIsInNlbGVjdEFsbCIsImZvckVhY2giLCJjaGVja2JveCIsImFkZEV2ZW50TGlzdGVuZXIiLCJjYnMiLCJjYiIsImNoZWNrZWQiLCJwdXNoIiwidXBkYXRlQnRuVHJhbnNsYXRlIiwidXBkYXRlSW5wdXRIaWRkZW4iLCJyZW1vdmVBdHRyaWJ1dGUiLCJzZXRBdHRyaWJ1dGUiLCJfdGhpczIiLCJpbnB1dEhpZGRlbiIsImNsb25lZEhpZGRlbiIsImNsb25lZCIsInJlbW92ZSIsImNsb25lIiwidHIiLCJwYXJlbnROb2RlIiwiZ2V0QXR0cmlidXRlIiwiY2xvbmVOb2RlIiwiYXBwZW5kQ2hpbGQiLCJfdGhpczMiLCJkaXNwYXRjaEV2ZW50IiwiRXZlbnQiLCJkZWZhdWx0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./assets/js/utils/selection.js\n");

/***/ }),

/***/ "./assets/js/utils/sidebar.js":
/*!************************************!*\
  !*** ./assets/js/utils/sidebar.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Sidebar: () => (/* binding */ Sidebar)\n/* harmony export */ });\nfunction _typeof(o) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o; }, _typeof(o); }\nfunction _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError(\"Cannot call a class as a function\"); }\nfunction _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, \"value\" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }\nfunction _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, \"prototype\", { writable: !1 }), e; }\nfunction _toPropertyKey(t) { var i = _toPrimitive(t, \"string\"); return \"symbol\" == _typeof(i) ? i : i + \"\"; }\nfunction _toPrimitive(t, r) { if (\"object\" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || \"default\"); if (\"object\" != _typeof(i)) return i; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (\"string\" === r ? String : Number)(t); }\nvar Sidebar = /*#__PURE__*/function () {\n  function Sidebar() {\n    _classCallCheck(this, Sidebar);\n    this._sidebar = document.querySelector('.aky_sidebar');\n    if (!this._sidebar) return;\n    this.init();\n  }\n  return _createClass(Sidebar, [{\n    key: \"init\",\n    value: function init() {\n      var li = this._sidebar.querySelectorAll('li');\n      li.forEach(function (e) {\n        var link = e.querySelector('a');\n        if (link.getAttribute('href') === window.location.href) {\n          link.classList.add('active');\n        }\n      });\n    }\n  }]);\n}();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hc3NldHMvanMvdXRpbHMvc2lkZWJhci5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQU8sSUFBTUEsT0FBTztFQUNuQixTQUFBQSxRQUFBLEVBQWM7SUFBQUMsZUFBQSxPQUFBRCxPQUFBO0lBQ2IsSUFBSSxDQUFDRSxRQUFRLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLGNBQWMsQ0FBQztJQUV0RCxJQUFJLENBQUMsSUFBSSxDQUFDRixRQUFRLEVBQUU7SUFFcEIsSUFBSSxDQUFDRyxJQUFJLENBQUMsQ0FBQztFQUNaO0VBQUMsT0FBQUMsWUFBQSxDQUFBTixPQUFBO0lBQUFPLEdBQUE7SUFBQUMsS0FBQSxFQUVELFNBQUFILElBQUlBLENBQUEsRUFBRztNQUNOLElBQUlJLEVBQUUsR0FBRyxJQUFJLENBQUNQLFFBQVEsQ0FBQ1EsZ0JBQWdCLENBQUMsSUFBSSxDQUFDO01BRTdDRCxFQUFFLENBQUNFLE9BQU8sQ0FBQyxVQUFVQyxDQUFDLEVBQUU7UUFDdkIsSUFBSUMsSUFBSSxHQUFHRCxDQUFDLENBQUNSLGFBQWEsQ0FBQyxHQUFHLENBQUM7UUFDL0IsSUFBSVMsSUFBSSxDQUFDQyxZQUFZLENBQUMsTUFBTSxDQUFDLEtBQUtDLE1BQU0sQ0FBQ0MsUUFBUSxDQUFDQyxJQUFJLEVBQUU7VUFDdkRKLElBQUksQ0FBQ0ssU0FBUyxDQUFDQyxHQUFHLENBQUMsUUFBUSxDQUFDO1FBQzdCO01BQ0QsQ0FBQyxDQUFDO0lBQ0g7RUFBQztBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYWt5b3MtdHJhbnNsYXRlLy4vYXNzZXRzL2pzL3V0aWxzL3NpZGViYXIuanM/OGJlNiJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgU2lkZWJhciB7XG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHRoaXMuX3NpZGViYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWt5X3NpZGViYXInKVxuXG5cdFx0aWYgKCF0aGlzLl9zaWRlYmFyKSByZXR1cm5cblxuXHRcdHRoaXMuaW5pdCgpXG5cdH1cblxuXHRpbml0KCkge1xuXHRcdGxldCBsaSA9IHRoaXMuX3NpZGViYXIucXVlcnlTZWxlY3RvckFsbCgnbGknKVxuXG5cdFx0bGkuZm9yRWFjaChmdW5jdGlvbiAoZSkge1xuXHRcdFx0bGV0IGxpbmsgPSBlLnF1ZXJ5U2VsZWN0b3IoJ2EnKVxuXHRcdFx0aWYgKGxpbmsuZ2V0QXR0cmlidXRlKCdocmVmJykgPT09IHdpbmRvdy5sb2NhdGlvbi5ocmVmKSB7XG5cdFx0XHRcdGxpbmsuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJylcblx0XHRcdH1cblx0XHR9KVxuXHR9XG59XG4iXSwibmFtZXMiOlsiU2lkZWJhciIsIl9jbGFzc0NhbGxDaGVjayIsIl9zaWRlYmFyIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiaW5pdCIsIl9jcmVhdGVDbGFzcyIsImtleSIsInZhbHVlIiwibGkiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZm9yRWFjaCIsImUiLCJsaW5rIiwiZ2V0QXR0cmlidXRlIiwid2luZG93IiwibG9jYXRpb24iLCJocmVmIiwiY2xhc3NMaXN0IiwiYWRkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./assets/js/utils/sidebar.js\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"/dist/js/app": 0,
/******/ 			"dist/css/main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkakyos_translate"] = self["webpackChunkakyos_translate"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["dist/css/main"], () => (__webpack_require__("./assets/js/app.js")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["dist/css/main"], () => (__webpack_require__("./assets/css/main.scss")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;