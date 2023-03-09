<template>
  <button :class="['btn', btnType]"
          :disabled="disabled||loading"
          @click="$emit('click')"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "DButton",
  props: {
    disabled: {
      type: Boolean,
      default: false,
    },
    loading: {
      type: Boolean,
      default: false,
    },
    btnType: {
      type: String,
      default: "",
    },
  },
}
</script>

<style scoped lang="scss">
.btn {
  font-weight: 700;
  font-size: 14px;
  line-height: 28px;
  color: #FFFFFF;
  background: #0488e1;
  border-radius: 4px;
  padding: 6px 15px;

  &.cancel {
    color: #0488e1;
    background-color: transparent;
    border: 1px solid #0488e1;
  }

  &:disabled {
    background: #C0C0C0;
    cursor: no-drop;
  }

  &:hover {
    opacity: .9;
  }
}
</style>
