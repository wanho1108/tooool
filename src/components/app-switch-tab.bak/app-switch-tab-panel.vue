<template>
  <div
    :id="'switch-tab-'+id+'-panel'"
    role="panel"
    :aria-hidden="!tabActiveIs"
    :aria-expanded="tabActiveIs"
    :aria-labelledby="'switch-tab-'+id+'-tab'"
    :class="['switch-tab__panel', { 'is-expanded': tabActiveIs }]">
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