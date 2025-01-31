module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		3: 0
/******/ 	};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// require() chunk loading for javascript
/******/
/******/ 		// "0" is the signal for "already loaded"
/******/ 		if(installedChunks[chunkId] !== 0) {
/******/ 			var chunk = require("./" + ({"0":"components/policy-service-policy","1":"components/breadcrumb","2":"components/hero-slider","4":"components/about-mission","5":"components/banner-item","6":"components/banner-style-one","7":"components/blog-item","8":"components/blog-item-style-two","9":"components/blog-sidebar","10":"components/blog-wrapper","11":"components/brand-logo-carousel","12":"components/contact-info","13":"components/fun-fact","14":"components/header-offcanvas-menu-with-transparent","15":"components/header-with-top-bar-two","16":"components/header-with-topbar","17":"components/login","18":"components/newsletter-style-two","19":"components/product-details-description-review","20":"components/product-details-wrapper","21":"components/product-grid-item","22":"components/product-grid-item-two","23":"components/product-wrapper","24":"components/quick-view","25":"components/register","26":"components/section-title-with-sub-title","27":"components/shop-sidebar","28":"components/team-members","29":"components/testimonial-one","30":"components/the-footer","31":"components/the-header","32":"components/welcome-message","33":"pages/about","34":"pages/blog/_slug","35":"pages/blog/index","36":"pages/cart","37":"pages/checkout","38":"pages/contact","39":"pages/index","40":"pages/login-register","41":"pages/my-account","42":"pages/privacy-policy","43":"pages/product/_slug","44":"pages/product/product-affiliate","45":"pages/shop","46":"pages/success","47":"pages/terms-conditions","48":"pages/wishlist"}[chunkId]||chunkId) + ".js");
/******/ 			var moreModules = chunk.modules, chunkIds = chunk.ids;
/******/ 			for(var moduleId in moreModules) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 			for(var i = 0; i < chunkIds.length; i++)
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/_nuxt/";
/******/
/******/ 	// uncaught error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using import().catch()
/******/ 		});
/******/ 	};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 21);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("vue");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("ufo");

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent(
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */,
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options =
    typeof scriptExports === 'function' ? scriptExports.options : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) {
    // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
          injectStyles.call(
            this,
            (options.functional ? this.parent : this).$root.$options.shadowRoot
          )
        }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection(h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing ? [].concat(existing, hook) : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("vuex");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

// This file is intentionally left empty for noop aliases

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("vue-no-ssr");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("vue-client-only");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("vue-router");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

// Exports
module.exports = {

};


/***/ }),
/* 10 */
/***/ (function(module, exports) {

// Exports
module.exports = {

};


/***/ }),
/* 11 */
/***/ (function(module, exports) {

// Exports
module.exports = {

};


/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("node-fetch-native");

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("vue-meta");

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("defu");

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("vue-awesome-swiper");

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("vue-pagination-2");

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = require("vue-observe-visibility");

/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/MiniCart.vue?vue&type=template&id=1d56e194
var render=function render(){var _vm=this,_c=_vm._self._c;return _c('client-only',[_c('div',{staticClass:"minicart-wrapper",class:_vm.miniCart},[_vm.products.length>0?_c('div',{staticClass:"shopping-cart-content"},[_c('ul',_vm._l(_vm.products,function(product,index){return _c('li',{key:index,staticClass:"single-shopping-cart"},[_c('div',{staticClass:"shopping-cart-img"},[_c('n-link',{attrs:{"to":`/product/${_vm.slugify(product.product_name)}`}},[_c('img',{attrs:{"src":`https://api.cheparo.com/${product.image}`,"alt":product.product_name}})])],1),_vm._v(" "),_c('div',{staticClass:"shopping-cart-title"},[_c('h4',[_c('n-link',{attrs:{"to":`/product/${_vm.slugify(product.product_name)}`}},[_vm._v(_vm._s(product.product_name))])],1),_vm._v(" "),_c('h6',[_vm._v("Qty: "+_vm._s(product.cartQuantity))]),_vm._v(" "),_c('span',[_vm._v("$"+_vm._s(product.price))])]),_vm._v(" "),_c('div',{staticClass:"shopping-cart-delete"},[_c('button',{on:{"click":function($event){return _vm.removeProduct(product);}}},[_c('i',{staticClass:"fa fa-times-circle"})])])]);}),0),_vm._v(" "),_c('div',{staticClass:"shopping-cart-total"},[_c('h4',[_vm._v("\n          Total : "),_c('span',{staticClass:"shop-total"},[_vm._v("$"+_vm._s(_vm.total.toFixed(2)))])])]),_vm._v(" "),_c('div',{staticClass:"shopping-cart-btn btn-hover text-center",on:{"click":function($event){return _vm.$emit('minicartClose');}}},[_c('n-link',{staticClass:"default-btn",attrs:{"to":"/cart"}},[_vm._v("view cart")]),_vm._v(" "),_c('n-link',{staticClass:"default-btn",attrs:{"to":"/checkout"}},[_vm._v("checkout")])],1)]):_c('div',{staticClass:"shopping-cart-content text-center"},[_c('p',[_vm._v("No items added to cart")])])])]);};var staticRenderFns=[];
// CONCATENATED MODULE: ./components/MiniCart.vue?vue&type=template&id=1d56e194

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/MiniCart.vue?vue&type=script&lang=js
/* harmony default export */ var MiniCartvue_type_script_lang_js = ({props:["miniCart"],computed:{products(){return this.$store.getters.getCart;},total(){return this.$store.getters.getTotal;}},methods:{removeProduct(product){// for notification
this.$notify({title:"Item remove from cart!"});this.$store.dispatch("removeProductFromCart",product);},discountedPrice(product){return product.price-product.price*product.discount/100;},slugify(text){return text.toString().toLowerCase().replace(/\s+/g,"-")// Replace spaces with -
.replace(/[^\w-]+/g,"")// Remove all non-word chars
.replace(/--+/g,"-")// Replace multiple - with single -
.replace(/^-+/,"")// Trim - from start of text
.replace(/-+$/,"");// Trim - from end of text
}}});
// CONCATENATED MODULE: ./components/MiniCart.vue?vue&type=script&lang=js
 /* harmony default export */ var components_MiniCartvue_type_script_lang_js = (MiniCartvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/MiniCart.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_MiniCartvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "446a44f4"
  
)

/* harmony default export */ var MiniCart = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/OffCanvasMobileMenu.vue?vue&type=template&id=3f5b3672
var render=function render(){var _vm=this,_c=_vm._self._c;return _c('div',{staticClass:"offcanvas-mobile-menu-wrapper"},[_vm._ssrNode("<div class=\"mobile-menu-overlay\"></div> "),_vm._ssrNode("<div class=\"mobile-menu-inner\">","</div>",[_vm._ssrNode("<button class=\"close-btn\"><i class=\"pe-7s-close\"></i></button> "),_vm._ssrNode("<div class=\"mobile-menu-inner-wrapper\">","</div>",[_vm._ssrNode("<div class=\"offcanvas-mobile-search\"><form class=\"mobile-search-inner\"><input type=\"text\" placeholder=\"Search here\"> <button type=\"submit\"><i class=\"pe-7s-search\"></i></button></form></div> "),_vm._ssrNode("<div class=\"offcanvas-body-inner\">","</div>",[_vm._ssrNode("<div class=\"menu-navigation\">","</div>",[_c('ResponsiveMobileMenu')],1),_vm._ssrNode(" <div class=\"offcanvas-tools\"><div class=\"same-language-currency\"><span>Choose Language</span> <select name=\"language\"><option value=\"english\">English</option> <option value=\"hindi\">Hindi</option> <option value=\"spanish\">Spanish</option></select></div> <div class=\"same-language-currency\"><span>Choose Currency</span> <select name=\"currency\"><option value=\"usd\">USD</option> <option value=\"eur\">EUR</option> <option value=\"rup\">Rup</option></select></div></div> <div class=\"offcanvas-widget-area\"><ul><li><i class=\"fa fa-phone\"></i> <a href=\"callto:0123456789\">0123456789</a></li> <li><i class=\"fa fa-envelope\"></i> <a href=\"mailto:info@yourdomain.com\">info@cheparo.com</a></li></ul></div>")],2)],2)],2)],2);};var staticRenderFns=[];
// CONCATENATED MODULE: ./components/OffCanvasMobileMenu.vue?vue&type=template&id=3f5b3672

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/OffCanvasMobileMenu.vue?vue&type=script&lang=js
/* harmony default export */ var OffCanvasMobileMenuvue_type_script_lang_js = ({components:{ResponsiveMobileMenu:()=>Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 48))},methods:{setSearch(e){this.searchValue=e.target.value;},search(e){e.preventDefault();window.location="/shop?search="+this.searchValue;}}});
// CONCATENATED MODULE: ./components/OffCanvasMobileMenu.vue?vue&type=script&lang=js
 /* harmony default export */ var components_OffCanvasMobileMenuvue_type_script_lang_js = (OffCanvasMobileMenuvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/OffCanvasMobileMenu.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_OffCanvasMobileMenuvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "d80af7ee"
  
)

/* harmony default export */ var OffCanvasMobileMenu = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {ResponsiveMobileMenu: __webpack_require__(48).default})


/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Navigation.vue?vue&type=template&id=4267bf62
var render=function render(){var _vm=this,_c=_vm._self._c;return _c('ul',[_vm._ssrNode("<li>","</li>",[_c('n-link',{attrs:{"to":"/"}},[_vm._v("Home")])],1),_vm._ssrNode(" "),_vm._l(_vm.$store.state.categories,function(category,index){return _vm._ssrNode("<li>","</li>",[_c('n-link',{attrs:{"to":`/shop?category=${category.id}&sub_category=&search=&sort=`}},[_vm._v(_vm._s(category.category_name)+" "),_c('i',{staticClass:"fa fa-angle-down"})]),_vm._ssrNode(" "),_vm._ssrNode("<ul class=\"submenu\">","</ul>",_vm._l(category.sub_categories,function(subcategory,index){return _vm._ssrNode("<li>","</li>",[_c('n-link',{attrs:{"to":`/shop?category=&sub_category=${subcategory.id}&search=&sort=`}},[_vm._v(_vm._s(subcategory.sub_category_name))])],1);}),0)],2);})],2);};var staticRenderFns=[];
// CONCATENATED MODULE: ./components/Navigation.vue?vue&type=template&id=4267bf62

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Navigation.vue?vue&type=script&lang=js
/* harmony default export */ var Navigationvue_type_script_lang_js = ({components:{},methods:{getCategoriesWithSubCategories:function(){this.$store.dispatch("getCategoriesWithSubCategories");}},computed:{},data(){return{};},mounted(){this.getCategoriesWithSubCategories();}});
// CONCATENATED MODULE: ./components/Navigation.vue?vue&type=script&lang=js
 /* harmony default export */ var components_Navigationvue_type_script_lang_js = (Navigationvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/Navigation.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Navigationvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "d72f517a"
  
)

/* harmony default export */ var Navigation = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(22);
module.exports = __webpack_require__(45);


