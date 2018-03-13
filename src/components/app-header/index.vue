<template>
  <header role="banner" class="header">
    <h1 class="site-logo">
      <router-link to="/" class="site-logo__anchor">
        <span class="blind">TOOOOL</span>
      </router-link>
    </h1>
    <app-lnb :class="{ 'is-show': $route.meta.lnbShow }"></app-lnb>
    <app-header-util></app-header-util>
  </header>
</template>

<script>
  import AppLnb from '@/components/app-lnb/';
  import AppHeaderUtil from '@/components/app-header/app-header-util';

  export default {
    name: 'app-header',
    components: {
      AppLnb,
      AppHeaderUtil,
    },
  };
</script>