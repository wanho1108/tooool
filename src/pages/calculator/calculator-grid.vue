<template>
  <div class="calculator">
    <!-- [S] Calculator Grid 입력 폼 -->
    <div class="calculator-fieldset">
      <div class="calculator-fieldset__column">
        <app-input
          type="number"
          id="input-grid-width"
          label="전체넓이"
          title="전체넓이(px)를 입력해주세요."
          :placeholder="placeholderData.width"
          :maxlength="4"
          unit="px"
          class="input--calculator"
          v-model.number="userData.width"
          @input="inputUpdate()">
        </app-input>
      </div>
      <div class="calculator-fieldset__column">
        <app-input
          type="number"
          id="input-grid-columns"
          label="나눌개수"
          title="나눌개수(cols)를 입력해주세요."
          :placeholder="placeholderData.columns"
          :maxlength="2"
          unit="cols"
          class="input--calculator"
          v-model.number="userData.columns"
          @input="inputUpdate()">
        </app-input>
      </div>
      <div class="calculator-fieldset__column">
        <app-input
          type="number"
          id="input-grid-gutter"
          label="사이간격"
          title="사이간격(px)를 입력해주세요."
          :placeholder="placeholderData.gutter"
          :maxlength="2"
          unit="px"
          class="input--calculator"
          v-model.number="userData.gutter"
          @input="inputUpdate()">
        </app-input>
      </div>
      <div class="calculator-fieldset__column">
        <app-input
          type="number"
          id="input-grid-margin"
          label="좌우여백"
          title="좌우여백(px)를 입력해주세요."
          :placeholder="placeholderData.margin"
          :maxlength="2"
          unit="px"
          class="input--calculator"
          v-model.number="userData.margin"
          @input="inputUpdate()">
        </app-input>
      </div>
    </div>
    <!-- [E] Calculator Grid 입력 폼 -->
    <div class="calculator-result" aria-live="polite" aria-atomic="true">
      <div :class="['calculator-result__detail', {'is-show': !isError, 'is-placeholder': isPlaceholder}]">
        <!-- [S] Calculator Grid 간략 결과 -->
        <div :class="['calculator-result__summary', {'is-show': !isError}]">
          <div class="calculator-result__summary-item">
            <em class="calculator-result__summary-label">전체넓이</em>
            <span class="calculator-result__summary-value calculator-result__summary-value--width">{{calculatorData.width}}</span>
            <span class="calculator-result__summary-unit">px</span>
          </div>
          <div class="calculator-result__summary-item">
            <em class="calculator-result__summary-label">나눈넓이</em>
            <span class="calculator-result__summary-value">{{getColumnWidth}}</span>
            <span class="calculator-result__summary-unit">px</span>
          </div>
        </div>
        <!-- [E] Calculator Grid 간략 결과 -->
        <!-- [S] Calculator Grid 결과 추상화 -->
        <div :class="['calculator-result__visualization', {'is-show': !isError}]">
          <div class="calculator-result__visualization-measurement" aria-label="전체넓이">{{calculatorData.width}}</div>
          <div class="calculator-result__visualization-column-area">
            <div
              v-if="calculatorData.margin"
              class="calculator-result__visualization-column calculator-result__visualization-column--pale"
              aria-label="전체여백">
              {{calculatorData.margin}}
            </div>
            <template v-for="(index, key) in getColumnsLimit">
              <div class="calculator-result__visualization-column"
                   :key="`column width ${key}`"
                   aria-label="나눈넓이">
                {{getColumnWidth}}
              </div>
              <div v-if="calculatorData.gutter && index < getColumnsLimit"
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
        <!-- [E] Calculator Grid 결과 추상화 -->
      </div>
      <!-- [S] Calculator Grid 에러 메세지 -->
      <div :class="['calculator-result__message', {'is-show': isError}]">
        <div class="message message--error">
          <em class="message__title">Oooops :-O</em>
          <p class="message__paragraph">입력된 숫자가 너어어어어무 커요~ 다시 입력해보세요!</p>
        </div>
      </div>
      <!-- [E] Calculator Grid 에러 메세지 -->
    </div>
  </div>
</template>

<script>
  import debounce from '@/helpers/debounce';
  import AppInput from '@/components/app-input';

  export default {
    name: 'calculator-grid',
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
        },
        isPlaceholder: true,
        isError: false,
      };
    },
    methods: {
      calculatorDataUpdate() {
        this.isPlaceholder = (this.userData.width > 0 && this.userData.columns > 0) === false;
        if (this.isPlaceholder) {
          Object.assign(this.calculatorData, this.placeholderData);
        } else {
          Object.assign(this.calculatorData, this.userData);
        }
        this.isError = (this.getColumnWidth > 0) === false;
        if (this.isError === false) {
          const integerReg = /^[0-9]*$/;
          while (integerReg.test(this.getColumnWidth) === false) {
            this.calculatorData -= 1;
          }
        }
      },
      // eslint-disable-next-line func-names
      inputUpdate: debounce(function () {
        this.calculatorDataUpdate();
      }, 200),
    },
    computed: {
      getColumnWidth() {
        const columnWidth = parseInt((this.calculatorData.width - (this.calculatorData.margin * 2) - (this.calculatorData.gutter * (this.calculatorData.columns - 1))) / this.calculatorData.columns, 10);
        return columnWidth;
      },
      getColumnsLimit() {
        const columnLimit = 12;
        return Math.min(this.calculatorData.columns, columnLimit);
      },
    },
    created() {
      this.calculatorDataUpdate();
    },
    components: {
      AppInput,
    },
  };
</script>