<template>
  <div class="switch-tab">
    <div role="tablist" :class="['switch-tab__menu', `switch-tab__menu--${tabActiveDirection}`]">
      <div v-for="(tab, key) in tabs" :key="key" class="switch-tab__menu-item">
        <a
          role="tab"
          :href="tab.href"
          :id="`switch-tab-${tab.id}-btn`"
          :aria-controls="`switch-tab-${tab.id}-panel`"
          :aria-selected="String(tab.isActive)"
          :class="['switch-tab__menu-btn', {'is-active': tab.isActive}]"
          @click="tabChange(tab)">
          {{tab.label}}
        </a>
      </div>
    </div>
    <div class="switch-tab__panel-area">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'app-switch-tab',
    data() {
      return {
        tabs: [],
        tabDirectionType: ['left', 'right'],
      };
    },
    methods: {
      tabChange(activeTab) {
        this.tabs.forEach((tab, index) => {
          this.tabs[index].isActive = tab.id === activeTab.id;
        });
      },
      findActiveTab(tab) {
        return tab.isActive === true;
      },
    },
    computed: {
      tabActiveDirection() {
        return this.tabDirectionType[this.tabs.findIndex(this.findActiveTab)];
      },
    },
    created() {
      this.$children.splice(2, this.$children.length);
      this.$slots.default.splice(2, this.$slots.default.length);
      this.tabs = this.$children;
    },
    mounted() {
      if (this.tabs.find(this.findActiveTab) === undefined) {
        this.tabs[0].isActive = true;
      }
    },
  };
</script>