(window.webpackJsonp=window.webpackJsonp||[]).push([[35,8,11,16,31],{381:function(t,e,l){"use strict";l.r(e);var o={},n=l(16),component=Object(n.a)(o,(function(){var t=this,e=t._self._c;return e("footer",{staticClass:"footer-area bg-gray pt-100 pb-70"},[e("div",{staticClass:"container"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-lg-2 col-sm-4"},[e("div",{staticClass:"copyright mb-30"},[e("div",{staticClass:"footer-logo"},[e("n-link",{attrs:{to:"/"}},[e("img",{attrs:{src:"/img/logo/logo.png",alt:"logo"}})])],1),t._v(" "),t._m(0)])]),t._v(" "),e("div",{staticClass:"col-lg-2 col-sm-4"},[e("div",{staticClass:"footer-widget mb-30 ml-30"},[t._m(1),t._v(" "),e("div",{staticClass:"footer-list"},[e("ul",[e("li",[e("n-link",{attrs:{to:"#"}},[t._v("About us")])],1),t._v(" "),e("li",[e("n-link",{attrs:{to:"#"}},[t._v("Store location")])],1),t._v(" "),e("li",[e("n-link",{attrs:{to:"/contact"}},[t._v("Contact")])],1),t._v(" "),e("li",[e("n-link",{attrs:{to:"#"}},[t._v("Orders tracking")])],1)])])])]),t._v(" "),e("div",{staticClass:"col-lg-2 col-sm-4"},[e("div",{staticClass:"footer-widget mb-30 ml-50"},[t._m(2),t._v(" "),e("div",{staticClass:"footer-list"},[e("ul",[e("li",[e("n-link",{attrs:{to:"/#"}},[t._v("Returns")])],1),t._v(" "),e("li",[e("n-link",{attrs:{to:"/#"}},[t._v("Support Policy")])],1),t._v(" "),e("li",[e("n-link",{attrs:{to:"/#"}},[t._v("Size guide")])],1),t._v(" "),e("li",[e("n-link",{attrs:{to:"/#"}},[t._v("FAQs")])],1)])])])]),t._v(" "),t._m(3),t._v(" "),t._m(4)])])])}),[function(){var t=this,e=t._self._c;return e("p",[t._v("\n            © 2022 "),e("a",{attrs:{href:"#",target:"_blank"}},[t._v("Flone")]),t._v("."),e("br"),t._v("\n            All Rights Reserved\n          ")])},function(){var t=this._self._c;return t("div",{staticClass:"footer-title"},[t("h3",[this._v("ABOUT US")])])},function(){var t=this._self._c;return t("div",{staticClass:"footer-title"},[t("h3",[this._v("USEFUL LINKS")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"col-lg-2 col-sm-6"},[e("div",{staticClass:"footer-widget mb-30 ml-75"},[e("div",{staticClass:"footer-title"},[e("h3",[t._v("FOLLOW US")])]),t._v(" "),e("div",{staticClass:"footer-list"},[e("ul",[e("li",[e("a",{attrs:{href:"#",target:"_blank"}},[t._v("Facebook")])]),t._v(" "),e("li",[e("a",{attrs:{href:"#",target:"_blank"}},[t._v("Twitter")])]),t._v(" "),e("li",[e("a",{attrs:{href:"#",target:"_blank"}},[t._v("Instagram")])]),t._v(" "),e("li",[e("a",{attrs:{href:"#",target:"_blank"}},[t._v("Youtube")])])])])])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"col-lg-4 col-sm-6"},[e("div",{staticClass:"footer-widget mb-30 ml-70"},[e("div",{staticClass:"footer-title"},[e("h3",[t._v("SUBSCRIBE")])]),t._v(" "),e("div",{staticClass:"subscribe-style"},[e("p",[t._v("\n              Get E-mail updates about our latest shop and special offers.\n            ")]),t._v(" "),e("div",{staticClass:"subscribe-form"},[e("form",{staticClass:"mc-form"},[e("input",{staticClass:"email",attrs:{type:"email",required:"",placeholder:"Enter your email here..",name:"email"}}),t._v(" "),e("button",{staticClass:"button",attrs:{name:"subscribe"}},[t._v("Subscribe")])])])])])])}],!1,null,null,null);e.default=component.exports},382:function(t,e,l){"use strict";l.r(e);l(11),l(26),l(27);var o={components:{Navigation:function(){return Promise.resolve().then(l.bind(null,241))},MiniCart:function(){return Promise.resolve().then(l.bind(null,239))}},props:["containerClass"],computed:{cartItemCount:function(){return this.$store.getters.cartItemCount},wishlistItemCount:function(){return this.$store.getters.wishlistItemCount}},data:function(){return{isSticky:!1,isOpenSearch:!1,isOpenAccountSettings:!1,openCart:!1,navOpen:!1}},mounted:function(){var t=this;window.addEventListener("scroll",(function(){var e=window.scrollY;t.isSticky=e>=200}))}},n=l(16),component=Object(n.a)(o,(function(){var t=this,e=t._self._c;return e("div",[e("header",{staticClass:"header-area"},[e("div",{staticClass:"header-top-area header-padding-2 d-none d-lg-block"},[e("div",{class:t.containerClass},[t._m(0)])]),t._v(" "),e("div",{staticClass:"header-padding-1 sticky-bar header-res-padding clearfix",class:{"is-sticky":t.isSticky}},[e("div",{class:t.containerClass},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-lg-2 col-md-6 col-4"},[e("div",{staticClass:"logo"},[e("n-link",{attrs:{to:"/"}},[e("img",{attrs:{src:"/img/logo/logo.png",alt:"flone logo"}})])],1)]),t._v(" "),e("div",{staticClass:"col-lg-8 d-none d-lg-block"},[e("div",{staticClass:"main-menu"},[e("nav",[e("Navigation")],1)])]),t._v(" "),e("div",{staticClass:"col-lg-2 col-md-6 col-8"},[e("div",{staticClass:"header-right-wrap"},[e("div",{staticClass:"same-style header-search d-none d-lg-block"},[e("button",{staticClass:"search-active",on:{click:function(e){t.isOpenSearch=!t.isOpenSearch}}},[e("i",{staticClass:"pe-7s-search"})]),t._v(" "),e("div",{staticClass:"search-content",class:{active:t.isOpenSearch}},[t._m(1)])]),t._v(" "),e("div",{staticClass:"same-style account-setting d-none d-lg-block"},[e("button",{staticClass:"account-setting-active",on:{click:function(e){t.isOpenAccountSettings=!t.isOpenAccountSettings}}},[e("i",{staticClass:"pe-7s-user-female"})]),t._v(" "),e("div",{staticClass:"account-dropdown",class:{active:t.isOpenAccountSettings}},[e("ul",[e("li",[e("n-link",{attrs:{to:"/login-register"}},[t._v("Login")])],1)])])]),t._v(" "),e("div",{staticClass:"same-style header-wishlist"},[e("n-link",{attrs:{to:"/wishlist"}},[e("i",{staticClass:"pe-7s-like"})]),t._v(" "),e("span",{staticClass:"count-style"},[t._v(t._s(t.wishlistItemCount))])],1),t._v(" "),e("div",{staticClass:"same-style cart-wrap"},[e("button",{staticClass:"icon-cart",on:{click:function(e){t.openCart=!t.openCart}}},[e("i",{staticClass:"pe-7s-shopbag"}),t._v(" "),e("span",{staticClass:"count-style"},[t._v(t._s(t.cartItemCount))])]),t._v(" "),e("MiniCart",{attrs:{miniCart:{visible:t.openCart}},on:{minicartClose:function(e){t.openCart=!t.openCart}}})],1),t._v(" "),e("div",{staticClass:"same-style mobile-menu-toggler d-block d-lg-none"},[e("button",{staticClass:"mobile-aside-button",on:{click:function(e){t.navOpen=!t.navOpen}}},[e("i",{staticClass:"pe-7s-menu"})])])])])])])])]),t._v(" "),e("OffCanvasMobileMenu",{class:{"show-mobile-menu":t.navOpen},on:{toggleAsideMenu:function(e){t.navOpen=!t.navOpen}}})],1)}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"header-top-inner"},[e("div",{staticClass:"language-currency-wrap"},[e("div",{staticClass:"same-language-currency language-style"},[e("select",{attrs:{name:"language"}},[e("option",{attrs:{value:"english"}},[t._v("English")]),t._v(" "),e("option",{attrs:{value:"hindi"}},[t._v("Hindi")]),t._v(" "),e("option",{attrs:{value:"spanish"}},[t._v("Spanish")])])]),t._v(" "),e("div",{staticClass:"same-language-currency use-style"},[e("select",{attrs:{name:"currency"}},[e("option",{attrs:{value:"usd"}},[t._v("USD")]),t._v(" "),e("option",{attrs:{value:"eur"}},[t._v("EUR")]),t._v(" "),e("option",{attrs:{value:"rup"}},[t._v("Rup")])])]),t._v(" "),e("div",{staticClass:"same-language-currency"},[e("p",[t._v("Call: "),e("a",{attrs:{href:"callto:3965410"}},[t._v("3965410")])])])]),t._v(" "),e("div",{staticClass:"header-offer"},[e("p",[t._v("Free delivery on order over "),e("span",[t._v("$200")])])])])},function(){var t=this._self._c;return t("form",[t("input",{attrs:{type:"text",placeholder:"Search"}}),this._v(" "),t("button",{staticClass:"button-search"},[t("i",{staticClass:"pe-7s-search"})])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{Navigation:l(241).default,MiniCart:l(239).default,OffCanvasMobileMenu:l(240).default})},383:function(t,e,l){"use strict";l.r(e);var o={props:["pageTitle"]},n=l(16),component=Object(n.a)(o,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"breadcrumb-area pt-35 pb-35 bg-gray-3"},[e("div",{staticClass:"container"},[e("div",{staticClass:"breadcrumb-content text-center"},[e("ul",[e("li",[e("n-link",{attrs:{to:"/"}},[t._v("Home")])],1),t._v(" "),e("li",{staticClass:"active"},[t._v(t._s(t.pageTitle))])])])])])}),[],!1,null,null,null);e.default=component.exports},392:function(t){t.exports=JSON.parse('[{"id":1,"title":"A guide to latest trends product","desc":"Aenean sollicitudin, lorem quis on endum uctor nisi elitod the cona sequat ipsum, necas sagittis sem natoque nibh id penatibus","imgSrc":"/img/blog/blog-1.jpg","category":["women","lifestyle"],"author":"Admin","date":"15 April, 2021","comment":12},{"id":2,"title":"Five ways to lead a happy life","desc":"Aenean sollicitudin, lorem quis on endum uctor nisi elitod the cona sequat ipsum, necas sagittis sem natoque nibh id penatibus","imgSrc":"/img/blog/blog-2.jpg","category":["lifestyle","men"],"author":"admin","date":"22 March, 2021","comment":45},{"id":3,"title":"Tips on having a happy life forever","desc":"Aenean sollicitudin, lorem quis on endum uctor nisi elitod the cona sequat ipsum, necas sagittis sem natoque nibh id penatibus","imgSrc":"/img/blog/blog-3.jpg","category":["women","men"],"author":"admin","date":"10 May, 2021","comment":30},{"id":4,"title":"New winter collection with discount","desc":"Aenean sollicitudin, lorem quis on endum uctor nisi elitod the cona sequat ipsum, necas sagittis sem natoque nibh id penatibus","imgSrc":"/img/blog/blog-4.jpg","category":["women","lifestyle"],"author":"Admin","date":"15 June, 2021","comment":52},{"id":5,"title":"New collection for this winter","desc":"Aenean sollicitudin, lorem quis on endum uctor nisi elitod the cona sequat ipsum, necas sagittis sem natoque nibh id penatibus","imgSrc":"/img/blog/blog-5.jpg","category":["lifestyle","men"],"author":"admin","date":"10 July, 2021","comment":35},{"id":6,"title":"Our best collection this winter","desc":"Aenean sollicitudin, lorem quis on endum uctor nisi elitod the cona sequat ipsum, necas sagittis sem natoque nibh id penatibus","imgSrc":"/img/blog/blog-6.jpg","category":["women","men"],"author":"admin","date":"18 January, 2021","comment":40},{"id":7,"title":"Tempor incididunt labo dolor magna","desc":"Aenean sollicitudin, lorem quis on endum uctor nisi elitod the cona sequat ipsum, necas sagittis sem natoque nibh id penatibus","imgSrc":"/img/blog/blog-7.jpg","category":["women","lifestyle"],"author":"Admin","date":"15 April, 2021","comment":12},{"id":8,"title":"Lorem ipsum dolor sit amet consectetur","desc":"Aenean sollicitudin, lorem quis on endum uctor nisi elitod the cona sequat ipsum, necas sagittis sem natoque nibh id penatibus","imgSrc":"/img/blog/blog-8.jpg","category":["lifestyle","men"],"author":"admin","date":"22 March, 2021","comment":45},{"id":9,"title":"Reprehendrit in voluptate velit cillum","desc":"Aenean sollicitudin, lorem quis on endum uctor nisi elitod the cona sequat ipsum, necas sagittis sem natoque nibh id penatibus","imgSrc":"/img/blog/blog-9.jpg","category":["women","men"],"author":"admin","date":"10 May, 2021","comment":30}]')},405:function(t,e,l){"use strict";l.r(e);var o={},n=l(16),component=Object(n.a)(o,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"blog-sidebar"},[t._m(0),t._v(" "),e("div",{staticClass:"sidebar-widget"},[e("h4",{staticClass:"pro-sidebar-title"},[t._v("Recent Projects")]),t._v(" "),e("div",{staticClass:"sidebar-project-wrap mt-30"},[e("div",{staticClass:"single-sidebar-blog"},[e("div",{staticClass:"sidebar-blog-img"},[e("n-link",{attrs:{to:"/blog/a-guide-to-latest-trends-product"}},[e("img",{attrs:{src:"/img/blog/sidebar-1.jpg",alt:""}})])],1),t._v(" "),e("div",{staticClass:"sidebar-blog-content"},[e("span",[t._v("Photography")]),t._v(" "),e("h4",[e("n-link",{attrs:{to:"/blog/a-guide-to-latest-trends-product"}},[t._v("A guide to latest trends product")])],1)])]),t._v(" "),e("div",{staticClass:"single-sidebar-blog"},[e("div",{staticClass:"sidebar-blog-img"},[e("n-link",{attrs:{to:"/blog/a-guide-to-latest-trends-product"}},[e("img",{attrs:{src:"/img/blog/sidebar-2.jpg",alt:""}})])],1),t._v(" "),e("div",{staticClass:"sidebar-blog-content"},[e("span",[t._v("Branding")]),t._v(" "),e("h4",[e("n-link",{attrs:{to:"/blog/a-guide-to-latest-trends-product"}},[t._v("Five ways to lead a happy life")])],1)])]),t._v(" "),e("div",{staticClass:"single-sidebar-blog"},[e("div",{staticClass:"sidebar-blog-img"},[e("n-link",{attrs:{to:"/blog/a-guide-to-latest-trends-product"}},[e("img",{attrs:{src:"/img/blog/sidebar-3.jpg",alt:""}})])],1),t._v(" "),e("div",{staticClass:"sidebar-blog-content"},[e("span",[t._v("Design")]),t._v(" "),e("h4",[e("n-link",{attrs:{to:"/blog/a-guide-to-latest-trends-product"}},[t._v("Tips on having a happy life")])],1)])]),t._v(" "),e("div",{staticClass:"single-sidebar-blog"},[e("div",{staticClass:"sidebar-blog-img"},[e("n-link",{attrs:{to:"/blog/a-guide-to-latest-trends-product"}},[e("img",{attrs:{src:"/img/blog/sidebar-1.jpg",alt:""}})])],1),t._v(" "),e("div",{staticClass:"sidebar-blog-content"},[e("span",[t._v("Photography")]),t._v(" "),e("h4",[e("n-link",{attrs:{to:"/blog/a-guide-to-latest-trends-product"}},[t._v("New collection for this winter/blog")])],1)])])])]),t._v(" "),e("div",{staticClass:"sidebar-widget mt-35"},[e("h4",{staticClass:"pro-sidebar-title"},[t._v("Categories")]),t._v(" "),e("ul",{staticClass:"sidebar-widget-list mt-20"},[e("li",{staticClass:"sidebar-widget-list-left"},[e("n-link",{attrs:{to:"/blog/blog-without-sidebar"}},[e("span",{staticClass:"check-mark"}),t._v("\n                    women\n                    "),e("span",[t._v("8")])])],1),t._v(" "),e("li",{staticClass:"sidebar-widget-list-left"},[e("n-link",{attrs:{to:"/blog/blog-without-sidebar"}},[e("span",{staticClass:"check-mark"}),t._v("\n                    men\n                    "),e("span",[t._v("5")])])],1),t._v(" "),e("li",{staticClass:"sidebar-widget-list-left"},[e("n-link",{attrs:{to:"/blog/blog-without-sidebar"}},[e("span",{staticClass:"check-mark"}),t._v("\n                    lifestyle\n                    "),e("span",[t._v("10")])])],1),t._v(" "),e("li",{staticClass:"sidebar-widget-list-left"},[e("n-link",{attrs:{to:"/blog/blog-without-sidebar"}},[e("span",{staticClass:"check-mark"}),t._v("\n                    fashion\n                    "),e("span",[t._v("15")])])],1)])]),t._v(" "),e("div",{staticClass:"sidebar-widget mt-50"},[e("h4",{staticClass:"pro-sidebar-title"},[t._v("Tag")]),t._v(" "),e("div",{staticClass:"sidebar-widget-tag mt-25"},[e("ul",[e("li",[e("n-link",{attrs:{to:"/blog/blog-without-sidebar"}},[t._v("Clothing")])],1),t._v(" "),e("li",[e("n-link",{attrs:{to:"/blog/blog-without-sidebar"}},[t._v("Accessories")])],1),t._v(" "),e("li",[e("n-link",{attrs:{to:"/blog/blog-without-sidebar"}},[t._v("For Men")])],1),t._v(" "),e("li",[e("n-link",{attrs:{to:"/blog/blog-without-sidebar"}},[t._v("Women")])],1),t._v(" "),e("li",[e("n-link",{attrs:{to:"/blog/blog-without-sidebar"}},[t._v("Fashion")])],1)])])])])}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"sidebar-widget"},[e("h4",{staticClass:"pro-sidebar-title"},[t._v("Search")]),t._v(" "),e("div",{staticClass:"pro-sidebar-search mb-55 mt-25"},[e("form",{staticClass:"pro-sidebar-search-form"},[e("input",{attrs:{type:"text",placeholder:"Search here..."}}),t._v(" "),e("button",[e("i",{staticClass:"pe-7s-search"})])])])])}],!1,null,null,null);e.default=component.exports},430:function(t,e,l){"use strict";l.r(e);l(242),l(11),l(32),l(39),l(70);var o=l(392),n={data:function(){return{blog:o,slug:this.$route.params.slug}},mounted:function(){var t=this;this.blog=o.find((function(e){return t.slugify(e.title)===t.slug}))},methods:{slugify:function(text){return text.toString().toLowerCase().replace(/\s+/g,"-").replace(/[^\w-]+/g,"").replace(/--+/g,"-").replace(/^-+/,"").replace(/-+$/,"")}},head:function(){return{title:this.blog.title}}},r=l(16),component=Object(r.a)(n,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"product-details-page-wrapper"},[e("HeaderWithTopbar",{attrs:{containerClass:"container"}}),t._v(" "),e("Breadcrumb",{attrs:{pageTitle:t.blog.title}}),t._v(" "),e("div",{staticClass:"Blog-details-inner pt-100 pb-100"},[e("div",{staticClass:"container"},[e("div",{staticClass:"row flex-row-reverse"},[e("div",{staticClass:"col-lg-9"},[e("div",{staticClass:"blog-details-wrapper ml-20"},[e("div",{staticClass:"blog-details-top"},[e("div",{staticClass:"blog-details-img"},[e("img",{attrs:{src:t.blog.imgSrc,alt:t.blog.title}})]),t._v(" "),e("div",{staticClass:"blog-details-content"},[e("div",{staticClass:"blog-meta-2"},[e("ul",[e("li",[t._v(t._s(t.blog.date))]),t._v(" "),e("li",[e("a",{attrs:{href:"#"}},[e("i",{staticClass:"fa fa-comments-o"}),t._v(" "+t._s(t.blog.comment))])])])]),t._v(" "),e("h3",[t._v(t._s(t.blog.title))]),t._v(" "),e("p",[t._v("Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprhendit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qei officia deser mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam. ")]),t._v(" "),e("blockquote",[t._v("Lorem ipsum dolor sit amet, consecte adipisicing elit, sed do eiusmod tempor incididunt labo dolor magna aliqua. Ut enim ad minim veniam quis nostrud.")]),t._v(" "),e("p",[t._v("Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehendrit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.")])])]),t._v(" "),t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3)])]),t._v(" "),e("div",{staticClass:"col-lg-3"},[e("BlogSidebar")],1)])])]),t._v(" "),e("TheFooter")],1)}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"tag-share"},[e("div",{staticClass:"dec-tag"},[e("ul",[e("li",[e("a",{attrs:{href:"#"}},[t._v("lifestyle ,")])]),t._v(" "),e("li",[e("a",{attrs:{href:"#"}},[t._v("interior ,")])]),t._v(" "),e("li",[e("a",{attrs:{href:"#"}},[t._v("outdoor")])])])]),t._v(" "),e("div",{staticClass:"blog-share"},[e("span",[t._v("share:")]),t._v(" "),e("div",{staticClass:"share-social"},[e("ul",[e("li",[e("a",{staticClass:"facebook",attrs:{href:"#"}},[e("i",{staticClass:"fa fa-facebook"})])]),t._v(" "),e("li",[e("a",{staticClass:"twitter",attrs:{href:"#"}},[e("i",{staticClass:"fa fa-twitter"})])]),t._v(" "),e("li",[e("a",{staticClass:"instagram",attrs:{href:"#"}},[e("i",{staticClass:"fa fa-instagram"})])])])])])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"next-previous-post"},[e("a",{attrs:{href:"#"}},[e("i",{staticClass:"fa fa-angle-left"}),t._v(" prev post")]),t._v(" "),e("a",{attrs:{href:"#"}},[t._v("next post "),e("i",{staticClass:"fa fa-angle-right"})])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"blog-comment-wrapper mt-55"},[e("h4",{staticClass:"blog-dec-title"},[t._v("comments : 02")]),t._v(" "),e("div",{staticClass:"single-comment-wrapper mt-35"},[e("div",{staticClass:"blog-comment-img"},[e("img",{attrs:{src:"/img/blog/comment-1.jpg",alt:""}})]),t._v(" "),e("div",{staticClass:"blog-comment-content"},[e("h4",[t._v("Anthony Stephens")]),t._v(" "),e("span",[t._v("October 14, 2018 ")]),t._v(" "),e("p",[t._v("Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolor magna aliqua. Ut enim ad minim veniam")]),t._v(" "),e("button",{staticClass:"reply-btn"},[t._v("Reply")])])]),t._v(" "),e("div",{staticClass:"single-comment-wrapper mt-50 ml-60"},[e("div",{staticClass:"blog-comment-img"},[e("img",{attrs:{src:"/img/blog/comment-2.jpg",alt:""}})]),t._v(" "),e("div",{staticClass:"blog-comment-content"},[e("h4",[t._v("DX Joxova")]),t._v(" "),e("span",[t._v("October 14, 2018 ")]),t._v(" "),e("p",[t._v("Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolor magna aliqua. Ut enim ad minim veniam")]),t._v(" "),e("button",{staticClass:"reply-btn"},[t._v("Reply")])])])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"blog-reply-wrapper mt-55"},[e("h4",{staticClass:"blog-dec-title"},[t._v("post a comment")]),t._v(" "),e("form",{staticClass:"blog-form"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-6"},[e("div",{staticClass:"leave-form"},[e("input",{attrs:{type:"text",placeholder:"Full Name"}})])]),t._v(" "),e("div",{staticClass:"col-md-6"},[e("div",{staticClass:"leave-form"},[e("input",{attrs:{type:"email",placeholder:"Email Address "}})])]),t._v(" "),e("div",{staticClass:"col-md-12"},[e("div",{staticClass:"text-leave"},[e("textarea",{attrs:{placeholder:"Message"}}),t._v(" "),e("button",{attrs:{type:"submit"}},[t._v("SEND MESSAGE")])])])])])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{HeaderWithTopbar:l(382).default,Breadcrumb:l(383).default,BlogSidebar:l(405).default,TheFooter:l(381).default})}}]);