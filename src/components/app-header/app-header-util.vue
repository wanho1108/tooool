<template>
  <div class="header__util">
    <router-link to="/about" active-class="is-selected" :aria-selected="isAcitve" class="header__util-anchor" @click.native="routerLink">About</router-link>
  </div>
</template>

<script>
  export default {
    name: 'app-header-util',
    data() {
      return {
        to: '/',
        isAcitve: false,
      };
    },
    methods: {
      routerLink(e) {
        if ($(e.target).hasClass('is-selected')) {
          this.$router.push(this.to);
          this.isAcitve = false;
        } else {
          this.isAcitve = true;
        }
      },
    },
    mounted() {
      this.isAcitve = $(this.$el).find('.header__util-anchor').hasClass('is-selected');
    },
    watch: {
      $route(to, from) {
        this.to = from.path;
      },
    },
  };
</script>