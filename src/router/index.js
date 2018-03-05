import Vue from 'vue';
import Router from 'vue-router';
import AppCalculator from '@/pages/app-calculator';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'AppCalculator',
      component: AppCalculator,
    },
  ],
});