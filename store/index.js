import Vue from "vue";
import Vuex from "vuex";

import { fetchCategoriesWithSubcategories } from "../api/categories";
import { fetchProductById, fetchTabbedProducts } from "../api/products";
import { fetchSliders } from "../api/sliders";

Vue.use(Vuex);

export const state = () => ({
  products: [],
  product: null,
  sliders: [],
  mentabProducts: [],
  womentabProducts: [],
  selectedMenTab: 1,
  selectedWomenTab: 1,
  cart: [],
  wishlist: [],
  categories: [],
});

// your root getters
export const getters = {
  getProducts(state) {
    return state.products;
  },

  getSelectedMenTab(state) {
    return state.selectedMenTab;
  },
  getSelectedWomenTab(state) {
    return state.selectedWomenTab;
  },
  getMenTabProducts(state) {
    return state.mentabProducts;
  },
  getWomenTabProducts(state) {
    return state.womentabProducts;
  },

  getSliders(state) {
    return state.sliders;
  },

  getCart: (state) => {
    return state.cart;
  },

  cartItemCount: (state) => {
    return state.cart.length;
  },

  getWishlist: (state) => {
    return state.wishlist;
  },

  wishlistItemCount: (state) => {
    return state.wishlist.length;
  },

  getTotal: (state) => {
    let total = 0;
    state.cart.forEach((item) => {
      let price = item.discount
        ? item.price - (item.price * item.discount) / 100
        : item.price;
      total += price * item.cartQuantity;
    });

    return total;
  },

  getNewProducts: (state) => {
    return state.products.filter((item) => {
      return item.new;
    });
  },
  getBestProducts: (state) => {
    return state.products.filter((item) => {
      return item.best;
    });
  },
  getSaleProducts: (state) => {
    return state.products.filter((item) => {
      return item.discount;
    });
  },

  categoryList: (state) => {
    return [
      "all categories",
      ...new Set(state.products.map((list) => list.category).flat()),
    ];
  },
  tagList: (state) => {
    return [...new Set(state.products.map((list) => list.tag).flat())];
  },
  sizeList: (state) => {
    return [
      "all sizes",
      ...new Set(state.products.map((list) => list.variation?.sizes).flat()),
    ].filter(Boolean);
  },
  colorList: (state) => {
    return [
      "all colors",
      ...new Set(state.products.map((list) => list.variation?.color).flat()),
    ].filter(Boolean);
  },
};

// contains your mutations
export const mutations = {
  async SET_PRODUCT(state, product) {
    state.product = product;
  },
  SET_MEN_TAB(state, id) {
    state.selectedMenTab = id;
  },
  SET_WOMEN_TAB(state, id) {
    state.selectedWomenTab = id;
  },
  SET_MEN_TAB_PRODUCTS(state, products) {
    state.mentabProducts = products;
  },
  SET_WOMEN_TAB_PRODUCTS(state, products) {
    state.womentabProducts = products;
  },
  SET_SLIDERS(state, sliders) {
    state.sliders = sliders;
  },
  GET_CATEGORIES_WITH_SUBCATEGORIES(state, categs) {
    state.categories = categs;
  },
  UPDATE_CART(state, payload) {
    const item = state.cart.find((el) => payload.id === el.id);
    if (item) {
      const price = item.discount
        ? item.price - (item.price * item.discount) / 100
        : item.price;
      item.cartQuantity = item.cartQuantity + payload.cartQuantity;
      item.total = item.cartQuantity * price;
    } else {
      const price = payload.discount
        ? payload.price - (payload.price * payload.discount) / 100
        : payload.price;
      state.cart.push({
        ...payload,
        cartQuantity: payload.cartQuantity,
        total: price,
      });
    }
  },

  REMOVE_PRODUCT_FROM_CART(state, product) {
    state.cart = state.cart.filter((item) => {
      return product.id !== item.id;
    });
  },

  DECREASE_PRODUCT(state, payload) {
    const found = state.cart.find((el) => payload.id === el.id);
    const price = found.discount
      ? found.price - (found.price * found.discount) / 100
      : found.price;
    found.cartQuantity = found.cartQuantity - payload.cartQuantity;
    found.total = found.cartQuantity * price;
  },

  CLEAR_CART(state) {
    state.cart = [];
  },

  ADD_TO_WISHLIST(state, product) {
    const item = state.wishlist.find((el) => product.id === el.id);
    if (item) {
      return;
    }
    {
      state.wishlist.push(product);
    }
  },

  REMOVE_PRODUCT_FROM_WISHLIST(state, product) {
    state.wishlist = state.wishlist.filter((item) => {
      return product.id !== item.id;
    });
  },
};

// contains your actions
export const actions = {
  async getProductById({ commit }, id) {
    commit("SET_PRODUCT", null);

    const { product } = await fetchProductById(id);
    commit("SET_PRODUCT", product);
  },
  addToCartItem({ commit }, payload) {
    commit("UPDATE_CART", payload);
  },
  resetCart({ commit }) {
    commit("CLEAR_CART");
  },
  async getCategoriesWithSubCategories({ commit }) {
    const categs = await fetchCategoriesWithSubcategories();
    commit("GET_CATEGORIES_WITH_SUBCATEGORIES", categs);

    const manTab = categs[0].sub_categories[0].id ?? 11;
    const womanTab = categs[1].sub_categories[0].id ?? 15;
    const { products: manproducts } = await fetchTabbedProducts(manTab);
    const { products: womanproducts } = await fetchTabbedProducts(womanTab);
    commit("SET_WOMEN_TAB", womanTab);
    commit("SET_WOMEN_TAB_PRODUCTS", womanproducts);
    commit("SET_MEN_TAB", manTab);
    commit("SET_MEN_TAB_PRODUCTS", manproducts);
  },
  async getMenTabProducts({ commit }, sub_category_id) {
    const { products } = await fetchTabbedProducts(sub_category_id);
    commit("SET_MEN_TAB_PRODUCTS", products);
  },
  async getWomenTabProducts({ commit }, sub_category_id) {
    const { products } = await fetchTabbedProducts(sub_category_id);
    commit("SET_WOMEN_TAB_PRODUCTS", products);
  },
  async getSlidersAction({ commit }) {
    const sliders = await fetchSliders();
    commit("SET_SLIDERS", sliders);
  },
  async setMenSelectedTab({ commit }, sub_category_id) {
    const { products } = await fetchTabbedProducts(sub_category_id);
    commit("SET_MEN_TAB", sub_category_id);
    commit("SET_SMEN_TAB_PRODUCTS", products);
  },
  async setWomenSelectedTab({ commit }, sub_category_id) {
    const { products } = await fetchTabbedProducts(sub_category_id);
    commit("SET_WOMEN_TAB", sub_category_id);
    commit("SET_WOMEN_TAB_PRODUCTS", products);
  },
  removeProductFromCart({ commit }, product) {
    commit("REMOVE_PRODUCT_FROM_CART", product);
  },

  decreaseProduct({ commit }, product) {
    commit("DECREASE_PRODUCT", product);
  },

  addToWishlist({ commit }, payload) {
    commit("ADD_TO_WISHLIST", payload);
  },

  addToCompare({ commit }, payload) {
    commit("ADD_TO_COMPARE", payload);
  },

  removeProductFromWishlist({ commit }, product) {
    commit("REMOVE_PRODUCT_FROM_WISHLIST", product);
  },

  removeFromCompare({ commit }, product) {
    commit("REMOVE_FROM_COMPARE", product);
  },
};
