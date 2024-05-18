import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _777783a8 = () => interopDefault(import('..\\pages\\about.vue' /* webpackChunkName: "pages/about" */))
const _19b30bcb = () => interopDefault(import('..\\pages\\blog\\index.vue' /* webpackChunkName: "pages/blog/index" */))
const _1f875555 = () => interopDefault(import('..\\pages\\cart.vue' /* webpackChunkName: "pages/cart" */))
const _5078e40a = () => interopDefault(import('..\\pages\\checkout.vue' /* webpackChunkName: "pages/checkout" */))
const _7a220dfb = () => interopDefault(import('..\\pages\\contact.vue' /* webpackChunkName: "pages/contact" */))
const _dace9208 = () => interopDefault(import('..\\pages\\login-register.vue' /* webpackChunkName: "pages/login-register" */))
const _62e82981 = () => interopDefault(import('..\\pages\\my-account.vue' /* webpackChunkName: "pages/my-account" */))
const _5576498c = () => interopDefault(import('..\\pages\\privacy-policy.vue' /* webpackChunkName: "pages/privacy-policy" */))
const _0a8eda2b = () => interopDefault(import('..\\pages\\shop.vue' /* webpackChunkName: "pages/shop" */))
const _2c19805e = () => interopDefault(import('..\\pages\\success.vue' /* webpackChunkName: "pages/success" */))
const _3453731a = () => interopDefault(import('..\\pages\\terms-conditions.vue' /* webpackChunkName: "pages/terms-conditions" */))
const _6ef59efa = () => interopDefault(import('..\\pages\\wishlist.vue' /* webpackChunkName: "pages/wishlist" */))
const _939030d6 = () => interopDefault(import('..\\pages\\product\\product-affiliate.vue' /* webpackChunkName: "pages/product/product-affiliate" */))
const _d1a14326 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))
const _17fc6a83 = () => interopDefault(import('..\\pages\\blog\\_slug.vue' /* webpackChunkName: "pages/blog/_slug" */))
const _5bdd14b0 = () => interopDefault(import('..\\pages\\product\\_slug.vue' /* webpackChunkName: "pages/product/_slug" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/about",
    component: _777783a8,
    name: "about"
  }, {
    path: "/blog",
    component: _19b30bcb,
    name: "blog"
  }, {
    path: "/cart",
    component: _1f875555,
    name: "cart"
  }, {
    path: "/checkout",
    component: _5078e40a,
    name: "checkout"
  }, {
    path: "/contact",
    component: _7a220dfb,
    name: "contact"
  }, {
    path: "/login-register",
    component: _dace9208,
    name: "login-register"
  }, {
    path: "/my-account",
    component: _62e82981,
    name: "my-account"
  }, {
    path: "/privacy-policy",
    component: _5576498c,
    name: "privacy-policy"
  }, {
    path: "/shop",
    component: _0a8eda2b,
    name: "shop"
  }, {
    path: "/success",
    component: _2c19805e,
    name: "success"
  }, {
    path: "/terms-conditions",
    component: _3453731a,
    name: "terms-conditions"
  }, {
    path: "/wishlist",
    component: _6ef59efa,
    name: "wishlist"
  }, {
    path: "/product/product-affiliate",
    component: _939030d6,
    name: "product-product-affiliate"
  }, {
    path: "/",
    component: _d1a14326,
    name: "index"
  }, {
    path: "/blog/:slug",
    component: _17fc6a83,
    name: "blog-slug"
  }, {
    path: "/product/:slug?",
    component: _5bdd14b0,
    name: "product-slug"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
