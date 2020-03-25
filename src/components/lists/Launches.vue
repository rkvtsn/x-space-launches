<template>
  <ul class="launch-list">
    <li class="launch"
        v-for="launch in launches"
        :key="launch.flight_number">
      <launch @switch="$emit('switch', launch)"
              :launch-year="launch.launch_year"
              :rocket="launch.rocket"
              :ships="launch.ships"
              :selected="selected"
              :flight-number="launch.flight_number"
              :mission-name="launch.mission_name" />
    </li>
  </ul>
</template>

<script>
import Launch from '@/components/Launch'

export default {

  name: 'launch-list',
  components: {
    Launch
  },

  props: {
    launches: {
      type: Array,
      default: () => []
    },
    selected: Boolean
  }
}
</script>
