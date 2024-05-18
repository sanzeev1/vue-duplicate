<template>
  <ul>
    <li>
      <n-link to="/">Home</n-link>
    </li>

    <li v-for="(category, index) in $store.state.categories" :key="index">
      <n-link :to="`/shop?category=${category.id}&sub_category=&search=&sort=`">{{ category.category_name }} <i
          class="fa fa-angle-down"></i></n-link>
      <ul class="submenu">
        <li v-for="(subcategory, index) in category.sub_categories" :key="index">
          <n-link :to="`/shop?category=&sub_category=${subcategory.id}&search=&sort=`">{{ subcategory.sub_category_name
            }}</n-link>
        </li>
      </ul>
    </li>
  </ul>
</template>
<script>
export default {
  components: {},
  methods: {
    getCategoriesWithSubCategories: function () {
      this.$store.dispatch("getCategoriesWithSubCategories");
    },
  },
  computed: {},

  data() {
    return {};
  },

  mounted() {
    this.getCategoriesWithSubCategories();
  },
};
</script>
