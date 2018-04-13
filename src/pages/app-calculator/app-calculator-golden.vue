<template>
  <div class="calculator">
    <!-- [S] Calculator Golden 입력 폼 -->
    <div class="calculator-fieldset">
      <div class="calculator-fieldset__column">
        <app-input
          type="number"
          id="input-golden-ab"
          label="a+b"
          title="a+b(px)를 입력해주세요."
          :placeholder="calculatorData.ab"
          :maxlength="4"
          unit="px"
          class="input--calculator input--calculator-en"
          v-model.number="userData.ab"
          @input="inputUpdate('ab')">
        </app-input>
      </div>
      <div class="calculator-fieldset__column calculator-fieldset__column--special-character">:</div>
      <div class="calculator-fieldset__column">
        <app-input
          type="number"
          id="input-grid-a"
          label="a"
          title="a(px)를 입력해주세요."
          :placeholder="calculatorData.a"
          :maxlength="4"
          unit="px"
          class="input--calculator input--calculator-en"
          v-model.number="userData.a"
          @input="inputUpdate('a')">
        </app-input>
      </div>
      <div class="calculator-fieldset__column calculator-fieldset__column--special-character">=</div>
      <div class="calculator-fieldset__column">
        <app-input
          type="number"
          id="input-grid-a2"
          label="a"
          title="a(px)를 입력해주세요."
          :placeholder="calculatorData.a"
          :maxlength="4"
          unit="px"
          class="input--calculator input--calculator-en"
          v-model.number="userData.a"
          @input="inputUpdate('a')">
        </app-input>
      </div>
      <div class="calculator-fieldset__column calculator-fieldset__column--special-character">:</div>
      <div class="calculator-fieldset__column">
        <app-input
          type="number"
          id="input-grid-b"
          label="b"
          title="b(px)를 입력해주세요."
          :placeholder="calculatorData.b"
          :maxlength="4"
          unit="px"
          class="input--calculator input--calculator-en"
          v-model.number="userData.b"
          @input="inputUpdate('b')">
        </app-input>
      </div>
    </div>
    <!-- [E] Calculator Golden 입력 폼 -->
    <div class="calculator-result" aria-live="polite" aria-atomic="true">
      <div :class="['calculator-result__detail', 'is-show', {'is-placeholder': isPlaceholder}]">
        <!-- [S] Calculator Golden 간략 결과 -->
        <div class="calculator-result__summary is-show">
          <div class="calculator-result__summary-item">
            <em class="calculator-result__summary-label calculator-result__summary-label--en">a+b</em>
            <span class="calculator-result__summary-value">{{calculatorData.ab}}</span>
            <span class="calculator-result__summary-unit">px</span>
          </div>
          <div class="calculator-result__summary-item calculator-result__summary-item--special-character">:</div>
          <div class="calculator-result__summary-item">
            <em class="calculator-result__summary-label calculator-result__summary-label--en">a</em>
            <span class="calculator-result__summary-value">{{calculatorData.a}}</span>
            <span class="calculator-result__summary-unit">px</span>
          </div>
          <div class="calculator-result__summary-item calculator-result__summary-item--special-character">=</div>
          <div class="calculator-result__summary-item">
            <em class="calculator-result__summary-label calculator-result__summary-label--en">a</em>
            <span class="calculator-result__summary-value">{{calculatorData.a}}</span>
            <span class="calculator-result__summary-unit">px</span>
          </div>
          <div class="calculator-result__summary-item calculator-result__summary-item--special-character">:</div>
          <div class="calculator-result__summary-item">
            <em class="calculator-result__summary-label calculator-result__summary-label--en">b</em>
            <span class="calculator-result__summary-value">{{calculatorData.b}}</span>
            <span class="calculator-result__summary-unit">px</span>
          </div>
        </div>
        <!-- [E] Calculator Golden 간략 결과 -->
        <!-- [S] Calculator Golden 결과 추상화 -->
        <div class="calculator-result__visualization is-show">
          <div class="calculator-result__visualization-measurement" aria-label="a+b">a+b : {{calculatorData.ab}}</div>
          <div class="calculator-result__visualization-column-area">
            <div class="calculator-result__visualization-column" aria-label="a">
              a: {{calculatorData.a}}
            </div>
            <div class="calculator-result__visualization-column" aria-label="b">
              b: {{calculatorData.b}}
            </div>
          </div>
        </div>
        <!-- [E] Calculator Golden 결과 추상화 -->
      </div>
    </div>
  </div>
</template>

<script>
  import AppInput from '@/components/app-input';

  export default {
    name: 'app-calculator-golden',
    data() {
      return {
        userData: {
          ab: '',
          a: '',
          b: '',
        },
        placeholderData: {
          ab: 1400,
          a: '',
          b: '',
        },
        calculatorData: {
          ab: '',
          a: '',
          b: '',
        },
        isPlaceholder: true,
      };
    },
    methods: {
      calculatorDataUpdate(type) {
        let _type = type;
        this.isPlaceholder = (this.userData.ab > 0 || this.userData.a > 0 || this.userData.b > 0) === false;
        if (this.isPlaceholder) {
          _type = 'placeholder';
          Object.assign(this.calculatorData, this.placeholderData);
        } else {
          Object.assign(this.calculatorData, this.userData);
        }
        switch (_type) {
          case 'ab':
          default: {
            this.calculatorData.a = this.calculatorData.ab * 0.61803398875;
            this.calculatorData.b = this.calculatorData.ab * 0.38196601125;
            break;
          }
          case 'a': {
            this.calculatorData.ab = this.calculatorData.a * 1.61803398875;
            this.calculatorData.b = this.calculatorData.ab * 0.38196601125;
            break;
          }
          case 'b': {
            this.calculatorData.a = this.calculatorData.b * 1.61803398875;
            this.calculatorData.ab = this.calculatorData.a + this.calculatorData.b;
            break;
          }
        }
        Object.keys(this.calculatorData).forEach((key) => {
          this.calculatorData[key] = parseFloat(this.calculatorData[key].toFixed(2));
        });
      },
      // eslint-disable-next-line func-names
      inputUpdate(type) {
        const initData = {
          ab: '',
          a: '',
          b: '',
        };
        initData[type] = this.userData[type];
        Object.assign(this.userData, initData);
        this.calculatorDataUpdate(type);
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