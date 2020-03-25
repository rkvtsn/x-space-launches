<style lang="scss">
.switch-button button {
  padding: 10px;
  margin-right: 20px;
}
</style>

<template>
  <div class="switch-button">
    <button @click="$emit('switch')">
      <span v-if="selected">-</span>
      <span v-else>+</span>
    </button>
  </div>
</template>

<script>
export default {
  name: 'switch-button',
  props: {
    selected: Boolean
  }
}
</script>
