<template>
  <div id="wrapper">
    <app-header></app-header>
    <router-view></router-view>
    <app-footer :class="{ 'is-show': $route.meta.footerShow }"></app-footer>
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