<template>
  <div class="product">
    <template v-if="list && list.length">
      <div class="product-list">
        <product-item v-for="(item, i) in list"
                      :key="i"
                      :item="item"
                      class="product-list__item"/>
      </div>
    </template>
    <div v-else>No result</div>
  </div>
</template>

<script>
import ProductItem from "@/components/core/ProductItem.vue";

export default {
  name: "ProductList",
  components: {ProductItem},
  props: {
    list: {
      type: Array,
      default() {
        return []
      }
    }
  }
}
</script>

<style scoped lang="scss">
.product {
  font-size: 16px;

  &-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin: -20px;

    &__item {
      min-width: 200px;
      flex: 0 0 calc(25% - 20px);
      margin: 10px;
    }

    @media screen and (max-width: 768px){

    }
  }
}
</style>
