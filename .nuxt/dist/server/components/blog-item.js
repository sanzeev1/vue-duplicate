exports.ids = [7];
exports.modules = {

/***/ 76:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/BlogItem.vue?vue&type=template&id=5eb17cca
var render=function render(){var _vm=this,_c=_vm._self._c;return _c('div',{staticClass:"blog-wrap mb-25"},[_vm._ssrNode("<div class=\"blog-img\">","</div>",[_c('n-link',{attrs:{"to":`/blog/${_vm.slugify(_vm.blog.title)}`}},[_c('img',{attrs:{"src":_vm.blog.imgSrc,"alt":_vm.blog.title}})]),_vm._ssrNode(" <span>"+_vm._ssrEscape(_vm._s(_vm.blog.category[0]))+"</span>")],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"blog-content-wrap\">","</div>",[_vm._ssrNode("<div class=\"blog-content text-center\">","</div>",[_vm._ssrNode("<h3>","</h3>",[_c('n-link',{attrs:{"to":`/blog/${_vm.slugify(_vm.blog.title)}`}},[_vm._v(_vm._s(_vm.blog.title))])],1),_vm._ssrNode(" "),_vm._ssrNode("<span>","</span>",[_vm._ssrNode("By "),_c('n-link',{attrs:{"to":""}},[_vm._v(_vm._s(_vm.blog.author))])],2)],2)])],2);};var staticRenderFns=[];
// CONCATENATED MODULE: ./components/BlogItem.vue?vue&type=template&id=5eb17cca

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/BlogItem.vue?vue&type=script&lang=js
/* harmony default export */ var BlogItemvue_type_script_lang_js = ({props:["blog"],methods:{slugify(text){return text.toString().toLowerCase().replace(/\s+/g,"-")// Replace spaces with -
.replace(/[^\w-]+/g,"")// Remove all non-word chars
.replace(/--+/g,"-")// Replace multiple - with single -
.replace(/^-+/,"")// Trim - from start of text
.replace(/-+$/,"");// Trim - from end of text
}}});
// CONCATENATED MODULE: ./components/BlogItem.vue?vue&type=script&lang=js
 /* harmony default export */ var components_BlogItemvue_type_script_lang_js = (BlogItemvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/BlogItem.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_BlogItemvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "59633c44"
  
)

/* harmony default export */ var BlogItem = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=blog-item.js.map