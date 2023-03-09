<template>
  <div class="basket">
    <div class="container">
      <div class="basket-page">
        <div class="title">Корзина</div>
        <table>
          <thead>
          <tr>
            <th></th>
            <th>Бренд</th>
            <th>Название</th>
            <th>Цена</th>
            <th>Кол-во</th>
            <th>Сумма</th>
            <th>#</th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="(item, i) in basketItems" :key="i">
            <td>
              <img :src="item['img']" :alt="item['name']">
            </td>
            <td>{{ item['category'] }}</td>
            <td>{{ item['name'] }}</td>
            <td>{{ item['price'] }}₽</td>
            <td>
              <input type="number"
                     :disabled="hasPayment"
                     min="1"
                     onkeydown="return false"
                     :max="item['count']"
                     @input="(e) => changeCount(item, e.target.value)"
                     :value="item['countProduct']">
            </td>
            <td>{{ item['totalPrice'] }}₽</td>
            <td>
              <d-button :disabled="hasPayment" @click="deleteItem(i)">Удалить</d-button>
            </td>
          </tr>
          </tbody>
        </table>
        <div class="check" v-if="basketItems && basketItems.length">
          <span>к оплате {{ totalSum }}₽</span>
          <d-button @click="pay" :disabled="hasPayment">Оплатить</d-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import DButton from "@/components/custom/buttons/DButton.vue";
import {mapMutations} from "vuex";

export default {
  name: "index",
  components: {DButton},
  data() {
    return {
      hasPayment: false,
      paymentArr: []
    }
  },
  computed: {
    basketItems() {
      if (this.hasPayment){
        return this.paymentArr
      }
      return this.$store.state.shop.basket
    },
    totalSum() {
      const initialValue = 0;
      const sumWithInitial = this.basketItems.reduce(
        (accumulator, item) => accumulator + item.totalPrice,
        initialValue
      );
      return sumWithInitial
    },
  },
  methods: {
    ...mapMutations({
      SET_FOLLOW: 'shop/SET_FOLLOW',
      SET_BASKET_ITEM_COUNT: 'shop/SET_BASKET_ITEM_COUNT',
      DELETE_BASKET_ITEM: 'shop/DELETE_BASKET_ITEM',
      PAY_BASKET_ITEM: 'shop/PAY_BASKET_ITEM',
    }),
    deleteItem(index){
      this.DELETE_BASKET_ITEM(index)
    },
    changeCount(item, val) {
      this.SET_BASKET_ITEM_COUNT({
        id: item.id,
        countProduct: val,
      })
    },
    pay(){
      this.paymentArr = this.basketItems
      this.hasPayment = true
      this.PAY_BASKET_ITEM()
    },
  },
}
</script>

<style scoped lang="scss">
.basket {
  &-page {
    margin-top: 50px;

    .check {
      font-size: 16px;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      margin-top: 25px;
      font-weight: bold;

      span{
        display: block;
        margin-right: 20px;
      }
    }

    .title {
      font-size: rem(50);
      font-weight: bold;
      margin-bottom: 20px;
    }

    table {
      font-family: Arial, Helvetica, sans-serif;
      border-collapse: collapse;
      width: 100%;
      font-size: 16px;
    }

    table td, table th {
      border: 1px solid #ddd;
      padding: 8px;
    }

    td {

      img {
        height: 50px;
        max-width: initial !important;
        margin: 0 auto;
      }
    }

    table th {
      padding-top: 12px;
      padding-bottom: 12px;
      text-align: left;
      background-color: #04AA6D;
      color: white;
    }
  }
}

input[type=number]::-webkit-inner-spin-button,
input[type=number]::-webkit-outer-spin-button {

  opacity: 1;

}
</style>
