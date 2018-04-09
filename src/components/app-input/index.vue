<template>
  <div class="input">
    <slot name="label" :for="id"></slot>
    <input :type="type" :id="id">
    <slot :id="id"></slot>
  </div>
</template>

<script>
  export default {
    name: 'app-input',
    props: {
      type: {
        type: String,
        default: 'text',
      },
      id: {
        type: String,
        required: true,
      },
    },
  };
</script>