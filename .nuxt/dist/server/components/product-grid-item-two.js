exports.ids = [22];
exports.modules = {

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/product/ProductGridItemTwo.vue?vue&type=template&id=04b491fe
var render=function render(){var _vm=this,_c=_vm._self._c;return _c('div',{staticClass:"product-wrap-2 mb-25"},[_vm._ssrNode("<div class=\"product-img\">","</div>",[_c('n-link',{attrs:{"to":`/product/${_vm.product.id}`}},[_c('img',{staticClass:"default-img",attrs:{"src":`https://api.cheparo.com/${_vm.product.image}`,"alt":_vm.product.product_name}}),_vm._v(" "),_c('img',{staticClass:"hover-img",attrs:{"src":`https://api.cheparo.com/${_vm.product.image1}`,"alt":_vm.product.product_name}})]),_vm._ssrNode(" <div class=\"product-badges\"><span class=\"product-label pink\">New</span></div> <div class=\"product-action-2\"><button title=\"Add To Cart\" class=\"btn\"><i class=\"pe-7s-cart\"></i></button> <button title=\"Quick View\" class=\"btn\"><i class=\"pe-7s-look\"></i></button></div>")],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"product-content-2\">","</div>",[_vm._ssrNode("<div class=\"title-price-wrap-2\">","</div>",[_vm._ssrNode("<h3>","</h3>",[_c('n-link',{attrs:{"to":`/product/${_vm.product.id}`}},[_vm._v(_vm._s(_vm.product.product_name))])],1),_vm._ssrNode(" <div class=\"price-2\"><span>"+_vm._ssrEscape("$"+_vm._s(_vm.product.price.toFixed(2)))+"</span></div>")],2),_vm._ssrNode(" <div class=\"pro-wishlist-2\"><button><i class=\"pe-7s-like\"></i></button></div>")],2)],2);};var staticRenderFns=[];
// CONCATENATED MODULE: ./components/product/ProductGridItemTwo.vue?vue&type=template&id=04b491fe

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/product/ProductGridItemTwo.vue?vue&type=script&lang=js
/* harmony default export */ var ProductGridItemTwovue_type_script_lang_js = ({props:["product"],methods:{addToCart(product){const prod={...product,cartQuantity:1};// for notification
if(this.$store.state.cart.find(el=>product.id===el.id)){this.$notify({title:"Already added to cart update with one"});}else{this.$notify({title:"Add to cart successfully!"});}this.$store.dispatch("addToCartItem",prod);},discountedPrice(product){return product.price-product.price*product.discount/100;},addToWishlist(product){// for notification
if(this.$store.state.wishlist.find(el=>product.id===el.id)){this.$notify({title:"Already added to wishlist!"});}else{this.$notify({title:"Add to wishlist successfully!"});}this.$store.dispatch("addToWishlist",product);},onClick(product){this.$modal.show("quickview",product);},slugify(text){return text.toString().toLowerCase().replace(/\s+/g,"-")// Replace spaces with -
.replace(/[^\w-]+/g,"")// Remove all non-word chars
.replace(/--+/g,"-")// Replace multiple - with single -
.replace(/^-+/,"")// Trim - from start of text
.replace(/-+$/,"");// Trim - from end of text
}}});
// CONCATENATED MODULE: ./components/product/ProductGridItemTwo.vue?vue&type=script&lang=js
 /* harmony default export */ var product_ProductGridItemTwovue_type_script_lang_js = (ProductGridItemTwovue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/product/ProductGridItemTwo.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  product_ProductGridItemTwovue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "53ff8460"
  
)

/* harmony default export */ var ProductGridItemTwo = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=product-grid-item-two.js.map