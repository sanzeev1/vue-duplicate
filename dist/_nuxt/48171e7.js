(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{386:function(t,c,r){"use strict";r.r(c);r(38),r(44),r(58),r(59),r(45),r(36);var o=r(20);r(242),r(11),r(32),r(39),r(70);function e(t,c){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);c&&(o=o.filter((function(c){return Object.getOwnPropertyDescriptor(t,c).enumerable}))),r.push.apply(r,o)}return r}function n(t){for(var c=1;c<arguments.length;c++){var r=null!=arguments[c]?arguments[c]:{};c%2?e(Object(r),!0).forEach((function(c){Object(o.a)(t,c,r[c])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):e(Object(r)).forEach((function(c){Object.defineProperty(t,c,Object.getOwnPropertyDescriptor(r,c))}))}return t}var d={props:["product","layout"],methods:{addToCart:function(t){var c=n(n({},t),{},{cartQuantity:1});this.$store.state.cart.find((function(c){return t.id===c.id}))?this.$notify({title:"Already added to cart update with one"}):this.$notify({title:"Add to cart successfully!"}),this.$store.dispatch("addToCartItem",c)},discountedPrice:function(t){return t.price-t.price*t.discount/100},addToWishlist:function(t){this.$store.state.wishlist.find((function(c){return t.id===c.id}))?this.$notify({title:"Already added to wishlist!"}):this.$notify({title:"Add to wishlist successfully!"}),this.$store.dispatch("addToWishlist",t)},onClick:function(t){this.$modal.show("quickview",t)},slugify:function(text){return text.toString().toLowerCase().replace(/\s+/g,"-").replace(/[^\w-]+/g,"").replace(/--+/g,"-").replace(/^-+/,"").replace(/-+$/,"")}}},l=r(16),component=Object(l.a)(d,(function(){var t=this,c=t._self._c;return c("div",{staticClass:"product-wrap mb-30"},[c("div",{staticClass:"product-img"},[c("n-link",{attrs:{to:"/product/".concat(t.product.id)}},[c("img",{staticClass:"default-img",attrs:{src:"https://api.cheparo.com/".concat(t.product.image),alt:t.product.product_name}}),t._v(" "),c("img",{staticClass:"hover-img",attrs:{src:"https://api.cheparo.com/".concat(t.product.image),alt:t.product.product_name}})]),t._v(" "),"twoColumn"===t.layout||"threeColumn"===t.layout?c("div",{staticClass:"product-action"},[c("div",{staticClass:"pro-same-action pro-wishlist"},[c("button",{staticClass:"btn",attrs:{title:"Wishlist"},on:{click:function(c){return t.addToWishlist(t.product)}}},[c("i",{staticClass:"pe-7s-like"})])]),t._v(" "),c("div",{staticClass:"pro-same-action pro-cart"},[c("button",{staticClass:"btn",attrs:{title:"Add To Cart"},on:{click:function(c){return t.addToCart(t.product)}}},[c("i",{staticClass:"pe-7s-cart"}),t._v("\n          Add to cart\n        ")])]),t._v(" "),c("div",{staticClass:"pro-same-action pro-quickview"},[c("button",{staticClass:"btn",attrs:{title:"Quick View"},on:{click:function(c){return t.onClick(t.product)}}},[c("i",{staticClass:"pe-7s-look"})])])]):t._e()],1),t._v(" "),c("div",{staticClass:"product-content text-center"},[c("h3",[c("n-link",{attrs:{to:"/product/".concat(t.product.id)}},[t._v(t._s(t.product.product_name))])],1),t._v(" "),c("div",{staticClass:"product-price"},[c("span",[t._v("$"+t._s(t.product.price))])]),t._v(" "),"list"===t.layout?c("div",{staticClass:"product-content__list-view"},[c("p",[t._v(t._s(t.product.short_description))]),t._v(" "),c("div",{staticClass:"pro-action d-flex align-items-center"},[c("div",{staticClass:"pro-cart btn-hover"},[c("button",{staticClass:"btn",attrs:{title:"Add To Cart"},on:{click:function(c){return t.addToCart(t.product)}}},[c("i",{staticClass:"pe-7s-cart"}),t._v("\n            Add to cart\n          ")])]),t._v(" "),c("div",{staticClass:"pro-wishlist"},[c("button",{on:{click:function(c){return t.addToWishlist(t.product)}}},[c("i",{staticClass:"fa fa-heart-o"})])])])]):t._e()])])}),[],!1,null,null,null);c.default=component.exports}}]);