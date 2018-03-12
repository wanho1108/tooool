<template>
  <div class="content" role="main">
    <div class="content__wrapper">
      <app-content-heading>Device</app-content-heading>
    </div>
  </div>
</template>

<script>
  import AppContentHeading from '@/components/app-content-heading';

  export default {
    name: 'app-device',
    components: {
      AppContentHeading,
    },
  };
</script>