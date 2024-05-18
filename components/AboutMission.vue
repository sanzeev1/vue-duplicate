<template>
  <div class="about-mission-area pb-70">
    <div class="container">
      <div class="row">
        <div class="col-md-4" v-for="(item, index) in items" :key="index">
          <div class="single-mission mb-30">
            <h3>{{ item.title }}</h3>
            <p>{{ item.desc }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          id: "1",
          title: "Our Vision",
          desc: "At Fancy, we envision a world where shopping is seamless, enjoyable, and accessible to everyone. We aim to revolutionize the online shopping experience by providing top-quality products and exceptional customer service.",
        },
        {
          id: "2",
          title: "Our Mission",
          desc: "Our mission at Fancy is to deliver an unparalleled online shopping experience by offering a vast selection of products, competitive prices, and fast, reliable delivery. We are committed to making shopping convenient and enjoyable for our customers.",
        },
        {
          id: "3",
          title: "Our Goal",
          desc: "Our goal at Fancy friend is to become the go-to destination for online shoppers worldwide. We strive to build long-lasting relationships with our customers by continually improving our platform, expanding our product range, and providing exceptional value.",
        },
      ],
    };
  },
};
</script>
