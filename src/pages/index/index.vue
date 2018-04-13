<template>
  <main class="content" role="main">
    <div class="content__wrapper">
      <content-heading>Guide Page</content-heading>
    </div>
  </main>
</template>

<script>
  import ContentHeading from '@/components/content-heading';

  export default {
    name: 'index',
    components: {
      ContentHeading,
    },
  };
</script>