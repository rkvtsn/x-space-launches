<style lang="scss" scoped>
$nav-color-master: #00cc99;
$nav-color-secondary: #fff;

.app-nav {
  border: 1px solid #efefef;
  display: flex;
  a {
    padding: 3px 8px;
    font-size: 1.1em;
    color: $nav-color-master;
    text-decoration: none;
    border-bottom: 5px solid $nav-color-secondary;

    &:hover {
      border-bottom: 5px solid $nav-color-master;
    }
  }
  &__separator {
    width: 2px;
    background: #eee;
  }
}
</style>

<template>
  <nav class="app-nav">
    <router-link :to="{name: 'views.main'}">Запуски</router-link>
    <div class="app-nav__separator"></div>
    <router-link :to="{name: 'views.history'}">История</router-link>
    <div class="app-nav__separator"></div>
  </nav>
</template>
