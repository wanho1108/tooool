<template>
  <main class="content" role="main">
    <div class="content__wrapper">
        <app-content-heading>Calculator</app-content-heading>
        <app-switch-tab v-model="tabActiveId" @tab-change="tabChange">
          <app-switch-tab-panel label="Grid" id="calculator-grid">
            <div class="calculator-fieldset">
              <div class="calculator-fieldset__column">
                <app-input id="calculator-fieldset-input-grid-width" title="전체넓이(px)를 입력해주세요." placeholder="1400" :maxlength="4" add-class="input--underline" v-model="gridWidth" @input="gridDraw">
                  <app-input-label slot="label">전체넓이</app-input-label>
                  <span class="input__unit" aria-hidden="true">px</span>
                </app-input>
              </div>
              <div class="calculator-fieldset__column">
                <app-input id="calculator-fieldset-input-grid-column" title="나눌개수(cols)를 입력해주세요." placeholder="4" :maxlength="2" add-class="input--underline" add-input-class="input__substance--cols" v-model="gridColumn" @input="gridDraw">
                  <app-input-label slot="label">나눌개수</app-input-label>
                  <span class="input__unit" aria-hidden="true">cols</span>
                </app-input>
              </div>
              <div class="calculator-fieldset__column">
                <app-input id="calculator-fieldset-input-grid-column-margin" title="사이간격(px)을 입력해주세요." placeholder="20" :maxlength="3" add-class="input--underline" v-model="gridColumnMargin" @input="gridDraw">
                  <app-input-label slot="label">사이간격</app-input-label>
                  <span class="input__unit" aria-hidden="true">px</span>
                </app-input>
              </div>
              <div class="calculator-fieldset__column">
                <app-input id="calculator-fieldset-input-grid-margin" title="좌우여백(px)을 입력해주세요." placeholder="0" :maxlength="3" add-class="input--underline" v-model="gridMargin" @input="gridDraw">
                  <app-input-label slot="label">좌우여백</app-input-label>
                  <span class="input__unit" aria-hidden="true">px</span>
                </app-input>
              </div>
            </div>
            <div :class="['calculator-result', { 'is-expanded': !gridError, 'is-placeholder': gridPlaceholder }]" aria-live="polite" aria-atomic="true">
              <div class="calculator-result__summary">
                <div class="calculator-result__summary-item">
                  <strong class="calculator-result__summary-label">전체넓이</strong>
                  <span class="calculator-result__summary-value calculator-result__summary-value--width js-grid-width"></span>
                  <span class="calculator-result__summary-unit">px</span>
                </div>
                <div class="calculator-result__summary-item">
                  <strong class="calculator-result__summary-label">나눈넓이</strong>
                  <span class="calculator-result__summary-value calculator-result__summary-value--column js-grid-column-width"></span>
                  <span class="calculator-result__summary-unit">px</span>
                </div>
              </div>
              <div class="calculator-result__grid">
                <div class="calculator-result__grid-width js-grid-width" aria-label="전체넓이"></div>
                <div class="calculator-result__grid-column-area js-grid-column-area"></div>
              </div>
            </div>
            <div :class="['calculator-result calculator-result--error', { 'is-expanded': gridError }]" role="alert">
              <div class="calculator-result__message">
                <em class="calculator-result__message-title">Oooops :-O</em>
                <p class="calculator-result__message-paragraph">입력된 숫자가 너어어어어무 커요~ 다시 입력해보세요!</p>
              </div>
            </div>
          </app-switch-tab-panel>
          <app-switch-tab-panel label="Golden" id="calculator-golden">
            <div class="calculator-fieldset">
              <div class="calculator-fieldset__column">
                <app-input id="calculator-fieldset-input-grid-width" title="a+b(px)를 입력해주세요." placeholder="1400" :maxlength="4" add-class="input--underline" v-model="goldenAB" @input="goldenDraw">
                  <app-input-label slot="label" class="input__label--en">a+b</app-input-label>
                  <span class="input__unit" aria-hidden="true">px</span>
                </app-input>
              </div>
              <span class="calculator-fieldset__column calculator-fieldset__column--special-character">:</span>
              <div class="calculator-fieldset__column">
                <app-input id="calculator-fieldset-input-grid-column" title="a(cols)를 입력해주세요." placeholder="0" :maxlength="4" add-class="input--underline" v-model="goldenA" @input="goldenDraw">
                  <app-input-label slot="label" class="input__label--en">a</app-input-label>
                  <span class="input__unit" aria-hidden="true">px</span>
                </app-input>
              </div>
              <span class="calculator-fieldset__column calculator-fieldset__column--special-character">=</span>
              <div class="calculator-fieldset__column">
                <app-input id="calculator-fieldset-input-grid-column-margin" title="a(px)를 입력해주세요." placeholder="0" :maxlength="4" add-class="input--underline" v-model="goldenA" @input="goldenDraw">
                  <app-input-label slot="label" class="input__label--en">a</app-input-label>
                  <span class="input__unit" aria-hidden="true">px</span>
                </app-input>
              </div>
              <span class="calculator-fieldset__column calculator-fieldset__column--special-character">:</span>
              <div class="calculator-fieldset__column">
                <app-input id="calculator-fieldset-input-grid-margin" title="b(px)를 입력해주세요." placeholder="0" :maxlength="4" add-class="input--underline" v-model="goldenB" @input="goldenDraw">
                  <app-input-label slot="label" class="input__label--en">b</app-input-label>
                  <span class="input__unit" aria-hidden="true">px</span>
                </app-input>
              </div>
            </div>
            <div :class="['calculator-result', { 'is-expanded': !gridError, 'is-placeholder': gridPlaceholder }]" aria-live="polite" aria-atomic="true">
              <div class="calculator-result__summary">
                <div class="calculator-result__summary-item">
                  <strong class="calculator-result__summary-label calculator-result__summary-label--en">a+b</strong>
                  <span class="calculator-result__summary-value calculator-result__summary-value--width js-golden-ab"></span>
                  <span class="calculator-result__summary-unit">px</span>
                </div>
                <span class="calculator-result__summary-item calculator-result__summary-item--special-character">:</span>
                <div class="calculator-result__summary-item">
                  <strong class="calculator-result__summary-label calculator-result__summary-label--en">a</strong>
                  <span class="calculator-result__summary-value calculator-result__summary-value--column js-golden-a"></span>
                  <span class="calculator-result__summary-unit">px</span>
                </div>
                <span class="calculator-result__summary-item calculator-result__summary-item--special-character">=</span>
                <div class="calculator-result__summary-item">
                  <strong class="calculator-result__summary-label calculator-result__summary-label--en">a</strong>
                  <span class="calculator-result__summary-value calculator-result__summary-value--column js-golden-a"></span>
                  <span class="calculator-result__summary-unit">px</span>
                </div>
                <span class="calculator-result__summary-item calculator-result__summary-item--special-character">:</span>
                <div class="calculator-result__summary-item">
                  <strong class="calculator-result__summary-label calculator-result__summary-label--en">b</strong>
                  <span class="calculator-result__summary-value calculator-result__summary-value--column js-golden-b"></span>
                  <span class="calculator-result__summary-unit">px</span>
                </div>
              </div>
              <div class="calculator-result__grid">
                <div class="calculator-result__grid-width" aria-label="a+b">a+b: <span class="js-golden-ab">1400</span></div>
                <div class="calculator-result__grid-column-area js-golden-column-area">
                  <div class="calculator-result__grid-column calculator-result__grid-column--column" aria-label="a">a: <span class="js-golden-a">865.25</span></div>
                  <div class="calculator-result__grid-column calculator-result__grid-column--column" aria-label="b">b: <span class="js-golden-b">534.75</span></div>
                </div>
              </div>
            </div>
          </app-switch-tab-panel>
        </app-switch-tab>
    </div>
  </main>
