<template>
  <div>
    <div v-for="(tab, key) in tabs" :key="key">
      {{key}} 번 탭이며 id 는 {{tab.id}} 입니다.
    </div>
    <div style="display: none">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'app-switch-tab',
    data() {
      return {
        tabs: [],
      };
    },
    created() {
      this.tabs = this.$children;
    },
  };
</script>