<template>
  <div class="content" role="main">
    <div class="content__wrapper">
        <app-content-heading>calculator</app-content-heading>
        <app-switch-tab v-model="tabActiveId" @tab-change="tabChange">
          <app-switch-tab-panel label="Grid" id="calculator-grid">
            <div class="calculator-fieldset">
              <div class="calculator-fieldset__column">
                <label for="calculator-fieldset-input-width" class="calculator-fieldset__label">전체넓이</label>
                <input type="text" id="calculator-fieldset-input-width" maxlength="5" placeholder="1200" title="전체넓이(px)를 입력해주세요." class="calculator-fieldset__input calculator-fieldset__input--px">
                <span class="calculator-fieldset__unit" aria-hidden="true">px</span>
              </div>
              <div class="calculator-fieldset__column">
                <label for="calculator-fieldset-input-column" class="calculator-fieldset__label">나눌갯수</label>
                <input type="text" id="calculator-fieldset-input-column" maxlength="2" placeholder="12" title="나눌갯수(cols)를 입력해주세요." class="calculator-fieldset__input calculator-fieldset__input--cols">
                <span class="calculator-fieldset__unit" aria-hidden="true">cols</span>
              </div>
              <div class="calculator-fieldset__column">
                <label for="calculator-fieldset-input-column-margin" class="calculator-fieldset__label">사이간격</label>
                <input type="text" id="calculator-fieldset-input-column-margin" maxlength="5" placeholder="1200" title="사이간격(px)을 입력해주세요." class="calculator-fieldset__input calculator-fieldset__input--px">
                <span class="calculator-fieldset__unit" aria-hidden="true">px</span>
              </div>
              <div class="calculator-fieldset__column">
                <label for="calculator-fieldset-input-margin" class="calculator-fieldset__label">전체여백</label>
                <input type="text" id="calculator-fieldset-input-margin" maxlength="5" placeholder="1200" title="전체여백(px)을 입력해주세요." class="calculator-fieldset__input calculator-fieldset__input--px">
                <span class="calculator-fieldset__unit" aria-hidden="true">px</span>
              </div>
            </div>
            <div class="calculator-result">
              <div class="calculator-result__summary">
                <div class="calculator-result__summary-item">
                  <strong class="calculator-result__summary-label">전체넓이</strong>
                  <span class="calculator-result__summary-value">1400</span>
                  <span class="calculator-result__summary-unit">px</span>
                </div>
                <div class="calculator-result__summary-item">
                  <strong class="calculator-result__summary-label">나눈넓이</strong>
                  <span class="calculator-result__summary-value">335</span>
                  <span class="calculator-result__summary-unit">px</span>
                </div>
              </div>
              <div class="calculator-result__grid">
                <div class="calculator-result__grid-width" aria-label="전체넓이">1400</div>
                <div class="calculator-result__grid-column-area">
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
            .app-switch-tab-panel : Golden
          </app-switch-tab-panel>
        </app-switch-tab>
    </div>
  </div>
</template>

<script>
  import AppContentHeading from '@/components/app-content-heading';
  import AppSwitchTab from '@/components/app-switch-tab';
  import AppSwitchTabPanel from '@/components/app-switch-tab/app-switch-tab-panel';

  export default {
    name: 'app-calculator',
    data() {
      return {
        tabActiveId: 'calculator-grid',
      };
    },
    methods: {
      tabChange(tab) {
        this.tabActiveId = tab.id;
      },
    },
    components: {
      AppContentHeading,
      AppSwitchTab,
      AppSwitchTabPanel,
    },
  };
</script>