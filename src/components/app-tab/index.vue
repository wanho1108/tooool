<template>
  <div>
    <div class="tab-menu">
      <a
        v-for="(tab, key) in tabs"
        :key="key"
        :href="tab.href"
        :class="{'is-selected': tab.isActive}"
        @click="tabChange(tab)">
        {{tab.name}}
      </a>
    </div>
    <div class="tab-panel">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'app-tab',
    data() {
      return {
        tabs: [],
      };
    },
    methods: {
      tabChange(selectTab) {
        this.tabs.forEach((tab, index) => {
          this.tabs[index].isActive = tab.id === selectTab.id;
        });
      },
    },
    created() {
      this.tabs = this.$children;
    },
  };
</script>

<style>
  .tab-menu a {
    display: inline-block;
    font-size: 18px;
    padding: 5px 30px;
    border: 1px solid #fff;
    margin-right: 50px;
    vertical-align: top;
  }
  .tab-menu a.is-selected {
    background-color: #fff;
    color: #3061fe;
  }
  .tab-panel {
    margin-top: 50px;
    font-size: 18px;
  }
</style>