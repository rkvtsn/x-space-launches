<style lang="scss">
.launch {
  display: flex;

  &__title {
    font-size: 1.3em;
  }
  margin-bottom: 20px;
}
</style>

<template>
  <div class="launch">
    <switch-button :selected="selected"
                   @switch="$emit('switch')" />
    <div class="launch-info">
      <div class="launch__title">
        {{flightNumber}}: <strong>{{missionName}}</strong> ({{launchYear}})
      </div>
      <div class="launch__description">
        <rocket v-bind="rocket" />
      </div>
      <div class="launch__ships"
           v-if="ships.length">
        <strong>К/А наименования:</strong> {{shipsString}}
      </div>
    </div>
  </div>
</template>

<script>
import Rocket from './Rocket'
import SwitchButton from '@/components/controls/SwitchButton'

export default {
  name: 'launch',
  components: {
    Rocket,
    SwitchButton
  },
  props: {
    selected: {
      type: Boolean
    },
    launchYear: {
      type: String
    },
    missionName: {
      type: String
    },
    flightNumber: {
      type: Number
    },
    rocket: {
      type: Object,
      default: () => { }
    },
    ships: {
      type: Array,
      default: () => []
    }
  },

  computed: {
    shipsString () {
      return this.ships.join(', ')
    }
  }

}
</script>
