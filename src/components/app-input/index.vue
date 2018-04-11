<template>
  <div :class="['input', {'is-active': isActive}]">
    <label v-if="label" :for="id" class="input__label">{{label}}</label>
    <input
      :type="type"
      :id="id"
      :title="title"
      :placeholder="placeholder"
      :maxlength="maxlength"
      :max="max"
      class="input__substance"
      @focus="isActive = true"
      @blur="isActive = false"
      @input="inputUpdate()">
    <span v-if="unit" class="input__unit" aria-hidden="true">{{unit}}</span>
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
      label: {
        type: String,
      },
      title: {
        type: String,
      },
      placeholder: {
      },
      maxlength: {
        type: Number,
      },
      max: {
        type: Number,
      },
      unit: {
        type: String,
      },
    },
    data() {
      return {
        isActive: false,
      };
    },
    methods: {
      inputUpdate() {
        const $input = this.$el.querySelector('.input__substance');
        const valueLimit = $input.value.slice(0, this.maxlength || this.max);
        this.$emit('input', $input.value = valueLimit);
      },
    },
  };
</script>