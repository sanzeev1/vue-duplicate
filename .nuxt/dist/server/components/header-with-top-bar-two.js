exports.ids = [15];
exports.modules = {

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/HeaderWithTopBarTwo.vue?vue&type=template&id=14c67d7e
var render=function render(){var _vm=this,_c=_vm._self._c;return _c('div',[_vm._ssrNode("<header class=\"header-area header-hm9\">","</header>",[_vm._ssrNode("<div class=\"container\">","</div>",[_vm._ssrNode("<div class=\"header-top-area\">","</div>",[_vm._ssrNode("<div class=\"row align-items-center\">","</div>",[_vm._ssrNode("<div class=\"col-lg-5 d-none d-lg-block\"><div class=\"language-currency-wrap\"><div class=\"same-language-currency language-style\"><select name=\"language\"><option value=\"english\">English</option> <option value=\"hindi\">Hindi</option> <option value=\"spanish\">Spanish</option></select></div> <div class=\"same-language-currency use-style\"><select name=\"currency\"><option value=\"usd\">USD</option> <option value=\"eur\">EUR</option> <option value=\"rup\">Rup</option></select></div> <div class=\"same-language-currency\"><p>Call: <a href=\"callto:3965410\">3965410</a></p></div></div></div> "),_vm._ssrNode("<div class=\"col-lg-2 col-4\">","</div>",[_vm._ssrNode("<div class=\"logo-hm9\">","</div>",[_c('n-link',{attrs:{"to":"/"}},[_c('img',{attrs:{"src":"/img/logo/logo.png","alt":"Fancy logo"}})])],1)]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"col-lg-5 col-8\">","</div>",[_vm._ssrNode("<div class=\"header-right-wrap\">","</div>",[_vm._ssrNode("<div class=\"same-style header-search d-none d-lg-block\"><button class=\"search-active\"><i class=\"pe-7s-search\"></i></button> <div"+_vm._ssrClass("search-content",{active:_vm.isOpenSearch})+"><form><input type=\"text\" placeholder=\"Search\"> <button class=\"button-search\"><i class=\"pe-7s-search\"></i></button></form></div></div> "),_vm._ssrNode("<div class=\"same-style account-setting d-none d-lg-block\">","</div>",[_vm._ssrNode("<button class=\"account-setting-active\"><i class=\"pe-7s-user-female\"></i></button> "),_vm._ssrNode("<div"+_vm._ssrClass("account-dropdown",{active:_vm.isOpenAccountSettings})+">","</div>",[_vm._ssrNode("<ul>","</ul>",[_vm._ssrNode("<li>","</li>",[_c('n-link',{attrs:{"to":"/login-register"}},[_vm._v("Login")])],1)])])],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"same-style header-wishlist\">","</div>",[_c('n-link',{attrs:{"to":"/wishlist"}},[_c('i',{staticClass:"pe-7s-like"})]),_vm._ssrNode(" <span class=\"count-style\">"+_vm._ssrEscape(_vm._s(_vm.wishlistItemCount))+"</span>")],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"same-style cart-wrap\">","</div>",[_vm._ssrNode("<button class=\"icon-cart\"><i class=\"pe-7s-shopbag\"></i> <span class=\"count-style\">"+_vm._ssrEscape(_vm._s(_vm.cartItemCount))+"</span></button> "),_c('MiniCart',{attrs:{"miniCart":{visible:_vm.openCart}},on:{"minicartClose":function($event){_vm.openCart=!_vm.openCart;}}})],2),_vm._ssrNode(" <div class=\"same-style mobile-menu-toggler d-block d-lg-none\"><button class=\"mobile-aside-button\"><i class=\"pe-7s-menu\"></i></button></div>")],2)])],2)])]),_vm._ssrNode(" "),_vm._ssrNode("<div"+_vm._ssrClass("header-padding-1 sticky-bar header-res-padding clearfix d-none d-lg-block",{'is-sticky':_vm.isSticky})+">","</div>",[_vm._ssrNode("<div class=\"container\">","</div>",[_vm._ssrNode("<div class=\"row\">","</div>",[_vm._ssrNode("<div class=\"col-lg-12\">","</div>",[_vm._ssrNode("<div class=\"main-menu\">","</div>",[_vm._ssrNode("<nav>","</nav>",[_c('Navigation')],1)])])])])])],2),_vm._ssrNode(" "),_c('OffCanvasMobileMenu',{class:{'show-mobile-menu':_vm.navOpen},on:{"toggleAsideMenu":function($event){_vm.navOpen=!_vm.navOpen;}}})],2);};var staticRenderFns=[];
// CONCATENATED MODULE: ./components/HeaderWithTopBarTwo.vue?vue&type=template&id=14c67d7e

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/HeaderWithTopBarTwo.vue?vue&type=script&lang=js
/* harmony default export */ var HeaderWithTopBarTwovue_type_script_lang_js = ({components:{Navigation:()=>Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 20)),MiniCart:()=>Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 18))},props:['containerClass'],computed:{cartItemCount(){return this.$store.getters.cartItemCount;},wishlistItemCount(){return this.$store.getters.wishlistItemCount;}},methods:{setSearch(e){this.searchValue=e.target.value;},search(e){e.preventDefault();window.location="/shop/search="+e.target.value;}},data(){return{isSticky:false,isOpenSearch:false,isOpenAccountSettings:false,openCart:false,navOpen:false};},mounted(){window.addEventListener('scroll',()=>{let scroll=window.scrollY;if(scroll>=200){this.isSticky=true;}else{this.isSticky=false;}});}});
// CONCATENATED MODULE: ./components/HeaderWithTopBarTwo.vue?vue&type=script&lang=js
 /* harmony default export */ var components_HeaderWithTopBarTwovue_type_script_lang_js = (HeaderWithTopBarTwovue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/HeaderWithTopBarTwo.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_HeaderWithTopBarTwovue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "4e73b4c8"
  
)

/* harmony default export */ var HeaderWithTopBarTwo = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {MiniCart: __webpack_require__(18).default,Navigation: __webpack_require__(20).default,OffCanvasMobileMenu: __webpack_require__(19).default})


/***/ })

};;
//# sourceMappingURL=header-with-top-bar-two.js.map