<template>
  <header role="banner" class="header">
    <h1 class="site-logo">
      <router-link to="/" class="site-logo__anchor">
        <span class="site-logo__division site-logo__division--top">TOO</span>
        <span class="site-logo__division site-logo__division--bottom">OOL</span>
      </router-link>
    </h1>
    <app-lnb :class="{ 'is-show': $route.meta.lnbShow }"></app-lnb>
  </header>
</template>

<script>
  import AppLnb from '@/components/app-lnb/';

  export default {
    name: 'app-header',
    components: {
      AppLnb,
    },
  };
</script>