<template>
  <div>
    <a
      v-for="(tab, key) in tabs"
      :key="key"
      :href="tab.hash"
      :class="{'is-selected': tab.isActive}"
      @click="selectTab(tab.id)">
      {{key}} 번 탭이며 id 는 {{tab.id}} 입니다.
    </a>
    <div style="display: none">
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
      };
    },
    methods: {
      selectTab(id) {
        this.tabs.forEach((tab, index) => {
          this.tabs[index].isActive = tab.id === id;
        });
      },
    },
    created() {
      this.tabs = this.$children;
    },
  };
</script>