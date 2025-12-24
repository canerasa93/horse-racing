import Home from '@/pages/home/Home.vue';
import { RouteRecordRaw } from 'vue-router';

const ROUTES: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
];

export default ROUTES;
