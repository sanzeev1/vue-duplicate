(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{401:function(t,e,r){"use strict";r.r(e);r(11),r(32),r(39),r(70);var c={props:["classes"],computed:{categoryList:function(){return this.$store.getters.categoryList},sizeList:function(){return this.$store.getters.sizeList},colorList:function(){return this.$store.getters.colorList},tagList:function(){return this.$store.getters.tagList}},methods:{slugify:function(text){return text.toString().toLowerCase().replace(/\s+/g,"-").replace(/[^\w-]+/g,"").replace(/--+/g,"-").replace(/^-+/,"").replace(/-+$/,"")}}},l=r(16),component=Object(l.a)(c,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"sidebar-style",class:t.classes},[t._m(0),t._v(" "),e("div",{staticClass:"sidebar-widget"},[e("h4",{staticClass:"pro-sidebar-title"},[t._v("Categories")]),t._v(" "),e("ul",{staticClass:"sidebar-widget-list mt-20"},t._l(t.categoryList,(function(r,c){return e("li",{key:c,staticClass:"sidebar-widget-list-left"},[e("n-link",{attrs:{to:"?category=".concat(t.slugify(r))}},[e("span",{staticClass:"check-mark"}),t._v("\n                    "+t._s(r)+"\n                ")])],1)})),0)])])}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"sidebar-widget"},[e("h4",{staticClass:"pro-sidebar-title"},[t._v("Search")]),t._v(" "),e("div",{staticClass:"pro-sidebar-search mb-50 mt-25"},[e("form",{staticClass:"pro-sidebar-search-form"},[e("input",{attrs:{type:"text",placeholder:"Search here..."}}),t._v(" "),e("button",[e("i",{staticClass:"pe-7s-search"})])])])])}],!1,null,null,null);e.default=component.exports}}]);