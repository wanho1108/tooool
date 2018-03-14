<template>
  <div :class="['input', addClass]">
    <slot name="label"></slot>
    <input :type="type" :name="id" :id="id" :title="title" :placeholder="placeholder" :maxlength="maxlength" :class="['input__substance', addInputClass]" :value="value" ref="input"  @focus="inputInit" @input="inputUpdate">
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
    methods: {
      inputInit() {
        this.$refs.input.value = '';
        this.inputUpdate();
      },
      inputUpdate() {
        this.$emit('input', this.$refs.input.value);
      },
    },
  };
</script>