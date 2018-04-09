<template>
  <div class="calculator">
    <div class="calculator-fieldset">
      <div class="calculator-fieldset__column">
        <app-input type="number" id="input-grid-width">
          <label slot="label">전체넓이</label>
          <span>asdf</span>
        </app-input>
      </div>
      <div class="calculator-fieldset__column"></div>
    </div>
    <div :class="['calculator-result', {'is-expanded': !isError, 'is-placeholder': isPlaceholder}]">
      <div class="calculator-result__summary">
        <div class="calculator-result__summary-item">
          <em class="calculator-result__summary-label">전체넓이</em>
          <span class="calculator-result__summary-value calculator-result__summary-value--width">{{calculatorData.width}}</span>
          <span class="calculator-result__summary-unit">px</span>
        </div>
        <div class="calculator-result__summary-item">
          <em class="calculator-result__summary-label">나눈넓이</em>
          <span class="calculator-result__summary-value">{{calculatorData.columnWidth}}</span>
          <span class="calculator-result__summary-unit">px</span>
        </div>
      </div>
      <div class="calculator-result__visualization" aria-hidden="true">
        <div class="calculator-result__visualization-measurement">{{calculatorData.width}}</div>
        <div class="calculator-result__visualization-column-area">
          <div
            v-if="calculatorData.margin"
            class="calculator-result__visualization-column calculator-result__visualization-column--pale">
            {{calculatorData.margin}}
          </div>
          <template v-for="(index, key) in calculatorData.columns">
            <div class="calculator-result__visualization-column" :key="`column width ${key}`">
              {{calculatorData.columnWidth}}
            </div>
            <div v-if="calculatorData.gutter && index < calculatorData.columns"
                 class="calculator-result__visualization-column calculator-result__visualization-column--pale"
                 :key="`column gutter ${key}`">
              {{calculatorData.gutter}}
            </div>
          </template>
          <div
            v-if="calculatorData.margin"
            class="calculator-result__visualization-column calculator-result__visualization-column--pale">
            {{calculatorData.margin}}
          </div>
        </div>
      </div>
      <div :class="['message message--error', {'is-expanded': isError}]">
        <em class="message__title">Oooops :-O</em>
        <p class="message__paragraph">입력된 숫자가 너어어어어무 커요~ 다시 입력해보세요!</p>
      </div>
    </div>
  </div>
</template>

<script>
  import AppInput from '@/components/app-input';

  export default {
    name: 'app-calculator-grid',
    data() {
      return {
        userData: {
          width: '',
          margin: '',
          gutter: '',
          columns: '',
        },
        placeholderData: {
          width: 1400,
          margin: 10,
          gutter: 20,
          columns: 4,
        },
        calculatorData: {
          width: '',
          margin: '',
          gutter: '',
          columns: '',
          columnWidth: '',
        },
        isPlaceholder: true,
        isError: false,
      };
    },
    methods: {
      calculatorDataUpdate(value) {
        const calculatorData = this.calculatorData;
        Object.assign(calculatorData, value);
        calculatorData.columnWidth = (calculatorData.width - (calculatorData.margin * 2) - (calculatorData.gutter * (calculatorData.columns - 1))) / calculatorData.columns;
      },
      gridUpdate() {
        const calculatorData = this.calculatorData;
        this.calculatorDataUpdate(this.userData);
        this.isPlaceholder = isNaN(parseInt(calculatorData.width, 10) && parseInt(calculatorData.columns, 10));
        if (this.isPlaceholder) {
          this.calculatorDataUpdate(this.placeholderData);
        }
        this.isError = (calculatorData.columnWidth > 0) === false;
        if (this.isError) {
          return;
        }
        const integerReg = /^[0-9]*$/;
        while (integerReg.test(calculatorData.columnWidth) === false) {
          this.calculatorDataUpdate(calculatorData.width -= 1);
        }
      },
    },
    created() {
      this.gridUpdate();
    },
    components: {
      AppInput,
    },
  };
</script>