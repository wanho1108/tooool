<template>
  <div class="content" role="main">
    <div class="content__wrapper">
      <app-content-heading>Tooool main</app-content-heading>
    </div>
  </div>
</template>

<script>
  import AppContentHeading from '@/components/app-content-heading';

  export default {
    name: 'appMain',
    components: {
      AppContentHeading,
    },
  };
</script>