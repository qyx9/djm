(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/searchinput/searchinput"],{

/***/ "../../../../testhx/klpt/main.js?{\"page\":\"pages%2Fsearchinput%2Fsearchinput\"}":
/*!***************************************************************************!*\
  !*** D:/testhx/klpt/main.js?{"page":"pages%2Fsearchinput%2Fsearchinput"} ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
__webpack_require__(/*! uni-pages */ "../../../../testhx/klpt/pages.json");
var _searchinput = _interopRequireDefault(__webpack_require__(/*! ./pages/searchinput/searchinput.vue */ "../../../../testhx/klpt/pages/searchinput/searchinput.vue"));
var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ "./node_modules/@dcloudio/vue-cli-plugin-uni/packages/megalo/dist/megalo.mp.esm.js"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
_searchinput.default.mpType = 'page';
var app = new _vue.default(_searchinput.default);
app.$mount();

/***/ }),

/***/ "../../../../testhx/klpt/pages/searchinput/searchinput.vue":
/*!********************************************************!*\
  !*** D:/testhx/klpt/pages/searchinput/searchinput.vue ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _searchinput_vue_vue_type_template_id_25f5b4ef___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./searchinput.vue?vue&type=template&id=25f5b4ef& */ "../../../../testhx/klpt/pages/searchinput/searchinput.vue?vue&type=template&id=25f5b4ef&");
/* harmony import */ var _searchinput_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./searchinput.vue?vue&type=script&lang=js& */ "../../../../testhx/klpt/pages/searchinput/searchinput.vue?vue&type=script&lang=js&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _searchinput_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _searchinput_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _searchinput_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./searchinput.vue?vue&type=style&index=0&lang=less& */ "../../../../testhx/klpt/pages/searchinput/searchinput.vue?vue&type=style&index=0&lang=less&");
/* harmony import */ var _HBuilderX_1_4_1_20181228_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../HBuilderX.1.4.1.20181228.full/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_HBuilderX_1_4_1_20181228_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _searchinput_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _searchinput_vue_vue_type_template_id_25f5b4ef___WEBPACK_IMPORTED_MODULE_0__["render"],
  _searchinput_vue_vue_type_template_id_25f5b4ef___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "testhx/klpt/pages/searchinput/searchinput.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "../../../../testhx/klpt/pages/searchinput/searchinput.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** D:/testhx/klpt/pages/searchinput/searchinput.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_1_4_1_20181228_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_1_4_1_20181228_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_1_4_1_20181228_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_HBuilderX_1_4_1_20181228_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_1_4_1_20181228_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_searchinput_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../HBuilderX.1.4.1.20181228.full/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../HBuilderX.1.4.1.20181228.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!../../../../HBuilderX.1.4.1.20181228.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--18-0!../../../../HBuilderX.1.4.1.20181228.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../../HBuilderX.1.4.1.20181228.full/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib??vue-loader-options!./searchinput.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib/index.js?!../../../../testhx/klpt/pages/searchinput/searchinput.vue?vue&type=script&lang=js&");
/* harmony import */ var _HBuilderX_1_4_1_20181228_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_1_4_1_20181228_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_1_4_1_20181228_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_HBuilderX_1_4_1_20181228_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_1_4_1_20181228_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_searchinput_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_1_4_1_20181228_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_1_4_1_20181228_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_1_4_1_20181228_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_HBuilderX_1_4_1_20181228_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_1_4_1_20181228_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_searchinput_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_1_4_1_20181228_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_1_4_1_20181228_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_1_4_1_20181228_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_HBuilderX_1_4_1_20181228_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_1_4_1_20181228_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_searchinput_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_1_4_1_20181228_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_1_4_1_20181228_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_1_4_1_20181228_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_HBuilderX_1_4_1_20181228_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_1_4_1_20181228_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_searchinput_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HBuilderX_1_4_1_20181228_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_1_4_1_20181228_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_1_4_1_20181228_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_HBuilderX_1_4_1_20181228_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_1_4_1_20181228_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_searchinput_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "../../../../testhx/klpt/pages/searchinput/searchinput.vue?vue&type=style&index=0&lang=less&":
/*!******************************************************************************************!*\
  !*** D:/testhx/klpt/pages/searchinput/searchinput.vue?vue&type=style&index=0&lang=less& ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_1_4_1_20181228_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_HBuilderX_1_4_1_20181228_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_1_HBuilderX_1_4_1_20181228_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_10_oneOf_1_2_HBuilderX_1_4_1_20181228_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_1_4_1_20181228_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_3_HBuilderX_1_4_1_20181228_full_HBuilderX_plugins_uniapp_cli_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_4_HBuilderX_1_4_1_20181228_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_searchinput_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../HBuilderX.1.4.1.20181228.full/HBuilderX/plugins/uniapp-cli/node_modules/mini-css-extract-plugin/dist/loader.js??ref--10-oneOf-1-0!../../../../HBuilderX.1.4.1.20181228.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-1-1!../../../../HBuilderX.1.4.1.20181228.full/HBuilderX/plugins/uniapp-cli/node_modules/css-loader??ref--10-oneOf-1-2!../../../../HBuilderX.1.4.1.20181228.full/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../HBuilderX.1.4.1.20181228.full/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--10-oneOf-1-3!../../../../HBuilderX.1.4.1.20181228.full/HBuilderX/plugins/uniapp-cli/node_modules/less-loader/dist/cjs.js??ref--10-oneOf-1-4!../../../../HBuilderX.1.4.1.20181228.full/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib??vue-loader-options!./searchinput.vue?vue&type=style&index=0&lang=less& */ "./node_modules/mini-css-extract-plugin/dist/loader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/less-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!../../../../testhx/klpt/pages/searchinput/searchinput.vue?vue&type=style&index=0&lang=less&");
