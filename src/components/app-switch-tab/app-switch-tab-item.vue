<template>
    <!--<section :id="this.hash" v-show="active" role="panel">
        <slot></slot>
    </section>-->
</template>

<script>
  export default {
    name: 'app-switch-tab-item',
    props: {
      title: String,
      hash: String,
      active: {
        type: Boolean,
        default: false,
      },
      isActive: Boolean,
    },
    data() {
      return {
      };
    },
    created() {
      this.active = this.isActive;
    },
  };
</script>