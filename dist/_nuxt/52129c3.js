(window.webpackJsonp=window.webpackJsonp||[]).push([[44,11,16,20,21,31],{381:function(t,e,r){"use strict";r.r(e);var l={},n=r(16),component=Object(n.a)(l,(function(){var t=this,e=t._self._c;return e("footer",{staticClass:"footer-area bg-gray pt-100 pb-70"},[e("div",{staticClass:"container"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-lg-2 col-sm-4"},[e("div",{staticClass:"copyright mb-30"},[e("div",{staticClass:"footer-logo"},[e("n-link",{attrs:{to:"/"}},[e("img",{attrs:{src:"/img/logo/logo.png",alt:"logo"}})])],1),t._v(" "),t._m(0)])]),t._v(" "),e("div",{staticClass:"col-lg-2 col-sm-4"},[e("div",{staticClass:"footer-widget mb-30 ml-30"},[t._m(1),t._v(" "),e("div",{staticClass:"footer-list"},[e("ul",[e("li",[e("n-link",{attrs:{to:"#"}},[t._v("About us")])],1),t._v(" "),e("li",[e("n-link",{attrs:{to:"#"}},[t._v("Store location")])],1),t._v(" "),e("li",[e("n-link",{attrs:{to:"/contact"}},[t._v("Contact")])],1),t._v(" "),e("li",[e("n-link",{attrs:{to:"#"}},[t._v("Orders tracking")])],1)])])])]),t._v(" "),e("div",{staticClass:"col-lg-2 col-sm-4"},[e("div",{staticClass:"footer-widget mb-30 ml-50"},[t._m(2),t._v(" "),e("div",{staticClass:"footer-list"},[e("ul",[e("li",[e("n-link",{attrs:{to:"/#"}},[t._v("Returns")])],1),t._v(" "),e("li",[e("n-link",{attrs:{to:"/#"}},[t._v("Support Policy")])],1),t._v(" "),e("li",[e("n-link",{attrs:{to:"/#"}},[t._v("Size guide")])],1),t._v(" "),e("li",[e("n-link",{attrs:{to:"/#"}},[t._v("FAQs")])],1)])])])]),t._v(" "),t._m(3),t._v(" "),t._m(4)])])])}),[function(){var t=this,e=t._self._c;return e("p",[t._v("\n            © 2022 "),e("a",{attrs:{href:"#",target:"_blank"}},[t._v("Flone")]),t._v("."),e("br"),t._v("\n            All Rights Reserved\n          ")])},function(){var t=this._self._c;return t("div",{staticClass:"footer-title"},[t("h3",[this._v("ABOUT US")])])},function(){var t=this._self._c;return t("div",{staticClass:"footer-title"},[t("h3",[this._v("USEFUL LINKS")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"col-lg-2 col-sm-6"},[e("div",{staticClass:"footer-widget mb-30 ml-75"},[e("div",{staticClass:"footer-title"},[e("h3",[t._v("FOLLOW US")])]),t._v(" "),e("div",{staticClass:"footer-list"},[e("ul",[e("li",[e("a",{attrs:{href:"#",target:"_blank"}},[t._v("Facebook")])]),t._v(" "),e("li",[e("a",{attrs:{href:"#",target:"_blank"}},[t._v("Twitter")])]),t._v(" "),e("li",[e("a",{attrs:{href:"#",target:"_blank"}},[t._v("Instagram")])]),t._v(" "),e("li",[e("a",{attrs:{href:"#",target:"_blank"}},[t._v("Youtube")])])])])])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"col-lg-4 col-sm-6"},[e("div",{staticClass:"footer-widget mb-30 ml-70"},[e("div",{staticClass:"footer-title"},[e("h3",[t._v("SUBSCRIBE")])]),t._v(" "),e("div",{staticClass:"subscribe-style"},[e("p",[t._v("\n              Get E-mail updates about our latest shop and special offers.\n            ")]),t._v(" "),e("div",{staticClass:"subscribe-form"},[e("form",{staticClass:"mc-form"},[e("input",{staticClass:"email",attrs:{type:"email",required:"",placeholder:"Enter your email here..",name:"email"}}),t._v(" "),e("button",{staticClass:"button",attrs:{name:"subscribe"}},[t._v("Subscribe")])])])])])])}],!1,null,null,null);e.default=component.exports},382:function(t,e,r){"use strict";r.r(e);r(11),r(26),r(27);var l={components:{Navigation:function(){return Promise.resolve().then(r.bind(null,241))},MiniCart:function(){return Promise.resolve().then(r.bind(null,239))}},props:["containerClass"],computed:{cartItemCount:function(){return this.$store.getters.cartItemCount},wishlistItemCount:function(){return this.$store.getters.wishlistItemCount}},data:function(){return{isSticky:!1,isOpenSearch:!1,isOpenAccountSettings:!1,openCart:!1,navOpen:!1}},mounted:function(){var t=this;window.addEventListener("scroll",(function(){var e=window.scrollY;t.isSticky=e>=200}))}},n=r(16),component=Object(n.a)(l,(function(){var t=this,e=t._self._c;return e("div",[e("header",{staticClass:"header-area"},[e("div",{staticClass:"header-top-area header-padding-2 d-none d-lg-block"},[e("div",{class:t.containerClass},[t._m(0)])]),t._v(" "),e("div",{staticClass:"header-padding-1 sticky-bar header-res-padding clearfix",class:{"is-sticky":t.isSticky}},[e("div",{class:t.containerClass},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-lg-2 col-md-6 col-4"},[e("div",{staticClass:"logo"},[e("n-link",{attrs:{to:"/"}},[e("img",{attrs:{src:"/img/logo/logo.png",alt:"flone logo"}})])],1)]),t._v(" "),e("div",{staticClass:"col-lg-8 d-none d-lg-block"},[e("div",{staticClass:"main-menu"},[e("nav",[e("Navigation")],1)])]),t._v(" "),e("div",{staticClass:"col-lg-2 col-md-6 col-8"},[e("div",{staticClass:"header-right-wrap"},[e("div",{staticClass:"same-style header-search d-none d-lg-block"},[e("button",{staticClass:"search-active",on:{click:function(e){t.isOpenSearch=!t.isOpenSearch}}},[e("i",{staticClass:"pe-7s-search"})]),t._v(" "),e("div",{staticClass:"search-content",class:{active:t.isOpenSearch}},[t._m(1)])]),t._v(" "),e("div",{staticClass:"same-style account-setting d-none d-lg-block"},[e("button",{staticClass:"account-setting-active",on:{click:function(e){t.isOpenAccountSettings=!t.isOpenAccountSettings}}},[e("i",{staticClass:"pe-7s-user-female"})]),t._v(" "),e("div",{staticClass:"account-dropdown",class:{active:t.isOpenAccountSettings}},[e("ul",[e("li",[e("n-link",{attrs:{to:"/login-register"}},[t._v("Login")])],1)])])]),t._v(" "),e("div",{staticClass:"same-style header-wishlist"},[e("n-link",{attrs:{to:"/wishlist"}},[e("i",{staticClass:"pe-7s-like"})]),t._v(" "),e("span",{staticClass:"count-style"},[t._v(t._s(t.wishlistItemCount))])],1),t._v(" "),e("div",{staticClass:"same-style cart-wrap"},[e("button",{staticClass:"icon-cart",on:{click:function(e){t.openCart=!t.openCart}}},[e("i",{staticClass:"pe-7s-shopbag"}),t._v(" "),e("span",{staticClass:"count-style"},[t._v(t._s(t.cartItemCount))])]),t._v(" "),e("MiniCart",{attrs:{miniCart:{visible:t.openCart}},on:{minicartClose:function(e){t.openCart=!t.openCart}}})],1),t._v(" "),e("div",{staticClass:"same-style mobile-menu-toggler d-block d-lg-none"},[e("button",{staticClass:"mobile-aside-button",on:{click:function(e){t.navOpen=!t.navOpen}}},[e("i",{staticClass:"pe-7s-menu"})])])])])])])])]),t._v(" "),e("OffCanvasMobileMenu",{class:{"show-mobile-menu":t.navOpen},on:{toggleAsideMenu:function(e){t.navOpen=!t.navOpen}}})],1)}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"header-top-inner"},[e("div",{staticClass:"language-currency-wrap"},[e("div",{staticClass:"same-language-currency language-style"},[e("select",{attrs:{name:"language"}},[e("option",{attrs:{value:"english"}},[t._v("English")]),t._v(" "),e("option",{attrs:{value:"hindi"}},[t._v("Hindi")]),t._v(" "),e("option",{attrs:{value:"spanish"}},[t._v("Spanish")])])]),t._v(" "),e("div",{staticClass:"same-language-currency use-style"},[e("select",{attrs:{name:"currency"}},[e("option",{attrs:{value:"usd"}},[t._v("USD")]),t._v(" "),e("option",{attrs:{value:"eur"}},[t._v("EUR")]),t._v(" "),e("option",{attrs:{value:"rup"}},[t._v("Rup")])])]),t._v(" "),e("div",{staticClass:"same-language-currency"},[e("p",[t._v("Call: "),e("a",{attrs:{href:"callto:3965410"}},[t._v("3965410")])])])]),t._v(" "),e("div",{staticClass:"header-offer"},[e("p",[t._v("Free delivery on order over "),e("span",[t._v("$200")])])])])},function(){var t=this._self._c;return t("form",[t("input",{attrs:{type:"text",placeholder:"Search"}}),this._v(" "),t("button",{staticClass:"button-search"},[t("i",{staticClass:"pe-7s-search"})])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{Navigation:r(241).default,MiniCart:r(239).default,OffCanvasMobileMenu:r(240).default})},383:function(t,e,r){"use strict";r.r(e);var l={props:["pageTitle"]},n=r(16),component=Object(n.a)(l,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"breadcrumb-area pt-35 pb-35 bg-gray-3"},[e("div",{staticClass:"container"},[e("div",{staticClass:"breadcrumb-content text-center"},[e("ul",[e("li",[e("n-link",{attrs:{to:"/"}},[t._v("Home")])],1),t._v(" "),e("li",{staticClass:"active"},[t._v(t._s(t.pageTitle))])])])])])}),[],!1,null,null,null);e.default=component.exports},390:function(t,e,r){"use strict";r.r(e);var l={},n=r(16),component=Object(n.a)(l,(function(){this._self._c;return this._m(0)}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"description-review-area pb-90"},[e("div",{staticClass:"container"},[e("div",{staticClass:"description-review-wrapper"},[e("div",{staticClass:"description-review-topbar nav"},[e("a",{attrs:{"data-bs-toggle":"tab",href:"#des-details1"}},[t._v("Additional information")]),t._v(" "),e("a",{staticClass:"active",attrs:{"data-bs-toggle":"tab",href:"#des-details2"}},[t._v("Description")]),t._v(" "),e("a",{attrs:{"data-bs-toggle":"tab",href:"#des-details3"}},[t._v("Reviews (2)")])]),t._v(" "),e("div",{staticClass:"tab-content description-review-bottom"},[e("div",{staticClass:"tab-pane active",attrs:{id:"des-details2"}},[e("div",{staticClass:"product-description-wrapper"},[e("p",[t._v("Lorem ipsum dolor sit amet consectetur adipisicing elit, sed do eiusmod tempor incididunt")]),t._v(" "),e("p",[t._v("ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commo consequat. Duis aute irure dolor in reprehend in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt ")])])]),t._v(" "),e("div",{staticClass:"tab-pane",attrs:{id:"des-details1"}},[e("div",{staticClass:"product-anotherinfo-wrapper"},[e("ul",[e("li",[e("span",[t._v("Weight")]),t._v(" 400 g")]),t._v(" "),e("li",[e("span",[t._v("Dimensions")]),t._v("10 x 10 x 15 cm ")]),t._v(" "),e("li",[e("span",[t._v("Materials")]),t._v(" 60% cotton, 40% polyester")]),t._v(" "),e("li",[e("span",[t._v("Other Info")]),t._v(" American heirloom jean shorts pug seitan letterpress")])])])]),t._v(" "),e("div",{staticClass:"tab-pane",attrs:{id:"des-details3"}},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-lg-7"},[e("div",{staticClass:"review-wrapper"},[e("div",{staticClass:"single-review"},[e("div",{staticClass:"review-img"},[e("img",{attrs:{src:"/img/testimonial/1.jpg",alt:""}})]),t._v(" "),e("div",{staticClass:"review-content"},[e("div",{staticClass:"review-top-wrap"},[e("div",{staticClass:"review-left"},[e("div",{staticClass:"review-name"},[e("h4",[t._v("White Lewis")])])]),t._v(" "),e("div",{staticClass:"review-left"},[e("a",{attrs:{href:"#"}},[t._v("Reply")])])]),t._v(" "),e("div",{staticClass:"review-bottom"},[e("p",[t._v("Vestibulum ante ipsum primis aucibus orci luctustrices posuere cubilia Curae Suspendisse viverra ed viverra. Mauris ullarper euismod vehicula. Phasellus quam nisi, congue id nulla.")])])])]),t._v(" "),e("div",{staticClass:"single-review child-review"},[e("div",{staticClass:"review-img"},[e("img",{attrs:{src:"/img/testimonial/2.jpg",alt:""}})]),t._v(" "),e("div",{staticClass:"review-content"},[e("div",{staticClass:"review-top-wrap"},[e("div",{staticClass:"review-left"},[e("div",{staticClass:"review-name"},[e("h4",[t._v("White Lewis")])])]),t._v(" "),e("div",{staticClass:"review-left"},[e("a",{attrs:{href:"#"}},[t._v("Reply")])])]),t._v(" "),e("div",{staticClass:"review-bottom"},[e("p",[t._v("Vestibulum ante ipsum primis aucibus orci luctustrices posuere cubilia Curae Sus pen disse viverra ed viverra. Mauris ullarper euismod vehicula. ")])])])])])]),t._v(" "),e("div",{staticClass:"col-lg-5"},[e("div",{staticClass:"ratting-form-wrapper pl-50"},[e("h3",[t._v("Add a Review")]),t._v(" "),e("div",{staticClass:"ratting-form"},[e("form",[e("div",{staticClass:"star-box"},[e("span",[t._v("Your rating:")]),t._v(" "),e("div",{staticClass:"ratting-star"},[e("i",{staticClass:"fa fa-star"}),t._v(" "),e("i",{staticClass:"fa fa-star"}),t._v(" "),e("i",{staticClass:"fa fa-star"}),t._v(" "),e("i",{staticClass:"fa fa-star"}),t._v(" "),e("i",{staticClass:"fa fa-star"})])]),t._v(" "),e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-6"},[e("div",{staticClass:"rating-form-style mb-10"},[e("input",{attrs:{placeholder:"Name",type:"text"}})])]),t._v(" "),e("div",{staticClass:"col-md-6"},[e("div",{staticClass:"rating-form-style mb-10"},[e("input",{attrs:{placeholder:"Email",type:"email"}})])]),t._v(" "),e("div",{staticClass:"col-md-12"},[e("div",{staticClass:"rating-form-style form-submit"},[e("textarea",{attrs:{name:"Your Review",placeholder:"Message"}}),t._v(" "),e("input",{attrs:{type:"submit",value:"Submit"}})])])])])])])])])])])])])])}],!1,null,null,null);e.default=component.exports},406:function(t,e,r){"use strict";r.r(e);r(38),r(61),r(243),r(44),r(58),r(59),r(45),r(36);var l=r(20);r(242),r(11),r(32),r(39),r(70);function n(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);e&&(l=l.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,l)}return r}function c(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?n(Object(r),!0).forEach((function(e){Object(l.a)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var o={props:["product"],data:function(){return{singleQuantity:1,swiperOptionTop:{loop:!0,slidesPerView:1,spaceBetween:10,effect:"fade",loopedSlides:5,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}},swiperOptionThumbs:{loop:!0,spaceBetween:10,centeredSlides:!0,slidesPerView:5,freeMode:!0,watchSlidesVisibility:!0,watchSlidesProgress:!0,slideToClickedSlide:!0,loopedSlides:5}}},mounted:function(){var t=this;this.$nextTick((function(){var e=t.$refs.swiperTop.$swiper,r=t.$refs.swiperThumbs.$swiper;e.controller.control=r,r.controller.control=e}))},methods:{addToCart:function(t){var e=c(c({},t),{},{cartQuantity:this.singleQuantity});this.$store.state.cart.find((function(e){return t.id===e.id}))?this.$notify({title:"Already added to cart update with one"}):this.$notify({title:"Add to cart successfully!"}),this.$store.dispatch("addToCartItem",e)},discountedPrice:function(t){return t.price-t.price*t.discount/100},increaseQuantity:function(){this.product.quantity>this.singleQuantity&&this.singleQuantity++},decreaseQuantity:function(){this.singleQuantity>1&&this.singleQuantity--},addToWishlist:function(t){this.$store.state.wishlist.find((function(e){return t.id===e.id}))?this.$notify({title:"Already added to wishlist!"}):this.$notify({title:"Add to wishlist successfully!"}),this.$store.dispatch("addToWishlist",t)},slugify:function(text){return text.toString().toLowerCase().replace(/\s+/g,"-").replace(/[^\w-]+/g,"").replace(/--+/g,"-").replace(/^-+/,"").replace(/-+$/,"")}}},v=r(16),component=Object(v.a)(o,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"shop-area pt-100 pb-100"},[e("div",{staticClass:"container"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-6"},[e("div",{staticClass:"product-details-slider"},[e("div",{staticClass:"product-details-img"},[e("swiper",{ref:"swiperTop",attrs:{options:t.swiperOptionTop}},[t._l(t.product.images,(function(image,r){return e("div",{key:r,staticClass:"large-img swiper-slide"},[e("img",{staticClass:"img-fluid",attrs:{src:image,alt:t.product.title}})])})),t._v(" "),e("div",{staticClass:"quickview-nav swiper-button-prev"},[e("i",{staticClass:"pe-7s-angle-left"})]),t._v(" "),e("div",{staticClass:"quickview-nav swiper-button-next"},[e("i",{staticClass:"pe-7s-angle-right"})])],2),t._v(" "),e("swiper",{ref:"swiperThumbs",staticClass:"mt-2",attrs:{options:t.swiperOptionThumbs}},t._l(t.product.images,(function(image,r){return e("div",{key:r,staticClass:"thumb-img swiper-slide"},[e("img",{staticClass:"img-fluid",attrs:{src:image,alt:t.product.title}})])})),0)],1)])]),t._v(" "),e("div",{staticClass:"col-lg-6 col-md-6"},[e("div",{staticClass:"product-details-content ml-70"},[e("h2",[t._v(t._s(t.product.title))]),t._v(" "),e("div",{staticClass:"product-details-price"},[e("span",[t._v("$"+t._s(t.product.price.toFixed(2)))])]),t._v(" "),e("p",[t._v(t._s(t.product.description))]),t._v(" "),t.product.variation?e("div",{staticClass:"pro-details-size-color"},[e("div",{staticClass:"pro-details-color-wrap"},[e("h6",{staticClass:"label"},[t._v("Color")]),t._v(" "),e("div",{staticClass:"pro-details-color-content"},t._l(t.product.variation.color,(function(r,l){return e("label",{key:l,staticClass:"radio",class:r},[e("input",{attrs:{type:"radio",name:"colorGroup"}}),t._v(" "),e("span",{staticClass:"check-mark"})])})),0)]),t._v(" "),e("div",{staticClass:"pro-details-size-wrap"},[e("h6",{staticClass:"label"},[t._v("Size")]),t._v(" "),e("div",{staticClass:"pro-details-size-content"},t._l(t.product.variation.sizes,(function(r,l){return e("label",{key:l,staticClass:"radio"},[e("input",{attrs:{type:"radio",name:"sizeGroup"}}),t._v(" "),e("span",{staticClass:"check-mark"},[t._v(t._s(r))])])})),0)])]):t._e(),t._v(" "),e("div",{staticClass:"pro-details-quality"},[e("div",{staticClass:"cart-plus-minus"},[e("button",{staticClass:"dec qtybutton",on:{click:function(e){return t.decreaseQuantity()}}},[t._v("-")]),t._v(" "),e("input",{staticClass:"cart-plus-minus-box",attrs:{type:"text",readonly:""},domProps:{value:t.singleQuantity}}),t._v(" "),e("button",{staticClass:"inc qtybutton",on:{click:function(e){return t.increaseQuantity()}}},[t._v("+")])]),t._v(" "),e("div",{staticClass:"pro-details-cart btn-hover"},[e("button",{on:{click:function(e){return t.addToCart(t.product)}}},[t._v("Add To Cart")])]),t._v(" "),e("div",{staticClass:"pro-details-wishlist"},[e("button",{attrs:{title:"wishlist"},on:{click:function(e){return t.addToWishlist(t.product)}}},[e("i",{staticClass:"fa fa-heart-o"})])])]),t._v(" "),e("div",{staticClass:"pro-details-meta"},[e("span",{staticClass:"label"},[t._v("Categories:")]),t._v(" "),e("ul",t._l(t.product.category,(function(r,l){return e("li",{key:l},[e("n-link",{attrs:{to:"/shop?category=".concat(t.slugify(r))}},[t._v(t._s(r)+",")])],1)})),0)]),t._v(" "),e("div",{staticClass:"pro-details-meta"},[e("span",{staticClass:"label"},[t._v("Tag:")]),t._v(" "),e("ul",t._l(t.product.tag,(function(r,l){return e("li",{key:l},[e("n-link",{attrs:{to:"/shop?tag=".concat(t.slugify(r))}},[t._v(t._s(r)+",")])],1)})),0)]),t._v(" "),t._m(0)])])])])])}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"pro-details-social"},[e("ul",[e("li",[e("a",{attrs:{href:"https://www.facebook.com/",target:"_blank"}},[e("i",{staticClass:"fa fa-facebook"})])]),t._v(" "),e("li",[e("a",{attrs:{href:"https://dribbble.com/",target:"_blank"}},[e("i",{staticClass:"fa fa-dribbble"})])]),t._v(" "),e("li",[e("a",{attrs:{href:"https://www.pinterest.com/",target:"_blank"}},[e("i",{staticClass:"fa fa-pinterest-p"})])]),t._v(" "),e("li",[e("a",{attrs:{href:"https://twitter.com/",target:"_blank"}},[e("i",{staticClass:"fa fa-twitter"})])]),t._v(" "),e("li",[e("a",{attrs:{href:"https://www.linkedin.com/",target:"_blank"}},[e("i",{staticClass:"fa fa-linkedin"})])])])])}],!1,null,null,null);e.default=component.exports},431:function(t,e,r){"use strict";r.r(e);r(242),r(11),r(32),r(39),r(70);var l={data:function(){return{slug:this.$route.params.slug}},computed:{product:function(){var t=this;return this.$store.getters.getProducts.find((function(e){return t.slugify(e.title)==t.slug}))}},head:function(){return{title:this.product.title}},methods:{slugify:function(text){return text.toString().toLowerCase().replace(/\s+/g,"-").replace(/[^\w-]+/g,"").replace(/--+/g,"-").replace(/^-+/,"").replace(/-+$/,"")}}},n=r(16),component=Object(n.a)(l,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"product-details-page-wrapper"},[e("HeaderWithTopbar",{attrs:{containerClass:"container"}}),t._v(" "),e("Breadcrumb",{attrs:{pageTitle:t.product.title}}),t._v(" "),e("ProductDetailsWrapper",{attrs:{product:t.product}}),t._v(" "),e("ProductDetailsDescriptionReview"),t._v(" "),e("TheFooter")],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{HeaderWithTopbar:r(382).default,Breadcrumb:r(383).default,ProductDetailsWrapper:r(406).default,ProductDetailsDescriptionReview:r(390).default,TheFooter:r(381).default})}}]);