<style lang="scss" scoped>
$nav-color-master: #0099cc;
$nav-color-secondary: #fff;

.history-menu {
  margin: 10px 20px;
  a {
    padding: 3px 10px;
    color: #0099cc;

    &.router-link-exact-active,
    &:hover {
      background: $nav-color-master;
      color: $nav-color-secondary;
    }
  }
}
</style>
<template>
  <div class="history-menu">
    <router-link :to="{name: 'views.history'}">История</router-link>
    <router-link :to="{name: 'views.history', params: {type: 'select'}}">История добавлений</router-link>
    <router-link :to="{name: 'views.history', params: {type: 'remove'}}">История удалений</router-link>
  </div>
</template>
