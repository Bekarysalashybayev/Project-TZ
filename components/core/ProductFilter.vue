<template>
  <div class="filter">
    <input type="text" class="search-input"
           :value="search"
           @input="(e) => $emit('input', e.target.value)" placeholder="search">
    <select class="search-input select"
            :value="sort"
            @change="(e) => $emit('changeSort', e.target.value)">
      <option value="ALL">Все</option>
      <option value="PRICE">Сначала дешевые</option>
      <option value="ORDER">По количеству заказов</option>
    </select>
  </div>
</template>

<script>
export default {
  name: "ProductFilter",
  props: {
    search: {
      type: String,
      default: null,
    },
    sort: {
      type: String,
      default: "ALL",
    }
  },
}
</script>

<style scoped lang="scss">
.filter {
  display: flex;
  align-items: center;

  .search-input {
    display: block;
    padding: 10px;
    border: 2px solid #ccc;
    border-radius: 10px;
    flex-grow: 1;
    font-size: 16px;
    font-family: Arial, sans-serif;
    color: #333;
    background-color: #fff;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);

    &.select {
      flex: 0 0 150px;
      margin-left: 70px;
    }
  }

  /* Style the placeholder text */
  ::-webkit-input-placeholder { /* WebKit browsers */
    color: #aaa;
  }

  :-moz-placeholder { /* Mozilla Firefox 4 to 18 */
    color: #aaa;
    opacity: 1;
  }

  ::-moz-placeholder { /* Mozilla Firefox 19+ */
    color: #aaa;
    opacity: 1;
  }

  :-ms-input-placeholder { /* Internet Explorer 10+ */
    color: #aaa;
  }
}
</style>