/***/ }),
/* 22 */
/***/ (function(module, exports) {

global.installComponents = function (component, components) {
  var options = typeof component.exports === 'function'
    ? component.exports.extendOptions
    : component.options

  if (typeof component.exports === 'function') {
    options.components = component.exports.options.components
  }

  options.components = options.components || {}

  for (var i in components) {
    options.components[i] = options.components[i] || components[i]
  }


  if (options.functional) {
    provideFunctionalComponents(component, options.components)
  }
}

var functionalPatchKey = '_functionalComponents'

function provideFunctionalComponents(component, components) {
  if (component.exports[functionalPatchKey]) {
    return
  }
  component.exports[functionalPatchKey] = true

  var render = component.exports.render
  component.exports.render = function (h, vm) {
    return render(h, Object.assign({}, vm, {
      _c: function (n, a, b) {
        return vm._c(components[n] || n, a, b)
      }
    }))
  }
}


/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_error_vue_vue_type_style_index_0_id_6fa30f5c_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_error_vue_vue_type_style_index_0_id_6fa30f5c_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_error_vue_vue_type_style_index_0_id_6fa30f5c_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_error_vue_vue_type_style_index_0_id_6fa30f5c_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_error_vue_vue_type_style_index_0_id_6fa30f5c_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_id_b64bf7b2_prod_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(10);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_id_b64bf7b2_prod_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_id_b64bf7b2_prod_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_id_b64bf7b2_prod_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_id_b64bf7b2_prod_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 25 */
/***/ (function(module, exports) {

// Exports
module.exports = {

};


/***/ }),
/* 26 */
/***/ (function(module, exports) {

// Exports
module.exports = {

};


/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ResponsiveMobileMenu_vue_vue_type_style_index_0_id_3f116dd1_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ResponsiveMobileMenu_vue_vue_type_style_index_0_id_3f116dd1_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ResponsiveMobileMenu_vue_vue_type_style_index_0_id_3f116dd1_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ResponsiveMobileMenu_vue_vue_type_style_index_0_id_3f116dd1_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ResponsiveMobileMenu_vue_vue_type_style_index_0_id_3f116dd1_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 28 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/esnext.set.add-all.js");

/***/ }),
/* 29 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/esnext.set.delete-all.js");

/***/ }),
/* 30 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/esnext.set.difference.js");

/***/ }),
/* 31 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/esnext.set.every.js");

/***/ }),
/* 32 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/esnext.set.filter.js");

/***/ }),
/* 33 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/esnext.set.find.js");

/***/ }),
/* 34 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/esnext.set.intersection.js");

/***/ }),
/* 35 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/esnext.set.is-disjoint-from.js");

/***/ }),
/* 36 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/esnext.set.is-subset-of.js");

/***/ }),
/* 37 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/esnext.set.is-superset-of.js");

/***/ }),
/* 38 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/esnext.set.join.js");

/***/ }),
/* 39 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/esnext.set.map.js");

/***/ }),
/* 40 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/esnext.set.reduce.js");

/***/ }),
/* 41 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/esnext.set.some.js");

/***/ }),
/* 42 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/esnext.set.symmetric-difference.js");

/***/ }),
/* 43 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/esnext.set.union.js");

/***/ }),
/* 44 */
/***/ (function(module, exports) {

// Exports
module.exports = {

};


/***/ }),
/* 45 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// NAMESPACE OBJECT: ./.nuxt/components/index.js
var components_namespaceObject = {};
__webpack_require__.r(components_namespaceObject);
__webpack_require__.d(components_namespaceObject, "AboutMission", function() { return AboutMission; });
__webpack_require__.d(components_namespaceObject, "BlogItem", function() { return BlogItem; });
__webpack_require__.d(components_namespaceObject, "BlogItemStyleTwo", function() { return BlogItemStyleTwo; });
__webpack_require__.d(components_namespaceObject, "BlogSidebar", function() { return BlogSidebar; });
__webpack_require__.d(components_namespaceObject, "BlogWrapper", function() { return BlogWrapper; });
__webpack_require__.d(components_namespaceObject, "BrandLogoCarousel", function() { return BrandLogoCarousel; });
__webpack_require__.d(components_namespaceObject, "Breadcrumb", function() { return Breadcrumb; });
__webpack_require__.d(components_namespaceObject, "ContactInfo", function() { return ContactInfo; });
__webpack_require__.d(components_namespaceObject, "FunFact", function() { return FunFact; });
__webpack_require__.d(components_namespaceObject, "HeaderOffcanvasMenuWithTransparent", function() { return HeaderOffcanvasMenuWithTransparent; });
__webpack_require__.d(components_namespaceObject, "HeaderWithTopbar", function() { return HeaderWithTopbar; });
__webpack_require__.d(components_namespaceObject, "HeaderWithTopBarTwo", function() { return HeaderWithTopBarTwo; });
__webpack_require__.d(components_namespaceObject, "HomeSidebarMenu", function() { return components_HomeSidebarMenu; });
__webpack_require__.d(components_namespaceObject, "Login", function() { return Login; });
__webpack_require__.d(components_namespaceObject, "MiniCart", function() { return MiniCart; });
__webpack_require__.d(components_namespaceObject, "Navigation", function() { return Navigation; });
__webpack_require__.d(components_namespaceObject, "NewsletterStyleTwo", function() { return NewsletterStyleTwo; });
__webpack_require__.d(components_namespaceObject, "OffCanvasMobileMenu", function() { return OffCanvasMobileMenu; });
__webpack_require__.d(components_namespaceObject, "ProductDetailsDescriptionReview", function() { return ProductDetailsDescriptionReview; });
__webpack_require__.d(components_namespaceObject, "QuickView", function() { return QuickView; });
__webpack_require__.d(components_namespaceObject, "Register", function() { return Register; });
__webpack_require__.d(components_namespaceObject, "ResponsiveMobileMenu", function() { return ResponsiveMobileMenu; });
__webpack_require__.d(components_namespaceObject, "SectionTitleWithSubTitle", function() { return SectionTitleWithSubTitle; });
__webpack_require__.d(components_namespaceObject, "ShopSidebar", function() { return ShopSidebar; });
__webpack_require__.d(components_namespaceObject, "TeamMembers", function() { return TeamMembers; });
__webpack_require__.d(components_namespaceObject, "TestimonialOne", function() { return TestimonialOne; });
__webpack_require__.d(components_namespaceObject, "TheFooter", function() { return TheFooter; });
__webpack_require__.d(components_namespaceObject, "TheHeader", function() { return TheHeader; });
__webpack_require__.d(components_namespaceObject, "WelcomeMessage", function() { return WelcomeMessage; });
__webpack_require__.d(components_namespaceObject, "BannerItem", function() { return BannerItem; });
__webpack_require__.d(components_namespaceObject, "BannerStyleOne", function() { return BannerStyleOne; });
__webpack_require__.d(components_namespaceObject, "HeroSlider", function() { return HeroSlider; });
__webpack_require__.d(components_namespaceObject, "ProductDetailsWrapper", function() { return ProductDetailsWrapper; });
__webpack_require__.d(components_namespaceObject, "ProductGridItem", function() { return ProductGridItem; });
__webpack_require__.d(components_namespaceObject, "ProductGridItemTwo", function() { return ProductGridItemTwo; });
__webpack_require__.d(components_namespaceObject, "ProductWrapper", function() { return ProductWrapper; });
__webpack_require__.d(components_namespaceObject, "PolicyServicePolicy", function() { return PolicyServicePolicy; });

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(0);
var external_vue_default = /*#__PURE__*/__webpack_require__.n(external_vue_);

// EXTERNAL MODULE: external "ufo"
var external_ufo_ = __webpack_require__(1);

// EXTERNAL MODULE: external "node-fetch-native"
var external_node_fetch_native_ = __webpack_require__(12);
var external_node_fetch_native_default = /*#__PURE__*/__webpack_require__.n(external_node_fetch_native_);

