<template>
  <div class="menu">
    <div class="menu__title">
      Все бренды
    </div>
    <div class="menu__items">
      <div :class="['menu__items-item', {active: currentCategory === category}]"
           @click="$emit('selectCategory', category)"
           v-for="(category, i) in categories" :key="i">
        {{ category }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LeftMenu",
  props: {
    categories: {
      type: Array,
      default() {
        return []
      },
    },
    currentCategory: {
      type: String,
      default: null,
    },
  },
}
</script>

<style scoped lang="scss">
.menu {
  font-size: rem(35);

  &__title {
    font-weight: bold;
    margin-bottom: 15px;
  }

  &__items {
    &-item {
      cursor: pointer;
      width: max-content;
      margin-bottom: 10px;
      text-transform: uppercase;

      &.active {
        border-bottom: 1px solid black;
        padding-bottom: 2px;
        opacity: 1 !important;
      }

      &:hover {
        opacity: .8;
      }
    }
  }
}
</style>
