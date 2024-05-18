<template>
  <div>
    <header class="header-area header-padding-1 sticky-bar header-res-padding clearfix"
      :class="{ 'is-sticky': isSticky }">
      <div class="container-fluid">
        <div class="row">
          <div class="col-lg-2 col-md-6 col-4">
            <div class="logo">
              <n-link to="/">
                <img src="/img/logo/logo.png" alt="logo" />
              </n-link>
            </div>
          </div>
          <div class="col-lg-8 d-none d-lg-block">
            <div class="main-menu">
              <nav>
                <Navigation />
              </nav>
            </div>
          </div>
          <div class="col-lg-2 col-md-6 col-8">
            <div class="header-right-wrap">
              <div class="same-style header-search d-none d-lg-block">
                <button class="search-active" @click="isOpenSearch = !isOpenSearch">
                  <i class="pe-7s-search"></i>
                </button>
                <div class="search-content" :class="{ active: isOpenSearch }">
                  <form v-on:submit="search">
                    <input v-on:change="setSearch" type="text" placeholder="Search" />
                    <button class="button-search">
                      <i class="pe-7s-search"></i>
                    </button>
                  </form>
                </div>
              </div>
              <div class="same-style account-setting d-none d-lg-block">
                <button class="account-setting-active" @click="isOpenAccountSettings = !isOpenAccountSettings">
                  <i class="pe-7s-user-female"></i>
                </button>
                <div class="account-dropdown" :class="{ active: isOpenAccountSettings }">
                  <ul>
                    <li>
                      <n-link v-if="!logginned" :to="`/login-register`">
                        Login
                      </n-link>
                      <n-link v-if="logginned" :to="`/my-account`">
                        My Profile
                      </n-link>
                    </li>

                  </ul>
                </div>
              </div>

              <div class="same-style header-wishlist">
                <n-link to="/wishlist"><i class="pe-7s-like"></i></n-link>
                <span class="count-style">{{ wishlistItemCount }}</span>
              </div>
              <div class="same-style cart-wrap">
                <button class="icon-cart" @click="openCart = !openCart">
                  <i class="pe-7s-shopbag"></i>
                  <span class="count-style">{{ cartItemCount }}</span>
                </button>
                <MiniCart :miniCart="{ visible: openCart }" @minicartClose="openCart = !openCart" />
              </div>
              <div class="same-style mobile-menu-toggler d-block d-lg-none">
                <button class="mobile-aside-button" @click="navOpen = !navOpen">
                  <i class="pe-7s-menu"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
    <OffCanvasMobileMenu :class="{ 'show-mobile-menu': navOpen }" @toggleAsideMenu="navOpen = !navOpen" />
  </div>
</template>

<script>
export default {
  components: {
    Navigation: () => import("@/components/Navigation"),
    MiniCart: () => import("@/components/MiniCart"),
  },

  computed: {
    cartItemCount() {
      return this.$store.getters.cartItemCount;
    },
    wishlistItemCount() {
      return this.$store.getters.wishlistItemCount;
    },
  },

  data() {
    return {
      logginned: false,
      isSticky: false,
      isOpenSearch: false,
      isOpenAccountSettings: false,
      openCart: false,
      navOpen: false,
    };
  },
  methods: {
    setSearch(e) {
      this.searchValue = e.target.value;
    },
    search(e) {
      e.preventDefault();
      window.location = "/shop?search=" + this.searchValue;
    },
  },
  mounted() {
    const user = localStorage.getItem('user');
    if (user) this.logginned = true;

    window.addEventListener("scroll", () => {
      let scroll = window.scrollY;
      if (scroll >= 200) {
        this.isSticky = true;
      } else {
        this.isSticky = false;
      }
    });
  },
};
</script>
