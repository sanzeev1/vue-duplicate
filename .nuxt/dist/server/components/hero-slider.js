exports.ids = [2];
exports.modules = {

/***/ 72:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/hero/HeroSlider.vue?vue&type=template&id=6c983de6
var render=function render(){var _vm=this,_c=_vm._self._c;return _c('div',{staticClass:"slider-area nav-style-1"},[_c('swiper',{attrs:{"options":_vm.swiperOption}},[_c('swiper-slide',{staticClass:"single-slider slider-height-1 bg-purple"},[_vm.$store.state.sliders[0]?_c('div',{staticClass:"container"},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-sm-6"},[_c('div',{staticClass:"slider-content slider-animation-1"},[_c('h3',[_vm._v(_vm._s(_vm.$store.state.sliders[0].title))]),_vm._v(" "),_c('h1',[_vm._v(_vm._s(_vm.$store.state.sliders[0].subtitle))]),_vm._v(" "),_c('div',{staticClass:"slider-btn btn-hover"},[_c('n-link',{attrs:{"to":"/shop"}},[_vm._v("SHOP NOW")])],1)])]),_vm._v(" "),_c('div',{staticClass:"col-sm-6"},[_c('div',{staticClass:"slider-single-img slider-img-animation"},[_c('img',{attrs:{"src":`https://api.cheparo.com/${_vm.$store.state.sliders[0].image}`,"alt":"image"}})])]),_vm._v(" "),_c('br'),_c('br'),_c('br'),_vm._v(" \n        ")])]):_vm._e()]),_vm._v(" "),_c('swiper-slide',{staticClass:"single-slider slider-height-1 bg-purple"},[_vm.$store.state.sliders[1]?_c('div',{staticClass:"container"},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-sm-6"},[_c('div',{staticClass:"slider-content slider-animation-1"},[_c('h3',[_vm._v(_vm._s(_vm.$store.state.sliders[1].title))]),_vm._v(" "),_c('h1',[_vm._v(_vm._s(_vm.$store.state.sliders[1].subtitle))]),_vm._v(" "),_c('div',{staticClass:"slider-btn btn-hover"},[_c('n-link',{attrs:{"to":"/shop"}},[_vm._v("SHOP NOW")])],1)])]),_vm._v(" "),_c('div',{staticClass:"col-sm-6"},[_c('div',{staticClass:"slider-single-img slider-img-animation"},[_c('img',{attrs:{"src":`https://api.cheparo.com/${_vm.$store.state.sliders[1].image}`,"alt":"image"}})])])]),_vm._v(" "),_c('br'),_c('br'),_c('br'),_vm._v(" \n\n      ")]):_vm._e()]),_vm._v(" "),_c('div',{staticClass:"hero-slider-nav swiper-button-prev"},[_c('i',{staticClass:"pe-7s-angle-left"})]),_vm._v(" "),_c('div',{staticClass:"hero-slider-nav swiper-button-next"},[_c('i',{staticClass:"pe-7s-angle-right"})])],1)],1);};var staticRenderFns=[];
// CONCATENATED MODULE: ./components/hero/HeroSlider.vue?vue&type=template&id=6c983de6

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/hero/HeroSlider.vue?vue&type=script&lang=js
/* harmony default export */ var HeroSlidervue_type_script_lang_js = ({methods:{getSlidersData:function(){this.$store.dispatch("getSlidersAction");}},data(){return{swiperOption:{loop:true,speed:750,slidesPerView:1,spaceBetween:10,effect:"fade",fadeEffect:{crossFade:true},navigation:{nextEl:'.swiper-button-next',prevEl:'.swiper-button-prev'}}};},mounted(){this.getSlidersData();}});
// CONCATENATED MODULE: ./components/hero/HeroSlider.vue?vue&type=script&lang=js
 /* harmony default export */ var hero_HeroSlidervue_type_script_lang_js = (HeroSlidervue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/hero/HeroSlider.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  hero_HeroSlidervue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "da51fe84"
  
)

/* harmony default export */ var HeroSlider = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=hero-slider.js.map