// CONCATENATED MODULE: ./.nuxt/middleware.js
const middleware={};/* harmony default export */ var _nuxt_middleware = (middleware);
// CONCATENATED MODULE: ./.nuxt/utils.js
// window.{{globals.loadedCallback}} hook
// Useful for jsdom testing or plugins (https://github.com/tmpvar/jsdom#dealing-with-asynchronous-script-loading)
if(false){}function createGetCounter(counterObject,defaultKey=''){return function getCounter(id=defaultKey){if(counterObject[id]===undefined){counterObject[id]=0;}return counterObject[id]++;};}function empty(){}function globalHandleError(error){if(external_vue_default.a.config.errorHandler){external_vue_default.a.config.errorHandler(error);}}function interopDefault(promise){return promise.then(m=>m.default||m);}function hasFetch(vm){return vm.$options&&typeof vm.$options.fetch==='function'&&!vm.$options.fetch.length;}function purifyData(data){if(true){return data;}return Object.entries(data).filter(([key,value])=>{const valid=!(value instanceof Function)&&!(value instanceof Promise);if(!valid){console.warn(`${key} is not able to be stringified. This will break in a production environment.`);}return valid;}).reduce((obj,[key,value])=>{obj[key]=value;return obj;},{});}function getChildrenComponentInstancesUsingFetch(vm,instances=[]){const children=vm.$children||[];for(const child of children){if(child.$fetch){instances.push(child);}if(child.$children){getChildrenComponentInstancesUsingFetch(child,instances);}}return instances;}function applyAsyncData(Component,asyncData){if(// For SSR, we once all this function without second param to just apply asyncData
// Prevent doing this for each SSR request
!asyncData&&Component.options.__hasNuxtData){return;}const ComponentData=Component.options._originDataFn||Component.options.data||function(){return{};};Component.options._originDataFn=ComponentData;Component.options.data=function(){const data=ComponentData.call(this,this);if(this.$ssrContext){asyncData=this.$ssrContext.asyncData[Component.cid];}return{...data,...asyncData};};Component.options.__hasNuxtData=true;if(Component._Ctor&&Component._Ctor.options){Component._Ctor.options.data=Component.options.data;}}function sanitizeComponent(Component){// If Component already sanitized
if(Component.options&&Component._Ctor===Component){return Component;}if(!Component.options){Component=external_vue_default.a.extend(Component);// fix issue #6
Component._Ctor=Component;}else{Component._Ctor=Component;Component.extendOptions=Component.options;}// If no component name defined, set file path as name, (also fixes #5703)
if(!Component.options.name&&Component.options.__file){Component.options.name=Component.options.__file;}return Component;}function getMatchedComponents(route,matches=false,prop='components'){return Array.prototype.concat.apply([],route.matched.map((m,index)=>{return Object.keys(m[prop]).map(key=>{matches&&matches.push(index);return m[prop][key];});}));}function getMatchedComponentsInstances(route,matches=false){return getMatchedComponents(route,matches,'instances');}function flatMapComponents(route,fn){return Array.prototype.concat.apply([],route.matched.map((m,index)=>{return Object.keys(m.components).reduce((promises,key)=>{if(m.components[key]){promises.push(fn(m.components[key],m.instances[key],m,key,index));}else{delete m.components[key];}return promises;},[]);}));}function resolveRouteComponents(route,fn){return Promise.all(flatMapComponents(route,async(Component,instance,match,key)=>{// If component is a function, resolve it
if(typeof Component==='function'&&!Component.options){try{Component=await Component();}catch(error){// Handle webpack chunk loading errors
// This may be due to a new deployment or a network problem
if(error&&error.name==='ChunkLoadError'&&typeof window!=='undefined'&&window.sessionStorage){const timeNow=Date.now();const previousReloadTime=parseInt(window.sessionStorage.getItem('nuxt-reload'));// check for previous reload time not to reload infinitely
if(!previousReloadTime||previousReloadTime+60000<timeNow){window.sessionStorage.setItem('nuxt-reload',timeNow);window.location.reload(true/* skip cache */);}}throw error;}}match.components[key]=Component=sanitizeComponent(Component);return typeof fn==='function'?fn(Component,instance,match,key):Component;}));}async function getRouteData(route){if(!route){return;}// Make sure the components are resolved (code-splitting)
await resolveRouteComponents(route);// Send back a copy of route with meta based on Component definition
return{...route,meta:getMatchedComponents(route).map((Component,index)=>{return{...Component.options.meta,...(route.matched[index]||{}).meta};})};}async function setContext(app,context){// If context not defined, create it
if(!app.context){app.context={isStatic:true,isDev:false,isHMR:false,app,store:app.store,payload:context.payload,error:context.error,base:app.router.options.base,env:{}};// Only set once
if(context.ssrContext){app.context.ssrContext=context.ssrContext;}app.context.redirect=(status,path,query)=>{if(!status){return;}app.context._redirected=true;// if only 1 or 2 arguments: redirect('/') or redirect('/', { foo: 'bar' })
let pathType=typeof path;if(typeof status!=='number'&&(pathType==='undefined'||pathType==='object')){query=path||{};path=status;pathType=typeof path;status=302;}if(pathType==='object'){path=app.router.resolve(path).route.fullPath;}// "/absolute/route", "./relative/route" or "../relative/route"
if(/(^[.]{1,2}\/)|(^\/(?!\/))/.test(path)){app.context.next({path,query,status});}else{path=Object(external_ufo_["withQuery"])(path,query);if(true){app.context.next({path,status});}if(false){}}};if(true){app.context.beforeNuxtRender=fn=>context.beforeRenderFns.push(fn);app.context.beforeSerialize=fn=>context.beforeSerializeFns.push(fn);}if(false){}}// Dynamic keys
const[currentRouteData,fromRouteData]=await Promise.all([getRouteData(context.route),getRouteData(context.from)]);if(context.route){app.context.route=currentRouteData;}if(context.from){app.context.from=fromRouteData;}if(context.error){app.context.error=context.error;}app.context.next=context.next;app.context._redirected=false;app.context._errored=false;app.context.isHMR=false;app.context.params=app.context.route.params||{};app.context.query=app.context.route.query||{};}function middlewareSeries(promises,appContext,renderState){if(!promises.length||appContext._redirected||appContext._errored||renderState&&renderState.aborted){return Promise.resolve();}return promisify(promises[0],appContext).then(()=>{return middlewareSeries(promises.slice(1),appContext,renderState);});}function promisify(fn,context){let promise;if(fn.length===2){// fn(context, callback)
promise=new Promise(resolve=>{fn(context,function(err,data){if(err){context.error(err);}data=data||{};resolve(data);});});}else{promise=fn(context);}if(promise&&promise instanceof Promise&&typeof promise.then==='function'){return promise;}return Promise.resolve(promise);}// Imported from vue-router
function getLocation(base,mode){if(mode==='hash'){return window.location.hash.replace(/^#\//,'');}base=decodeURI(base).slice(0,-1);// consideration is base is normalized with trailing slash
let path=decodeURI(window.location.pathname);if(base&&path.startsWith(base)){path=path.slice(base.length);}const fullPath=(path||'/')+window.location.search+window.location.hash;return Object(external_ufo_["normalizeURL"])(fullPath);}// Imported from path-to-regexp
/**
 * Compile a string to a template function for the path.
 *
 * @param  {string}             str
 * @param  {Object=}            options
 * @return {!function(Object=, Object=)}
 */function compile(str,options){return tokensToFunction(parse(str,options),options);}function getQueryDiff(toQuery,fromQuery){const diff={};const queries={...toQuery,...fromQuery};for(const k in queries){if(String(toQuery[k])!==String(fromQuery[k])){diff[k]=true;}}return diff;}function normalizeError(err){let message;if(!(err.message||typeof err==='string')){try{message=JSON.stringify(err,null,2);}catch(e){message=`[${err.constructor.name}]`;}}else{message=err.message||err;}return{...err,message,statusCode:err.statusCode||err.status||err.response&&err.response.status||500};}/**
 * The main path matching regexp utility.
 *
 * @type {RegExp}
 */const PATH_REGEXP=new RegExp([// Match escaped characters that would otherwise appear in future matches.
// This allows the user to escape special characters that won't transform.
'(\\\\.)',// Match Express-style parameters and un-named parameters with a prefix
// and optional suffixes. Matches appear as:
//
// "/:test(\\d+)?" => ["/", "test", "\d+", undefined, "?", undefined]
// "/route(\\d+)"  => [undefined, undefined, undefined, "\d+", undefined, undefined]
// "/*"            => ["/", undefined, undefined, undefined, undefined, "*"]
'([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))'].join('|'),'g');/**
 * Parse a string for the raw tokens.
 *
 * @param  {string}  str
 * @param  {Object=} options
 * @return {!Array}
 */function parse(str,options){const tokens=[];let key=0;let index=0;let path='';const defaultDelimiter=options&&options.delimiter||'/';let res;while((res=PATH_REGEXP.exec(str))!=null){const m=res[0];const escaped=res[1];const offset=res.index;path+=str.slice(index,offset);index=offset+m.length;// Ignore already escaped sequences.
if(escaped){path+=escaped[1];continue;}const next=str[index];const prefix=res[2];const name=res[3];const capture=res[4];const group=res[5];const modifier=res[6];const asterisk=res[7];// Push the current path onto the tokens.
if(path){tokens.push(path);path='';}const partial=prefix!=null&&next!=null&&next!==prefix;const repeat=modifier==='+'||modifier==='*';const optional=modifier==='?'||modifier==='*';const delimiter=res[2]||defaultDelimiter;const pattern=capture||group;tokens.push({name:name||key++,prefix:prefix||'',delimiter,optional,repeat,partial,asterisk:Boolean(asterisk),pattern:pattern?escapeGroup(pattern):asterisk?'.*':'[^'+escapeString(delimiter)+']+?'});}// Match any characters still remaining.
if(index<str.length){path+=str.substr(index);}// If the path exists, push it onto the end.
if(path){tokens.push(path);}return tokens;}/**
 * Prettier encoding of URI path segments.
 *
 * @param  {string}
 * @return {string}
 */function encodeURIComponentPretty(str,slashAllowed){const re=slashAllowed?/[?#]/g:/[/?#]/g;return encodeURI(str).replace(re,c=>{return'%'+c.charCodeAt(0).toString(16).toUpperCase();});}/**
 * Encode the asterisk parameter. Similar to `pretty`, but allows slashes.
 *
 * @param  {string}
 * @return {string}
 */function encodeAsterisk(str){return encodeURIComponentPretty(str,true);}/**
 * Escape a regular expression string.
 *
 * @param  {string} str
 * @return {string}
 */function escapeString(str){return str.replace(/([.+*?=^!:${}()[\]|/\\])/g,'\\$1');}/**
 * Escape the capturing group by escaping special characters and meaning.
 *
 * @param  {string} group
 * @return {string}
 */function escapeGroup(group){return group.replace(/([=!:$/()])/g,'\\$1');}/**
 * Expose a method for transforming tokens into the path function.
 */function tokensToFunction(tokens,options){// Compile all the tokens into regexps.
const matches=new Array(tokens.length);// Compile all the patterns before compilation.
for(let i=0;i<tokens.length;i++){if(typeof tokens[i]==='object'){matches[i]=new RegExp('^(?:'+tokens[i].pattern+')$',flags(options));}}return function(obj,opts){let path='';const data=obj||{};const options=opts||{};const encode=options.pretty?encodeURIComponentPretty:encodeURIComponent;for(let i=0;i<tokens.length;i++){const token=tokens[i];if(typeof token==='string'){path+=token;continue;}const value=data[token.name||'pathMatch'];let segment;if(value==null){if(token.optional){// Prepend partial segment prefixes.
if(token.partial){path+=token.prefix;}continue;}else{throw new TypeError('Expected "'+token.name+'" to be defined');}}if(Array.isArray(value)){if(!token.repeat){throw new TypeError('Expected "'+token.name+'" to not repeat, but received `'+JSON.stringify(value)+'`');}if(value.length===0){if(token.optional){continue;}else{throw new TypeError('Expected "'+token.name+'" to not be empty');}}for(let j=0;j<value.length;j++){segment=encode(value[j]);if(!matches[i].test(segment)){throw new TypeError('Expected all "'+token.name+'" to match "'+token.pattern+'", but received `'+JSON.stringify(segment)+'`');}path+=(j===0?token.prefix:token.delimiter)+segment;}continue;}segment=token.asterisk?encodeAsterisk(value):encode(value);if(!matches[i].test(segment)){throw new TypeError('Expected "'+token.name+'" to match "'+token.pattern+'", but received "'+segment+'"');}path+=token.prefix+segment;}return path;};}/**
 * Get the flags for a regexp from the options.
 *
 * @param  {Object} options
 * @return {string}
 */function flags(options){return options&&options.sensitive?'':'i';}function addLifecycleHook(vm,hook,fn){if(!vm.$options[hook]){vm.$options[hook]=[];}if(!vm.$options[hook].includes(fn)){vm.$options[hook].push(fn);}}const urlJoin=external_ufo_["joinURL"];const stripTrailingSlash=external_ufo_["withoutTrailingSlash"];const isSamePath=external_ufo_["isSamePath"];function setScrollRestoration(newVal){try{window.history.scrollRestoration=newVal;}catch(e){}}
// CONCATENATED MODULE: ./.nuxt/mixins/fetch.server.js
async function serverPrefetch(){if(!this._fetchOnServer){return;}// Call and await on $fetch
try{await this.$options.fetch.call(this);}catch(err){if(false){}this.$fetchState.error=normalizeError(err);}this.$fetchState.pending=false;// Define an ssrKey for hydration
this._fetchKey=this._fetchKey||this.$ssrContext.fetchCounters['']++;// Add data-fetch-key on parent element of Component
const attrs=this.$vnode.data.attrs=this.$vnode.data.attrs||{};attrs['data-fetch-key']=this._fetchKey;// Add to ssrContext for window.__NUXT__.fetch
this.$ssrContext.nuxt.fetch[this._fetchKey]=this.$fetchState.error?{_error:this.$fetchState.error}:purifyData(this._data);}/* harmony default export */ var fetch_server = ({created(){if(!hasFetch(this)){return;}if(typeof this.$options.fetchOnServer==='function'){this._fetchOnServer=this.$options.fetchOnServer.call(this)!==false;}else{this._fetchOnServer=this.$options.fetchOnServer!==false;}const defaultKey=this.$options._scopeId||this.$options.name||'';const getCounter=createGetCounter(this.$ssrContext.fetchCounters,defaultKey);if(typeof this.$options.fetchKey==='function'){this._fetchKey=this.$options.fetchKey.call(this,getCounter);}else{const key='string'===typeof this.$options.fetchKey?this.$options.fetchKey:defaultKey;this._fetchKey=key?key+':'+getCounter(key):String(getCounter(key));}// Added for remove vue undefined warning while ssr
this.$fetch=()=>{};// issue #8043
external_vue_default.a.util.defineReactive(this,'$fetchState',{pending:true,error:null,timestamp:Date.now()});addLifecycleHook(this,'serverPrefetch',serverPrefetch);}});
// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(3);
var external_vuex_default = /*#__PURE__*/__webpack_require__.n(external_vuex_);

// EXTERNAL MODULE: external "vue-meta"
var external_vue_meta_ = __webpack_require__(13);
var external_vue_meta_default = /*#__PURE__*/__webpack_require__.n(external_vue_meta_);

// EXTERNAL MODULE: external "vue-client-only"
var external_vue_client_only_ = __webpack_require__(7);
var external_vue_client_only_default = /*#__PURE__*/__webpack_require__.n(external_vue_client_only_);

// EXTERNAL MODULE: external "vue-no-ssr"
var external_vue_no_ssr_ = __webpack_require__(6);
var external_vue_no_ssr_default = /*#__PURE__*/__webpack_require__.n(external_vue_no_ssr_);

// EXTERNAL MODULE: external "vue-router"
var external_vue_router_ = __webpack_require__(8);
var external_vue_router_default = /*#__PURE__*/__webpack_require__.n(external_vue_router_);

// CONCATENATED MODULE: ./.nuxt/router.scrollBehavior.js
if(false){}function shouldScrollToTop(route){const Pages=getMatchedComponents(route);if(Pages.length===1){const{options={}}=Pages[0];return options.scrollToTop!==false;}return Pages.some(({options})=>options&&options.scrollToTop);}/* harmony default export */ var router_scrollBehavior = (function(to,from,savedPosition){// If the returned position is falsy or an empty object, will retain current scroll position
let position=false;const isRouteChanged=to!==from;// savedPosition is only available for popstate navigations (back button)
if(savedPosition){position=savedPosition;}else if(isRouteChanged&&shouldScrollToTop(to)){position={x:0,y:0};}const nuxt=window.$nuxt;if(// Initial load (vuejs/vue-router#3199)
!isRouteChanged||// Route hash changes
to.path===from.path&&to.hash!==from.hash){nuxt.$nextTick(()=>nuxt.$emit('triggerScroll'));}return new Promise(resolve=>{// wait for the out transition to complete (if necessary)
nuxt.$once('triggerScroll',()=>{// coords will be used if no selector is provided,
// or if the selector didn't match any element.
if(to.hash){let hash=to.hash;// CSS.escape() is not supported with IE and Edge.
if(typeof window.CSS!=='undefined'&&typeof window.CSS.escape!=='undefined'){hash='#'+window.CSS.escape(hash.substr(1));}try{const el=document.querySelector(hash);if(el){var _getComputedStyle$scr;// scroll to anchor by returning the selector
position={selector:hash};// Respect any scroll-margin-top set in CSS when scrolling to anchor
const y=Number((_getComputedStyle$scr=getComputedStyle(el)['scroll-margin-top'])===null||_getComputedStyle$scr===void 0?void 0:_getComputedStyle$scr.replace('px',''));if(y){position.offset={y};}}}catch(e){console.warn('Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).');}}resolve(position);});});});
// CONCATENATED MODULE: ./.nuxt/router.js
const _777783a8=()=>interopDefault(__webpack_require__.e(/* import() | pages/about */ 33).then(__webpack_require__.bind(null, 82)));const _19b30bcb=()=>interopDefault(__webpack_require__.e(/* import() | pages/blog/index */ 35).then(__webpack_require__.bind(null, 81)));const _1f875555=()=>interopDefault(__webpack_require__.e(/* import() | pages/cart */ 36).then(__webpack_require__.bind(null, 83)));const _5078e40a=()=>interopDefault(__webpack_require__.e(/* import() | pages/checkout */ 37).then(__webpack_require__.bind(null, 84)));const _7a220dfb=()=>interopDefault(__webpack_require__.e(/* import() | pages/contact */ 38).then(__webpack_require__.bind(null, 85)));const _dace9208=()=>interopDefault(__webpack_require__.e(/* import() | pages/login-register */ 40).then(__webpack_require__.bind(null, 86)));const _62e82981=()=>interopDefault(__webpack_require__.e(/* import() | pages/my-account */ 41).then(__webpack_require__.bind(null, 87)));const _5576498c=()=>interopDefault(__webpack_require__.e(/* import() | pages/privacy-policy */ 42).then(__webpack_require__.bind(null, 88)));const _0a8eda2b=()=>interopDefault(__webpack_require__.e(/* import() | pages/shop */ 45).then(__webpack_require__.bind(null, 89)));const _2c19805e=()=>interopDefault(__webpack_require__.e(/* import() | pages/success */ 46).then(__webpack_require__.bind(null, 90)));const _3453731a=()=>interopDefault(__webpack_require__.e(/* import() | pages/terms-conditions */ 47).then(__webpack_require__.bind(null, 91)));const _6ef59efa=()=>interopDefault(__webpack_require__.e(/* import() | pages/wishlist */ 48).then(__webpack_require__.bind(null, 92)));const _939030d6=()=>interopDefault(__webpack_require__.e(/* import() | pages/product/product-affiliate */ 44).then(__webpack_require__.bind(null, 93)));const _d1a14326=()=>interopDefault(__webpack_require__.e(/* import() | pages/index */ 39).then(__webpack_require__.bind(null, 94)));const _17fc6a83=()=>interopDefault(__webpack_require__.e(/* import() | pages/blog/_slug */ 34).then(__webpack_require__.bind(null, 95)));const _5bdd14b0=()=>interopDefault(__webpack_require__.e(/* import() | pages/product/_slug */ 43).then(__webpack_require__.bind(null, 96)));const emptyFn=()=>{};external_vue_default.a.use(external_vue_router_default.a);const routerOptions={mode:'history',base:'/',linkActiveClass:'nuxt-link-active',linkExactActiveClass:'nuxt-link-exact-active',scrollBehavior: router_scrollBehavior,routes:[{path:"/about",component:_777783a8,name:"about"},{path:"/blog",component:_19b30bcb,name:"blog"},{path:"/cart",component:_1f875555,name:"cart"},{path:"/checkout",component:_5078e40a,name:"checkout"},{path:"/contact",component:_7a220dfb,name:"contact"},{path:"/login-register",component:_dace9208,name:"login-register"},{path:"/my-account",component:_62e82981,name:"my-account"},{path:"/privacy-policy",component:_5576498c,name:"privacy-policy"},{path:"/shop",component:_0a8eda2b,name:"shop"},{path:"/success",component:_2c19805e,name:"success"},{path:"/terms-conditions",component:_3453731a,name:"terms-conditions"},{path:"/wishlist",component:_6ef59efa,name:"wishlist"},{path:"/product/product-affiliate",component:_939030d6,name:"product-product-affiliate"},{path:"/",component:_d1a14326,name:"index"},{path:"/blog/:slug",component:_17fc6a83,name:"blog-slug"},{path:"/product/:slug?",component:_5bdd14b0,name:"product-slug"}],fallback:false};function createRouter(ssrContext,config){const base=config._app&&config._app.basePath||routerOptions.base;const router=new external_vue_router_default.a({...routerOptions,base});// TODO: remove in Nuxt 3
const originalPush=router.push;router.push=function push(location,onComplete=emptyFn,onAbort){return originalPush.call(this,location,onComplete,onAbort);};const resolve=router.resolve.bind(router);router.resolve=(to,current,append)=>{if(typeof to==='string'){to=Object(external_ufo_["normalizeURL"])(to);}return resolve(to,current,append);};return router;}
// CONCATENATED MODULE: ./.nuxt/components/nuxt-child.js
/* harmony default export */ var nuxt_child = ({name:'NuxtChild',functional:true,props:{nuxtChildKey:{type:String,default:''},keepAlive:Boolean,keepAliveProps:{type:Object,default:undefined}},render(_,{parent,data,props}){const h=parent.$createElement;data.nuxtChild=true;const _parent=parent;const transitions=parent.$nuxt.nuxt.transitions;const defaultTransition=parent.$nuxt.nuxt.defaultTransition;let depth=0;while(parent){if(parent.$vnode&&parent.$vnode.data.nuxtChild){depth++;}parent=parent.$parent;}data.nuxtChildDepth=depth;const transition=transitions[depth]||defaultTransition;const transitionProps={};transitionsKeys.forEach(key=>{if(typeof transition[key]!=='undefined'){transitionProps[key]=transition[key];}});const listeners={};listenersKeys.forEach(key=>{if(typeof transition[key]==='function'){listeners[key]=transition[key].bind(_parent);}});if(false){}// make sure that leave is called asynchronous (fix #5703)
if(transition.css===false){const leave=listeners.leave;// only add leave listener when user didnt provide one
// or when it misses the done argument
if(!leave||leave.length<2){listeners.leave=(el,done)=>{if(leave){leave.call(_parent,el);}_parent.$nextTick(done);};}}let routerView=h('routerView',data);if(props.keepAlive){routerView=h('keep-alive',{props:props.keepAliveProps},[routerView]);}return h('transition',{props:transitionProps,on:listeners},[routerView]);}});const transitionsKeys=['name','mode','appear','css','type','duration','enterClass','leaveClass','appearClass','enterActiveClass','enterActiveClass','leaveActiveClass','appearActiveClass','enterToClass','leaveToClass','appearToClass'];const listenersKeys=['beforeEnter','enter','afterEnter','enterCancelled','beforeLeave','leave','afterLeave','leaveCancelled','beforeAppear','appear','afterAppear','appearCancelled'];
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./layouts/error.vue?vue&type=template&id=6fa30f5c&scoped=true
var render=function render(){var _vm=this,_c=_vm._self._c;return _c('div',{staticClass:"error404"},[_vm._ssrNode("<div class=\"container text-center\" data-v-6fa30f5c><div class=\"error-image\" data-v-6fa30f5c><img src=\"/img/page-404-image.png\" alt=\"Not Found Image\" class=\"img-fluid\" data-v-6fa30f5c></div> "+(_vm.error.statusCode===404?"<h1 class=\"error-404-title text-white\" data-v-6fa30f5c>Oops! Page not found!</h1>":"<h1 class=\"error-404-title text-white\" data-v-6fa30f5c>An error occurred</h1>")+" <div class=\"error-buttons\" data-v-6fa30f5c><button class=\"btn btn-primary btn-hover-dark\" data-v-6fa30f5c><span class=\"button-text\" data-v-6fa30f5c>Go Back Previous Page</span></button></div></div>")]);};var staticRenderFns=[];
// CONCATENATED MODULE: ./layouts/error.vue?vue&type=template&id=6fa30f5c&scoped=true

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./layouts/error.vue?vue&type=script&lang=js
/* harmony default export */ var errorvue_type_script_lang_js = ({props:['error']});
// CONCATENATED MODULE: ./layouts/error.vue?vue&type=script&lang=js
 /* harmony default export */ var layouts_errorvue_type_script_lang_js = (errorvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./layouts/error.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(23)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var error_component = Object(componentNormalizer["a" /* default */])(
  layouts_errorvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "6fa30f5c",
  "a6acd204"
  
)

/* harmony default export */ var layouts_error = (error_component.exports);
// CONCATENATED MODULE: ./.nuxt/components/nuxt.js
/* harmony default export */ var components_nuxt = ({name:'Nuxt',components:{NuxtChild: nuxt_child,NuxtError: layouts_error},props:{nuxtChildKey:{type:String,default:undefined},keepAlive:Boolean,keepAliveProps:{type:Object,default:undefined},name:{type:String,default:'default'}},errorCaptured(error){// if we receive and error while showing the NuxtError component
// capture the error and force an immediate update so we re-render
// without the NuxtError component
if(this.displayingNuxtError){this.errorFromNuxtError=error;this.$forceUpdate();}},computed:{routerViewKey(){// If nuxtChildKey prop is given or current route has children
if(typeof this.nuxtChildKey!=='undefined'||this.$route.matched.length>1){return this.nuxtChildKey||compile(this.$route.matched[0].path)(this.$route.params);}const[matchedRoute]=this.$route.matched;if(!matchedRoute){return this.$route.path;}const Component=matchedRoute.components.default;if(Component&&Component.options){const{options}=Component;if(options.key){return typeof options.key==='function'?options.key(this.$route):options.key;}}const strict=/\/$/.test(matchedRoute.path);return strict?this.$route.path:this.$route.path.replace(/\/$/,'');}},beforeCreate(){external_vue_default.a.util.defineReactive(this,'nuxt',this.$root.$options.nuxt);},render(h){// if there is no error
if(!this.nuxt.err){// Directly return nuxt child
return h('NuxtChild',{key:this.routerViewKey,props:this.$props});}// if an error occurred within NuxtError show a simple
// error message instead to prevent looping
if(this.errorFromNuxtError){this.$nextTick(()=>this.errorFromNuxtError=false);return h('div',{},[h('h2','An error occurred while showing the error page'),h('p','Unfortunately an error occurred and while showing the error page another error occurred'),h('p',`Error details: ${this.errorFromNuxtError.toString()}`),h('nuxt-link',{props:{to:'/'}},'Go back to home')]);}// track if we are showing the NuxtError component
this.displayingNuxtError=true;this.$nextTick(()=>this.displayingNuxtError=false);return h(layouts_error,{props:{error:this.nuxt.err}});}});
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./.nuxt/components/nuxt-loading.vue?vue&type=script&lang=js
/* harmony default export */ var nuxt_loadingvue_type_script_lang_js = ({name:'NuxtLoading',data(){return{percent:0,show:false,canSucceed:true,reversed:false,skipTimerCount:0,rtl:false,throttle:200,duration:5000,continuous:false};},computed:{left(){if(!this.continuous&&!this.rtl){return false;}return this.rtl?this.reversed?'0px':'auto':!this.reversed?'0px':'auto';}},beforeDestroy(){this.clear();},methods:{clear(){clearInterval(this._timer);clearTimeout(this._throttle);clearTimeout(this._hide);this._timer=null;},start(){this.clear();this.percent=0;this.reversed=false;this.skipTimerCount=0;this.canSucceed=true;if(this.throttle){this._throttle=setTimeout(()=>this.startTimer(),this.throttle);}else{this.startTimer();}return this;},set(num){this.show=true;this.canSucceed=true;this.percent=Math.min(100,Math.max(0,Math.floor(num)));return this;},get(){return this.percent;},increase(num){this.percent=Math.min(100,Math.floor(this.percent+num));return this;},decrease(num){this.percent=Math.max(0,Math.floor(this.percent-num));return this;},pause(){clearInterval(this._timer);return this;},resume(){this.startTimer();return this;},finish(){this.percent=this.reversed?0:100;this.hide();return this;},hide(){this.clear();this._hide=setTimeout(()=>{this.show=false;this.$nextTick(()=>{this.percent=0;this.reversed=false;});},500);return this;},fail(error){this.canSucceed=false;return this;},startTimer(){if(!this.show){this.show=true;}if(typeof this._cut==='undefined'){this._cut=10000/Math.floor(this.duration);}this._timer=setInterval(()=>{/**
         * When reversing direction skip one timers
         * so 0, 100 are displayed for two iterations
         * also disable css width transitioning
         * which otherwise interferes and shows
         * a jojo effect
         */if(this.skipTimerCount>0){this.skipTimerCount--;return;}if(this.reversed){this.decrease(this._cut);}else{this.increase(this._cut);}if(this.continuous){if(this.percent>=100){this.skipTimerCount=1;this.reversed=!this.reversed;}else if(this.percent<=0){this.skipTimerCount=1;this.reversed=!this.reversed;}}},100);}},render(h){let el=h(false);if(this.show){el=h('div',{staticClass:'nuxt-progress',class:{'nuxt-progress-notransition':this.skipTimerCount>0,'nuxt-progress-failed':!this.canSucceed},style:{width:this.percent+'%',left:this.left}});}return el;}});
// CONCATENATED MODULE: ./.nuxt/components/nuxt-loading.vue?vue&type=script&lang=js
 /* harmony default export */ var components_nuxt_loadingvue_type_script_lang_js = (nuxt_loadingvue_type_script_lang_js); 
// CONCATENATED MODULE: ./.nuxt/components/nuxt-loading.vue
var nuxt_loading_render, nuxt_loading_staticRenderFns


function nuxt_loading_injectStyles (context) {
  
  var style0 = __webpack_require__(24)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var nuxt_loading_component = Object(componentNormalizer["a" /* default */])(
  components_nuxt_loadingvue_type_script_lang_js,
  nuxt_loading_render,
  nuxt_loading_staticRenderFns,
  false,
  nuxt_loading_injectStyles,
  null,
  "0b5792d6"
  
)

/* harmony default export */ var nuxt_loading = (nuxt_loading_component.exports);
// EXTERNAL MODULE: ./assets/scss/style.scss
var style = __webpack_require__(25);

// EXTERNAL MODULE: ./assets/css/animation.css
var animation = __webpack_require__(26);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./layouts/default.vue?vue&type=template&id=4a1a6aac
var defaultvue_type_template_id_4a1a6aac_render=function render(){var _vm=this,_c=_vm._self._c;return _c('div',[_c('Nuxt'),_vm._ssrNode(" "),_c('client-only',[_c('notifications',{attrs:{"position":"bottom left","classes":"vue-notification success"}})],1),_vm._ssrNode(" <button"+_vm._ssrClass("scroll-top",{'show':_vm.isVisible})+"><i class=\"fa fa-angle-double-up\"></i></button>")],2);};var defaultvue_type_template_id_4a1a6aac_staticRenderFns=[];
// CONCATENATED MODULE: ./layouts/default.vue?vue&type=template&id=4a1a6aac

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./layouts/default.vue?vue&type=script&lang=js
/* harmony default export */ var defaultvue_type_script_lang_js = ({name:"default",data(){return{isVisible:false};},methods:{scrollToTop(){window.scroll({top:0,behavior:"smooth"});}},mounted(){window.addEventListener("scroll",()=>{let scroll=window.scrollY;if(scroll>=500){this.isVisible=true;}else{this.isVisible=false;}});}});
// CONCATENATED MODULE: ./layouts/default.vue?vue&type=script&lang=js
 /* harmony default export */ var layouts_defaultvue_type_script_lang_js = (defaultvue_type_script_lang_js); 
// CONCATENATED MODULE: ./layouts/default.vue





/* normalize component */

var default_component = Object(componentNormalizer["a" /* default */])(
  layouts_defaultvue_type_script_lang_js,
  defaultvue_type_template_id_4a1a6aac_render,
  defaultvue_type_template_id_4a1a6aac_staticRenderFns,
  false,
  null,
  null,
  "da849192"
  
)

/* harmony default export */ var layouts_default = (default_component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./layouts/HomeSidebarMenu.vue?vue&type=template&id=d81b703a
var HomeSidebarMenuvue_type_template_id_d81b703a_render=function render(){var _vm=this,_c=_vm._self._c;return _c('div',{staticClass:"wrapper-five"},[_c('HomeSidebarMenu'),_vm._ssrNode(" "),_c('Nuxt'),_vm._ssrNode(" "),_c('client-only',[_c('notifications',{attrs:{"position":"bottom left","classes":"vue-notification success"}})],1),_vm._ssrNode(" <button"+_vm._ssrClass("scroll-top",{'show':_vm.isVisible})+"><i class=\"fa fa-angle-double-up\"></i></button>")],2);};var HomeSidebarMenuvue_type_template_id_d81b703a_staticRenderFns=[];
// CONCATENATED MODULE: ./layouts/HomeSidebarMenu.vue?vue&type=template&id=d81b703a

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./layouts/HomeSidebarMenu.vue?vue&type=script&lang=js
/* harmony default export */ var HomeSidebarMenuvue_type_script_lang_js = ({data(){return{isVisible:false};},methods:{scrollToTop(){window.scroll({top:0,behavior:"smooth"});}},mounted(){window.addEventListener("scroll",()=>{let scroll=window.scrollY;if(scroll>=500){this.isVisible=true;}else{this.isVisible=false;}});}});
// CONCATENATED MODULE: ./layouts/HomeSidebarMenu.vue?vue&type=script&lang=js
 /* harmony default export */ var layouts_HomeSidebarMenuvue_type_script_lang_js = (HomeSidebarMenuvue_type_script_lang_js); 
// CONCATENATED MODULE: ./layouts/HomeSidebarMenu.vue





/* normalize component */

var HomeSidebarMenu_component = Object(componentNormalizer["a" /* default */])(
  layouts_HomeSidebarMenuvue_type_script_lang_js,
  HomeSidebarMenuvue_type_template_id_d81b703a_render,
  HomeSidebarMenuvue_type_template_id_d81b703a_staticRenderFns,
  false,
  null,
  null,
  "0faf1dd2"
  
)

/* harmony default export */ var HomeSidebarMenu = (HomeSidebarMenu_component.exports);

/* nuxt-component-imports */
installComponents(HomeSidebarMenu_component, {HomeSidebarMenu: __webpack_require__(47).default})

// CONCATENATED MODULE: ./.nuxt/App.js
const layouts={"_default":sanitizeComponent(layouts_default),"_HomeSidebarMenu":sanitizeComponent(HomeSidebarMenu)};/* harmony default export */ var App = ({render(h,props){const loadingEl=h('NuxtLoading',{ref:'loading'});const layoutEl=h(this.layout||'nuxt');const templateEl=h('div',{domProps:{id:'__layout'},key:this.layoutName},[layoutEl]);const transitionEl=h('transition',{props:{name:'layout',mode:'out-in'},on:{beforeEnter(el){// Ensure to trigger scroll event after calling scrollBehavior
window.$nuxt.$nextTick(()=>{window.$nuxt.$emit('triggerScroll');});}}},[templateEl]);return h('div',{domProps:{id:'__nuxt'}},[loadingEl,transitionEl]);},data:()=>({isOnline:true,layout:null,layoutName:'',nbFetching:0}),beforeCreate(){external_vue_default.a.util.defineReactive(this,'nuxt',this.$options.nuxt);},created(){// Add this.$nuxt in child instances
this.$root.$options.$nuxt=this;if(false){}// Add $nuxt.error()
this.error=this.nuxt.error;// Add $nuxt.context
this.context=this.$options.context;},async mounted(){this.$loading=this.$refs.loading;if(this.isPreview){if(this.$store&&this.$store._actions.nuxtServerInit){this.$loading.start();await this.$store.dispatch('nuxtServerInit',this.context);}await this.refresh();this.$loading.finish();}},watch:{'nuxt.err':'errorChanged'},computed:{isOffline(){return!this.isOnline;},isFetching(){return this.nbFetching>0;},isPreview(){return Boolean(this.$options.previewData);}},methods:{refreshOnlineStatus(){if(false){}},async refresh(){const pages=getMatchedComponentsInstances(this.$route);if(!pages.length){return;}this.$loading.start();const promises=pages.map(async page=>{let p=[];// Old fetch
if(page.$options.fetch&&page.$options.fetch.length){p.push(promisify(page.$options.fetch,this.context));}if(page.$options.asyncData){p.push(promisify(page.$options.asyncData,this.context).then(newData=>{for(const key in newData){external_vue_default.a.set(page.$data,key,newData[key]);}}));}// Wait for asyncData & old fetch to finish
await Promise.all(p);// Cleanup refs
p=[];if(page.$fetch){p.push(page.$fetch());}// Get all component instance to call $fetch
for(const component of getChildrenComponentInstancesUsingFetch(page.$vnode.componentInstance)){p.push(component.$fetch());}return Promise.all(p);});try{await Promise.all(promises);}catch(error){this.$loading.fail(error);globalHandleError(error);this.error(error);}this.$loading.finish();},errorChanged(){if(this.nuxt.err){if(this.$loading){if(this.$loading.fail){this.$loading.fail(this.nuxt.err);}if(this.$loading.finish){this.$loading.finish();}}let errorLayout=(layouts_error.options||layouts_error).layout;if(typeof errorLayout==='function'){errorLayout=errorLayout(this.context);}this.setLayout(errorLayout);}},setLayout(layout){if(!layout||!layouts['_'+layout]){layout='default';}this.layoutName=layout;this.layout=layouts['_'+layout];return this.layout;},loadLayout(layout){if(!layout||!layouts['_'+layout]){layout='default';}return Promise.resolve(layouts['_'+layout]);},getRouterBase(){return Object(external_ufo_["withoutTrailingSlash"])(this.$router.options.base);},getRoutePath(route='/'){const base=this.getRouterBase();return Object(external_ufo_["withoutTrailingSlash"])(Object(external_ufo_["withoutBase"])(Object(external_ufo_["parsePath"])(route).pathname,base));},getStaticAssetsPath(route='/'){const{staticAssetsBase}=window.__NUXT__;return urlJoin(staticAssetsBase,this.getRoutePath(route));},async fetchStaticManifest(){return window.__NUXT_IMPORT__('manifest.js',Object(external_ufo_["normalizeURL"])(urlJoin(this.getStaticAssetsPath(),'manifest.js')));},setPagePayload(payload){this._pagePayload=payload;this._fetchCounters={};},async fetchPayload(route,prefetch){const path=Object(external_ufo_["decode"])(this.getRoutePath(route));const manifest=await this.fetchStaticManifest();if(!manifest.routes.includes(path)){if(!prefetch){this.setPagePayload(false);}throw new Error(`Route ${path} is not pre-rendered`);}const src=urlJoin(this.getStaticAssetsPath(route),'payload.js');try{const payload=await window.__NUXT_IMPORT__(path,Object(external_ufo_["normalizeURL"])(src));if(!prefetch){this.setPagePayload(payload);}return payload;}catch(err){if(!prefetch){this.setPagePayload(false);}throw err;}}},components:{NuxtLoading: nuxt_loading}});
// CONCATENATED MODULE: ./.nuxt/store.js
external_vue_default.a.use(external_vuex_default.a);let store_store={};(function updateModules(){store_store=normalizeRoot(__webpack_require__(46),'store/index.js');// If store is an exported method = classic mode (deprecated)
// Enforce store modules
store_store.modules=store_store.modules||{};// If the environment supports hot reloading...
})();// createStore
const createStore=store_store instanceof Function?store_store:()=>{return new external_vuex_default.a.Store(Object.assign({strict:"production"!=='production'},store_store));};function normalizeRoot(moduleData,filePath){moduleData=moduleData.default||moduleData;if(moduleData.commit){throw new Error(`[nuxt] ${filePath} should export a method that returns a Vuex instance.`);}if(typeof moduleData!=='function'){// Avoid TypeError: setting a property that has only a getter when overwriting top level keys
moduleData=Object.assign({},moduleData);}return normalizeModule(moduleData,filePath);}function normalizeModule(moduleData,filePath){if(moduleData.state&&typeof moduleData.state!=='function'){console.warn(`'state' should be a method that returns an object in ${filePath}`);const state=Object.assign({},moduleData.state);// Avoid TypeError: setting a property that has only a getter when overwriting top level keys
moduleData=Object.assign({},moduleData,{state:()=>state});}return moduleData;}
// CONCATENATED MODULE: ./.nuxt/components/index.js
const AboutMission=()=>__webpack_require__.e(/* import() | components/about-mission */ 4).then(__webpack_require__.bind(null, 66)).then(c=>wrapFunctional(c.default||c));const BlogItem=()=>__webpack_require__.e(/* import() | components/blog-item */ 7).then(__webpack_require__.bind(null, 76)).then(c=>wrapFunctional(c.default||c));const BlogItemStyleTwo=()=>__webpack_require__.e(/* import() | components/blog-item-style-two */ 8).then(__webpack_require__.bind(null, 97)).then(c=>wrapFunctional(c.default||c));const BlogSidebar=()=>__webpack_require__.e(/* import() | components/blog-sidebar */ 9).then(__webpack_require__.bind(null, 74)).then(c=>wrapFunctional(c.default||c));const BlogWrapper=()=>__webpack_require__.e(/* import() | components/blog-wrapper */ 10).then(__webpack_require__.bind(null, 98)).then(c=>wrapFunctional(c.default||c));const BrandLogoCarousel=()=>__webpack_require__.e(/* import() | components/brand-logo-carousel */ 11).then(__webpack_require__.bind(null, 69)).then(c=>wrapFunctional(c.default||c));const Breadcrumb=()=>__webpack_require__.e(/* import() | components/breadcrumb */ 1).then(__webpack_require__.bind(null, 52)).then(c=>wrapFunctional(c.default||c));const ContactInfo=()=>__webpack_require__.e(/* import() | components/contact-info */ 12).then(__webpack_require__.bind(null, 77)).then(c=>wrapFunctional(c.default||c));const FunFact=()=>__webpack_require__.e(/* import() | components/fun-fact */ 13).then(__webpack_require__.bind(null, 67)).then(c=>wrapFunctional(c.default||c));const HeaderOffcanvasMenuWithTransparent=()=>__webpack_require__.e(/* import() | components/header-offcanvas-menu-with-transparent */ 14).then(__webpack_require__.bind(null, 99)).then(c=>wrapFunctional(c.default||c));const HeaderWithTopbar=()=>__webpack_require__.e(/* import() | components/header-with-topbar */ 16).then(__webpack_require__.bind(null, 51)).then(c=>wrapFunctional(c.default||c));const HeaderWithTopBarTwo=()=>__webpack_require__.e(/* import() | components/header-with-top-bar-two */ 15).then(__webpack_require__.bind(null, 100)).then(c=>wrapFunctional(c.default||c));const components_HomeSidebarMenu=()=>Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 47)).then(c=>wrapFunctional(c.default||c));const Login=()=>__webpack_require__.e(/* import() | components/login */ 17).then(__webpack_require__.bind(null, 70)).then(c=>wrapFunctional(c.default||c));const MiniCart=()=>Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 18)).then(c=>wrapFunctional(c.default||c));const Navigation=()=>Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 20)).then(c=>wrapFunctional(c.default||c));const NewsletterStyleTwo=()=>__webpack_require__.e(/* import() | components/newsletter-style-two */ 18).then(__webpack_require__.bind(null, 104)).then(c=>wrapFunctional(c.default||c));const OffCanvasMobileMenu=()=>Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 19)).then(c=>wrapFunctional(c.default||c));const ProductDetailsDescriptionReview=()=>__webpack_require__.e(/* import() | components/product-details-description-review */ 19).then(__webpack_require__.bind(null, 60)).then(c=>wrapFunctional(c.default||c));const QuickView=()=>__webpack_require__.e(/* import() | components/quick-view */ 24).then(__webpack_require__.bind(null, 56)).then(c=>wrapFunctional(c.default||c));const Register=()=>__webpack_require__.e(/* import() | components/register */ 25).then(__webpack_require__.bind(null, 78)).then(c=>wrapFunctional(c.default||c));const ResponsiveMobileMenu=()=>Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 48)).then(c=>wrapFunctional(c.default||c));const SectionTitleWithSubTitle=()=>__webpack_require__.e(/* import() | components/section-title-with-sub-title */ 26).then(__webpack_require__.bind(null, 57)).then(c=>wrapFunctional(c.default||c));const ShopSidebar=()=>__webpack_require__.e(/* import() | components/shop-sidebar */ 27).then(__webpack_require__.bind(null, 71)).then(c=>wrapFunctional(c.default||c));const TeamMembers=()=>__webpack_require__.e(/* import() | components/team-members */ 28).then(__webpack_require__.bind(null, 68)).then(c=>wrapFunctional(c.default||c));const TestimonialOne=()=>__webpack_require__.e(/* import() | components/testimonial-one */ 29).then(__webpack_require__.bind(null, 101)).then(c=>wrapFunctional(c.default||c));const TheFooter=()=>__webpack_require__.e(/* import() | components/the-footer */ 30).then(__webpack_require__.bind(null, 50)).then(c=>wrapFunctional(c.default||c));const TheHeader=()=>__webpack_require__.e(/* import() | components/the-header */ 31).then(__webpack_require__.bind(null, 59)).then(c=>wrapFunctional(c.default||c));const WelcomeMessage=()=>__webpack_require__.e(/* import() | components/welcome-message */ 32).then(__webpack_require__.bind(null, 64)).then(c=>wrapFunctional(c.default||c));const BannerItem=()=>__webpack_require__.e(/* import() | components/banner-item */ 5).then(__webpack_require__.bind(null, 58)).then(c=>wrapFunctional(c.default||c));const BannerStyleOne=()=>__webpack_require__.e(/* import() | components/banner-style-one */ 6).then(__webpack_require__.bind(null, 65)).then(c=>wrapFunctional(c.default||c));const HeroSlider=()=>__webpack_require__.e(/* import() | components/hero-slider */ 2).then(__webpack_require__.bind(null, 72)).then(c=>wrapFunctional(c.default||c));const ProductDetailsWrapper=()=>__webpack_require__.e(/* import() | components/product-details-wrapper */ 20).then(__webpack_require__.bind(null, 75)).then(c=>wrapFunctional(c.default||c));const ProductGridItem=()=>__webpack_require__.e(/* import() | components/product-grid-item */ 21).then(__webpack_require__.bind(null, 55)).then(c=>wrapFunctional(c.default||c));const ProductGridItemTwo=()=>__webpack_require__.e(/* import() | components/product-grid-item-two */ 22).then(__webpack_require__.bind(null, 102)).then(c=>wrapFunctional(c.default||c));const ProductWrapper=()=>__webpack_require__.e(/* import() | components/product-wrapper */ 23).then(__webpack_require__.bind(null, 73)).then(c=>wrapFunctional(c.default||c));const PolicyServicePolicy=()=>__webpack_require__.e(/* import() | components/policy-service-policy */ 0).then(__webpack_require__.bind(null, 103)).then(c=>wrapFunctional(c.default||c));// nuxt/nuxt.js#8607
function wrapFunctional(options){if(!options||!options.functional){return options;}const propKeys=Array.isArray(options.props)?options.props:Object.keys(options.props||{});return{render(h){const attrs={};const props={};for(const key in this.$attrs){if(propKeys.includes(key)){props[key]=this.$attrs[key];}else{attrs[key]=this.$attrs[key];}}return h(options,{on:this.$listeners,attrs,props,scopedSlots:this.$scopedSlots},this.$slots.default);}};}
// CONCATENATED MODULE: ./.nuxt/components/plugin.js
for(const name in components_namespaceObject){external_vue_default.a.component(name,components_namespaceObject[name]);external_vue_default.a.component('Lazy'+name,components_namespaceObject[name]);}
// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(4);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// EXTERNAL MODULE: external "defu"
var external_defu_ = __webpack_require__(14);
var external_defu_default = /*#__PURE__*/__webpack_require__.n(external_defu_);

