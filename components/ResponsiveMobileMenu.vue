<template>
  <ul class="mobile-menu">


    <li v-for="(category, index) in $store.state.categories" :key="index" class="menus">
      <n-link :to="`/shop?category=${category.id}&sub_category=&search=&sort=`">
        {{ category.category_name }}
      </n-link>
      <span class="submenu-toggle" v-if="category.sub_categories">
        <i class="pe-7s-angle-down"></i>
      </span>
      <ul class="submenu" v-if="category.sub_categories">
        <li v-for="(subcategory, i) in category.sub_categories" :key="i">
          <n-link :to="`/shop?category=&sub_category=${subcategory.id}&search=&sort=`">
            {{ subcategory.sub_category_name }}
          </n-link>
        </li>
      </ul>

    </li>
    <li class="menus">
      <n-link v-if="!logginned" :to="`login-register`">
        Login
      </n-link>
      <n-link v-if="logginned" :to="`my-account`">
        Profile
      </n-link>
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      logginned: false,
      menus: [
        {
          url: "/",
          title: "Home",
          submenu: [
            {
              url: "",
              title: "Home Group 01",
              submenu: [
                {
                  url: "/",
                  title: "Home",
                },
              ],
            },
            {
              url: "",
              title: "Home Group 02",
              submenu: [
                {
                  url: "/home-fashion-four",
                  title: "Home Fashion Four",
                },
                {
                  url: "/home-fashion-five",
                  title: "Home Fashion Five",
                },
                {
                  url: "/home-fashion-six",
                  title: "Home Fashion Six",
                },
              ],
            },
            {
              url: "",
              title: "Home Group 03",
              submenu: [
                {
                  url: "/home-fashion-seven",
                  title: "Home Fashion Seven",
                },
                {
                  url: "/home-cosmetics",
                  title: "Home Cosmetics",
                },
                {
                  url: "/home-furniture",
                  title: "Home Furniture",
                },
              ],
            },
          ],
        },
        {
          url: "/shop",
          title: "Shop",
          submenu: [
            {
              url: "",
              title: "shop layout",
              submenu: [
                {
                  url: "/shop",
                  title: "shop grid standard",
                },

                {
                  url: "/shop-list-standard",
                  title: "shop list standard",
                },
              ],
            },
            {
              url: "",
              title: "product details",
              submenu: [
                {
                  url: "/product/crew-ventile-coat-one",
                  title: "product variation",
                },
                {
                  url: "/product/product-affiliate",
                  title: "product affiliate",
                },
                {
                  url: "/product/women-winter-overcoat-one",
                  title: "product simple",
                },
              ],
            },
          ],
        },
        {
          url: "",
          title: "Pages",
          submenu: [
            {
              url: "/cart",
              title: "Cart",
            },
            {
              url: "/checkout",
              title: "Checkout",
            },
            {
              url: "/wishlist",
              title: "Wishlist",
            },

            {
              url: "/about",
              title: "About us",
            },
            {
              url: "/my-account",
              title: "My Account",
            },
            {
              url: "/login-register",
              title: "Login / Register",
            },
            {
              url: "/contact",
              title: "Contact us",
            },
            {
              url: "/privacy-policy",
              title: "Privacy Policy",
            },
            {
              url: "/terms-conditions",
              title: "Terms & Conditions",
            },
          ],
        },
        {
          url: "/blog",
          title: "Blog",
          submenu: [
            {
              url: "/blog",
              title: "blog standard",
            },
            {
              url: "/blog/blog-right-sidebar",
              title: "blog right sidebar",
            },
          ],
        },
        {
          url: "/contact",
          title: "Contact",
        },
      ],
    };
  },
  mounted() {
    const user = localStorage.getItem('user');
    if (user) this.logginned = true;


    let getSiblings = function (e) {
      let siblings = [];
      if (!e.parentNode) {
        return siblings;
      }
      let sibling = e.parentNode.firstChild;
      while (sibling) {
        if (sibling.nodeType === 1 && sibling !== e) {
          siblings.push(sibling);
        }
        sibling = sibling.nextSibling;
      }
      return siblings;
    };

    const subMenuToggle = document.querySelectorAll(".submenu-toggle");
    subMenuToggle.forEach(function (btn) {
      btn.addEventListener("click", function () {
        if (!this.classList.contains("active")) {
          this.classList.add("active");
          this.nextElementSibling.classList.add("active");
          this.closest("li").classList.add("active");
          getSiblings(this.closest("li")).forEach(function (item) {
            item.classList.remove("active");
            item
              .querySelectorAll("li, .submenu-toggle, .submenu")
              .forEach(function (child) {
                child.classList.remove("active");
              });
          });
        } else {
          this.closest("li").classList.remove("active");
          this.closest("li")
            .querySelectorAll("li, .submenu-toggle, .submenu")
            .forEach(function (child) {
              child.classList.remove("active");
            });
        }
      });
    });
  },
};
</script>

<style lang="scss" scoped>
.mobile-menu {
  li:not(:last-child) {
    margin-bottom: 5px;
  }

  li {
    position: relative;

    a {
      font-weight: 600;
      line-height: 35px;
      text-transform: capitalize;
    }
  }

  .submenu {
    display: none;
    padding-top: 5px;
    padding-left: 15px;

    &.active {
      display: block;
    }

    li {
      margin-bottom: 5px;

      &.title> {
        a {
          font-weight: 500;
        }
      }

      .submenu {
        li {
          a {
            line-height: 25px;
            font-weight: 400;
          }
        }
      }
    }
  }

  .submenu-toggle {
    width: 35px;
    height: 35px;
    background-color: #f3f3f3;
    text-align: center;
    font-size: 28px;
    display: inline-block;
    position: absolute;
    right: 0;
    top: 0;
    cursor: pointer;

    i {
      transition: 0.3s;
      line-height: 35px;
    }

    &.active {
      i {
        transform: rotate(-180deg);
      }
    }
  }
}
</style>
