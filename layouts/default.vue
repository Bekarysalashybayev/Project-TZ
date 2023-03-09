<template>
<div>
  <main-header />
  <nuxt />
  <custom-loader v-if="isLoading"/>
</div>
</template>

<script>
import CustomLoader from "@/components/custom/loaders/CustomLoader.vue";
import MainHeader from "@/components/main/MainHeader.vue";

export default {
  name: "default",
  components: {CustomLoader, MainHeader},
  computed: {
    isLoading () {
      return this.$store.state.loader.isLoading
    }
  },
}
</script>

<style scoped>

</style>