// CONCATENATED MODULE: ./.nuxt/axios.js
// Axios.prototype cannot be modified
const axiosExtra={setBaseURL(baseURL){this.defaults.baseURL=baseURL;},setHeader(name,value,scopes='common'){for(const scope of Array.isArray(scopes)?scopes:[scopes]){if(!value){delete this.defaults.headers[scope][name];continue;}this.defaults.headers[scope][name]=value;}},setToken(token,type,scopes='common'){const value=!token?null:(type?type+' ':'')+token;this.setHeader('Authorization',value,scopes);},onRequest(fn){this.interceptors.request.use(config=>fn(config)||config);},onResponse(fn){this.interceptors.response.use(response=>fn(response)||response);},onRequestError(fn){this.interceptors.request.use(undefined,error=>fn(error)||Promise.reject(error));},onResponseError(fn){this.interceptors.response.use(undefined,error=>fn(error)||Promise.reject(error));},onError(fn){this.onRequestError(fn);this.onResponseError(fn);},create(options){return createAxiosInstance(external_defu_default()(options,this.defaults));}};// Request helpers ($get, $post, ...)
for(const method of['request','delete','get','head','options','post','put','patch']){axiosExtra['$'+method]=function(){return this[method].apply(this,arguments).then(res=>res&&res.data);};}const extendAxiosInstance=axios=>{for(const key in axiosExtra){axios[key]=axiosExtra[key].bind(axios);}};const createAxiosInstance=axiosOptions=>{// Create new axios instance
const axios=external_axios_default.a.create(axiosOptions);axios.CancelToken=external_axios_default.a.CancelToken;axios.isCancel=external_axios_default.a.isCancel;// Extend axios proto
extendAxiosInstance(axios);// Intercept to apply default headers
axios.onRequest(config=>{config.headers={...axios.defaults.headers.common,...config.headers};});// Setup interceptors
setupProgress(axios);return axios;};const setupProgress=axios=>{if(true){return;}// A noop loading inteterface for when $nuxt is not yet ready
const noopLoading={finish:()=>{},start:()=>{},fail:()=>{},set:()=>{}};const $loading=()=>{const $nuxt=typeof window!=='undefined'&&window['$nuxt'];return $nuxt&&$nuxt.$loading&&$nuxt.$loading.set?$nuxt.$loading:noopLoading;};let currentRequests=0;axios.onRequest(config=>{if(config&&config.progress===false){return;}currentRequests++;});axios.onResponse(response=>{if(response&&response.config&&response.config.progress===false){return;}currentRequests--;if(currentRequests<=0){currentRequests=0;$loading().finish();}});axios.onError(error=>{if(error&&error.config&&error.config.progress===false){return;}currentRequests--;if(external_axios_default.a.isCancel(error)){if(currentRequests<=0){currentRequests=0;$loading().finish();}return;}$loading().fail();$loading().finish();});const onProgress=e=>{if(!currentRequests||!e.total){return;}const progress=e.loaded*100/(e.total*currentRequests);$loading().set(Math.min(100,progress));};axios.defaults.onUploadProgress=onProgress;axios.defaults.onDownloadProgress=onProgress;};/* harmony default export */ var _nuxt_axios = ((ctx,inject)=>{// runtimeConfig
const runtimeConfig=ctx.$config&&ctx.$config.axios||{};// baseURL
const baseURL= false?undefined:runtimeConfig.baseURL||runtimeConfig.baseUrl||process.env._AXIOS_BASE_URL_||'http://localhost:3000/';// Create fresh objects for all default header scopes
// Axios creates only one which is shared across SSR requests!
// https://github.com/mzabriskie/axios/blob/master/lib/defaults.js
const headers={"common":{"Accept":"application/json, text/plain, */*"},"delete":{},"get":{},"head":{},"post":{},"put":{},"patch":{}};const axiosOptions={baseURL,headers};// Proxy SSR request headers headers
if( true&&ctx.req&&ctx.req.headers){const reqHeaders={...ctx.req.headers};for(const h of["accept","cf-connecting-ip","cf-ray","content-length","content-md5","content-type","host","x-forwarded-host","x-forwarded-port","x-forwarded-proto"]){delete reqHeaders[h];}axiosOptions.headers.common={...reqHeaders,...axiosOptions.headers.common};}if(true){// Don't accept brotli encoding because Node can't parse it
axiosOptions.headers.common['accept-encoding']='gzip, deflate';}const axios=createAxiosInstance(axiosOptions);// Inject axios to the context as $axios
ctx.$axios=axios;inject('axios',axios);});
// EXTERNAL MODULE: external "vue-awesome-swiper"
var external_vue_awesome_swiper_ = __webpack_require__(15);
var external_vue_awesome_swiper_default = /*#__PURE__*/__webpack_require__.n(external_vue_awesome_swiper_);

