<template>
  <header role="banner" class="header">
    <h1 class="site-logo">
      <a href="#" class="site-logo__anchor">
        <span class="site-logo__division site-logo__division--top">TOO</span>
        <span class="site-logo__division site-logo__division--bottom">OOL</span>
      </a>
    </h1>
    <app-lnb></app-lnb>
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