<template>
  <div>
    <div class="product-area pb-90">
      <div class="container">
        <div v-if="$store.state.categories.length > 0">

          <SectionTitleWithSubTitle :title="`${$store.state.categories[0].category_name}'s Latest Products`"
            classes="section-title" />
        </div>

        <ul class="nav product-tab-list pt-30 pb-55 justify-content-center" v-if="$store.state.categories.length > 0">
          <li class="nav-item" role="presentation"
            v-for="(category, index) in $store.state.categories[0]?.sub_categories.slice(0, 3)" :key="index">
            <button @click="setSelectedMenTab(category.id)" class="nav-link" data-bs-toggle="pill"
              data-bs-target="#new-product" role="tab">

              <b style="color:black;" v-if="category.id === $store.state.selectedMenTab">


                {{ category.sub_category_name }}


              </b>
              <span v-else>
                {{ category.sub_category_name }}


              </span>


            </button>
          </li>
        </ul>

        <div class="tab-content">
          <div>
            <div class="row">
              <div class="col-xl-3 col-lg-4 col-sm-6" v-if="$store.state.mentabProducts" v-for="(product, index) in $store.state.mentabProducts.slice(
                0,
                8
              )" :key="index">
                <ProductGridItem :product="product" :layout="layout" />
              </div>
            </div>
          </div>
        </div>
      </div>
       <div class="view-more text-center mt-20 toggle-btn2">
          <n-link to="/shop" class="loadMore2">VIEW MORE PRODUCTS</n-link>
        </div>
      <QuickView />
    </div>
    <div class="product-area pb-90">
      <div class="container">
        <div v-if="$store.state.categories.length > 0">
          <SectionTitleWithSubTitle :title="`${$store.state.categories[1].category_name}'s Latest Products`"
            classes="section-title" v-if="$store.state.categories[1]" />
        </div>
        <ul class="nav product-tab-list pt-30 pb-55 justify-content-center" v-if="$store.state.categories.length > 0">
          <li class="nav-item" role="presentation"
            v-for="(category, index) in $store.state.categories[1]?.sub_categories.slice(0, 3)" :key="index">
            <button @click="setSelectedWomenTab(category.id)" class="nav-link" data-bs-toggle="pill"
              data-bs-target="#new-product" role="tab">

              <b style="color:black;" v-if="category.id === $store.state.selectedWomenTab">

                {{ category.sub_category_name }}
              </b>
              <span v-else>
                {{ category.sub_category_name }}


              </span>


            </button>
          </li>
        </ul>
        <div class="tab-content">
          <div>
            <div class="row">
              <div class="col-xl-3 col-lg-4 col-sm-6" v-if="$store.state.womentabProducts" v-for="(product, index) in $store.state.womentabProducts.slice(
                0,
                8
              )" :key="index">
                <ProductGridItem :product="product" :layout="layout" />
              </div>
            </div>
          </div>
        </div>
      </div>
       <div class="view-more text-center mt-20 toggle-btn2">
                    <n-link to="/shop" class="loadMore2">VIEW MORE PRODUCTS</n-link>
                </div>
      <QuickView />
    </div>
  </div>
</template>

<script>
export default {
  props: ["isSectionTitle"],

  components: {
    ProductGridItem: () => import("@/components/product/ProductGridItem"),
    QuickView: () => import("@/components/QuickView"),
  },
  methods: {
    setSelectedMenTab: function (id) {
      this.$store.dispatch("getMenTabProducts", id);
    },
    setSelectedWomenTab: function (id) {
      this.$store.dispatch("getWomenTabProducts", id);
    },
  },
  computed: {},
  data() {
    return {
      layout: "twoColumn",
    };
  },
  mounted() {
    // this.setSelectedMenTab(1);
    // this.setSelectedWomenTab(this.$store.state.categories[1].sub_categories[0].id);
  },
};
</script>
