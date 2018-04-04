<template>
  <main class="content" role="main">
    <div class="content__wrapper">
      <app-content-heading>Test</app-content-heading>
      <app-switch-tab>
        <app-switch-tab-panel id="tab1">1번 탭</app-switch-tab-panel>
        <app-switch-tab-panel id="tab2">2번 탭</app-switch-tab-panel>
      </app-switch-tab>
    </div>
  </main>
</template>

<script>
  import AppContentHeading from '@/components/app-content-heading';
  import AppSwitchTab from '@/components/app-switch-tab2';
  import AppSwitchTabPanel from '@/components/app-switch-tab2/app-switch-tab-panel';

  export default {
    name: 'app-test',
    data() {
      return {
        tabActiveId: 'calculator-grid',
      };
    },
    methods: {
      tabChange(tab) {
        this.tabActiveId = tab.id;
      },
    },
    components: {
      AppContentHeading,
      AppSwitchTab,
      AppSwitchTabPanel,
    },
  };
</script>