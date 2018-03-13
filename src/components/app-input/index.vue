<template>
  <div :class="['input', addClass]">
    <slot name="label"></slot>
    <input type="text" :name="id" :id="id" :title="title" :placeholder="placeholder" :maxlength="maxlength" :class="['input__substance', addInputClass]">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'app-input',
    props: {
      id: {
        type: String,
        required: true,
      },
      title: {
        type: String,
      },
      placeholder: {
        type: String,
      },
      maxlength: {
        type: Number,
      },
      addClass: {
        type: String,
      },
      addInputClass: {
        type: String,
      },
    },
  };
</script>