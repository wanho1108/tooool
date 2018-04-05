<template>
  <main class="content" role="main">
    <div class="content__wrapper">
      <app-content-heading>Test</app-content-heading>
      <div v-for="(item, key) in items" :key="key">
      <router-link :to="item.message" >{{item.message}}</router-link>
      </div>
    </div>
  </main>
</template>

<script>
  import AppContentHeading from '@/components/app-content-heading';
  import AppTab from '@/components/app-tab';
  import AppTabPanel from '@/components/app-tab/app-tab-panel';

  export default {
    name: 'app-test',
    data() {
      return {
        items: [
          { message: 'Foo' },
          { message: 'Bar' },
        ],
      };
    },
    components: {
      AppContentHeading,
      AppTab,
      AppTabPanel,
    },
  };
</script>