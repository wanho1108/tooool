<template>
  <div class="calculator">
    <div class="calculator-fieldset">
      <div class="calculator-fieldset__column"></div>
      <div class="calculator-fieldset__column"></div>
    </div>
    <div class="calculator-result">
      <div class="calculator-result__summary">
        <div class="calculator-result__summary-item">
          <em class="calculator-result__summary-label">전체넓이</em>
          <span class="calculator-result__summary-value">1200</span>
          <span class="calculator-result__summary-unit">px</span>
        </div>
        <div class="calculator-result__summary-item">
          <em class="calculator-result__summary-label">나눈넓이</em>
          <span class="calculator-result__summary-value">400</span>
          <span class="calculator-result__summary-unit">px</span>
        </div>
      </div>
      <div class="calculator-result__visualization" aria-hidden="true">
        <div class="calculator-result__visualization-measurement">
          <span>1400</span>
        </div>
        <div class="calculator-result__visualization-column-area">
          <div class="calculator-result__visualization-column">
            <span>335</span>
          </div>
          <div class="calculator-result__visualization-column calculator-result__visualization-column--pale">
            <span>335</span>
          </div>
          <div class="calculator-result__visualization-column">
            <span>335</span>
          </div>
        </div>
      </div>
      <div class="message message--error">
        <em class="message__title">Oooops :-O</em>
        <p class="message__paragraph">입력된 숫자가 너어어어어무 커요~ 다시 입력해보세요!</p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'app-calculator-grid',
  };
</script>