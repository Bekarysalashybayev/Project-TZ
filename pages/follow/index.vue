<template>
  <div class="follow">
    <div class="container">
      <div class="follow-page">
        <product-list class="mt-30" :list="products"/>
      </div>
    </div>
  </div>
</template>

<script>
import ProductList from "@/components/core/ProductList.vue";

export default {
  name: "index",
  components: {ProductList},
  computed: {
    products() {
      return this.$store.state.shop.items.filter((e) => e['isFollow'])
    }
  },
}
</script>

<style scoped lang="scss">
.follow {
  &-page {
    margin-top: 70px;
  }
}
</style>
