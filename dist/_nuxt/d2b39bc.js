(window.webpackJsonp=window.webpackJsonp||[]).push([[34,1,5,6,7,12,14,17,29,31,33],{381:function(t,e,n){"use strict";n.r(e);var r={},l=n(16),component=Object(l.a)(r,(function(){var t=this,e=t._self._c;return e("footer",{staticClass:"footer-area bg-gray pt-100 pb-70"},[e("div",{staticClass:"container"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-lg-2 col-sm-4"},[e("div",{staticClass:"copyright mb-30"},[e("div",{staticClass:"footer-logo"},[e("n-link",{attrs:{to:"/"}},[e("img",{attrs:{src:"/img/logo/logo.png",alt:"logo"}})])],1),t._v(" "),t._m(0)])]),t._v(" "),e("div",{staticClass:"col-lg-2 col-sm-4"},[e("div",{staticClass:"footer-widget mb-30 ml-30"},[t._m(1),t._v(" "),e("div",{staticClass:"footer-list"},[e("ul",[e("li",[e("n-link",{attrs:{to:"#"}},[t._v("About us")])],1),t._v(" "),e("li",[e("n-link",{attrs:{to:"#"}},[t._v("Store location")])],1),t._v(" "),e("li",[e("n-link",{attrs:{to:"/contact"}},[t._v("Contact")])],1),t._v(" "),e("li",[e("n-link",{attrs:{to:"#"}},[t._v("Orders tracking")])],1)])])])]),t._v(" "),e("div",{staticClass:"col-lg-2 col-sm-4"},[e("div",{staticClass:"footer-widget mb-30 ml-50"},[t._m(2),t._v(" "),e("div",{staticClass:"footer-list"},[e("ul",[e("li",[e("n-link",{attrs:{to:"/#"}},[t._v("Returns")])],1),t._v(" "),e("li",[e("n-link",{attrs:{to:"/#"}},[t._v("Support Policy")])],1),t._v(" "),e("li",[e("n-link",{attrs:{to:"/#"}},[t._v("Size guide")])],1),t._v(" "),e("li",[e("n-link",{attrs:{to:"/#"}},[t._v("FAQs")])],1)])])])]),t._v(" "),t._m(3),t._v(" "),t._m(4)])])])}),[function(){var t=this,e=t._self._c;return e("p",[t._v("\n            © 2022 "),e("a",{attrs:{href:"#",target:"_blank"}},[t._v("Flone")]),t._v("."),e("br"),t._v("\n            All Rights Reserved\n          ")])},function(){var t=this._self._c;return t("div",{staticClass:"footer-title"},[t("h3",[this._v("ABOUT US")])])},function(){var t=this._self._c;return t("div",{staticClass:"footer-title"},[t("h3",[this._v("USEFUL LINKS")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"col-lg-2 col-sm-6"},[e("div",{staticClass:"footer-widget mb-30 ml-75"},[e("div",{staticClass:"footer-title"},[e("h3",[t._v("FOLLOW US")])]),t._v(" "),e("div",{staticClass:"footer-list"},[e("ul",[e("li",[e("a",{attrs:{href:"#",target:"_blank"}},[t._v("Facebook")])]),t._v(" "),e("li",[e("a",{attrs:{href:"#",target:"_blank"}},[t._v("Twitter")])]),t._v(" "),e("li",[e("a",{attrs:{href:"#",target:"_blank"}},[t._v("Instagram")])]),t._v(" "),e("li",[e("a",{attrs:{href:"#",target:"_blank"}},[t._v("Youtube")])])])])])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"col-lg-4 col-sm-6"},[e("div",{staticClass:"footer-widget mb-30 ml-70"},[e("div",{staticClass:"footer-title"},[e("h3",[t._v("SUBSCRIBE")])]),t._v(" "),e("div",{staticClass:"subscribe-style"},[e("p",[t._v("\n              Get E-mail updates about our latest shop and special offers.\n            ")]),t._v(" "),e("div",{staticClass:"subscribe-form"},[e("form",{staticClass:"mc-form"},[e("input",{staticClass:"email",attrs:{type:"email",required:"",placeholder:"Enter your email here..",name:"email"}}),t._v(" "),e("button",{staticClass:"button",attrs:{name:"subscribe"}},[t._v("Subscribe")])])])])])])}],!1,null,null,null);e.default=component.exports},382:function(t,e,n){"use strict";n.r(e);n(26),n(129),n(11),n(27),n(28);var r={components:{Navigation:function(){return Promise.resolve().then(n.bind(null,241))},MiniCart:function(){return Promise.resolve().then(n.bind(null,239))}},props:["containerClass"],computed:{cartItemCount:function(){return this.$store.getters.cartItemCount},wishlistItemCount:function(){return this.$store.getters.wishlistItemCount}},methods:{setSearch:function(t){this.searchValue=t.target.value},search:function(t){t.preventDefault(),window.location="/shop/search="+t.target.value}},data:function(){return{isSticky:!1,isOpenSearch:!1,isOpenAccountSettings:!1,openCart:!1,navOpen:!1}},mounted:function(){var t=this;window.addEventListener("scroll",(function(){var e=window.scrollY;t.isSticky=e>=200}))}},l=n(16),component=Object(l.a)(r,(function(){var t=this,e=t._self._c;return e("div",[e("header",{staticClass:"header-area"},[e("div",{staticClass:"header-top-area header-padding-2 d-none d-lg-block"},[e("div",{class:t.containerClass},[t._m(0)])]),t._v(" "),e("div",{staticClass:"header-padding-1 sticky-bar header-res-padding clearfix",class:{"is-sticky":t.isSticky}},[e("div",{class:t.containerClass},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-lg-2 col-md-6 col-4"},[e("div",{staticClass:"logo"},[e("n-link",{attrs:{to:"/"}},[e("img",{attrs:{src:"/img/logo/logo.png",alt:"flone logo"}})])],1)]),t._v(" "),e("div",{staticClass:"col-lg-8 d-none d-lg-block"},[e("div",{staticClass:"main-menu"},[e("nav",[e("Navigation")],1)])]),t._v(" "),e("div",{staticClass:"col-lg-2 col-md-6 col-8"},[e("div",{staticClass:"header-right-wrap"},[e("div",{staticClass:"same-style header-search d-none d-lg-block"},[e("button",{staticClass:"search-active",on:{click:function(e){t.isOpenSearch=!t.isOpenSearch}}},[e("i",{staticClass:"pe-7s-search"})]),t._v(" "),e("div",{staticClass:"search-content",class:{active:t.isOpenSearch}},[e("form",{on:{submit:t.search}},[e("input",{attrs:{type:"text",name:"search",placeholder:"Search"},on:{change:t.setSearch}}),t._v(" "),t._m(1)])])]),t._v(" "),e("div",{staticClass:"same-style account-setting d-none d-lg-block"},[e("button",{staticClass:"account-setting-active",on:{click:function(e){t.isOpenAccountSettings=!t.isOpenAccountSettings}}},[e("i",{staticClass:"pe-7s-user-female"})]),t._v(" "),e("div",{staticClass:"account-dropdown",class:{active:t.isOpenAccountSettings}},[e("ul",[e("li",[e("n-link",{attrs:{to:"/login-register"}},[t._v("Login")])],1)])])]),t._v(" "),e("div",{staticClass:"same-style header-wishlist"},[e("n-link",{attrs:{to:"/wishlist"}},[e("i",{staticClass:"pe-7s-like"})]),t._v(" "),e("span",{staticClass:"count-style"},[t._v(t._s(t.wishlistItemCount))])],1),t._v(" "),e("div",{staticClass:"same-style cart-wrap"},[e("button",{staticClass:"icon-cart",on:{click:function(e){t.openCart=!t.openCart}}},[e("i",{staticClass:"pe-7s-shopbag"}),t._v(" "),e("span",{staticClass:"count-style"},[t._v(t._s(t.cartItemCount))])]),t._v(" "),e("MiniCart",{attrs:{miniCart:{visible:t.openCart}},on:{minicartClose:function(e){t.openCart=!t.openCart}}})],1),t._v(" "),e("div",{staticClass:"same-style mobile-menu-toggler d-block d-lg-none"},[e("button",{staticClass:"mobile-aside-button",on:{click:function(e){t.navOpen=!t.navOpen}}},[e("i",{staticClass:"pe-7s-menu"})])])])])])])])]),t._v(" "),e("OffCanvasMobileMenu",{class:{"show-mobile-menu":t.navOpen},on:{toggleAsideMenu:function(e){t.navOpen=!t.navOpen}}})],1)}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"header-top-inner"},[e("div",{staticClass:"language-currency-wrap"},[e("div",{staticClass:"same-language-currency language-style"},[e("select",{attrs:{name:"language"}},[e("option",{attrs:{value:"english"}},[t._v("English")]),t._v(" "),e("option",{attrs:{value:"hindi"}},[t._v("Hindi")]),t._v(" "),e("option",{attrs:{value:"spanish"}},[t._v("Spanish")])])]),t._v(" "),e("div",{staticClass:"same-language-currency use-style"},[e("select",{attrs:{name:"currency"}},[e("option",{attrs:{value:"usd"}},[t._v("USD")]),t._v(" "),e("option",{attrs:{value:"eur"}},[t._v("EUR")]),t._v(" "),e("option",{attrs:{value:"rup"}},[t._v("Rup")])])]),t._v(" "),e("div",{staticClass:"same-language-currency"},[e("p",[t._v("Call: "),e("a",{attrs:{href:"callto:3965410"}},[t._v("3965410")])])])]),t._v(" "),e("div",{staticClass:"header-offer"},[e("p",[t._v("Free delivery on order over "),e("span",[t._v("$200")])])])])},function(){var t=this._self._c;return t("button",{staticClass:"button-search"},[t("i",{staticClass:"pe-7s-search"})])}],!1,null,null,null);e.default=component.exports;installComponents(component,{Navigation:n(241).default,MiniCart:n(239).default,OffCanvasMobileMenu:n(240).default})},383:function(t,e,n){"use strict";n.r(e);var r={props:["pageTitle"]},l=n(16),component=Object(l.a)(r,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"breadcrumb-area pt-35 pb-35 bg-gray-3"},[e("div",{staticClass:"container"},[e("div",{staticClass:"breadcrumb-content text-center"},[e("ul",[e("li",[e("n-link",{attrs:{to:"/"}},[t._v("Home")])],1),t._v(" "),e("li",{staticClass:"active"},[t._v(t._s(t.pageTitle))])])])])])}),[],!1,null,null,null);e.default=component.exports},390:function(t,e,n){"use strict";n.r(e);n(243);var r={props:["banner"]},l=n(16),component=Object(l.a)(r,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"single-banner"},[e("n-link",{attrs:{to:"/shop"}},[e("img",{attrs:{src:t.banner.imgSrc,alt:t.banner.title}})]),t._v(" "),e("div",{staticClass:"banner-content"},[e("h3",[t._v(t._s(t.banner.title))]),t._v(" "),e("h4",[t._v("Starting at "),e("span",[t._v("$"+t._s(t.banner.price.toFixed(2)))])]),t._v(" "),e("n-link",{attrs:{to:"/shop"}},[e("i",{staticClass:"fa fa-long-arrow-right"})])],1)],1)}),[],!1,null,null,null);e.default=component.exports},393:function(t,e,n){t.exports=function(t){function e(n){if(i[n])return i[n].exports;var a=i[n]={i:n,l:!1,exports:{}};return t[n].call(a.exports,a,a.exports,e),a.l=!0,a.exports}var i={};return e.m=t,e.c=i,e.i=function(t){return t},e.d=function(t,i,n){e.o(t,i)||Object.defineProperty(t,i,{configurable:!1,enumerable:!0,get:n})},e.n=function(t){var i=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(i,"a",i),i},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="/dist/",e(e.s=2)}([function(t,e,i){var n=i(4)(i(1),i(5),null,null);t.exports=n.exports},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i(3);e.default={props:{startVal:{type:Number,required:!1,default:0},endVal:{type:Number,required:!1,default:2017},duration:{type:Number,required:!1,default:3e3},autoplay:{type:Boolean,required:!1,default:!0},decimals:{type:Number,required:!1,default:0,validator:function(t){return t>=0}},decimal:{type:String,required:!1,default:"."},separator:{type:String,required:!1,default:","},prefix:{type:String,required:!1,default:""},suffix:{type:String,required:!1,default:""},useEasing:{type:Boolean,required:!1,default:!0},easingFn:{type:Function,default:function(t,e,i,n){return i*(1-Math.pow(2,-10*t/n))*1024/1023+e}}},data:function(){return{localStartVal:this.startVal,displayValue:this.formatNumber(this.startVal),printVal:null,paused:!1,localDuration:this.duration,startTime:null,timestamp:null,remaining:null,rAF:null}},computed:{countDown:function(){return this.startVal>this.endVal}},watch:{startVal:function(){this.autoplay&&this.start()},endVal:function(){this.autoplay&&this.start()}},mounted:function(){this.autoplay&&this.start(),this.$emit("mountedCallback")},methods:{start:function(){this.localStartVal=this.startVal,this.startTime=null,this.localDuration=this.duration,this.paused=!1,this.rAF=(0,n.requestAnimationFrame)(this.count)},pauseResume:function(){this.paused?(this.resume(),this.paused=!1):(this.pause(),this.paused=!0)},pause:function(){(0,n.cancelAnimationFrame)(this.rAF)},resume:function(){this.startTime=null,this.localDuration=+this.remaining,this.localStartVal=+this.printVal,(0,n.requestAnimationFrame)(this.count)},reset:function(){this.startTime=null,(0,n.cancelAnimationFrame)(this.rAF),this.displayValue=this.formatNumber(this.startVal)},count:function(t){this.startTime||(this.startTime=t),this.timestamp=t;var e=t-this.startTime;this.remaining=this.localDuration-e,this.useEasing?this.countDown?this.printVal=this.localStartVal-this.easingFn(e,0,this.localStartVal-this.endVal,this.localDuration):this.printVal=this.easingFn(e,this.localStartVal,this.endVal-this.localStartVal,this.localDuration):this.countDown?this.printVal=this.localStartVal-(this.localStartVal-this.endVal)*(e/this.localDuration):this.printVal=this.localStartVal+(this.localStartVal-this.startVal)*(e/this.localDuration),this.countDown?this.printVal=this.printVal<this.endVal?this.endVal:this.printVal:this.printVal=this.printVal>this.endVal?this.endVal:this.printVal,this.displayValue=this.formatNumber(this.printVal),e<this.localDuration?this.rAF=(0,n.requestAnimationFrame)(this.count):this.$emit("callback")},isNumber:function(t){return!isNaN(parseFloat(t))},formatNumber:function(t){t=t.toFixed(this.decimals);var e=(t+="").split("."),i=e[0],n=e.length>1?this.decimal+e[1]:"",a=/(\d+)(\d{3})/;if(this.separator&&!this.isNumber(this.separator))for(;a.test(i);)i=i.replace(a,"$1"+this.separator+"$2");return this.prefix+i+n+this.suffix}},destroyed:function(){(0,n.cancelAnimationFrame)(this.rAF)}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=function(t){return t&&t.__esModule?t:{default:t}}(i(0));e.default=a.default,"undefined"!=typeof window&&window.Vue&&window.Vue.component("count-to",a.default)},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=0,a="webkit moz ms o".split(" "),r=void 0,l=void 0;if("undefined"==typeof window)e.requestAnimationFrame=r=function(){},e.cancelAnimationFrame=l=function(){};else{e.requestAnimationFrame=r=window.requestAnimationFrame,e.cancelAnimationFrame=l=window.cancelAnimationFrame;for(var s=void 0,u=0;u<a.length&&(!r||!l);u++)s=a[u],e.requestAnimationFrame=r=r||window[s+"RequestAnimationFrame"],e.cancelAnimationFrame=l=l||window[s+"CancelAnimationFrame"]||window[s+"CancelRequestAnimationFrame"];r&&l||(e.requestAnimationFrame=r=function(t){var e=(new Date).getTime(),i=Math.max(0,16-(e-n)),a=window.setTimeout((function(){t(e+i)}),i);return n=e+i,a},e.cancelAnimationFrame=l=function(t){window.clearTimeout(t)})}e.requestAnimationFrame=r,e.cancelAnimationFrame=l},function(t,e){t.exports=function(t,e,i,n){var a,r=t=t||{},l=typeof t.default;"object"!==l&&"function"!==l||(a=t,r=t.default);var s="function"==typeof r?r.options:r;if(e&&(s.render=e.render,s.staticRenderFns=e.staticRenderFns),i&&(s._scopeId=i),n){var u=Object.create(s.computed||null);Object.keys(n).forEach((function(t){var e=n[t];u[t]=function(){return e}})),s.computed=u}return{esModule:a,exports:r,options:s}}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("span",[t._v("\n  "+t._s(t.displayValue)+"\n")])},staticRenderFns:[]}}])},400:function(t,e,n){"use strict";n.r(e);var r={data:function(){return{title:"Welcome To Flone",subTitle:"Who Are We",desc:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt labor et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commo consequat irure"}}},l=n(16),component=Object(l.a)(r,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"welcome-area"},[e("div",{staticClass:"container"},[e("div",{staticClass:"welcome-content text-center"},[e("h5",[t._v(t._s(t.subTitle))]),t._v(" "),e("h1",[t._v(t._s(t.title))]),t._v(" "),e("p",[t._v(t._s(t.desc))])])])])}),[],!1,null,null,null);e.default=component.exports},401:function(t,e,n){"use strict";n.r(e);var r={data:function(){return{banners:[{id:1,title:"Watches",price:99,imgSrc:"/img/banner/banner-1.jpg"},{id:2,title:"Plo Bag",price:80,imgSrc:"/img/banner/banner-2.jpg"},{id:3,title:"Sunglass",price:79,imgSrc:"/img/banner/banner-3.jpg"}]}}},l=n(16),component=Object(l.a)(r,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"banner-area"},[e("div",{staticClass:"container"},[e("div",{staticClass:"row mtn-30"},t._l(t.banners,(function(t,n){return e("div",{key:n,staticClass:"col-md-4 mt-30"},[e("BannerItem",{attrs:{banner:t}})],1)})),0)])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{BannerItem:n(390).default})},402:function(t,e,n){"use strict";n.r(e);var r={data:function(){return{items:[{id:1,title:"Our vision",desc:"Flone provide how all this mistaken idea of denounc pleasure and sing pain was born an will give you a ete account of the system, and expound the actual teangs the eat explorer of the truth."},{id:2,title:"Our mission",desc:"Flone provide how all this mistaken idea of denounc pleasure and sing pain was born an will give you a ete account of the system, and expound the actual teangs the eat explorer of the truth."},{id:3,title:"Our goal",desc:"Flone provide how all this mistaken idea of denounc pleasure and sing pain was born an will give you a ete account of the system, and expound the actual teangs the eat explorer of the truth."}]}}},l=n(16),component=Object(l.a)(r,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"about-mission-area pb-70"},[e("div",{staticClass:"container"},[e("div",{staticClass:"row"},t._l(t.items,(function(n,r){return e("div",{key:r,staticClass:"col-md-4"},[e("div",{staticClass:"single-mission mb-30"},[e("h3",[t._v(t._s(n.title))]),t._v(" "),e("p",[t._v(t._s(n.desc))])])])})),0)])])}),[],!1,null,null,null);e.default=component.exports},403:function(t,e,n){"use strict";n.r(e);var r=n(393),l={components:{countTo:n.n(r).a},data:function(){return{startVal:1,isVisible:!1,funFacts:[{id:1,endVal:360,title:"Project Done",icon:"pe-7s-portfolio"},{id:2,endVal:690,title:"Cups Of Coffee",icon:"pe-7s-cup"},{id:3,endVal:580,title:"Branding",icon:"pe-7s-light"},{id:4,endVal:850,title:"Happy Clients",icon:"pe-7s-smile"}]}},methods:{visibilityChanged:function(t){this.isVisible=t}}},o=n(16),component=Object(o.a)(l,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"funfact-area bg-gray-3 pt-100 pb-70"},[e("div",{staticClass:"container"},[e("div",{directives:[{name:"observe-visibility",rawName:"v-observe-visibility",value:{callback:t.visibilityChanged,once:!0},expression:"{callback: visibilityChanged, once: true}"}],staticClass:"row"},t._l(t.funFacts,(function(n,r){return e("div",{key:r,staticClass:"col-lg-3 col-sm-6"},[t.isVisible?e("div",{staticClass:"single-count text-center mb-30"},[e("div",{staticClass:"count-icon"},[e("i",{class:n.icon})]),t._v(" "),e("countTo",{attrs:{startVal:t.startVal,endVal:n.endVal,duration:4e3}}),t._v(" "),e("h5",{staticClass:"title"},[t._v(t._s(n.title))])],1):t._e()])})),0)])])}),[],!1,null,null,null);e.default=component.exports},404:function(t,e,n){"use strict";n.r(e);n(40);var r={data:function(){return{teamMemberData:[{imgSrc:"/img/team/team-1.jpg",name:"Stephen Fleming",designation:"Manager",socialLink:[{url:"https://www.facebook.com/",icon:"fa fa-facebook"},{url:"https://twitter.com/",icon:"fa fa-twitter"},{url:"https://www.instagram.com/",icon:"fa fa-instagram"}]},{imgSrc:"/img/team/team-2.jpg",name:"Jonti Rodes",designation:"Marketing Manager",socialLink:[{url:"https://www.facebook.com/",icon:"fa fa-facebook"},{url:"https://twitter.com/",icon:"fa fa-twitter"},{url:"https://www.instagram.com/",icon:"fa fa-instagram"}]},{imgSrc:"/img/team/team-3.jpg",name:"Robart Carlos",designation:"Chief Designer",socialLink:[{url:"https://www.facebook.com/",icon:"fa fa-facebook"},{url:"https://twitter.com/",icon:"fa fa-twitter"},{url:"https://www.instagram.com/",icon:"fa fa-instagram"}]},{imgSrc:"/img/team/team-4.jpg",name:"Shan Williams",designation:"Engineer",socialLink:[{url:"https://www.facebook.com/",icon:"fa fa-facebook"},{url:"https://twitter.com/",icon:"fa fa-twitter"},{url:"https://www.instagram.com/",icon:"fa fa-instagram"}]}]}}},l=n(16),component=Object(l.a)(r,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"team-area pt-95 pb-70"},[e("div",{staticClass:"container"},[t._m(0),t._v(" "),e("div",{staticClass:"row"},t._l(t.teamMemberData,(function(n,r){return e("div",{key:r,staticClass:"col-lg-3 col-sm-6"},[e("div",{staticClass:"team-wrapper mb-30"},[e("div",{staticClass:"team-img"},[e("img",{attrs:{src:n.imgSrc,alt:n.name}}),t._v(" "),e("div",{staticClass:"team-action"},t._l(n.socialLink,(function(t,n){return e("a",{key:n,attrs:{href:t.url}},[e("i",{class:t.icon})])})),0)]),t._v(" "),e("div",{staticClass:"team-content text-center"},[e("h4",[t._v(t._s(n.name))]),t._v(" "),e("span",[t._v(t._s(n.designation))])])])])})),0)])])}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"section-title-2 text-center mb-60"},[e("h2",[t._v("Team Members")]),t._v(" "),e("p",[t._v("There are few team members for our company")])])}],!1,null,null,null);e.default=component.exports},405:function(t,e,n){"use strict";n.r(e);var r={data:function(){return{brandLogoCarousel:{loop:!0,speed:750,spaceBetween:30,slidesPerView:5,autoplay:!0,breakpoints:{320:{slidesPerView:2},480:{slidesPerView:3},768:{slidesPerView:4},992:{slidesPerView:5}}}}}},l=n(16),component=Object(l.a)(r,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"brand-logo-area pb-100 about-brand-logo"},[e("div",{staticClass:"container"},[e("div",{staticClass:"brand-logo-active"},[e("swiper",{attrs:{options:t.brandLogoCarousel}},[e("div",{staticClass:"single-brand-logo swiper-slide"},[e("img",{attrs:{src:"/img/brand-logo/barnd-logo-1.png",alt:""}})]),t._v(" "),e("div",{staticClass:"single-brand-logo swiper-slide"},[e("img",{attrs:{src:"/img/brand-logo/barnd-logo-2.png",alt:""}})]),t._v(" "),e("div",{staticClass:"single-brand-logo swiper-slide"},[e("img",{attrs:{src:"/img/brand-logo/barnd-logo-3.png",alt:""}})]),t._v(" "),e("div",{staticClass:"single-brand-logo swiper-slide"},[e("img",{attrs:{src:"/img/brand-logo/barnd-logo-4.png",alt:""}})]),t._v(" "),e("div",{staticClass:"single-brand-logo swiper-slide"},[e("img",{attrs:{src:"/img/brand-logo/barnd-logo-5.png",alt:""}})])])],1)])])}),[],!1,null,null,null);e.default=component.exports},418:function(t,e,n){"use strict";n.r(e);n(11),n(27),n(28);var r={components:{HeaderWithTopbar:function(){return Promise.resolve().then(n.bind(null,382))},Breadcrumb:function(){return Promise.resolve().then(n.bind(null,383))},WelcomeMessage:function(){return Promise.resolve().then(n.bind(null,400))},BannerStyleOne:function(){return Promise.resolve().then(n.bind(null,401))},AboutMission:function(){return Promise.resolve().then(n.bind(null,402))},FunFact:function(){return Promise.resolve().then(n.bind(null,403))},TeamMembers:function(){return Promise.resolve().then(n.bind(null,404))},BrandLogoCarousel:function(){return Promise.resolve().then(n.bind(null,405))},TheFooter:function(){return Promise.resolve().then(n.bind(null,381))}},head:function(){return{title:"About Us"}}},l=n(16),component=Object(l.a)(r,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"about-page-wrapper"},[e("HeaderWithTopbar",{attrs:{containerClass:"container"}}),t._v(" "),e("Breadcrumb",{attrs:{pageTitle:"about us"}}),t._v(" "),e("WelcomeMessage",{staticClass:"pt-100 pb-95"}),t._v(" "),e("BannerStyleOne",{staticClass:"pb-70"}),t._v(" "),e("AboutMission"),t._v(" "),e("FunFact"),t._v(" "),e("TeamMembers"),t._v(" "),e("BrandLogoCarousel"),t._v(" "),e("TheFooter")],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{HeaderWithTopbar:n(382).default,Breadcrumb:n(383).default,WelcomeMessage:n(400).default,BannerStyleOne:n(401).default,AboutMission:n(402).default,FunFact:n(403).default,TeamMembers:n(404).default,BrandLogoCarousel:n(405).default,TheFooter:n(381).default})}}]);