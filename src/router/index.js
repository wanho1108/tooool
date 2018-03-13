import Vue from 'vue';
import Router from 'vue-router';
import AppMain from '@/pages/app-main';
import AppAbout from '@/pages/app-about';
import AppWebFont from '@/pages/app-webfont';
import AppCalculator from '@/pages/app-calculator';
import AppDevice from '@/pages/app-device';
import AppContrast from '@/pages/app-contrast';

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
      path: '/webfont',
      name: 'AppWebFont',
      component: AppWebFont,
      meta: {
        lnbShow: true,
        footerShow: true,
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
    {
      path: '/device',
      name: 'AppDevice',
      component: AppDevice,
      meta: {
        lnbShow: true,
        footerShow: true,
      },
    },
    {
      path: '/contrast',
      name: 'AppContrast',
      component: AppContrast,
      meta: {
        lnbShow: true,
        footerShow: true,
      },
    },
  ],
});