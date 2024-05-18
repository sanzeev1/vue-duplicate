<template>
    <form :action="`shop?sub_category=${$route.query.sub_category ?? ''}&sort=${$route.query.sort ?? ''}`"
        class="sidebar-style" :class="classes">
        <div class="sidebar-widget">
            <h4 class="pro-sidebar-title">Search</h4>
            <div class="pro-sidebar-search mb-50 mt-25">
                <div class="pro-sidebar-search-form">
                    <input type="hidden" name="category" :value="`${$route.query.category ?? ''}`">
                    <input type="hidden" name="sub_category" :value="`${$route.query.sub_category ?? ''}`">
                    <input type="hidden" name="sort" :value="`${$route.query.sort ?? ''}`">
                    <input type="text" name="search" :value="`${$route.query.search ?? ''}`"
                        placeholder="Search here...">
                    <button>
                        <i class="pe-7s-search"></i>
                    </button>
                </div>
            </div>
        </div>

        <!-- category widget  -->
        <div class="sidebar-widget">
            <h4 class="pro-sidebar-title">Categories</h4>

            <ul class="sidebar-widget-list mt-20">
                <li class="sidebar-widget-list-left">

                    <n-link
                        :to="`shop?category=&sub_category=&search=${$route.query.search ?? ''}&sort=${$route.query.sort ?? ''}`">
                        <span class="check-mark"></span>
                        All Categories
                    </n-link>
                </li>
                <li class="sidebar-widget-list-left" v-for="(category, index) in $store.state.categories" :key="index">

                    <ul>
                        <li v-for="(subcategory, i) in category.sub_categories" :key="i">
                            <n-link
                                :to="`?category=${category.id}&sub_category=&search=${$route.query.search ?? ''}&sort=${$route.query.sort ?? ''}`"
                                v-if="i == 0">
                                <span class="check-mark"></span>
                                {{ category.category_name }}
                            </n-link>
                            <n-link style="margin-left: 15px;"
                                :to="`?&category=&sub_category=${subcategory.id}&search=${$route.query.search ?? ''}&sort=${$route.query.sort ?? ''}`">
                                <span class="check-mark"></span>
                                {{ subcategory.sub_category_name }}
                            </n-link>
                        </li>
                    </ul>

                </li>
            </ul>
        </div>

        <!-- color widget  -->
        <!-- <div class="sidebar-widget mt-50">
            <h4 class="pro-sidebar-title">Colour</h4>
            <ul class="sidebar-widget-list mt-20">
                <li class="sidebar-widget-list-left" v-for="(color, index) in colorList" :key="index" >
                    <n-link :to="`?color=${slugify(color)}`">
                        <span class="check-mark"></span>
                        {{ color }}
                    </n-link>
                </li>
            </ul>
        </div> -->

        <!-- size widget  -->
        <!-- <div class="sidebar-widget mt-50">
            <h4 class="pro-sidebar-title">Sizes</h4>
            <ul class="sidebar-widget-list mt-20">
                <li class="sidebar-widget-list-left" v-for="(size, index) in sizeList" :key="index" >
                    <n-link :to="`?size=${slugify(size)}`">
                        <span class="check-mark"></span>
                        {{ size }}
                    </n-link>
                </li>
            </ul>
        </div> -->

        <!-- tag widget  -->
        <!-- <div class="sidebar-widget sidebar-widget__tag mt-60">
            <h4 class="pro-sidebar-title">Tags</h4>
            <div class="sidebar-widget-tag mt-30">
                <ul>
                    <li v-for="(tag, index) in tagList" :key="index">
                        <n-link :to="`?tag=${slugify(tag)}`">
                            {{ tag }}
                        </n-link>
                    </li>
                </ul>
            </div>
        </div> -->
    </form>
</template>

<script>
export default {
    props: ["classes"],
    computed: {
        categoryList() {
            return this.$store.getters.categoryList
        },
        sizeList() {
            return this.$store.getters.sizeList
        },
        colorList() {
            return this.$store.getters.colorList
        },
        tagList() {
            return this.$store.getters.tagList
        }
    },

    methods: {
        slugify(text) {
            return text
                .toString()
                .toLowerCase()
                .replace(/\s+/g, "-") // Replace spaces with -
                .replace(/[^\w-]+/g, "") // Remove all non-word chars
                .replace(/--+/g, "-") // Replace multiple - with single -
                .replace(/^-+/, "") // Trim - from start of text
                .replace(/-+$/, ""); // Trim - from end of text
        }
    }
};
</script>
