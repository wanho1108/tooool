<template>
  <div class="header__util">
    <router-link :to="to" :aria-selected="`${isActive}`" :class="['header__util-anchor', {'is-active': isActive}]" @click.native="activeUpdate">About</router-link>
  </div>
</template>

<script>
  export default {
    name: 'header-util',
    data() {
      return {
        path: '/about',
        pathPrev: '/',
        isActive: false,
      };
    },
    methods: {
      activeUpdate(e) {
        this.isActive = e.target.classList.contains('is-active') === false;
      },
    },
    computed: {
      to() {
        const pathNext = this.isActive ? this.pathPrev : this.path;
        return pathNext;
      },
    },
    created() {
      this.isActive = this.$route.path === this.path;
    },
    watch: {
      $route(to, from) {
        this.pathPrev = from.path;
      },
    },
  };
</script>