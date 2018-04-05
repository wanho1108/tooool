import Vue from 'vue';
import Router from 'vue-router';
import AppMain from '@/pages/app-main';
import AppAbout from '@/pages/app-about';
import AppWebFont from '@/pages/app-webfont';
import AppCalculator from '@/pages/app-calculator';
import AppCalculatorTest from '@/pages/app-calculator.bak';
import AppDevice from '@/pages/app-device';
import AppContrast from '@/pages/app-contrast';
import AppTest from '@/pages/app-test';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/test/:id?',
      name: 'test',
      component: AppTest,
      meta: {
        layoutShow: true,
      },
    },
    {
      path: '/',
      name: 'main',
      component: AppMain,
      meta: {
        layoutShow: true,
      },
    },
    {
      path: '/about',
      name: 'about',
      component: AppAbout,
      meta: {
        layoutShow: false,
      },
    },
    {
      path: '/webfont',
      name: 'webfont',
      component: AppWebFont,
      meta: {
        layoutShow: true,
      },
    },
    {
      path: '/calculator/:id?',
      name: 'calculator',
      component: AppCalculator,
      meta: {
        layoutShow: true,
      },
    },
    {
      path: '/calculator-test',
      name: 'calculatorTest',
      component: AppCalculatorTest,
      meta: {
        layoutShow: true,
      },
    },
    {
      path: '/device',
      name: 'device',
      component: AppDevice,
      meta: {
        layoutShow: true,
      },
    },
    {
      path: '/contrast',
      name: 'contrast',
      component: AppContrast,
      meta: {
        layoutShow: true,
      },
    },
  ],
});