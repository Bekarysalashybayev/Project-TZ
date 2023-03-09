<template>
  <div :class="['header', {shadow: lastScrollPosition > 100}]">
    <div class="container">
      <div class="nav">
        <nuxt-link to="/" class="logo">
          <img src="@/assets/img/logo/logo.svg" alt="">
        </nuxt-link>
        <nuxt-link to="/follow" class="follow">
          Избранные
        </nuxt-link>
        <nuxt-link to="/basket" class="basket">
          <basket-icon/>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
import BasketIcon from "@/components/core/BasketIcon.vue";

export default {
  name: "MainHeader",
  components: {BasketIcon},
  data() {
    return {
      lastScrollPosition: 0,
    }
  },
  mounted() {
    window.addEventListener('scroll', this.onScroll)
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.onScroll)
  },
  methods: {
    onScroll() {
      const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop
      if (currentScrollPosition < 0) {
        return
      }
      this.lastScrollPosition = currentScrollPosition
    }
  }
}
</script>

<style scoped lang="scss">
.header {
  z-index: 999;
  position: sticky;
  background-color: #FFFFFF;
  top: 0;

  .follow {
    font-size: 20px;
  }

  &.shadow {
    -webkit-box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
    -moz-box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
    box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
  }

  .nav {
    padding: 10px 0;
    display: flex;
    align-items: center;
    justify-content: space-between;

    a.nuxt-link-active {
      font-weight: bold;
    }

    a.nuxt-link-exact-active {
      color: #00c58e;
      text-decoration-line: underline;


      &::v-deep{
        path{
          fill: #00c58e;
        }
      }
    }

    .logo {
      img {
        height: 80px;
        width: auto !important;
      }
    }
  }
}
</style>
