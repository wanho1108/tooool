<template>
  <header role="banner" class="header">
    <div class="header__wrapper">
      <h1 class="site-logo">
        <router-link to="/" class="site-logo__anchor">
          <span class="blind">TOOOOL</span>
        </router-link>
      </h1>
      <header-nav></header-nav>
      <header-util></header-util>
    </div>
  </header>
</template>

<script>
  import HeaderNav from '@/components/app-header/header-nav';
  import HeaderUtil from '@/components/app-header/header-util';

  export default {
    name: 'app-header',
    components: {
      HeaderNav,
      HeaderUtil,
    },
  };
</script>