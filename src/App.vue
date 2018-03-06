<template>
  <div id="wrapper">
    <app-header></app-header>
    <router-view></router-view>
  </div>
</template>

<script>
  import AppHeader from '@/components/app-header/';

  export default {
    name: 'App',
    components: {
      AppHeader,
    },
  };
</script>

<style lang="scss" src="@/assets/styles/style.scss"></style>