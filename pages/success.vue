<template>
    <div class="home-page-wrapper">
        <TheHeader />
        <div class="empty-cart text-center">
            <center>
                <br>
                <br>
                <h2>
                    Order Successful !
                </h2>
                <br>
                <p>Your order has been successful</p>
                <br>
                <br>
                <br>
            </center>
        </div>

        <TheFooter />
    </div>
</template>

<script>
export default {
    components: {
        TheHeader: () => import("@/components/TheHeader"),
        HeroSlider: () => import("@/components/hero/HeroSlider"),
        ServicePolicy: () => import("@/components/policy/ServicePolicy"),
        // ProductWrapper: () => import("@/components/product/ProductWrapper"),

        TheFooter: () => import("@/components/TheFooter"),
    },
    head() {
        return {
            title: "Home Fashion One",
        };
    },
};
</script>