(window.webpackJsonp=window.webpackJsonp||[]).push([[43,11,16,31],{381:function(t,e,o){"use strict";o.r(e);var n={},l=o(16),component=Object(l.a)(n,(function(){var t=this,e=t._self._c;return e("footer",{staticClass:"footer-area bg-gray pt-100 pb-70"},[e("div",{staticClass:"container"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-lg-2 col-sm-4"},[e("div",{staticClass:"copyright mb-30"},[e("div",{staticClass:"footer-logo"},[e("n-link",{attrs:{to:"/"}},[e("img",{attrs:{src:"/img/logo/logo.png",alt:"logo"}})])],1),t._v(" "),t._m(0)])]),t._v(" "),e("div",{staticClass:"col-lg-2 col-sm-4"},[e("div",{staticClass:"footer-widget mb-30 ml-30"},[t._m(1),t._v(" "),e("div",{staticClass:"footer-list"},[e("ul",[e("li",[e("n-link",{attrs:{to:"#"}},[t._v("About us")])],1),t._v(" "),e("li",[e("n-link",{attrs:{to:"#"}},[t._v("Store location")])],1),t._v(" "),e("li",[e("n-link",{attrs:{to:"/contact"}},[t._v("Contact")])],1),t._v(" "),e("li",[e("n-link",{attrs:{to:"#"}},[t._v("Orders tracking")])],1)])])])]),t._v(" "),e("div",{staticClass:"col-lg-2 col-sm-4"},[e("div",{staticClass:"footer-widget mb-30 ml-50"},[t._m(2),t._v(" "),e("div",{staticClass:"footer-list"},[e("ul",[e("li",[e("n-link",{attrs:{to:"/#"}},[t._v("Returns")])],1),t._v(" "),e("li",[e("n-link",{attrs:{to:"/#"}},[t._v("Support Policy")])],1),t._v(" "),e("li",[e("n-link",{attrs:{to:"/#"}},[t._v("Size guide")])],1),t._v(" "),e("li",[e("n-link",{attrs:{to:"/#"}},[t._v("FAQs")])],1)])])])]),t._v(" "),t._m(3),t._v(" "),t._m(4)])])])}),[function(){var t=this,e=t._self._c;return e("p",[t._v("\n            © 2022 "),e("a",{attrs:{href:"#",target:"_blank"}},[t._v("Flone")]),t._v("."),e("br"),t._v("\n            All Rights Reserved\n          ")])},function(){var t=this._self._c;return t("div",{staticClass:"footer-title"},[t("h3",[this._v("ABOUT US")])])},function(){var t=this._self._c;return t("div",{staticClass:"footer-title"},[t("h3",[this._v("USEFUL LINKS")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"col-lg-2 col-sm-6"},[e("div",{staticClass:"footer-widget mb-30 ml-75"},[e("div",{staticClass:"footer-title"},[e("h3",[t._v("FOLLOW US")])]),t._v(" "),e("div",{staticClass:"footer-list"},[e("ul",[e("li",[e("a",{attrs:{href:"#",target:"_blank"}},[t._v("Facebook")])]),t._v(" "),e("li",[e("a",{attrs:{href:"#",target:"_blank"}},[t._v("Twitter")])]),t._v(" "),e("li",[e("a",{attrs:{href:"#",target:"_blank"}},[t._v("Instagram")])]),t._v(" "),e("li",[e("a",{attrs:{href:"#",target:"_blank"}},[t._v("Youtube")])])])])])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"col-lg-4 col-sm-6"},[e("div",{staticClass:"footer-widget mb-30 ml-70"},[e("div",{staticClass:"footer-title"},[e("h3",[t._v("SUBSCRIBE")])]),t._v(" "),e("div",{staticClass:"subscribe-style"},[e("p",[t._v("\n              Get E-mail updates about our latest shop and special offers.\n            ")]),t._v(" "),e("div",{staticClass:"subscribe-form"},[e("form",{staticClass:"mc-form"},[e("input",{staticClass:"email",attrs:{type:"email",required:"",placeholder:"Enter your email here..",name:"email"}}),t._v(" "),e("button",{staticClass:"button",attrs:{name:"subscribe"}},[t._v("Subscribe")])])])])])])}],!1,null,null,null);e.default=component.exports},382:function(t,e,o){"use strict";o.r(e);o(11),o(26),o(27);var n={components:{Navigation:function(){return Promise.resolve().then(o.bind(null,241))},MiniCart:function(){return Promise.resolve().then(o.bind(null,239))}},props:["containerClass"],computed:{cartItemCount:function(){return this.$store.getters.cartItemCount},wishlistItemCount:function(){return this.$store.getters.wishlistItemCount}},data:function(){return{isSticky:!1,isOpenSearch:!1,isOpenAccountSettings:!1,openCart:!1,navOpen:!1}},mounted:function(){var t=this;window.addEventListener("scroll",(function(){var e=window.scrollY;t.isSticky=e>=200}))}},l=o(16),component=Object(l.a)(n,(function(){var t=this,e=t._self._c;return e("div",[e("header",{staticClass:"header-area"},[e("div",{staticClass:"header-top-area header-padding-2 d-none d-lg-block"},[e("div",{class:t.containerClass},[t._m(0)])]),t._v(" "),e("div",{staticClass:"header-padding-1 sticky-bar header-res-padding clearfix",class:{"is-sticky":t.isSticky}},[e("div",{class:t.containerClass},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-lg-2 col-md-6 col-4"},[e("div",{staticClass:"logo"},[e("n-link",{attrs:{to:"/"}},[e("img",{attrs:{src:"/img/logo/logo.png",alt:"flone logo"}})])],1)]),t._v(" "),e("div",{staticClass:"col-lg-8 d-none d-lg-block"},[e("div",{staticClass:"main-menu"},[e("nav",[e("Navigation")],1)])]),t._v(" "),e("div",{staticClass:"col-lg-2 col-md-6 col-8"},[e("div",{staticClass:"header-right-wrap"},[e("div",{staticClass:"same-style header-search d-none d-lg-block"},[e("button",{staticClass:"search-active",on:{click:function(e){t.isOpenSearch=!t.isOpenSearch}}},[e("i",{staticClass:"pe-7s-search"})]),t._v(" "),e("div",{staticClass:"search-content",class:{active:t.isOpenSearch}},[t._m(1)])]),t._v(" "),e("div",{staticClass:"same-style account-setting d-none d-lg-block"},[e("button",{staticClass:"account-setting-active",on:{click:function(e){t.isOpenAccountSettings=!t.isOpenAccountSettings}}},[e("i",{staticClass:"pe-7s-user-female"})]),t._v(" "),e("div",{staticClass:"account-dropdown",class:{active:t.isOpenAccountSettings}},[e("ul",[e("li",[e("n-link",{attrs:{to:"/login-register"}},[t._v("Login")])],1)])])]),t._v(" "),e("div",{staticClass:"same-style header-wishlist"},[e("n-link",{attrs:{to:"/wishlist"}},[e("i",{staticClass:"pe-7s-like"})]),t._v(" "),e("span",{staticClass:"count-style"},[t._v(t._s(t.wishlistItemCount))])],1),t._v(" "),e("div",{staticClass:"same-style cart-wrap"},[e("button",{staticClass:"icon-cart",on:{click:function(e){t.openCart=!t.openCart}}},[e("i",{staticClass:"pe-7s-shopbag"}),t._v(" "),e("span",{staticClass:"count-style"},[t._v(t._s(t.cartItemCount))])]),t._v(" "),e("MiniCart",{attrs:{miniCart:{visible:t.openCart}},on:{minicartClose:function(e){t.openCart=!t.openCart}}})],1),t._v(" "),e("div",{staticClass:"same-style mobile-menu-toggler d-block d-lg-none"},[e("button",{staticClass:"mobile-aside-button",on:{click:function(e){t.navOpen=!t.navOpen}}},[e("i",{staticClass:"pe-7s-menu"})])])])])])])])]),t._v(" "),e("OffCanvasMobileMenu",{class:{"show-mobile-menu":t.navOpen},on:{toggleAsideMenu:function(e){t.navOpen=!t.navOpen}}})],1)}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"header-top-inner"},[e("div",{staticClass:"language-currency-wrap"},[e("div",{staticClass:"same-language-currency language-style"},[e("select",{attrs:{name:"language"}},[e("option",{attrs:{value:"english"}},[t._v("English")]),t._v(" "),e("option",{attrs:{value:"hindi"}},[t._v("Hindi")]),t._v(" "),e("option",{attrs:{value:"spanish"}},[t._v("Spanish")])])]),t._v(" "),e("div",{staticClass:"same-language-currency use-style"},[e("select",{attrs:{name:"currency"}},[e("option",{attrs:{value:"usd"}},[t._v("USD")]),t._v(" "),e("option",{attrs:{value:"eur"}},[t._v("EUR")]),t._v(" "),e("option",{attrs:{value:"rup"}},[t._v("Rup")])])]),t._v(" "),e("div",{staticClass:"same-language-currency"},[e("p",[t._v("Call: "),e("a",{attrs:{href:"callto:3965410"}},[t._v("3965410")])])])]),t._v(" "),e("div",{staticClass:"header-offer"},[e("p",[t._v("Free delivery on order over "),e("span",[t._v("$200")])])])])},function(){var t=this._self._c;return t("form",[t("input",{attrs:{type:"text",placeholder:"Search"}}),this._v(" "),t("button",{staticClass:"button-search"},[t("i",{staticClass:"pe-7s-search"})])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{Navigation:o(241).default,MiniCart:o(239).default,OffCanvasMobileMenu:o(240).default})},383:function(t,e,o){"use strict";o.r(e);var n={props:["pageTitle"]},l=o(16),component=Object(l.a)(n,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"breadcrumb-area pt-35 pb-35 bg-gray-3"},[e("div",{staticClass:"container"},[e("div",{staticClass:"breadcrumb-content text-center"},[e("ul",[e("li",[e("n-link",{attrs:{to:"/"}},[t._v("Home")])],1),t._v(" "),e("li",{staticClass:"active"},[t._v(t._s(t.pageTitle))])])])])])}),[],!1,null,null,null);e.default=component.exports},393:function(t,e,o){t.exports={}},411:function(t,e,o){"use strict";o(393)},424:function(t,e,o){"use strict";o.r(e);o(11),o(26),o(27);var n={components:{HeaderWithTopbar:function(){return Promise.resolve().then(o.bind(null,382))},Breadcrumb:function(){return Promise.resolve().then(o.bind(null,383))},TheFooter:function(){return Promise.resolve().then(o.bind(null,381))}},head:function(){return{title:"Privacy Policy"}}},l=(o(411),o(16)),component=Object(l.a)(n,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"privacy-policy-wrapper"},[e("HeaderWithTopbar",{attrs:{containerClass:"container"}}),t._v(" "),e("Breadcrumb",{attrs:{pageTitle:"privacy policy"}}),t._v(" "),t._m(0),t._v(" "),e("TheFooter")],1)}),[function(){var t=this,e=t._self._c;return e("section",{staticClass:"policy-section"},[e("div",{staticClass:"container"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-12"},[e("div",{staticClass:"policy-list"},[e("h3",{staticClass:"policy-title"},[t._v("Who we are ?")]),t._v(" "),e("p",[t._v("Our website address is: "),e("a",{attrs:{href:"http://hasthemes.com"}},[t._v("http://hasthemes.com")])])]),t._v(" "),e("div",{staticClass:"policy-list"},[e("h3",{staticClass:"policy-title"},[t._v("What personal data we collect and why we collect it Comments")]),t._v(" "),e("p",[t._v("When visitors leave comments on the site we collect the data shown in the comments form, and also the visitors IP address and browser user agent string to help spam detection.")]),t._v(" "),e("p",[t._v("An anonymized string created from your email address (also called a hash) may be provided to the Gravatar service to see if you are using it. The Gravatar service privacy policy is available here: https://automattic.com/privacy/. After approval of your comment, your profile picture is visible to the public in the context of your comment.")])]),t._v(" "),e("div",{staticClass:"policy-list"},[e("h3",{staticClass:"policy-title"},[t._v("Media")]),t._v(" "),e("p",[t._v("f you upload images to the website, you should avoid uploading images with embedded location data (EXIF GPS) included. Visitors to the website can download and extract any location data from images on the website.")])]),t._v(" "),e("div",{staticClass:"policy-list"},[e("h3",{staticClass:"policy-title"},[t._v("Cookies")]),t._v(" "),e("p",[t._v("If you leave a comment on our site you may opt-in to saving your name, email  address and website in cookies. These are for your convenience so that you do not have to fill in your details again when you leave another comment. These cookies will last for one year.")]),t._v(" "),e("p",[t._v("If you have an account and you log in to this site, we will set a temporary  cookie to determine if your browser accepts cookies. This cookie contains no personal data and is discarded when you close your browser.")]),t._v(" "),e("p",[t._v("When you log in, we will also set up several cookies to save your login  information and your screen display choices. Login cookies last for two days, and screen options cookies last for a year. If you select “Remember Me”, your login will persist for two weeks. If you log out of your account, the login cookies will be removed.")]),t._v(" "),e("p",[t._v("If you edit or publish an article, an additional cookie will be saved in your browser. This cookie includes no personal data and simply indicates the post ID of the article you just edited. It expires after 1 day.")])]),t._v(" "),e("div",{staticClass:"policy-list"},[e("h3",{staticClass:"policy-title"},[t._v("Embedded content from other websites")]),t._v(" "),e("p",[t._v("Articles on this site may include embedded content (e.g. videos, images, articles, etc.). Embedded content from other websites behaves in the exact same way as if the visitor has visited the other website.")]),t._v(" "),e("p",[t._v("These websites may collect data about you, use cookies, embed additional third-party tracking, and monitor your interaction with that embedded content, including tracking your interaction with the embedded content if you have an account and are logged in to that website.")])]),t._v(" "),e("div",{staticClass:"policy-list"},[e("h3",{staticClass:"policy-title"},[t._v("How long we retain your data")]),t._v(" "),e("p",[t._v("If you leave a comment, the comment and its metadata are retained indefinitely. This is so we can recognize and approve any follow-up comments automatically instead of holding them in a moderation queue.")]),t._v(" "),e("p",[t._v("For users that register on our website (if any), we also store the personal information they provide in their user profile. All users can see, edit, or delete their personal information at any time (except they cannot change their username). Website administrators can also see and edit that information.")])]),t._v(" "),e("div",{staticClass:"policy-list"},[e("h3",{staticClass:"policy-title"},[t._v("What rights you have over your data")]),t._v(" "),e("p",[t._v("If you have an account on this site, or have left comments, you can request to receive an exported file of the personal data we hold about you, including any data you have provided to us. You can also request that we erase any personal data we hold about you. This does not include any data we are obliged to keep for administrative, legal, or security purposes.")])]),t._v(" "),e("div",{staticClass:"policy-list"},[e("h3",{staticClass:"policy-title"},[t._v("Where we send your data")]),t._v(" "),e("p",[t._v("Visitor comments may be checked through an automated spam detection service.")])])])])])])}],!1,null,"60f410e6",null);e.default=component.exports;installComponents(component,{HeaderWithTopbar:o(382).default,Breadcrumb:o(383).default,TheFooter:o(381).default})}}]);