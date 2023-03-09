<template>
  <div class="basket-icon">
    <div class="count" v-if="basketItems">{{ basketItems }}</div>
    <d-icon name="BasketIcon" :width="50" :height="50"/>
  </div>
</template>

<script>
import DIcon from "@/components/custom/icons/DIcon.vue";

export default {
  name: "BasketIcon",
  components: {DIcon},
  computed: {
    basketItems() {
      const initialValue = 0;
      const sumWithInitial = this.$store.state.shop.basket.reduce(
        (accumulator, item) => accumulator + parseInt(item['countProduct']),
        initialValue
      );
      return sumWithInitial
    }
  },
}
</script>

<style scoped lang="scss">
.basket-icon {
  display: flex;
  align-items: center;

  .count {
    font-size: 16px;
    font-weight: bold;
    line-height: 1;
  }
}
</style>
