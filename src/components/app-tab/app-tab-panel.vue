<template>
  <div>
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'app-tab-panel',
    props: {
      name: {
        type: String,
        required: true,
      },
      active: {
        type: Boolean,
        default: false,
      },
    },
    data() {
      return {
        isActive: false,
      };
    },
    computed: {
      id() {
        return this.name.toLowerCase().replace(/ /g, '-');
      },
      href() {
        return `#${this.$route.name}/${this.id}`;
      },
    },
    created() {
      this.isActive = this.active;
      if (this.$route.params.id) {
        this.isActive = this.id === this.$route.params.id;
      }
    },
  };
</script>