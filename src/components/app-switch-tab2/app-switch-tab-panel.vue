<template>
  <p>.panel</p>
</template>

<script>
  export default {
    name: 'app-switch-tab-panel',
    props: {
      id: String,
      isSelected: {
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
      hash() {
        return `#${this.id}`;
      },
    },
    // created() {
    //   this.isActive = this.isSelected;
    // },
  };
</script>