(window.webpackJsonp=window.webpackJsonp||[]).push([[46,17,22,25,28,31],{381:function(t,e,r){"use strict";r.r(e);var o={},n=r(16),component=Object(n.a)(o,(function(){var t=this,e=t._self._c;return e("footer",{staticClass:"footer-area bg-gray pt-100 pb-70"},[e("div",{staticClass:"container"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-lg-2 col-sm-4"},[e("div",{staticClass:"copyright mb-30"},[e("div",{staticClass:"footer-logo"},[e("n-link",{attrs:{to:"/"}},[e("img",{attrs:{src:"/img/logo/logo.png",alt:"logo"}})])],1),t._v(" "),t._m(0)])]),t._v(" "),e("div",{staticClass:"col-lg-2 col-sm-4"},[e("div",{staticClass:"footer-widget mb-30 ml-30"},[t._m(1),t._v(" "),e("div",{staticClass:"footer-list"},[e("ul",[e("li",[e("n-link",{attrs:{to:"#"}},[t._v("About us")])],1),t._v(" "),e("li",[e("n-link",{attrs:{to:"#"}},[t._v("Store location")])],1),t._v(" "),e("li",[e("n-link",{attrs:{to:"/contact"}},[t._v("Contact")])],1),t._v(" "),e("li",[e("n-link",{attrs:{to:"#"}},[t._v("Orders tracking")])],1)])])])]),t._v(" "),e("div",{staticClass:"col-lg-2 col-sm-4"},[e("div",{staticClass:"footer-widget mb-30 ml-50"},[t._m(2),t._v(" "),e("div",{staticClass:"footer-list"},[e("ul",[e("li",[e("n-link",{attrs:{to:"/#"}},[t._v("Returns")])],1),t._v(" "),e("li",[e("n-link",{attrs:{to:"/#"}},[t._v("Support Policy")])],1),t._v(" "),e("li",[e("n-link",{attrs:{to:"/#"}},[t._v("Size guide")])],1),t._v(" "),e("li",[e("n-link",{attrs:{to:"/#"}},[t._v("FAQs")])],1)])])])]),t._v(" "),t._m(3),t._v(" "),t._m(4)])])])}),[function(){var t=this,e=t._self._c;return e("p",[t._v("\n            © 2022 "),e("a",{attrs:{href:"#",target:"_blank"}},[t._v("Flone")]),t._v("."),e("br"),t._v("\n            All Rights Reserved\n          ")])},function(){var t=this._self._c;return t("div",{staticClass:"footer-title"},[t("h3",[this._v("ABOUT US")])])},function(){var t=this._self._c;return t("div",{staticClass:"footer-title"},[t("h3",[this._v("USEFUL LINKS")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"col-lg-2 col-sm-6"},[e("div",{staticClass:"footer-widget mb-30 ml-75"},[e("div",{staticClass:"footer-title"},[e("h3",[t._v("FOLLOW US")])]),t._v(" "),e("div",{staticClass:"footer-list"},[e("ul",[e("li",[e("a",{attrs:{href:"#",target:"_blank"}},[t._v("Facebook")])]),t._v(" "),e("li",[e("a",{attrs:{href:"#",target:"_blank"}},[t._v("Twitter")])]),t._v(" "),e("li",[e("a",{attrs:{href:"#",target:"_blank"}},[t._v("Instagram")])]),t._v(" "),e("li",[e("a",{attrs:{href:"#",target:"_blank"}},[t._v("Youtube")])])])])])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"col-lg-4 col-sm-6"},[e("div",{staticClass:"footer-widget mb-30 ml-70"},[e("div",{staticClass:"footer-title"},[e("h3",[t._v("SUBSCRIBE")])]),t._v(" "),e("div",{staticClass:"subscribe-style"},[e("p",[t._v("\n              Get E-mail updates about our latest shop and special offers.\n            ")]),t._v(" "),e("div",{staticClass:"subscribe-form"},[e("form",{staticClass:"mc-form"},[e("input",{staticClass:"email",attrs:{type:"email",required:"",placeholder:"Enter your email here..",name:"email"}}),t._v(" "),e("button",{staticClass:"button",attrs:{name:"subscribe"}},[t._v("Subscribe")])])])])])])}],!1,null,null,null);e.default=component.exports},382:function(t,e,r){"use strict";r.r(e);r(26),r(129),r(11),r(27),r(28);var o={components:{Navigation:function(){return Promise.resolve().then(r.bind(null,241))},MiniCart:function(){return Promise.resolve().then(r.bind(null,239))}},props:["containerClass"],computed:{cartItemCount:function(){return this.$store.getters.cartItemCount},wishlistItemCount:function(){return this.$store.getters.wishlistItemCount}},methods:{setSearch:function(t){this.searchValue=t.target.value},search:function(t){t.preventDefault(),window.location="/shop/search="+t.target.value}},data:function(){return{isSticky:!1,isOpenSearch:!1,isOpenAccountSettings:!1,openCart:!1,navOpen:!1}},mounted:function(){var t=this;window.addEventListener("scroll",(function(){var e=window.scrollY;t.isSticky=e>=200}))}},n=r(16),component=Object(n.a)(o,(function(){var t=this,e=t._self._c;return e("div",[e("header",{staticClass:"header-area"},[e("div",{staticClass:"header-top-area header-padding-2 d-none d-lg-block"},[e("div",{class:t.containerClass},[t._m(0)])]),t._v(" "),e("div",{staticClass:"header-padding-1 sticky-bar header-res-padding clearfix",class:{"is-sticky":t.isSticky}},[e("div",{class:t.containerClass},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-lg-2 col-md-6 col-4"},[e("div",{staticClass:"logo"},[e("n-link",{attrs:{to:"/"}},[e("img",{attrs:{src:"/img/logo/logo.png",alt:"flone logo"}})])],1)]),t._v(" "),e("div",{staticClass:"col-lg-8 d-none d-lg-block"},[e("div",{staticClass:"main-menu"},[e("nav",[e("Navigation")],1)])]),t._v(" "),e("div",{staticClass:"col-lg-2 col-md-6 col-8"},[e("div",{staticClass:"header-right-wrap"},[e("div",{staticClass:"same-style header-search d-none d-lg-block"},[e("button",{staticClass:"search-active",on:{click:function(e){t.isOpenSearch=!t.isOpenSearch}}},[e("i",{staticClass:"pe-7s-search"})]),t._v(" "),e("div",{staticClass:"search-content",class:{active:t.isOpenSearch}},[e("form",{on:{submit:t.search}},[e("input",{attrs:{type:"text",name:"search",placeholder:"Search"},on:{change:t.setSearch}}),t._v(" "),t._m(1)])])]),t._v(" "),e("div",{staticClass:"same-style account-setting d-none d-lg-block"},[e("button",{staticClass:"account-setting-active",on:{click:function(e){t.isOpenAccountSettings=!t.isOpenAccountSettings}}},[e("i",{staticClass:"pe-7s-user-female"})]),t._v(" "),e("div",{staticClass:"account-dropdown",class:{active:t.isOpenAccountSettings}},[e("ul",[e("li",[e("n-link",{attrs:{to:"/login-register"}},[t._v("Login")])],1)])])]),t._v(" "),e("div",{staticClass:"same-style header-wishlist"},[e("n-link",{attrs:{to:"/wishlist"}},[e("i",{staticClass:"pe-7s-like"})]),t._v(" "),e("span",{staticClass:"count-style"},[t._v(t._s(t.wishlistItemCount))])],1),t._v(" "),e("div",{staticClass:"same-style cart-wrap"},[e("button",{staticClass:"icon-cart",on:{click:function(e){t.openCart=!t.openCart}}},[e("i",{staticClass:"pe-7s-shopbag"}),t._v(" "),e("span",{staticClass:"count-style"},[t._v(t._s(t.cartItemCount))])]),t._v(" "),e("MiniCart",{attrs:{miniCart:{visible:t.openCart}},on:{minicartClose:function(e){t.openCart=!t.openCart}}})],1),t._v(" "),e("div",{staticClass:"same-style mobile-menu-toggler d-block d-lg-none"},[e("button",{staticClass:"mobile-aside-button",on:{click:function(e){t.navOpen=!t.navOpen}}},[e("i",{staticClass:"pe-7s-menu"})])])])])])])])]),t._v(" "),e("OffCanvasMobileMenu",{class:{"show-mobile-menu":t.navOpen},on:{toggleAsideMenu:function(e){t.navOpen=!t.navOpen}}})],1)}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"header-top-inner"},[e("div",{staticClass:"language-currency-wrap"},[e("div",{staticClass:"same-language-currency language-style"},[e("select",{attrs:{name:"language"}},[e("option",{attrs:{value:"english"}},[t._v("English")]),t._v(" "),e("option",{attrs:{value:"hindi"}},[t._v("Hindi")]),t._v(" "),e("option",{attrs:{value:"spanish"}},[t._v("Spanish")])])]),t._v(" "),e("div",{staticClass:"same-language-currency use-style"},[e("select",{attrs:{name:"currency"}},[e("option",{attrs:{value:"usd"}},[t._v("USD")]),t._v(" "),e("option",{attrs:{value:"eur"}},[t._v("EUR")]),t._v(" "),e("option",{attrs:{value:"rup"}},[t._v("Rup")])])]),t._v(" "),e("div",{staticClass:"same-language-currency"},[e("p",[t._v("Call: "),e("a",{attrs:{href:"callto:3965410"}},[t._v("3965410")])])])]),t._v(" "),e("div",{staticClass:"header-offer"},[e("p",[t._v("Free delivery on order over "),e("span",[t._v("$200")])])])])},function(){var t=this._self._c;return t("button",{staticClass:"button-search"},[t("i",{staticClass:"pe-7s-search"})])}],!1,null,null,null);e.default=component.exports;installComponents(component,{Navigation:r(241).default,MiniCart:r(239).default,OffCanvasMobileMenu:r(240).default})},384:function(t,e,r){t.exports={}},385:function(t,e,r){"use strict";r(384)},386:function(t,e,r){"use strict";r.r(e);r(39),r(44),r(58),r(59),r(45),r(36);var o=r(20);r(242),r(11),r(26),r(38),r(70);function n(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,o)}return r}function c(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?n(Object(r),!0).forEach((function(e){Object(o.a)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var l={props:["product","layout"],methods:{addToCart:function(t){var e=c(c({},t),{},{cartQuantity:1});this.$store.state.cart.find((function(e){return t.id===e.id}))?this.$notify({title:"Already added to cart update with one"}):this.$notify({title:"Add to cart successfully!"}),this.$store.dispatch("addToCartItem",e)},discountedPrice:function(t){return t.price-t.price*t.discount/100},addToWishlist:function(t){this.$store.state.wishlist.find((function(e){return t.id===e.id}))?this.$notify({title:"Already added to wishlist!"}):this.$notify({title:"Add to wishlist successfully!"}),this.$store.dispatch("addToWishlist",t)},onClick:function(t){this.$modal.show("quickview",t)},slugify:function(text){return text.toString().toLowerCase().replace(/\s+/g,"-").replace(/[^\w-]+/g,"").replace(/--+/g,"-").replace(/^-+/,"").replace(/-+$/,"")}}},d=r(16),component=Object(d.a)(l,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"product-wrap mb-30"},[e("div",{staticClass:"product-img"},[e("n-link",{attrs:{to:"/product/".concat(t.product.id)}},[e("img",{staticClass:"default-img",attrs:{src:"https://api.cheparo.com/".concat(t.product.image),alt:t.product.product_name}}),t._v(" "),e("img",{staticClass:"hover-img",attrs:{src:"https://api.cheparo.com/".concat(t.product.image),alt:t.product.product_name}})]),t._v(" "),"twoColumn"===t.layout||"threeColumn"===t.layout?e("div",{staticClass:"product-action"},[e("div",{staticClass:"pro-same-action pro-wishlist"},[e("button",{staticClass:"btn",attrs:{title:"Wishlist"},on:{click:function(e){return t.addToWishlist(t.product)}}},[e("i",{staticClass:"pe-7s-like"})])]),t._v(" "),e("div",{staticClass:"pro-same-action pro-cart"},[e("button",{staticClass:"btn",attrs:{title:"Add To Cart"},on:{click:function(e){return t.addToCart(t.product)}}},[e("i",{staticClass:"pe-7s-cart"}),t._v("\n          Add to cart\n        ")])]),t._v(" "),e("div",{staticClass:"pro-same-action pro-quickview"},[e("button",{staticClass:"btn",attrs:{title:"Quick View"},on:{click:function(e){return t.onClick(t.product)}}},[e("i",{staticClass:"pe-7s-look"})])])]):t._e()],1),t._v(" "),e("div",{staticClass:"product-content text-center"},[e("h3",[e("n-link",{attrs:{to:"/product/".concat(t.product.id)}},[t._v(t._s(t.product.product_name))])],1),t._v(" "),e("div",{staticClass:"product-price"},[e("span",[t._v("$"+t._s(t.product.price))])]),t._v(" "),"list"===t.layout?e("div",{staticClass:"product-content__list-view"},[e("p",[t._v(t._s(t.product.short_description))]),t._v(" "),e("div",{staticClass:"pro-action d-flex align-items-center"},[e("div",{staticClass:"pro-cart btn-hover"},[e("button",{staticClass:"btn",attrs:{title:"Add To Cart"},on:{click:function(e){return t.addToCart(t.product)}}},[e("i",{staticClass:"pe-7s-cart"}),t._v("\n            Add to cart\n          ")])]),t._v(" "),e("div",{staticClass:"pro-wishlist"},[e("button",{on:{click:function(e){return t.addToWishlist(t.product)}}},[e("i",{staticClass:"fa fa-heart-o"})])])])]):t._e()])])}),[],!1,null,null,null);e.default=component.exports},387:function(t,e,r){"use strict";r.r(e);r(39),r(44),r(58),r(59),r(45),r(36);var o=r(20);r(242),r(11);function n(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,o)}return r}function c(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?n(Object(r),!0).forEach((function(e){Object(o.a)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var l={data:function(){return{item:"",singleQuantity:1,swiperOptionTop:{loop:!0,slidesPerView:1,spaceBetween:10,effect:"fade",navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}}}},computed:{product:function(){return this.item}},methods:{beforeOpen:function(t){var e=t.params;this.item=e},addToCart:function(t){var e=c(c({},t),{},{cartQuantity:this.singleQuantity});this.$store.state.cart.find((function(e){return t.id===e.id}))?this.$notify({title:"Already added to cart update with one"}):this.$notify({title:"Add to cart successfully!"}),this.$store.dispatch("addToCartItem",e)},discountedPrice:function(t){return t.price-t.price*t.discount/100},increaseQuantity:function(){this.product.quantity>this.singleQuantity&&this.singleQuantity++},decreaseQuantity:function(){this.singleQuantity>1&&this.singleQuantity--},addToWishlist:function(t){this.$store.state.wishlist.find((function(e){return t.id===e.id}))?this.$notify({title:"Already added to wishlist!"}):this.$notify({title:"Add to wishlist successfully!"}),this.$store.dispatch("addToWishlist",t)}}},d=(r(385),r(16)),component=Object(d.a)(l,(function(){var t=this,e=t._self._c;return e("client-only",[e("modal",{attrs:{name:"quickview",width:"50%",scrollable:!0,height:"auto"},on:{"before-open":t.beforeOpen}},[e("div",{staticClass:"quickview-wrapper row"},[e("div",{staticClass:"col-md-6"},[e("div",{staticClass:"product-details-slider"},[e("div",{staticClass:"product-details-img"},[e("swiper",{attrs:{options:t.swiperOptionTop}},[t.product.image?e("div",{staticClass:"large-img swiper-slide"},[e("img",{staticClass:"img-fluid",attrs:{src:"https://api.cheparo.com/".concat(t.product.image),alt:t.product.product_name}})]):t._e(),t._v(" "),t.product.image1?e("div",{staticClass:"large-img swiper-slide"},[e("img",{staticClass:"img-fluid",attrs:{src:"https://api.cheparo.com/".concat(t.product.image1),alt:t.product.product_name}})]):t._e(),t._v(" "),t.product.image2?e("div",{staticClass:"large-img swiper-slide"},[e("img",{staticClass:"img-fluid",attrs:{src:"https://api.cheparo.com/".concat(t.product.image2),alt:t.product.product_name}})]):t._e(),t._v(" "),t.product.image3?e("div",{staticClass:"large-img swiper-slide"},[e("img",{staticClass:"img-fluid",attrs:{src:"https://api.cheparo.com/".concat(t.product.image3),alt:t.product.product_name}})]):t._e(),t._v(" "),t.product.image4?e("div",{staticClass:"large-img swiper-slide"},[e("img",{staticClass:"img-fluid",attrs:{src:"https://api.cheparo.com/".concat(t.product.image4),alt:t.product.product_name}})]):t._e(),t._v(" "),e("div",{staticClass:"quickview-nav swiper-button-prev"},[e("i",{staticClass:"pe-7s-angle-left"})]),t._v(" "),e("div",{staticClass:"quickview-nav swiper-button-next"},[e("i",{staticClass:"pe-7s-angle-right"})])])],1)])]),t._v(" "),e("div",{staticClass:"col-md-6"},[e("div",{staticClass:"product-details-content"},[e("div",{attrs:{slot:"top-right"},slot:"top-right"},[e("button",{staticClass:"modal-close",on:{click:function(e){return t.$modal.hide("quickview")}}},[e("i",{staticClass:"fa fa-times"})])]),t._v(" "),e("h2",[t._v(t._s(t.product.product_name))]),t._v(" "),e("div",{staticClass:"product-details-price"},[e("span",[t._v("$"+t._s(t.product.price))])]),t._v(" "),e("p",[t._v(t._s(t.product.short_description))]),t._v(" "),e("div",{staticClass:"pro-details-quality"},[e("div",{staticClass:"cart-plus-minus"},[e("button",{staticClass:"dec qtybutton",on:{click:function(e){return t.decreaseQuantity()}}},[t._v("\n                -\n              ")]),t._v(" "),e("input",{staticClass:"cart-plus-minus-box",attrs:{type:"text",readonly:""},domProps:{value:t.singleQuantity}}),t._v(" "),e("button",{staticClass:"inc qtybutton",on:{click:function(e){return t.increaseQuantity()}}},[t._v("\n                +\n              ")])]),t._v(" "),e("div",{staticClass:"pro-details-cart btn-hover"},[e("button",{on:{click:function(e){return t.addToCart(t.product)}}},[t._v("Add To Cart")])]),t._v(" "),e("div",{staticClass:"pro-details-wishlist"},[e("button",{on:{click:function(e){return t.addToWishlist(t.product)}}},[e("i",{staticClass:"fa fa-heart-o"})])])])])])])])],1)}),[],!1,null,null,null);e.default=component.exports},389:function(t,e,r){"use strict";var o=r(2),n=r(5),c=r(41),l=r(33),d=r(47),v=r(244),h=r(13),f=r(4),_=r(245),m=r(168),C=r(394),y=r(395),w=r(102),k=r(396),O=[],P=n(O.sort),$=n(O.push),S=f((function(){O.sort(void 0)})),x=f((function(){O.sort(null)})),j=m("sort"),A=!f((function(){if(w)return w<70;if(!(C&&C>3)){if(y)return!0;if(k)return k<603;var code,t,e,r,o="";for(code=65;code<76;code++){switch(t=String.fromCharCode(code),code){case 66:case 69:case 70:case 72:e=3;break;case 68:case 71:e=4;break;default:e=2}for(r=0;r<47;r++)O.push({k:t+r,v:e})}for(O.sort((function(a,b){return b.v-a.v})),r=0;r<O.length;r++)t=O[r].k.charAt(0),o.charAt(o.length-1)!==t&&(o+=t);return"DGBEFHACIJK"!==o}}));o({target:"Array",proto:!0,forced:S||!x||!j||!A},{sort:function(t){void 0!==t&&c(t);var e=l(this);if(A)return void 0===t?P(e):P(e,t);var r,o,n=[],f=d(e);for(o=0;o<f;o++)o in e&&$(n,e[o]);for(_(n,function(t){return function(e,r){return void 0===r?-1:void 0===e?1:void 0!==t?+t(e,r)||0:h(e)>h(r)?1:-1}}(t)),r=d(n),o=0;o<r;)e[o]=n[o++];for(;o<f;)v(e,o++);return e}})},394:function(t,e,r){"use strict";var o=r(86).match(/firefox\/(\d+)/i);t.exports=!!o&&+o[1]},395:function(t,e,r){"use strict";var o=r(86);t.exports=/MSIE|Trident/.test(o)},396:function(t,e,r){"use strict";var o=r(86).match(/AppleWebKit\/(\d+)\./);t.exports=!!o&&+o[1]},407:function(t,e,r){"use strict";r.r(e);r(71),r(389),r(26),r(129),r(11),r(38),r(70);var o={props:["classes"],computed:{categoryList:function(){return this.$store.getters.categoryList},sizeList:function(){return this.$store.getters.sizeList},colorList:function(){return this.$store.getters.colorList},tagList:function(){return this.$store.getters.tagList}},methods:{slugify:function(text){return text.toString().toLowerCase().replace(/\s+/g,"-").replace(/[^\w-]+/g,"").replace(/--+/g,"-").replace(/^-+/,"").replace(/-+$/,"")}}},n=r(16),component=Object(n.a)(o,(function(){var t,e,r,o,n,c,l,d=this,v=d._self._c;return v("form",{staticClass:"sidebar-style",class:d.classes,attrs:{action:"shop?sub_category=".concat(null!==(t=d.$route.query.sub_category)&&void 0!==t?t:"","&sort=").concat(null!==(e=d.$route.query.sort)&&void 0!==e?e:"")}},[v("div",{staticClass:"sidebar-widget"},[v("h4",{staticClass:"pro-sidebar-title"},[d._v("Search")]),d._v(" "),v("div",{staticClass:"pro-sidebar-search mb-50 mt-25"},[v("div",{staticClass:"pro-sidebar-search-form"},[v("input",{attrs:{type:"hidden",name:"sub_category"},domProps:{value:"".concat(null!==(r=d.$route.query.sub_category)&&void 0!==r?r:"")}}),d._v(" "),v("input",{attrs:{type:"hidden",name:"sort"},domProps:{value:"".concat(null!==(o=d.$route.query.sort)&&void 0!==o?o:"")}}),d._v(" "),v("input",{attrs:{type:"text",name:"search",placeholder:"Search here..."},domProps:{value:"".concat(null!==(n=d.$route.query.search)&&void 0!==n?n:"")}}),d._v(" "),d._m(0)])])]),d._v(" "),v("div",{staticClass:"sidebar-widget"},[v("h4",{staticClass:"pro-sidebar-title"},[d._v("Categories")]),d._v(" "),v("ul",{staticClass:"sidebar-widget-list mt-20"},[v("li",{staticClass:"sidebar-widget-list-left"},[v("n-link",{attrs:{to:"shop?category=&sub_category=&search=".concat(null!==(c=d.$route.query.search)&&void 0!==c?c:"","&sort=").concat(null!==(l=d.$route.query.sort)&&void 0!==l?l:"")}},[v("span",{staticClass:"check-mark"}),d._v("\n                    All Categories\n                ")])],1),d._v(" "),d._l(d.$store.state.categories,(function(t,e){return v("li",{key:e,staticClass:"sidebar-widget-list-left"},[v("ul",d._l(t.sub_categories,(function(e,i){var r,o,n,c;return v("li",{key:i},[0==i?v("n-link",{attrs:{to:"?category=".concat(t.id,"&sub_category=&search=").concat(null!==(r=d.$route.query.search)&&void 0!==r?r:"","&sort=").concat(null!==(o=d.$route.query.sort)&&void 0!==o?o:"")}},[v("span",{staticClass:"check-mark"}),d._v("\n                            "+d._s(t.category_name)+"\n                        ")]):d._e(),d._v(" "),v("n-link",{staticStyle:{"margin-left":"15px"},attrs:{to:"?&category=&sub_category=".concat(e.id,"&search=").concat(null!==(n=d.$route.query.search)&&void 0!==n?n:"","&sort=").concat(null!==(c=d.$route.query.sort)&&void 0!==c?c:"")}},[v("span",{staticClass:"check-mark"}),d._v("\n                            "+d._s(e.sub_category_name)+"\n                        ")])],1)})),0)])}))],2)])])}),[function(){var t=this._self._c;return t("button",[t("i",{staticClass:"pe-7s-search"})])}],!1,null,null,null);e.default=component.exports},425:function(t,e,r){"use strict";r.r(e);r(44),r(61),r(389),r(11);var o=r(3),n=(r(46),r(71),r(60),r(26),r(38),r(27),r(70),r(129),r(28),{components:{HeaderWithTopbar:function(){return Promise.resolve().then(r.bind(null,382))},Breadcrumb:function(){return r.e(1).then(r.bind(null,383))},ProductGridItem:function(){return Promise.resolve().then(r.bind(null,386))},QuickView:function(){return Promise.resolve().then(r.bind(null,387))},TheFooter:function(){return Promise.resolve().then(r.bind(null,381))}},data:function(){var t;return{layout:"threeColumn",filterItems:[],prevSelectedCategoryName:"",prevSelectedTagName:"",prevSelectedSizeName:"",prevSelectedColorName:"",currentPage:1,totalNumberOfPages:1,perPage:9,selectedPrice:null!==(t=this.$route.query.sort)&&void 0!==t?t:""}},computed:{products:function(){return this.$store.getters.getProducts},getItems:function(){var t=(this.currentPage-1)*this.perPage,e=this.currentPage*this.perPage;return this.filterItems.slice(t,e)},getPaginateCount:function(){return Math.ceil(this.filterItems.length/this.perPage)}},mounted:function(){this.updateProductData()},methods:{paginateClickCallback:function(t){var e,r,o,n;window.location="shop?search=".concat(null!==(e=this.$route.query.search)&&void 0!==e?e:"","&sort=").concat(null!==(r=this.$route.query.sort)&&void 0!==r?r:"","&sub_category=").concat(null!==(o=this.$route.query.sub_category)&&void 0!==o?o:"","&category=").concat(null!==(n=this.$route.query.category)&&void 0!==n?n:"","&page=").concat(t)},updateProductData:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var r,n,c,l,d,v;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.$route.query.search||"",n=t.$route.query.page||1,t.currentPage=n,c=t.$route.query.category||null,l=t.$route.query.sub_category||null,d=t.$route.query.sort||null,t.filterItems=[],v="https://api.cheparo.com/products/all/?",""!=r&&(v+="search=".concat(r)),""==r&&(v+="search"),n&&(v+="&page=".concat(n)),c&&(v+="&category_id=".concat(c)),l&&(v+="&sub_category_id=".concat(l)),d&&(v+="&sort=".concat(d)),e.next=16,fetch(v).then(function(){var e=Object(o.a)(regeneratorRuntime.mark((function e(r){var o,n,c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!r.ok){e.next=10;break}return e.next=3,r.json();case 3:o=e.sent,n=o.products,c=o.noOfpages,t.filterItems=n,t.totalNumberOfPages=c,e.next=11;break;case 10:throw"Error getting search products";case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(t){return console.log()(t)}));case 16:case"end":return e.stop()}}),e)})))()},discountedPrice:function(t){return t.price-t.price*t.discount/100},slugify:function(text){return text.toString().toLowerCase().replace(/\s+/g,"-").replace(/[^\w-]+/g,"").replace(/--+/g,"-").replace(/^-+/,"").replace(/-+$/,"")}},watch:{$route:function(){this.updateProductData()},selectedPrice:function(){var t,e,r,o,n,c,l,d,v;switch(this.selectedPrice){case"low2high":window.location="shop?search=".concat(null!==(t=this.$route.query.search)&&void 0!==t?t:"","&sort=low2high&sub_category=").concat(null!==(e=this.$route.query.sub_category)&&void 0!==e?e:"","&category=").concat(null!==(r=this.$route.query.category)&&void 0!==r?r:"");break;case"high2low":window.location="shop?search=".concat(null!==(o=this.$route.query.search)&&void 0!==o?o:"","&sort=high2low&sub_category=").concat(null!==(n=this.$route.query.sub_category)&&void 0!==n?n:"","&category=").concat(null!==(c=this.$route.query.category)&&void 0!==c?c:"");break;default:window.location="shop?search=".concat(null!==(l=this.$route.query.search)&&void 0!==l?l:"","&sort=&sub_category=").concat(null!==(d=this.$route.query.sub_category)&&void 0!==d?d:"","&category=").concat(null!==(v=this.$route.query.category)&&void 0!==v?v:"")}}},head:function(){return{title:"Shop grid standard"}}}),c=n,l=r(16),component=Object(l.a)(c,(function(){var t,e,r=this,o=r._self._c;return o("div",{staticClass:"shop-page-wrapper"},[o("HeaderWithTopbar",{attrs:{containerClass:"container"}}),r._v(" "),o("div",{staticClass:"shop-area pt-100 pb-100"},[o("div",{staticClass:"container"},[o("div",{staticClass:"row flex-row-reverse"},[o("div",{staticClass:"col-lg-9"},[o("div",{staticClass:"shop-top-bar"},[o("div",{staticClass:"select-showing-wrap"},["high2low"!=r.$route.query.sort&&"low2high"!=r.$route.query.sort?o("div",[o("div",{staticClass:"shop-select"},[o("select",{directives:[{name:"model",rawName:"v-model",value:r.selectedPrice,expression:"selectedPrice"}],attrs:{name:"c"},on:{change:function(t){var e=Array.prototype.filter.call(t.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));r.selectedPrice=t.target.multiple?e:e[0]}}},[o("option",{attrs:{selected:"",value:""}},[r._v("\n                                            Default\n                                        ")]),r._v(" "),o("option",{attrs:{value:"low2high"}},[r._v("\n                                            Price -\n                                            Low to High\n                                        ")]),r._v(" "),o("option",{attrs:{value:"high2low"}},[r._v("\n                                            Price - High to Low\n                                        ")])])])]):r._e(),r._v(" "),"low2high"==r.$route.query.sort?o("div",["low2high"==r.$route.query.sort?o("div",{staticClass:"shop-select"},[o("select",{directives:[{name:"model",rawName:"v-model",value:r.selectedPrice,expression:"selectedPrice"}],attrs:{name:"a"},on:{change:function(t){var e=Array.prototype.filter.call(t.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));r.selectedPrice=t.target.multiple?e:e[0]}}},[o("option",{attrs:{value:""}},[r._v("\n                                            Default\n                                        ")]),r._v(" "),o("option",{attrs:{selected:"",value:"low2high"}},[r._v("\n                                            Price -\n                                            Low to High\n                                        ")]),r._v(" "),o("option",{attrs:{value:"high2low"}},[r._v("\n                                            Price - High to Low\n                                        ")])])]):r._e()]):r._e(),r._v(" "),"high2low"==r.$route.query.sort?o("div",[o("div",{staticClass:"shop-select"},[o("select",{directives:[{name:"model",rawName:"v-model",value:r.selectedPrice,expression:"selectedPrice"}],attrs:{name:"b"},on:{change:function(t){var e=Array.prototype.filter.call(t.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));r.selectedPrice=t.target.multiple?e:e[0]}}},[o("option",{attrs:{value:""}},[r._v("\n                                            Default\n                                        ")]),r._v(" "),o("option",{attrs:{value:"low2high"}},[r._v("\n                                            Price -\n                                            Low to High\n                                        ")]),r._v(" "),o("option",{attrs:{selected:"",value:"high2low"}},[r._v("\n                                            Price - High to Low\n                                        ")])])])]):r._e(),r._v(" "),o("p",[r._v("Showing "+r._s(20*(null!==(t=this.$route.query.page)&&void 0!==t?t:0))+" to "+r._s(20*(null!==(e=this.$route.query.page)&&void 0!==e?e:0)+this.filterItems.length)+" of\n                                "+r._s(20*r.totalNumberOfPages)+" result")])]),r._v(" "),o("div",{staticClass:"shop-tab"},[o("button",{class:{active:"twoColumn"===r.layout},on:{click:function(t){r.layout="twoColumn"}}},[o("i",{staticClass:"fa fa-th-large"})]),r._v(" "),o("button",{class:{active:"threeColumn"===r.layout},on:{click:function(t){r.layout="threeColumn"}}},[o("i",{staticClass:"fa fa-th"})]),r._v(" "),o("button",{class:{active:"list"===r.layout},on:{click:function(t){r.layout="list"}}},[o("i",{staticClass:"fa fa-list-ul"})])])]),r._v(" "),o("div",{staticClass:"shop-bottom-area mt-35"},[o("div",{staticClass:"row product-layout",class:{list:"list"===r.layout,"grid three-column":"threeColumn"===r.layout,"grid two-column":"twoColumn"===r.layout}},r._l(r.getItems,(function(t,e){return o("div",{key:e,staticClass:"col-xl-4 col-sm-6"},[o("ProductGridItem",{attrs:{product:t,layout:r.layout}})],1)})),0)]),r._v(" "),r.totalNumberOfPages>1?o("div",[o("pagination",{staticClass:"pro-pagination-style shop-pagination mt-30",attrs:{"per-page":20,records:20*r.totalNumberOfPages,"page-count":r.totalNumberOfPages},on:{paginate:r.paginateClickCallback},model:{value:r.currentPage,callback:function(t){r.currentPage=t},expression:"currentPage"}})],1):r._e()]),r._v(" "),o("div",{staticClass:"col-lg-3"},[o("ShopSidebar",{attrs:{classes:"mr-30"}})],1)])])]),r._v(" "),o("QuickView"),r._v(" "),o("TheFooter")],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{HeaderWithTopbar:r(382).default,ProductGridItem:r(386).default,ShopSidebar:r(407).default,QuickView:r(387).default,TheFooter:r(381).default})}}]);