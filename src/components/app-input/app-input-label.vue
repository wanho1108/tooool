<template>
    <label :for="id" class="input__label">
      <slot></slot>
    </label>
</template>

<script>
  export default {
    name: 'app-input-label',
    data() {
      return {
        id: '',
      };
    },
    created() {
      this.id = this.$parent.id;
    },
  };
</script>