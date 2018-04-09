<template>
  <div :class="['input', addClass, { 'is-focus': isFocus }]">
    <slot name="label"></slot>
    <input :type="type" :name="id" :id="id" :title="title" :placeholder="placeholder" :maxlength="maxlength" :class="['input__substance', addInputClass]" :value="value" ref="input" @focus="inputFocus" @focusout="inputFocusOut" @input="inputUpdate">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'app-input',
    model: {
      event: 'input',
    },
    props: {
      type: {
        type: String,
        default: 'text',
      },
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
      value: {
        type: String,
      },
      addClass: {
        type: String,
      },
      addInputClass: {
        type: String,
      },
    },
    data() {
      return {
        isFocus: false,
      };
    },
    methods: {
      inputFocus() {
        this.isFocus = true;
      },
      inputFocusOut() {
        this.isFocus = false;
      },
      inputUpdate() {
        this.$emit('input', this.$refs.input.value);
      },
    },
  };
</script>