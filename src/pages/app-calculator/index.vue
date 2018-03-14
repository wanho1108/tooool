<template>
  <main class="content" role="main">
    <div class="content__wrapper">
        <app-content-heading>Calculator</app-content-heading>
        <app-switch-tab v-model="tabActiveId" @tab-change="tabChange">
          <app-switch-tab-panel label="Grid" id="calculator-grid">
            <div class="calculator-fieldset">
              <div class="calculator-fieldset__column">
                <app-input id="calculator-fieldset-input-grid-width" title="전체넓이(px)를 입력해주세요." placeholder="1200" :maxlength="4" add-class="input--underline" v-model="gridWidth" @input="gridDraw">
                  <app-input-label slot="label">전체넓이</app-input-label>
                  <span class="input__unit" aria-hidden="true">px</span>
                </app-input>
              </div>
              <div class="calculator-fieldset__column">
                <app-input id="calculator-fieldset-input-grid-column" title="나눌개수(cols)를 입력해주세요." placeholder="12" :maxlength="2" add-class="input--underline" add-input-class="input__substance--cols" v-model="gridColumn" @input="gridDraw">
                  <app-input-label slot="label">나눌개수</app-input-label>
                  <span class="input__unit" aria-hidden="true">cols</span>
                </app-input>
              </div>
              <div class="calculator-fieldset__column">
                <app-input id="calculator-fieldset-input-grid-column-margin" title="사이간격(px)을 입력해주세요." placeholder="10" :maxlength="3" add-class="input--underline" v-model="gridColumnMargin" @input="gridDraw">
                  <app-input-label slot="label">사이간격</app-input-label>
                  <span class="input__unit" aria-hidden="true">px</span>
                </app-input>
              </div>
              <div class="calculator-fieldset__column">
                <app-input id="calculator-fieldset-input-grid-margin" title="전체여백(px)을 입력해주세요." placeholder="10" :maxlength="3" add-class="input--underline" v-model="gridMargin" @input="gridDraw">
                  <app-input-label slot="label">전체여백</app-input-label>
                  <span class="input__unit" aria-hidden="true">px</span>
                </app-input>
              </div>
            </div>
            <div :class="['calculator-result', { 'is-expanded': gridShow }]" aria-live="polite" aria-atomic="true">
              <div class="calculator-result__summary">
                <div class="calculator-result__summary-item">
                  <strong class="calculator-result__summary-label">전체넓이</strong>
                  <span class="calculator-result__summary-value js-grid-width"></span>
                  <span class="calculator-result__summary-unit">px</span>
                </div>
                <div class="calculator-result__summary-item">
                  <strong class="calculator-result__summary-label">나눈넓이</strong>
                  <span class="calculator-result__summary-value js-grid-column-width"></span>
                  <span class="calculator-result__summary-unit">px</span>
                </div>
              </div>
              <div class="calculator-result__grid">
                <div class="calculator-result__grid-width js-grid-width" aria-label="전체넓이"></div>
                <div class="calculator-result__grid-column-area js-grid-column-area"></div>
              </div>
            </div>
            <div :class="['calculator-result calculator-result--error', { 'is-expanded': gridError }]" role="alert">
              <p class="calculator-result__message">설정하신 입력 값으로 올바른 결과를 그릴 수 없습니다.<br>설정 값을 확인해주세요.</p>
            </div>
          </app-switch-tab-panel>
          <app-switch-tab-panel label="Golden" id="calculator-golden">
          </app-switch-tab-panel>
        </app-switch-tab>
    </div>
  </main>
</template>

<script>
  import AppContentHeading from '@/components/app-content-heading';
  import AppSwitchTab from '@/components/app-switch-tab';
  import AppSwitchTabPanel from '@/components/app-switch-tab/app-switch-tab-panel';
  import AppInput from '@/components/app-input';
  import AppInputLabel from '@/components/app-input/app-input-label';

  export default {
    name: 'app-calculator',
    data() {
      return {
        tabActiveId: 'calculator-grid',
        gridWidth: '',
        gridColumn: '',
        gridColumnMargin: '',
        gridMargin: '',
        gridShow: false,
        gridError: false,
      };
    },
    methods: {
      tabChange(tab) {
        this.tabActiveId = tab.id;
      },
      gridDraw() {
        let gridWidth = Number(this.gridWidth);
        const gridColumn = Number(this.gridColumn);
        if (gridWidth && gridColumn) {
          const integerReg = /^[0-9]*$/;
          const gridColumnMargin = Number(this.gridColumnMargin);
          const gridMargin = Number(this.gridMargin);
          let gridColumnWidth = (gridWidth - (gridMargin * 2) - ((gridColumn - 1) * gridColumnMargin)) / gridColumn;
          if (gridColumnWidth >= 1) {
            this.gridShow = true;
            this.gridError = false;
            while (integerReg.test(gridColumnWidth) === false) {
              gridWidth -= 1;
              gridColumnWidth = (gridWidth - (gridMargin * 2) - ((gridColumn - 1) * gridColumnMargin)) / gridColumn;
            }
            $('.js-grid-width').text(gridWidth);
            $('.js-grid-column-width').text(gridColumnWidth);
            const $gridColumnArea = $('.js-grid-column-area');
            const $gridColumnTemplate = `<div class="calculator-result__grid-column calculator-result__grid-column--column" aria-label="나눈넓이" style="width:${gridColumnWidth}px">${gridColumnWidth}</div>`;
            const $gridColumnMarginTemplate = `<div class="calculator-result__grid-column calculator-result__grid-column--column-margin" aria-label="사이간격" style="width:${gridColumnMargin}px">${gridColumnMargin}</div>`;
            $gridColumnArea.empty();
            for (let i = 1; i <= gridColumn; i += 1) {
              $gridColumnArea.append($gridColumnTemplate);
              if (i !== gridColumn && gridColumnMargin) $gridColumnArea.append($gridColumnMarginTemplate);
            }
            if (gridMargin) {
              const $gridMarginTtemplate = `<div class="calculator-result__grid-column calculator-result__grid-column--margin" aria-label="전체여백" style="width:${gridMargin}px">${gridMargin}</div>`;
              $gridColumnArea.prepend($gridMarginTtemplate);
              $gridColumnArea.append($gridMarginTtemplate);
            }
            return;
          }
          this.gridError = true;
        }
        this.gridShow = false;
      },
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