<template>
  <div>
    <div class="product-area pb-90">
      <div class="container" >
      <!-- v-if="$store.state.categories.length > 0 && $store.state.categories[0] != null" -->
        <div>
          <SectionTitleWithSubTitle :title="`${$store.state.categories[0]?.category_name ?? 'Men'}s Latest Products`"
            classes="section-title" />
        </div>

        <ul class="nav product-tab-list pt-30 pb-55 justify-content-center" v-if="$store.state.categories[0]?.sub_categories?.length > 0">
          <li class="nav-item" role="presentation"
            v-for="(category, index) in $store.state.categories[0]?.sub_categories.slice(0, 3)" :key="index">
            <button @click="setSelectedMenTab(category.id)" class="nav-link" data-bs-toggle="pill"
              data-bs-target="#new-product" role="tab">
              <b style="color:black;font-weight: bold;" v-if="category.id === $store.state.selectedMenTab">
                {{ category.sub_category_name ?? '' }}
              </b>
              <span style="font-weight: normal;color: gray;" v-else>
                {{ category.sub_category_name ?? '' }}
              </span>
            </button>
          </li>
        </ul>

        <div class="tab-content">
          <div>
            <div class="row">
              <div class="col-xl-3 col-lg-4 col-sm-6" v-if="$store.state.mentabProducts" v-for="(product, index) in $store.state.mentabProducts.slice(0, 8)" :key="index">
                <ProductGridItem :product="product" :layout="layout" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <QuickView />
    </div>
    <div class="product-area pb-90">
      <div class="container" v-if="$store.state.categories.length > 1 && $store.state.categories[1] != null">
        <div>
          <SectionTitleWithSubTitle :title="`${$store.state.categories[1]?.category_name ?? 'Women'}s Latest Products`"
            classes="section-title" />
        </div>

        <ul class="nav product-tab-list pt-30 pb-55 justify-content-center" v-if="$store.state.categories[1]?.sub_categories?.length > 0">
          <li class="nav-item" role="presentation"
            v-for="(category, index) in $store.state.categories[1]?.sub_categories.slice(0, 3)" :key="index">
            <button @click="setSelectedWomenTab(category.id)" class="nav-link" data-bs-toggle="pill"
              data-bs-target="#new-product" role="tab">
              <b style="color:black;" v-if="category.id === $store.state.selectedWomenTab">
                {{ category.sub_category_name ?? '' }}
              </b>
              <span v-else>
                {{ category.sub_category_name ?? '' }}
              </span>
            </button>
          </li>
        </ul>

        <div class="tab-content">
          <div>
            <div class="row">
              <div class="col-xl-3 col-lg-4 col-sm-6" v-if="$store.state.womentabProducts" v-for="(product, index) in $store.state.womentabProducts.slice(0, 8)" :key="index">
                <ProductGridItem :product="product" :layout="layout" />
              </div>
            </div>
          </div>
        </div>
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
  data() {
    return {
      layout: "twoColumn",
    };
  },
};
</script>
