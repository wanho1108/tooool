<template>
  <div class="content" role="main">
    <div class="content__wrapper">
        <app-content-heading>Calculator</app-content-heading>
        <app-switch-tab v-model="tabActiveId" @tab-change="tabChange">
          <app-switch-tab-panel label="Grid" id="calculator-grid">
            <div class="calculator-fieldset">
              <div class="calculator-fieldset__column">
                <label for="calculator-fieldset-input-width" class="calculator-fieldset__label">전체넓이</label>
                <input type="text" id="calculator-fieldset-input-width" maxlength="5" placeholder="1200" title="전체넓이(px)를 입력해주세요." class="calculator-fieldset__input calculator-fieldset__input--px" v-model="gridWidth" @keyup="gridDraw">
                <span class="calculator-fieldset__unit" aria-hidden="true">px</span>
              </div>
              <div class="calculator-fieldset__column">
                <label for="calculator-fieldset-input-column" class="calculator-fieldset__label">나눌갯수</label>
                <input type="text" id="calculator-fieldset-input-column" maxlength="2" placeholder="12" title="나눌갯수(cols)를 입력해주세요." class="calculator-fieldset__input calculator-fieldset__input--cols" v-model="gridColumn" @keyup="gridDraw">
                <span class="calculator-fieldset__unit" aria-hidden="true">cols</span>
              </div>
              <div class="calculator-fieldset__column">
                <label for="calculator-fieldset-input-column-margin" class="calculator-fieldset__label">사이간격</label>
                <input type="text" id="calculator-fieldset-input-column-margin" maxlength="5" placeholder="1200" title="사이간격(px)을 입력해주세요." class="calculator-fieldset__input calculator-fieldset__input--px" v-model="gridColumnMargin" @keyup="gridDraw">
                <span class="calculator-fieldset__unit" aria-hidden="true">px</span>
              </div>
              <div class="calculator-fieldset__column">
                <label for="calculator-fieldset-input-margin" class="calculator-fieldset__label">전체여백</label>
                <input type="text" id="calculator-fieldset-input-margin" maxlength="5" placeholder="1200" title="전체여백(px)을 입력해주세요." class="calculator-fieldset__input calculator-fieldset__input--px" v-model="gridMargin" @keyup="gridDraw">
                <span class="calculator-fieldset__unit" aria-hidden="true">px</span>
              </div>
            </div>
            <div class="calculator-result" :class="{ 'is-expanded': gridShow }">
              <div class="calculator-result__summary">
                <div class="calculator-result__summary-item">
                  <strong class="calculator-result__summary-label">전체넓이</strong>
                  <span class="calculator-result__summary-value js-grid-total-width">1400</span>
                  <span class="calculator-result__summary-unit">px</span>
                </div>
                <div class="calculator-result__summary-item">
                  <strong class="calculator-result__summary-label">나눈넓이</strong>
                  <span class="calculator-result__summary-value js-grid-column-width">335</span>
                  <span class="calculator-result__summary-unit">px</span>
                </div>
              </div>
              <div class="calculator-result__grid">
                <div class="calculator-result__grid-width js-grid-total-width" aria-label="전체넓이">1400</div>
                <div class="calculator-result__grid-column-area js-grid-column-area">
                  <div class="calculator-result__grid-column calculator-result__grid-column--margin" aria-label="전체여백">10</div>
                  <div class="calculator-result__grid-column calculator-result__grid-column--column" aria-label="나눈넓이">335</div>
                  <div class="calculator-result__grid-column calculator-result__grid-column--column-margin" aria-label="사이간격">20</div>
                  <div class="calculator-result__grid-column calculator-result__grid-column--column" aria-label="나눈넓이">335</div>
                  <div class="calculator-result__grid-column calculator-result__grid-column--column-margin" aria-label="사이간격">20</div>
                  <div class="calculator-result__grid-column calculator-result__grid-column--column" aria-label="나눈넓이">335</div>
                  <div class="calculator-result__grid-column calculator-result__grid-column--margin" aria-label="전체여백">10</div>
                </div>
              </div>
            </div>
          </app-switch-tab-panel>
          <app-switch-tab-panel label="Golden" id="calculator-golden">
          </app-switch-tab-panel>
        </app-switch-tab>
    </div>
  </div>
</template>

<script>
  import AppContentHeading from '@/components/app-content-heading';
  import AppSwitchTab from '@/components/app-switch-tab';
  import AppSwitchTabPanel from '@/components/app-switch-tab/app-switch-tab-panel';
  import AppInputUnit from '@/components/app-input/app-input-unit';

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
      };
    },
    methods: {
      tabChange(tab) {
        this.tabActiveId = tab.id;
        setTimeout(() => {
          const tabPanel = document.getElementById(`switch-tab-${tab.id}`);
          tabPanel.setAttribute('tabindex', '0');
          tabPanel.focus();
          tabPanel.setAttribute('tabindex', '-1');
        }, 600);
      },
      gridDraw() {
        let gridWidth = Number(this.gridWidth);
        const gridColumn = Number(this.gridColumn);
        if (gridWidth && gridColumn) {
          const integerReg = /^[0-9]*$/;
          const gridColumnMargin = Number(this.gridColumnMargin);
          const gridMargin = Number(this.gridMargin);
          let gridColumnWidth = (gridWidth - (gridMargin * 2) - ((gridColumn - 1) * gridColumnMargin)) / gridColumn;
          if (gridColumnWidth > 0) {
            this.gridShow = true;
            while (integerReg.test(gridColumnWidth) === false) {
              gridWidth -= 1;
              gridColumnWidth = (gridWidth - (gridMargin * 2) - ((gridColumn - 1) * gridColumnMargin)) / gridColumn;
            }
            $('.js-grid-total-width').text(gridWidth);
            $('.js-grid-column-width').text(gridColumnWidth);
            const $gridColumnArea = $('.js-grid-column-area');
            $gridColumnArea.empty();
            const $gridColumnTmp = `<div class="calculator-result__grid-column calculator-result__grid-column--column" aria-label="나눈넓이" style="width:${gridColumnWidth}px">${gridColumnWidth}</div>`;
            const $gridColumnMarginTmp = `<div class="calculator-result__grid-column calculator-result__grid-column--column-margin" aria-label="사이간격" style="width:${gridColumnMargin}px">${gridColumnMargin}</div>`;
            for (let i = 1; i <= gridColumn; i += 1) {
              $gridColumnArea.append($gridColumnTmp);
              if (i !== gridColumn && gridColumnMargin) $gridColumnArea.append($gridColumnMarginTmp);
            }
            if (gridMargin) {
              const $gridMarginTmp = `<div class="calculator-result__grid-column calculator-result__grid-column--margin" aria-label="전체여백" style="width:${gridMargin}px">${gridMargin}</div>`;
              $gridColumnArea.prepend($gridMarginTmp);
              $gridColumnArea.append($gridMarginTmp);
            }
          }
        } else {
          this.gridShow = false;
        }
      },
    },
    components: {
      AppContentHeading,
      AppSwitchTab,
      AppSwitchTabPanel,
      AppInputUnit,
    },
  };
</script>