</template>

<script>
  import AppContentHeading from '@/components/app-content-heading';
  import AppSwitchTab from '@/components/app-switch-tab.bak';
  import AppSwitchTabPanel from '@/components/app-switch-tab.bak/app-switch-tab-panel';
  import AppInput from '@/components/app-input';
  import AppInputLabel from '@/components/app-input/app-input-label';

  export default {
    name: 'app-calculator',
    data() {
      return {
        tabActiveId: 'calculator-grid',
        gridWidth: '',
        gridMargin: '',
        gridColumn: '',
        gridColumnMargin: '',
        gridPlaceholder: true,
        gridError: false,
        goldenAB: '',
        goldenA: '',
        goldenB: '',
      };
    },
    methods: {
      tabChange(tab) {
        this.tabActiveId = tab.id;
      },
      gridDraw() {
        let gridWidth = Number(this.gridWidth);
        let gridMargin = Number(this.gridMargin);
        let gridColumn = Number(this.gridColumn);
        let gridColumnMargin = Number(this.gridColumnMargin);
        let gridColumnWidth = (gridWidth - (gridMargin * 2) - ((gridColumn - 1) * gridColumnMargin)) / gridColumn;
        const integerReg = /^[0-9]*$/;
        this.gridPlaceholder = (gridWidth === 0 || gridColumn === 0) === true;
        if (this.gridPlaceholder) {
          gridWidth = 1400;
          gridMargin = 0;
          gridColumn = 4;
          gridColumnMargin = 20;
          gridColumnWidth = (gridWidth - (gridMargin * 2) - ((gridColumn - 1) * gridColumnMargin)) / gridColumn;
        }
        this.gridError = (gridColumnWidth > 0) === false;
        if (this.gridError) {
          return;
        }
        while (integerReg.test(gridColumnWidth) === false) {
          gridWidth -= 1;
          gridColumnWidth = (gridWidth - (gridMargin * 2) - ((gridColumn - 1) * gridColumnMargin)) / gridColumn;
        }
        const $gridWidth = $('.js-grid-width');
        const $gridColumnWidth = $('.js-grid-column-width');
        const $gridColumnArea = $('.js-grid-column-area');
        const gridColumnMax = gridColumn > 12 ? 12 : gridColumn;
        const $gridColumnTemp = `<div class="calculator-result__grid-column calculator-result__grid-column--column" aria-label="나눈넓이" style="width:${gridColumnWidth}px">${gridColumnWidth}</div>`;
        const $gridColumnMarginTemp = `<div class="calculator-result__grid-column calculator-result__grid-column--column-margin" aria-label="사이간격" style="width:${gridColumnMargin}px">${gridColumnMargin}</div>`;
        const $gridMarginTemp = `<div class="calculator-result__grid-column calculator-result__grid-column--margin" aria-label="전체여백" style="width:${gridMargin}px">${gridMargin}</div>`;
        $gridWidth.text(gridWidth);
        $gridColumnWidth.text(gridColumnWidth);
        $gridColumnArea.empty();
        for (let i = 1; i <= gridColumnMax; i += 1) {
          $gridColumnArea.append($gridColumnTemp);
          if (i !== gridColumnMax && gridColumnMargin) $gridColumnArea.append($gridColumnMarginTemp);
        }
        if (gridMargin) {
          $gridColumnArea.prepend($gridMarginTemp);
          $gridColumnArea.append($gridMarginTemp);
        }
      },
      goldenDraw() {
        let goldenAB;
        let goldenA;
        let goldenB;
        if (Number(this.goldenAB) !== 0) {
          goldenAB = Number(this.goldenAB);
          goldenA = goldenAB * 0.61803398875;
          goldenB = goldenAB * 0.38196601125;
        }
        if (Number(this.goldenA) !== 0) {
          goldenA = Number(this.goldenA);
          goldenAB = goldenA * 1.61803398875;
          goldenB = goldenAB * 0.38196601125;
        }
        if (Number(this.goldenB) !== 0) {
          goldenB = Number(this.goldenB);
          goldenA = goldenB * 1.61803398875;
          goldenAB = goldenB + goldenA;
        }
        const $goldenAB = $('.js-golden-ab');
        const $goldenA = $('.js-golden-a');
        const $goldenB = $('.js-golden-b');
        $goldenAB.text(parseFloat(goldenAB.toFixed(2)));
        $goldenA.text(parseFloat(goldenA.toFixed(2)));
        $goldenB.text(parseFloat(goldenB.toFixed(2)));
      },
    },
    mounted() {
      this.gridDraw();
    },
    watch: {
      gridWidth(val) {
        const integerReg = /^[0-9]*$/;
        if (integerReg.test(val) === false) this.gridWidth = '';
      },
      gridColumn(val) {
        const integerReg = /^[0-9]*$/;
        if (integerReg.test(val) === false) this.gridColumn = '';
      },
      gridColumnMargin(val) {
        const integerReg = /^[0-9]*$/;
        if (integerReg.test(val) === false) this.gridColumnMargin = '';
      },
      gridMargin(val) {
        const integerReg = /^[0-9]*$/;
        if (integerReg.test(val) === false) this.gridMargin = '';
      },
      goldenAB(val) {
        const integerReg = /^[0-9]*$/;
        if (integerReg.test(val) === false) this.goldenAB = '';
        if (this.goldenAB !== '') {
          this.goldenA = '';
          this.goldenB = '';
        }
      },
      goldenA(val) {
        const integerReg = /^[0-9]*$/;
        if (integerReg.test(val) === false) this.goldenA = '';
        if (this.goldenA !== '') {
          this.goldenAB = '';
          this.goldenB = '';
        }
      },
      goldenB(val) {
        const integerReg = /^[0-9]*$/;
        if (integerReg.test(val) === false) this.goldenB = '';
        if (this.goldenB !== '') {
          this.goldenAB = '';
          this.goldenA = '';
        }
      },
    },
    components: {
      AppContentHeading,
      AppSwitchTab,
      AppSwitchTabPanel,
      AppInput,
      AppInputLabel,
    },
  };
</script>