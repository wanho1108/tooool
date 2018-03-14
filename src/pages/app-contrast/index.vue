<template>
  <main class="content" role="main">
    <div class="content__wrapper">
      <app-content-heading>Contrast</app-content-heading>
    </div>
  </main>
</template>

<script>
  import AppContentHeading from '@/components/app-content-heading';

  export default {
    name: 'app-contrast',
    components: {
      AppContentHeading,
    },
  };
</script>