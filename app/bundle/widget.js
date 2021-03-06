/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__vue_script__ = __webpack_require__(1)
	if (Object.keys(__vue_script__).some(function (key) { return key !== "default" && key !== "__esModule" })) {
	  console.warn("[vue-loader] app/components/widget.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(2)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	var __vue_options__ = typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports
	if (__vue_template__) {
	__vue_options__.template = __vue_template__
	}
	if (!__vue_options__.computed) __vue_options__.computed = {}
	Object.keys(__vue_styles__).forEach(function (key) {
	var module = __vue_styles__[key]
	__vue_options__.computed[key] = function () { return module }
	})
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-6d99fc63/widget.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ }),
/* 1 */
/***/ (function(module, exports) {

	'use strict';

	module.exports = {
	    section: {
	        label: 'Settings'
	    },
	    replace: false,
	    props: ['widget', 'config', 'form'],
	    data: function data() {
	        return {};
	    },
	    created: function created() {
	        this.$options.partials = this.$parent.$options.partials;
	    }
	};

	window.Widgets.components['brightday-card:settings'] = module.exports;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

	module.exports = "\n<div class=\"uk-grid pk-grid-large\" data-uk-grid-margin=\"\">\n    <div class=\"uk-flex-item-1 uk-form-horizontal uk-row-first\">\n        <div class=\"uk-form-row\">\n\t\t\t\t<label for=\"form-title\" class=\"uk-form-label\">{{ 'Title' | trans }}</label>\n\t\t\t\t<div class=\"uk-form-controls\">\n\t\t\t\t\t<input id=\"form-title\" class=\"uk-form-width-large\" type=\"text\" name=\"title\" v-model=\"widget.title\"\n\t\t\t\t\t       v-validate:required>\n\t\t\t\t\t<p class=\"uk-form-help-block uk-text-danger\"\n\t\t\t\t\t   v-show=\"form.title.invalid\">{{ 'Title cannot be blank.' | trans }}</p>\n\t\t\t\t</div>\n\t\t\t</div>\n\n\n\n        <div class=\"uk-form-row\">\n            <label class=\"uk-form-label\">{{ 'Header' | trans }}</label>\n            <div class=\"uk-form-controls\"><input type=\"text\" class=\"uk-form-width-large\" v-model=\"widget.data.card.header\"></div>\n            </div>\n        \n        <div class=\"uk-form-row\">\n            <label class=\"uk-form-label\">{{ 'Text' | trans}}</label>\n            <div class=\"uk-form-controls uk-form-width-large\"><textarea rows=7 type=text v-model= \"widget.data.card.text\" class= \"uk-width-1-1 uk-form-width-large\"></textarea></div>\n        </div>\n        \n    <div class=\"uk-form-row\">\n        <label class=\"uk-form-label\">{{ 'Image' | trans }}</label>\n        <div class=\"uk-form-controls uk-form-width-large\"><input-image-meta :image.sync=\"widget.data.card.image\" class=\"pk-image-max-height\"></input-image-meta></div>\n    </div>\n    \n     <div class=\"uk-form-row\">\n        <label class=\"uk-form-label\">{{ 'Link' | trans }}</label>\n        <div class=\"uk-form-controls uk-form-width-large\">\n        <input type=\"text\" class=\"uk-form-width-large\" v-model=\"widget.data.card.link\" placeholder=\"Link text\">\n        <input-link class=\"uk-form-width-large\" v-model=\"widget.data.card.url\" :link.sync=\"widget.data.card.url\"> </input-link></div>\n    </div>\n     </div>\n\n    \n\n\n\n\n<div class=\"pk-width-sidebar\">\n<partial name=\"settings\"></partial>\n</div>\n\n\n</div>\n\n\n\n";

/***/ })
/******/ ]);