// EXTERNAL MODULE: ./node_modules/swiper/css/swiper.css
var swiper = __webpack_require__(44);

// CONCATENATED MODULE: ./plugins/vue-awesome-swiper.js
external_vue_default.a.use(external_vue_awesome_swiper_default.a);
// EXTERNAL MODULE: external "vue-pagination-2"
var external_vue_pagination_2_ = __webpack_require__(16);
var external_vue_pagination_2_default = /*#__PURE__*/__webpack_require__.n(external_vue_pagination_2_);

// CONCATENATED MODULE: ./plugins/vuejs-pagiante.js
external_vue_default.a.component('pagination',external_vue_pagination_2_default.a);
// EXTERNAL MODULE: external "vue-observe-visibility"
var external_vue_observe_visibility_ = __webpack_require__(17);
var external_vue_observe_visibility_default = /*#__PURE__*/__webpack_require__.n(external_vue_observe_visibility_);

// CONCATENATED MODULE: ./plugins/observe-visibility.js
external_vue_default.a.use(external_vue_observe_visibility_default.a);
// EXTERNAL MODULE: ./.nuxt/empty.js
var _nuxt_empty = __webpack_require__(5);

// CONCATENATED MODULE: ./.nuxt/index.js
/* Plugins */// Source: .\\components\\plugin.js (mode: 'all')
// Source: .\\axios.js (mode: 'all')
// Source: ..\\plugins\\vue-awesome-swiper.js (mode: 'all')
// Source: ..\\plugins\\vuejs-pagiante.js (mode: 'all')
// Source: ..\\plugins\\observe-visibility.js (mode: 'all')
// Source: ..\\plugins\\persistedState.client.js (mode: 'client')
// Source: ..\\plugins\\bootstrap.js (mode: 'client')
// Source: ..\\plugins\\vue-js-modal (mode: 'client')
// Source: ..\\plugins\\notifications-client.js (mode: 'client')
// Component: <ClientOnly>
external_vue_default.a.component(external_vue_client_only_default.a.name,external_vue_client_only_default.a);// TODO: Remove in Nuxt 3: <NoSsr>
external_vue_default.a.component(external_vue_no_ssr_default.a.name,{...external_vue_no_ssr_default.a,render(h,ctx){if(false){}return external_vue_no_ssr_default.a.render(h,ctx);}});// Component: <NuxtChild>
external_vue_default.a.component(nuxt_child.name,nuxt_child);external_vue_default.a.component('NChild',nuxt_child);// Component NuxtLink is imported in server.js or client.js
// Component: <Nuxt>
external_vue_default.a.component(components_nuxt.name,components_nuxt);Object.defineProperty(external_vue_default.a.prototype,'$nuxt',{get(){const globalNuxt=this.$root?this.$root.$options.$nuxt:null;if(false){}return globalNuxt;},configurable:true});external_vue_default.a.use(external_vue_meta_default.a,{"keyName":"head","attribute":"data-n-head","ssrAttribute":"data-n-head-ssr","tagIDKeyName":"hid"});const defaultTransition={"name":"page","mode":"out-in","appear":false,"appearClass":"appear","appearActiveClass":"appear-active","appearToClass":"appear-to"};const originalRegisterModule=external_vuex_default.a.Store.prototype.registerModule;function registerModule(path,rawModule,options={}){const preserveState= false&&(false);return originalRegisterModule.call(this,path,rawModule,{preserveState,...options});}async function createApp(ssrContext,config={}){const store=createStore(ssrContext);const router=await createRouter(ssrContext,config,{store});// Add this.$router into store actions/mutations
store.$router=router;// Fix SSR caveat https://github.com/nuxt/nuxt.js/issues/3757#issuecomment-414689141
store.registerModule=registerModule;// Create Root instance
// here we inject the router and store to all child components,
// making them available everywhere as `this.$router` and `this.$store`.
const app={head:{"title":"Fancy - Online shopping","titleTemplate":"Fancy | %s","meta":[{"charset":"utf-8"},{"name":"viewport","content":"width=device-width, initial-scale=1"},{"hid":"description","name":"description","content":""}],"link":[{"rel":"icon","type":"image\u002Fx-icon","href":"\u002Ffavicon.ico"}],"style":[],"script":[]},store,router,nuxt:{defaultTransition,transitions:[defaultTransition],setTransitions(transitions){if(!Array.isArray(transitions)){transitions=[transitions];}transitions=transitions.map(transition=>{if(!transition){transition=defaultTransition;}else if(typeof transition==='string'){transition=Object.assign({},defaultTransition,{name:transition});}else{transition=Object.assign({},defaultTransition,transition);}return transition;});this.$options.nuxt.transitions=transitions;return transitions;},err:null,dateErr:null,error(err){err=err||null;app.context._errored=Boolean(err);err=err?normalizeError(err):null;let nuxt=app.nuxt;// to work with @vue/composition-api, see https://github.com/nuxt/nuxt.js/issues/6517#issuecomment-573280207
if(this){nuxt=this.nuxt||this.$options.nuxt;}nuxt.dateErr=Date.now();nuxt.err=err;// Used in src/server.js
if(ssrContext){ssrContext.nuxt.error=err;}return err;}},...App};// Make app available into store via this.app
store.app=app;const next=ssrContext?ssrContext.next:location=>app.router.push(location);// Resolve route
let route;if(ssrContext){route=router.resolve(ssrContext.url).route;}else{const path=getLocation(router.options.base,router.options.mode);route=router.resolve(path).route;}// Set context to app.context
await setContext(app,{store,route,next,error:app.nuxt.error.bind(app),payload:ssrContext?ssrContext.payload:undefined,req:ssrContext?ssrContext.req:undefined,res:ssrContext?ssrContext.res:undefined,beforeRenderFns:ssrContext?ssrContext.beforeRenderFns:undefined,beforeSerializeFns:ssrContext?ssrContext.beforeSerializeFns:undefined,ssrContext});function inject(key,value){if(!key){throw new Error('inject(key, value) has no key provided');}if(value===undefined){throw new Error(`inject('${key}', value) has no value provided`);}key='$'+key;// Add into app
app[key]=value;// Add into context
if(!app.context[key]){app.context[key]=value;}// Add into store
store[key]=app[key];// Check if plugin not already installed
const installKey='__nuxt_'+key+'_installed__';if(external_vue_default.a[installKey]){return;}external_vue_default.a[installKey]=true;// Call Vue.use() to install the plugin into vm
external_vue_default.a.use(()=>{if(!Object.prototype.hasOwnProperty.call(external_vue_default.a.prototype,key)){Object.defineProperty(external_vue_default.a.prototype,key,{get(){return this.$root.$options[key];}});}});}// Inject runtime config as $config
inject('config',config);if(false){}// Add enablePreview(previewData = {}) in context for plugins
if(false){}// Plugin execution
if(typeof /* Cannot get final name for export "default" in "./.nuxt/components/plugin.js" (known exports: , known reexports: ) */ undefined==='function'){await /* Cannot get final name for export "default" in "./.nuxt/components/plugin.js" (known exports: , known reexports: ) */ undefined(app.context,inject);}if(typeof _nuxt_axios==='function'){await _nuxt_axios(app.context,inject);}if(typeof /* Cannot get final name for export "default" in "./plugins/vue-awesome-swiper.js" (known exports: , known reexports: ) */ undefined==='function'){await /* Cannot get final name for export "default" in "./plugins/vue-awesome-swiper.js" (known exports: , known reexports: ) */ undefined(app.context,inject);}if(typeof /* Cannot get final name for export "default" in "./plugins/vuejs-pagiante.js" (known exports: , known reexports: ) */ undefined==='function'){await /* Cannot get final name for export "default" in "./plugins/vuejs-pagiante.js" (known exports: , known reexports: ) */ undefined(app.context,inject);}if(typeof /* Cannot get final name for export "default" in "./plugins/observe-visibility.js" (known exports: , known reexports: ) */ undefined==='function'){await /* Cannot get final name for export "default" in "./plugins/observe-visibility.js" (known exports: , known reexports: ) */ undefined(app.context,inject);}if(false){}if(false){}if(false){}if(false){}// Lock enablePreview in context
if(false){}// Wait for async component to be resolved first
await new Promise((resolve,reject)=>{// Ignore 404s rather than blindly replacing URL in browser
if(false){}router.replace(app.context.route.fullPath,resolve,err=>{// https://github.com/vuejs/vue-router/blob/v3.4.3/src/util/errors.js
if(!err._isRouter)return reject(err);if(err.type!==2/* NavigationFailureType.redirected */)return resolve();// navigated to a different route in router guard
const unregister=router.afterEach(async(to,from)=>{if( true&&ssrContext&&ssrContext.url){ssrContext.url=to.fullPath;}app.context.route=await getRouteData(to);app.context.params=to.params||{};app.context.query=to.query||{};unregister();resolve();});});});return{store,app,router};}
// CONCATENATED MODULE: ./.nuxt/components/nuxt-link.server.js
/* harmony default export */ var nuxt_link_server = ({name:'NuxtLink',extends:external_vue_default.a.component('RouterLink'),props:{prefetch:{type:Boolean,default:true},noPrefetch:{type:Boolean,default:false}}});
// CONCATENATED MODULE: ./.nuxt/server.js
// should be included after ./index.js
// Update serverPrefetch strategy
external_vue_default.a.config.optionMergeStrategies.serverPrefetch=external_vue_default.a.config.optionMergeStrategies.created;// Fetch mixin
if(!external_vue_default.a.__nuxt__fetch__mixin__){external_vue_default.a.mixin(fetch_server);external_vue_default.a.__nuxt__fetch__mixin__=true;}// Component: <NuxtLink>
external_vue_default.a.component(nuxt_link_server.name,nuxt_link_server);external_vue_default.a.component('NLink',nuxt_link_server);if(!global.fetch){global.fetch=external_node_fetch_native_default.a;}const noopApp=()=>new external_vue_default.a({render:h=>h('div',{domProps:{id:'__nuxt'}})});const createNext=ssrContext=>opts=>{// If static target, render on client-side
ssrContext.redirected=opts;if(ssrContext.target==='static'||!ssrContext.res){ssrContext.nuxt.serverRendered=false;return;}let fullPath=Object(external_ufo_["withQuery"])(opts.path,opts.query);const $config=ssrContext.nuxt.config||{};const routerBase=$config._app&&$config._app.basePath||'/';if(!fullPath.startsWith('http')&&routerBase!=='/'&&!fullPath.startsWith(routerBase)){fullPath=Object(external_ufo_["joinURL"])(routerBase,fullPath);}// Avoid loop redirect
if(decodeURI(fullPath)===decodeURI(ssrContext.url)){ssrContext.redirected=false;return;}ssrContext.res.writeHead(opts.status,{Location:Object(external_ufo_["normalizeURL"])(fullPath)});ssrContext.res.end();};// This exported function will be called by `bundleRenderer`.
// This is where we perform data-prefetching to determine the
// state of our application before actually rendering it.
// Since data fetching is async, this function is expected to
// return a Promise that resolves to the app instance.
/* harmony default export */ var server = __webpack_exports__["default"] = (async ssrContext=>{// Create ssrContext.next for simulate next() of beforeEach() when wanted to redirect
ssrContext.redirected=false;ssrContext.next=createNext(ssrContext);// Used for beforeNuxtRender({ Components, nuxtState })
ssrContext.beforeRenderFns=[];// for beforeSerialize(nuxtState)
ssrContext.beforeSerializeFns=[];// Nuxt object (window.{{globals.context}}, defaults to window.__NUXT__)
ssrContext.nuxt={layout:'default',data:[],fetch:{},error:null,state:null,serverRendered:true,routePath:''};ssrContext.fetchCounters={};// Remove query from url is static target
if(ssrContext.url){ssrContext.url=ssrContext.url.split('?')[0];}// Public runtime config
ssrContext.nuxt.config=ssrContext.runtimeConfig.public;if(ssrContext.nuxt.config._app){__webpack_require__.p=Object(external_ufo_["joinURL"])(ssrContext.nuxt.config._app.cdnURL,ssrContext.nuxt.config._app.assetsPath);}// Create the app definition and the instance (created for each request)
const{app,router,store}=await createApp(ssrContext,ssrContext.runtimeConfig.private);const _app=new external_vue_default.a(app);// Add ssr route path to nuxt context so we can account for page navigation between ssr and csr
ssrContext.nuxt.routePath=app.context.route.path;// Add meta infos (used in renderer.js)
ssrContext.meta=_app.$meta();// Keep asyncData for each matched component in ssrContext (used in app/utils.js via this.$ssrContext)
ssrContext.asyncData={};const beforeRender=async()=>{// Call beforeNuxtRender() methods
await Promise.all(ssrContext.beforeRenderFns.map(fn=>promisify(fn,{Components,nuxtState:ssrContext.nuxt})));ssrContext.rendered=()=>{// Call beforeSerialize() hooks
ssrContext.beforeSerializeFns.forEach(fn=>fn(ssrContext.nuxt));// Add the state from the vuex store
ssrContext.nuxt.state=store.state;// Stop recording store mutations
// unsetMutationObserver is only set after all router middleware are evaluated
if(ssrContext.unsetMutationObserver){ssrContext.unsetMutationObserver();}};};const renderErrorPage=async()=>{// Don't server-render the page in static target
if(ssrContext.target==='static'){ssrContext.nuxt.serverRendered=false;}// Load layout for error page
const layout=(layouts_error.options||layouts_error).layout;const errLayout=typeof layout==='function'?layout.call(layouts_error,app.context):layout;ssrContext.nuxt.layout=errLayout||'default';await _app.loadLayout(errLayout);_app.setLayout(errLayout);await beforeRender();return _app;};const render404Page=()=>{app.context.error({statusCode:404,path:ssrContext.url,message:'This page could not be found'});return renderErrorPage();};// Components are already resolved by setContext -> getRouteData (app/utils.js)
const Components=getMatchedComponents(app.context.route);/*
  ** Dispatch store nuxtServerInit
  */if(store._actions&&store._actions.nuxtServerInit){try{await store.dispatch('nuxtServerInit',app.context);}catch(err){console.debug('Error occurred when calling nuxtServerInit: ',err.message);throw err;}}// ...If there is a redirect or an error, stop the process
if(ssrContext.redirected){return noopApp();}if(ssrContext.nuxt.error){return renderErrorPage();}/*
  ** Call global middleware (nuxt.config.js)
  */let midd=[];midd=midd.map(name=>{if(typeof name==='function'){return name;}if(typeof _nuxt_middleware[name]!=='function'){app.context.error({statusCode:500,message:'Unknown middleware '+name});}return _nuxt_middleware[name];});await middlewareSeries(midd,app.context);// ...If there is a redirect or an error, stop the process
if(ssrContext.redirected){return noopApp();}if(ssrContext.nuxt.error){return renderErrorPage();}// Record store mutations for full-static after nuxtServerInit and Middleware
ssrContext.nuxt.mutations=[];ssrContext.unsetMutationObserver=store.subscribe(m=>{ssrContext.nuxt.mutations.push([m.type,m.payload]);});/*
  ** Set layout
  */let layout=Components.length?Components[0].options.layout:layouts_error.layout;if(typeof layout==='function'){layout=layout(app.context);}await _app.loadLayout(layout);if(ssrContext.nuxt.error){return renderErrorPage();}layout=_app.setLayout(layout);ssrContext.nuxt.layout=_app.layoutName;/*
  ** Call middleware (layout + pages)
  */midd=[];layout=sanitizeComponent(layout);if(layout.options.middleware){midd=midd.concat(layout.options.middleware);}Components.forEach(Component=>{if(Component.options.middleware){midd=midd.concat(Component.options.middleware);}});midd=midd.map(name=>{if(typeof name==='function'){return name;}if(typeof _nuxt_middleware[name]!=='function'){app.context.error({statusCode:500,message:'Unknown middleware '+name});}return _nuxt_middleware[name];});await middlewareSeries(midd,app.context);// ...If there is a redirect or an error, stop the process
if(ssrContext.redirected){return noopApp();}if(ssrContext.nuxt.error){return renderErrorPage();}/*
  ** Call .validate()
  */let isValid=true;try{for(const Component of Components){if(typeof Component.options.validate!=='function'){continue;}isValid=await Component.options.validate(app.context);if(!isValid){break;}}}catch(validationError){// ...If .validate() threw an error
app.context.error({statusCode:validationError.statusCode||'500',message:validationError.message});return renderErrorPage();}// ...If .validate() returned false
if(!isValid){// Render a 404 error page
return render404Page();}// If no Components found, returns 404
if(!Components.length){return render404Page();}// Call asyncData & fetch hooks on components matched by the route.
const asyncDatas=await Promise.all(Components.map(Component=>{const promises=[];// Call asyncData(context)
if(Component.options.asyncData&&typeof Component.options.asyncData==='function'){const promise=promisify(Component.options.asyncData,app.context).then(asyncDataResult=>{ssrContext.asyncData[Component.cid]=asyncDataResult;applyAsyncData(Component);return asyncDataResult;});promises.push(promise);}else{promises.push(null);}// Call fetch(context)
if(Component.options.fetch&&Component.options.fetch.length){promises.push(Component.options.fetch(app.context));}else{promises.push(null);}return Promise.all(promises);}));// datas are the first row of each
ssrContext.nuxt.data=asyncDatas.map(r=>r[0]||{});// ...If there is a redirect or an error, stop the process
if(ssrContext.redirected){return noopApp();}if(ssrContext.nuxt.error){return renderErrorPage();}// Call beforeNuxtRender methods & add store state
await beforeRender();return _app;});