/* harmony import */ var _HBuilderX_1_4_1_20181228_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_HBuilderX_1_4_1_20181228_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_1_HBuilderX_1_4_1_20181228_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_10_oneOf_1_2_HBuilderX_1_4_1_20181228_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_1_4_1_20181228_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_3_HBuilderX_1_4_1_20181228_full_HBuilderX_plugins_uniapp_cli_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_4_HBuilderX_1_4_1_20181228_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_searchinput_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_1_4_1_20181228_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_HBuilderX_1_4_1_20181228_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_1_HBuilderX_1_4_1_20181228_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_10_oneOf_1_2_HBuilderX_1_4_1_20181228_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_1_4_1_20181228_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_3_HBuilderX_1_4_1_20181228_full_HBuilderX_plugins_uniapp_cli_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_4_HBuilderX_1_4_1_20181228_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_searchinput_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_1_4_1_20181228_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_HBuilderX_1_4_1_20181228_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_1_HBuilderX_1_4_1_20181228_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_10_oneOf_1_2_HBuilderX_1_4_1_20181228_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_1_4_1_20181228_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_3_HBuilderX_1_4_1_20181228_full_HBuilderX_plugins_uniapp_cli_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_4_HBuilderX_1_4_1_20181228_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_searchinput_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_1_4_1_20181228_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_HBuilderX_1_4_1_20181228_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_1_HBuilderX_1_4_1_20181228_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_10_oneOf_1_2_HBuilderX_1_4_1_20181228_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_1_4_1_20181228_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_3_HBuilderX_1_4_1_20181228_full_HBuilderX_plugins_uniapp_cli_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_4_HBuilderX_1_4_1_20181228_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_searchinput_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HBuilderX_1_4_1_20181228_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_HBuilderX_1_4_1_20181228_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_1_HBuilderX_1_4_1_20181228_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_10_oneOf_1_2_HBuilderX_1_4_1_20181228_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_1_4_1_20181228_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_3_HBuilderX_1_4_1_20181228_full_HBuilderX_plugins_uniapp_cli_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_4_HBuilderX_1_4_1_20181228_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_searchinput_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "../../../../testhx/klpt/pages/searchinput/searchinput.vue?vue&type=template&id=25f5b4ef&":
/*!***************************************************************************************!*\
  !*** D:/testhx/klpt/pages/searchinput/searchinput.vue?vue&type=template&id=25f5b4ef& ***!
  \***************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_1_4_1_20181228_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_1_4_1_20181228_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_HBuilderX_1_4_1_20181228_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_1_4_1_20181228_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_searchinput_vue_vue_type_template_id_25f5b4ef___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../HBuilderX.1.4.1.20181228.full/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../HBuilderX.1.4.1.20181228.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!../../../../HBuilderX.1.4.1.20181228.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../../HBuilderX.1.4.1.20181228.full/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib??vue-loader-options!./searchinput.vue?vue&type=template&id=25f5b4ef& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib/index.js?!../../../../testhx/klpt/pages/searchinput/searchinput.vue?vue&type=template&id=25f5b4ef&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _HBuilderX_1_4_1_20181228_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_1_4_1_20181228_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_HBuilderX_1_4_1_20181228_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_1_4_1_20181228_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_searchinput_vue_vue_type_template_id_25f5b4ef___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _HBuilderX_1_4_1_20181228_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_1_4_1_20181228_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_HBuilderX_1_4_1_20181228_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_1_4_1_20181228_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_searchinput_vue_vue_type_template_id_25f5b4ef___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib/index.js?!../../../../testhx/klpt/pages/searchinput/searchinput.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--18-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib??vue-loader-options!D:/testhx/klpt/pages/searchinput/searchinput.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;





































var _goodflex = _interopRequireDefault(__webpack_require__(/*! ../../components/goodflex/goodflex.vue */ "../../../../testhx/klpt/components/goodflex/goodflex.vue"));
var _uniLoadMore = _interopRequireDefault(__webpack_require__(/*! ../../components/uni-load-more/uni-load-more.vue */ "../../../../testhx/klpt/components/uni-load-more/uni-load-more.vue"));
var _api = __webpack_require__(/*! ../api/api.js */ "../../../../testhx/klpt/pages/api/api.js");function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var _default = { components: { GoodFlex: _goodflex.default, LoadMore: _uniLoadMore.default }, data: function data() {return { value: '', imgsrc: '../../static/yan.png', imgsrc2: '../../static/biyan.png', data: '', imgblean: false, OldKeys: [], historyOld: [], flexblean: true, pages: 1, goodstate: true, cleanstate: true, showloadMore: false, loadMoreText: "加载中...", hotdata: ['苹果', '梨子', '西瓜', '海苔'], hotstate: true, scorrllTop: false, defaultKeyword: '服装', Null: false, vlean: false };}, methods: { // 请求数据
    searchvalue: function searchvalue() {var _this = this; // 显示商品
      var that = this;this.goodstate = false; // 隐藏历史记录
      this.cleanstate = false;this.loadMoreText = '加载中...';var value = this.value ? this.value : this.defaultKeyword;uni.getStorage({ key: 'OldKeys',
        success: function success(res) {
          console.log(res.data);
          var OldKeys = JSON.parse(res.data);
          var findIndex = OldKeys.indexOf(value);
          if (findIndex == -1) {
            OldKeys.unshift(value);
          } else {
            OldKeys.splice(findIndex, 1);
            OldKeys.unshift(value);
          }
          //最多10个纪录
          OldKeys.length > 10 && OldKeys.pop();
          uni.setStorage({
            key: 'OldKeys',
            data: JSON.stringify(OldKeys) });

          _this.historyOld = OldKeys; //更新历史搜索
        },
        fail: function fail(e) {
          var OldKeys = [value];
          uni.setStorage({
            key: 'OldKeys',
            data: JSON.stringify(OldKeys) });

          _this.historyOld = OldKeys; //更新历史搜索
        } });

      // 去重
      // 加载中...
      uni.showLoading({
        title: "加载中..." });

      console.log("OldKeys:", this.OldKeys);
      var Oldkey = this.OldKeys;
      this.data = [];
      uni.request({
        url: (0, _api.requestip)() + '/thirdreturn/index/searchgoods?key_word=' + value + '&page=1',
        method: 'GET',
        data: {},
        success: function success(res) {
          console.log("搜索的数据：", res.data);
          _this.data = res.data.goods_search_response.goods_list;
          // 隐藏showloading
          if (res.data.goods_search_response.goods_list == '') {
            _this.Null = true;
          }
          uni.hideLoading();
        },
        fail: function fail() {},
        complete: function complete() {} });

    },
    imgurl: function imgurl() {
      this.hotstate = !this.hotstate;
    },
    cleanSearch: function cleanSearch() {
      var that = this;
      uni.showModal({
        title: "提示",
        content: "你确定清除所以历史记录吗",
        success: function success(res) {
          if (res.confirm) {
            uni.removeStorageSync('OldKeys');
            // 隐藏历史记录
            that.historyOld = [];
            that.cleanstate = false;
          }
        } });


    },
    // 点击块
    textH: function textH(i) {var _this2 = this;
      // 显示商品
      this.goodstate = false;
      // 隐藏历史记录
      this.cleanstate = false;
      this.value = i;
      this.vlean = true;
      var value = i;
      // top==0
      // 去重
      uni.getStorage({
        key: 'OldKeys',
        success: function success(res) {
          console.log(res.data);
          var OldKeys = JSON.parse(res.data);
          var findIndex = OldKeys.indexOf(value);
          if (findIndex == -1) {
            OldKeys.unshift(value);
          } else {
            OldKeys.splice(findIndex, 1);
            OldKeys.unshift(value);
          }
          //最多10个纪录
          OldKeys.length > 10 && OldKeys.pop();
          uni.setStorage({
            key: 'OldKeys',
            data: JSON.stringify(OldKeys) });

          _this2.historyOld = OldKeys; //更新历史搜索
        },
        fail: function fail(e) {
          var OldKeys = [value];
          uni.setStorage({
            key: 'OldKeys',
            data: JSON.stringify(OldKeys) });

          _this2.historyOld = OldKeys; //更新历史搜索
        } });

      // 去重
      uni.request({
        url: (0, _api.requestip)() + '/thirdreturn/index/searchgoods?key_word=' + this.value + '&page=1',
        method: 'GET',
        data: {},
        success: function success(res) {
          console.log("搜索的数据：", res.data);
          _this2.data = res.data.goods_search_response.goods_list;
          // 隐藏showloading
          uni.hideLoading();
          if (res.data.goods_search_response.goods_list == '') {
            _this2.Null = true;
          }
        },
        fail: function fail() {},
        complete: function complete() {} });

    },
    valueDt: function valueDt() {
      this.vlean = true;
    },
    clearDall: function clearDall() {
      this.value = '';
      this.vlean = false;
    } },

  onLoad: function onLoad(e) {
    var oldkey = uni.getStorageSync('OldKeys');
    //继承上一次的搜索记录
    this.OldKeys = uni.getStorageSync("OldKeys");
    if (oldkey == '') {
      this.cleanstate = false;
    } else {
      this.historyOld = JSON.parse(oldkey);
    }
    this.value = e.name;
    console.log('ssss', e.name);
    if (e.name != undefined) {
      this.searchvalue();
      this.vlean = true;
    }
  },
  // 无限加载
  onReachBottom: function onReachBottom() {var _this3 = this;
    this.pages += 1;
    this.showloadMore = true;
    uni.request({
      url: (0, _api.requestip)() + '/thirdreturn/index/searchgoods?key_word=' + this.value + '&page=' + this.pages,
      method: 'GET',
      data: {},
      success: function success(res) {
        console.log("wuxian:", res.data);
        for (var i = 0; i < res.data.goods_search_response.goods_list.length; i++) {
          _this3.data.push(res.data.goods_search_response.goods_list[i]);
        }
        _this3.showloadMore = false;
        if (res.data.goods_search_response.goods_list == 0) {
          _this3.loadMoreText = '没有更多数据了';
          _this3.showloadMore = true;
        } else {
          _this3.loadMoreText = '加载中...';
          _this3.showloadMore = false;
        }
      },
      fail: function fail() {},
      complete: function complete() {} });

  },
  // 定位
  onPageScroll: function onPageScroll(e) {
    // console.log("gun:",e.scrollTop);
    if (e.scrollTop >= 40) {
      this.scorrllTop = true;
    } else {
      this.scorrllTop = false;
    }
  } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-baidu/dist/index.js */ "./node_modules/@dcloudio/uni-mp-baidu/dist/index.js")["default"]))

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/less-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!../../../../testhx/klpt/pages/searchinput/searchinput.vue?vue&type=style&index=0&lang=less&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--10-oneOf-1-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-1-1!./node_modules/css-loader??ref--10-oneOf-1-2!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--10-oneOf-1-3!./node_modules/less-loader/dist/cjs.js??ref--10-oneOf-1-4!./node_modules/vue-loader/lib??vue-loader-options!D:/testhx/klpt/pages/searchinput/searchinput.vue?vue&type=style&index=0&lang=less& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib/index.js?!../../../../testhx/klpt/pages/searchinput/searchinput.vue?vue&type=template&id=25f5b4ef&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib??vue-loader-options!D:/testhx/klpt/pages/searchinput/searchinput.vue?vue&type=template&id=25f5b4ef& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "view",
    { staticClass: "searchinput", attrs: { _hid: 0 } },
    [
      _c("view", { staticClass: "searchBox", attrs: { _hid: 1 } }, [
        _c(
          "view",
          {
            class: _vm.scorrllTop ? "searchgoods searchgoods2" : "searchgoods",
            attrs: { _hid: 2 }
          },
          [
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.value,
                  expression: "value"
                }
              ],
              attrs: {
                type: "text",
                value: "true",
                placeholder: _vm.defaultKeyword,
                _hid: 3,
                _batrs: "placeholder"
              },
              domProps: { value: _vm.value },
              on: {
                input: [
                  function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.value = $event.target.value
                  },
                  _vm.valueDt
                ]
              }
            }),
            _c(
              "view",
              {
                staticClass: "searchbox",
                attrs: { _hid: 4 },
                on: { click: _vm.searchvalue }
              },
              [_c("text", { attrs: { _hid: 5 } }, [])]
            )
          ]
        ),
        _vm._ri(!!_vm.vlean, 7)
          ? _c("image", {
              attrs: { src: "../../static/cha.png", mode: "widthFix", _hid: 7 },
              on: { click: _vm.clearDall }
            })
          : _vm._e()
      ]),
      _vm._ri(!!_vm.cleanstate, 8)
        ? _c("view", { staticClass: "searchHistory", attrs: { _hid: 8 } }, [
            _c("view", { staticClass: "title", attrs: { _hid: 9 } }, [
              _c(
                "text",
                { staticStyle: { color: "#000000" }, attrs: { _hid: 10 } },
                []
              ),
              _c("image", {
                attrs: {
                  src: "../../static/shanchu.png",
                  mode: "widthFix",
                  _hid: 12
                },
                on: { click: _vm.cleanSearch }
              })
            ]),
            _c(
              "view",
              { staticClass: "content", attrs: { _hid: 13 } },
              _vm._l(
                _vm.historyOld,
                function(item, index, item_i2) {
                  var _fid = item_i2 !== undefined ? item_i2 : index
                  return _c(
                    "text",
                    {
                      key: index,
                      attrs: { _hid: 14, _fid: _fid, _fk: "index" },
                      on: {
                        click: function($event) {
                          _vm.textH(item)
                        }
                      }
                    },
                    [_vm._v(_vm._s(item), 15, _fid)]
                  )
                },
                14,
                _vm._self
              )
            )
          ])
        : _vm._e(),
      _vm._ri(!!_vm.goodstate, 16)
        ? _c("view", { staticClass: "searchHot", attrs: { _hid: 16 } }, [
            _c("view", { staticClass: "title", attrs: { _hid: 17 } }, [
              _c(
                "text",
                { staticStyle: { color: "#000000" }, attrs: { _hid: 18 } },
                []
              ),
              _c("image", {
                attrs: {
                  src: _vm.hotstate ? _vm.imgsrc : _vm.imgsrc2,
                  mode: "widthFix",
                  _hid: 20,
                  _batrs: "src"
                },
                on: { click: _vm.imgurl }
              })
            ]),
            _vm._ri(!!_vm.hotstate, 21)
              ? _c(
                  "view",
                  { staticClass: "content", attrs: { _hid: 21 } },
                  _vm._l(
                    _vm.hotdata,
                    function(item, index, item_i2) {
                      var _fid = item_i2 !== undefined ? item_i2 : index
                      return _c(
                        "text",
                        {
                          key: index,
                          attrs: { _hid: 22, _fid: _fid, _fk: "index" },
                          on: {
                            click: function($event) {
                              _vm.textH(item)
                            }
                          }
                        },
                        [_vm._v(_vm._s(item), 23, _fid)]
                      )
                    },
                    22,
                    _vm._self
                  )
                )
              : _vm._e(),
            _vm._ri(!!!_vm.hotstate, 24)
              ? _c("view", { staticClass: "tishi", attrs: { _hid: 24 } }, [
                  _c("text", { attrs: { _hid: 25 } }, [])
                ])
              : _vm._e()
          ])
        : _vm._e(),
      _vm._ri(!!!_vm.goodstate, 27)
        ? _c("good-flex", {
            attrs: {
              data: _vm.data,
              flexblean: _vm.flexblean,
              _hid: 27,
              _batrs: "data,flexblean",
              _cid: 0
            }
          })
        : _vm._e(),
      _vm._ri(!!_vm.Null, 1029)
        ? _c("view", { staticClass: "goodNull", attrs: { _hid: 1029 } }, [])
        : _vm._e(),
      _vm._ri(!!_vm.showloadMore, 1031)
        ? _c("load-more", {
            attrs: {
              status: _vm.loadMoreText === "加载中..." ? "loading" : "",
              _hid: 1031,
              _batrs: "status",
              _cid: 1
            }
          })
        : _vm._e()
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

},[["../../../../testhx/klpt/main.js?{\"page\":\"pages%2Fsearchinput%2Fsearchinput\"}","common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-baidu/pages/searchinput/searchinput.js.map