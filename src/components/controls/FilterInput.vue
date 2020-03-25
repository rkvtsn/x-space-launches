<template>
  <div class="filter-input">
    <label>Фильтр:
      <input @input="$emit('input', $event.target.value)"
             :value="value"
             type="text">
    </label>
  </div>
</template>

<script>
export default {
  name: 'filter-input',
  props: {
    value: {
      type: [Number, String],
      default: ''
    }
  }
}
</script>
