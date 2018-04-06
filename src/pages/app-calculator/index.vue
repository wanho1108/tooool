<template>
  <main class="content" role="main">
    <div class="content__wrapper">
        <app-content-heading>Calculator</app-content-heading>
        <app-switch-tab>
          <app-switch-tab-panel label="Grid">
            <app-calculator-grid></app-calculator-grid>
          </app-switch-tab-panel>
          <app-switch-tab-panel label="Golden">
            .Golden Panel
          </app-switch-tab-panel>
        </app-switch-tab>
    </div>
  </main>
</template>

<script>
  import AppCalculatorGrid from '@/pages/app-calculator/app-calculator-grid';
  import AppContentHeading from '@/components/app-content-heading';
  import AppSwitchTab from '@/components/app-switch-tab';
  import AppSwitchTabPanel from '@/components/app-switch-tab/app-switch-tab-panel';

  export default {
    name: 'app-calculator',
    components: {
      AppCalculatorGrid,
      AppContentHeading,
      AppSwitchTab,
      AppSwitchTabPanel,
    },
  };
</script>