/***/ }),
/* 46 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "state", function() { return /* binding */ state; });
__webpack_require__.d(__webpack_exports__, "getters", function() { return /* binding */ getters; });
__webpack_require__.d(__webpack_exports__, "mutations", function() { return /* binding */ mutations; });
__webpack_require__.d(__webpack_exports__, "actions", function() { return /* binding */ actions; });

// EXTERNAL MODULE: external "core-js/modules/esnext.set.add-all.js"
var esnext_set_add_all_js_ = __webpack_require__(28);

// EXTERNAL MODULE: external "core-js/modules/esnext.set.delete-all.js"
var esnext_set_delete_all_js_ = __webpack_require__(29);

// EXTERNAL MODULE: external "core-js/modules/esnext.set.difference.js"
var esnext_set_difference_js_ = __webpack_require__(30);

// EXTERNAL MODULE: external "core-js/modules/esnext.set.every.js"
var esnext_set_every_js_ = __webpack_require__(31);

// EXTERNAL MODULE: external "core-js/modules/esnext.set.filter.js"
var esnext_set_filter_js_ = __webpack_require__(32);

// EXTERNAL MODULE: external "core-js/modules/esnext.set.find.js"
var esnext_set_find_js_ = __webpack_require__(33);

// EXTERNAL MODULE: external "core-js/modules/esnext.set.intersection.js"
var esnext_set_intersection_js_ = __webpack_require__(34);

