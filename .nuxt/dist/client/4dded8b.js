(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{402:function(t,e,r){"use strict";r.r(e);r(234),r(39),r(45),r(57),r(58),r(44),r(36);var c=r(20);r(233),r(11),r(26),r(38),r(69);function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(t);e&&(c=c.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,c)}return r}function l(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){Object(c.a)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var n={props:["product"],data:function(){return{singleQuantity:1,swiperOptionTop:{loop:!0,slidesPerView:1,spaceBetween:10,effect:"fade",loopedSlides:5,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}},swiperOptionThumbs:{loop:!0,spaceBetween:10,centeredSlides:!0,slidesPerView:5,freeMode:!0,watchSlidesVisibility:!0,watchSlidesProgress:!0,slideToClickedSlide:!0,loopedSlides:5}}},mounted:function(){var t=this;this.$nextTick((function(){var e=t.$refs.swiperTop,r=t.$refs.swiperThumbs;e&&e.$swiper&&r&&r.$swiper&&(e.$swiper.controller.control=r.$swiper,r.$swiper.controller.control=e.$swiper)}))},methods:{addToCart:function(t){var e=l(l({},t),{},{cartQuantity:this.singleQuantity});this.$store.state.cart.find((function(e){return t.id===e.id}))?this.$notify({title:"Already added to cart update with one"}):this.$notify({title:"Add to cart successfully!"}),this.$store.dispatch("addToCartItem",e)},discountedPrice:function(t){return t.price-t.price*t.discount/100},increaseQuantity:function(){this.product.quantity>this.singleQuantity&&this.singleQuantity++},decreaseQuantity:function(){this.singleQuantity>1&&this.singleQuantity--},addToWishlist:function(t){this.$store.state.wishlist.find((function(e){return t.id===e.id}))?this.$notify({title:"Already added to wishlist!"}):this.$notify({title:"Add to wishlist successfully!"}),this.$store.dispatch("addToWishlist",t)},slugify:function(text){return text.toString().toLowerCase().replace(/\s+/g,"-").replace(/[^\w-]+/g,"").replace(/--+/g,"-").replace(/^-+/,"").replace(/-+$/,"")}}},d=r(16),component=Object(d.a)(n,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"shop-area pt-100 pb-100"},[e("div",{staticClass:"container"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-6"},[e("div",{staticClass:"product-details-slider"},[e("div",{staticClass:"product-details-img"},[e("swiper",{ref:"swiperTop",attrs:{options:t.swiperOptionTop}},[t.product.image?e("div",{staticClass:"large-img swiper-slide"},[e("img",{staticClass:"img-fluid",attrs:{src:"https://api.cheparo.com/".concat(t.product.image),alt:t.product.product_name}})]):t._e(),t._v(" "),t.product.image1?e("div",{staticClass:"large-img swiper-slide"},[e("img",{staticClass:"img-fluid",attrs:{src:"https://api.cheparo.com/".concat(t.product.image1),alt:t.product.product_name}})]):t._e(),t._v(" "),t.product.image2?e("div",{staticClass:"large-img swiper-slide"},[e("img",{staticClass:"img-fluid",attrs:{src:"https://api.cheparo.com/".concat(t.product.image2),alt:t.product.product_name}})]):t._e(),t._v(" "),t.product.image3?e("div",{staticClass:"large-img swiper-slide"},[e("img",{staticClass:"img-fluid",attrs:{src:"https://api.cheparo.com/".concat(t.product.image3),alt:t.product.product_name}})]):t._e(),t._v(" "),t.product.image4?e("div",{staticClass:"large-img swiper-slide"},[e("img",{staticClass:"img-fluid",attrs:{src:"https://api.cheparo.com/".concat(t.product.image4),alt:t.product.product_name}})]):t._e(),t._v(" "),e("div",{staticClass:"quickview-nav swiper-button-prev"},[e("i",{staticClass:"pe-7s-angle-left"})]),t._v(" "),e("div",{staticClass:"quickview-nav swiper-button-next"},[e("i",{staticClass:"pe-7s-angle-right"})])]),t._v(" "),e("swiper",{ref:"swiperThumbs",staticClass:"mt-2",attrs:{options:t.swiperOptionThumbs}},[t.product.image?e("div",{staticClass:"thumb-img swiper-slide"},[e("img",{staticClass:"img-fluid",attrs:{src:"https://api.cheparo.com/".concat(t.product.image),alt:t.product.product_name}})]):t._e(),t._v(" "),t.product.image1?e("div",{staticClass:"thumb-img swiper-slide"},[e("img",{staticClass:"img-fluid",attrs:{src:"https://api.cheparo.com/".concat(t.product.image1),alt:t.product.product_name}})]):t._e(),t._v(" "),t.product.image2?e("div",{staticClass:"thumb-img swiper-slide"},[e("img",{staticClass:"img-fluid",attrs:{src:"https://api.cheparo.com/".concat(t.product.image2),alt:t.product.product_name}})]):t._e(),t._v(" "),t.product.image3?e("div",{staticClass:"thumb-img swiper-slide"},[e("img",{staticClass:"img-fluid",attrs:{src:"https://api.cheparo.com/".concat(t.product.image3),alt:t.product.product_name}})]):t._e(),t._v(" "),t.product.image4?e("div",{staticClass:"thumb-img swiper-slide"},[e("img",{staticClass:"img-fluid",attrs:{src:"https://api.cheparo.com/".concat(t.product.image4),alt:t.product.product_name}})]):t._e()])],1)])]),t._v(" "),e("div",{staticClass:"col-lg-6 col-md-6"},[e("div",{staticClass:"product-details-content ml-70"},[e("h2",[t._v(t._s(t.product.product_name))]),t._v(" "),e("div",{staticClass:"product-details-price"},[e("span",[t._v("$"+t._s(t.product.price.toFixed(2)))])]),t._v(" "),e("p",[t._v(t._s(t.product.short_description))]),t._v(" "),e("div",{staticClass:"pro-details-size-color"},[e("div",{staticClass:"pro-details-color-wrap"},[e("h6",{staticClass:"label"},[t._v("Color: "),e("p",[t._v("   "+t._s(t.product.color))])])]),t._v(" "),e("div",{staticClass:"pro-details-size-wrap"},[e("h6",{staticClass:"label"},[t._v("Size: "),e("p",[t._v(" "+t._s(t.product.size))])])])]),t._v(" "),e("div",{staticClass:"pro-details-quality"},[e("div",{staticClass:"cart-plus-minus"},[e("button",{staticClass:"dec qtybutton",on:{click:function(e){return t.decreaseQuantity()}}},[t._v("-")]),t._v(" "),e("input",{staticClass:"cart-plus-minus-box",attrs:{type:"text",readonly:""},domProps:{value:t.singleQuantity}}),t._v(" "),e("button",{staticClass:"inc qtybutton",on:{click:function(e){return t.increaseQuantity()}}},[t._v("+")])]),t._v(" "),e("div",{staticClass:"pro-details-cart btn-hover"},[e("button",{on:{click:function(e){return t.addToCart(t.product)}}},[t._v("Add To Cart")])]),t._v(" "),e("div",{staticClass:"pro-details-wishlist"},[e("button",{attrs:{title:"wishlist"},on:{click:function(e){return t.addToWishlist(t.product)}}},[e("i",{staticClass:"fa fa-heart-o"})])])]),t._v(" "),t._m(0)])])])])])}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"pro-details-social"},[e("ul",[e("li",[e("a",{attrs:{href:"https://www.facebook.com/",target:"_blank"}},[e("i",{staticClass:"fa fa-facebook"})])]),t._v(" "),e("li",[e("a",{attrs:{href:"https://dribbble.com/",target:"_blank"}},[e("i",{staticClass:"fa fa-dribbble"})])]),t._v(" "),e("li",[e("a",{attrs:{href:"https://www.pinterest.com/",target:"_blank"}},[e("i",{staticClass:"fa fa-pinterest-p"})])]),t._v(" "),e("li",[e("a",{attrs:{href:"https://twitter.com/",target:"_blank"}},[e("i",{staticClass:"fa fa-twitter"})])]),t._v(" "),e("li",[e("a",{attrs:{href:"https://www.linkedin.com/",target:"_blank"}},[e("i",{staticClass:"fa fa-linkedin"})])])])])}],!1,null,null,null);e.default=component.exports}}]);