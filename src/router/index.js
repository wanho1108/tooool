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
      meta: {
        lnbShow: true,
        footerShow: true,
      },
    },
    {
      path: '/about',
      name: 'AppAbout',
      component: AppAbout,
      meta: {
        lnbShow: false,
        footerShow: false,
      },
    },
    {
      path: '/calculator',
      name: 'AppCalculator',
      component: AppCalculator,
      meta: {
        lnbShow: true,
        footerShow: true,
      },
    },
  ],
});