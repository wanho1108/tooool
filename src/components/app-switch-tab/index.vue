<template>
  <div class="switch-tab">
    <div role="tablist" :class="['switch-tab__menu', `switch-tab__menu--${tabActiveDirection}`]">
      <div v-for="(tab, key) in tabs" :key="key" class="switch-tab__menu-item">
        <router-link
          role="tab"
          :to="{ params: {id: tab.id }}"
          :id="`switch-tab-${tab.id}-btn`"
          :aria-controls="`switch-tab-${tab.id}-panel`"
          :aria-selected="`${tab.isActive}`"
          :class="['switch-tab__menu-btn', {'is-active': tab.isActive}]"
          @click.native="tabChange(tab)">
          {{tab.label}}
        </router-link>
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
        tabMaxLength: 2,
        tabDirectionType: ['left', 'right'],
      };
    },
    methods: {
      tabChange(activeTab) {
        this.tabs.forEach((tab, index) => {
          this.tabs[index].isActive = tab.id === activeTab.id;
        });
      },
    },
    computed: {
      tabActiveDirection() {
        return this.tabDirectionType[this.tabs.findIndex(tab => tab.isActive === true)];
      },
    },
    mounted() {
      this.tabs = this.$children.filter(element => element.$options._componentTag === 'app-switch-tab-panel');
      /*
      if (this.tabs.length > this.tabMaxLength) {
        this.tabs.splice(this.tabMaxLength, this.tabs.length);
        this.$slots.default.splice(this.tabMaxLength, this.tabs.length);
      }
      */
      if (this.tabs.find(tab => tab.isActive === true) === undefined) {
        this.tabs[0].isActive = true;
      }
    },
  };
</script>