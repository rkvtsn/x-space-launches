<style lang="scss">
.launches-grid {
  display: flex;

  > .launch-list {
    width: 50%;
    padding: 0 40px;
    margin-top: 30px;
  }
}
</style>

<template>
  <div class="page-main">
    <history-menu />

    <filter-input v-model="query" />

    <div class="launches-grid">

      <launch-list :launches="filteredLaunches"
                   @switch="launch => onSelect(launch)" />

      <launch-list selected
                   :launches="selectedLaunches"
                   @switch="launch => onRemove(launch)" />
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import HistoryMenu from '@/components/navs/HistoryMenu'
import FilterInput from '@/components/controls/FilterInput'

export default {
  name: 'page-main',
  components: {
    HistoryMenu,
    FilterInput,
    'launch-list': () => import('@/components/lists/Launches')
  },

  data () {
    return {
      query: null
    }
  },

  created () {
    this.init()
  },

  computed: {
    ...mapState('launches', {
      selectedLaunches: state => state.selected
    }),
    filteredLaunches () {
      return this.$store.getters['launches/filter'](this.query)
    }
  },

  methods: {
    init () {
      this.$store.dispatch('launches/refresh')
    },
    onRemove (launch) {
      this.$store.dispatch('launches/remove', launch)
    },
    onSelect (launch) {
      this.$store.dispatch('launches/select', launch)
    }
  }
}
</script>
