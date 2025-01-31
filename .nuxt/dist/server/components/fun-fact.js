exports.ids = [13];
exports.modules = {

/***/ 67:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/FunFact.vue?vue&type=template&id=35574b76
var render=function render(){var _vm=this,_c=_vm._self._c;return _c('div',{staticClass:"funfact-area bg-gray-3 pt-100 pb-70"},[_vm._ssrNode("<div class=\"container\">","</div>",[_c('div',{directives:[{name:"observe-visibility",rawName:"v-observe-visibility",value:{callback:_vm.visibilityChanged,once:true},expression:"{callback: visibilityChanged, once: true}"}],staticClass:"row"},_vm._l(_vm.funFacts,function(item,index){return _vm._ssrNode("<div class=\"col-lg-3 col-sm-6\">","</div>",[_vm.isVisible?_vm._ssrNode("<div class=\"single-count text-center mb-30\">","</div>",[_vm._ssrNode("<div class=\"count-icon\"><i"+_vm._ssrClass(null,item.icon)+"></i></div> "),_c('countTo',{attrs:{"startVal":_vm.startVal,"endVal":item.endVal,"duration":4000}}),_vm._ssrNode(" <h5 class=\"title\">"+_vm._ssrEscape(_vm._s(item.title))+"</h5>")],2):_vm._e()]);}),0)])]);};var staticRenderFns=[];
// CONCATENATED MODULE: ./components/FunFact.vue?vue&type=template&id=35574b76

// EXTERNAL MODULE: external "vue-count-to"
var external_vue_count_to_ = __webpack_require__(49);
var external_vue_count_to_default = /*#__PURE__*/__webpack_require__.n(external_vue_count_to_);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/FunFact.vue?vue&type=script&lang=js
/* harmony default export */ var FunFactvue_type_script_lang_js = ({components:{countTo: external_vue_count_to_default.a},data(){return{startVal:1,isVisible:false,funFacts:[{id:1,endVal:3600,title:"Products",icon:"pe-7s-portfolio"},{id:2,endVal:690,title:"Outlet",icon:"pe-7s-cup"},{id:3,endVal:580,title:"Brand",icon:"pe-7s-light"},{id:4,endVal:8500,title:"Happy Clients",icon:"pe-7s-smile"}]};},methods:{visibilityChanged(isVisible){this.isVisible=isVisible;}}});
// CONCATENATED MODULE: ./components/FunFact.vue?vue&type=script&lang=js
 /* harmony default export */ var components_FunFactvue_type_script_lang_js = (FunFactvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/FunFact.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_FunFactvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "42e45f28"
  
)

/* harmony default export */ var FunFact = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=fun-fact.js.map