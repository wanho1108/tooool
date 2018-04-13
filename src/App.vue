<template>
  <div id="wrapper" :class="{ 'no-layout': $route.meta.noLayout }">
    <app-header></app-header>
    <router-view></router-view>
    <app-footer></app-footer>
  </div>
</template>

<script>
  import AppHeader from '@/components/app-header';
  import AppFooter from '@/components/app-footer';

  export default {
    name: 'App',
    components: {
      AppHeader,
      AppFooter,
    },
  };
</script>

<style lang="scss" src="@/assets/styles/style.scss"></style>