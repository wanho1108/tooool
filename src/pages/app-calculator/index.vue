<template>
  <main class="content" role="main">
    <div class="content__wrapper">
        <app-content-heading>Calculator</app-content-heading>
        <app-switch-tab>
          <app-switch-tab-panel label="Grid">
            .Grid Panel
          </app-switch-tab-panel>
          <app-switch-tab-panel label="Golden">
            .Golden Panel
          </app-switch-tab-panel>
        </app-switch-tab>
    </div>
  </main>
</template>

<script>
  import AppContentHeading from '@/components/app-content-heading';
  import AppSwitchTab from '@/components/app-switch-tab';
  import AppSwitchTabPanel from '@/components/app-switch-tab/app-switch-tab-panel';

  export default {
    name: 'app-calculator',
    components: {
      AppContentHeading,
      AppSwitchTab,
      AppSwitchTabPanel,
    },
  };
</script>