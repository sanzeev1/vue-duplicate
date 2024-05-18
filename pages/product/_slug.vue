<template>
    <div>
        <div class="product-details-page-wrapper" v-if="$store.state.product == null">
            <div style="width: 100%; height: 100vh; display:flex;  justify-content: center; align-items: center;">
                <h2>
                    <center><progress></progress></center>
                </h2>
            </div>
        </div>
        <div class="product-details-page-wrapper" v-else-if="$store.state.product?.error != null">
            <div style="width: 100%; height: 100vh; display:flex;  justify-content: center; align-items: center;">
                <center>
                    <h2>
                        Error Loading Product Details

                    </h2>
                    <span>
                        {{ $store.state.product?.error }}
                    </span>
                </center>
            </div>
        </div>
        <div class="product-details-page-wrapper"
            v-else-if="$store.state.product && $store.state.product?.error == null">
            <HeaderWithTopbar containerClass="container" />
            <Breadcrumb :pageTitle="$store.state.product.product_name" />
            <div v-if="$store.state.product.error == null">

                <ProductDetailsWrapper :product="$store.state.product" />
            </div>
            <ProductDetailsDescriptionReview :product="$store.state.product" />
            <TheFooter />
        </div>

    </div>

</template>

<script>
export default {
    data() {
        return {
            slug: this.$route.params.slug // id
        }
    },

    computed: {

    },



    methods: {
        async getProductById(id) {

            return await this.$store.dispatch("getProductById", id);
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
    mounted() {
        this.getProductById(this.$route.params.slug)
    }
};
</script>
