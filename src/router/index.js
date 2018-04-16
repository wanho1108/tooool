import Vue from 'vue';
import Router from 'vue-router';
import Index from '@/pages/index';
import About from '@/pages/about';
import WebFont from '@/pages/webfont';
import Calculator from '@/pages/calculator';
import Device from '@/pages/device';
import Contrast from '@/pages/contrast';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index,
    },
    {
      path: '/about',
      name: 'about',
      component: About,
      meta: {
        noLayout: true,
      },
    },
    {
      path: '/webfont/:id?',
      name: 'webfont',
      component: WebFont,
      props: true,
    },
    {
      path: '/calculator/:id?',
      name: 'calculator',
      component: Calculator,
      props: true,
    },
    {
      path: '/device',
      name: 'device',
      component: Device,
    },
    {
      path: '/contrast',
      name: 'contrast',
      component: Contrast,
    },
  ],
});