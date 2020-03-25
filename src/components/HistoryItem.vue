<style lang="scss">
.history-item {
  display: flex;
  padding: 3px;
  margin: 3px;
  font-size: 1.2em;
  &--select {
    background: lightgreen;
  }
  &--remove {
    background: lightblue;
  }
  &--error {
    background: lightcoral;
  }
  &__status {
    flex: 1;
  }
  &__title {
    flex: 2;
  }
  &__datetime {
    flex: 3;
  }
}
</style>

<template>
  <div class="history-item"
       :class="`history-item--${action}`">
    <div class="history-item__status">
      <span v-if="action === 'select'">Добавление</span>
      <span v-else>Удаление</span>
    </div>
    <div class="history-item__title">{{launch.flight_number}} <strong>{{launch.mission_name}}</strong></div>
    <div class="history-item__datetime">{{formatDatetime(datetime)}}</div>
  </div>
</template>

<script>
export default {
  name: 'history-item',
  props: {
    launch: {
      type: Object,
      default: () => { }
    },
    action: {
      type: String
    },
    datetime: {
      type: Date,
      default: ''
    }
  },

  methods: {
    formatDatetime (dt) {
      // TODO: change on momentJs or smth same. Doesn't work with IE
      const YYYY = new Intl.DateTimeFormat('ru', { year: 'numeric' }).format(dt)
      const MM = new Intl.DateTimeFormat('ru', { month: '2-digit' }).format(dt)
      const DD = new Intl.DateTimeFormat('ru', { day: '2-digit' }).format(dt)

      const HH = new Intl.DateTimeFormat('ru', { hour: '2-digit' }).format(dt)
      const I = new Intl.DateTimeFormat('ru', { minute: '2-digit' }).format(dt)
      const S = new Intl.DateTimeFormat('ru', { second: '2-digit' }).format(dt)
      return `${DD}.${MM}.${YYYY} ${HH}:${I}:${S}`
    }
  }
}
</script>
