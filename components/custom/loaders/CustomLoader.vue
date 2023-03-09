<template>
<div class="cLoader">
  <div class="cLoader__content">
    <div class="cLoader__content-title">
      Loading...
    </div>
    <loader v-if="type === 'default'"/>
  </div>
</div>
</template>

<script>
import Loader from "@/components/custom/loaders/Loader.vue";

export default {
  name: "CustomLoader",
  props: {
    type: {
      type: String,
      default: "default"
    }
  },
  components: {Loader}
}
</script>

<style scoped lang="scss">
.cLoader{
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(73, 73, 104, 0.15);

  &__content{
    width: 90%;
    height: 90%;
    max-width: 300px;
    max-height: 200px;
    background-color: #FFFFFF;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    border-radius: 20px;

    &-title{
      margin-bottom: 20px;
      display: block;
      font-size: clamp(25px, rem(32), 15px);
    }
  }
}
</style>
