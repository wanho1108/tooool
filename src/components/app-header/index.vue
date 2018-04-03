<template>
  <header role="banner" class="header">
    <div class="header__wrapper">
      <h1 class="site-logo">
        <router-link to="/" class="site-logo__anchor">
          <span class="blind">TOOOOL</span>
        </router-link>
      </h1>
      <app-lnb></app-lnb>
      <app-header-util></app-header-util>
    </div>
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