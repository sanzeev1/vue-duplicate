<template>
    <div class="shop-area pt-100 pb-100">
        <div class="container">
            <div class="row">
                <div class="col-md-6">
                    <div class="product-details-slider">
                        <div class="product-details-img">

                            <swiper :options="swiperOptionTop" ref="swiperTop">
                                <div class="large-img swiper-slide" v-if="product.image">
                                    <img class="img-fluid" :src="`https://api.cheparo.com/${product.image}`"
                                        :alt="product.product_name">
                                </div>
                                <div class="large-img swiper-slide" v-if="product.image1">
                                    <img class="img-fluid" :src="`https://api.cheparo.com/${product.image1}`"
                                        :alt="product.product_name">
                                </div>
                                <div class="large-img swiper-slide" v-if="product.image2">
                                    <img class="img-fluid" :src="`https://api.cheparo.com/${product.image2}`"
                                        :alt="product.product_name">
                                </div>
                                <div class="large-img swiper-slide" v-if="product.image3">
                                    <img class="img-fluid" :src="`https://api.cheparo.com/${product.image3}`"
                                        :alt="product.product_name">
                                </div>
                                <div class="large-img swiper-slide" v-if="product.image4">
                                    <img class="img-fluid" :src="`https://api.cheparo.com/${product.image4}`"
                                        :alt="product.product_name">
                                </div>
                                <div class="quickview-nav swiper-button-prev">
                                    <i class="pe-7s-angle-left"></i>
                                </div>
                                <div class="quickview-nav swiper-button-next">
                                    <i class="pe-7s-angle-right"></i>
                                </div>
                            </swiper>
                            <swiper class="mt-2" :options="swiperOptionThumbs" ref="swiperThumbs">
                                <div class="thumb-img swiper-slide" v-if="product.image">
                                    <img class="img-fluid" :src="`https://api.cheparo.com/${product.image}`"
                                        :alt="product.product_name">
                                </div>
                                <div class="thumb-img swiper-slide" v-if="product.image1">
                                    <img class="img-fluid" :src="`https://api.cheparo.com/${product.image1}`"
                                        :alt="product.product_name">
                                </div>
                                <div class="thumb-img swiper-slide" v-if="product.image2">
                                    <img class="img-fluid" :src="`https://api.cheparo.com/${product.image2}`"
                                        :alt="product.product_name">
                                </div>
                                <div class="thumb-img swiper-slide" v-if="product.image3">
                                    <img class="img-fluid" :src="`https://api.cheparo.com/${product.image3}`"
                                        :alt="product.product_name">
                                </div>
                                <div class="thumb-img swiper-slide" v-if="product.image4">
                                    <img class="img-fluid" :src="`https://api.cheparo.com/${product.image4}`"
                                        :alt="product.product_name">
                                </div>
                            </swiper>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6 col-md-6">
                    <div class="product-details-content ml-70">
                        <h2>{{ product.product_name }}</h2>
                        <div class="product-details-price">
                            <!-- <span class="old" v-if="product.discount > 0">${{ product.price.toFixed(2) }}</span> -->
                            <!-- <span>${{ discountedPrice(product).toFixed(2) }}</span> -->
                            <span>${{ product.price.toFixed(2) }}</span>
                        </div>

                        <p>{{ product.short_description }}</p>
                        <div class="pro-details-size-color" >
                            <div class="pro-details-color-wrap">
                                <h6 class="label">Color: <p>   {{product.color}}</p></h6>
                                
                            </div>
                            <div class="pro-details-size-wrap">
                                <h6 class="label">Size: <p> {{product.size}}</p></h6>
                               
                            </div>
                        </div>
                        <div class="pro-details-quality">
                            <div class="cart-plus-minus">
                                <button @click="decreaseQuantity()" class="dec qtybutton">-</button>
                                <input class="cart-plus-minus-box" type="text" :value="singleQuantity" readonly>
                                <button @click="increaseQuantity()" class="inc qtybutton">+</button>
                            </div>
                            <div class="pro-details-cart btn-hover">
                                <button @click="addToCart(product)">Add To Cart</button>
                            </div>
                            <div class="pro-details-wishlist">
                                <button @click="addToWishlist(product)" title="wishlist"><i
                                        class="fa fa-heart-o"></i></button>
                            </div>

                        </div>
                        <!-- <div class="pro-details-meta">
                            <span class="label">Categories:</span>
                            <ul>
                                <li v-for="(category, index) in product.category" :key="index">
                                    <n-link :to="`/shop?category=${slugify(category)}`">{{ category }},</n-link>
                                </li>
                            </ul>
                        </div> -->
                        <!-- <div class="pro-details-meta">
                            <span class="label">Tag:</span>
                            <ul>
                                <li v-for="(tag, index) in product.tag" :key="index">
                                    <n-link :to="`/shop?tag=${slugify(tag)}`">{{ tag }},</n-link>
                                </li>
                            </ul>
                        </div> -->
                        <div class="pro-details-social">
                            <ul>
                                <li>
                                    <a href="https://www.facebook.com/" target="_blank">
                                        <i class="fa fa-facebook"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://dribbble.com/" target="_blank">
                                        <i class="fa fa-dribbble"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.pinterest.com/" target="_blank">
                                        <i class="fa fa-pinterest-p"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://twitter.com/" target="_blank">
                                        <i class="fa fa-twitter"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.linkedin.com/" target="_blank">
                                        <i class="fa fa-linkedin"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
export default {
    props: ['product'],

    data() {
        return {
            singleQuantity: 1,

            swiperOptionTop: {
                loop: true,
                slidesPerView: 1,
                spaceBetween: 10,
                effect: 'fade',
                loopedSlides: 5, // looped slides should be the same
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev'
                }
            },

            swiperOptionThumbs: {
                loop: true,
                spaceBetween: 10,
                centeredSlides: true,
                slidesPerView: 5,
                freeMode: true,
                watchSlidesVisibility: true,
                watchSlidesProgress: true,
                slideToClickedSlide: true,
                loopedSlides: 5, // looped slides should be the same
            },
        }
    },

    mounted() {
    this.$nextTick(() => {
        const swiperTop = this.$refs.swiperTop;
        const swiperThumbs = this.$refs.swiperThumbs;
        
        if (swiperTop && swiperTop.$swiper && swiperThumbs && swiperThumbs.$swiper) {
            swiperTop.$swiper.controller.control = swiperThumbs.$swiper;
            swiperThumbs.$swiper.controller.control = swiperTop.$swiper;
        }
    });
},


    methods: {
        addToCart(product) {
            const prod = { ...product, cartQuantity: this.singleQuantity }
            // for notification
            if (this.$store.state.cart.find(el => product.id === el.id)) {
                this.$notify({ title: 'Already added to cart update with one' })
            } else {
                this.$notify({ title: 'Add to cart successfully!' })
            }
            this.$store.dispatch('addToCartItem', prod)
        },

        discountedPrice(product) {
            return product.price - (product.price * product.discount / 100)
        },

        increaseQuantity() {
            if (this.product.quantity > this.singleQuantity) this.singleQuantity++
        },

        decreaseQuantity() {
            if (this.singleQuantity > 1) this.singleQuantity--
        },

        addToWishlist(product) {
            // for notification
            if (this.$store.state.wishlist.find(el => product.id === el.id)) {
                this.$notify({ title: 'Already added to wishlist!' })
            } else {
                this.$notify({ title: 'Add to wishlist successfully!' })
            }
            this.$store.dispatch('addToWishlist', product)
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
};
</script>
