<template>
  <main class="content" role="main">
    <div class="content__wrapper">
      <content-heading>Calculator</content-heading>
      <switch-tab>
        <switch-tab-panel label="Grid">
          <calculator-grid></calculator-grid>
        </switch-tab-panel>
        <switch-tab-panel label="Golden">
          <calculator-golden></calculator-golden>
        </switch-tab-panel>
      </switch-tab>
    </div>
  </main>
</template>

<script>
  import CalculatorGrid from '@/pages/calculator/calculator-grid';
  import CalculatorGolden from '@/pages/calculator/calculator-golden';
  import ContentHeading from '@/components/content-heading';
  import SwitchTab from '@/components/switch-tab';
  import SwitchTabPanel from '@/components/switch-tab/switch-tab-panel';

  export default {
    name: 'calculator',
    components: {
      CalculatorGrid,
      CalculatorGolden,
      ContentHeading,
      SwitchTab,
      SwitchTabPanel,
    },
  };
</script>