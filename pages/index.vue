<template>
  <div class="home-page-wrapper">
    <TheHeader />
    <HeroSlider />
    <ServicePolicy />
    <ProductWrapper :isSectionTitle="true" />

    <TheFooter />
  </div>
</template>

<script>
export default {
  components: {
    TheHeader: () => import("@/components/TheHeader"),
    HeroSlider: () => import("@/components/hero/HeroSlider"),
    ServicePolicy: () => import("@/components/policy/ServicePolicy"),
    ProductWrapper: () => import("@/components/product/ProductWrapper"),

    TheFooter: () => import("@/components/TheFooter"),
  },
  head() {
    return {
      title: "Online Shopping",
    };
  },
};
</script>
