<template>
  <div class="switch-tab">
    <div role="tablist" :class="['switch-tab__menu', 'switch-tab__menu--'+tabActiveDirection]">
      <div v-for="(tab, index) in tabs" :key="index" class="switch-tab__menu-item">
        <a :href="'#switch-tab-'+tab.id" role="tab" :aria-controls="tab.id" :aria-selected="tab.label === tabActiveId" :class="['switch-tab__menu-btn', { 'is-active' : tab.id === tabActiveId }]" @click="tabChange(tab)">{{tab.label}}</a>
      </div>
    </div>
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'app-switch-tab',
    model: {
      prop: 'tabActiveId',
    },
    props: {
      tabActiveId: {
        type: String,
      },
    },
    data() {
      return {
        tabs: [],
      };
    },
    methods: {
      tabChange(tab) {
        this.$emit('tab-change', tab);
      },
    },
    computed: {
      tabActiveDirection() {
        let direction = null;
        this.tabs.forEach((tab, index) => {
          if (tab.id === this.tabActiveId) {
            direction = index === 0 ? 'left' : 'right';
          }
        });
        return direction;
      },
    },
    created() {
      this.$children.splice(2, this.$children.length);
      this.$slots.default.splice(2, this.$slots.default.length);
      this.tabs = this.$children;
    },
  };
</script>