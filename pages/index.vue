<template>
  <div class="main-page">
    <div class="container">
      <div class="main-page__content">
        <div class="main-page__content-left-menu">
          <left-menu :categories="categories"
                     :current-category="currentCategory"
                     @selectCategory="(val) => currentCategory = val"/>
        </div>
        <div class="main-page__content__body" v-if="currentCategory">
          <div class="category-name"> {{ currentCategory }}</div>
          <product-filter :search="search" :sort="sort"
                          @input="(val) => search = val"
                          @changeSort="(val) => sort = val"/>
          <product-list class="mt-30" :list="products"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapMutations} from 'vuex'
import items from "../constants/items.json"
import LeftMenu from "@/components/core/LeftMenu.vue";
import ProductFilter from "@/components/core/ProductFilter.vue";
import ProductList from "@/components/core/ProductList.vue";

export default {
  name: 'IndexPage',
  components: {ProductList, ProductFilter, LeftMenu},
  data() {
    return {
      items: JSON.parse(JSON.stringify(items)),
      currentCategory: items[0]['category'],
      search: "",
      sort: "ALL"
    }
  },
  computed: {
    products() {
      let items = JSON.parse(JSON.stringify(this.$store.state.shop.items))
      if (items) {
        if (this.sort && this.sort === "PRICE") {
          items = items.sort((a, b) => parseFloat(a['price']) - parseFloat(b['price']));
        }
        if (this.sort && this.sort === "ORDER") {
          items = items.sort((a, b) => parseFloat(a['order_count']) - parseFloat(b['order_count']));
        }

        if (this.search){
          items = items.filter((e) => {
            return e["name"].toLowerCase().includes(this.search.toLowerCase())
          })
        }
      }
      return items.filter((e) => e['category'] === this.currentCategory)
    },
    categories() {
      return this.$store.state.shop.categories
    }
  },
  mounted() {
    this.getData()
  },
  methods: {
    ...mapMutations({
      SET_LOADER: 'loader/SET_LOADER',
      SET_ITEMS: 'shop/SET_ITEMS',
      SET_CATEGORIES: 'shop/SET_CATEGORIES',
    }),
    getData() {
      this.SET_LOADER(true)
      setTimeout(() => {
        this.SET_ITEMS(this.items)
        this.SET_CATEGORIES([...Array.from(new Set(this.items.map((item) => item["category"])))])
        this.SET_LOADER(false)
      }, 500)
    },
    filterData(type = null) {
      if (type === "category") {
        this.sort = null
        this.search = null
      }
    },
  },
  watch: {
    currentCategory() {
      this.filterData('category')
    },
  },
}
</script>
<style lang="scss" scoped>
.main-page {
  margin-top: 100px;

  .category-name {
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 20px;
    text-transform: uppercase;
  }

  .mt-30 {
    margin-top: 30px;
  }

  &__content {
    display: flex;

    &-left-menu {
      flex: 0 0 200px;
      margin-right: 50px;
    }

    &__body {
      flex-grow: 1;
    }
  }
}
</style>
