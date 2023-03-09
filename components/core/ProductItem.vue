<template>
  <div class="product-item shadow" v-if="item">
    <div class="product-item__img">
      <img :src="item['img']" :alt="item['name']">
    </div>
    <div class="product-item__content">
      <div class="header">
        <div class="name">{{ item['name'] }}</div>
        <div @click="toggleFollow">
          <d-icon class="icon"
                  name="FollowIcon"
                  :fill-path="item['isFollow'] ? '#0488e1' : null"
                  :width="24"
                  :height="24"/>
        </div>
      </div>
      <div class="price">{{ item['price'] }}₽</div>
      <div class="description">{{ item['description'] }}</div>
      <div class="count-row">
        <div class="count">Кол-во товара: <span>{{ item['count'] }}</span></div>
        <div class="count">Кол-во заказа: <span>{{ item['order_count'] }}</span></div>
      </div>
      <d-button class="d-btn-add" v-if="!isAdded" @click="addToCart">Добавить в корзину</d-button>
      <d-button class="d-btn-add" v-if="isAdded" @click="$router.push({path: '/basket'})">Перейти в корзину</d-button>
    </div>
  </div>
</template>

<script>
import DIcon from "@/components/custom/icons/DIcon.vue";
import {mapMutations} from "vuex";
import DButton from "@/components/custom/buttons/DButton.vue";

export default {
  name: "ProductItem",
  components: {DButton, DIcon},
  props: {
    item: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  computed: {
    basketItems() {
      return this.$store.state.shop.basket
    },
    isAdded(){
      if (this.basketItems && this.basketItems.length){
        if (this.basketItems.filter((e) => e.id === this.item.id).length){
          return true
        }
      }
      return false;
    },
  },
  methods: {
    ...mapMutations({
      SET_FOLLOW: 'shop/SET_FOLLOW',
      SET_BASKET: 'shop/SET_BASKET_ITEMS'
    }),
    toggleFollow() {
      this.SET_FOLLOW(this.item.id)
    },
    addToCart() {
      this.SET_BASKET(this.item)
    },
  },
}
</script>

<style scoped lang="scss">
.product-item {
  border-radius: 10px;
  overflow: hidden;
  display: flex;
  flex-direction: column;

  .d-btn-add {
    padding: 5px 10px!important;
    width: 100%!important;
    margin-top: 20px!important;
    font-size: 12px!important;
  }

  .product-item__img {
    display: flex;
    justify-content: center;
    margin-bottom: 10px;

    img {
      max-width: initial !important;
      height: 150px !important;
      object-fit: contain;
    }
  }

  &__content {
    padding: 15px;
    flex-grow: 1;
    display: flex;
    flex-direction: column;

    .header {
      display: flex;
      align-items: center;
      justify-content: space-between;

      .icon {
        cursor: pointer;
      }

      .name {
        font-size: 15px;
        font-weight: bold;
        color: #0488e1;
        margin-bottom: 5px;
      }
    }


    .price {
      margin-bottom: 5px;
      font-weight: bold;
    }

    .description {
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;
      font-size: 12px;
      color: gray;
      margin-bottom: 5px;
    }

    .count-row {
      margin-bottom: auto;
      .count {
        font-size: 13px;

        span {
          font-weight: bold;
        }
      }
    }
  }

  &.shadow {
    -webkit-box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
    -moz-box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
    box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
  }
}
</style>
