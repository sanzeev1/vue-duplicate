(window.webpackJsonp=window.webpackJsonp||[]).push([[11,8,27],{388:function(t,e,n){"use strict";n.r(e);var o={props:["title","subTitle","classes"]},l=n(16),component=Object(l.a)(o,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"text-center",class:t.classes},[e("h2",[t._v(t._s(t.title))]),t._v(" "),e("p",[t._v(t._s(t.subTitle))])])}),[],!1,null,null,null);e.default=component.exports},397:function(t){t.exports=JSON.parse('[{"id":1,"title":"A guide to latest trends product","desc":"Aenean sollicitudin, lorem quis on endum uctor nisi elitod the cona sequat ipsum, necas sagittis sem natoque nibh id penatibus","imgSrc":"/img/blog/blog-1.jpg","category":["women","lifestyle"],"author":"Admin","date":"15 April, 2021","comment":12},{"id":2,"title":"Five ways to lead a happy life","desc":"Aenean sollicitudin, lorem quis on endum uctor nisi elitod the cona sequat ipsum, necas sagittis sem natoque nibh id penatibus","imgSrc":"/img/blog/blog-2.jpg","category":["lifestyle","men"],"author":"admin","date":"22 March, 2021","comment":45},{"id":3,"title":"Tips on having a happy life forever","desc":"Aenean sollicitudin, lorem quis on endum uctor nisi elitod the cona sequat ipsum, necas sagittis sem natoque nibh id penatibus","imgSrc":"/img/blog/blog-3.jpg","category":["women","men"],"author":"admin","date":"10 May, 2021","comment":30},{"id":4,"title":"New winter collection with discount","desc":"Aenean sollicitudin, lorem quis on endum uctor nisi elitod the cona sequat ipsum, necas sagittis sem natoque nibh id penatibus","imgSrc":"/img/blog/blog-4.jpg","category":["women","lifestyle"],"author":"Admin","date":"15 June, 2021","comment":52},{"id":5,"title":"New collection for this winter","desc":"Aenean sollicitudin, lorem quis on endum uctor nisi elitod the cona sequat ipsum, necas sagittis sem natoque nibh id penatibus","imgSrc":"/img/blog/blog-5.jpg","category":["lifestyle","men"],"author":"admin","date":"10 July, 2021","comment":35},{"id":6,"title":"Our best collection this winter","desc":"Aenean sollicitudin, lorem quis on endum uctor nisi elitod the cona sequat ipsum, necas sagittis sem natoque nibh id penatibus","imgSrc":"/img/blog/blog-6.jpg","category":["women","men"],"author":"admin","date":"18 January, 2021","comment":40},{"id":7,"title":"Tempor incididunt labo dolor magna","desc":"Aenean sollicitudin, lorem quis on endum uctor nisi elitod the cona sequat ipsum, necas sagittis sem natoque nibh id penatibus","imgSrc":"/img/blog/blog-7.jpg","category":["women","lifestyle"],"author":"Admin","date":"15 April, 2021","comment":12},{"id":8,"title":"Lorem ipsum dolor sit amet consectetur","desc":"Aenean sollicitudin, lorem quis on endum uctor nisi elitod the cona sequat ipsum, necas sagittis sem natoque nibh id penatibus","imgSrc":"/img/blog/blog-8.jpg","category":["lifestyle","men"],"author":"admin","date":"22 March, 2021","comment":45},{"id":9,"title":"Reprehendrit in voluptate velit cillum","desc":"Aenean sollicitudin, lorem quis on endum uctor nisi elitod the cona sequat ipsum, necas sagittis sem natoque nibh id penatibus","imgSrc":"/img/blog/blog-9.jpg","category":["women","men"],"author":"admin","date":"10 May, 2021","comment":30}]')},412:function(t,e,n){"use strict";n.r(e);n(11),n(26),n(38),n(70);var o={props:["blog"],methods:{slugify:function(text){return text.toString().toLowerCase().replace(/\s+/g,"-").replace(/[^\w-]+/g,"").replace(/--+/g,"-").replace(/^-+/,"").replace(/-+$/,"")}}},l=n(16),component=Object(l.a)(o,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"blog-wrap mb-25"},[e("div",{staticClass:"blog-img"},[e("n-link",{attrs:{to:"/blog/".concat(t.slugify(t.blog.title))}},[e("img",{attrs:{src:t.blog.imgSrc,alt:t.blog.title}})]),t._v(" "),e("span",[t._v(t._s(t.blog.category[0]))])],1),t._v(" "),e("div",{staticClass:"blog-content-wrap"},[e("div",{staticClass:"blog-content text-center"},[e("h3",[e("n-link",{attrs:{to:"/blog/".concat(t.slugify(t.blog.title))}},[t._v(t._s(t.blog.title))])],1),t._v(" "),e("span",[t._v("By "),e("n-link",{attrs:{to:""}},[t._v(t._s(t.blog.author))])],1)])])])}),[],!1,null,null,null);e.default=component.exports},434:function(t,e,n){"use strict";n.r(e);n(60),n(11),n(27),n(28);var o=n(397),l={components:{BlogItem:function(){return Promise.resolve().then(n.bind(null,412))}},data:function(){return{blogData:o}}},c=n(16),component=Object(c.a)(l,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"blog-area pb-55"},[e("div",{staticClass:"container"},[e("SectionTitleWithSubTitle",{attrs:{title:"OUR BLOG",classes:"section-title mb-55"}}),t._v(" "),e("div",{staticClass:"row"},t._l(t.blogData.slice(0,3),(function(t,n){return e("div",{key:n,staticClass:"col-lg-4 col-sm-6"},[e("BlogItem",{attrs:{blog:t}})],1)})),0)],1)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{SectionTitleWithSubTitle:n(388).default,BlogItem:n(412).default})}}]);