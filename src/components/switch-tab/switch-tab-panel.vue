<template>
  <div
    role="panel"
    :id="`switch-tab-${id}-panel`"
    :aria-labelledby="`switch-tab-${id}-btn`"
    :aria-expanded="`${isActive}`"
    :aria-hidden="`${isActive} === false`"
    :class="['switch-tab__panel', {'is-expanded': isActive}]">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'app-switch-panel',
    props: {
      label: {
        type: String,
        required: true,
      },
    },
    data() {
      return {
        isActive: false,
      };
    },
    computed: {
      id() {
        return this.label.toLowerCase().replace(/ /g, '-');
      },
    },
    created() {
      this.isActive = this.id === this.$route.params.id;
    },
  };
</script>