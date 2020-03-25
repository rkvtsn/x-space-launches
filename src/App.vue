<style lang="scss">
.app {
  &__title {
    padding: 10px 5px;
  }
}
</style>
<template>
  <div id="app"
       class="app">
    <app-nav />
    <section>
      <h1 class="app__title"
          v-if="$route.meta.title">{{$route.meta.title}}</h1>
      <keep-alive>
        <router-view />
      </keep-alive>
    </section>
  </div>
</template>

<script>
import AppNav from '@/components/navs/AppNav'

export default {
  components: { AppNav }
}
</script>
