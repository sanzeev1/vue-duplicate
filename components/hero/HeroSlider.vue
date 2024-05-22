<template>
  <div class="slider-area nav-style-1">
    <swiper :options="swiperOption">
      <swiper-slide class="single-slider slider-height-1 bg-purple">
        <div class="container" v-if="$store.state.sliders[0]">
          <div class="row">
            <div class="col-sm-6">
              <div class="slider-content slider-animation-1">
                <h3>{{ $store.state.sliders[0].title }}</h3>
                <h1>{{ $store.state.sliders[0].subtitle }}</h1>
                <div class="slider-btn btn-hover">
                  <n-link to="/shop">SHOP NOW</n-link>
                </div>
              </div>
            </div>
            <div class="col-sm-6">
              <div class="slider-single-img slider-img-animation">
                <img :src="`https://api.cheparo.com/${$store.state.sliders[0].image}`" alt="image">
              </div>
            </div>
            <br><br><br>&nbsp;
          </div>
        </div>
      </swiper-slide>

      <swiper-slide class="single-slider slider-height-1 bg-purple">
        <div class="container" v-if="$store.state.sliders[1]">
          <div class="row">
            <div class="col-sm-6">
              <div class="slider-content slider-animation-1">
                <h3>{{ $store.state.sliders[1].title }}</h3>
                <h1>{{ $store.state.sliders[1].subtitle }}</h1>
                <div class="slider-btn btn-hover">
                  <n-link to="/shop">SHOP NOW</n-link>
                </div>
              </div>
            </div>
            <div class="col-sm-6">
              <div class="slider-single-img slider-img-animation">
              </div>
            </div>
          </div>
          <br><br><br>&nbsp;

        </div>
      </swiper-slide>


      <!-- Swiper Navigation Start -->
      <div class="hero-slider-nav swiper-button-prev">
        <i class="pe-7s-angle-left"></i>
      </div>
      <div class="hero-slider-nav swiper-button-next">
        <i class="pe-7s-angle-right"></i>
      </div>
      <!-- Swiper Navigation End -->
    </swiper>
  </div>
</template>

<script>
export default {
  methods: {
    getSlidersData: function () {
      this.$store.dispatch("getSlidersAction");
    },
  },

  data() {
    return {
      swiperOption: {
        loop: true,
        speed: 750,
        slidesPerView: 1,
        spaceBetween: 10,
        effect: "fade",
        fadeEffect: {
          crossFade: true
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      }
    }
  },
  mounted() {
    this.getSlidersData();
  },

};
</script>