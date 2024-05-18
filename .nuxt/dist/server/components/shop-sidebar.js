exports.ids = [27];
exports.modules = {

/***/ 71:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/ShopSidebar.vue?vue&type=template&id=1c99b06e
var render=function render(){var _vm$$route$query$sub_,_vm$$route$query$sort,_vm$$route$query$cate,_vm$$route$query$sub_2,_vm$$route$query$sort2,_vm$$route$query$sear,_vm$$route$query$sear2,_vm$$route$query$sort3;var _vm=this,_c=_vm._self._c;return _c('form',{staticClass:"sidebar-style",class:_vm.classes,attrs:{"action":`shop?sub_category=${(_vm$$route$query$sub_=_vm.$route.query.sub_category)!==null&&_vm$$route$query$sub_!==void 0?_vm$$route$query$sub_:''}&sort=${(_vm$$route$query$sort=_vm.$route.query.sort)!==null&&_vm$$route$query$sort!==void 0?_vm$$route$query$sort:''}`}},[_vm._ssrNode("<div class=\"sidebar-widget\"><h4 class=\"pro-sidebar-title\">Search</h4> <div class=\"pro-sidebar-search mb-50 mt-25\"><div class=\"pro-sidebar-search-form\"><input type=\"hidden\" name=\"category\""+_vm._ssrAttr("value",`${(_vm$$route$query$cate=_vm.$route.query.category)!==null&&_vm$$route$query$cate!==void 0?_vm$$route$query$cate:''}`)+"> <input type=\"hidden\" name=\"sub_category\""+_vm._ssrAttr("value",`${(_vm$$route$query$sub_2=_vm.$route.query.sub_category)!==null&&_vm$$route$query$sub_2!==void 0?_vm$$route$query$sub_2:''}`)+"> <input type=\"hidden\" name=\"sort\""+_vm._ssrAttr("value",`${(_vm$$route$query$sort2=_vm.$route.query.sort)!==null&&_vm$$route$query$sort2!==void 0?_vm$$route$query$sort2:''}`)+"> <input type=\"text\" name=\"search\" placeholder=\"Search here...\""+_vm._ssrAttr("value",`${(_vm$$route$query$sear=_vm.$route.query.search)!==null&&_vm$$route$query$sear!==void 0?_vm$$route$query$sear:''}`)+"> <button><i class=\"pe-7s-search\"></i></button></div></div></div> "),_vm._ssrNode("<div class=\"sidebar-widget\">","</div>",[_vm._ssrNode("<h4 class=\"pro-sidebar-title\">Categories</h4> "),_vm._ssrNode("<ul class=\"sidebar-widget-list mt-20\">","</ul>",[_vm._ssrNode("<li class=\"sidebar-widget-list-left\">","</li>",[_c('n-link',{attrs:{"to":`shop?category=&sub_category=&search=${(_vm$$route$query$sear2=_vm.$route.query.search)!==null&&_vm$$route$query$sear2!==void 0?_vm$$route$query$sear2:''}&sort=${(_vm$$route$query$sort3=_vm.$route.query.sort)!==null&&_vm$$route$query$sort3!==void 0?_vm$$route$query$sort3:''}`}},[_c('span',{staticClass:"check-mark"}),_vm._v("\n                    All Categories\n                ")])],1),_vm._ssrNode(" "),_vm._l(_vm.$store.state.categories,function(category,index){return _vm._ssrNode("<li class=\"sidebar-widget-list-left\">","</li>",[_vm._ssrNode("<ul>","</ul>",_vm._l(category.sub_categories,function(subcategory,i){var _vm$$route$query$sear3,_vm$$route$query$sort4,_vm$$route$query$sear4,_vm$$route$query$sort5;return _vm._ssrNode("<li>","</li>",[i==0?_c('n-link',{attrs:{"to":`?category=${category.id}&sub_category=&search=${(_vm$$route$query$sear3=_vm.$route.query.search)!==null&&_vm$$route$query$sear3!==void 0?_vm$$route$query$sear3:''}&sort=${(_vm$$route$query$sort4=_vm.$route.query.sort)!==null&&_vm$$route$query$sort4!==void 0?_vm$$route$query$sort4:''}`}},[_c('span',{staticClass:"check-mark"}),_vm._v("\n                            "+_vm._s(category.category_name)+"\n                        ")]):_vm._e(),_vm._ssrNode(" "),_c('n-link',{staticStyle:{"margin-left":"15px"},attrs:{"to":`?&category=&sub_category=${subcategory.id}&search=${(_vm$$route$query$sear4=_vm.$route.query.search)!==null&&_vm$$route$query$sear4!==void 0?_vm$$route$query$sear4:''}&sort=${(_vm$$route$query$sort5=_vm.$route.query.sort)!==null&&_vm$$route$query$sort5!==void 0?_vm$$route$query$sort5:''}`}},[_c('span',{staticClass:"check-mark"}),_vm._v("\n                            "+_vm._s(subcategory.sub_category_name)+"\n                        ")])],2);}),0)]);})],2)],2)],2);};var staticRenderFns=[];
// CONCATENATED MODULE: ./components/ShopSidebar.vue?vue&type=template&id=1c99b06e

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/ShopSidebar.vue?vue&type=script&lang=js
/* harmony default export */ var ShopSidebarvue_type_script_lang_js = ({props:["classes"],computed:{categoryList(){return this.$store.getters.categoryList;},sizeList(){return this.$store.getters.sizeList;},colorList(){return this.$store.getters.colorList;},tagList(){return this.$store.getters.tagList;}},methods:{slugify(text){return text.toString().toLowerCase().replace(/\s+/g,"-")// Replace spaces with -
.replace(/[^\w-]+/g,"")// Remove all non-word chars
.replace(/--+/g,"-")// Replace multiple - with single -
.replace(/^-+/,"")// Trim - from start of text
.replace(/-+$/,"");// Trim - from end of text
}}});
// CONCATENATED MODULE: ./components/ShopSidebar.vue?vue&type=script&lang=js
 /* harmony default export */ var components_ShopSidebarvue_type_script_lang_js = (ShopSidebarvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/ShopSidebar.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_ShopSidebarvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "1cbc1532"
  
)

/* harmony default export */ var ShopSidebar = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=shop-sidebar.js.map