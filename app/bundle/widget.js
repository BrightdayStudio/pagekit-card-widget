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

	window.Widgets.components['brightday-panelbox:settings'] = module.exports;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

	module.exports = "<div class=\"uk-grid pk-grid-large\" data-uk-grid-margin=\"\">    <div class=\"uk-flex-item-1 uk-form-horizontal uk-row-first\">        <div class=\"uk-form-row\"><label for=\"form-title\" class=\"uk-form-label\">{{ 'Title' | trans }}</label><div class=\"uk-form-controls\"><input id=\"form-title\" class=\"uk-form-width-large\" type=\"text\" name=\"title\" v-model=\"widget.title\"       v-validate:required><p class=\"uk-form-help-block uk-text-danger\"   v-show=\"form.title.invalid\">{{ 'Title cannot be blank.' | trans }}</p></div></div><div v-for=\"panel in widget.data\">        <div class=\"uk-form-row\">            <label class=\"uk-form-label\">{{ 'Header' | trans }}</label>            <div class=\"uk-form-controls\"><input type=\"text\" class=\"uk-form-width-large\" v-model=\"panel.header\"></div>            </div>                <div class=\"uk-form-row\">            <label class=\"uk-form-label\">{{ 'Text' | trans}}</label>            <div class=\"uk-form-controls uk-form-width-large\"><textarea rows=7 type=text v-model= \"panel.text\" class= \"uk-width-1-1 uk-form-width-large\"></textarea></div>        </div>            <div class=\"uk-form-row\">        <label class=\"uk-form-label\">{{ 'Image' | trans }}</label>        <div class=\"uk-form-controls uk-form-width-large\"><input-image-meta :image.sync=\"panel.image\" class=\"pk-image-max-height\"></input-image-meta></div>    </div>         <div class=\"uk-form-row\">        <label class=\"uk-form-label\">{{ 'Link' | trans }}</label>        <div class=\"uk-form-controls uk-form-width-large\">        <input type=\"text\" class=\"uk-form-width-large\" v-model=\"panel.link\" placeholder=\"Link text\">        <input-link class=\"uk-form-width-large\" v-model=\"panel.url\" :link.sync=\"panel.url\"> </input-link></div>    </div>     </div>    </div><div class=\"pk-width-sidebar\"><partial name=\"settings\"></partial></div></div>";

/***/ })
/******/ ]);