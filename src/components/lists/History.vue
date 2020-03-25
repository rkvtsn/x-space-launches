<template>
  <div class="history-list">
    <ul>
      <li v-for="(historyItem, index) of history"
          :key="index">
        <history-item v-bind="historyItem" />
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'history-list',
  components: {
    'history-item': () => import('@/components/HistoryItem')
  },
  props: {
    history: {
      type: Array,
      default: () => []
    }
  }
}
</script>
