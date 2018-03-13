<template>
  <div class="header__util">
    <router-link to="/about" active-class="is-selected" class="header__util-anchor" @click.native="routerLink()">About</router-link>
  </div>
</template>

<script>
  export default {
    name: 'app-header-util',
    data() {
      return {
        to: null,
      };
    },
    methods: {
      routerLink() {
        if (this.to === null) this.to = '/';
        this.$router.push(this.to);
      },
    },
    watch: {
      $route(to, from) {
        if (to.path !== '/about' && from.path !== '/about') {
          this.to = '/about';
        } else {
          this.to = from.path;
        }
      },
    },
  };
</script>