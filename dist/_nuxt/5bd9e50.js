(window.webpackJsonp=window.webpackJsonp||[]).push([[37,1,17,31],{381:function(t,e,n){"use strict";n.r(e);var r={},c=n(16),component=Object(c.a)(r,(function(){var t=this,e=t._self._c;return e("footer",{staticClass:"footer-area bg-gray pt-100 pb-70"},[e("div",{staticClass:"container"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-lg-2 col-sm-4"},[e("div",{staticClass:"copyright mb-30"},[e("div",{staticClass:"footer-logo"},[e("n-link",{attrs:{to:"/"}},[e("img",{attrs:{src:"/img/logo/logo.png",alt:"logo"}})])],1),t._v(" "),t._m(0)])]),t._v(" "),e("div",{staticClass:"col-lg-2 col-sm-4"},[e("div",{staticClass:"footer-widget mb-30 ml-30"},[t._m(1),t._v(" "),e("div",{staticClass:"footer-list"},[e("ul",[e("li",[e("n-link",{attrs:{to:"#"}},[t._v("About us")])],1),t._v(" "),e("li",[e("n-link",{attrs:{to:"#"}},[t._v("Store location")])],1),t._v(" "),e("li",[e("n-link",{attrs:{to:"/contact"}},[t._v("Contact")])],1),t._v(" "),e("li",[e("n-link",{attrs:{to:"#"}},[t._v("Orders tracking")])],1)])])])]),t._v(" "),e("div",{staticClass:"col-lg-2 col-sm-4"},[e("div",{staticClass:"footer-widget mb-30 ml-50"},[t._m(2),t._v(" "),e("div",{staticClass:"footer-list"},[e("ul",[e("li",[e("n-link",{attrs:{to:"/#"}},[t._v("Returns")])],1),t._v(" "),e("li",[e("n-link",{attrs:{to:"/#"}},[t._v("Support Policy")])],1),t._v(" "),e("li",[e("n-link",{attrs:{to:"/#"}},[t._v("Size guide")])],1),t._v(" "),e("li",[e("n-link",{attrs:{to:"/#"}},[t._v("FAQs")])],1)])])])]),t._v(" "),t._m(3),t._v(" "),t._m(4)])])])}),[function(){var t=this,e=t._self._c;return e("p",[t._v("\n            © 2022 "),e("a",{attrs:{href:"#",target:"_blank"}},[t._v("Flone")]),t._v("."),e("br"),t._v("\n            All Rights Reserved\n          ")])},function(){var t=this._self._c;return t("div",{staticClass:"footer-title"},[t("h3",[this._v("ABOUT US")])])},function(){var t=this._self._c;return t("div",{staticClass:"footer-title"},[t("h3",[this._v("USEFUL LINKS")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"col-lg-2 col-sm-6"},[e("div",{staticClass:"footer-widget mb-30 ml-75"},[e("div",{staticClass:"footer-title"},[e("h3",[t._v("FOLLOW US")])]),t._v(" "),e("div",{staticClass:"footer-list"},[e("ul",[e("li",[e("a",{attrs:{href:"#",target:"_blank"}},[t._v("Facebook")])]),t._v(" "),e("li",[e("a",{attrs:{href:"#",target:"_blank"}},[t._v("Twitter")])]),t._v(" "),e("li",[e("a",{attrs:{href:"#",target:"_blank"}},[t._v("Instagram")])]),t._v(" "),e("li",[e("a",{attrs:{href:"#",target:"_blank"}},[t._v("Youtube")])])])])])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"col-lg-4 col-sm-6"},[e("div",{staticClass:"footer-widget mb-30 ml-70"},[e("div",{staticClass:"footer-title"},[e("h3",[t._v("SUBSCRIBE")])]),t._v(" "),e("div",{staticClass:"subscribe-style"},[e("p",[t._v("\n              Get E-mail updates about our latest shop and special offers.\n            ")]),t._v(" "),e("div",{staticClass:"subscribe-form"},[e("form",{staticClass:"mc-form"},[e("input",{staticClass:"email",attrs:{type:"email",required:"",placeholder:"Enter your email here..",name:"email"}}),t._v(" "),e("button",{staticClass:"button",attrs:{name:"subscribe"}},[t._v("Subscribe")])])])])])])}],!1,null,null,null);e.default=component.exports},382:function(t,e,n){"use strict";n.r(e);n(26),n(129),n(11),n(27),n(28);var r={components:{Navigation:function(){return Promise.resolve().then(n.bind(null,241))},MiniCart:function(){return Promise.resolve().then(n.bind(null,239))}},props:["containerClass"],computed:{cartItemCount:function(){return this.$store.getters.cartItemCount},wishlistItemCount:function(){return this.$store.getters.wishlistItemCount}},methods:{setSearch:function(t){this.searchValue=t.target.value},search:function(t){t.preventDefault(),window.location="/shop/search="+t.target.value}},data:function(){return{isSticky:!1,isOpenSearch:!1,isOpenAccountSettings:!1,openCart:!1,navOpen:!1}},mounted:function(){var t=this;window.addEventListener("scroll",(function(){var e=window.scrollY;t.isSticky=e>=200}))}},c=n(16),component=Object(c.a)(r,(function(){var t=this,e=t._self._c;return e("div",[e("header",{staticClass:"header-area"},[e("div",{staticClass:"header-top-area header-padding-2 d-none d-lg-block"},[e("div",{class:t.containerClass},[t._m(0)])]),t._v(" "),e("div",{staticClass:"header-padding-1 sticky-bar header-res-padding clearfix",class:{"is-sticky":t.isSticky}},[e("div",{class:t.containerClass},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-lg-2 col-md-6 col-4"},[e("div",{staticClass:"logo"},[e("n-link",{attrs:{to:"/"}},[e("img",{attrs:{src:"/img/logo/logo.png",alt:"flone logo"}})])],1)]),t._v(" "),e("div",{staticClass:"col-lg-8 d-none d-lg-block"},[e("div",{staticClass:"main-menu"},[e("nav",[e("Navigation")],1)])]),t._v(" "),e("div",{staticClass:"col-lg-2 col-md-6 col-8"},[e("div",{staticClass:"header-right-wrap"},[e("div",{staticClass:"same-style header-search d-none d-lg-block"},[e("button",{staticClass:"search-active",on:{click:function(e){t.isOpenSearch=!t.isOpenSearch}}},[e("i",{staticClass:"pe-7s-search"})]),t._v(" "),e("div",{staticClass:"search-content",class:{active:t.isOpenSearch}},[e("form",{on:{submit:t.search}},[e("input",{attrs:{type:"text",name:"search",placeholder:"Search"},on:{change:t.setSearch}}),t._v(" "),t._m(1)])])]),t._v(" "),e("div",{staticClass:"same-style account-setting d-none d-lg-block"},[e("button",{staticClass:"account-setting-active",on:{click:function(e){t.isOpenAccountSettings=!t.isOpenAccountSettings}}},[e("i",{staticClass:"pe-7s-user-female"})]),t._v(" "),e("div",{staticClass:"account-dropdown",class:{active:t.isOpenAccountSettings}},[e("ul",[e("li",[e("n-link",{attrs:{to:"/login-register"}},[t._v("Login")])],1)])])]),t._v(" "),e("div",{staticClass:"same-style header-wishlist"},[e("n-link",{attrs:{to:"/wishlist"}},[e("i",{staticClass:"pe-7s-like"})]),t._v(" "),e("span",{staticClass:"count-style"},[t._v(t._s(t.wishlistItemCount))])],1),t._v(" "),e("div",{staticClass:"same-style cart-wrap"},[e("button",{staticClass:"icon-cart",on:{click:function(e){t.openCart=!t.openCart}}},[e("i",{staticClass:"pe-7s-shopbag"}),t._v(" "),e("span",{staticClass:"count-style"},[t._v(t._s(t.cartItemCount))])]),t._v(" "),e("MiniCart",{attrs:{miniCart:{visible:t.openCart}},on:{minicartClose:function(e){t.openCart=!t.openCart}}})],1),t._v(" "),e("div",{staticClass:"same-style mobile-menu-toggler d-block d-lg-none"},[e("button",{staticClass:"mobile-aside-button",on:{click:function(e){t.navOpen=!t.navOpen}}},[e("i",{staticClass:"pe-7s-menu"})])])])])])])])]),t._v(" "),e("OffCanvasMobileMenu",{class:{"show-mobile-menu":t.navOpen},on:{toggleAsideMenu:function(e){t.navOpen=!t.navOpen}}})],1)}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"header-top-inner"},[e("div",{staticClass:"language-currency-wrap"},[e("div",{staticClass:"same-language-currency language-style"},[e("select",{attrs:{name:"language"}},[e("option",{attrs:{value:"english"}},[t._v("English")]),t._v(" "),e("option",{attrs:{value:"hindi"}},[t._v("Hindi")]),t._v(" "),e("option",{attrs:{value:"spanish"}},[t._v("Spanish")])])]),t._v(" "),e("div",{staticClass:"same-language-currency use-style"},[e("select",{attrs:{name:"currency"}},[e("option",{attrs:{value:"usd"}},[t._v("USD")]),t._v(" "),e("option",{attrs:{value:"eur"}},[t._v("EUR")]),t._v(" "),e("option",{attrs:{value:"rup"}},[t._v("Rup")])])]),t._v(" "),e("div",{staticClass:"same-language-currency"},[e("p",[t._v("Call: "),e("a",{attrs:{href:"callto:3965410"}},[t._v("3965410")])])])]),t._v(" "),e("div",{staticClass:"header-offer"},[e("p",[t._v("Free delivery on order over "),e("span",[t._v("$200")])])])])},function(){var t=this._self._c;return t("button",{staticClass:"button-search"},[t("i",{staticClass:"pe-7s-search"})])}],!1,null,null,null);e.default=component.exports;installComponents(component,{Navigation:n(241).default,MiniCart:n(239).default,OffCanvasMobileMenu:n(240).default})},383:function(t,e,n){"use strict";n.r(e);var r={props:["pageTitle"]},c=n(16),component=Object(c.a)(r,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"breadcrumb-area pt-35 pb-35 bg-gray-3"},[e("div",{staticClass:"container"},[e("div",{staticClass:"breadcrumb-content text-center"},[e("ul",[e("li",[e("n-link",{attrs:{to:"/"}},[t._v("Home")])],1),t._v(" "),e("li",{staticClass:"active"},[t._v(t._s(t.pageTitle))])])])])])}),[],!1,null,null,null);e.default=component.exports},419:function(t,e,n){"use strict";n.r(e);n(243);var r=n(20);n(11),n(26),n(38),n(39),n(44),n(58),n(59),n(45),n(27),n(70),n(36),n(28);function c(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?c(Object(n),!0).forEach((function(e){Object(r.a)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var l={components:{HeaderWithTopbar:function(){return Promise.resolve().then(n.bind(null,382))},Breadcrumb:function(){return Promise.resolve().then(n.bind(null,383))},TheFooter:function(){return Promise.resolve().then(n.bind(null,381))}},data:function(){return{singleQuantity:1}},computed:{products:function(){return this.$store.getters.getCart},total:function(){return this.$store.getters.getTotal}},methods:{incrementProduct:function(t){var e=o(o({},t),{},{cartQuantity:1});t.cartQuantity<t.quantity&&this.$store.dispatch("addToCartItem",e)},decrementProduct:function(t){var e=o(o({},t),{},{cartQuantity:1});t.cartQuantity>1&&this.$store.dispatch("decreaseProduct",e)},removeProduct:function(t){this.$notify({title:"Item remove from cart!"}),this.$store.dispatch("removeProductFromCart",t)},discountedPrice:function(t){return t.price-t.price*t.discount/100},clearCart:function(){confirm("Are you sure you want to clear cart")&&(this.$notify({title:"Item remove from cart!"}),this.$store.commit("CLEAR_CART"))},slugify:function(text){return text.toString().toLowerCase().replace(/\s+/g,"-").replace(/[^\w-]+/g,"").replace(/--+/g,"-").replace(/^-+/,"").replace(/-+$/,"")}},head:function(){return{title:"Cart"}}},v=n(16),component=Object(v.a)(l,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"cart-page-wrapper"},[e("HeaderWithTopbar",{attrs:{containerClass:"container"}}),t._v(" "),e("Breadcrumb",{attrs:{pageTitle:"cart"}}),t._v(" "),e("div",{staticClass:"cart-main-area pt-90 pb-100"},[e("div",{staticClass:"container"},[e("div",{staticClass:"row"},[t.products.length>0?e("div",{staticClass:"col-12"},[e("h3",{staticClass:"cart-page-title"},[t._v("Your cart items")]),t._v(" "),e("div",{staticClass:"table-content table-responsive cart-table-content"},[e("table",[t._m(0),t._v(" "),e("tbody",t._l(t.products,(function(n,r){return e("tr",{key:r},[e("td",{staticClass:"product-thumbnail"},[e("n-link",{attrs:{to:"/product/".concat(t.slugify(n.product_name))}},[e("img",{attrs:{src:"https://api.cheparo.com/".concat(n.image),alt:n.product_name}})])],1),t._v(" "),e("td",{staticClass:"product-name"},[e("n-link",{attrs:{to:"/product/".concat(t.slugify(n.product_name))}},[t._v(t._s(n.product_name))])],1),t._v(" "),e("td",{staticClass:"product-price-cart"},[e("span",{},[t._v("$"+t._s(n.price))])]),t._v(" "),e("td",{staticClass:"product-quantity"},[e("div",{staticClass:"cart-plus-minus"},[e("button",{staticClass:"dec qtybutton",on:{click:function(e){return t.decrementProduct(n)}}},[t._v("\n                        -\n                      ")]),t._v(" "),e("input",{staticClass:"cart-plus-minus-box",attrs:{type:"text",readonly:""},domProps:{value:n.cartQuantity}}),t._v(" "),e("button",{staticClass:"inc qtybutton",on:{click:function(e){return t.incrementProduct(n)}}},[t._v("\n                        +\n                      ")])])]),t._v(" "),e("td",{staticClass:"product-subtotal"},[t._v("\n                    $"+t._s(n.total.toFixed(2))+"\n                  ")]),t._v(" "),e("td",{staticClass:"product-remove"},[e("button",{on:{click:function(e){return t.removeProduct(n)}}},[e("i",{staticClass:"fa fa-times"})])])])})),0)])]),t._v(" "),e("div",{staticClass:"row"},[e("div",{staticClass:"col-lg-12"},[e("div",{staticClass:"cart-shiping-update-wrapper"},[e("div",{staticClass:"cart-shiping-update"},[e("n-link",{attrs:{to:"/shop"}},[t._v("Continue Shopping")])],1),t._v(" "),e("div",{staticClass:"cart-clear"},[e("button",{on:{click:function(e){return t.clearCart()}}},[t._v("Clear Shopping Cart")])])])])]),t._v(" "),e("div",{staticClass:"row"},[e("div",{staticClass:"col-lg-4 col-md-6"}),t._v(" "),e("div",{staticClass:"col-lg-4 col-md-6"}),t._v(" "),e("div",{staticClass:"col-lg-4 col-md-12"},[e("div",{staticClass:"grand-total"},[t._m(1),t._v(" "),e("h5",[t._v("\n                  Total products "),e("span",[t._v("$"+t._s(t.total.toFixed(2)))])]),t._v(" "),e("h4",{staticClass:"grand-total-title"},[t._v("\n                  Grand Total "),e("span",[t._v("$"+t._s(t.total.toFixed(2)))])]),t._v(" "),e("n-link",{attrs:{to:"/checkout"}},[t._v("Proceed to Checkout")])],1)])])]):e("div",{staticClass:"col-12"},[e("div",{staticClass:"empty-cart text-center"},[t._m(2),t._v(" "),e("h4",[t._v("No items found in cart")]),t._v(" "),e("n-link",{staticClass:"empty-cart__button",attrs:{to:"/shop"}},[t._v("Shop Now")])],1)])])])]),t._v(" "),e("TheFooter")],1)}),[function(){var t=this,e=t._self._c;return e("thead",[e("tr",[e("th",[t._v("Image")]),t._v(" "),e("th",[t._v("Product Name")]),t._v(" "),e("th",[t._v("Until Price")]),t._v(" "),e("th",[t._v("Qty")]),t._v(" "),e("th",[t._v("Subtotal")]),t._v(" "),e("th",[t._v("action")])])])},function(){var t=this._self._c;return t("div",{staticClass:"title-wrap"},[t("h4",{staticClass:"cart-bottom-title section-bg-gary-cart"},[this._v("\n                    Cart Total\n                  ")])])},function(){var t=this._self._c;return t("div",{staticClass:"icon"},[t("i",{staticClass:"pe-7s-cart"})])}],!1,null,null,null);e.default=component.exports;installComponents(component,{HeaderWithTopbar:n(382).default,Breadcrumb:n(383).default,TheFooter:n(381).default})}}]);