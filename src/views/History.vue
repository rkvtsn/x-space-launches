<template>
  <div class="page-history">
    <history-menu />
    <history-list :history="history" />
  </div>
</template>

<script>
import HistoryMenu from '@/components/navs/HistoryMenu'

export default {
  name: 'page-history',

  components: {
    HistoryMenu,
    'history-list': () => import('@/components/lists/History')
  },

  props: {
    type: String
  },

  computed: {
    history () {
      return this.$store.getters['launches/history'](this.type)
    }
  }
}
</script>
