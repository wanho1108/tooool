<template>
  <div class="content">
    <div class="content__wrapper">
        <app-content-heading :headingText="'calculator'"></app-content-heading>
        <app-switch-tab>
            <app-switch-tab-item title="Grid" hash="_tab-switch__grid" :isActive="true">
                .Grid Pnael
            </app-switch-tab-item>
            <app-switch-tab-item title="Golden" hash="_tab-switch__golden">
                .Golden Pnael
            </app-switch-tab-item>
        </app-switch-tab>
    </div>
  </div>
</template>

<script>
  import AppContentHeading from '@/components/app-content-heading';
  import AppSwitchTab from '@/components/app-switch-tab';
  import AppSwitchTabItem from '@/components/app-switch-tab/app-switch-tab-item';

  export default {
    name: 'app-calculator',
    data() {
      return {
      };
    },
    components: {
      AppContentHeading,
      AppSwitchTab,
      AppSwitchTabItem,
    },
  };
</script>