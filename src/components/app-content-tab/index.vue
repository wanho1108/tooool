<template>
  <div class="content-tab" aria-hidden="true" style="display:none">
    <a :href="'#' + tab" class="content-tab__anchor" v-for="(tab, key) in tabData" :key="key">{{tab}}</a>
  </div>
</template>

<script>
  export default {
    name: 'app-content-tab',
    props: ['tabData'],
  };
</script>