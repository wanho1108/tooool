<template>
  <main class="content" role="main">
    <div class="content__wrapper">
      <app-content-heading>Test</app-content-heading>
      <app-tab>
        <app-tab-panel name="Hello" active>
          Hello Page
        </app-tab-panel>
        <app-tab-panel name="About Us">
          About Us Page
        </app-tab-panel>
      </app-tab>
    </div>
  </main>
</template>

<script>
  import AppContentHeading from '@/components/app-content-heading';
  import AppTab from '@/components/app-tab';
  import AppTabPanel from '@/components/app-tab/app-tab-panel';

  export default {
    name: 'app-test',
    components: {
      AppContentHeading,
      AppTab,
      AppTabPanel,
    },
  };
</script>