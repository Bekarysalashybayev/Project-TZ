export const state = () => ({
  categories: [],
  items: [],
  basket: [],
})

export const mutations = {
  SET_ITEMS(state, val) {
    state.items = val
  },
  SET_BASKET_ITEMS(state, item) {
    state.basket.push({
      ...item,
      countProduct: 1,
      totalPrice: item['price']
    })
  },
  SET_BASKET_ITEM_COUNT(state, val) {
    const item = state.basket.filter((e) => e.id === val.id)[0]
    item["countProduct"] = val['countProduct']
    item["totalPrice"] = item['price'] * val['countProduct']
  },
  DELETE_BASKET_ITEM(state, index) {
    state.basket.splice(index, 1)
  },
  PAY_BASKET_ITEM(state, index) {
    const basket = state.basket
    for (let i = 0; i < basket.length; i++){
      const el = state.items.filter((e) => e.id === basket[i].id)[0]
      el['order_count'] = parseInt(el['order_count']) + parseInt(basket[i]['countProduct'])
    }
    state.basket = []
  },
  SET_CATEGORIES(state, val) {
    state.categories = val
  },
  SET_FOLLOW(state, id) {
    const item = state.items.filter((e) => e.id === id)[0]
    item["isFollow"] = !item["isFollow"]
  },
}
