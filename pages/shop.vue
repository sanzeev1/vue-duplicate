<template>
    <div class="shop-page-wrapper">
        <HeaderWithTopbar containerClass="container" />
        <!-- <Breadcrumb pageTitle="shop grid standard" /> -->

        <!-- product items wrapper -->
        <div class="shop-area pt-100 pb-100">
            <div class="container">
                <div class="row flex-row-reverse">
                    <div class="col-lg-9">
                        <!-- shop top bar -->
                        <div class="shop-top-bar">
                            <div class="select-showing-wrap">
                                <div v-if="$route.query.sort != 'high2low' && $route.query.sort != 'low2high'">
                                    <div class="shop-select">
                                        <select name="c" v-model="selectedPrice">

                                            <option selected value="">
                                                Default
                                            </option>

                                            <option value="low2high">
                                                Price -
                                                Low to High
                                            </option>

                                            <option value="high2low">
                                                Price - High to Low
                                            </option>

                                        </select>
                                    </div>
                                </div>
                                <div v-if="$route.query.sort == 'low2high'">
                                    <div class="shop-select" v-if="$route.query.sort == 'low2high'">
                                        <select name="a" v-model="selectedPrice">

                                            <option value="">
                                                Default
                                            </option>

                                            <option selected value="low2high">
                                                Price -
                                                Low to High
                                            </option>

                                            <option value="high2low">
                                                Price - High to Low
                                            </option>

                                        </select>
                                    </div>
                                </div>
                                <div v-if="$route.query.sort == 'high2low'">
                                    <div class="shop-select">
                                        <select name="b" v-model="selectedPrice">

                                            <option value="">
                                                Default
                                            </option>

                                            <option value="low2high">
                                                Price -
                                                Low to High
                                            </option>

                                            <option selected value="high2low">
                                                Price - High to Low
                                            </option>

                                        </select>
                                    </div>
                                </div>
                                <p>Showing {{ (this.$route.query.page ?? 0) * 20 }} to {{ (this.$route.query.page ??
                                    0) * 20 + this.filterItems.length }} of
                                    {{ this.totalNumberOfPages * 20 }} result</p>
                            </div>
                            <div class="shop-tab">
                                <button @click="layout = 'twoColumn'" :class="{ active: layout === 'twoColumn' }">
                                    <i class="fa fa-th-large"></i>
                                </button>
                                <button @click="layout = 'threeColumn'" :class="{ active: layout === 'threeColumn' }">
                                    <i class="fa fa-th"></i>
                                </button>
                                <button @click="layout = 'list'" :class="{ active: layout === 'list' }">
                                    <i class="fa fa-list-ul"></i>
                                </button>
                            </div>
                        </div>
                        <!-- end shop top bar -->

                        <!-- shop product -->
                        <div class="shop-bottom-area mt-35">
                            <div class="row product-layout"
                                :class="{ 'list': layout === 'list', 'grid three-column': layout === 'threeColumn', 'grid two-column': layout === 'twoColumn' }">
                                <div class="col-xl-4 col-sm-6" v-for="(product, index) in filterItems" :key="index">
                                    <ProductGridItem :product="product" :layout="layout" />
                                </div>
                            </div>
                        </div>
                        <!-- end shop product -->

                        <div v-if="totalNumberOfPages > 1">
                            <pagination class="pro-pagination-style shop-pagination mt-30" v-model="currentPage"
                                :per-page="20" :records="totalNumberOfPages * 20" @paginate="paginateClickCallback"
                                :page-count="totalNumberOfPages" />
                        </div>
                    </div>

                    <div class="col-lg-3">
                        <ShopSidebar classes="mr-30" />
                    </div>
                </div>
            </div>
        </div>
        <!-- end product items wrapper -->

        <QuickView />
        <TheFooter />
    </div>
</template>

<script>
export default {
    components: {
        HeaderWithTopbar: () => import('@/components/HeaderWithTopbar'),
        Breadcrumb: () => import('@/components/Breadcrumb'),
        ProductGridItem: () => import('@/components/product/ProductGridItem'),
        QuickView: () => import('@/components/QuickView'),
        TheFooter: () => import('@/components/TheFooter'),
    },

    data() {
        return {
            layout: "threeColumn",
            filterItems: [],
            prevSelectedCategoryName: '',
            prevSelectedTagName: '',
            prevSelectedSizeName: '',
            prevSelectedColorName: '',
            currentPage: 1,
            totalNumberOfPages: 1,
            perPage: 9,
            selectedPrice: this.$route.query.sort ?? '',
        }
    },

    computed: {
        products() {
            return this.$store.getters.getProducts
        },

        getItems() {
            let start = (this.currentPage - 1) * this.perPage;
            let end = this.currentPage * this.perPage;
            return this.filterItems.slice(start, end);
        },
        getPaginateCount() {
            return Math.ceil(this.filterItems.length / this.perPage);
        },
    },

    mounted() {
        this.updateProductData()
    },

    methods: {
        paginateClickCallback(page) {
            window.location = `shop?search=${this.$route.query.search ?? ''}&sort=${this.$route.query.sort ?? ''}&sub_category=${this.$route.query.sub_category ?? ''}&category=${this.$route.query.category ?? ''}&page=${page}`;

        },

        async updateProductData() {


            const search = this.$route.query.search || '';
            const page = this.$route.query.page || 1;
            this.currentPage = page;
            const category = this.$route.query.category || null;
            const sub_category = this.$route.query.sub_category || null;
            const sort = this.$route.query.sort || null;
            this.filterItems = [];
            var url = `https://api.cheparo.com/products/all/?`;
            if (search != '') url += `search=${search}`;
            if (search == '') url += `search`;
            if (page) url += `&page=${page}`;
            if (category) url += `&category_id=${category}`;
            if (sub_category) url += `&sub_category_id=${sub_category}`;
            if (sort) url += `&sort=${sort}`;
            await fetch(url).then(async (res) => {
                if (res.ok) {
                    const { products, totalNumberOfPages: noOfpages } = await res.json();
                    this.filterItems = products;
                    this.totalNumberOfPages = noOfpages;

                } else {
                    throw "Error getting search products";
                }
            }).catch((err) => alert(err))


        },

        discountedPrice(product) {
            return product.price - (product.price * product.discount / 100)
        },

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
    },

    watch: {
        $route() {
            this.updateProductData()
        },

        selectedPrice() {
            switch (this.selectedPrice) {
                case "low2high":
                    window.location = `shop?search=${this.$route.query.search ?? ''}&sort=low2high&sub_category=${this.$route.query.sub_category ?? ''}&category=${this.$route.query.category ?? ''}`;
                    break;
                case "high2low":
                    window.location = `shop?search=${this.$route.query.search ?? ''}&sort=high2low&sub_category=${this.$route.query.sub_category ?? ''}&category=${this.$route.query.category ?? ''}`;

                    break;
                default:
                    window.location = `shop?search=${this.$route.query.search ?? ''}&sort=&sub_category=${this.$route.query.sub_category ?? ''}&category=${this.$route.query.category ?? ''}`;

            }
        }
    },

    head() {
        return {
            title: "Shop grid standard"
        }
    },
};
</script>
