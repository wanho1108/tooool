import Vue from 'vue';
import Router from 'vue-router';
import AppMain from '@/pages/app-main';
import AppAbout from '@/pages/app-about';
import AppWebFont from '@/pages/app-webfont';
import AppCalculator from '@/pages/app-calculator';
import AppDevice from '@/pages/app-device';
import AppContrast from '@/pages/app-contrast';
import AppTest from '@/pages/app-test';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/test',
      name: 'AppTest',
      component: AppTest,
      meta: {
        layoutShow: true,
      },
    },
    {
      path: '/',
      name: 'AppMain',
      component: AppMain,
      meta: {
        layoutShow: true,
      },
    },
    {
      path: '/about',
      name: 'AppAbout',
      component: AppAbout,
      meta: {
        layoutShow: false,
      },
    },
    {
      path: '/webfont',
      name: 'AppWebFont',
      component: AppWebFont,
      meta: {
        layoutShow: true,
      },
    },
    {
      path: '/calculator',
      name: 'AppCalculator',
      component: AppCalculator,
      meta: {
        layoutShow: true,
      },
    },
    {
      path: '/device',
      name: 'AppDevice',
      component: AppDevice,
      meta: {
        layoutShow: true,
      },
    },
    {
      path: '/contrast',
      name: 'AppContrast',
      component: AppContrast,
      meta: {
        layoutShow: true,
      },
    },
  ],
});