// EXTERNAL MODULE: external "core-js/modules/esnext.set.is-disjoint-from.js"
var esnext_set_is_disjoint_from_js_ = __webpack_require__(35);

// EXTERNAL MODULE: external "core-js/modules/esnext.set.is-subset-of.js"
var esnext_set_is_subset_of_js_ = __webpack_require__(36);

// EXTERNAL MODULE: external "core-js/modules/esnext.set.is-superset-of.js"
var esnext_set_is_superset_of_js_ = __webpack_require__(37);

// EXTERNAL MODULE: external "core-js/modules/esnext.set.join.js"
var esnext_set_join_js_ = __webpack_require__(38);

// EXTERNAL MODULE: external "core-js/modules/esnext.set.map.js"
var esnext_set_map_js_ = __webpack_require__(39);

// EXTERNAL MODULE: external "core-js/modules/esnext.set.reduce.js"
var esnext_set_reduce_js_ = __webpack_require__(40);

// EXTERNAL MODULE: external "core-js/modules/esnext.set.some.js"
var esnext_set_some_js_ = __webpack_require__(41);

// EXTERNAL MODULE: external "core-js/modules/esnext.set.symmetric-difference.js"
var esnext_set_symmetric_difference_js_ = __webpack_require__(42);

// EXTERNAL MODULE: external "core-js/modules/esnext.set.union.js"
var esnext_set_union_js_ = __webpack_require__(43);

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(0);
var external_vue_default = /*#__PURE__*/__webpack_require__.n(external_vue_);

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(3);
var external_vuex_default = /*#__PURE__*/__webpack_require__.n(external_vuex_);

