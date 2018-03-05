<template>
    <div>
        <div class="app-switch-tab">
            <ul role="tablist" class="app-switch-tab__list">
                <li role="presentation" v-for="(tab, i) in tabList" :key="i" >
                    <a :href="'#'+tab.hash" role="tab" :aria-controls="tab.hash" :aria-selected="tab.active" @click="selectTab(i)">{{tab.title}}</a>
                </li>
            </ul>
        </div>
        <div class="app-swtich-panel">
            <slot></slot>
        </div>
    </div>
</template>

<script>
  export default {
    name: 'app-switch-tab',
    data() {
      return {
        tabList: [],
      };
    },
    methods: {
      selectTab(index) {
        this.tabList.forEach((_tab, _index) => {
          this.tabList[_index].active = _index === index;
          // eslint-disable-next-line
          console.log(_index === index);
        });
      },
    },
    created() {
      this.tabList = this.$children;
    },
  };
</script>