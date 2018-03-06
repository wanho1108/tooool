<template>
  <div role="panel" :id="'switch-tab-'+id" :class="['switch-tab__panel', { 'is-expanded': tabActiveIs }]">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'app-switch-tab-panel',
    props: {
      label: {
        type: String,
      },
      id: {
        type: String,
      },
    },
    computed: {
      tabActiveIs() {
        return this.$parent.tabActiveId === this.id;
      },
    },
  };
</script>