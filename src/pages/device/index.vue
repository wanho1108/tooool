<template>
  <main class="content" role="main">
    <div class="content__wrapper">
      <content-heading>Device</content-heading>
    </div>
  </main>
</template>

<script>
  import ContentHeading from '@/components/content-heading';

  export default {
    name: 'device',
    components: {
      ContentHeading,
    },
  };
</script>