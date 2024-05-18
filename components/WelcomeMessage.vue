<template>
    <div class="welcome-area">
        <div class="container">
            <div class="welcome-content text-center">
                <h5>{{ subTitle }}</h5>
                <h1>{{ title }}</h1>
                <p>{{ desc }}</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                title: "Welcome To Fancy",
                subTitle: "Who Are We",
                desc: "Fancy is an innovative e-commerce platform designed to cater to all your shopping needs. We offer an extensive range of products, including the latest fashion trends, electronics, home essentials, beauty products, and much more. Our goal is to provide you with a seamless shopping experience, ensuring that you find exactly what you're looking for with ease and convenience."
            }
        },
    };
</script>
