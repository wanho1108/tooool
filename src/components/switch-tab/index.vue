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
    name: 'switch-tab',
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
        let direction = this.tabDirectionType[0];
        this.tabs.forEach((tab, index) => {
          if (tab.isActive) {
            direction = this.tabDirectionType[index];
          }
        });
        return direction;
      },
    },
    mounted() {
      this.tabs = this.$children.filter((element) => {
        return element.$options._componentTag === 'switch-tab-panel';
      });
      // eslint-disable-next-line arrow-body-style
      if (this.tabs.filter(tab => tab.isActive === true).length === 0) {
        this.tabs[0].isActive = true;
      }
    },
  };
</script>