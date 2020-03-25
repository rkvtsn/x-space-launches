<style lang="scss">
.rocket {
  &-info {
    border-top: 1px solid #e0e0e0;
  }
}
</style>

<template>
  <div class="rocket">
    <div class="rocket-info">
      {{rocket_id}} {{rocket_name}} / {{rocket_type}}
    </div>
  </div>
</template>

<script>
export default {
  name: 'rocket',
  props: {
    rocket_id: {
      type: String
    },
    rocket_name: {
      type: String
    },
    rocket_type: {
      type: String
    }
  }
}
</script>
