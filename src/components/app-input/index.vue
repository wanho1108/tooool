<template>
  <div>
    <slot name="label"></slot>
    <input type="text" :id="id" :maxlength="maxlength" :placeholder="placeholder" :title="title" class="" value="">
    <slot name="unit"></slot>
  </div>
</template>

<script>
  export default {
    name: 'app-input',
    props: {
      id: {
        type: String,
      },
      maxlength: {
        type: Number,
      },
      placeholder: {
        type: String,
      },
      title: {
        type: String,
      },
      class: {
        type: String,
      },
    },
  };
</script>