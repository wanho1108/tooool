<template>
  <div :class="['input', {'is-active': isActive}]">
    <label v-if="label" :for="id" class="input__label">{{label}}</label>
    <input
      :type="type"
      :id="id"
      :title="title"
      :placeholder="placeholder"
      :maxlength="maxlength"
      :value="value"
      class="input__substance"
      @focus="inputFocus()"
      @blur="inputBlur()"
      @input="inputUpdate($event.target.value)">
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
      unit: {
        type: String,
      },
      value: {
      },
    },
    data() {
      return {
        isActive: false,
      };
    },
    methods: {
      inputFocus() {
        this.inputUpdate('');
        this.isActive = true;
      },
      inputBlur() {
        this.isActive = false;
      },
      inputUpdate(value) {
        const $input = this.$el.querySelector('.input__substance');
        let _value = value;
        if (this.type === 'number') {
          _value = _value.slice(0, this.maxlength);
        }
        this.$emit('input', $input.value = _value);
      },
    },
  };
</script>