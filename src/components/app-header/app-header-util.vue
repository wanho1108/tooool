<template>
  <div class="header__util">
    <router-link :to="$route.name === 'AppAbout' ? '/' : '/about'" active-class="is-selected" class="header__util-anchor">About</router-link>
  </div>
</template>

<script>
  export default {
    name: 'app-header-util',
  };
</script>