// CONCATENATED MODULE: ./api/const.js
const API_URL="https://api.cheparo.com/";// export const API_URL = "http://localhost:8000/";
// CONCATENATED MODULE: ./api/categories.js
async function fetchAllCategories(){return await fetch(API_URL+"categories").then(async res=>await res.json());}async function fetchSubCategoriesById(id){return await fetch(`${API_URL}sub_categories?category_id=${id}`).then(async res=>await res.json());}async function fetchCategoriesWithSubcategories(){var categoryWithSubCategories=[];const{categories}=await fetchAllCategories();for(var category of categories){const subCategories=await fetchSubCategoriesById(category.id).then(response=>{const{sub_categories}=response;return sub_categories;}).catch(err=>[]);categoryWithSubCategories.push({...category,sub_categories:subCategories});}console.log(categoryWithSubCategories);return categoryWithSubCategories;}
// CONCATENATED MODULE: ./api/products.js
async function fetchTabbedProducts(sub_category_id){return await fetch(API_URL+"products/all/?sub_category_id="+sub_category_id).then(async res=>await res.json());}async function fetchProductById(id){return await fetch(API_URL+"products/product/"+id).then(async res=>await res.json()).catch(err=>{return{product:{error:err}};});}
// CONCATENATED MODULE: ./api/sliders.js
async function fetchSliders(){return await fetch(API_URL+"slider/sliders").then(async res=>await res.json());}
// CONCATENATED MODULE: ./store/index.js
external_vue_default.a.use(external_vuex_default.a);const state=()=>({products:[],product:null,sliders:[],mentabProducts:[],womentabProducts:[],selectedMenTab:1,selectedWomenTab:1,cart:[],wishlist:[],categories:[]});// your root getters
const getters={getProducts(state){return state.products;},getSelectedMenTab(state){return state.selectedMenTab;},getSelectedWomenTab(state){return state.selectedWomenTab;},getMenTabProducts(state){return state.mentabProducts;},getWomenTabProducts(state){return state.womentabProducts;},getSliders(state){return state.sliders;},getCart:state=>{return state.cart;},cartItemCount:state=>{return state.cart.length;},getWishlist:state=>{return state.wishlist;},wishlistItemCount:state=>{return state.wishlist.length;},getTotal:state=>{let total=0;state.cart.forEach(item=>{let price=item.discount?item.price-item.price*item.discount/100:item.price;total+=price*item.cartQuantity;});return total;},getNewProducts:state=>{return state.products.filter(item=>{return item.new;});},getBestProducts:state=>{return state.products.filter(item=>{return item.best;});},getSaleProducts:state=>{return state.products.filter(item=>{return item.discount;});},categoryList:state=>{return["all categories",...new Set(state.products.map(list=>list.category).flat())];},tagList:state=>{return[...new Set(state.products.map(list=>list.tag).flat())];},sizeList:state=>{return["all sizes",...new Set(state.products.map(list=>{var _list$variation;return(_list$variation=list.variation)===null||_list$variation===void 0?void 0:_list$variation.sizes;}).flat())].filter(Boolean);},colorList:state=>{return["all colors",...new Set(state.products.map(list=>{var _list$variation2;return(_list$variation2=list.variation)===null||_list$variation2===void 0?void 0:_list$variation2.color;}).flat())].filter(Boolean);}};// contains your mutations
const mutations={async SET_PRODUCT(state,product){state.product=product;},SET_MEN_TAB(state,id){state.selectedMenTab=id;},SET_WOMEN_TAB(state,id){state.selectedWomenTab=id;},SET_MEN_TAB_PRODUCTS(state,products){state.mentabProducts=products;},SET_WOMEN_TAB_PRODUCTS(state,products){state.womentabProducts=products;},SET_SLIDERS(state,sliders){state.sliders=sliders;},GET_CATEGORIES_WITH_SUBCATEGORIES(state,categs){state.categories=categs;},UPDATE_CART(state,payload){const item=state.cart.find(el=>payload.id===el.id);if(item){const price=item.discount?item.price-item.price*item.discount/100:item.price;item.cartQuantity=item.cartQuantity+payload.cartQuantity;item.total=item.cartQuantity*price;}else{const price=payload.discount?payload.price-payload.price*payload.discount/100:payload.price;state.cart.push({...payload,cartQuantity:payload.cartQuantity,total:price});}},REMOVE_PRODUCT_FROM_CART(state,product){state.cart=state.cart.filter(item=>{return product.id!==item.id;});},DECREASE_PRODUCT(state,payload){const found=state.cart.find(el=>payload.id===el.id);const price=found.discount?found.price-found.price*found.discount/100:found.price;found.cartQuantity=found.cartQuantity-payload.cartQuantity;found.total=found.cartQuantity*price;},CLEAR_CART(state){state.cart=[];},ADD_TO_WISHLIST(state,product){const item=state.wishlist.find(el=>product.id===el.id);if(item){return;}{state.wishlist.push(product);}},REMOVE_PRODUCT_FROM_WISHLIST(state,product){state.wishlist=state.wishlist.filter(item=>{return product.id!==item.id;});}};// contains your actions
const actions={async getProductById({commit},id){commit("SET_PRODUCT",null);const{product}=await fetchProductById(id);commit("SET_PRODUCT",product);},addToCartItem({commit},payload){commit("UPDATE_CART",payload);},resetCart({commit}){commit("CLEAR_CART");},async getCategoriesWithSubCategories({commit}){var _categs$0$sub_categor,_categs$1$sub_categor;const categs=await fetchCategoriesWithSubcategories();commit("GET_CATEGORIES_WITH_SUBCATEGORIES",categs);const manTab=(_categs$0$sub_categor=categs[0].sub_categories[0].id)!==null&&_categs$0$sub_categor!==void 0?_categs$0$sub_categor:11;const womanTab=(_categs$1$sub_categor=categs[1].sub_categories[0].id)!==null&&_categs$1$sub_categor!==void 0?_categs$1$sub_categor:15;const{products:manproducts}=await fetchTabbedProducts(manTab);const{products:womanproducts}=await fetchTabbedProducts(womanTab);commit("SET_WOMEN_TAB",womanTab);commit("SET_WOMEN_TAB_PRODUCTS",womanproducts);commit("SET_MEN_TAB",manTab);commit("SET_MEN_TAB_PRODUCTS",manproducts);},async getMenTabProducts({commit},sub_category_id){const{products}=await fetchTabbedProducts(sub_category_id);commit("SET_MEN_TAB_PRODUCTS",products);},async getWomenTabProducts({commit},sub_category_id){const{products}=await fetchTabbedProducts(sub_category_id);commit("SET_WOMEN_TAB_PRODUCTS",products);},async getSlidersAction({commit}){const sliders=await fetchSliders();commit("SET_SLIDERS",sliders);},async setMenSelectedTab({commit},sub_category_id){const{products}=await fetchTabbedProducts(sub_category_id);commit("SET_MEN_TAB",sub_category_id);commit("SET_SMEN_TAB_PRODUCTS",products);},async setWomenSelectedTab({commit},sub_category_id){const{products}=await fetchTabbedProducts(sub_category_id);commit("SET_WOMEN_TAB",sub_category_id);commit("SET_WOMEN_TAB_PRODUCTS",products);},removeProductFromCart({commit},product){commit("REMOVE_PRODUCT_FROM_CART",product);},decreaseProduct({commit},product){commit("DECREASE_PRODUCT",product);},addToWishlist({commit},payload){commit("ADD_TO_WISHLIST",payload);},addToCompare({commit},payload){commit("ADD_TO_COMPARE",payload);},removeProductFromWishlist({commit},product){commit("REMOVE_PRODUCT_FROM_WISHLIST",product);},removeFromCompare({commit},product){commit("REMOVE_FROM_COMPARE",product);}};

/***/ }),
/* 47 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/HomeSidebarMenu.vue?vue&type=template&id=6dc26b98
var render=function render(){var _vm=this,_c=_vm._self._c;return _c('div',[_vm._ssrNode("<div class=\"home-sidebar-left\">","</div>",[_vm._ssrNode("<div class=\"logo\">","</div>",[_c('n-link',{attrs:{"to":"/"}},[_c('img',{attrs:{"src":"/img/logo/logo.png","alt":"logo"}})])],1),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"header-right-wrap\">","</div>",[_vm._ssrNode("<div class=\"same-style header-search d-none d-lg-block\"><button class=\"search-active\"><i class=\"pe-7s-search\"></i></button> <div"+_vm._ssrClass("search-content",{active:_vm.isOpenSearch})+"><form><input type=\"text\" placeholder=\"Search\"> <button class=\"button-search\"><i class=\"pe-7s-search\"></i></button></form></div></div> "),_vm._ssrNode("<div class=\"same-style account-setting d-none d-lg-block\">","</div>",[_vm._ssrNode("<button class=\"account-setting-active\"><i class=\"pe-7s-user-female\"></i></button> "),_vm._ssrNode("<div"+_vm._ssrClass("account-dropdown",{active:_vm.isOpenAccountSettings})+">","</div>",[_vm._ssrNode("<ul>","</ul>",[_vm._ssrNode("<li>","</li>",[_c('n-link',{attrs:{"to":"/login-register"}},[_vm._v("Login")])],1)])])],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"same-style header-wishlist\">","</div>",[_c('n-link',{attrs:{"to":"/wishlist"}},[_c('i',{staticClass:"pe-7s-like"})]),_vm._ssrNode(" <span class=\"count-style\">"+_vm._ssrEscape(_vm._s(_vm.wishlistItemCount))+"</span>")],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"same-style cart-wrap\">","</div>",[_vm._ssrNode("<button class=\"icon-cart\"><i class=\"pe-7s-shopbag\"></i> <span class=\"count-style\">"+_vm._ssrEscape(_vm._s(_vm.cartItemCount))+"</span></button> "),_c('MiniCart',{attrs:{"miniCart":{visible:_vm.openCart}},on:{"minicartClose":function($event){_vm.openCart=!_vm.openCart;}}})],2),_vm._ssrNode(" <div class=\"same-style mobile-menu-toggler d-block d-lg-none\"><button class=\"mobile-aside-button\"><i class=\"pe-7s-menu\"></i></button></div>")],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"sidebar-menu d-none d-lg-block\">","</div>",[_vm._ssrNode("<nav>","</nav>",[_c('Navigation')],1)]),_vm._ssrNode(" <div class=\"sidebar-copyright d-none d-lg-block\"><p>©2022 <a href=\"#\" target=\"_blank\">Fancy</a>.All Rights Reserved.</p></div>")],2),_vm._ssrNode(" "),_c('OffCanvasMobileMenu',{class:{'show-mobile-menu':_vm.navOpen},on:{"toggleAsideMenu":function($event){_vm.navOpen=!_vm.navOpen;}}})],2);};var staticRenderFns=[];
// CONCATENATED MODULE: ./components/HomeSidebarMenu.vue?vue&type=template&id=6dc26b98

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/HomeSidebarMenu.vue?vue&type=script&lang=js
/* harmony default export */ var HomeSidebarMenuvue_type_script_lang_js = ({components:{Navigation:()=>Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 20)),MiniCart:()=>Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 18))},computed:{cartItemCount(){return this.$store.getters.cartItemCount;},wishlistItemCount(){return this.$store.getters.wishlistItemCount;}},data(){return{isOpenSearch:false,isOpenAccountSettings:false,openCart:false,navOpen:false};}});
// CONCATENATED MODULE: ./components/HomeSidebarMenu.vue?vue&type=script&lang=js
 /* harmony default export */ var components_HomeSidebarMenuvue_type_script_lang_js = (HomeSidebarMenuvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/HomeSidebarMenu.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_HomeSidebarMenuvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "0f434246"
  
)

/* harmony default export */ var HomeSidebarMenu = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {MiniCart: __webpack_require__(18).default,Navigation: __webpack_require__(20).default,OffCanvasMobileMenu: __webpack_require__(19).default})


/***/ }),
/* 48 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/ResponsiveMobileMenu.vue?vue&type=template&id=3f116dd1&scoped=true
var render=function render(){var _vm=this,_c=_vm._self._c;return _c('ul',{staticClass:"mobile-menu"},[_vm._l(_vm.$store.state.categories,function(category,index){return _vm._ssrNode("<li class=\"menus\" data-v-3f116dd1>","</li>",[_c('n-link',{attrs:{"to":`/shop?category=${category.id}&sub_category=&search=&sort=`}},[_vm._v("\n      "+_vm._s(category.category_name)+"\n    ")]),_vm._ssrNode(" "+(category.sub_categories?"<span class=\"submenu-toggle\" data-v-3f116dd1><i class=\"pe-7s-angle-down\" data-v-3f116dd1></i></span>":"<!---->")+" "),category.sub_categories?_vm._ssrNode("<ul class=\"submenu\" data-v-3f116dd1>","</ul>",_vm._l(category.sub_categories,function(subcategory,i){return _vm._ssrNode("<li data-v-3f116dd1>","</li>",[_c('n-link',{attrs:{"to":`/shop?category=&sub_category=${subcategory.id}&search=&sort=`}},[_vm._v("\n          "+_vm._s(subcategory.sub_category_name)+"\n        ")])],1);}),0):_vm._e()],2);}),_vm._ssrNode(" "),_vm._ssrNode("<li class=\"menus\" data-v-3f116dd1>","</li>",[!_vm.logginned?_c('n-link',{attrs:{"to":`login-register`}},[_vm._v("\n      Login\n    ")]):_vm._e(),_vm._ssrNode(" "),_vm.logginned?_c('n-link',{attrs:{"to":`my-account`}},[_vm._v("\n      Profile\n    ")]):_vm._e()],2)],2);};var staticRenderFns=[];
// CONCATENATED MODULE: ./components/ResponsiveMobileMenu.vue?vue&type=template&id=3f116dd1&scoped=true

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/ResponsiveMobileMenu.vue?vue&type=script&lang=js
/* harmony default export */ var ResponsiveMobileMenuvue_type_script_lang_js = ({data(){return{logginned:false,menus:[{url:"/",title:"Home",submenu:[{url:"",title:"Home Group 01",submenu:[{url:"/",title:"Home Fashion One"}]},{url:"",title:"Home Group 02",submenu:[{url:"/home-fashion-four",title:"Home Fashion Four"},{url:"/home-fashion-five",title:"Home Fashion Five"},{url:"/home-fashion-six",title:"Home Fashion Six"}]},{url:"",title:"Home Group 03",submenu:[{url:"/home-fashion-seven",title:"Home Fashion Seven"},{url:"/home-cosmetics",title:"Home Cosmetics"},{url:"/home-furniture",title:"Home Furniture"}]}]},{url:"/shop",title:"Shop",submenu:[{url:"",title:"shop layout",submenu:[{url:"/shop",title:"shop grid standard"},{url:"/shop-list-standard",title:"shop list standard"}]},{url:"",title:"product details",submenu:[{url:"/product/crew-ventile-coat-one",title:"product variation"},{url:"/product/product-affiliate",title:"product affiliate"},{url:"/product/women-winter-overcoat-one",title:"product simple"}]}]},{url:"",title:"Pages",submenu:[{url:"/cart",title:"Cart"},{url:"/checkout",title:"Checkout"},{url:"/wishlist",title:"Wishlist"},{url:"/about",title:"About us"},{url:"/my-account",title:"My Account"},{url:"/login-register",title:"Login / Register"},{url:"/contact",title:"Contact us"},{url:"/privacy-policy",title:"Privacy Policy"},{url:"/terms-conditions",title:"Terms & Conditions"}]},{url:"/blog",title:"Blog",submenu:[{url:"/blog",title:"blog standard"},{url:"/blog/blog-right-sidebar",title:"blog right sidebar"}]},{url:"/contact",title:"Contact"}]};},mounted(){const user=localStorage.getItem('user');if(user)this.logginned=true;let getSiblings=function(e){let siblings=[];if(!e.parentNode){return siblings;}let sibling=e.parentNode.firstChild;while(sibling){if(sibling.nodeType===1&&sibling!==e){siblings.push(sibling);}sibling=sibling.nextSibling;}return siblings;};const subMenuToggle=document.querySelectorAll(".submenu-toggle");subMenuToggle.forEach(function(btn){btn.addEventListener("click",function(){if(!this.classList.contains("active")){this.classList.add("active");this.nextElementSibling.classList.add("active");this.closest("li").classList.add("active");getSiblings(this.closest("li")).forEach(function(item){item.classList.remove("active");item.querySelectorAll("li, .submenu-toggle, .submenu").forEach(function(child){child.classList.remove("active");});});}else{this.closest("li").classList.remove("active");this.closest("li").querySelectorAll("li, .submenu-toggle, .submenu").forEach(function(child){child.classList.remove("active");});}});});}});
// CONCATENATED MODULE: ./components/ResponsiveMobileMenu.vue?vue&type=script&lang=js
 /* harmony default export */ var components_ResponsiveMobileMenuvue_type_script_lang_js = (ResponsiveMobileMenuvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/ResponsiveMobileMenu.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(27)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_ResponsiveMobileMenuvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "3f116dd1",
  "9f6f6438"
  
)

/* harmony default export */ var ResponsiveMobileMenu = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 49 */
/***/ (function(module, exports) {

module.exports = require("vue-count-to");

/***/ })
/******/ ]);
//# sourceMappingURL=server.js.map