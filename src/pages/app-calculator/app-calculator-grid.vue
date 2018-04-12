<template>
  <div class="calculator">
    <div class="calculator-fieldset">
      <div class="calculator-fieldset__column">
        <app-input
          type="number"
          id="input-grid-width"
          label="전체넓이"
          title="전체넓이(px)를 입력해주세요."
          :placeholder="placeholderData.width"
          :max="4"
          unit="px"
          class="input--calculator"
          v-model="userData.width"
          @input="gridUpdate()">
        </app-input>
      </div>
      <div class="calculator-fieldset__column">
        <app-input
          type="number"
          id="input-grid-columns"
          label="나눌개수"
          title="나눌개수(cols)를 입력해주세요."
          :placeholder="placeholderData.columns"
          :max="2"
          unit="cols"
          class="input--calculator"
          v-model="userData.columns"
          @input="gridUpdate()">
        </app-input>
      </div>
      <div class="calculator-fieldset__column">
        <app-input
          type="number"
          id="input-grid-gutter"
          label="사이간격"
          title="사이간격(px)를 입력해주세요."
          :placeholder="placeholderData.gutter"
          :max="4"
          unit="px"
          class="input--calculator"
          v-model="userData.gutter"
          @input="gridUpdate()">
        </app-input>
      </div>
      <div class="calculator-fieldset__column">
        <app-input
          type="number"
          id="input-grid-margin"
          label="좌우여백"
          title="좌우여백(px)를 입력해주세요."
          :placeholder="placeholderData.margin"
          :max="4"
          unit="px"
          class="input--calculator"
          v-model="userData.margin"
          @input="gridUpdate()">
        </app-input>
      </div>
    </div>
    <div class="calculator-result" aria-live="polite" aria-atomic="true">
      <div :class="['calculator-result__detail', {'is-show': !isError, 'is-placeholder': isPlaceholder}]">
        <div :class="['calculator-result__summary', {'is-show': !isError}]">
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
        <div :class="['calculator-result__visualization', {'is-show': !isError}]">
          <div class="calculator-result__visualization-measurement" aria-label="전체넓이">{{calculatorData.width}}</div>
          <div class="calculator-result__visualization-column-area">
            <div
              v-if="calculatorData.margin"
              class="calculator-result__visualization-column calculator-result__visualization-column--pale"
              aria-label="전체여백">
              {{calculatorData.margin}}
            </div>
            <template v-for="(index, key) in calculatorColumnsLimit">
              <div class="calculator-result__visualization-column"
                   :key="`column width ${key}`"
                   aria-label="나눈넓이">
                {{calculatorData.columnWidth}}
              </div>
              <div v-if="calculatorData.gutter && index < calculatorData.columns"
                   class="calculator-result__visualization-column calculator-result__visualization-column--pale"
                   :key="`column gutter ${key}`"
                   aria-label="사이간격">
                {{calculatorData.gutter}}
              </div>
            </template>
            <div
              v-if="calculatorData.margin"
              class="calculator-result__visualization-column calculator-result__visualization-column--pale"
              aria-label="전체여백">
              {{calculatorData.margin}}
            </div>
          </div>
        </div>
      </div>
      <div :class="['calculator-result__message', {'is-show': isError}]">
        <div class="message message--error">
          <em class="message__title">Oooops :-O</em>
          <p class="message__paragraph">입력된 숫자가 너어어어어무 커요~ 다시 입력해보세요!</p>
        </div>
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
          columnsLimit: 12,
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
        Object.keys(calculatorData).forEach((key) => {
          calculatorData[key] = Number(calculatorData[key]);
        });
        calculatorData.columnWidth = (calculatorData.width - (calculatorData.margin * 2) - (calculatorData.gutter * (calculatorData.columns - 1))) / calculatorData.columns;
      },
      gridUpdate() {
        const calculatorData = this.calculatorData;
        this.calculatorDataUpdate(this.userData);
        this.isPlaceholder = calculatorData.width === 0 || calculatorData.columns === 0;
        if (this.isPlaceholder) {
          this.calculatorDataUpdate(this.placeholderData);
        }
        this.isError = (calculatorData.columnWidth > 0) === false;
        if (this.isError === false) {
          const integerReg = /^[0-9]*$/;
          while (integerReg.test(calculatorData.columnWidth) === false) {
            this.calculatorDataUpdate(calculatorData.width -= 1);
          }
        }
      },
    },
    computed: {
      calculatorColumnsLimit() {
        const calculatorData = this.calculatorData;
        return calculatorData.columns < calculatorData.columnsLimit ? calculatorData.columns : calculatorData.columnsLimit;
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