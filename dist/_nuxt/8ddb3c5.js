(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{439:function(t,r,c){"use strict";c.r(r);c(243),c(39),c(44),c(58),c(59),c(45),c(36);var e=c(20);c(242),c(11),c(26),c(38),c(70);function o(t,r){var c=Object.keys(t);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(t);r&&(e=e.filter((function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable}))),c.push.apply(c,e)}return c}function n(t){for(var r=1;r<arguments.length;r++){var c=null!=arguments[r]?arguments[r]:{};r%2?o(Object(c),!0).forEach((function(r){Object(e.a)(t,r,c[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(c)):o(Object(c)).forEach((function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(c,r))}))}return t}var d={props:["product"],methods:{addToCart:function(t){var r=n(n({},t),{},{cartQuantity:1});this.$store.state.cart.find((function(r){return t.id===r.id}))?this.$notify({title:"Already added to cart update with one"}):this.$notify({title:"Add to cart successfully!"}),this.$store.dispatch("addToCartItem",r)},discountedPrice:function(t){return t.price-t.price*t.discount/100},addToWishlist:function(t){this.$store.state.wishlist.find((function(r){return t.id===r.id}))?this.$notify({title:"Already added to wishlist!"}):this.$notify({title:"Add to wishlist successfully!"}),this.$store.dispatch("addToWishlist",t)},onClick:function(t){this.$modal.show("quickview",t)},slugify:function(text){return text.toString().toLowerCase().replace(/\s+/g,"-").replace(/[^\w-]+/g,"").replace(/--+/g,"-").replace(/^-+/,"").replace(/-+$/,"")}}},l=c(16),component=Object(l.a)(d,(function(){var t=this,r=t._self._c;return r("div",{staticClass:"product-wrap-2 mb-25"},[r("div",{staticClass:"product-img"},[r("n-link",{attrs:{to:"/product/".concat(t.product.id)}},[r("img",{staticClass:"default-img",attrs:{src:"https://api.cheparo.com/".concat(t.product.image),alt:t.product.product_name}}),t._v(" "),r("img",{staticClass:"hover-img",attrs:{src:"https://api.cheparo.com/".concat(t.product.image),alt:t.product.product_name}})]),t._v(" "),r("div",{staticClass:"product-action-2"},[r("button",{staticClass:"btn",attrs:{title:"Add To Cart"},on:{click:function(r){return t.addToCart(t.product)}}},[r("i",{staticClass:"pe-7s-cart"})]),t._v(" "),r("button",{staticClass:"btn",attrs:{title:"Quick View"},on:{click:function(r){return t.onClick(t.product)}}},[r("i",{staticClass:"pe-7s-look"})])])],1),t._v(" "),r("div",{staticClass:"product-content-2"},[r("div",{staticClass:"title-price-wrap-2"},[r("h3",[r("n-link",{attrs:{to:"/product/".concat(t.product.id)}},[t._v(t._s(t.product.product_name))])],1),t._v(" "),r("div",{staticClass:"price-2"},[r("span",[t._v("$"+t._s(t.product.price.toFixed(2)))])])]),t._v(" "),r("div",{staticClass:"pro-wishlist-2"},[r("button",{on:{click:function(r){return t.addToWishlist(t.product)}}},[r("i",{staticClass:"pe-7s-like"})])])])])}),[],!1,null,null,null);r.default=component.exports}}]);