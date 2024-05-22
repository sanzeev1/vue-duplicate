<template>
    <div class="description-review-area pb-90">
        <div class="container">
            <div class="description-review-wrapper">
                <div class="description-review-topbar nav">
                    <a class="active" data-bs-toggle="tab" href="#des-details2">Description</a>
                    <a data-bs-toggle="tab" href="#des-details1">Additional information</a>
                </div>
                <div class="tab-content description-review-bottom">
                    <div id="des-details2" class="tab-pane active">
                        <div class="product-description-wrapper">
                            <p>
                                {{ product.long_description }}
                            </p>
                        </div>
                    </div>
                    <div id="des-details1" class="tab-pane ">
                        <div class="product-anotherinfo-wrapper">
                            <ul>
                                <li><span>Supplier</span>{{ product.supplier }}</li>
                                <li><span>Color</span>{{ product.color }}</li>
                                <li><span>Size</span>{{ product.size }}</li>
                                <li><span>Material</span>{{ product.material }}</li>
                                <li><span>Stocks</span>{{ product.quantity }}</li>
                                <li><span>Short Description</span>{{ product.short_description }}</li>

                                <!-- <li><span>Materials</span> 60% cotton, 40% polyester</li>
                                <li><span>Other Info</span> American heirloom jean shorts pug seitan letterpress</li> -->
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
};
</script>
