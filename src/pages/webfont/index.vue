<template>
  <main class="content" role="main">
    <div class="content__wrapper">
      <content-heading>WebFont</content-heading>
      <switch-tab>
        <switch-tab-panel label="Sans Serif">
          <webfont-sans-serif></webfont-sans-serif>
        </switch-tab-panel>
        <switch-tab-panel label="Serif">
          Serif
        </switch-tab-panel>
      </switch-tab>
    </div>
  </main>
</template>

<script>
  import WebfontSansSerif from '@/pages/webfont/webfont-sans-serif';
  import ContentHeading from '@/components/content-heading';
  import SwitchTab from '@/components/switch-tab';
  import SwitchTabPanel from '@/components/switch-tab/switch-tab-panel';

  export default {
    name: 'webfont',
    components: {
      WebfontSansSerif,
      ContentHeading,
      SwitchTab,
      SwitchTabPanel,
    },
  };
</script>