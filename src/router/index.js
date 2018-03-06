import Vue from 'vue';
import Router from 'vue-router';
import AppMain from '@/pages/app-main';
import AppAbout from '@/pages/app-about';
import AppCalculator from '@/pages/app-calculator';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'AppMain',
      component: AppMain,
    },
    {
      path: '/about',
      name: 'AppAbout',
      component: AppAbout,
    },
    {
      path: '/calculator',
      name: 'AppCalculator',
      component: AppCalculator,
    },
  ],
});